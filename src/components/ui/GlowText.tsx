import { type ReactNode } from 'react';

interface GlowTextProps {
    children: ReactNode;
    color?: 'gold' | 'green' | 'white';
    as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
    className?: string;
}

const glowStyles = {
    gold: 'text-[#C8A44D] drop-shadow-[0_0_12px_rgba(200,164,77,0.3)]',
    green: 'text-[#0D4D43] drop-shadow-[0_0_12px_rgba(13,77,67,0.2)]',
    white: 'text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]',
};

export default function GlowText({
    children,
    color = 'gold',
    as: Tag = 'span',
    className = '',
}: GlowTextProps) {
    return (
        <Tag className={`${glowStyles[color]} ${className}`}>
            {children}
        </Tag>
    );
}
