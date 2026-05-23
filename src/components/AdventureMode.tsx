import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Lock,
  Star,
  Trophy,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ScrollText,
  Swords,
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import PremiumButton from './ui/PremiumButton';
import BadgeXP from './ui/BadgeXP';

/* ── Types ── */
interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'locked' | 'available' | 'completed';
  progress: number;
  totalLessons: number;
  completedLessons: number;
  xpReward: number;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  type: 'quiz' | 'story' | 'challenge';
  status: 'locked' | 'available' | 'completed';
  xpReward: number;
  duration: string;
}

/* ── Mock Data ── */
const MOCK_CHAPTERS: Chapter[] = [
  {
    id: 'ch-1',
    title: 'Les Piliers de l\'Islam',
    description: 'Découvre les fondements de ta foi',
    icon: '🕌',
    status: 'completed',
    progress: 100,
    totalLessons: 4,
    completedLessons: 4,
    xpReward: 400,
    lessons: [
      { id: 'l1', title: 'La Shahada', type: 'quiz', status: 'completed', xpReward: 100, duration: '5 min' },
      { id: 'l2', title: 'La Prière', type: 'story', status: 'completed', xpReward: 100, duration: '8 min' },
      { id: 'l3', title: 'Le Jeûne', type: 'quiz', status: 'completed', xpReward: 100, duration: '6 min' },
      { id: 'l4', title: 'Le Pèlerinage', type: 'challenge', status: 'completed', xpReward: 100, duration: '10 min' },
    ],
  },
  {
    id: 'ch-2',
    title: 'Les Prophètes',
    description: 'Voyage à travers l\'histoire des messagers',
    icon: '📜',
    status: 'available',
    progress: 50,
    totalLessons: 5,
    completedLessons: 2,
    xpReward: 500,
    lessons: [
      { id: 'l5', title: 'Adam (AS)', type: 'story', status: 'completed', xpReward: 100, duration: '7 min' },
      { id: 'l6', title: 'Noé (AS)', type: 'quiz', status: 'completed', xpReward: 100, duration: '5 min' },
      { id: 'l7', title: 'Abraham (AS)', type: 'quiz', status: 'available', xpReward: 100, duration: '6 min' },
      { id: 'l8', title: 'Moïse (AS)', type: 'challenge', status: 'locked', xpReward: 100, duration: '8 min' },
      { id: 'l9', title: 'Jésus (AS)', type: 'story', status: 'locked', xpReward: 100, duration: '7 min' },
    ],
  },
  {
    id: 'ch-3',
    title: 'Les 99 Noms d\'Allah',
    description: 'Apprends les noms divins et leur signification',
    icon: '✨',
    status: 'locked',
    progress: 0,
    totalLessons: 6,
    completedLessons: 0,
    xpReward: 600,
    lessons: [
      { id: 'l10', title: 'Ar-Rahman', type: 'quiz', status: 'locked', xpReward: 100, duration: '5 min' },
      { id: 'l11', title: 'Ar-Rahim', type: 'quiz', status: 'locked', xpReward: 100, duration: '5 min' },
      { id: 'l12', title: 'Al-Malik', type: 'story', status: 'locked', xpReward: 100, duration: '6 min' },
    ],
  },
  {
    id: 'ch-4',
    title: 'Les Histoires du Coran',
    description: 'Explore les récits inspirants du Livre Sacré',
    icon: '📖',
    status: 'locked',
    progress: 0,
    totalLessons: 5,
    completedLessons: 0,
    xpReward: 500,
    lessons: [],
  },
];

/* ── Helpers ── */
function getStatusIcon(status: string) {
  switch (status) {
    case 'completed': return CheckCircle2;
    case 'available': return BookOpen;
    case 'locked': return Lock;
    default: return Lock;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'completed': return 'text-emerald-500';
    case 'available': return 'text-[#C8A44D]';
    case 'locked': return 'text-gray-300';
    default: return 'text-gray-300';
  }
}

function getLessonTypeIcon(type: string) {
  switch (type) {
    case 'quiz': return '🧠';
    case 'story': return '📖';
    case 'challenge': return '⚡';
    default: return '📝';
  }
}

