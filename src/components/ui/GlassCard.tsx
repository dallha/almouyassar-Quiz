import { motion } from 'motion/react';
import { type ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'light' | 'dark' | 'gold';
    hover?: boolean;
    glow?: boolean;
    padding?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

const variantStyles = {
    light: 'bg-white/60 backdrop-blur-xl border border-white/20 shadow-soft',
    dark: 'bg-[#0F1A18]/60 backdrop-blur-xl border border-[#C8A44D]/10 shadow-soft',
    gold: 'bg-[#C8A44D]/8 backdrop-blur-xl border border-[#C8A44D]/20 shadow-soft',
};

const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

export default function GlassCard({
    children,
    className = '',
    variant = 'light',
    hover = true,
    glow = false,
    padding = 'md',
    onClick,
}: GlassCardProps) {
    return (
        <motion.div
            onClick={onClick}
            className={`
        relative rounded-2xl overflow-hidden
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hover ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5' : ''}
        ${glow ? 'animate-glow-pulse' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
            whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
        >
            {/* Inner shadow overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-inner-soft rounded-2xl" />

            {/* Content */}
            <div className="relative z-[1]">
                {children}
            </div>
        </motion.div>
    );
}
