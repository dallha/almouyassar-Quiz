import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { StoryDialogue as StoryDialogueType } from '../../types';
import { playCheckpointSound } from '../SoundEngine';
import { useLanguage } from '../../LanguageContext';

interface StoryDialogueProps {
  dialogues: StoryDialogueType[];
  onComplete: () => void;
  isCheckpoint?: boolean;
  nodeId?: string;
  type?: 'pre' | 'post';
}

export default function StoryDialogue({ dialogues, onComplete, isCheckpoint = false, nodeId, type = 'pre' }: StoryDialogueProps) {
  const { t, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentDialogue = dialogues[currentIndex];
  
  // Resolve translated narrative text
  const dialogueKey = nodeId ? `adventure.dialogues.${nodeId.replace(/-/g, '_')}.${type}_${currentIndex}` : '';
  const currentText = dialogueKey ? t(dialogueKey, currentDialogue?.text) : currentDialogue?.text || '';

  // Trigger checkpoint chime
  useEffect(() => {
    if (isCheckpoint) {
      playCheckpointSound();
    }
  }, [isCheckpoint]);

  // Standard typewriter effect for non-checkpoint story dialogs
  useEffect(() => {
    if (!currentText || isCheckpoint) return;

    setIsTyping(true);
    setDisplayedText('');
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < currentText.length) {
        setDisplayedText((prev) => prev + currentText.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 28); // Snappier typewriter speed

    return () => clearInterval(interval);
  }, [currentText, isCheckpoint]);

  const handleNext = () => {
    if (isCheckpoint) {
      onComplete();
      return;
    }
    
    if (isTyping) {
      setDisplayedText(currentText);
      setIsTyping(false);
    } else {
      if (currentIndex < dialogues.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onComplete();
      }
    }
  };

  // Custom Minimalist Checkpoint View (Zen / Serene Respiration)
  if (isCheckpoint) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#071510] via-[#040e0a] to-[#020705] p-6 text-center select-none"
        >
          {/* Ambient subtle warm gold spot */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-amber-500/[0.015] to-transparent pointer-events-none" />

          {/* Serene Glass Water Droplet */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              scale: [1, 1.015, 1]
            }}
            transition={{ 
              duration: 5.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative flex items-center justify-center mb-8 pointer-events-none"
          >
            {/* Outer soft halos */}
            <div className="absolute w-32 h-32 rounded-full bg-cyan-400/[0.02] border border-cyan-400/5 blur-sm" />
            <div className="absolute w-20 h-20 rounded-full bg-amber-400/[0.01] border border-amber-400/5 blur-md" />
            
            {/* Glowing droplet shape */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-cyan-400/15 to-teal-600/10 border border-cyan-300/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,211,238,0.12)]">
              <span className="text-3xl filter drop-shadow-[0_2px_6px_rgba(6,182,212,0.25)]">💧</span>
            </div>
          </motion.div>

          {/* Minimal Serene Wording */}
          <div className="max-w-xs mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-lg font-bold font-display tracking-wider leading-relaxed"
            >
              {t('adventure.checkpoint.rest')}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.45, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/80 text-xs mt-3 leading-relaxed font-medium"
            >
              {t('adventure.checkpoint.zamzam')}
            </motion.p>
          </div>

          {/* Slow fading action button */}
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            onClick={onComplete}
            className="px-7 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/20 text-emerald-300 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] shadow-md shadow-emerald-950/10 min-h-[48px]"
          >
            {t('adventure.next_voyage')}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!currentDialogue) return null;

  const getAvatar = (char: string) => {
    switch(char) {
      case 'oustaz': return '👳‍♂️';
      case 'guide': return '🌟';
      default: return '📜';
    }
  };

  const getCharacterName = (char: string) => {
    switch(char) {
      case 'oustaz': return t('adventure.character_oustaz', 'Oustaz');
      case 'guide': return t('adventure.character_guide', 'Guide Spirituel');
      default: return t('adventure.character_story', 'Récit');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm p-4 sm:p-8"
        onClick={handleNext}
      >
        {/* Character Avatar */}
        <motion.div 
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative max-w-2xl mx-auto w-full flex justify-center mb-4 pointer-events-none"
        >
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#0d4d43] to-[#052b24] border-[3px] border-amber-500/20 flex items-center justify-center text-5xl md:text-7xl shadow-[0_0_40px_rgba(200,164,77,0.15)]">
            {getAvatar(currentDialogue.character)}
          </div>
        </motion.div>

        {/* Dialogue Box */}
        <motion.div 
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="relative max-w-2xl mx-auto w-full bg-[#05140e] border border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          <div className={`absolute -top-3.5 ${dir === 'rtl' ? 'right-6' : 'left-6'} bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold px-3.5 py-0.5 rounded-full text-xs shadow-lg`}>
            {getCharacterName(currentDialogue.character)}
          </div>

          <p className="text-white/85 text-base md:text-lg font-medium leading-relaxed mt-2 min-h-[70px]">
            {displayedText}
          </p>

          <div className="flex justify-end mt-4">
            <button 
              className={`flex items-center gap-1 text-amber-500 text-xs font-bold uppercase tracking-wider transition-opacity ${!isTyping ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
            >
              {t('common.continue')} {dir === 'rtl' ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

