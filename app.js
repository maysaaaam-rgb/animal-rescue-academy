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

  // =========================================================================
  // 4. STRUCTURED PREDEFINED QUESTION BANK FOR EMOJI MONOPOLY (67 QUESTIONS)
  // Strict Schema: id, category, categoryName, categoryIcon, visualType, visual,
  // question, options (exactly 3, exactly 1 correct), difficulty, time, spokenWord.
  // NO BROKEN QUESTIONS, NO MISSING VISUALS, NO "❓" FALLBACKS.
  // =========================================================================
  const MONOPOLY_QUESTION_BANK = [
    // --- CATEGORY: ACTIVITIES (19 Questions) ---
    {
      id: 101,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🎮',
      question: 'What is this?',
      options: [
        { text: 'PLAY GAMES', correct: true },
        { text: 'READ BOOKS', correct: false },
        { text: 'SWIM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'play games'
    },
    {
      id: 102,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🎧',
      question: 'What is this?',
      options: [
        { text: 'LISTEN TO MUSIC', correct: true },
        { text: 'WATCH VIDEOS', correct: false },
        { text: 'SING', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'listen to music'
    },
    {
      id: 103,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '📱',
      question: 'What is this?',
      options: [
        { text: 'WATCH VIDEOS', correct: true },
        { text: 'PLAY GAMES', correct: false },
        { text: 'TAKE PHOTOS', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'watch videos'
    },
    {
      id: 104,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '📷',
      question: 'What is this?',
      options: [
        { text: 'TAKE PHOTOS', correct: true },
        { text: 'DRAW', correct: false },
        { text: 'DANCE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'take photos'
    },
    {
      id: 105,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🎨',
      question: 'What is this?',
      options: [
        { text: 'DRAW', correct: true },
        { text: 'DANCE', correct: false },
        { text: 'BUILD THINGS', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'draw'
    },
    {
      id: 106,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '⚽',
      question: 'What is this?',
      options: [
        { text: 'PLAY FOOTBALL', correct: true },
        { text: 'PLAY BASKETBALL', correct: false },
        { text: 'SKATEBOARD', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'play football'
    },
    {
      id: 107,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🏀',
      question: 'What is this?',
      options: [
        { text: 'PLAY BASKETBALL', correct: true },
        { text: 'PLAY FOOTBALL', correct: false },
        { text: 'SWIM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'play basketball'
    },
    {
      id: 108,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🛹',
      question: 'What is this?',
      options: [
        { text: 'SKATEBOARD', correct: true },
        { text: 'RIDE A BIKE', correct: false },
        { text: 'CAMP', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'skateboard'
    },
    {
      id: 109,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🚲',
      question: 'What is this?',
      options: [
        { text: 'RIDE A BIKE', correct: true },
        { text: 'SKATEBOARD', correct: false },
        { text: 'SWIM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'ride a bike'
    },
    {
      id: 110,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '📖',
      question: 'What is this?',
      options: [
        { text: 'READ BOOKS', correct: true },
        { text: 'PLAY GAMES', correct: false },
        { text: 'DRAW', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'read books'
    },
    {
      id: 111,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '💃',
      question: 'What is this?',
      options: [
        { text: 'DANCE', correct: true },
        { text: 'SING', correct: false },
        { text: 'SWIM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'dance'
    },
    {
      id: 112,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🏊',
      question: 'What is this?',
      options: [
        { text: 'SWIM', correct: true },
        { text: 'CAMP', correct: false },
        { text: 'DANCE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'swim'
    },
    {
      id: 113,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🧱',
      question: 'What is this?',
      options: [
        { text: 'BUILD THINGS', correct: true },
        { text: 'DO PUZZLES', correct: false },
        { text: 'DRAW', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'build things'
    },
    {
      id: 114,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🧩',
      question: 'What is this?',
      options: [
        { text: 'DO PUZZLES', correct: true },
        { text: 'BUILD THINGS', correct: false },
        { text: 'READ BOOKS', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'do puzzles'
    },
    {
      id: 115,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🎤',
      question: 'What is this?',
      options: [
        { text: 'SING', correct: true },
        { text: 'LISTEN TO MUSIC', correct: false },
        { text: 'DANCE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'sing'
    },
    {
      id: 116,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🏕️',
      question: 'What is this?',
      options: [
        { text: 'CAMP', correct: true },
        { text: 'SWIM', correct: false },
        { text: 'FLY A DRONE', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'camp'
    },
    {
      id: 117,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🚁',
      question: 'What is this?',
      options: [
        { text: 'FLY A DRONE', correct: true },
        { text: 'EXPLORE SPACE', correct: false },
        { text: 'RIDE A BIKE', correct: false }
      ],
      difficulty: 'hard',
      time: 10,
      spokenWord: 'fly a drone'
    },
    {
      id: 118,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '🪐',
      question: 'What is this?',
      options: [
        { text: 'EXPLORE SPACE', correct: true },
        { text: 'DAYDREAM', correct: false },
        { text: 'CAMP', correct: false }
      ],
      difficulty: 'hard',
      time: 10,
      spokenWord: 'explore space'
    },
    {
      id: 119,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'emoji',
      visual: '☁️',
      question: 'What is this?',
      options: [
        { text: 'DAYDREAM', correct: true },
        { text: 'SLEEP', correct: false },
        { text: 'DO PUZZLES', correct: false }
      ],
      difficulty: 'hard',
      time: 10,
      spokenWord: 'daydream'
    },

    // --- CATEGORY: FOOD (20 Questions) ---
    {
      id: 201,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍎',
      question: 'What is this?',
      options: [
        { text: 'APPLE', correct: true },
        { text: 'BANANA', correct: false },
        { text: 'STRAWBERRY', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'apple'
    },
    {
      id: 202,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍌',
      question: 'What is this?',
      options: [
        { text: 'BANANA', correct: true },
        { text: 'APPLE', correct: false },
        { text: 'ICE CREAM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'banana'
    },
    {
      id: 203,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍓',
      question: 'What is this?',
      options: [
        { text: 'STRAWBERRY', correct: true },
        { text: 'BLUEBERRIES', correct: false },
        { text: 'WATERMELON', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'strawberry'
    },
    {
      id: 204,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🫐',
      question: 'What is this?',
      options: [
        { text: 'BLUEBERRIES', correct: true },
        { text: 'STRAWBERRY', correct: false },
        { text: 'TOMATOES', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'blueberries'
    },
    {
      id: 205,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍉',
      question: 'What is this?',
      options: [
        { text: 'WATERMELON', correct: true },
        { text: 'APPLE', correct: false },
        { text: 'CARROT', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'watermelon'
    },
    {
      id: 206,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥕',
      question: 'What is this?',
      options: [
        { text: 'CARROT', correct: true },
        { text: 'CUCUMBER', correct: false },
        { text: 'BROCCOLI', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'carrot'
    },
    {
      id: 207,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥦',
      question: 'What is this?',
      options: [
        { text: 'BROCCOLI', correct: true },
        { text: 'AVOCADO', correct: false },
        { text: 'PIZZA', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'broccoli'
    },
    {
      id: 208,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥒',
      question: 'What is this?',
      options: [
        { text: 'CUCUMBER', correct: true },
        { text: 'CARROT', correct: false },
        { text: 'SALAD', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'cucumber'
    },
    {
      id: 209,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍅',
      question: 'What is this?',
      options: [
        { text: 'TOMATOES', correct: true },
        { text: 'APPLE', correct: false },
        { text: 'SOUP', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'tomatoes'
    },
    {
      id: 210,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥑',
      question: 'What is this?',
      options: [
        { text: 'AVOCADO', correct: true },
        { text: 'APPLE', correct: false },
        { text: 'KIWI', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'avocado'
    },
    {
      id: 211,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥗',
      question: 'What is this?',
      options: [
        { text: 'SALAD', correct: true },
        { text: 'SANDWICH', correct: false },
        { text: 'SOUP', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'salad'
    },
    {
      id: 212,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥛',
      question: 'What is this?',
      options: [
        { text: 'YOGURT', correct: true },
        { text: 'OATMEAL', correct: false },
        { text: 'ICE CREAM', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'yogurt'
    },
    {
      id: 213,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥣',
      question: 'What is this?',
      options: [
        { text: 'OATMEAL', correct: true },
        { text: 'SOUP', correct: false },
        { text: 'YOGURT', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'oatmeal'
    },
    {
      id: 214,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥪',
      question: 'What is this?',
      options: [
        { text: 'SANDWICH', correct: true },
        { text: 'PIZZA', correct: false },
        { text: 'GRILLED CHICKEN', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'sandwich'
    },
    {
      id: 215,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍗',
      question: 'What is this?',
      options: [
        { text: 'GRILLED CHICKEN', correct: true },
        { text: 'SALMON', correct: false },
        { text: 'SANDWICH', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'grilled chicken'
    },
    {
      id: 216,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍲',
      question: 'What is this?',
      options: [
        { text: 'SOUP', correct: true },
        { text: 'SALAD', correct: false },
        { text: 'OATMEAL', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'soup'
    },
    {
      id: 217,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🐟',
      question: 'What is this?',
      options: [
        { text: 'SALMON', correct: true },
        { text: 'GRILLED CHICKEN', correct: false },
        { text: 'NUTS', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'salmon'
    },
    {
      id: 218,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🥜',
      question: 'What is this?',
      options: [
        { text: 'NUTS', correct: true },
        { text: 'BROCCOLI', correct: false },
        { text: 'BLUEBERRIES', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'nuts'
    },
    {
      id: 219,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍕',
      question: 'What is this?',
      options: [
        { text: 'PIZZA', correct: true },
        { text: 'SANDWICH', correct: false },
        { text: 'ICE CREAM', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'pizza'
    },
    {
      id: 220,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'emoji',
      visual: '🍦',
      question: 'What is this?',
      options: [
        { text: 'ICE CREAM', correct: true },
        { text: 'YOGURT', correct: false },
        { text: 'BANANA', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'ice cream'
    },

    // --- CATEGORY: COLORS (12 Questions) ---
    {
      id: 301,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🔴',
      question: 'What color is this?',
      options: [
        { text: 'RED', correct: true },
        { text: 'BLUE', correct: false },
        { text: 'GREEN', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'red'
    },
    {
      id: 302,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🟠',
      question: 'What color is this?',
      options: [
        { text: 'ORANGE', correct: true },
        { text: 'YELLOW', correct: false },
        { text: 'RED', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'orange'
    },
    {
      id: 303,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🟡',
      question: 'What color is this?',
      options: [
        { text: 'YELLOW', correct: true },
        { text: 'ORANGE', correct: false },
        { text: 'GREEN', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'yellow'
    },
    {
      id: 304,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🟢',
      question: 'What color is this?',
      options: [
        { text: 'GREEN', correct: true },
        { text: 'BLUE', correct: false },
        { text: 'YELLOW', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'green'
    },
    {
      id: 305,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🔵',
      question: 'What color is this?',
      options: [
        { text: 'BLUE', correct: true },
        { text: 'RED', correct: false },
        { text: 'PURPLE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'blue'
    },
    {
      id: 306,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🟣',
      question: 'What color is this?',
      options: [
        { text: 'PURPLE', correct: true },
        { text: 'BLUE', correct: false },
        { text: 'PINK', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'purple'
    },
    {
      id: 307,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🩷',
      question: 'What color is this?',
      options: [
        { text: 'PINK', correct: true },
        { text: 'RED', correct: false },
        { text: 'PURPLE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'pink'
    },
    {
      id: 308,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🟤',
      question: 'What color is this?',
      options: [
        { text: 'BROWN', correct: true },
        { text: 'BLACK', correct: false },
        { text: 'GRAY', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'brown'
    },
    {
      id: 309,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '⚫',
      question: 'What color is this?',
      options: [
        { text: 'BLACK', correct: true },
        { text: 'WHITE', correct: false },
        { text: 'GRAY', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'black'
    },
    {
      id: 310,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '⚪',
      question: 'What color is this?',
      options: [
        { text: 'WHITE', correct: true },
        { text: 'BLACK', correct: false },
        { text: 'GRAY', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'white'
    },
    {
      id: 311,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🩶',
      question: 'What color is this?',
      options: [
        { text: 'GRAY', correct: true },
        { text: 'BLACK', correct: false },
        { text: 'WHITE', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'gray'
    },
    {
      id: 312,
      category: 'colors',
      categoryName: 'COLOR',
      categoryIcon: '💙',
      visualType: 'emoji',
      visual: '🩵',
      question: 'What color is this?',
      options: [
        { text: 'TEAL', correct: true },
        { text: 'BLUE', correct: false },
        { text: 'GREEN', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'teal'
    },

    // --- CATEGORY: FEELINGS (10 Questions) ---
    {
      id: 401,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '🤩',
      question: 'How does this person feel?',
      options: [
        { text: 'EXCITED', correct: true },
        { text: 'HAPPY', correct: false },
        { text: 'NERVOUS', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'excited'
    },
    {
      id: 402,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😁',
      question: 'How does this person feel?',
      options: [
        { text: 'HAPPY', correct: true },
        { text: 'SAD', correct: false },
        { text: 'TIRED', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'happy'
    },
    {
      id: 403,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😊',
      question: 'How does this person feel?',
      options: [
        { text: 'GOOD', correct: true },
        { text: 'OKAY', correct: false },
        { text: 'SAD', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'good'
    },
    {
      id: 404,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😐',
      question: 'How does this person feel?',
      options: [
        { text: 'OKAY', correct: true },
        { text: 'GOOD', correct: false },
        { text: 'EXCITED', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'okay'
    },
    {
      id: 405,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '🤔',
      question: 'How does this person feel?',
      options: [
        { text: 'CURIOUS', correct: true },
        { text: 'TIRED', correct: false },
        { text: 'NERVOUS', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'curious'
    },
    {
      id: 406,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😟',
      question: 'How does this person feel?',
      options: [
        { text: 'NERVOUS', correct: true },
        { text: 'EXCITED', correct: false },
        { text: 'HAPPY', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'nervous'
    },
    {
      id: 407,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😢',
      question: 'How does this person feel?',
      options: [
        { text: 'SAD', correct: true },
        { text: 'HAPPY', correct: false },
        { text: 'GOOD', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'sad'
    },
    {
      id: 408,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😫',
      question: 'How does this person feel?',
      options: [
        { text: 'DIFFICULT', correct: true },
        { text: 'EASY', correct: false },
        { text: 'OKAY', correct: false }
      ],
      difficulty: 'hard',
      time: 10,
      spokenWord: 'difficult'
    },
    {
      id: 409,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '😭',
      question: 'What does this person need?',
      options: [
        { text: 'NEED HELP', correct: true },
        { text: 'EXCITED', correct: false },
        { text: 'GOOD', correct: false }
      ],
      difficulty: 'hard',
      time: 10,
      spokenWord: 'need help'
    },
    {
      id: 410,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'emoji',
      visual: '🥱',
      question: 'How does this person feel?',
      options: [
        { text: 'TIRED', correct: true },
        { text: 'CURIOUS', correct: false },
        { text: 'HAPPY', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'tired'
    },

    // --- CATEGORY: REAL PHOTOS (6 Verified & Preloaded Questions) ---
    {
      id: 501,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      question: 'What is the child doing?',
      options: [
        { text: 'PLAY GAMES', correct: true },
        { text: 'READ BOOKS', correct: false },
        { text: 'SWIM', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'play games'
    },
    {
      id: 502,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
      question: 'What is this food?',
      options: [
        { text: 'AVOCADO', correct: true },
        { text: 'KIWI', correct: false },
        { text: 'APPLE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'avocado'
    },
    {
      id: 503,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=800&q=80',
      question: 'What is the child doing?',
      options: [
        { text: 'RIDE A BIKE', correct: true },
        { text: 'SKATEBOARD', correct: false },
        { text: 'PLAY FOOTBALL', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'ride a bike'
    },
    {
      id: 504,
      category: 'food',
      categoryName: 'FOOD',
      categoryIcon: '❤️',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      question: 'What is this food?',
      options: [
        { text: 'PIZZA', correct: true },
        { text: 'SANDWICH', correct: false },
        { text: 'PANCAKES', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'pizza'
    },
    {
      id: 505,
      category: 'feelings',
      categoryName: 'FEELING',
      categoryIcon: '💜',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
      question: 'How does the child feel?',
      options: [
        { text: 'CURIOUS', correct: true },
        { text: 'SAD', correct: false },
        { text: 'TIRED', correct: false }
      ],
      difficulty: 'medium',
      time: 12,
      spokenWord: 'curious'
    },
    {
      id: 506,
      category: 'activities',
      categoryName: 'ACTIVITY',
      categoryIcon: '💚',
      visualType: 'photo',
      visual: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      question: 'What is the child doing?',
      options: [
        { text: 'READ BOOKS', correct: true },
        { text: 'PLAY GAMES', correct: false },
        { text: 'DANCE', correct: false }
      ],
      difficulty: 'easy',
      time: 15,
      spokenWord: 'read books'
    }
  ];

  window.MONOPOLY_QUESTION_BANK = MONOPOLY_QUESTION_BANK;

  /**
   * Strict Validation Helper:
   * A question is ONLY valid if:
   * 1. visual exists, non-empty, and NOT a fallback ("?", "❓", "undefined", "null")
   * 2. visualType is 'emoji' or 'photo'
   * 3. question prompt exists and is non-empty
   * 4. options has exactly 3 non-empty items
   * 5. exactly ONE option has correct === true
   */
  function validateQuestion(q) {
    if (!q || typeof q !== 'object') return false;
    if (!q.id || typeof q.category !== 'string' || !q.categoryIcon || !q.categoryName) return false;
    if (!q.visual || typeof q.visual !== 'string' || q.visual.trim() === '') return false;
    if (q.visual === '?' || q.visual === '❓' || q.visual === 'null' || q.visual === 'undefined') return false;
    if (q.visualType !== 'emoji' && q.visualType !== 'photo') return false;
    if (!q.question || typeof q.question !== 'string' || q.question.trim() === '') return false;
    if (!Array.isArray(q.options) || q.options.length !== 3) return false;

    let correctCount = 0;
    for (const opt of q.options) {
      if (!opt || typeof opt.text !== 'string' || opt.text.trim() === '') return false;
      if (opt.correct === true) correctCount++;
    }
    if (correctCount !== 1) return false;

    return true;
  }

  function validateQuestionBank(bank) {
    if (!Array.isArray(bank) || bank.length === 0) return 0;
    let validCount = 0;
    bank.forEach(q => {
      if (validateQuestion(q)) validCount++;
    });
    return validCount;
  }

  window.validateQuestion = validateQuestion;
  window.validateQuestionBank = validateQuestionBank;

  // Run startup validation
  const validQuestionCount = validateQuestionBank(MONOPOLY_QUESTION_BANK);
  console.log(`[EmojiMonopoly] Question Bank Loaded & Validated: ${validQuestionCount} / ${MONOPOLY_QUESTION_BANK.length} Valid Questions.`);

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
      this.stealTargetTileIndex = null;
      this.isRollingOrMoving = false;
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

      // 5. Dice Roll button
      if (this.btnRollDice) {
        this.btnRollDice.addEventListener('click', () => {
          if (this.isRollingOrMoving) return;
          this.handleDiceRoll();
        });
      }

      // 6. Event continue button
      if (this.btnEventContinue) {
        this.btnEventContinue.addEventListener('click', () => {
          this.audio.playPop();
          this.eventModal.classList.add('hidden');
          if (this.onEventModalContinue) {
            const cb = this.onEventModalContinue;
            this.onEventModalContinue = null;
            cb();
          } else {
            this.advanceTurn();
          }
        });
      }

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

    // =========================================================================
    // PRE-ROLL QUESTION SYSTEM (15s Easy / 12s Medium / 10s Hard)
    // =========================================================================
    startPreRollTurn() {
      clearInterval(this.countdownInterval);
      this.currentQuestionAnswered = false;
      this.isRollingOrMoving = false;
      this.isStealChallenge = false;
      this.stealTargetTileIndex = null;

      this.stageQuestion.classList.remove('hidden');
      this.stageDice.classList.add('hidden');
      this.feedbackBanner.classList.add('hidden');
      this.feedbackBanner.classList.remove('fb-wrong');

      const teamName = this.activeTeam === 'blue' ? 'BLUE TEAM' : 'RED TEAM';
      const teamDot = this.activeTeam === 'blue' ? '🔵' : '🔴';

      // Pick a verified valid question from the question bank
      this.currentQuestion = this.getNextValidQuestion();
      this.renderQuestionData(this.currentQuestion, `${teamDot} ${teamName}: ANSWER TO EARN ROLL!`);

      // Timer scaling: Easy = 15s, Medium = 12s, Hard = 10s
      const duration = this.currentQuestion.time || 12;
      this.startCountdown(duration, () => this.handleTimeout());
    }

    /**
     * Retrieves a strictly validated question from the question bank.
     * Randomizes option order and sets explicit 'A', 'B', 'C' positions.
     */
    getNextValidQuestion(forcedCategory = null, forcedDiff = null) {
      let pool = MONOPOLY_QUESTION_BANK.filter(q => validateQuestion(q));

      if (forcedCategory) {
        const catPool = pool.filter(q => q.category.toLowerCase() === forcedCategory.toLowerCase());
        if (catPool.length > 0) pool = catPool;
      }
      if (forcedDiff) {
        const diffPool = pool.filter(q => q.difficulty.toLowerCase() === forcedDiff.toLowerCase());
        if (diffPool.length > 0) pool = diffPool;
      }

      // Pick question from pool
      const rawQ = pool[Math.floor(Math.random() * pool.length)] || MONOPOLY_QUESTION_BANK[0];

      // Shuffle options and assign A, B, C positions
      const shuffledOptions = [...rawQ.options].sort(() => 0.5 - Math.random());
      const correctIndex = shuffledOptions.findIndex(o => o.correct === true);
      const correctChoiceLetter = ['A', 'B', 'C'][correctIndex];

      const processedQ = {
        id: rawQ.id,
        category: rawQ.category,
        categoryName: rawQ.categoryName,
        categoryIcon: rawQ.categoryIcon,
        visualType: rawQ.visualType,
        visual: rawQ.visual,
        question: rawQ.question,
        options: shuffledOptions.map((opt, i) => ({
          letter: ['A', 'B', 'C'][i],
          label: opt.text.toUpperCase(),
          isCorrect: opt.correct === true
        })),
        correctChoice: correctChoiceLetter,
        difficulty: rawQ.difficulty,
        time: rawQ.time || (rawQ.difficulty === 'easy' ? 15 : (rawQ.difficulty === 'hard' ? 10 : 12)),
        spokenWord: rawQ.spokenWord || shuffledOptions[correctIndex].text
      };

      return processedQ;
    }

    renderQuestionData(q, headerPrompt) {
      if (!validateQuestion(q)) {
        // Discard invalid question and get a valid one
        q = this.getNextValidQuestion();
      }

      this.qCatIcon.textContent = q.categoryIcon || '⭐';
      this.qCatName.textContent = q.categoryName || 'QUESTION';
      this.qPromptText.textContent = headerPrompt || q.question || 'WHAT IS THIS?';

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

      // Visual rendering: Photo or Emoji (NEVER '?' or '❓')
      if (q.visualType === 'photo' && q.visual && q.visual.startsWith('http')) {
        this.qEmoji.classList.add('hidden');
        this.qPhoto.classList.remove('hidden');
        this.qPhoto.src = q.visual;
        this.qPhoto.onerror = () => {
          // If image fails to load, immediately switch to emoji
          this.qPhoto.classList.add('hidden');
          this.qEmoji.classList.remove('hidden');
          this.qEmoji.textContent = '⭐';
        };
      } else {
        this.qPhoto.classList.add('hidden');
        this.qEmoji.classList.remove('hidden');
        // Large verified emoji from approved vocabulary
        this.qEmoji.textContent = q.visual;
      }

      // Render 3 choices
      this.choiceButtons.forEach((btn, i) => {
        btn.disabled = false;
        btn.classList.remove('is-correct', 'is-wrong', 'is-dimmed');
        if (q.options && q.options[i]) {
          this.choiceLabels[i].textContent = q.options[i].label;
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

        this.fbIcon.textContent = '🎉';
        this.fbText.textContent = `CORRECT! (+${pts} ⭐) 🔓 DICE UNLOCKED!`;
        this.feedbackBanner.classList.remove('hidden', 'fb-wrong');

        if (this.isStealChallenge) {
          // Steal resolution
          setTimeout(() => this.resolveStealChallenge(true), 1200);
        } else {
          // Pre-roll success -> Switch to dice stage with unlocked state
          setTimeout(() => {
            this.stageQuestion.classList.add('hidden');
            this.stageDice.classList.remove('hidden');
            this.diceHeading.textContent = `🔓 DICE UNLOCKED: ${this.activeTeam.toUpperCase()} TEAM!`;
            this.diceSub.textContent = 'Tap ROLL THE DICE below to advance your token!';
            this.btnRollDice.disabled = false;
          }, 1100);
        }

      } else {
        // === WRONG ANSWER ===
        this.currentQuestionAnswered = true;
        this.audio.playWrong();
        cardElement.classList.add('is-wrong');

        this.fbIcon.textContent = '❌';
        this.fbText.textContent = 'NO ROLL! TURN OVER';
        this.feedbackBanner.classList.remove('hidden');
        this.feedbackBanner.classList.add('fb-wrong');

        if (this.isStealChallenge) {
          setTimeout(() => this.resolveStealChallenge(false), 1400);
        } else {
          setTimeout(() => this.advanceTurn(), 1600);
        }
      }
    }

    handleTimeout() {
      this.currentQuestionAnswered = true;
      this.audio.playWrong();
      this.choiceButtons.forEach(b => (b.disabled = true));

      this.fbIcon.textContent = '⏰';
      this.fbText.textContent = "TIME'S UP! NO ROLL!";
      this.feedbackBanner.classList.remove('hidden');
      this.feedbackBanner.classList.add('fb-wrong');

      if (this.isStealChallenge) {
        setTimeout(() => this.resolveStealChallenge(false), 1400);
      } else {
        setTimeout(() => this.advanceTurn(), 1600);
      }
    }

    // =========================================================================
    // 3D DICE & STEP-BY-STEP TOKEN MOVEMENT
    // =========================================================================
    handleDiceRoll() {
      if (this.isRollingOrMoving) return;
      this.isRollingOrMoving = true;
      this.btnRollDice.disabled = true;

      const roll = Math.floor(Math.random() * 6) + 1;
      this.diceBox.classList.add('rolling');
      this.audio.playDiceRoll();

      setTimeout(() => {
        this.diceBox.classList.remove('rolling');
        
        // Orient dice face
        const rotations = {
          1: 'rotateY(0deg)',
          6: 'rotateY(180deg)',
          3: 'rotateY(-90deg)',
          4: 'rotateY(90deg)',
          5: 'rotateX(-90deg)',
          2: 'rotateX(90deg)'
        };
        this.diceBox.style.transform = rotations[roll] || 'rotateY(0deg)';

        this.moveToast.classList.remove('hidden');
        this.toastSteps.textContent = roll;

        // Step-by-step movement along the linear path
        setTimeout(() => {
          this.animateTokenStepByStep(this.activeTeam, roll);
        }, 600);
      }, 900);
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
          const nextPos = Math.min(25, this.teams[teamKey].position + 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          setTimeout(() => this.handleSpaceLanding(teamKey, nextPos), 400);
        });
        return;
      }

      if (tile.type === 'special_trap') {
        // 🐌 TRAP (-2 Spaces)
        this.showEventModal('🐌', 'SLIME TRAP!', `Oh no! ${teamName} slips back 2 spaces!`, null, () => {
          const nextPos = Math.max(0, this.teams[teamKey].position - 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          setTimeout(() => this.advanceTurn(), 400);
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
          this.btnRollDice.disabled = false;
          this.isRollingOrMoving = false;
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
            this.currentQuestionAnswered = false;
            this.stageQuestion.classList.remove('hidden');
            this.stageDice.classList.add('hidden');
            this.feedbackBanner.classList.add('hidden');

            this.currentQuestion = this.getNextValidQuestion(null, 'hard');
            this.renderQuestionData(this.currentQuestion, `⚡ HARD CHALLENGE: ${teamName}`);
            this.startCountdown(10, () => {
              this.audio.playWrong();
              setTimeout(() => this.advanceTurn(), 1400);
            });
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
          this.renderQuestionData(this.currentQuestion, `⚡ STEAL CHALLENGE: ${attackerName}`);

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
          const nextPos = Math.min(25, this.teams[teamKey].position + 2);
          this.teams[teamKey].position = nextPos;
          this.updateTokensOnBoard();
          this.audio.playHop();
          setTimeout(() => this.handleSpaceLanding(teamKey, nextPos), 400);
        } else if (r.extraRoll) {
          this.stageQuestion.classList.add('hidden');
          this.stageDice.classList.remove('hidden');
          this.diceHeading.textContent = `🎲 LUCKY FREE ROLL: ${teamName}!`;
          this.diceSub.textContent = 'Roll the dice again right now!';
          this.btnRollDice.disabled = false;
          this.isRollingOrMoving = false;
        } else {
          this.advanceTurn();
        }
      });
    }

    showEventModal(badge, title, desc, interactiveHtml, onContinue) {
      this.eventBadge.textContent = badge;
      this.eventTitle.textContent = title;
      this.eventDesc.textContent = desc;

      if (interactiveHtml) {
        this.eventInteractive.innerHTML = interactiveHtml;
        this.eventInteractive.classList.remove('hidden');
      } else {
        this.eventInteractive.classList.add('hidden');
      }

      this.onEventModalContinue = onContinue;
      this.eventModal.classList.remove('hidden');
    }

    // =========================================================================
    // ADVANCE TURN & WINNER CEREMONY
    // =========================================================================
    advanceTurn() {
      clearInterval(this.countdownInterval);

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
        monopoly: document.getElementById('screen-monopoly')
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
