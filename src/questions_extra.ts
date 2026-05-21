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
  })
];
