/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Award, Trophy, Play, Settings, RefreshCw, Eye, BookOpen,
  ChevronRight, AlertTriangle, Users, BookOpenCheck, Flame, Medal, Check, X, Sparkles, Search, LogOut
} from 'lucide-react';

import { Question, UserStats, QuizSession, Badge, DailyQuest, getLocalizedQuestion, AdventureState } from './types';
import { QUESTIONS, BADGES } from './data';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import StatsCard from './components/StatsCard';
import SchoolInfo from './components/SchoolInfo';
import { setMuteState, playBadgeSound, playSelectSound } from './components/SoundEngine';
import { useLanguage } from './LanguageContext';
import { supabase, isSupabaseConfigured } from './supabaseClient';
import { User } from '@supabase/supabase-js';

// New Modular Subsystems
import VisionPitch from './components/VisionPitch';
import AdventureMode from './components/AdventureMode';
import OustazVirtual from './components/OustazVirtual';
import VoixDesAnsar from './components/VoixDesAnsar';
import ParentalDashboard from './components/ParentalDashboard';
import SmartInstallPrompt from './components/SmartInstallPrompt';
import AboutCreator from './components/AboutCreator';
import GlobalSearch from './components/GlobalSearch';
import QuizRecommender from './components/QuizRecommender';
import DailyReward, { DailyRewardData } from './components/ui/DailyReward';
import BadgeGallery, { BadgeData } from './components/ui/BadgeGallery';

/* ── STATIC DATA ── */
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
import LevelUpCelebration from './components/ui/LevelUpCelebration';

const LOCAL_STORAGE_STATS_KEY = 'mouyassar_quiz_stats_v1';
const LOCAL_STORAGE_CAT_KEY = 'mouyassar_quiz_cat_v1';
const LOCAL_STORAGE_MUTE_KEY = 'mouyassar_quiz_mute';
const LOCAL_STORAGE_ADVENTURE_KEY = 'mouyassar_adventure_state_v1';

