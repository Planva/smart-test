interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  ageGroup: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  type?: 'text' | 'image' | 'pattern';
  category: 'logical' | 'spatial' | 'numerical' | 'pattern' | 'verbal';
  svg?: string;
  optionSvgs?: string[];
}

export const questions: Question[] = [
  // Pattern Recognition Questions
  {
    question: "Which pattern would logically come next?",
    options: ["Pattern A", "Pattern B", "Pattern C", "Pattern D"],
    correctAnswer: 2,
    ageGroup: ["child"],
    difficulty: "easy",
    type: "pattern",
    category: "pattern",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none"/>
      <circle cx="50" cy="50" r="30" stroke="black" stroke-width="2" fill="none"/>
      <circle cx="50" cy="50" r="20" stroke="black" stroke-width="2" fill="none"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="20" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="30" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="20" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="10" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="2" fill="none"/>
      </svg>`
    ]
  },
  {
    question: "If you rotate this shape clockwise once, which option matches the result?",
    options: ["Shape 1", "Shape 2", "Shape 3", "Shape 4"],
    correctAnswer: 1,
    ageGroup: ["child", "teenager"],
    difficulty: "easy",
    type: "image",
    category: "spatial",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="2" fill="none"/>
      <circle cx="50" cy="40" r="5" fill="black"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="90,50 10,90 10,10" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="40" cy="50" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="90,10 90,90 10,50" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="60" cy="50" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,90 10,10 90,10" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="50" cy="60" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,50 90,10 90,90" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="60" cy="50" r="5" fill="black"/>
      </svg>`
    ]
  },
  {
    question: "Which image shows the correct reflection of this pattern?",
    options: ["Mirror A", "Mirror B", "Mirror C", "Mirror D"],
    correctAnswer: 3,
    ageGroup: ["teenager", "adult"],
    difficulty: "medium",
    type: "image",
    category: "spatial",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="60" height="60" stroke="black" stroke-width="2" fill="none"/>
      <line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="2"/>
      <circle cx="35" cy="35" r="5" fill="black"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="black" stroke-width="2" fill="none"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="2"/>
        <circle cx="65" cy="35" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="black" stroke-width="2" fill="none"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="2"/>
        <circle cx="35" cy="65" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="black" stroke-width="2" fill="none"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="2"/>
        <circle cx="65" cy="65" r="5" fill="black"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" stroke="black" stroke-width="2" fill="none"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="2"/>
        <circle cx="35" cy="65" r="5" fill="black"/>
      </svg>`
    ]
  },
  
  // Numerical Reasoning
  {
    question: "What number continues this sequence: 3, 6, 12, 24, ?",
    options: ["36", "48", "42", "30"],
    correctAnswer: 1,
    ageGroup: ["teenager", "adult"],
    difficulty: "medium",
    type: "text",
    category: "numerical"
  },
  {
    question: "If you have 12 squares and remove 1/3 of them, then add half of what's left, how many squares do you have?",
    options: ["10", "8", "12", "6"],
    correctAnswer: 0,
    ageGroup: ["child", "teenager"],
    difficulty: "medium",
    type: "text",
    category: "numerical"
  },
  
  // Logical Reasoning
  {
    question: "If all blue shapes are round, and this shape is blue, what must be true?",
    options: [
      "It might be round",
      "It must be round",
      "It cannot be round",
      "Not enough information"
    ],
    correctAnswer: 1,
    ageGroup: ["teenager", "adult"],
    difficulty: "medium",
    type: "text",
    category: "logical"
  },
  {
    question: "In a race, if you pass the person in second place, what place are you in?",
    options: ["First place", "Second place", "Third place", "Last place"],
    correctAnswer: 1,
    ageGroup: ["child", "teenager"],
    difficulty: "medium",
    type: "text",
    category: "logical"
  },
  
  // Spatial Reasoning
  {
    question: "Which 3D shape can be made from this flat pattern?",
    options: ["Cube", "Pyramid", "Cylinder", "Cone"],
    correctAnswer: 0,
    ageGroup: ["teenager", "adult"],
    difficulty: "hard",
    type: "image",
    category: "spatial",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,20 h60 v60 h-60 v-60 M80,20 l20,-10 v60 l-20,10 M80,80 l20,-10" 
        stroke="black" stroke-width="2" fill="none"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,30 h40 v40 h-40 v-40" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 l30,60 h-60 z" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="30" rx="30" ry="10" stroke="black" stroke-width="2" fill="none"/>
        <ellipse cx="50" cy="70" rx="30" ry="10" stroke="black" stroke-width="2" fill="none"/>
        <line x1="20" y1="30" x2="20" y2="70" stroke="black" stroke-width="2"/>
        <line x1="80" y1="30" x2="80" y2="70" stroke="black" stroke-width="2"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="70" rx="30" ry="10" stroke="black" stroke-width="2" fill="none"/>
        <path d="M20,70 l30,-40 l30,40" stroke="black" stroke-width="2" fill="none"/>
      </svg>`
    ]
  },
  
  // Verbal Reasoning
  {
    question: "Light is to Dark as Hot is to:",
    options: ["Warm", "Temperature", "Cold", "Weather"],
    correctAnswer: 2,
    ageGroup: ["child", "teenager", "adult"],
    difficulty: "easy",
    type: "text",
    category: "verbal"
  },
  {
    question: "Which word is most different from the others: Run, Walk, Jump, Chair?",
    options: ["Run", "Walk", "Jump", "Chair"],
    correctAnswer: 3,
    ageGroup: ["child"],
    difficulty: "easy",
    type: "text",
    category: "verbal"
  },
  
  // New questions for seniors
  {
    question: "Complete the sequence: Monday, Wednesday, Friday, ?",
    options: ["Saturday", "Sunday", "Thursday", "Tuesday"],
    correctAnswer: 1,
    ageGroup: ["senior"],
    difficulty: "easy",
    type: "text",
    category: "logical"
  },
  {
    question: "If a recipe calls for 3/4 cup of flour for 6 servings, how much flour is needed for 8 servings?",
    options: ["1/2 cup", "1 cup", "2/3 cup", "1 1/3 cup"],
    correctAnswer: 1,
    ageGroup: ["senior"],
    difficulty: "medium",
    type: "text",
    category: "numerical"
  },
  {
    question: "Which shape completes this pattern?",
    options: ["Square", "Circle", "Triangle", "Star"],
    correctAnswer: 2,
    ageGroup: ["senior"],
    difficulty: "medium",
    type: "pattern",
    category: "pattern",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="25" height="25" stroke="black" stroke-width="2" fill="none"/>
      <circle cx="70" cy="22.5" r="12.5" stroke="black" stroke-width="2" fill="none"/>
      <rect x="10" y="60" width="25" height="25" stroke="black" stroke-width="2" fill="none"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="35" width="30" height="30" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="15" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,30 L70,70 L30,70 Z" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 L65,50 L95,50 L70,70 L80,100 L50,80 L20,100 L30,70 L5,50 L35,50 Z" stroke="black" stroke-width="2" fill="none"/>
      </svg>`
    ]
  },
  {
    question: "Which word pair best completes the analogy: Book is to Read as Food is to __?",
    options: ["Cook", "Eat", "Taste", "Buy"],
    correctAnswer: 1,
    ageGroup: ["senior"],
    difficulty: "easy",
    type: "text",
    category: "verbal"
  },
  {
    question: "If all cats have tails, and Whiskers is a cat, what can we conclude?",
    options: [
      "Whiskers might have a tail",
      "Whiskers has a tail",
      "Whiskers is an animal",
      "Not enough information"
    ],
    correctAnswer: 1,
    ageGroup: ["senior"],
    difficulty: "easy",
    type: "text",
    category: "logical"
  },
  {
    question: "Which image shows the correct mirror reflection?",
    options: ["Mirror A", "Mirror B", "Mirror C", "Mirror D"],
    correctAnswer: 2,
    ageGroup: ["senior"],
    difficulty: "medium",
    type: "image",
    category: "spatial",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="40" height="40" stroke="black" stroke-width="2" fill="none"/>
      <circle cx="40" cy="50" r="10" stroke="black" stroke-width="2" fill="none"/>
    </svg>`,
    optionSvgs: [
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="40" height="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="60" cy="50" r="10" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="40" height="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="40" cy="50" r="10" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="40" height="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="60" cy="50" r="10" stroke="black" stroke-width="2" fill="none"/>
      </svg>`,
      `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="40" height="40" stroke="black" stroke-width="2" fill="none"/>
        <circle cx="40" cy="60" r="10" stroke="black" stroke-width="2" fill="none"/>
      </svg>`
    ]
  }
];

export function isVisualQuestion(question: Question): boolean {
  return question.type === 'image' || question.type === 'pattern';
}

export function getRandomQuestions(count: number, ageGroup: string = 'adult'): Question[] {
  // Filter questions by age group
  const filteredQuestions = questions.filter(q => q.ageGroup.includes(ageGroup));
  
  // Ensure we have questions from each category
  const categories = ['logical', 'spatial', 'numerical', 'pattern', 'verbal'];
  const questionsPerCategory = Math.floor(count / categories.length);
  const remainder = count % categories.length;
  
  let selectedQuestions: Question[] = [];
  
  // Select questions from each category
  categories.forEach(category => {
    const categoryQuestions = filteredQuestions
      .filter(q => q.category === category)
      .sort(() => Math.random() - 0.5)
      .slice(0, questionsPerCategory);
    
    selectedQuestions = [...selectedQuestions, ...categoryQuestions];
  });
  
  // Add remaining questions randomly from any category
  if (remainder > 0) {
    const additionalQuestions = filteredQuestions
      .filter(q => !selectedQuestions.includes(q))
      .sort(() => Math.random() - 0.5)
      .slice(0, remainder);
    
    selectedQuestions = [...selectedQuestions, ...additionalQuestions];
  }
  
  return selectedQuestions.sort(() => Math.random() - 0.5);
}