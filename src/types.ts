/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  categorie: 'Fiqh' | 'Aqidah' | 'Institut Al-Mouyassar' | string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | string;
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
}

export interface UserStats {
  xp: number;
  totalAnswered: number;
  correctAnswersCount: number;
  streak: number; // Current continuous correct answers
  highestStreak: number;
  lastPlayedDate: string | null; // For daily streak calculations
  completedQuizzesCount: number;
  unlockedBadgeIds: string[];
}

export interface QuizSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  answers: {
    questionId: number;
    selectedAnswer: string;
    isCorrect: boolean;
    timeSpent: number; // in seconds
  }[];
  isFinished: boolean;
  timeLimitPerQuestion: number; // in seconds (e.g. 20)
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon string
  color: string; // Tailwind bg- classes
  requirementType: 'xp' | 'streak' | 'category' | 'level' | 'adventure' | 'completed_quizzes';
  requirementValue: number;
  requirementDetail?: string; // e.g. "Institut Al-Mouyassar"
}

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  xpReward: number;
  isCompleted: boolean;
  isClaimed: boolean;
  type: 'quiz_questions' | 'oustaz_chat' | 'karaoke_vocal' | 'adventure_node' | 'quiz_session_accuracy';
}

