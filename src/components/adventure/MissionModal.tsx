import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Clock, Sparkles, Trophy, BookOpen, Award } from 'lucide-react';
import { AdventureNode } from '../../types';

interface MissionModalProps {
  node: AdventureNode | null;
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export default function MissionModal({ node, isOpen, onClose, onStart }: MissionModalProps) {
  if (!node) return null;

  const isBoss = node.type === 'boss';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl shadow-[0_-12px_40px_rgba(0,0,0,0.6)] p-7 pb-safe-offset-6 md:max-w-md md:mx-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:rounded-3xl border transition-all duration-300 ${
              isBoss 
                ? 'bg-[#0f1813] border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.12)]' 
                : 'bg-[#0a1e16] border-emerald-500/10'
            }`}
          >
            {/* Glowing top line for Boss */}
            {isBoss && (
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            )}

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>

            <div className="mb-6 mt-2">
              <span className={`inline-block px-3 py-1 border rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-3 ${
                isBoss 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                  : node.type === 'story' 
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' 
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                {isBoss ? '📖 Défi du Gardien' : node.type === 'story' ? '📜 Récit' : '✨ Défi'}
              </span>
              
              <h2 className={`text-2xl font-display font-bold text-white mb-2.5 ${isBoss ? 'text-amber-100' : ''}`}>
                {node.title}
              </h2>
              
              <p className="text-white/60 text-sm leading-relaxed">
                {isBoss 
                  ? "Le Gardien de cette zone demande une concentration absolue. Démontrez votre maîtrise de ces préceptes pour débloquer la suite du voyage spirituel."
                  : node.description}
              </p>
            </div>

            {/* Premium Details Cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-black/35 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">Récompense</span>
                <span className="text-emerald-400 font-bold text-sm">+{node.xpReward} XP</span>
              </div>
              
              {node.type !== 'story' && (
                <div className="bg-black/35 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">Objectif</span>
                  <span className="text-amber-400 font-bold text-sm">{node.requiredAccuracy}% Précision</span>
                </div>
              )}

              {node.emotionalReward && (
                <div className={`col-span-2 rounded-xl p-3.5 border flex items-center gap-3.5 ${
                  isBoss 
                    ? 'bg-gradient-to-r from-amber-500/[0.06] to-amber-700/[0.04] border-amber-500/20 shadow-inner' 
                    : 'bg-gradient-to-r from-emerald-500/[0.04] to-teal-500/[0.04] border-emerald-500/10'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 ${
                    isBoss ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-emerald-500/10'
                  }`}>
                    {node.emotionalReward.icon}
                  </div>
                  <div>
                    <span className={`text-[9px] uppercase font-extrabold tracking-wider ${
                      isBoss ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      Titre Sacré à débloquer
                    </span>
                    <p className="text-white font-bold text-sm leading-tight mt-0.5">{node.emotionalReward.name}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic Button Styles */}
            <button
              onClick={onStart}
              className={`w-full font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] ${
                isBoss 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-[0_4px_24px_rgba(245,158,11,0.25)]' 
                  : 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-black shadow-[0_4px_20px_rgba(16,185,129,0.2)]'
              }`}
            >
              <Play fill="currentColor" className="w-4 h-4" />
              {isBoss ? 'Rencontrer le Gardien' : 'Commencer'}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

