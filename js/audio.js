/**
 * ANIMAL RESCUE ACADEMY - Audio & Speech Synthesis Engine
 * Provides browser Speech Synthesis for clear English pronunciation
 * and Web Audio API procedural sound effects for joyful, gentle feedback.
 */

class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.muted = localStorage.getItem("ARA_MUTED") === "true";
    this.speechSynthesis = window.speechSynthesis || null;
    this.preferredVoice = null;
    this.speechRate = 0.85; // Slightly slower pace for ESL A1 children
    this.speechPitch = 1.05; // Friendly, warm pitch
    this.isSpeaking = false;
    this.audioUnlocked = false;

    this.initVoices();
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    this.audioUnlocked = true;
  }

  initVoices() {
    if (!this.speechSynthesis) return;

    const findVoice = () => {
      const voices = this.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // Prefer natural sounding English voices for children
      const preferredNames = [
        "Google US English",
        "Natural",
        "Samantha",
        "Victoria",
        "Karen",
        "Zira",
        "Jenny",
        "Aria",
        "en-US",
        "en-GB"
      ];

      for (const name of preferredNames) {
        const found = voices.find(v => v.lang.startsWith("en") && v.name.includes(name));
        if (found) {
          this.preferredVoice = found;
          break;
        }
      }

      if (!this.preferredVoice) {
        this.preferredVoice = voices.find(v => v.lang.startsWith("en")) || voices[0];
      }
    };

    findVoice();
    if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("ARA_MUTED", this.muted.toString());
    if (this.muted && this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  cancelSpeech() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    // Dispatch event to clear active audio badges in UI
    window.dispatchEvent(new CustomEvent("speech-ended"));
  }

  /**
   * Speak English text with visual event dispatching
   */
  speak(text, options = {}) {
    if (this.muted || !this.speechSynthesis) {
      if (options.onEnd) options.onEnd();
      return;
    }

    this.cancelSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.preferredVoice;
    utterance.rate = options.rate || this.speechRate;
    utterance.pitch = options.pitch || this.speechPitch;
    utterance.lang = "en-US";

    utterance.onstart = () => {
      this.isSpeaking = true;
      window.dispatchEvent(new CustomEvent("speech-started", { detail: { text } }));
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      window.dispatchEvent(new CustomEvent("speech-ended", { detail: { text } }));
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      window.dispatchEvent(new CustomEvent("speech-ended", { detail: { text } }));
      if (options.onEnd) options.onEnd();
    };

    this.speechSynthesis.speak(utterance);
  }

  speakWord(word, onEnd) {
    this.speak(word, { rate: 0.8, pitch: 1.1, onEnd });
  }

  speakSentence(sentence, onEnd) {
    this.speak(sentence, { rate: 0.85, pitch: 1.05, onEnd });
  }

  speakInstruction(instruction, onEnd) {
    this.speak(instruction, { rate: 0.88, pitch: 1.08, onEnd });
  }

  speakPraise(phrase, onEnd) {
    this.speak(phrase, { rate: 0.9, pitch: 1.15, onEnd });
  }

  /* =========================================================
   * PROCEDURAL SOUND SYNTHESIZER (Web Audio API)
   * Warm, joyful, friendly sounds without any external files
   * ========================================================= */

  playTone(freq, duration, type = "sine", gainVal = 0.15, startTime = 0) {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    try {
      const t = this.audioCtx.currentTime + startTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.exponentialRampToValueAtTime(gainVal, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + duration + 0.05);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  }

  /**
   * Positive uplifting success chime (C5 -> E5 -> G5 -> C6)
   */
  playSuccessChime() {
    if (this.muted) return;
    this.initAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.35, "triangle", 0.18, idx * 0.08);
      this.playTone(freq * 2, 0.25, "sine", 0.05, idx * 0.08); // Shimmer harmonic
    });
  }

  /**
   * Gentle, encouraging retry tone (Soft, warm acoustic marimba dual-tap: E4 -> C4)
   * Strict ELT guideline: NO harsh buzzers or buzzer tones!
   */
  playGentleRetry() {
    if (this.muted) return;
    this.initAudioContext();
    this.playTone(329.63, 0.2, "sine", 0.12, 0);       // E4
    this.playTone(261.63, 0.25, "triangle", 0.12, 0.1); // C4
  }

  /**
   * Quick bubble pop for button taps & card selections
   */
  playPop() {
    if (this.muted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    try {
      const t = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(350, t);
      osc.frequency.exponentialRampToValueAtTime(750, t + 0.08);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.09);
    } catch (e) {}
  }

  /**
   * Golden star collection chime
   */
  playStarChime() {
    if (this.muted) return;
    this.initAudioContext();
    const notes = [659.25, 880.00, 1174.66, 1318.51]; // E5, A5, D6, E6
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.4, "sine", 0.15, idx * 0.06);
    });
  }

  /**
   * Victory fanfare for mission completion
   */
  playFanfare() {
    if (this.muted) return;
    this.initAudioContext();
    const notes = [
      { f: 523.25, d: 0.15, t: 0 },
      { f: 523.25, d: 0.15, t: 0.15 },
      { f: 523.25, d: 0.15, t: 0.3 },
      { f: 659.25, d: 0.25, t: 0.45 },
      { f: 783.99, d: 0.25, t: 0.65 },
      { f: 1046.50, d: 0.6, t: 0.9 }
    ];
    notes.forEach(n => {
      this.playTone(n.f, n.d, "triangle", 0.2, n.t);
      this.playTone(n.f * 2, n.d, "sine", 0.05, n.t);
    });
  }

  /**
   * Shimmering magical sound for badge unlock
   */
  playBadgeChime() {
    if (this.muted) return;
    this.initAudioContext();
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 0.45, "sine", 0.12, idx * 0.07);
    });
  }
}

// Global singleton audio instance
window.gameAudio = new AudioManager();
