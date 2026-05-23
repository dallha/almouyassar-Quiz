import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Compass, BookOpen, Sparkles, Bot, Award, Settings,
    ChevronLeft, ChevronRight
} from 'lucide-react';

interface GameMode {
    id: string;
    label: string;
    icon: typeof Compass;
    description: string;
    badge?: string;
    isLocked?: boolean;
    isNew?: boolean;
}

interface GameModeNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    isOustazBlocked?: boolean;
}

const gameModes: GameMode[] = [
    {
        id: 'pitch',
        label: 'Présentation',
        icon: Compass,
        description: 'Découvre Al-Mouyassar',
    },
    {
        id: 'adventure',
        label: 'Aventure',
        icon: BookOpen,
        description: 'Mode histoire',
        badge: 'POPULAIRE',
    },
    {
        id: 'quiz',
        label: 'Quiz Libre',
        icon: Sparkles,
        description: 'Défis rapides',
    },
    {
        id: 'oustaz',
        label: 'Oustaz AI',
        icon: Bot,
        description: 'Ton guide virtuel',
        isLocked: false,
    },
    {
        id: 'ansar',
        label: 'Karaoké',
        icon: Award,
        description: 'Voix des Ansar',
        isNew: true,
    },
    {
        id: 'stats',
        label: 'Trophées',
        icon: Award,
        description: 'Tes exploits',
    },
    {
        id: 'parental',
        label: 'Parents',
        icon: Settings,
        description: 'Espace famille',
    },
];

export default function GameModeNav({ activeTab, onTabChange, isOustazBlocked }: GameModeNavProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 4);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    };

    useEffect(() => {
        checkScroll();
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', checkScroll, { passive: true });
            return () => ref.removeEventListener('scroll', checkScroll);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = 200;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative">
            {/* Boutons scroll (desktop only) */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--color-deep-green)]/10 shadow-soft hover:bg-white transition-all"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={16} className="text-[var(--color-deep-green)]/60" />
                </button>
            )}
            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--color-deep-green)]/10 shadow-soft hover:bg-white transition-all"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={16} className="text-[var(--color-deep-green)]/60" />
                </button>
            )}

            {/* Navigation scrollable */}
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {gameModes.map((mode) => {
                    const Icon = mode.icon;
                    const isActive = activeTab === mode.id;
                    const isDisabled = mode.id === 'oustaz' && isOustazBlocked;

                    return (
                        <button
                            key={mode.id}
                            onClick={() => !isDisabled && onTabChange(mode.id)}
                            disabled={isDisabled}
                            className="relative snap-start shrink-0 flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl transition-all duration-200"
                            style={{
                                minWidth: '80px',
                                minHeight: 'var(--touch-min)',
                                background: isActive
                                    ? 'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))'
                                    : 'rgba(13, 77, 67, 0.04)',
                                border: isActive
                                    ? '1px solid rgba(200, 164, 77, 0.2)'
                                    : '1px solid rgba(13, 77, 67, 0.08)',
                                opacity: isDisabled ? 0.4 : 1,
                                cursor: isDisabled ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {/* Glow actif */}
                            {isActive && (
                                <motion.div
                                    layoutId="game-mode-glow"
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background:
                                            'radial-gradient(ellipse at center, rgba(200, 164, 77, 0.12) 0%, transparent 70%)',
                                    }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}

                            {/* Badge "NEW" ou "POPULAIRE" */}
                            {(mode.isNew || mode.badge) && (
                                <span
                                    className="absolute -top-1.5 right-1.5 px-1.5 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider"
                                    style={{
                                        background: mode.isNew ? 'var(--color-gold)' : 'var(--color-emerald)',
                                        color: mode.isNew ? 'var(--color-deep-green)' : 'white',
                                    }}
                                >
                                    {mode.isNew ? 'NOUVEAU' : mode.badge}
                                </span>
                            )}

                            {/* Icône */}
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    y: isActive ? -1 : 0,
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                <Icon
                                    size={20}
                                    className={isActive ? 'text-white' : 'text-[var(--color-deep-green)]/60'}
                                    strokeWidth={isActive ? 2.5 : 1.8}
                                />
                            </motion.div>

                            {/* Label */}
                            <span
                                className="text-[11px] font-semibold whitespace-nowrap leading-tight"
                                style={{
                                    color: isActive ? 'white' : 'var(--color-deep-green)/70',
                                }}
                            >
                                {mode.label}
                            </span>

                            {/* Description (cachée sur mobile) */}
                            <span
                                className="hidden md:block text-[9px] font-medium"
                                style={{
                                    color: isActive ? 'rgba(255,255,255,0.6)' : 'var(--color-deep-green)/40',
                                }}
                            >
                                {mode.description}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
