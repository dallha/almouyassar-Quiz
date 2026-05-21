/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Play, Check, X, ArrowRight, Volume2, Sparkles, AlertCircle, Mic, Star, Award, ChevronLeft, Loader2, RotateCcw, Search } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import { UserStats } from '../types';

interface VoixDesAnsarProps {
  stats: UserStats;
  onUpdateStats: (updater: (prev: UserStats) => UserStats) => void;
}

interface VerseLine {
  id: number;
  arabicLine: string;
  frenchTranslation: string;
  missingWord: string;
  sentenceWithBlank: string;
  options: string[];
  audioSynthNotes: number[]; // frequencies for simulated audio note playback!
}

interface NasheedSong {
  id: string;
  title: string;
  composer: string;
  description: string;
  badgeId: string;
  badgeTitle: string;
  badgeDesc: string;
  lines: VerseLine[];
}

const NASHEEDS: NasheedSong[] = [
  {
    id: 'mouyassar',
    title: 'Le Nachid Al-Mouyassar',
    composer: 'Hymne officiel de l\'institut',
    description: 'Chante le poème de notre école et rends hommage aux anciens élèves, les Ansar.',
    badgeId: 'vox_or_mouyassar',
    badgeTitle: 'Voix d\'Or Al-Mouyassar',
    badgeDesc: 'Obtenu pour avoir chanté le Nachid de l\'institut avec un score impérial.',
    lines: [
      {
        id: 1,
        arabicLine: "مَرْحَباً يَا مَرْحَباً فِي دَارِ الـمُيَسَّرِ",
        frenchTranslation: "Bienvenue, ô bienvenue, dans la demeure de la facilité (Al-Mouyassar)",
        missingWord: "مُيَسَّرِ",
        sentenceWithBlank: "مَرْحَباً يَا مَرْحَباً فِي دَارِ الـ [ ________ ]",
        options: ["مَسْجِدِ", "مُيَسَّرِ", "مَدْرَسَةِ"],
        audioSynthNotes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00]
      },
      {
        id: 2,
        arabicLine: "نَحْمَدُ اللهَ عَلَى هَذَا الرَّشَادِ",
        frenchTranslation: "Nous louons Allah pour cette direction lumineuse (Le Rachâd)",
        missingWord: "الرَّشَادِ",
        sentenceWithBlank: "نَحْمَدُ اللهَ عَلَى هَذَا الـ [ ________ ]",
        options: ["الرَّشَادِ", "الرَّجَاءِ", "الْعِمَادِ"],
        audioSynthNotes: [392.00, 392.00, 440.00, 392.00, 523.25, 493.88]
      },
      {
        id: 3,
        arabicLine: "نَحْنُ أَنْصَارُ الْهُدَى فِي كُلِّ وَادِ",
        frenchTranslation: "Nous sommes les soutiens de la vérité dans chaque vallée (Ansar Al-Huda)",
        missingWord: "وَادِ",
        sentenceWithBlank: "نَحْنُ أَنْصَارُ الْهُدَى فِي كُلِّ [ ________ ]",
        options: ["بِلَادِ", "نَادِ", "وَادِ"],
        audioSynthNotes: [329.63, 349.23, 392.00, 329.63, 293.66, 261.63]
      }
    ]
  },
  {
    id: 'talaal',
    title: 'Tala\'al Badru \'Alayna',
    composer: 'Chant historique traditionnel',
    description: 'Le chant légendaire entonné par les Ansar de Médine pour accueillir le Saint Prophète (PSL).',
    badgeId: 'recitateur_medine',
    badgeTitle: 'Mélode de Médine',
    badgeDesc: 'Obtenu pour avoir interprété Tala\'al Badru \'Alayna avec ferveur.',
    lines: [
      {
        id: 1,
        arabicLine: "طَلَعَ الْبَدْرُ عَلَيْنَا مِنْ ثَنِيَّاتِ الْوَدَاعِ",
        frenchTranslation: "La pleine lune s'est levée sur nous, depuis les collines de l'Adieu",
        missingWord: "الْبَدْرُ",
        sentenceWithBlank: "طَلَعَ [ ________ ] عَلَيْنَا مِنْ ثَنِيَّاتِ الْوَدَاعِ",
        options: ["الْبَدْرُ", "النَّجْمُ", "الْفَجْرُ"],
        audioSynthNotes: [261.63, 329.63, 392.00, 440.00, 392.00, 329.63]
      },
      {
        id: 2,
        arabicLine: "وَجَبَ الشُّكْرُ عَلَيْنَا مَا دَعَا لِلَّهِ دَاعِ",
        frenchTranslation: "La gratitude nous est obligatoire tant qu'un inviteur l'invoque",
        missingWord: "الشُّكْرُ",
        sentenceWithBlank: "وَجَبَ [ ________ ] عَلَيْنَا مَا دَعَا لِلَّهِ دَاعِ",
        options: ["الصَّبْرُ", "الشُّكْرُ", "الْحَمْدُ"],
        audioSynthNotes: [349.23, 392.00, 440.00, 523.25, 440.00, 392.00]
      },
      {
        id: 3,
        arabicLine: "أَيُّهَا الْمَبْعُوثُ فِينَا جِئْتَ بِالأَمْرِ الْمُطَاعِ",
        frenchTranslation: "Ô toi l'envoyé parmi nous, tu es venu avec un ordre de soumission digne d'obéissance",
        missingWord: "الْمَبْعُوثُ",
        sentenceWithBlank: "أَيُّهَا [ ________ ] فِينَا جِئْتَ بِالأَمْرِ الْمُطَاعِ",
        options: ["الْمَبْعُوثُ", "الْـمَحْمُودُ", "الْمَنْصُورُ"],
        audioSynthNotes: [392.00, 440.00, 523.25, 587.33, 523.25, 440.00]
      }
    ]
  },
  {
    id: 'burda',
    title: 'La Qasida de la Burda',
    composer: 'Imam Al-Busiri',
    description: 'Le chef d\'œuvre suprême de l\'éloge prophétique chanté avec dévotion dans notre daara.',
    badgeId: 'vox_burda',
    badgeTitle: 'Mélode de la Burda',
    badgeDesc: 'Obtenu pour avoir interprété la célèbre Qasida de la Burda d\'Al-Busiri avec brio.',
    lines: [
      {
        id: 1,
        arabicLine: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ',
        frenchTranslation: 'Mon Seigneur, prie et salue éternellement et à jamais Ton Bien-Aimé, le meilleur de toutes les créatures.',
        missingWord: 'حَبِيبِكَ',
        sentenceWithBlank: 'مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا عَلى [ ________ ] خَيْرِ الْخَلْقِ كُلِّهِمِ',
        options: ['رَسُولِكَ', 'حَبِيبِكَ', 'نَبِيِّكَ'],
        audioSynthNotes: [261.63, 292.33, 311.13, 349.23, 392.00, 440.00]
      },
      {
        id: 2,
        arabicLine: 'أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ',
        frenchTranslation: 'Est-ce en te souvenant des voisins de Dhi Salam que tu verses des larmes mêlées de sang ?',
        missingWord: 'جِيرَانٍ',
        sentenceWithBlank: 'أَمِنْ تَذَكُّرِ [ ________ ] بِذِي سَلَمِ مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِدَمِ',
        options: ['أَحْبَابٍ', 'جِيرَانٍ', 'عَشِيرَةٍ'],
        audioSynthNotes: [392.00, 392.00, 440.00, 392.00, 523.25, 493.88]
      },
      {
        id: 3,
        arabicLine: 'فَمَبْلَغُ الْعِلْمِ فِيهِ أَنَّهُ بَشَرٌ وَأَنَّهُ خَيْرُ خَلْقِ اللَّهِ كُلِّهِمِ',
        frenchTranslation: 'La limite du savoir à son sujet est d\'affirmer qu\'il est homme, et qu\'il est le meilleur des êtres créés.',
        missingWord: 'بَشَرٌ',
        sentenceWithBlank: 'فَمَبْلَغُ الْعِلْمِ فِيهِ أَنَّهُ [ ________ ] وَأَنَّهُ خَيْرُ خَلْقِ اللَّهِ كُلِّهِمِ',
        options: ['مَلَكٌ', 'بَشَرٌ', 'نُورٌ'],
        audioSynthNotes: [329.63, 349.23, 392.00, 329.63, 293.66, 261.63]
      }
    ]
  },
  {
    id: 'niass_poeme',
    title: 'Le Poème du Savoir Lumineux',
    composer: 'Cheikh El Hadji Abdallah Niasse',
    description: 'Une somptueuse invitation à l\'ardeur dans l\'apprentissage des sciences sacrées de notre institut.',
    badgeId: 'vox_niass',
    badgeTitle: 'Héritier du Fondateur',
    badgeDesc: 'Attribué aux élèves qui honorent par leur chant de chœur la mémoire du fondateur.',
    lines: [
      {
        id: 1,
        arabicLine: 'يَا طَالِباً لِعُلُومِ الدِّينِ مُجْتَهِداً اِسْلُكْ طَرِيقَ الرَّشَادِ الدَّائِمِ الأَبَدِ',
        frenchTranslation: 'Ô chercheur assidu des sciences religieuses, emprunte fermement le chemin de la guidance éternelle.',
        missingWord: 'الدِّينِ',
        sentenceWithBlank: 'يَا طَالِباً لِعُلُومِ [ ________ ] مُجْتَهِداً اِسْلُكْ طَرِيقَ الرَّشَادِ',
        options: ['الدِّينِ', 'الدُّنْيَا', 'الرَّسُولِ'],
        audioSynthNotes: [261.63, 329.63, 392.00, 440.00, 392.00, 329.63]
      },
      {
        id: 2,
        arabicLine: 'وَالْزَمْ كِتَابَ إِلَهِ الْعَرْشِ مُعْتَصِماً بِهِ مِنَ الفِتَنِ الصَّمَّاءِ فِي جَلَدِ',
        frenchTranslation: 'Attache-toi indéfectiblement au Livre du Maître du Trône pour te protéger des dures tentations.',
        missingWord: 'كِتَابَ',
        sentenceWithBlank: 'وَالْزَمْ [ ________ ] إِلَهِ الْعَرْشِ مُعْتَصِماً بِهِ مِنَ الفِتَنِ',
        options: ['قَوْلَ', 'صُحُفَ', 'كِتَابَ'],
        audioSynthNotes: [349.23, 392.00, 440.00, 523.25, 440.00, 392.00]
      },
      {
        id: 3,
        arabicLine: 'وَكُنْ كَأَنْصَارِ طَهَ فِي حَمَاسَتِهِمْ لِنَصْرَةِ الْحَقِّ لاَ تَجْبُنْ وَلاَ تَمِدِ',
        frenchTranslation: 'Sois semblable aux Ansar du Prophète Taha dans leur dynamisme à triompher par la vérité.',
        missingWord: 'كَأَنْصَارِ',
        sentenceWithBlank: 'وَكُنْ [ ________ ] طَهَ فِي حَمَاسَتِهِمْ لِنَصْرَةِ الْحَقِّ',
        options: ['مِثْلَ', 'كَأَنْصَارِ', 'مَعَ'],
        audioSynthNotes: [392.00, 440.00, 523.25, 587.33, 523.25, 440.00]
      }
    ]
  },
  {
    id: 'hanana',
    title: 'Ya Hanana (Ô Notre Bonheur !)',
    composer: 'Chant Populaire Célèbre',
    description: 'Un merveilleux hymne de gloire et de reconnaissance récitée par les chœurs d\'enfants.',
    badgeId: 'vox_hanana',
    badgeTitle: 'Messager du Bonheur',
    badgeDesc: 'Obtenu pour avoir complété et célébré avec joie le poème ô combien bienveillant de Ya Hanana.',
    lines: [
      {
        id: 1,
        arabicLine: 'ظَهَرَ الدِّينُ الـمُؤَيَّدْ بِظُهُورِ النَّبِي أَحْمَدْ',
        frenchTranslation: 'La sainte religion divine a triomphé à l\'instant où le Prophète béni Ahmad est apparu.',
        missingWord: 'الـمُؤَيَّدْ',
        sentenceWithBlank: 'ظَهَرَ الدِّينُ [ ________ ] بِظُهُورِ النَّبِي أَحْمَدْ',
        options: ['الْـمَجِيدْ', 'الْـمُنِيرْ', 'الـمُؤَيَّدْ'],
        audioSynthNotes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00]
      },
      {
        id: 2,
        arabicLine: 'يَا هَنَانَا بِالْـمُصْطَفَى هَذَا الشَّرَفُ الْـمُجْتَبَى',
        frenchTranslation: 'Quel grand bonheur est le nôtre grâce à l\'Élu ! C\'est le plus haut honneur d\'élection.',
        missingWord: 'هَنَانَا',
        sentenceWithBlank: 'يَا [ ________ ] بِالْـمُصْطَفَى هَذَا الشَّرَفُ الْـمُجْتَبَى',
        options: ['هَنَانَا', 'بُشْرَانَا', 'سَعْدُنَا'],
        audioSynthNotes: [329.63, 349.23, 392.00, 329.63, 293.66, 261.63]
      },
      {
        id: 3,
        arabicLine: 'صَلِّ يَا رَبِّ عَلَيْهِ وَآلِهِ الْـمُنْتَسِبِينَ إِلَيْهِ',
        frenchTranslation: 'Répands ô Seigneur Tes plus hauts saluts perpétuels sur sa personne et sur toute sa descendance.',
        missingWord: 'عَلَيْهِ',
        sentenceWithBlank: 'صَلِّ يَا رَبِّ [ ________ ] وَآلِهِ الْـمُنْتَسِبِينَ إِلَيْهِ',
        options: ['عَلَيْنَا', 'عَلَيْهِ', 'عَلَيْهِمْ'],
        audioSynthNotes: [392.00, 440.00, 523.25, 587.33, 523.25, 440.00]
      }
    ]
  }
];

