import type { Question, ReviewItem } from '../../types';

export const DEFAULT_EASE = 2.5;
export const MIN_EASE = 1.3;
export const MAX_EASE = 3.0;

/**
 * Calcul d'échéance individuelle selon l'algorithme SM-2 adapté.
 * Ajuste l'intervalle (jours) et le facteur de facilité (ease) selon la justesse et la régularité.
 */
export function calculateNextReview(
  isCorrect: boolean,
  currentInterval: number = 0,
  currentEase: number = DEFAULT_EASE,
  consecutiveCorrect: number = 0
): { interval: number; ease: number; nextReview: string } {
  let newEase = currentEase;
  let newInterval: number;
  const newConsecutive = isCorrect ? consecutiveCorrect + 1 : 0;

  if (!isCorrect) {
    newInterval = 1; // Revoir dès le lendemain
    newEase = Math.max(MIN_EASE, currentEase - 0.2);
  } else {
    if (newConsecutive === 1) newInterval = 1;
    else if (newConsecutive === 2) newInterval = 3;
    else newInterval = Math.max(1, Math.round(currentInterval * currentEase));

    newEase = Math.min(MAX_EASE, currentEase + 0.15);
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newInterval);

  return {
    interval: newInterval,
    ease: Number(newEase.toFixed(2)),
    nextReview: nextDate.toISOString(),
  };
}

/**
 * Met à jour ou initialise l'état de révision espacée pour une question donnée.
 */
export function updateSpacedRepetitionItem(
  existingItem: ReviewItem | undefined,
  questionId: string | number,
  isCorrect: boolean
): ReviewItem {
  const currentInterval = existingItem?.interval ?? 0;
  const currentEase = existingItem?.ease ?? DEFAULT_EASE;
  const consecutiveCorrect = existingItem?.consecutiveCorrect ?? 0;
  const timesReviewed = (existingItem?.timesReviewed ?? 0) + 1;

  const { interval, ease, nextReview } = calculateNextReview(
    isCorrect,
    currentInterval,
    currentEase,
    consecutiveCorrect
  );

  return {
    questionId,
    lastReviewed: new Date().toISOString(),
    nextReview,
    interval,
    ease,
    consecutiveCorrect: isCorrect ? consecutiveCorrect + 1 : 0,
    timesReviewed,
  };
}

/**
 * Filtre le catalogue pour retourner les questions dont l'échéance de révision est échue ou aujourd'hui.
 */
export function getDueReviewQuestions(
  reviewItems: Record<string | number, ReviewItem> = {},
  allQuestions: Question[]
): Question[] {
  const now = new Date();
  const dueQuestionIds = new Set<string | number>();

  for (const item of Object.values(reviewItems)) {
    if (item && (!item.nextReview || new Date(item.nextReview) <= now)) {
      dueQuestionIds.add(item.questionId);
    }
  }

  return allQuestions.filter((q) => dueQuestionIds.has(q.id));
}
