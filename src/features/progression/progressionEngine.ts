import type { ReviewOutcome, ReviewPlan } from '../../types/pedagogy';

export function calculateXpAward(
  baseXp: number,
  accuracyRatio: number,
  responseSpeedMs: number,
  streakBonus: number,
): number {
  const accuracyMultiplier = 0.6 + accuracyRatio * 0.9;
  const speedBonus = responseSpeedMs <= 8000 ? 1.2 : responseSpeedMs <= 15000 ? 1 : 0.8;
  const streakMultiplier = 1 + Math.min(streakBonus, 6) * 0.08;
  return Math.max(5, Math.round(baseXp * accuracyMultiplier * speedBonus * streakMultiplier));
}

export function resolveMasteryStatus(progress: number): 'À apprendre' | 'À revoir' | 'En cours' | 'Maîtrisé' | 'À renforcer' {
  if (progress >= 90) return 'Maîtrisé';
  if (progress >= 75) return 'En cours';
  if (progress >= 50) return 'À revoir';
  if (progress >= 25) return 'À apprendre';
  return 'À renforcer';
}

export function computeAdaptiveReviewInterval(
  difficulty: number,
  accuracyRatio: number,
  attempts: number,
): number {
  const difficultyShift = difficulty * 1.4;
  const accuracyShift = (1 - accuracyRatio) * 4;
  const attemptShift = attempts * 1.2;
  return Math.max(1, Math.round(2 + difficultyShift + accuracyShift + attemptShift));
}

export function buildReviewPlan(history: ReviewOutcome[] = []): ReviewPlan {
  const dueItems = history.filter((entry) => entry.result === 'incorrect').map((entry) => entry.questionId);
  const nextReviewAt = new Date(Date.now() + 86400000).toISOString();

  if (dueItems.length === 0) {
    return {
      dueItems: history.slice(0, 3).map((entry) => entry.questionId),
      nextReviewAt,
      intervalDays: 2,
      reason: 'Aucune révision critique détectée. Suivi de progression standard.',
    };
  }

  const averageDifficulty = dueItems.length
    ? history
        .filter((entry) => dueItems.includes(entry.questionId))
        .reduce((total, entry) => total + entry.difficulty, 0) / dueItems.length
    : 1;

  return {
    dueItems,
    nextReviewAt,
    intervalDays: Math.max(1, Math.round(2 + averageDifficulty)),
    reason: 'Questions faibles ou révisées avec erreur : répétition accélérée recommandée.',
  };
}
