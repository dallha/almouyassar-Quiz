const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(__dirname, '..', 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf8');

// Add import
content = content.replace(
  "import { ErrorBoundary } from './components/ui/ErrorBoundary';",
  "import { ErrorBoundary } from './components/ui/ErrorBoundary';\nimport { useAppStore } from './store';"
);

// We need to replace everything from "// --- Persistent States ---" up to the line BEFORE "const handleBadgeClick"
const startMarker = "  // --- Persistent States ---";
const endMarker = "  const handleBadgeClick = (badge: BadgeData) => {";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Markers not found");
    process.exit(1);
}

const newBlock = `  // --- Zustand Store (Premium Architecture) ---
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
    progressQuest: handleProgressQuest,
    claimQuestReward: handleClaimQuestReward,
    claimDailyReward: handleClaimDailyReward,
    checkAndResetDailies
  } = useAppStore();

  useEffect(() => {
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
    supabase.auth.getSession().then(({ data: { session } }) => setCurrentUser(session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setCurrentUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  // Fetch profile stats on successful login
  useEffect(() => {
    if (!isSupabaseConfigured() || !currentUser) return;
    const loadProfile = async () => {
      try {
        const { data, error } = await supabase.from('profiles').select('*').eq('id', currentUser.id).single();
        if (error && error.code !== 'PGRST116') return;
        if (data) {
          setStats({
            xp: data.xp ?? 0,
            totalAnswered: data.total_answered ?? 0,
            correctAnswersCount: data.correct_answers_count ?? 0,
            streak: data.streak ?? 0,
            highestStreak: data.highest_streak ?? 0,
            lastPlayedDate: data.last_played_date ?? null,
            completedQuizzesCount: data.completed_quizzes_count ?? 0,
            unlockedBadgeIds: data.unlocked_badge_ids ?? [],
            masteryLevels: stats.masteryLevels || {},
            totalXpEarned: stats.totalXpEarned || 0,
            quizzesToday: stats.quizzesToday || 0,
            lastDailyReset: stats.lastDailyReset || null,
            preferredCategories: stats.preferredCategories || [],
            averageAccuracy: stats.averageAccuracy || 0
          });
        } else {
          await supabase.from('profiles').insert({
            id: currentUser.id, username: currentUser.email?.split('@')[0] || 'Apprenti Ansar',
            xp: stats.xp, total_answered: stats.totalAnswered, correct_answers_count: stats.correctAnswersCount,
            streak: stats.streak, highest_streak: stats.highestStreak, completed_quizzes_count: stats.completedQuizzesCount,
            unlocked_badge_ids: stats.unlockedBadgeIds,
          });
        }
      } catch (err) {}
    };
    loadProfile();
  }, [currentUser]);

  // Push updates to Supabase (debounced)
  useEffect(() => {
    if (isSupabaseConfigured() && currentUser) {
      const timeoutId = setTimeout(async () => {
        const { error } = await supabase.rpc('update_user_stats_secure', {
          new_xp: stats.xp, new_total_answered: stats.totalAnswered, new_correct: stats.correctAnswersCount,
          new_streak: stats.streak, new_highest_streak: stats.highestStreak, new_completed: stats.completedQuizzesCount, new_badges: stats.unlockedBadgeIds
        });
        if (error && (error.code === 'PGRST202' || error.message.includes('function "update_user_stats_secure" does not exist'))) {
          await supabase.from('profiles').update({
            xp: stats.xp, total_answered: stats.totalAnswered, correct_answers_count: stats.correctAnswersCount,
            streak: stats.streak, highest_streak: stats.highestStreak, completed_quizzes_count: stats.completedQuizzesCount,
            unlocked_badge_ids: stats.unlockedBadgeIds, updated_at: new Date().toISOString(),
          }).eq('id', currentUser.id);
        }
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, [stats, currentUser]);

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

`;

content = content.substring(0, startIndex) + newBlock + content.substring(endIndex);

fs.writeFileSync(appTsxPath, content, 'utf8');
console.log("App.tsx refactored for Zustand!");
