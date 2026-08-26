/**
 * ANIMAL RESCUE ACADEMY - Mission Controllers & Renderers
 * 8 Scaffolded ELT missions, Free Explore Sanctuary, and Adaptive Review
 */

class MissionManager {
  constructor() {
    this.currentMissionId = null;
    this.currentStep = 0;
    this.totalSteps = 0;
    this.mistakesThisStep = 0;
    this.stepData = null;
    this.selectedElement = null; // For tap-to-select mode
    this.missionPool = [];
  }

  /* =========================================================
   * UTILITY HELPERS
   * ========================================================= */

  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  getRandomDistractors(targetAnimal, count = 2) {
    const others = VOCABULARY_DATA.filter(a => a.id !== targetAnimal.id);
    const shuffled = this.shuffleArray(others);
    return shuffled.slice(0, count);
  }

  getRandomPhrase(type) {
    const list = ENCOURAGING_PHRASES[type] || ENCOURAGING_PHRASES.success;
    return list[Math.floor(Math.random() * list.length)];
  }

  /* =========================================================
   * MISSION LAUNCHER & ROUTING
   * ========================================================= */

  startMission(missionId) {
    this.currentMissionId = missionId;
    this.currentStep = 0;
    this.mistakesThisStep = 0;
    this.selectedElement = null;

    const config = MISSIONS_CONFIG.find(m => m.id === missionId);
    if (!config) return;

    window.uiManager.showScreen("mission-arena");
    window.uiManager.updateMissionHeader(config);

    switch (missionId) {
      case 1:
        this.initMission1();
        break;
      case 2:
        this.initMission2();
        break;
      case 3:
        this.initMission3();
        break;
      case 4:
        this.initMission4();
        break;
      case 5:
        this.initMission5();
        break;
      case 6:
        this.initMission6();
        break;
      case 7:
        this.initMission7();
        break;
      case 8:
        this.initMission8();
        break;
      default:
        this.initMission1();
    }
  }

  /* =========================================================
   * MISSION 1: MEET THE ANIMALS (Recognition & Pronunciation)
   * ========================================================= */

  initMission1() {
    // Introduce first 4 animals
    this.missionPool = VOCABULARY_DATA.slice(0, 4);
    this.totalSteps = this.missionPool.length;
    this.renderMission1Step();
  }

