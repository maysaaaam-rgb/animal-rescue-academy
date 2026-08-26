/**
 * ANIMAL RESCUE ACADEMY - UI Manager & Visual Presentation Engine
 * Handles views, canvas confetti celebrations, modals, map rendering,
 * and teacher analytics.
 */

class UIManager {
  constructor() {
    this.currentScreen = "welcome-screen";
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.confettiParticles = [];
    this.confettiAnimationId = null;

    this.initConfetti();
    this.setupSpeechListeners();
  }

  showScreen(screenId) {
    window.gameAudio.cancelSpeech();
    this.currentScreen = screenId;

    document.querySelectorAll(".screen-view").forEach(el => {
      el.classList.remove("active-screen");
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active-screen");
    }

    this.updateTopBar();

    // Context-specific updates
    if (screenId === "map-screen") {
      this.renderMissionMap();
    } else if (screenId === "explore-screen") {
      this.renderExploreSanctuary();
    } else if (screenId === "smart-review-screen") {
      this.renderSmartReviewOverview();
    } else if (screenId === "teacher-screen") {
      this.renderTeacherDashboard();
    }
  }

  updateTopBar() {
    const starCount = document.getElementById("header-star-count");
    const rescueCount = document.getElementById("header-rescue-count");
    const muteBtn = document.getElementById("btn-mute-toggle");

    if (starCount) starCount.textContent = window.masteryEngine.totalStars;
    if (rescueCount) rescueCount.textContent = window.masteryEngine.totalRescues;
    if (muteBtn) {
      muteBtn.innerHTML = window.gameAudio.isMuted() ? "<span>🔇</span>" : "<span>🔊</span>";
      muteBtn.setAttribute("aria-label", window.gameAudio.isMuted() ? "Unmute sound" : "Mute sound");
    }
  }

  setupSpeechListeners() {
    const bubble = document.getElementById("speech-caption-bubble");
    const textEl = document.getElementById("speech-caption-text");

    window.addEventListener("speech-started", (e) => {
      if (bubble && textEl && e.detail && e.detail.text) {
        textEl.textContent = e.detail.text;
        bubble.classList.add("caption-visible");
      }
    });

    window.addEventListener("speech-ended", () => {
      if (bubble) {
        setTimeout(() => bubble.classList.remove("caption-visible"), 1000);
      }
    });

    window.addEventListener("badge-unlocked", (e) => {
      if (e.detail && e.detail.badgeId) {
        const badge = BADGES_CONFIG.find(b => b.id === e.detail.badgeId);
        if (badge) {
          this.showBadgeModal(badge);
        }
      }
    });
  }

  /* =========================================================
   * MISSION MAP RENDERER
   * ========================================================= */

  renderMissionMap() {
    const container = document.getElementById("map-nodes-container");
    if (!container) return;

    const unlocked = window.masteryEngine.unlockedMissions;
    const scores = window.masteryEngine.missionScores;

    container.innerHTML = MISSIONS_CONFIG.map((mission, index) => {
      const isUnlocked = unlocked.includes(mission.id);
      const missionScore = scores[mission.id] || { stars: 0, completed: false };
      const isCompleted = missionScore.completed;

      return `
        <div class="map-node-card ${isUnlocked ? "node-unlocked" : "node-locked"} ${isCompleted ? "node-completed" : ""}"
             data-mission-id="${mission.id}" 
             tabindex="${isUnlocked ? "0" : "-1"}" 
             role="button"
             aria-label="Mission ${mission.id}: ${mission.title}">
          
          <div class="node-badge-number">Mission ${mission.id}</div>

          <div class="node-icon-wrapper">
            <span class="node-icon">${mission.icon}</span>
            ${!isUnlocked ? '<span class="lock-overlay">🔒</span>' : ''}
          </div>

          <div class="node-details">
            <h3 class="node-title">${mission.title}</h3>
            <div class="node-subtitle">${mission.subtitle}</div>
            
            <div class="node-star-rating">
              <span class="star ${missionScore.stars >= 1 ? 'star-filled' : ''}">⭐</span>
              <span class="star ${missionScore.stars >= 2 ? 'star-filled' : ''}">⭐</span>
              <span class="star ${missionScore.stars >= 3 ? 'star-filled' : ''}">⭐</span>
            </div>
          </div>

          <div class="node-action">
            ${isUnlocked 
              ? `<button class="btn-node-play ${isCompleted ? 'btn-replay' : 'btn-play'}">
                   ${isCompleted ? "Play Again ↺" : "Start Mission ➔"}
                 </button>`
              : `<span class="locked-text">Locked 🔒</span>`
            }
          </div>
        </div>
      `;
    }).join("");

    // Bind click events
    container.querySelectorAll(".node-unlocked").forEach(card => {
      card.addEventListener("click", () => {
        window.gameAudio.playPop();
        const missionId = parseInt(card.getAttribute("data-mission-id"), 10);
        window.missionManager.startMission(missionId);
      });
    });
  }

  updateMissionHeader(config) {
    const titleEl = document.getElementById("arena-mission-title");
    const subEl = document.getElementById("arena-mission-sub");
    if (titleEl) titleEl.textContent = `Mission ${config.id}: ${config.title}`;
    if (subEl) subEl.textContent = config.subtitle;
  }

  updateProgressBar(current, total) {
    const bar = document.getElementById("arena-progress-fill");
    const text = document.getElementById("arena-progress-text");
    const percent = Math.round((current / total) * 100);
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.textContent = `${current} / ${total} Rescued`;
  }

  /* =========================================================
   * FREE EXPLORE SANCTUARY (Encyclopedia Mode)
   * ========================================================= */

  renderExploreSanctuary() {
    const container = document.getElementById("explore-grid-container");
    if (!container) return;

    container.innerHTML = VOCABULARY_DATA.map(animal => {
      const isUnlocked = window.masteryEngine.unlockedAnimals.includes(animal.id);
      const stats = window.masteryEngine.vocabStats[animal.id];
      const mastery = stats ? stats.masteryLevel : "NEW";

      return `
        <div class="sanctuary-card ${isUnlocked ? 'card-unlocked' : 'card-locked'} animate-pop" 
             data-animal-id="${animal.id}" 
             tabindex="0" 
             role="button">
          
          <div class="card-mastery-tag mastery-${mastery.toLowerCase()}">${mastery}</div>
          
          <div class="sanctuary-svg-wrapper">
            ${animal.svg}
          </div>

          <div class="sanctuary-card-body">
            <h3 class="animal-name">${animal.name}</h3>
            <div class="animal-phonetic">${animal.phonetic}</div>
            
            <div class="sanctuary-sentence">"${animal.modelSentence}"</div>
            
            <div class="sanctuary-fun-fact">
              <span class="fact-icon">💡</span>
              <span class="fact-text">${animal.funFact}</span>
            </div>

            <button class="btn-sanctuary-audio" data-animal-id="${animal.id}">
              <span>🔊 Listen to ${animal.name}</span>
            </button>
          </div>
        </div>
      `;
    }).join("");

    // Audio click handlers
    container.querySelectorAll(".btn-sanctuary-audio, .sanctuary-card").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-animal-id");
        const animal = VOCABULARY_DATA.find(a => a.id === id);
        if (animal) {
          window.gameAudio.playPop();
          window.gameAudio.speakWord(animal.name, () => {
            setTimeout(() => {
              window.gameAudio.speakSentence(animal.modelSentence);
            }, 300);
          });
        }
      });
    });
  }

  /* =========================================================
   * SMART REVIEW OVERVIEW
   * ========================================================= */

  renderSmartReviewOverview() {
    const listContainer = document.getElementById("review-focus-list");
    const startReviewBtn = document.getElementById("btn-start-smart-review");

    const struggling = window.masteryEngine.getWordsNeedingPractice(4);
    const strongest = window.masteryEngine.getStrongestWord();

    if (listContainer) {
      listContainer.innerHTML = struggling.map(animal => `
        <div class="review-focus-item">
          <div class="mini-svg">${animal.svg}</div>
          <div class="focus-details">
            <h4>${animal.name}</h4>
            <p>${animal.modelSentence}</p>
          </div>
          <span class="practice-tag">Needs Practice</span>
        </div>
      `).join("");
    }

    const strongestBanner = document.getElementById("strongest-animal-banner");
    if (strongestBanner && strongest) {
      strongestBanner.innerHTML = `
        <div class="strong-animal-card">
          <span class="star-badge">⭐ Star Animal</span>
          <div class="strong-svg">${strongest.svg}</div>
          <div class="strong-name">${strongest.name}</div>
          <div class="strong-desc">Your highest accuracy animal!</div>
        </div>
      `;
    }

    if (startReviewBtn) {
      startReviewBtn.onclick = () => {
        window.gameAudio.playPop();
        window.missionManager.startMission(8);
      };
    }
  }

  /* =========================================================
   * TEACHER & PARENT DASHBOARD
   * ========================================================= */

  renderTeacherDashboard() {
    const stats = window.masteryEngine.vocabStats;
    const breakdown = window.masteryEngine.getMasteryBreakdown();
    const skills = window.masteryEngine.getSkillAccuracy();

    // Summary counts
    const masteredCountEl = document.getElementById("teacher-mastered-count");
    const learningCountEl = document.getElementById("teacher-learning-count");
    const totalRescuesEl = document.getElementById("teacher-total-rescues");

    if (masteredCountEl) masteredCountEl.textContent = breakdown.MASTERED;
    if (learningCountEl) learningCountEl.textContent = breakdown.LEARNING + breakdown.PRACTICING;
    if (totalRescuesEl) totalRescuesEl.textContent = window.masteryEngine.totalRescues;

    // Skill Progress Bars
    const listeningBar = document.getElementById("teacher-listening-bar");
    const listeningPct = document.getElementById("teacher-listening-pct");
    if (listeningBar && listeningPct) {
      listeningBar.style.width = `${skills.listening}%`;
      listeningPct.textContent = `${skills.listening}% (${skills.listeningAttempts} attempts)`;
    }

    const matchingBar = document.getElementById("teacher-matching-bar");
    const matchingPct = document.getElementById("teacher-matching-pct");
    if (matchingBar && matchingPct) {
      matchingBar.style.width = `${skills.matching}%`;
      matchingPct.textContent = `${skills.matching}% (${skills.matchingAttempts} attempts)`;
    }

    const sentenceBar = document.getElementById("teacher-sentence-bar");
    const sentencePct = document.getElementById("teacher-sentence-pct");
    if (sentenceBar && sentencePct) {
      sentenceBar.style.width = `${skills.sentence}%`;
      sentencePct.textContent = `${skills.sentence}% (${skills.sentenceAttempts} attempts)`;
    }

    // Detailed Word Table
    const tableBody = document.getElementById("teacher-vocab-tbody");
    if (tableBody) {
      tableBody.innerHTML = VOCABULARY_DATA.map(animal => {
        const s = stats[animal.id] || {};
        const total = (s.correctAnswers || 0) + (s.incorrectAnswers || 0);
        const acc = total > 0 ? Math.round((s.correctAnswers / total) * 100) : 0;
        const level = s.masteryLevel || "NEW";

        return `
          <tr>
            <td>
              <div class="table-animal-cell">
                <span class="cell-svg">${animal.svg}</span>
                <strong>${animal.name}</strong>
              </div>
            </td>
            <td><span class="badge-status badge-${level.toLowerCase()}">${level}</span></td>
            <td>${s.exposures || 0}</td>
            <td><strong class="text-green">${s.correctAnswers || 0}</strong></td>
            <td><span class="text-red">${s.incorrectAnswers || 0}</span></td>
            <td><strong>${acc}%</strong></td>
          </tr>
        `;
      }).join("");
    }
  }

  /* =========================================================
   * MODALS & POPUPS
   * ========================================================= */

  showMissionCompleteModal(missionId) {
    const modal = document.getElementById("mission-complete-modal");
    const titleEl = document.getElementById("complete-modal-title");
    const praiseEl = document.getElementById("complete-modal-praise");
    const strongEl = document.getElementById("complete-modal-strong");
    const nextBtn = document.getElementById("btn-complete-next");
    const mapBtn = document.getElementById("btn-complete-map");

    const mission = MISSIONS_CONFIG.find(m => m.id === missionId);
    const strongest = window.masteryEngine.getStrongestWord();

    if (titleEl) titleEl.textContent = `Mission ${missionId} Complete! 🎉`;
    if (praiseEl) praiseEl.textContent = "You rescued all the animals with amazing English skills!";
    if (strongEl && strongest) {
      strongEl.innerHTML = `Strongest Animal: <strong>${strongest.name}</strong> 🐾`;
    }

    modal.classList.add("modal-active");
    this.launchConfetti();

    if (nextBtn) {
      nextBtn.onclick = () => {
        modal.classList.remove("modal-active");
        if (missionId < MISSIONS_CONFIG.length) {
          window.missionManager.startMission(missionId + 1);
        } else {
          this.showScreen("map-screen");
        }
      };
    }

    if (mapBtn) {
      mapBtn.onclick = () => {
        modal.classList.remove("modal-active");
        this.showScreen("map-screen");
      };
    }
  }

  showBadgeModal(badge) {
    window.gameAudio.playBadgeChime();
    const modal = document.getElementById("badge-earned-modal");
    const iconEl = document.getElementById("badge-modal-icon");
    const titleEl = document.getElementById("badge-modal-title");
    const descEl = document.getElementById("badge-modal-desc");
    const okBtn = document.getElementById("btn-badge-ok");

    if (iconEl) iconEl.textContent = badge.icon;
    if (titleEl) titleEl.textContent = badge.title;
    if (descEl) descEl.textContent = badge.desc;

    modal.classList.add("modal-active");
    this.launchConfetti();

    if (okBtn) {
      okBtn.onclick = () => {
        modal.classList.remove("modal-active");
      };
    }
  }

  showCertificateModal() {
    const modal = document.getElementById("certificate-modal");
    const dateEl = document.getElementById("cert-date");
    const rescuesEl = document.getElementById("cert-rescues");
    const starsEl = document.getElementById("cert-stars");
    const closeBtn = document.getElementById("btn-cert-close");
    const printBtn = document.getElementById("btn-cert-print");

    if (dateEl) dateEl.textContent = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    if (rescuesEl) rescuesEl.textContent = `${window.masteryEngine.totalRescues} Animals Rescued`;
    if (starsEl) starsEl.textContent = `${window.masteryEngine.totalStars} Stars Earned`;

    modal.classList.add("modal-active");

    if (closeBtn) {
      closeBtn.onclick = () => modal.classList.remove("modal-active");
    }
    if (printBtn) {
      printBtn.onclick = () => window.print();
    }
  }

  /* =========================================================
   * CANVAS CONFETTI EFFECT
   * ========================================================= */

  initConfetti() {
    this.confettiCanvas = document.getElementById("confetti-canvas");
    if (this.confettiCanvas && typeof this.confettiCanvas.getContext === "function") {
      this.confettiCtx = this.confettiCanvas.getContext("2d");
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }
  }

  resizeCanvas() {
    if (this.confettiCanvas) {
      this.confettiCanvas.width = window.innerWidth;
      this.confettiCanvas.height = window.innerHeight;
    }
  }

  launchConfetti() {
    if (!this.confettiCtx) return;

    this.confettiParticles = [];
    const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#ef4444", "#fcd34d"];

    for (let i = 0; i < 90; i++) {
      this.confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() * 200 - 100),
        y: window.innerHeight / 2 - 50,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 16,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    if (this.confettiAnimationId) cancelAnimationFrame(this.confettiAnimationId);
    this.animateConfetti();
  }

  animateConfetti() {
    if (!this.confettiCtx) return;
    this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);

    let activeCount = 0;
    this.confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.opacity -= 0.008;

      if (p.opacity > 0) {
        activeCount++;
        this.confettiCtx.save();
        this.confettiCtx.translate(p.x, p.y);
        this.confettiCtx.rotate((p.rotation * Math.PI) / 180);
        this.confettiCtx.globalAlpha = p.opacity;
        this.confettiCtx.fillStyle = p.color;
        this.confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.confettiCtx.restore();
      }
    });

    if (activeCount > 0) {
      this.confettiAnimationId = requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
    }
  }
}

// Global singleton UI manager instance
window.uiManager = new UIManager();
