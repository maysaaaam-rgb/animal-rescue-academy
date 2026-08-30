/**
 * ⭐ EMOJI EXPERTS ⭐ — ALL ABOUT ME CLASSROOM SMART BOARD GAME ENGINE
 * Strictly powered by the official "ALL ABOUT ME!" & "EMOJI WORDS" reference vocabulary.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA: QUICK WARM-UP & MAIN GAME DATA FROM OFFICIAL SHEETS
  // =========================================================================
  
  // Warm-up flashcard items
  const WARMUP_DATA = [
    { emoji: '🎮', word: 'PLAY GAMES' },
    { emoji: '🥑', word: 'AVOCADO' },
    { emoji: '🎤', word: 'SING' },
    { emoji: '🥦', word: 'BROCCOLI' },
    { emoji: '🍕', word: 'PIZZA' },
    { emoji: '🚲', word: 'RIDE A BIKE' }
  ];

  // 18 Curated Questions mixing all 4 profile categories
  const QUESTIONS_DATA = [
    {
      id: 1,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🎮',
      word: 'PLAY GAMES',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Child playing video games with controller',
          imgUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        },
        B: {
          label: 'Child reading a book in library',
          imgUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Child riding a bicycle in park',
          imgUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        }
      }
    },
    {
      id: 2,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🥑',
      word: 'AVOCADO',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Sliced green kiwi fruit',
          imgUrl: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        B: {
          label: 'Fresh sliced ripe avocado with seed',
          imgUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        C: {
          label: 'Crisp green apples',
          imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        }
      }
    },
    {
      id: 3,
      category: 'How do you feel about English?',
      catIcon: '💜',
      emoji: '🤔',
      word: 'CURIOUS',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child crying / sad',
          imgUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        B: {
          label: 'Child looking curious / thinking with hand on chin',
          imgUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Child laughing out loud',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        }
      }
    },
    {
      id: 4,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🎤',
      word: 'SING',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Child singing into microphone',
          imgUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        },
        B: {
          label: 'Child listening to music with headphones',
          imgUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Child watching videos on tablet',
          imgUrl: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 5,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🥦',
      word: 'BROCCOLI',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Sliced green cucumber',
          imgUrl: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        B: {
          label: 'Fresh green broccoli florets',
          imgUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        C: {
          label: 'Green bell peppers',
          imgUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        }
      }
    },
    {
      id: 6,
      category: 'My favorite color',
      catIcon: '💙',
      emoji: '🔵',
      word: 'BLUE',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Bright red backpack',
          imgUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        },
        B: {
          label: 'Bright blue backpack',
          imgUrl: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#38bdf8'
        },
        C: {
          label: 'Bright yellow backpack',
          imgUrl: 'https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    },
    {
      id: 7,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🚲',
      word: 'RIDE A BIKE',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Child skateboarding with helmet',
          imgUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        B: {
          label: 'Child swimming in pool',
          imgUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bae6fd'
        },
        C: {
          label: 'Child riding a bicycle outdoors',
          imgUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        }
      }
    },
    {
      id: 8,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🍕',
      word: 'PIZZA',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Hot cheesy pizza slice',
          imgUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        },
        B: {
          label: 'Toasted sandwich with cheese',
          imgUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Bowl of oatmeal with fruit',
          imgUrl: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        }
      }
    },
    {
      id: 9,
      category: 'How do you feel about English?',
      catIcon: '💜',
      emoji: '🤩',
      word: 'EXCITED',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child reading quietly',
          imgUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        B: {
          label: 'Child with huge smile jumping with excitement',
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        C: {
          label: 'Child looking confused / scratching head',
          imgUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 10,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🎨',
      word: 'DRAW',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Child painting / drawing with colors and paintbrush',
          imgUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        },
        B: {
          label: 'Child taking photos with camera',
          imgUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Child doing jigsaw puzzle',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 11,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🍓',
      word: 'STRAWBERRY',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Fresh red tomatoes',
          imgUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        },
        B: {
          label: 'Fresh sweet red strawberries',
          imgUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        },
        C: {
          label: 'Fresh blueberries',
          imgUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#93c5fd'
        }
      }
    },
    {
      id: 12,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🎧',
      word: 'LISTEN TO MUSIC',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child singing into microphone',
          imgUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        },
        B: {
          label: 'Child wearing headphones listening to music',
          imgUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Child watching video on tablet',
          imgUrl: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 13,
      category: 'My favorite color',
      catIcon: '💙',
      emoji: '🔴',
      word: 'RED',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Bright red shiny apple',
          imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        },
        B: {
          label: 'Bright green apple',
          imgUrl: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        C: {
          label: 'Bright yellow fruit',
          imgUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    },
    {
      id: 14,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🧩',
      word: 'DO PUZZLES',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child building colorful blocks',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        },
        B: {
          label: 'Child assembling jigsaw puzzle pieces',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Child drawing with colored pens',
          imgUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    },
    {
      id: 15,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🍉',
      word: 'WATERMELON',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Sliced pineapple',
          imgUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Sliced ripe mango',
          imgUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Fresh sliced red watermelon with black seeds',
          imgUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        }
      }
    },
    {
      id: 16,
      category: 'How do you feel about English?',
      catIcon: '💜',
      emoji: '😟',
      word: 'NERVOUS',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child laughing happily',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Child looking nervous / anxious in classroom',
          imgUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Child sleeping peacefully',
          imgUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        }
      }
    },
    {
      id: 17,
      category: 'Things I love to do',
      catIcon: '💚',
      emoji: '🏕️',
      word: 'CAMP',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Tent camping in forest outdoors',
          imgUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        B: {
          label: 'Living room with sofa',
          imgUrl: 'https://images.unsplash.com/photo-1554995207-c18c20360250?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Indoor swimming pool',
          imgUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bae6fd'
        }
      }
    },
    {
      id: 18,
      category: 'My favorite food',
      catIcon: '🧡',
      emoji: '🍦',
      word: 'ICE CREAM',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Bowl of yogurt / milk',
          imgUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f1f5f9'
        },
        B: {
          label: 'Bowl of vegetable soup',
          imgUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Delicious strawberry ice cream cone',
          imgUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    }
  ];

  // Official Profile Memory rounds
  const MEMORY_ROUNDS = [
    {
      emojis: ['🎮', '🎧', '🎨', '⚽', '🥑', '🍓', '🥦', '🍕'],
      queryWord: 'PIZZA',
      queryEmoji: '🍕',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🚲', '🏊', '🧩', '🎤', '🍉', '🥕', '🥪', '🍦'],
      queryWord: 'SALMON',
      queryEmoji: '🐟',
      correctAnswer: 'no'
    },
    {
      emojis: ['📷', '🛹', '🧱', '🏕️', '🍎', '🍌', '🥗', '🍗'],
      queryWord: 'CAMPING',
      queryEmoji: '🏕️',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🚁', '🪐', '📖', '💃', '🫐', '🥒', '🥣', '🥜'],
      queryWord: 'FLY A DRONE',
      queryEmoji: '🚁',
      correctAnswer: 'yes'
    }
  ];

  // Guess What I Like prompts from profile options
  const GUESS_QUESTIONS = [
    { emoji: '⚽', question: 'DO YOU LIKE PLAYING FOOTBALL?' },
    { emoji: '🎮', question: 'DO YOU LIKE PLAYING GAMES?' },
    { emoji: '🍕', question: 'DO YOU LIKE PIZZA?' },
    { emoji: '🥑', question: 'DO YOU LIKE AVOCADO?' },
    { emoji: '🎨', question: 'DO YOU LIKE DRAWING?' },
    { emoji: '🍓', question: 'DO YOU LIKE STRAWBERRIES?' }
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
      const notes = [523.25, 659.25, 783.99, 1046.5];
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
      this.currentScreen = 'screen-welcome';
      this.isZoomed = false;

      // Warm-up state
      this.warmupIndex = 0;

      // Main game state
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
        welcome: document.getElementById('screen-welcome'),
        lookLearn: document.getElementById('screen-look-learn'),
        warmup: document.getElementById('screen-warmup'),
        game: document.getElementById('screen-game'),
        memory: document.getElementById('screen-memory'),
        guess: document.getElementById('screen-guess'),
        profile: document.getElementById('screen-profile')
      };

      // Screen 1: Welcome
      this.btnStartPlay = document.getElementById('btn-start-play');

      // Screen 2: Look & Learn
      this.tabBtnEmojiWords = document.getElementById('tab-btn-emoji-words');
      this.tabBtnProfileSheet = document.getElementById('tab-btn-profile-sheet');
      this.viewerEmojiWords = document.getElementById('viewer-emoji-words');
      this.viewerProfileSheet = document.getElementById('viewer-profile-sheet');
      this.referenceStage = document.getElementById('reference-stage');
      this.btnZoomImage = document.getElementById('btn-zoom-image');
      this.btnReadAloud = document.getElementById('btn-read-aloud');
      this.btnLookReady = document.getElementById('btn-look-ready');

      // Screen 2B: Warmup
      this.warmupCounterText = document.getElementById('warmup-counter-text');
      this.warmupEmojiChar = document.getElementById('warmup-emoji-char');
      this.btnWarmupReveal = document.getElementById('btn-warmup-reveal');
      this.warmupRevealedBanner = document.getElementById('warmup-revealed-banner');
      this.warmupWordText = document.getElementById('warmup-word-text');
      this.btnWarmupPronounce = document.getElementById('btn-warmup-pronounce');
      this.btnWarmupNext = document.getElementById('btn-warmup-next');
      this.btnWarmupStartMain = document.getElementById('btn-warmup-start-main');

      // Screen 3: Main Game UI
      this.categoryBadgeIcon = document.getElementById('category-badge-icon');
      this.categoryBadgeText = document.getElementById('category-badge-text');
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

      // Screen 4: Memory Game UI
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

      // Screen 5: Guess What I Like UI
      this.guessStepIndicator = document.getElementById('guess-step-indicator');
      this.guessTargetEmoji = document.getElementById('guess-target-emoji');
      this.guessQuestionTitle = document.getElementById('guess-question-title');
      this.btnGuessYes = document.getElementById('btn-guess-yes');
      this.btnGuessNo = document.getElementById('btn-guess-no');
      this.btnGuessNext = document.getElementById('btn-guess-next');
      this.btnGuessFinish = document.getElementById('btn-guess-finish');

      // Screen 6: Profile Screen UI
      this.finalScoreNum = document.getElementById('final-score-num');
      this.btnReplayGame = document.getElementById('btn-replay-game');

      // Utility Buttons
      this.btnSoundToggle = document.getElementById('btn-sound-toggle');
      this.soundIcon = document.getElementById('sound-icon');
      this.btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');
      this.fullscreenIcon = document.getElementById('fullscreen-icon');
    }

    bindEvents() {
      // 1. Welcome Screen
      this.btnStartPlay.addEventListener('click', () => {
        this.audio.playPop();
        this.switchScreen('lookLearn');
      });

      // 2. Look & Learn Tabs & Tools
      this.tabBtnEmojiWords.addEventListener('click', () => {
        this.audio.playPop();
        this.tabBtnEmojiWords.classList.add('active');
        this.tabBtnProfileSheet.classList.remove('active');
        this.viewerEmojiWords.classList.add('active');
        this.viewerProfileSheet.classList.remove('active');
      });

      this.tabBtnProfileSheet.addEventListener('click', () => {
        this.audio.playPop();
        this.tabBtnProfileSheet.classList.add('active');
        this.tabBtnEmojiWords.classList.remove('active');
        this.viewerProfileSheet.classList.add('active');
        this.viewerEmojiWords.classList.remove('active');
      });

      this.btnZoomImage.addEventListener('click', () => {
        this.audio.playPop();
        this.isZoomed = !this.isZoomed;
        if (this.isZoomed) {
          this.referenceStage.classList.add('zoomed');
          this.btnZoomImage.style.background = '#22c55e';
        } else {
          this.referenceStage.classList.remove('zoomed');
          this.btnZoomImage.style.background = 'rgba(0,0,0,0.35)';
        }
      });

      this.btnReadAloud.addEventListener('click', () => {
        this.audio.playPop();
        this.audio.speak("Look at the emoji words and repeat with your teacher!");
      });

      this.btnLookReady.addEventListener('click', () => {
        this.audio.playPop();
        this.startWarmup();
      });

      // 2B. Warm-Up Controls
      this.btnWarmupReveal.addEventListener('click', () => {
        this.revealWarmupWord();
      });

      this.btnWarmupPronounce.addEventListener('click', () => {
        const item = WARMUP_DATA[this.warmupIndex];
        if (item) {
          this.audio.speak(item.word);
        }
      });

      this.btnWarmupNext.addEventListener('click', () => {
        this.audio.playPop();
        this.advanceWarmup();
      });

      this.btnWarmupStartMain.addEventListener('click', () => {
        this.audio.playPop();
        this.startMainGame();
      });

      // 3. Choice Cards (A, B, C)
      [this.cardOptA, this.cardOptB, this.cardOptC].forEach(card => {
        card.addEventListener('click', () => {
          const choice = card.getAttribute('data-choice');
          this.handleCardSelection(choice, card);
        });
      });

      // Main Game Pronunciation button
      this.btnPronounceWord.addEventListener('click', () => {
        const q = QUESTIONS_DATA[this.currentQuestionIndex];
        if (q) {
          this.audio.speak(q.word);
        }
      });

      // Teacher NEXT button
      this.btnNextQuestion.addEventListener('click', () => {
        this.audio.playPop();
        this.goToNextQuestion();
      });

      // 4. Memory Game buttons
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

      // 5. Guess What I Like buttons
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

      // 6. Replay button
      this.btnReplayGame.addEventListener('click', () => {
        this.audio.playPop();
        this.resetEntireGame();
      });

      // 7. Teacher Top Utilities
      this.btnSoundToggle.addEventListener('click', () => {
        const isSound = this.audio.toggleSound();
        this.soundIcon.textContent = isSound ? '🔊' : '🔇';
      });

      this.btnFullscreenToggle.addEventListener('click', () => {
        this.toggleFullscreen();
      });

      // 8. Keyboard Shortcuts for Teacher Clicker
      window.addEventListener('keydown', (e) => {
        if (this.currentScreen === 'game') {
          if (e.key === '1' || e.key === 'a' || e.key === 'A') this.cardOptA.click();
          if (e.key === '2' || e.key === 'b' || e.key === 'B') this.cardOptB.click();
          if (e.key === '3' || e.key === 'c' || e.key === 'C') this.cardOptC.click();
          if ((e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') && !this.btnNextQuestion.disabled) {
            this.btnNextQuestion.click();
          }
        } else if (this.currentScreen === 'warmup') {
          if (e.key === ' ' || e.key === 'Enter') {
            if (!this.btnWarmupReveal.classList.contains('hidden')) {
              this.btnWarmupReveal.click();
            } else if (!this.btnWarmupNext.classList.contains('hidden')) {
              this.btnWarmupNext.click();
            } else if (!this.btnWarmupStartMain.classList.contains('hidden')) {
              this.btnWarmupStartMain.click();
            }
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

    switchScreen(screenKey) {
      Object.values(this.screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
      });

      if (this.screens[screenKey]) {
        this.screens[screenKey].classList.add('active');
        this.currentScreen = screenKey;
      }
    }

    // =========================================================================
    // STATE 2B: QUICK PRACTICE / WARM-UP
    // =========================================================================
    startWarmup() {
      this.warmupIndex = 0;
      this.renderWarmup(0);
      this.switchScreen('warmup');
    }

    renderWarmup(index) {
      const item = WARMUP_DATA[index];
      if (!item) return;

      this.warmupCounterText.textContent = `Word ${index + 1} / ${WARMUP_DATA.length}`;
      this.warmupEmojiChar.textContent = item.emoji;
      this.warmupWordText.textContent = item.word;

      this.btnWarmupReveal.classList.remove('hidden');
      this.warmupRevealedBanner.classList.add('hidden');
      this.btnWarmupNext.classList.add('hidden');
      this.btnWarmupStartMain.classList.add('hidden');
    }

    revealWarmupWord() {
      const item = WARMUP_DATA[this.warmupIndex];
      if (!item) return;

      this.audio.playSuccess();
      this.audio.speak(item.word);
      this.confetti.fire(35);

      this.btnWarmupReveal.classList.add('hidden');
      this.warmupRevealedBanner.classList.remove('hidden');

      if (this.warmupIndex < WARMUP_DATA.length - 1) {
        this.btnWarmupNext.classList.remove('hidden');
      } else {
        this.btnWarmupStartMain.classList.remove('hidden');
      }
    }

    advanceWarmup() {
      if (this.warmupIndex < WARMUP_DATA.length - 1) {
        this.warmupIndex++;
        this.renderWarmup(this.warmupIndex);
      }
    }

    // =========================================================================
    // STATE 3: EMOJI EXPERTS MAIN GAME (18 QUESTIONS)
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

      // Update Category Tag
      this.categoryBadgeIcon.textContent = q.catIcon;
      this.categoryBadgeText.textContent = q.category;

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
        void cardElement.offsetWidth;
        cardElement.classList.add('is-wrong');

        this.bannerWrong.classList.add('show');

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
        // All 18 questions completed! Transition to Memory Game
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
      this.warmupIndex = 0;
      this.isZoomed = false;
      if (this.referenceStage) this.referenceStage.classList.remove('zoomed');
      this.switchScreen('welcome');
    }
  }

  // =========================================================================
  // BOOTSTRAP APPLICATION
  // =========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    window.gameInstance = new GameApp();
  });

})();
