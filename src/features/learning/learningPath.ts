import type { Question } from '../../types';
import type { PedagogicalQuestion } from '../../types/pedagogy';

export interface LearningPathNode {
  id: string;
  kind: 'domain' | 'category' | 'chapter' | 'lesson' | 'activity' | 'quiz' | 'evaluation' | 'review';
  title: string;
  parentId: string | null;
  questionIds: number[];
  order: number;
}

export interface LearningPathTree {
  nodes: LearningPathNode[];
  rootIds: string[];
}

const slug = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');

export function buildLearningPathTree(questions: Question[]): LearningPathTree {
  const nodes = new Map<string, LearningPathNode>();
  const add = (kind: LearningPathNode['kind'], title: string, parentId: string | null, questionId: number) => {
    const id = `${kind}:${parentId || 'root'}:${slug(title)}`;
    const existing = nodes.get(id);
    if (existing) {
      if (!existing.questionIds.includes(questionId)) existing.questionIds.push(questionId);
      return id;
    }
    nodes.set(id, { id, kind, title, parentId, questionIds: [questionId], order: nodes.size });
    return id;
  };

  for (const question of questions) {
    const domain = add('domain', question.categorie, null, question.id);
    const category = add('category', question.objectif_pedagogique || question.categorie, domain, question.id);
    const chapter = add('chapter', question.tags?.[0] || 'Fondamentaux', category, question.id);
    const lesson = add('lesson', question.question.slice(0, 60), chapter, question.id);
    const activity = add('activity', 'Activité guidée', lesson, question.id);
    const quiz = add('quiz', 'Quiz de compréhension', activity, question.id);
    add('evaluation', 'Évaluation', quiz, question.id);
    add('review', 'Révision espacée', quiz, question.id);
  }

  const list = [...nodes.values()];
  return { nodes: list, rootIds: list.filter((node) => node.parentId === null).map((node) => node.id) };
}

export function toPedagogicalQuestion(question: Question): PedagogicalQuestion {
  const level = question.niveau === 'Avancé' ? 'Avancé' : question.niveau === 'Intermédiaire' ? 'Intermédiaire' : 'Débutant';
  return {
    id: String(question.id),
    domain: question.categorie.toLowerCase() as PedagogicalQuestion['domain'],
    category: question.categorie,
    chapter: question.tags?.[0] || 'Fondamentaux',
    lesson: question.objectif_pedagogique || question.question.slice(0, 60),
    level,
    skill: question.objectif_pedagogique || 'Comprendre et retenir',
    objective: question.objectif_pedagogique || 'Répondre avec justesse',
    difficulty: level === 'Avancé' ? 3 : level === 'Intermédiaire' ? 2 : 1,
    tags: question.tags || [],
    language: 'fr',
    workflow: question.verification_status === 'verified' ? 'PUBLISHED' : question.verification_status === 'pending' ? 'REVIEW' : 'DRAFT',
    version: 1,
    source: question.source,
    reference: question.reference,
    baseXp: 15,
    question: question.question,
    options: question.options,
    correctAnswer: question.reponse_correcte,
    explanation: question.explication,
  };
}
