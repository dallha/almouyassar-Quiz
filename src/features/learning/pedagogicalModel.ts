import type {
  LearningDashboardSnapshot,
  LearningProgressState,
  PedagogicalMetadata,
  PedagogicalQuestion,
  ReviewOutcome,
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
  history: ReviewOutcome[] = [],
): LearningDashboardSnapshot {
  const normalized = questions.map((question) => defaultQuestion(question));
  const historyByQuestion = new Map<string, ReviewOutcome>();
  history.forEach((h) => historyByQuestion.set(String(h.questionId), h));

  const groups = new Map<string, LearningProgressState>();

  normalized.forEach((question) => {
    const key = `${question.domain}:${question.category}:${question.lesson}`;
    const previous = groups.get(key);
    const outcome = historyByQuestion.get(String(question.id));

    let correctCount = previous?.correctCount ?? 0;
    let totalAnswered = previous?.totalAnswered ?? 0;

    if (outcome) {
      totalAnswered += 1;
      if (outcome.result === 'correct') {
        correctCount += 1;
      }
    }

    const calculatedMastery = totalAnswered > 0
      ? Math.round((correctCount / totalAnswered) * 100)
      : Math.min(40, 20 + question.difficulty * 5);

    groups.set(key, {
      domain: question.domain,
      category: question.category,
      chapter: question.chapter,
      lesson: question.lesson,
      mastery: Math.min(100, Math.max(0, calculatedMastery)),
      status: calculatedMastery >= 85 ? 'Maîtrisé' : calculatedMastery >= 65 ? 'En cours' : calculatedMastery >= 40 ? 'À revoir' : 'À apprendre',
      totalAnswered,
      correctCount,
      nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
    });
  });

  const domains = Array.from(groups.values());
  const incorrectIds = history.filter((h) => h.result === 'incorrect').map((h) => String(h.questionId));
  const dueItems = incorrectIds.length > 0 ? incorrectIds : normalized.slice(0, 3).map((question) => question.id);

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