function SparkleConfetti() {
  const particles = Array.from({ length: 32 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 120 + 80;
        const startX = 50; // percentage
        const startY = 35; // percentage
        const xDir = Math.cos(angle) * speed;
        const yDir = Math.sin(angle) * speed;
        const scale = Math.random() * 0.9 + 0.5;
        const duration = Math.random() * 1.8 + 1.2;
        const colors = [
          '#D0A21C', '#388E3C', '#2196F3', '#FF4081', '#FFEB3B', '#4CAF50', '#00E676'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const shapes = ['★', '✦', '✧', '●', '◆', '🎈', '✨'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 1,
              scale: 0,
              x: `calc(${startX}% - 10px)`,
              y: `calc(${startY}% - 10px)`
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, scale, scale * 1.4, 0],
              x: `calc(${startX}% - 10px + ${xDir}px)`,
              y: `calc(${startY}% - 10px + ${yDir}px)`,
              rotate: Math.random() * 360 + 180
            }}
            transition={{
              duration: duration,
              ease: "easeOut"
            }}
            className="absolute text-sm font-bold select-none"
            style={{ color: randomColor }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
}

function StarryBackground() {
  const stars = Array.from({ length: 48 });
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white star-twinkle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  const { t, language, dir } = useLanguage();

  const getCategoryKey = (c: string) => {
    if (c === 'Institut Al-Mouyassar') return 'quiz.cat_mouyassar';
    return `quiz.cat_${c.toLowerCase().replace('saint ', '')}`;
  };

  const getLevelKey = (l: string) => {
    if (l === 'Débutant') return 'quiz.lvl_beginner';
    if (l === 'Intermédiaire') return 'quiz.lvl_intermediate';
    if (l === 'Avancé') return 'quiz.lvl_advanced';
    return l;
  };

  // --- Persistent States ---
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_STATS_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse local quiz stats", e);
      }
    }
    return {
      xp: 0,
      totalAnswered: 0,
      correctAnswersCount: 0,
      streak: 0,
      highestStreak: 0,
      lastPlayedDate: null,
      completedQuizzesCount: 0,
      unlockedBadgeIds: [],
    };
  });

  // Track correct answers per category separately to handle subject-specific badges
  const [categoryStats, setCategoryStats] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CAT_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      'Fiqh': 0,
      'Aqidah': 0,
      'Sirah': 0,
      'Coran': 0,
      'Akhlaq': 0,
      'Institut Al-Mouyassar': 0
    };
  });

  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_MUTE_KEY) === 'true';
  });

  const [isOustazBlocked, setIsOustazBlocked] = useState(() => {
    return localStorage.getItem('mouyassar_oustaz_blocked') === 'true';
  });

  const [adventureState, setAdventureState] = useState<AdventureState>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_ADVENTURE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      unlockedZones: ['zone-1'],
      completedNodes: [],
      currentNodeId: 'node-1-1',
      starsEarned: 0,
      collectedCards: [],
      unlockedTitles: [],
      stamina: 100,
      lastStaminaUpdate: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ADVENTURE_KEY, JSON.stringify(adventureState));
  }, [adventureState]);

  // --- Supabase Auth and Sync States ---
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // Listen for Supabase Authentication status
  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fetch profile stats on successful login
  useEffect(() => {
    if (!isSupabaseConfigured() || !currentUser) return;

    const loadProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error("Error retrieving Supabase profile:", error);
          return;
        }

        if (data) {
          // Merge stats with DB data
          setStats({
            xp: data.xp ?? 0,
            totalAnswered: data.total_answered ?? 0,
            correctAnswersCount: data.correct_answers_count ?? 0,
            streak: data.streak ?? 0,
            highestStreak: data.highest_streak ?? 0,
            lastPlayedDate: data.last_played_date ?? null,
            completedQuizzesCount: data.completed_quizzes_count ?? 0,
            unlockedBadgeIds: data.unlocked_badge_ids ?? [],
          });
        } else {
          // Profile doesn't exist yet, insert it using current offline stats
          const { error: insertErr } = await supabase
            .from('profiles')
            .insert({
              id: currentUser.id,
              username: currentUser.email?.split('@')[0] || 'Apprenti Ansar',
              xp: stats.xp,
              total_answered: stats.totalAnswered,
              correct_answers_count: stats.correctAnswersCount,
              streak: stats.streak,
              highest_streak: stats.highestStreak,
              completed_quizzes_count: stats.completedQuizzesCount,
              unlocked_badge_ids: stats.unlockedBadgeIds,
            });

          if (insertErr) {
            console.error("Error creating database profile:", insertErr);
          }
        }
      } catch (err) {
        console.error("Supabase communication error, using offline stats:", err);
      }
    };

    loadProfile();
  }, [currentUser]);

  // Apply Mute settings to Sound Engine
  useEffect(() => {
    setMuteState(isMuted);
    localStorage.setItem(LOCAL_STORAGE_MUTE_KEY, isMuted ? 'true' : 'false');
  }, [isMuted]);

  // Save Stats to Local Storage and push updates to Supabase (debounced)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(stats));

    if (isSupabaseConfigured() && currentUser) {
      const timeoutId = setTimeout(async () => {
        const { error } = await supabase
          .from('profiles')
          .update({
            xp: stats.xp,
            total_answered: stats.totalAnswered,
            correct_answers_count: stats.correctAnswersCount,
            streak: stats.streak,
            highest_streak: stats.highestStreak,
            completed_quizzes_count: stats.completedQuizzesCount,
            unlocked_badge_ids: stats.unlockedBadgeIds,
            updated_at: new Date().toISOString(),
          })
          .eq('id', currentUser.id);

        if (error) {
          console.error("Error updating statistics in Supabase:", error);
        }
      }, 800); // 800ms debounce

      return () => clearTimeout(timeoutId);
    }
  }, [stats, currentUser]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CAT_KEY, JSON.stringify(categoryStats));
  }, [categoryStats]);

  useEffect(() => {
    localStorage.setItem('mouyassar_oustaz_blocked', isOustazBlocked ? 'true' : 'false');
  }, [isOustazBlocked]);

  // --- Daily Quests Setup ---
  const defaultQuests: DailyQuest[] = [
    {
      id: 'quest-quiz',
      title: t('common.quest_quiz_title', "Maître du Quiz"),
      description: t('common.quest_quiz_desc', "Réponds correctement à 3 questions du Quiz Libre."),
      targetValue: 3,
      currentValue: 0,
      xpReward: 30,
      isCompleted: false,
      isClaimed: false,
      type: 'quiz_questions'
    },
    {
      id: 'quest-oustaz',
      title: t('common.quest_oustaz_title', "Élève Attentif"),
      description: t('common.quest_oustaz_desc', "Échange 2 questions inspirantes avec l'Oustaz Virtuel."),
      targetValue: 2,
      currentValue: 0,
      xpReward: 25,
      isCompleted: false,
      isClaimed: false,
      type: 'oustaz_chat'
    },
    {
      id: 'quest-karaoke',
      title: t('common.quest_karaoke_title', "Chœur des Ansar"),
      description: t('common.quest_karaoke_desc', "Débloque ton évaluation de chant et obtiens un feedback."),
      targetValue: 1,
      currentValue: 0,
      xpReward: 35,
      isCompleted: false,
      isClaimed: false,
      type: 'karaoke_vocal'
    },
    {
      id: 'quest-accuracy',
      title: t('common.quest_accuracy_title', "Précision d'Élite"),
      description: t('common.quest_accuracy_desc', "Obtiens une précision d'au moins 80% (4/5 correct) dans une session de quiz."),
      targetValue: 1,
      currentValue: 0,
      xpReward: 40,
      isCompleted: false,
      isClaimed: false,
      type: 'quiz_session_accuracy'
    }
  ];

  const [dailyQuests, setDailyQuests] = useState<DailyQuest[]>(() => {
    const saved = localStorage.getItem('mouyassar_daily_quests_v1');
    const savedDate = localStorage.getItem('mouyassar_quests_date_v1');
    const todayStr = new Date().toISOString().split('T')[0];

    if (saved && savedDate === todayStr) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return defaultQuests;
  });

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    localStorage.setItem('mouyassar_daily_quests_v1', JSON.stringify(dailyQuests));
    localStorage.setItem('mouyassar_quests_date_v1', todayStr);
  }, [dailyQuests]);

  const handleProgressQuest = (type: DailyQuest['type'], incrementBy = 1) => {
    setDailyQuests(prev => {
      return prev.map(quest => {
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
    });
  };

  const handleClaimQuestReward = (questId: string) => {
    playBadgeSound();
    setDailyQuests(prev => {
      return prev.map(q => {
        if (q.id === questId && q.isCompleted && !q.isClaimed) {
          setStats(prevStats => ({
            ...prevStats,
            xp: prevStats.xp + q.xpReward
          }));
          return { ...q, isClaimed: true };
        }
        return q;
      });
    });
  };

  useEffect(() => {
    const onOustazChat = () => {
      handleProgressQuest('oustaz_chat', 1);
    };
    const onKaraokeSing = () => {
      handleProgressQuest('karaoke_vocal', 1);
    };
    const onAdventureBranch = () => {
      handleProgressQuest('adventure_node', 1);
    };

    window.addEventListener('oustaz_message_sent', onOustazChat);
    window.addEventListener('karaoke_line_sung', onKaraokeSing);
    window.addEventListener('adventure_branch_completed', onAdventureBranch);

    return () => {
      window.removeEventListener('oustaz_message_sent', onOustazChat);
      window.removeEventListener('karaoke_line_sung', onKaraokeSing);
      window.removeEventListener('adventure_branch_completed', onAdventureBranch);
    };
  }, []);

  // --- Theme State ---
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('mouyassar_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('mouyassar_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // --- UI States ---
  const [activeTab, setActiveTab] = useState<'pitch' | 'adventure' | 'quiz' | 'oustaz' | 'ansar' | 'stats' | 'parental'>('pitch');
  const [showSchoolModal, setShowSchoolModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quitConfirmModal, setQuitConfirmModal] = useState(false);

  // --- Premium UI States ---
  const [showDailyReward, setShowDailyReward] = useState(false);
  const [showBadgeGallery, setShowBadgeGallery] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [pendingLevelUp, setPendingLevelUp] = useState<{ level: number; xpEarned: number } | null>(null);
  const [dailyRewardsState, setDailyRewardsState] = useState<DailyRewardData[]>(() => {
    const saved = localStorage.getItem('mouyassar_daily_rewards');
    if (saved) {
      try { return JSON.parse(saved); } catch { }
    }
    return DAILY_REWARDS.map(r => ({ ...r }));
  });
  const [badgesState, setBadgesState] = useState<BadgeData[]>(() => {
    const saved = localStorage.getItem('mouyassar_badges_state');
    if (saved) {
      try { return JSON.parse(saved); } catch { }
    }
    return PREDEFINED_BADGES.map(b => ({ ...b }));
  });
  const [dailyRewardDay, setDailyRewardDay] = useState(() => {
    const saved = localStorage.getItem('mouyassar_daily_reward_day');
    const savedDate = localStorage.getItem('mouyassar_daily_reward_date');
    const today = new Date().toISOString().split('T')[0];
    if (savedDate === today && saved) return parseInt(saved);
    return 1;
  });

  // Persist daily rewards & badges
  useEffect(() => {
    localStorage.setItem('mouyassar_daily_rewards', JSON.stringify(dailyRewardsState));
  }, [dailyRewardsState]);
  useEffect(() => {
    localStorage.setItem('mouyassar_badges_state', JSON.stringify(badgesState));
  }, [badgesState]);
  useEffect(() => {
    localStorage.setItem('mouyassar_daily_reward_day', String(dailyRewardDay));
    localStorage.setItem('mouyassar_daily_reward_date', new Date().toISOString().split('T')[0]);
  }, [dailyRewardDay]);

  const handleClaimDailyReward = (day: number) => {
    setDailyRewardsState(prev =>
      prev.map(r => r.day === day ? { ...r, claimed: true } : r)
    );
    const reward = dailyRewardsState.find(r => r.day === day);
    if (reward?.reward.type === 'xp') {
      setStats(prev => ({ ...prev, xp: prev.xp + (reward.reward.value as number) }));
    }
    setDailyRewardDay(prev => Math.min(prev + 1, 7));
  };

  const handleBadgeClick = (badge: BadgeData) => {
    // Could trigger level-up or special animation
  };

  // --- Loading & Animation States ---
  const [isInitializing, setIsInitializing] = useState(true);
  const [initProgress, setInitProgress] = useState(0);
  const [initStatusMsg, setInitStatusMsg] = useState("Démarrage du système...");
  const [isSessionTransitioning, setIsSessionTransitioning] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [transitionMsg, setTransitionMsg] = useState("");

  // Simulated system loader on mount to initialize data safely
  useEffect(() => {
    const statusMessages = [
      t('common.loading_init_aqidah', "Initialisation des dogmes et concepts d'Aqidah..."),
      t('common.loading_init_fiqh', "Chargement des leçons de Fiqh et jurisprudence..."),
      t('common.loading_init_sirah', "Indexation des histoires des Prophètes (Sirah)..."),
      t('common.loading_init_akhlaq', "Compilation des matières d'Akhlaq et de comportement..."),
      t('common.loading_init_server', "Connexion sécurisée aux serveurs de l'Institut Al-Mouyassar...")
    ];
    let step = 0;
    const interval = setInterval(() => {
      setInitProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsInitializing(false);
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 8;
        const msgIndex = Math.min(Math.floor(next / 20), statusMessages.length - 1);
        setInitStatusMsg(statusMessages[msgIndex]);
        return next > 100 ? 100 : next;
      });
    }, 110);

    return () => clearInterval(interval);
  }, [language]);

  // --- Quiz Session Setup ---
  const allCategories = Array.from(new Set(QUESTIONS.map(q => q.categorie)));
  const allLevels = ['Débutant', 'Intermédiaire', 'Avancé'];

  const [selectedCategories, setSelectedCategories] = useState<string[]>(allCategories);
  const [selectedLevels, setSelectedLevels] = useState<string[]>(allLevels);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timerMinutes, setTimerMinutes] = useState(25); // seconds per question
  const [quizSearchQuery, setQuizSearchQuery] = useState('');

  const [session, setSession] = useState<QuizSession | null>(null);
  const [latestSessionBadges, setLatestSessionBadges] = useState<Badge[]>([]);
  const [showSessionBadgeBanner, setShowSessionBadgeBanner] = useState(false);

  // --- Cache de Traduction IA et États ---
  const [aiTranslationsCache, setAiTranslationsCache] = useState<Record<string, any>>(() => {
    const saved = localStorage.getItem('mouyassar_ai_translations_cache');
    return saved ? JSON.parse(saved) : {};
  });
  const [isTranslatingQuestion, setIsTranslatingQuestion] = useState(false);

  useEffect(() => {
    if (!session) return;
    const { currentIndex, questions } = session;
    if (currentIndex >= questions.length) return;

    const currentQuestion = questions[currentIndex];

    // Si la langue est 'fr', pas besoin de traduire
    if (language === 'fr') return;

    // Si la question a déjà la traduction statique dans les données, pas besoin de traduire
    if (currentQuestion.translations?.[language as 'ar' | 'wo']) return;

    const cacheKey = `${currentQuestion.id}_${language}`;

    // Si la question est déjà dans le cache de traduction IA, on l'injecte dans la question !
    if (aiTranslationsCache[cacheKey]) {
      setSession(prev => {
        if (!prev) return null;
        const updatedQuestions = [...prev.questions];
        const qToUpdate = { ...updatedQuestions[currentIndex] };
        qToUpdate.translations = {
          ...qToUpdate.translations,
          [language]: aiTranslationsCache[cacheKey]
        };
        updatedQuestions[currentIndex] = qToUpdate;
        return {
          ...prev,
          questions: updatedQuestions
        };
      });
    } else if (!isTranslatingQuestion) {
      handleTriggerAiTranslation();
    }
  }, [language, session?.currentIndex, session?.questions[session?.currentIndex]?.id, aiTranslationsCache]);

  const handleTriggerAiTranslation = async () => {
    if (!session) return;
    const { currentIndex, questions } = session;
    if (currentIndex >= questions.length) return;

    const currentQuestion = questions[currentIndex];
    if (language === 'fr') return;

    const cacheKey = `${currentQuestion.id}_${language}`;
    setIsTranslatingQuestion(true);

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          questionText: currentQuestion.question,
          options: currentQuestion.options,
          reponseCorrecte: currentQuestion.reponse_correcte,
          explication: currentQuestion.explication,
          language: language
        })
      });

      if (!response.ok) {
        throw new Error("Erreur HTTP " + response.status);
      }

      const data = await response.json();

      // Mettre à jour le cache local
      setAiTranslationsCache(prev => {
        const updated = {
          ...prev,
          [cacheKey]: data
        };
        localStorage.setItem('mouyassar_ai_translations_cache', JSON.stringify(updated));
        return updated;
      });

      // Injecter la traduction dans la session
      setSession(prev => {
        if (!prev) return null;
        const updatedQuestions = [...prev.questions];
        const qToUpdate = { ...updatedQuestions[currentIndex] };
        qToUpdate.translations = {
          ...qToUpdate.translations,
          [language]: data
        };
        updatedQuestions[currentIndex] = qToUpdate;
        return {
          ...prev,
          questions: updatedQuestions
        };
      });
    } catch (error) {
      console.error("AI Translation failure, falling back to French:", error);
    } finally {
      setIsTranslatingQuestion(false);
    }
  };

  const handleToggleCategory = (cat: string) => {
    playSelectSound();
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleSelectAllCategories = () => {
    playSelectSound();
    if (selectedCategories.length === allCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories);
    }
  };

  const handleToggleLevel = (lvl: string) => {
    playSelectSound();
    setSelectedLevels(prev =>
      prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
    );
  };

  const handleSelectAllLevels = () => {
    playSelectSound();
    if (selectedLevels.length === allLevels.length) {
      setSelectedLevels([]);
    } else {
      setSelectedLevels(allLevels);
    }
  };

  const matchedQuestionsCount = QUESTIONS.filter(q =>
    selectedCategories.includes(q.categorie) &&
    selectedLevels.includes(q.niveau) &&
    (
      quizSearchQuery === '' ||
      q.question.toLowerCase().includes(quizSearchQuery.toLowerCase()) ||
      q.options.some(opt => opt.toLowerCase().includes(quizSearchQuery.toLowerCase()))
    )
  ).length;

  // Toggle Mute
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Reset progress confirmation
  const handleResetProgress = (forceDefault = false) => {
    const performReset = () => {
      const resetStats = {
        xp: 0,
        totalAnswered: 0,
        correctAnswersCount: 0,
        streak: 0,
        highestStreak: 0,
        lastPlayedDate: null,
        completedQuizzesCount: 0,
        unlockedBadgeIds: [],
      };
      const resetCats = {
        'Fiqh': 0,
        'Aqidah': 0,
        'Sirah': 0,
        'Coran': 0,
        'Akhlaq': 0,
        'Institut Al-Mouyassar': 0
      };
      setStats(resetStats);
      setCategoryStats(resetCats);
      localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(resetStats));
      localStorage.setItem(LOCAL_STORAGE_CAT_KEY, JSON.stringify(resetCats));
      playSelectSound();
    };

    if (forceDefault) {
      performReset();
    } else if (window.confirm("Êtes-vous sûr de vouloir réinitialiser tout votre progrès, vos points d'XP et vos badges acquis ?")) {
      performReset();
    }
  };

  // --- Game Mechanics ---
  const launchSessionWithTransition = (
    finalSelection: Question[],
    transitionText: string,
    onCompletedCallback?: () => void
  ) => {
    setIsSessionTransitioning(true);
    setTransitionMsg(transitionText);
    setTransitionProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setTransitionProgress(Math.min(progress, 100));
      if (progress >= 100) {
        clearInterval(interval);
        setSession({
          questions: finalSelection,
          currentIndex: 0,
          score: 0,
          answers: [],
          isFinished: false,
          timeLimitPerQuestion: timerMinutes
        });
        setLatestSessionBadges([]);
        setShowSessionBadgeBanner(false);
        setIsQuizActive(true);
        if (onCompletedCallback) {
          onCompletedCallback();
        }
        setIsSessionTransitioning(false);
        setTransitionProgress(0);
      }
    }, 120);
  };

  const handleLaunchQuiz = () => {
    if (selectedCategories.length === 0 || selectedLevels.length === 0) {
      alert("Veuillez sélectionner au moins une catégorie et un niveau.");
      return;
    }

    playSelectSound();

    // Filter questions based on configuration
    const filtered = QUESTIONS.filter(q =>
      selectedCategories.includes(q.categorie) &&
      selectedLevels.includes(q.niveau) &&
      (
        quizSearchQuery === '' ||
        q.question.toLowerCase().includes(quizSearchQuery.toLowerCase()) ||
        q.options.some(opt => opt.toLowerCase().includes(quizSearchQuery.toLowerCase()))
      )
    );

    // Shuffle questions for engagement
    filtered.sort(() => Math.random() - 0.5);

    // Limit to 7 questions max per session to keep children engaged and digestible
    const finalSelection = filtered.slice(0, 7);

    if (finalSelection.length === 0) {
      alert("Aucune question ne correspond à ces critères d'apprentissage. Veuillez changer de catégorie ou de niveau.");
      return;
    }

    launchSessionWithTransition(
      finalSelection,
      "Vérification des critères d'apprentissage & compilation du Quiz...",
    );
  };

  const handleStartQuizWithCategory = (category: string, levels?: string[]) => {
    playSelectSound();

    // Filter questions belonging to this category and matching selected levels if any
    const filtered = QUESTIONS.filter(q =>
      q.categorie === category &&
      (!levels || levels.includes(q.niveau))
    );

    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    // Limit to 7 questions max per session to keep it digestible
    const finalSelection = shuffled.slice(0, 7);

    if (finalSelection.length === 0) {
      alert("Aucune question ne correspond à cette matière avec les filtres de niveau sélectionnés.");
      return;
    }

    launchSessionWithTransition(
      finalSelection,
      `Recherche de questions approuvées pour le thème "${category}"...`,
      () => setActiveTab('quiz')
    );
  };

  const handleStartRecommendedQuizList = (title: string, questionsList: Question[]) => {
    playSelectSound();

    if (questionsList.length === 0) {
      alert("Aucune question ne correspond à ce thème ou ce niveau pour l'instant.");
      return;
    }

    // Shuffle the matching inputs
    const shuffled = [...questionsList].sort(() => Math.random() - 0.5);

    // Limit to standard length 7 questions per session to keep learning digestible
    const finalSelection = shuffled.slice(0, 7);

    launchSessionWithTransition(
      finalSelection,
      `Calcul de vos intérêts théologiques pour : "${title}"...`,
      () => setActiveTab('quiz')
    );
  };

  const handleAnswerValidatedCallback = (
    selectedAnswer: string,
    isCorrect: boolean,
    timeSpent: number
  ) => {
    if (!session) return;

    const currentQuestion = session.questions[session.currentIndex];

    // Build intermediate states to update stats safely
    setSession(prev => {
      if (!prev) return null;
      const updatedAnswers = [
        ...prev.answers,
        {
          questionId: currentQuestion.id,
          selectedAnswer,
          isCorrect,
          timeSpent
        }
      ];

      const newScore = isCorrect ? prev.score + 1 : prev.score;
      const isFinished = prev.currentIndex >= prev.questions.length - 1;

      return {
        ...prev,
        answers: updatedAnswers,
        score: newScore,
        currentIndex: prev.currentIndex + 1,
        isFinished
      };
    });

    // Award XP instantly
    const xpGained = isCorrect ? 15 : 2; // Encourage attempt with small XP
    const newStreak = isCorrect ? stats.streak + 1 : 0;
    const newHighestStreak = Math.max(stats.highestStreak, newStreak);

    // Update Category Statistics
    const updatedCategoryCount = { ...categoryStats };
    if (isCorrect) {
      handleProgressQuest('quiz_questions', 1);
      const qCat = currentQuestion.categorie;
      updatedCategoryCount[qCat] = (updatedCategoryCount[qCat] || 0) + 1;
    }

    // Accumulate stats
    const updatedStats: UserStats = {
      ...stats,
      xp: stats.xp + xpGained,
      totalAnswered: stats.totalAnswered + 1,
      correctAnswersCount: isCorrect ? stats.correctAnswersCount + 1 : stats.correctAnswersCount,
      streak: newStreak,
      highestStreak: newHighestStreak,
    };

    // Calculate Badges that are newly unlocked
    const newUnlockedBadgeIds: string[] = [];
    const checkBadgeIfUnlocked = (badge: Badge) => {
      if (stats.unlockedBadgeIds.includes(badge.id)) return false;

      if (badge.requirementType === 'xp' && updatedStats.xp >= badge.requirementValue) {
        return true;
      }
      if (badge.requirementType === 'streak' && updatedStats.highestStreak >= badge.requirementValue) {
        return true;
      }
      if (badge.requirementType === 'category') {
        const valueMatched = updatedCategoryCount[badge.requirementDetail || ''] || 0;
        if (valueMatched >= badge.requirementValue) {
          return true;
        }
      }
      return false;
    };

    BADGES.forEach(badge => {
      if (checkBadgeIfUnlocked(badge)) {
        newUnlockedBadgeIds.push(badge.id);
      }
    });

    if (newUnlockedBadgeIds.length > 0) {
      // Unlocked new badges! Trigger audio play and banner overlays
      setTimeout(() => {
        playBadgeSound();
      }, 700);

      const newlyAcquiredBadges = BADGES.filter(b => newUnlockedBadgeIds.includes(b.id));
      setLatestSessionBadges(prev => [...prev, ...newlyAcquiredBadges]);
      setShowSessionBadgeBanner(true);

      setStats(prev => ({
        ...updatedStats,
        unlockedBadgeIds: [...prev.unlockedBadgeIds, ...newUnlockedBadgeIds]
      }));
    } else {
      setStats(updatedStats);
    }

    if (isCorrect) {
      setCategoryStats(updatedCategoryCount);
    }
  };

  const handleFinishSession = () => {
    if (!session) return;

    // Give bonus XP on perfect complete
    const isPerfect = session.score === session.questions.length;
    const bonusXp = isPerfect ? 50 : 0;

    // Check accuracy daily quest (80% or more)
    const accuracy = session.questions.length > 0 ? (session.score / session.questions.length) : 0;
    if (accuracy >= 0.8) {
      handleProgressQuest('quiz_session_accuracy', 1);
    }

    setStats(prev => {
      const updatedStats = {
        ...prev,
        xp: prev.xp + bonusXp,
        completedQuizzesCount: prev.completedQuizzesCount + 1
      };

      // Calculate Badges that are newly unlocked
      const newUnlockedBadgeIds: string[] = [];
      BADGES.forEach(badge => {
        if (prev.unlockedBadgeIds.includes(badge.id)) return;

        let unlocked = false;
        if (badge.requirementType === 'completed_quizzes' && updatedStats.completedQuizzesCount >= badge.requirementValue) {
          unlocked = true;
        } else if (badge.requirementType === 'xp' && updatedStats.xp >= badge.requirementValue) {
          unlocked = true;
        }

        if (unlocked) {
          newUnlockedBadgeIds.push(badge.id);
        }
      });

      if (newUnlockedBadgeIds.length > 0) {
        setTimeout(() => {
          playBadgeSound();
        }, 700);

        const newlyAcquiredBadges = BADGES.filter(b => newUnlockedBadgeIds.includes(b.id));
        setLatestSessionBadges(pBadge => [...pBadge, ...newlyAcquiredBadges]);
        setShowSessionBadgeBanner(true);

        return {
          ...updatedStats,
          unlockedBadgeIds: [...prev.unlockedBadgeIds, ...newUnlockedBadgeIds]
        };
      } else {
        return updatedStats;
      }
    });

    setSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        isFinished: true
      };
    });
  };

  const handleQuitQuizSession = () => {
    setIsQuizActive(false);
    setSession(null);
    setQuitConfirmModal(false);
    playSelectSound();
  };

  const getSubTitleText = () => {
    let catStr = '';
    if (selectedCategories.length === allCategories.length) {
      catStr = 'Toutes les catégories';
    } else if (selectedCategories.length === 0) {
      catStr = 'Aucune catégorie';
    } else if (selectedCategories.length <= 2) {
      catStr = selectedCategories.join(', ');
    } else {
      catStr = `${selectedCategories.length} catégories`;
    }

    let lvlStr = '';
    if (selectedLevels.length === allLevels.length) {
      lvlStr = 'Tous les niveaux';
    } else if (selectedLevels.length === 0) {
      lvlStr = 'Aucun niveau';
    } else if (selectedLevels.length <= 2) {
      lvlStr = selectedLevels.join(', ');
    } else {
      lvlStr = `${selectedLevels.length} niveaux`;
    }

    return `${catStr} • ${lvlStr}`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col font-sans antialiased selection:bg-[#004D40]/25 ${theme === 'dark'
      ? 'bg-[#070b19] text-slate-100 dark'
      : 'bg-[#FCF8F2] text-stone-850'
      }`}>
      {theme === 'dark' && <StarryBackground />}

      {/* 🚀 INITIALIZING SYSTEM LOADER MASK */}
      <AnimatePresence>
        {isInitializing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-[#FCF8F2] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-500/[0.04] to-transparent pointer-events-none" />

            <div className="max-w-md w-full space-y-8 relative z-10">

              {/* Spinning Logo System */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                {/* External spinning circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-4 border-[#004D40]/10 border-t-[#D0A21C] border-r-[#D0A21C]/40"
                />

                {/* Middle floating pulsing ring */}
                <motion.div
                  animate={{ scale: [0.92, 1.08, 0.92] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-2 rounded-full bg-[#004D40]/5 border border-[#004D40]/10 flex items-center justify-center"
                >
                  <Compass className="w-8 h-8 text-[#004D40] animate-pulse" />
                </motion.div>

                {/* Sparkling overlays */}
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-[#D0A21C] animate-bounce" />
              </div>

              {/* Title & Slogan */}
              <div className="space-y-2">
                <h1 className="text-xl md:text-2xl font-black text-[#004D40] tracking-tight uppercase">
                  Institut Al-Mouyassar
                </h1>
                <p className="text-[10.5px] font-bold tracking-widest text-[#D0A21C] uppercase font-mono">
                  Éducation • Dogme • Excellence
                </p>
              </div>

              {/* Dynamic Loading progress widgets */}
              <div className="p-5.5 rounded-2xl bg-white border border-[#004D40]/10 shadow-xs space-y-4">

                {/* Informative cycling text */}
                <div className="space-y-1">
                  <div className="text-[11px] text-stone-400 font-extrabold uppercase font-sans tracking-wide">
                    {initProgress === 100 ? t('common.loading_ready', "Prêt pour le jeu !") : t('common.loading_starting', "Démarrage en cours")}
                  </div>
                  <p className="text-xs font-bold text-stone-700 h-9 flex items-center justify-center px-2 transition-all leading-normal">
                    {initStatusMsg}
                  </p>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200/50">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#004D40] to-[#D0A21C]"
                      initial={{ width: '0%' }}
                      animate={{ width: `${initProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#004D40] font-mono">
                    <span>{t('common.loading_cursus', 'Double Cursus Officiel')}</span>
                    <span>{initProgress}%</span>
                  </div>
                </div>

              </div>

              {/* Subtle visual quote/comfort indicator */}
              <p className="text-[10px] text-stone-400 leading-normal max-w-[280px] mx-auto font-medium italic">
                {t('common.loading_quote')}
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔮 TRANSITIONAL QUIZ LOADER ON TOP OF PAGES */}
      <AnimatePresence>
        {isSessionTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-[#004D40]/40 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -15 }}
              className="max-w-sm w-full bg-[#FCF8F2] border-2 border-[#D0A21C]/65 rounded-3xl p-6 shadow-2xl relative space-y-6 overflow-hidden text-center animate-duration-300"
            >
              {/* Spinning star element */}
              <div className="w-16 h-16 bg-[#004D40] rounded-2xl flex items-center justify-center mx-auto relative shadow-md shadow-[#004D40]/15">
                <RefreshCw className="w-8 h-8 text-[#FCF8F2] animate-spin" />
                <Sparkles className="absolute -top-1 -right-1 w-4.5 h-4.5 text-[#D0A21C]" />
              </div>

              {/* Message block */}
              <div className="space-y-1 text-center">
                <h4 className="text-[10px] font-black text-[#D0A21C] uppercase tracking-widest font-mono text-center mx-auto">{t('common.loading_assembling', 'Assemblage en cours...')}</h4>
                <p className="text-xs font-extrabold text-[#004D40] leading-snug px-2 text-center mx-auto">
                  {transitionMsg}
                </p>
              </div>

              {/* Incremental visual loader bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#004D40] to-[#D0A21C]"
                    style={{ width: `${transitionProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#004D40]/65 font-bold font-mono">
                  <span>{t('common.loading_compilation', 'Compilation scholastique')}</span>
                  <span>{transitionProgress}%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Premium Header ── */}
      <Header
        level={Math.floor(stats.xp / 200) + 1}
        xp={stats.xp}
        xpToNextLevel={200}
        streak={stats.streak}
        highestStreak={stats.highestStreak}
        username="Explorateur"
        unlockedBadgeCount={badgesState.filter(b => b.unlocked).length}
        totalBadgeCount={badgesState.length}
        dailyRewardAvailable={dailyRewardsState.some(r => !r.claimed && r.day === dailyRewardDay)}
        isLoggedIn={currentUser !== null}
        isQuizActive={isQuizActive}
        onDailyRewardClick={() => setShowDailyReward(true)}
        onBadgeGalleryClick={() => setShowBadgeGallery(true)}
        onAvatarClick={() => setShowAuthModal(true)}
        onQuitQuiz={() => setQuitConfirmModal(true)}
        onNavigate={(action) => {
          if (action === 'adventure') setActiveTab('adventure');
          else if (action === 'quiz') setActiveTab('quiz');
          else if (action === 'revisions') setShowBadgeGallery(true);
          else if (action === 'trophies') setShowBadgeGallery(true);
          else if (action === 'parental') setActiveTab('parental');
          else if (action === 'settings') setShowSettingsModal(true);
          else if (action === 'about') setShowSchoolModal(true);
          else if (action === 'support') window.location.href = 'mailto:mrniass@gmail.com';
          else if (action === 'install') alert(t('common.install_alert'));
        }}
      />

      {/* Smart Install Prompt — contextuel, badge flottant après 3 interactions */}
      <SmartInstallPrompt />

      {/* Main Core View Area */}
      <main className={`flex-1 w-full mx-auto flex flex-col justify-start transition-all duration-300 pt-[var(--header-height)] ${activeTab === 'adventure'
        ? 'max-w-5xl px-2 py-4 md:px-6 md:py-8'
        : 'max-w-4xl px-4 py-6 md:py-10'
        }`}>
        <AnimatePresence mode="wait">

          {/* SCREEN 1: Active Gameplay Screen */}
          {isQuizActive && session ? (
            <motion.div
              key="quiz-screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="h-1" />
              <div className="w-full h-1 bg-slate-850 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-505 to-teal-400 transition-all duration-350"
                  style={{ width: `${(session.currentIndex / session.questions.length) * 100}%` }}
                />
              </div>

              {/* Quiz content conditional display */}
              {!session.isFinished && session.currentIndex < session.questions.length ? (
                <QuizCard
                  question={session.questions[session.currentIndex]}
                  questionNumber={session.currentIndex + 1}
                  totalQuestions={session.questions.length}
                  timeLimit={timerEnabled ? timerMinutes * 60 : 30}
                  onAnswer={(selected, timeSpent) => {
                    const isCorrect = selected === session.questions[session.currentIndex].reponse_correcte;
                    handleAnswerValidatedCallback(selected, isCorrect, timeSpent);
                  }}
                  streak={stats.streak}
                />
              ) : (
                /* Interactive Finished Overview card */
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6 shadow-xl relative overflow-hidden"
                >
                  {session.score === session.questions.length && <SparkleConfetti />}
                  <div className="w-16 h-16 bg-emerald-550/15 text-emerald-400 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto shadow-inner relative z-10">
                    <BookOpenCheck className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-black tracking-tight text-white">
                      {t('quiz.congratulations_session', 'Félicitations, Session Terminée !')}
                    </h2>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      {t('common.session_end_desc')}
                    </p>
                  </div>

                  {/* Summary performance block */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto bg-slate-950/45 p-4 rounded-xl border border-slate-850">
                    <div className="text-center p-2 border-r border-slate-850/60 md:border-r">
                      <p className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mb-1">
                        {language === 'ar' ? 'النتيجة المحققة' :
                          language === 'wo' ? 'Ndam li' :
                            'Score acquis'}
                      </p>
                      <p className="text-xl font-bold font-mono text-white">
                        {session.score} <span className="text-slate-500 text-sm">/ {session.questions.length}</span>
                      </p>
                    </div>

                    <div className="text-center p-2 md:border-r border-slate-850/60">
                      <p className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mb-1">
                        {language === 'ar' ? 'الدقة' :
                          language === 'wo' ? 'Woor teguine' :
                            'Précision'}
                      </p>
                      <p className="text-xl font-bold font-mono text-emerald-400">
                        {Math.round((session.score / session.questions.length) * 100)}%
                      </p>
                    </div>

                    <div className="text-center p-2 col-span-2 md:col-span-1 border-t md:border-t-0 border-slate-850/60 pt-3 md:pt-2">
                      <p className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mb-1">
                        {language === 'ar' ? 'الخبرة المكتسبة' :
                          language === 'wo' ? 'XP yi am' :
                            'XP obtenus'}
                      </p>
                      <p className="text-xl font-bold font-mono text-amber-400">
                        +{session.score * 15 + (session.score === session.questions.length ? 50 : 0)} XP
                      </p>
                      {session.score === session.questions.length && (
                        <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/20 animate-pulse">
                          {language === 'ar' ? '+50 ممتاز !' :
                            language === 'wo' ? '+50 MashaAllah !' :
                              '+50 Perfection !'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Newly unlocked badges alert inside results screen */}
                  {latestSessionBadges.length > 0 && (
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 max-w-lg mx-auto space-y-2 text-left">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3.5 h-3.5 fill-emerald-500" />
                        {language === 'ar' ? 'تم إلغاء قفل الأوسمة !' :
                          language === 'wo' ? 'Néer yi ubbiku na !' :
                            'Badge(s) Débloqué(s) !'}
                      </h4>
                      <div className="space-y-2">
                        {latestSessionBadges.map(b => (
                          <div key={b.id} className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            <span className="font-extrabold text-white">{b.title}</span> : <span className="text-slate-350">{b.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Review questions answers sheet for kids to study errors */}
                  <div className="text-left space-y-4 max-w-xl mx-auto pt-4 border-t border-slate-850">
                    <h3 className="text-sm font-extrabold text-slate-400 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-emerald-500" />
                      {language === 'ar' ? 'مراجعة الأسئلة :' :
                        language === 'wo' ? 'Saytu laaj yi :' :
                          'Revue des questions :'}
                    </h3>

                    <div className="space-y-3.5">
                      {session.questions.map((q, idx) => {
                        const answerObj = session.answers.find(a => a.questionId === q.id);
                        const isUserCorrect = answerObj?.isCorrect || false;
                        const localizedQ = getLocalizedQuestion(q, language);

                        return (
                          <div key={q.id} className="p-4 rounded-xl bg-slate-950/30 border border-slate-850 space-y-2.5">
                            {/* Question meta category + difficulty badges */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`text-[8px] tracking-wider uppercase font-extrabold px-1.5 py-0.5 rounded ${q.categorie === 'Fiqh' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                                q.categorie === 'Aqidah' ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' :
                                  q.categorie === 'Sirah' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                                    q.categorie === 'Coran' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                      q.categorie === 'Akhlaq' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                        'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                                } border`}>
                                {t(getCategoryKey(q.categorie), q.categorie)}
                              </span>

                              <span className={`text-[8px] tracking-wider uppercase font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1 ${q.niveau === 'Débutant' ? 'bg-emerald-500/10 text-emerald-455 border-emerald-500/15' :
                                q.niveau === 'Intermédiaire' ? 'bg-amber-500/10 text-amber-400 border-amber-500/15' :
                                  'bg-rose-500/10 text-rose-400 border-rose-500/15'
                                } border`}>
                                <span className={`w-1 h-1 rounded-full ${q.niveau === 'Débutant' ? 'bg-emerald-450' :
                                  q.niveau === 'Intermédiaire' ? 'bg-amber-400' : 'bg-rose-400'
                                  }`} />
                                {t(getLevelKey(q.niveau), q.niveau)}
                              </span>
                            </div>

                            <div className="flex items-start justify-between gap-3">
                              <h4 className="text-xs font-bold text-slate-100 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-slate-500">{idx + 1}.</span>
                                {localizedQ.question}
                              </h4>
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${isUserCorrect
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                }`}>
                                {isUserCorrect ? t('quiz.correct', 'Correct !') : t('quiz.incorrect', 'Incorrect')}
                              </span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-2 text-[11px] pt-1">
                              <div className="text-slate-400">
                                <span className="font-semibold text-slate-500">
                                  {language === 'ar' ? 'إجابتك :' :
                                    language === 'wo' ? 'Sa toontu :' :
                                      'Votre réponse :'}
                                </span>{' '}
                                <span className={isUserCorrect ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium line-through'}>
                                  {answerObj?.selectedAnswer || (
                                    language === 'ar' ? 'انتهى الوقت (فارغ)' :
                                      language === 'wo' ? 'Waxtu bi jeexna (kessé)' :
                                        'Chronomètre Épuisé (vide)'
                                  )}
                                </span>
                              </div>
                              <div className="text-slate-400">
                                <span className="font-semibold text-slate-500">
                                  {language === 'ar' ? 'الإجابة الصحيحة :' :
                                    language === 'wo' ? 'Toontu bu woor bi :' :
                                      'Réponse correcte :'}
                                </span>{' '}
                                <span className="text-emerald-400 font-extrabold">
                                  {localizedQ.reponse_correcte}
                                </span>
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-400 leading-normal bg-slate-950/50 p-2.5 rounded border border-slate-900 italic">
                              <span className="font-semibold text-amber-500/90 not-italic block uppercase text-[8px] tracking-wider mb-0.5">
                                {language === 'ar' ? 'الشرح والملاحظة :' :
                                  language === 'wo' ? 'Firi bi :' :
                                    'Note explicative :'}
                              </span>
                              &ldquo;{localizedQ.explication}&rdquo;
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleQuitQuizSession}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-505 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:-translate-y-0.5 cursor-pointer"
                    >
                      {t('common.back_home', 'Retourner à l\'accueil')}
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (

            /* SCREEN 2: Main Home Dashboard with Tabs */
            <motion.div
              key="home-screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >

              {/* HERO MOBILE COMPACT — progression + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#004D40] to-[#00695C] p-5 md:p-6 mb-3"
              >
                {/* Glow ambiant */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D0A21C]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  {/* Titre + sous-titre */}
                  <div>
                    <h1 className="text-lg md:text-xl font-black text-white tracking-tight">
                      {t('common.app_title', 'Al-Mouyassar')}
                    </h1>
                    <p className="text-[10px] text-emerald-200/60 font-medium mt-0.5">
                      {t('common.app_subtitle', 'Apprends l\'Islam en jouant')}
                    </p>
                  </div>

                  {/* Progression utilisateur compacte */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#D0A21C]/20 border border-[#D0A21C]/30 flex items-center justify-center">
                        <span className="text-[11px] font-black text-[#D0A21C]">{Math.floor(stats.xp / 200) + 1}</span>
                      </div>
                      <span className="text-[9px] text-emerald-100/50 font-medium">{stats.xp} XP</span>
                    </div>
                    {stats.streak > 0 && (
                      <div className="flex items-center gap-1 text-[9px] text-amber-300/70">
                        <Flame className="w-2.5 h-2.5" />
                        <span className="font-bold">{stats.streak}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA principal — micro-animation premium */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { playSelectSound(); setActiveTab('adventure'); }}
                    className="w-full py-2.5 bg-[#D0A21C] hover:bg-[#C4961A] text-[#004D40] text-[11px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D0A21C]/20 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {t('common.hero_cta', 'Reprendre l\'aventure')}
                  </motion.button>
                </div>
              </motion.div>

              {/* NAVIGATION MODES — pills horizontales */}
              <div className="overflow-x-auto scrollbar-none -mx-4 px-4 mb-4">
                <div className="flex gap-1.5 min-w-max pb-1">
                  {[
                    { key: 'pitch', icon: Compass, label: t('common.nav_presentation', 'Présentation') },
                    { key: 'adventure', icon: BookOpen, label: t('common.nav_adventure', 'Aventure') },
                    { key: 'quiz', icon: Play, label: t('common.nav_quiz_free', 'Quiz Libre') },
                    { key: 'oustaz', icon: Users, label: t('common.nav_oustaz', 'Oustaz AI'), disabled: isOustazBlocked },
                    { key: 'ansar', icon: Sparkles, label: t('common.nav_karaoke', 'Karaoké') },
                    { key: 'stats', icon: Award, label: t('common.nav_trophies', 'Trophées') },
                    { key: 'parental', icon: Settings, label: t('common.nav_parents', 'Parents') },
                  ].map(({ key, icon: Icon, label, disabled }) => (
                    <button
                      key={key}
                      onClick={() => { if (!disabled) { playSelectSound(); setActiveTab(key as any); } }}
                      disabled={disabled}
                      className={`shrink-0 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${disabled
                        ? 'opacity-30 cursor-not-allowed bg-stone-100/50 text-stone-400'
                        : activeTab === key
                          ? 'bg-[#004D40] text-white shadow-md shadow-emerald-950/20'
                          : 'bg-white/70 text-[#004D40]/70 hover:bg-white hover:text-[#004D40] border border-[#004D40]/10'
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* RENDER ACTIVE TAB WITH CAROUSEL TRANSITION */}
              <div className="relative w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: dir === 'rtl' ? -25 : 25, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: dir === 'rtl' ? 25 : -25, filter: 'blur(5px)' }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="w-full"
                  >
                    {activeTab === 'pitch' && (
                      <VisionPitch onStartAdventure={() => { playSelectSound(); setActiveTab('adventure'); }} />
                    )}

                    {activeTab === 'adventure' && (
                      <AdventureMode
                        adventureState={adventureState}
                        onUpdateState={setAdventureState}
                        onRewardUnlocked={(xp, title) => {
                          if (xp > 0) {
                            setStats(prev => ({
                              ...prev,
                              xp: prev.xp + xp,
                            }));
                          }
                          if (title && !adventureState.unlockedTitles.includes(title)) {
                            setAdventureState(prev => ({
                              ...prev,
                              unlockedTitles: [...prev.unlockedTitles, title]
                            }));
                          }
                        }}
                      />
                    )}

                    {activeTab === 'oustaz' && !isOustazBlocked && (
                      <OustazVirtual currentUser={currentUser} />
                    )}

                    {activeTab === 'ansar' && (
                      <VoixDesAnsar stats={stats} onUpdateStats={setStats} />
                    )}

                    {activeTab === 'parental' && (
                      <ParentalDashboard
                        stats={stats}
                        timerEnabled={timerEnabled}
                        onToggleTimer={setTimerEnabled}
                        isMuted={isMuted}
                        onToggleMute={setIsMuted}
                        isOustazBlocked={isOustazBlocked}
                        onToggleOustazBlocked={setIsOustazBlocked}
                        onResetProgress={handleResetProgress}
                        theme={theme}
                      />
                    )}

                    {activeTab === 'quiz' && (
                      <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="lg:col-span-2 space-y-6">
                            {/* Welcome Banner */}
                            <div className={`p-5 rounded-2xl border space-y-2 transition-all duration-300 ${theme === 'dark'
                              ? 'bg-gradient-to-br from-[#0c2340]/40 via-[#0f172a]/70 to-[#0f172a]/70 border-[#D0A21C]/20 backdrop-blur-md text-slate-200 shadow-md shadow-black/20'
                              : 'bg-gradient-to-br from-emerald-50/60 via-white to-white border-emerald-950/10 text-stone-850 shadow-md shadow-emerald-950/5'
                              }`}>
                              <span className={`text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-widest font-mono inline-block transition-colors duration-300 ${theme === 'dark'
                                ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                                : 'text-emerald-700 bg-emerald-50 border-emerald-250/20'
                                }`}>
                                {t('common.educational_platform', 'Plateforme Éducative')}
                              </span>
                              <h2 className={`text-xl font-black tracking-tight transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-stone-900'
                                }`}>
                                {t('common.learn_islamic_sciences', 'Apprenez les Sciences Islamiques !')}
                              </h2>
                              <p className={`text-xs leading-relaxed transition-colors duration-300 ${theme === 'dark' ? 'text-slate-350' : 'text-stone-600'
                                }`}>
                                {language === 'ar' ? (
                                  <>تدرب وحسّن معرفتك في <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>الفقه</strong>، و<strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>العقيدة</strong>، و<strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>السيرة</strong>، و<strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>القرآن</strong>، و<strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>الأخلاق</strong> واكتشف التاريخ النبيل لـ<strong className={theme === 'dark' ? 'text-amber-450 font-bold' : 'text-emerald-800 font-bold'}>معهد الميسر للقرآن الكريم</strong>.</>
                                ) : language === 'wo' ? (
                                  <>Mën nga fi jàng, yok sa xam-xam ci <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Fiqh</strong>, <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Aqidah</strong>, <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Sirah</strong>, <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Alquran</strong>, <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Akhlaq</strong> ak dundug daara <strong className={theme === 'dark' ? 'text-amber-450 font-bold' : 'text-emerald-800 font-bold'}>Al-Mouyassar</strong>.</>
                                ) : (
                                  <>Entraînez-vous, améliorez vos connaissances sur le <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Fiqh</strong>, la <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Aqidah</strong>, la <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Sirah</strong>, le <strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Coran</strong>, l&apos;<strong className={theme === 'dark' ? 'text-emerald-400 font-bold' : 'text-emerald-700 font-bold'}>Akhlaq</strong> et découvrez la noble histoire de l&apos;<strong className={theme === 'dark' ? 'text-amber-450 font-bold' : 'text-emerald-800 font-bold'}>Institut Coranique Al-Mouyassar</strong>.</>
                                )}
                              </p>
                            </div>

                            {/* Quiz Recommender Engine - suggestions based on levels and interests */}
                            <QuizRecommender
                              onStartCustomQuizList={handleStartRecommendedQuizList}
                              userStatsXp={stats.xp}
                              theme={theme}
                            />

                            {/* Configuration Form wrapper */}
                            <div className={`p-5 rounded-2xl border space-y-5 transition-all duration-300 ${theme === 'dark'
                              ? 'bg-[#0f172a]/70 border-[#D0A21C]/15 backdrop-blur-md text-slate-200 shadow-lg shadow-black/25'
                              : 'bg-white border-emerald-950/10 text-stone-850 shadow-md shadow-emerald-950/5'
                              }`}>
                              <h3 className={`text-sm font-extrabold uppercase tracking-wide border-b pb-2 transition-colors duration-300 ${theme === 'dark'
                                ? 'text-slate-300 border-slate-800/80'
                                : 'text-stone-700 border-stone-200'
                                }`}>
                                {t('quiz.exercise_config', "Configuration de l'exercice :")}
                              </h3>

                              {/* Search Bar filter */}
                              <div className="space-y-2">
                                <label className={`text-xs font-bold uppercase tracking-wider block transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
                                  }`}>
                                  {t('quiz.search_keyword', 'Rechercher par mot-clé :')}
                                </label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    placeholder={t('quiz_search_placeholder', 'Hadith, ablution, prière, pureté, intention, etc.')}
                                    value={quizSearchQuery}
                                    onChange={(e) => setQuizSearchQuery(e.target.value)}
                                    className={`w-full pl-10 pr-10 py-3 rounded-xl text-xs transition-all duration-300 font-medium ${theme === 'dark'
                                      ? 'bg-slate-950 text-slate-200 border-slate-850 placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none'
                                      : 'bg-stone-50 text-stone-850 border-stone-250 placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-400/30'
                                      }`}
                                  />
                                  <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-305 ${theme === 'dark' ? 'text-slate-500' : 'text-stone-400'
                                    }`}>
                                    <Search className="w-4 h-4" />
                                  </div>
                                  {quizSearchQuery && (
                                    <button
                                      onClick={() => { playSelectSound(); setQuizSearchQuery(''); }}
                                      className={`absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors font-bold cursor-pointer ${theme === 'dark' ? 'text-slate-500 hover:text-slate-300' : 'text-stone-400 hover:text-stone-600'
                                        }`}
                                      title="Effacer"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                              </div>

                              {/* Select Category */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
                                    }`}>
                                    {t('quiz.categories', "Sujets d'étude (Sélection multiple) :")}
                                  </label>
                                  <button
                                    onClick={handleSelectAllCategories}
                                    className="text-[10px] font-black text-emerald-500 hover:text-emerald-600 transition-colors uppercase cursor-pointer"
                                  >
                                    {selectedCategories.length === allCategories.length ? t('quiz.deselect_all', 'Tout décocher') : t('quiz.select_all', 'Tout cocher')}
                                  </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pb-1">
                                  {allCategories.map(cat => {
                                    const isSelected = selectedCategories.includes(cat);

                                    const activeClass = theme === 'dark'
                                      ? 'btn-3d-emerald bg-emerald-500/10 text-emerald-400 border-emerald-500/45 font-bold shadow-xs'
                                      : 'btn-3d-emerald bg-emerald-50 text-emerald-800 border-emerald-500/50 font-bold shadow-sm';
                                    const inactiveClass = theme === 'dark'
                                      ? 'btn-3d-slate bg-slate-955 text-slate-400 border-slate-850 hover:border-slate-800'
                                      : 'btn-3d-slate bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-300';

                                    return (
                                      <button
                                        key={cat}
                                        onClick={() => handleToggleCategory(cat)}
                                        className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${isSelected ? activeClass : inactiveClass
                                          }`}
                                      >
                                        <span className="truncate">{t(getCategoryKey(cat), cat)}</span>
                                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-all ${isSelected
                                          ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                                          : (theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-stone-300 bg-stone-100')
                                          }`}>
                                          {isSelected && <Check className={`w-3 h-3 stroke-[3] ${theme === 'dark' ? 'text-slate-950' : 'text-white'}`} />}
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Select Difficulty Level */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
                                    }`}>
                                    {t('quiz.difficulty', "Niveaux de difficulté (Sélection multiple) :")}
                                  </label>
                                  <button
                                    onClick={handleSelectAllLevels}
                                    className="text-[10px] font-black text-emerald-500 hover:text-emerald-600 transition-colors uppercase cursor-pointer"
                                  >
                                    {selectedLevels.length === allLevels.length ? t('quiz.deselect_all', 'Tout décocher') : t('quiz.select_all', 'Tout cocher')}
                                  </button>
                                </div>
                                <div className="grid grid-cols-3 gap-2.5 pb-1">
                                  {allLevels.map(lvl => {
                                    const isSelected = selectedLevels.includes(lvl);

                                    const activeClass = theme === 'dark'
                                      ? 'btn-3d-emerald bg-emerald-500/10 text-emerald-400 border-emerald-500/45 font-bold shadow-xs'
                                      : 'btn-3d-emerald bg-emerald-55 text-emerald-800 border-emerald-500/50 font-bold shadow-sm';
                                    const inactiveClass = theme === 'dark'
                                      ? 'btn-3d-slate bg-slate-955 text-slate-400 border-slate-850 hover:border-slate-800'
                                      : 'btn-3d-slate bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-300';

                                    return (
                                      <button
                                        key={lvl}
                                        onClick={() => handleToggleLevel(lvl)}
                                        className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${isSelected ? activeClass : inactiveClass
                                          }`}
                                      >
                                        <span>{t(getLevelKey(lvl), lvl)}</span>
                                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-all ${isSelected
                                          ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                                          : (theme === 'dark' ? 'border-slate-800 bg-slate-950' : 'border-stone-300 bg-stone-100')
                                          }`}>
                                          {isSelected && <Check className={`w-2.5 h-2.5 stroke-[3.5] ${theme === 'dark' ? 'text-slate-950' : 'text-white'}`} />}
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Timer Toggles */}
                              <div className="space-y-3 pt-2">
                                <div className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 ${theme === 'dark'
                                  ? 'bg-slate-955 border-slate-855'
                                  : 'bg-stone-50 border-stone-200'
                                  }`}>
                                  <div className="space-y-0.5">
                                    <label className={`text-xs font-bold flex items-center gap-1.5 font-sans transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-stone-850'
                                      }`}>
                                      <span>{t('quiz.activate_timer', 'Activer le Chronomètre')}</span>
                                    </label>
                                    <p className={`text-[10px] leading-tight transition-colors duration-300 ${theme === 'dark' ? 'text-slate-450' : 'text-stone-450'
                                      }`}>
                                      {t('quiz.timer_desc', 'Limite le temps de réflexion pour pimenter le défi')}
                                    </p>
                                  </div>

                                  <button
                                    onClick={() => { playSelectSound(); setTimerEnabled(!timerEnabled); }}
                                    className={`w-11 h-6 rounded-full p-1 transition-all cursor-pointer ${timerEnabled ? 'bg-emerald-600' : (theme === 'dark' ? 'bg-slate-850' : 'bg-stone-250')
                                      }`}
                                  >
                                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${timerEnabled ? 'translate-x-5' : 'translate-x-0'
                                      }`} />
                                  </button>
                                </div>

                                {timerEnabled && (
                                  <div className={`flex items-center justify-between px-3.5 py-2.5 border rounded-xl transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-slate-950 border-slate-850'
                                    : 'bg-stone-50 border-stone-200'
                                    }`}>
                                    <span className={`text-xs font-semibold transition-colors duration-300 ${theme === 'dark' ? 'text-slate-450' : 'text-stone-500'
                                      }`}>{language === 'ar' ? 'الوقت المحدد لكل سؤال :' : language === 'wo' ? 'Waxtu bu laaj bu ci nek :' : 'Durée par question :'}</span>
                                    <div className="flex items-center gap-2 pb-1">
                                      {[15, 25, 45].map((sec) => {
                                        const active = timerMinutes === sec;
                                        const activeClass = theme === 'dark'
                                          ? 'btn-3d-emerald bg-emerald-600/10 text-emerald-400 border-emerald-500/35 font-bold'
                                          : 'btn-3d-emerald bg-emerald-50 text-emerald-800 border-emerald-500/50 font-bold';
                                        const inactiveClass = theme === 'dark'
                                          ? 'btn-3d-slate bg-slate-900 text-slate-500 border-slate-850'
                                          : 'btn-3d-slate bg-stone-100 text-stone-500 border-stone-200';

                                        return (
                                          <button
                                            key={sec}
                                            onClick={() => { playSelectSound(); setTimerMinutes(sec); }}
                                            className={`px-3 py-1 text-xs font-bold font-mono rounded-lg border transition-all cursor-pointer ${active ? activeClass : inactiveClass
                                              }`}
                                          >
                                            {sec}s
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Launch CTA Trigger */}
                            <button
                              onClick={handleLaunchQuiz}
                              disabled={matchedQuestionsCount === 0}
                              className={`w-full py-4 text-xs font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer ${matchedQuestionsCount > 0
                                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg btn-3d-emerald'
                                : (theme === 'dark'
                                  ? 'bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-40 shadow-none'
                                  : 'bg-stone-200 text-stone-400 border border-stone-300 cursor-not-allowed opacity-50 shadow-none')
                                }`}
                            >
                              <Play className="w-4 h-4 text-white fill-white" />
                              <span>
                                {matchedQuestionsCount > 0
                                  ? (
                                    language === 'ar' ? 'ابدأ المسابقة !' :
                                      language === 'wo' ? 'Tambali laaj ak toontu bi !' :
                                        'Commencer le Quiz'
                                  )
                                  : (
                                    language === 'ar' ? 'لا توجد أسئلة متاحة' :
                                      language === 'wo' ? 'Amul laaj bu fi nekk' :
                                        'Aucune question disponible'
                                  )
                                }
                              </span>
                            </button>
                          </div>

                          {/* Right panel: Sidebar quick summary stats */}
                          <div className="space-y-6">

                            {/* Daily Quests Card */}
                            <div className={`p-4 rounded-2xl border space-y-3.5 shadow transition-all duration-300 ${theme === 'dark'
                              ? 'bg-[#0f172a]/70 border-[#D0A21C]/15 text-slate-200 shadow-md shadow-black/20'
                              : 'bg-white border-emerald-950/10 text-stone-850 shadow-md shadow-emerald-950/5'
                              }`}>
                              <div className={`flex items-center justify-between border-b pb-2 transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800/80' : 'border-stone-150'
                                }`}>
                                <h4 className={`text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 font-mono transition-colors duration-305 ${theme === 'dark' ? 'text-amber-400' : 'text-emerald-700'
                                  }`}>
                                  <Flame className={`w-3.5 h-3.5 animate-pulse ${theme === 'dark' ? 'text-amber-500' : 'text-emerald-600'}`} />
                                  Quêtes Quotidiennes
                                </h4>
                                <span className={`text-[8px] border font-mono font-bold px-1.5 py-0.5 rounded uppercase transition-colors duration-305 ${theme === 'dark'
                                  ? 'bg-slate-800 border-[#475569]/40 text-slate-400'
                                  : 'bg-stone-50 border-stone-200 text-stone-500'
                                  }`}>
                                  Aujourd&apos;hui
                                </span>
                              </div>

                              <div className="space-y-3">
                                {dailyQuests.map((quest) => {
                                  const progressPercent = Math.min(100, (quest.currentValue / quest.targetValue) * 100);

                                  return (
                                    <div key={quest.id} className={`p-2.5 rounded-xl border space-y-2 transition-all duration-300 ${theme === 'dark'
                                      ? 'bg-slate-955/70 border-slate-850'
                                      : 'bg-stone-50 border-stone-150/70'
                                      }`}>
                                      <div className="flex justify-between items-start gap-1">
                                        <div>
                                          <h5 className={`text-[11px] font-black leading-tight flex items-center gap-1 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-stone-850'
                                            }`}>
                                            {quest.title}
                                            {quest.isCompleted && <Check className="w-3 h-3 text-emerald-500 stroke-[3]" />}
                                          </h5>
                                          <p className={`text-[10px] leading-snug transition-colors duration-300 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-500'
                                            }`}>{quest.description}</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                          <span className={`text-[9px] font-black transition-colors duration-300 ${theme === 'dark' ? 'text-amber-400' : 'text-emerald-700'
                                            }`}>+{quest.xpReward} XP</span>
                                        </div>
                                      </div>

                                      {/* Progress bar */}
                                      <div className="space-y-1">
                                        <div className={`w-full h-1.5 rounded-full overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900' : 'bg-stone-200'
                                          }`}>
                                          <div
                                            className={`h-full transition-all duration-300 ${quest.isCompleted ? 'bg-emerald-500' : 'bg-emerald-600'}`}
                                            style={{ width: `${progressPercent}%` }}
                                          />
                                        </div>
                                        <div className={`flex justify-between text-[9px] font-mono transition-colors duration-300 ${theme === 'dark' ? 'text-slate-500' : 'text-stone-400'
                                          }`}>
                                          <span>{quest.currentValue} / {quest.targetValue}</span>
                                          {quest.isCompleted && !quest.isClaimed && (
                                            <button
                                              onClick={() => handleClaimQuestReward(quest.id)}
                                              className={`font-black uppercase tracking-wider cursor-pointer font-sans transition-colors duration-300 ${theme === 'dark' ? 'text-amber-400 hover:text-amber-300' : 'text-emerald-600 hover:text-emerald-700'
                                                }`}
                                            >
                                              Réclamer &rarr;
                                            </button>
                                          )}
                                          {quest.isClaimed && (
                                            <span className="text-stone-500 font-extrabold uppercase">Réclamé</span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Pupil card profile */}
                            <div className={`p-4 rounded-2xl border text-center space-y-4 shadow transition-all duration-300 ${theme === 'dark'
                              ? 'bg-[#0f172a]/70 border-[#D0A21C]/15 text-slate-200 shadow-md shadow-black/20'
                              : 'bg-white border-emerald-950/10 text-stone-850 shadow-md shadow-emerald-950/5'
                              }`}>
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-inner transition-all duration-300 ${theme === 'dark' ? 'bg-slate-950 border border-slate-850' : 'bg-emerald-50 border border-emerald-100 shadow-xs'
                                }`}>
                                <Medal className={`w-6 h-6 ${theme === 'dark' ? 'text-amber-400' : 'text-emerald-600'}`} />
                              </div>

                              <div>
                                <h4 className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${theme === 'dark' ? 'text-slate-450' : 'text-stone-500'
                                  }`}>{t('common.home_stats_title', 'Vos Statistiques')}</h4>
                                <p className={`text-lg font-black font-mono mt-1 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-stone-900'
                                  }`}>{stats.xp} <span className={`text-xs font-normal ${theme === 'dark' ? 'text-slate-450' : 'text-stone-400'}`}>XP</span></p>
                              </div>

                              <div className={`grid grid-cols-2 gap-2 border-t pt-3 transition-colors duration-300 ${theme === 'dark' ? 'border-slate-800/60' : 'border-stone-150'
                                }`}>
                                <div className="text-center">
                                  <p className={`text-[9px] uppercase font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-slate-450' : 'text-stone-500'
                                    }`}>{t('common.home_stats_correct', 'Réussies')}</p>
                                  <p className={`text-sm font-bold font-mono ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>{stats.correctAnswersCount}</p>
                                </div>
                                <div className="text-center">
                                  <p className={`text-[9px] uppercase font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-slate-455' : 'text-stone-500'
                                    }`}>{t('common.home_stats_quizzes', 'Quiz Finis')}</p>
                                  <p className={`text-sm font-bold font-mono ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{stats.completedQuizzesCount}</p>
                                </div>
                              </div>

                              <div className="pt-2 pb-1">
                                <button
                                  onClick={() => { playSelectSound(); setActiveTab('stats'); }}
                                  className={`w-full p-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer border ${theme === 'dark'
                                    ? 'bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-400 hover:text-white btn-3d-slate'
                                    : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-600 hover:text-stone-850 btn-3d-slate'
                                    }`}
                                >
                                  {t('common.home_stats_details', 'Détails des badges →')}
                                </button>
                              </div>
                            </div>

                            {/* Quick values guide details about the school */}
                            <div className={`p-4 rounded-2xl border space-y-3.5 transition-all duration-300 ${theme === 'dark'
                              ? 'bg-neutral-950/40 border-slate-850/80 text-slate-200'
                              : 'bg-emerald-50/20 border-emerald-950/5 shadow-xs text-stone-800'
                              }`}>
                              <h4 className={`text-[10px] font-black uppercase tracking-widest font-mono flex items-center gap-1.5 transition-colors duration-300 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                                }`}>
                                <Compass className="w-3.5 h-3.5" />
                                {t('common.home_school_title', "L'Institut Al-Mouyassar")}
                              </h4>
                              <p className={`text-[11px] leading-relaxed transition-colors duration-305 ${theme === 'dark' ? 'text-slate-400' : 'text-stone-600'
                                }`}>
                                {t('common.home_school_desc')}
                              </p>
                              <button
                                onClick={() => { playSelectSound(); setShowSchoolModal(true); }}
                                className={`text-[10px] font-black flex items-center gap-0.5 tracking-tight cursor-pointer transition-colors duration-300 ${theme === 'dark' ? 'text-amber-400 hover:text-amber-300' : 'text-emerald-600 hover:text-emerald-700'
                                  }`}
                              >
                                {t('common.home_school_history_btn', "Consulter l'histoire complète d'Al-Mouyassar →")}
                              </button>
                            </div>

                            {/* Reset button hidden at the bottom */}
                            <div className="pt-2.5 text-center">
                              <button
                                onClick={handleResetProgress}
                                className={`text-[9px] font-bold uppercase hover:underline cursor-pointer transition-colors duration-300 ${theme === 'dark' ? 'text-rose-500/70 hover:text-rose-500/95' : 'text-rose-600/70 hover:text-rose-600/95'
                                  }`}
                              >
                                Réinitialiser mon Progrès
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === 'stats' && (
                      <StatsCard stats={stats} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* About Creator — accessible depuis le footer */}
      {!isQuizActive && <AboutCreator onClose={() => { }} />}

      {/* Footer minimal */}
      <footer className="py-4 text-center">
        <p className="text-[10px] text-[var(--color-deep-green)]/30 font-medium">
          &copy; 2026 Al-Mouyassar Play & Learn
        </p>
        <p className="text-[8px] text-[var(--color-deep-green)]/20 mt-0.5 font-mono">
          v2.0 · Dédié à l'Institut Coranique Al-Mouyassar
        </p>
      </footer>

      {/* MODAL 1: School Info Sheet */}
      <AnimatePresence>
        {showSchoolModal && (
          <SchoolInfo onClose={() => { playSelectSound(); setShowSchoolModal(false); }} />
        )}
      </AnimatePresence>

      {/* MODAL 2: Quit Confirmation Dialogue */}
      <AnimatePresence>
        {quitConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white">Quitter l'entraînement en cours ?</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  Vos réponses sur cette session spécifique ne seront pas sauvées dans votre tableau de bord final. Êtes-vous sûr ?
                </p>
              </div>

              <div className="pt-2 flex gap-3.5">
                <button
                  onClick={() => { playSelectSound(); setQuitConfirmModal(false); }}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold rounded-lg transition-all cursor-pointer"
                >
                  Continuer le Quiz
                </button>
                <button
                  onClick={handleQuitQuizSession}
                  className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-505 text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Quitter quand même
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* GLOBAL NOTIFICATION: Achievement Badge Unlocked overlay banner */}
      <AnimatePresence>
        {showSessionBadgeBanner && latestSessionBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed bottom-6 right-6 z-55 max-w-md w-full bg-slate-900 border-2 border-amber-500/30 rounded-2xl p-5 shadow-2xl text-slate-100 flex gap-4 overflow-hidden"
          >
            {/* Background sparkle effect */}
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none" />

            <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shadow-inner">
              <Trophy className="w-6 h-6 animate-bounce" />
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <span className="text-[9px] font-extrabold text-amber-400 uppercase tracking-widest block font-mono">DÉFI ACCOMPLI !</span>
              <h4 className="text-sm font-bold text-white truncate mt-0.5">
                Nouveau Badge : {latestSessionBadges[latestSessionBadges.length - 1].title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-normal">
                {latestSessionBadges[latestSessionBadges.length - 1].description}
              </p>

              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setShowSessionBadgeBanner(false)}
                  className="px-2.5 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-750 transition-all cursor-pointer"
                >
                  Génial !
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PREMIUM MODALS */}

      {/* Daily Reward Modal */}
      <DailyReward
        rewards={dailyRewardsState}
        currentDay={dailyRewardDay}
        onClaim={handleClaimDailyReward}
        isOpen={showDailyReward}
        onClose={() => setShowDailyReward(false)}
      />

      {/* Badge Gallery Modal */}
      <BadgeGallery
        badges={badgesState}
        isOpen={showBadgeGallery}
        onClose={() => setShowBadgeGallery(false)}
        onBadgeClick={handleBadgeClick}
      />

      {/* Level Up Celebration Modal */}
      <LevelUpCelebration
        isOpen={showLevelUp}
        level={pendingLevelUp?.level ?? 1}
        xpEarned={pendingLevelUp?.xpEarned ?? 0}
        onClose={() => {
          setShowLevelUp(false);
          setPendingLevelUp(null);
        }}
      />

      {/* Custom Settings Modal (Cadre Blanc avec Badge) */}
      <AnimatePresence>
        {showSettingsModal && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { playSelectSound(); setShowSettingsModal(false); }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            {/* White Frame Card Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] bg-white border-[4px] border-emerald-500 rounded-3xl p-6 shadow-2xl text-gray-900 flex flex-col items-center select-none"
            >
              {/* Green seedling icon with outer soft border */}
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-2xl mb-4 animate-pulse-slow">
                🌱
              </div>

              {/* Rarity tag */}
              <span className="px-2.5 py-0.5 bg-gray-100 border border-gray-200 text-gray-500 rounded-full text-[9px] font-extrabold uppercase tracking-widest mb-2.5">
                COMMUN
              </span>

              {/* Badge Title */}
              <h3 className="text-xl font-display font-extrabold text-emerald-800 tracking-wide mb-1">
                Premier Pas
              </h3>

              {/* Badge Description */}
              <p className="text-xs font-semibold text-gray-600 text-center mb-4 leading-relaxed px-1">
                Tu as complété ton premier quiz
              </p>

              {/* Discovery Details Card */}
              <div className="w-full bg-gray-50 rounded-xl p-3 border border-gray-200/60 mb-5 flex flex-col items-center">
                <span className="px-2 py-0.5 bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-wider mb-2">
                  Découverte
                </span>
                <p className="text-xs font-bold text-gray-700 text-center">
                  Complète 1 quiz
                </p>
              </div>

              {/* Motivational Footer */}
              <p className="text-[10px] text-gray-400 font-bold text-center leading-normal max-w-[200px] mb-5 uppercase tracking-wide">
                Continue ton apprentissage pour débloquer ce badge
              </p>

              {/* Close Button */}
              <button
                onClick={() => { playSelectSound(); setShowSettingsModal(false); }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-emerald-700/10 focus:outline-none"
              >
                Fermer
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* AUTH MODAL SYSTEM (SUPABASE) */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-[#004D40]/30 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-sm bg-[#FCF8F2] border-2 border-[#D0A21C] rounded-3xl p-6 shadow-2xl overflow-hidden space-y-6"
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#004D40]/10 text-[#004D40] rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#004D40] uppercase tracking-tight">
                  {currentUser ? t('common.auth_profile_title') : authMode === 'signin' ? t('common.auth_signin_title') : t('common.auth_signup_title')}
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  {currentUser
                    ? t('common.auth_logged_in_desc')
                    : t('common.auth_logged_out_desc')}
                </p>
              </div>

              {currentUser ? (
                // Logged In UI
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
                    <div className="flex justify-between items-center text-xs text-stone-700">
                      <span className="text-stone-400 font-semibold uppercase">{t('common.auth_email_label')}</span>
                      <span className="font-extrabold text-[#004D40]">{currentUser.email}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-stone-700">
                      <span className="text-stone-400 font-semibold uppercase">{t('common.auth_xp_label')}</span>
                      <span className="font-extrabold text-[#D0A21C]">{stats.xp} XP</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={async () => {
                      playSelectSound();
                      setAuthLoading(true);
                      await supabase.auth.signOut();
                      setAuthLoading(false);
                      setShowAuthModal(false);
                    }}
                    disabled={authLoading}
                    className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('common.auth_logout_btn')}</span>
                  </button>
                </div>
              ) : (
                // Auth Forms UI
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    playSelectSound();
                    setAuthLoading(true);
                    setAuthError(null);

                    if (!authEmail || !authPassword) {
                      setAuthError(t('common.auth_error_empty'));
                      setAuthLoading(false);
                      return;
                    }

                    try {
                      if (authMode === 'signin') {
                        const { error } = await supabase.auth.signInWithPassword({
                          email: authEmail,
                          password: authPassword,
                        });
                        if (error) throw error;
                      } else {
                        const { error } = await supabase.auth.signUp({
                          email: authEmail,
                          password: authPassword,
                        });
                        if (error) throw error;
                        alert("Macha'Allah ! Ton compte d'aventurier a bien été créé. Amuse-toi bien et progresse sur le chemin du savoir ! ✨");
                      }
                      setShowAuthModal(false);
                    } catch (err: any) {
                      setAuthError(err.message || "Une erreur s'est produite lors de l'authentification.");
                    } finally {
                      setAuthLoading(false);
                    }
                  }}
                  className="space-y-4"
                >
                  {authError && (
                    <div className="p-3 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                      <p>{authError}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        {t('common.auth_email_field')}
                      </label>
                      <input
                        type="email"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        placeholder={t('common.auth_email_placeholder')}
                        required
                        className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#D0A21C]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        {t('common.auth_password_field')}
                      </label>
                      <input
                        type="password"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        placeholder={t('common.auth_password_placeholder')}
                        required
                        className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#D0A21C]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {authLoading ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : authMode === 'signin' ? (
                      t('common.auth_signin_btn')
                    ) : (
                      t('common.auth_signup_btn')
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        playSelectSound();
                        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                        setAuthError(null);
                      }}
                      className="text-stone-500 hover:text-[#004D40] text-xs font-bold transition-all underline cursor-pointer"
                    >
                      {authMode === 'signin' ? t('common.auth_switch_to_signup') : t('common.auth_switch_to_signin')}
                    </button>
                  </div>
                </form>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowAuthModal(false)}
                className="absolute top-2 right-2 p-1 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
