/**
 * QuizCard — Refonte Premium V3
 *
 * Design : gaming éducatif islamique
 * Inspiré de : Duolingo, Riot Games, Linear
 *
 * Points clés :
 * - Randomisation stable des réponses (par session)
 * - Question dominante, centrale, respirante
 * - Timer cercle progressif avec glow urgence
 * - Feedback émotionnel (check, shake, confettis)
 * - Mode focus immersif
 * - Mobile-first (grand spacing, zones tactiles 44px+)
 */

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, getLocalizedQuestion } from '../types';
import { Sparkles, Clock, Check, X, ChevronRight, Star, Zap, Trophy, RotateCcw, Flame } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { playSuccessSound, playErrorSound } from './SoundEngine';

/* ── PROPS ── */
interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  timeLimit: number;
  onAnswer: (selected: string, timeSpent: number) => void;
  streak?: number;
  xpMultiplier?: number;
  isTranslating?: boolean;
}

/* ── ANIMATIONS ── */
const cardVariants = {
  initial: { opacity: 0, y: 60, scale: 0.94, filter: 'blur(4px)' },
  animate: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 22, mass: 0.8 },
  },
  exit: {
    opacity: 0, y: -40, scale: 0.94, filter: 'blur(4px)',
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
};

const optionVariants = {
  initial: { opacity: 0, x: -30, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1, x: 0, scale: 1,
    transition: { delay: 0.08 + i * 0.05, type: 'spring', stiffness: 120, damping: 18 },
  }),
  hover: { scale: 1.015, transition: { type: 'spring', stiffness: 400 } },
  tap: { scale: 0.985 },
};

