import type { Badge, CategoryMastery, Question, UserStats } from '../../types';

export interface AnswerProgressInput {
  stats: UserStats;
  categoryStats: Record<string, number>;
  currentQuestion: Question;
  isCorrect: boolean;
  timeSpent: number;
  badgeDefinitions?: Badge[];
}

export interface AnswerProgressResult {
  updatedStats: UserStats;
  updatedCategoryStats: Record<string, number>;
  newUnlockedBadgeIds: string[];
  xpGained: number;
}

export function calculateXpForAnswer(
  baseXp: number,
  isCorrect: boolean,
  responseTimeMs: number,
  streak: number,
  accuracyRatio: number,
): number {
  const accuracyFactor = 0.6 + Math.max(0, Math.min(1, accuracyRatio)) * 0.9;
  const speedFactor = responseTimeMs <= 8000 ? 1.25 : responseTimeMs <= 15000 ? 1 : 0.8;
  const streakFactor = 1 + Math.min(streak, 6) * 0.08;
  const resultFactor = isCorrect ? 1 : 0.25;

  return Math.max(5, Math.round(baseXp * accuracyFactor * speedFactor * streakFactor * resultFactor));
}

export function applyAnswerToProgress({
  stats,
  categoryStats,
  currentQuestion,
  isCorrect,
  timeSpent,
  badgeDefinitions = [],
}: AnswerProgressInput): AnswerProgressResult {
  const accuracyRatio = Math.max(0.2, stats.totalAnswered > 0 ? stats.correctAnswersCount / (stats.totalAnswered + 1) : 0.5);
  const xpGained = calculateXpForAnswer(15, isCorrect, timeSpent, stats.streak, accuracyRatio);
  const newStreak = isCorrect ? stats.streak + 1 : 0;
  const newHighestStreak = Math.max(stats.highestStreak, newStreak);

  const updatedCategoryStats = { ...categoryStats };
  if (isCorrect) {
    const qCat = currentQuestion.categorie;
    updatedCategoryStats[qCat] = (updatedCategoryStats[qCat] || 0) + 1;
  }

  const updatedStats: UserStats = {
    ...stats,
    xp: stats.xp + xpGained,
    totalAnswered: stats.totalAnswered + 1,
    correctAnswersCount: isCorrect ? stats.correctAnswersCount + 1 : stats.correctAnswersCount,
    streak: newStreak,
    highestStreak: newHighestStreak,
  };

  const newUnlockedBadgeIds = badgeDefinitions.reduce<string[]>((result, badge) => {
    if (stats.unlockedBadgeIds.includes(badge.id)) return result;

    if (badge.requirementType === 'xp' && updatedStats.xp >= badge.requirementValue) {
      result.push(badge.id);
      return result;
    }

    if (badge.requirementType === 'streak' && updatedStats.highestStreak >= badge.requirementValue) {
      result.push(badge.id);
      return result;
    }

    if (badge.requirementType === 'category') {
      const valueMatched = updatedCategoryStats[badge.requirementDetail || ''] || 0;
      if (valueMatched >= badge.requirementValue) {
        result.push(badge.id);
      }
    }

    return result;
  }, []);

  return {
    updatedStats,
    updatedCategoryStats,
    newUnlockedBadgeIds,
    xpGained,
  };
}

export function deriveMasteryEntry(
  category: string,
  previous?: CategoryMastery,
  isCorrect: boolean = true,
): CategoryMastery {
  const totalAnswered = (previous?.totalAnswered || 0) + 1;
  const correctCount = (previous?.correctCount || 0) + (isCorrect ? 1 : 0);
  const progress = totalAnswered === 0 ? 0 : Math.min(100, Math.round((correctCount / totalAnswered) * 100));

  return {
    category,
    level: progress >= 90 ? 'expert' : progress >= 60 ? 'avance' : progress >= 35 ? 'intermediaire' : 'debutant',
    progress,
    totalAnswered,
    correctCount,
    lastReviewed: new Date().toISOString(),
    nextReview: null,
    consecutiveCorrect: isCorrect ? (previous?.consecutiveCorrect || 0) + 1 : 0,
    weakPoints: previous?.weakPoints || [],
  };
}
