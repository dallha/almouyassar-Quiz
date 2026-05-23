import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AdventureNode, Question } from '../../types';
import QuizCard from '../QuizCard';
import { Trophy, ArrowRight, Sparkles, AlertCircle, Heart, Shield } from 'lucide-react';
import { QUESTIONS } from '../../data';

interface AdventureSessionProps {
  node: AdventureNode;
  onComplete: (success: boolean, xpEarned: number) => void;
  onClose: () => void;
}

export default function AdventureSession({ node, onComplete, onClose }: AdventureSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Guardian Duel States
  const isBoss = node.type === 'boss';
  const [playerHearts, setPlayerHearts] = useState(3);
  const [shakeScreen, setShakeScreen] = useState(false);

  // Filter questions based on node criteria
  const sessionQuestions = useMemo(() => {
    let filtered = [...QUESTIONS];
    if (node.categoryFilter) {
      filtered = filtered.filter(q => q.categorie === node.categoryFilter);
    }
    // Pick 3 random questions for the duel/session
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [node]);

  // Calculate damage to Boss per correct answer
  const damagePerQuestion = Math.ceil(100 / sessionQuestions.length);
  const bossHp = Math.max(0, 100 - (score * damagePerQuestion));

  const handleAnswer = (answer: string, _timeSpent: number) => {
    const currentQuestion = sessionQuestions[currentIndex];
    const isCorrect = answer === currentQuestion.reponse_correcte;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      if (isBoss) {
        setPlayerHearts(prev => {
          const next = Math.max(0, prev - 1);
          if (next === 0) {
            // Out of hearts, trigger immediate duel finish next tick
            setTimeout(() => {
              setIsFinished(true);
            }, 1000);
          }
          return next;
        });
        // Subtle micro-shake
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 400);
      }
    }

    setTimeout(() => {
      if (playerHearts > 0 && currentIndex < sessionQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (playerHearts > 0) {
        setIsFinished(true);
      }
    }, 1600); // Allow time for QuizCard feedback animations
  };

  const handleFinish = () => {
    const accuracy = (score / sessionQuestions.length) * 100;
    const required = node.requiredAccuracy || 50;
    // For boss, success means surviving with hearts and getting passing score
    const success = isBoss ? playerHearts > 0 && accuracy >= required : accuracy >= required;
    onComplete(success, success ? node.xpReward : 0);
  };

  if (isFinished) {
    const accuracy = Math.round((score / sessionQuestions.length) * 100);
    const required = node.requiredAccuracy || 50;
    const success = isBoss ? playerHearts > 0 && accuracy >= required : accuracy >= required;

    return (
      <div className="fixed inset-0 z-50 bg-[#05100b] flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`max-w-md w-full rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden border ${
            success 
              ? 'bg-[#0a1e14] border-emerald-500/20 shadow-emerald-950/40' 
              : 'bg-[#140b0b] border-red-500/10 shadow-red-950/20'
          }`}
        >
          {success && <div className="absolute inset-0 bg-emerald-500/[0.03] blur-3xl rounded-full" />}
          {!success && <div className="absolute inset-0 bg-red-500/[0.02] blur-3xl rounded-full" />}
          
          <div className="relative z-10">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-md border transition-transform duration-500 hover:scale-105 ${
              success 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-300/30' 
                : 'bg-gradient-to-br from-red-600 to-orange-700 border-red-500/20'
            }`}>
              {success ? <Trophy className="w-9 h-9 text-white animate-bounce-slow" /> : <AlertCircle className="w-9 h-9 text-white" />}
            </div>

            <h2 className="text-2xl font-display font-extrabold text-white mb-2 tracking-wide">
              {success 
                ? (isBoss ? 'Épreuve du Gardien validée !' : 'Mission Réussie !') 
                : (isBoss ? 'Le Gardien attend votre retour' : 'Défi non validé')}
            </h2>
            
            <p className="text-white/50 text-sm mb-8 leading-relaxed px-4">
              {success 
                ? `Félicitations, vous avez obtenu ${accuracy}% de précision avec sagesse et persévérance.`
                : isBoss 
                  ? "Vos réponses ont manqué de précision pour cette fois. Prenez le temps de relire et revenez sereinement."
                  : `Vous avez obtenu ${accuracy}% de précision. L'objectif requis était de ${required}%.`}
            </p>

            {success && node.emotionalReward && (
              <div className="bg-[#0f281d] border border-emerald-500/10 rounded-2xl p-4 mb-8 flex items-center gap-4 text-left shadow-inner">
                <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
                  {node.emotionalReward.icon}
                </div>
                <div>
                  <span className="text-[9px] text-emerald-400 uppercase font-extrabold tracking-wider">Titre Sacré Débloqué</span>
                  <p className="text-white font-bold text-sm">{node.emotionalReward.name}</p>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="flex-1 py-4 rounded-xl font-bold text-white/50 bg-white/5 hover:bg-white/10 transition-colors text-sm"
              >
                Retour
              </button>
              <button 
                onClick={handleFinish}
                className={`flex-[2] py-4 rounded-xl font-bold text-black flex items-center justify-center gap-2 text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] ${
                  success
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_4px_16px_rgba(16,185,129,0.25)]'
                    : 'bg-gradient-to-r from-amber-500 to-amber-400 shadow-[0_4px_16px_rgba(245,158,11,0.2)]'
                }`}
              >
                {success ? 'Continuer' : 'Réessayer'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];

  return (
    <div className={`fixed inset-0 z-50 bg-[#040e0a] flex flex-col transition-all duration-300 ${
      shakeScreen ? 'animate-shake-micro' : ''
    }`}>
      {/* ── HIGH-END GUARDIAN DUEL HUD ── */}
      {isBoss && (
        <div className="w-full px-6 pt-safe pb-4 bg-[#05140e] border-b border-white/5 shadow-md flex items-center justify-between">
          {/* Boss Sagesse Bar */}
          <div className="flex items-center gap-3.5 flex-1 max-w-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Shield className="w-4.5 h-4.5 text-amber-400" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-white/80">{node.title}</span>
                <span className="text-[10px] font-extrabold text-amber-400">{bossHp}% sagesse</span>
              </div>
              <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  animate={{ width: `${bossHp}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Player Noble Hearts */}
          <div className="flex items-center gap-1.5 ml-4">
            {Array.from({ length: 3 }).map((_, i) => {
              const active = i < playerHearts;
              return (
                <motion.div
                  key={i}
                  animate={active ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.2 }}
                  className="transition-all duration-300"
                >
                  <Heart className={`w-5 h-5 ${active ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_6px_rgba(244,63,94,0.4)]' : 'text-white/20'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main content body */}
      <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center">
        {currentQuestion ? (
          <QuizCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={sessionQuestions.length}
            timeLimit={node.timeLimit || 25}
            onAnswer={handleAnswer}
            streak={0}
          />
        ) : (
          <div className="text-white/55 font-medium flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
            Chargement de l'épreuve...
          </div>
        )}
      </div>
    </div>
  );
}

