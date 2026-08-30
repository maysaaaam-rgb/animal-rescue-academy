/**
 * ⭐ EMOJI EXPERTS ⭐ — OFFICIAL VOCABULARY CLASSROOM SMART BOARD GAME ENGINE
 * Single-Page State Machine, Audio Synthesizer, Confetti Engine, Touch UX
 * Official Vocabulary for "ALL ABOUT ME!" Profile Preparation
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA: 20 MIXED QUESTIONS FROM OFFICIAL "ALL ABOUT ME!" WORKSHEET
  // =========================================================================
  const QUESTIONS_DATA = [
    {
      id: 1,
      category: 'Things I love to do',
      categoryIcon: '💚',
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
          label: 'Child watching videos on tablet',
          imgUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        C: {
          label: 'Child reading a book quietly',
          imgUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        }
      }
    },
    {
      id: 2,
      category: 'My favorite food',
      categoryIcon: '🧡',
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
          label: 'Fresh Sliced Avocado with seed',
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
      category: 'How do you feel about English?',
      categoryIcon: '💜',
      emoji: '🤔',
      word: 'CURIOUS',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child crying with tears',
          imgUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fee2e2'
        },
        B: {
          label: 'Child with hand on chin looking curious',
          imgUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Child laughing with friends',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        }
      }
    },
    {
      id: 4,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '🚲',
      word: 'RIDE A BIKE',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child riding a skateboard',
          imgUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        B: {
          label: 'Child wearing helmet riding a bicycle',
          imgUrl: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Child swimming in pool',
          imgUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bae6fd'
        }
      }
    },
    {
      id: 5,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🍕',
      word: 'PIZZA',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Stack of pancakes with syrup',
          imgUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde68a'
        },
        B: {
          label: 'Toasted sandwich with cheese',
          imgUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Cheesy pepperoni pizza slice',
          imgUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        }
      }
    },
    {
      id: 6,
      category: 'How do you feel about English?',
      categoryIcon: '💜',
      emoji: '🤩',
      word: 'EXCITED',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child reading quietly',
          imgUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        B: {
          label: 'Excited child jumping joyfully with sparkling eyes',
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        C: {
          label: 'Child looking bored / resting head',
          imgUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        }
      }
    },
    {
      id: 7,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '🧩',
      word: 'DO PUZZLES',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Building with toy blocks',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde68a'
        },
        B: {
          label: 'Assembling jigsaw puzzle pieces on table',
          imgUrl: 'https://images.unsplash.com/photo-1618842676087-c1f8238248bc?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#93c5fd'
        },
        C: {
          label: 'Painting with watercolors',
          imgUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    },
    {
      id: 8,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🥦',
      word: 'BROCCOLI',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Fresh sliced cucumbers',
          imgUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        },
        B: {
          label: 'Green bell peppers',
          imgUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        },
        C: {
          label: 'Fresh green broccoli florets',
          imgUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#4ade80'
        }
      }
    },
    {
      id: 9,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '📷',
      word: 'TAKE PHOTOS',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child holding a tablet screen',
          imgUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        B: {
          label: 'Child holding camera taking a photo',
          imgUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Child with headphones listening to music',
          imgUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        }
      }
    },
    {
      id: 10,
      category: 'Things I love to do',
      categoryIcon: '💚',
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
          label: 'Listening to music with headphones',
          imgUrl: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Watching videos on phone',
          imgUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        }
      }
    },
    {
      id: 11,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🍓',
      word: 'STRAWBERRY',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Fresh blueberries bowl',
          imgUrl: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#c7d2fe'
        },
        B: {
          label: 'Sliced watermelon',
          imgUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        C: {
          label: 'Bright red fresh strawberries',
          imgUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#f87171'
        }
      }
    },
    {
      id: 12,
      category: 'My favorite color',
      categoryIcon: '💙',
      emoji: '🔵',
      word: 'BLUE',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Bright Red Color Object',
          imgUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#ef4444'
        },
        B: {
          label: 'Vibrant Blue Color Object',
          imgUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#3b82f6'
        },
        C: {
          label: 'Bright Yellow Color Object',
          imgUrl: 'https://images.unsplash.com/photo-1587496679742-bad502958fbe?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#eab308'
        }
      }
    },
    {
      id: 13,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '🧱',
      word: 'BUILD THINGS',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Kids building tower with colorful toy blocks',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Kids playing board games',
          imgUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Kids drawing on paper',
          imgUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        }
      }
    },
    {
      id: 14,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🥪',
      word: 'SANDWICH',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Bowl of vegetable soup',
          imgUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        B: {
          label: 'Fresh sandwich with lettuce, cheese and tomato',
          imgUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde68a'
        },
        C: {
          label: 'Bowl of yogurt with berries',
          imgUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        }
      }
    },
    {
      id: 15,
      category: 'How do you feel about English?',
      categoryIcon: '💜',
      emoji: '😟',
      word: 'NERVOUS',
      correctChoice: 'A',
      options: {
        A: {
          label: 'Child feeling nervous biting nails',
          imgUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        B: {
          label: 'Happy smiling child celebrating',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        C: {
          label: 'Sleeping child peacefully',
          imgUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#cbd5e1'
        }
      }
    },
    {
      id: 16,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '🛹',
      word: 'SKATEBOARD',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Child riding bicycle',
          imgUrl: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        B: {
          label: 'Skateboarding at skatepark',
          imgUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Child running on track',
          imgUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bbf7d0'
        }
      }
    },
    {
      id: 17,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🥗',
      word: 'SALAD',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Bowl of oatmeal with honey',
          imgUrl: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Plate of grilled chicken',
          imgUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fed7aa'
        },
        C: {
          label: 'Fresh colorful garden salad bowl',
          imgUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#86efac'
        }
      }
    },
    {
      id: 18,
      category: 'Things I love to do',
      categoryIcon: '💚',
      emoji: '🎧',
      word: 'LISTEN TO MUSIC',
      correctChoice: 'B',
      options: {
        A: {
          label: 'Talking on phone',
          imgUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        B: {
          label: 'Child with headphones listening to music',
          imgUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#bfdbfe'
        },
        C: {
          label: 'Singing into microphone',
          imgUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    },
    {
      id: 19,
      category: 'How do you feel about English?',
      categoryIcon: '💜',
      emoji: '😭',
      word: 'NEED HELP',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Happy laughing child',
          imgUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fef08a'
        },
        B: {
          label: 'Curious child thinking',
          imgUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#e2e8f0'
        },
        C: {
          label: 'Child crying with tears needing help',
          imgUrl: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fca5a5'
        }
      }
    },
    {
      id: 20,
      category: 'My favorite food',
      categoryIcon: '🧡',
      emoji: '🍦',
      word: 'ICE CREAM',
      correctChoice: 'C',
      options: {
        A: {
          label: 'Bowl of yogurt with berries',
          imgUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fbcfe8'
        },
        B: {
          label: 'Fresh sliced watermelon',
          imgUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fecaca'
        },
        C: {
          label: 'Delicious colorful ice cream cone',
          imgUrl: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80',
          fallbackBg: '#fde047'
        }
      }
    }
  ];

  // Official memory game rounds with exact profile emojis
  const MEMORY_ROUNDS = [
    {
      emojis: ['🎮', '🥑', '🎧', '🥦', '🧩', '🍕', '🎤', '🛹'],
      queryWord: 'PIZZA',
      queryEmoji: '🍕',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🚲', '🍓', '🤔', '🧱', '🥪', '🤩', '📷', '🥗'],
      queryWord: 'ICE CREAM',
      queryEmoji: '🍦',
      correctAnswer: 'no'
    },
    {
      emojis: ['🍦', '🎤', '😟', '🔵', '🛹', '🎧', '🥦', '🎮'],
      queryWord: 'SINGING',
      queryEmoji: '🎤',
      correctAnswer: 'yes'
    },
    {
      emojis: ['🧱', '🥑', '😭', '🍓', '🍕', '🚲', '🧩', '🎧'],
      queryWord: 'BROCCOLI',
      queryEmoji: '🥦',
      correctAnswer: 'no'
    }
  ];

  // Official Guess What I Like prompts from the profile
  const GUESS_QUESTIONS = [
    { emoji: '⚽', question: 'DO YOU LIKE FOOTBALL?' },
    { emoji: '🍕', question: 'DO YOU LIKE PIZZA?' },
    { emoji: '🎮', question: 'DO YOU LIKE PLAYING GAMES?' },
    { emoji: '🍓', question: 'DO YOU LIKE STRAWBERRIES?' },
    { emoji: '🎨', question: 'DO YOU LIKE DRAWING?' },
    { emoji: '🍦', question: 'DO YOU LIKE ICE CREAM?' },
    { emoji: '🎧', question: 'DO YOU LIKE MUSIC?' },
    { emoji: '🛹', question: 'DO YOU LIKE SKATEBOARDING?' }
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
      this.currentScreen = 'screen-start';
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

      // Modal Elements
      this.worksheetModal = document.getElementById('worksheet-modal');
      this.btnOpenSheetModal = document.getElementById('btn-open-sheet-modal');
      this.btnCloseModal = document.getElementById('btn-close-modal');
      this.tabBtnProfile = document.getElementById('tab-btn-profile');
      this.tabBtnWords = document.getElementById('tab-btn-words');
      this.paneProfile = document.getElementById('pane-profile');
      this.paneWords = document.getElementById('pane-words');
      this.btnPreviewSheetStart = document.getElementById('btn-preview-sheet-start');
      this.introPreviewTrigger = document.getElementById('intro-preview-trigger');
      this.btnOpenFinalSheet = document.getElementById('btn-open-final-sheet');

      // Start screen
      this.btnStartPlay = document.getElementById('btn-start-play');

      // Intro screen
      this.btnIntroHelp = document.getElementById('btn-intro-help');

      // Main Game UI
      this.qCategoryPill = document.getElementById('q-category-pill');
      this.qCatIcon = document.getElementById('q-cat-icon');
      this.qCatText = document.getElementById('q-cat-text');
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
        card.addEventListener('click', () => {
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

      // 8. Teacher Top Utilities & Modal Triggers
      this.btnSoundToggle.addEventListener('click', () => {
        const isSound = this.audio.toggleSound();
        this.soundIcon.textContent = isSound ? '🔊' : '🔇';
      });

      this.btnFullscreenToggle.addEventListener('click', () => {
        this.toggleFullscreen();
      });

      const openModal = (tab = 'profile') => {
        this.audio.playPop();
        this.switchModalTab(tab);
        this.worksheetModal.classList.remove('hidden');
      };

      this.btnOpenSheetModal.addEventListener('click', () => openModal('profile'));
      if (this.btnPreviewSheetStart) this.btnPreviewSheetStart.addEventListener('click', () => openModal('profile'));
      if (this.introPreviewTrigger) this.introPreviewTrigger.addEventListener('click', () => openModal('profile'));
      if (this.btnOpenFinalSheet) this.btnOpenFinalSheet.addEventListener('click', () => openModal('profile'));

      this.btnCloseModal.addEventListener('click', () => {
        this.audio.playPop();
        this.worksheetModal.classList.add('hidden');
      });

      this.tabBtnProfile.addEventListener('click', () => this.switchModalTab('profile'));
      this.tabBtnWords.addEventListener('click', () => this.switchModalTab('words'));

      // 9. Keyboard Shortcuts for Teacher Smart Board Clicker
      window.addEventListener('keydown', (e) => {
        if (!this.worksheetModal.classList.contains('hidden')) {
          if (e.key === 'Escape') this.btnCloseModal.click();
          return;
        }

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

    switchModalTab(tabKey) {
      this.audio.playPop();
      if (tabKey === 'profile') {
        this.tabBtnProfile.classList.add('active');
        this.tabBtnWords.classList.remove('active');
        this.paneProfile.classList.remove('hidden');
        this.paneWords.classList.add('hidden');
      } else {
        this.tabBtnProfile.classList.remove('active');
        this.tabBtnWords.classList.add('active');
        this.paneProfile.classList.add('hidden');
        this.paneWords.classList.remove('hidden');
      }
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
    // STATE 3: EMOJI EXPERTS MAIN GAME (ONE QUESTION PER SCREEN)
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
      this.qCatIcon.textContent = q.categoryIcon;
      this.qCatText.textContent = q.category;

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
        // All 20 questions completed! Transition to Memory Game
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
