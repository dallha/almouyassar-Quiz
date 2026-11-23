/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, AlertCircle, Compass, MessageSquareCode, HelpCircle, GraduationCap, RotateCcw, Save, Trash2, FolderOpen, Plus, FileText, Volume2, Square } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import SchoolLogo from './SchoolLogo';
import { isNeonAuthConfigured, type AuthUser } from '../neonAuthClient';
import { useLanguage } from '../LanguageContext';
import { clearNeonOustazMessages, deleteNeonOustazChat, listNeonOustazChats, loadNeonOustazMessages, renameNeonOustazChat, saveNeonOustazMessage } from '../services/neonOustazService';

interface Message {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

interface SavedChat {
  id: string;
  title: string;
  timestamp: string;
  messages: Message[];
}

const WELCOME_MESSAGES: Record<string, string> = {
  fr: "Assalamou alaykoum, mon cher enfant ! Macha'Allah, je suis ravi de t'accueillir ici. Je suis l'Oustaz Virtuel de l'Institut Al-Mouyassar. Pose-moi n'importe quelle question sur l'islam, la prière, le Coran, le comportement (Akhlaq) ou l'histoire de notre école, et je te répondrai avec la plus grande bienveillance. Que souhaites-tu apprendre aujourd'hui ?",
  ar: "السلام عليكم يا بني الحبيب! ما شاء الله، أنا سعيد جداً باستقبالك هنا. أنا الأستاذ الافتراضي لمعهد الميسر للقرآن الكريم. اسألني أي سؤال عن الإسلام، أو الصلاة، أو القرآن، أو الأخلاق والآداب، أو تاريخ معهدنا الجميل، وسأجيبك بكل حب ولطف. ماذا تحب أن نتعلم اليوم؟",
  wo: "Assalamou alaykoum, sama doom bou rafet ! Masha'Allah, contane naa lool ci giss gua fii. Man may Oustaz bou virtuel bou Daara Al-Mouyassar. Laajal ma lëpp lou la neex ci diiné islam, julli, Alquran, téguine (Akhlaq) walla dundug daara bi, dina la tontu ci anam bou am yërmande te yomb a dégg. Lan nga beug jang tay ?"
};

const getWelcomeMessage = (lang: string): Message[] => [
  {
    role: 'model',
    parts: [{ text: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.fr }]
  }
];

interface OustazVirtualProps {
  currentUser: AuthUser | null;
}

export default function OustazVirtual({ currentUser }: OustazVirtualProps) {
  const { language, t } = useLanguage();
  const defaultWelcome = getWelcomeMessage(language);
  // Saved Conversations State
  const [savedChats, setSavedChats] = useState<SavedChat[]>(() => {
    const saved = localStorage.getItem('oustaz_saved_chats_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error("Failed to parse saved chats", e);
      }
    }
    return [];
  });

  // Active Chat Session ID
  const [activeChatId, setActiveChatId] = useState<string>(() => {
    const savedId = localStorage.getItem('oustaz_active_chat_id_v2');
    return savedId || 'session-' + Date.now();
  });

  // Current chat messages loaded based on active ID
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedId = localStorage.getItem('oustaz_active_chat_id_v2');
    const savedChatsData = localStorage.getItem('oustaz_saved_chats_v2');
    if (savedChatsData && savedId) {
      try {
        const parsed = JSON.parse(savedChatsData) as SavedChat[];
        const match = parsed.find(c => c.id === savedId);
        if (match && match.messages.length > 0) {
          return match.messages;
        }
      } catch (e) {}
    }
    
