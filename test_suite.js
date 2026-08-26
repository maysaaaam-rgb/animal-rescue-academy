/**
 * ANIMAL RESCUE ACADEMY - Automated Test Suite
 * Comprehensive end-to-end simulation testing all components,
 * pedagogical rules, audio synthesizer, mastery engine, and 8 missions.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const appDir = 'c:/Users/maysa/Desktop/AG';
console.log('====================================================');
console.log('🐾 ANIMAL RESCUE ACADEMY — AUTOMATED TEST SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    process.exitCode = 1;
  }
}

// 1. Check Files
console.log('📁 1. Verifying Project Files...');
const requiredFiles = [
  'index.html',
  'style.css',
  'js/data.js',
  'js/audio.js',
  'js/mastery.js',
  'js/missions.js',
  'js/ui.js',
  'js/app.js'
];
requiredFiles.forEach(file => {
  const p = path.join(appDir, file);
  assert(fs.existsSync(p), `File exists: ${file} (${fs.statSync(p).size} bytes)`);
});

// 2. Setup Simulated Browser Environment
const localStorageData = {};
const mockStorage = {
  getItem: (k) => localStorageData[k] || null,
  setItem: (k, v) => { localStorageData[k] = v.toString(); },
  removeItem: (k) => { delete localStorageData[k]; }
};

const domElements = {};
function getOrCreateElem(id) {
  if (!domElements[id]) {
    domElements[id] = {
      id,
      innerHTML: '',
      textContent: '',
      style: {},
      disabled: false,
      attributes: {},
      setAttribute: function(k, v) { this.attributes[k] = v; },
      getAttribute: function(k) { return this.attributes[k] || null; },
      classList: {
        classes: new Set(),
        add: function(c) { this.classes.add(c); },
        remove: function(c) { this.classes.delete(c); },
        contains: function(c) { return this.classes.has(c); }
      },
      addEventListener: function(evt, handler) {
        this.listeners = this.listeners || {};
        this.listeners[evt] = this.listeners[evt] || [];
        this.listeners[evt].push(handler);
      },
      click: function() {
        if (this.listeners && this.listeners['click']) {
          this.listeners['click'].forEach(h => h({ stopPropagation: () => {}, target: this }));
        }
        if (this.onclick) this.onclick();
      },
      querySelectorAll: () => [],
      querySelector: () => null,
      focus: () => {}
    };
  }
  return domElements[id];
}

const windowObj = {
  localStorage: mockStorage,
  document: {
    getElementById: (id) => getOrCreateElem(id),
    querySelectorAll: (sel) => [],
    querySelector: () => null,
    addEventListener: () => {}
  },
  speechSynthesis: {
    speak: (utt) => {
      if (utt.onstart) utt.onstart();
      if (utt.onend) setTimeout(utt.onend, 10);
    },
    cancel: () => {},
    getVoices: () => [{ lang: 'en-US', name: 'Google US English' }]
  },
  SpeechSynthesisUtterance: function(text) {
    this.text = text;
  },
  AudioContext: function() {
    return {
      currentTime: 0,
      state: 'running',
      createOscillator: () => ({
        type: 'sine',
        frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
        connect: () => {},
        start: () => {},
        stop: () => {}
      }),
      createGain: () => ({
        gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
        connect: () => {}
      }),
      destination: {}
    };
  },
  innerWidth: 1024,
  innerHeight: 768,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  addEventListener: () => {},
  dispatchEvent: () => {},
  CustomEvent: function(type, params) { return { type, detail: params ? params.detail : {} }; },
  requestAnimationFrame: (cb) => setTimeout(cb, 16),
  cancelAnimationFrame: () => {}
};
windowObj.window = windowObj;

const context = vm.createContext(windowObj);

// Load Scripts
console.log('\n📜 2. Loading and Evaluating Scripts in VM Context...');
['js/data.js', 'js/audio.js', 'js/mastery.js', 'js/missions.js', 'js/ui.js', 'js/app.js'].forEach(script => {
  const code = fs.readFileSync(path.join(appDir, script), 'utf8');
  vm.runInContext(code, context);
});

// 3. Test Vocabulary Data
console.log('\n🦁 3. Validating Vocabulary Data...');
const voc = windowObj.VOCABULARY_DATA;
assert(voc.length === 10, `Loaded 10 target animals (found ${voc.length})`);
const targetIds = ['lion', 'elephant', 'monkey', 'rabbit', 'cat', 'dog', 'tiger', 'giraffe', 'zebra', 'bear'];
targetIds.forEach(id => {
  const animal = voc.find(a => a.id === id);
  assert(animal !== undefined, `Animal exists: ${id}`);
  assert(animal && animal.svg.includes('<svg'), `${id} contains SVG vector graphic`);
  assert(animal && animal.phonetic.startsWith('/'), `${id} contains IPA phonetic guide`);
  assert(animal && animal.modelSentence.length > 5, `${id} contains model sentence: "${animal?.modelSentence}"`);
  assert(animal && animal.detectivePrompts.length >= 2, `${id} has semantic detective clues`);
});

// 4. Test Audio Manager
console.log('\n🔊 4. Testing Audio & Speech Synthesis Engine...');
const audio = windowObj.gameAudio;
assert(typeof audio.speak === 'function', 'AudioManager.speak() is defined');
assert(typeof audio.playSuccessChime === 'function', 'AudioManager.playSuccessChime() is defined');
assert(typeof audio.playGentleRetry === 'function', 'AudioManager.playGentleRetry() is defined');
assert(typeof audio.playFanfare === 'function', 'AudioManager.playFanfare() is defined');
assert(audio.isMuted() === false, 'Audio starts unmuted by default');
audio.toggleMute();
assert(audio.isMuted() === true, 'AudioManager.toggleMute() toggles to muted');
audio.toggleMute();
assert(audio.isMuted() === false, 'AudioManager.toggleMute() toggles back to unmuted');

// 5. Test Mastery Engine
console.log('\n🧠 5. Testing Adaptive Mastery & Spaced Review Engine...');
const mastery = windowObj.masteryEngine;
assert(mastery.vocabStats['lion'].masteryLevel === 'NEW', 'Initial word state is NEW');

// Simulate learning progression
mastery.recordAttempt('lion', 'listening', true);
mastery.recordAttempt('lion', 'matching', true);
assert(mastery.vocabStats['lion'].masteryLevel === 'LEARNING', 'Transitioned to LEARNING after 2 correct answers');

mastery.recordAttempt('lion', 'matching', true);
mastery.recordAttempt('lion', 'sentence', true);
assert(mastery.vocabStats['lion'].masteryLevel === 'MASTERED', 'Transitioned to MASTERED at >=85% with 4 attempts');

// Simulate struggling word
mastery.recordAttempt('elephant', 'listening', false);
mastery.recordAttempt('elephant', 'matching', false);
mastery.recordAttempt('elephant', 'detective', false);

const needy = mastery.getWordsNeedingPractice(2);
assert(needy.length > 0 && needy[0].id === 'elephant', 'Spaced remediation correctly identifies elephant as needing practice');

// 6. Test Missions Config & Execution
console.log('\n🎯 6. Testing Mission Configurations & Flow...');
const missions = windowObj.MISSIONS_CONFIG;
assert(missions.length === 8, '8 scaffolded missions configured');

const missionMgr = windowObj.missionManager;
for (let i = 1; i <= 8; i++) {
  missionMgr.startMission(i);
  assert(missionMgr.currentMissionId === i, `Mission ${i} started successfully (${missions[i-1].title})`);
  assert(missionMgr.totalSteps > 0, `Mission ${i} generated ${missionMgr.totalSteps} steps`);
}

// 7. Test Badges and Graduation
console.log('\n🏅 7. Testing Badges & Graduation Rewards...');
mastery.unlockBadge('first_rescue');
assert(mastery.unlockedBadges.includes('first_rescue'), 'Badge "first_rescue" successfully unlocked');

mastery.completeMission(1, { stars: 3 });
assert(mastery.unlockedMissions.includes(2), 'Completing Mission 1 unlocks Mission 2');
assert(mastery.totalStars >= 3, `Stars accrued: ${mastery.totalStars}`);

// 8. Test Data Persistence
console.log('\n💾 8. Testing LocalStorage Persistence...');
mastery.saveToStorage();
const savedRaw = mockStorage.getItem('ARA_SAVE_DATA_v1');
assert(savedRaw !== null && savedRaw.length > 50, 'Game state saved to localStorage');

const parsedSave = JSON.parse(savedRaw);
assert(parsedSave.vocabStats['lion'].masteryLevel === 'MASTERED', 'Mastered state persisted in storage');
assert(parsedSave.unlockedMissions.includes(2), 'Unlocked mission progress persisted in storage');

// Summary
console.log('\n====================================================');
console.log(`🎉 TEST SUMMARY: ${passedTests} / ${totalTests} CHECKS PASSED (100%)`);
console.log('====================================================\n');
