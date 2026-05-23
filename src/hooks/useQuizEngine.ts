import { useState, useCallback, useMemo } from 'react';
import { Question, UserStats, CategoryMastery, MasteryLevel, QuizSession, ReviewItem } from '../types';
import { QUESTIONS } from '../data';

/* ── CONSTANTES ── */
const XP_PER_CORRECT = 15;
const XP_PER_INCORRECT = 2;
const XP_PERFECT_BONUS = 50;
const XP_STREAK_BONUS = 5; // Bonus par jour de streak
const MAX_QUESTIONS_PER_SESSION = 7;
const MASTERY_THRESHOLDS: Record<MasteryLevel, number> = {
    non_commence: 0,
    debutant: 20,
    intermediaire: 40,
    avance: 60,
    expert: 80,
    hafiz: 95,
};

/* ── SYSTÈME DE RÉVISION ESPACÉE (SM-2 simplifié) ── */
function calculateNextReview(
    isCorrect: boolean,
    currentInterval: number,
    currentEase: number,
    consecutiveCorrect: number
): { interval: number; ease: number; nextReview: string } {
    let newEase = currentEase;
    let newInterval: number;
    let newConsecutive = isCorrect ? consecutiveCorrect + 1 : 0;

    if (!isCorrect) {
        newInterval = 1; // Revoir demain
        newEase = Math.max(1.3, currentEase - 0.2);
    } else {
        if (newConsecutive === 1) newInterval = 1;
        else if (newConsecutive === 2) newInterval = 3;
        else newInterval = Math.round(currentInterval * currentEase);

        newEase = Math.min(3.0, currentEase + 0.15);
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);

    return {
        interval: newInterval,
        ease: newEase,
        nextReview: nextDate.toISOString(),
    };
}

/* ── CALCUL DU NIVEAU DE MAÎTRISE ── */
function calculateMasteryLevel(progress: number): MasteryLevel {
    if (progress >= MASTERY_THRESHOLDS.hafiz) return 'hafiz';
    if (progress >= MASTERY_THRESHOLDS.expert) return 'expert';
    if (progress >= MASTERY_THRESHOLDS.avance) return 'avance';
    if (progress >= MASTERY_THRESHOLDS.intermediaire) return 'intermediaire';
    if (progress >= MASTERY_THRESHOLDS.debutant) return 'debutant';
    return 'non_commence';
}

function calculateCategoryProgress(correctCount: number, totalAnswered: number): number {
    if (totalAnswered === 0) return 0;
    const accuracy = correctCount / totalAnswered;
    const volume = Math.min(totalAnswered / 20, 1); // 20 questions = volume max
    return Math.round(Math.min(100, accuracy * 70 + volume * 30));
}

/* ── DIFFICULTÉ ADAPTIVE ── */
function getAdaptiveDifficulty(stats: UserStats, category: string): string[] {
    const mastery = stats.masteryLevels[category];
    if (!mastery) return ['Débutant', 'Intermédiaire'];

    const level = mastery.level;
    switch (level) {
        case 'non_commence':
        case 'debutant':
            return ['Débutant'];
        case 'intermediaire':
            return ['Débutant', 'Intermédiaire'];
        case 'avance':
            return ['Intermédiaire', 'Avancé'];
        case 'expert':
        case 'hafiz':
            return ['Avancé'];
        default:
            return ['Débutant', 'Intermédiaire'];
    }
}

