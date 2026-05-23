import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';
import { Sparkles, Clock, Check, X, ChevronRight, Star, Zap, Trophy, RotateCcw } from 'lucide-react';

/* ── PROPS ── */
interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timeLimit: number;
  onAnswer: (selected: string, timeSpent: number) => void;
  streak?: number;
  xpMultiplier?: number;
}

/* ── ANIMATIONS ── */
const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  exit: { opacity: 0, y: -30, scale: 0.96, transition: { duration: 0.2 } },
};

const optionVariants = {
  initial: { opacity: 0, x: -20 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, type: 'spring', stiffness: 100, damping: 15 },
  }),
  hover: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  tap: { scale: 0.98 },
};

/* ── COMPOSANT PRINCIPAL ── */
export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  timeLimit,
  onAnswer,
  streak = 0,
  xpMultiplier = 1,
}: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTime = useRef(Date.now());

  /* ── TIMER ── */
  useEffect(() => {
    setTimeLeft(timeLimit);
    setSelected(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setHasAnswered(false);
    startTime.current = Date.now();

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, timeLimit]);

  /* ── TEMPS ÉCOULÉ → AUTO-SUBMIT ── */
  useEffect(() => {
    if (timeLeft === 0 && !hasAnswered) {
      handleAnswer('');
    }
  }, [timeLeft]);

  /* ── GESTION RÉPONSE ── */
  const handleAnswer = useCallback((answer: string) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const correct = answer === question.reponse_correcte;
    setIsCorrect(correct);
    setSelected(answer);
    setShowFeedback(true);

    const timeSpent = Math.round((Date.now() - startTime.current) / 1000);

    setTimeout(() => {
      onAnswer(answer, timeSpent);
    }, correct ? 1200 : 2000);
  }, [hasAnswered, question.reponse_correcte, onAnswer]);

  /* ── PROGRESS BAR ── */
  const progressPercent = ((questionNumber) / totalQuestions) * 100;
  const timePercent = (timeLeft / timeLimit) * 100;

  /* ── XP ESTIMÉ ── */
  const baseXp = 15;
  const streakBonus = Math.min(streak * 5, 30);
  const totalXp = Math.round((baseXp + streakBonus) * xpMultiplier);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-full max-w-2xl mx-auto"
      >
        {/* ── CARTE PRINCIPALE ── */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
          {/* Effet de glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* ── HEADER ── */}
          <div className="relative px-5 pt-5 pb-3">
            {/* Progress + Timer */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Question {questionNumber}/{totalQuestions}
                </span>
                {streak > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full"
                  >
                    <Zap className="w-3 h-3" />
                    x{streak}
                  </motion.span>
                )}
              </div>

              {/* Timer */}
              <motion.div
                animate={{ scale: timeLeft <= 5 ? [1, 1.1, 1] : 1 }}
                transition={{ repeat: timeLeft <= 5 ? Infinity : 0, duration: 0.5 }}
                className={`flex items-center gap-1.5 text-sm font-bold ${timeLeft <= 5 ? 'text-red-500' : 'text-emerald-600'
                  }`}
              >
                <Clock className="w-4 h-4" />
                {timeLeft}s
              </motion.div>
            </div>

            {/* Barre de progression */}
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Timer bar */}
            <div className="h-0.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
              <motion.div
                className={`h-full rounded-full transition-colors duration-300 ${timeLeft <= 5 ? 'bg-red-400' : 'bg-amber-400'
                  }`}
                initial={{ width: '100%' }}
                animate={{ width: `${timePercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* ── CATÉGORIE + XP ── */}
          <div className="px-5 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              {question.categorie} · {question.niveau}
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-600">
              <Star className="w-3 h-3" />
              +{totalXp} XP
            </div>
          </div>

          {/* ── QUESTION ── */}
          <div className="px-5 py-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">
              {question.question}
            </h3>
          </div>

          {/* ── OPTIONS ── */}
          <div className="px-5 pb-5 space-y-2.5">
            {question.options.map((option, index) => {
              const isSelected = selected === option;
              const isCorrectOption = option === question.reponse_correcte;
              const showResult = showFeedback && (isSelected || isCorrectOption);

              let optionStyle = 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50';
              let textStyle = 'text-gray-700';

              if (showResult) {
                if (isCorrectOption) {
                  optionStyle = 'border-emerald-400 bg-emerald-50 shadow-lg shadow-emerald-200/30';
                  textStyle = 'text-emerald-700';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle = 'border-red-300 bg-red-50 shadow-lg shadow-red-200/20';
                  textStyle = 'text-red-600';
                }
              }

              return (
                <motion.button
                  key={index}
                  custom={index}
                  variants={optionVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={!hasAnswered ? 'hover' : undefined}
                  whileTap={!hasAnswered ? 'tap' : undefined}
                  onClick={() => !hasAnswered && handleAnswer(option)}
                  disabled={hasAnswered}
                  className={`relative w-full text-left p-3.5 md:p-4 rounded-xl border-2 transition-all duration-200 ${optionStyle} ${hasAnswered ? 'cursor-default' : 'cursor-pointer'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Lettre */}
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${showResult && isCorrectOption
                      ? 'bg-emerald-500 text-white'
                      : showResult && isSelected && !isCorrectOption
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                      }`}>
                      {String.fromCharCode(65 + index)}
                    </span>

                    {/* Texte */}
                    <span className={`text-sm md:text-base font-medium flex-1 ${textStyle}`}>
                      {option}
                    </span>

                    {/* Icône */}
                    {showResult && isCorrectOption && (
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Check className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <X className="w-5 h-5 text-red-500" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── FEEDBACK ── */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className={`px-5 pb-5 ${isCorrect ? '' : ''}`}>
                  <div className={`p-4 rounded-xl border ${isCorrect
                    ? 'bg-emerald-50/80 border-emerald-200'
                    : 'bg-red-50/80 border-red-200'
                    }`}>
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                        }`}>
                        {isCorrect ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <X className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold mb-1 ${isCorrect ? 'text-emerald-700' : 'text-red-700'
                          }`}>
                          {isCorrect ? '✅ Bravo !' : '❌ Pas tout à fait...'}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {question.explication}
                        </p>
                        {!isCorrect && (
                          <p className="text-xs text-gray-400 mt-2">
                            La bonne réponse était : <span className="font-semibold text-emerald-600">{question.reponse_correcte}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* XP Gagné */}
                    {isCorrect && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg w-fit"
                      >
                        <Sparkles className="w-4 h-4" />
                        +{totalXp} XP
                        {streak > 0 && (
                          <span className="text-xs text-amber-400">(x{streak + 1} streak)</span>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── ÉCRAN DE RÉSULTATS ── */
interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  xpEarned: number;
  streak: number;
  onRetry: () => void;
  onContinue: () => void;
}

export function ResultsScreen({
  score,
  totalQuestions,
  xpEarned,
  streak,
  onRetry,
  onContinue,
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPerfect = score === totalQuestions;
  const isGood = percentage >= 70;

  let grade: { label: string; emoji: string; color: string; message: string };
  if (isPerfect) {
    grade = {
      label: 'Parfait !',
      emoji: '🏆',
      color: 'from-amber-400 to-yellow-500',
      message: 'Tu es un véritable expert ! Une maîtrise totale impressionnante.',
    };
  } else if (isGood) {
    grade = {
      label: 'Excellent !',
      emoji: '🌟',
      color: 'from-emerald-400 to-teal-500',
      message: 'Continue comme ça, tu progresses à grands pas !',
    };
  } else if (percentage >= 50) {
    grade = {
      label: 'Pas mal !',
      emoji: '💪',
      color: 'from-blue-400 to-indigo-500',
      message: 'Encore un peu d\'effort et tu seras au top !',
    };
  } else {
    grade = {
      label: 'Continue...',
      emoji: '📚',
      color: 'from-gray-400 to-slate-500',
      message: 'Chaque erreur est une chance d\'apprendre. Réessaie !',
    };
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden p-6 md:p-8">
        {/* Glow */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${grade.color} opacity-10 rounded-full blur-3xl pointer-events-none`} />

        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="text-5xl mb-3"
          >
            {grade.emoji}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{grade.label}</h2>
          <p className="text-sm text-gray-500">{grade.message}</p>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="8"
              />
              <motion.circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="url(#scoreGradient-results)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 54}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 54 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 54 * (1 - percentage / 100) }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="scoreGradient-results" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {percentage}%
                </motion.span>
                <p className="text-xs text-gray-400">{score}/{totalQuestions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-400 mb-0.5">XP Gagné</p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="text-lg font-bold text-amber-600"
            >
              +{xpEarned}
            </motion.p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-400 mb-0.5">Streak</p>
            <p className="text-lg font-bold text-emerald-600">{streak} 🔥</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            Continuer l'aventure
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="w-full py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
