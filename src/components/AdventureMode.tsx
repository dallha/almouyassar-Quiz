/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Compass, Trophy, Check, X, ArrowRight, Star, Heart, 
  Flame, Shield, Award, Sparkles, HelpCircle, ChevronRight
} from 'lucide-react';
import { playBadgeSound, playSelectSound } from './SoundEngine';
import { Badge, UserStats } from '../types';
import { BADGES } from '../data';
import { useLanguage } from '../LanguageContext';

interface AdventureModeProps {
  stats: UserStats;
  onUpdateStats: (updater: (prev: UserStats) => UserStats) => void;
  onBadgeUnlocked: (badge: Badge) => void;
}

interface QuestionNode {
  sentence: string;
  blankTemplate: string; // "Le grand fondateur est ________."
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface StoryPath {
  title: string;
  narrative: string;
  choiceLabel: string;
  choiceDescription: string;
  question: QuestionNode;
}

interface BranchingChapter {
  id: number;
  title: string;
  description: string;
  poetQuote: string;
  rewardBadgeId: string;
  introText: string;
  branchA: StoryPath;
  branchB: StoryPath;
  conclusionNarrative: string;
  conclusionQuestion: {
    sentence: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
}

export default function AdventureMode({ stats, onUpdateStats, onBadgeUnlocked }: AdventureModeProps) {
  const { t } = useLanguage();
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<
    'intro' | 'branch_choice' | 'path_narrative' | 'path_question' | 'conclusion_narrative' | 'conclusion_question' | 'congratulations'
  >('intro');
  const [selectedBranch, setSelectedBranch] = useState<'A' | 'B' | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Robust branching narrative chapters matching corporate goals
  const chapters: BranchingChapter[] = [
    {
      id: 1,
      title: t('adv_ch1_title', "Chapitre 1 : La Graine de la Foi"),
      description: t('adv_ch1_desc', "Découvrez l'enfance de notre fondateur Cheikh El Hadji Abdallah Niasse et la naissance de l'excellence en 2007."),
      poetQuote: t('adv_ch1_quote', "L'amour d'enseigner naît au berceau, abreuvé de foi divine."),
      rewardBadgeId: "graine_de_la_foi",
      introText: t('adv_ch1_intro', "Bienvenue à l'Institut Coranique Al-Mouyassar ! Tu es dans la paisible cour du Daara au Sénégal. Des élèves révisent joyeusement leurs versets sur des tablettes en bois. Cheikh El Hadji Abdallah Niasse t'accueille avec un grand sourire chaleureux. Il te dit : « Mon cher enfant, chaque grand arbre commence par une petite graine de foi. Pour comprendre notre histoire, par quel chemin veux-tu commencer ton aventure aujourd'hui ? »"),
      
      branchA: {
        title: t('adv_ch1_branchA_title', "Le parcours du Double Cursus d'Élite"),
        choiceLabel: t('adv_ch1_branchA_label', "Le parcours du Double Cursus"),
        choiceDescription: t('adv_ch1_branchA_choice_desc', "Découvre la création de notre modèle unique de 2007 alliant Coran et études générales d'excellence."),
        narrative: t('adv_ch1_branchA_narrative', "Cheikh El Hadji Abdallah Niasse t'explique : « En 2007, nous avons vu que les enfants devaient faire un choix déchirant entre mémoriser le Coran et aller à l'école moderne. Nous avons dit non ! Nous allons créer un Double Cursus unique d'élite. Ici, tu apprends les mathématiques, le français, les sciences, et tu mémorises le Saint Coran avec dévotion. »"),
        question: {
          sentence: t('adv_ch1_branchA_q_sentence', "Quel est le but principal de notre Double Cursus d'excellence ?"),
          blankTemplate: t('adv_ch1_branchA_q_blank', "Notre Double Cursus permet de ________."),
          options: [
            t('adv_ch1_branchA_opt1', "mémoriser le Coran tout en maintenant une scolarité classique d'élite"),
            t('adv_ch1_branchA_opt2', "ne faire que jouer au football toute la journée"),
            t('adv_ch1_branchA_opt3', "supprimer toutes les matières de sciences naturelles")
          ],
          correctAnswer: t('adv_ch1_branchA_opt1', "mémoriser le Coran tout en maintenant une scolarité classique d'élite"),
          explanation: t('adv_ch1_branchA_q_exp', "Félicitations ! Al-Mouyassar a conçu ce cursus d'élite afin de former des bâtisseurs de société dotés d'un cœur pur et d'un esprit brillant.")
        }
      },
      
      branchB: {
        title: t('adv_ch1_branchB_title', "L'Inspiration d'une Tante de Lumière"),
        choiceLabel: t('adv_ch1_branchB_label', "L'apprentissage de Seyda Mariama"),
        choiceDescription: t('adv_ch1_branchB_choice_desc', "Découvre comment sa tante, la légendaire dame de lumière, a inspiré sa dévotion sacrée."),
        narrative: t('adv_ch1_branchB_narrative', "Cheikh El Hadji Abdallah Niasse te confie avec une immense douceur : « Dans notre famille, l'amour de la science se transmet de génération en génération. Ma tante érudite, la vertueuse Seyda Mariama Niasse, a instruit des milliers de Talibés avec un amour infini. En la voyant consacrer sa vie au Livre d'Allah, j'ai compris que l'enseignement du Coran était la plus belle des œuvres. »"),
        question: {
          sentence: t('adv_ch1_branchB_q_sentence', "Qui est la pieuse tante de Cheikh Abdallah Niasse qui lui a transmis cette flamme éducative ?"),
          blankTemplate: t('adv_ch1_branchB_q_blank', "Notre fondateur a été profondément inspiré par sa tante érudite ________."),
          options: [
            t('adv_ch1_branchB_opt1', "Seyda Mariama Niasse, la reine du Daara"),
            t('adv_ch1_branchB_opt2', "Seyda Khadija, la marchande"),
            t('adv_ch1_branchB_opt3', "Seyda Fatoumata, l'artisane")
          ],
          correctAnswer: t('adv_ch1_branchB_opt1', "Seyda Mariama Niasse, la reine du Daara"),
          explanation: t('adv_ch1_branchB_q_exp', "Excellent ! Seyda Mariama Niasse est une figure légendaire de l'enseignement coranique au Sénégal, un modèle absolu pour notre institut.")
        }
      },
      
      conclusionNarrative: t('adv_ch1_conclusion_narrative', "Le Cheikh est enchanté par tes réponses : « Quel esprit éveillé ! Tu as saisi l'essence même de notre vocation. Pour sceller ton premier pas dans l'aventure et acquérir ton insigne, réponds à cette ultime question d'histoire. »"),
      conclusionQuestion: {
        sentence: t('adv_ch1_conclusion_q_sentence', "Qui est le guide dévoué qui a fondé l'école d'excellence Al-Mouyassar ?"),
        options: [
          "Cheikh Ibrahim Niass",
          "Cheikh El Hadji Abdallah Niasse",
          "Cheikh Seydi Niasse"
        ],
        correctAnswer: "Cheikh El Hadji Abdallah Niasse",
        explanation: t('adv_ch1_conclusion_q_exp', "Macha'Allah ! C'est Cheikh El Hadji Abdallah Niasse qui a eu cette vision lumineuse en 2007 pour allier la foi et la science contemporaine.")
      }
    },
    {
      id: 2,
      title: t('adv_ch2_title', "Chapitre 2 : Le Chemin de la Lumière"),
      description: t('adv_ch2_desc', "Découvrez les 5 échelons de mémorisation, de l'épellation de l'alphabet (Tahji) jusqu'au grand Khatm final."),
      poetQuote: t('adv_ch2_quote', "Lettre après lettre, le cœur s'illumine d'amour et de sagesse."),
      rewardBadgeId: "chemin_de_la_lumiere",
      introText: t('adv_ch2_intro', "L'apprentissage au Daara est un voyage par étapes sacrées. Oustaz Seydou t'interpelle en souriant : « Surnommé le Chemin de la Lumière, notre programme guide les cœurs de l'alphabet à la mémorisation de soixante Hizb. Préfères-tu découvrir la toute première marche avec le Tahji, ou contempler la glorieuse célébration finale du Khatm ? »"),
      
      branchA: {
        title: t('adv_ch2_branchA_title', "Le Tahji, l'Origine des Chants"),
        choiceLabel: t('adv_ch2_branchA_label', "Le Tahji (L'épellation)"),
        choiceDescription: t('adv_ch2_branchA_choice_desc', "Explore la magie de l'épellation et de la prononciation parfaite de l'alphabet arabe."),
        narrative: t('adv_ch2_branchA_narrative', "Oustaz t'invite devant un petit tableau noir : « Regarde ce petit garçon de 5 ans. Il apprend le Tahji ! C’est l’apprentissage de la phonétique, des règles élémentaires de lecture et de la prononciation parfaite de chaque lettre arabe. C'est en sculptant chaque lettre dans son cœur qu'il pourra plus tard réciter avec une beauté céleste. »"),
        question: {
          sentence: t('adv_ch2_branchA_q_sentence', "Quelle est la discipline fondatrice qui enseigne la prononciation parfaite des lettres ?"),
          blankTemplate: t('adv_ch2_branchA_q_blank', "À l'Institut, l'étape initiale d'épellation phonétique s'appelle le/la ________."),
          options: [
            t('adv_ch2_branchA_opt1', "Le Tahji (Lectures et Épellation)"),
            t('adv_ch2_branchA_opt2', "Le Tajwid Avancé"),
            t('adv_ch2_branchA_opt3', "Le Calcul rapide moderne")
          ],
          correctAnswer: t('adv_ch2_branchA_opt1', "Le Tahji (Lectures et Épellation)"),
          explanation: t('adv_ch2_branchA_q_exp', "Vrai ! Le Tahji est le fondement indispensable pour que chaque enfant apprenne à lire le Livre saint sans erreur de prononciation.")
        }
      },
      
      branchB: {
        title: t('adv_ch2_branchB_title', "Le Khatm, d'Or et de Lumière"),
        choiceLabel: t('adv_ch2_branchB_label', "Le Khatm (Le couronnement)"),
        choiceDescription: t('adv_ch2_branchB_choice_desc', "Vibre au rythme du grand événement couronnant la mémorisation complète du Coran."),
        narrative: t('adv_ch2_branchB_narrative', "Oustaz te montre une photo lumineuse : « Voici le jour du Khatm ! C'est la cérémonie grandiose de Clôture. Les élèves qui ont mémorisé chaque sourate reçoivent leurs diplômes, drapés dans de superbes habits dorés. Les parents pleurent de reconnaissance devant la communauté réunie. C’est le sommet de notre école. »"),
        question: {
          sentence: t('adv_ch2_branchB_q_sentence', "Comment appelle-t-on le jour solennel célébrant la mémorisation achevée ?"),
          blankTemplate: t('adv_ch2_branchB_q_blank', "L'événement sacré récompensant la clôture coranique finale s'appelle le/la ________."),
          options: [
            t('adv_ch2_branchB_opt1', "Le Khatm"),
            t('adv_ch2_branchB_opt2', "La Passerelle Scolaire"),
            t('adv_ch2_branchB_opt3', "Le Daara Vacance")
          ],
          correctAnswer: t('adv_ch2_branchB_opt1', "Le Khatm"),
          explanation: t('adv_ch2_branchB_q_exp', "Splendide ! Le Khatm est l'un des rituels de joie spirituelle les plus émouvants et bénis de la vie d'un élève (Talibé).")
        }
      },
      
      conclusionNarrative: t('adv_ch2_conclusion_narrative', "Oustaz te félicite chaleureusement : « Tu as compris que du plus petit pas au plus grand couronnement, l'effort est récompensé par Allah. Mais la récitation n'est rien sans l'action ! Nous enseignons aussi un pilier crucial : le comportement exemplaire moderne (Akhlaq). »"),
      conclusionQuestion: {
        sentence: t('adv_ch2_conclusion_q_sentence', "Quel est le nom du pilier éducatif centré sur le raffinement du comportement et de la morale des enfants ?"),
        options: [
          "L'Akhlaq (Le Comportement)",
          "Le Tahji",
          "La Grammaire"
        ],
        correctAnswer: "L'Akhlaq (Le Comportement)",
        explanation: t('adv_ch2_conclusion_q_exp', "Vrai ! La mémorisation doit s'incarner dans des actions quotidiennes de bonté, de respect des aînés, de politesse et de bienfaisance.")
      }
    },
    {
      id: 3,
      title: t('adv_ch3_title', "Chapitre 3 : La Bâtisse de Demain"),
      description: t('adv_ch3_desc', "Explorez la vision d'avenir de l'institut avec son futur Complexe Arabo-Islamique érigé à Pikine."),
      poetQuote: t('adv_ch3_quote', "Poser des pierres sacrées pour abriter les porteurs de la parole divine."),
      rewardBadgeId: "batisseur_avenir",
      introText: t('adv_ch3_intro', "Devant une grande maquette de l'institut, l'ingénieur de l'AMDMEC t'explique : « Pour offrir un cadre moderne et digne à nos Huffaz, nous bâtissons le grand Complexe Arabo-Islamique d'Excellence ! Que veux-tu inspecter en priorité sur cette superbe maquette aujourd'hui ? »"),
      
      branchA: {
        title: t('adv_ch3_branchA_title', "Écoles et Lieux de Savoir"),
        choiceLabel: t('adv_ch3_branchA_label', "La Mosquée et la Bibliothèque"),
        choiceDescription: t('adv_ch3_branchA_choice_desc', "Découvre les espaces dédiés à la prière sereine et à la recherche d'élite."),
        narrative: t('adv_ch3_branchA_narrative', "L'ingénieur pointe du doigt les dômes gracieux : « Regarde ! Nous construisons une magnifique Mosquée pour que nos enfants effectuent leurs prières quotidiennes. À côté se dresse une vaste Bibliothèque, remplie d'ouvrages précieux pour l'étude approfondie de toutes les sciences sacrées et modernes. »"),
        question: {
          sentence: t('adv_ch3_branchA_q_sentence', "Quelles infrastructures d'apprentissage et de culte composent le nouveau complexe ?"),
          blankTemplate: t('adv_ch3_branchA_q_blank', "Le futur complexe comprendra une grande mosquée et ________."),
          options: [
            t('adv_ch3_branchA_opt1', "une grande Bibliothèque de recherche"),
            t('adv_ch3_branchA_opt2', "un cinéma et une salle d'arcade"),
            t('adv_ch3_branchA_opt3', "un centre commercial")
          ],
          correctAnswer: t('adv_ch3_branchA_opt1', "une grande Bibliothèque de recherche"),
          explanation: t('adv_ch3_branchA_q_exp', "Vrai ! La bibliothèque sera le cœur spirituel et intellectuel des recherches des élèves de l'Institut.")
        }
      },
      
      branchB: {
        title: t('adv_ch3_branchB_title', "Protection et Confort des Talibés"),
        choiceLabel: t('adv_ch3_branchB_label', "Les Dortoirs modernes (Internat)"),
        choiceDescription: t('adv_ch3_branchB_choice_desc', "Découvre le cadre de vie chaleureux et sécurisé des internes de l'établissement."),
        narrative: t('adv_ch3_branchB_narrative', "L'ingénieur t'ouvre la maquette d'un pavillon d'habitation : « Nous voulons que nos internes vivent comme dans un douillet cocon de paix. Les Dortoirs modernes disposeront de lits spacieux, d'espaces de repos aérés et d'une sécurité maximale pour que chaque enfant étudie et se repose sereinement. »"),
        question: {
          sentence: t('adv_ch3_branchB_q_sentence', "Pourquoi bâtissons-nous des dortoirs modernes et équipés dans le complexe ?"),
          blankTemplate: t('adv_ch3_branchB_q_blank', "Pour assurer un repos sain et sécuritaire, nous construisons ________."),
          options: [
            t('adv_ch3_branchB_opt1', "des Dortoires modernes et aérés pour internes"),
            t('adv_ch3_branchB_opt2', "des campements extérieurs ordinaires"),
            t('adv_ch3_branchB_opt3', "des tentes de camping insolites")
          ],
          correctAnswer: t('adv_ch3_branchB_opt1', "des Dortoires modernes et aérés pour internes"),
          explanation: t('adv_ch3_branchB_q_exp', "Merveilleux ! Offrir de nobles conditions d'hébergement est la priorité absolue d'Al-Mouyassar pour protéger nos Talibés.")
        }
      },
      
      conclusionNarrative: t('adv_ch3_conclusion_narrative', "L'ingénieur s'incline respectueusement : « Ta perspicacité témoigne du fait que tu es un vrai bâtisseur d'avenir ! Ce projet moderne est soutenu par l'ambition collective de notre communauté. Sais-tu où s'élèvera ce complexe d'excellence ? »"),
      conclusionQuestion: {
        sentence: t('adv_ch3_conclusion_q_sentence', "Dans quelle commune de Dakar le grand complexe Arabo-Islamique d'élite Al-Mouyassar is implanté ?"),
        options: [
          "Pikine",
          "Almadies",
          "Rufisque"
        ],
        correctAnswer: "Pikine",
        explanation: t('adv_ch3_conclusion_q_exp', "Absolument ! Pikine accueillera ce superbe joyau pour rayonner sur tout le Sénégal. Autant d'efforts couronnés par l'excellence académique !")
      }
    },
    {
      id: 4,
      title: t('adv_ch4_title', "Chapitre 4 : L'Alliance de la Modernité (L'AMDMEC)"),
      description: t('adv_ch4_desc', "Découvrez comment l'AMDMEC unit l'école coranique aux exigences académiques modernes."),
      poetQuote: t('adv_ch4_quote', "Quand les forces s'unissent, les fleurs de la sagesse s'épanouissent."),
      rewardBadgeId: 'soutien_structurel',
      introText: t('adv_ch4_intro', "Le président de l'AMDMEC t'invite dans une salle de conférence lumineuse de l'institut. « Bienvenue ! Notre association unit l'école aux exigences de la modernité académique pour que chacun d'entre vous puisse s'élever. De quel pilier d'action veux-tu parler pour commencer ? »"),
      branchA: {
        title: t('adv_ch4_branchA_title', "Le Soutien Scolaire et Matériel"),
        choiceLabel: t('adv_ch4_branchA_label', "L'Appui au Double Cursus"),
        choiceDescription: t('adv_ch4_branchA_choice_desc', "Découvre comment l'association finance les ressources scolaires et encadre les élèves."),
        narrative: t('adv_ch4_branchA_narrative', "L'AMDMEC fournit une aide structurelle de premier ordre : achat de cahiers, manuels scolaires d'élite, tables de travail modernes, et soutien pédagogique individualisé pour allier de façon optimale l'enseignement général et les heures de mémorisation du Coran."),
        question: {
          sentence: t('adv_ch4_branchA_q_sentence', "Quelle est la principale contribution matérielle de l'AMDMEC aux élèves ?"),
          blankTemplate: t('adv_ch4_branchA_q_blank', "L'AMDMEC soutient l'excellence en fournissant ________."),
          options: [
            t('adv_ch4_branchA_opt1', "des fournitures, manuels scolaires modernes et un appui aux cours d'élite"),
            t('adv_ch4_branchA_opt2', "des consoles de jeux vidéo pour le Daara"),
            t('adv_ch4_branchA_opt3', "du mobilier de bureau uniquement pour le directeur")
          ],
          correctAnswer: t('adv_ch4_branchA_opt1', "des fournitures, manuels scolaires modernes et un appui aux cours d'élite"),
          explanation: t('adv_ch4_branchA_q_exp', "Splendide ! L'AMDMEC veille à ce que chaque élève dispose d'un matériel pédagogique complet.")
        }
      },
      branchB: {
        title: t('adv_ch4_branchB_title', "L'Engagement Parental Interactif"),
        choiceLabel: t('adv_ch4_branchB_label', "La Coopération des Parents d'Élèves"),
        choiceDescription: t('adv_ch4_branchB_choice_desc', "Explore comment la participation des parents garantit un lien constant avec la direction."),
        narrative: t('adv_ch4_branchB_narrative', "L'AMDMEC assure un cadre de dialogue permanent. Les parents organisent des ateliers de civisme et de santé préventive, tout en contribuant aux finances solidaires de l'établissement pour parrainer les orphelins."),
        question: {
          sentence: t('adv_ch4_branchB_q_sentence', "Quel rôle clé les parents jouent-ils à travers l'association ?"),
          blankTemplate: t('adv_ch4_branchB_q_blank', "L'engagement des parents avec l'AMDMEC permet de ________."),
          options: [
            t('adv_ch4_branchB_opt1', "collaborer étroitement avec la direction et soutenir les orphelins"),
            t('adv_ch4_branchB_opt2', "changer le règlement intérieur tous les jours"),
            t('adv_ch4_branchB_opt3', "fermer l'institut pendant la saison des pluies")
          ],
          correctAnswer: t('adv_ch4_branchB_opt1', "collaborer étroitement avec la direction et soutenir les orphelins"),
          explanation: t('adv_ch4_branchB_q_exp', "Parfait ! La solidarité parentale permet d'offrir l'éducation à chacun sans distinction sociale.")
        }
      },
      conclusionNarrative: t('adv_ch4_conclusion_narrative', "Le président se réjouit : « Mouyassar est une grande famille soudée ! Grâce à l'association des parents d'élèves AMDMEC active depuis 2009, notre institut progresse chaque jour sur la voie de la réussite spirituelle et académique. Termine ton initiation en répondant à notre question finale d'histoire. »"),
      conclusionQuestion: {
        sentence: t('adv_ch4_conclusion_q_sentence', "Quelle est la signification authentique du sigle AMDMEC au sein de l'institut ?"),
        options: [
          "Association des Maîtres d'Écoles Coraniques",
          "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
          "Alliance des Membres pour le Développement Mondial"
        ],
        correctAnswer: "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
        explanation: t('adv_ch4_conclusion_q_exp', "Félicitations éclatantes ! L'AMDMEC est le moteur du développement moderne de notre prestigieux institut.")
      }
    }
  ];

  const handleStartChapter = (num: number) => {
    playSelectSound();
    setActiveChapter(num);
    setCurrentStep('intro');
    setSelectedBranch(null);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleChooseBranch = (branch: 'A' | 'B') => {
    playSelectSound();
    setSelectedBranch(branch);
    setCurrentStep('path_narrative');
  };

  const handleAnswerSelect = (opt: string) => {
    if (isAnswered) return;
    playSelectSound();
    setSelectedAnswer(opt);
  };

  const handleValidateBranchAnswer = () => {
    if (!selectedAnswer || isAnswered || activeChapter === null || !selectedBranch) return;
    
    const currentChapter = chapters[activeChapter - 1];
    const currentPath = selectedBranch === 'A' ? currentChapter.branchA : currentChapter.branchB;
    const correct = selectedAnswer === currentPath.question.correctAnswer;
    
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      onUpdateStats(prev => ({
        ...prev,
        xp: prev.xp + 25, // 25 XP for branch question correct
        totalAnswered: prev.totalAnswered + 1,
        correctAnswersCount: prev.correctAnswersCount + 1,
        streak: prev.streak + 1
      }));
    } else {
      onUpdateStats(prev => ({
        ...prev,
        streak: 0
      }));
    }
  };

  const handleNextToConclusion = () => {
    playSelectSound();
    setCurrentStep('conclusion_narrative');
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleValidateConclusionAnswer = () => {
    if (!selectedAnswer || isAnswered || activeChapter === null) return;
    
    const currentChapter = chapters[activeChapter - 1];
    const correct = selectedAnswer === currentChapter.conclusionQuestion.correctAnswer;
    
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      onUpdateStats(prev => ({
        ...prev,
        xp: prev.xp + 25, // 25 XP for conclusion question correct
        totalAnswered: prev.totalAnswered + 1,
        correctAnswersCount: prev.correctAnswersCount + 1,
        streak: prev.streak + 1
      }));
    } else {
      onUpdateStats(prev => ({
        ...prev,
        streak: 0
      }));
    }
  };

  const handleFinishChapter = () => {
    playSelectSound();
    if (activeChapter === null) return;
    const currentChapter = chapters[activeChapter - 1];
    const badgeId = currentChapter.rewardBadgeId;
    const isAlreadyUnlocked = stats.unlockedBadgeIds.includes(badgeId);

    // Track for Daily Quests progress
    window.dispatchEvent(new CustomEvent('adventure_branch_completed'));

    onUpdateStats(prev => {
      const nextIds = prev.unlockedBadgeIds.includes(badgeId) 
        ? prev.unlockedBadgeIds 
        : [...prev.unlockedBadgeIds, badgeId];
      return {
        ...prev,
        unlockedBadgeIds: nextIds,
        xp: prev.xp + 50 // Adventure Chapter Complete Bonus
      };
    });

    if (!isAlreadyUnlocked) {
      const badgeObj = BADGES.find(b => b.id === badgeId);
      if (badgeObj) {
        setTimeout(() => {
          playBadgeSound();
          onBadgeUnlocked(badgeObj);
        }, 400);
      }
    }

    setCurrentStep('congratulations');
  };

  const currentChapterObj = activeChapter !== null ? chapters[activeChapter - 1] : null;
  const currentPathObj = currentChapterObj && selectedBranch 
    ? (selectedBranch === 'A' ? currentChapterObj.branchA : currentChapterObj.branchB) 
    : null;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <AnimatePresence mode="wait">
        
        {/* STEP 1: CHAPTER SELECTION BOARD */}
        {activeChapter === null && (
          <motion.div
            key="chapter-list"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="space-y-5"
          >
            <div className="text-center space-y-1">
              <span className="text-[9px] font-bold text-[#D0A21C] bg-amber-500/10 border border-[#D0A21C]/25 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono inline-block">
                Mode Campagne Narrative
              </span>
              <h2 className="text-lg font-extrabold text-[#004D40] uppercase tracking-normal">
                Les Contes d&apos;Al-Mouyassar
              </h2>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Devenez l'acteur de récits historiques d'excellence ! Faites des choix, découvrez des destins uniques et débloquez de superbes récompenses.
              </p>
            </div>

            <div className="grid gap-4">
              {chapters.map((ch, idx) => {
                const isCompleted = stats.unlockedBadgeIds.includes(ch.rewardBadgeId);
                const isUnlockedIdx = idx === 0 || stats.unlockedBadgeIds.includes(chapters[idx - 1].rewardBadgeId);
                
                return (
                  <div
                    key={ch.id}
                    className={`rounded-2xl border overflow-hidden transition-all ${
                      isUnlockedIdx 
                        ? 'bg-white border-stone-200 shadow-sm hover:border-[#004D40]/30' 
                        : 'bg-stone-50 border-stone-150 opacity-60 pointer-events-none'
                    }`}
                  >
                    {/* Chapter Card Header Banner Illustration */}
                    <div className="relative h-32 w-full overflow-hidden">
                      <img 
                        src={
                          ch.id === 1 ? "/images/graine_foi.png" :
                          ch.id === 2 ? "/images/chemin_lumiere.png" :
                          ch.id === 3 ? "/images/batisse_demain.png" :
                          "/images/modernite_school.png"
                        }
                        alt={ch.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-3 text-[10px] font-bold text-amber-400 bg-[#004D40] px-2.5 py-1 rounded-full border border-[#D0A21C]/35 uppercase tracking-wider font-mono">
                        Chapitre {ch.id}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Chapter badge icon */}
                        <div className={`p-3 rounded-xl border shrink-0 ${
                          isCompleted 
                            ? 'bg-amber-50 text-[#D0A21C] border-[#D0A21C]/30' 
                            : isUnlockedIdx 
                            ? 'bg-[#004D40]/10 text-[#004D40] border-[#004D40]/25' 
                            : 'bg-stone-200 text-stone-400 border-stone-250'
                        }`}>
                          {ch.id === 1 ? <BookOpen className="w-5 h-5" /> : ch.id === 2 ? <Compass className="w-5 h-5" /> : ch.id === 3 ? <Trophy className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                        </div>

                        {/* Info & Description */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xs font-extrabold text-stone-800 uppercase tracking-tight">
                              {ch.title}
                            </h3>
                            {isCompleted && (
                              <span className="text-[8px] bg-emerald-50 text-emerald-600 border border-emerald-250 font-bold px-1.5 py-0.5 rounded-full uppercase">
                                Réussi !
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-stone-500 leading-relaxed">
                            {ch.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-1.5 pt-2">
                            <span className="text-[8px] font-bold text-gray-400 font-mono uppercase">Récompense :</span>
                            <span className="text-[8px] font-extrabold text-[#D0A21C] bg-[#D0A21C]/10 border border-[#D0A21C]/20 rounded px-1.5 py-0.5 uppercase tracking-wider">
                              Badge {ch.id === 1 ? 'Graine de la Foi' : ch.id === 2 ? 'Chemin de la Lumière' : ch.id === 3 ? 'Bâtisseur de Demain' : 'Pilier de la Modernisation'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3.5 border-t border-stone-100 pt-3 flex items-center justify-between">
                        <p className="text-[11px] text-slate-400 italic font-serif">
                          &ldquo;{ch.poetQuote}&rdquo;
                        </p>
                        
                        {isUnlockedIdx ? (
                          <button
                            onClick={() => handleStartChapter(ch.id)}
                            className="px-3.5 py-1.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white rounded-lg text-[10px] font-bold tracking-tight uppercase transition-all hover:translate-x-0.5 cursor-pointer flex items-center gap-1"
                          >
                            {isCompleted ? "Rejouer" : "Découvrir"}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">
                            🔒 Chapitre Bloqué
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 2: INTRO NARRATIVE SCREEN */}
        {activeChapter !== null && currentStep === 'intro' && currentChapterObj && (
          <motion.div
            key="chapter-intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 space-y-5 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#004D40]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-[10px] font-bold tracking-widest text-[#D0A21C] uppercase font-mono">
                Chapitre {activeChapter} / {chapters.length} • Prologue
              </span>
              <button
                onClick={() => { playSelectSound(); setActiveChapter(null); }}
                className="text-stone-400 hover:text-stone-600 text-[10px] font-bold uppercase transition-colors cursor-pointer"
              >
                Retour
              </button>
            </div>

            <h3 className="text-base font-black text-[#004D40] tracking-tight uppercase text-center sm:text-left">
              {currentChapterObj.title}
            </h3>

            {/* Chapter Illustration Image */}
            <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-stone-200/60 shadow-xs shrink-0">
              <img 
                src={
                  activeChapter === 1 ? "/images/graine_foi.png" :
                  activeChapter === 2 ? "/images/chemin_lumiere.png" :
                  activeChapter === 3 ? "/images/batisse_demain.png" :
                  "/images/modernite_school.png"
                } 
                alt={currentChapterObj.title}
                className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-4 rounded-xl bg-amber-50/15 border border-[#D0A21C]/15">
              <p className="text-xs text-stone-700 leading-relaxed font-serif whitespace-pre-line">
                {currentChapterObj.introText}
              </p>
            </div>

            <div className="border-t border-stone-150 pt-4 flex justify-end">
              <button
                onClick={() => { playSelectSound(); setCurrentStep('branch_choice'); }}
                className="px-5 py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white rounded-xl text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1.5 shadow-md shadow-stone-200"
              >
                <span>Faire un choix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: BRANCH CHOICE SELECTOR */}
        {activeChapter !== null && currentStep === 'branch_choice' && currentChapterObj && (
          <motion.div
            key="branch-choice"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 space-y-5 shadow-xl"
          >
            <span className="text-[10px] font-mono font-bold text-[#D0A21C] tracking-widest uppercase block text-center">
              Faites votre choix - Choisissez votre chemin de récit :
            </span>
            <h3 className="text-base font-extrabold text-[#004D40] text-center uppercase tracking-tight">
              Quelle voie souhaitez-vous emprunter ?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Branch A Card option */}
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                onClick={() => handleChooseBranch('A')}
                className="p-5 rounded-2xl border-2 border-stone-200 hover:border-[#004D40]/60 text-left bg-stone-50/30 hover:bg-[#004D40]/5 transition-all text-stone-800 space-y-3 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-stone-850">
                    {currentChapterObj.branchA.choiceLabel}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                    {currentChapterObj.branchA.choiceDescription}
                  </p>
                </div>
                <div className="text-[10px] text-[#004D40] font-black uppercase flex items-center gap-1 pt-2">
                  <span>Sélectionner</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </motion.button>

              {/* Branch B Card option */}
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                onClick={() => handleChooseBranch('B')}
                className="p-5 rounded-2xl border-2 border-stone-200 hover:border-amber-500/60 text-left bg-stone-50/30 hover:bg-amber-500/5 transition-all text-stone-800 space-y-3 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-stone-850">
                    {currentChapterObj.branchB.choiceLabel}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                    {currentChapterObj.branchB.choiceDescription}
                  </p>
                </div>
                <div className="text-[10px] text-amber-600 font-black uppercase flex items-center gap-1 pt-2">
                  <span>Sélectionner</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </motion.button>
            </div>

            <div className="border-t border-stone-150 pt-3.5 flex justify-start">
              <button
                onClick={() => { playSelectSound(); setCurrentStep('intro'); }}
                className="px-4 py-2 text-stone-500 hover:text-stone-700 text-xs font-bold uppercase transition-colors cursor-pointer"
              >
                Retour
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: BRANCH PATH NARRATIVE VIEW */}
        {activeChapter !== null && currentStep === 'path_narrative' && currentChapterObj && currentPathObj && (
          <motion.div
            key="branch-narrative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 space-y-5 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#004D40]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-[10px] font-bold tracking-widest text-[#D0A21C] uppercase font-mono">
                Chapitre {activeChapter} • Voie {selectedBranch}
              </span>
              <button
                onClick={() => { playSelectSound(); setCurrentStep('branch_choice'); }}
                className="text-stone-400 hover:text-stone-600 text-[10px] font-bold uppercase transition-colors cursor-pointer"
              >
                Changer de Voie
              </button>
            </div>

            <h3 className="text-base font-black text-[#004D40] tracking-tight uppercase">
              {currentPathObj.title}
            </h3>

            <div className="p-4 rounded-xl bg-indigo-50/15 border border-indigo-500/10">
              <p className="text-xs text-stone-700 leading-relaxed font-serif whitespace-pre-line">
                {currentPathObj.narrative}
              </p>
            </div>

            <div className="border-t border-stone-150 pt-4 flex justify-between">
              <button
                onClick={() => { playSelectSound(); setCurrentStep('branch_choice'); }}
                className="px-4 py-2 text-stone-500 hover:text-stone-700 text-xs font-bold uppercase transition-colors cursor-pointer"
              >
                Retour
              </button>
              
              <button
                onClick={() => { playSelectSound(); setCurrentStep('path_question'); }}
                className="px-5 py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white rounded-xl text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1.5 shadow-md shadow-stone-200"
              >
                <span>Accéder au défi !</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 5: BRANCH PATH QUESTION CHALLENGE */}
        {activeChapter !== null && currentStep === 'path_question' && currentChapterObj && currentPathObj && (
          <motion.div
            key="branch-question"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-5 sm:p-6 rounded-2xl bg-[#FCF8F2] border border-[#004D40]/20 space-y-5 shadow-xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-stone-200/40">
              <span className="text-[10px] font-bold text-[#D0A21C] font-mono whitespace-nowrap uppercase">
                Défi de Lecture • Voie {selectedBranch}
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-sans uppercase">
                Question 1 / 2
              </span>
            </div>

            {/* Interactive Blank Context Card */}
            <div className="p-4 bg-white rounded-xl border border-stone-100 shadow-sm space-y-4">
              <p className="text-[11px] text-[#004D40] font-bold leading-normal uppercase tracking-wider">
                Remplissez l&apos;espace vide :
              </p>

              {/* Story structure with blank */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-wrap items-center gap-1.5">
                {currentPathObj.question.blankTemplate.split('________').map((part, index, arr) => (
                  <span key={index} className="text-xs font-medium text-stone-800">
                    {part}
                    {index < arr.length - 1 && (
                      <span className={`inline-block mx-1 px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                        isAnswered 
                          ? isCorrect 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-300' 
                            : 'bg-rose-50 text-rose-600 border-rose-350'
                          : selectedAnswer 
                          ? 'bg-amber-50 text-[#004D40] border-[#D0A21C] animate-pulse' 
                          : 'bg-stone-250 text-stone-400 border-stone-300 border-dashed border-2 italic min-w-24 text-center'
                      }`}>
                        {selectedAnswer || 'Choisir...'}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Beautiful Q & A choices block */}
            <div className="space-y-3.5">
              <p className="text-xs font-extrabold uppercase text-stone-700 tracking-wider">
                {currentPathObj.question.sentence}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {currentPathObj.question.options.map((opt) => {
                  const isSelected = selectedAnswer === opt;
                  const isAnswerCorrectStyle = isAnswered && opt === currentPathObj.question.correctAnswer;
                  const isAnswerIncorrectStyle = isAnswered && isSelected && !isCorrect;

                  let buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-white border-stone-200 text-stone-700 hover:border-[#004D40]/35';
                  if (isAnswerCorrectStyle) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-emerald-50 border-emerald-400 text-emerald-700 font-bold';
                  } else if (isAnswerIncorrectStyle) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-rose-50 border-rose-400 text-rose-700 font-bold';
                  } else if (isSelected) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-amber-50 border-[#D0A21C] text-[#004D40] font-bold shadow-inner';
                  }

                  // Determine frame animation based on response state
                  let animateObj = {};
                  if (isAnswered) {
                    if (isAnswerCorrectStyle) {
                      animateObj = {
                        scale: [1, 1.03, 0.98, 1.01, 1],
                        y: [0, -4, 2, -1, 0],
                        transition: { duration: 0.5 }
                      };
                    } else if (isAnswerIncorrectStyle) {
                      animateObj = {
                        x: [0, -6, 6, -6, 6, -3, 3, 0],
                        transition: { duration: 0.5 }
                      };
                    }
                  } else if (isSelected) {
                    animateObj = { scale: 1.01 };
                  }

                  return (
                    <motion.button
                      key={opt}
                      onClick={() => handleAnswerSelect(opt)}
                      disabled={isAnswered}
                      animate={animateObj}
                      whileHover={!isAnswered ? { scale: 1.008, x: 2 } : {}}
                      whileTap={!isAnswered ? { scale: 0.995 } : {}}
                      className={buttonClass}
                    >
                      <span className="truncate pr-2">{opt}</span>
                      
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isAnswerCorrectStyle 
                          ? 'bg-emerald-500 border-emerald-500 text-white' 
                          : isAnswerIncorrectStyle 
                          ? 'bg-rose-500 border-rose-500 text-white' 
                          : isSelected 
                          ? 'bg-[#D0A21C] border-[#D0A21C] text-[#FCF8F2]' 
                          : 'border-stone-300'
                      }`}>
                        {isAnswerCorrectStyle && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        {isAnswerIncorrectStyle && <X className="w-3.5 h-3.5 stroke-[3]" />}
                        {!isAnswered && isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Answer feedback notes block */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  isCorrect 
                    ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-800' 
                    : 'bg-rose-500/5 border-rose-500/10 text-rose-800'
                }`}
              >
                <div className="flex gap-2 items-start">
                  <span className="text-sm shrink-0">{isCorrect ? '🌟' : '💡'}</span>
                  <div>
                    <span className="font-extrabold block text-[10px] uppercase tracking-wider mb-0.5">
                      {isCorrect ? 'Barakallahou Fik ! (Excellent)' : 'Explication Pédagogique :'}
                    </span>
                    {currentPathObj.question.explanation}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions triggers */}
            <div className="border-t border-stone-200/60 pt-4 flex justify-between gap-3">
              <button
                onClick={() => { playSelectSound(); setActiveChapter(null); }}
                className="px-4 py-2.5 bg-stone-150 text-stone-600 rounded-lg text-xs font-bold uppercase tracking-tight cursor-pointer"
              >
                Quitter
              </button>

              {!isAnswered ? (
                <button
                  onClick={handleValidateBranchAnswer}
                  disabled={!selectedAnswer}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm ${
                    selectedAnswer 
                      ? 'bg-[#004D40] text-white hover:bg-[#004D40]/90 shadow-stone-200' 
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                  }`}
                >
                  Valider
                </button>
              ) : (
                <button
                  onClick={handleNextToConclusion}
                  className="px-5 py-2.5 bg-[#D0A21C] hover:bg-[#D0A21C]/90 text-[#FCF8F2] rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-md shadow-amber-900/10 flex items-center gap-1 cursor-pointer"
                >
                  <span>Continuer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* STEP 6: CONCLUSION STORY NARRATIVE */}
        {activeChapter !== null && currentStep === 'conclusion_narrative' && currentChapterObj && (
          <motion.div
            key="conclusion-narrative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 space-y-5 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#004D40]/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-[10px] font-bold tracking-widest text-[#D0A21C] uppercase font-mono">
                Chapitre {activeChapter} • Épilogue d&apos;Union
              </span>
            </div>

            <h3 className="text-base font-black text-[#004D40] tracking-tight uppercase">
              Le Sommet de la Voie
            </h3>

            <div className="p-4 rounded-xl bg-amber-50/15 border border-[#D0A21C]/15">
              <p className="text-xs text-stone-700 leading-relaxed font-serif whitespace-pre-line">
                {currentChapterObj.conclusionNarrative}
              </p>
            </div>

            <div className="border-t border-stone-150 pt-4 flex justify-end">
              <button
                onClick={() => { playSelectSound(); setCurrentStep('conclusion_question'); }}
                className="px-5 py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-white rounded-xl text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1.5 shadow-md shadow-stone-200"
              >
                <span>Défi Final !</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 7: CONCLUSION QUESTION CHALLENGE */}
        {activeChapter !== null && currentStep === 'conclusion_question' && currentChapterObj && (
          <motion.div
            key="conclusion-question"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="p-5 sm:p-6 rounded-2xl bg-[#FCF8F2] border border-[#004D40]/20 space-y-5 shadow-xl"
          >
            <div className="flex items-center justify-between pb-2 border-b border-stone-200/40">
              <span className="text-[10px] font-bold text-[#D0A21C] font-mono whitespace-nowrap uppercase">
                Le Couronnement du Chapitre
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-sans uppercase">
                Question 2 / 2
              </span>
            </div>

            {/* MCQ challenge */}
            <div className="space-y-3.5">
              <p className="text-xs font-extrabold uppercase text-stone-700 tracking-wider">
                {currentChapterObj.conclusionQuestion.sentence}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {currentChapterObj.conclusionQuestion.options.map((opt) => {
                  const isSelected = selectedAnswer === opt;
                  const isAnswerCorrectStyle = isAnswered && opt === currentChapterObj.conclusionQuestion.correctAnswer;
                  const isAnswerIncorrectStyle = isAnswered && isSelected && !isCorrect;

                  let buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-white border-stone-200 text-stone-700 hover:border-[#004D40]/35';
                  if (isAnswerCorrectStyle) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-emerald-50 border-emerald-400 text-emerald-700 font-bold';
                  } else if (isAnswerIncorrectStyle) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-rose-50 border-rose-400 text-rose-700 font-bold';
                  } else if (isSelected) {
                    buttonClass = 'p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border cursor-pointer bg-amber-50 border-[#D0A21C] text-[#004D40] font-bold shadow-inner';
                  }

                  // Determine frame animation based on response state
                  let animateObj = {};
                  if (isAnswered) {
                    if (isAnswerCorrectStyle) {
                      animateObj = {
                        scale: [1, 1.03, 0.98, 1.01, 1],
                        y: [0, -4, 2, -1, 0],
                        transition: { duration: 0.5 }
                      };
                    } else if (isAnswerIncorrectStyle) {
                      animateObj = {
                        x: [0, -6, 6, -6, 6, -3, 3, 0],
                        transition: { duration: 0.5 }
                      };
                    }
                  } else if (isSelected) {
                    animateObj = { scale: 1.01 };
                  }

                  return (
                    <motion.button
                      key={opt}
                      onClick={() => handleAnswerSelect(opt)}
                      disabled={isAnswered}
                      animate={animateObj}
                      whileHover={!isAnswered ? { scale: 1.008, x: 2 } : {}}
                      whileTap={!isAnswered ? { scale: 0.995 } : {}}
                      className={buttonClass}
                    >
                      <span className="truncate pr-2">{opt}</span>
                      
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isAnswerCorrectStyle 
                          ? 'bg-emerald-500 border-emerald-500 text-white' 
                          : isAnswerIncorrectStyle 
                          ? 'bg-rose-500 border-rose-500 text-white' 
                          : isSelected 
                          ? 'bg-[#D0A21C] border-[#D0A21C] text-[#FCF8F2]' 
                          : 'border-stone-300'
                      }`}>
                        {isAnswerCorrectStyle && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        {isAnswerIncorrectStyle && <X className="w-3.5 h-3.5 stroke-[3]" />}
                        {!isAnswered && isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Answer feedback notes block */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  isCorrect 
                    ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-800' 
                    : 'bg-rose-500/5 border-rose-500/10 text-rose-800'
                }`}
              >
                <div className="flex gap-2 items-start">
                  <span className="text-sm shrink-0">{isCorrect ? '🌟' : '💡'}</span>
                  <div>
                    <span className="font-extrabold block text-[10px] uppercase tracking-wider mb-0.5">
                      {isCorrect ? 'Barakallahou Fik ! (Excellent)' : 'Explication Pédagogique :'}
                    </span>
                    {currentChapterObj.conclusionQuestion.explanation}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions triggers */}
            <div className="border-t border-stone-200/60 pt-4 flex justify-between gap-3">
              <button
                onClick={() => { playSelectSound(); setActiveChapter(null); }}
                className="px-4 py-2.5 bg-stone-150 text-stone-600 rounded-lg text-xs font-bold uppercase tracking-tight cursor-pointer"
              >
                Quitter
              </button>

              {!isAnswered ? (
                <button
                  onClick={handleValidateConclusionAnswer}
                  disabled={!selectedAnswer}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm ${
                    selectedAnswer 
                      ? 'bg-[#004D40] text-white hover:bg-[#004D40]/90 shadow-stone-200' 
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                  }`}
                >
                  Valider
                </button>
              ) : (
                <button
                  onClick={handleFinishChapter}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-md flex items-center gap-1 cursor-pointer"
                >
                  <span>Couronner le Récit</span>
                  <Trophy className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* STEP 8: CONGRATULATIONS OVERLAY */}
        {activeChapter !== null && currentStep === 'congratulations' && currentChapterObj && (
          <motion.div
            key="congratulations-screen"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.93 }}
            className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[#D0A21C]/35 text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            {/* Sparkles design elements */}
            <div className="absolute top-4 left-4 text-amber-400 animate-pulse text-xl">★</div>
            <div className="absolute bottom-4 right-4 text-amber-400 animate-pulse text-xl">★</div>
            
            <div className="w-16 h-16 bg-[#D0A21C]/10 text-[#D0A21C] rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-[#D0A21C]/25">
              <Trophy className="w-8 h-8 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#D0A21C] tracking-widest uppercase">
                Chapitre {activeChapter} Complété !
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#004D40] leading-tight">
                Macha&apos;Allah, quel exploit !
              </h2>
              <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                Tu as répondu à toutes les questions et navigué sur le chemin des récits historiques d&apos;Al-Mouyassar d&apos;une main de maître !
              </p>
            </div>

            {/* Award layout */}
            <div className="max-w-sm mx-auto p-4 rounded-xl bg-amber-50/30 border border-[#D0A21C]/25 text-left space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#004D40] text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <p className="text-[9px] text-[#004D40] uppercase font-bold tracking-wider leading-none">Insigne débloqué :</p>
                  <p className="text-xs font-black text-stone-850 mt-1 uppercase">
                    {activeChapter === 1 ? 'Graine de la Foi' : activeChapter === 2 ? 'Chemin de la Lumière' : 'Bâtisseur de l\'Avenir'}
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-stone-400 leading-normal border-t border-dashed border-stone-200/80 pt-1.5 font-serif italic">
                {activeChapter === 1 
                  ? '« Honore le savoir et l\'abnégation de Seyda Mariama Niasse et Cheikh El Hadji. »' 
                  : activeChapter === 2 
                  ? '« Célèbre l\'effort accompli, du Tahji d\'épellation coranique jusqu\'au Khatm. »' 
                  : '« Célèbre le grand complexe de Pikine, la mosquée et la bibliothèque de demain. »'}
              </p>
            </div>

            {/* Finish CTA */}
            <div className="pt-2">
              <button
                onClick={() => { playSelectSound(); setActiveChapter(null); }}
                className="px-6 py-3 bg-[#004D40] hover:bg-[#004D40]/90 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-1.5 mx-auto cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
                <span>Retourner à la Campagne</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
