import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface HeroSectionProps {
    onStartAdventure: () => void;
    onStartQuiz: () => void;
    level?: number;
    xp?: number;
}

export default function HeroSection({
    onStartAdventure,
    onStartQuiz,
    level = 1,
    xp = 0,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* ── Background cinématique ── */}
            <div className="absolute inset-0">
                {/* Gradient de base */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse 80% 60% at 50% -10%, rgba(13, 77, 67, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(200, 164, 77, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 20% 70%, rgba(45, 138, 110, 0.06) 0%, transparent 50%),
              linear-gradient(180deg, var(--color-ivory) 0%, rgba(246, 244, 238, 0.95) 100%)
            `,
                    }}
                />

                {/* Motif islamique subtil */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--color-gold) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, var(--color-gold) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Lueur sacrée */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
                    style={{
                        background:
                            'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            {/* ── Contenu ── */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                    {/* Badge niveau */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                            background: 'rgba(13, 77, 67, 0.06)',
                            border: '1px solid rgba(13, 77, 67, 0.1)',
                        }}
                    >
                        <Sparkles size={14} className="text-[var(--color-gold)]" />
                        <span className="text-xs font-semibold text-[var(--color-deep-green)]/70">
                            Niveau {level} · {xp} XP
                        </span>
                    </motion.div>

                    {/* Titre principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                        className="space-y-3 max-w-2xl"
                    >
                        <h1
                            className="font-display font-bold leading-[1.1] tracking-tight"
                            style={{
                                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                                color: 'var(--color-deep-green)',
                            }}
                        >
                            Apprends l'Islam
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(135deg, var(--color-gold), var(--color-amber))',
                                }}
                            >
                                en jouant
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

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
                    >
                        <button
                            onClick={onStartAdventure}
                            className="group relative w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 active:scale-[0.98]"
                            style={{
                                background:
                                    'linear-gradient(135deg, var(--color-deep-green), var(--color-emerald))',
                                color: 'white',
                                boxShadow: '0 4px 24px rgba(13, 77, 67, 0.25)',
                            }}
                        >
                            {/* Shimmer hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                    transform: 'skewX(-20deg)',
                                }}
                            />
                            <BookOpen size={18} />
                            <span>Commencer l'Aventure</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={onStartQuiz}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: 'rgba(13, 77, 67, 0.06)',
                                color: 'var(--color-deep-green)',
                                border: '1px solid rgba(13, 77, 67, 0.12)',
                            }}
                        >
                            <Sparkles size={16} />
                            <span>Quiz Libre</span>
                        </button>
                    </motion.div>

                    {/* Stats rapides */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex items-center gap-6 md:gap-8 pt-4"
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
                transition={{ delay: 1.2 }}
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
