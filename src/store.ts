import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserStats, AdventureState, DailyQuest } from './types';
import { DailyRewardData } from './components/ui/DailyReward';
import { BadgeData } from './components/ui/BadgeGallery';
import { BADGES, QUESTIONS } from './data';

const defaultStats: UserStats = {
  xp: 0,
  totalAnswered: 0,
  correctAnswersCount: 0,
  streak: 0,
  highestStreak: 0,
  lastPlayedDate: null,
  completedQuizzesCount: 0,
  unlockedBadgeIds: [],
  masteryLevels: {},
  totalXpEarned: 0,
  quizzesToday: 0,
  lastDailyReset: null,
  preferredCategories: [],
  averageAccuracy: 0
};

const defaultCategoryStats: Record<string, number> = {
  'Fiqh': 0,
  'Aqidah': 0,
  'Sirah': 0,
  'Coran': 0,
  'Akhlaq': 0,
  'Institut Al-Mouyassar': 0
};

const defaultAdventureState: AdventureState = {
  unlockedZones: ['zone-1'],
  completedNodes: [],
  currentNodeId: 'node-1-1',
  starsEarned: 0,
  collectedCards: [],
  unlockedTitles: [],
  stamina: 100,
  lastStaminaUpdate: new Date().toISOString()
};

const DAILY_REWARDS: DailyRewardData[] = [
  { day: 1, claimed: false, reward: { type: 'xp', value: 20, label: '+20 XP', icon: '⭐' } },
  { day: 2, claimed: false, reward: { type: 'quote', value: "La science est une lumière qu'Allah dépose dans le cœur de qui Il veut.", label: 'Citation du jour', icon: '📖' } },
  { day: 3, claimed: false, reward: { type: 'xp', value: 30, label: '+30 XP', icon: '✨' } },
  { day: 4, claimed: false, reward: { type: 'invocation', value: 'Rabbi zidni ilma (Seigneur, augmente ma science)', label: 'Invocation du jour', icon: '🤲' } },
  { day: 5, claimed: false, reward: { type: 'xp', value: 50, label: '+50 XP', icon: '🏅' } },
  { day: 6, claimed: false, reward: { type: 'streak_freeze', value: 1, label: 'Gel de série', icon: '❄️' } },
  { day: 7, claimed: false, reward: { type: 'badge', value: 'Gardien de la Semaine', label: 'Badge spécial', icon: '🏆' } },
];

const PREDEFINED_BADGES: BadgeData[] = [
  { id: 'first_quiz', name: 'Premier Pas', description: 'Tu as complété ton premier quiz.', icon: '🌱', rarity: 'common', unlocked: false, category: 'Découverte', requirement: 'Compléter 1 quiz' },
  { id: 'streak_3', name: 'Étincelle', description: '3 jours consécutifs.', icon: '🔥', rarity: 'common', unlocked: false, category: 'Régularité', requirement: 'Série de 3 jours' },
  { id: 'streak_7', name: 'Gardien de la Semaine', description: 'Une semaine complète.', icon: '🛡️', rarity: 'rare', unlocked: false, category: 'Régularité', requirement: 'Série de 7 jours' },
  { id: 'five_quizzes', name: 'Apprenti', description: '5 quiz complétés.', icon: '📚', rarity: 'common', unlocked: false, category: 'Découverte', requirement: '5 quiz complétés' },
  { id: 'streak_14', name: 'Détermination', description: '14 jours consécutifs.', icon: '⚡', rarity: 'rare', unlocked: false, category: 'Régularité', requirement: 'Série de 14 jours' },
  { id: 'perfect_score', name: 'Perfection', description: 'Un quiz avec 100%.', icon: '💎', rarity: 'epic', unlocked: false, category: 'Excellence', requirement: 'Score parfait' },
  { id: 'category_master', name: 'Explorateur', description: 'Maîtrise une catégorie.', icon: '🗺️', rarity: 'rare', unlocked: false, category: 'Maîtrise', requirement: 'Niveau Avancé dans une catégorie' },
  { id: 'twenty_quizzes', name: 'Savant en Herbe', description: '20 quiz complétés.', icon: '🎓', rarity: 'rare', unlocked: false, category: 'Découverte', requirement: '20 quiz complétés' },
  { id: 'oustaz_chat', name: 'Compagnon de Oustaz', description: 'Tu as échangé avec Oustaz AI.', icon: '🤖', rarity: 'common', unlocked: false, category: 'Interaction', requirement: 'Utiliser Oustaz AI' },
  { id: 'streak_30', name: 'Légende Vivante', description: '30 jours consécutifs.', icon: '👑', rarity: 'epic', unlocked: false, category: 'Régularité', requirement: 'Série de 30 jours' },
  { id: 'all_categories', name: 'Encyclopédie Vivante', description: 'Niveau Intermédiaire dans toutes les catégories.', icon: '🌟', rarity: 'epic', unlocked: false, category: 'Maîtrise', requirement: 'Intermédiaire partout' },
  { id: 'fifty_quizzes', name: 'Chercheur de Vérité', description: '50 quiz complétés.', icon: '🔍', rarity: 'epic', unlocked: false, category: 'Découverte', requirement: '50 quiz complétés' },
  { id: 'speed_demon', name: 'Éclair de Sagesse', description: 'Réponse correcte en moins de 5s.', icon: '⚡', rarity: 'rare', unlocked: false, category: 'Excellence', requirement: 'Répondre en < 5 secondes' },
  { id: 'streak_100', name: 'Héritier de la Science', description: '100 jours consécutifs.', icon: '🌙', rarity: 'legendary', unlocked: false, category: 'Régularité', requirement: 'Série de 100 jours' },
  { id: 'master_all', name: 'Hafiz de la Connaissance', description: 'Niveau Hafiz dans toutes les catégories.', icon: '📿', rarity: 'legendary', unlocked: false, category: 'Maîtrise', requirement: 'Hafiz partout' },
  { id: 'hundred_quizzes', name: 'Puits de Science', description: '100 quiz complétés.', icon: '💡', rarity: 'legendary', unlocked: false, category: 'Découverte', requirement: '100 quiz complétés' },
  { id: 'perfect_week', name: 'Semaine Parfaite', description: '7 jours avec score parfait.', icon: '🏆', rarity: 'legendary', unlocked: false, category: 'Excellence', requirement: '7 jours parfaits consécutifs' },
];