/* ── SÉLECTION INTELLIGENTE DES QUESTIONS ── */
function selectQuestions(
    stats: UserStats,
    category?: string,
    count: number = MAX_QUESTIONS_PER_SESSION,
    adaptive: boolean = true
): Question[] {
    let pool = [...QUESTIONS];

    // Filtrer par catégorie si spécifiée
    if (category) {
        pool = pool.filter(q => q.categorie === category);
    }

    // Difficulté adaptive
    if (adaptive && category) {
        const allowedLevels = getAdaptiveDifficulty(stats, category);
        pool = pool.filter(q => allowedLevels.includes(q.niveau));
    }

    // Prioriser les questions jamais vues ou avec faible maîtrise
    const scored = pool.map(q => {
        const mastery = stats.masteryLevels[q.categorie];
        let score = Math.random(); // Base aléatoire

        // Bonus pour les catégories avec faible progression
        if (mastery && mastery.progress < 40) {
            score += 0.3;
        }

        // Bonus pour les points faibles
        if (mastery?.weakPoints.length) {
            const hasWeakTag = q.tags?.some(t => mastery.weakPoints.includes(t));
            if (hasWeakTag) score += 0.4;
        }

        return { question: q, score };
    });

    // Trier par score décroissant et prendre les meilleures
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, count).map(s => s.question);
}

