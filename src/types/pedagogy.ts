export type ContentWorkflow = 'DRAFT' | 'REVIEW' | 'VALIDATED' | 'PUBLISHED' | 'ARCHIVED';
export type LearningStatus = 'À apprendre' | 'À revoir' | 'En cours' | 'Maîtrisé' | 'À renforcer';

export interface PedagogicalMetadata {
  id: string;
  domain: 'fiqh' | 'aqidah' | 'sirah' | 'coran' | 'akhlaq' | 'general';
  category: string;
  chapter: string;
  lesson: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Hafiz';
  ageMin?: number;
  ageMax?: number;
  skill: string;
  objective: string;
  difficulty: number;
  tags: string[];
  language: 'fr' | 'ar' | 'wo';
  workflow: ContentWorkflow;
  version: number;
  source?: string;
  reference?: string;
  status?: LearningStatus;
  baseXp?: number;
}

export interface PedagogicalQuestion extends PedagogicalMetadata {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LearningProgressState {
  domain: string;
  category: string;
  chapter: string;
  lesson: string;
  mastery: number;
  status: LearningStatus;
  totalAnswered: number;
  correctCount: number;
  nextReviewAt?: string;
}

export interface ReviewOutcome {
  questionId: string;
  result: 'correct' | 'incorrect';
  responseTimeMs: number;
  difficulty: number;
  attempts: number;
  lastReviewedAt?: string;
}

export interface ReviewPlan {
  dueItems: string[];
  nextReviewAt: string;
  intervalDays: number;
  reason: string;
}

export interface LearningDashboardSnapshot {
  totalDomains: number;
  totalLessons: number;
  totalQuestions: number;
  domains: LearningProgressState[];
  reviewPlan: ReviewPlan;
  xpBalance: number;
}
