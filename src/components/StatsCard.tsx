/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Trophy, Flame, Award, Percent, BookOpen, Clock, CheckCircle2, 
  Sparkles, Heart, Shield, Zap, GraduationCap, Lock, Compass, Music
} from 'lucide-react';
import { UserStats, Badge } from '../types';
import { BADGES } from '../data';

interface StatsCardProps {
  stats: UserStats;
}

// Map string representation of badge icons to Lucide components safely
const getBadgeIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Music':
      return <Music className={className} />;
    default:
      return <Award className={className} />;
  }
};

export default function StatsCard({ stats }: StatsCardProps) {
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.correctAnswersCount / stats.totalAnswered) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      {/* Visual Statistics Dashboard Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric Card: XP */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">Points d'XP</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{stats.xp}</p>
            <p className="text-[10px] text-slate-400 font-medium">Accumulés avec savoir</p>
          </div>
        </div>

        {/* Metric Card: Accuracy */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase font-sans">Précision</span>
            <Percent className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{accuracy}%</p>
            <p className="text-[10px] text-slate-400 font-medium">De bonnes réponses</p>
          </div>
        </div>

        {/* Metric Card: Total Answered */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">Questions</span>
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">
              {stats.correctAnswersCount} <span className="text-sm font-normal text-slate-500">/ {stats.totalAnswered}</span>
            </p>
            <p className="text-[10px] text-slate-400 font-medium font-sans">Résolues avec succès</p>
          </div>
        </div>

        {/* Metric Card: Highest Streak */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase">Série Maximale</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <p className="text-2xl font-black font-mono tracking-tight text-white mb-0.5">{stats.highestStreak}</p>
            <p className="text-[10px] text-slate-400 font-medium">Bonnes réponses d'affilée</p>
          </div>
        </div>
      </div>

      {/* Badges Collection / Achievements Shelf */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-850">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Vos Badges Interactifs</h3>
            <p className="text-[11px] text-slate-400 leading-tight">Relevez les défis pour débloquer de nouveaux titres honorétiques</p>
          </div>
          <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            {stats.unlockedBadgeIds.length} / {BADGES.length} Débloqués
          </span>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {BADGES.map((badge) => {
            const isUnlocked = stats.unlockedBadgeIds.includes(badge.id);

            return (
              <motion.div
                key={badge.id}
                whileHover={isUnlocked ? { scale: 1.02, translateY: -2 } : {}}
                className={`relative p-3.5 rounded-xl border flex gap-3 transition-opacity ${
                  isUnlocked 
                    ? `bg-slate-950/60 border-slate-800 shadow-sm opacity-100` 
                    : 'bg-slate-900 border-slate-850/60 opacity-55'
                }`}
              >
                {/* Badge Icon circle */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                  isUnlocked 
                    ? `bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-inner` 
                    : 'bg-slate-950 text-slate-600 border-slate-800'
                }`}>
                  {isUnlocked ? (
                    getBadgeIcon(badge.icon, 'w-5.5 h-5.5')
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>

                {/* Badge Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className={`text-xs font-bold truncate ${isUnlocked ? 'text-slate-100' : 'text-slate-500'}`}>
                      {badge.title}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-450 mt-1 leading-normal">
                    {badge.description}
                  </p>
                  
                  {/* Lock progress representation helper */}
                  {!isUnlocked && (
                    <div className="text-[9px] text-slate-500 font-semibold font-mono mt-1.5 uppercase tracking-wide">
                      {badge.requirementType === 'xp' && `Nécessite: ${badge.requirementValue} XP`}
                      {badge.requirementType === 'streak' && `Nécessite série: ${badge.requirementValue}`}
                      {badge.requirementType === 'category' && `${badge.requirementValue} bonnes rép. de ${badge.requirementDetail}`}
                      {badge.requirementType === 'completed_quizzes' && `Nécessite: ${badge.requirementValue} quiz complétés (Actuel: ${stats.completedQuizzesCount || 0})`}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