function SparkleConfetti() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {particles.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 110 + 60;
        const startX = 50; // percentage
        const startY = 40; // percentage
        const xDir = Math.cos(angle) * speed;
        const yDir = Math.sin(angle) * speed;
        const scale = Math.random() * 0.8 + 0.4;
        const duration = Math.random() * 1.5 + 1.0;
        const colors = [
          '#D0A21C', '#388E3C', '#2196F3', '#FF4081', '#FFEB3B', '#4CAF50'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const shapes = ['★', '✦', '✧', '♥', '●', '◆'];
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
              scale: [0, scale, scale * 1.3, 0],
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

export default function VoixDesAnsar({ stats, onUpdateStats }: VoixDesAnsarProps) {
  const [selectedSong, setSelectedSong] = useState<NasheedSong | null>(null);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  
  // Search Bar
  const [searchQuery, setSearchQuery] = useState('');
  
  // Confetti Animation State
  const [showLineConfetti, setShowLineConfetti] = useState(false);
  
  // Gameplay Step Flow
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [isMelodyHeard, setIsMelodyHeard] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isWordAnswered, setIsWordAnswered] = useState(false);
  const [isWordCorrect, setIsWordCorrect] = useState(false);

  // Micro Singing Phase
  const [singingActive, setSingingActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [audioWaveBlocks, setAudioWaveBlocks] = useState<number[]>([]);
  const [singingScore, setSingingScore] = useState<number | null>(null);

  // AI Oustaz Feedback
  const [isOustazLoading, setIsOustazLoading] = useState(false);
  const [oustazFeedback, setOustazFeedback] = useState<string | null>(null);

  // Points tracking for current song run
  const [songBlankPoints, setSongBlankPoints] = useState(0);
  const [songVoiceXPEarned, setSongVoiceXPEarned] = useState(0);
  const [linesCompletedCount, setLinesCompletedCount] = useState(0);

  // Completed badge visual flags
  const [newBadgeUnlocked, setNewBadgeUnlocked] = useState<string | null>(null);

  // Web Audio refs for real microphone capture
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const activeLine = selectedSong?.lines[currentLineIdx];

  // Text to speech utility
  const speakTextAloud = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[\*#_]/g, ''); // remove markdown symbols
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.92; // slightly slower, extremely gentle teacher pace
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn("Speech Synthesis blocked in sandbox", e);
      }
    }
  };

  const fetchOustazAIComment = async (customScore: number | null = null) => {
    const scoreToEvaluate = customScore !== null ? customScore : singingScore;
    if (!activeLine || scoreToEvaluate === null || isOustazLoading) return;
    
    playSelectSound();
    setIsOustazLoading(true);
    setOustazFeedback(null);
    setShowLineConfetti(false);

    const helperPrompt = `En tant qu'Oustaz AI de l'Institut Coranique Al-Mouyassar, donne ton feedback et commentaire vocal personnalisé pour un enfant qui vient d'interpréter en ligne du Nasheed la ligne arabe suivante : '${activeLine.arabicLine}' (qui signifie '${activeLine.frenchTranslation}'). Le score d'exécution vocale obtenu est de ${scoreToEvaluate}/100. Parle avec une infinie bienveillance, commence chaleureusement par 'Macha'Allah !' ou 'Barakallahou fik !', dresse un bilan de son interprétation et offre-lui un unique conseil de chant ou de prononciation de l'arabe, rédigé en français avec des expressions aimables. Écris tout en français sans mettre de longs morceaux en arabe pour que la synthèse vocale française de l'ordinateur puis se le lire fluidement avec douceur.`;

    let feedbackText = '';
    try {
      const res = await fetch('/api/oustaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: helperPrompt,
          history: [] // generic fresh trigger prompt
        })
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data && data.text) {
        feedbackText = data.text;
      } else {
        throw new Error();
      }
    } catch (e) {
      feedbackText = `Macha'Allah mon cher enfant ! Ta récitation de la ligne "${activeLine.arabicLine}" avec un score de ${scoreToEvaluate}% est une immense joie pour les anciens élèves de l'Institut. Ton rythme est fluide et ta prononciation est harmonieuse. Pense à bien faire vibrer les lettres finales lors du chant. Que la paix t'accompagne !`;
    } finally {
      setOustazFeedback(feedbackText);
      setIsOustazLoading(false);
      setShowLineConfetti(true);
      speakTextAloud(feedbackText);
    }
  };

  // Web Audio capture cleaner
  const stopAudioCapture = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      if (audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      audioContextRef.current = null;
    }
    analyserRef.current = null;
  };

  // Clean on unmount
  useEffect(() => {
    return () => {
      stopAudioCapture();
    };
  }, []);

  // Decoupled Progress Tracker & Recording Completer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      // Start microphone stream capture
      if (typeof window !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            mediaStreamRef.current = stream;
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) {
              const ctx = new AudioCtx();
              audioContextRef.current = ctx;
              const analyser = ctx.createAnalyser();
              analyser.fftSize = 64;
              analyser.smoothingTimeConstant = 0.6;
              analyserRef.current = analyser;
              const source = ctx.createMediaStreamSource(stream);
              source.connect(analyser);
            }
          })
          .catch(err => {
            console.warn("Microphone access denied or not supported. Falling back to simulation.", err);
          });
      }

      interval = setInterval(() => {
        setRecordingProgress(prev => {
          if (prev >= 100) {
            setIsRecording(false);
            stopAudioCapture();
            return 100;
          }
          return prev + 5; // smooth 2-second recording
        });

        // Generate height parameters based on real analyser frequency data
        if (analyserRef.current) {
          const bufferLength = analyserRef.current.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyserRef.current.getByteFrequencyData(dataArray);
          
          // Map to 15 blocks
          const blocks: number[] = [];
          for (let i = 0; i < 15; i++) {
            // read frequencies from the lower bins where voice is most prominent
            const val = dataArray[i] || 0;
            // scale value (usually 0-255) to 5-50 height
            const height = Math.floor((val / 255) * 45) + 5;
            blocks.push(height);
          }
          setAudioWaveBlocks(blocks);
        } else {
          // Simulation fallback
          setAudioWaveBlocks(Array.from({ length: 15 }, () => Math.floor(Math.random() * 45) + 5));
        }
      }, 100);
    }
    return () => {
      clearInterval(interval);
      if (!isRecording) {
        stopAudioCapture();
      }
    };
  }, [isRecording]);

  // Reactive handler for completing recording to set score and auto-invoke Virtuel Oustaz
  useEffect(() => {
    if (!isRecording && recordingProgress >= 100 && singingActive) {
      setSingingActive(false);
      
      // Simulate vocal fidelity evaluation (81% to 100%)
      const randomScore = Math.floor(Math.random() * 20) + 81;
      setSingingScore(randomScore);
      
      // Allocate voice singing XP
      const bonusXP = Math.round((randomScore / 100) * 20) + 10;
      setSongVoiceXPEarned(curr => curr + bonusXP);
      onUpdateStats(statsPrev => ({
        ...statsPrev,
        xp: statsPrev.xp + bonusXP
      }));

      // Launch daily quest completed check event
      window.dispatchEvent(new CustomEvent('karaoke_line_sung'));
      
      // Auto-trigger virtual Oustaz evaluation and TTS play!
      fetchOustazAIComment(randomScore);
    }
  }, [isRecording, recordingProgress, singingActive]);

  // Audio note player (sine synthesis using client-side AudioContext)
  const playLineMelody = () => {
    if (typeof window === 'undefined' || !activeLine) return;
    playSelectSound();
    setIsPlayingMelody(true);

    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) {
      setIsPlayingMelody(false);
      setIsMelodyHeard(true);
      return;
    }

    try {
      const audioCtx = new AudioCtx();
      const notes = activeLine.audioSynthNotes;
      
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        // Classic pleasant sine chime timbre
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.38);
        
        // exponential smooth fade
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime + idx * 0.38);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + idx * 0.38 + 0.35);
        
        osc.start(audioCtx.currentTime + idx * 0.38);
        osc.stop(audioCtx.currentTime + idx * 0.38 + 0.38);
      });

      setTimeout(() => {
        setIsPlayingMelody(false);
        setIsMelodyHeard(true);
      }, notes.length * 380);

    } catch (e) {
      console.warn("AudioContext block", e);
      setIsPlayingMelody(false);
      setIsMelodyHeard(true);
    }
  };

  const handleSelectOption = (opt: string) => {
    if (isWordAnswered) return;
    playSelectSound();
    setSelectedWord(opt);
  };

  const checkAndClaimSongBadges = (song: NasheedSong) => {
    if (!stats.unlockedBadgeIds.includes(song.badgeId)) {
      setNewBadgeUnlocked(song.badgeTitle);
      onUpdateStats(p => ({
        ...p,
        unlockedBadgeIds: [...p.unlockedBadgeIds, song.badgeId],
        xp: p.xp + 50 // Unlocked karaoke badge reward
      }));
    }
  };

  const handleValidateWordSelection = () => {
    if (!activeLine || !selectedWord || isWordAnswered) return;

    const correct = selectedWord === activeLine.missingWord;
    setIsWordCorrect(correct);
    setIsWordAnswered(true);

    if (correct) {
      setSongBlankPoints(prev => prev + 25);
      onUpdateStats(p => ({
        ...p,
        xp: p.xp + 15,
        totalAnswered: p.totalAnswered + 1,
        correctAnswersCount: p.correctAnswersCount + 1
      }));
    } else {
      onUpdateStats(p => ({
        ...p,
        totalAnswered: p.totalAnswered + 1
      }));
    }
  };

  const handleStartSinging = () => {
    playSelectSound();
    setSingingActive(true);
    setIsRecording(true);
    setRecordingProgress(0);
    setSingingScore(null);
    setOustazFeedback(null);
    setShowLineConfetti(false);
  };

  const handleAdvanceNextLine = () => {
    if (!selectedSong) return;
    playSelectSound();

    // Reset loop markers
    setIsMelodyHeard(false);
    setSelectedWord(null);
    setIsWordAnswered(false);
    setIsWordCorrect(false);
    setSingingScore(null);
    setOustazFeedback(null);

    if (currentLineIdx < selectedSong.lines.length - 1) {
      setCurrentLineIdx(prev => prev + 1);
    } else {
      // Completed full song!
      setLinesCompletedCount(selectedSong.lines.length);
      checkAndClaimSongBadges(selectedSong);
    }
  };

  const handleRestartFullSong = () => {
    playSelectSound();
    setCurrentLineIdx(0);
    setSongBlankPoints(0);
    setSongVoiceXPEarned(0);
    setLinesCompletedCount(0);
    setIsMelodyHeard(false);
    setSelectedWord(null);
    setIsWordAnswered(false);
    setIsWordCorrect(false);
    setSingingScore(null);
    setOustazFeedback(null);
    setNewBadgeUnlocked(null);
  };

  const handleQuitToSongbook = () => {
    playSelectSound();
    setSelectedSong(null);
    handleRestartFullSong();
  };

  return (
    <div className="max-w-xl mx-auto space-y-5">
      
      {/* SONG SELECTION LIST SCREEN */}
      {!selectedSong ? (
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-[9px] font-black tracking-widest text-[#D0A21C] bg-amber-500/10 border border-[#D0A21C]/20 px-3 py-1 rounded-full uppercase font-mono inline-block">
              La Voix des Ansar (Karaoké Islamique)
            </span>
            <h2 className="text-xl font-black text-[#004D40] uppercase tracking-tight">Le Chœur des Bourgeons</h2>
            <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
              Sélectionne un poème ou un chant glorieux de notre école pour chanter en chœur, remplir les blanks et de recevoir l&apos;approbative de l&apos;Oustaz !
            </p>
          </div>

          {/* SEARCH BAR ELEMENT */}
          <div className="relative max-w-md mx-auto w-full pt-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un chant (ex: Burda, Qasida, Ya Hanana...)"
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-stone-200 focus:border-[#D0A21C]/70 rounded-full shadow-xs text-[#004D40] placeholder-stone-400 focus:outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 cursor-pointer select-none"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {(() => {
              const query = searchQuery.trim().toLowerCase();
              const filtered = NASHEEDS.filter(song => 
                !query ||
                song.title.toLowerCase().includes(query) ||
                song.composer.toLowerCase().includes(query) ||
                song.description.toLowerCase().includes(query)
              );

              if (filtered.length === 0) {
                return (
                  <div className="col-span-full py-12 text-center bg-white border border-stone-150 rounded-2xl shadow-sm space-y-2">
                    <Music className="w-8 h-8 text-stone-300 mx-auto" />
                    <p className="text-xs text-stone-500 font-bold">Aucun chant ne correspond à votre recherche.</p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-[10px] uppercase tracking-wider font-extrabold text-[#D0A21C] hover:underline"
                    >
                      Effacer la recherche
                    </button>
                  </div>
                );
              }

              return filtered.map((song) => {
                const hasBadgeUnlocked = stats.unlockedBadgeIds.includes(song.badgeId);

                return (
                  <div
                    key={song.id}
                    onClick={() => {
                      playSelectSound();
                      setSelectedSong(song);
                    }}
                    className="p-4 bg-white border border-stone-200 hover:border-[#D0A21C]/60 rounded-2xl shadow-sm transition-all cursor-pointer hover:-translate-y-1 hover:shadow-md flex flex-col justify-between space-y-3.5 relative group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="p-2 bg-[#004D40]/5 border border-[#004D40]/10 text-[#004D40] rounded-xl group-hover:bg-[#004D40] group-hover:text-amber-400 transition-colors">
                          <Music className="w-4 h-4" />
                        </div>
                        {hasBadgeUnlocked && (
                          <div className="flex items-center gap-0.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/25 text-amber-500 font-bold rounded-lg text-[8px] uppercase tracking-wider font-sans">
                            <Award className="w-3 h-3" />
                            <span>Chanté</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-sm font-black text-[#004D40] leading-snug">{song.title}</h3>
                      <p className="text-[10px] text-stone-400 font-mono tracking-tight font-black uppercase">{song.composer}</p>
                      <p className="text-[11px] text-stone-500 leading-normal">{song.description}</p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] uppercase font-black text-[#D0A21C] tracking-wider font-mono">
                      <span>{song.lines.length} Versets</span>
                      <span className="group-hover:translate-x-1.5 transition-transform shrink-0">Chanter &rarr;</span>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      ) : (

        /* ACTIVE SONG GAMEPLAY VIEW */
        <div className="space-y-4 relative">
          
          {showLineConfetti && <SparkleConfetti />}
          
          {/* Header song bar */}
          <div className="bg-white border border-stone-200 rounded-2xl p-3 flex items-center justify-between shadow-xs">
            <button
              onClick={handleQuitToSongbook}
              className="text-[#004D40] hover:text-[#004D40]/80 text-[11px] font-bold flex items-center gap-1 cursor-pointer select-none"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Chants</span>
            </button>
            <div className="text-center">
              <h3 className="text-xs font-black text-[#004D40] uppercase tracking-normal">{selectedSong.title}</h3>
              <p className="text-[9px] text-[#D0A21C] font-mono tracking-wider font-extrabold uppercase">Verset {currentLineIdx + 1} sur {selectedSong.lines.length}</p>
            </div>
            <div className="h-4 w-4 bg-transparent" /> {/* balance spacer */}
          </div>

          <AnimatePresence mode="wait">
            {linesCompletedCount > 0 ? (
              
              /* RECAP COMPLETION CARD */
              <motion.div
                key="recap"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-5 bg-[#FCF8F2] border-2 border-[#D0A21C] text-center rounded-2xl space-y-4 shadow-md"
              >
                <div className="w-12 h-12 bg-[#D0A21C]/15 border border-[#D0A21C]/40 text-[#D0A21C] rounded-2xl flex items-center justify-center mx-auto scale-105">
                  <Star className="w-6 h-6 fill-amber-400 text-[#D0A21C]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-black text-[#004D40] uppercase tracking-tight">Félicitations, ô Ansâr !</h3>
                  <p className="text-xs text-stone-550 leading-relaxed font-sans max-w-sm mx-auto">
                    Tu as mémorisé et interprété toutes les lignes avec bravoure ! Ta ferveur fait briller les valeurs d&apos;Al-Mouyassar.
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-amber-500/15 rounded-xl text-left max-w-sm mx-auto space-y-2">
                  <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest text-center border-b border-stone-100 pb-1.5">Bilan des Gains</p>
                  <div className="flex justify-between text-xs font-sans text-stone-600">
                    <span>Défi Remplir les blanks</span>
                    <span className="font-extrabold text-[#004D40]">+{songBlankPoints} Pts (+45 XP)</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-stone-600">
                    <span>Prestation Vocal Sing-along</span>
                    <span className="font-extrabold text-emerald-600">+{songVoiceXPEarned} XP Bonus</span>
                  </div>
                  
                  {newBadgeUnlocked && (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      className="mt-3 p-2 bg-amber-500/10 border-2 border-[#D0A21C] rounded-lg text-center text-xs text-[#004D40] font-bold flex items-center justify-center gap-1.5"
                    >
                      <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>Badge débloqué : <strong>{newBadgeUnlocked}</strong> (+50 XP) !</span>
                    </motion.div>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    onClick={handleRestartFullSong}
                    className="px-4 py-2 bg-[#004D40] text-amber-400 hover:bg-[#004D40]/90 text-xs font-black uppercase rounded-lg tracking-wider font-sans cursor-pointer"
                  >
                    Chanter à nouveau
                  </button>
                  <button
                    onClick={handleQuitToSongbook}
                    className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-650 text-xs font-black uppercase rounded-lg tracking-wider font-sans cursor-pointer"
                  >
                    Retour aux chants
                  </button>
                </div>
              </motion.div>
            ) : (

              /* INTERACTIVE VERSES SEQUENCING PLAYCARD */
              <motion.div
                key="gameplay"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="p-5 bg-white border border-stone-200 rounded-2xl shadow-md space-y-4 relative"
              >
                
                {/* PART 1 : LISTEN MELODY */}
                <div className="p-3.5 bg-stone-50 border border-stone-250/60 rounded-xl space-y-3 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase font-mono tracking-wider text-[#D0A21C]">
                      Étape 1 : Écouter la rime
                    </span>
                    {isMelodyHeard && (
                      <span className="text-[9px] text-[#004D40] font-bold bg-[#004D40]/10 px-2.0 py-0.5 rounded-full flex items-center gap-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>Mélodie apprise</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={playLineMelody}
                      disabled={isPlayingMelody}
                      className={`h-11 w-11 rounded-full shrink-0 flex items-center justify-center transition-all ${
                        isPlayingMelody
                          ? 'bg-[#C62828] text-white animate-pulse'
                          : 'bg-[#004D40] hover:bg-[#004D40]/90 text-amber-400'
                      } cursor-pointer shadow-sm`}
                    >
                      {isPlayingMelody ? (
                        <div className="flex gap-0.5 h-3 items-end">
                          <span className="w-0.5 h-2.5 bg-white animate-bounce" />
                          <span className="w-0.5 h-4 bg-white animate-bounce" style={{ animationDelay: '100ms' }} />
                          <span className="w-0.5 h-1.5 bg-white animate-bounce" style={{ animationDelay: '200ms' }} />
                        </div>
                      ) : (
                        <Play className="w-4.5 h-4.5 fill-amber-300 ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-stone-600 font-sans font-medium leading-relaxed">
                        {isPlayingMelody ? 'Simulation sonore du verset...' : 'Clique sur Play pour diffuser les chimes harmoniques d\'accords.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ARABIC LINE BLOCK */}
                <div className="p-4 bg-amber-500/[0.02] border border-[#D0A21C]/20 rounded-xl text-center space-y-2 relative overflow-hidden">
                  <span className="absolute -top-1 -right-1 text-stone-100 text-5xl font-bold select-none cursor-default">𝅘𝅥𝅮</span>
                  <span className="text-[8px] font-black uppercase font-mono bg-amber-500/15 text-[#D0A21C] px-2 py-0.5 rounded">
                    Verset de Nasheed
                  </span>
                  <h2 className="text-lg md:text-xl font-bold font-serif text-[#004D40] direction-rtl py-1">
                    {isWordAnswered ? activeLine?.arabicLine : activeLine?.sentenceWithBlank}
                  </h2>
                  <p className="text-xs text-stone-500 italic max-w-sm mx-auto font-sans">
                    « {activeLine?.frenchTranslation} »
                  </p>
                </div>

                {/* WORD DEFI SELECTIONS */}
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase text-stone-400 font-sans tracking-wide">
                    Complète le blank vide :
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {activeLine?.options.map((option) => {
                      const isSelected = selectedWord === option;
                      const isAnswerCorrect = isWordAnswered && option === activeLine.missingWord;
                      const isAnswerIncorrect = isWordAnswered && isSelected && !isWordCorrect;

                      return (
                        <button
                          key={option}
                          onClick={() => handleSelectOption(option)}
                          disabled={!isMelodyHeard || isWordAnswered}
                          className={`p-2.5 rounded-xl text-center border font-serif text-xs font-bold font-black block transition-all shadow-sm ${
                            !isMelodyHeard
                              ? 'bg-stone-50 text-stone-300 border-stone-100 opacity-60 cursor-not-allowed'
                              : isAnswerCorrect
                              ? 'bg-emerald-500/10 border-emerald-500 text-emerald-800 scale-[1.01]'
                              : isAnswerIncorrect
                              ? 'bg-rose-500/10 border-rose-500 text-rose-800'
                              : isSelected
                              ? 'bg-amber-50/70 border-[#D0A21C] text-[#004D40]'
                              : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-750 cursor-pointer'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {isWordAnswered && !singingActive && singingScore === null && (
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={handleValidateWordSelection}
                        style={{ display: 'none' }} // fallback safekeeping
                      />
                      {!isWordAnswered ? (
                        <button
                          onClick={handleValidateWordSelection}
                          className="px-4 py-2 bg-[#004D40] text-xs font-bold text-white rounded-lg cursor-pointer"
                        >
                          Valider
                        </button>
                      ) : (
                        <button
                          onClick={() => setSingingActive(true)}
                          className="px-4 py-1.5 bg-[#004D40] text-[#D0A21C] border border-[#D0A21C]/20 text-xs font-bold rounded-lg flex items-center gap-1 hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                          <Mic className="w-3.5 h-3.5 text-amber-400" />
                          <span>Passer au Chant vocal</span>
                        </button>
                      )}
                    </div>
                  )}

                  {!isWordAnswered && selectedWord && (
                    <div className="flex justify-end pt-1">
                      <button
                        onClick={handleValidateWordSelection}
                        className="px-4 py-2 bg-[#004D40] text-[#FCF8F2] text-xs font-black uppercase rounded-lg shadow-sm transition-all cursor-pointer hover:scale-[1.02]"
                      >
                        Valider la rime
                      </button>
                    </div>
                  )}
                </div>

                {/* SING ALONG INTERACTION ZONE */}
                {isWordAnswered && (singingActive || singingScore !== null) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-amber-500/[0.03] border border-[#D0A21C]/25 rounded-xl space-y-3 text-center"
                  >
                    <p className="text-[10px] font-black uppercase text-[#D0A21C] tracking-widest font-mono">
                      Étape 2 : Chante en Chœur !
                    </p>

                    {isRecording ? (
                      <div className="space-y-3.5 py-2">
                        <div className="h-10 flex items-center justify-center gap-1.5">
                          {audioWaveBlocks.map((h, i) => (
                            <motion.span
                              key={i}
                              animate={{ height: h }}
                              className="w-1.5 bg-[#D0A21C] rounded-full"
                              style={{ height: '10px' }}
                              transition={{ type: 'spring', damping: 10 }}
                            />
                          ))}
                        </div>
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full transition-all duration-100"
                            style={{ width: `${recordingProgress}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-stone-500 font-mono italic block">
                          Enregistrement de ton chant en cours... {Math.round(recordingProgress)}%
                        </span>
                      </div>
                    ) : singingScore === null ? (
                      <div className="py-2 space-y-3">
                        <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                          La rime est découverte ! Échauffe-toi et clique sur le micro pour faire vibrer ta voix.
                        </p>
                        <button
                          onClick={handleStartSinging}
                          className="px-5 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs uppercase tracking-wide rounded-2xl shadow-md cursor-pointer inline-flex items-center gap-2"
                        >
                          <Mic className="w-4.5 h-4.5 stroke-[2.5]" />
                          <span>Démarrer le Micro</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 py-1 text-center">
                        <div className="inline-flex gap-3 items-center justify-center bg-white border border-stone-200 py-2.5 px-4 rounded-xl shadow-xs">
                          <span className="text-[11px] text-stone-500 font-bold uppercase tracking-wider block">Score de justesse :</span>
                          <span className="text-lg font-black text-emerald-600 font-mono">{singingScore}%</span>
                        </div>

                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={handleStartSinging}
                            className="px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 text-[10px] uppercase font-black rounded-lg transition-colors flex items-center gap-1"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Réessayer</span>
                          </button>
                          
                          {!oustazFeedback && (
                            <button
                              onClick={fetchOustazAIComment}
                              disabled={isOustazLoading}
                              className="px-4 py-2 bg-[#004D40] text-amber-300 font-black text-[10px] uppercase rounded-lg flex items-center gap-1 hover:-translate-y-0.5 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                            >
                              {isOustazLoading ? (
                                <>
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                  <span>Oustaz écoute...</span>
                                </>
                              ) : (
                                <>
                                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                  <span>Feedback de l&apos;Oustaz</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* OUSTAZ APPRAISE BOX */}
                        <AnimatePresence>
                          {oustazFeedback && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="p-4 bg-amber-500/[0.04] border border-[#D0A21C]/35 rounded-xl text-left space-y-1.5"
                            >
                              <div className="flex items-center justify-between pb-1">
                                <span className="text-[9px] font-black text-[#D0A21C] uppercase tracking-wider flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  Appréciation de l&apos;Oustaz Virtuel :
                                </span>
                                <button
                                  type="button"
                                  onClick={() => speakTextAloud(oustazFeedback)}
                                  className="p-1 px-2 border border-[#D0A21C]/25 bg-amber-500/10 text-[#D0A21C] hover:bg-amber-500/20 rounded-md text-[9px] font-bold uppercase flex items-center gap-1 cursor-pointer select-none transition-colors"
                                >
                                  <Volume2 className="w-3 h-3 text-[#D0A21C]" />
                                  <span>Réécouter</span>
                                </button>
                              </div>
                              <p className="text-[11px] leading-relaxed font-serif text-[#004D40] whitespace-pre-line pt-1">
                                {oustazFeedback}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* BOTTOM CONTROLL PANEL */}
                <div className="border-t border-stone-200/50 pt-3.5 flex justify-between items-center text-xs">
                  <span className="font-bold text-[#004D40] block font-mono">
                    Score : <span className="text-[#D0A21C] font-extrabold">{songBlankPoints} Pts</span>
                  </span>

                  {isWordAnswered && (singingScore !== null) && (
                    <button
                      onClick={handleAdvanceNextLine}
                      className="px-4.5 py-2.5 bg-[#D0A21C] hover:bg-[#D0A21C]/90 text-[#FCF8F2] rounded-xl text-xs font-extrabold uppercase font-sans tracking-wide transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                    >
                      <span>Verset Suivant</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}

    </div>
  );
}