const defaultQuests: DailyQuest[] = [
  { id: 'quest-quiz', title: 'Maître du Quiz', description: 'Réponds correctement à 3 questions du Quiz Libre.', targetValue: 3, currentValue: 0, xpReward: 30, isCompleted: false, isClaimed: false, type: 'quiz_questions' },
  { id: 'quest-oustaz', title: 'Élève Attentif', description: 'Échange 2 questions inspirantes avec l\'Oustaz Virtuel.', targetValue: 2, currentValue: 0, xpReward: 25, isCompleted: false, isClaimed: false, type: 'oustaz_chat' },
  { id: 'quest-karaoke', title: 'Chœur des Ansar', description: 'Débloque ton évaluation de chant et obtiens un feedback.', targetValue: 1, currentValue: 0, xpReward: 35, isCompleted: false, isClaimed: false, type: 'karaoke_vocal' },
  { id: 'quest-accuracy', title: 'Précision d\'Élite', description: 'Obtiens une précision d\'au moins 80% (4/5 correct) dans une session de quiz.', targetValue: 1, currentValue: 0, xpReward: 40, isCompleted: false, isClaimed: false, type: 'quiz_session_accuracy' }
];

interface AppState {
  // User Stats & Progress
  stats: UserStats;
  setStats: (stats: UserStats | ((prev: UserStats) => UserStats)) => void;
  categoryStats: Record<string, number>;
  setCategoryStats: (stats: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
  adventureState: AdventureState;
  setAdventureState: (state: AdventureState | ((prev: AdventureState) => AdventureState)) => void;
  
  // Settings
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  isOustazBlocked: boolean;
  setIsOustazBlocked: (blocked: boolean) => void;

  // Premium Daily & Rewards Features
  dailyQuests: DailyQuest[];
  questsDate: string;
  setDailyQuests: (quests: DailyQuest[] | ((prev: DailyQuest[]) => DailyQuest[])) => void;
  dailyRewardsState: DailyRewardData[];
  setDailyRewardsState: (rewards: DailyRewardData[] | ((prev: DailyRewardData[]) => DailyRewardData[])) => void;
  dailyRewardDay: number;
  dailyRewardDate: string;
  setDailyRewardDay: (day: number) => void;
  badgesState: BadgeData[];
  setBadgesState: (badges: BadgeData[] | ((prev: BadgeData[]) => BadgeData[])) => void;

  // Actions
  progressQuest: (type: DailyQuest['type'], incrementBy?: number) => void;
  claimQuestReward: (questId: string) => void;
  claimDailyReward: (day: number) => void;
  checkAndResetDailies: () => void;
}

const getTodayStr = () => new Date().toISOString().split('T')[0];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      stats: defaultStats,
      setStats: (updater) => set((state) => ({ 
        stats: typeof updater === 'function' ? updater(state.stats) : updater 
      })),

