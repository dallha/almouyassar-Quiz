import assert from 'node:assert/strict';
import test from 'node:test';

import { buildLearningPath, computeQuestionDifficulty } from '../src/features/learning';
import {
  buildReviewPlan,
  calculateXpAward,
  computeAdaptiveReviewInterval,
  resolveMasteryStatus,
} from '../src/features/progression';

test('computeQuestionDifficulty increases with teaching level and tags', () => {
  const beginner = computeQuestionDifficulty({ level: 'Débutant', tags: ['aqida'], difficulty: 1 });
  const advanced = computeQuestionDifficulty({ level: 'Avancé', tags: ['fiqh', 'hadith'], difficulty: 3 });

  assert.ok(advanced > beginner);
  assert.ok(beginner >= 1);
  assert.ok(advanced <= 5);
});

test('buildLearningPath summarizes the pedagogical workload', () => {
  const summary = buildLearningPath([
    {
      id: 'q-1',
      domain: 'fiqh',
      category: 'Salat',
      chapter: 'Purification',
      lesson: 'Wudu',
      level: 'Débutant',
      difficulty: 1,
      skill: 'Compréhension',
      objective: 'Connaitre les conditions du wudu',
      question: 'Quelle est la première étape ?',
      options: ['Niyat', 'Takbir', 'Ruku'],
      correctAnswer: 'Niyat',
      explanation: 'La niyat est une intention intérieure.',
    },
    {
      id: 'q-2',
      domain: 'aqidah',
      category: 'Monotheisme',
      chapter: 'Tauhid',
      lesson: 'Attributs',
      level: 'Intermédiaire',
      difficulty: 2,
      skill: 'Connaissance',
      objective: 'Comprendre les attributs d’Allah',
      question: 'Allah est-il le seul créateur ?',
      options: ['Oui', 'Non'],
      correctAnswer: 'Oui',
      explanation: 'Seul Allah est le créateur.',
    },
  ]);

  assert.equal(summary.totalQuestions, 2);
  assert.equal(summary.totalDomains, 2);
  assert.equal(summary.reviewPlan.dueItems.length, 2);
  assert.ok(summary.xpBalance >= 20);
});

test('calculateXpAward rewards correct and rapid answers', () => {
  const strongScore = calculateXpAward(20, 1, 5000, 3);
  const weakScore = calculateXpAward(20, 0.4, 20000, 0);

  assert.ok(strongScore > weakScore);
  assert.ok(strongScore >= 20);
  assert.ok(weakScore >= 5);
});

test('resolveMasteryStatus and review interval follow progression rules', () => {
  assert.equal(resolveMasteryStatus(95), 'Maîtrisé');
  assert.equal(resolveMasteryStatus(60), 'À revoir');
  assert.ok(computeAdaptiveReviewInterval(2, 0.7, 2) >= 3);

  const plan = buildReviewPlan([
    { questionId: 'q-1', result: 'incorrect', responseTimeMs: 15000, difficulty: 3, attempts: 2 },
    { questionId: 'q-2', result: 'correct', responseTimeMs: 7000, difficulty: 1, attempts: 1 },
  ]);

  assert.ok(plan.dueItems.includes('q-1'));
  assert.ok(plan.intervalDays >= 1);
});
