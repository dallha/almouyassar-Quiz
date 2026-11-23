/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Award, Trophy, Play, Settings, RefreshCw, Eye, BookOpen,
  ChevronRight, AlertTriangle, Users, BookOpenCheck, Flame, Medal, Check, X, Sparkles, Search, LogOut, Camera
} from 'lucide-react';
import AvatarBadge, { AVATAR_PRESETS } from './components/ui/AvatarBadge';

import { Question, UserStats, QuizSession, Badge, DailyQuest, getLocalizedQuestion, AdventureState } from './types';
import { QUESTIONS, BADGES } from './data';
import Header from './components/Header';
import AppShell from './components/AppShell';
import HomeDashboard from './components/HomeDashboard';
import QuizSetupPanel from './components/QuizSetupPanel';
import QuizCard from './components/QuizCard';
import StatsCard from './components/StatsCard';
import SchoolInfo from './components/SchoolInfo';
import { setMuteState, playBadgeSound, playSelectSound } from './components/SoundEngine';
import { useLanguage } from './LanguageContext';
import { neonAuth, isNeonAuthConfigured, type AuthUser } from './neonAuthClient';

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
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { useAppStore, pickSmartQuestions } from './store';
import { summarizeLearningPath } from './features/learning';
import { applyAnswerToProgress } from './features/quiz/sessionService';
import { getProgressSnapshot, getRecommendedReviewQueue } from './services/learningService';
import { loadChildProgressFromNeon, syncChildProgressToNeon } from './services/neonProgressService';
import { neonApiFetch } from './services/neonApiClient';
import { listProgressEvents, recordProgressEvent } from './services/progressRepository';
import { trackAnalyticsEvent } from './services/analyticsService';
import { getPublishedLearningPath } from './services/contentRepository';
import LearningPathPanel from './components/LearningPathPanel';
import CmsDashboard from './components/CmsDashboard';
import { migratePersistedQuestionIds } from './services/questionMigrationService';

