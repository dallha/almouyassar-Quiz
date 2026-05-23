import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface BadgeXPProps {
    xp: number;
    size?: 'sm' | 'md' | 'lg';
    animate?: boolean;
    className?: string;
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

export default function BadgeXP({
    xp,
    size = 'md',
    animate = true,
    className = '',
}: BadgeXPProps) {
    return (
        <motion.span
            className={`
        inline-flex items-center
        font-bold rounded-full
        bg-[#C8A44D]/10 text-[#C8A44D]
        border border-[#C8A44D]/20
        ${sizeStyles[size]}
        ${className}
      `}
            initial={animate ? { scale: 0, opacity: 0 } : undefined}
            animate={animate ? { scale: 1, opacity: 1 } : undefined}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
            <Sparkles className={iconSizes[size]} />
            <span>+{xp} XP</span>
        </motion.span>
    );
}
