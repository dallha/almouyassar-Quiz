import { motion } from 'motion/react';
import { Star, Lock, BookOpen, Crown, Compass, Droplet } from 'lucide-react';
import { AdventureNode } from '../../types';
import { useLanguage } from '../../LanguageContext';

interface MapNodeProps {
  node: AdventureNode;
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
  index: number;
}

export default function MapNode({ node, isActive, isCompleted, isLocked, onClick, index }: MapNodeProps) {
  const { dir, t } = useLanguage();
  
  // Winding path calculation (flips naturally in RTL to align with Arab reading direction)
  const isLeft = index % 2 === 0;
  const xOffset = (isLeft ? -34 : 34) * (dir === 'rtl' ? -1 : 1);

  // Determine icon & colors based on type
  let icon = <Compass className="w-6 h-6 text-white/50" />;
  let activeColorClass = 'from-emerald-400 to-teal-500';
  let themeGlow = 'rgba(16, 185, 129, 0.2)';

  switch (node.type) {
    case 'story':
      icon = <BookOpen className={`w-6 h-6 ${isLocked ? 'text-white/30' : 'text-cyan-300'}`} />;
      activeColorClass = 'from-cyan-400 to-blue-500';
      themeGlow = 'rgba(6, 182, 212, 0.3)';
      break;
    case 'checkpoint':
      icon = <Droplet className={`w-6 h-6 ${isLocked ? 'text-white/30' : 'text-sky-300'}`} />;
      activeColorClass = 'from-sky-300 to-indigo-400';
      themeGlow = 'rgba(14, 165, 233, 0.3)';
      break;
    case 'boss':
      icon = <Crown className={`w-8 h-8 ${isLocked ? 'text-white/20' : 'text-amber-200'}`} />;
      activeColorClass = 'from-amber-400 via-orange-500 to-yellow-500';
      themeGlow = 'rgba(245, 158, 11, 0.4)';
      break;
    case 'quiz':
    default:
      icon = <Compass className={`w-6 h-6 ${isLocked ? 'text-white/30' : 'text-emerald-300'}`} />;
      activeColorClass = 'from-emerald-400 to-teal-600';
      themeGlow = 'rgba(16, 185, 129, 0.3)';
      break;
  }

  // Completed status has its own proud icon
  if (isCompleted) {
    icon = <Star className="w-6 h-6 text-amber-300 fill-amber-300 animate-pulse-slow" />;
  }

  let bgColor = 'bg-gray-800';
  let borderColor = 'border-transparent';
  let shadow = '';

  if (isCompleted) {
    bgColor = 'bg-[radial-gradient(circle_at_32%_30%,rgba(255,255,255,0.42),rgba(16,185,129,0.92)_42%,rgba(13,148,136,0.92)_100%)]';
    borderColor = 'border-emerald-100/20';
    shadow = 'shadow-[0_0_24px_rgba(16,185,129,0.35)]';
  } else if (isActive) {
    bgColor = `bg-[radial-gradient(circle_at_34%_30%,rgba(255,255,255,0.6),transparent_28%),linear-gradient(145deg,var(--tw-gradient-stops))] ${activeColorClass}`;
    borderColor = 'border-white/25';
    shadow = `shadow-[0_0_38px_${themeGlow}]`;
  } else if (isLocked) {
    bgColor = 'bg-[#0f241c]';
    borderColor = 'border-[#1e3b2e]/45';
    shadow = 'shadow-inner';
  }

  const nodeSize = node.type === 'boss' ? 96 : 74;

  return (
    <div className="relative flex flex-col items-center justify-center my-4 group w-full">
      {/* Active rotating orbital ring */}
      {isActive && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute z-0 rounded-full border border-dashed border-amber-300/35"
          style={{
            width: `${nodeSize + 16}px`,
            height: `${nodeSize + 16}px`,
            transform: `translateX(${xOffset}px)`,
          }}
        />
      )}

      {/* Pulsing aura for important locations */}
      {isActive && node.type === 'boss' && (
        <div
          className="absolute z-0 rounded-full bg-amber-500/10 blur-xl animate-pulse"
          style={{
            width: `${nodeSize + 40}px`,
            height: `${nodeSize + 40}px`,
            transform: `translateX(${xOffset}px)`,
          }}
        />
      )}

      {/* Guardian text badge for boss nodes */}
      {node.type === 'boss' && (
        <div 
          className="absolute z-20 -top-4 pointer-events-none transition-transform duration-300 group-hover:scale-105"
          style={{ transform: `translateX(${xOffset}px)` }}
        >
          <span className={`text-[10px] font-extrabold tracking-widest px-2.5 py-0.5 rounded-full border shadow-md uppercase ${
            isLocked 
              ? 'bg-[#1b3429] border-[#294c3c] text-white/30' 
              : 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-300 text-black'
          }`}>
            {t('adventure.guardian')}
          </span>
        </div>
      )}

      {/* Main Node Button */}
      <motion.button
        whileHover={!isLocked ? { scale: 1.06, y: -2 } : {}}
        whileTap={!isLocked ? { scale: 0.94 } : {}}
        onClick={onClick}
        disabled={isLocked}
        className={`relative z-10 flex items-center justify-center rounded-full border transition-all duration-300 ${bgColor} ${borderColor} ${shadow} ${
          isActive ? 'ring-2 ring-amber-300/25' : ''
        }`}
        style={{
          width: `${nodeSize}px`,
          height: `${nodeSize}px`,
          transform: `translateX(${xOffset}px)`
        }}
      >
        {isLocked ? (
          <Lock className="w-5 h-5 text-[#244c3c]" />
        ) : (
          icon
        )}
      </motion.button>
      
      {/* Refined Tooltip Label (glowing & mobile friendly) */}
      <motion.div 
        initial={{ opacity: 0.85 }}
        whileHover={{ opacity: 1, scale: 1.02 }}
        className="absolute mt-2.5 pointer-events-none"
        style={{
          top: '100%',
          transform: `translateX(${xOffset}px)`,
          zIndex: 20
        }}
      >
        <div className={`px-3 py-1 rounded-xl border whitespace-nowrap text-center shadow-lg transition-all duration-300 ${
          isActive 
            ? 'bg-amber-950/55 backdrop-blur-sm border-amber-500/25 shadow-amber-500/10' 
            : isCompleted 
              ? 'bg-emerald-950/50 backdrop-blur-sm border-emerald-500/12 text-emerald-300' 
              : 'bg-[#05140e]/72 backdrop-blur-sm border-white/5 text-white/45'
        }`}>
          <p className={`font-bold text-xs ${isActive ? 'text-amber-300' : isCompleted ? 'text-emerald-300' : ''}`}>
            {t(`adventure.nodes.${node.id.replace(/-/g, '_')}.title`, node.title)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
