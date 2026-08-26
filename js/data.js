/**
 * ANIMAL RESCUE ACADEMY - Vocabulary Database & SVG Assets
 * Pedagogically structured for CEFR A1 ESL Learners (Ages 5-8)
 */

const VOCABULARY_DATA = [
  {
    id: "lion",
    name: "Lion",
    phonetic: "/ˈlaɪ.ən/",
    category: "wild",
    soundPrompt: "lion",
    modelSentence: "It is a lion.",
    sentenceParts: ["It", "is", "a", "lion."],
    simpleSentences: [
      "It is a lion.",
      "The lion is big.",
      "I see a brave lion."
    ],
    clues: {
      size: "big",
      speed: "fast",
      habitat: "wild",
      sound: "roars",
      color: "yellow",
      feature: "mane"
    },
    detectivePrompts: [
      { text: "Find the BIG, BRAVE animal that roars!", question: "Which animal is big and roars?" },
      { text: "Find the WILD animal with a big mane!", question: "Which animal has a mane?" }
    ],
    funFact: "Lions live in family groups called prides!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Lion">
      <!-- Mane -->
      <circle cx="100" cy="100" r="75" fill="#f59e0b" stroke="#d97706" stroke-width="6"/>
      <circle cx="100" cy="35" r="18" fill="#d97706"/>
      <circle cx="150" cy="50" r="18" fill="#d97706"/>
      <circle cx="165" cy="100" r="18" fill="#d97706"/>
      <circle cx="150" cy="150" r="18" fill="#d97706"/>
      <circle cx="100" cy="165" r="18" fill="#d97706"/>
      <circle cx="50" cy="150" r="18" fill="#d97706"/>
      <circle cx="35" cy="100" r="18" fill="#d97706"/>
      <circle cx="50" cy="50" r="18" fill="#d97706"/>
      <!-- Ears -->
      <circle cx="65" cy="55" r="16" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
      <circle cx="65" cy="55" r="8" fill="#f472b6"/>
      <circle cx="135" cy="55" r="16" fill="#fbbf24" stroke="#d97706" stroke-width="4"/>
      <circle cx="135" cy="55" r="8" fill="#f472b6"/>
      <!-- Face -->
      <ellipse cx="100" cy="105" rx="55" ry="50" fill="#fbbf24"/>
      <!-- Eyes -->
      <ellipse cx="80" cy="95" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="120" cy="95" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="83" cy="92" r="3" fill="#ffffff"/>
      <circle cx="123" cy="92" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="68" cy="112" r="8" fill="#fbcfe8" opacity="0.7"/>
      <circle cx="132" cy="112" r="8" fill="#fbcfe8" opacity="0.7"/>
      <!-- Snout -->
      <ellipse cx="100" cy="118" rx="22" ry="16" fill="#fef3c7"/>
      <polygon points="92,110 108,110 100,119" fill="#78350f"/>
      <path d="M 100 119 L 100 128 M 100 128 Q 92 133 86 126 M 100 128 Q 108 133 114 126" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="50" y1="115" x2="75" y2="118" stroke="#78350f" stroke-width="2"/>
      <line x1="50" y1="125" x2="75" y2="124" stroke="#78350f" stroke-width="2"/>
      <line x1="150" y1="115" x2="125" y2="118" stroke="#78350f" stroke-width="2"/>
      <line x1="150" y1="125" x2="125" y2="124" stroke="#78350f" stroke-width="2"/>
    </svg>`
  },
  {
    id: "elephant",
    name: "Elephant",
    phonetic: "/ˈel.ɪ.fənt/",
    category: "wild",
    soundPrompt: "elephant",
    modelSentence: "The elephant is big.",
    sentenceParts: ["The", "elephant", "is", "big."],
    simpleSentences: [
      "The elephant is big.",
      "It is an elephant.",
      "The elephant has a long trunk."
    ],
    clues: {
      size: "big",
      speed: "slow",
      habitat: "wild",
      sound: "trumpets",
      color: "grey",
      feature: "trunk"
    },
    detectivePrompts: [
      { text: "Find the HUGE GREY animal with big ears!", question: "Which animal is big and grey?" },
      { text: "Find the animal with a LONG TRUNK!", question: "Which animal has a long trunk?" }
    ],
    funFact: "Elephants use their trunks to drink, smell, and hug friends!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Elephant">
      <!-- Big Ears -->
      <ellipse cx="40" cy="95" rx="35" ry="45" fill="#94a3b8" stroke="#64748b" stroke-width="4"/>
      <ellipse cx="42" cy="95" rx="22" ry="32" fill="#cbd5e1"/>
      <ellipse cx="160" cy="95" rx="35" ry="45" fill="#94a3b8" stroke="#64748b" stroke-width="4"/>
      <ellipse cx="158" cy="95" rx="22" ry="32" fill="#cbd5e1"/>
      <!-- Body & Head -->
      <circle cx="100" cy="100" r="55" fill="#94a3b8" stroke="#64748b" stroke-width="4"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="85" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="122" cy="85" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="81" cy="82" r="3" fill="#ffffff"/>
      <circle cx="125" cy="82" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="68" cy="102" r="9" fill="#fbcfe8" opacity="0.8"/>
      <circle cx="132" cy="102" r="9" fill="#fbcfe8" opacity="0.8"/>
      <!-- Trunk -->
      <path d="M 90 98 Q 100 120 100 135 Q 100 155 118 150 Q 125 145 120 138 Q 110 140 110 130 Q 110 115 110 98 Z" fill="#94a3b8" stroke="#64748b" stroke-width="3"/>
      <!-- Tusks -->
      <path d="M 82 120 Q 80 135 72 135 Q 78 128 85 122 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M 118 120 Q 120 135 128 135 Q 122 128 115 122 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Crown/Hair tuft -->
      <path d="M 95 46 Q 100 35 105 46" stroke="#64748b" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "monkey",
    name: "Monkey",
    phonetic: "/ˈmʌŋ.ki/",
    category: "wild",
    soundPrompt: "monkey",
    modelSentence: "I can see a monkey.",
    sentenceParts: ["I", "can", "see", "a", "monkey."],
    simpleSentences: [
      "I can see a monkey.",
      "The monkey eats bananas.",
      "The monkey climbs trees."
    ],
    clues: {
      size: "small",
      speed: "fast",
      habitat: "wild",
      sound: "chatters",
      color: "brown",
      feature: "tail"
    },
    detectivePrompts: [
      { text: "Find the PLAYFUL animal that loves bananas!", question: "Which animal loves bananas?" },
      { text: "Find the CLIMBING animal with a long tail!", question: "Which animal climbs trees?" }
    ],
    funFact: "Monkeys use their tails to balance when swinging in trees!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Monkey">
      <!-- Ears -->
      <circle cx="45" cy="95" r="22" fill="#8d5b4c" stroke="#5d3a30" stroke-width="4"/>
      <circle cx="45" cy="95" r="13" fill="#fed7aa"/>
      <circle cx="155" cy="95" r="22" fill="#8d5b4c" stroke="#5d3a30" stroke-width="4"/>
      <circle cx="155" cy="95" r="13" fill="#fed7aa"/>
      <!-- Head -->
      <ellipse cx="100" cy="100" rx="55" ry="50" fill="#8d5b4c" stroke="#5d3a30" stroke-width="4"/>
      <!-- Face Patch -->
      <ellipse cx="80" cy="85" rx="26" ry="24" fill="#fed7aa"/>
      <ellipse cx="120" cy="85" rx="26" ry="24" fill="#fed7aa"/>
      <ellipse cx="100" cy="115" rx="38" ry="28" fill="#fed7aa"/>
      <!-- Eyes -->
      <ellipse cx="82" cy="82" rx="7" ry="9" fill="#1e293b"/>
      <ellipse cx="118" cy="82" rx="7" ry="9" fill="#1e293b"/>
      <circle cx="84" cy="79" r="3" fill="#ffffff"/>
      <circle cx="120" cy="79" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="68" cy="105" r="7" fill="#fbcfe8" opacity="0.8"/>
      <circle cx="132" cy="105" r="7" fill="#fbcfe8" opacity="0.8"/>
      <!-- Nose & Mouth -->
      <ellipse cx="100" cy="108" rx="6" ry="4" fill="#5d3a30"/>
      <path d="M 88 120 Q 100 132 112 120" stroke="#5d3a30" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Hair Tuft -->
      <path d="M 96 50 Q 100 38 104 50" stroke="#5d3a30" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "rabbit",
    name: "Rabbit",
    phonetic: "/ˈræb.ɪt/",
    category: "pet",
    soundPrompt: "rabbit",
    modelSentence: "The rabbit can hop.",
    sentenceParts: ["The", "rabbit", "can", "hop."],
    simpleSentences: [
      "The rabbit can hop.",
      "It is a cute rabbit.",
      "The rabbit has long ears."
    ],
    clues: {
      size: "small",
      speed: "fast",
      habitat: "pet",
      sound: "squeaks",
      color: "white",
      feature: "long ears"
    },
    detectivePrompts: [
      { text: "Find the SMALL animal with LONG EARS that hops!", question: "Which animal hops and has long ears?" },
      { text: "Find the FAST, FLUFFY PET animal that loves carrots!", question: "Which animal loves carrots?" }
    ],
    funFact: "Rabbits twitch their cute noses to smell everything around them!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Rabbit">
      <!-- Long Ears -->
      <ellipse cx="65" cy="45" rx="16" ry="42" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="4" transform="rotate(-10 65 45)"/>
      <ellipse cx="65" cy="45" rx="9" ry="30" fill="#fbcfe8" transform="rotate(-10 65 45)"/>
      <ellipse cx="135" cy="45" rx="16" ry="42" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="4" transform="rotate(10 135 45)"/>
      <ellipse cx="135" cy="45" rx="9" ry="30" fill="#fbcfe8" transform="rotate(10 135 45)"/>
      <!-- Head -->
      <ellipse cx="100" cy="120" rx="55" ry="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="110" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="122" cy="110" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="81" cy="107" r="3" fill="#ffffff"/>
      <circle cx="125" cy="107" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="62" cy="128" r="9" fill="#fbcfe8" opacity="0.85"/>
      <circle cx="138" cy="128" r="9" fill="#fbcfe8" opacity="0.85"/>
      <!-- Nose & Mouth -->
      <polygon points="95,124 105,124 100,130" fill="#f472b6"/>
      <path d="M 100 130 L 100 136 M 100 136 Q 92 142 86 136 M 100 136 Q 108 142 114 136" stroke="#475569" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="45" y1="126" x2="72" y2="129" stroke="#94a3b8" stroke-width="2"/>
      <line x1="45" y1="135" x2="72" y2="134" stroke="#94a3b8" stroke-width="2"/>
      <line x1="155" y1="126" x2="128" y2="129" stroke="#94a3b8" stroke-width="2"/>
      <line x1="155" y1="135" x2="128" y2="134" stroke="#94a3b8" stroke-width="2"/>
    </svg>`
  },
  {
    id: "cat",
    name: "Cat",
    phonetic: "/kæt/",
    category: "pet",
    soundPrompt: "cat",
    modelSentence: "It is a cute cat.",
    sentenceParts: ["It", "is", "a", "cute", "cat."],
    simpleSentences: [
      "It is a cute cat.",
      "The cat says meow.",
      "I have a friendly cat."
    ],
    clues: {
      size: "small",
      speed: "fast",
      habitat: "pet",
      sound: "meows",
      color: "orange",
      feature: "pointy ears"
    },
    detectivePrompts: [
      { text: "Find the SMALL PET that says MEOW!", question: "Which pet says meow?" },
      { text: "Find the animal with POINTY TRIANGLE EARS and whiskers!", question: "Which pet has pointy ears?" }
    ],
    funFact: "Cats can make over 100 different sounds, including purring when happy!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Cat">
      <!-- Pointy Ears -->
      <polygon points="50,90 40,35 85,65" fill="#fb923c" stroke="#c2410c" stroke-width="4"/>
      <polygon points="52,80 46,45 78,65" fill="#fbcfe8"/>
      <polygon points="150,90 160,35 115,65" fill="#fb923c" stroke="#c2410c" stroke-width="4"/>
      <polygon points="148,80 154,45 122,65" fill="#fbcfe8"/>
      <!-- Head -->
      <ellipse cx="100" cy="115" rx="55" ry="48" fill="#fb923c" stroke="#c2410c" stroke-width="4"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="105" rx="8" ry="10" fill="#047857"/>
      <ellipse cx="122" cy="105" rx="8" ry="10" fill="#047857"/>
      <ellipse cx="78" cy="105" rx="4" ry="8" fill="#0f172a"/>
      <ellipse cx="122" cy="105" rx="4" ry="8" fill="#0f172a"/>
      <circle cx="81" cy="101" r="3" fill="#ffffff"/>
      <circle cx="125" cy="101" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="64" cy="122" r="8" fill="#fbcfe8" opacity="0.8"/>
      <circle cx="136" cy="122" r="8" fill="#fbcfe8" opacity="0.8"/>
      <!-- Nose & Mouth -->
      <polygon points="95,118 105,118 100,124" fill="#f472b6"/>
      <path d="M 100 124 L 100 130 M 100 130 Q 92 136 86 130 M 100 130 Q 108 136 114 130" stroke="#7c2d12" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="45" y1="120" x2="72" y2="123" stroke="#7c2d12" stroke-width="2"/>
      <line x1="45" y1="130" x2="72" y2="128" stroke="#7c2d12" stroke-width="2"/>
      <line x1="155" y1="120" x2="128" y2="123" stroke="#7c2d12" stroke-width="2"/>
      <line x1="155" y1="130" x2="128" y2="128" stroke="#7c2d12" stroke-width="2"/>
    </svg>`
  },
  {
    id: "dog",
    name: "Dog",
    phonetic: "/dɒɡ/",
    category: "pet",
    soundPrompt: "dog",
    modelSentence: "I can see a dog.",
    sentenceParts: ["I", "can", "see", "a", "dog."],
    simpleSentences: [
      "I can see a dog.",
      "The dog is friendly.",
      "The dog wags its tail."
    ],
    clues: {
      size: "medium",
      speed: "fast",
      habitat: "pet",
      sound: "barks",
      color: "golden",
      feature: "floppy ears"
    },
    detectivePrompts: [
      { text: "Find the FRIENDLY PET that barks 'Woof'!", question: "Which pet barks woof?" },
      { text: "Find the LOYAL animal with FLOPPY EARS!", question: "Which pet has floppy ears?" }
    ],
    funFact: "A dog's sense of smell is over 10,000 times stronger than humans!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Dog">
      <!-- Floppy Ears -->
      <ellipse cx="45" cy="100" rx="18" ry="38" fill="#b45309" stroke="#78350f" stroke-width="4" transform="rotate(-15 45 100)"/>
      <ellipse cx="155" cy="100" rx="18" ry="38" fill="#b45309" stroke="#78350f" stroke-width="4" transform="rotate(15 155 100)"/>
      <!-- Head -->
      <ellipse cx="100" cy="110" rx="55" ry="50" fill="#fcd34d" stroke="#b45309" stroke-width="4"/>
      <!-- Spot on Eye -->
      <ellipse cx="78" cy="100" rx="20" ry="22" fill="#f59e0b" opacity="0.6"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="100" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="122" cy="100" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="81" cy="97" r="3" fill="#ffffff"/>
      <circle cx="125" cy="97" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="62" cy="122" r="8" fill="#fbcfe8" opacity="0.8"/>
      <circle cx="138" cy="122" r="8" fill="#fbcfe8" opacity="0.8"/>
      <!-- Snout -->
      <ellipse cx="100" cy="125" rx="24" ry="18" fill="#fef3c7"/>
      <ellipse cx="100" cy="118" rx="10" ry="7" fill="#1e293b"/>
      <path d="M 100 125 L 100 134 M 100 134 Q 92 140 84 133 M 100 134 Q 108 140 116 133" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Tongue -->
      <path d="M 96 136 Q 100 148 104 136" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
    </svg>`
  },
  {
    id: "tiger",
    name: "Tiger",
    phonetic: "/ˈtaɪ.ɡər/",
    category: "wild",
    soundPrompt: "tiger",
    modelSentence: "The tiger is fast.",
    sentenceParts: ["The", "tiger", "is", "fast."],
    simpleSentences: [
      "The tiger is fast.",
      "The tiger has orange stripes.",
      "It is a big wild tiger."
    ],
    clues: {
      size: "big",
      speed: "fast",
      habitat: "wild",
      sound: "roars",
      color: "orange and black",
      feature: "stripes"
    },
    detectivePrompts: [
      { text: "Find the BIG, FAST cat with ORANGE and BLACK STRIPES!", question: "Which animal has orange and black stripes?" },
      { text: "Find the WILD jungle predator that swims well!", question: "Which wild cat is striped and fast?" }
    ],
    funFact: "No two tigers have the exact same pattern of stripes!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Tiger">
      <!-- Ears -->
      <circle cx="55" cy="65" r="18" fill="#ea580c" stroke="#9a3412" stroke-width="4"/>
      <circle cx="55" cy="65" r="10" fill="#fed7aa"/>
      <circle cx="145" cy="65" r="18" fill="#ea580c" stroke="#9a3412" stroke-width="4"/>
      <circle cx="145" cy="65" r="10" fill="#fed7aa"/>
      <!-- Head -->
      <ellipse cx="100" cy="110" rx="55" ry="50" fill="#f97316" stroke="#9a3412" stroke-width="4"/>
      <!-- Stripes on Forehead -->
      <polygon points="100,65 95,78 105,78" fill="#1e293b"/>
      <polygon points="85,72 82,82 90,80" fill="#1e293b"/>
      <polygon points="115,72 118,82 110,80" fill="#1e293b"/>
      <!-- Side Stripes -->
      <polygon points="46,105 60,108 48,114" fill="#1e293b"/>
      <polygon points="154,105 140,108 152,114" fill="#1e293b"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="102" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="122" cy="102" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="81" cy="99" r="3" fill="#ffffff"/>
      <circle cx="125" cy="99" r="3" fill="#ffffff"/>
      <!-- Snout -->
      <ellipse cx="100" cy="124" rx="24" ry="18" fill="#ffedd5"/>
      <polygon points="94,116 106,116 100,123" fill="#9a3412"/>
      <path d="M 100 123 L 100 131 M 100 131 Q 92 136 86 130 M 100 131 Q 108 136 114 130" stroke="#9a3412" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="45" y1="122" x2="72" y2="125" stroke="#1e293b" stroke-width="2"/>
      <line x1="155" y1="122" x2="128" y2="125" stroke="#1e293b" stroke-width="2"/>
    </svg>`
  },
  {
    id: "giraffe",
    name: "Giraffe",
    phonetic: "/dʒɪˈrɑːf/",
    category: "wild",
    soundPrompt: "giraffe",
    modelSentence: "The giraffe is tall.",
    sentenceParts: ["The", "giraffe", "is", "tall."],
    simpleSentences: [
      "The giraffe is tall.",
      "It has a very long neck.",
      "The giraffe eats high leaves."
    ],
    clues: {
      size: "tall",
      speed: "medium",
      habitat: "wild",
      sound: "quiet",
      color: "yellow and brown",
      feature: "long neck"
    },
    detectivePrompts: [
      { text: "Find the TALLEST animal in the world with a LONG NECK!", question: "Which animal has a very long neck?" },
      { text: "Find the YELLOW and BROWN animal that eats tree tops!", question: "Which animal is the tallest?" }
    ],
    funFact: "Giraffes are so tall they can reach leaves on high tree tops!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Giraffe">
      <!-- Ossicones (Horns) -->
      <line x1="82" y1="50" x2="82" y2="28" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
      <circle cx="82" cy="26" r="6" fill="#92400e"/>
      <line x1="118" y1="50" x2="118" y2="28" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
      <circle cx="118" cy="26" r="6" fill="#92400e"/>
      <!-- Ears -->
      <ellipse cx="58" cy="62" rx="16" ry="9" fill="#fde047" stroke="#d97706" stroke-width="3" transform="rotate(-20 58 62)"/>
      <ellipse cx="142" cy="62" rx="16" ry="9" fill="#fde047" stroke="#d97706" stroke-width="3" transform="rotate(20 142 62)"/>
      <!-- Long Neck & Body -->
      <path d="M 85 110 L 80 180 L 120 180 L 115 110 Z" fill="#fde047" stroke="#d97706" stroke-width="4"/>
      <!-- Neck Spots -->
      <circle cx="95" cy="140" r="8" fill="#b45309"/>
      <circle cx="105" cy="165" r="10" fill="#b45309"/>
      <circle cx="92" cy="175" r="6" fill="#b45309"/>
      <!-- Head -->
      <ellipse cx="100" cy="80" rx="44" ry="46" fill="#fde047" stroke="#d97706" stroke-width="4"/>
      <!-- Head Spots -->
      <circle cx="75" cy="68" r="6" fill="#b45309"/>
      <circle cx="125" cy="68" r="6" fill="#b45309"/>
      <!-- Eyes -->
      <ellipse cx="80" cy="78" rx="7" ry="9" fill="#1e293b"/>
      <ellipse cx="120" cy="78" rx="7" ry="9" fill="#1e293b"/>
      <circle cx="83" cy="75" r="3" fill="#ffffff"/>
      <circle cx="123" cy="75" r="3" fill="#ffffff"/>
      <!-- Snout -->
      <ellipse cx="100" cy="98" rx="26" ry="16" fill="#fef08a"/>
      <circle cx="93" cy="96" r="3" fill="#92400e"/>
      <circle cx="107" cy="96" r="3" fill="#92400e"/>
      <path d="M 92 104 Q 100 110 108 104" stroke="#92400e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "zebra",
    name: "Zebra",
    phonetic: "/ˈze.brə/",
    category: "wild",
    soundPrompt: "zebra",
    modelSentence: "The zebra has stripes.",
    sentenceParts: ["The", "zebra", "has", "stripes."],
    simpleSentences: [
      "The zebra has stripes.",
      "The zebra runs fast.",
      "It is black and white."
    ],
    clues: {
      size: "medium",
      speed: "fast",
      habitat: "wild",
      sound: "whinnies",
      color: "black and white",
      feature: "stripes"
    },
    detectivePrompts: [
      { text: "Find the animal with BLACK and WHITE STRIPES like a horse!", question: "Which animal has black and white stripes?" },
      { text: "Find the FAST SAFARI animal that gallops in herds!", question: "Which striped animal runs on the savanna?" }
    ],
    funFact: "Zebras stand up while sleeping so they can run quickly if needed!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Zebra">
      <!-- Mane -->
      <path d="M 85 45 Q 100 25 115 45" stroke="#1e293b" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M 90 40 L 90 32 M 100 35 L 100 25 M 110 40 L 110 32" stroke="#ffffff" stroke-width="4"/>
      <!-- Ears -->
      <polygon points="62,65 52,25 82,50" fill="#f8fafc" stroke="#1e293b" stroke-width="3"/>
      <polygon points="62,60 56,35 76,50" fill="#1e293b"/>
      <polygon points="138,65 148,25 118,50" fill="#f8fafc" stroke="#1e293b" stroke-width="3"/>
      <polygon points="138,60 144,35 124,50" fill="#1e293b"/>
      <!-- Head -->
      <ellipse cx="100" cy="105" rx="52" ry="48" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <!-- Black Stripes -->
      <polygon points="60,78 78,82 65,88" fill="#1e293b"/>
      <polygon points="140,78 122,82 135,88" fill="#1e293b"/>
      <polygon points="52,98 72,100 56,106" fill="#1e293b"/>
      <polygon points="148,98 128,100 144,106" fill="#1e293b"/>
      <!-- Forehead stripe -->
      <polygon points="100,60 95,74 105,74" fill="#1e293b"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="96" rx="7" ry="9" fill="#1e293b"/>
      <ellipse cx="122" cy="96" rx="7" ry="9" fill="#1e293b"/>
      <circle cx="81" cy="93" r="3" fill="#ffffff"/>
      <circle cx="125" cy="93" r="3" fill="#ffffff"/>
      <!-- Muzzle -->
      <ellipse cx="100" cy="124" rx="26" ry="18" fill="#334155"/>
      <circle cx="93" cy="120" r="3" fill="#0f172a"/>
      <circle cx="107" cy="120" r="3" fill="#0f172a"/>
      <path d="M 94 130 Q 100 136 106 130" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "bear",
    name: "Bear",
    phonetic: "/beər/",
    category: "wild",
    soundPrompt: "bear",
    modelSentence: "The bear is big.",
    sentenceParts: ["The", "bear", "is", "big."],
    simpleSentences: [
      "The bear is big.",
      "The brown bear likes honey.",
      "I see a furry bear."
    ],
    clues: {
      size: "big",
      speed: "medium",
      habitat: "wild",
      sound: "growls",
      color: "brown",
      feature: "round ears"
    },
    detectivePrompts: [
      { text: "Find the BIG, FURRY BROWN animal that loves sweet honey!", question: "Which big animal loves honey?" },
      { text: "Find the LARGE FOREST animal with cute ROUND EARS!", question: "Which furry animal has round ears?" }
    ],
    funFact: "Bears have an amazing sense of smell and sleep during cold winters!",
    svg: `<svg viewBox="0 0 200 200" class="animal-svg" aria-label="Cute Cartoon Bear">
      <!-- Round Ears -->
      <circle cx="55" cy="62" r="22" fill="#78350f" stroke="#451a03" stroke-width="4"/>
      <circle cx="55" cy="62" r="12" fill="#fcd34d"/>
      <circle cx="145" cy="62" r="22" fill="#78350f" stroke="#451a03" stroke-width="4"/>
      <circle cx="145" cy="62" r="12" fill="#fcd34d"/>
      <!-- Head -->
      <ellipse cx="100" cy="110" rx="58" ry="52" fill="#78350f" stroke="#451a03" stroke-width="4"/>
      <!-- Eyes -->
      <ellipse cx="78" cy="98" rx="8" ry="10" fill="#1e293b"/>
      <ellipse cx="122" cy="98" rx="8" ry="10" fill="#1e293b"/>
      <circle cx="81" cy="95" r="3" fill="#ffffff"/>
      <circle cx="125" cy="95" r="3" fill="#ffffff"/>
      <!-- Cheeks -->
      <circle cx="62" cy="118" r="8" fill="#fbcfe8" opacity="0.6"/>
      <circle cx="138" cy="118" r="8" fill="#fbcfe8" opacity="0.6"/>
      <!-- Snout -->
      <ellipse cx="100" cy="122" rx="28" ry="20" fill="#fde68a"/>
      <ellipse cx="100" cy="114" rx="12" ry="8" fill="#1e293b"/>
      <path d="M 100 122 L 100 130 M 100 130 Q 90 136 84 128 M 100 130 Q 110 136 116 128" stroke="#451a03" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  }
];