      categoryStats: defaultCategoryStats,
      setCategoryStats: (updater) => set((state) => ({ 
        categoryStats: typeof updater === 'function' ? updater(state.categoryStats) : updater 
      })),

      adventureState: defaultAdventureState,
      setAdventureState: (updater) => set((state) => ({ 
        adventureState: typeof updater === 'function' ? updater(state.adventureState) : updater 
      })),

      theme: (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light',
      setTheme: (theme) => {
        set({ theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      isMuted: false,
      setIsMuted: (isMuted) => set({ isMuted }),

      isOustazBlocked: false,
      setIsOustazBlocked: (isOustazBlocked) => set({ isOustazBlocked }),

      dailyQuests: defaultQuests,
      questsDate: getTodayStr(),
      setDailyQuests: (updater) => set((state) => ({ 
        dailyQuests: typeof updater === 'function' ? updater(state.dailyQuests) : updater 
      })),

      dailyRewardsState: DAILY_REWARDS.map(r => ({ ...r })),
      setDailyRewardsState: (updater) => set((state) => ({ 
        dailyRewardsState: typeof updater === 'function' ? updater(state.dailyRewardsState) : updater 
      })),

      dailyRewardDay: 1,
      dailyRewardDate: getTodayStr(),
      setDailyRewardDay: (day) => set({ dailyRewardDay: day, dailyRewardDate: getTodayStr() }),

      badgesState: PREDEFINED_BADGES.map(b => ({ ...b })),
      setBadgesState: (updater) => set((state) => ({ 
        badgesState: typeof updater === 'function' ? updater(state.badgesState) : updater 
      })),

      progressQuest: (type, incrementBy = 1) => set((state) => {
        const newQuests = state.dailyQuests.map(quest => {
          if (quest.type === type && !quest.isCompleted) {
            const finishedValue = quest.currentValue + incrementBy;
            const completed = finishedValue >= quest.targetValue;
            return {
              ...quest,
              currentValue: Math.min(finishedValue, quest.targetValue),
              isCompleted: completed
            };
          }
          return quest;
        });
        return { dailyQuests: newQuests };
      }),

      claimQuestReward: (questId) => set((state) => {
        let xpGained = 0;
        const newQuests = state.dailyQuests.map(q => {
          if (q.id === questId && q.isCompleted && !q.isClaimed) {
            xpGained = q.xpReward;
            return { ...q, isClaimed: true };
          }
          return q;
        });
        
        if (xpGained > 0) {
          return {
            dailyQuests: newQuests,
            stats: { ...state.stats, xp: state.stats.xp + xpGained }
          };
        }
        return { dailyQuests: newQuests };
      }),

      claimDailyReward: (day) => set((state) => {
        const newRewards = state.dailyRewardsState.map(r => r.day === day ? { ...r, claimed: true } : r);
        const reward = state.dailyRewardsState.find(r => r.day === day);
        let newStats = { ...state.stats };
        if (reward && reward.reward.type === 'xp') {
          newStats.xp += (reward.reward.value as number);
        }
        return {
          dailyRewardsState: newRewards,
          stats: newStats,
          dailyRewardDay: Math.min(state.dailyRewardDay + 1, 7)
        };
      }),

      checkAndResetDailies: () => set((state) => {
        const today = getTodayStr();
        const updates: Partial<AppState> = {};
        
        if (state.questsDate !== today) {
          updates.dailyQuests = defaultQuests;
          updates.questsDate = today;
        }
        
        if (state.dailyRewardDate !== today) {
          // Additional reset logic if needed
        }
        
        return updates;
      })
    }),
    {
      name: 'mouyassar-premium-store',
      partialize: (state) => ({
        stats: state.stats,
        categoryStats: state.categoryStats,
        adventureState: state.adventureState,
        theme: state.theme,
        isMuted: state.isMuted,
        isOustazBlocked: state.isOustazBlocked,
        dailyQuests: state.dailyQuests,
        questsDate: state.questsDate,
        dailyRewardsState: state.dailyRewardsState,
        dailyRewardDay: state.dailyRewardDay,
        dailyRewardDate: state.dailyRewardDate,
        badgesState: state.badgesState
      })
    }
  )
);