const createDefaultUserStats = (): UserStats => ({
  xp: 0,
  totalAnswered: 0,
  correctAnswersCount: 0,
  streak: 0,
  highestStreak: 0,
  lastPlayedDate: null,
  completedQuizzesCount: 0,
  unlockedBadgeIds: [],
  masteryLevels: {},
  reviewItems: {},
  totalXpEarned: 0,
  quizzesToday: 0,
  lastDailyReset: null,
  preferredCategories: [],
  averageAccuracy: 0,
});

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

  const pedagogicalSummary = summarizeLearningPath(
    QUESTIONS.slice(0, 4).map((question) => {
      const mappedLevel = question.niveau === 'Avancé'
        ? 'Avancé'
        : question.niveau === 'Intermédiaire'
        ? 'Intermédiaire'
        : 'Débutant';

      return {
        id: `pedag-${question.id}`,
        domain: question.categorie === 'Fiqh' ? 'fiqh' : question.categorie === 'Aqidah' ? 'aqidah' : 'general',
        category: question.categorie,
        chapter: 'Fondations',
        lesson: 'Leçon active',
        level: mappedLevel,
        difficulty: question.niveau === 'Avancé' ? 3 : question.niveau === 'Intermédiaire' ? 2 : 1,
        skill: 'Maîtrise',
        objective: 'Renforcer la compréhension du contenu',
        tags: [question.categorie],
        language: language === 'ar' ? 'ar' : language === 'wo' ? 'wo' : 'fr',
        workflow: 'PUBLISHED',
        version: 1,
        question: question.question,
        options: question.options,
        correctAnswer: question.reponse_correcte,
        explanation: question.explication,
      } as const;
    })
  );

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

  // --- Neon Auth and Sync States ---
  // currentUser : authenticated Neon user session
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  // --- Zustand Store (Premium Architecture) ---
  const {
    stats, setStats,
    categoryStats, setCategoryStats,
    isMuted, setIsMuted,
    isOustazBlocked, setIsOustazBlocked,
    adventureState, setAdventureState,
    theme, setTheme,
    dailyQuests, setDailyQuests, questsDate,
    dailyRewardsState, setDailyRewardsState, dailyRewardDay, dailyRewardDate,
    badgesState, setBadgesState,
    username, setUsername,
    avatar, setAvatar,
    progressQuest: handleProgressQuest,
    claimQuestReward: handleClaimQuestReward,
    claimDailyReward: handleClaimDailyReward,
    checkAndResetDailies
  } = useAppStore();

  const [isAdventureSessionActive, setIsAdventureSessionActive] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);
  const [tempAvatar, setTempAvatar] = useState(avatar);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');
  const [showCustomPhotoInput, setShowCustomPhotoInput] = useState(false);

  const progressHistory = listProgressEvents(currentUser?.id || 'local-child').map(({ questionId, result, responseTimeMs, difficulty, attempts, lastReviewedAt }) => ({
      questionId,
      result,
      responseTimeMs,
      difficulty,
      attempts,
      lastReviewedAt,
    }));
  const learningSnapshot = getProgressSnapshot(stats, QUESTIONS, progressHistory);
  const recommendedReviewQueue = getRecommendedReviewQueue(QUESTIONS, stats, 5);
  const learningPath = getPublishedLearningPath();

  useEffect(() => {
    migratePersistedQuestionIds();
    checkAndResetDailies();
  }, [checkAndResetDailies]);

  // Apply Mute settings to Sound Engine
  useEffect(() => {
    setMuteState(isMuted);
  }, [isMuted]);

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
  }, [handleProgressQuest]);

  // --- Neon Auth and Sync States ---
  // showAuthModal : controls whether the auth modal is visible
  const [showAuthModal, setShowAuthModal] = useState(false);
  // authEmail/authPassword : values bound to the auth form inputs
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  // authUsername : username for signup form
  const [authUsername, setAuthUsername] = useState('');
  // authMode : determines which auth form variant is displayed
  // - signin : login
  // - signup : registration
  // - forgot : request password reset email
  // - recovery : update password after clicking the Neon recovery link
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot' | 'recovery'>('signin');
  // authRecoveryToken: stores the Neon recovery token from the URL
  const [authRecoveryToken, setAuthRecoveryToken] = useState<string | null>(null);
  // authRecoveryFlow: keeps the UI in recovery mode even if a session exists
  const [authRecoveryFlow, setAuthRecoveryFlow] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (showAuthModal) {
      setTempUsername(username);
      setTempAvatar(avatar);
      if (avatar && (avatar.startsWith('http://') || avatar.startsWith('https://') || avatar.startsWith('data:image'))) {
        setCustomPhotoUrl(avatar);
        setShowCustomPhotoInput(true);
      } else {
        setCustomPhotoUrl('');
        setShowCustomPhotoInput(false);
      }
    }
  }, [showAuthModal, username, avatar]);

  // Listen for Neon Authentication status
  useEffect(() => {
    if (!isNeonAuthConfigured()) return;
    neonAuth.getSession().then(({ data: { session } }) => {
      const user = session?.user ?? null;
      setCurrentUser(user as any);
      const name = (user as any)?.name || (user as any)?.user_metadata?.full_name || (user as any)?.user_metadata?.name;
      if (name && (!username || username === 'Explorateur')) {
        setUsername(name);
      }
      const img = (user as any)?.image || (user as any)?.user_metadata?.avatar_url || (user as any)?.user_metadata?.picture;
      if (img && (!avatar || avatar === 'mosque')) {
        setAvatar(img);
      }
    });
    const { data: { subscription } } = neonAuth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null;
      setCurrentUser(user as any);
      const name = (user as any)?.name || (user as any)?.user_metadata?.full_name || (user as any)?.user_metadata?.name;
      if (name && (!username || username === 'Explorateur')) {
        setUsername(name);
      }
      const img = (user as any)?.image || (user as any)?.user_metadata?.avatar_url || (user as any)?.user_metadata?.picture;
      if (img && (!avatar || avatar === 'mosque')) {
        setAvatar(img);
      }
    });
    return () => subscription.unsubscribe();
  }, [username, setUsername, avatar, setAvatar]);

  const handleResendConfirmationEmail = async () => {
    // Resend the email verification for users who have signed up but not yet confirmed.
    if (!authEmail) {
      setAuthError(t('common.auth_error_empty'));
      return;
    }

    setAuthError(null);
    setAuthMessage(null);
    setResendLoading(true);

    try {
      const { error } = await neonAuth.resend({ email: authEmail, type: 'signup' });
      if (error) throw error;
      setAuthMessage(t('common.auth_confirmation_resent'));
    } catch (err: any) {
      setAuthError(err.message || t('common.auth_error_generic'));
    } finally {
      setResendLoading(false);
    }
  };

  useEffect(() => {
    if (!isNeonAuthConfigured() || typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const token = params.get('token');

    if (type === 'recovery' && token) {
      // When a recovery link is opened, switch to the recovery flow.
      // This keeps the password reset modal visible and prevents the normal
      // logged-in user panel from taking over the UI.
      setAuthRecoveryToken(token);
      setAuthMode('recovery');
      setAuthRecoveryFlow(true);
      setShowAuthModal(true);
      setAuthMessage(t('common.auth_recovery_verifying'));
      setAuthError(null);
      setAuthLoading(true);

      const verifyRecoveryToken = async () => {
        try {
          const { data, error } = await neonAuth.verifyOtp({
            type: 'recovery',
            email: authEmail || '',
            token,
          });
          if (error) throw error;
          setAuthMessage(t('common.auth_recovery_verified'));
          if (data?.user?.email) {
            setAuthEmail(data.user.email);
          }
        } catch (err: any) {
          setAuthError(err.message || t('common.auth_error_generic'));
          setAuthRecoveryFlow(false);
        } finally {
          setAuthLoading(false);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      };

      verifyRecoveryToken();
    }
  }, [t]);

  useEffect(() => {
    // If recovery mode becomes active and the user session is available,
    // keep the recovery email field synchronized with the signed-in email.
    if (authMode === 'recovery' && currentUser?.email) {
      setAuthEmail(currentUser.email);
    }
  }, [authMode, currentUser]);

  // Fetch Neon progress on successful login
  useEffect(() => {
    if (!isNeonAuthConfigured() || !currentUser) return;
    const loadProfile = async () => {
      try {
        const savedProgress = await loadChildProgressFromNeon();
        if (savedProgress) {
          setStats(prev => ({
            ...createDefaultUserStats(),
            ...prev,
            xp: savedProgress.xp ?? 0,
            streak: savedProgress.streak ?? 0,
            completedQuizzesCount: savedProgress.completed_quizzes ?? 0,
            masteryLevels: prev.masteryLevels || {},
            totalXpEarned: prev.totalXpEarned || 0,
            quizzesToday: prev.quizzesToday || 0,
            lastDailyReset: prev.lastDailyReset || null,
            preferredCategories: prev.preferredCategories || [],
            averageAccuracy: prev.averageAccuracy || 0,
          }));
        } else {
          const defaultUsername = currentUser.email?.split('@')[0] || 'Apprenti Ansar';
          setUsername(defaultUsername);
        }
      } catch (err) {
        console.error('Erreur chargement progression Neon:', err);
      }
    };
    loadProfile();
  }, [currentUser]);

  // Helper function to sync stats to Neon immediately
  const syncStatsToNeon = async (statsToSync: UserStats, _advStateToSync?: typeof adventureState) => {
    if (!isNeonAuthConfigured() || !currentUser) return;
    try {
      await syncChildProgressToNeon(currentUser.id, statsToSync);
    } catch (err) {
      console.error('Erreur sync stats Neon:', err);
    }
  };

  // Push updates to Neon (debounced) - sauvegarde périodique
  useEffect(() => {
    if (isNeonAuthConfigured() && currentUser) {
      const timeoutId = setTimeout(() => {
        syncStatsToNeon(stats, adventureState);
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, [stats, adventureState, currentUser]);

  useEffect(() => {
    if (!currentUser) return;
    const flushProgress = () => {
      if (navigator.onLine) void syncStatsToNeon(stats, adventureState);
    };
    window.addEventListener('online', flushProgress);
    return () => window.removeEventListener('online', flushProgress);
  }, [currentUser, stats, adventureState]);

  // --- UI States ---
  const [activeTab, setActiveTab] = useState<'pitch' | 'adventure' | 'quiz' | 'oustaz' | 'ansar' | 'stats' | 'parental' | 'cms'>('pitch');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSchoolModal, setShowSchoolModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quitConfirmModal, setQuitConfirmModal] = useState(false);

  // --- Premium UI States ---
  const [showDailyReward, setShowDailyReward] = useState(false);
  const [showBadgeGallery, setShowBadgeGallery] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [pendingLevelUp, setPendingLevelUp] = useState<{ level: number; xpEarned: number } | null>(null);

  const handleBadgeClick = (badge: BadgeData) => {
    // Could trigger level-up or special animation
  };

  // --- Loading & Animation States ---
  const [isInitializing, setIsInitializing] = useState(true);
  const [initProgress, setInitProgress] = useState(0);
  const [initStatusMsg, setInitStatusMsg] = useState(t('common.system_starting'));
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
  const [quizQuestionCount, setQuizQuestionCount] = useState<number>(10);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timerMinutes, setTimerMinutes] = useState(25); // seconds per question
  const [quizSearchQuery, setQuizSearchQuery] = useState('');

  const [session, setSession] = useState<QuizSession | null>(null);
  const [latestSessionBadges, setLatestSessionBadges] = useState<Badge[]>([]);
  const [showSessionBadgeBanner, setShowSessionBadgeBanner] = useState(false);

  // Historique LRU persistant des questions vues (horodatage par ID pour zéro répétition)
  const [questionSeenTimestamps, setQuestionSeenTimestamps] = useState<Record<string, number>>(() => {
    try {
      const savedV2 = localStorage.getItem('mouyassar_question_seen_v2');
      if (savedV2) {
        const parsed = JSON.parse(savedV2);
        if (parsed && typeof parsed === 'object') return parsed;
      }
      const legacy = localStorage.getItem('mouyassar_recent_question_ids');
      if (legacy) {
        const legacyIds: (string | number)[] = JSON.parse(legacy);
        if (Array.isArray(legacyIds)) {
          const base = Date.now() - legacyIds.length * 1000;
          const migrated: Record<string, number> = {};
          legacyIds.forEach((id, idx) => {
            migrated[String(id)] = base + idx;
          });
          return migrated;
        }
      }
      return {};
    } catch {
      return {};
    }
  });

  const getDueReviewIdSet = (): Set<string | number> => {
    const dueSet = new Set<string | number>();
    for (const id of learningSnapshot.reviewPlan.dueItems) {
      dueSet.add(id);
      const numId = Number(id);
      if (!Number.isNaN(numId)) dueSet.add(numId);
    }
    for (const q of getRecommendedReviewQueue(QUESTIONS, stats, 10)) {
      if (stats.reviewItems?.[q.id]) dueSet.add(q.id);
    }
    return dueSet;
  };

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
      const resetStats: UserStats = createDefaultUserStats();
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

  const handleLaunchQuiz = (overrideCategories?: string[], overrideCount?: number) => {
    const activeCats = overrideCategories && overrideCategories.length > 0 ? overrideCategories : selectedCategories;
    const countToPick = overrideCount ?? quizQuestionCount;

    if (activeCats.length === 0 || selectedLevels.length === 0) {
      alert(t('common.alert_select_category_level'));
      return;
    }

    playSelectSound();

    // Filter questions based on configuration
    const filtered = QUESTIONS.filter(q =>
      activeCats.includes(q.categorie) &&
      selectedLevels.includes(q.niveau) &&
      (
        quizSearchQuery === '' ||
        q.question.toLowerCase().includes(quizSearchQuery.toLowerCase()) ||
        q.options.some(opt => opt.toLowerCase().includes(quizSearchQuery.toLowerCase()))
      )
    );

    if (filtered.length === 0) {
      alert(t('common.alert_no_question_match_filters'));
      return;
    }

    // Sélection intelligente LRU anti-répétition + révisions dues
    const { selected, updatedSeenTimestamps } = pickSmartQuestions(
      filtered,
      countToPick,
      questionSeenTimestamps,
      getDueReviewIdSet()
    );
    setQuestionSeenTimestamps(updatedSeenTimestamps);
    localStorage.setItem('mouyassar_question_seen_v2', JSON.stringify(updatedSeenTimestamps));

    launchSessionWithTransition(
      selected,
      t('common.transition_compile_quiz'),
    );
  };

  const handleStartQuizWithCategory = (category: string, levels?: string[]) => {
    playSelectSound();

    // Filter questions belonging to this category and matching selected levels if any
    const filtered = QUESTIONS.filter(q =>
      q.categorie === category &&
      (!levels || levels.includes(q.niveau))
    );

    if (filtered.length === 0) {
      alert(t('common.alert_no_question_for_subject_levels'));
      return;
    }

    // Sélection intelligente LRU anti-répétition + révisions dues
    const { selected, updatedSeenTimestamps } = pickSmartQuestions(
      filtered,
      10,
      questionSeenTimestamps,
      getDueReviewIdSet()
    );
    setQuestionSeenTimestamps(updatedSeenTimestamps);
    localStorage.setItem('mouyassar_question_seen_v2', JSON.stringify(updatedSeenTimestamps));

    launchSessionWithTransition(
      selected,
      t('common.transition_search_theme').replace('{category}', category),
      () => setActiveTab('quiz')
    );
  };

  const handleStartRecommendedQuizList = (title: string, questionsList: Question[]) => {
    playSelectSound();

    if (questionsList.length === 0) {
      alert(t('common.alert_no_question_for_theme_level'));
      return;
    }

    // Sélection intelligente LRU anti-répétition
    const { selected, updatedSeenTimestamps } = pickSmartQuestions(
      questionsList,
      7,
      questionSeenTimestamps,
      getDueReviewIdSet()
    );
    setQuestionSeenTimestamps(updatedSeenTimestamps);
    localStorage.setItem('mouyassar_question_seen_v2', JSON.stringify(updatedSeenTimestamps));

    launchSessionWithTransition(
      selected,
      t('common.transition_calculating_interests').replace('{title}', title),
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

    if (isCorrect) {
      handleProgressQuest('quiz_questions', 1);
    }

    const progressResult = applyAnswerToProgress({
      stats,
      categoryStats,
      currentQuestion,
      isCorrect,
      timeSpent,
      badgeDefinitions: BADGES,
    });

    const { updatedStats, updatedCategoryStats, newUnlockedBadgeIds, xpGained } = progressResult;

    recordProgressEvent({
      childId: currentUser?.id || 'local-child',
      questionId: String(currentQuestion.id),
      category: currentQuestion.categorie,
      result: isCorrect ? 'correct' : 'incorrect',
      responseTimeMs: timeSpent,
      difficulty: currentQuestion.niveau === 'Avancé' ? 3 : currentQuestion.niveau === 'Intermédiaire' ? 2 : 1,
      attempts: 1,
      lastReviewedAt: new Date().toISOString(),
    });
    if (currentUser) {
      trackAnalyticsEvent('question_answered', {
        questionId: currentQuestion.id,
        isCorrect,
        responseTimeMs: timeSpent,
        xpGained,
      }, currentUser.id);
    }

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
      setCategoryStats(updatedCategoryStats);
    }
    
    // Sync progress to Neon immediately after each answer
    syncStatsToNeon(updatedStats, adventureState);
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
    
    // Sync progress to Neon immediately after finishing a session
    syncStatsToNeon({
      ...stats,
      xp: stats.xp + bonusXp,
      completedQuizzesCount: stats.completedQuizzesCount + 1
    }, adventureState);
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
      catStr = t('common.all_categories');
    } else if (selectedCategories.length === 0) {
      catStr = t('common.no_category');
    } else if (selectedCategories.length <= 2) {
      catStr = selectedCategories.join(', ');
    } else {
      catStr = t('common.categories_count', { count: selectedCategories.length });
    }

    let lvlStr = '';
    if (selectedLevels.length === allLevels.length) {
      lvlStr = t('common.all_levels');
    } else if (selectedLevels.length === 0) {
      lvlStr = t('common.no_level');
    } else if (selectedLevels.length <= 2) {
      lvlStr = selectedLevels.join(', ');
    } else {
      lvlStr = t('common.levels_count', { count: selectedLevels.length });
    }

    return `${catStr} • ${lvlStr}`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col font-sans antialiased selection:bg-[#004D40]/25 ${theme === 'dark'
      ? 'bg-[#070b19] text-slate-100 dark'
      : 'bg-[#FCF8F2] text-stone-850'
      }`}>
      <span className="sr-only">{pedagogicalSummary}</span>
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

      {/* Smart Install Prompt — contextuel, badge flottant après 3 interactions */}
      <SmartInstallPrompt />

      {/* Main Core View Area wrapped in Responsive Neo-Heritage AppShell */}
      <AppShell
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        level={Math.floor(stats.xp / 200) + 1}
        xp={stats.xp}
        streak={stats.streak}
        avatar={avatar}
        isOustazBlocked={isOustazBlocked}
        isLoggedIn={currentUser !== null}
        isQuizActive={isQuizActive || isAdventureSessionActive}
        isFullscreen={false}
        onAvatarClick={() => setShowAuthModal(true)}
        onSearchClick={() => setShowSearchModal(true)}
      >
        <div className="flex-1 w-full mx-auto flex flex-col justify-start transition-all duration-300">
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
                    const localizedQ = getLocalizedQuestion(session.questions[session.currentIndex], language);
                    const isCorrect = selected === localizedQ.reponse_correcte;
                    handleAnswerValidatedCallback(selected, isCorrect, timeSpent);
                  }}
                  streak={stats.streak}
                  isTranslating={isTranslatingQuestion}
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
                        {t('common.session_score_label')}
                      </p>
                      <p className="text-xl font-bold font-mono text-white">
                        {session.score} <span className="text-slate-500 text-sm">/ {session.questions.length}</span>
                      </p>
                    </div>

                    <div className="text-center p-2 md:border-r border-slate-850/60">
                      <p className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mb-1">
                        {t('common.session_accuracy_label')}
                      </p>
                      <p className="text-xl font-bold font-mono text-emerald-400">
                        {Math.round((session.score / session.questions.length) * 100)}%
                      </p>
                    </div>

                    <div className="text-center p-2 col-span-2 md:col-span-1 border-t md:border-t-0 border-slate-850/60 pt-3 md:pt-2">
                      <p className="text-[10px] text-slate-450 uppercase font-bold tracking-wider mb-1">
                        {t('common.session_xp_label')}
                      </p>
                      <p className="text-xl font-bold font-mono text-amber-400">
                        +{session.score * 15 + (session.score === session.questions.length ? 50 : 0)} XP
                      </p>
                      {session.score === session.questions.length && (
                        <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/20 animate-pulse">
                          {t('common.session_perfect_bonus')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Newly unlocked badges alert inside results screen */}
                  {latestSessionBadges.length > 0 && (
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 max-w-lg mx-auto space-y-2 text-left">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3.5 h-3.5 fill-emerald-500" />
                        {t('common.session_badges_unlocked')}
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
                      {t('common.session_review_title')}
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
                                  {t('common.session_your_answer')}
                                </span>{' '}
                                <span className={isUserCorrect ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium line-through'}>
                                  {answerObj?.selectedAnswer || (
                                    t('common.session_timeout_empty')
                                  )}
                                </span>
                              </div>
                              <div className="text-slate-400">
                                <span className="font-semibold text-slate-500">
                                  {t('common.session_correct_answer')}
                                </span>{' '}
                                <span className="text-emerald-400 font-extrabold">
                                  {localizedQ.reponse_correcte}
                                </span>
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-400 leading-normal bg-slate-950/50 p-2.5 rounded border border-slate-900 italic">
                              <span className="font-semibold text-amber-500/90 not-italic block uppercase text-[8px] tracking-wider mb-0.5">
                                {t('common.session_explanation')}
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
                      <div className="space-y-6">
                        <HomeDashboard
                          stats={stats}
                          adventureState={adventureState}
                          dailyQuests={dailyQuests}
                          categoryStats={categoryStats}
                          isOustazBlocked={isOustazBlocked}
                          onStartAdventure={() => setActiveTab('adventure')}
                          onNavigateTab={(tab) => setActiveTab(tab)}
                          onStartCategoryQuiz={(category) => {
                            if (category) {
                              handleStartQuizWithCategory(category);
                            } else {
                              handleLaunchQuiz(allCategories, 10);
                            }
                          }}
                          onClaimQuest={(questId) => handleClaimQuestReward(questId)}
                        />
                        <LearningPathPanel
                          path={learningPath}
                          theme={theme}
                          onStartQuestion={(questionId) => {
                            const question = QUESTIONS.find((item) => item.id === questionId);
                            if (!question) return;
                            launchSessionWithTransition([question], t('common.transition_compile_quiz'), () => setActiveTab('quiz'));
                          }}
                        />
                      </div>
                    )}

                    {activeTab === 'adventure' && (
                      <ErrorBoundary>
                        <AdventureMode
                          adventureState={adventureState}
                          onUpdateState={setAdventureState}
                          onOpenProfile={() => setShowAuthModal(true)}
                          onExitAdventure={() => setActiveTab('pitch')}
                          onSessionActiveChange={setIsAdventureSessionActive}
                          onRewardUnlocked={(xp, title) => {
                            if (xp > 0) {
                              setStats((prev) => ({
                                ...prev,
                                xp: prev.xp + xp,
                              }));
                            }
                            if (title && !adventureState.unlockedTitles.includes(title)) {
                              setAdventureState((prev) => ({
                                ...prev,
                                unlockedTitles: [...prev.unlockedTitles, title],
                              }));
                            }
                          }}
                        />
                      </ErrorBoundary>
                    )}

                    {activeTab === 'oustaz' && !isOustazBlocked && (
                      <ErrorBoundary>
                        <OustazVirtual currentUser={currentUser} />
                      </ErrorBoundary>
                    )}

                    {activeTab === 'ansar' && (
                      <ErrorBoundary>
                        <VoixDesAnsar stats={stats} onUpdateStats={setStats} />
                      </ErrorBoundary>
                    )}

                    {activeTab === 'parental' && (
                      <ParentalDashboard
                        stats={stats}
                        currentUserId={currentUser?.id || null}
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

                    {activeTab === 'cms' && (
                      <CmsDashboard userId={currentUser?.id || null} theme={theme} />
                    )}

                    {activeTab === 'quiz' && (
                      <QuizSetupPanel
                        allCategories={allCategories}
                        allLevels={allLevels}
                        selectedCategories={selectedCategories}
                        selectedLevels={selectedLevels}
                        questionCount={quizQuestionCount}
                        timerEnabled={timerEnabled}
                        streak={stats.streak}
                        onChangeCategories={setSelectedCategories}
                        onChangeLevels={setSelectedLevels}
                        onChangeQuestionCount={setQuizQuestionCount}
                        onToggleTimer={setTimerEnabled}
                        onStartQuiz={(overrideCats, overrideCount) => handleLaunchQuiz(overrideCats, overrideCount)}
                      />
                    )}


                    {activeTab === 'stats' && (
                      <StatsCard
                        stats={stats}
                        learningSnapshot={learningSnapshot}
                        username={username}
                        isMuted={isMuted}
                        onToggleMute={setIsMuted}
                        onNavigateTab={(tab) => setActiveTab(tab)}
                        onOpenSchool={() => setShowSchoolModal(true)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
        </div>
      </AppShell>

      {/* Global Search Modal */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/40 backdrop-blur-sm flex items-start justify-center p-4 pt-20"
            onClick={() => setShowSearchModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              className="w-full max-w-2xl bg-surface-container-lowest rounded-2xl p-4 shadow-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-2">
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <GlobalSearch
                activeTab={activeTab}
                onNavigateTab={(tab) => {
                  setActiveTab(tab);
                  setShowSearchModal(false);
                }}
                onStartCustomQuiz={(category, levels) => {
                  setSelectedCategories([category]);
                  if (levels && levels.length > 0) setSelectedLevels(levels);
                  setShowSearchModal(false);
                  setActiveTab('quiz');
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <h3 className="text-base font-bold text-white">{t('common.quit_quiz_title')}</h3>
                <p className="text-xs text-slate-400 leading-normal">
                  {t('common.quit_quiz_desc')}
                </p>
              </div>

              <div className="pt-2 flex gap-3.5">
                <button
                  onClick={() => { playSelectSound(); setQuitConfirmModal(false); }}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold rounded-lg transition-all cursor-pointer"
                >
                  {t('common.quit_quiz_continue')}
                </button>
                <button
                  onClick={handleQuitQuizSession}
                  className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-505 text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  {t('common.quit_quiz_confirm')}
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
              <span className="text-[9px] font-extrabold text-amber-400 uppercase tracking-widest block font-mono">{t('common.badge_banner_title')}</span>
              <h4 className="text-sm font-bold text-white truncate mt-0.5">
                {t('common.badge_banner_new_badge')}: {latestSessionBadges[latestSessionBadges.length - 1].title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-normal">
                {latestSessionBadges[latestSessionBadges.length - 1].description}
              </p>

              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setShowSessionBadgeBanner(false)}
                  className="px-2.5 py-1 rounded bg-slate-850 hover:bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-750 transition-all cursor-pointer"
                >
                  {t('common.badge_banner_awesome')}
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

      {/* AUTH MODAL SYSTEM (NEON) */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowAuthModal(false);
                setAuthError(null);
                setAuthMessage(null);
              }}
              className="absolute inset-0 bg-[#004D40]/30 backdrop-blur-sm"
            />
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
                  {currentUser && !authRecoveryFlow
                    ? t('common.auth_profile_title')
                    : authMode === 'signin'
                    ? t('common.auth_signin_title')
                    : authMode === 'signup'
                    ? t('common.auth_signup_title')
                    : authMode === 'forgot'
                    ? t('common.auth_reset_password_title')
                    : t('common.auth_recovery_title')}
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  {currentUser && !authRecoveryFlow
                    ? t('common.auth_logged_in_desc')
                    : authMode === 'forgot'
                    ? t('common.auth_reset_password_desc')
                    : authMode === 'recovery'
                    ? t('common.auth_recovery_desc')
                    : t('common.auth_logged_out_desc')}
                </p>
              </div>

              {currentUser && !authRecoveryFlow ? (
                // Logged In UI with editable profile & avatar
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-stone-200 rounded-2xl space-y-4 shadow-sm">
                    {/* Header: Avatar preview + Email & XP */}
                    <div className="flex items-center gap-3.5 pb-3 border-b border-stone-100">
                      <div className="relative shrink-0">
                        <AvatarBadge avatar={tempAvatar} size="lg" />
                        <span className="absolute -bottom-1 -end-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                          {t('common.auth_email_label')}
                        </span>
                        <p className="text-xs font-bold text-stone-800 truncate">{currentUser.email}</p>
                        <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-extrabold text-[10px]">
                          ⭐ {stats.xp} XP
                        </span>
                      </div>
                    </div>

                    {/* Editable Username */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                        {t('common.user_profile', "Nom d'utilisateur")}
                      </label>
                      <input
                        type="text"
                        value={tempUsername}
                        onChange={(e) => setTempUsername(e.target.value)}
                        placeholder="Explorateur"
                        className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#004D40] transition-colors"
                      />
                    </div>

                    {/* Avatar Presets Grid */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                        {t('common.profile_choose_avatar')}
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {AVATAR_PRESETS.map((preset) => {
                          const isSelected = tempAvatar === preset.id;
                          return (
                            <button
                              key={preset.id}
                              type="button"
                              onClick={() => {
                                playSelectSound();
                                setTempAvatar(preset.id);
                              }}
                              className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#004D40] bg-emerald-50/60 ring-2 ring-[#004D40]/20 shadow-sm scale-105'
                                  : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                              }`}
                              title={t(preset.labelKey)}
                            >
                              <span className="text-2xl select-none">{preset.emoji}</span>
                              <span className="text-[9px] font-bold text-stone-600 truncate max-w-[55px] mt-1 text-center">
                                {t(preset.labelKey)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Custom Photo URL Input */}
                    <div className="pt-2 border-t border-stone-100">
                      <button
                        type="button"
                        onClick={() => setShowCustomPhotoInput(!showCustomPhotoInput)}
                        className="text-[11px] font-bold text-[#004D40] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>{t('common.profile_custom_photo_label')}</span>
                      </button>

                      {showCustomPhotoInput && (
                        <div className="mt-2 space-y-2">
                          <input
                            type="url"
                            value={customPhotoUrl}
                            onChange={(e) => {
                              const val = e.target.value;
                              setCustomPhotoUrl(val);
                              if (val.trim()) setTempAvatar(val.trim());
                            }}
                            placeholder={t('common.profile_custom_photo_placeholder')}
                            className="w-full px-3 py-1.5 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#004D40]"
                          />
                        </div>
                      )}
                    </div>

                    {/* Save Button */}
                    <button
                      type="button"
                      onClick={async () => {
                        if (!currentUser) return;
                        playSelectSound();
                        setAuthLoading(true);
                        setAuthError(null);
                        setAuthMessage(null);
                        const finalName = tempUsername.trim() || 'Explorateur';
                        const finalAvatar = tempAvatar || 'mosque';
                        try {
                          setUsername(finalName);
                          setAvatar(finalAvatar);

                          // Update Neon Auth user metadata
                          await neonAuth.updateUser({
                            data: {
                              name: finalName,
                              image: finalAvatar,
                            },
                          });

                          // Update Postgres profiles record
                          try {
                            await neonApiFetch('/api/profile', {
                              method: 'PATCH',
                              body: JSON.stringify({
                                username: finalName,
                                avatar_url: finalAvatar,
                              }),
                            });
                          } catch (apiErr) {
                            console.warn('Neon profile API sync note:', apiErr);
                          }

                          setAuthMessage(t('common.auth_profile_updated'));
                        } catch (err: any) {
                          setAuthError(err.message || t('common.auth_error_generic'));
                        } finally {
                          setAuthLoading(false);
                        }
                      }}
                      disabled={authLoading}
                      className="w-full py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {authLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <span>{t('common.auth_save_profile_btn')}</span>
                      )}
                    </button>
                  </div>

                  {/* Success/Error messages */}
                  {authError && (
                    <div className="p-3 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                      <p>{authError}</p>
                    </div>
                  )}
                  {authMessage && (
                    <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs rounded-xl">
                      {authMessage}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={async () => {
                      playSelectSound();
                      setAuthLoading(true);
                      await neonAuth.signOut();
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

                    if (!authEmail || (authMode !== 'forgot' && !authPassword)) {
                      setAuthError(t('common.auth_error_empty'));
                      setAuthLoading(false);
                      return;
                    }

                    try {
                      if (authMode === 'forgot') {
                        const { error } = await neonAuth.resetPasswordForEmail(authEmail);
                        if (error) throw error;
                        setAuthMessage(t('common.auth_reset_password_sent'));
                        setAuthPassword('');
                        setAuthMode('signin');
                        return;
                      }

                      if (authMode === 'signin') {
                        const { data, error } = await neonAuth.signInWithPassword({
                          email: authEmail,
                          password: authPassword,
                        });
                        if (error) throw error;
                        setAuthMessage(t('common.auth_success_signin', 'Connexion réussie !'));
                        setAuthEmail('');
                        setAuthPassword('');
                        setShowAuthModal(false);
                      } else if (authMode === 'recovery') {
                        // Update the user's password after a valid recovery token was verified.
                        const { data, error } = await neonAuth.updateUser({ password: authPassword });
                        if (error) throw error;
                        setAuthMessage(t('common.auth_password_changed_success'));
                        setAuthPassword('');
                        setAuthMode('signin');
                        setAuthRecoveryFlow(false);
                        setShowAuthModal(true);
                      } else {
                        let userCreated = false;
                        let sessionCreated = false;

                        const { data, error } = await neonAuth.signUp({
                          email: authEmail,
                          password: authPassword,
                        });

                        if (error) {
                          if (error.code === 'session_not_found' || error.message?.includes('session')) {
                            // User account was created in Neon Auth. Attempt immediate login:
                            userCreated = true;
                            const signInRes = await neonAuth.signInWithPassword({
                              email: authEmail,
                              password: authPassword,
                            });
                            if (signInRes.data?.session) {
                              sessionCreated = true;
                            }
                          } else {
                            throw error;
                          }
                        } else {
                          userCreated = true;
                          if (data?.session) {
                            sessionCreated = true;
                          }
                        }
                        
                        const finalUsername = authUsername.trim() || currentUser?.email?.split('@')[0] || authEmail.split('@')[0] || 'Explorateur';
                        if (userCreated || sessionCreated) setUsername(finalUsername);
                        
                        if (sessionCreated) {
                          setAuthMessage(t('common.auth_success_signup'));
                          setAuthEmail('');
                          setAuthPassword('');
                          setAuthUsername('');
                          setShowAuthModal(false);
                        } else {
                          setAuthMessage(
                            t(
                              'common.auth_confirm_email',
                              'Ton compte est créé. Vérifie ta boîte mail pour activer ton accès.'
                            )
                          );
                          setAuthPassword('');
                          setAuthUsername('');
                          setAuthMode('signin');
                        }
                      }
                    } catch (err: any) {
                      setAuthError(err.message || t('common.auth_error_generic'));
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
                  {authMessage && (
                    <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs rounded-xl">
                      {authMessage}
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
                        required={authMode !== 'recovery'}
                        disabled={authMode === 'recovery'}
                        className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#D0A21C] disabled:bg-stone-100 disabled:text-stone-500"
                      />
                    </div>
                    {/* Username field - only shown during signup */}
                  {authMode === 'signup' && (
                    <div>
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        {t('common.user_profile', "Nom d'utilisateur")}
                      </label>
                      <input
                        type="text"
                        value={authUsername}
                        onChange={(e) => setAuthUsername(e.target.value)}
                        placeholder="Explorateur"
                        className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#D0A21C]"
                      />
                    </div>
                  )}
                  {authMode !== 'forgot' && (
                      <div>
                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                          {t('common.auth_password_field')}
                        </label>
                        <input
                          type="password"
                          value={authPassword}
                          onChange={(e) => setAuthPassword(e.target.value)}
                          placeholder={t('common.auth_password_placeholder')}
                          required={authMode !== 'forgot'}
                          className="w-full px-3 py-2 border border-stone-200 bg-white text-stone-850 text-xs rounded-lg focus:outline-none focus:border-[#D0A21C]"
                        />
                      </div>
                    )}
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
                    ) : authMode === 'signup' ? (
                      t('common.auth_signup_btn')
                    ) : authMode === 'forgot' ? (
                      t('common.auth_reset_password_btn')
                    ) : (
                      t('common.auth_set_new_password_btn')
                    )}
                  </button>

                  {(authMode === 'signin' || authMode === 'signup') && (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-stone-200" />
                        <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                          {t('common.auth_or_divider')}
                        </span>
                        <div className="flex-1 h-px bg-stone-200" />
                      </div>

                      <button
                        type="button"
                        onClick={async () => {
                          playSelectSound();
                          setAuthLoading(true);
                          setAuthError(null);
                          try {
                            const { error } = await neonAuth.signInWithOAuth({
                              provider: 'google',
                              options: {
                                redirectTo: window.location.origin,
                              },
                            });
                            if (error) throw error;
                          } catch (err: any) {
                            setAuthError(err.message || t('common.auth_error_generic'));
                            setAuthLoading(false);
                          }
                        }}
                        disabled={authLoading}
                        className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 border border-stone-200 hover:border-stone-300 text-stone-700 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2.5"
                      >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>{t('common.auth_google_btn')}</span>
                      </button>
                    </div>
                  )}

                  {authMode === 'signin' && (
                    <div className="flex flex-col gap-2 text-center pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          playSelectSound();
                          setAuthMode('forgot');
                          setAuthError(null);
                          setAuthMessage(null);
                        }}
                        className="text-[#004D40] hover:text-[#002f2b] text-xs font-bold transition-all underline"
                      >
                        {t('common.auth_forgot_password')}
                      </button>
                      <button
                        type="button"
                        onClick={handleResendConfirmationEmail}
                        disabled={!authEmail || resendLoading}
                        className="text-[#004D40] hover:text-[#002f2b] text-xs font-bold transition-all underline disabled:opacity-50"
                      >
                        {resendLoading ? t('common.auth_sending') : t('common.auth_resend_confirmation_btn')}
                      </button>
                    </div>
                  )}

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        playSelectSound();
                        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                        setAuthError(null);
                        setAuthMessage(null);
                      }}
                      className="text-stone-500 hover:text-[#004D40] text-xs font-bold transition-all underline cursor-pointer"
                    >
                      {authMode === 'forgot'
                        ? t('common.auth_back_to_signin')
                        : authMode === 'signin'
                        ? t('common.auth_switch_to_signup')
                        : t('common.auth_switch_to_signin')}
                    </button>
                  </div>
                </form>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setShowAuthModal(false);
                  setAuthError(null);
                  setAuthMessage(null);
                }}
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
