import { motion } from 'motion/react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface HeroSectionProps {
    onStartAdventure: () => void;
    onStartQuiz: () => void;
    level?: number;
    xp?: number;
    xpToNextLevel?: number;
    streak?: number;
}

export default function HeroSection({
    onStartAdventure,
    onStartQuiz,
    level = 1,
    xp = 0,
    xpToNextLevel = 200,
    streak = 0,
}: HeroSectionProps) {
    const xpProgress = Math.min((xp / xpToNextLevel) * 100, 100);

    return (
        <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* ── Background cinématique ── */}
            <div className="absolute inset-0">
                {/* Gradient de base profond */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(ellipse 85% 65% at 50% -10%, rgba(13, 77, 67, 0.2) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(200, 164, 77, 0.1) 0%, transparent 50%),
                            radial-gradient(ellipse 50% 40% at 20% 70%, rgba(45, 138, 110, 0.08) 0%, transparent 50%),
                            linear-gradient(180deg, var(--color-ivory) 0%, rgba(246, 244, 238, 0.98) 100%)
                        `,
                    }}
                />

                {/* Motif islamique subtil */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, var(--color-gold) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, var(--color-gold) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Lueur sacrée respirante */}
                <motion.div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        opacity: [0.03, 0.06, 0.03],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* ── Contenu ── */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="flex flex-col items-center text-center gap-7 md:gap-9">
                    {/* Badge progression */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(13, 77, 67, 0.06)',
                            border: '1px solid rgba(13, 77, 67, 0.1)',
                        }}
                    >
                        <Sparkles size={14} className="text-[var(--color-gold)]" />
                        <span className="text-xs font-semibold text-[var(--color-deep-green)]/70">
                            Niveau {level} · {xp} / {xpToNextLevel} XP
                        </span>
                        {streak > 0 && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 ml-1">
                                <span className="text-amber-500">🔥</span>
                                {streak} jours
                            </span>
                        )}
                    </motion.div>

                    {/* Titre principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                        className="space-y-4 max-w-2xl"
                    >
                        <h1
                            className="font-display font-bold leading-[1.1] tracking-tight"
                            style={{
                                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                                color: 'var(--color-deep-green)',
                            }}
                        >
                            Continue ton
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(135deg, var(--color-gold), var(--color-amber))',
                                }}
                            >
                                Voyage
                            </span>
                        </h1>
                        <p
                            className="text-[var(--color-deep-green)]/60 font-medium leading-relaxed max-w-lg mx-auto"
                            style={{ fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)' }}
                        >
                            Une aventure éducative interactive pour découvrir les sciences islamiques
                            à travers des défis, des quêtes et des récompenses.
                        </p>
                    </motion.div>

                    {/* Barre XP */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full max-w-xs"
                    >
                        <div className="relative h-2 rounded-full overflow-hidden bg-[var(--color-deep-green)]/8">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, var(--color-emerald), var(--color-gold))',
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${xpProgress}%` }}
                                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                            />
                        </div>
                        <p className="text-[10px] font-semibold text-[var(--color-deep-green)]/40 mt-1.5">
                            Prochaine récompense dans {xpToNextLevel - xp} XP
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
                    >
                        <button
                            onClick={onStartAdventure}
                            className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 active:scale-[0.97]"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
                                color: 'white',
                                boxShadow: '0 4px 24px rgba(13, 77, 67, 0.25), 0 0 40px rgba(200, 164, 77, 0.08)',
                            }}
                        >
                            {/* Shimmer hover */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
                                    transform: 'skewX(-20deg)',
                                }}
                            />
                            {/* Glow or chaud diffus */}
                            <div
                                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(200, 164, 77, 0.15) 0%, transparent 70%)',
                                    filter: 'blur(8px)',
                                }}
                            />
                            <BookOpen size={18} className="relative z-10" />
                            <span className="relative z-10">Reprendre l'Aventure</span>
                            <motion.div
                                className="relative z-10"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            >
                                <ArrowRight size={16} />
                            </motion.div>
                        </button>

                        <button
                            onClick={onStartQuiz}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] hover:bg-[var(--color-deep-green)]/10"
                            style={{
                                background: 'rgba(13, 77, 67, 0.06)',
                                color: 'var(--color-deep-green)',
                                border: '1px solid rgba(13, 77, 67, 0.12)',
                            }}
                        >
                            <Sparkles size={16} />
                            <span>Nouveau Quiz</span>
                        </button>
                    </motion.div>

                    {/* Stats rapides */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="flex items-center gap-6 md:gap-8 pt-2"
                    >
                        {[
                            { label: 'Questions', value: '200+' },
                            { label: 'Matières', value: '6' },
                            { label: 'Niveaux', value: '3' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p
                                    className="font-display font-bold"
                                    style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        color: 'var(--color-deep-green)',
                                    }}
                                >
                                    {stat.value}
                                </p>
                                <p
                                    className="text-[10px] font-semibold uppercase tracking-wider"
                                    style={{ color: 'var(--color-deep-green)/50' }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-5 h-8 rounded-full border-2 border-[var(--color-deep-green)]/15 flex items-start justify-center pt-1.5"
                >
                    <div
                        className="w-1 h-2 rounded-full"
                        style={{ background: 'var(--color-deep-green)' }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
