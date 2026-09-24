import type { CategoryMastery, Question, UserStats } from '../types';
import type { ReviewOutcome } from '../types/pedagogy';
import {
  buildReviewPlan,
  calculateXpAward,
  resolveMasteryStatus,
} from '../features/progression';

export interface ProgressSnapshot {
  xp: number;
  masterySummary: Array<{ category: string; progress: number; status: string; level: string }>;
  reviewPlan: ReturnType<typeof buildReviewPlan>;
  nextRecommendedQuestions: string[];
  summary: string;
}

export function getProgressSnapshot(stats: UserStats, questions: Question[] = [], history: ReviewOutcome[] = []): ProgressSnapshot {
  const masterySummary = Object.entries(stats.masteryLevels ?? {}).map(([category, mastery]) => ({
    category,
    progress: mastery.progress,
    status: resolveMasteryStatus(mastery.progress),
    level: mastery.level,
  }));

  const recommended = questions
    .filter((question) => stats.masteryLevels[question.categorie]?.progress < 70 || !stats.masteryLevels[question.categorie])
    .slice(0, 4)
    .map((question) => question.id.toString());

  const reviewPlan = buildReviewPlan(history);

  const summary = masterySummary.length
    ? `${masterySummary.length} catégories suivies • ${reviewPlan.dueItems.length} révisions planifiées • ${stats.xp} XP`
    : `Aucun suivi actif • ${stats.xp} XP • ${questions.length} questions disponibles`;

  return {
    xp: stats.xp,
    masterySummary,
    reviewPlan,
    nextRecommendedQuestions: recommended,
    summary,
  };
}

export function getRecommendedReviewQueue(
  questions: Question[],
  stats: UserStats,
  limit = 5,
): Question[] {
  return [...questions]
    .sort((left, right) => {
      const leftMastery = stats.masteryLevels[left.categorie]?.progress ?? 0;
      const rightMastery = stats.masteryLevels[right.categorie]?.progress ?? 0;
      const leftPriority = leftMastery + (left.niveau === 'Avancé' ? 5 : left.niveau === 'Intermédiaire' ? 2 : 0);
      const rightPriority = rightMastery + (right.niveau === 'Avancé' ? 5 : right.niveau === 'Intermédiaire' ? 2 : 0);
      return leftPriority - rightPriority;
    })
    .slice(0, limit);
}

export function awardXpForAnswer(
  baseXp: number,
  isCorrect: boolean,
  responseTimeMs: number,
  streak: number,
  accuracyRatio: number,
): number {
  const resultMultiplier = isCorrect ? 1 : 0.25;
  return calculateXpAward(baseXp, accuracyRatio, responseTimeMs, streak) * resultMultiplier;
}

export function deriveMasteryForCategory(category: string, mastery?: CategoryMastery): string {
  return resolveMasteryStatus(mastery?.progress ?? 0);
}