    // In case no specific match is found, fallback to previous quick auto-save or default
    const legacyHistory = localStorage.getItem('oustaz_chat_history');
    if (legacyHistory) {
      try {
        const parsed = JSON.parse(legacyHistory);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    const initLang = localStorage.getItem('preferred_language') || 'fr';
    return getWelcomeMessage(initLang);
  });

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [finishedGenerating, setFinishedGenerating] = useState(false);
  const [showHistoryDrawer, setShowHistoryDrawer] = useState(false);
  const [chatRenameId, setChatRenameId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');

  const listEndRef = useRef<HTMLDivElement | null>(null);

  const [currentlySpeakingIdx, setCurrentlySpeakingIdx] = useState<number | null>(null);

  // Sync with Neon Auth on login/change of currentUser
  useEffect(() => {
    if (!isNeonAuthConfigured() || !currentUser) {
      // Fallback local complet : recharger du localStorage
      const saved = localStorage.getItem('oustaz_saved_chats_v2');
      let localChats: SavedChat[] = [];
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) localChats = parsed;
        } catch (e) {}
      }
      setSavedChats(localChats);

      const savedId = localStorage.getItem('oustaz_active_chat_id_v2') || 'session-' + Date.now();
      setActiveChatId(savedId);

      const activeMatch = localChats.find(c => c.id === savedId);
      if (activeMatch && activeMatch.messages.length > 0) {
        setMessages(activeMatch.messages);
      } else {
        const legacyHistory = localStorage.getItem('oustaz_chat_history');
        if (legacyHistory) {
          try {
            const parsed = JSON.parse(legacyHistory);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessages(parsed);
              return;
            }
          } catch (e) {}
        }
        setMessages(defaultWelcome);
      }
      return;
    }

    // Si connecté : charger depuis Neon
    const loadNeonData = async () => {
      try {
        const { chats } = await listNeonOustazChats();

        let mappedChats: SavedChat[] = [];
        if (chats.length > 0) {
          mappedChats = chats.map(c => ({
            id: c.id,
            title: c.title,
            timestamp: new Date(c.updated_at).toLocaleString('fr-FR', {
              day: 'numeric',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit'
            }),
            messages: []
          }));
          setSavedChats(mappedChats);

          let activeId = localStorage.getItem('oustaz_active_chat_id_v2') || '';
          const hasActiveInDb = chats.some(c => c.id === activeId);

          if (!hasActiveInDb) {
            activeId = chats[0].id;
          }

          setActiveChatId(activeId);

          const { messages: dbMessages } = await loadNeonOustazMessages(activeId);

          if (dbMessages && dbMessages.length > 0) {
            const mappedMessages: Message[] = dbMessages.map(m => ({
              role: m.role as 'user' | 'model',
              parts: [{ text: m.content }]
            }));
            setMessages(mappedMessages);
            setSavedChats(prev => prev.map(c => c.id === activeId ? { ...c, messages: mappedMessages } : c));
          } else {
            setMessages(defaultWelcome);
          }
        } else {
          setSavedChats([]);
          const newId = 'session-' + Date.now();
          setActiveChatId(newId);
          setMessages(defaultWelcome);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des données Neon de l'Oustaz :", err);
      }
    };

    loadNeonData();
  }, [currentUser]);

  // Helper function to save messages asynchronously to Neon
  const saveMessageToNeon = async (chatId: string, role: 'user' | 'model', content: string) => {
    if (!isNeonAuthConfigured() || !currentUser) return;

    try {
      await saveNeonOustazMessage(chatId, role, content, content);
    } catch (err) {
      console.error("Erreur lors de la sauvegarde du message dans Neon :", err);
    }
  };

  // Text to Speech logic
  const speakMessage = (text: string, index: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (currentlySpeakingIdx === index) {
      window.speechSynthesis.cancel();
      setCurrentlySpeakingIdx(null);
      return;
    }

    window.speechSynthesis.cancel();
    
    // Nettoyer le texte du markdown
    const cleanText = text.replace(/[\*#_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (language === 'ar') {
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
    } else {
      utterance.lang = 'fr-FR';
      utterance.rate = 0.92; // douce et posée
    }

    utterance.onend = () => {
      setCurrentlySpeakingIdx(null);
    };
    utterance.onerror = () => {
      setCurrentlySpeakingIdx(null);
    };

    setCurrentlySpeakingIdx(index);
    window.speechSynthesis.speak(utterance);
  };

  // Clean TTS on component destruction or activeChatId change
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeChatId]);

  // Suggested quick prompts for kids to make it easy to start
  const suggestedPrompts = [
    { 
      label: t('oustaz.oustaz_suggested_1', "Qu'est-ce que l'Akhlaq ?"), 
      query: t('oustaz.oustaz_suggested_1_q', "Qu'est-ce que l'Akhlaq et pourquoi c'est important ?") 
    },
    { 
      label: t('oustaz.oustaz_suggested_2', "C'est quoi le Tahji ?"), 
      query: t('oustaz.oustaz_suggested_2_q', "Peux-tu m'expliquer ce que signifie l'étape du Tahji à l'Institut ?") 
    },
    { 
      label: t('oustaz.oustaz_suggested_3', "Comment faire le Sabr ?"), 
      query: t('oustaz.oustaz_suggested_3_q', "Comment faire preuve de patience (Sabr) quand j'apprends mes leçons ?") 
    },
    { 
      label: t('oustaz.oustaz_suggested_4', "Qui est le fondateur ?"), 
      query: t('oustaz.oustaz_suggested_4_q', "Qui était Cheikh El Hadji Abdallah Niasse et comment a-t-il créé l'Institut ?") 
    }
  ];

  // Save/Update current active thread in the list whenever messages or activeChatId changes
  useEffect(() => {
    if (isNeonAuthConfigured() && currentUser) {
      localStorage.setItem('oustaz_active_chat_id_v2', activeChatId);
      return;
    }

    const timestampLabel = new Date().toLocaleString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });

    setSavedChats(prev => {
      const matchIdx = prev.findIndex(c => c.id === activeChatId);
      let updated: SavedChat[];
      
      if (matchIdx >= 0) {
        updated = [...prev];
        updated[matchIdx] = {
          ...updated[matchIdx],
          messages,
          timestamp: timestampLabel
        };
      } else {
        const queryMsg = messages.find(m => m.role === 'user');
        const defaultTitle = queryMsg 
          ? (queryMsg.parts[0].text.length > 28 ? queryMsg.parts[0].text.slice(0, 25) + '...' : queryMsg.parts[0].text)
          : "Discussion avec l'Oustaz";

        updated = [
          {
            id: activeChatId,
            title: defaultTitle,
            timestamp: timestampLabel,
            messages
          },
          ...prev
        ];
      }

      localStorage.setItem('oustaz_saved_chats_v2', JSON.stringify(updated));
      return updated;
    });

    localStorage.setItem('oustaz_active_chat_id_v2', activeChatId);
    localStorage.setItem('oustaz_chat_history', JSON.stringify(messages));
  }, [messages, activeChatId, currentUser]);

  // Auto scroll to latest bubbles
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Inappropriate keyword list for child protection content filter
  const INAPPROPRIATE_KEYWORDS = [
    // Violence & Weapons
    'tuer', 'meurtre', 'fusil', 'pistolet', 'assassiner', 'guerre', 'violence', 'frapper', 'sanglant', 'bagarre',
    // Adult Content
    'sexe', 'sexuel', 'porno', 'pornographie', 'orgasme', 'copain', 'copine', 'flirter',
    // Drugs, Alcohol, Gambling
    'drogue', 'cocaine', 'heroine', 'cannabis', 'marijuana', 'alcool', 'biere', 'vodka', 'casino', 'parier', 'gambling',
    // Severe Swear Words
    'merde', 'putain', 'connard', 'salope', 'batard', 'enculer'
  ];

  const checkInappropriateContent = (text: string): boolean => {
    const normalized = text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove accents
    
    return INAPPROPRIATE_KEYWORDS.some(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b|${keyword}`, 'i');
      return regex.test(normalized);
    });
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    playSelectSound();

    // Advance daily quest if available
    window.dispatchEvent(new CustomEvent('oustaz_chat_interaction'));
    
    // Check local content filter
    if (checkInappropriateContent(textToSend)) {
      const newUserMessage: Message = {
        role: 'user',
        parts: [{ text: textToSend }]
      };
      
      setMessages(prev => [...prev, newUserMessage]);
      setInputValue('');
      setIsLoading(true);
      setErrorStatus(null);

      if (isNeonAuthConfigured() && currentUser) {
        saveMessageToNeon(activeChatId, 'user', textToSend);
      }
      
      setTimeout(() => {
        let responseText = "Mon cher enfant, l'Oustaz Virtuel est un espace bienveillant dédié à la foi, à la morale (Akhlaq), au Coran et aux belles histoires de notre institut. Ce sujet n'est pas adapté à notre espace d'échange. Parlons plutôt de respect, de générosité, ou d'une belle valeur comme la patience (Sabr) ! 😊";
        if (language === 'ar') {
          responseText = "يا بني الحبيب، الأستاذ الافتراضي هو مساحة حوار لطيفة مخصصة للإيمان، والأخلاق، والقرآن الكريم وقصص معهدنا الجميلة. هذا الموضوع غير مناسب لمساحة حوارنا. فلنتحدث بدلاً من ذلك عن الاحترام، والكرم، أو قيمة جميلة مثل الصبر! 😊";
        } else if (language === 'wo') {
          responseText = "Sama doom bou rafet, barabu Oustaz bi denc gnu ko ngir waxtaane diine, teggine, Alquran ak xam-xam yu am solo ci daara bi. Li nga wax fii andul ak sunu waxtaan. Nan faral di waxtaane teggine, yërmande walla mounou (Sabr) ! 😊";
        }
        setMessages(prev => [
          ...prev,
          {
            role: 'model',
            parts: [{ text: responseText }]
          }
        ]);
        setIsLoading(false);
        setFinishedGenerating(true);

        if (isNeonAuthConfigured() && currentUser) {
          saveMessageToNeon(activeChatId, 'model', responseText);
        }

        setTimeout(() => setFinishedGenerating(false), 2500);
      }, 1000);
      
      return;
    }

    const newUserMessage: Message = {
      role: 'user',
      parts: [{ text: textToSend }]
    };

    const isFirstUserMessage = !messages.some(m => m.role === 'user');
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    setErrorStatus(null);

    if (isNeonAuthConfigured() && currentUser) {
      saveMessageToNeon(activeChatId, 'user', textToSend);
    }

    if (isFirstUserMessage) {
      const truncatedTitle = textToSend.length > 25 ? textToSend.slice(0, 22) + "..." : textToSend;
      setSavedChats(prev => {
        const list = prev.map(c => c.id === activeChatId ? { ...c, title: truncatedTitle } : c);
        if (!currentUser) {
          localStorage.setItem('oustaz_saved_chats_v2', JSON.stringify(list));
        }
        return list;
      });
    }

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts[0].text }]
      }));

      // Initialisation du message vide pour le streaming
      setMessages(prev => [
        ...prev, 
        { role: 'model', parts: [{ text: '' }] }
      ]);

      const res = await fetch('/api/oustaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
          language: language,
          context: { audience: 'child', purpose: 'pedagogical-explanation' },
          stream: true
        })
      });

      if (!res.ok) {
        throw new Error("L'Oustaz Virtuel est temporairement indisponible.");
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.slice(6).trim();
              if (dataStr === '[DONE]') continue;
              try {
                const data = JSON.parse(dataStr);
                if (data.text) {
                  accumulatedText += data.text;
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastIdx = newMessages.length - 1;
                    if (newMessages[lastIdx].role === 'model') {
                      newMessages[lastIdx] = {
                        ...newMessages[lastIdx],
                        parts: [{ text: accumulatedText }]
                      };
                    }
                    return newMessages;
                  });
                } else if (data.error) {
                  setErrorStatus(data.error);
                }
              } catch (e) {
                // ignore invalid json from incomplete chunks
              }
            }
          }
        }
      }
      
      if (accumulatedText) {
        if (isNeonAuthConfigured() && currentUser) {
          saveMessageToNeon(activeChatId, 'model', accumulatedText);
        }

        window.dispatchEvent(new CustomEvent('oustaz_message_sent'));
        setFinishedGenerating(true);
        setTimeout(() => {
          setFinishedGenerating(false);
        }, 2500);
      } else {
        throw new Error("Impossible de décoder la réponse de l'Oustaz Virtuel.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Impossible de joindre l'Oustaz AI.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartNewChat = () => {
    playSelectSound();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setCurrentlySpeakingIdx(null);
    const newId = 'session-' + Date.now();
    setActiveChatId(newId);
    setMessages(defaultWelcome);
    setShowHistoryDrawer(false);
  };

  const handleLoadChat = async (chat: SavedChat) => {
    playSelectSound();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setCurrentlySpeakingIdx(null);
    setActiveChatId(chat.id);
    setShowHistoryDrawer(false);

    if (isNeonAuthConfigured() && currentUser) {
      try {
        const { messages: dbMessages } = await loadNeonOustazMessages(chat.id);

        if (dbMessages && dbMessages.length > 0) {
          const mappedMessages: Message[] = dbMessages.map(m => ({
            role: m.role as 'user' | 'model',
            parts: [{ text: m.content }]
          }));
          setMessages(mappedMessages);
          setSavedChats(prev => prev.map(c => c.id === chat.id ? { ...c, messages: mappedMessages } : c));
        } else {
          setMessages(defaultWelcome);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des messages de la discussion sélectionnée:", err);
      }
    } else {
      setMessages(chat.messages);
    }
  };

  const handleDeleteChat = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    playSelectSound();
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette discussion de votre historique ?")) {
      const remaining = savedChats.filter(c => c.id !== id);
      setSavedChats(remaining);

      if (isNeonAuthConfigured() && currentUser) {
        try {
          await deleteNeonOustazChat(id);
        } catch (err) {
          console.error("Erreur lors de la suppression de la discussion dans Neon:", err);
        }
      } else {
        localStorage.setItem('oustaz_saved_chats_v2', JSON.stringify(remaining));
      }

      if (activeChatId === id) {
        const fallbackId = 'session-' + Date.now();
        setActiveChatId(fallbackId);
        
        if (isNeonAuthConfigured() && currentUser) {
          setMessages(defaultWelcome);
        } else {
          const matchingConvo = remaining.find(c => c.id === fallbackId);
          if (matchingConvo) {
            setMessages(matchingConvo.messages);
          } else {
            setMessages(defaultWelcome);
          }
        }
      }
    }
  };

  const handleRenameChatInit = (e: React.MouseEvent, chat: SavedChat) => {
    e.stopPropagation();
    setChatRenameId(chat.id);
    setRenameValue(chat.title);
  };

  const handleSaveRename = async (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (!renameValue.trim()) return;
    
    setSavedChats(prev => {
      const list = prev.map(c => c.id === id ? { ...c, title: renameValue } : c);
      if (!currentUser) {
        localStorage.setItem('oustaz_saved_chats_v2', JSON.stringify(list));
      }
      return list;
    });

    if (isNeonAuthConfigured() && currentUser) {
      try {
        await renameNeonOustazChat(id, renameValue);
      } catch (err) {
        console.error("Erreur lors de la mise à jour du titre dans Neon:", err);
      }
    }
    
    setChatRenameId(null);
  };

  const handleClearHistory = async () => {
    playSelectSound();
    if (window.confirm("Voulez-vous réinitialiser la discussion active ?")) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setCurrentlySpeakingIdx(null);
      setMessages(defaultWelcome);

      if (isNeonAuthConfigured() && currentUser) {
        try {
          await clearNeonOustazMessages(activeChatId);
        } catch (err) {
          console.error("Erreur lors de la réinitialisation de l'historique dans Neon:", err);
        }
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-space-lg pb-6 relative">
      {/* Top Assistant Status Banner */}
      <div className="w-full bg-primary-container text-on-primary rounded-2xl p-space-lg relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(13,77,67,0.18)]">
        <div className="absolute -end-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-fixed/10 pointer-events-none blur-xl" />
        <div className="relative z-10 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-full bg-surface-container-lowest p-0.5 shadow-md flex items-center justify-center">
                <SchoolLogo size={48} className="shrink-0" />
              </div>
              <span className="absolute bottom-0 end-0 w-3.5 h-3.5 bg-tertiary-fixed rounded-full shadow-[0_0_0_2px_#0d4d43]" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-label-caps text-secondary-fixed tracking-wider uppercase">
                  {t('common.oustaz_banner_eyebrow')}
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[14px]">verified</span>
              </div>
              <h1 className="text-headline-sm text-on-primary leading-tight truncate">
                {t('common.oustaz_banner_title')}
              </h1>
              <p className="text-body-sm text-on-primary-container mt-0.5 flex items-center gap-1 truncate">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-fixed shrink-0" />
                <span className="truncate">{t('common.oustaz_banner_sub')}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                playSelectSound();
                setShowHistoryDrawer(!showHistoryDrawer);
              }}
              title={t('oustaz.oustaz_history')}
              className="p-2 rounded-xl bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-colors cursor-pointer flex items-center gap-1.5 text-label-sm"
            >
              <FolderOpen className="w-4 h-4 text-secondary-fixed" />
              <span className="hidden sm:inline font-bold">{savedChats.length}</span>
            </button>

            {messages.length > 1 && (
              <button
                type="button"
                onClick={handleClearHistory}
                title={t('oustaz.oustaz_confirm_clear')}
                className="p-2 rounded-xl bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Prompt Chips: Horizontal Scroll Suggestions */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-label-caps text-on-surface-variant uppercase tracking-wider">
            {t('common.oustaz_suggestions_title')}
          </span>
          <span className="text-label-sm text-secondary flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
            <span>{t('common.oustaz_suggestions_explore')}</span>
          </span>
        </div>
        <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar pb-1">
          {[
            t('common.oustaz_chip_1'),
            t('common.oustaz_chip_2'),
            t('common.oustaz_chip_3'),
            t('common.oustaz_chip_4'),
            ...suggestedPrompts.map((p) => p.query),
          ]
            .filter((v, i, a) => Boolean(v) && a.indexOf(v) === i)
            .slice(0, 6)
            .map((chipText, i) => (
              <button
                key={i}
                type="button"
                disabled={isLoading}
                onClick={() => {
                  playSelectSound();
                  setInputValue(chipText);
                }}
                className="shrink-0 bg-surface-container-lowest text-primary hover:bg-surface-container-low transition-all active:scale-95 px-3.5 py-2 rounded-full shadow-[0_2px_8px_rgba(13,77,67,0.06)] text-label-sm cursor-pointer"
              >
                {chipText}
              </button>
            ))}
        </div>
      </div>

      {/* Chat Container */}
      <div className="relative flex flex-col gap-space-md min-h-[340px]">

      {/* Historique Drawer Slide-over Panel */}
      <AnimatePresence>
        {showHistoryDrawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs z-30 flex justify-end"
            onClick={() => setShowHistoryDrawer(false)}
          >
            <motion.div
              initial={{ x: 260 }}
              animate={{ x: 0 }}
              exit={{ x: 260 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-72 bg-white h-full border-l border-stone-200 shadow-2xl flex flex-col p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="font-extrabold text-xs uppercase text-[#004D40] tracking-wider flex items-center gap-1.5">
                  <FolderOpen className="w-4 h-4 text-[#D0A21C]" />
                  {t('oustaz.oustaz_history', "Discussions")}
                </span>
                <button
                  onClick={handleStartNewChat}
                  className="px-2.5 py-1.5 bg-[#004D40] text-xs font-bold text-white rounded-lg hover:bg-[#004D40]/90 transition-all flex items-center gap-1 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  {t('oustaz.oustaz_new_chat', "Nouveau")}
                </button>
              </div>

              {/* Saved conversations list */}
              <div className="flex-1 overflow-y-auto py-3 space-y-2">
                {savedChats.length === 0 ? (
                  <div className="text-center py-8 text-stone-400 space-y-2">
                    <FileText className="w-8 h-8 mx-auto text-stone-300 stroke-[1.5]" />
                    <p className="text-[11px] font-sans">{t('oustaz.oustaz_no_chats', "Aucune discussion enregistrée.")}</p>
                  </div>
                ) : (
                  savedChats.map((c) => {
                    const isActive = c.id === activeChatId;
                    const isRenaming = c.id === chatRenameId;

                    return (
                      <div
                        key={c.id}
                        onClick={() => handleLoadChat(c)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer group flex flex-col justify-between ${
                          isActive
                            ? 'bg-amber-500/[0.04] border-[#D0A21C]/80 shadow-xs'
                            : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200/60'
                        }`}
                      >
                        {isRenaming ? (
                          <form
                            onSubmit={(e) => handleSaveRename(e, c.id)}
                            className="flex items-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="text"
                              value={renameValue}
                              onChange={(e) => setRenameValue(e.target.value)}
                              autoFocus
                              className="w-full text-xs border border-[#D0A21C] px-1.5 py-0.5 rounded focus:outline-none text-stone-800"
                            />
                            <button
                              type="submit"
                              className="text-[10px] bg-emerald-600 text-white px-2 py-1 rounded font-bold"
                            >
                              OK
                            </button>
                          </form>
                        ) : (
                          <div className="flex items-start justify-between gap-1.5 relative">
                            <div className="flex-1 min-w-0 pr-6">
                              <p className="text-xs font-bold font-serif text-[#004D40] truncate leading-snug">
                                {c.title}
                              </p>
                              <span className="text-[9px] text-stone-400 font-mono block mt-0.5">
                                {c.timestamp}
                              </span>
                            </div>
                            <div className="absolute right-0 top-0 flex items-center gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRenameChatInit(e, c);
                                }}
                                title={t('oustaz.oustaz_rename', "Renommer")}
                                className="p-1 hover:bg-stone-200 text-stone-500 hover:text-stone-700 rounded transition-colors"
                              >
                                <Plus className="w-3 h-3 hover:rotate-45 transition-transform" />
                              </button>
                              <button
                                onClick={(e) => handleDeleteChat(e, c.id)}
                                title={t('oustaz.oustaz_delete', "Supprimer")}
                                className="p-1 hover:bg-rose-50 text-[#C62828] rounded transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              <div className="pt-3 border-t border-stone-100 text-[10px] text-stone-400 text-center">
                {t('oustaz.oustaz_click_chat', "Cliquez pour reprendre une discussion ou créez-en une nouvelle.")}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message History scrolling window */}
      <div className="flex flex-col gap-space-md w-full">
        <div className="flex items-center justify-center my-0.5">
          <span className="bg-surface-container-high text-on-surface-variant px-3 py-0.5 rounded-full text-label-caps tracking-widest uppercase">
            {t('common.oustaz_today_divider')}
          </span>
        </div>

        {messages.map((msg, idx) => {
          const isModel = msg.role === 'model';
          const isLatestModelMsg = isModel && idx === messages.length - 1;
          const isHighlighted = isLatestModelMsg && finishedGenerating;

          if (!isModel) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-end w-full ps-8"
              >
                <div className="bg-primary text-on-primary px-4 py-3 rounded-2xl rounded-te-sm shadow-[0_4px_12px_rgba(0,53,45,0.12)] max-w-[88%]">
                  <p className="text-body-md leading-snug whitespace-pre-wrap">{msg.parts[0].text}</p>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-space-sm w-full pe-4 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed shrink-0 flex items-center justify-center shadow-sm mt-1">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
              </div>
              <div className="flex flex-col gap-space-sm flex-1 min-w-0">
                <div
                  className={`bg-surface-container-lowest rounded-2xl rounded-ts-sm p-4 shadow-[0_4px_20px_-2px_rgba(13,77,67,0.06)] transition-all ${
                    isHighlighted ? 'ring-2 ring-secondary-container' : ''
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 mb-2 bg-surface-container-low/60 rounded-lg px-2.5 py-1">
                    <span className="text-label-caps text-secondary font-bold flex items-center gap-1 uppercase">
                      <span className="material-symbols-outlined text-[14px] text-secondary">menu_book</span>
                      <span>{t('oustaz.oustaz_title')}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => speakMessage(msg.parts[0].text, idx)}
                      aria-label={t('common.home_pitch_listen')}
                      className="text-on-surface-variant hover:text-primary active:scale-95 transition-transform cursor-pointer flex items-center"
                    >
                      {currentlySpeakingIdx === idx ? (
                        <Square className="w-3.5 h-3.5 text-secondary fill-secondary" />
                      ) : (
                        <span className="material-symbols-outlined text-[18px]">volume_up</span>
                      )}
                    </button>
                  </div>
                  <p className="text-body-md text-on-surface leading-relaxed whitespace-pre-wrap">
                    {msg.parts[0].text}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-2 text-on-surface-variant text-label-caps">
                    <span className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                      <span>{t('common.oustaz_source_label')}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Loading Bubble */}
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-space-sm items-start">
            <div className="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed shrink-0 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <span className="text-label-caps text-secondary uppercase animate-pulse">
                {t('oustaz.oustaz_thinking')}
              </span>
            </div>
          </motion.div>
        )}

        {/* Localized Error Banner */}
        {errorStatus && (
          <div className="p-4 bg-error-container text-on-error-container text-body-sm rounded-2xl flex items-center gap-3 shadow-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="flex-1 font-medium">{errorStatus}</p>
            <button
              type="button"
              onClick={() => handleSendMessage(messages[messages.length - 1]?.parts[0].text || '')}
              className="px-3 py-1.5 bg-error text-on-error rounded-full text-label-sm font-bold shrink-0 cursor-pointer"
            >
              {t('oustaz.oustaz_retry')}
            </button>
          </div>
        )}

        <div ref={listEndRef} />
      </div>
      </div>

      {/* Interactive Input Deck */}
      <div className="sticky bottom-2 z-20 flex flex-col gap-2 pt-2">
        <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-[0_8px_30px_rgba(13,77,67,0.12)] flex items-center gap-2">
          <div className="flex-1 relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder={t('common.oustaz_input_placeholder')}
              disabled={isLoading}
              className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant text-body-md px-3.5 py-2.5 rounded-xl outline-none focus:bg-surface-container-lowest transition-colors"
            />
          </div>
          <button
            type="button"
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            aria-label={t('common.oustaz_input_placeholder')}
            className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
              inputValue.trim() && !isLoading
                ? 'bg-primary text-on-primary shadow-[0_3px_0_0_#072d27] active:translate-y-0.5'
                : 'bg-surface-container text-outline cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-center">
          <span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
          <span className="text-label-caps text-on-surface-variant">
            {t('common.oustaz_supervised_badge')}
          </span>
        </div>
      </div>
    </div>
  );
}
