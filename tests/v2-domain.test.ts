import assert from 'node:assert/strict';
import test from 'node:test';

import { buildLearningPathTree } from '../src/features/learning/learningPath';
import { canTransitionContent, transitionContent, type ContentRecord } from '../src/features/cms/contentWorkflow';
import { summarizeAnalytics } from '../src/services/analyticsService';

const question = {
  id: 1,
  categorie: 'Fiqh',
  niveau: 'Débutant',
  question: 'Quelle est la première étape ?',
  options: ['A', 'B'],
  reponse_correcte: 'A',
  explication: 'Explication',
  objectif_pedagogique: 'Comprendre la prière',
  tags: ['Prière'],
  verification_status: 'verified' as const,
};

test('learning path builds the complete pedagogical chain', () => {
  const path = buildLearningPathTree([question]);
  assert.deepEqual(path.nodes.map((node) => node.kind), [
    'domain', 'category', 'chapter', 'lesson', 'activity', 'quiz', 'evaluation', 'review',
  ]);
  assert.equal(path.nodes.at(-1)?.questionIds[0], 1);
});

test('CMS workflow enforces ordered publication and audit history', () => {
  const record: ContentRecord = {
    ...question,
    id: 'question-1',
    domain: 'fiqh',
    category: 'Fiqh',
    chapter: 'Prière',
    lesson: 'Comprendre la prière',
    level: 'Débutant',
    skill: 'Comprendre',
    objective: 'Comprendre',
    difficulty: 1,
    language: 'fr',
    workflow: 'DRAFT',
    version: 1,
    authorId: 'author',
    updatedAt: new Date().toISOString(),
    audit: [],
    correctAnswer: 'A',
    explanation: 'Explication',
  };

  assert.equal(canTransitionContent('DRAFT', 'PUBLISHED'), false);
  const review = transitionContent(record, 'REVIEW', 'author');
  const validated = transitionContent(review, 'VALIDATED', 'reviewer');
  const published = transitionContent(validated, 'PUBLISHED', 'reviewer');
  assert.equal(published.workflow, 'PUBLISHED');
  assert.equal(published.audit.length, 3);
});

test('analytics summary is derived from recorded events', () => {
  const summary = summarizeAnalytics([
    { id: '1', name: 'session_started', childId: 'child-1', occurredAt: '', properties: {} },
    { id: '2', name: 'question_answered', childId: 'child-1', occurredAt: '', properties: { isCorrect: true } },
    { id: '3', name: 'question_answered', childId: 'child-1', occurredAt: '', properties: { isCorrect: false } },
  ]);
  assert.equal(summary.sessions, 1);
  assert.equal(summary.successRate, 50);
});