// Mission Roadmap Metadata
const MISSIONS_CONFIG = [
  {
    id: 1,
    title: "Meet the Animals",
    subtitle: "Recognition & Pronunciation",
    icon: "🐾",
    desc: "Listen, tap, and learn the names of your first animal friends!",
    targetCount: 4,
    skills: ["Recognition", "Phonetics", "Listen & Repeat"],
    badgeUnlock: "first_rescue"
  },
  {
    id: 2,
    title: "Rescue the Animals",
    subtitle: "Drag & Tap Rescue",
    icon: "🏡",
    desc: "Help escaped animals find their labeled rescue shelters!",
    targetCount: 5,
    skills: ["Matching", "Visual Association", "Word Association"],
    badgeUnlock: "great_listener"
  },
  {
    id: 3,
    title: "Listen and Find",
    subtitle: "Acoustic Comprehension",
    icon: "👂",
    desc: "Listen carefully to the word and choose the right animal picture!",
    targetCount: 5,
    skills: ["Listening Accuracy", "Auditory Discrimination"],
    badgeUnlock: null
  },
  {
    id: 4,
    title: "Match Picture and Word",
    subtitle: "Orthographic Recognition",
    icon: "🔤",
    desc: "Look at the animal and pick the matching English word card!",
    targetCount: 5,
    skills: ["Sight Words", "Reading A1", "Word Form"],
    badgeUnlock: "vocab_star"
  },
  {
    id: 5,
    title: "Animal Detective",
    subtitle: "Semantic Clues & Attributes",
    icon: "🔍",
    desc: "Use clues like BIG, FAST, WILD, and STRIPED to solve animal riddles!",
    targetCount: 5,
    skills: ["Adjectives", "Semantic Categories", "Reasoning"],
    badgeUnlock: "animal_expert"
  },
  {
    id: 6,
    title: "Build a Sentence",
    subtitle: "Syntax & Sentence Construction",
    icon: "🧩",
    desc: "Arrange word cards into complete, correct English sentences!",
    targetCount: 4,
    skills: ["Syntax", "Sentence Structure", "Production"],
    badgeUnlock: "sentence_builder"
  },
  {
    id: 7,
    title: "Rescue Challenge",
    subtitle: "Ranger Multi-Skill Patrol",
    icon: "🏆",
    desc: "Put all your rescue skills together to complete the ultimate safari patrol!",
    targetCount: 6,
    skills: ["All Skills Integrated", "Fluency", "Confidence"],
    badgeUnlock: "rescue_master"
  },
  {
    id: 8,
    title: "Smart Review Mission",
    subtitle: "Adaptive Practice Clinic",
    icon: "⭐",
    desc: "Target tricky animals with personalized practice and graduate!",
    targetCount: 5,
    skills: ["Spaced Repetition", "Error Remediation", "Mastery"],
    badgeUnlock: null
  }
];

