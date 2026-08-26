/**
 * ANIMAL RESCUE ACADEMY - Main Application Entry Point
 * Wires events, navigation tabs, teacher authentication gate, and initialization.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigation Button Bindings
  const navMapBtn = document.getElementById("nav-btn-map");
  const navExploreBtn = document.getElementById("nav-btn-explore");
  const navReviewBtn = document.getElementById("nav-btn-review");
  const navTeacherBtn = document.getElementById("nav-btn-teacher");
  const muteBtn = document.getElementById("btn-mute-toggle");
  const badgesBtn = document.getElementById("btn-badges-drawer");
  const startAdventureBtn = document.getElementById("btn-start-adventure");
  const arenaBackBtn = document.getElementById("arena-back-btn");

  // Welcome Screen -> Map
  if (startAdventureBtn) {
    startAdventureBtn.addEventListener("click", () => {
      window.gameAudio.initAudioContext();
      window.gameAudio.playSuccessChime();
      window.uiManager.showScreen("map-screen");
      setActiveNav(navMapBtn);
    });
  }

  // Header Nav Items
  if (navMapBtn) {
    navMapBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.uiManager.showScreen("map-screen");
      setActiveNav(navMapBtn);
    });
  }

  if (navExploreBtn) {
    navExploreBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.uiManager.showScreen("explore-screen");
      setActiveNav(navExploreBtn);
    });
  }

  if (navReviewBtn) {
    navReviewBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.uiManager.showScreen("smart-review-screen");
      setActiveNav(navReviewBtn);
    });
  }

  if (navTeacherBtn) {
    navTeacherBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      openTeacherGate();
    });
  }

  if (arenaBackBtn) {
    arenaBackBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.uiManager.showScreen("map-screen");
      setActiveNav(navMapBtn);
    });
  }

  // Mute / Unmute
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      window.gameAudio.toggleMute();
      window.uiManager.updateTopBar();
    });
  }

  // Badges Drawer
  if (badgesBtn) {
    badgesBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      openBadgesDrawer();
    });
  }

  // Teacher Controls
  setupTeacherDashboardActions();

  // Initial screen & state
  window.uiManager.updateTopBar();
});

function setActiveNav(activeBtn) {
  document.querySelectorAll(".nav-item-btn").forEach(btn => btn.classList.remove("nav-active"));
  if (activeBtn) activeBtn.classList.add("nav-active");
}

/* =========================================================
 * TEACHER / PARENT AUTHENTICATION GATE
 * Child-proof friendly arithmetic challenge to protect settings
 * ========================================================= */

function openTeacherGate() {
  const modal = document.getElementById("teacher-gate-modal");
  const mathQuestionEl = document.getElementById("gate-math-question");
  const mathInput = document.getElementById("gate-math-answer");
  const submitBtn = document.getElementById("btn-gate-submit");
  const cancelBtn = document.getElementById("btn-gate-cancel");
  const errorMsg = document.getElementById("gate-error-msg");

  const num1 = Math.floor(Math.random() * 5) + 3;
  const num2 = Math.floor(Math.random() * 4) + 2;
  const correctAnswer = num1 + num2;

  if (mathQuestionEl) mathQuestionEl.textContent = `${num1} + ${num2} = ?`;
  if (mathInput) {
    mathInput.value = "";
    mathInput.focus();
  }
  if (errorMsg) errorMsg.style.display = "none";

  modal.classList.add("modal-active");

  const checkAnswer = () => {
    const val = parseInt(mathInput.value.trim(), 10);
    if (val === correctAnswer) {
      window.gameAudio.playSuccessChime();
      modal.classList.remove("modal-active");
      window.uiManager.showScreen("teacher-screen");
      setActiveNav(document.getElementById("nav-btn-teacher"));
    } else {
      window.gameAudio.playGentleRetry();
      if (errorMsg) errorMsg.style.display = "block";
      mathInput.value = "";
    }
  };

  submitBtn.onclick = checkAnswer;
  mathInput.onkeydown = (e) => {
    if (e.key === "Enter") checkAnswer();
  };

  cancelBtn.onclick = () => {
    modal.classList.remove("modal-active");
  };
}

/* =========================================================
 * TEACHER ACTIONS (Unlock, Reset, Certificate)
 * ========================================================= */

function setupTeacherDashboardActions() {
  const unlockBtn = document.getElementById("btn-teacher-unlock-all");
  const resetBtn = document.getElementById("btn-teacher-reset");
  const certBtn = document.getElementById("btn-teacher-certificate");

  if (unlockBtn) {
    unlockBtn.addEventListener("click", () => {
      if (confirm("Unlock all 8 missions for classroom demonstration?")) {
        window.masteryEngine.unlockAllMissions();
        window.gameAudio.playSuccessChime();
        window.uiManager.renderTeacherDashboard();
        window.uiManager.updateTopBar();
        alert("All 8 missions and animals have been unlocked!");
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all student progress and mastery data? This cannot be undone.")) {
        window.masteryEngine.resetProgress();
        window.uiManager.renderTeacherDashboard();
        window.uiManager.updateTopBar();
        alert("Student data has been reset.");
      }
    });
  }

  if (certBtn) {
    certBtn.addEventListener("click", () => {
      window.gameAudio.playPop();
      window.uiManager.showCertificateModal();
    });
  }
}

/* =========================================================
 * BADGES DRAWER MODAL
 * ========================================================= */

function openBadgesDrawer() {
  const modal = document.getElementById("badges-drawer-modal");
  const container = document.getElementById("badges-grid-container");
  const closeBtn = document.getElementById("btn-badges-drawer-close");

  const unlocked = window.masteryEngine.unlockedBadges;

  if (container) {
    container.innerHTML = BADGES_CONFIG.map(badge => {
      const isUnlocked = unlocked.includes(badge.id);
      return `
        <div class="badge-drawer-card ${isUnlocked ? 'badge-is-unlocked' : 'badge-is-locked'}">
          <div class="badge-drawer-icon" style="${isUnlocked ? `background-color: ${badge.color}` : ''}">
            ${isUnlocked ? badge.icon : '🔒'}
          </div>
          <div class="badge-drawer-info">
            <h4>${badge.title}</h4>
            <p>${badge.desc}</p>
            <span class="badge-status-tag">${isUnlocked ? 'Earned ⭐' : 'Locked'}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  modal.classList.add("modal-active");

  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove("modal-active");
  }
}
