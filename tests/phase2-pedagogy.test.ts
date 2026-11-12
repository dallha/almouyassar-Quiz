import assert from 'node:assert/strict';
import test from 'node:test';

import {
  calculateNextReview,
  updateSpacedRepetitionItem,
  getDueReviewQuestions,
  DEFAULT_EASE,
} from '../src/features/progression';
import { deriveMasteryEntry, applyAnswerToProgress } from '../src/features/quiz/sessionService';
import { buildLearningPath } from '../src/features/learning';
import type { Question, UserStats } from '../src/types';

const sampleQuestion: Question = {
  id: 'q-test-1',
  categorie: 'Fiqh',
  niveau: 'Débutant',
  question: 'Comment faire les ablutions ?',
  options: ['Étape A', 'Étape B'],
  reponse_correcte: 'Étape A',
  explication: 'Explication ablutions',
};

const initialStats: UserStats = {
  xp: 0,
  totalAnswered: 0,
  correctAnswersCount: 0,
  streak: 0,
  highestStreak: 0,
  lastPlayedDate: null,
  completedQuizzesCount: 0,
  unlockedBadgeIds: [],
  masteryLevels: {},
  reviewItems: {},
  totalXpEarned: 0,
  quizzesToday: 0,
  lastDailyReset: null,
  preferredCategories: [],
  averageAccuracy: 0,
};

test('deriveMasteryEntry: correctly computes progress percentage and mastery level', () => {
  // First correct answer
  const m1 = deriveMasteryEntry('Fiqh', undefined, true);
  assert.equal(m1.category, 'Fiqh');
  assert.equal(m1.totalAnswered, 1);
  assert.equal(m1.correctCount, 1);
  assert.equal(m1.progress, 100);
  assert.equal(m1.level, 'expert');

  // Second answer incorrect: 1 correct / 2 total = 50%
  const m2 = deriveMasteryEntry('Fiqh', m1, false);
  assert.equal(m2.totalAnswered, 2);
  assert.equal(m2.correctCount, 1);
  assert.equal(m2.progress, 50);
  assert.equal(m2.level, 'intermediaire');
  assert.equal(m2.consecutiveCorrect, 0);
});

test('applyAnswerToProgress: updates category masteryLevels and individual SM-2 reviewItems', () => {
  const result = applyAnswerToProgress({
    stats: initialStats,
    categoryStats: { Fiqh: 0 },
    currentQuestion: sampleQuestion,
    isCorrect: true,
    timeSpent: 6000,
  });

  // Category mastery is populated
  assert.ok(result.updatedStats.masteryLevels['Fiqh'], 'Fiqh mastery should be populated');
  assert.equal(result.updatedStats.masteryLevels['Fiqh'].correctCount, 1);
  assert.equal(result.updatedStats.masteryLevels['Fiqh'].totalAnswered, 1);

  // Individual SM-2 reviewItem is populated
  assert.ok(result.updatedStats.reviewItems?.[sampleQuestion.id], 'Review item should exist for question');
  const review = result.updatedStats.reviewItems![sampleQuestion.id];
  assert.equal(review.consecutiveCorrect, 1);
  assert.equal(review.interval, 1);
  assert.ok(review.nextReview !== null);
});

test('SM-2 Algorithm: computes progressive intervals on success and resets on error', () => {
  // 1ère réussite : intervalle = 1 jour
  const step1 = calculateNextReview(true, 0, DEFAULT_EASE, 0);
  assert.equal(step1.interval, 1);
  assert.equal(step1.ease, 2.65); // 2.5 + 0.15

  // 2ème réussite consécutive : intervalle = 3 jours
  const step2 = calculateNextReview(true, step1.interval, step1.ease, 1);
  assert.equal(step2.interval, 3);
  assert.equal(step2.ease, 2.8); // 2.65 + 0.15

  // 3ème réussite consécutive : intervalle = Math.round(3 * 2.8) = 8 jours
  const step3 = calculateNextReview(true, step2.interval, step2.ease, 2);
  assert.equal(step3.interval, 8);

  // Échec : intervalle retombe à 1 jour et ease diminue
  const failStep = calculateNextReview(false, step3.interval, step3.ease, 3);
  assert.equal(failStep.interval, 1);
  assert.equal(failStep.ease, 2.75); // 2.95 maxed or 2.8 - 0.2 = 2.6
});

test('getDueReviewQuestions: surfaces questions whose nextReview date is due', () => {
  const pastDate = new Date(Date.now() - 3600000).toISOString(); // 1h in the past
  const futureDate = new Date(Date.now() + 86400000 * 5).toISOString(); // 5 days in the future

  const reviewItems = {
    'q-1': {
      questionId: 'q-1',
      lastReviewed: pastDate,
      nextReview: pastDate, // DUE NOW
      interval: 1,
      ease: 2.5,
      consecutiveCorrect: 1,
      timesReviewed: 1,
    },
    'q-2': {
      questionId: 'q-2',
      lastReviewed: new Date().toISOString(),
      nextReview: futureDate, // NOT DUE
      interval: 5,
      ease: 2.5,
      consecutiveCorrect: 2,
      timesReviewed: 2,
    },
  };

  const questions: Question[] = [
    { ...sampleQuestion, id: 'q-1' },
    { ...sampleQuestion, id: 'q-2' },
  ];

  const due = getDueReviewQuestions(reviewItems, questions);
  assert.equal(due.length, 1);
  assert.equal(due[0].id, 'q-1');
});

test('buildLearningPath: calculates mastery accurately based on real performance history', () => {
  const pedagogicalQuestions = [
    {
      id: 'p-1',
      domain: 'fiqh' as const,
      category: 'Salat',
      chapter: 'Purification',
      lesson: 'Wudu',
      level: 'Débutant' as const,
      difficulty: 1,
      question: 'Question 1',
      options: ['A', 'B'],
      correctAnswer: 'A',
      explanation: 'Explication',
    },
    {
      id: 'p-2',
      domain: 'fiqh' as const,
      category: 'Salat',
      chapter: 'Purification',
      lesson: 'Wudu',
      level: 'Débutant' as const,
      difficulty: 1,
      question: 'Question 2',
      options: ['A', 'B'],
      correctAnswer: 'A',
      explanation: 'Explication',
    },
  ];

  // History : 1 correct answer on p-1, 1 incorrect on p-2 -> 50% mastery
  const history = [
    { questionId: 'p-1', result: 'correct' as const, responseTimeMs: 4000, difficulty: 1, attempts: 1 },
    { questionId: 'p-2', result: 'incorrect' as const, responseTimeMs: 7000, difficulty: 1, attempts: 1 },
  ];

  const snapshot = buildLearningPath(pedagogicalQuestions, history);
  assert.equal(snapshot.totalQuestions, 2);
  const wuduGroup = snapshot.domains.find((d) => d.lesson === 'Wudu');
  assert.ok(wuduGroup);
  assert.equal(wuduGroup.correctCount, 1);
  assert.equal(wuduGroup.totalAnswered, 2);
  assert.equal(wuduGroup.mastery, 50);
  assert.equal(wuduGroup.status, 'À revoir');
  assert.ok(snapshot.reviewPlan.dueItems.includes('p-2'), 'Incorrect item p-2 should be in dueItems');
});