/* ── Component ── */
export default function AdventureMode() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>('ch-2');
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const activeChapter = MOCK_CHAPTERS.find(c => c.id === selectedChapter);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Swords className="w-5 h-5 text-[#C8A44D]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8A44D]">
              Mode Aventure
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0D4D43] mb-2">
            Parcours d'apprentissage
          </h2>
          <p className="text-gray-500 max-w-xl">
            Progresse à travers les chapitres, débloque des leçons et collectionne des récompenses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Chapter List ── */}
          <div className="lg:col-span-1 space-y-3">
            {MOCK_CHAPTERS.map((chapter, index) => {
              const isSelected = selectedChapter === chapter.id;
              const StatusIcon = getStatusIcon(chapter.status);

              return (
                <motion.button
                  key={chapter.id}
                  onClick={() => chapter.status !== 'locked' && setSelectedChapter(chapter.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`
                    w-full text-left p-4 rounded-xl transition-all duration-200
                    ${isSelected
                      ? 'bg-white shadow-card border border-[#C8A44D]/20'
                      : 'bg-white/50 hover:bg-white hover:shadow-soft border border-transparent'
                    }
                    ${chapter.status === 'locked' ? 'opacity-60' : 'cursor-pointer'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center text-lg
                      ${chapter.status === 'completed' ? 'bg-emerald-50' : ''}
                      ${chapter.status === 'available' ? 'bg-[#C8A44D]/10' : ''}
                      ${chapter.status === 'locked' ? 'bg-gray-100' : ''}
                    `}>
                      {chapter.status === 'locked' ? '🔒' : chapter.icon}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-sm text-[#0D4D43] truncate">
                          {chapter.title}
                        </h3>
                        <StatusIcon className={`w-3.5 h-3.5 shrink-0 ${getStatusColor(chapter.status)}`} />
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {chapter.completedLessons}/{chapter.totalLessons} leçons
                      </p>
                    </div>

                    {/* Progress ring */}
                    <div className="relative w-8 h-8">
                      <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                        <circle
                          cx="16" cy="16" r="14"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <circle
                          cx="16" cy="16" r="14"
                          fill="none"
                          stroke={chapter.status === 'completed' ? '#10b981' : '#C8A44D'}
                          strokeWidth="3"
                          strokeDasharray={`${chapter.progress * 0.88} 88`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#0D4D43]">
                        {chapter.progress}%
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── Chapter Detail ── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeChapter ? (
                <motion.div
                  key={activeChapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard variant="light" padding="lg" className="mb-6">
                    {/* Chapter header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{activeChapter.icon}</span>
                          <h3 className="font-display text-xl font-bold text-[#0D4D43]">
                            {activeChapter.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500">{activeChapter.description}</p>
                      </div>
                      <BadgeXP xp={activeChapter.xpReward} size="md" />
                    </div>

                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500">Progression</span>
                        <span className="text-xs font-bold text-[#0D4D43]">
                          {activeChapter.completedLessons}/{activeChapter.totalLessons}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#C8A44D] to-[#C8A44D]/70 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${activeChapter.progress}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>

                    {/* Lessons list */}
                    <div className="space-y-2">
                      {activeChapter.lessons.map((lesson, index) => {
                        const LessonIcon = getStatusIcon(lesson.status);
                        const isSelected = selectedLesson === lesson.id;

                        return (
                          <motion.button
                            key={lesson.id}
                            onClick={() => lesson.status !== 'locked' && setSelectedLesson(lesson.id)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`
                              w-full flex items-center gap-3 p-3.5 rounded-xl
                              transition-all duration-200
                              ${isSelected
                                ? 'bg-[#0D4D43]/5 border border-[#0D4D43]/10'
                                : 'hover:bg-black/3 border border-transparent'
                              }
                              ${lesson.status === 'locked' ? 'opacity-50' : 'cursor-pointer'}
                            `}
                          >
                            {/* Type icon */}
                            <span className="text-lg">{getLessonTypeIcon(lesson.type)}</span>

                            {/* Info */}
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-[#0D4D43]">
                                  {lesson.title}
                                </span>
                                <LessonIcon className={`w-3.5 h-3.5 ${getStatusColor(lesson.status)}`} />
                              </div>
                              <div className="flex items-center gap-3 mt-0.5">
                                <span className="flex items-center gap-1 text-[11px] text-gray-400">
                                  <Clock className="w-3 h-3" />
                                  {lesson.duration}
                                </span>
                                <span className="text-[11px] font-medium text-[#C8A44D]">
                                  +{lesson.xpReward} XP
                                </span>
                              </div>
                            </div>

                            {/* Action */}
                            {lesson.status === 'available' && (
                              <ChevronRight className="w-4 h-4 text-gray-300" />
                            )}
                            {lesson.status === 'completed' && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Empty state */}
                    {activeChapter.lessons.length === 0 && (
                      <div className="text-center py-8">
                        <ScrollText className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                        <p className="text-sm text-gray-400">Leçons à venir...</p>
                      </div>
                    )}
                  </GlassCard>

                  {/* Continue CTA */}
                  {activeChapter.status === 'available' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <PremiumButton
                        variant="gold"
                        size="lg"
                        glow
                        icon={<Sparkles className="w-4 h-4" />}
                        className="w-full"
                      >
                        Continuer l'aventure
                      </PremiumButton>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <Trophy className="w-16 h-16 text-gray-200 mb-4" />
                  <h3 className="font-display text-lg font-semibold text-gray-400 mb-2">
                    Choisis un chapitre
                  </h3>
                  <p className="text-sm text-gray-400">
                    Sélectionne un chapitre pour voir son contenu
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