  renderMission1Step() {
    const animal = this.missionPool[this.currentStep];
    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    // Record exposure
    window.masteryEngine.recordAttempt(animal.id, "exposure", true);

    container.innerHTML = `
      <div class="meet-card animate-pop" id="meet-card">
        <div class="step-badge">Animal ${this.currentStep + 1} of ${this.totalSteps}</div>
        
        <div class="meet-visual-wrapper" id="meet-visual" tabindex="0" role="button" aria-label="Tap to hear ${animal.name}">
          ${animal.svg}
          <button class="sound-wave-btn" id="meet-repeat-btn" aria-label="Listen to word">
            <span class="btn-icon">🔊</span>
            <span class="btn-text">Listen</span>
          </button>
        </div>

        <div class="meet-details">
          <h2 class="meet-word">${animal.name}</h2>
          <div class="meet-phonetic">${animal.phonetic}</div>
          
          <div class="model-sentence-box" id="sentence-box">
            <span class="quote-icon">💬</span>
            <span class="sentence-text" id="model-sentence-text">"${animal.modelSentence}"</span>
            <button class="btn-icon-tiny" id="btn-sentence-audio" title="Play Sentence">🔊</button>
          </div>

          <div class="meet-instruction-hint">
            <span>👉 Tap the animal to hear its name again!</span>
          </div>
        </div>

        <div class="meet-actions">
          <button class="btn-primary btn-large btn-bounce" id="btn-next-animal">
            <span>${this.currentStep + 1 === this.totalSteps ? "Complete Mission ⭐" : "Next Animal ➔"}</span>
          </button>
        </div>
      </div>
    `;

    // Speak animal name and then sentence
    setTimeout(() => {
      window.gameAudio.speakWord(animal.name, () => {
        setTimeout(() => {
          window.gameAudio.speakSentence(animal.modelSentence);
        }, 400);
      });
    }, 300);

    // Event listeners
    const visual = document.getElementById("meet-visual");
    const repeatBtn = document.getElementById("meet-repeat-btn");
    const sentenceBtn = document.getElementById("btn-sentence-audio");
    const nextBtn = document.getElementById("btn-next-animal");

    const playWordAudio = () => {
      window.gameAudio.playPop();
      visual.classList.add("pulse-highlight");
      setTimeout(() => visual.classList.remove("pulse-highlight"), 600);
      window.gameAudio.speakWord(animal.name);
    };

    visual.addEventListener("click", playWordAudio);
    repeatBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playWordAudio();
    });

    sentenceBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.gameAudio.speakSentence(animal.modelSentence);
    });

    nextBtn.addEventListener("click", () => {
      window.gameAudio.playSuccessChime();
      this.currentStep++;
      if (this.currentStep >= this.totalSteps) {
        this.finishMission();
      } else {
        this.renderMission1Step();
      }
    });
  }

  /* =========================================================
   * MISSION 2: RESCUE THE ANIMALS (Drag-and-Drop & Tap Matching)
   * ========================================================= */

  initMission2() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA.slice(0, 5));
    this.totalSteps = this.missionPool.length;
    this.renderMission2Step();
  }

  renderMission2Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    const distractors = this.getRandomDistractors(targetAnimal, 2);
    const shelters = this.shuffleArray([targetAnimal, ...distractors]);
    this.mistakesThisStep = 0;
    this.selectedElement = null;

    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    container.innerHTML = `
      <div class="rescue-mission-area animate-pop">
        <div class="mission-instruction-bar">
          <button class="btn-replay-audio" id="btn-replay-rescue" aria-label="Hear instruction again">
            <span>🔊</span>
          </button>
          <span class="instruction-text">Rescue the <strong>${targetAnimal.name}</strong>! Put it in the correct shelter.</span>
        </div>

        <!-- Accessible Mode Switch Notice -->
        <div class="interaction-hint">
          <span>💡 You can <strong>Drag</strong> the animal OR <strong>Tap</strong> it and then tap the shelter!</span>
        </div>

        <!-- Draggable Escaped Animal -->
        <div class="escaped-animal-stage">
          <div class="animal-card draggable-card animate-float" 
               id="draggable-animal" 
               draggable="true" 
               tabindex="0" 
               data-animal-id="${targetAnimal.id}" 
               aria-label="Escaped ${targetAnimal.name}">
            <div class="svg-holder">${targetAnimal.svg}</div>
            <div class="card-name-tag">${targetAnimal.name}</div>
            <div class="tap-select-indicator">Tap to Select</div>
          </div>
        </div>

        <!-- Shelters / Cages -->
        <div class="shelters-grid" id="shelters-grid">
          ${shelters.map(shelter => `
            <div class="shelter-dropzone" 
                 data-target-id="${shelter.id}" 
                 tabindex="0" 
                 role="button" 
                 aria-label="Shelter for ${shelter.name}">
              <div class="shelter-roof">🏠 RESCUE SHELTER</div>
              <div class="shelter-door">
                <div class="shelter-bars"></div>
                <div class="shelter-target-name">${shelter.name.toUpperCase()}</div>
              </div>
              <div class="shelter-hint-badge">Drop ${shelter.name} Here</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    // Speak prompt
    setTimeout(() => {
      window.gameAudio.speakInstruction(`Put the ${targetAnimal.name} in the correct shelter.`);
    }, 200);

    document.getElementById("btn-replay-rescue").addEventListener("click", () => {
      window.gameAudio.speakInstruction(`Put the ${targetAnimal.name} in the correct shelter.`);
    });

    this.setupDragAndDropMission2(targetAnimal);
  }

  setupDragAndDropMission2(targetAnimal) {
    const animalCard = document.getElementById("draggable-animal");
    const dropzones = document.querySelectorAll(".shelter-dropzone");

    // Drag events
    animalCard.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", targetAnimal.id);
      animalCard.classList.add("is-dragging");
    });

    animalCard.addEventListener("dragend", () => {
      animalCard.classList.remove("is-dragging");
    });

    // Tap-to-select alternative for mobile/accessibility
    animalCard.addEventListener("click", () => {
      window.gameAudio.playPop();
      if (this.selectedElement === animalCard) {
        this.selectedElement = null;
        animalCard.classList.remove("is-selected");
      } else {
        this.selectedElement = animalCard;
        animalCard.classList.add("is-selected");
      }
    });

    dropzones.forEach(zone => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("drag-over");
      });

      zone.addEventListener("dragleave", () => {
        zone.classList.remove("drag-over");
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        const draggedId = e.dataTransfer.getData("text/plain");
        const targetId = zone.getAttribute("data-target-id");
        this.handleRescueAnswer(draggedId === targetId, targetAnimal, zone);
      });

      // Tap-to-match click on dropzone
      zone.addEventListener("click", () => {
        if (this.selectedElement) {
          const targetId = zone.getAttribute("data-target-id");
          const draggedId = this.selectedElement.getAttribute("data-animal-id");
          this.handleRescueAnswer(draggedId === targetId, targetAnimal, zone);
        }
      });
    });
  }

  handleRescueAnswer(isCorrect, targetAnimal, zoneElement) {
    const animalCard = document.getElementById("draggable-animal");

    if (isCorrect) {
      window.gameAudio.playSuccessChime();
      zoneElement.classList.add("shelter-success");
      if (animalCard) animalCard.style.display = "none";

      window.masteryEngine.recordAttempt(targetAnimal.id, "matching", true);
      const praise = this.getRandomPhrase("success");
      
      window.gameAudio.speakPraise(`${targetAnimal.name}! ${praise}`, () => {
        setTimeout(() => {
          this.currentStep++;
          if (this.currentStep >= this.totalSteps) {
            this.finishMission();
          } else {
            this.renderMission2Step();
          }
        }, 400);
      });
    } else {
      this.mistakesThisStep++;
      window.gameAudio.playGentleRetry();
      window.masteryEngine.recordAttempt(targetAnimal.id, "matching", false);

      zoneElement.classList.add("shelter-shake");
      setTimeout(() => zoneElement.classList.remove("shelter-shake"), 600);

      // Deselect
      if (this.selectedElement) {
        this.selectedElement.classList.remove("is-selected");
        this.selectedElement = null;
      }

      // Gentle visual hint if multiple mistakes
      if (this.mistakesThisStep >= 1) {
        const correctZone = document.querySelector(`[data-target-id="${targetAnimal.id}"]`);
        if (correctZone) {
          correctZone.classList.add("gentle-glow-hint");
        }
      }

      const retryPhrase = this.getRandomPhrase("retry");
      window.gameAudio.speak(retryPhrase);
    }
  }

  /* =========================================================
   * MISSION 3: LISTEN AND FIND (Acoustic Comprehension)
   * ========================================================= */

  initMission3() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA).slice(0, 5);
    this.totalSteps = this.missionPool.length;
    this.renderMission3Step();
  }

  renderMission3Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    // Dynamic distractors: 2 distractors (3 total) on early steps, 3 distractors (4 total) on later steps
    const distractorCount = this.currentStep >= 2 ? 3 : 2;
    const distractors = this.getRandomDistractors(targetAnimal, distractorCount);
    const choices = this.shuffleArray([targetAnimal, ...distractors]);
    this.mistakesThisStep = 0;

    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    container.innerHTML = `
      <div class="listen-mission-area animate-pop">
        <div class="listen-center-prompt">
          <div class="sound-wave-circle" id="listen-big-btn" tabindex="0" role="button" aria-label="Play sound">
            <span class="big-speaker-icon">🔊</span>
            <div class="wave-rings"></div>
          </div>
          <div class="listen-instruction-text">Listen carefully! Tap to hear again.</div>
          <div class="listen-subtitle" id="listen-sub">"Find the ..."</div>
        </div>

        <div class="listen-choices-grid choices-count-${choices.length}" id="listen-choices">
          ${choices.map(animal => `
            <div class="listen-choice-card" 
                 data-animal-id="${animal.id}" 
                 tabindex="0" 
                 role="button" 
                 aria-label="${animal.name} option">
              <div class="svg-container">${animal.svg}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    const playPrompt = () => {
      const btn = document.getElementById("listen-big-btn");
      if (btn) btn.classList.add("sound-active");
      window.gameAudio.speakInstruction(`Find the ${targetAnimal.name}.`, () => {
        if (btn) btn.classList.remove("sound-active");
      });
    };

    setTimeout(playPrompt, 300);

    document.getElementById("listen-big-btn").addEventListener("click", () => {
      window.gameAudio.playPop();
      playPrompt();
    });

    const choiceCards = document.querySelectorAll(".listen-choice-card");
    choiceCards.forEach(card => {
      card.addEventListener("click", () => {
        const selectedId = card.getAttribute("data-animal-id");
        this.handleListeningAnswer(selectedId === targetAnimal.id, targetAnimal, card);
      });
    });
  }

  handleListeningAnswer(isCorrect, targetAnimal, cardElement) {
    if (isCorrect) {
      window.gameAudio.playSuccessChime();
      cardElement.classList.add("choice-correct");
      window.masteryEngine.recordAttempt(targetAnimal.id, "listening", true);

      // Reveal word name
      const sub = document.getElementById("listen-sub");
      if (sub) sub.innerHTML = `"Find the <strong>${targetAnimal.name}</strong>!"`;

      const praise = this.getRandomPhrase("success");
      window.gameAudio.speakPraise(`${targetAnimal.name}! ${praise}`, () => {
        setTimeout(() => {
          this.currentStep++;
          if (this.currentStep >= this.totalSteps) {
            this.finishMission();
          } else {
            this.renderMission3Step();
          }
        }, 500);
      });
    } else {
      this.mistakesThisStep++;
      window.gameAudio.playGentleRetry();
      window.masteryEngine.recordAttempt(targetAnimal.id, "listening", false);

      cardElement.classList.add("choice-dimmed");
      cardElement.classList.add("shake-gentle");
      setTimeout(() => cardElement.classList.remove("shake-gentle"), 500);

      if (this.mistakesThisStep >= 1) {
        // Replay audio slowly as scaffold
        setTimeout(() => {
          window.gameAudio.speak(`Listen closely. Find the ${targetAnimal.name}.`, { rate: 0.75 });
        }, 400);
      }
    }
  }

  /* =========================================================
   * MISSION 4: MATCH PICTURE AND WORD (Sight Word Recognition)
   * ========================================================= */

  initMission4() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA).slice(0, 5);
    this.totalSteps = this.missionPool.length;
    this.renderMission4Step();
  }

  renderMission4Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    const distractors = this.getRandomDistractors(targetAnimal, 3);
    const wordChoices = this.shuffleArray([targetAnimal, ...distractors]);
    this.mistakesThisStep = 0;

    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    container.innerHTML = `
      <div class="word-match-area animate-pop">
        <div class="mission-instruction-bar">
          <button class="btn-replay-audio" id="btn-replay-wordmatch"><span>🔊</span></button>
          <span class="instruction-text">Look at the picture. Which word matches?</span>
        </div>

        <div class="word-match-picture-box animate-float">
          ${targetAnimal.svg}
        </div>

        <div class="word-choices-grid">
          ${wordChoices.map(animal => `
            <button class="word-choice-btn" data-animal-id="${animal.id}">
              <span class="word-text">${animal.name}</span>
              <span class="word-phonetic-sub">${animal.phonetic}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;

    setTimeout(() => {
      window.gameAudio.speakInstruction("What animal is this? Choose the word.");
    }, 200);

    document.getElementById("btn-replay-wordmatch").addEventListener("click", () => {
      window.gameAudio.speakInstruction("What animal is this? Choose the word.");
    });

    const buttons = document.querySelectorAll(".word-choice-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedId = btn.getAttribute("data-animal-id");
        this.handleWordMatchAnswer(selectedId === targetAnimal.id, targetAnimal, btn);
      });
    });
  }

  handleWordMatchAnswer(isCorrect, targetAnimal, btnElement) {
    if (isCorrect) {
      window.gameAudio.playSuccessChime();
      btnElement.classList.add("word-btn-correct");
      window.masteryEngine.recordAttempt(targetAnimal.id, "matching", true);

      const praise = this.getRandomPhrase("success");
      window.gameAudio.speakPraise(`${targetAnimal.name}! ${praise}`, () => {
        setTimeout(() => {
          this.currentStep++;
          if (this.currentStep >= this.totalSteps) {
            this.finishMission();
          } else {
            this.renderMission4Step();
          }
        }, 500);
      });
    } else {
      this.mistakesThisStep++;
      window.gameAudio.playGentleRetry();
      window.masteryEngine.recordAttempt(targetAnimal.id, "matching", false);

      btnElement.classList.add("word-btn-incorrect");
      btnElement.disabled = true;

      const retryPhrase = this.getRandomPhrase("retry");
      window.gameAudio.speak(retryPhrase);
    }
  }

  /* =========================================================
   * MISSION 5: ANIMAL DETECTIVE (Semantic Clues & Attributes)
   * ========================================================= */

  initMission5() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA).slice(0, 5);
    this.totalSteps = this.missionPool.length;
    this.renderMission5Step();
  }

  renderMission5Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    const promptObj = targetAnimal.detectivePrompts[Math.floor(Math.random() * targetAnimal.detectivePrompts.length)];
    const distractors = this.getRandomDistractors(targetAnimal, 2);
    const choices = this.shuffleArray([targetAnimal, ...distractors]);
    this.mistakesThisStep = 0;

    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    container.innerHTML = `
      <div class="detective-area animate-pop">
        <div class="detective-badge-header">
          <span class="badge-icon">🔍</span>
          <span class="badge-label">Detective Clue</span>
        </div>

        <div class="detective-clue-card">
          <button class="btn-replay-audio" id="btn-replay-clue" aria-label="Replay clue"><span>🔊</span></button>
          <div class="clue-text" id="clue-text">"${promptObj.text}"</div>
        </div>

        <div class="detective-choices-grid">
          ${choices.map(animal => `
            <div class="detective-card" data-animal-id="${animal.id}" tabindex="0" role="button">
              <div class="svg-container">${animal.svg}</div>
              <div class="animal-label">${animal.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    const speakClue = () => {
      window.gameAudio.speakInstruction(promptObj.text);
    };

    setTimeout(speakClue, 300);

    document.getElementById("btn-replay-clue").addEventListener("click", () => {
      window.gameAudio.playPop();
      speakClue();
    });

    const cards = document.querySelectorAll(".detective-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const selectedId = card.getAttribute("data-animal-id");
        this.handleDetectiveAnswer(selectedId === targetAnimal.id, targetAnimal, card);
      });
    });
  }

  handleDetectiveAnswer(isCorrect, targetAnimal, cardElement) {
    if (isCorrect) {
      window.gameAudio.playSuccessChime();
      cardElement.classList.add("detective-correct");
      window.masteryEngine.recordAttempt(targetAnimal.id, "detective", true);

      const praise = this.getRandomPhrase("success");
      window.gameAudio.speakPraise(`${targetAnimal.name}! ${targetAnimal.modelSentence} ${praise}`, () => {
        setTimeout(() => {
          this.currentStep++;
          if (this.currentStep >= this.totalSteps) {
            this.finishMission();
          } else {
            this.renderMission5Step();
          }
        }, 600);
      });
    } else {
      this.mistakesThisStep++;
      window.gameAudio.playGentleRetry();
      window.masteryEngine.recordAttempt(targetAnimal.id, "detective", false);

      cardElement.classList.add("choice-dimmed");
      cardElement.classList.add("shake-gentle");
      setTimeout(() => cardElement.classList.remove("shake-gentle"), 500);

      window.gameAudio.speak("Good try! Think about the clue and try again.");
    }
  }

  /* =========================================================
   * MISSION 6: BUILD A SENTENCE (Syntax & Sentence Construction)
   * ========================================================= */

  initMission6() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA).slice(0, 4);
    this.totalSteps = this.missionPool.length;
    this.renderMission6Step();
  }

  renderMission6Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    const sentenceParts = targetAnimal.sentenceParts; // e.g. ["The", "lion", "is", "big."]
    const scrambledWords = this.shuffleArray(sentenceParts.map((word, idx) => ({ id: `${idx}`, word, originalIndex: idx })));
    this.placedWords = [];
    this.mistakesThisStep = 0;

    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    container.innerHTML = `
      <div class="sentence-builder-area animate-pop">
        <div class="mission-instruction-bar">
          <button class="btn-replay-audio" id="btn-replay-sentence"><span>🔊</span></button>
          <span class="instruction-text">Tap the word cards in the correct order to build the sentence!</span>
        </div>

        <div class="sentence-context-card">
          <div class="mini-svg-holder">${targetAnimal.svg}</div>
          <div class="sentence-clue-label">Target: <strong>${targetAnimal.modelSentence}</strong></div>
        </div>

        <!-- Drop Slots / Built Sentence Area -->
        <div class="sentence-slots-container" id="slots-container">
          ${sentenceParts.map((_, i) => `
            <div class="sentence-slot" data-slot-index="${i}">
              <span class="slot-placeholder">Word ${i + 1}</span>
            </div>
          `).join("")}
        </div>

        <!-- Scrambled Word Cards Bank -->
        <div class="words-bank" id="words-bank">
          ${scrambledWords.map(item => `
            <button class="word-card-block animate-pop" data-word-id="${item.id}" data-word-text="${item.word}">
              ${item.word}
            </button>
          `).join("")}
        </div>

        <div class="sentence-actions">
          <button class="btn-secondary" id="btn-clear-sentence">Reset Words ↺</button>
        </div>
      </div>
    `;

    setTimeout(() => {
      window.gameAudio.speakSentence(targetAnimal.modelSentence);
    }, 250);

    document.getElementById("btn-replay-sentence").addEventListener("click", () => {
      window.gameAudio.speakSentence(targetAnimal.modelSentence);
    });

    document.getElementById("btn-clear-sentence").addEventListener("click", () => {
      window.gameAudio.playPop();
      this.renderMission6Step();
    });

    this.setupSentenceBuilding(targetAnimal, sentenceParts);
  }

  setupSentenceBuilding(targetAnimal, sentenceParts) {
    const wordCards = document.querySelectorAll(".word-card-block");
    const slots = document.querySelectorAll(".sentence-slot");

    wordCards.forEach(card => {
      card.addEventListener("click", () => {
        if (card.classList.contains("word-placed")) return;

        window.gameAudio.playPop();
        const wordText = card.getAttribute("data-word-text");
        const wordId = card.getAttribute("data-word-id");

        // Find next empty slot
        const nextSlotIndex = this.placedWords.length;
        if (nextSlotIndex < sentenceParts.length) {
          const slot = slots[nextSlotIndex];
          slot.innerHTML = `<span class="placed-word-text">${wordText}</span>`;
          slot.classList.add("slot-filled");

          card.classList.add("word-placed");
          this.placedWords.push({ wordId, wordText, element: card });

          // If all slots are full, check answer!
          if (this.placedWords.length === sentenceParts.length) {
            this.checkSentenceCompletion(targetAnimal, sentenceParts);
          }
        }
      });
    });
  }

  checkSentenceCompletion(targetAnimal, sentenceParts) {
    const assembledText = this.placedWords.map(w => w.wordText).join(" ");
    const expectedText = sentenceParts.join(" ");

    const slotsContainer = document.getElementById("slots-container");

    if (assembledText.toLowerCase() === expectedText.toLowerCase()) {
      window.gameAudio.playSuccessChime();
      slotsContainer.classList.add("sentence-complete-success");
      window.masteryEngine.recordAttempt(targetAnimal.id, "sentence", true);

      // Karaoke playback of sentence
      window.gameAudio.speakSentence(expectedText, () => {
        setTimeout(() => {
          this.currentStep++;
          if (this.currentStep >= this.totalSteps) {
            this.finishMission();
          } else {
            this.renderMission6Step();
          }
        }, 600);
      });
    } else {
      this.mistakesThisStep++;
      window.gameAudio.playGentleRetry();
      window.masteryEngine.recordAttempt(targetAnimal.id, "sentence", false);

      slotsContainer.classList.add("sentence-shake");
      setTimeout(() => slotsContainer.classList.remove("sentence-shake"), 600);

      window.gameAudio.speak("Let's try that order again!", () => {
        setTimeout(() => {
          this.renderMission6Step();
        }, 400);
      });
    }
  }

  /* =========================================================
   * MISSION 7: RESCUE CHALLENGE (Multi-Skill Ranger Patrol)
   * ========================================================= */

  initMission7() {
    this.missionPool = this.shuffleArray(VOCABULARY_DATA).slice(0, 6);
    this.totalSteps = this.missionPool.length;
    this.renderMission7Step();
  }

  renderMission7Step() {
    // Alternate challenge formats across the 6 steps
    const stepType = this.currentStep % 3; // 0: Listen, 1: Word Match, 2: Clue Detective
    if (stepType === 0) {
      this.renderMission3Step();
    } else if (stepType === 1) {
      this.renderMission4Step();
    } else {
      this.renderMission5Step();
    }
  }

  /* =========================================================
   * MISSION 8: SMART REVIEW MISSION (Adaptive Spaced Practice)
   * ========================================================= */

  initMission8() {
    // Fetch struggling words automatically from mastery engine!
    let targetWords = window.masteryEngine.getWordsNeedingPractice(4);
    if (targetWords.length === 0) {
      targetWords = this.shuffleArray(VOCABULARY_DATA).slice(0, 4);
    }
    this.missionPool = targetWords;
    this.totalSteps = this.missionPool.length;
    this.renderMission8Step();
  }

  renderMission8Step() {
    const targetAnimal = this.missionPool[this.currentStep];
    const container = document.getElementById("arena-content");
    window.uiManager.updateProgressBar(this.currentStep, this.totalSteps);

    const distractors = this.getRandomDistractors(targetAnimal, 2);
    const choices = this.shuffleArray([targetAnimal, ...distractors]);

    container.innerHTML = `
      <div class="review-mission-area animate-pop">
        <div class="review-callout-banner">
          <span class="banner-icon">🎯</span>
          <span class="banner-text">Special Practice: Let's master the <strong>${targetAnimal.name}</strong>!</span>
        </div>

        <div class="listen-center-prompt">
          <div class="sound-wave-circle" id="review-big-btn" tabindex="0" role="button">
            <span class="big-speaker-icon">🔊</span>
            <div class="wave-rings"></div>
          </div>
          <div class="listen-instruction-text">Listen and find the ${targetAnimal.name}!</div>
        </div>

        <div class="review-choices-grid">
          ${choices.map(animal => `
            <div class="review-choice-card" data-animal-id="${animal.id}" tabindex="0" role="button">
              <div class="svg-container">${animal.svg}</div>
              <div class="choice-name">${animal.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    setTimeout(() => {
      window.gameAudio.speakInstruction(`Let's practice! Find the ${targetAnimal.name}.`);
    }, 250);

    document.getElementById("review-big-btn").addEventListener("click", () => {
      window.gameAudio.speakInstruction(`Find the ${targetAnimal.name}.`);
    });

    const choiceCards = document.querySelectorAll(".review-choice-card");
    choiceCards.forEach(card => {
      card.addEventListener("click", () => {
        const selectedId = card.getAttribute("data-animal-id");
        if (selectedId === targetAnimal.id) {
          window.gameAudio.playSuccessChime();
          card.classList.add("choice-correct");
          window.masteryEngine.recordAttempt(targetAnimal.id, "listening", true);

          const praise = this.getRandomPhrase("success");
          window.gameAudio.speakPraise(`Awesome! ${targetAnimal.modelSentence} ${praise}`, () => {
            setTimeout(() => {
              this.currentStep++;
              if (this.currentStep >= this.totalSteps) {
                this.finishMission();
              } else {
                this.renderMission8Step();
              }
            }, 600);
          });
        } else {
          window.gameAudio.playGentleRetry();
          window.masteryEngine.recordAttempt(targetAnimal.id, "listening", false);
          card.classList.add("choice-dimmed");
          window.gameAudio.speak("Almost got it! Let's listen again.");
        }
      });
    });
  }

  /* =========================================================
   * MISSION COMPLETION CELEBRATION
   * ========================================================= */

  finishMission() {
    window.gameAudio.playFanfare();
    window.masteryEngine.completeMission(this.currentMissionId, { stars: 3 });

    // Show completion modal
    window.uiManager.showMissionCompleteModal(this.currentMissionId);
  }
}

// Global singleton mission manager instance
window.missionManager = new MissionManager();
