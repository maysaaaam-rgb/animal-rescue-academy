/**
 * ⭐ EMOJI EXPERTS ⭐ — CLASSROOM SMART BOARD GAME ENGINE
 * Single-Page State Machine, Audio Synthesizer, Confetti Engine, Touch UX
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA: 15 BALANCED QUESTIONS WITH REALISTIC PHOTOGRAPHS & DISTRACTORS
  // =========================================================================
  const QUESTIONS_DATA = [
    {
      id: 1,
      emoji: '🥱',
      word: 'TIRED',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Tired / Yawning',
          imgUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        },
        B: {
          label: 'Sick child with thermometer',
          imgUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        C: {
          label: 'Scared child hiding',
          imgUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 2,
      emoji: '🥑',
      word: 'AVOCADO',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Sliced Kiwi Fruit',
          imgUrl: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        B: {
          label: 'Fresh Sliced Avocado',
          imgUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        C: {
          label: 'Green Apples',
          imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        }
      }
    },
    {
      id: 3,
      emoji: '🧗',
      word: 'CLIMBING',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Rock Climbing Wall',
          imgUrl: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        },
        B: {
          label: 'Hiking Trail Forest',
          imgUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Riding Skateboard',
          imgUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 4,
      emoji: '🥨',
      word: 'PRETZEL',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Fresh Croissant',
          imgUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde68a'
        },
        B: {
          label: 'Sesame Bagel',
          imgUrl: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Twisted Salty Pretzel',
          imgUrl: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    },
    {
      id: 5,
      emoji: '🥶',
      word: 'COLD',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Swimming in pool',
          imgUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bae6fd'
        },
        B: {
          label: 'Shivering in winter snow',
          imgUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Eating Ice Cream',
          imgUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    },
    {
      id: 6,
      emoji: '🧑‍🚀',
      word: 'ASTRONAUT',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Scientist in Lab',
          imgUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e0e7ff'
        },
        B: {
          label: 'Astronaut in Spacesuit',
          imgUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#1e1b4b'
        },
        C: {
          label: 'Airplane Pilot',
          imgUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        }
      }
    },
    {
      id: 7,
      emoji: '🍣',
      word: 'SUSHI',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Japanese Sushi Rolls',
          imgUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        B: {
          label: 'Steamed Dumplings',
          imgUrl: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        C: {
          label: 'Italian Spaghetti Pasta',
          imgUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fee2e2'
        }
      }
    },
    {
      id: 8,
      emoji: '🤔',
      word: 'THINKING',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Laughing Child',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Thinking Child Hand on Chin',
          imgUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Sleeping peacefully',
          imgUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        }
      }
    },
    {
      id: 9,
      emoji: '🪁',
      word: 'FLYING A KITE',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Throwing Frisbee',
          imgUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        B: {
          label: 'Playing Badminton',
          imgUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Flying a Colorful Kite',
          imgUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#93c5fd'
        }
      }
    },
    {
      id: 10,
      emoji: '🥭',
      word: 'MANGO',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Sliced Pineapple',
          imgUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Juicy Sliced Mango',
          imgUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Yellow Bananas',
          imgUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        }
      }
    },
    {
      id: 11,
      emoji: '🥋',
      word: 'MARTIAL ARTS',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Karate / Martial Arts Class',
          imgUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f1f5f9'
        },
        B: {
          label: 'Playing Soccer',
          imgUrl: 'https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        C: {
          label: 'Gymnastics Routine',
          imgUrl: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    },
    {
      id: 12,
      emoji: '🤩',
      word: 'EXCITED',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Reading quietly',
          imgUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        B: {
          label: 'Excited Child Jumping with Joy',
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        C: {
          label: 'Confused Child',
          imgUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 13,
      emoji: '🧇',
      word: 'WAFFLE',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Fluffy Pancakes',
          imgUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde68a'
        },
        B: {
          label: 'Toasted Sandwich Bread',
          imgUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Golden Crisp Waffle',
          imgUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    },
    {
      id: 14,
      emoji: '🧑‍🍳',
      word: 'CHEF',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Smiling Chef with Cooking Pan',
          imgUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#ffffff'
        },
        B: {
          label: 'Doctor with Stethoscope',
          imgUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e0e7ff'
        },
        C: {
          label: 'Builder in Safety Helmet',
          imgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 15,
      emoji: '🥳',
      word: 'CELEBRATING',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Quiet Study in Class',
          imgUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        B: {
          label: 'Kids Party Celebrating with Balloons',
          imgUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        },
        C: {
          label: 'Walking Dog in Rain',
          imgUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bae6fd'
        }
      }
    }
  ];

  // Memory rounds configuration
  const MEMORY_ROUNDS = [
    {
      emojis: ['🥑', '🍣', '🤩', '🥋', '🥨', '🥱', '🧑‍🚀', '🪁'],
      queryWord: 'SUSHI',
      queryEmoji: '🍣',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🥭', '🥶', '🧵', '🧗', '🥟', '🤯', '🤿', '🪴'],
      queryWord: 'WAFFLE',
      queryEmoji: '🧇',
      correctAnswer: 'no'
    },
    {
      emojis: ['🧇', '🧑‍🍳', '🥳', '🛼', '🫐', '🎣', '🏕️', '🥥'],
      queryWord: 'CHEF',
      queryEmoji: '🧑‍🍳',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🥷', '🎻', '🥝', '🤗', '🫑', '🧑‍🔬', '🫣', '🏕️'],
      queryWord: 'ROCK CLIMBING',
      queryEmoji: '🧗',
      correctAnswer: 'no'
    }
  ];

  // Guess What I Like prompts
  const GUESS_QUESTIONS = [
    { emoji: '⚽', question: 'DO YOU LIKE FOOTBALL?' },
    { emoji: '🎮', question: 'DO YOU LIKE VIDEO GAMES?' },
    { emoji: '🍣', question: 'DO YOU LIKE SUSHI?' },
    { emoji: '🧗', question: 'DO YOU LIKE CLIMBING?' },
    { emoji: '🥭', question: 'DO YOU LIKE MANGO?' },
    { emoji: '🎨', question: 'DO YOU LIKE DRAWING?' }
  ];

  // =========================================================================
  // 2. WEB AUDIO SYNTHESIZER & CONFETTI ENGINE
  // =========================================================================
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.soundEnabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      return this.soundEnabled;
    }

    playPop() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }

    playSuccess() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.28, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.35);
      });
    }

    playWrong() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.28);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    }

    playTick() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }

    playFanfare() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, t: 0.00, d: 0.15 },
        { f: 523.25, t: 0.16, d: 0.15 },
        { f: 523.25, t: 0.32, d: 0.15 },
        { f: 659.25, t: 0.48, d: 0.35 },
        { f: 783.99, t: 0.85, d: 0.40 },
        { f: 1046.5, t: 1.30, d: 0.70 }
      ];
      fanfare.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, now + item.t);
        gain.gain.setValueAtTime(0.3, now + item.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + item.t + item.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + item.t);
        osc.stop(now + item.t + item.d);
      });
    }

    speak(word) {
      if (!this.soundEnabled) return;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
      }
    }
  }

  // Canvas Confetti
  class ConfettiEngine {
    constructor() {
      this.canvas = document.getElementById('confetti-canvas');
      this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
      this.particles = [];
      this.animId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    fire(amount = 70) {
      if (!this.canvas || !this.ctx) return;
      const colors = ['#facc15', '#22c55e', '#38bdf8', '#ef4444', '#a855f7', '#fb923c', '#ffffff'];
      for (let i = 0; i < amount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: -20,
          w: Math.random() * 12 + 8,
          h: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 6,
          vy: Math.random() * 4 + 3,
          rot: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 12,
          opacity: 1
        });
      }
      if (!this.animId) {
        this.loop();
      }
    }

    loop() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        p.opacity -= 0.007;

        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();

        if (p.opacity <= 0 || p.y > this.canvas.height + 40) {
          this.particles.splice(i, 1);
        }
      }

      if (this.particles.length > 0) {
        this.animId = requestAnimationFrame(() => this.loop());
      } else {
        this.animId = null;
      }
    }
  }

  // =========================================================================
  // 3. MAIN GAME STATE CONTROLLER
  // =========================================================================
  class GameApp {
    constructor() {
      this.audio = new AudioEngine();
      this.confetti = new ConfettiEngine();

      // State variables
      this.currentScreen = 'screen-start'; // start, intro, game, memory, guess, profile
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.currentQuestionAnswered = false;

      // Memory game state
      this.memoryRoundIndex = 0;
      this.memoryTimerInterval = null;

      // Guessing game state
      this.guessStepIndex = 0;

      this.cacheDOMElements();
      this.bindEvents();
      this.preloadImages();
    }

    cacheDOMElements() {
      // Screens
      this.screens = {
        start: document.getElementById('screen-start'),
        intro: document.getElementById('screen-intro'),
        game: document.getElementById('screen-game'),
        memory: document.getElementById('screen-memory'),
        guess: document.getElementById('screen-guess'),
        profile: document.getElementById('screen-profile')
      };

      // Start screen
      this.btnStartPlay = document.getElementById('btn-start-play');

      // Intro screen
      this.btnIntroHelp = document.getElementById('btn-intro-help');

      // Main Game UI
      this.qCounterText = document.getElementById('q-counter-text');
      this.progressFill = document.getElementById('progress-fill');
      this.scoreDisplay = document.getElementById('game-score-display');
      this.targetEmojiChar = document.getElementById('target-emoji-char');
      this.cardOptA = document.getElementById('card-opt-a');
      this.cardOptB = document.getElementById('card-opt-b');
      this.cardOptC = document.getElementById('card-opt-c');
      this.imgOptA = document.getElementById('img-opt-a');
      this.imgOptB = document.getElementById('img-opt-b');
      this.imgOptC = document.getElementById('img-opt-c');
      this.fallbackOptA = document.getElementById('fallback-opt-a');
      this.fallbackOptB = document.getElementById('fallback-opt-b');
      this.fallbackOptC = document.getElementById('fallback-opt-c');

      this.bannerWrong = document.getElementById('banner-wrong');
      this.bannerCorrect = document.getElementById('banner-correct');
      this.revealedEmoji = document.getElementById('revealed-emoji');
      this.revealedWordText = document.getElementById('revealed-word-text');
      this.btnPronounceWord = document.getElementById('btn-pronounce-word');
      this.btnNextQuestion = document.getElementById('btn-next-question');

      // Memory Game UI
      this.memoryIntroView = document.getElementById('memory-intro-view');
      this.memoryPlayView = document.getElementById('memory-play-view');
      this.btnStartMemoryGame = document.getElementById('btn-start-memory-game');
      this.memoryRoundIndicator = document.getElementById('memory-round-indicator');
      this.memoryMemorizePhase = document.getElementById('memory-memorize-phase');
      this.memoryQuestionPhase = document.getElementById('memory-question-phase');
      this.memoryTimerBar = document.getElementById('memory-timer-bar');
      this.memoryCountdownNum = document.getElementById('memory-countdown-num');
      this.memoryGridContainer = document.getElementById('memory-grid-container');
      this.memoryQueryText = document.getElementById('memory-query-text');
      this.memoryQueryEmoji = document.getElementById('memory-query-emoji');
      this.btnMemYes = document.getElementById('btn-mem-yes');
      this.btnMemNo = document.getElementById('btn-mem-no');
      this.memoryFeedbackBox = document.getElementById('memory-feedback-box');
      this.memFeedbackText = document.getElementById('mem-feedback-text');
      this.btnMemoryNext = document.getElementById('btn-memory-next');

      // Guess What I Like UI
      this.guessStepIndicator = document.getElementById('guess-step-indicator');
      this.guessTargetEmoji = document.getElementById('guess-target-emoji');
      this.guessQuestionTitle = document.getElementById('guess-question-title');
      this.btnGuessYes = document.getElementById('btn-guess-yes');
      this.btnGuessNo = document.getElementById('btn-guess-no');
      this.btnGuessNext = document.getElementById('btn-guess-next');
      this.btnGuessFinish = document.getElementById('btn-guess-finish');

      // Profile Screen UI
      this.finalScoreNum = document.getElementById('final-score-num');
      this.btnReplayGame = document.getElementById('btn-replay-game');

      // Utility Buttons
      this.btnSoundToggle = document.getElementById('btn-sound-toggle');
      this.soundIcon = document.getElementById('sound-icon');
      this.btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');
      this.fullscreenIcon = document.getElementById('fullscreen-icon');
    }

    bindEvents() {
      // 1. Navigation / State buttons
      this.btnStartPlay.addEventListener('click', () => {
        this.audio.playPop();
        this.switchScreen('intro');
      });

      this.btnIntroHelp.addEventListener('click', () => {
        this.audio.playPop();
        this.startMainGame();
      });

      // 2. Choice Cards (A, B, C)
      [this.cardOptA, this.cardOptB, this.cardOptC].forEach(card => {
        card.addEventListener('click', (e) => {
          const choice = card.getAttribute('data-choice');
          this.handleCardSelection(choice, card);
        });
      });

      // 3. Pronunciation button
      this.btnPronounceWord.addEventListener('click', () => {
        const q = QUESTIONS_DATA[this.currentQuestionIndex];
        if (q) {
          this.audio.speak(q.word);
        }
      });

      // 4. Teacher NEXT button
      this.btnNextQuestion.addEventListener('click', () => {
        this.audio.playPop();
        this.goToNextQuestion();
      });

      // 5. Memory Game buttons
      this.btnStartMemoryGame.addEventListener('click', () => {
        this.audio.playPop();
        this.memoryIntroView.classList.add('hidden');
        this.memoryPlayView.classList.remove('hidden');
        this.startMemoryRound(0);
      });

      this.btnMemYes.addEventListener('click', () => this.handleMemoryAnswer('yes'));
      this.btnMemNo.addEventListener('click', () => this.handleMemoryAnswer('no'));

      this.btnMemoryNext.addEventListener('click', () => {
        this.audio.playPop();
        this.advanceMemoryRound();
      });

      // 6. Guess What I Like buttons
      this.btnGuessYes.addEventListener('click', () => this.handleGuessResponse('yes'));
      this.btnGuessNo.addEventListener('click', () => this.handleGuessResponse('no'));

      this.btnGuessNext.addEventListener('click', () => {
        this.audio.playPop();
        this.advanceGuessQuestion();
      });

      this.btnGuessFinish.addEventListener('click', () => {
        this.audio.playFanfare();
        this.confetti.fire(120);
        this.showFinalProfileScreen();
      });

      // 7. Replay button
      this.btnReplayGame.addEventListener('click', () => {
        this.audio.playPop();
        this.resetEntireGame();
      });

      // 8. Teacher Top Utilities
      this.btnSoundToggle.addEventListener('click', () => {
        const isSound = this.audio.toggleSound();
        this.soundIcon.textContent = isSound ? '🔊' : '🔇';
      });

      this.btnFullscreenToggle.addEventListener('click', () => {
        this.toggleFullscreen();
      });

      // 9. Keyboard Shortcuts for Teacher Smart Board Clicker
      window.addEventListener('keydown', (e) => {
        if (this.currentScreen === 'game') {
          if (e.key === '1' || e.key === 'a' || e.key === 'A') this.cardOptA.click();
          if (e.key === '2' || e.key === 'b' || e.key === 'B') this.cardOptB.click();
          if (e.key === '3' || e.key === 'c' || e.key === 'C') this.cardOptC.click();
          if ((e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') && !this.btnNextQuestion.disabled) {
            this.btnNextQuestion.click();
          }
        } else if (this.currentScreen === 'memory') {
          if (e.key === 'y' || e.key === 'Y' || e.key === '1') this.btnMemYes.click();
          if (e.key === 'n' || e.key === 'N' || e.key === '2') this.btnMemNo.click();
        } else if (this.currentScreen === 'guess') {
          if (e.key === 'y' || e.key === 'Y' || e.key === '1') this.btnGuessYes.click();
          if (e.key === 'n' || e.key === 'N' || e.key === '2') this.btnGuessNo.click();
        }
        if (e.key === 'f' || e.key === 'F') {
          this.toggleFullscreen();
        }
      });
    }

    preloadImages() {
      // Preload images into browser cache so question changes are instantaneous
      QUESTIONS_DATA.forEach(q => {
        Object.values(q.options).forEach(opt => {
          const img = new Image();
          img.src = opt.imgUrl;
        });
      });
    }

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        this.fullscreenIcon.textContent = '🗗';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          this.fullscreenIcon.textContent = '⛶';
        }
      }
    }

    // =========================================================================
    // SCREEN STATE MACHINE (Hides all other screens completely)
    // =========================================================================
    switchScreen(screenKey) {
      Object.values(this.screens).forEach(screen => {
        screen.classList.remove('active');
      });

      if (this.screens[screenKey]) {
        this.screens[screenKey].classList.add('active');
        this.currentScreen = screenKey;
      }
    }

    // =========================================================================
    // STATE 3: EMOJI EXPERTS MAIN GAME (15 QUESTIONS)
    // =========================================================================
    startMainGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.scoreDisplay.textContent = '0';
      this.renderQuestion(0);
      this.switchScreen('game');
    }

    renderQuestion(index) {
      const q = QUESTIONS_DATA[index];
      if (!q) return;

      this.currentQuestionAnswered = false;

      // Update question counter & progress bar
      this.qCounterText.textContent = `Question ${index + 1} / ${QUESTIONS_DATA.length}`;
      const progressPct = ((index + 1) / QUESTIONS_DATA.length) * 100;
      this.progressFill.style.width = `${progressPct}%`;

      // Update Target Emoji
      this.targetEmojiChar.textContent = q.emoji;

      // Reset Card States
      [this.cardOptA, this.cardOptB, this.cardOptC].forEach(card => {
        card.classList.remove('is-correct', 'is-wrong', 'is-dimmed');
      });

      // Load 3 photographs
      this.loadCardImage(this.imgOptA, this.fallbackOptA, q.options.A);
      this.loadCardImage(this.imgOptB, this.fallbackOptB, q.options.B);
      this.loadCardImage(this.imgOptC, this.fallbackOptC, q.options.C);

      // Hide feedback banners
      this.bannerWrong.classList.remove('show');
      this.bannerCorrect.classList.remove('show');

      // Disable NEXT button until correct answer is chosen
      this.btnNextQuestion.disabled = true;
    }

    loadCardImage(imgElement, fallbackElement, optionData) {
      imgElement.style.display = 'block';
      fallbackElement.style.display = 'none';
      imgElement.src = optionData.imgUrl;
      
      imgElement.onerror = () => {
        imgElement.style.display = 'none';
        fallbackElement.style.display = 'flex';
        fallbackElement.style.backgroundColor = optionData.fallbackBg;
        fallbackElement.textContent = `📸 ${optionData.label}`;
      };
    }

    handleCardSelection(selectedChoice, cardElement) {
      if (this.currentQuestionAnswered) return;

      const q = QUESTIONS_DATA[this.currentQuestionIndex];
      if (!q) return;

      if (selectedChoice === q.correctChoice) {
        // === CORRECT ANSWER ===
        this.currentQuestionAnswered = true;
        this.score += 1;
        this.scoreDisplay.textContent = this.score;

        // Visual highlights
        cardElement.classList.add('is-correct');
        [this.cardOptA, this.cardOptB, this.cardOptC].forEach(c => {
          if (c !== cardElement) c.classList.add('is-dimmed');
        });

        // Hide wrong banner if visible
        this.bannerWrong.classList.remove('show');

        // Reveal vocabulary banner
        this.revealedEmoji.textContent = q.emoji;
        this.revealedWordText.textContent = q.word;
        this.bannerCorrect.classList.add('show');

        // Sounds & Confetti
        this.audio.playSuccess();
        this.audio.speak(q.word);
        this.confetti.fire(45);

        // Activate NEXT button (Teacher controlled)
        this.btnNextQuestion.disabled = false;

      } else {
        // === WRONG ANSWER ===
        this.audio.playWrong();
        cardElement.classList.remove('is-wrong');
        void cardElement.offsetWidth; // Trigger reflow for animation restart
        cardElement.classList.add('is-wrong');

        this.bannerWrong.classList.add('show');

        // Remove wrong shake state after 600ms so student can try again
        setTimeout(() => {
          cardElement.classList.remove('is-wrong');
        }, 700);
      }
    }

    goToNextQuestion() {
      if (this.currentQuestionIndex < QUESTIONS_DATA.length - 1) {
        this.currentQuestionIndex++;
        this.renderQuestion(this.currentQuestionIndex);
      } else {
        // All 15 questions completed! Transition to Memory Game
        this.switchScreen('memory');
        this.memoryIntroView.classList.remove('hidden');
        this.memoryPlayView.classList.add('hidden');
        this.audio.playFanfare();
        this.confetti.fire(80);
      }
    }

    // =========================================================================
    // STATE 4: MEMORY GAME
    // =========================================================================
    startMemoryRound(roundIndex) {
      this.memoryRoundIndex = roundIndex;
      const round = MEMORY_ROUNDS[roundIndex];
      if (!round) return;

      this.memoryRoundIndicator.textContent = `Round ${roundIndex + 1} / ${MEMORY_ROUNDS.length}`;
      this.memoryMemorizePhase.classList.remove('hidden');
      this.memoryQuestionPhase.classList.add('hidden');
      this.memoryFeedbackBox.classList.add('hidden');
      this.btnMemYes.disabled = false;
      this.btnMemNo.disabled = false;
      this.btnMemYes.classList.remove('is-correct', 'is-wrong');
      this.btnMemNo.classList.remove('is-correct', 'is-wrong');

      // Populate Grid
      this.memoryGridContainer.innerHTML = '';
      round.emojis.forEach(emoji => {
        const cell = document.createElement('div');
        cell.className = 'memory-card-cell';
        cell.textContent = emoji;
        this.memoryGridContainer.appendChild(cell);
      });

      // 5-second countdown timer
      let timeLeft = 5;
      this.memoryCountdownNum.textContent = timeLeft;
      this.memoryTimerBar.style.width = '100%';
      this.memoryTimerBar.style.transition = 'width 1s linear';

      clearInterval(this.memoryTimerInterval);
      this.memoryTimerInterval = setInterval(() => {
        timeLeft--;
        this.audio.playTick();
        this.memoryCountdownNum.textContent = timeLeft;
        this.memoryTimerBar.style.width = `${(timeLeft / 5) * 100}%`;

        if (timeLeft <= 0) {
          clearInterval(this.memoryTimerInterval);
          this.showMemoryQuestion(round);
        }
      }, 1000);
    }

    showMemoryQuestion(round) {
      this.memoryMemorizePhase.classList.add('hidden');
      this.memoryQuestionPhase.classList.remove('hidden');

      this.memoryQueryText.textContent = `WAS THERE ${round.queryWord}?`;
      this.memoryQueryEmoji.textContent = round.queryEmoji;
    }

    handleMemoryAnswer(answer) {
      const round = MEMORY_ROUNDS[this.memoryRoundIndex];
      if (!round) return;

      this.btnMemYes.disabled = true;
      this.btnMemNo.disabled = true;

      const isCorrect = (answer === round.correctAnswer);
      if (isCorrect) {
        this.audio.playSuccess();
        this.confetti.fire(40);
        this.memFeedbackText.textContent = 'CORRECT! ⭐';
        this.memFeedbackText.style.color = '#4ade80';
        if (answer === 'yes') this.btnMemYes.classList.add('is-correct');
        else this.btnMemNo.classList.add('is-correct');
      } else {
        this.audio.playWrong();
        this.memFeedbackText.textContent = 'NICE TRY! ❌';
        this.memFeedbackText.style.color = '#f87171';
        if (answer === 'yes') this.btnMemYes.classList.add('is-wrong');
        else this.btnMemNo.classList.add('is-wrong');
      }

      this.memoryFeedbackBox.classList.remove('hidden');
    }

    advanceMemoryRound() {
      if (this.memoryRoundIndex < MEMORY_ROUNDS.length - 1) {
        this.startMemoryRound(this.memoryRoundIndex + 1);
      } else {
        // Transition to Guess What I Like Game
        this.startGuessGame();
      }
    }

    // =========================================================================
    // STATE 5: GUESS WHAT I LIKE
    // =========================================================================
    startGuessGame() {
      this.guessStepIndex = 0;
      this.renderGuessQuestion(0);
      this.switchScreen('guess');
    }

    renderGuessQuestion(index) {
      const g = GUESS_QUESTIONS[index];
      if (!g) return;

      this.guessStepIndicator.textContent = `Emoji ${index + 1} / ${GUESS_QUESTIONS.length}`;
      this.guessTargetEmoji.textContent = g.emoji;
      this.guessQuestionTitle.textContent = g.question;

      this.btnGuessYes.disabled = false;
      this.btnGuessNo.disabled = false;
      this.btnGuessNext.classList.add('hidden');
      this.btnGuessFinish.classList.add('hidden');
    }

    handleGuessResponse(choice) {
      this.audio.playPop();
      if (choice === 'yes') {
        this.audio.playSuccess();
        this.confetti.fire(30);
      }

      this.btnGuessYes.disabled = true;
      this.btnGuessNo.disabled = true;

      if (this.guessStepIndex < GUESS_QUESTIONS.length - 1) {
        this.btnGuessNext.classList.remove('hidden');
      } else {
        this.btnGuessFinish.classList.remove('hidden');
      }
    }

    advanceGuessQuestion() {
      if (this.guessStepIndex < GUESS_QUESTIONS.length - 1) {
        this.guessStepIndex++;
        this.renderGuessQuestion(this.guessStepIndex);
      }
    }

    // =========================================================================
    // STATE 6: FINAL PROFILE SCREEN
    // =========================================================================
    showFinalProfileScreen() {
      this.finalScoreNum.textContent = this.score;
      this.switchScreen('profile');
    }

    resetEntireGame() {
      clearInterval(this.memoryTimerInterval);
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.memoryRoundIndex = 0;
      this.guessStepIndex = 0;
      this.switchScreen('start');
    }
  }

  // =========================================================================
  // BOOTSTRAP APPLICATION
  // =========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    window.gameInstance = new GameApp();
  });

})();
