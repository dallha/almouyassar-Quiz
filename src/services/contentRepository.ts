import type { Question } from '../types';
import { QUESTIONS } from '../data';
import { buildLearningPathTree } from '../features/learning/learningPath';
import type { LearningPathTree } from '../features/learning/learningPath';

export interface ContentVersionRecord {
  id: string;
  title: string;
  version: number;
  status: 'DRAFT' | 'REVIEW' | 'VALIDATED' | 'PUBLISHED' | 'ARCHIVED';
  updatedAt: string;
  author: string;
  validator?: string;
}

export function listPublishedQuestions(): Question[] {
  return QUESTIONS.filter((question) => question.verification_status === 'verified');
}

export function getQuestionById(questionId: number): Question | undefined {
  return QUESTIONS.find((question) => question.id === questionId);
}

export function getPublishedContentSnapshot(): ContentVersionRecord[] {
  return listPublishedQuestions().map((question, index) => ({
    id: `content-${question.id}`,
    title: `${question.categorie} • ${question.question.slice(0, 24)}`,
    version: index + 1,
    status: question.verification_status === 'verified' ? 'PUBLISHED' : question.verification_status === 'pending' ? 'REVIEW' : 'DRAFT',
    updatedAt: new Date().toISOString(),
    author: 'institution',
    validator: question.verification_status === 'verified' ? 'review-team' : undefined,
  }));
}

export function getPublishedLearningPath(): LearningPathTree {
  return buildLearningPathTree(listPublishedQuestions());
}

export function getContentStats(): { published: number; draft: number; review: number; archived: number } {
  const summary = QUESTIONS.reduce((acc, question) => {
    if (question.verification_status === 'verified') acc.published += 1;
    else if (question.verification_status === 'pending') acc.review += 1;
    else if (question.verification_status === 'draft') acc.draft += 1;
    return acc;
  }, { published: 0, draft: 0, review: 0, archived: 0 });

  return summary;
}
