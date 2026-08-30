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
          label: 'Bright Red Color Paint & Crayon',
          imgUrl: 'assets/color_red.jpg',
          fallbackBg: '#ef4444'
        },
        B: {
          label: 'Vibrant Blue Color Paint & Crayon',
          imgUrl: 'assets/color_blue.jpg',
          fallbackBg: '#3b82f6'
        },
        C: {
          label: 'Bright Yellow Color Paint & Crayon',
          imgUrl: 'assets/color_yellow.jpg',
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
          imgUrl: 'assets/kid_nervous.jpg',
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
      word: 'SAD / NEED HELP',
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
          label: 'Child looking sad and upset at desk',
          imgUrl: 'assets/kid_sad.jpg',
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

    playHop() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    }

    playDiceRoll() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      for (let i = 0; i < 6; i++) {
        const time = this.ctx.currentTime + i * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320 + Math.random() * 380, time);
        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(time);
        osc.stop(time + 0.04);
      }
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

    playPointChime() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [587.33, 880.00]; // D5, A5
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.3, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    }

    playSoftClick() {
      if (!this.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
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
  // 3. EMOJI MONOPOLY BOARD GAME ENGINE (NEW MODULE)
  // =========================================================================
  // 26 Spaces: Strict Continuous Linear Path from START (0) to FINISH (25).
  // There are NO spaces after FINISH.
  const MONOPOLY_BOARD_TILES = [
    // Top Row: Spaces 0 to 7 (Moving Right ➡️)
    { index: 0, type: 'start', name: 'START', icon: '🏁', label: '+2 ⭐', arrow: '➡️', gridCol: 1, gridRow: 1 },
    { index: 1, type: 'category', category: 'activities', categoryName: 'ACTIVITY', icon: '💚', name: 'ACTIVITY', targetName: 'PLAY GAMES', emoji: '🎮', arrow: '➡️', difficulty: 'easy', gridCol: 2, gridRow: 1 },
    { index: 2, type: 'category', category: 'food', categoryName: 'FOOD', icon: '❤️', name: 'FOOD', targetName: 'AVOCADO', emoji: '🥑', arrow: '➡️', difficulty: 'easy', gridCol: 3, gridRow: 1 },
    { index: 3, type: 'category', category: 'colors', categoryName: 'COLOR', icon: '💙', name: 'COLOR', targetName: 'BLUE', emoji: '🔵', arrow: '➡️', difficulty: 'easy', gridCol: 4, gridRow: 1 },
    { index: 4, type: 'category', category: 'feelings', categoryName: 'FEELING', icon: '💜', name: 'FEELING', targetName: 'EXCITED', emoji: '🤩', arrow: '➡️', difficulty: 'medium', gridCol: 5, gridRow: 1 },
    { index: 5, type: 'special_bonus', name: 'BONUS', icon: '⭐', label: '+2 Stars!', arrow: '➡️', gridCol: 6, gridRow: 1 },
    { index: 6, type: 'category', category: 'activities', categoryName: 'ACTIVITY', icon: '💚', name: 'ACTIVITY', targetName: 'RIDE A BIKE', emoji: '🚲', arrow: '➡️', difficulty: 'easy', gridCol: 7, gridRow: 1 },
    { index: 7, type: 'special_mystery', name: 'MYSTERY', icon: '🎁', label: 'Surprise Box!', arrow: '⬇️', gridCol: 8, gridRow: 1 },

    // Right Column: Spaces 8 to 12 (Moving Down ⬇️)
    { index: 8, type: 'category', category: 'food', categoryName: 'FOOD', icon: '❤️', name: 'FOOD', targetName: 'PIZZA', emoji: '🍕', arrow: '⬇️', difficulty: 'easy', gridCol: 8, gridRow: 2 },
    { index: 9, type: 'category', category: 'colors', categoryName: 'COLOR', icon: '💙', name: 'COLOR', targetName: 'RED', emoji: '🔴', arrow: '⬇️', difficulty: 'easy', gridCol: 8, gridRow: 3 },
    { index: 10, type: 'category', category: 'feelings', categoryName: 'FEELING', icon: '💜', name: 'FEELING', targetName: 'CURIOUS', emoji: '🤔', arrow: '⬇️', difficulty: 'medium', gridCol: 8, gridRow: 4 },
    { index: 11, type: 'special_boost', name: 'BOOST', icon: '🚀', label: '+2 Spaces!', arrow: '⬇️', gridCol: 8, gridRow: 5 },
    { index: 12, type: 'category', category: 'activities', categoryName: 'ACTIVITY', icon: '💚', name: 'ACTIVITY', targetName: 'TAKE PHOTOS', emoji: '📷', arrow: '⬇️', difficulty: 'medium', gridCol: 8, gridRow: 6 },

    // Bottom Row: Spaces 13 to 19 (Moving Left ⬅️)
    { index: 13, type: 'special_challenge', name: 'CHALLENGE', icon: '⚡', label: 'Hard +2 ⭐', arrow: '⬅️', gridCol: 8, gridRow: 7 },
    { index: 14, type: 'category', category: 'food', categoryName: 'FOOD', icon: '❤️', name: 'FOOD', targetName: 'STRAWBERRY', emoji: '🍓', arrow: '⬅️', difficulty: 'easy', gridCol: 7, gridRow: 7 },
    { index: 15, type: 'category', category: 'colors', categoryName: 'COLOR', icon: '💙', name: 'COLOR', targetName: 'YELLOW', emoji: '🟡', arrow: '⬅️', difficulty: 'easy', gridCol: 6, gridRow: 7 },
    { index: 16, type: 'category', category: 'feelings', categoryName: 'FEELING', icon: '💜', name: 'FEELING', targetName: 'HAPPY', emoji: '😁', arrow: '⬅️', difficulty: 'easy', gridCol: 5, gridRow: 7 },
    { index: 17, type: 'special_lucky', name: 'LUCKY', icon: '🎲', label: 'Roll Again!', arrow: '⬅️', gridCol: 4, gridRow: 7 },
    { index: 18, type: 'category', category: 'activities', categoryName: 'ACTIVITY', icon: '💚', name: 'ACTIVITY', targetName: 'SING', emoji: '🎤', arrow: '⬅️', gridCol: 3, gridRow: 7 },
    { index: 19, type: 'category', category: 'food', categoryName: 'FOOD', icon: '❤️', name: 'FOOD', targetName: 'ICE CREAM', emoji: '🍦', arrow: '⬅️', gridCol: 2, gridRow: 7 },

    // Left Column: Spaces 20 to 25 (Moving Up ⬆️)
    { index: 20, type: 'special_miss', name: 'MISS A TURN', icon: '⏸️', label: 'Skip Turn', arrow: '⬆️', gridCol: 1, gridRow: 7 },
    { index: 21, type: 'category', category: 'colors', categoryName: 'COLOR', icon: '💙', name: 'COLOR', targetName: 'GREEN', emoji: '🟢', arrow: '⬆️', difficulty: 'easy', gridCol: 1, gridRow: 6 },
    { index: 22, type: 'category', category: 'feelings', categoryName: 'FEELING', icon: '💜', name: 'FEELING', targetName: 'TIRED', emoji: '🥱', arrow: '⬆️', difficulty: 'medium', gridCol: 1, gridRow: 5 },
    { index: 23, type: 'special_trap', name: 'TRAP', icon: '🐌', label: '-2 Spaces!', arrow: '⬆️', gridCol: 1, gridRow: 4 },
    { index: 24, type: 'special_bonus', name: 'BONUS', icon: '⭐', label: '+2 Stars!', arrow: '⬆️', gridCol: 1, gridRow: 3 },
    { index: 25, type: 'finish', name: 'FINISH', icon: '🏁', label: '🏁 DESTINATION! (+5 ⭐)', arrow: '🏁', gridCol: 1, gridRow: 2 }
  ];

  window.MONOPOLY_BOARD_TILES = MONOPOLY_BOARD_TILES;

  /* =========================================================
     EMOJI MONOPOLY — FIXED QUESTION BANK (50 FIXED QUESTIONS)
     Grade 3 A1+
     No AI question generation.
     No "?" fallback.
     Exactly 3 options / exactly 1 correct answer.
     ========================================================= */

  const QUESTION_BANK = [

    /* =========================
       🟢 EASY — ACTIVITIES
       ========================= */

    {
      id: 1,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🎮",
      question: "What is this?",
      options: [
        { text: "play games", correct: true },
        { text: "read books", correct: false },
        { text: "swim", correct: false }
      ]
    },

    {
      id: 2,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "📖",
      question: "What is this?",
      options: [
        { text: "dance", correct: false },
        { text: "read books", correct: true },
        { text: "sing", correct: false }
      ]
    },

    {
      id: 3,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "⚽",
      question: "What is this?",
      options: [
        { text: "play football", correct: true },
        { text: "play basketball", correct: false },
        { text: "draw", correct: false }
      ]
    },

    {
      id: 4,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🎨",
      question: "What is this?",
      options: [
        { text: "draw", correct: true },
        { text: "swim", correct: false },
        { text: "sing", correct: false }
      ]
    },

    {
      id: 5,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🏊",
      question: "What is this?",
      options: [
        { text: "dance", correct: false },
        { text: "swim", correct: true },
        { text: "camp", correct: false }
      ]
    },

    {
      id: 6,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "💃",
      question: "What is this?",
      options: [
        { text: "dance", correct: true },
        { text: "sing", correct: false },
        { text: "skateboard", correct: false }
      ]
    },

    {
      id: 7,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🎤",
      question: "What is this?",
      options: [
        { text: "sing", correct: true },
        { text: "draw", correct: false },
        { text: "take photos", correct: false }
      ]
    },

    {
      id: 8,
      category: "activities",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🚲",
      question: "What is this?",
      options: [
        { text: "ride a bike", correct: true },
        { text: "play football", correct: false },
        { text: "watch videos", correct: false }
      ]
    },


    /* =========================
       🟡 MEDIUM — ACTIVITIES
       ========================= */

    {
      id: 9,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🎧",
      question: "What is this?",
      options: [
        { text: "listen to music", correct: true },
        { text: "watch videos", correct: false },
        { text: "take photos", correct: false }
      ]
    },

    {
      id: 10,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "📷",
      question: "What is this?",
      options: [
        { text: "watch videos", correct: false },
        { text: "take photos", correct: true },
        { text: "play games", correct: false }
      ]
    },

    {
      id: 11,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🧩",
      question: "What is this?",
      options: [
        { text: "build things", correct: false },
        { text: "do puzzles", correct: true },
        { text: "read books", correct: false }
      ]
    },

    {
      id: 12,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🏀",
      question: "What is this?",
      options: [
        { text: "play football", correct: false },
        { text: "play basketball", correct: true },
        { text: "skateboard", correct: false }
      ]
    },

    {
      id: 13,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🛹",
      question: "What is this?",
      options: [
        { text: "ride a bike", correct: false },
        { text: "skateboard", correct: true },
        { text: "swim", correct: false }
      ]
    },

    {
      id: 14,
      category: "activities",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🧱",
      question: "What is this?",
      options: [
        { text: "build things", correct: true },
        { text: "do puzzles", correct: false },
        { text: "draw", correct: false }
      ]
    },


    /* =========================
       🟢 EASY — FOOD
       ========================= */

    {
      id: 15,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🍎",
      question: "What is this?",
      options: [
        { text: "apple", correct: true },
        { text: "banana", correct: false },
        { text: "strawberry", correct: false }
      ]
    },

    {
      id: 16,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🍌",
      question: "What is this?",
      options: [
        { text: "banana", correct: true },
        { text: "apple", correct: false },
        { text: "carrot", correct: false }
      ]
    },

    {
      id: 17,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🍓",
      question: "What is this?",
      options: [
        { text: "blueberries", correct: false },
        { text: "strawberry", correct: true },
        { text: "watermelon", correct: false }
      ]
    },

    {
      id: 18,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🍉",
      question: "What is this?",
      options: [
        { text: "watermelon", correct: true },
        { text: "apple", correct: false },
        { text: "tomatoes", correct: false }
      ]
    },

    {
      id: 19,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🥕",
      question: "What is this?",
      options: [
        { text: "carrot", correct: true },
        { text: "cucumber", correct: false },
        { text: "broccoli", correct: false }
      ]
    },

    {
      id: 20,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🥦",
      question: "What is this?",
      options: [
        { text: "broccoli", correct: true },
        { text: "avocado", correct: false },
        { text: "carrot", correct: false }
      ]
    },

    {
      id: 21,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🥑",
      question: "What is this?",
      options: [
        { text: "avocado", correct: true },
        { text: "cucumber", correct: false },
        { text: "apple", correct: false }
      ]
    },

    {
      id: 22,
      category: "food",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🍅",
      question: "What is this?",
      options: [
        { text: "tomatoes", correct: true },
        { text: "strawberry", correct: false },
        { text: "watermelon", correct: false }
      ]
    },


    /* =========================
       🟡 MEDIUM — FOOD
       ========================= */

    {
      id: 23,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🥗",
      question: "What is this?",
      options: [
        { text: "salad", correct: true },
        { text: "sandwich", correct: false },
        { text: "soup", correct: false }
      ]
    },

    {
      id: 24,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🥣",
      question: "What is this?",
      options: [
        { text: "oatmeal", correct: true },
        { text: "yogurt", correct: false },
        { text: "soup", correct: false }
      ]
    },

    {
      id: 25,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🥪",
      question: "What is this?",
      options: [
        { text: "sandwich", correct: true },
        { text: "salad", correct: false },
        { text: "pizza", correct: false }
      ]
    },

    {
      id: 26,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🍲",
      question: "What is this?",
      options: [
        { text: "soup", correct: true },
        { text: "oatmeal", correct: false },
        { text: "yogurt", correct: false }
      ]
    },

    {
      id: 27,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🐟",
      question: "What is this?",
      options: [
        { text: "salmon", correct: true },
        { text: "grilled chicken", correct: false },
        { text: "nuts", correct: false }
      ]
    },

    {
      id: 28,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🍕",
      question: "What is this?",
      options: [
        { text: "pizza", correct: true },
        { text: "sandwich", correct: false },
        { text: "salad", correct: false }
      ]
    },

    {
      id: 29,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🍦",
      question: "What is this?",
      options: [
        { text: "ice cream", correct: true },
        { text: "yogurt", correct: false },
        { text: "oatmeal", correct: false }
      ]
    },

    {
      id: 30,
      category: "food",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🥒",
      question: "What is this?",
      options: [
        { text: "cucumber", correct: true },
        { text: "avocado", correct: false },
        { text: "broccoli", correct: false }
      ]
    },


    /* =========================
       🔵 COLORS
       ========================= */

    {
      id: 31,
      category: "colors",
      difficulty: "easy",
      time: 15,
      visualType: "color",
      visual: "#EF4444",
      question: "What color is this?",
      options: [
        { text: "red", correct: true },
        { text: "blue", correct: false },
        { text: "green", correct: false }
      ]
    },

    {
      id: 32,
      category: "colors",
      difficulty: "easy",
      time: 15,
      visualType: "color",
      visual: "#3B82F6",
      question: "What color is this?",
      options: [
        { text: "purple", correct: false },
        { text: "blue", correct: true },
        { text: "green", correct: false }
      ]
    },

    {
      id: 33,
      category: "colors",
      difficulty: "easy",
      time: 15,
      visualType: "color",
      visual: "#22C55E",
      question: "What color is this?",
      options: [
        { text: "yellow", correct: false },
        { text: "green", correct: true },
        { text: "orange", correct: false }
      ]
    },

    {
      id: 34,
      category: "colors",
      difficulty: "easy",
      time: 15,
      visualType: "color",
      visual: "#FACC15",
      question: "What color is this?",
      options: [
        { text: "yellow", correct: true },
        { text: "pink", correct: false },
        { text: "brown", correct: false }
      ]
    },

    {
      id: 35,
      category: "colors",
      difficulty: "medium",
      time: 12,
      visualType: "color",
      visual: "#8B5CF6",
      question: "What color is this?",
      options: [
        { text: "purple", correct: true },
        { text: "blue", correct: false },
        { text: "pink", correct: false }
      ]
    },

    {
      id: 36,
      category: "colors",
      difficulty: "medium",
      time: 12,
      visualType: "color",
      visual: "#EC4899",
      question: "What color is this?",
      options: [
        { text: "pink", correct: true },
        { text: "purple", correct: false },
        { text: "red", correct: false }
      ]
    },

    {
      id: 37,
      category: "colors",
      difficulty: "medium",
      time: 12,
      visualType: "color",
      visual: "#F97316",
      question: "What color is this?",
      options: [
        { text: "orange", correct: true },
        { text: "yellow", correct: false },
        { text: "brown", correct: false }
      ]
    },

    {
      id: 38,
      category: "colors",
      difficulty: "medium",
      time: 12,
      visualType: "color",
      visual: "#92400E",
      question: "What color is this?",
      options: [
        { text: "brown", correct: true },
        { text: "orange", correct: false },
        { text: "black", correct: false }
      ]
    },


    /* =========================
       💜 FEELINGS
       ========================= */

    {
      id: 39,
      category: "feelings",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "🤩",
      question: "How does this person feel?",
      options: [
        { text: "excited", correct: true },
        { text: "sad", correct: false },
        { text: "nervous", correct: false }
      ]
    },

    {
      id: 40,
      category: "feelings",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "😁",
      question: "How does this person feel?",
      options: [
        { text: "happy", correct: true },
        { text: "sad", correct: false },
        { text: "nervous", correct: false }
      ]
    },

    {
      id: 41,
      category: "feelings",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "😊",
      question: "How does this person feel?",
      options: [
        { text: "good", correct: true },
        { text: "sad", correct: false },
        { text: "difficult", correct: false }
      ]
    },

    {
      id: 42,
      category: "feelings",
      difficulty: "easy",
      time: 15,
      visualType: "emoji",
      visual: "😐",
      question: "How does this person feel?",
      options: [
        { text: "okay", correct: true },
        { text: "excited", correct: false },
        { text: "happy", correct: false }
      ]
    },

    {
      id: 43,
      category: "feelings",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🤔",
      question: "How does this person feel?",
      options: [
        { text: "curious", correct: true },
        { text: "sad", correct: false },
        { text: "happy", correct: false }
      ]
    },

    {
      id: 44,
      category: "feelings",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "😟",
      question: "How does this person feel?",
      options: [
        { text: "nervous", correct: true },
        { text: "excited", correct: false },
        { text: "good", correct: false }
      ]
    },

    {
      id: 45,
      category: "feelings",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "😢",
      question: "How does this person feel?",
      options: [
        { text: "sad", correct: true },
        { text: "happy", correct: false },
        { text: "excited", correct: false }
      ]
    },

    {
      id: 46,
      category: "feelings",
      difficulty: "hard",
      time: 10,
      visualType: "emoji",
      visual: "😫",
      question: "How does this person feel?",
      options: [
        { text: "difficult", correct: true },
        { text: "happy", correct: false },
        { text: "good", correct: false }
      ]
    },


    /* =========================
       🔥 MIXED
       ========================= */

    {
      id: 47,
      category: "mixed",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🍎",
      question: "Which one is a fruit?",
      options: [
        { text: "apple", correct: true },
        { text: "broccoli", correct: false },
        { text: "carrot", correct: false }
      ]
    },

    {
      id: 48,
      category: "mixed",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "🥦",
      question: "Which one is a vegetable?",
      options: [
        { text: "ice cream", correct: false },
        { text: "broccoli", correct: true },
        { text: "banana", correct: false }
      ]
    },

    {
      id: 49,
      category: "mixed",
      difficulty: "medium",
      time: 12,
      visualType: "emoji",
      visual: "⚽",
      question: "Which activity uses a ball?",
      options: [
        { text: "play football", correct: true },
        { text: "read books", correct: false },
        { text: "draw", correct: false }
      ]
    },

    {
      id: 50,
      category: "mixed",
      difficulty: "hard",
      time: 10,
      visualType: "emoji",
      visual: "🎧",
      question: "Which activity do you do with headphones?",
      options: [
        { text: "listen to music", correct: true },
        { text: "ride a bike", correct: false },
        { text: "swim", correct: false }
      ]
    }

  ];

  /* =========================================================
     VALIDATE QUESTIONS
     ========================================================= */

  function validateQuestion(question) {
    if (!question) return false;
    if (!question.id) return false;
    if (!question.category) return false;
    if (!question.difficulty) return false;
    if (!question.visualType) return false;
    if (!question.visual) return false;
    if (!question.question) return false;
    if (!Array.isArray(question.options)) return false;
    if (question.options.length !== 3) return false;

    const validOptions = question.options.every(
      option =>
        option &&
        typeof option.text === "string" &&
        option.text.trim().length > 0 &&
        typeof option.correct === "boolean"
    );

    if (!validOptions) return false;

    const correctAnswers = question.options.filter(
      option => option.correct === true
    );

    if (correctAnswers.length !== 1) return false;

    // NEVER allow a question mark to be used as the visual.
    if (question.visual === "❓") return false;
    if (question.visual === "?") return false;

    return true;
  }

  /* =========================================================
     CREATE SAFE QUESTION LIST
     ========================================================= */

  const VALID_QUESTIONS = QUESTION_BANK.filter(
    validateQuestion
  );

  /* =========================================================
     RANDOMIZE ONLY ANSWER POSITION
     The question content NEVER changes.
     ========================================================= */

  function shuffleOptions(options) {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
  }

  /* =========================================================
     GET RANDOM QUESTION
     ========================================================= */

  function getRandomQuestion(difficulty = null) {
    let pool = VALID_QUESTIONS;

    if (difficulty) {
      const filtered = VALID_QUESTIONS.filter(
        question => question.difficulty === difficulty
      );
      if (filtered.length > 0) {
        pool = filtered;
      }
    }

    if (pool.length === 0) {
      pool = VALID_QUESTIONS;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex];

    return {
      ...selected,
      options: shuffleOptions(selected.options)
    };
  }

  /* =========================================================
     CHECK ANSWER
     ========================================================= */

  function isCorrectAnswer(question, optionText) {
    const option = question.options.find(
      option => option.text.toLowerCase() === (optionText || '').toLowerCase()
    );
    return option ? option.correct === true : false;
  }

  const MONOPOLY_QUESTION_BANK = QUESTION_BANK;
  window.QUESTION_BANK = QUESTION_BANK;
  window.VALID_QUESTIONS = VALID_QUESTIONS;
  window.MONOPOLY_QUESTION_BANK = MONOPOLY_QUESTION_BANK;
  window.validateQuestion = validateQuestion;
  window.shuffleOptions = shuffleOptions;
  window.getRandomQuestion = getRandomQuestion;
  window.isCorrectAnswer = isCorrectAnswer;

  console.log(`Question Bank: ${QUESTION_BANK.length} total / ${VALID_QUESTIONS.length} valid`);

  function unlockGameUI() {
    if (typeof document === 'undefined') return;
    if (document.body) document.body.style.pointerEvents = "auto";
    const overlays = document.querySelectorAll(".monopoly-mode-overlay, .m-event-modal-overlay, .monopoly-winner-overlay");
    overlays.forEach(el => {
      if (el.classList.contains("hidden")) {
        el.style.pointerEvents = "none";
      } else {
        el.style.pointerEvents = "auto";
      }
    });
  }

  class EmojiMonopolyEngine {
    constructor(gameApp) {
      this.gameApp = gameApp;
      this.audio = gameApp.audio;
      this.confetti = gameApp.confetti;

      // State
      this.selectedMode = 'quick';
      this.maxRounds = 10;
      this.currentRound = 1;
      this.activeTeam = 'blue'; // 'blue' or 'red'
      this.isStealChallenge = false;
      this.isBonusChallenge = false;
      this.stealTargetTileIndex = null;
      this.diceUnlocked = false;
      this.isRollingOrMoving = false;
      this.modalOpen = false;
      this.currentQuestion = null;
      this.currentQuestionAnswered = false;
      this.countdownInterval = null;

      this.teams = {
        blue: { score: 0, position: 0, ownedSpaces: [], correctCount: 0, missTurn: false },
        red: { score: 0, position: 0, ownedSpaces: [], correctCount: 0, missTurn: false }
      };
      this.tileOwnership = Array(26).fill(null);

      this.cacheDOMElements();
      this.bindEvents();
    }

    cacheDOMElements() {
      // Overlays & Screens
      this.modeOverlay = document.getElementById('m-mode-overlay');
      this.winnerOverlay = document.getElementById('m-winner-overlay');
      this.eventModal = document.getElementById('m-event-modal');

      // Mode choices
      this.btnModeQuick = document.getElementById('btn-mode-quick');
      this.btnModeNormal = document.getElementById('btn-mode-normal');
      this.btnModeFull = document.getElementById('btn-mode-full');
      this.btnLaunchMonopoly = document.getElementById('btn-launch-monopoly');
      this.btnMonopolyBackStart = document.getElementById('btn-monopoly-back-start');

      // HUD elements
      this.blueScore = document.getElementById('m-blue-score');
      this.blueOwned = document.getElementById('m-blue-owned');
      this.redScore = document.getElementById('m-red-score');
      this.redOwned = document.getElementById('m-red-owned');
      this.turnBanner = document.getElementById('m-turn-banner');
      this.turnIcon = document.getElementById('m-turn-icon');
      this.turnText = document.getElementById('m-turn-text');
      this.roundBadge = document.getElementById('m-round-badge');
      this.btnReturnMain = document.getElementById('btn-monopoly-return-main');
      this.btnResetMatch = document.getElementById('btn-monopoly-reset');

      // In-Card Turn Banner Directly Above Central Question
      this.cardTurnBanner = document.getElementById('m-card-turn-banner');
      this.cardTurnIcon = document.getElementById('m-card-turn-icon');
      this.cardTurnText = document.getElementById('m-card-turn-text');
      this.cardRoundBadge = document.getElementById('m-card-round-badge');

      // Progress Tracker Elements
      this.trackPinBlue = document.getElementById('m-track-pin-blue');
      this.trackPinRed = document.getElementById('m-track-pin-red');
      this.trackBluePos = document.getElementById('m-track-blue-pos');
      this.trackRedPos = document.getElementById('m-track-red-pos');

      // Board Grid & Center Arena
      this.boardGrid = document.getElementById('monopoly-board-grid');
      this.centerArena = document.getElementById('monopoly-center-arena');

      // Arena Stages
      this.stageQuestion = document.getElementById('m-stage-question');
      this.stageDice = document.getElementById('m-stage-dice');

      // Question Elements
      this.qCatIcon = document.getElementById('m-q-cat-icon');
      this.qCatName = document.getElementById('m-q-cat-name');
      this.qDiffBadge = document.getElementById('m-q-diff-badge');
      this.countdownFill = document.getElementById('m-countdown-fill');
      this.countdownBubble = document.getElementById('m-countdown-bubble');
      this.qPromptText = document.getElementById('m-q-prompt-text');
      this.qEmoji = document.getElementById('m-q-emoji');
      this.qPhoto = document.getElementById('m-q-photo');
      this.choiceButtons = [
        document.getElementById('m-opt-a'),
        document.getElementById('m-opt-b'),
        document.getElementById('m-opt-c')
      ];
      this.choiceLabels = [
        document.getElementById('m-opt-label-a'),
        document.getElementById('m-opt-label-b'),
        document.getElementById('m-opt-label-c')
      ];
      this.feedbackBanner = document.getElementById('m-feedback-banner');
      this.fbIcon = document.getElementById('m-fb-icon');
      this.fbText = document.getElementById('m-fb-text');
      this.fbPronounceBtn = document.getElementById('m-fb-pronounce-btn');

      // Dice Elements
      this.diceHeading = document.getElementById('m-dice-heading');
      this.diceSub = document.getElementById('m-dice-sub');
      this.diceBox = document.getElementById('m-dice-box');
      this.diceResultBadge = document.getElementById('m-dice-result-badge');
      this.diceResultVal = document.getElementById('m-dice-result-val');
      this.btnRollDice = document.getElementById('btn-monopoly-roll');
      this.moveToast = document.getElementById('m-move-toast');
      this.toastSteps = document.getElementById('m-toast-steps');

      // Event Modal
      this.eventBadge = document.getElementById('m-event-badge');
      this.eventTitle = document.getElementById('m-event-title');
      this.eventDesc = document.getElementById('m-event-desc');
      this.eventInteractive = document.getElementById('m-event-interactive');
      this.btnEventContinue = document.getElementById('btn-event-continue');

      // Winner Ceremony
      this.winnerTitle = document.getElementById('m-winner-title');
      this.finalBlueStars = document.getElementById('m-final-blue-stars');
      this.finalBlueOwned = document.getElementById('m-final-blue-owned');
      this.finalBlueCorrect = document.getElementById('m-final-blue-correct');
      this.finalRedStars = document.getElementById('m-final-red-stars');
      this.finalRedOwned = document.getElementById('m-final-red-owned');
      this.finalRedCorrect = document.getElementById('m-final-red-correct');
      this.btnPlayAgain = document.getElementById('btn-monopoly-play-again');
      this.btnReturnExperts = document.getElementById('btn-monopoly-return-experts');
    }

    bindEvents() {
      // 1. Mode selection
      const modeButtons = [this.btnModeQuick, this.btnModeNormal, this.btnModeFull];
      modeButtons.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
          this.audio.playPop();
          modeButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedMode = btn.getAttribute('data-mode') || 'quick';
        });
      });

      if (this.btnLaunchMonopoly) {
        this.btnLaunchMonopoly.addEventListener('click', () => {
          this.audio.playPop();
          this.startMatch();
        });
      }

      if (this.btnMonopolyBackStart) {
        this.btnMonopolyBackStart.addEventListener('click', () => {
          this.audio.playPop();
          this.gameApp.switchScreen('start');
        });
      }

      // 2. HUD Buttons
      if (this.btnReturnMain) {
        this.btnReturnMain.addEventListener('click', () => {
          this.audio.playPop();
          this.gameApp.switchScreen('start');
        });
      }

      if (this.btnResetMatch) {
        this.btnResetMatch.addEventListener('click', () => {
          this.audio.playPop();
          this.showModeSelect();
        });
      }

      // 3. Choice buttons (A, B, C)
      this.choiceButtons.forEach((btn, idx) => {
        if (!btn) return;
        btn.addEventListener('click', () => {
          const choiceLetter = ['A', 'B', 'C'][idx];
          this.handleChoiceClick(choiceLetter, btn);
        });
      });

      // 4. Pronounce button
      if (this.fbPronounceBtn) {
        this.fbPronounceBtn.addEventListener('click', () => {
          if (this.currentQuestion && this.currentQuestion.spokenWord) {
            this.audio.speak(this.currentQuestion.spokenWord);
          }
        });
      }

      // 5. Dice Roll button with guarded handler for click and pointerup (touch/Smart Board)
      if (this.btnRollDice) {
        let lastTriggerTime = 0;
        const triggerRoll = (e) => {
          if (e) {
            if (e.cancelable) e.preventDefault();
            e.stopPropagation();
          }
          const now = Date.now();
          if (now - lastTriggerTime < 400) return; // Prevent duplicate rapid taps
          lastTriggerTime = now;

          if (!this.diceUnlocked || this.isRollingOrMoving) return;
          this.handleDiceRoll();
        };

        this.btnRollDice.addEventListener('click', triggerRoll);
        this.btnRollDice.addEventListener('pointerup', triggerRoll);

        // Also allow tapping the 3D dice directly to roll
        const diceStage = document.getElementById('m-dice-stage');
        if (diceStage) {
          diceStage.style.cursor = 'pointer';
          diceStage.addEventListener('click', triggerRoll);
          diceStage.addEventListener('pointerup', triggerRoll);
        }
        if (this.diceBox) {
          this.diceBox.style.cursor = 'pointer';
          this.diceBox.addEventListener('click', triggerRoll);
          this.diceBox.addEventListener('pointerup', triggerRoll);
        }
      }

      // 6. Event continue button with direct and delegated document handlers
      const handleContinueAction = (e) => {
        if (e) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
        }
        if (!this.modalOpen) return;

        this.audio.playPop();
        this.closeEventModal();
      };

      if (this.btnEventContinue) {
        this.btnEventContinue.addEventListener('click', handleContinueAction);
        this.btnEventContinue.addEventListener('pointerup', handleContinueAction);
      }

      document.addEventListener('click', (e) => {
        if (e.target && e.target.closest && e.target.closest('#btn-event-continue')) {
          handleContinueAction(e);
        }
      });
      document.addEventListener('pointerup', (e) => {
        if (e.target && e.target.closest && e.target.closest('#btn-event-continue')) {
          handleContinueAction(e);
        }
      });

      // 7. Winner screen buttons
      if (this.btnPlayAgain) {
        this.btnPlayAgain.addEventListener('click', () => {
          this.audio.playPop();
          this.winnerOverlay.classList.add('hidden');
          this.showModeSelect();
        });
      }

      if (this.btnReturnExperts) {
        this.btnReturnExperts.addEventListener('click', () => {
          this.audio.playPop();
          this.winnerOverlay.classList.add('hidden');
          this.gameApp.switchScreen('start');
        });
      }
    }

    showModeSelect() {
      clearInterval(this.countdownInterval);
      this.modeOverlay.classList.remove('hidden');
      this.winnerOverlay.classList.add('hidden');
      this.eventModal.classList.add('hidden');
    }

    startMatch() {
      clearInterval(this.countdownInterval);
      this.modeOverlay.classList.add('hidden');
      this.winnerOverlay.classList.add('hidden');
      this.eventModal.classList.add('hidden');

      this.maxRounds = this.selectedMode === 'quick' ? 10 : (this.selectedMode === 'normal' ? 20 : 30);
      this.currentRound = 1;
      this.activeTeam = 'blue';
      this.isRollingOrMoving = false;
      this.isStealChallenge = false;
      this.stealTargetTileIndex = null;

      this.teams = {
        blue: { score: 0, position: 0, ownedSpaces: [], correctCount: 0, missTurn: false },
        red: { score: 0, position: 0, ownedSpaces: [], correctCount: 0, missTurn: false }
      };
      this.tileOwnership = Array(26).fill(null);

      this.renderBoard();
      this.updateHUD();
      this.startPreRollTurn();
    }

    renderBoard() {
      // Remove old tile elements while keeping the center arena intact!
      this.boardGrid.querySelectorAll('.m-tile').forEach(tileElem => tileElem.remove());

      MONOPOLY_BOARD_TILES.forEach(tile => {
        const cell = document.createElement('div');
        cell.className = `m-tile tile-${tile.type}`;
        if (tile.category) {
          cell.classList.add(`tile-cat-${tile.category}`);
        }
        cell.setAttribute('data-index', tile.index);
        cell.style.gridColumn = tile.gridCol;
        cell.style.gridRow = tile.gridRow;

        // Tile Header: Number Badge & Directional Arrow
        const headerRow = document.createElement('div');
        headerRow.className = 'm-tile-header-row';

        const numBadge = document.createElement('span');
        numBadge.className = 'm-tile-num-badge';
        if (tile.type === 'start') {
          numBadge.textContent = 'START';
        } else if (tile.type === 'finish') {
          numBadge.textContent = 'FINISH';
        } else {
          numBadge.textContent = `${tile.index}`;
        }
        headerRow.appendChild(numBadge);

        if (tile.arrow && tile.type !== 'finish') {
          const arrow = document.createElement('span');
          arrow.className = 'm-tile-arrow';
          arrow.textContent = tile.arrow;
          headerRow.appendChild(arrow);
        }
        cell.appendChild(headerRow);

        // Icon
        const icon = document.createElement('span');
        icon.className = 'm-tile-icon';
        icon.textContent = tile.icon || '⭐';
        cell.appendChild(icon);

        // Clean Category Label (e.g. ACTIVITY, FOOD, COLOR, FEELING, BONUS, etc.)
        const name = document.createElement('span');
        name.className = 'm-tile-name';
        name.textContent = tile.categoryName || tile.name;
        cell.appendChild(name);

        // Ownership Badge
        const ownerBadge = document.createElement('div');
        ownerBadge.className = 'm-owner-badge';
        ownerBadge.id = `owner-badge-${tile.index}`;
        cell.appendChild(ownerBadge);

        // Token Avatars Tray
        const tokensTray = document.createElement('div');
        tokensTray.className = 'm-tile-tokens-tray';
        tokensTray.id = `tokens-tray-${tile.index}`;
        cell.appendChild(tokensTray);

        this.boardGrid.appendChild(cell);
      });

      this.updateTokensOnBoard();
    }

    updateTokensOnBoard() {
      // Clear board trays
      for (let i = 0; i < 26; i++) {
        const tray = document.getElementById(`tokens-tray-${i}`);
        if (tray) tray.innerHTML = '';
      }

      // Blue Token
      const bluePos = Math.min(25, Math.max(0, this.teams.blue.position));
      const blueTray = document.getElementById(`tokens-tray-${bluePos}`);
      if (blueTray) {
        const blueToken = document.createElement('div');
        blueToken.className = 'm-token-avatar token-blue';
        blueToken.id = 'avatar-token-blue';
        blueToken.textContent = '🔵';
        blueTray.appendChild(blueToken);
      }

      // Red Token
      const redPos = Math.min(25, Math.max(0, this.teams.red.position));
      const redTray = document.getElementById(`tokens-tray-${redPos}`);
      if (redTray) {
        const redToken = document.createElement('div');
        redToken.className = 'm-token-avatar token-red';
        redToken.id = 'avatar-token-red';
        redToken.textContent = '🔴';
        redTray.appendChild(redToken);
      }

      // Update Linear "You Are Here" Progress Tracker
      if (this.trackPinBlue) {
        this.trackPinBlue.style.left = `${(bluePos / 25) * 100}%`;
      }
      if (this.trackBluePos) {
        this.trackBluePos.textContent = bluePos === 25 ? '🏁 FINISH' : (bluePos === 0 ? 'START' : bluePos);
      }

      if (this.trackPinRed) {
        this.trackPinRed.style.left = `${(redPos / 25) * 100}%`;
      }
      if (this.trackRedPos) {
        this.trackRedPos.textContent = redPos === 25 ? '🏁 FINISH' : (redPos === 0 ? 'START' : redPos);
      }
    }

    updateHUD() {
      this.blueScore.textContent = this.teams.blue.score;
      this.blueOwned.textContent = this.teams.blue.ownedSpaces.length;
      this.redScore.textContent = this.teams.red.score;
      this.redOwned.textContent = this.teams.red.ownedSpaces.length;
      this.roundBadge.textContent = `Round ${this.currentRound} / ${this.maxRounds}`;

      if (this.activeTeam === 'blue') {
        this.turnBanner.className = 'm-turn-banner banner-turn-blue';
        this.turnIcon.textContent = '🔵';
        this.turnText.textContent = "BLUE TEAM'S TURN";
      } else {
        this.turnBanner.className = 'm-turn-banner banner-turn-red';
        this.turnIcon.textContent = '🔴';
        this.turnText.textContent = "RED TEAM'S TURN";
      }

      // Update in-card turn banner directly above central question
      if (this.cardTurnBanner) {
        if (this.activeTeam === 'blue') {
          this.cardTurnBanner.className = 'm-card-turn-banner banner-turn-blue';
          if (this.cardTurnIcon) this.cardTurnIcon.textContent = '🔵';
          if (this.cardTurnText) this.cardTurnText.textContent = "BLUE TEAM'S TURN";
        } else {
          this.cardTurnBanner.className = 'm-card-turn-banner banner-turn-red';
          if (this.cardTurnIcon) this.cardTurnIcon.textContent = '🔴';
          if (this.cardTurnText) this.cardTurnText.textContent = "RED TEAM'S TURN";
        }
      }
      if (this.cardRoundBadge) {
        this.cardRoundBadge.textContent = `ROUND ${this.currentRound} / ${this.maxRounds}`;
      }
    }

    updateDiceButtonState() {
      if (!this.btnRollDice) return;
      if (this.diceUnlocked && !this.isRollingOrMoving) {
        this.btnRollDice.disabled = false;
        this.btnRollDice.style.pointerEvents = 'auto';
        this.btnRollDice.style.cursor = 'pointer';
        this.btnRollDice.style.opacity = '1';
        this.btnRollDice.classList.add('animate-pulse');
      } else {
        this.btnRollDice.disabled = true;
        this.btnRollDice.style.pointerEvents = 'none';
        this.btnRollDice.style.cursor = 'not-allowed';
        this.btnRollDice.style.opacity = '0.45';
        this.btnRollDice.classList.remove('animate-pulse');
      }
    }

    // =========================================================================
    // PRE-ROLL QUESTION SYSTEM (15s Easy / 12s Medium / 10s Hard)
    // =========================================================================
    startPreRollTurn() {
      clearInterval(this.countdownInterval);
      this.currentQuestionAnswered = false;
      this.diceUnlocked = false;
      this.isRollingOrMoving = false;
      this.isStealChallenge = false;
      this.isBonusChallenge = false;
      this.stealTargetTileIndex = null;
      this.modalOpen = false;
      this.updateDiceButtonState();
      unlockGameUI();
      this.logState('Start Turn');

      this.stageQuestion.classList.remove('hidden');
      this.stageDice.classList.add('hidden');
      if (this.diceResultBadge) this.diceResultBadge.classList.add('hidden');
      this.feedbackBanner.classList.add('hidden');
      this.feedbackBanner.classList.remove('fb-wrong');

      const teamName = this.activeTeam === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const teamDot = this.activeTeam === 'blue' ? '🔵' : '🔴';

      // Pick a verified valid question from the fixed question bank
      this.currentQuestion = this.getNextValidQuestion();
      this.renderQuestionData(this.currentQuestion);

      // Timer scaling: Easy = 15s, Medium = 12s, Hard = 10s
      const duration = this.currentQuestion.time || 12;
      this.startCountdown(duration, () => this.handleTimeout());
    }

    /**
     * Retrieves a strictly validated question from the fixed predefined bank.
     * Randomizes ONLY question order and ONLY option positions (A, B, C).
     */
    getNextValidQuestion(forcedCategory = null, forcedDiff = null) {
      let pool = VALID_QUESTIONS;

      if (forcedCategory) {
        const catPool = pool.filter(q => q.category.toLowerCase() === forcedCategory.toLowerCase());
        if (catPool.length > 0) pool = catPool;
      }
      if (forcedDiff) {
        const diffPool = pool.filter(q => q.difficulty.toLowerCase() === forcedDiff.toLowerCase());
        if (diffPool.length > 0) pool = diffPool;
      }

      // Randomize ONLY question order
      const rawQ = pool[Math.floor(Math.random() * pool.length)] || VALID_QUESTIONS[0];

      // Randomize ONLY the 3 option positions
      const shuffledOptions = shuffleOptions(rawQ.options);
      const correctIndex = shuffledOptions.findIndex(o => o.correct === true);
      const correctChoiceLetter = ['A', 'B', 'C'][correctIndex];

      const catMeta = {
        activities: { name: 'ACTIVITY', icon: '💚' },
        food: { name: 'FOOD', icon: '❤️' },
        colors: { name: 'COLOR', icon: '💙' },
        feelings: { name: 'FEELING', icon: '💜' },
        mixed: { name: 'MIXED', icon: '🔥' }
      }[rawQ.category.toLowerCase()] || { name: rawQ.category.toUpperCase(), icon: '⭐' };

      const processedQ = {
        id: rawQ.id,
        category: rawQ.category,
        categoryName: catMeta.name,
        categoryIcon: catMeta.icon,
        visualType: rawQ.visualType || 'emoji',
        visual: rawQ.visual,
        question: rawQ.question,
        options: shuffledOptions.map((opt, i) => ({
          letter: ['A', 'B', 'C'][i],
          text: opt.text.toUpperCase(),
          correct: opt.correct === true
        })),
        correctChoice: correctChoiceLetter,
        difficulty: rawQ.difficulty,
        time: rawQ.time || (rawQ.difficulty === 'easy' ? 15 : (rawQ.difficulty === 'hard' ? 10 : 12)),
        spokenWord: rawQ.spokenWord || shuffledOptions[correctIndex].text
      };

      return processedQ;
    }

    renderQuestionData(q) {
      if (!validateQuestion(q)) {
        // Discard invalid question and get a valid one
        q = this.getNextValidQuestion();
      }

      this.qCatIcon.textContent = q.categoryIcon || '⭐';
      this.qCatName.textContent = q.categoryName || 'QUESTION';
      this.qPromptText.textContent = (q.question || 'WHAT IS THIS?').toUpperCase();

      if (q.difficulty === 'hard') {
        this.qDiffBadge.className = 'm-q-diff-tag diff-hard';
        this.qDiffBadge.textContent = `🔴 HARD (${q.time}s) (+2 ⭐)`;
      } else if (q.difficulty === 'medium') {
        this.qDiffBadge.className = 'm-q-diff-tag diff-medium';
        this.qDiffBadge.textContent = `🟡 MEDIUM (${q.time}s) (+2 ⭐)`;
      } else {
        this.qDiffBadge.className = 'm-q-diff-tag diff-easy';
        this.qDiffBadge.textContent = `🟢 EASY (${q.time}s) (+1 ⭐)`;
      }

      // Visual rendering: Emoji or Color Swatch (STRICTLY NEVER '?' or '❓')
      this.qPhoto.classList.add('hidden');
      this.qEmoji.classList.remove('hidden');

      if (q.visualType === 'color') {
        this.qEmoji.textContent = '';
        this.qEmoji.style.display = 'inline-block';
        this.qEmoji.style.width = '70px';
        this.qEmoji.style.height = '70px';
        this.qEmoji.style.borderRadius = '50%';
        this.qEmoji.style.backgroundColor = q.visual;
        this.qEmoji.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25), inset 0 -4px 8px rgba(0,0,0,0.2)';
        this.qEmoji.style.border = '4px solid #ffffff';
      } else {
        this.qEmoji.style.display = '';
        this.qEmoji.style.width = '';
        this.qEmoji.style.height = '';
        this.qEmoji.style.borderRadius = '';
        this.qEmoji.style.backgroundColor = '';
        this.qEmoji.style.boxShadow = '';
        this.qEmoji.style.border = '';
        this.qEmoji.textContent = q.visual;
      }

      // Render exactly 3 choices
      this.choiceButtons.forEach((btn, i) => {
        btn.disabled = false;
        btn.classList.remove('is-correct', 'is-wrong', 'is-dimmed');
        if (q.options && q.options[i]) {
          this.choiceLabels[i].textContent = q.options[i].text;
          btn.style.display = 'flex';
        } else {
          btn.style.display = 'none';
        }
      });
    }

    startCountdown(seconds, onExpire) {
      let timeLeft = seconds;
      this.countdownBubble.textContent = timeLeft;
      this.countdownBubble.classList.remove('urgent');
      this.countdownFill.style.width = '100%';

      this.countdownInterval = setInterval(() => {
        timeLeft--;
        this.audio.playTick();
        this.countdownBubble.textContent = timeLeft;
        this.countdownFill.style.width = `${(timeLeft / seconds) * 100}%`;

        if (timeLeft <= 3) {
          this.countdownBubble.classList.add('urgent');
        }

        if (timeLeft <= 0) {
          clearInterval(this.countdownInterval);
          onExpire();
        }
      }, 1000);
    }

    logState(action) {
      console.log(`[STATE] Action: ${action} | Round: ${this.currentRound}/${this.maxRounds} | Team: ${this.activeTeam} | Pos: B:${this.teams.blue.position} R:${this.teams.red.position} | diceUnlocked: ${this.diceUnlocked} | isRollingOrMoving: ${this.isRollingOrMoving} | modalOpen: ${this.modalOpen} | isSteal: ${this.isStealChallenge} | isBonus: ${this.isBonusChallenge}`);
    }

    handleChoiceClick(choiceLetter, cardElement) {
      if (this.currentQuestionAnswered) return;
      clearInterval(this.countdownInterval);

      const q = this.currentQuestion;
      if (!q) return;

      if (choiceLetter === q.correctChoice) {
        // === CORRECT ANSWER ===
        this.currentQuestionAnswered = true;
        cardElement.classList.add('is-correct');
        this.choiceButtons.forEach(b => {
          if (b !== cardElement) b.classList.add('is-dimmed');
        });

        const pts = (q.difficulty === 'hard' || q.difficulty === 'medium') ? 2 : 1;
        this.teams[this.activeTeam].score += pts;
        this.teams[this.activeTeam].correctCount++;
        this.updateHUD();

        this.audio.playSuccess();
        this.confetti.fire(35);
        if (q.spokenWord) this.audio.speak(q.spokenWord);

        if (this.isStealChallenge) {
          // Steal challenge resolution
          this.fbIcon.textContent = '🎉';
          this.fbText.textContent = `CORRECT! (+${pts} ⭐) STEAL WON!`;
          this.feedbackBanner.classList.remove('hidden', 'fb-wrong');
          this.logState('Steal Correct');
          setTimeout(() => this.resolveStealChallenge(true), 1200);

        } else if (this.isBonusChallenge) {
          // Space 18 Bonus Challenge resolution
          this.isBonusChallenge = false;
          this.fbIcon.textContent = '⚡';
          this.fbText.textContent = `CHALLENGE WON! (+${pts} ⭐)`;
          this.feedbackBanner.classList.remove('hidden', 'fb-wrong');
          this.logState('Bonus Challenge Correct');
          setTimeout(() => this.advanceTurn(), 1400);

        } else {
          // Pre-roll success -> Switch to dice stage with unlocked state
          this.diceUnlocked = true;
          this.fbIcon.textContent = '🎉';
          this.fbText.textContent = `CORRECT! (+${pts} ⭐) 🔓 DICE UNLOCKED!`;
          this.feedbackBanner.classList.remove('hidden', 'fb-wrong');
          this.logState('Pre-Roll Correct -> Dice Unlocked');

          setTimeout(() => {
            this.stageQuestion.classList.add('hidden');
            this.stageDice.classList.remove('hidden');
            this.diceHeading.textContent = `🔓 DICE UNLOCKED: ${this.activeTeam.toUpperCase()} TEAM!`;
            this.diceSub.textContent = 'Tap ROLL THE DICE below to advance your token!';
            this.updateDiceButtonState();
          }, 1000);
        }

      } else {
        // === WRONG ANSWER ===
        this.currentQuestionAnswered = true;
        this.diceUnlocked = false;
        this.audio.playWrong();
        cardElement.classList.add('is-wrong');

        if (this.isStealChallenge) {
          this.fbIcon.textContent = '❌';
          this.fbText.textContent = 'STEAL FAILED!';
          this.feedbackBanner.classList.remove('hidden');
          this.feedbackBanner.classList.add('fb-wrong');
          this.logState('Steal Wrong');
          setTimeout(() => this.resolveStealChallenge(false), 1400);

        } else if (this.isBonusChallenge) {
          this.isBonusChallenge = false;
          this.fbIcon.textContent = '❌';
          this.fbText.textContent = 'CHALLENGE MISSED!';
          this.feedbackBanner.classList.remove('hidden');
          this.feedbackBanner.classList.add('fb-wrong');
          this.logState('Bonus Challenge Wrong');
          setTimeout(() => this.advanceTurn(), 1400);

        } else {
          this.fbIcon.textContent = '❌';
          this.fbText.textContent = 'NO ROLL! TURN OVER';
          this.feedbackBanner.classList.remove('hidden');
          this.feedbackBanner.classList.add('fb-wrong');
          this.logState('Pre-Roll Wrong');
          setTimeout(() => this.advanceTurn(), 1600);
        }
      }
    }

    handleTimeout() {
      this.currentQuestionAnswered = true;
      this.diceUnlocked = false;
      this.audio.playWrong();
      this.choiceButtons.forEach(b => (b.disabled = true));

      if (this.isStealChallenge) {
        this.fbIcon.textContent = '⏰';
        this.fbText.textContent = "TIME'S UP! STEAL FAILED!";
        this.feedbackBanner.classList.remove('hidden');
        this.feedbackBanner.classList.add('fb-wrong');
        this.logState('Steal Timeout');
        setTimeout(() => this.resolveStealChallenge(false), 1400);

      } else if (this.isBonusChallenge) {
        this.isBonusChallenge = false;
        this.fbIcon.textContent = '⏰';
        this.fbText.textContent = "TIME'S UP! CHALLENGE MISSED!";
        this.feedbackBanner.classList.remove('hidden');
        this.feedbackBanner.classList.add('fb-wrong');
        this.logState('Bonus Challenge Timeout');
        setTimeout(() => this.advanceTurn(), 1400);

      } else {
        this.fbIcon.textContent = '⏰';
        this.fbText.textContent = "TIME'S UP! NO ROLL!";
        this.feedbackBanner.classList.remove('hidden');
        this.feedbackBanner.classList.add('fb-wrong');
        this.logState('Pre-Roll Timeout');
        setTimeout(() => this.advanceTurn(), 1600);
      }
    }

    // =========================================================================
    // 3D DICE & STEP-BY-STEP TOKEN MOVEMENT
    // =========================================================================
    handleDiceRoll() {
      if (!this.diceUnlocked || this.isRollingOrMoving) return;
      this.isRollingOrMoving = true;
      this.diceUnlocked = false;
      this.updateDiceButtonState();

      const roll = Math.floor(Math.random() * 6) + 1;
      if (this.diceResultBadge) this.diceResultBadge.classList.add('hidden');
      this.audio.playDiceRoll();

      // 1. Start spinning fast in 3D around both axes
      this.diceBox.classList.add('rolling');

      // 2. Slow down and stop smoothly with the correct face facing the user
      setTimeout(() => {
        this.diceBox.classList.remove('rolling');
        this.diceBox.style.transition = 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.25)';

        const faceRotations = {
          1: 'rotateX(0deg) rotateY(0deg)',
          6: 'rotateX(0deg) rotateY(180deg)',
          3: 'rotateX(0deg) rotateY(-90deg)',
          4: 'rotateX(0deg) rotateY(90deg)',
          5: 'rotateX(-90deg) rotateY(0deg)',
          2: 'rotateX(90deg) rotateY(0deg)'
        };

        this.diceBox.style.transform = faceRotations[roll] || 'rotateX(0deg) rotateY(0deg)';

        setTimeout(() => {
          // Show glowing result pill above the dice (unobstructed 3D cube)
          if (this.diceResultBadge) {
            if (this.diceResultVal) this.diceResultVal.textContent = roll;
            this.diceResultBadge.classList.remove('hidden');
          }

          this.diceHeading.textContent = `🎲 ${this.activeTeam.toUpperCase()} ROLLED A ${roll}!`;
          this.moveToast.classList.remove('hidden');
          this.toastSteps.textContent = roll;

          // Speak the number for the whole class to hear
          if (this.audio && typeof this.audio.speak === 'function') {
            this.audio.speak(String(roll));
          }

          // Generous pause so students and teachers can admire the 3D dice & number
          setTimeout(() => {
            this.animateTokenStepByStep(this.activeTeam, roll);
          }, 1200);
        }, 700);
      }, 850);
    }

    animateTokenStepByStep(teamKey, totalSteps) {
      let stepCount = 0;
      const stepInterval = setInterval(() => {
        stepCount++;
        const currentPos = this.teams[teamKey].position;
        const nextPos = Math.min(25, currentPos + 1);
        this.teams[teamKey].position = nextPos;

        this.audio.playHop();
        this.updateTokensOnBoard();

        // Check if reached FINISH (Space 25)
        if (nextPos === 25 || stepCount >= totalSteps) {
          clearInterval(stepInterval);
          this.moveToast.classList.add('hidden');
          setTimeout(() => {
            this.handleSpaceLanding(teamKey, this.teams[teamKey].position);
          }, 400);
        }
      }, 340);
    }

    // =========================================================================
    // SPACE LANDING & SPECIAL EVENTS
    // =========================================================================
    handleSpaceLanding(teamKey, pos) {
      const tile = MONOPOLY_BOARD_TILES[pos];
      if (!tile) {
        this.advanceTurn();
        return;
      }

      const teamName = teamKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const opponentKey = teamKey === 'blue' ? 'red' : 'blue';
      const opponentName = opponentKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';

      // 1. START SPACE
      if (tile.type === 'start') {
        this.showEventModal('🏁', 'AT START!', `${teamName} is at START! +2 Bonus Stars!`, null, () => {
          this.teams[teamKey].score += 2;
          this.updateHUD();
          this.advanceTurn();
        });
        return;
      }

      // 2. FINISH SPACE (Final Destination!)
      if (tile.type === 'finish') {
        this.teams[teamKey].score += 5;
        this.updateHUD();
        this.audio.playFanfare();
        this.confetti.fire(100);

        this.showEventModal('🏆', 'REACHED FINISH!', `${teamName} reached FINISH and earns +5 Victory Stars!`, null, () => {
          this.showWinnerCeremony();
        });
        return;
      }

      // 3. CATEGORY SPACES (Ownership & Steal Mechanic)
      if (tile.type === 'category') {
        const owner = this.tileOwnership[pos];

        if (owner === null) {
          // Unclaimed space -> Claim it!
          this.tileOwnership[pos] = teamKey;
          this.teams[teamKey].ownedSpaces.push(pos);
          this.teams[teamKey].score += 1;
          this.updateTileOwnershipUI(pos, teamKey);
          this.updateHUD();
          this.audio.playSuccess();
          this.confetti.fire(30);

          this.showEventModal(
            tile.emoji || tile.icon,
            `${teamName} CLAIMS ${tile.name}!`,
            `Great job! ${teamName} now owns this ${tile.categoryName} space and earns +1 Star!`,
            null,
            () => this.advanceTurn()
          );
          return;

        } else if (owner === teamKey) {
          // Own space -> Loyalty Star
          this.teams[teamKey].score += 1;
          this.updateHUD();
          this.audio.playSuccess();

          this.showEventModal(
            '⭐',
            'LOYALTY BONUS!',
            `${teamName} landed on their own space! +1 Loyalty Star!`,
            null,
            () => this.advanceTurn()
          );
          return;

        } else {
          // Landed on opponent's space -> STEAL CHALLENGE!
          this.triggerStealChallenge(pos, teamKey, opponentKey);
          return;
        }
      }

      // 4. SPECIAL SPACES
      if (tile.type === 'special_bonus') {
        // ⭐ BONUS STAR
        this.teams[teamKey].score += 2;
        this.updateHUD();
        this.audio.playSuccess();
        this.confetti.fire(40);
        this.showEventModal('⭐', 'BONUS STARS!', `${teamName} landed on BONUS STAR! +2 Free Stars!`, null, () => this.advanceTurn());
        return;
      }

      if (tile.type === 'special_mystery') {
        // 🎁 MYSTERY BOX
        this.handleMysteryBox(teamKey);
        return;
      }

      if (tile.type === 'special_boost') {
        // 🚀 BOOST (+2 Spaces)
        this.showEventModal('🚀', 'ROCKET BOOST!', `${teamName} blasts forward 2 spaces!`, null, () => {
          this.isRollingOrMoving = false;
          const nextPos = Math.min(25, this.teams[teamKey].position + 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          this.handleSpaceLanding(teamKey, nextPos);
        });
        return;
      }

      if (tile.type === 'special_trap') {
        // 🐌 TRAP (-2 Spaces)
        this.showEventModal('🐌', 'SLIME TRAP!', `Oh no! ${teamName} slips back 2 spaces!`, null, () => {
          this.isRollingOrMoving = false;
          const nextPos = Math.max(0, this.teams[teamKey].position - 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          this.advanceTurn();
        });
        return;
      }

      if (tile.type === 'special_lucky') {
        // 🎲 LUCKY ROLL (Roll again!)
        this.showEventModal('🎲', 'LUCKY ROLL!', `${teamName} earned an immediate FREE DICE ROLL!`, null, () => {
          this.stageQuestion.classList.add('hidden');
          this.stageDice.classList.remove('hidden');
          this.diceHeading.textContent = `🎲 LUCKY FREE ROLL: ${teamName}!`;
          this.diceSub.textContent = 'Roll the dice again right now!';
          this.diceUnlocked = true;
          this.isRollingOrMoving = false;
          this.updateDiceButtonState();
        });
        return;
      }

      if (tile.type === 'special_miss') {
        // ⏸️ MISS A TURN
        this.teams[teamKey].missTurn = true;
        this.showEventModal('⏸️', 'MISS A TURN!', `${teamName} needs to rest! Skip your next turn!`, null, () => this.advanceTurn());
        return;
      }

      if (tile.type === 'special_challenge') {
        // ⚡ CHALLENGE (+2 Stars on correct)
        this.showEventModal(
          '⚡',
          'HARD CHALLENGE!',
          `${teamName}: Answer a 🔴 HARD Question for +2 Bonus Stars!`,
          null,
          () => {
            this.isBonusChallenge = true;
            this.currentQuestionAnswered = false;
            this.stageQuestion.classList.remove('hidden');
            this.stageDice.classList.add('hidden');
            this.feedbackBanner.classList.add('hidden');

            this.currentQuestion = this.getNextValidQuestion(null, 'hard');
            this.renderQuestionData(this.currentQuestion);
            this.startCountdown(10, () => this.handleTimeout());
          }
        );
        return;
      }

      // Default fallback
      this.advanceTurn();
    }

    updateTileOwnershipUI(tileIndex, teamKey) {
      const badge = document.getElementById(`owner-badge-${tileIndex}`);
      if (!badge) return;

      badge.className = 'm-owner-badge';
      if (teamKey === 'blue') {
        badge.classList.add('owner-blue');
        badge.textContent = '🔵 BLUE';
      } else if (teamKey === 'red') {
        badge.classList.add('owner-red');
        badge.textContent = '🔴 RED';
      } else {
        badge.textContent = '';
      }
    }

    // --- Steal Challenge Event ---
    triggerStealChallenge(tileIndex, attackerKey, defenderKey) {
      const tile = MONOPOLY_BOARD_TILES[tileIndex];
      const attackerName = attackerKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const defenderName = defenderKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';

      this.showEventModal(
        '⚡',
        'STEAL CHALLENGE!',
        `${attackerName} landed on ${defenderName}'s space (${tile.name})!\nAnswer this 🔴 HARD question correctly to STEAL it!`,
        null,
        () => {
          this.isStealChallenge = true;
          this.stealTargetTileIndex = tileIndex;
          this.currentQuestionAnswered = false;

          this.stageQuestion.classList.remove('hidden');
          this.stageDice.classList.add('hidden');
          this.feedbackBanner.classList.add('hidden');

          // Hard question for steal
          this.currentQuestion = this.getNextValidQuestion(tile.category || null, 'hard');
          this.renderQuestionData(this.currentQuestion);

          // 10s Countdown for Hard steal challenge
          this.startCountdown(10, () => {
            this.handleTimeout();
          });
        }
      );
    }

    resolveStealChallenge(isSuccess) {
      const tileIndex = this.stealTargetTileIndex;
      const tile = MONOPOLY_BOARD_TILES[tileIndex];
      const attackerKey = this.activeTeam;
      const defenderKey = attackerKey === 'blue' ? 'red' : 'blue';
      const attackerName = attackerKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const defenderName = defenderKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';

      this.isStealChallenge = false;
      this.stealTargetTileIndex = null;

      if (!tile || tileIndex === null || tileIndex === undefined) {
        this.advanceTurn();
        return;
      }

      if (isSuccess) {
        // Ownership transfers
        this.tileOwnership[tileIndex] = attackerKey;
        this.teams[defenderKey].ownedSpaces = this.teams[defenderKey].ownedSpaces.filter(idx => idx !== tileIndex);
        this.teams[attackerKey].ownedSpaces.push(tileIndex);
        this.updateTileOwnershipUI(tileIndex, attackerKey);
        this.updateHUD();

        this.showEventModal('🎉', 'STEAL SUCCESSFUL!', `${attackerName} stole ${tile.name} from ${defenderName}!`, null, () => this.advanceTurn());
      } else {
        // Defender keeps and earns rent
        this.teams[defenderKey].score += 1;
        this.updateHUD();

        this.showEventModal('🛡️', 'DEFENSE SUCCESSFUL!', `${defenderName} defended their space and gets +1 Star Rent!`, null, () => this.advanceTurn());
      }
    }

    // --- Mystery Box Event ---
    handleMysteryBox(teamKey) {
      const teamName = teamKey === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const rewards = [
        { title: '⭐ LUCKY CHEST!', desc: `${teamName} opened a treasure box! +2 Stars!`, pts: 2 },
        { title: '💎 JACKPOT!', desc: `Super jackpot! ${teamName} gets +3 Stars!`, pts: 3 },
        { title: '🚀 TURBO ROCKET!', desc: `${teamName} launches forward 2 spaces!`, boost: 2 },
        { title: '🎲 LUCKY ROLL!', desc: `${teamName} gets to roll the dice again!`, extraRoll: true }
      ];

      const r = rewards[Math.floor(Math.random() * rewards.length)];
      this.showEventModal('🎁', r.title, r.desc, null, () => {
        if (r.pts) {
          this.teams[teamKey].score += r.pts;
          this.updateHUD();
          this.audio.playSuccess();
          this.advanceTurn();
        } else if (r.boost) {
          this.isRollingOrMoving = false;
          const nextPos = Math.min(25, this.teams[teamKey].position + 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          this.handleSpaceLanding(teamKey, nextPos);
        } else if (r.extraRoll) {
          this.stageQuestion.classList.add('hidden');
          this.stageDice.classList.remove('hidden');
          this.diceHeading.textContent = `🎲 LUCKY FREE ROLL: ${teamName}!`;
          this.diceSub.textContent = 'Roll the dice again right now!';
          this.diceUnlocked = true;
          this.isRollingOrMoving = false;
          this.updateDiceButtonState();
        } else {
          this.advanceTurn();
        }
      });
    }

    showEventModal(badge, title, desc, interactiveHtml, onContinue) {
      this.modalOpen = true;
      this.onEventModalContinue = onContinue;

      this.eventBadge.textContent = badge;
      this.eventTitle.textContent = title;
      this.eventDesc.textContent = desc;

      if (interactiveHtml) {
        this.eventInteractive.innerHTML = interactiveHtml;
        this.eventInteractive.classList.remove('hidden');
      } else {
        this.eventInteractive.classList.add('hidden');
      }

      if (this.btnEventContinue) {
        this.btnEventContinue.disabled = false;
        this.btnEventContinue.style.pointerEvents = 'auto';
        this.btnEventContinue.style.cursor = 'pointer';
        this.btnEventContinue.style.opacity = '1';
      }

      this.eventModal.classList.remove('hidden');
      this.eventModal.style.pointerEvents = 'auto';
    }

    closeEventModal() {
      this.modalOpen = false;
      this.eventModal.classList.add('hidden');
      this.eventModal.style.pointerEvents = 'none';

      const cb = this.onEventModalContinue;
      this.onEventModalContinue = null;
      if (typeof cb === 'function') {
        cb();
      } else {
        this.advanceTurn();
      }
    }

    // =========================================================================
    // ADVANCE TURN & WINNER CEREMONY
    // =========================================================================
    advanceTurn() {
      clearInterval(this.countdownInterval);
      this.modalOpen = false;
      this.isRollingOrMoving = false;
      this.isStealChallenge = false;
      this.isBonusChallenge = false;
      this.stealTargetTileIndex = null;
      unlockGameUI();

      // Check if any team has reached Space 25 (FINISH) or if max rounds met
      if (this.teams.blue.position >= 25 || this.teams.red.position >= 25) {
        this.showWinnerCeremony();
        return;
      }

      if (this.activeTeam === 'red') {
        this.currentRound++;
        if (this.currentRound > this.maxRounds) {
          this.showWinnerCeremony();
          return;
        }
      }

      this.activeTeam = this.activeTeam === 'blue' ? 'red' : 'blue';
      this.logState('Advance Turn Complete');
      this.updateHUD();

      // Check if team has missTurn
      if (this.teams[this.activeTeam].missTurn) {
        this.teams[this.activeTeam].missTurn = false;
        const teamName = this.activeTeam === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
        this.showEventModal('⏸️', 'MISSED TURN!', `${teamName} is resting this turn (Miss a Turn space)!`, null, () => {
          this.advanceTurn();
        });
        return;
      }

      this.startPreRollTurn();
    }

    showWinnerCeremony() {
      clearInterval(this.countdownInterval);

      const blueTotal = this.teams.blue.score + this.teams.blue.ownedSpaces.length;
      const redTotal = this.teams.red.score + this.teams.red.ownedSpaces.length;

      this.finalBlueStars.textContent = `${this.teams.blue.score} ⭐`;
      this.finalBlueOwned.textContent = `${this.teams.blue.ownedSpaces.length} 🏠`;
      this.finalBlueCorrect.textContent = this.teams.blue.correctCount;

      this.finalRedStars.textContent = `${this.teams.red.score} ⭐`;
      this.finalRedOwned.textContent = `${this.teams.red.ownedSpaces.length} 🏠`;
      this.finalRedCorrect.textContent = this.teams.red.correctCount;

      if (blueTotal > redTotal) {
        this.winnerTitle.textContent = '🏆 BLUE TEAM WINS!';
      } else if (redTotal > blueTotal) {
        this.winnerTitle.textContent = '🏆 RED TEAM WINS!';
      } else {
        this.winnerTitle.textContent = "🤝 IT'S A TIE!";
      }

      this.audio.playFanfare();
      this.confetti.fire(160);
      this.winnerOverlay.classList.remove('hidden');
    }
  }

  // =========================================================================
  // 3.5. 🎭 EMOJI CHARADES ACTIVITY ENGINE
  // =========================================================================
  const CHARADES_VOCABULARY = [
    // ACTIVITIES:
    { emoji: '🎮', word: 'PLAY GAMES', category: 'Activities' },
    { emoji: '🎧', word: 'LISTEN TO MUSIC', category: 'Activities' },
    { emoji: '📱', word: 'WATCH VIDEOS', category: 'Activities' },
    { emoji: '📷', word: 'TAKE PHOTOS', category: 'Activities' },
    { emoji: '🎨', word: 'DRAW', category: 'Activities' },
    { emoji: '⚽', word: 'PLAY FOOTBALL', category: 'Activities' },
    { emoji: '🏀', word: 'PLAY BASKETBALL', category: 'Activities' },
    { emoji: '🛹', word: 'SKATEBOARD', category: 'Activities' },
    { emoji: '🚲', word: 'RIDE A BIKE', category: 'Activities' },
    { emoji: '🎤', word: 'SING', category: 'Activities' },
    { emoji: '💃', word: 'DANCE', category: 'Activities' },
    { emoji: '🏊', word: 'SWIM', category: 'Activities' },
    { emoji: '📖', word: 'READ BOOKS', category: 'Activities' },
    { emoji: '🧩', word: 'DO PUZZLES', category: 'Activities' },
    { emoji: '🧱', word: 'BUILD THINGS', category: 'Activities' },
    { emoji: '⛺', word: 'CAMP', category: 'Activities' },

    // FOOD:
    { emoji: '🍏', word: 'APPLE', category: 'Food' },
    { emoji: '🍌', word: 'BANANA', category: 'Food' },
    { emoji: '🍓', word: 'STRAWBERRY', category: 'Food' },
    { emoji: '🫐', word: 'BLUEBERRIES', category: 'Food' },
    { emoji: '🥑', word: 'AVOCADO', category: 'Food' },
    { emoji: '🥗', word: 'SALAD', category: 'Food' },
    { emoji: '🥪', word: 'SANDWICH', category: 'Food' },
    { emoji: '🍕', word: 'PIZZA', category: 'Food' },
    { emoji: '🍦', word: 'ICE CREAM', category: 'Food' },
    { emoji: '🥦', word: 'BROCCOLI', category: 'Food' },
    { emoji: '🍣', word: 'SUSHI', category: 'Food' },

    // COLORS:
    { emoji: '🔴', word: 'RED', category: 'Colors' },
    { emoji: '🟠', word: 'ORANGE', category: 'Colors' },
    { emoji: '🟡', word: 'YELLOW', category: 'Colors' },
    { emoji: '🟢', word: 'GREEN', category: 'Colors' },
    { emoji: '🔵', word: 'BLUE', category: 'Colors' },
    { emoji: '🟣', word: 'PURPLE', category: 'Colors' },
    { emoji: '🩷', word: 'PINK', category: 'Colors' },
    { emoji: '🟤', word: 'BROWN', category: 'Colors' },
    { emoji: '⚫', word: 'BLACK', category: 'Colors' },
    { emoji: '⚪', word: 'WHITE', category: 'Colors' },
    { emoji: '🩵', word: 'LIGHT BLUE', category: 'Colors' },

    // FEELINGS:
    { emoji: '🤩', word: 'EXCITED', category: 'Feelings' },
    { emoji: '😁', word: 'HAPPY', category: 'Feelings' },
    { emoji: '😊', word: 'GOOD', category: 'Feelings' },
    { emoji: '😐', word: 'OKAY', category: 'Feelings' },
    { emoji: '🤔', word: 'CURIOUS', category: 'Feelings' },
    { emoji: '😟', word: 'NERVOUS', category: 'Feelings' },
    { emoji: '😢', word: 'SAD', category: 'Feelings' },
    { emoji: '😫', word: 'DIFFICULT', category: 'Feelings' },
    { emoji: '😭', word: 'NEED HELP', category: 'Feelings' }
  ];

  class EmojiCharadesEngine {
    constructor(app) {
      this.app = app;
      this.blueScore = 0;
      this.redScore = 0;
      this.history = [];
      this.pool = [];
      this.currentItem = null;

      this.cacheDOMElements();
      this.bindEvents();
    }

    cacheDOMElements() {
      this.emojiEl = document.getElementById('charades-emoji');
      this.wordEl = document.getElementById('charades-word');
      this.categoryEl = document.getElementById('charades-category');
      this.cardEl = document.getElementById('charades-card');

      this.blueScoreEl = document.getElementById('charades-blue-score');
      this.redScoreEl = document.getElementById('charades-red-score');

      this.btnBluePlus = document.getElementById('btn-charades-blue-plus');
      this.btnRedPlus = document.getElementById('btn-charades-red-plus');
      this.btnUndo = document.getElementById('btn-charades-undo');
      this.btnNext = document.getElementById('btn-charades-next');
      this.btnHome = document.getElementById('btn-charades-home');
    }

    bindEvents() {
      if (this.btnBluePlus) {
        this.btnBluePlus.addEventListener('click', (e) => {
          e.preventDefault();
          this.addPoint('blue');
        });
      }
      if (this.btnRedPlus) {
        this.btnRedPlus.addEventListener('click', (e) => {
          e.preventDefault();
          this.addPoint('red');
        });
      }
      if (this.btnUndo) {
        this.btnUndo.addEventListener('click', (e) => {
          e.preventDefault();
          this.undo();
        });
      }
      if (this.btnNext) {
        this.btnNext.addEventListener('click', (e) => {
          e.preventDefault();
          this.nextCard(true);
        });
      }
      if (this.btnHome) {
        this.btnHome.addEventListener('click', (e) => {
          e.preventDefault();
          this.app.audio.playPop();
          this.app.switchScreen('start');
        });
      }
    }

    start() {
      this.blueScore = 0;
      this.redScore = 0;
      this.history = [];
      this.initPool();
      this.nextCard(false);
      this.updateUI();
    }

    initPool() {
      this.pool = [...CHARADES_VOCABULARY];
      // Fisher-Yates shuffle
      for (let i = this.pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.pool[i], this.pool[j]] = [this.pool[j], this.pool[i]];
      }
    }

    nextCard(playAudio = true) {
      if (this.pool.length === 0) {
        const lastItem = this.currentItem;
        this.initPool();
        if (this.pool.length > 1 && this.pool[this.pool.length - 1] === lastItem) {
          [this.pool[this.pool.length - 1], this.pool[0]] = [this.pool[0], this.pool[this.pool.length - 1]];
        }
      }

      this.currentItem = this.pool.pop();

      if (this.emojiEl) this.emojiEl.textContent = this.currentItem.emoji;
      if (this.wordEl) this.wordEl.textContent = this.currentItem.word;
      if (this.categoryEl) this.categoryEl.textContent = this.currentItem.category.toUpperCase();

      if (this.cardEl) {
        this.cardEl.classList.remove('animate-pop');
        void this.cardEl.offsetWidth; // trigger reflow
        this.cardEl.classList.add('animate-pop');
      }

      if (playAudio && this.app.audio) {
        this.app.audio.playPop();
      }
    }

    addPoint(team) {
      if (team === 'blue') {
        this.blueScore++;
        this.history.push({ team: 'blue' });
      } else if (team === 'red') {
        this.redScore++;
        this.history.push({ team: 'red' });
      }

      if (this.app.audio) {
        this.app.audio.playPointChime();
      }

      this.updateUI();
    }

    undo() {
      if (this.history.length === 0) return;
      const lastAction = this.history.pop();
      if (lastAction.team === 'blue') {
        this.blueScore = Math.max(0, this.blueScore - 1);
      } else if (lastAction.team === 'red') {
        this.redScore = Math.max(0, this.redScore - 1);
      }

      if (this.app.audio) {
        this.app.audio.playSoftClick();
      }

      this.updateUI();
    }

    updateUI() {
      if (this.blueScoreEl) this.blueScoreEl.textContent = this.blueScore;
      if (this.redScoreEl) this.redScoreEl.textContent = this.redScore;
      if (this.btnUndo) this.btnUndo.disabled = (this.history.length === 0);
    }
  }

  window.CHARADES_VOCABULARY = CHARADES_VOCABULARY;
  window.EmojiCharadesEngine = EmojiCharadesEngine;

  // =========================================================================
  // 3.6. 🎮 HELP SAM! — TECH ADVENTURE DATASETS & ENGINE
  // =========================================================================
  const SAM_STORY_SLIDES = [
    {
      slideNum: 1,
      visual: '🧑💻 🏠',
      caption: 'THIS IS SAM.',
      sub: 'Sam lives in Sunnyville!'
    },
    {
      slideNum: 2,
      visual: '🧑💻 💻',
      caption: 'SAM HAS A COMPUTER.',
      sub: 'Sam loves using his computer!'
    },
    {
      slideNum: 3,
      visual: '🧑💻 🎮',
      caption: 'SAM LIKES GAMES.',
      sub: 'Sam plays fun adventure games!'
    },
    {
      slideNum: 4,
      visual: '🎮 ❌ 😟',
      caption: 'OH NO! GAME ERROR!',
      sub: 'The game will not open today!'
    },
    {
      slideNum: 5,
      visual: '🧑💻 💡 🛠️',
      caption: "LET'S HELP SAM FIX IT!",
      sub: 'Follow the tech steps to solve the problem!'
    }
  ];

  const SAM_TECH_ICONS = [
    { icon: '🔐', name: 'PASSWORD', hint: 'Keeps your account safe!' },
    { icon: '📧', name: 'EMAIL', hint: 'Send and get messages!' },
    { icon: '📶', name: 'WI-FI', hint: 'Connects you to the internet!' },
    { icon: '👆', name: 'CLICK', hint: 'Touch or tap the screen!' },
    { icon: '🗑️', name: 'DELETE', hint: 'Remove old unwanted files!' },
    { icon: '⬇️', name: 'DOWNLOAD', hint: 'Get new files and updates!' },
    { icon: '🌐', name: 'WEBSITE', hint: 'Visit pages on the internet!' },
    { icon: '🎮', name: 'GAME', hint: 'Play and have fun!' },
    { icon: '🛠️', name: 'FIX', hint: 'Repair tech problems!' },
    { icon: '⏻', name: 'POWER', hint: 'Turn computer on or restart!' },
    { icon: '🔑', name: 'RECOVER', hint: 'Get back your lost password!' }
  ];

  const SAM_PRACTICE_QUESTIONS = [
    {
      promptVisual: '🧑💻 😟',
      promptText: 'PASSWORD?',
      choices: [
        { emoji: '🔐', label: 'PASSWORD', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '📶', label: 'WI-FI', correct: false }
      ]
    },
    {
      promptVisual: '💻 🌐',
      promptText: 'WEBSITE?',
      choices: [
        { emoji: '🎮', label: 'GAME', correct: false },
        { emoji: '🌐', label: 'WEBSITE', correct: true },
        { emoji: '📧', label: 'EMAIL', correct: false }
      ]
    },
    {
      promptVisual: '📶 ❓',
      promptText: 'WI-FI?',
      choices: [
        { emoji: '📶', label: 'WI-FI', correct: true },
        { emoji: '🔑', label: 'RECOVER', correct: false },
        { emoji: '⏻', label: 'POWER', correct: false }
      ]
    },
    {
      promptVisual: '📥 ⬇️',
      promptText: 'DOWNLOAD?',
      choices: [
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false },
        { emoji: '⬇️', label: 'DOWNLOAD', correct: true }
      ]
    },
    {
      promptVisual: '🗑️ ❌',
      promptText: 'DELETE?',
      choices: [
        { emoji: '🗑️', label: 'DELETE', correct: true },
        { emoji: '🎮', label: 'GAME', correct: false },
        { emoji: '📧', label: 'EMAIL', correct: false }
      ]
    }
  ];

  const SAM_STORY_STEPS = [
    {
      step: 1,
      promptVisual: '🧑💻 😟 🔐',
      promptText: 'SAM FORGOT HIS PASSWORD!',
      subText: 'What does Sam need to recover his account?',
      choices: [
        { emoji: '🔑', label: 'RECOVER', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '📶', label: 'WI-FI', correct: false }
      ]
    },
    {
      step: 2,
      promptVisual: '🧑💻 📩',
      promptText: 'HE CLICKS "FORGOT PASSWORD"!',
      subText: 'Where does Sam get his new password?',
      choices: [
        { emoji: '🎮', label: 'GAME', correct: false },
        { emoji: '📧', label: 'EMAIL', correct: true },
        { emoji: '⏻', label: 'POWER', correct: false }
      ]
    },
    {
      step: 3,
      promptVisual: '💻 📶 ❓',
      promptText: 'SAM NEEDS THE INTERNET!',
      subText: 'What does he connect to?',
      choices: [
        { emoji: '📶', label: 'WI-FI', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false }
      ]
    },
    {
      step: 4,
      promptVisual: '🎮 ❌ 😟',
      promptText: "THE GAME STILL DOESN'T WORK!",
      subText: 'What does Sam need to do?',
      choices: [
        { emoji: '🛠️', label: 'FIX IT', correct: true },
        { emoji: '📧', label: 'EMAIL', correct: false },
        { emoji: '🔑', label: 'RECOVER', correct: false }
      ]
    },
    {
      step: 5,
      promptVisual: '🗑️ 🎮 (OLD)',
      promptText: 'REMOVE THE BROKEN VERSION!',
      subText: 'What does Sam do to the old game?',
      choices: [
        { emoji: '🗑️', label: 'DELETE', correct: true },
        { emoji: '📶', label: 'WI-FI', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false }
      ]
    },
    {
      step: 6,
      promptVisual: '💻 🌐',
      promptText: 'FIND THE OFFICIAL GAME PAGE!',
      subText: 'Where does Sam go on the internet?',
      choices: [
        { emoji: '🌐', label: 'WEBSITE', correct: true },
        { emoji: '⏻', label: 'POWER', correct: false },
        { emoji: '🔑', label: 'RECOVER', correct: false }
      ]
    },
    {
      step: 7,
      promptVisual: '🌐 ⬇️ 🎮 (NEW)',
      promptText: 'GET THE LATEST GAME VERSION!',
      subText: 'What does Sam click on the website?',
      choices: [
        { emoji: '⬇️', label: 'DOWNLOAD', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '📧', label: 'EMAIL', correct: false }
      ]
    },
    {
      step: 8,
      promptVisual: '🧑💻 🎮 ✅ 🤩',
      promptText: 'THE NEW GAME IS READY!',
      subText: 'What can Sam do now?',
      choices: [
        { emoji: '🎮', label: 'PLAY GAME', correct: true },
        { emoji: '🔐', label: 'PASSWORD', correct: false },
        { emoji: '🛠️', label: 'FIX', correct: false }
      ]
    }
  ];

  const SAM_LEVELUP_CHALLENGES = [
    {
      levelBadge: 'LEVEL 1: EMOJIS + WORDS',
      promptVisual: '🧑💻 🔐 ❓',
      promptText: 'SAM CANNOT LOG IN!',
      subText: 'Choose the correct tool to recover password:',
      choices: [
        { emoji: '🔑', label: 'RECOVER KEY', correct: true },
        { emoji: '🗑️', label: 'DELETE TRASH', correct: false },
        { emoji: '📶', label: 'WI-FI SIGNAL', correct: false }
      ]
    },
    {
      levelBadge: 'LEVEL 2: PICTURES ONLY',
      promptVisual: '💻 📶 ❌',
      promptText: 'NO INTERNET!',
      subText: 'Touch the correct icon:',
      choices: [
        { emoji: '📶', label: '', correct: true },
        { emoji: '📧', label: '', correct: false },
        { emoji: '🎮', label: '', correct: false }
      ]
    },
    {
      levelBadge: 'LEVEL 3: ACTION DECISION',
      promptVisual: '💻 📁 ❌ 🗑️',
      promptText: 'OLD BROKEN FILE ON COMPUTER',
      subText: 'What action should we take?',
      choices: [
        { emoji: '🗑️', label: 'DELETE OLD FILE', correct: true },
        { emoji: '⬇️', label: 'DOWNLOAD MORE', correct: false },
        { emoji: '🔐', label: 'LOCK SCREEN', correct: false },
        { emoji: '📧', label: 'SEND EMAIL', correct: false }
      ]
    },
    {
      levelBadge: 'LEVEL 4: SITUATION CLUES',
      promptVisual: '🎮 ❌ 🌐 ⬇️',
      promptText: "SAM CAN'T PLAY HIS GAME.",
      subText: 'What is the best solution?',
      choices: [
        { emoji: '⬇️', label: 'DOWNLOAD NEW VERSION', correct: true },
        { emoji: '🔐', label: 'CHANGE PASSWORD', correct: false },
        { emoji: '⏻', label: 'UNPLUG PC', correct: false },
        { emoji: '📧', label: 'SEND EMAIL', correct: false }
      ]
    },
    {
      levelBadge: 'LEVEL 5: MULTI-STEP DIAGNOSTIC',
      promptVisual: '🎮 ❌ 💻 📶 ✅',
      promptText: 'INTERNET IS OK, BUT GAME CRASHES!',
      subText: 'Decide what to do next:',
      choices: [
        { emoji: '🗑️', label: 'DELETE & REINSTALL', correct: true },
        { emoji: '🔐', label: 'CHECK PASSWORD', correct: false },
        { emoji: '📶', label: 'RESET WI-FI', correct: false },
        { emoji: '🔑', label: 'RECOVER KEY', correct: false }
      ]
    }
  ];

  const SAM_MINI_CHALLENGES = [
    {
      promptVisual: '💻 🐌',
      promptText: 'COMPUTER IS SLOW!',
      subText: 'How do we fix it?',
      choices: [
        { emoji: '🗑️', label: 'DELETE JUNK FILES', correct: true },
        { emoji: '⬇️', label: 'DOWNLOAD MORE', correct: false },
        { emoji: '🔐', label: 'LOCK SCREEN', correct: false }
      ]
    },
    {
      promptVisual: '📄 ❌ 😟',
      promptText: "CANNOT OPEN A FILE!",
      subText: 'What do we need?',
      choices: [
        { emoji: '⬇️', label: 'DOWNLOAD APP', correct: true },
        { emoji: '🗑️', label: 'DELETE ALL', correct: false },
        { emoji: '📶', label: 'WI-FI ONLY', correct: false }
      ]
    },
    {
      promptVisual: '🌐 ❓',
      promptText: "CAN'T FIND A WEBSITE!",
      subText: 'What should we check?',
      choices: [
        { emoji: '🌐', label: 'CHECK WEB ADDRESS', correct: true },
        { emoji: '🎮', label: 'OPEN GAME', correct: false },
        { emoji: '🔐', label: 'ENTER PASSWORD', correct: false }
      ]
    },
    {
      promptVisual: '🖥️ 🧊',
      promptText: 'SCREEN IS FROZEN!',
      subText: 'What should you press?',
      choices: [
        { emoji: '⏻', label: 'RESTART / POWER', correct: true },
        { emoji: '📧', label: 'CHECK EMAIL', correct: false },
        { emoji: '⬇️', label: 'DOWNLOAD', correct: false }
      ]
    },
    {
      promptVisual: '🔊 ❌ 🔇',
      promptText: 'NO SOUND ON COMPUTER!',
      subText: 'How do we fix sound?',
      choices: [
        { emoji: '🔊', label: 'TURN UP VOLUME', correct: true },
        { emoji: '🗑️', label: 'DELETE AUDIO', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false }
      ]
    },
    {
      promptVisual: '🔋 ⬇️ 🪫',
      promptText: 'BATTERY DRAINS QUICKLY!',
      subText: 'What should we do?',
      choices: [
        { emoji: '⏻', label: 'CLOSE APPS & CHARGE', correct: true },
        { emoji: '🎮', label: 'PLAY HEAVY GAME', correct: false },
        { emoji: '🌐', label: 'OPEN 10 WEBSITES', correct: false }
      ]
    },
    {
      promptVisual: '📢 📢 📢 ❌',
      promptText: 'TOO MANY POP-UP ADS!',
      subText: 'How do we fix pop-ups?',
      choices: [
        { emoji: '🗑️', label: 'CLOSE & BLOCK ADS', correct: true },
        { emoji: '⬇️', label: 'CLICK ALL ADS', correct: false },
        { emoji: '🔑', label: 'SEND PASSWORD', correct: false }
      ]
    },
    {
      promptVisual: '🔐 ❓ 😟',
      promptText: 'FORGOT PASSWORD!',
      subText: 'Where do you get help?',
      choices: [
        { emoji: '📧', label: 'EMAIL RECOVERY', correct: true },
        { emoji: '🗑️', label: 'DELETE COMPUTER', correct: false },
        { emoji: '🎮', label: 'PLAY GAME', correct: false }
      ]
    }
  ];

  const SAM_BOARD_SPACES = [
    { id: 0, icon: '🚩', label: 'START', type: 'start', challenge: null },
    {
      id: 1,
      icon: '🔐',
      label: 'PASSWORD',
      type: 'challenge',
      visual: '🧑💻 🔐 ❓',
      question: 'SAM FORGOT HIS PASSWORD!',
      choices: [
        { emoji: '🔑', label: 'RECOVER', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '📶', label: 'WI-FI', correct: false }
      ]
    },
    {
      id: 2,
      icon: '📧',
      label: 'EMAIL',
      type: 'challenge',
      visual: '🧑💻 📩',
      question: 'GET PASSWORD BY EMAIL!',
      choices: [
        { emoji: '📧', label: 'EMAIL', correct: true },
        { emoji: '🎮', label: 'GAME', correct: false },
        { emoji: '⏻', label: 'POWER', correct: false }
      ]
    },
    {
      id: 3,
      icon: '📶',
      label: 'WI-FI',
      type: 'challenge',
      visual: '💻 📶 ❌',
      question: 'HOW DO WE FIX WI-FI?',
      choices: [
        { emoji: '📶', label: 'CONNECT WI-FI', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false }
      ]
    },
    {
      id: 4,
      icon: '🎁',
      label: 'BONUS +2',
      type: 'bonus',
      visual: '🎁 ⭐ ⭐',
      question: 'LUCKY TECH BONUS! +2 STARS',
      choices: []
    },
    {
      id: 5,
      icon: '🗑️',
      label: 'DELETE',
      type: 'challenge',
      visual: '🗑️ 📁 (OLD)',
      question: 'REMOVE BROKEN FILES!',
      choices: [
        { emoji: '🗑️', label: 'DELETE', correct: true },
        { emoji: '📶', label: 'WI-FI', correct: false },
        { emoji: '📧', label: 'EMAIL', correct: false }
      ]
    },
    {
      id: 6,
      icon: '🌐',
      label: 'WEBSITE',
      type: 'challenge',
      visual: '💻 🌐',
      question: 'FIND THE GAME WEBSITE!',
      choices: [
        { emoji: '🌐', label: 'WEBSITE', correct: true },
        { emoji: '⏻', label: 'POWER', correct: false },
        { emoji: '🔑', label: 'KEY', correct: false }
      ]
    },
    {
      id: 7,
      icon: '🔄',
      label: 'ROLL AGAIN',
      type: 'roll_again',
      visual: '🔄 🎲 🚀',
      question: 'TECH BOOST! ROLL AGAIN!',
      choices: []
    },
    {
      id: 8,
      icon: '⬇️',
      label: 'DOWNLOAD',
      type: 'challenge',
      visual: '🌐 ⬇️ 🎮',
      question: 'DOWNLOAD THE UPDATE!',
      choices: [
        { emoji: '⬇️', label: 'DOWNLOAD', correct: true },
        { emoji: '🗑️', label: 'DELETE', correct: false },
        { emoji: '🔐', label: 'PASSWORD', correct: false }
      ]
    },
    {
      id: 9,
      icon: '🛠️',
      label: 'FIX IT',
      type: 'challenge',
      visual: '💻 🐌 🛠️',
      question: 'FIX COMPUTER SPEED!',
      choices: [
        { emoji: '🛠️', label: 'FIX IT', correct: true },
        { emoji: '🎮', label: 'PLAY', correct: false },
        { emoji: '📧', label: 'EMAIL', correct: false }
      ]
    },
    {
      id: 10,
      icon: '⭐',
      label: 'STAR +1',
      type: 'star',
      visual: '⭐ 🤩',
      question: 'SUPER HELPER BONUS! +1 STAR',
      choices: []
    },
    {
      id: 11,
      icon: '🏁',
      label: 'FINISH',
      type: 'finish',
      visual: '🏁 🎮 ✅',
      question: 'SAM CAN PLAY! MISSION COMPLETE!',
      choices: []
    }
  ];

  class HelpSamEngine {
    constructor(app) {
      this.app = app;
      this.audio = app.audio;
      this.confetti = app.confetti;

      // State
      this.currentStage = 1;
      this.currentSlideIndex = 0;
      this.currentIconIndex = 0;

      // Practice states
      this.p1Index = 0;
      this.p1Score = 0;

      this.s4Index = 0;
      this.s4Score = 0;

      this.s5Index = 0;
      this.s5Score = 0;

      this.s6Index = 0;
      this.s6Score = 0;

      // Board Game state
      this.blueScore = 0;
      this.redScore = 0;
      this.bluePos = 0;
      this.redPos = 0;
      this.currentTurn = 'blue';
      this.isRolling = false;

      this.cacheDOMElements();
      this.bindEvents();
    }

    cacheDOMElements() {
      // Top bar & navigation
      this.btnHome = document.getElementById('btn-sam-home');
      this.navChips = document.querySelectorAll('.sam-nav-chip');
      this.substages = {
        1: document.getElementById('sam-stage-1'),
        2: document.getElementById('sam-stage-2'),
        3: document.getElementById('sam-stage-3'),
        4: document.getElementById('sam-stage-4'),
        5: document.getElementById('sam-stage-5'),
        6: document.getElementById('sam-stage-6'),
        7: document.getElementById('sam-stage-7')
      };

      // Stage 1: Slides
      this.slideBadge = document.getElementById('sam-slide-badge');
      this.storyVisual = document.getElementById('sam-story-visual');
      this.storyCaption = document.getElementById('sam-story-caption');
      this.storySub = document.getElementById('sam-story-sub');
      this.btnSlidePrev = document.getElementById('btn-sam-slide-prev');
      this.btnSlideNext = document.getElementById('btn-sam-slide-next');

      // Stage 2: Icon Explorer
      this.iconCounter = document.getElementById('sam-icon-counter');
      this.iconTouchTarget = document.getElementById('sam-icon-touch-target');
      this.explorerIcon = document.getElementById('sam-explorer-icon');
      this.explorerName = document.getElementById('sam-explorer-name');
      this.iconFeedback = document.getElementById('sam-icon-feedback');
      this.btnIconPrev = document.getElementById('btn-sam-icon-prev');
      this.btnIconNext = document.getElementById('btn-sam-icon-next');

      // Stage 3: Easy Practice
      this.p1Counter = document.getElementById('sam-p1-counter');
      this.p1ScoreEl = document.getElementById('sam-p1-score');
      this.p1PromptVisual = document.getElementById('sam-p1-prompt-visual');
      this.p1PromptText = document.getElementById('sam-p1-prompt-text');
      this.p1ChoicesGrid = document.getElementById('sam-p1-choices');
      this.p1Feedback = document.getElementById('sam-p1-feedback');
      this.btnP1Next = document.getElementById('btn-sam-p1-next');

      // Stage 4: Sam's Problems
      this.s4StepBadge = document.getElementById('sam-s4-step-badge');
      this.s4ScoreEl = document.getElementById('sam-s4-score');
      this.s4PromptVisual = document.getElementById('sam-s4-prompt-visual');
      this.s4PromptText = document.getElementById('sam-s4-prompt-text');
      this.s4PromptSub = document.getElementById('sam-s4-prompt-sub');
      this.s4ChoicesGrid = document.getElementById('sam-s4-choices');
      this.s4Feedback = document.getElementById('sam-s4-feedback');
      this.btnS4Next = document.getElementById('btn-sam-s4-next');

      // Stage 5: Level Up
      this.s5LevelBadge = document.getElementById('sam-s5-level-badge');
      this.s5ScoreEl = document.getElementById('sam-s5-score');
      this.s5PromptVisual = document.getElementById('sam-s5-prompt-visual');
      this.s5PromptText = document.getElementById('sam-s5-prompt-text');
      this.s5PromptSub = document.getElementById('sam-s5-prompt-sub');
      this.s5ChoicesGrid = document.getElementById('sam-s5-choices');
      this.s5Feedback = document.getElementById('sam-s5-feedback');
      this.btnS5Next = document.getElementById('btn-sam-s5-next');

      // Stage 6: Mini Challenges
      this.s6Counter = document.getElementById('sam-s6-counter');
      this.s6ScoreEl = document.getElementById('sam-s6-score');
      this.s6PromptVisual = document.getElementById('sam-s6-prompt-visual');
      this.s6PromptText = document.getElementById('sam-s6-prompt-text');
      this.s6PromptSub = document.getElementById('sam-s6-prompt-sub');
      this.s6ChoicesGrid = document.getElementById('sam-s6-choices');
      this.s6Feedback = document.getElementById('sam-s6-feedback');
      this.btnS6Next = document.getElementById('btn-sam-s6-next');

      // Stage 7: Board Game
      this.teamBoxBlue = document.getElementById('sam-team-box-blue');
      this.teamBoxRed = document.getElementById('sam-team-box-red');
      this.blueScoreEl = document.getElementById('sam-blue-score');
      this.redScoreEl = document.getElementById('sam-red-score');
      this.bluePosTag = document.getElementById('sam-blue-pos-tag');
      this.redPosTag = document.getElementById('sam-red-pos-tag');
      this.turnLabel = document.getElementById('sam-turn-label');
      this.diceDisplay = document.getElementById('sam-dice-display');
      this.btnRoll = document.getElementById('btn-sam-roll');
      this.trackGrid = document.getElementById('sam-track-grid');

      // Modals
      this.boardModal = document.getElementById('sam-board-modal');
      this.modalSpaceTitle = document.getElementById('sam-modal-space-title');
      this.modalVisual = document.getElementById('sam-modal-visual');
      this.modalQuestion = document.getElementById('sam-modal-question');
      this.modalChoices = document.getElementById('sam-modal-choices');
      this.modalFeedback = document.getElementById('sam-modal-feedback');
      this.btnModalContinue = document.getElementById('btn-sam-modal-continue');

      this.winnerModal = document.getElementById('sam-winner-modal');
      this.winnerTitle = document.getElementById('sam-winner-title');
      this.winnerSub = document.getElementById('sam-winner-sub');
      this.winnerScores = document.getElementById('sam-winner-scores');
      this.btnReplay = document.getElementById('btn-sam-replay');
    }

    bindEvents() {
      // Home
      if (this.btnHome) {
        this.btnHome.addEventListener('click', () => {
          this.audio.playPop();
          this.app.switchScreen('start');
        });
      }

      // Nav chips
      this.navChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const stage = parseInt(chip.getAttribute('data-stage'), 10);
          if (stage) {
            this.audio.playPop();
            this.switchStage(stage);
          }
        });
      });

      // Stage 1 Slides
      if (this.btnSlidePrev) {
        this.btnSlidePrev.addEventListener('click', () => {
          this.audio.playPop();
          this.prevSlide();
        });
      }
      if (this.btnSlideNext) {
        this.btnSlideNext.addEventListener('click', () => {
          this.audio.playPop();
          this.nextSlide();
        });
      }

      // Stage 2 Icons
      if (this.iconTouchTarget) {
        this.iconTouchTarget.addEventListener('click', () => this.handleIconTouch());
      }
      if (this.btnIconPrev) {
        this.btnIconPrev.addEventListener('click', () => {
          this.audio.playPop();
          this.prevIcon();
        });
      }
      if (this.btnIconNext) {
        this.btnIconNext.addEventListener('click', () => {
          this.audio.playPop();
          this.nextIcon();
        });
      }

      // Stage 3 Practice
      if (this.btnP1Next) {
        this.btnP1Next.addEventListener('click', () => {
          this.audio.playPop();
          this.nextP1();
        });
      }

      // Stage 4 Sam's Problems
      if (this.btnS4Next) {
        this.btnS4Next.addEventListener('click', () => {
          this.audio.playPop();
          this.nextS4();
        });
      }

      // Stage 5 Level Up
      if (this.btnS5Next) {
        this.btnS5Next.addEventListener('click', () => {
          this.audio.playPop();
          this.nextS5();
        });
      }

      // Stage 6 Mini Challenges
      if (this.btnS6Next) {
        this.btnS6Next.addEventListener('click', () => {
          this.audio.playPop();
          this.nextS6();
        });
      }

      // Stage 7 Board Game
      if (this.btnRoll) {
        this.btnRoll.addEventListener('click', () => this.rollDice());
      }
      if (this.btnModalContinue) {
        this.btnModalContinue.addEventListener('click', () => this.closeChallengeModal());
      }
      if (this.btnReplay) {
        this.btnReplay.addEventListener('click', () => {
          this.audio.playPop();
          this.winnerModal.classList.add('hidden');
          this.startStage7();
        });
      }
    }

    start() {
      this.switchStage(1);
    }

    switchStage(stageNum) {
      this.currentStage = stageNum;
      
      // Update nav chips
      this.navChips.forEach(chip => {
        const s = parseInt(chip.getAttribute('data-stage'), 10);
        if (s === stageNum) chip.classList.add('active');
        else chip.classList.remove('active');
      });

      // Update substages
      Object.keys(this.substages).forEach(key => {
        if (parseInt(key, 10) === stageNum) {
          if (this.substages[key]) this.substages[key].classList.add('active');
        } else {
          if (this.substages[key]) this.substages[key].classList.remove('active');
        }
      });

      // Init stage
      if (stageNum === 1) this.startStage1();
      else if (stageNum === 2) this.startStage2();
      else if (stageNum === 3) this.startStage3();
      else if (stageNum === 4) this.startStage4();
      else if (stageNum === 5) this.startStage5();
      else if (stageNum === 6) this.startStage6();
      else if (stageNum === 7) this.startStage7();
    }

    // STAGE 1: Visual Presentation
    startStage1() {
      this.currentSlideIndex = 0;
      this.renderSlide();
    }

    renderSlide() {
      const slide = SAM_STORY_SLIDES[this.currentSlideIndex];
      if (!slide) return;

      if (this.slideBadge) this.slideBadge.textContent = `SLIDE ${slide.slideNum} OF ${SAM_STORY_SLIDES.length}`;
      if (this.storyVisual) this.storyVisual.textContent = slide.visual;
      if (this.storyCaption) this.storyCaption.textContent = slide.caption;
      if (this.storySub) this.storySub.textContent = slide.sub;

      if (this.btnSlidePrev) this.btnSlidePrev.disabled = this.currentSlideIndex === 0;
      if (this.btnSlideNext) {
        if (this.currentSlideIndex === SAM_STORY_SLIDES.length - 1) {
          this.btnSlideNext.innerHTML = '<span>LEARN ICONS ➡️</span>';
        } else {
          this.btnSlideNext.innerHTML = '<span>NEXT ▶️</span>';
        }
      }
    }

    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.renderSlide();
      }
    }

    nextSlide() {
      if (this.currentSlideIndex < SAM_STORY_SLIDES.length - 1) {
        this.currentSlideIndex++;
        this.renderSlide();
      } else {
        this.switchStage(2);
      }
    }

    // STAGE 2: Tech Icon Explorer
    startStage2() {
      this.currentIconIndex = 0;
      this.renderIcon();
    }

    renderIcon() {
      const item = SAM_TECH_ICONS[this.currentIconIndex];
      if (!item) return;

      if (this.iconCounter) this.iconCounter.textContent = `ICON ${this.currentIconIndex + 1} OF ${SAM_TECH_ICONS.length}`;
      if (this.explorerIcon) this.explorerIcon.textContent = item.icon;
      if (this.explorerName) this.explorerName.textContent = item.name;

      if (this.iconFeedback) this.iconFeedback.classList.add('hidden');
      if (this.iconTouchTarget) this.iconTouchTarget.classList.remove('touched');

      if (this.btnIconPrev) this.btnIconPrev.disabled = this.currentIconIndex === 0;
      if (this.btnIconNext) {
        if (this.currentIconIndex === SAM_TECH_ICONS.length - 1) {
          this.btnIconNext.innerHTML = '<span>PRACTICE ➡️</span>';
        } else {
          this.btnIconNext.innerHTML = '<span>NEXT ICON ▶️</span>';
        }
      }
    }

    handleIconTouch() {
      const item = SAM_TECH_ICONS[this.currentIconIndex];
      if (!item) return;

      if (this.iconTouchTarget) this.iconTouchTarget.classList.add('touched');
      if (this.iconFeedback) this.iconFeedback.classList.remove('hidden');

      this.audio.playSuccess();
      this.audio.speak(item.name);
    }

    prevIcon() {
      if (this.currentIconIndex > 0) {
        this.currentIconIndex--;
        this.renderIcon();
      }
    }

    nextIcon() {
      if (this.currentIconIndex < SAM_TECH_ICONS.length - 1) {
        this.currentIconIndex++;
        this.renderIcon();
      } else {
        this.switchStage(3);
      }
    }

    // STAGE 3: Easy Practice
    startStage3() {
      this.p1Index = 0;
      this.p1Score = 0;
      if (this.p1ScoreEl) this.p1ScoreEl.textContent = '0';
      this.renderP1();
    }

    renderP1() {
      const q = SAM_PRACTICE_QUESTIONS[this.p1Index];
      if (!q) return;

      if (this.p1Counter) this.p1Counter.textContent = `QUESTION ${this.p1Index + 1} OF ${SAM_PRACTICE_QUESTIONS.length}`;
      if (this.p1PromptVisual) this.p1PromptVisual.textContent = q.promptVisual;
      if (this.p1PromptText) this.p1PromptText.textContent = q.promptText;

      if (this.p1Feedback) this.p1Feedback.classList.add('hidden');
      if (this.btnP1Next) this.btnP1Next.classList.add('hidden');

      if (this.p1ChoicesGrid) {
        this.p1ChoicesGrid.innerHTML = '';
        q.choices.forEach(ch => {
          const card = document.createElement('button');
          card.className = 'sam-choice-card';
          card.innerHTML = `<span class="sam-choice-emoji">${ch.emoji}</span><span class="sam-choice-label">${ch.label}</span>`;
          card.addEventListener('click', () => this.handleQuizChoice(ch, card, 3));
          this.p1ChoicesGrid.appendChild(card);
        });
      }
    }

    nextP1() {
      if (this.p1Index < SAM_PRACTICE_QUESTIONS.length - 1) {
        this.p1Index++;
        this.renderP1();
      } else {
        this.switchStage(4);
      }
    }

    // STAGE 4: Sam's Problems
    startStage4() {
      this.s4Index = 0;
      this.s4Score = 0;
      if (this.s4ScoreEl) this.s4ScoreEl.textContent = '0';
      this.renderS4();
    }

    renderS4() {
      const q = SAM_STORY_STEPS[this.s4Index];
      if (!q) return;

      if (this.s4StepBadge) this.s4StepBadge.textContent = `STORY STEP ${q.step} OF ${SAM_STORY_STEPS.length}`;
      if (this.s4PromptVisual) this.s4PromptVisual.textContent = q.promptVisual;
      if (this.s4PromptText) this.s4PromptText.textContent = q.promptText;
      if (this.s4PromptSub) this.s4PromptSub.textContent = q.subText;

      if (this.s4Feedback) this.s4Feedback.classList.add('hidden');
      if (this.btnS4Next) this.btnS4Next.classList.add('hidden');

      if (this.s4ChoicesGrid) {
        this.s4ChoicesGrid.innerHTML = '';
        q.choices.forEach(ch => {
          const card = document.createElement('button');
          card.className = 'sam-choice-card';
          card.innerHTML = `<span class="sam-choice-emoji">${ch.emoji}</span><span class="sam-choice-label">${ch.label}</span>`;
          card.addEventListener('click', () => this.handleQuizChoice(ch, card, 4));
          this.s4ChoicesGrid.appendChild(card);
        });
      }
    }

    nextS4() {
      if (this.s4Index < SAM_STORY_STEPS.length - 1) {
        this.s4Index++;
        this.renderS4();
      } else {
        this.switchStage(5);
      }
    }

    // STAGE 5: Level Up
    startStage5() {
      this.s5Index = 0;
      this.s5Score = 0;
      if (this.s5ScoreEl) this.s5ScoreEl.textContent = '0';
      this.renderS5();
    }

    renderS5() {
      const q = SAM_LEVELUP_CHALLENGES[this.s5Index];
      if (!q) return;

      if (this.s5LevelBadge) this.s5LevelBadge.textContent = q.levelBadge;
      if (this.s5PromptVisual) this.s5PromptVisual.textContent = q.promptVisual;
      if (this.s5PromptText) this.s5PromptText.textContent = q.promptText;
      if (this.s5PromptSub) this.s5PromptSub.textContent = q.subText;

      if (this.s5Feedback) this.s5Feedback.classList.add('hidden');
      if (this.btnS5Next) this.btnS5Next.classList.add('hidden');

      if (this.s5ChoicesGrid) {
        this.s5ChoicesGrid.innerHTML = '';
        q.choices.forEach(ch => {
          const card = document.createElement('button');
          card.className = 'sam-choice-card';
          card.innerHTML = `<span class="sam-choice-emoji">${ch.emoji}</span>${ch.label ? `<span class="sam-choice-label">${ch.label}</span>` : ''}`;
          card.addEventListener('click', () => this.handleQuizChoice(ch, card, 5));
          this.s5ChoicesGrid.appendChild(card);
        });
      }
    }

    nextS5() {
      if (this.s5Index < SAM_LEVELUP_CHALLENGES.length - 1) {
        this.s5Index++;
        this.renderS5();
      } else {
        this.switchStage(6);
      }
    }

    // STAGE 6: Mini Challenges
    startStage6() {
      this.s6Index = 0;
      this.s6Score = 0;
      if (this.s6ScoreEl) this.s6ScoreEl.textContent = '0';
      this.renderS6();
    }

    renderS6() {
      const q = SAM_MINI_CHALLENGES[this.s6Index];
      if (!q) return;

      if (this.s6Counter) this.s6Counter.textContent = `FIX-IT ${this.s6Index + 1} OF ${SAM_MINI_CHALLENGES.length}`;
      if (this.s6PromptVisual) this.s6PromptVisual.textContent = q.promptVisual;
      if (this.s6PromptText) this.s6PromptText.textContent = q.promptText;
      if (this.s6PromptSub) this.s6PromptSub.textContent = q.subText;

      if (this.s6Feedback) this.s6Feedback.classList.add('hidden');
      if (this.btnS6Next) this.btnS6Next.classList.add('hidden');

      if (this.s6ChoicesGrid) {
        this.s6ChoicesGrid.innerHTML = '';
        q.choices.forEach(ch => {
          const card = document.createElement('button');
          card.className = 'sam-choice-card';
          card.innerHTML = `<span class="sam-choice-emoji">${ch.emoji}</span><span class="sam-choice-label">${ch.label}</span>`;
          card.addEventListener('click', () => this.handleQuizChoice(ch, card, 6));
          this.s6ChoicesGrid.appendChild(card);
        });
      }
    }

    nextS6() {
      if (this.s6Index < SAM_MINI_CHALLENGES.length - 1) {
        this.s6Index++;
        this.renderS6();
      } else {
        this.switchStage(7);
      }
    }

    // Generic Quiz Selection Handler for Stages 3, 4, 5, 6
    handleQuizChoice(choice, cardElement, stageNum) {
      const feedbackEl = stageNum === 3 ? this.p1Feedback :
                         stageNum === 4 ? this.s4Feedback :
                         stageNum === 5 ? this.s5Feedback : this.s6Feedback;

      const nextBtn = stageNum === 3 ? this.btnP1Next :
                      stageNum === 4 ? this.btnS4Next :
                      stageNum === 5 ? this.btnS5Next : this.btnS6Next;

      const scoreEl = stageNum === 3 ? this.p1ScoreEl :
                      stageNum === 4 ? this.s4ScoreEl :
                      stageNum === 5 ? this.s5ScoreEl : this.s6ScoreEl;

      const grid = stageNum === 3 ? this.p1ChoicesGrid :
                   stageNum === 4 ? this.s4ChoicesGrid :
                   stageNum === 5 ? this.s5ChoicesGrid : this.s6ChoicesGrid;

      if (choice.correct) {
        cardElement.classList.add('is-correct');
        if (feedbackEl) {
          feedbackEl.className = 'sam-quiz-feedback';
          feedbackEl.innerHTML = '<span class="feedback-icon">🎉</span><span class="feedback-text">GREAT JOB!</span>';
          feedbackEl.classList.remove('hidden');
        }

        // Lock other cards
        if (grid) {
          grid.querySelectorAll('.sam-choice-card').forEach(c => {
            if (c !== cardElement) c.style.pointerEvents = 'none';
          });
        }

        // Update score
        if (stageNum === 3) this.p1Score++;
        else if (stageNum === 4) this.s4Score++;
        else if (stageNum === 5) this.s5Score++;
        else if (stageNum === 6) this.s6Score++;

        if (scoreEl) {
          const s = stageNum === 3 ? this.p1Score : stageNum === 4 ? this.s4Score : stageNum === 5 ? this.s5Score : this.s6Score;
          scoreEl.textContent = s;
        }

        if (nextBtn) nextBtn.classList.remove('hidden');
        this.audio.playSuccess();
      } else {
        cardElement.classList.add('is-wrong');
        if (feedbackEl) {
          feedbackEl.className = 'sam-quiz-feedback is-wrong';
          feedbackEl.innerHTML = '<span class="feedback-icon">❌</span><span class="feedback-text">TRY AGAIN!</span>';
          feedbackEl.classList.remove('hidden');
        }
        this.audio.playWrong();
        setTimeout(() => {
          cardElement.classList.remove('is-wrong');
        }, 600);
      }
    }

    // STAGE 7: Board Game
    startStage7() {
      this.blueScore = 0;
      this.redScore = 0;
      this.bluePos = 0;
      this.redPos = 0;
      this.currentTurn = 'blue';
      this.isRolling = false;

      this.updateBoardScoreUI();
      this.renderBoardTrack();
    }

    renderBoardTrack() {
      if (!this.trackGrid) return;
      this.trackGrid.innerHTML = '';

      SAM_BOARD_SPACES.forEach((sp, idx) => {
        const spaceEl = document.createElement('div');
        spaceEl.className = `sam-board-space space-${sp.type} ${idx === 0 ? 'space-start' : idx === SAM_BOARD_SPACES.length - 1 ? 'space-finish' : ''}`;
        spaceEl.id = `sam-space-${idx}`;
        spaceEl.innerHTML = `
          <span class="space-num">${idx === 0 ? '🚩' : idx === SAM_BOARD_SPACES.length - 1 ? '🏁' : idx}</span>
          <span class="space-icon">${sp.icon}</span>
          <span class="space-label">${sp.label}</span>
        `;
        this.trackGrid.appendChild(spaceEl);
      });

      this.updateTokenPins();
    }

    updateTokenPins() {
      // Remove existing pins
      document.querySelectorAll('.sam-token-pin').forEach(pin => pin.remove());

      const blueSpace = document.getElementById(`sam-space-${this.bluePos}`);
      if (blueSpace) {
        const bluePin = document.createElement('div');
        bluePin.className = 'sam-token-pin token-blue';
        bluePin.textContent = '🔵';
        blueSpace.appendChild(bluePin);
      }

      const redSpace = document.getElementById(`sam-space-${this.redPos}`);
      if (redSpace) {
        const redPin = document.createElement('div');
        redPin.className = 'sam-token-pin token-red';
        redPin.textContent = '🔴';
        redSpace.appendChild(redPin);
      }

      if (this.bluePosTag) this.bluePosTag.textContent = `Space ${this.bluePos} (${SAM_BOARD_SPACES[this.bluePos].label})`;
      if (this.redPosTag) this.redPosTag.textContent = `Space ${this.redPos} (${SAM_BOARD_SPACES[this.redPos].label})`;
    }

    updateBoardScoreUI() {
      if (this.blueScoreEl) this.blueScoreEl.textContent = this.blueScore;
      if (this.redScoreEl) this.redScoreEl.textContent = this.redScore;

      if (this.currentTurn === 'blue') {
        if (this.teamBoxBlue) this.teamBoxBlue.classList.add('active-turn');
        if (this.teamBoxRed) this.teamBoxRed.classList.remove('active-turn');
        if (this.turnLabel) this.turnLabel.textContent = "🔵 BLUE TEAM'S TURN";
      } else {
        if (this.teamBoxRed) this.teamBoxRed.classList.add('active-turn');
        if (this.teamBoxBlue) this.teamBoxBlue.classList.remove('active-turn');
        if (this.turnLabel) this.turnLabel.textContent = "🔴 RED TEAM'S TURN";
      }
    }

    rollDice() {
      if (this.isRolling) return;
      this.isRolling = true;
      if (this.btnRoll) this.btnRoll.disabled = true;

      this.audio.playDiceRoll();

      // Dice roll animation
      const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      let rolls = 0;
      const rollInterval = setInterval(() => {
        rolls++;
        const rand = Math.floor(Math.random() * 6);
        if (this.diceDisplay) this.diceDisplay.textContent = diceFaces[rand];
        if (rolls > 8) {
          clearInterval(rollInterval);
          const finalRoll = Math.floor(Math.random() * 3) + 1;
          if (this.diceDisplay) this.diceDisplay.textContent = `🎲 ${finalRoll}`;
          this.movePlayer(finalRoll);
        }
      }, 70);
    }

    movePlayer(steps) {
      const currentPos = this.currentTurn === 'blue' ? this.bluePos : this.redPos;
      const targetPos = Math.min(SAM_BOARD_SPACES.length - 1, currentPos + steps);

      let stepCount = currentPos;
      const moveInterval = setInterval(() => {
        if (stepCount < targetPos) {
          stepCount++;
          if (this.currentTurn === 'blue') this.bluePos = stepCount;
          else this.redPos = stepCount;
          this.audio.playHop();
          this.updateTokenPins();
        } else {
          clearInterval(moveInterval);
          this.handleSpaceLanding(targetPos);
        }
      }, 250);
    }

    handleSpaceLanding(spaceIdx) {
      const space = SAM_BOARD_SPACES[spaceIdx];
      if (!space) {
        this.endTurn();
        return;
      }

      if (space.type === 'finish' || spaceIdx >= SAM_BOARD_SPACES.length - 1) {
        this.showWinner();
        return;
      }

      if (space.type === 'bonus') {
        if (this.currentTurn === 'blue') this.blueScore += 2;
        else this.redScore += 2;
        this.audio.playSuccess();
        this.openSimpleModal('🎁 LUCKY BONUS!', '🎁 ⭐ ⭐', '+2 STARS AWARDED!');
        return;
      }

      if (space.type === 'star') {
        if (this.currentTurn === 'blue') this.blueScore += 1;
        else this.redScore += 1;
        this.audio.playSuccess();
        this.openSimpleModal('⭐ STAR BOOST!', '⭐ 🤩', '+1 STAR AWARDED!');
        return;
      }

      if (space.type === 'roll_again') {
        this.audio.playSuccess();
        this.openSimpleModal('🔄 TECH BOOST!', '🔄 🚀 🎲', 'ROLL THE DICE AGAIN!', true);
        return;
      }

      if (space.type === 'challenge') {
        this.openChallengeModal(space);
      } else {
        this.endTurn();
      }
    }

    openSimpleModal(title, visual, question, rollAgain = false) {
      if (this.boardModal) this.boardModal.classList.remove('hidden');
      if (this.modalSpaceTitle) this.modalSpaceTitle.textContent = title;
      if (this.modalVisual) this.modalVisual.textContent = visual;
      if (this.modalQuestion) this.modalQuestion.textContent = question;
      if (this.modalChoices) this.modalChoices.innerHTML = '';
      if (this.modalFeedback) this.modalFeedback.classList.add('hidden');
      if (this.btnModalContinue) {
        this.btnModalContinue.classList.remove('hidden');
        this.btnModalContinue.setAttribute('data-roll-again', rollAgain ? 'true' : 'false');
      }
    }

    openChallengeModal(space) {
      if (this.boardModal) this.boardModal.classList.remove('hidden');
      if (this.modalSpaceTitle) this.modalSpaceTitle.textContent = `${space.icon} SPACE ${space.id}: ${space.label}`;
      if (this.modalVisual) this.modalVisual.textContent = space.visual;
      if (this.modalQuestion) this.modalQuestion.textContent = space.question;
      if (this.modalFeedback) this.modalFeedback.classList.add('hidden');
      if (this.btnModalContinue) {
        this.btnModalContinue.classList.add('hidden');
        this.btnModalContinue.setAttribute('data-roll-again', 'false');
      }

      if (this.modalChoices) {
        this.modalChoices.innerHTML = '';
        space.choices.forEach(ch => {
          const btn = document.createElement('button');
          btn.className = 'sam-choice-card';
          btn.innerHTML = `<span class="sam-choice-emoji">${ch.emoji}</span><span class="sam-choice-label">${ch.label}</span>`;
          btn.addEventListener('click', () => {
            if (ch.correct) {
              btn.classList.add('is-correct');
              if (this.modalFeedback) {
                this.modalFeedback.className = 'sam-quiz-feedback';
                this.modalFeedback.innerHTML = '<span>✅ GREAT JOB! ⭐ +1 POINT</span>';
                this.modalFeedback.classList.remove('hidden');
              }
              if (this.currentTurn === 'blue') this.blueScore++;
              else this.redScore++;
              this.audio.playSuccess();
              this.updateBoardScoreUI();
              if (this.btnModalContinue) this.btnModalContinue.classList.remove('hidden');
            } else {
              btn.classList.add('is-wrong');
              if (this.modalFeedback) {
                this.modalFeedback.className = 'sam-quiz-feedback is-wrong';
                this.modalFeedback.innerHTML = '<span>❌ TRY AGAIN!</span>';
                this.modalFeedback.classList.remove('hidden');
              }
              this.audio.playWrong();
              setTimeout(() => btn.classList.remove('is-wrong'), 600);
            }
          });
          this.modalChoices.appendChild(btn);
        });
      }
    }

    closeChallengeModal() {
      const rollAgain = this.btnModalContinue && this.btnModalContinue.getAttribute('data-roll-again') === 'true';
      if (this.boardModal) this.boardModal.classList.add('hidden');
      this.updateBoardScoreUI();

      if (!rollAgain) {
        this.endTurn();
      } else {
        this.isRolling = false;
        if (this.btnRoll) this.btnRoll.disabled = false;
      }
    }

    endTurn() {
      this.currentTurn = this.currentTurn === 'blue' ? 'red' : 'blue';
      this.isRolling = false;
      if (this.btnRoll) this.btnRoll.disabled = false;
      this.updateBoardScoreUI();
    }

    showWinner() {
      this.audio.playFanfare();
      if (this.confetti) this.confetti.start(4000);

      const winningTeam = this.blueScore > this.redScore ? '🔵 BLUE TEAM' :
                          this.redScore > this.blueScore ? '🔴 RED TEAM' : '🔵 BOTH TEAMS 🔴';

      if (this.winnerTitle) this.winnerTitle.textContent = `${winningTeam} WINS!`;
      if (this.winnerScores) this.winnerScores.textContent = `🔵 Blue: ${this.blueScore} ⭐  |  🔴 Red: ${this.redScore} ⭐`;
      if (this.winnerModal) this.winnerModal.classList.remove('hidden');
    }
  }

  window.SAM_STORY_SLIDES = SAM_STORY_SLIDES;
  window.SAM_TECH_ICONS = SAM_TECH_ICONS;
  window.SAM_PRACTICE_QUESTIONS = SAM_PRACTICE_QUESTIONS;
  window.SAM_STORY_STEPS = SAM_STORY_STEPS;
  window.SAM_LEVELUP_CHALLENGES = SAM_LEVELUP_CHALLENGES;
  window.SAM_MINI_CHALLENGES = SAM_MINI_CHALLENGES;
  window.SAM_BOARD_SPACES = SAM_BOARD_SPACES;
  window.HelpSamEngine = HelpSamEngine;

  // =========================================================================
  // 4. MAIN GAME STATE CONTROLLER (EMOJI EXPERTS & NAVIGATION)
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
      this.monopolyEngine = new EmojiMonopolyEngine(this);
      this.charadesEngine = new EmojiCharadesEngine(this);
      this.samEngine = new HelpSamEngine(this);
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
        profile: document.getElementById('screen-profile'),
        monopoly: document.getElementById('screen-monopoly'),
        charades: document.getElementById('screen-charades'),
        sam: document.getElementById('screen-sam')
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
      this.btnStartMonopoly = document.getElementById('btn-start-monopoly');
      this.btnStartCharades = document.getElementById('btn-start-charades');
      this.btnStartSam = document.getElementById('btn-start-sam');
      this.btnToggleGameMode = document.getElementById('btn-toggle-game-mode');

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

      if (this.btnStartMonopoly) {
        this.btnStartMonopoly.addEventListener('click', () => {
          this.audio.playPop();
          this.switchScreen('monopoly');
          this.monopolyEngine.showModeSelect();
        });
      }

      if (this.btnStartCharades) {
        this.btnStartCharades.addEventListener('click', () => {
          this.audio.playPop();
          this.switchScreen('charades');
          this.charadesEngine.start();
        });
      }

      if (this.btnStartSam) {
        this.btnStartSam.addEventListener('click', () => {
          this.audio.playPop();
          this.switchScreen('sam');
          this.samEngine.start();
        });
      }

      if (this.btnToggleGameMode) {
        this.btnToggleGameMode.addEventListener('click', () => {
          this.audio.playPop();
          if (this.currentScreen === 'monopoly') {
            this.switchScreen('start');
          } else {
            this.switchScreen('monopoly');
            this.monopolyEngine.showModeSelect();
          }
        });
      }

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
        } else if (this.currentScreen === 'monopoly') {
          if (e.key === '1' || e.key === 'a' || e.key === 'A') this.monopolyEngine.choiceButtons[0]?.click();
          if (e.key === '2' || e.key === 'b' || e.key === 'B') this.monopolyEngine.choiceButtons[1]?.click();
          if (e.key === '3' || e.key === 'c' || e.key === 'C') this.monopolyEngine.choiceButtons[2]?.click();
          if (e.key === ' ' || e.key === 'Enter') {
            if (!this.monopolyEngine.btnRollDice.disabled && !this.monopolyEngine.stageDice.classList.contains('hidden')) {
              this.monopolyEngine.btnRollDice.click();
            }
          }
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
