import { questions } from './questions';

interface Category {
  name: string;
  weight: number;
}

const categories: Category[] = [
  { name: 'logical', weight: 1.2 },
  { name: 'spatial', weight: 1.0 },
  { name: 'numerical', weight: 1.1 },
  { name: 'pattern', weight: 1.0 },
  { name: 'verbal', weight: 0.9 }
];

export function calculateIQ(answers: number[], ageGroup: string = 'adult'): number {
  const baseScore = 100;
  
  // Get difficulty multiplier based on age group
  const difficultyMultiplier = getDifficultyMultiplier(ageGroup);
  
  // Calculate weighted score based on categories
  let totalWeight = 0;
  let weightedCorrect = 0;
  
  answers.forEach((answer, index) => {
    const question = questions[index];
    if (!question) return;
    
    // Get category weight
    const category = categories.find(c => c.name === question.category);
    const categoryWeight = category ? category.weight : 1.0;
    
    // Calculate question weight based on difficulty and category
    const difficultyWeight = question.difficulty === 'easy' ? 1 : 
                            question.difficulty === 'medium' ? 1.5 : 2;
    
    const totalQuestionWeight = difficultyWeight * categoryWeight;
    
    totalWeight += totalQuestionWeight;
    if (answer === question.correctAnswer) {
      weightedCorrect += totalQuestionWeight;
    }
  });
  
  // Calculate weighted percentage correct
  const weightedPercentage = weightedCorrect / totalWeight;
  
  // Apply age-appropriate scaling
  const scaledScore = weightedPercentage * 60 * difficultyMultiplier;
  
  // Calculate final IQ score
  return Math.round(baseScore + scaledScore);
}

function getDifficultyMultiplier(ageGroup: string): number {
  switch (ageGroup) {
    case 'child':
      return 0.8; // Slightly easier scoring for children
    case 'teenager':
      return 0.9;
    case 'adult':
      return 1.0; // Standard difficulty
    case 'senior':
      return 0.95;
    default:
      return 1.0;
  }
}