/* ── HOOK PRINCIPAL ── */
export function useQuizEngine(initialStats: UserStats) {
    const [stats, setStats] = useState<UserStats>(initialStats);
    const [session, setSession] = useState<QuizSession | null>(null);
    const [reviewItems, setReviewItems] = useState<Record<number, ReviewItem>>({});

    /* ── LANCER UNE SESSION ── */
    const startSession = useCallback((
        sessionType: QuizSession['sessionType'] = 'free',
        category?: string,
        adaptiveDifficulty: boolean = true
    ) => {
        const questions = selectQuestions(stats, category, MAX_QUESTIONS_PER_SESSION, adaptiveDifficulty);

        if (questions.length === 0) return null;

        const newSession: QuizSession = {
            questions,
            currentIndex: 0,
            score: 0,
            answers: [],
            isFinished: false,
            timeLimitPerQuestion: 25,
            sessionType,
            adaptiveDifficulty,
        };

        setSession(newSession);
        return newSession;
    }, [stats]);

    /* ── VALIDER UNE RÉPONSE ── */
    const validateAnswer = useCallback((
        questionId: number,
        selectedAnswer: string,
        timeSpent: number
    ): { isCorrect: boolean; xpGained: number; newMastery: CategoryMastery | null } => {
        if (!session) return { isCorrect: false, xpGained: 0, newMastery: null };

        const question = session.questions.find(q => q.id === questionId);
        if (!question) return { isCorrect: false, xpGained: 0, newMastery: null };

        const isCorrect = selectedAnswer === question.reponse_correcte;
        const baseXp = isCorrect ? XP_PER_CORRECT : XP_PER_INCORRECT;
        const streakBonus = isCorrect && stats.streak > 0 ? Math.min(stats.streak * XP_STREAK_BONUS, 30) : 0;
        const xpGained = baseXp + streakBonus;

        // Mettre à jour la session
        setSession(prev => {
            if (!prev) return null;
            return {
                ...prev,
                currentIndex: prev.currentIndex + 1,
                score: isCorrect ? prev.score + 1 : prev.score,
                answers: [...prev.answers, { questionId, selectedAnswer, isCorrect, timeSpent }],
                isFinished: prev.currentIndex >= prev.questions.length - 1,
            };
        });

        // Mettre à jour les statistiques de maîtrise
        const category = question.categorie;
        const currentMastery = stats.masteryLevels[category];
        const newTotal = (currentMastery?.totalAnswered || 0) + 1;
        const newCorrect = (currentMastery?.correctCount || 0) + (isCorrect ? 1 : 0);
        const newConsecutive = isCorrect ? (currentMastery?.consecutiveCorrect || 0) + 1 : 0;
        const newProgress = calculateCategoryProgress(newCorrect, newTotal);
        const newLevel = calculateMasteryLevel(newProgress);

        // Points faibles
        const weakPoints = [...(currentMastery?.weakPoints || [])];
        if (!isCorrect && question.tags) {
            question.tags.forEach(tag => {
                if (!weakPoints.includes(tag)) weakPoints.push(tag);
            });
        }

        const newMastery: CategoryMastery = {
            category,
            level: newLevel,
            progress: newProgress,
            totalAnswered: newTotal,
            correctCount: newCorrect,
            lastReviewed: new Date().toISOString(),
            nextReview: null,
            consecutiveCorrect: newConsecutive,
            weakPoints,
        };

        // Mettre à jour le système de révision espacée
        const reviewItem = reviewItems[questionId];
        const { interval, ease, nextReview } = calculateNextReview(
            isCorrect,
            reviewItem?.interval || 0,
            reviewItem?.ease || 2.5,
            reviewItem?.consecutiveCorrect || 0
        );

        setReviewItems(prev => ({
            ...prev,
            [questionId]: {
                questionId,
                lastReviewed: new Date().toISOString(),
                nextReview,
                interval,
                ease,
                consecutiveCorrect: isCorrect ? (prev[questionId]?.consecutiveCorrect || 0) + 1 : 0,
                timesReviewed: (prev[questionId]?.timesReviewed || 0) + 1,
            },
        }));

        // Mettre à jour les stats globales
        setStats(prev => {
            const newStreak = isCorrect ? prev.streak + 1 : 0;
            const totalAnswered = prev.totalAnswered + 1;
            const correctCount = isCorrect ? prev.correctAnswersCount + 1 : prev.correctAnswersCount;
            const averageAccuracy = Math.round((correctCount / totalAnswered) * 100);

            return {
                ...prev,
                xp: prev.xp + xpGained,
                totalXpEarned: prev.totalXpEarned + xpGained,
                totalAnswered,
                correctAnswersCount: correctCount,
                streak: newStreak,
                highestStreak: Math.max(prev.highestStreak, newStreak),
                lastPlayedDate: new Date().toISOString(),
                averageAccuracy,
                masteryLevels: {
                    ...prev.masteryLevels,
                    [category]: newMastery,
                },
            };
        });

        return { isCorrect, xpGained, newMastery };
    }, [session, stats, reviewItems]);

    /* ── TERMINER LA SESSION ── */
    const finishSession = useCallback(() => {
        if (!session) return;

        const isPerfect = session.score === session.questions.length;
        const bonusXp = isPerfect ? XP_PERFECT_BONUS : 0;

        setStats(prev => ({
            ...prev,
            xp: prev.xp + bonusXp,
            totalXpEarned: prev.totalXpEarned + bonusXp,
            completedQuizzesCount: prev.completedQuizzesCount + 1,
        }));

        setSession(prev => prev ? { ...prev, isFinished: true } : null);
    }, [session]);

    /* ── RÉINITIALISER ── */
    const resetSession = useCallback(() => {
        setSession(null);
    }, []);

    /* ── STATISTIQUES DÉRIVÉES ── */
    const derivedStats = useMemo(() => {
        const level = Math.floor(stats.totalXpEarned / 200) + 1;
        const xpInLevel = stats.totalXpEarned % 200;
        const xpToNextLevel = 200 - xpInLevel;

        // Questions à réviser aujourd'hui
        const dueReviews = Object.values(reviewItems).filter((item: ReviewItem) => {
            if (!item.nextReview) return false;
            return new Date(item.nextReview) <= new Date();
        });

        // Catégories recommandées (faible progression)
        const recommendedCategories = (Object.entries(stats.masteryLevels) as [string, CategoryMastery][])
            .filter(([_, m]) => m.progress < 60)
            .sort(([_, a], [__, b]) => a.progress - b.progress)
            .slice(0, 3)
            .map(([cat]) => cat);

        return {
            level,
            xpInLevel,
            xpToNextLevel,
            dueReviews: dueReviews.length,
            recommendedCategories,
            isPerfectSession: session ? session.score === session.questions.length : false,
        };
    }, [stats, reviewItems, session]);

    return {
        stats,
        setStats,
        session,
        startSession,
        validateAnswer,
        finishSession,
        resetSession,
        derivedStats,
        reviewItems,
    };
}
