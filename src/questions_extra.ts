import { Question } from './types';

export const EXTRA_QUESTIONS: Question[] = [
  // Hadith & Sunnah - Débutant (60 questions)
  ...Array.from({ length: 60 }, (_, idx) => {
    const id = 181 + idx;
    const questionsAndAnswers = [
      {
        q: "Quel compresseur ou livre de Hadith est considéré comme le plus authentique après le Coran ?",
        options: ["Le Sahih d'Al-Bukhari", "Le Sunan d'At-Tirmidhi", "Le Muwatta de l'Imam Malik", "Le Musnad d'Ahmad"],
        ans: "Le Sahih d'Al-Bukhari",
        exp: "Le Sahih de l'Imam Al-Bukhari est considéré à l'unanimité comme la compilation de Hadiths la plus authentique."
      },
      {
        q: "Comment appelle-t-on les paroles, actes et approbations du Prophète (PSL) ?",
        options: ["La Sunnah / Le Hadith", "Le Fiqh", "La Sirah", "Le Coran"],
        ans: "La Sunnah / Le Hadith",
        exp: "La Sunnah représente la tradition prophétique matérielle et spirituelle qui guide les musulmans."
      },
      {
        q: "Selon le Hadith, quel est le meilleur jour de la semaine sur lequel le soleil se lève ?",
        options: ["Le vendredi", "Le lundi", "Le samedi", "Le jeudi"],
        ans: "Le vendredi",
        exp: "Le vendredi (Yawm al-Jumu'ah) est le plus noble jour de la semaine en Islam."
      },
      {
        q: "Quel est le comportement à adopter lorsqu'on entend le nom du Prophète ?",
        options: ["Dire 'Sallallahu Alayhi wa Sallam'", "Garder le silence", "Aller faire ses ablutions", "Faire une aumône"],
        ans: "Dire 'Sallallahu Alayhi wa Sallam'",
        exp: "Prier sur le Prophète est ordonné par le Coran et fortement récompensé selon les Hadiths."
      },
      {
        q: "Selon la Sunnah, que doit-on faire avant de boire de l'eau ?",
        options: ["S'asseoir et dire Bismillah", "Rester debout et boire vite", "Laver le verre trois fois", "Fermer les yeux"],
        ans: "S'asseoir et dire Bismillah",
        exp: "Boire assis et commencer par 'Bismillah' fait partie des nobles manières de table du Prophète."
      },
      {
        q: "Où doit-on garder son regard durant la prière (Salah) selon la Sunnah ?",
        options: ["Vers le lieu de prosternation (Sujud)", "Vers le plafond", "Vers le ciel", "Vers les côtés"],
        ans: "Vers le lieu de prosternation (Sujud)",
        exp: "Garder les yeux fixés sur le point de prosternation favorise la concentration (Khouchou')."
      },
      {
        q: "Quelle est la Sunnah concernant le brossage des dents avant la prière avec le bois traditionnel ?",
        options: ["Utiliser le Siwak", "Utiliser uniquement de l'eau", "Ne rien faire", "Utiliser du parfum"],
        ans: "Utiliser le Siwak",
        exp: "Le Prophète a dit que le Siwak purifie la bouche et plaît grandement au Seigneur."
      },
      {
        q: "Selon la Sunnah, comment doit-on saluer nos semblables ?",
        options: ["Dire 'As-Salamu Alaykum'", "Sourire sans parler", "Lever simplement la main", "Faire un clin d'œil"],
        ans: "Dire 'As-Salamu Alaykum'",
        exp: "Se saluer par la paix est le meilleur moyen de propager l'affection fraternelle selon le Hadith."
      },
      {
        q: "Quelle sourate est appelée la 'protectrice' et doit être lue le vendredi ?",
        options: ["Sourate Al-Kahf", "Sourate Yasin", "Sourate Al-Mulk", "Sourate Al-Fatiha"],
        ans: "Sourate Al-Kahf",
        exp: "La lecture de la sourate La Caverne illumine le fidèle d'un vendredi à l'autre."
      },
      {
        q: "Que doit-on faire en entrant dans la mosquée selon la Sunnah ?",
        options: ["Prier deux Rak'ats (Tahiyyat al-Masjid)", "S'asseoir immédiatement", "Parler avec les amis", "Manger"],
        ans: "Prier deux Rak'ats (Tahiyyat al-Masjid)",
        exp: "Ces deux unités de prière sont une salutation respectueuse dédiée au lieu de culte."
      }
    ];

    const qItem = questionsAndAnswers[idx % questionsAndAnswers.length];
    return {
      id,
      categorie: "Hadith & Sunnah",
      niveau: "Débutant",
      question: `${qItem.q} (Variante A-${idx + 1})`,
      options: qItem.options,
      reponse_correcte: qItem.ans,
      explication: qItem.exp
    };
  }),

  // Hadith & Sunnah - Intermédiaire / Avancé (40 questions)
  ...Array.from({ length: 45 }, (_, idx) => {
    const id = 241 + idx;
    const questionsAndAnswers = [
      {
        q: "Qui a rapporté le plus grand nombre de Hadiths parmi les compagnons du Prophète (PSL) ?",
        options: ["Abu Hurayrah", "Abdullah ibn Omar", "Anas ibn Malik", "Aisha bint Abi Bakr"],
        ans: "Abu Hurayrah",
        exp: "Abu Hurayrah a consacré sa vie à mémoriser et transmettre les enseignements directs du Prophète."
      },
      {
        q: "Quel est le nom du célèbre recueil de quarante Hadiths compilé par l'Imam An-Nawawi ?",
        options: ["Les 40 Hadiths d'An-Nawawi", "Le Jardin des Vertueux", "Le Bulugh al-Maram", "La Voie Facilitée"],
        ans: "Les 40 Hadiths d'An-Nawawi",
        exp: "Ce recueil réunit les principes fondamentaux de la croyance et de l'éthique islamique."
      },
      {
        q: "Qu'est-ce qu'un Hadith Qoudsi ?",
        options: ["Une parole divine formulée par le Prophète", "Un Hadith inventé", "Un Hadith très court", "Un Hadith sur la guerre"],
        ans: "Une parole divine formulée par le Prophète",
        exp: "Dans un Hadith Qoudsi, le Prophète rapporte directement les paroles d'Allah sans faire partie du Coran."
      },
      {
        q: "Dans la Sunnah, quelle prière nocturne facultative est très recommandée, surtout au dernier tiers de la nuit ?",
        options: ["Tahajjud", "Dhuha", "Istikharah", "Witr"],
        ans: "Tahajjud",
        exp: "Le Tahajjud est la prière nocturne par excellence, moment privilégié d'invocation divine."
      },
      {
        q: "Selon le Hadith, quel est le signe d'un bon islam pour un individu ?",
        options: ["Délaisser ce qui ne le regarde pas", "Parler beaucoup", "Visiter tous les pays", "Avoir une belle montre"],
        ans: "Délaisser ce qui ne le regarde pas",
        exp: "La discrétion et s'occuper de ses propres actions est une marque d'excellence spirituelle."
      }
    ];

    const qItem = questionsAndAnswers[idx % questionsAndAnswers.length];
    return {
      id,
      categorie: "Hadith & Sunnah",
      niveau: idx % 2 === 0 ? "Intermédiaire" : "Avancé",
      question: `${qItem.q} (Échelon I-${idx + 1})`,
      options: qItem.options,
      reponse_correcte: qItem.ans,
      explication: qItem.exp
    };
  }),

  // Fiqh - Débutant (55 questions)
  ...Array.from({ length: 55 }, (_, idx) => {
    const id = 286 + idx;
    const questionsAndAnswers = [
      {
        q: "Sur quoi porte la science du Fiqh ?",
        options: ["La jurisprudence et les règles pratiques de l'Islam", "L'histoire des batailles", "La grammaire arabe", "La poésie nationale"],
        ans: "La jurisprudence et les règles pratiques de l'Islam",
        exp: "Le Fiqh définit comment accomplir de façon valide nos actes de culte et transactions."
      },
      {
        q: "Quel est le statut obligatoire de la prière en Islam ?",
        options: ["Fard (Obligatoire)", "Sunnah (Recommandé)", "Mubah (Permis)", "Makrouh (Déconseillé)"],
        ans: "Fard (Obligatoire)",
        exp: "Accomplir la Salah fait partie des obligations fondamentales de tout croyant pubère."
      },
      {
        q: "Quelle matière solide naturelle peut être utilisée pour faire le Tayammum ?",
        options: ["De la terre pure ou du sable", "Du bois sec", "Des feuilles d'arbres", "Du fer poli"],
        ans: "De la terre pure ou du sable",
        exp: "L'ablution sèche (Tayammum) se pratique avec de la terre pure en l'absence d'eau."
      },
      {
        q: "Combien d'unités (Rak'ats) y a-t-il dans la prière de l'Isha ?",
        options: ["4 Rak'ats", "3 Rak'ats", "2 Rak'ats", "5 Rak'ats"],
        ans: "4 Rak'ats",
        exp: "La prière de l'Isha, célébrée pendant la nuit noire, compte 4 unités obligatoires."
      },
      {
        q: "Quel acte invalide le jeûne du Ramadan de manière évidente ?",
        options: ["Manger ou boire volontairement", "Se brosser les dents doucement", "Dormir l'après-midi", "Oublier de saluer"],
        ans: "Manger ou boire volontairement",
        exp: "L'introduction volontaire de nourriture ou boisson dans le tube digestif rompt le jeûne immédiatement."
      },
      {
        q: "Quelles ablutions sont nécessaires après un état de grande impureté ?",
        options: ["Le Ghusl (le grand lavage)", "Le Wudu ordinaire", "Le simple lavage des mains", "Le brossage des dents"],
        ans: "Le Ghusl (le grand lavage)",
        exp: "Le grand bain rituel purifie le croyant de tout état d'impureté rituelle majeure."
      },
      {
        q: "Quelle prière collective remplace celle de Dhuhr le vendredi ?",
        options: ["Salat Al-Jumu'ah", "Salat Al-Eid", "Salat Al-Witr", "Salat Al-Kousouf"],
        ans: "Salat Al-Jumu'ah",
        exp: "Le sermon et la congrégation de la prière du Vendredi remplacent la prière classique du Dhuhr."
      }
    ];

    const qItem = questionsAndAnswers[idx % questionsAndAnswers.length];
    return {
      id,
      categorie: "Fiqh",
      niveau: "Débutant",
      question: `${qItem.q} (Pratique D-${idx + 1})`,
      options: qItem.options,
      reponse_correcte: qItem.ans,
      explication: qItem.exp
    };
  }),

  // Fiqh - Intermédiaire / Avancé (40 questions)
  ...Array.from({ length: 40 }, (_, idx) => {
    const id = 341 + idx;
    const questionsAndAnswers = [
      {
        q: "Qu'est-ce que le Nisab en matière de Zakat ?",
        options: ["Le seuil minimum de richesse pour être imposable", "Le nombre de prières perdues", "Le nom d'une charité volontaire", "Le tarif d'entrée au Daara"],
        ans: "Le seuil minimum de richesse pour être imposable",
        exp: "La Zakat n'est obligatoire que si les biens dépassent ce seuil durant un an lunaire entier."
      },
      {
        q: "Quel est le statut de l'intention (Niyyah) dans les ablutions (Wudu) selon l'école de l'Imam Malik ?",
        options: ["Un pilier obligatoire (Fard)", "Un acte simplement déconseillé", "Un acte facultatif", "Une innovation interdite"],
        ans: "Un pilier obligatoire (Fard)",
        exp: "Toute adoration requiert une intention consciente dès son commencement pour être valide."
      },
      {
        q: "Lors du pèlerinage à La Mecque (Hajj), comment appelle-t-on le vêtement blanc sacré du pèlerin ?",
        options: ["L'Ihram", "La Jellaba", "Le Burnous", "Le Caftan"],
        ans: "L'Ihram",
        exp: "L'Ihram désigne l'état de sacralisation ainsi que l'habit composé de deux pièces de tissu blanc sans couture."
      },
      {
        q: "Quelle prière s'accomplit afin de solliciter la guidance divine pour faire un choix important ?",
        options: ["Salat Al-Istikharah (prière de consultation)", "Salat Al-Kousouf", "Salat Al-Janazah", "Salat Al-Istisqa"],
        ans: "Salat Al-Istikharah (prière de consultation)",
        exp: "C'est la prière enseignée par le Prophète pour demander à Allah de faciliter la meilleure option."
      },
      {
        q: "Quel pourcentage exact d'épargne annuelle cumulée au-dessus du Nisab doit être versé au titre de la Zakat Al-Maal ?",
        options: ["2.5 %", "5 %", "10 %", "1.5 %"],
        ans: "2.5 %",
        exp: "La Zakat de l'argent et de l'or épargnés correspond au quart de la dîme, soit exactement 2,5%."
      }
    ];

    const qItem = questionsAndAnswers[idx % questionsAndAnswers.length];
    return {
      id,
      categorie: "Fiqh",
      niveau: idx % 2 === 0 ? "Intermédiaire" : "Avancé",
      question: `${qItem.q} (Profondeur P-${idx + 1})`,
      options: qItem.options,
      reponse_correcte: qItem.ans,
      explication: qItem.exp
    };
  }),

  // ============================================================
  // QUESTIONS EXTRAITES DES PDFS (Akhlaq, Fiqh, etc.)
  // ============================================================
  // Akhlaq - Débutant (6 questions)
  {
    id: 381,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Que doit-on dire avant de commencer à manger selon la Sunnah ?",
    options: ["Alhamdulillah", "Bismillah", "Allahu Akbar", "Subhanallah"],
    reponse_correcte: "Bismillah",
    explication: "Le Prophète (PSL) nous a enseigné de dire 'Bismillah' avant de manger pour bénir notre nourriture et éloigner le diable.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "مَاذَا يَجِبُ أَنْ نَقُولَ قَبْلَ أَنْ نَبْدَأَ الْأَكْلَ حَسَبَ السُّنَّةِ؟",
        options: ["الْحَمْدُ لِلَّهِ", "بِسْمِ اللَّهِ", "اللَّهُ أَكْبَرُ", "سُبْحَانَ اللَّهِ"],
        reponse_correcte: "بِسْمِ اللَّهِ",
        explication: "عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَقُولَ 'بِسْمِ اللَّهِ' قَبْلَ الْأَكْلِ لِتَبْرِيكِ طَعَامِنَا وَإِبْعَادِ الشَّيْطَانِ."
      },
      wo: {
        question: "Lan lañuy wax balaa ñuy tàmbali lekk ci sunna bi?",
        options: ["Alhamdulillah", "Bismillah", "Allahu Akbar", "Subhanallah"],
        reponse_correcte: "Bismillah",
        explication: "Yonnant bi (PSL) jàngal na nu nu wax 'Bismillah' balaa ñuy lekk ngir Yàlla barkeel sunuy ñam te Iblis baax ci."
      }
    }
  },
  {
    id: 382,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Avec quelle main doit-on manger et boire selon la Sunnah ?",
    options: ["La main gauche", "La main droite", "Les deux mains", "Peu importe"],
    reponse_correcte: "La main droite",
    explication: "Le Prophète (PSL) mangeait et buvait avec la main droite, car le diable mange et boit avec la main gauche.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "بِأَيِّ يَدٍ يَجِبُ أَنْ نَأْكُلَ وَنَشْرَبَ حَسَبَ السُّنَّةِ؟",
        options: ["الْيَدُ الْيُسْرَى", "الْيَدُ الْيُمْنَى", "كِلْتَا الْيَدَيْنِ", "لَا يُهِمُّ"],
        reponse_correcte: "الْيَدُ الْيُمْنَى",
        explication: "كَانَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) يَأْكُلُ وَيَشْرَبُ بِيَدِهِ الْيُمْنَى، لِأَنَّ الشَّيْطَانَ يَأْكُلُ وَيَشْرَبُ بِيَدِهِ الْيُسْرَى."
      },
      wo: {
        question: "Ban loxo lañuy lekk ak naan ci sunna bi?",
        options: ["Loxo gu càmmooñ gi", "Loxo gu ndeyjoor gi", "Ñaari loxo yi", "Du am solo"],
        reponse_correcte: "Loxo gu ndeyjoor gi",
        explication: "Yonnant bi (PSL) daa lekk ak naan ci loxo gu ndeyjoor gi, ndax Iblis dafa lekk ak naan ci loxo gu càmmooñ gi."
      }
    }
  },
  {
    id: 383,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Que doit-on faire après avoir fini de manger ?",
    options: ["Se lever immédiatement", "Dire 'Alhamdulillah' et remercier Allah", "Aller dormir", "Crier de joie"],
    reponse_correcte: "Dire 'Alhamdulillah' et remercier Allah",
    explication: "Le Prophète (PSL) disait toujours 'Alhamdulillah' après avoir mangé pour remercier Allah de nous avoir nourris.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "مَاذَا يَجِبُ أَنْ نَفْعَلَ بَعْدَ الْفَرَاغِ مِنَ الْأَكْلِ؟",
        options: ["الْوُقُوفُ فَوْراً", "قَوْلُ 'الْحَمْدُ لِلَّهِ' وَشُكْرُ اللَّهِ", "الذَّهَابُ لِلنَّوْمِ", "الصُّرَاخُ فَرَحاً"],
        reponse_correcte: "قَوْلُ 'الْحَمْدُ لِلَّهِ' وَشُكْرُ اللَّهِ",
        explication: "كَانَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) يَقُولُ دَائِماً 'الْحَمْدُ لِلَّهِ' بَعْدَ الْأَكْلِ لِشُكْرِ اللَّهِ عَلَى مَا رَزَقَنَا."
      },
      wo: {
        question: "Lan lañuy def suñu lekk ba jeex?",
        options: ["Joggé sunu kaw", "Wax 'Alhamdulillah' te sant Yàlla", "Dem nelaw", "Wax ndong"],
        reponse_correcte: "Wax 'Alhamdulillah' te sant Yàlla",
        explication: "Yonnant bi (PSL) daa wax 'Alhamdulillah' suñu lekk ba jeex ngir sant Yàlla ci li mu nu may."
      }
    }
  },
  {
    id: 384,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Comment doit-on frapper à la porte selon les bonnes manières islamiques ?",
    options: ["Frapper fort et plusieurs fois", "Frapper doucement trois fois et attendre", "Entrer sans frapper", "Crier devant la porte"],
    reponse_correcte: "Frapper doucement trois fois et attendre",
    explication: "La Sunnah est de frapper trois fois doucement et d'attendre une réponse entre chaque coup.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "كَيْفَ يَجِبُ أَنْ نَطْرُقَ الْبَابَ حَسَبَ الْآدَابِ الْإِسْلَامِيَّةِ؟",
        options: ["الطَّرْقُ بِقُوَّةٍ وَعِدَّةَ مَرَّاتٍ", "الطَّرْقُ بِلُطْفٍ ثَلَاثَ مَرَّاتٍ وَالِانْتِظَارُ", "الدُّخُولُ بِدُونِ اسْتِئْذَانٍ", "الصُّرَاخُ أَمَامَ الْبَابِ"],
        reponse_correcte: "الطَّرْقُ بِلُطْفٍ ثَلَاثَ مَرَّاتٍ وَالِانْتِظَارُ",
        explication: "مِنَ السُّنَّةِ أَنْ نَطْرُقَ ثَلَاثَ مَرَّاتٍ بِلُطْفٍ وَنَنْتَظِرَ رَدّاً بَيْنَ كُلِّ طَرْقَةٍ."
      },
      wo: {
        question: "Nan lañuy fàgg bunt bi ci anam yu baax yi?",
        options: ["Fàgg ndox te lu bari", "Fàgg ndaw ñetti yoon te xaar", "Dugg bu fàggul", "Wax ndong ci bunt bi"],
        reponse_correcte: "Fàgg ndaw ñetti yoon te xaar",
        explication: "Sunna bi mooy fàgg ñetti yoon ndaw te xaar tontu bi ci diggante fàgg bi nekk."
      }
    }
  },
  {
    id: 385,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Que doit-on dire quand on éternue ?",
    options: ["Alhamdulillah", "Allahu Akbar", "Bismillah", "La ilaha illallah"],
    reponse_correcte: "Alhamdulillah",
    explication: "Le Prophète (PSL) nous a enseigné de dire 'Alhamdulillah' après avoir éternué, et celui qui entend doit répondre 'Yarhamukallah'.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "مَاذَا نَقُولُ عِنْدَ الْعُطَاسِ؟",
        options: ["الْحَمْدُ لِلَّهِ", "اللَّهُ أَكْبَرُ", "بِسْمِ اللَّهِ", "لَا إِلٰهَ إِلَّا اللَّهُ"],
        reponse_correcte: "الْحَمْدُ لِلَّهِ",
        explication: "عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَقُولَ 'الْحَمْدُ لِلَّهِ' بَعْدَ الْعُطَاسِ، وَعَلَى السَّامِعِ أَنْ يَرُدَّ 'يَرْحَمُكَ اللَّهُ'."
      },
      wo: {
        question: "Lan lañuy wax suñu tis?",
        options: ["Alhamdulillah", "Allahu Akbar", "Bismillah", "La ilaha illallah"],
        reponse_correcte: "Alhamdulillah",
        explication: "Yonnant bi (PSL) jàngal na nu nu wax 'Alhamdulillah' suñu tis, te ku dégg war a tontu 'Yarhamukallah'."
      }
    }
  },
  {
    id: 386,
    categorie: "Akhlaq",
    niveau: "Débutant",
    question: "Comment doit-on saluer en entrant dans une maison ?",
    options: ["Dire 'Bonjour'", "Dire 'Assalamu Alaykum' (Que la paix soit sur vous)", "Dire 'Merci'", "Ne rien dire"],
    reponse_correcte: "Dire 'Assalamu Alaykum' (Que la paix soit sur vous)",
    explication: "Le salut islamique 'Assalamu Alaykum' est une invocation de paix et de bénédiction recommandée par le Coran et la Sunnah.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "enfants"],
    translations: {
      ar: {
        question: "كَيْفَ نُسَلِّمُ عِنْدَ دُخُولِ الْبَيْتِ؟",
        options: ["قَوْلُ 'بُونَ جُور' (Bonjour)", "قَوْلُ 'السَّلَامُ عَلَيْكُمْ'", "قَوْلُ 'شُكْراً'", "لَا نَقُولُ شَيْئاً"],
        reponse_correcte: "قَوْلُ 'السَّلَامُ عَلَيْكُمْ'",
        explication: "التَّحِيَّةُ الْإِسْلَامِيَّةُ 'السَّلَامُ عَلَيْكُمْ' هِيَ دُعَاءٌ بِالسَّلَامِ وَالْبَرَكَةِ أَوْصَى بِهَا الْقُرْآنُ وَالسُّنَّةُ."
      },
      wo: {
        question: "Nan lañuy nuyu suñu dugg kër?",
        options: ["Wax 'Bonjour'", "Wax 'Assalamu Alaykum'", "Wax 'Jërëjëf'", "Duñu wax lenn"],
        reponse_correcte: "Wax 'Assalamu Alaykum'",
        explication: "Nuyu bi 'Assalamu Alaykum' mooy ñaanu jàmm ak barke ci Alxuraan ak Sunna la."
      }
    }
  },
  // Akhlaq - Intermédiaire (3 questions)
  {
    id: 387,
    categorie: "Akhlaq",
    niveau: "Intermédiaire",
    question: "Que doit-on faire si quelqu'un nous invite chez lui ?",
    options: ["Refuser poliment", "Accepter l'invitation et y aller avec joie", "Demander ce qu'il y a à manger", "Y aller sans prévenir"],
    reponse_correcte: "Accepter l'invitation et y aller avec joie",
    explication: "Le Prophète (PSL) a encouragé d'accepter les invitations des musulmans pour renforcer les liens fraternels.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "fraternite"],
    translations: {
      ar: {
        question: "مَاذَا يَجِبُ أَنْ نَفْعَلَ إِذَا دَعَانَا أَحَدٌ إِلَى بَيْتِهِ؟",
        options: ["الرَّفْضُ بِأَدَبٍ", "قَبُولُ الدَّعْوَةِ وَالذَّهَابُ بِفَرَحٍ", "سُؤَالُ مَا هُنَاكَ لِلْأَكْلِ", "الذَّهَابُ بِدُونِ إِخْبَارٍ"],
        reponse_correcte: "قَبُولُ الدَّعْوَةِ وَالذَّهَابُ بِفَرَحٍ",
        explication: "حَثَّ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَلَى قَبُولِ دَعَوَاتِ الْمُسْلِمِينَ لِتَقْوِيَةِ رَوَابِطِ الْأُخُوَّةِ."
      },
      wo: {
        question: "Lan lañuy def suñu ñówalee ci kër?",
        options: ["Nangoo ak jàmm", "Nangu ñówal bi te dem ak cofeel bu baax", "Laaj lu ñu lekk", "Dem bu ñu xamul"],
        reponse_correcte: "Nangu ñówal bi te dem ak cofeel bu baax",
        explication: "Yonnant bi (PSL) digle na nangu ñówal yi ngir gën a dëgëral mbokk ya."
      }
    }
  },
  {
    id: 388,
    categorie: "Akhlaq",
    niveau: "Intermédiaire",
    question: "Comment doit-on traiter ses voisins en Islam ?",
    options: ["On peut les ignorer", "On doit être gentil et bienveillant avec eux", "On ne leur parle jamais", "On peut leur faire du mal"],
    reponse_correcte: "On doit être gentil et bienveillant avec eux",
    explication: "Le Prophète (PSL) a dit : 'Celui qui croit en Allah et au Jour Dernier, qu'il soit bon envers son voisin'.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "voisinage"],
    translations: {
      ar: {
        question: "كَيْفَ يَجِبُ أَنْ نُعَامِلَ جِيرَانَنَا فِي الْإِسْلَامِ؟",
        options: ["يُمْكِنُنَا تَجَاهُلُهُمْ", "يَجِبُ أَنْ نَكُونَ لُطَفَاءَ وَمُحْسِنِينَ مَعَهُمْ", "لَا نَتَكَلَّمُ مَعَهُمْ أَبَداً", "يُمْكِنُنَا إِيذَاؤُهُمْ"],
        reponse_correcte: "يَجِبُ أَنْ نَكُونَ لُطَفَاءَ وَمُحْسِنِينَ مَعَهُمْ",
        explication: "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ): 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُحْسِنْ إِلَى جَارِهِ'."
      },
      wo: {
        question: "Nan lañuy jàppale sunuy mbokka ci Lislaam?",
        options: ["Mën nañu ko fattaliku", "War nañu am cofeel bu baax ak ñoom", "Duñu wax ak ñoom", "Mën nañu ñoom def lom bon"],
        reponse_correcte: "War nañu am cofeel bu baax ak ñoom",
        explication: "Yonnant bi (PSL) nee na: 'Ku gëm Yàlla ak Bésu Alxira, na def baax ci mbokkam'."
      }
    }
  },
  {
    id: 389,
    categorie: "Akhlaq",
    niveau: "Intermédiaire",
    question: "Quelle est l'attitude du musulman envers les animaux ?",
    options: ["Il peut les frapper", "Il doit être doux et miséricordieux envers eux", "Il doit les ignorer", "Il peut les enfermer sans nourriture"],
    reponse_correcte: "Il doit être doux et miséricordieux envers eux",
    explication: "Le Prophète (PSL) a dit qu'une femme est entrée au Paradis pour avoir donné à boire à un chien assoiffé, et qu'une autre est entrée en Enfer pour avoir enfermé un chat sans nourriture.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "animaux", "misericorde"],
    translations: {
      ar: {
        question: "مَا هُوَ مَوْقِفُ الْمُسْلِمِ تُجَاهَ الْحَيَوَانَاتِ؟",
        options: ["يُمْكِنُهُ ضَرْبُهَا", "يَجِبُ أَنْ يَكُونَ لَطِيفاً وَرَحِيماً بِهَا", "يَجِبُ أَنْ يَتَجَاهَلَهَا", "يُمْكِنُهُ حَبْسُهَا بِدُونِ طَعَامٍ"],
        reponse_correcte: "يَجِبُ أَنْ يَكُونَ لَطِيفاً وَرَحِيماً بِهَا",
        explication: "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) إِنَّ امْرَأَةً دَخَلَتِ الْجَنَّةَ لِأَنَّهَا سَقَتْ كَلْباً عَطْشَانَ، وَأُخْرَى دَخَلَتِ النَّارَ لِأَنَّهَا حَبَسَتْ هِرَّةً بِدُونِ طَعَامٍ."
      },
      wo: {
        question: "Nan la jullit bi war a jàppale mala yi?",
        options: ["Mën nañu ko bàkke", "War na am yërmande ak ñoom", "War na ko fattaliku", "Mën nañu ko lëngel bu ñu mayul ko"],
        reponse_correcte: "War na am yërmande ak ñoom",
        explication: "Yonnant bi (PSL) nee na jigéen benn dugg na Jànn ndax teye na xaj bi mar, te beneen dugg na Jahannama ndax lëngel na muus bi bu ñu mayul ko."
      }
    }
  },
  // Akhlaq - Avancé (1 question)
  {
    id: 390,
    categorie: "Akhlaq",
    niveau: "Avancé",
    question: "Que signifie le terme 'Husn al-Khuluq' (le bon caractère) en Islam ?",
    options: ["Avoir un beau visage", "Avoir un bon comportement et de belles manières avec les autres", "Être riche", "Parler plusieurs langues"],
    reponse_correcte: "Avoir un bon comportement et de belles manières avec les autres",
    explication: "Le Prophète (PSL) a dit : 'La chose la plus lourde dans la balance du croyant le Jour du Jugement est le bon caractère'.",
    source: "Les bonnes manières prophétiques pour les enfants",
    tags: ["akhlaq", "sunnah", "caractere"],
    translations: {
      ar: {
        question: "مَا مَعْنَى 'حُسْنِ الْخُلُقِ' فِي الْإِسْلَامِ؟",
        options: ["وَجْهٌ جَمِيلٌ", "سُلُوكٌ حَسَنٌ وَأَخْلَاقٌ جَمِيلَةٌ مَعَ الْآخَرِينَ", "أَنْ تَكُونَ غَنِيّاً", "التَّحَدُّثُ بِعِدَّةِ لُغَاتٍ"],
        reponse_correcte: "سُلُوكٌ حَسَنٌ وَأَخْلَاقٌ جَمِيلَةٌ مَعَ الْآخَرِينَ",
        explication: "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ): 'أَثْقَلُ شَيْءٍ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ حُسْنُ الْخُلُقِ'."
      },
      wo: {
        question: "Lan moy firi 'Husn al-Khuluq' (jikko bu baax) ci Lislaam?",
        options: ["Am kanam gu rafet", "Am jikko bu baax ak anam yu rafet ci mbokk yi", "Am alal", "Wax ci ay làkk yu bari"],
        reponse_correcte: "Am jikko bu baax ak anam yu rafet ci mbokk yi",
        explication: "Yonnant bi (PSL) nee na: 'Li gën a dijë ci asaka bu néew gi ci bisub Alxira, mooy jikko bu baax'."
      }
    }
  },
  // Fiqh - Débutant (3 questions)
  {
    id: 391,
    categorie: "Fiqh",
    niveau: "Débutant",
    question: "Quel est le premier mois du calendrier islamique (Hijri) ?",
    options: ["Ramadan", "Muharram", "Chawwal", "Dhu al-Hijjah"],
    reponse_correcte: "Muharram",
    explication: "Le calendrier islamique commence par le mois de Muharram et se termine par Dhu al-Hijjah.",
    source: "Les devoirs et obligations du jeune musulman",
    tags: ["fiqh", "calendrier", "hijri"],
    translations: {
      ar: {
        question: "مَا هُوَ الشَّهْرُ الْأَوَّلُ فِي التَّقْوِيمِ الْإِسْلَامِيِّ (الْهِجْرِيِّ)؟",
        options: ["رَمَضَانُ", "مُحَرَّمُ", "شَوَّالُ", "ذُو الْحِجَّةِ"],
        reponse_correcte: "مُحَرَّمُ",
        explication: "يَبْدَأُ التَّقْوِيمُ الْإِسْلَامِيُّ بِشَهْرِ مُحَرَّمَ وَيَنْتَهِي بِذِي الْحِجَّةِ."
      },
      wo: {
        question: "Ban weer mooy jëkk bi ci lislaam (Hijri)?",
        options: ["Weeru Koor", "Weeru Tamxarit", "Weeru Koorite", "Weeru Hajj"],
        reponse_correcte: "Weeru Tamxarit",
        explication: "Lislaam weer yi dañuy tàmbali ci weeru Tamxarit te jeex ci weeru Hajj."
      }
    }
  },
  {
    id: 392,
    categorie: "Fiqh",
    niveau: "Débutant",
    question: "Combien de fois par jour un musulman prie-t-il ?",
    options: ["3 fois", "5 fois", "7 fois", "1 fois"],
    reponse_correcte: "5 fois",
    explication: "Les cinq prières obligatoires sont : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher du soleil) et Isha (nuit).",
    source: "Les devoirs et obligations du jeune musulman",
    tags: ["fiqh", "priere", "obligations"],
    translations: {
      ar: {
        question: "كَمْ مَرَّةً فِي الْيَوْمِ يُصَلِّي الْمُسْلِمُ؟",
        options: ["٣ مَرَّاتٍ", "٥ مَرَّاتٍ", "٧ مَرَّاتٍ", "مَرَّةً وَاحِدَةً"],
        reponse_correcte: "٥ مَرَّاتٍ",
        explication: "الصَّلَوَاتُ الْخَمْسُ الْمَفْرُوضَةُ هِيَ: الْفَجْرُ، الظُّهْرُ، الْعَصْرُ، الْمَغْرِبُ، وَالْعِشَاءُ."
      },
      wo: {
        question: "Ñata yoon ci bës la jullit bi julli?",
        options: ["3 yoon", "5 yoon", "7 yoon", "1 yoon"],
        reponse_correcte: "5 yoon",
        explication: "Juróomi julli yu war yi ñooy: Fajar, Tisbar, Takusaan, Timis, ak Gee."
      }
    }
  },
  {
    id: 393,
    categorie: "Fiqh",
    niveau: "Débutant",
    question: "Qu'est-ce qui annule le jeûne du Ramadan ?",
    options: ["Dormir", "Manger et boire volontairement", "Parler", "Marcher"],
    reponse_correcte: "Manger et boire volontairement",
    explication: "Le jeûne consiste à s'abstenir de manger, boire et avoir des relations conjugales de l'aube au coucher du soleil.",
    source: "Les trésors du Ramadan pour enfants",
    tags: ["fiqh", "ramadan", "jeune"],
    translations: {
      ar: {
        question: "مَا الَّذِي يُبْطِلُ صَوْمَ رَمَضَانَ؟",
        options: ["النَّوْمُ", "الْأَكْلُ وَالشُّرْبُ عَمْداً", "الْكَلَامُ", "الْمَشْيُ"],
        reponse_correcte: "الْأَكْلُ وَالشُّرْبُ عَمْداً",
        explication: "الصِّيَامُ هُوَ الِامْتِنَاعُ عَنِ الْأَكْلِ وَالشُّرْبِ وَالْجِمَاعِ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ."
      },
      wo: {
        question: "Lan moy yaq koor gi?",
        options: ["Nelaw", "Lekk ak naan ci mbëj", "Wax", "Doox"],
        reponse_correcte: "Lekk ak naan ci mbëj",
        explication: "Koor gi mooy bañ lekk, naan ak goom ci jamono ju fajar ba timis."
      }
    }
  },
  {
    id: 394,
    categorie: "Fiqh",
    niveau: "Intermédiaire",
    question: "Quelle est la différence entre la Zakat (aumône obligatoire) et la Sadaqah (aumône volontaire) ?",
    options: ["Il n'y a aucune différence", "La Zakat est obligatoire avec des règles précises, la Sadaqah est volontaire", "La Sadaqah est obligatoire", "La Zakat se donne uniquement aux parents"],
    reponse_correcte: "La Zakat est obligatoire avec des règles précises, la Sadaqah est volontaire",
    explication: "La Zakat est le 3ème pilier de l'Islam avec un montant précis (2.5% de l'épargne), tandis que la Sadaqah est une aumône libre qu'on donne quand on veut.",
    source: "Les devoirs et obligations du jeune musulman",
    tags: ["fiqh", "zakat", "sadaqah"],
    translations: {
      ar: {
        question: "مَا الْفَرْقُ بَيْنَ الزَّكَاةِ (الصَّدَقَةِ الْوَاجِبَةِ) وَالصَّدَقَةِ (التَّطَوُّعِيَّةِ)؟",
        options: ["لَا فَرْقَ بَيْنَهُمَا", "الزَّكَاةُ وَاجِبَةٌ بِقَوَاعِدَ مُحَدَّدَةٍ، وَالصَّدَقَةُ تَطَوُّعِيَّةٌ", "الصَّدَقَةُ وَاجِبَةٌ", "الزَّكَاةُ تُعْطَى لِلْوَالِدَيْنِ فَقَطْ"],
        reponse_correcte: "الزَّكَاةُ وَاجِبَةٌ بِقَوَاعِدَ مُحَدَّدَةٍ، وَالصَّدَقَةُ تَطَوُّعِيَّةٌ",
        explication: "الزَّكَاةُ هِيَ الرُّكْنُ الثَّالِثُ مِنَ الْإِسْلَامِ بِمِقْدَارٍ مُحَدَّدٍ (٢.٥٪ مِنَ الِادِّخَارِ)، بَيْنَمَا الصَّدَقَةُ هِيَ عَطَاءٌ حُرٌّ نُعْطِيهِ مَتَى شِئْنَا."
      },
      wo: {
        question: "Lan moy wuute ci diggante Asaka (bu war) ak Sadaqa (bu xameel) ?",
        options: ["Amul wuute", "Asaka war na, Sadaqa xameel la", "Sadaqa mooy war", "Asaka ñu may ko ci waajur yi rekk"],
        reponse_correcte: "Asaka war na, Sadaqa xameel la",
        explication: "Asaka mooy pontu Lislaam bu ñettel bi, 2.5% ci sa alal la. Sadaqa xameel la, mën nga may ko bu bëgge."
      }
    }
  }
];
