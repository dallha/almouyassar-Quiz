/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, X, HelpCircle, ArrowRight, Clock, Award, BookOpen, Volume2, ShieldQuestion 
} from 'lucide-react';
import { Question, getLocalizedQuestion } from '../types';
import { useLanguage } from '../LanguageContext';
import { playSuccessSound, playErrorSound, playTickSound, playSelectSound } from './SoundEngine';

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswerValidated: (selectedAnswer: string, isCorrect: boolean, timeSpent: number) => void;
  timerActive: boolean;
  timerLimit: number;
}

export default function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswerValidated,
  timerActive,
  timerLimit
}: QuizCardProps) {
  const { language, t } = useLanguage();
  const q = getLocalizedQuestion(question, language);

  interface OptionParticle {
    id: number;
    x: number;
    y: number;
    color: string;
    shape: string;
    scale: number;
    angle: number;
    speed: number;
  }

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerLimit);
  const [timeSpent, setTimeSpent] = useState(0);
  const [particles, setParticles] = useState<OptionParticle[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset states for every new question
  useEffect(() => {
    setSelectedOption(null);
    setIsValidated(false);
    setTimeLeft(timerLimit);
    setTimeSpent(0);
    setParticles([]);
  }, [question, timerLimit]);

  // Handle Timer Countdown
  useEffect(() => {
    if (isValidated) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (!timerActive) {
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // Timer ran out! Automatically validate with blank/wrong answer
          handleAutoValidation();
          return 0;
        }
        // Play soft subtle tick sound on the last 5 seconds to prompt promptness
        if (prev <= 6) {
          playTickSound();
        }
        setTimeSpent((ts) => ts + 1);
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question, isValidated, timerActive]);

  const handleAutoValidation = () => {
    setSelectedOption(null);
    setIsValidated(true);
    playErrorSound();
    onAnswerValidated("", false, timerLimit);
  };

  const handleOptionSelect = (option: string) => {
    if (isValidated) return;
    playSelectSound();
    setSelectedOption(option);
  };

  const triggerBurstEffect = () => {
    const shapes = ['★', '✦', '✧', '●', '◆', '✨'];
    const colors = ['#D0A21C', '#388E3C', '#2196F3', '#FFEB3B', '#4CAF50', '#00E676'];
    const newParticles: OptionParticle[] = Array.from({ length: 16 }).map((_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      scale: Math.random() * 0.8 + 0.6,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 90 + 50,
    }));
    setParticles(newParticles);
    setTimeout(() => {
      setParticles([]);
    }, 950);
  };

  const handleValidate = () => {
    if (isValidated || !selectedOption) return;

    const isCorrect = selectedOption === q.reponse_correcte;
    setIsValidated(true);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (isCorrect) {
      playSuccessSound();
      triggerBurstEffect();
    } else {
      playErrorSound();
    }

    onAnswerValidated(selectedOption, isCorrect, timeSpent);
  };

  // Assign distinct styles for options depending on validation state
  const getOptionStyle = (option: string) => {
    const isSelected = selectedOption === option;
    const isAnswerCorrect = q.reponse_correcte === option;

    if (!isValidated) {
      if (isSelected) {
        return "btn-3d-amber border-[#D0A21C] bg-[#D0A21C]/15 text-amber-100 ring-2 ring-[#D0A21C]/25 shadow-[0_4px_12px_rgba(208,162,28,0.2)]";
      }
      return "btn-3d-slate border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60 hover:text-white";
    }

    // After validation:
    if (isAnswerCorrect) {
      return "btn-3d-emerald border-emerald-500 bg-emerald-500/25 text-emerald-100 font-extrabold ring-2 ring-emerald-500/30 shadow-[0_4px_12px_rgba(16,185,129,0.25)]";
    }
    if (isSelected && !isAnswerCorrect) {
      return "btn-3d-rose border-rose-500 bg-rose-500/25 text-rose-100 ring-2 ring-rose-500/30 line-through";
    }
    return "border-slate-900 bg-slate-950/40 text-slate-500 opacity-60";
  };

  // Difficulty badge colors
  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 'Intermédiaire':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'Avancé':
        return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
    }
  };

  // Category badge colors
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Fiqh':
        return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
      case 'Aqidah':
        return 'bg-violet-500/10 text-violet-400 border border-violet-500/20';
      case 'Sirah':
        return 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
      case 'Coran':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 'Akhlaq':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case "Institut Al-Mouyassar":
        return 'bg-teal-500/10 text-teal-300 border border-teal-500/20';
      default:
        return 'bg-slate-800 text-slate-350';
    }
  };

  return (
    <motion.div
      key={q.id}
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl relative"
    >
      {/* Micro-Explosion de Particules Étoilées */}
      {particles.map((p) => {
        const xDir = Math.cos(p.angle) * p.speed;
        const yDir = Math.sin(p.angle) * p.speed;
        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [1, 1, 0], 
              scale: [0, p.scale, p.scale * 1.5, 0],
              x: xDir,
              y: yDir,
              rotate: Math.random() * 360
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-base font-bold select-none pointer-events-none z-50 left-1/2 top-1/3"
            style={{ color: p.color }}
          >
            {p.shape}
          </motion.div>
        );
      })}
      {/* Upper header section showing category, difficulty and general progress metrics */}
      <div className="p-4 sm:p-5 border-b border-slate-850 flex items-center justify-between gap-4 flex-wrap bg-slate-950/40">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${getCategoryBadgeClass(q.categorie)}`}>
            {t(q.categorie)}
          </span>
          <span className={`text-xs font-bold px-2.5 py-1.5 rounded-full ${getLevelBadgeClass(q.niveau)} flex items-center gap-1.5`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              q.niveau === 'Débutant' ? 'bg-emerald-450 animate-pulse' :
              q.niveau === 'Intermédiaire' ? 'bg-amber-400' : 'bg-rose-400'
            }`} />
            {t(q.niveau)}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress Indicator */}
          <span className="text-xs text-slate-400 font-bold font-mono">
            {currentIndex + 1} <span className="text-slate-600">/</span> {totalQuestions}
          </span>

          {/* Timer Clock */}
          {timerActive && (
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border font-mono text-xs font-black ${
              timeLeft <= 5 
                ? 'bg-rose-500/15 text-rose-400 border-rose-500/30 animate-pulse' 
                : 'bg-slate-900 text-slate-300 border-slate-800'
            }`}>
              <Clock className={`w-3.5 h-3.5 ${timeLeft <= 5 ? 'text-rose-400 animate-bounce' : 'text-slate-400'}`} />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </div>

      {/* Question Card Content Area */}
      <div className="p-5 sm:p-6 space-y-6">
        {/* Beautiful Interactive Question Display */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed">
            {q.question}
          </h3>
        </div>

        {/* Options List */}
        <div className="grid gap-3">
          {q.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = q.reponse_correcte === option;

            // Determine rich dynamic animations
            let animateObj = {};
            if (isValidated) {
              if (isCorrect) {
                // Gentle positive bob/bounce
                animateObj = {
                  scale: [1, 1.03, 0.98, 1.01, 1],
                  y: [0, -4, 2, -1, 0],
                  transition: { duration: 0.5, ease: "easeInOut" }
                };
              } else if (isSelected) {
                // Dynamic horizontal shake for errors
                animateObj = {
                  x: [0, -6, 6, -6, 6, -3, 3, 0],
                  transition: { duration: 0.5, ease: "easeInOut" }
                };
              }
            } else if (isSelected) {
              animateObj = {
                scale: 1.01,
                transition: { duration: 0.15 }
              };
            }

            return (
              <motion.button
                key={option}
                onClick={() => handleOptionSelect(option)}
                disabled={isValidated}
                whileHover={!isValidated ? { 
                  scale: 1.012, 
                  x: 4,
                  boxShadow: isSelected 
                    ? "0 4px 20px rgba(208,162,28,0.18)" 
                    : "0 4px 12px rgba(0,0,0,0.25)"
                } : {}}
                whileTap={!isValidated ? { scale: 0.992 } : {}}
                animate={animateObj}
                className={`relative w-full text-left p-4 rounded-xl border font-sans text-sm font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer ${getOptionStyle(option)}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center border transition-all duration-300 ${
                    isSelected && !isValidated
                      ? "bg-[#D0A21C]/20 text-[#D0A21C] border-[#D0A21C]/40" 
                      : isValidated && isCorrect
                        ? "bg-emerald-500/25 text-emerald-450 border-emerald-500/45"
                        : isSelected && isValidated && !isCorrect
                          ? "bg-rose-500/25 text-rose-450 border-rose-500/45"
                          : "bg-slate-930 text-slate-400 border-slate-800"
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>

                {/* Status Indicator inside Option button */}
                {isValidated && (
                  <div>
                    {isCorrect && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      </motion.div>
                    )}
                    {isSelected && !isCorrect && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <X className="w-5 h-5 text-rose-400 shrink-0" />
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Action button bar or explanatory container */}
        <div className="flex justify-end pt-4 border-t border-slate-850">
          {!isValidated ? (
            <button
              onClick={handleValidate}
              disabled={!selectedOption}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                selectedOption 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/30 hover:shadow-emerald-950/40 hover:-translate-y-0.5' 
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-750'
              }`}
            >
              <span>{t('validate_answer', 'Valider la réponse')}</span>
              <BookOpen className="w-4 h-4" />
            </button>
          ) : null}
        </div>

        {/* Detailed Explanation Panel which appears once answer is validated */}
        <AnimatePresence>
          {isValidated && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 overflow-hidden space-y-2 text-slate-300"
            >
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldQuestion className="w-4 h-4 shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider font-mono">{t('islamic_explanation', 'Explication Islamique')}</span>
              </div>
              <p className="text-sm font-medium leading-relaxed italic border-l-2 border-amber-400/40 pl-3">
                &ldquo;{q.explication}&rdquo;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
