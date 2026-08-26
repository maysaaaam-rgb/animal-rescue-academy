/**
 * ANIMAL RESCUE ACADEMY - Mastery & Adaptive Learning Engine
 * Implements spaced-repetition logic, skill accuracy analytics,
 * dynamic mastery states, and local persistence for ESL learners.
 */

const STORAGE_KEY = "ARA_SAVE_DATA_v1";

class MasteryEngine {
  constructor() {
    this.vocabStats = {};
    this.unlockedMissions = [1];
    this.missionScores = {};
    this.unlockedBadges = [];
    this.unlockedAnimals = ["lion", "elephant", "monkey", "rabbit"];
    this.totalStars = 0;
    this.totalRescues = 0;

    this.initVocabulary();
    this.loadFromStorage();
  }

  initVocabulary() {
    VOCABULARY_DATA.forEach(animal => {
      if (!this.vocabStats[animal.id]) {
        this.vocabStats[animal.id] = {
          id: animal.id,
          exposures: 0,
          correctAnswers: 0,
          incorrectAnswers: 0,
          listeningCorrect: 0,
          listeningTotal: 0,
          matchingCorrect: 0,
          matchingTotal: 0,
          sentenceCorrect: 0,
          sentenceTotal: 0,
          consecutiveCorrect: 0,
          lastSeen: null,
          masteryLevel: "NEW" // NEW, LEARNING, PRACTICING, MASTERED
        };
      }
    });
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.vocabStats) {
          Object.keys(parsed.vocabStats).forEach(id => {
            if (this.vocabStats[id]) {
              this.vocabStats[id] = { ...this.vocabStats[id], ...parsed.vocabStats[id] };
            }
          });
        }
        if (Array.isArray(parsed.unlockedMissions)) {
          this.unlockedMissions = parsed.unlockedMissions;
        }
        if (parsed.missionScores) {
          this.missionScores = parsed.missionScores;
        }
        if (Array.isArray(parsed.unlockedBadges)) {
          this.unlockedBadges = parsed.unlockedBadges;
        }
        if (Array.isArray(parsed.unlockedAnimals)) {
          this.unlockedAnimals = parsed.unlockedAnimals;
        }
        if (typeof parsed.totalStars === "number") {
          this.totalStars = parsed.totalStars;
        }
        if (typeof parsed.totalRescues === "number") {
          this.totalRescues = parsed.totalRescues;
        }
      }
    } catch (e) {
      console.error("Could not load saved data from storage:", e);
    }
  }

  saveToStorage() {
    try {
      const data = {
        vocabStats: this.vocabStats,
        unlockedMissions: this.unlockedMissions,
        missionScores: this.missionScores,
        unlockedBadges: this.unlockedBadges,
        unlockedAnimals: this.unlockedAnimals,
        totalStars: this.totalStars,
        totalRescues: this.totalRescues
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Could not save data to storage:", e);
    }
  }

  /**
   * Log an educational attempt for an animal word
   * @param {string} wordId - ID of animal
   * @param {'exposure'|'listening'|'matching'|'sentence'|'detective'} skillType
   * @param {boolean} isCorrect - whether answer was correct
   */
  recordAttempt(wordId, skillType, isCorrect) {
    const stats = this.vocabStats[wordId];
    if (!stats) return;

    stats.exposures += 1;
    stats.lastSeen = Date.now();

    // Auto unlock animal for sanctuary if exposed
    if (!this.unlockedAnimals.includes(wordId)) {
      this.unlockedAnimals.push(wordId);
    }

    if (skillType === "exposure") {
      // Just viewing/listening in meet mode
      this.updateMasteryLevel(wordId);
      this.saveToStorage();
      return;
    }

    if (isCorrect) {
      stats.correctAnswers += 1;
      stats.consecutiveCorrect += 1;
      this.totalRescues += 1;

      if (skillType === "listening") {
        stats.listeningCorrect += 1;
        stats.listeningTotal += 1;
      } else if (skillType === "matching" || skillType === "detective") {
        stats.matchingCorrect += 1;
        stats.matchingTotal += 1;
      } else if (skillType === "sentence") {
        stats.sentenceCorrect += 1;
        stats.sentenceTotal += 1;
      }
    } else {
      stats.incorrectAnswers += 1;
      stats.consecutiveCorrect = 0;

      if (skillType === "listening") {
        stats.listeningTotal += 1;
      } else if (skillType === "matching" || skillType === "detective") {
        stats.matchingTotal += 1;
      } else if (skillType === "sentence") {
        stats.sentenceTotal += 1;
      }
    }

    this.updateMasteryLevel(wordId);
    this.checkBadgeCriteria();
    this.saveToStorage();
  }

  /**
   * Recalculate word mastery level based on sound pedagogical criteria
   */
  updateMasteryLevel(wordId) {
    const s = this.vocabStats[wordId];
    if (!s) return;

    const totalTests = s.correctAnswers + s.incorrectAnswers;
    if (s.exposures === 0 && totalTests === 0) {
      s.masteryLevel = "NEW";
      return;
    }

    if (totalTests < 3) {
      s.masteryLevel = "LEARNING";
      return;
    }

    const accuracy = s.correctAnswers / totalTests;

    if (totalTests >= 4 && accuracy >= 0.85 && s.consecutiveCorrect >= 2) {
      s.masteryLevel = "MASTERED";
    } else if (accuracy >= 0.6) {
      s.masteryLevel = "PRACTICING";
    } else {
      s.masteryLevel = "LEARNING";
    }
  }

  /**
   * Complete a mission, calculate earned stars, and unlock the next mission
   */
  completeMission(missionId, scoreDetails = {}) {
    const stars = Math.min(3, Math.max(1, scoreDetails.stars || 3));
    
    // Save mission score
    const prev = this.missionScores[missionId] || { stars: 0, completed: false, attempts: 0 };
    const starDelta = Math.max(0, stars - prev.stars);
    this.totalStars += starDelta;

    this.missionScores[missionId] = {
      stars: Math.max(stars, prev.stars),
      completed: true,
      attempts: (prev.attempts || 0) + 1,
      lastCompleted: Date.now()
    };

    // Unlock next mission
    const nextMissionId = missionId + 1;
    if (nextMissionId <= MISSIONS_CONFIG.length && !this.unlockedMissions.includes(nextMissionId)) {
      this.unlockedMissions.push(nextMissionId);
    }

    // Unlock all animals as missions advance
    if (missionId >= 2) {
      VOCABULARY_DATA.forEach(a => {
        if (!this.unlockedAnimals.includes(a.id)) {
          this.unlockedAnimals.push(a.id);
        }
      });
    }

    // Check specific mission badge unlock
    const missionConfig = MISSIONS_CONFIG.find(m => m.id === missionId);
    if (missionConfig && missionConfig.badgeUnlock) {
      this.unlockBadge(missionConfig.badgeUnlock);
    }

    this.checkBadgeCriteria();
    this.saveToStorage();
  }

  unlockBadge(badgeId) {
    if (!this.unlockedBadges.includes(badgeId)) {
      this.unlockedBadges.push(badgeId);
      this.saveToStorage();
      window.dispatchEvent(new CustomEvent("badge-unlocked", { detail: { badgeId } }));
      return true;
    }
    return false;
  }

  checkBadgeCriteria() {
    // Check if user has mastered at least 3 words
    const masteredCount = Object.values(this.vocabStats).filter(s => s.masteryLevel === "MASTERED").length;
    if (masteredCount >= 3) {
      this.unlockBadge("vocab_star");
    }

    // Check if user completed sentence mission
    if (this.missionScores[6] && this.missionScores[6].completed) {
      this.unlockBadge("sentence_builder");
    }

    // Check if user completed detective mission
    if (this.missionScores[5] && this.missionScores[5].completed) {
      this.unlockBadge("animal_expert");
    }

    // Check all missions completed
    if (this.unlockedMissions.includes(8) && this.missionScores[7] && this.missionScores[7].completed) {
      this.unlockBadge("rescue_master");
    }
  }

  /**
   * Get words that need practice for spaced remediation
   */
  getWordsNeedingPractice(limit = 4) {
    const list = Object.values(this.vocabStats).map(stat => {
      const animal = VOCABULARY_DATA.find(a => a.id === stat.id);
      const totalTests = stat.correctAnswers + stat.incorrectAnswers;
      const accuracy = totalTests > 0 ? stat.correctAnswers / totalTests : 0.5;
      return {
        animal,
        stat,
        accuracy,
        needsReviewScore: (stat.incorrectAnswers * 3) - (stat.correctAnswers) + (stat.masteryLevel === "LEARNING" ? 5 : 0)
      };
    });

    // Sort by greatest need
    list.sort((a, b) => b.needsReviewScore - a.needsReviewScore || a.accuracy - b.accuracy);

    // Return animal objects
    return list.slice(0, limit).map(item => item.animal);
  }

  getStrongestWord() {
    let best = null;
    let maxCorrect = -1;

    Object.values(this.vocabStats).forEach(s => {
      if (s.correctAnswers > maxCorrect) {
        maxCorrect = s.correctAnswers;
        best = s.id;
      }
    });

    return VOCABULARY_DATA.find(a => a.id === best) || VOCABULARY_DATA[0];
  }

  getMasteryBreakdown() {
    const breakdown = { NEW: 0, LEARNING: 0, PRACTICING: 0, MASTERED: 0 };
    Object.values(this.vocabStats).forEach(s => {
      breakdown[s.masteryLevel] = (breakdown[s.masteryLevel] || 0) + 1;
    });
    return breakdown;
  }

  getSkillAccuracy() {
    let listeningC = 0, listeningT = 0;
    let matchingC = 0, matchingT = 0;
    let sentenceC = 0, sentenceT = 0;
    let totalC = 0, totalT = 0;

    Object.values(this.vocabStats).forEach(s => {
      listeningC += s.listeningCorrect;
      listeningT += s.listeningTotal;
      matchingC += s.matchingCorrect;
      matchingT += s.matchingTotal;
      sentenceC += s.sentenceCorrect;
      sentenceT += s.sentenceTotal;
      totalC += s.correctAnswers;
      totalT += (s.correctAnswers + s.incorrectAnswers);
    });

    return {
      listening: listeningT > 0 ? Math.round((listeningC / listeningT) * 100) : 100,
      listeningAttempts: listeningT,
      matching: matchingT > 0 ? Math.round((matchingC / matchingT) * 100) : 100,
      matchingAttempts: matchingT,
      sentence: sentenceT > 0 ? Math.round((sentenceC / sentenceT) * 100) : 100,
      sentenceAttempts: sentenceT,
      overall: totalT > 0 ? Math.round((totalC / totalT) * 100) : 100,
      totalTests: totalT
    };
  }

  unlockAllMissions() {
    this.unlockedMissions = [1, 2, 3, 4, 5, 6, 7, 8];
    this.unlockedAnimals = VOCABULARY_DATA.map(a => a.id);
    this.saveToStorage();
  }

  resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    this.vocabStats = {};
    this.unlockedMissions = [1];
    this.missionScores = {};
    this.unlockedBadges = [];
    this.unlockedAnimals = ["lion", "elephant", "monkey", "rabbit"];
    this.totalStars = 0;
    this.totalRescues = 0;
    this.initVocabulary();
    this.saveToStorage();
  }
}

// Global singleton mastery engine instance
window.masteryEngine = new MasteryEngine();