/* ── CONFETTIS LÉGERS ── */
function MiniConfetti() {
  const particles = Array.from({ length: 16 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 80 + 40;
        const xDir = Math.cos(angle) * speed;
        const yDir = Math.sin(angle) * speed;
        const scale = Math.random() * 0.8 + 0.4;
        const duration = Math.random() * 1.2 + 0.8;
        const colors = ['#C8A44D', '#0D4D43', '#F6F4EE', '#FFD700', '#4CAF50'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shapes = ['✦', '✧', '●', '◆'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, scale: 0, x: '50%', y: '50%' }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, scale, scale * 1.2, 0],
              x: `calc(50% + ${xDir}px)`,
              y: `calc(50% + ${yDir}px)`,
              rotate: Math.random() * 360,
            }}
            transition={{ duration, ease: 'easeOut' }}
            className="absolute text-sm font-bold select-none"
            style={{ color }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── TIMER CERCLE ── */
function CircularTimer({ timeLeft, timeLimit }: { timeLeft: number; timeLimit: number }) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / timeLimit;
  const isUrgent = timeLeft <= 5;

  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      <svg className="w-9 h-9 -rotate-90" viewBox="0 0 40 40">
        {/* Cercle de fond */}
        <circle
          cx="20" cy="20" r={radius}
          fill="none"
          stroke="rgba(13,77,67,0.06)"
          strokeWidth="3"
        />
        {/* Cercle progressif */}
        <motion.circle
          cx="20" cy="20" r={radius}
          fill="none"
          stroke={isUrgent ? '#ef4444' : '#C8A44D'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{
            strokeDashoffset: circumference * (1 - progress),
            stroke: isUrgent ? '#ef4444' : '#C8A44D',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </svg>
      <motion.span
        animate={isUrgent ? { scale: [1, 1.15, 1] } : {}}
        transition={{ repeat: isUrgent ? Infinity : 0, duration: 0.6 }}
        className={`absolute text-[10px] font-bold font-mono ${isUrgent ? 'text-red-500' : 'text-[var(--color-deep-green)]/50'
          }`}
      >
        {timeLeft}
      </motion.span>
      {/* Glow urgence */}
      {isUrgent && (
        <motion.div
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute inset-0 rounded-full bg-red-500/15 blur-sm"
        />
      )}
    </div>
  );
}

/* ── COMPOSANT PRINCIPAL ── */
export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  timeLimit,
  onAnswer,
  streak = 0,
  xpMultiplier = 1,
  isTranslating = false,
}: QuizCardProps) {
  const { dir, language, t } = useLanguage();

  if (isTranslating) {
    let loadingText = "L'Oustaz traduit la question... 🌿";
    if (language === 'ar') {
      loadingText = "جاري تحميل ترجمة السؤال من الأستاذ... 🌿";
    } else if (language === 'wo') {
      loadingText = "Oustaz bi mi ngi firi laaj bi... 🌿";
    }

    return (
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden p-8 flex flex-col items-center justify-center min-h-[380px]">
          {/* Ambient glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Shimmering Sacred Geometry / Symbol */}
          <div className="relative mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-16 h-16 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50/50 flex items-center justify-center text-lg">
                🌙
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md"
            />
          </div>

          {/* Localized Loading Text with Shimmering / Pulsing effect */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg font-bold text-[var(--color-deep-green)] text-center leading-relaxed max-w-md"
            style={{ direction: dir }}
          >
            {loadingText}
          </motion.p>

          {/* Premium Skeleton lines for options */}
          <div className="w-full mt-8 space-y-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div 
                key={idx} 
                className="w-full h-14 rounded-2xl bg-white border border-gray-100 flex items-center px-4 overflow-hidden relative"
              >
                {/* Shimmer Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/40 to-transparent animate-[shimmer_1.8s_infinite]"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                />
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex-shrink-0" />
                <div className="h-4 bg-gray-100/80 rounded-md flex-1 ml-3 max-w-[70%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const localizedQuestion = useMemo(() => getLocalizedQuestion(question, language), [question, language]);
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTime = useRef(Date.now());

  /* ── RANDOMISATION STABLE DES RÉPONSES ── */
  const shuffledOptions = useMemo(() => {
    // Seed simple basé sur l'ID de la question pour stabilité pendant la session
    const seed = String(question.id).split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const options = [...localizedQuestion.options];
    // Mélanger en permutant de manière déterministe
    for (let i = options.length - 1; i > 0; i--) {
      const j = seed % (i + 1);
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }, [localizedQuestion]);

  const currentOptionVariants = useMemo(() => ({
    initial: { opacity: 0, x: dir === 'rtl' ? 30 : -30, scale: 0.95 },
    animate: (i: number) => ({
      opacity: 1, x: 0, scale: 1,
      transition: { delay: 0.08 + i * 0.05, type: 'spring', stiffness: 120, damping: 18 },
    }),
    hover: { scale: 1.015, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.985 },
  }), [dir]);

  /* ── TIMER ── */
  useEffect(() => {
    setTimeLeft(timeLimit);
    setSelected(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setHasAnswered(false);
    setShowConfetti(false);
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
  const handleAnswer = (answer: string) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelected(answer);
    setShowFeedback(true);

    const correct = answer === localizedQuestion.reponse_correcte;
    setIsCorrect(correct);

    // Arrêter le timer
    if (timerRef.current) clearInterval(timerRef.current);

    // Effet sonore
    if (correct) {
      playSuccessSound();
      setShowConfetti(true);
    } else {
      playErrorSound();
    }

    // Retourner le résultat après 1200ms
    const timeSpent = timeLimit - timeLeft;
    setTimeout(() => {
      onAnswer(answer, timeSpent);
    }, 1200);
  };

  const forceTimeout = useCallback(() => {
    if (hasAnswered) return;
    handleAnswer(""); // réponse vide = faux
  }, [hasAnswered, localizedQuestion.reponse_correcte, onAnswer]);

  /* ── XP ESTIMÉ ── */
  const baseXp = 15;
  const streakBonus = Math.min(streak * 5, 30);
  const totalXp = Math.round((baseXp + streakBonus) * xpMultiplier);

  /* ── PROGRESS BAR ── */
  const progressPercent = ((questionNumber) / totalQuestions) * 100;

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
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
          {/* Effet de glow ambiant */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

          {/* Confettis */}
          {showConfetti && <MiniConfetti />}

          {/* ── HEADER COMPACT ── */}
          <div className="relative px-5 pt-4 pb-2">
            <div className="flex items-center justify-between mb-2">
              {/* Question number + Streak */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[var(--color-deep-green)]/40 bg-[var(--color-deep-green)]/5 px-2.5 py-1 rounded-full font-mono">
                  {questionNumber}/{totalQuestions}
                </span>
                {streak > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full"
                  >
                    <Flame className="w-3 h-3" />
                    x{streak}
                  </motion.span>
                )}
              </div>

              {/* Timer circulaire */}
              <CircularTimer timeLeft={timeLeft} timeLimit={timeLimit} />
            </div>

            {/* Barre de progression fine */}
            <div className="h-1 bg-[var(--color-deep-green)]/8 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-deep-green)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* ── CATÉGORIE + XP (discret) ── */}
          <div className="px-5 pt-1 flex items-center justify-between">
            <span className="text-[9px] font-medium text-[var(--color-deep-green)]/30 uppercase tracking-widest font-mono">
              {t(`quiz.cat_${question.categorie.toLowerCase().replace(/[^a-z]/g, '_')}`, question.categorie)} · {t(`quiz.lvl_${question.niveau.toLowerCase().replace(/[^a-z]/g, '_')}`, question.niveau)}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-gold)]/60">
              <Star className="w-3 h-3" />
              +{totalXp} XP
            </div>
          </div>

          {/* ── QUESTION — DOMINANTE, CENTRALE ── */}
          <div className="px-5 py-5 md:py-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-xl md:text-2xl font-bold text-[var(--color-deep-green)] leading-relaxed text-center"
            >
              {localizedQuestion.question}
            </motion.h3>
          </div>

          {/* ── OPTIONS — CARDS INTERACTIVES ── */}
          <div className={`px-5 pb-5 ${dir === 'rtl' ? 'space-y-4 md:space-y-5' : 'space-y-3'}`}>
            {shuffledOptions.map((option, index) => {
              const isSelected = selected === option;
              const isCorrectOption = option === localizedQuestion.reponse_correcte;
              const showResult = showFeedback && (isSelected || isCorrectOption);

              let cardStyle = 'border-[var(--color-deep-green)]/10 bg-white hover:border-[var(--color-gold)]/30 hover:bg-[var(--color-gold)]/[0.02] hover:shadow-lg hover:shadow-[var(--color-gold)]/5';
              let textStyle = 'text-[var(--color-deep-green)]/70';
              let letterStyle = 'bg-[var(--color-deep-green)]/5 text-[var(--color-deep-green)]/40 border border-[var(--color-deep-green)]/10';

              if (showResult) {
                if (isCorrectOption) {
                  cardStyle = 'border-emerald-400/60 bg-emerald-50/80 shadow-lg shadow-emerald-200/30';
                  textStyle = 'text-emerald-700 font-semibold';
                  letterStyle = 'bg-emerald-500 text-white border-emerald-500';
                } else if (isSelected && !isCorrectOption) {
                  cardStyle = 'border-red-300/60 bg-red-50/80 shadow-lg shadow-red-200/20';
                  textStyle = 'text-red-600';
                  letterStyle = 'bg-red-500 text-white border-red-500';
                }
              }

              return (
                <motion.button
                  key={`${question.id}-${index}`}
                  custom={index}
                  variants={currentOptionVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={!hasAnswered ? 'hover' : undefined}
                  whileTap={!hasAnswered ? 'tap' : undefined}
                  onClick={() => !hasAnswered && handleAnswer(option)}
                  disabled={hasAnswered}
                  className={`relative w-full text-start ${dir === 'rtl' ? 'p-5 md:p-6' : 'p-4 md:p-5'} rounded-2xl border transition-all duration-300 ${cardStyle} ${hasAnswered ? 'cursor-default' : 'cursor-pointer'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Lettre stylisée */}
                    <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${letterStyle}`}>
                      {String.fromCharCode(65 + index)}
                    </span>

                    {/* Texte de l'option */}
                    <span className={`text-sm md:text-base font-medium flex-1 ${dir === 'rtl' ? 'leading-relaxed' : 'leading-snug'} transition-all duration-300 ${textStyle}`}>
                      {option}
                    </span>

                    {/* Icône de feedback */}
                    {showResult && isCorrectOption && (
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                      </motion.div>
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                          <X className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Glow subtil au hover */}
                  {!hasAnswered && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/[0.02] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── FEEDBACK ÉMOTIONNEL ── */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className={`p-4 md:p-5 rounded-2xl border ${isCorrect
                      ? 'bg-emerald-50/90 border-emerald-200/60'
                      : 'bg-red-50/90 border-red-200/60'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icône émotionnelle */}
                      <motion.div
                        initial={isCorrect ? { scale: 0, rotate: -180 } : { x: -10 }}
                        animate={isCorrect ? { scale: 1, rotate: 0 } : { x: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                      >
                        {isCorrect ? (
                          <Check className="w-5 h-5 text-white stroke-[3]" />
                        ) : (
                          <X className="w-5 h-5 text-white stroke-[3]" />
                        )}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        {/* Titre encourageant */}
                        <p className={`text-sm font-bold mb-1.5 ${isCorrect ? 'text-emerald-700' : 'text-red-700'
                          }`}>
                          {isCorrect ? t('quiz.correct_banner', '✅ Bravo !') : t('quiz.incorrect_banner', '❌ Pas tout à fait...')}
                        </p>

                        {/* Explication */}
                        <p className="text-sm text-[var(--color-deep-green)]/60 leading-relaxed">
                          {localizedQuestion.explication}
                        </p>

                        {/* Rappel de la bonne réponse si incorrect */}
                        {!isCorrect && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xs text-[var(--color-deep-green)]/40 mt-2 font-medium"
                          >
                            {t('quiz.correct_answer_was', 'La bonne réponse était : ')}{' '}
                            <span className="font-bold text-emerald-600">{localizedQuestion.reponse_correcte}</span>
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* XP Gagné + Streak */}
                    {isCorrect && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50/80 px-3 py-2 rounded-xl border border-amber-200/40 w-fit"
                      >
                        <Sparkles className="w-4 h-4" />
                        +{totalXp} XP
                        {streak > 0 && (
                          <span className="text-xs text-amber-400 font-medium">
                            (x{streak + 1} streak)
                          </span>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
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
  const { t } = useLanguage();
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPerfect = score === totalQuestions;
  const isGood = percentage >= 70;

  let grade: { label: string; emoji: string; color: string; message: string };
  if (isPerfect) {
    grade = {
      label: t('quiz.result_perfect', 'Parfait !'),
      emoji: '🏆',
      color: 'from-amber-400 to-yellow-500',
      message: t('quiz.result_perfect_msg', "Tu es un véritable expert ! Une maîtrise totale impressionnante."),
    };
  } else if (isGood) {
    grade = {
      label: t('quiz.result_excellent', 'Excellent !'),
      emoji: '🌟',
      color: 'from-emerald-400 to-teal-500',
      message: t('quiz.result_excellent_msg', "Continue comme ça, tu progresses à grands pas !"),
    };
  } else if (percentage >= 50) {
    grade = {
      label: t('quiz.result_good', 'Pas mal !'),
      emoji: '💪',
      color: 'from-blue-400 to-indigo-500',
      message: t('quiz.result_good_msg', "Encore un peu d'effort et tu seras au top !"),
    };
  } else {
    grade = {
      label: t('quiz.result_keep_trying', 'Continue...'),
      emoji: '📚',
      color: 'from-gray-400 to-slate-500',
      message: t('quiz.result_keep_trying_msg', "Chaque erreur est une chance d'apprendre. Réessaie !"),
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
            <p className="text-xs text-gray-400 mb-0.5">{t('quiz.result_xp_earned', 'XP Gagné')}</p>
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
            <p className="text-xs text-gray-400 mb-0.5">{t('quiz.result_streak', 'Streak')}</p>
            <p className="text-lg font-bold text-emerald-600">{streak} 🔥</p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Trophy className="w-5 h-5" />
            {t('quiz.result_continue_adventure', "Continuer l'aventure")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="w-full py-3 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            {t('quiz.result_retry', 'Recommencer')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
