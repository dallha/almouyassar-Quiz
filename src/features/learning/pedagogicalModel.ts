import type {
  LearningDashboardSnapshot,
  LearningProgressState,
  PedagogicalMetadata,
  PedagogicalQuestion,
  ReviewPlan,
} from '../../types/pedagogy';

const defaultQuestion = (
  input: Partial<PedagogicalQuestion> = {},
): PedagogicalQuestion => ({
  id: input.id ?? 'question-default',
  domain: input.domain ?? 'general',
  category: input.category ?? 'Général',
  chapter: input.chapter ?? 'Fondamentaux',
  lesson: input.lesson ?? 'Découverte',
  level: input.level ?? 'Débutant',
  ageMin: input.ageMin ?? 6,
  ageMax: input.ageMax ?? 16,
  skill: input.skill ?? 'Compréhension',
  objective: input.objective ?? 'Renforcer l’apprentissage islamique.',
  difficulty: input.difficulty ?? 1,
  tags: input.tags ?? [],
  language: input.language ?? 'fr',
  workflow: input.workflow ?? 'DRAFT',
  version: input.version ?? 1,
  source: input.source ?? 'Contenu interne',
  reference: input.reference ?? 'Référence interne',
  question: input.question ?? 'Quelle est la bonne réponse ?',
  options: input.options ?? ['A', 'B', 'C'],
  correctAnswer: input.correctAnswer ?? 'A',
  explanation: input.explanation ?? 'Explication pédagogique.',
  baseXp: input.baseXp ?? 10,
});

export function normalizeLearningMetadata(input: Partial<PedagogicalMetadata> = {}): PedagogicalMetadata {
  return {
    id: input.id ?? 'metadata-default',
    domain: input.domain ?? 'general',
    category: input.category ?? 'Général',
    chapter: input.chapter ?? 'Fondamentaux',
    lesson: input.lesson ?? 'Découverte',
    level: input.level ?? 'Débutant',
    ageMin: input.ageMin ?? 6,
    ageMax: input.ageMax ?? 16,
    skill: input.skill ?? 'Compréhension',
    objective: input.objective ?? 'Renforcer l’apprentissage islamique.',
    difficulty: input.difficulty ?? 1,
    tags: input.tags ?? [],
    language: input.language ?? 'fr',
    workflow: input.workflow ?? 'DRAFT',
    version: input.version ?? 1,
    source: input.source ?? 'Contenu interne',
    reference: input.reference ?? 'Référence interne',
    status: input.status ?? 'À apprendre',
    baseXp: input.baseXp ?? 10,
  };
}

export function computeQuestionDifficulty(question: Partial<PedagogicalQuestion>): number {
  const normalized = defaultQuestion(question);
  const baseDifficulty = normalized.difficulty;
  const tagBonus = normalized.tags.length * 0.2;
  const levelBonus = {
    Débutant: 0,
    Intermédiaire: 0.7,
    Avancé: 1.3,
    Hafiz: 2,
  }[normalized.level] ?? 0.5;

  return Number(Math.min(5, baseDifficulty + tagBonus + levelBonus).toFixed(2));
}

export function buildLearningPath(
  questions: Array<Partial<PedagogicalQuestion>> = [],
): LearningDashboardSnapshot {
  const normalized = questions.map((question) => defaultQuestion(question));

  const groups = new Map<string, LearningProgressState>();

  normalized.forEach((question) => {
    const key = `${question.domain}:${question.category}:${question.lesson}`;
    const previous = groups.get(key);
    const mastery = previous ? Math.min(100, previous.mastery + 10) : 35 + (question.difficulty * 12);

    groups.set(key, {
      domain: question.domain,
      category: question.category,
      chapter: question.chapter,
      lesson: question.lesson,
      mastery: Math.min(100, Math.max(10, mastery)),
      status: mastery >= 80 ? 'Maîtrisé' : mastery >= 60 ? 'En cours' : mastery >= 40 ? 'À revoir' : 'À apprendre',
      totalAnswered: (previous?.totalAnswered ?? 0) + 1,
      correctCount: (previous?.correctCount ?? 0) + 1,
      nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
    });
  });

  const domains = Array.from(groups.values());
  const dueItems = normalized.slice(0, 3).map((question) => question.id);

  return {
    totalDomains: new Set(normalized.map((question) => question.domain)).size,
    totalLessons: new Set(normalized.map((question) => question.lesson)).size,
    totalQuestions: normalized.length,
    domains,
    reviewPlan: {
      dueItems,
      nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
      intervalDays: 2,
      reason: 'Révision espacée sur les notions faibles',
    },
    xpBalance: normalized.reduce((total, question) => total + (question.baseXp ?? 10), 0),
  };
}

export function summarizeLearningPath(questions: Array<Partial<PedagogicalQuestion>> = []): string {
  const snapshot = buildLearningPath(questions);
  return `${snapshot.totalQuestions} questions • ${snapshot.totalLessons} leçons • ${snapshot.reviewPlan.dueItems.length} révisions à faire`;
}
