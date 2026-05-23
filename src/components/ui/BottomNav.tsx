import { motion, AnimatePresence } from 'motion/react';
import { Home, Compass, Sparkles, Bot, User } from 'lucide-react';

interface BottomNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'adventure', label: 'Aventure', icon: Compass },
    { id: 'quiz', label: 'Quiz', icon: Sparkles },
    { id: 'oustaz', label: 'Oustaz', icon: Bot },
    { id: 'profile', label: 'Profil', icon: User },
];

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
        >
            {/* Background avec glassmorphism */}
            <div className="relative">
                {/* Ligne lumineuse supérieure */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />

                <div
                    className="flex items-center justify-around px-2 py-1"
                    style={{
                        height: 'var(--bottom-nav-height)',
                        background: 'rgba(246, 244, 238, 0.85)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                    }}
                >
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className="relative flex flex-col items-center justify-center gap-0.5 transition-colors duration-200"
                                style={{
                                    minWidth: 'var(--touch-min)',
                                    minHeight: 'var(--touch-min)',
                                }}
                                aria-label={item.label}
                            >
                                {/* Glow actif */}
                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-nav-glow"
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background:
                                                'radial-gradient(ellipse at center, rgba(200, 164, 77, 0.15) 0%, transparent 70%)',
                                        }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}

                                {/* Icône */}
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.1 : 1,
                                        y: isActive ? -2 : 0,
                                    }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="relative"
                                >
                                    <Icon
                                        size={22}
                                        className={
                                            isActive
                                                ? 'text-[var(--color-gold)]'
                                                : 'text-[var(--color-deep-green)]/50'
                                        }
                                        strokeWidth={isActive ? 2.5 : 1.8}
                                    />
                                </motion.div>

                                {/* Label */}
                                <span
                                    className={`text-[10px] font-medium leading-none transition-colors duration-200 ${isActive
                                            ? 'text-[var(--color-gold)]'
                                            : 'text-[var(--color-deep-green)]/40'
                                        }`}
                                >
                                    {item.label}
                                </span>

                                {/* Indicateur actif */}
                                {isActive && (
                                    <motion.div
                                        layoutId="bottom-nav-indicator"
                                        className="absolute -top-1 w-6 h-[2px] rounded-full"
                                        style={{ background: 'var(--color-gold)' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
