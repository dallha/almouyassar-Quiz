import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { StoryDialogue as StoryDialogueType } from '../../types';

interface StoryDialogueProps {
  dialogues: StoryDialogueType[];
  onComplete: () => void;
}

export default function StoryDialogue({ dialogues, onComplete }: StoryDialogueProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentDialogue = dialogues[currentIndex];

  useEffect(() => {
    if (!currentDialogue) return;

    setIsTyping(true);
    setDisplayedText('');
    let i = 0;
    
    // Typewriter effect
    const interval = setInterval(() => {
      if (i < currentDialogue.text.length) {
        setDisplayedText((prev) => prev + currentDialogue.text.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30); // Vitesse de frappe rapide mais lisible

    return () => clearInterval(interval);
  }, [currentDialogue]);

  const handleNext = () => {
    if (isTyping) {
      // Skip typewriter
      setDisplayedText(currentDialogue.text);
      setIsTyping(false);
    } else {
      if (currentIndex < dialogues.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        onComplete();
      }
    }
  };

  if (!currentDialogue) return null;

  // Character avatars based on currentDialogue.character
  const getAvatar = (char: string) => {
    switch(char) {
      case 'oustaz': return '👳‍♂️';
      case 'guide': return '🌟';
      default: return '📜';
    }
  };

  const getCharacterName = (char: string) => {
    switch(char) {
      case 'oustaz': return 'Oustaz';
      case 'guide': return 'Guide Spirituel';
      default: return 'Récit';
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
        {/* Character Image/Avatar */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative max-w-2xl mx-auto w-full flex justify-center mb-4 pointer-events-none"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#0d4d43] to-[#052b24] border-4 border-amber-500/30 flex items-center justify-center text-6xl md:text-8xl shadow-[0_0_50px_rgba(200,164,77,0.2)]">
            {getAvatar(currentDialogue.character)}
          </div>
        </motion.div>

        {/* Dialogue Box */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-2xl mx-auto w-full bg-[#05140e] border-2 border-white/10 rounded-2xl p-6 shadow-2xl"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          <div className="absolute -top-4 left-6 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
            {getCharacterName(currentDialogue.character)}
          </div>

          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mt-2 min-h-[80px]">
            {displayedText}
          </p>

          <div className="flex justify-end mt-4">
            <button 
              className={`flex items-center gap-1 text-amber-500 text-sm font-bold uppercase tracking-wider transition-opacity ${!isTyping ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
            >
              Continuer <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
