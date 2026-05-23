import { motion } from 'motion/react';
import { GraduationCap, Star, Trophy, Crown, Sparkles } from 'lucide-react';

interface LevelBadgeProps {
    level: number;
    xp: number;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

function getLevelInfo(level: number) {
    if (level <= 2) return {
        title: 'Bourgeon',
        icon: Sparkles,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    };
    if (level <= 5) return {
        title: 'Talibé',
        icon: Star,
        color: 'text-[#C8A44D]',
        bg: 'bg-[#C8A44D]/10',
        border: 'border-[#C8A44D]/20',
    };
    if (level <= 8) return {
        title: 'Hafiz',
        icon: Trophy,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
    };
    if (level <= 12) return {
        title: 'Savant',
        icon: GraduationCap,
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
    };
    return {
        title: 'Alim',
        icon: Crown,
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/20',
    };
}

const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
};

const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
};

export default function LevelBadge({
    level,
    xp,
    size = 'md',
    className = '',
}: LevelBadgeProps) {
    const info = getLevelInfo(level);
    const Icon = info.icon;

    return (
        <motion.div
            className={`
        inline-flex items-center gap-1.5
        font-bold rounded-full
        ${info.bg} ${info.color} ${info.border} border
        ${sizeStyles[size]}
        ${className}
      `}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
            <Icon className={iconSizes[size]} />
            <span>Niv.{level}</span>
            <span className="opacity-60">·</span>
            <span className="opacity-80">{info.title}</span>
        </motion.div>
    );
}