// Collectible Badges
const BADGES_CONFIG = [
  {
    id: "first_rescue",
    title: "First Rescue",
    desc: "Met your first 4 animal friends at the Academy!",
    icon: "🐾",
    color: "#10b981"
  },
  {
    id: "great_listener",
    title: "Great Listener",
    desc: "Understood spoken English words and rescued animals!",
    icon: "🎧",
    color: "#3b82f6"
  },
  {
    id: "vocab_star",
    title: "Vocabulary Star",
    desc: "Mastered reading written animal words!",
    icon: "⭐",
    color: "#f59e0b"
  },
  {
    id: "animal_expert",
    title: "Animal Expert",
    desc: "Solved detective riddles using size, speed, and habitat clues!",
    icon: "🔍",
    color: "#8b5cf6"
  },
  {
    id: "sentence_builder",
    title: "Sentence Builder",
    desc: "Constructed complete English sentences with correct word order!",
    icon: "🧩",
    color: "#ec4899"
  },
  {
    id: "rescue_master",
    title: "Academy Hero",
    desc: "Completed all ranger rescue challenges and mastered the safari!",
    icon: "🏅",
    color: "#e11d48"
  }
];

// Encouraging Feedback Phrases (Strictly positive, constructive ELT)
const ENCOURAGING_PHRASES = {
  success: [
    "Great job!",
    "Excellent!",
    "Super listener!",
    "Wonderful rescue!",
    "You got it!",
    "Fantastic!",
    "Brilliant!",
    "You are an animal hero!"
  ],
  retry: [
    "Good try! Let's try again.",
    "Almost there! Listen closely.",
    "Nice try! You can do it.",
    "Good effort! Take another look.",
    "Let's practice again together!"
  ],
  completion: [
    "Mission accomplished! You rescued all the animals!",
    "Amazing work, Junior Ranger! You earned a star!",
    "Superstar! All animals are safe and happy!"
  ]
};

// Export to global window object
if (typeof window !== "undefined") {
  window.VOCABULARY_DATA = VOCABULARY_DATA;
  window.MISSIONS_CONFIG = MISSIONS_CONFIG;
  window.BADGES_CONFIG = BADGES_CONFIG;
  window.ENCOURAGING_PHRASES = ENCOURAGING_PHRASES;
}

