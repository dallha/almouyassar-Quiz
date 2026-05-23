/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, AlertCircle, Compass, MessageSquareCode, HelpCircle, GraduationCap, RotateCcw, Save, Trash2, FolderOpen, Plus, FileText, Volume2, Square } from 'lucide-react';
import { playSelectSound } from './SoundEngine';
import SchoolLogo from './SchoolLogo';
import { User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../supabaseClient';
import { useLanguage } from '../LanguageContext';

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
  currentUser: User | null;
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

  // Sync with Supabase on login/change of currentUser
  useEffect(() => {
    if (!isSupabaseConfigured() || !currentUser) {
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

    // Si connecté : charger depuis Supabase
    const loadSupabaseData = async () => {
      try {
        const { data: chats, error: chatsErr } = await supabase
          .from('oustaz_chats')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('updated_at', { ascending: false });

        if (chatsErr) throw chatsErr;

        let mappedChats: SavedChat[] = [];
        if (chats && chats.length > 0) {
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

          const { data: dbMessages, error: msgErr } = await supabase
            .from('oustaz_messages')
            .select('role, content')
            .eq('chat_id', activeId)
            .order('created_at', { ascending: true });

          if (msgErr) throw msgErr;

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
        console.error("Erreur lors de la récupération des données Supabase de l'Oustaz :", err);
      }
    };

    loadSupabaseData();
  }, [currentUser]);

  // Helper function to save messages asynchronously to Supabase
  const saveMessageToSupabase = async (chatId: string, role: 'user' | 'model', content: string) => {
    if (!isSupabaseConfigured() || !currentUser) return;

    try {
      const { data: existingChat, error: checkErr } = await supabase
        .from('oustaz_chats')
        .select('id')
        .eq('id', chatId)
        .single();

      if (checkErr && checkErr.code === 'PGRST116') {
        const queryMsg = messages.find(m => m.role === 'user');
        const firstMessageText = queryMsg ? queryMsg.parts[0].text : content;
        const defaultTitle = firstMessageText.length > 28 ? firstMessageText.slice(0, 25) + '...' : firstMessageText;

        const { error: insertChatErr } = await supabase
          .from('oustaz_chats')
          .insert({
            id: chatId,
            user_id: currentUser.id,
            title: role === 'user' ? (content.length > 28 ? content.slice(0, 25) + '...' : content) : defaultTitle
          });

        if (insertChatErr) throw insertChatErr;

        const timestampLabel = new Date().toLocaleString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
        setSavedChats(prev => [
          {
            id: chatId,
            title: role === 'user' ? (content.length > 28 ? content.slice(0, 25) + '...' : content) : defaultTitle,
            timestamp: timestampLabel,
            messages: []
          },
          ...prev
        ]);
      } else if (checkErr) {
        throw checkErr;
      }

      const { error: insertMsgErr } = await supabase
        .from('oustaz_messages')
        .insert({
          chat_id: chatId,
          role,
          content
        });

      if (insertMsgErr) throw insertMsgErr;

      const { error: updateChatErr } = await supabase
        .from('oustaz_chats')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', chatId);

      if (updateChatErr) throw updateChatErr;
    } catch (err) {
      console.error("Erreur lors de la sauvegarde du message dans Supabase :", err);
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
    if (isSupabaseConfigured() && currentUser) {
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

      if (isSupabaseConfigured() && currentUser) {
        saveMessageToSupabase(activeChatId, 'user', textToSend);
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

        if (isSupabaseConfigured() && currentUser) {
          saveMessageToSupabase(activeChatId, 'model', responseText);
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

    if (isSupabaseConfigured() && currentUser) {
      saveMessageToSupabase(activeChatId, 'user', textToSend);
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

      const res = await fetch('/api/oustaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory,
          language: language
        })
      });

      if (!res.ok) {
        throw new Error("L'Oustaz Virtuel est temporairement indisponible.");
      }

      const data = await res.json();
      
      if (data && data.text) {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'model', 
            parts: [{ text: data.text }] 
          }
        ]);

        if (isSupabaseConfigured() && currentUser) {
          saveMessageToSupabase(activeChatId, 'model', data.text);
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

    if (isSupabaseConfigured() && currentUser) {
      try {
        const { data: dbMessages, error: msgErr } = await supabase
          .from('oustaz_messages')
          .select('role, content')
          .eq('chat_id', chat.id)
          .order('created_at', { ascending: true });

        if (msgErr) throw msgErr;

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

      if (isSupabaseConfigured() && currentUser) {
        try {
          const { error } = await supabase
            .from('oustaz_chats')
            .delete()
            .eq('id', id);

          if (error) throw error;
        } catch (err) {
          console.error("Erreur lors de la suppression de la discussion dans Supabase:", err);
        }
      } else {
        localStorage.setItem('oustaz_saved_chats_v2', JSON.stringify(remaining));
      }

      if (activeChatId === id) {
        const fallbackId = 'session-' + Date.now();
        setActiveChatId(fallbackId);
        
        if (isSupabaseConfigured() && currentUser) {
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

    if (isSupabaseConfigured() && currentUser) {
      try {
        const { error } = await supabase
          .from('oustaz_chats')
          .update({ title: renameValue })
          .eq('id', id);

        if (error) throw error;
      } catch (err) {
        console.error("Erreur lors de la mise à jour du titre dans Supabase:", err);
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

      if (isSupabaseConfigured() && currentUser) {
        try {
          const { error } = await supabase
            .from('oustaz_messages')
            .delete()
            .eq('chat_id', activeChatId);

          if (error) throw error;
        } catch (err) {
          console.error("Erreur lors de la réinitialisation de l'historique dans Supabase:", err);
        }
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col h-[520px] bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden relative">
      
      {/* Dynamic Header */}
      <div className="bg-[#004D40] p-4 text-[#FCF8F2] flex items-center justify-between border-b border-[#D0A21C]/25 z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative p-0.5">
            <SchoolLogo size={36} className="shrink-0" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white animate-pulse" />
          </div>
          <div>
            <h3 className="text-xs font-black tracking-wider uppercase">{t('oustaz.oustaz_title', "L'Oustaz Virtuel AI")}</h3>
            <p className="text-[10px] text-[#FCF8F2]/75 font-mono italic">{t('oustaz.oustaz_subtitle', "Bienveillant, doux & pédagogue")}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playSelectSound();
              setShowHistoryDrawer(!showHistoryDrawer);
            }}
            title={t('oustaz.oustaz_history', "Discussions")}
            className="p-1.5 rounded-lg bg-[#FCF8F2]/10 hover:bg-[#FCF8F2]/20 border border-[#FCF8F2]/15 text-[#FCF8F2]/80 hover:text-[#FCF8F2] transition-colors cursor-pointer flex items-center gap-1.5 text-[11px]"
          >
            <FolderOpen className="w-4 h-4 text-[#D0A21C]" />
            <span className="hidden sm:inline font-bold">{t('oustaz.oustaz_history', "Discussions")} ({savedChats.length})</span>
          </button>

          {messages.length > 1 && (
            <button
              onClick={handleClearHistory}
              title={t('oustaz.oustaz_confirm_clear', "Effacer la conversation active")}
              className="p-1.5 rounded-lg bg-[#FCF8F2]/10 hover:bg-[#FCF8F2]/20 border border-[#FCF8F2]/15 text-[#FCF8F2]/80 hover:text-[#FCF8F2] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

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
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-amber-500/[0.01]">
        {messages.map((msg, idx) => {
          const isModel = msg.role === 'model';
          const isLatestModelMsg = isModel && idx === messages.length - 1;
          const isHighlighted = isLatestModelMsg && finishedGenerating;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${isModel ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-sm leading-relaxed transition-all duration-1000 ease-in-out ${
                isModel
                  ? isHighlighted
                    ? 'bg-amber-100/90 text-[#004D40] border-2 border-[#D0A21C] rounded-tl-none font-serif shadow-md scale-[1.01]'
                    : 'bg-amber-50 text-[#004D40] border border-[#D0A21C]/20 rounded-tl-none font-serif'
                  : 'bg-[#004D40] text-white rounded-tr-none font-sans'
              }`}>
                {isModel && (
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="font-extrabold text-[9px] uppercase tracking-wider block text-[#D0A21C] font-sans">
                      {t('oustaz.oustaz_title', "Oustaz Al-Mouyassar")} :
                    </span>
                    <button
                      onClick={() => speakMessage(msg.parts[0].text, idx)}
                      className="p-1 hover:bg-[#D0A21C]/10 rounded-md transition-all cursor-pointer flex items-center justify-center shrink-0 border border-transparent hover:border-[#D0A21C]/15"
                      title={currentlySpeakingIdx === idx ? "Arrêter la lecture" : "Écouter la réponse"}
                    >
                      {currentlySpeakingIdx === idx ? (
                        <div className="flex items-center gap-1">
                          <div className="flex gap-0.5 h-2.5 items-end">
                            <span className="w-0.5 h-1.5 bg-[#D0A21C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-0.5 h-2 bg-[#D0A21C] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-0.5 h-1 bg-[#D0A21C] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <Square className="w-2.5 h-2.5 text-[#D0A21C] fill-[#D0A21C] shrink-0" />
                        </div>
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-[#D0A21C] shrink-0" />
                      )}
                    </button>
                  </div>
                )}
                <p className="whitespace-pre-wrap">{msg.parts[0].text}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Loading Bubble */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-amber-50 text-[#004D40] max-w-[85%] rounded-2xl rounded-tl-none p-3.5 border border-[#D0A21C]/20 text-xs shadow-sm shadow-stone-100 flex items-center gap-3">
              <span className="text-[10px] font-black text-[#D0A21C] uppercase font-sans animate-pulse">
                {t('oustaz.oustaz_thinking', "L'Oustaz réfléchit d'un air bienveillant")}
              </span>
              <div className="flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 bg-[#D0A21C] rounded-full"
                    animate={{
                      scale: [0.6, 1.2, 0.6],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.22,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Localized Error Banner inside chat */}
        {errorStatus && (
          <div className="p-3 bg-rose-50 border border-rose-100 text-rose-700 text-[11px] rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <p className="flex-1">{errorStatus}</p>
            <button
              onClick={() => handleSendMessage(messages[messages.length - 1]?.parts[0].text || '')}
              className="text-stone-800 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-tight shrink-0 transition-colors"
            >
              {t('oustaz.oustaz_retry', "Réessayer")}
            </button>
          </div>
        )}

        <div ref={listEndRef} />
      </div>

      {/* Suggested prompts box only displayed when chat has low activities */}
      {messages.length < 3 && (
        <div className="px-4 py-2 bg-stone-50 border-t border-stone-100/60 shrink-0 space-y-1.5">
          <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
            {t('oustaz.oustaz_recommended', "Questions recommandées :")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p.query)}
                disabled={isLoading}
                className="text-[10px] font-bold text-[#004D40] bg-white border border-[#004D40]/15 hover:border-[#D0A21C] px-2.5 py-1.5 rounded-lg shrink-0 cursor-pointer shadow-sm transition-all hover:-translate-y-0.5"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic input bar */}
      <div className="p-3 bg-white border-t border-stone-100 shrink-0 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
          placeholder={t('oustaz.oustaz_placeholder', "Pose une question à l'Oustaz... (ex: C'est quoi la prière ?)")}
          disabled={isLoading}
          className="flex-1 px-4 py-2.5 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#D0A21C] disabled:bg-stone-50 disabled:text-stone-400"
        />
        <button
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim() || isLoading}
          className={`p-2.5 rounded-xl transition-all font-bold shrink-0 cursor-pointer flex items-center justify-center ${
            inputValue.trim() && !isLoading
              ? 'bg-[#004D40] text-[#FCF8F2] hover:bg-[#004D40]/90 shadow-sm shadow-[#004D40]/10'
              : 'bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
