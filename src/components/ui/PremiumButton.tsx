import { motion } from 'motion/react';
import { type ReactNode } from 'react';

interface PremiumButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'gold' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    glow?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
}

const variantStyles = {
    primary:
        'bg-[#0D4D43] text-white hover:bg-[#0D4D43]/90 border border-[#0D4D43]/20 shadow-soft',
    gold:
        'bg-[#C8A44D] text-[#0A0A0A] hover:bg-[#C8A44D]/90 border border-[#C8A44D]/30 shadow-soft',
    ghost:
        'bg-transparent text-[#0D4D43] hover:bg-[#0D4D43]/5 border border-transparent',
    outline:
        'bg-transparent text-[#0D4D43] hover:bg-[#0D4D43]/5 border border-[#0D4D43]/20',
};

const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-base gap-2.5',
};

export default function PremiumButton({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    glow = false,
    disabled = false,
    onClick,
    className = '',
    type = 'button',
}: PremiumButtonProps) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        relative inline-flex items-center justify-center
        font-semibold rounded-xl
        transition-all duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${glow ? 'shadow-glow-gold' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
            whileHover={disabled ? {} : { scale: 1.02, transition: { duration: 0.15 } }}
            whileTap={disabled ? {} : { scale: 0.98, transition: { duration: 0.1 } }}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
}
