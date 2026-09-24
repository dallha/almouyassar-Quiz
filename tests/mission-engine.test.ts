import assert from 'node:assert/strict';
import test from 'node:test';

import { completeMission, buildLearningMissions } from '../src/features/adventure/missionEngine';
import type { UserStats } from '../src/types';

const stats: UserStats = {
  xp: 0,
  totalAnswered: 5,
  correctAnswersCount: 5,
  streak: 1,
  highestStreak: 1,
  lastPlayedDate: null,
  completedQuizzesCount: 1,
  unlockedBadgeIds: [],
  masteryLevels: { Fiqh: { category: 'Fiqh', level: 'debutant', progress: 30, totalAnswered: 5, correctCount: 5, lastReviewed: null, nextReview: null, consecutiveCorrect: 5, weakPoints: [] } },
  totalXpEarned: 0,
  quizzesToday: 1,
  lastDailyReset: null,
  preferredCategories: [],
  averageAccuracy: 100,
};

const questions = [{
  id: 1,
  categorie: 'Fiqh',
  niveau: 'Débutant',
  question: 'Question',
  options: ['A'],
  reponse_correcte: 'A',
  explication: 'Explication',
  verification_status: 'verified' as const,
}];

test('missions derive from learning categories and reward only once', () => {
  const mission = buildLearningMissions(questions, stats)[0];
  assert.equal(mission.completed, true);
  const rewarded = completeMission(mission, stats);
  assert.equal(rewarded.xp, 30);
  assert.equal(completeMission(mission, rewarded).xp, 30);
});
