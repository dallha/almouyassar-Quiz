/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuestionTranslation {
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
}

export interface Question {
  id: number;
  categorie: 'Fiqh' | 'Aqidah' | 'Sirah' | 'Coran' | 'Akhlaq' | 'Institut Al-Mouyassar' | string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | string;
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
  source?: string;           // Source authentique (ex: "Sahih Bukhari")
  reference?: string;        // Référence précise (ex: "Hadith n°1234")
  objectif_pedagogique?: string; // Objectif d'apprentissage
  age_min?: number;          // Âge minimum recommandé
  tags?: string[];           // Tags pour le système de recommandation
  verification_status?: 'verified' | 'pending' | 'draft';
  translations?: {
    ar?: QuestionTranslation;
    wo?: QuestionTranslation;
  };
}

export function getLocalizedQuestion(q: Question, lang: string): {
  id: number;
  categorie: string;
  niveau: string;
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
} {
  if (lang !== 'fr' && q.translations && q.translations[lang as 'ar' | 'wo']) {
    const tr = q.translations[lang as 'ar' | 'wo']!;
    return {
      ...q,
      question: tr.question || q.question,
      options: tr.options && tr.options.length === q.options.length ? tr.options : q.options,
      reponse_correcte: tr.reponse_correcte || q.reponse_correcte,
      explication: tr.explication || q.explication
    };
  }
  return q;
}

/* ── Système de Progression ── */

export type MasteryLevel = 'non_commence' | 'debutant' | 'intermediaire' | 'avance' | 'expert' | 'hafiz';

export interface CategoryMastery {
  category: string;
  level: MasteryLevel;
  progress: number;           // 0-100
  totalAnswered: number;
  correctCount: number;
  lastReviewed: string | null; // ISO date
  nextReview: string | null;   // Pour révision espacée
  consecutiveCorrect: number;
  weakPoints: string[];        // Tags des concepts faibles
}

export interface UserStats {
  xp: number;
  totalAnswered: number;
  correctAnswersCount: number;
  streak: number;
  highestStreak: number;
  lastPlayedDate: string | null;
  completedQuizzesCount: number;
  unlockedBadgeIds: string[];
  masteryLevels: Record<string, CategoryMastery>; // Par catégorie
  totalXpEarned: number;
  quizzesToday: number;
  lastDailyReset: string | null;
  preferredCategories: string[];
  averageAccuracy: number;
}

export interface QuizSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  answers: {
    questionId: number;
    selectedAnswer: string;
    isCorrect: boolean;
    timeSpent: number;
  }[];
  isFinished: boolean;
  timeLimitPerQuestion: number;
  sessionType: 'free' | 'adventure' | 'review' | 'challenge';
  adaptiveDifficulty: boolean;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  requirementType: 'xp' | 'streak' | 'category' | 'level' | 'adventure' | 'completed_quizzes' | 'mastery' | 'perfect_session';
  requirementValue: number;
  requirementDetail?: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
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
  type: 'quiz_questions' | 'oustaz_chat' | 'karaoke_vocal' | 'adventure_node' | 'quiz_session_accuracy' | 'perfect_session' | 'streak_maintain';
}

/* ── Système d'Aventure (Refonte Journey) ── */

export type AdventureNodeStatus = 'locked' | 'available' | 'completed';

export interface StoryDialogue {
  character: 'oustaz' | 'guide' | 'narrator';
  text: string;
  expression?: 'neutral' | 'smile' | 'thoughtful' | 'happy';
}

export interface EmotionalReward {
  type: 'title' | 'badge' | 'card' | 'animation' | 'zone_unlock';
  name: string;
  description: string;
  icon: string;
  color?: string;
}

export interface AdventureNode {
  id: string;
  zoneId: string;
  title: string;
  type: 'quiz' | 'boss' | 'story' | 'checkpoint';
  status: AdventureNodeStatus;
  description?: string;
  
  // Gameplay
  questionIds?: number[]; // IDs des questions associées
  categoryFilter?: string; // S'il faut piocher au hasard dans une catégorie
  requiredAccuracy?: number; // 0-100%
  timeLimit?: number; // en secondes
  
  // Narration
  preDialogue?: StoryDialogue[];
  postDialogue?: StoryDialogue[];
  
  // Rewards
  xpReward: number;
  emotionalReward?: EmotionalReward;
}

export interface AdventureZone {
  id: string;
  title: string;          // ex: "Vallée de la Pureté"
  description: string;
  theme: 'mecca' | 'medina' | 'desert' | 'andalus' | 'aqsa';
  order: number;
  nodes: AdventureNode[];
  isLocked: boolean;
}

export interface AdventureState {
  unlockedZones: string[];
  completedNodes: string[];
  currentNodeId: string | null;
  starsEarned: number;
  collectedCards: string[];
  unlockedTitles: string[];
  stamina: number;        // Énergie douce (bonus)
  lastStaminaUpdate: string | null;
}

/* ── Système de Révision Intelligente ── */

export interface ReviewItem {
  questionId: number;
  lastReviewed: string | null;
  nextReview: string | null;
  interval: number;           // Jours avant prochaine révision
  ease: number;               // Facteur de facilité (2.5 par défaut)
  consecutiveCorrect: number;
  timesReviewed: number;
}

export interface SpacedRepetitionSystem {
  items: Record<number, ReviewItem>;
  nextReviewDate: string | null;
  reviewsDue: number;
}
