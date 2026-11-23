import { Question } from '../types';

/**
 * Catalogue enrichi bilingue (FR / AR vocalisé) issu de :
 * - Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim 'Abd Fârih)
 * - Encyclopédie des Concours : 1000 Questions et Réponses sur le Noble Coran (Ahmad at-Tahtâwî)
 */
export const ENRICHED_QUESTIONS: Question[] = [
  {
    "id": 6000,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Pourquoi Allah (Exalté soit-Il) nous a-t-Il créés ?",
    "options": [
      "Pour affirmer Son Unicité (Tawhîd) et L'adorer Lui Seul",
      "Pour accumuler des richesses terrestres",
      "Pour bâtir des palais éternels sur terre",
      "Pour vivre sans aucune responsabilité"
    ],
    "reponse_correcte": "Pour affirmer Son Unicité (Tawhîd) et L'adorer Lui Seul",
    "explication": "Allah dit dans le Coran : « Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent » (Adh-Dhâriyât : 56).",
    "hint": "Réfléchis au verset 56 de sourate Adh-Dhâriyât sur la finalité de la création.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q4",
    "tags": [
      "tawhid",
      "aqidah",
      "creation"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "لِمَاذَا خَلَقَنَا اللَّهُ تَعَالَى؟",
        "options": [
          "لِتَوْحِيدِهِ وَعِبَادَتِهِ وَحْدَهُ",
          "لِجَمْعِ الثَّرَوَاتِ فِي الدُّنْيَا",
          "لِلَّعِبِ وَاللَّهْوِ الدَّائِمِ",
          "لِلْخُلُودِ فِي الْأَرْضِ"
        ],
        "reponse_correcte": "لِتَوْحِيدِهِ وَعِبَادَتِهِ وَحْدَهُ",
        "explication": "قَالَ اللَّهُ تَعَالَى: ﴿ وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ ﴾ [الذاريات: 56].",
        "hint": "تَذَكَّرْ آيَةَ سُورَةِ الذَّارِيَاتِ حَوْلَ غَايَةِ خَلْقِ الْجِنِّ وَالْإِنْسِ."
      }
    }
  },
  {
    "id": 6001,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Par quoi le croyant reconnaît-il l'existence et la grandeur d'Allah ?",
    "options": [
      "Par Ses signes et Ses créatures (nuit, jour, soleil, lune)",
      "Uniquement par les légendes anciennes",
      "Uniquement par la richesse matérielle",
      "Par l'imagination des philosophes"
    ],
    "reponse_correcte": "Par Ses signes et Ses créatures (nuit, jour, soleil, lune)",
    "explication": "La nuit, le jour, le soleil, la lune et la création entière témoignent de la sagesse et de la puissance du Créateur.",
    "hint": "Observe les astres et l'alternance du jour et de la nuit.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q5",
    "tags": [
      "signes",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَ عَرَفْتَ اللَّهَ؟",
        "options": [
          "بِآيَاتِهِ وَمَخْلُوقَاتِهِ كَاللَّيْلِ وَالنَّهَارِ وَالشَّمْسِ وَالْقَمَرِ",
          "بِالْأَسَاطِيرِ الْقَدِيمَةِ فَقَطْ",
          "بِالْخَيَالِ وَالظُّنُونِ",
          "بِتَقْلِيدِ الْآبَاءِ دُونَ تَفَكُّرٍ"
        ],
        "reponse_correcte": "بِآيَاتِهِ وَمَخْلُوقَاتِهِ كَاللَّيْلِ وَالنَّهَارِ وَالشَّمْسِ وَالْقَمَرِ",
        "explication": "الْمَخْلُوقَاتُ وَالْآيَاتُ الْكَوْنِيَّةُ كَالشَّمْسِ وَالْقَمَرِ تَدُلُّ عَلَى عَظَمَةِ الْخَالِقِ سُبْحَانَهُ.",
        "hint": "تَأَمَّلْ فِي الْكَوْنِ وَتَعَاقُبِ اللَّيْلِ وَالنَّهَارِ."
      }
    }
  },
  {
    "id": 6002,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quelle est la plus grande obligation qui incombe au musulman ?",
    "options": [
      "L'Unicité d'Allah (Tawhîd)",
      "Le commerce honnête",
      "Le voyage à travers le monde",
      "L'apprentissage des langues"
    ],
    "reponse_correcte": "L'Unicité d'Allah (Tawhîd)",
    "explication": "Le Tawhîd (adorer Allah sans rien Lui associer) est le fondement de toute la religion et la première obligation de chaque serviteur.",
    "hint": "C'est le droit exclusif d'Allah sur Ses serviteurs.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q6",
    "tags": [
      "tawhid",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا أَعْظَمُ وَاجِبٍ عَلَيْنَا؟",
        "options": [
          "تَوْحِيدُ اللَّهِ تَعَالَى",
          "جَمْعُ الْمَالِ الْحَلَالِ",
          "السَّفَرُ فِي الْأَرْضِ",
          "بِنَاءُ الْمَسَاكِنِ"
        ],
        "reponse_correcte": "تَوْحِيدُ اللَّهِ تَعَالَى",
        "explication": "تَوْحِيدُ اللَّهِ تَعَالَى وَإِفْرَادُهُ بِالْعِبَادَةِ هُوَ أَسَاسُ الدِّينِ وَأَعْظَمُ وَاجِبٍ.",
        "hint": "هُوَ حَقُّ اللَّهِ الْأَوَّلُ عَلَى عِبَادِهِ."
      }
    }
  },
  {
    "id": 6003,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel est le plus grand péché auprès d'Allah ?",
    "options": [
      "Le polythéisme (Chirk / associer à Allah)",
      "La négligence du temps",
      "La colère passagère",
      "L'oubli involontaire"
    ],
    "reponse_correcte": "Le polythéisme (Chirk / associer à Allah)",
    "explication": "Allah dit : « Certes Allah ne pardonne pas qu'on Lui associe quoi que ce soit, et Il pardonne tout autre péché à qui Il veut » (An-Nisâ' : 48).",
    "hint": "C'est l'opposé direct du Tawhîd.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q7",
    "tags": [
      "chirk",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا أَعْظَمُ الذَّنْبِ عِنْدَ اللَّهِ تَعَالَى؟",
        "options": [
          "الشِّرْكُ بِاللَّهِ تَعَالَى",
          "الْغَضَبُ السَّرِيعُ",
          "النِّسْيَانُ غَيْرُ الْمَقْصُودِ",
          "الْبُخْلُ فِي الْمَالِ"
        ],
        "reponse_correcte": "الشِّرْكُ بِاللَّهِ تَعَالَى",
        "explication": "الشِّرْكُ هُوَ أَعْظَمُ الذُّنُوبِ لِأَنَّهُ صَرْفٌ لِلْعِبَادَةِ لِغَيْرِ اللَّهِ تَعَالَى.",
        "hint": "هُوَ نَقِيضُ التَّوْحِيدِ."
      }
    }
  },
  {
    "id": 6004,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quels sont les trois degrés de la religion en Islam ?",
    "options": [
      "L'Islam, l'Îmân (la foi) et l'Ihsân (l'excellence)",
      "La prière, le jeûne et le voyage",
      "La lecture, l'écriture et la récitation",
      "Le Fiqh, l'histoire et la poésie"
    ],
    "reponse_correcte": "L'Islam, l'Îmân (la foi) et l'Ihsân (l'excellence)",
    "explication": "Dans le célèbre hadith de Jibrîl, les trois degrés de la religion sont l'Islam (les actes apparents), l'Îmân (la croyance du cœur) et l'Ihsân (l'excellence spirituelle).",
    "hint": "Ces trois degrés sont enseignés dans le fameux hadith de l'ange Jibrîl.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q8",
    "tags": [
      "islam",
      "iman",
      "ihsan"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هِيَ مَرَاتِبُ الدِّينِ الثَّلَاثُ؟",
        "options": [
          "الْإِسْلَامُ وَالْإِيمَانُ وَالْإِحْسَانُ",
          "الصَّلَاةُ وَالصَّوْمُ وَالْحَجُّ",
          "الْقِرَاءَةُ وَالْكِتَابَةُ وَالْحِفْظُ",
          "الْفِقْهُ وَالتَّفْسِيرُ وَالسِّيرَةُ"
        ],
        "reponse_correcte": "الْإِسْلَامُ وَالْإِيمَانُ وَالْإِحْسَانُ",
        "explication": "مَرَاتِبُ الدِّينِ ثَلَاثَةٌ كَمَا فِي حَدِيثِ جِبْرِيلَ: الْإِسْلَامُ ثُمَّ الْإِيمَانُ ثُمَّ الْإِحْسَانُ.",
        "hint": "تَذَكَّرْ حَدِيثَ جِبْرِيلَ الْمَشْهُورَ."
      }
    }
  },
  {
    "id": 6005,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Quelle est la définition complète de l'Islam selon Zâd al-Muslim ?",
    "options": [
      "La soumission à Allah par le Tawhîd, l'obéissance docile et le désaveu du Chirk",
      "La simple appartenance culturelle sans pratique",
      "Le respect des coutumes locales uniquement",
      "La récitation de quelques formules sans intention"
    ],
    "reponse_correcte": "La soumission à Allah par le Tawhîd, l'obéissance docile et le désaveu du Chirk",
    "explication": "L'Islam signifie se soumettre à Allah par le monothéisme pur, Lui obéir et se désavouer du polythéisme.",
    "hint": "Elle réunit trois éléments : Tawhîd, obéissance et rejet de l'association.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q9",
    "tags": [
      "islam",
      "definition",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الْإِسْلَامِ؟",
        "options": [
          "الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ وَالِانْقِيَادُ لَهُ بِالطَّاعَةِ وَالْبَرَاءَةُ مِنَ الشِّرْكِ",
          "الِانْتِسَابُ الثَّقَافِيُّ دُونَ عَمَلٍ",
          "اتِّبَاعُ الْعَادَاتِ فَقَطْ",
          "التَّلَفُّظُ دُونَ اعْتِقَادٍ"
        ],
        "reponse_correcte": "الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ وَالِانْقِيَادُ لَهُ بِالطَّاعَةِ وَالْبَرَاءَةُ مِنَ الشِّرْكِ",
        "explication": "الْإِسْلَامُ هُوَ الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ وَالطَّاعَةِ وَالْبَرَاءَةُ مِنَ الشِّرْكِ وَأَهْلِهِ.",
        "hint": "يَجْمَعُ بَيْنَ التَّوْحِيدِ وَالطَّاعَةِ وَالْبَرَاءَةِ مِنَ الشِّرْكِ."
      }
    }
  },
  {
    "id": 6006,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel est le sens exact de la parole « Lâ ilâha illâ Allâh » ?",
    "options": [
      "Nul n'est digne d'être adoré en vérité si ce n'est Allah",
      "Il n'y a pas d'autre créateur mais on peut adorer d'autres êtres",
      "Allah est uniquement dans les mosquées",
      "Chaque peuple a sa propre divinité véritable"
    ],
    "reponse_correcte": "Nul n'est digne d'être adoré en vérité si ce n'est Allah",
    "explication": "« Lâ ilâha » nie toute divinité adorée en dehors d'Allah, et « illâ Allâh » affirme que l'adoration revient exclusivement à Allah.",
    "hint": "Il s'agit d'une négation suivie d'une affirmation exclusive concernant l'adoration.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q11",
    "tags": [
      "shahada",
      "tawhid"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا مَعْنَى (لَا إِلٰهَ إِلَّا اللَّهُ)؟",
        "options": [
          "لَا مَعْبُودَ بِحَقٍّ إِلَّا اللَّهُ",
          "لَا خَالِقَ إِلَّا اللَّهُ مَعَ جَوَازِ عِبَادَةِ غَيْرِهِ",
          "الْإِلَهُ فِي الْمَسَاجِدِ فَقَطْ",
          "كُلُّ مَعْبُودٍ عَلَى حَقٍّ"
        ],
        "reponse_correcte": "لَا مَعْبُودَ بِحَقٍّ إِلَّا اللَّهُ",
        "explication": "مَعْنَى الشَّهَادَةِ نَفْيُ اسْتِحْقَاقِ الْعِبَادَةِ عَنْ غَيْرِ اللَّهِ وَإِثْبَاتُهَا لِلَّهِ وَحْدَهُ.",
        "hint": "تَضَمَّنَتْ نَفْيًا لِلْعِبَادَةِ عَنْ غَيْرِهِ وَإِثْبَاتَهَا لَهُ وَحْدَهُ."
      }
    }
  },
  {
    "id": 6007,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel est le sens de l'attestation « Mouhammadun Rasûlullâh » ?",
    "options": [
      "Qu'Allah l'a envoyé aux hommes pour qu'ils lui obéissent et suivent sa Loi",
      "Qu'il est un simple poète arabe",
      "Qu'il a été envoyé uniquement aux habitants de La Mecque",
      "Qu'il est une divinité auprès d'Allah"
    ],
    "reponse_correcte": "Qu'Allah l'a envoyé aux hommes pour qu'ils lui obéissent et suivent sa Loi",
    "explication": "Attester que Mouhammad ﷺ est le Messager d'Allah implique de croire en ses récits, d'obéir à ses ordres et de suivre sa Sunnah.",
    "hint": "Son message est universel et appelle à suivre la législation révélée.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q12",
    "tags": [
      "shahada",
      "prophete"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا مَعْنَى شَهَادَةِ (مُحَمَّدٌ رَسُولُ اللَّهِ)؟",
        "options": [
          "أَنَّ اللَّهَ أَرْسَلَهُ إِلَى النَّاسِ لِطَاعَتِهِ وَاتِّبَاعِ شَرْعِهِ",
          "أَنَّهُ شَاعِرٌ عَرَبِيٌّ فَقَطْ",
          "أَنَّهُ أُرْسِلَ لِقُرَيْشٍ وَحْدَهَا",
          "أَنَّهُ يَعْلَمُ كُلَّ الْغَيْبِ بِنَفْسِهِ"
        ],
        "reponse_correcte": "أَنَّ اللَّهَ أَرْسَلَهُ إِلَى النَّاسِ لِطَاعَتِهِ وَاتِّبَاعِ شَرْعِهِ",
        "explication": "تَعْنِي تَصْدِيقَهُ فِيمَا أَخْبَرَ وَطَاعَتَهُ فِيمَا أَمَرَ وَاتِّبَاعَ سُنَّتِهِ ﷺ.",
        "hint": "تَسْتَلْزِمُ طَاعَتَهُ وَاتِّبَاعَ شَرْعِهِ ﷺ."
      }
    }
  },
  {
    "id": 6008,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel est le pilier central (la colonne) de la religion islamique ?",
    "options": [
      "La prière (Salât)",
      "Le voyage",
      "Le commerce",
      "La parure"
    ],
    "reponse_correcte": "La prière (Salât)",
    "explication": "Le Prophète ﷺ a dit : « La tête de l'affaire est l'Islam, sa colonne est la prière, et son sommet est l'effort dans le sentier d'Allah. »",
    "hint": "C'est l'acte d'adoration accompli cinq fois par jour.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q13",
    "tags": [
      "salat",
      "piliers"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا عَمُودُ الدِّينِ؟",
        "options": [
          "الصَّلَاةُ",
          "التِّجَارَةُ",
          "السَّفَرُ",
          "الزِّينَةُ"
        ],
        "reponse_correcte": "الصَّلَاةُ",
        "explication": "قَالَ ﷺ: «رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ».",
        "hint": "هِيَ الْعِبَادَةُ الَّتِي تُؤَدَّى خَمْسَ مَرَّاتٍ فِي الْيَوْمِ."
      }
    }
  },
  {
    "id": 6009,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Comment se définit la foi (Îmân) selon les savants de la Sunnah ?",
    "options": [
      "Conviction ferme du cœur, parole de la langue et mise en pratique par les membres",
      "Simple parole prononcée sans conviction du cœur",
      "Pensée intérieure sans aucune parole ni œuvre",
      "Coutume transmise uniquement par la famille"
    ],
    "reponse_correcte": "Conviction ferme du cœur, parole de la langue et mise en pratique par les membres",
    "explication": "La foi (Îmân) englobe trois dimensions indissociables : le cœur (croyance), la langue (attestation) et les actes (œuvres).",
    "hint": "Elle associe le cœur, la langue et les membres.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q16",
    "tags": [
      "iman",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الْإِيمَانِ؟",
        "options": [
          "الِاعْتِقَادُ بِالْقَلْبِ وَالْقَوْلُ بِاللِّسَانِ وَالْعَمَلُ بِالْجَوَارِحِ",
          "الْقَوْلُ بِاللِّسَانِ فَقَطْ",
          "الِاعْتِقَادُ دُونَ عَمَلٍ أَوْ قَوْلٍ",
          "التَّقْلِيدُ الْمُجَرَّدُ"
        ],
        "reponse_correcte": "الِاعْتِقَادُ بِالْقَلْبِ وَالْقَوْلُ بِاللِّسَانِ وَالْعَمَلُ بِالْجَوَارِحِ",
        "explication": "الْإِيمَانُ قَوْلٌ وَعَمَلٌ وَاعْتِقَادٌ يَزِيدُ بِالطَّاعَةِ وَيَنْقُصُ بِالْمَعْصِيَةِ.",
        "hint": "يَشْمَلُ الْقَلْبَ وَاللِّسَانَ وَالْجَوَارِحَ."
      }
    }
  },
  {
    "id": 6010,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Par quoi la foi (Îmân) augmente-t-elle et par quoi diminue-t-elle ?",
    "options": [
      "Elle augmente par l'obéissance et diminue par la désobéissance",
      "Elle reste toujours figée sans jamais changer",
      "Elle augmente uniquement par la richesse",
      "Elle diminue uniquement par la pauvreté"
    ],
    "reponse_correcte": "Elle augmente par l'obéissance et diminue par la désobéissance",
    "explication": "Les bonnes œuvres, l'invocation et le Coran fortifient la foi, tandis que les péchés et l'insouciance l'affaiblissent.",
    "hint": "Pense à l'effet des bonnes actions par rapport aux péchés.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q17",
    "tags": [
      "iman",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَ يَزِيدُ الْإِيمَانُ وَبِمَ يَنْقُصُ؟",
        "options": [
          "يَزِيدُ بِالطَّاعَةِ وَيَنْقُصُ بِالْمَعْصِيَةِ",
          "لَا يَزِيدُ وَلَا يَنْقُصُ أَبَدًا",
          "يَزِيدُ بِكَثْرَةِ الْمَالِ فَقَطْ",
          "يَنْقُصُ بِالسَّفَرِ وَالتَّعَبِ"
        ],
        "reponse_correcte": "يَزِيدُ بِالطَّاعَةِ وَيَنْقُصُ بِالْمَعْصِيَةِ",
        "explication": "أَهْلُ السُّنَّةِ يُقِرُّونَ بِأَنَّ الْإِيمَانَ يَزِيدُ بِالطَّاعَاتِ وَيَنْقُصُ بِالْمَعَاصِي.",
        "hint": "تَذَكَّرْ أَثَرَ الطَّاعَاتِ وَالْمَعَاصِي فِي الْقَلْبِ."
      }
    }
  },
  {
    "id": 6011,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Quelle est la définition prophétique de l'Ihsân (l'excellence spirituelle) ?",
    "options": [
      "Adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui certes te voit",
      "Donner tout son argent en une seule journée",
      "Faire de longs voyages chaque année",
      "Jeûner sans interruption toute l'année"
    ],
    "reponse_correcte": "Adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui certes te voit",
    "explication": "C'est la réponse même du Prophète ﷺ à Jibrîl concernant l'Ihsân : la conscience permanente du regard bienveillant d'Allah.",
    "hint": "Ce degré suprême repose sur la conscience d'être observé par Allah.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q19",
    "tags": [
      "ihsan",
      "hadith_jibril"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْإِحْسَانُ؟",
        "options": [
          "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
          "أَنْ تَتَصَدَّقَ بِكُلِّ مَالِكَ",
          "أَنْ تَصُومَ الدَّهْرَ كُلَّهُ",
          "أَنْ تَعْتَزِلَ النَّاسَ تَمَامًا"
        ],
        "reponse_correcte": "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
        "explication": "الْإِحْسَانُ أَعْلَى مَرَاتِبِ الدِّينِ، وَهُوَ اسْتِحْضَارُ مُرَاقَبَةِ اللَّهِ تَعَالَى فِي كُلِّ حِينٍ.",
        "hint": "يَتَعَلَّقُ بِاسْتِحْضَارِ رُؤْيَةِ اللَّهِ تَعَالَى لِلْعَبْدِ."
      }
    }
  },
  {
    "id": 6012,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "De quoi Allah a-t-Il créé les anges ?",
    "options": [
      "De lumière",
      "D'argile",
      "De feu sans fumée",
      "D'eau pure"
    ],
    "reponse_correcte": "De lumière",
    "explication": "Dans un hadith rapporté par Muslim, le Prophète ﷺ a informé que les anges ont été créés de lumière, les djinns de feu et Âdam d'argile.",
    "hint": "C'est un élément rayonnant qui s'oppose au feu et à l'argile.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q21",
    "tags": [
      "anges",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مِمَّ خَلَقَ اللَّهُ الْمَلَائِكَةَ؟",
        "options": [
          "مِنْ نُورٍ",
          "مِنْ طِينٍ",
          "مِنْ نَارٍ",
          "مِنْ مَاءٍ"
        ],
        "reponse_correcte": "مِنْ نُورٍ",
        "explication": "ثَبَتَ فِي صَحِيحِ مُسْلِمٍ أَنَّ الْمَلَائِكَةَ خُلِقَتْ مِنْ نُورٍ.",
        "hint": "خُلِقَتْ مِنْ عُنْصُرٍ مُضِيءٍ."
      }
    }
  },
  {
    "id": 6013,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "De quoi Allah a-t-Il créé les djinns ?",
    "options": [
      "De feu",
      "De lumière",
      "D'argile",
      "De pierre"
    ],
    "reponse_correcte": "De feu",
    "explication": "Allah dit dans sourate Ar-Rahmân : « Et Il a créé les djinns de la flamme d'un feu sans fumée ».",
    "hint": "Rappelle-toi la réplique d'Iblîs lorsqu'il refusa de se prosterner devant Âdam.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q23",
    "tags": [
      "djinns",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مِمَّ خَلَقَ اللَّهُ الْجِنَّ؟",
        "options": [
          "مِنْ نَارٍ",
          "مِنْ نُورٍ",
          "مِنْ طِينٍ",
          "مِنْ تِلٍّ"
        ],
        "reponse_correcte": "مِنْ نَارٍ",
        "explication": "قَالَ تَعَالَى: ﴿ وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ ﴾ [الرحمن: 15].",
        "hint": "تَذَكَّرْ قَوْلَ إِبْلِيسَ: ﴿ خَلَقْتَنِي مِن نَّارٍ ﴾."
      }
    }
  },
  {
    "id": 6014,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Sur quel prophète les Psaumes (Az-Zabûr) ont-ils été révélés ?",
    "options": [
      "Dâwûd (David, paix sur lui)",
      "Mûsâ (Moïse, paix sur lui)",
      "'Îsâ (Jésus, paix sur lui)",
      "Ibrâhîm (Abraham, paix sur lui)"
    ],
    "reponse_correcte": "Dâwûd (David, paix sur lui)",
    "explication": "La Thora fut révélée à Mûsâ, l'Évangile à 'Îsâ, le Zabûr à Dâwûd et le Coran (Al-Furqân) à Mouhammad ﷺ.",
    "hint": "Ce prophète était aussi roi et possédait une voix magnifique pour glorifier Allah.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q24",
    "tags": [
      "livres",
      "prophetes"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "عَلَى مَنْ أُنْزِلَ الزَّبُورُ؟",
        "options": [
          "عَلَى دَاوُدَ عَلَيْهِ السَّلَامُ",
          "عَلَى مُوسَى عَلَيْهِ السَّلَامُ",
          "عَلَى عِيسَى عَلَيْهِ السَّلَامُ",
          "عَلَى إِبْرَاهِيمَ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "عَلَى دَاوُدَ عَلَيْهِ السَّلَامُ",
        "explication": "أُنْزِلَتِ التَّوْرَاةُ عَلَى مُوسَى، وَالْإِنْجِيلُ عَلَى عِيسَى، وَالزَّبُورُ عَلَى دَاوُدَ، وَالْفُرْقَانُ عَلَى مُحَمَّدٍ ﷺ.",
        "hint": "هُوَ نَبِيٌّ وَمَلِكٌ كَانَتْ تَسْبَحُ مَعَهُ الْجِبَالُ وَالطَّيْرُ."
      }
    }
  },
  {
    "id": 6015,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Qui sont les cinq messagers doués de fermeté (Ûlû al-'Azm) ?",
    "options": [
      "Nûh, Ibrâhîm, Mûsâ, 'Îsâ et Mouhammad (paix sur eux)",
      "Âdam, Idrîs, Hûd, Sâlih et Lût",
      "Yûsuf, Ya'qûb, Ishâq, Ismâ'îl et Ayyûb",
      "Dâwûd, Sulaymân, Yûnus, Ilyâs et Zakariyyâ"
    ],
    "reponse_correcte": "Nûh, Ibrâhîm, Mûsâ, 'Îsâ et Mouhammad (paix sur eux)",
    "explication": "Ces cinq grands messagers sont mentionnés ensemble notamment dans sourate Al-Ahzâb (v. 7) et sourate Ach-Chûrâ (v. 13).",
    "hint": "Le premier d'entre eux est l'homme de l'Arche et le dernier est le Sceau des prophètes.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q25",
    "tags": [
      "messagers",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُمْ أُولُو الْعَزْمِ مِنَ الرُّسُلِ؟",
        "options": [
          "نُوحٌ وَإِبْرَاهِيمُ وَمُوسَى وَعِيسَى وَمُحَمَّدٌ عَلَيْهِمُ الصَّلَاةُ وَالسَّلَامُ",
          "آدَمُ وَإِدْرِيسُ وَهُودٌ وَصَالِحٌ وَلُوطٌ",
          "يُوسُفُ وَيَعْقُوبُ وَإِسْحَاقُ وَإِسْمَاعِيلُ وَأَيُّوبُ",
          "دَاوُدُ وَسُلَيْمَانُ وَيُونُسُ وَإِلْيَاسُ وَزَكَرِيَّا"
        ],
        "reponse_correcte": "نُوحٌ وَإِبْرَاهِيمُ وَمُوسَى وَعِيسَى وَمُحَمَّدٌ عَلَيْهِمُ الصَّلَاةُ وَالسَّلَامُ",
        "explication": "أُولُو الْعَزْمِ مِنَ الرُّسُلِ خَمْسَةٌ مَذْكُورُونَ فِي سُورَةِ الْأَحْزَابِ وَسُورَةِ الشُّورَى.",
        "hint": "أَوَّلُهُمْ صَاحِبُ السَّفِينَةِ وَخَاتَمُهُمْ نَبِيُّنَا مُحَمَّدٌ ﷺ."
      }
    }
  },
  {
    "id": 6016,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Qui est le premier des prophètes et de quoi Allah l'a-t-Il créé ?",
    "options": [
      "Âdam (paix sur lui), créé à partir d'argile",
      "Nûh (paix sur lui), créé de lumière",
      "Ibrâhîm (paix sur lui), créé de feu",
      "Idrîs (paix sur lui), créé de vent"
    ],
    "reponse_correcte": "Âdam (paix sur lui), créé à partir d'argile",
    "explication": "Âdam (paix sur lui) est le père de l'humanité et le premier prophète ; Allah l'a façonné d'argile de Ses propres Mains.",
    "hint": "Il est aussi appelé « le père de l'humanité » (Abû al-Bachar).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q26-Q27",
    "tags": [
      "adam",
      "prophetes"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ أَوَّلُ الْأَنْبِيَاءِ وَمِمَّ خُلِقَ؟",
        "options": [
          "آدَمُ عَلَيْهِ السَّلَامُ وَخُلِقَ مِنْ طِينٍ",
          "نُوحٌ عَلَيْهِ السَّلَامُ وَخُلِقَ مِنْ نُورٍ",
          "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ وَخُلِقَ مِنْ نَارٍ",
          "إِدْرِيسُ عَلَيْهِ السَّلَامُ وَخُلِقَ مِنْ مَاءٍ"
        ],
        "reponse_correcte": "آدَمُ عَلَيْهِ السَّلَامُ وَخُلِقَ مِنْ طِينٍ",
        "explication": "نَبِيُّ اللَّهِ آدَمُ عَلَيْهِ السَّلَامُ هُوَ أَبُو الْبَشَرِ وَأَوَّلُ الْأَنْبِيَاءِ وَقَدْ خَلَقَهُ اللَّهُ مِنْ طِينٍ.",
        "hint": "هُوَ أَبُو الْبَشَرِ جَمِيعًا."
      }
    }
  },
  {
    "id": 6017,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel prophète porte le titre de « Kalîmullâh » (l'interlocuteur privilégié d'Allah) ?",
    "options": [
      "Mûsâ (paix sur lui)",
      "Ibrâhîm (paix sur lui)",
      "Dâwûd (paix sur lui)",
      "Yûsuf (paix sur lui)"
    ],
    "reponse_correcte": "Mûsâ (paix sur lui)",
    "explication": "Allah a parlé directement à Mûsâ (paix sur lui) au Mont Sinaï, d'où son titre de Kalîmullâh, tandis qu'Ibrâhîm est Khalîlullâh.",
    "hint": "Allah lui a parlé directement près du mont Tûr.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q29-Q30",
    "tags": [
      "moussa",
      "titres"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ كَلِيمُ اللَّهِ؟",
        "options": [
          "مُوسَى عَلَيْهِ السَّلَامُ",
          "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
          "دَاوُدُ عَلَيْهِ السَّلَامُ",
          "يُوسُفُ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "مُوسَى عَلَيْهِ السَّلَامُ",
        "explication": "كَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا فَسُمِّيَ كَلِيمَ اللَّهِ، أَمَّا إِبْرَاهِيمُ فَهُوَ خَلِيلُ اللَّهِ.",
        "hint": "كَلَّمَهُ اللَّهُ عِنْدَ جَبَلِ الطُّورِ."
      }
    }
  },
  {
    "id": 6018,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Combien de prophètes sont nommément mentionnés dans le Noble Coran ?",
    "options": [
      "25 prophètes",
      "12 prophètes",
      "40 prophètes",
      "10 prophètes"
    ],
    "reponse_correcte": "25 prophètes",
    "explication": "Vingt-cinq prophètes et messagers sont cités nommément dans le Noble Coran, d'Âdam à Mouhammad ﷺ.",
    "hint": "Ce nombre est un quart de cent.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q32",
    "tags": [
      "prophetes",
      "coran"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ نَبِيًّا ذُكِرَ فِي الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "خَمْسَةٌ وَعِشْرُونَ نَبِيًّا",
          "اثْنَا عَشَرَ نَبِيًّا",
          "أَرْبَعُونَ نَبِيًّا",
          "عَشَرَةُ أَنْبِيَاءٍ"
        ],
        "reponse_correcte": "خَمْسَةٌ وَعِشْرُونَ نَبِيًّا",
        "explication": "ذُكِرَ فِي الْقُرْآنِ الْكَرِيمِ خَمْسَةٌ وَعِشْرُونَ نَبِيًّا وَرَسُولًا.",
        "hint": "هُوَ رُبْعُ الْمِائَةِ."
      }
    }
  },
  {
    "id": 6019,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Comment les savants définissent-ils l'adoration ('Ibâda) ?",
    "options": [
      "Tout ce qu'Allah aime et agrée comme paroles et actes apparents ou intérieurs",
      "Uniquement les prières accomplies à la mosquée",
      "Uniquement le fait de jeûner au mois de Ramadan",
      "Le fait de s'isoler loin de sa famille"
    ],
    "reponse_correcte": "Tout ce qu'Allah aime et agrée comme paroles et actes apparents ou intérieurs",
    "explication": "Cette célèbre définition globale d'Ibn Taymiyya englobe la prière, l'aumône, la sincérité du cœur, la bonté envers les parents, etc.",
    "hint": "L'adoration englobe aussi bien les actes du cœur que les paroles et les gestes.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q33",
    "tags": [
      "ibada",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الْعِبَادَةِ؟",
        "options": [
          "كُلُّ مَا يُحِبُّهُ اللَّهُ وَيَرْضَاهُ مِنَ الْأَقْوَالِ وَالْأَعْمَالِ الظَّاهِرَةِ وَالْبَاطِنَةِ",
          "الصَّلَاةُ فِي الْمَسْجِدِ فَقَطْ",
          "صِيَامُ رَمَضَانَ فَقَطْ",
          "اعْتِزَالُ النَّاسِ فِي الْجِبَالِ"
        ],
        "reponse_correcte": "كُلُّ مَا يُحِبُّهُ اللَّهُ وَيَرْضَاهُ مِنَ الْأَقْوَالِ وَالْأَعْمَالِ الظَّاهِرَةِ وَالْبَاطِنَةِ",
        "explication": "الْعِبَادَةُ اسْمٌ جَامِعٌ لِكُلِّ مَا يُحِبُّهُ اللَّهُ مِنَ الْأَقْوَالِ وَالْأَفْعَالِ الظَّاهِرَةِ وَالْبَاطِنَةِ.",
        "hint": "تَشْمَلُ أَعْمَالَ الْقَلْبِ وَالْجَوَارِحِ مَعًا."
      }
    }
  },
  {
    "id": 6020,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que signifie la purification (Tahâra) en jurisprudence islamique ?",
    "options": [
      "La levée de l'impureté rituelle (hadath) et l'élimination de l'impureté matérielle (najâsa)",
      "Uniquement le parfumage avant la prière du vendredi",
      "Le nettoyage de la maison avant les invités",
      "Le lavage des mains avant le repas uniquement"
    ],
    "reponse_correcte": "La levée de l'impureté rituelle (hadath) et l'élimination de l'impureté matérielle (najâsa)",
    "explication": "La Tahâra comprend deux volets : lever le hadath (par les ablutions ou le bain rituel) et ôter la najâsa du corps, du vêtement et du lieu.",
    "hint": "Elle comporte deux aspects complémentaires : hadath et najâsa.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q34",
    "tags": [
      "tahara",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هِيَ الطَّهَارَةُ شَرْعًا؟",
        "options": [
          "رَفْعُ الْحَدَثِ وَإِزَالَةُ النَّجَاسَةِ",
          "التَّطَيُّبُ يَوْمَ الْجُمُعَةِ فَقَطْ",
          "تَنْظِيفُ الْمَنْزِلِ فَقَطْ",
          "غَسْلُ الْيَدَيْنِ قَبْلَ الطَّعَامِ فَقَطْ"
        ],
        "reponse_correcte": "رَفْعُ الْحَدَثِ وَإِزَالَةُ النَّجَاسَةِ",
        "explication": "الطَّهَارَةُ قِسْمَانِ: رَفْعُ الْحَدَثِ بِالْوُضُوءِ أَوِ الْغُسْلِ، وَإِزَالَةُ الْخَبَثِ أَيِ النَّجَاسَةِ.",
        "hint": "تَتَكَوَّنُ مِنْ رَفْعِ شَيْءٍ مَعْنَوِيٍّ وَإِزَالَةِ شَيْءٍ حِسِّيٍّ."
      }
    }
  },
  {
    "id": 6021,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien y a-t-il d'obligations (furûd) dans les ablutions (Woudhou) ?",
    "options": [
      "Six obligations",
      "Trois obligations",
      "Dix obligations",
      "Douze obligations"
    ],
    "reponse_correcte": "Six obligations",
    "explication": "Les 6 obligations du Woudhou sont : l'intention, le visage, les mains jusqu'aux coudes, l'essuyage de la tête, les pieds jusqu'aux chevilles, et l'ordre chronologique.",
    "hint": "Pense aux quatre membres cités dans le verset d'Al-Mâ'ida, plus l'intention et l'ordre.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q36",
    "tags": [
      "woudou",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ فُرُوضِ الْوُضُوءِ؟",
        "options": [
          "سِتَّةُ فُرُوضٍ",
          "ثَلَاثَةُ فُرُوضٍ",
          "عَشَرَةُ فُرُوضٍ",
          "اثْنَا عَشَرَ فَرْضًا"
        ],
        "reponse_correcte": "سِتَّةُ فُرُوضٍ",
        "explication": "فُرُوضُ الْوُضُوءِ سِتَّةٌ: النِّيَّةُ، وَغَسْلُ الْوَجْهِ، وَالْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ، وَالتَّرْتِيبُ.",
        "hint": "أَرْبَعَةُ أَعْضَاءٍ مَعَ النِّيَّةِ وَالتَّرْتِيبِ."
      }
    }
  },
  {
    "id": 6022,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Qu'est-ce que le Tayammum (lustration pulvérulente) ?",
    "options": [
      "Essuyer le visage et les mains avec de la terre pure en remplacement du woudhou ou du ghusl",
      "Se laver entièrement à l'eau chaude",
      "Prier sans ablutions par simple paresse",
      "Boire de l'eau avant la prière"
    ],
    "reponse_correcte": "Essuyer le visage et les mains avec de la terre pure en remplacement du woudhou ou du ghusl",
    "explication": "Le Tayammum est une facilité accordée par Allah lorsqu'on manque d'eau ou qu'on ne peut l'utiliser pour raison médicale.",
    "hint": "On l'accomplit avec de la terre pure en l'absence d'eau.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q38",
    "tags": [
      "tayammum",
      "tahara"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ التَّيَمُّمُ؟",
        "options": [
          "مَسْحُ الْوَجْهِ وَالْيَدَيْنِ بِتُرَابٍ طَاهِرٍ بَدَلًا مِنَ الْوُضُوءِ أَوِ الْغُسْلِ",
          "الِاغْتِسَالُ بِالْمَاءِ السَّاخِنِ",
          "الصَّلَاةُ دُونَ طَهَارَةٍ تَكَاسُلًا",
          "غَسْلُ الْقَدَمَيْنِ بِالتُّرَابِ"
        ],
        "reponse_correcte": "مَسْحُ الْوَجْهِ وَالْيَدَيْنِ بِتُرَابٍ طَاهِرٍ بَدَلًا مِنَ الْوُضُوءِ أَوِ الْغُسْلِ",
        "explication": "التَّيَمُّمُ رُخْصَةٌ شَرْعِيَّةٌ عِنْدَ فَقْدِ الْمَاءِ أَوِ الْعَجْزِ عَنِ اسْتِعْمَالِهِ.",
        "hint": "يُؤَدَّى بِالصَّعِيدِ الطَّاهِرِ عِنْدَ فَقْدِ الْمَاءِ."
      }
    }
  },
  {
    "id": 6023,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Par quoi débute la prière (Salât) et par quoi se clôture-t-elle ?",
    "options": [
      "Elle débute par le Takbîr (Allâhu Akbar) et se clôture par le Taslîm (Salâm)",
      "Elle débute par Al-Fâtiha et se termine par l'inclinaison",
      "Elle débute par le Qunût et se termine par le Takbîr",
      "Elle débute par la prosternation et se termine par l'appel"
    ],
    "reponse_correcte": "Elle débute par le Takbîr (Allâhu Akbar) et se clôture par le Taslîm (Salâm)",
    "explication": "La Salât est définie comme un ensemble de paroles et d'actes spécifiques, ouverts par Takbîrat al-Ihrâm et clos par le Taslîm.",
    "hint": "Pense au premier mot prononcé debout et aux salutations de droite et de gauche.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q39",
    "tags": [
      "salat",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَ تُفْتَتَحُ الصَّلَاةُ وَبِمَ تُخْتَتَمُ؟",
        "options": [
          "مُفْتَتَحَةٌ بِالتَّكْبِيرِ وَمُخْتَتَمَةٌ بِالتَّسْلِيمِ",
          "مُفْتَتَحَةٌ بِالرُّكُوعِ وَمُخْتَتَمَةٌ بِالسُّجُودِ",
          "مُفْتَتَحَةٌ بِالْقُنُوتِ وَمُخْتَتَمَةٌ بِالتَّكْبِيرِ",
          "مُفْتَتَحَةٌ بِالدُّعَاءِ وَمُخْتَتَمَةٌ بِالْفَاتِحَةِ"
        ],
        "reponse_correcte": "مُفْتَتَحَةٌ بِالتَّكْبِيرِ وَمُخْتَتَمَةٌ بِالتَّسْلِيمِ",
        "explication": "قَالَ ﷺ: «مِفْتَاحُ الصَّلَاةِ الطُّهُورُ، وَتَحْرِيمُهَا التَّكْبِيرُ، وَتَحْلِيلُهَا التَّسْلِيمُ».",
        "hint": "تَذَكَّرْ تَكْبِيرَةَ الْإِحْرَامِ وَالتَّسْلِيمَ فِي النِّهَايَةِ."
      }
    }
  },
  {
    "id": 6024,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien de rak'ât compte l'ensemble des cinq prières obligatoires quotidiennes ?",
    "options": [
      "17 rak'ât (2+4+4+3+4)",
      "15 rak'ât",
      "20 rak'ât",
      "12 rak'ât"
    ],
    "reponse_correcte": "17 rak'ât (2+4+4+3+4)",
    "explication": "Fajr (2) + Zuhr (4) + 'Asr (4) + Maghrib (3) + 'Ichâ' (4) = 17 unités de prière obligatoires chaque jour.",
    "hint": "Additionne 2 + 4 + 4 + 3 + 4.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q40",
    "tags": [
      "salat",
      "rakat"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ مَجْمُوعُ رَكَعَاتِ الصَّلَوَاتِ الْخَمْسِ الْمَفْرُوضَةِ فِي الْيَوْمِ وَاللَّيْلَةِ؟",
        "options": [
          "سَبْعَ عَشْرَةَ رَكْعَةً (١٧)",
          "خَمْسَ عَشْرَةَ رَكْعَةً (١٥)",
          "عِشْرُونَ رَكْعَةً (٢٠)",
          "اثْنَتَا عَشْرَةَ رَكْعَةً (١٢)"
        ],
        "reponse_correcte": "سَبْعَ عَشْرَةَ رَكْعَةً (١٧)",
        "explication": "الْفَجْرُ رَكْعَتَانِ، وَالظُّهْرُ أَرْبَعٌ، وَالْعَصْرُ أَرْبَعٌ، وَالْمَغْرِبُ ثَلَاثٌ، وَالْعِشَاءُ أَرْبَعٌ، وَمَجْمُوعُهَا ١٧ رَكْعَةً.",
        "hint": "اجْمَعْ ٢ + ٤ + ٤ + ٣ + ٤."
      }
    }
  },
  {
    "id": 6025,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Combien de piliers (arkân) compte la prière selon Zâd al-Muslim ?",
    "options": [
      "Quatorze piliers",
      "Six piliers",
      "Huit piliers",
      "Vingt piliers"
    ],
    "reponse_correcte": "Quatorze piliers",
    "explication": "Les 14 piliers incluent notamment la station debout, Takbîrat al-Ihrâm, Al-Fâtiha, le Rukû', le Sujûd, la sérénité (tuma'nîna), le Tachahhud final et le Taslîm.",
    "hint": "Il y en a plus de douze et moins de quinze.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q42",
    "tags": [
      "salat",
      "piliers",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَرْكَانِ الصَّلَاةِ؟",
        "options": [
          "أَرْبَعَةَ عَشَرَ رُكْنًا",
          "سِتَّةُ أَرْكَانٍ",
          "ثَمَانِيَةُ أَرْكَانٍ",
          "عِشْرُونَ رُكْنًا"
        ],
        "reponse_correcte": "أَرْبَعَةَ عَشَرَ رُكْنًا",
        "explication": "أَرْكَانُ الصَّلَاةِ أَرْبَعَةَ عَشَرَ، مِنْهَا الْقِيَامُ وَالْفَاتِحَةُ وَالرُّكُوعُ وَالسُّجُودُ وَالطُّمَأْنِينَةُ وَالتَّشَهُّدُ الْأَخِيرُ.",
        "hint": "الْعَدَدُ بَيْنَ اثْنَيْ عَشَرَ وَخَمْسَةَ عَشَرَ."
      }
    }
  },
  {
    "id": 6026,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle est la définition précise de la Zakât ?",
    "options": [
      "Un droit obligatoire prélevé sur les biens, remis à une catégorie déterminée de bénéficiaires",
      "Un don facultatif offert uniquement aux amis",
      "Une taxe payée sans condition de seuil ni d'année",
      "Un cadeau offert lors des fêtes uniquement"
    ],
    "reponse_correcte": "Un droit obligatoire prélevé sur les biens, remis à une catégorie déterminée de bénéficiaires",
    "explication": "La Zakât est le 3e pilier de l'Islam ; elle purifie les biens et soutient les huit catégories mentionnées dans sourate At-Tawba (v. 60).",
    "hint": "C'est une obligation financière destinée à des ayants droit précis.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q46",
    "tags": [
      "zakat",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الزَّكَاةِ؟",
        "options": [
          "حَقٌّ وَاجِبٌ فِي الْمَالِ يُعْطَى لِطَائِفَةٍ مَخْصُوصَةٍ فِي وَقْتٍ مَخْصُوصٍ",
          "صَدَقَةٌ تَطَوُّعِيَّةٌ لِلْأَصْدِقَاءِ فَقَطْ",
          "هَدِيَّةٌ تُقَدَّمُ فِي الْأَعْيَادِ فَقَطْ",
          "ضَرِيبَةٌ دُونَ شُرُوطٍ"
        ],
        "reponse_correcte": "حَقٌّ وَاجِبٌ فِي الْمَالِ يُعْطَى لِطَائِفَةٍ مَخْصُوصَةٍ فِي وَقْتٍ مَخْصُوصٍ",
        "explication": "الزَّكَاةُ الرُّكْنُ الثَّالِثُ مِنَ الْإِسْلَامِ وَتُصْرَفُ فِي الْأَصْنَافِ الثَّمَانِيَةِ الْمَذْكُورَةِ فِي سُورَةِ التَّوْبَةِ.",
        "hint": "هِيَ حَقٌّ وَاجِبٌ فِي الْمَالِ لِفِئَاتٍ مُحَدَّدَةٍ."
      }
    }
  },
  {
    "id": 6027,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quelle est la définition du jeûne (Sawm) en Islam ?",
    "options": [
      "S'abstenir de ce qui rompt le jeûne de l'aube au coucher du soleil avec intention",
      "Ne pas boire pendant trois heures seulement",
      "Dormir toute la journée sans prier",
      "S'abstenir uniquement de parler"
    ],
    "reponse_correcte": "S'abstenir de ce qui rompt le jeûne de l'aube au coucher du soleil avec intention",
    "explication": "Le jeûne légal commence à l'aube véritable (Fajr) et se termine au coucher du soleil (Maghrib), avec une intention sincère pour Allah.",
    "hint": "Il dure du Fajr jusqu'au Maghrib et exige l'intention.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q47",
    "tags": [
      "sawm",
      "ramadan",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الصَّوْمِ شَرْعًا؟",
        "options": [
          "الْإِمْسَاكُ عَنِ الْمُفْطِرَاتِ مِنْ طُلُوعِ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ مَعَ النِّيَّةِ",
          "الِامْتِنَاعُ عَنِ الشُّرْبِ ثَلَاثَ سَاعَاتٍ فَقَطْ",
          "الصَّمْتُ عَنِ الْكَلَامِ فَقَطْ",
          "النَّوْمُ طِيلَةَ النَّهَارِ"
        ],
        "reponse_correcte": "الْإِمْسَاكُ عَنِ الْمُفْطِرَاتِ مِنْ طُلُوعِ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ مَعَ النِّيَّةِ",
        "explication": "الصَّوْمُ عِبَادَةٌ تَبْدَأُ بِطُلُوعِ الْفَجْرِ الصَّادِقِ وَتَنْتَهِي بِغُرُوبِ الشَّمْسِ مَعَ تَبْيِيتِ النِّيَّةِ.",
        "hint": "يَمْتَدُّ مِنَ الْفَجْرِ إِلَى غُرُوبِ الشَّمْسِ."
      }
    }
  },
  {
    "id": 6028,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "En quelle année et dans quelle ville notre Prophète Mouhammad ﷺ est-il né ?",
    "options": [
      "En l'année de l'Éléphant, à La Mecque honorée",
      "En l'an 10 de l'Hégire, à Médine",
      "En l'année de la Paix, à Taëf",
      "En l'an 40, à Jérusalem"
    ],
    "reponse_correcte": "En l'année de l'Éléphant, à La Mecque honorée",
    "explication": "Le Prophète Mouhammad ibn 'Abd Allâh ﷺ est né à La Mecque en l'année de l'Éléphant ('Âm al-Fîl), vers 570.",
    "hint": "Cette année tire son nom de l'événement relaté dans sourate Al-Fîl.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q49-Q50",
    "tags": [
      "naissance",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَتَى وَأَيْنَ وُلِدَ النَّبِيُّ ﷺ؟",
        "options": [
          "عَامَ الْفِيلِ فِي مَكَّةَ الْمُكَرَّمَةِ",
          "فِي السَّنَةِ الْعَاشِرَةِ لِلْهِجْرَةِ فِي الْمَدِينَةِ",
          "فِي عَامِ الْحُزْنِ فِي الطَّائِفِ",
          "فِي بَيْتِ الْمَقْدِسِ"
        ],
        "reponse_correcte": "عَامَ الْفِيلِ فِي مَكَّةَ الْمُكَرَّمَةِ",
        "explication": "وُلِدَ سَيِّدُنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ ﷺ بِمَكَّةَ الْمُكَرَّمَةِ فِي عَامِ الْفِيلِ.",
        "hint": "سُمِّيَ ذَلِكَ الْعَامُ بِحَادِثَةِ أَصْحَابِ الْفِيلِ."
      }
    }
  },
  {
    "id": 6029,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui était la nourrice du Prophète Mouhammad ﷺ durant son enfance ?",
    "options": [
      "Halîma as-Sa'diyya",
      "Khadîja bint Khuwaylid",
      "Asmâ' bint Abî Bakr",
      "Baraka (Umm Ayman)"
    ],
    "reponse_correcte": "Halîma as-Sa'diyya",
    "explication": "Halîma as-Sa'diyya, de la tribu des Banû Sa'd, éleva le Prophète ﷺ dans le désert où sa maison fut comblée de bénédictions.",
    "hint": "Elle appartenait à la tribu des Banû Sa'd.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q51-Q55",
    "tags": [
      "enfance",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هِيَ مُرْضِعَةُ النَّبِيِّ ﷺ؟",
        "options": [
          "حَلِيمَةُ السَّعْدِيَّةُ",
          "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
          "أَسْمَاءُ بِنْتُ أَبِي بَكْرٍ",
          "فَاطِمَةُ بِنْتُ أَسَدٍ"
        ],
        "reponse_correcte": "حَلِيمَةُ السَّعْدِيَّةُ",
        "explication": "أَرْضَعَتْهُ حَلِيمَةُ السَّعْدِيَّةُ فِي بَادِيَةِ بَنِي سَعْدٍ فَحَلَّتِ الْبَرَكَةُ فِي دِيَارِهَا.",
        "hint": "تَنْتَسِبُ إِلَى قَبِيلَةِ بَنِي سَعْدٍ."
      }
    }
  },
  {
    "id": 6030,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel âge avait le Prophète ﷺ lorsque sa mère Âmina bint Wahb décéda ?",
    "options": [
      "Six ans",
      "Douze ans",
      "Deux ans",
      "Vingt ans"
    ],
    "reponse_correcte": "Six ans",
    "explication": "Sa mère Âmina décéda à Al-Abwâ' alors qu'il avait six ans ; il fut ensuite recueilli par son grand-père 'Abd al-Muttalib puis son oncle Abû Tâlib.",
    "hint": "Il avait entre cinq et huit ans.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q53-Q54",
    "tags": [
      "enfance",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ كَانَ عُمْرُ النَّبِيِّ ﷺ عِنْدَمَا مَاتَتْ أُمُّهُ آمِنَةُ بِنْتُ وَهْبٍ؟",
        "options": [
          "سِتَّ سَنَوَاتٍ",
          "اثْنَتَيْ عَشْرَةَ سَنَةً",
          "سَنَتَيْنِ",
          "عِشْرِينَ سَنَةً"
        ],
        "reponse_correcte": "سِتَّ سَنَوَاتٍ",
        "explication": "تُوُفِّيَتْ أُمُّهُ وَعُمْرُهُ سِتُّ سَنَوَاتٍ فَكَفَلَهُ جَدُّهُ عَبْدُ الْمُطَّلِبِ ثُمَّ عَمُّهُ أَبُو طَالِبٍ.",
        "hint": "كَانَ عُمْرُهُ بَيْنَ الْخَامِسَةِ وَالثَّامِنَةِ."
      }
    }
  },
  {
    "id": 6031,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quels métiers le Prophète ﷺ exerça-t-il avant la révélation ?",
    "options": [
      "Berger (pâturage) et commerçant",
      "Forgeron et marin",
      "Architecte et potier",
      "Écrivain de cour royale"
    ],
    "reponse_correcte": "Berger (pâturage) et commerçant",
    "explication": "Dans sa jeunesse, il garda les troupeaux pour les habitants de La Mecque puis travailla dans le commerce avec honnêteté, ce qui lui valut le surnom d'Al-Amîn.",
    "hint": "Tous les prophètes ont gardé les moutons, et il voyageait aussi vers le Châm pour le négoce.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q56",
    "tags": [
      "jeunesse",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَ عَمِلَ النَّبِيُّ ﷺ فِي صِغَرِهِ وَشَبَابِهِ؟",
        "options": [
          "بِالرَّعْيِ وَالتِّجَارَةِ",
          "بِالْحِدَادَةِ وَالصَّيْدِ",
          "بِالْبِنَاءِ وَالنِّجَارَةِ",
          "بِالنَّسْخِ وَالْكِتَابَةِ"
        ],
        "reponse_correcte": "بِالرَّعْيِ وَالتِّجَارَةِ",
        "explication": "رَعَى الْغَنَمَ فِي صِغَرِهِ ثُمَّ عَمِلَ فِي التِّجَارَةِ بِصِدْقٍ وَأَمَانَةٍ فَلُقِّبَ بِالصَّادِقِ الْأَمِينِ.",
        "hint": "مَا مِنْ نَبِيٍّ إِلَّا رَعَى الْغَنَمَ، كَمَا سَافَرَ إِلَى الشَّامِ لِلتِّجَارَةِ."
      }
    }
  },
  {
    "id": 6032,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel âge avait le Prophète ﷺ lorsque la première révélation descendit sur lui ?",
    "options": [
      "Quarante ans",
      "Vingt-cinq ans",
      "Trente ans",
      "Cinquante ans"
    ],
    "reponse_correcte": "Quarante ans",
    "explication": "À l'âge de quarante ans, dans la grotte de Hirâ', l'ange Jibrîl lui transmit les cinq premiers versets de sourate Al-'Alaq : « Iqra'... ».",
    "hint": "C'est l'âge de la pleine maturité.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q59-Q61",
    "tags": [
      "revelation",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ كَانَ عُمْرُ النَّبِيِّ ﷺ عِنْدَمَا نَزَلَ عَلَيْهِ الْوَحْيُ؟",
        "options": [
          "أَرْبَعِينَ عَامًا",
          "خَمْسَةً وَعِشْرِينَ عَامًا",
          "ثَلَاثِينَ عَامًا",
          "خَمْسِينَ عَامًا"
        ],
        "reponse_correcte": "أَرْبَعِينَ عَامًا",
        "explication": "نَزَلَ الْوَحْيُ عَلَى النَّبِيِّ ﷺ وَعُمْرُهُ أَرْبَعُونَ سَنَةً فِي غَارِ حِرَاءٍ بِأَوَّلِ آيَاتِ سُورَةِ الْعَلَقِ.",
        "hint": "سِنُّ الْكَمَالِ وَالنُّضْجِ."
      }
    }
  },
  {
    "id": 6033,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Combien de temps dura la prédication secrète à La Mecque, et vers où eut lieu la première émigration ?",
    "options": [
      "Trois ans ; première émigration vers l'Abyssinie (Al-Habacha)",
      "Dix ans ; vers Yathrib",
      "Un an ; vers la Syrie",
      "Cinq ans ; vers le Yémen"
    ],
    "reponse_correcte": "Trois ans ; première émigration vers l'Abyssinie (Al-Habacha)",
    "explication": "La prédication secrète dura trois ans, et les premiers musulmans persécutés émigrèrent vers l'Abyssinie, auprès du roi juste An-Najâchî.",
    "hint": "La terre d'accueil en Afrique était gouvernée par le Négus (An-Najâchî).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q62-Q63",
    "tags": [
      "hijra",
      "abyssinie",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ كَانَتْ مُدَّةُ الدَّعْوَةِ سِرًّا، وَإِلَى أَيْنَ كَانَتِ الْهِجْرَةُ الْأُولَى؟",
        "options": [
          "ثَلَاثُ سَنَوَاتٍ وَالْهِجْرَةُ الْأُولَى إِلَى الْحَبَشَةِ",
          "عَشْرُ سَنَوَاتٍ وَالْهِجْرَةُ إِلَى يَثْرِبَ",
          "سَنَةٌ وَاحِدَةٌ وَالْهِجْرَةُ إِلَى الشَّامِ",
          "خَمْسُ سَنَوَاتٍ وَالْهِجْرَةُ إِلَى الْيَمَنِ"
        ],
        "reponse_correcte": "ثَلَاثُ سَنَوَاتٍ وَالْهِجْرَةُ الْأُولَى إِلَى الْحَبَشَةِ",
        "explication": "اسْتَمَرَّتِ الدَّعْوَةُ السِّرِّيَّةُ ثَلَاثَ سَنَوَاتٍ ثُمَّ هَاجَرَ الصَّحَابَةُ أَوَّلًا إِلَى الْحَبَشَةِ حَيْثُ الْمَلِكُ النَّجَاشِيُّ الْعَادِلُ.",
        "hint": "كَانَتْ أَرْضُ الْهِجْرَةِ الْأُولَى يَحْكُمُهَا النَّجَاشِيُّ."
      }
    }
  },
  {
    "id": 6034,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel Compagnon le Prophète ﷺ envoya-t-il comme premier ambassadeur à Médine, permettant à de nombreux habitants d'embrasser l'Islam ?",
    "options": [
      "Mus'ab ibn 'Umayr (RTA)",
      "Khâlid ibn al-Walîd (RTA)",
      "Abû Hurayra (RTA)",
      "Salmân al-Fârisî (RTA)"
    ],
    "reponse_correcte": "Mus'ab ibn 'Umayr (RTA)",
    "explication": "Après le premier serment d'al-'Aqaba, Mus'ab ibn 'Umayr enseigna le Coran et l'Islam aux Ansâr à Médine avec sagesse et douceur.",
    "hint": "Il est surnommé « le premier ambassadeur de l'Islam ».",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q64",
    "tags": [
      "compagnons",
      "medine",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الصَّحَابِيُّ الَّذِي كَانَ سَبَبًا فِي إِسْلَامِ أَهْلِ الْمَدِينَةِ؟",
        "options": [
          "مُصْعَبُ بْنُ عُمَيْرٍ رَضِيَ اللَّهُ عَنْهُ",
          "خَالِدُ بْنُ الْوَلِيدِ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ",
          "سَلْمَانُ الْفَارِسِيُّ رَضِيَ اللَّهُ عَنْهُ"
        ],
        "reponse_correcte": "مُصْعَبُ بْنُ عُمَيْرٍ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "بَعَثَهُ النَّبِيُّ ﷺ بَعْدَ بَيْعَةِ الْعَقَبَةِ الْأُولَى مُعَلِّمًا لِأَهْلِ الْمَدِينَةِ فَأَسْلَمَ عَلَى يَدَيْهِ خَلْقٌ كَثِيرٌ.",
        "hint": "يُلَقَّبُ بِأَوَّلِ سَفِيرٍ فِي الْإِسْلَامِ."
      }
    }
  },
  {
    "id": 6035,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel est le nom de la première mosquée bâtie par le Prophète ﷺ à son arrivée à Médine ?",
    "options": [
      "La mosquée de Qubâ'",
      "La mosquée de Cordoue",
      "La mosquée d'Al-Azhar",
      "La mosquée des Deux Qiblas"
    ],
    "reponse_correcte": "La mosquée de Qubâ'",
    "explication": "À Qubâ', aux abords de Médine, le Prophète ﷺ fonda la toute première mosquée de l'Islam, décrite comme « fondée sur la piété dès le premier jour ».",
    "hint": "Prier deux rak'ât dans cette mosquée équivaut à une 'Umra.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q66",
    "tags": [
      "mosquee",
      "medine",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا اسْمُ أَوَّلِ مَسْجِدٍ بَنَاهُ النَّبِيُّ ﷺ فِي الْمَدِينَةِ؟",
        "options": [
          "مَسْجِدُ قُبَاءٍ",
          "مَسْجِدُ الْقِبْلَتَيْنِ",
          "مَسْجِدُ الْخِيفِ",
          "مَسْجِدُ نَمِرَةَ"
        ],
        "reponse_correcte": "مَسْجِدُ قُبَاءٍ",
        "explication": "أَسَّسَ النَّبِيُّ ﷺ مَسْجِدَ قُبَاءٍ عِنْدَ وُصُولِهِ إِلَى الْمَدِينَةِ وَهُوَ الْمَسْجِدُ الَّذِي أُسِّسَ عَلَى التَّقْوَى.",
        "hint": "الصَّلَاةُ فِيهِ تَعْدِلُ عُمْرَةً."
      }
    }
  },
  {
    "id": 6036,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Combien d'années la mission prophétique (da'wa) dura-t-elle, et à quel âge le Prophète ﷺ décéda-t-il ?",
    "options": [
      "23 ans de mission ; décédé à 63 ans à Médine",
      "10 ans de mission ; décédé à 50 ans",
      "30 ans de mission ; décédé à 70 ans",
      "15 ans de mission ; décédé à 55 ans"
    ],
    "reponse_correcte": "23 ans de mission ; décédé à 63 ans à Médine",
    "explication": "Il reçut la révélation à 40 ans, prêcha 13 ans à La Mecque puis 10 ans à Médine (soit 23 ans), et décéda à 63 ans.",
    "hint": "40 ans + 13 ans à La Mecque + 10 ans à Médine.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q67-Q70",
    "tags": [
      "chronologie",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ سَنَةً اسْتَمَرَّتْ دَعْوَةُ النَّبِيِّ ﷺ، وَكَمْ كَانَ عُمْرُهُ عِنْدَ وَفَاتِهِ؟",
        "options": [
          "ثَلَاثًا وَعِشْرِينَ عَامًا وَتُوُفِّيَ عَنْ ثَلَاثٍ وَسِتِّينَ سَنَةً",
          "عَشْرَ سَنَوَاتٍ وَتُوُفِّيَ عَنْ خَمْسِينَ سَنَةً",
          "ثَلَاثِينَ سَنَةً وَتُوُفِّيَ عَنْ سَبْعِينَ سَنَةً",
          "خَمْسَ عَشْرَةَ سَنَةً وَتُوُفِّيَ عَنْ خَمْسٍ وَخَمْسِينَ سَنَةً"
        ],
        "reponse_correcte": "ثَلَاثًا وَعِشْرِينَ عَامًا وَتُوُفِّيَ عَنْ ثَلَاثٍ وَسِتِّينَ سَنَةً",
        "explication": "أُوحِيَ إِلَيْهِ فِي الْأَرْبَعِينَ، فَدَعَا ١٣ سَنَةً بِمَكَّةَ وَ١٠ سَنَوَاتٍ بِالْمَدِينَةِ، وَتُوُفِّيَ فِي الثَّالِثَةِ وَالسِّتِّينَ.",
        "hint": "اِجْمَعْ ٤٠ + ١٣ + ١٠."
      }
    }
  },
  {
    "id": 6037,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui furent respectivement le premier homme adulte et le premier enfant à croire en la mission du Prophète ﷺ ?",
    "options": [
      "Abû Bakr as-Siddîq et 'Alî ibn Abî Tâlib (RTA)",
      "'Umar ibn al-Khattâb et Zayd ibn Thâbit",
      "'Uthmân ibn 'Affân et Bilâl ibn Rabâh",
      "Hamza et Anas ibn Mâlik"
    ],
    "reponse_correcte": "Abû Bakr as-Siddîq et 'Alî ibn Abî Tâlib (RTA)",
    "explication": "Abû Bakr as-Siddîq fut le premier parmi les hommes libres, et le jeune 'Alî ibn Abî Tâlib (qui vivait chez le Prophète ﷺ) le premier parmi les enfants.",
    "hint": "Le premier devint le 1er Calife, et le second devint le 4e Calife.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q75-Q76",
    "tags": [
      "compagnons",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ أَوَّلُ مَنْ أَسْلَمَ مِنَ الرِّجَالِ وَمَنْ أَوَّلُ مَنْ آمَنَ مِنَ الصِّبْيَانِ؟",
        "options": [
          "أَبُو بَكْرٍ الصِّدِّيقُ وَعَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُمَا",
          "عُمَرُ بْنُ الْخَطَّابِ وَزَيْدُ بْنُ ثَابِتٍ",
          "عُثْمَانُ بْنُ عَفَّانَ وَبِلَالُ بْنُ رَبَاحٍ",
          "حَمْزَةُ وَأَنَسُ بْنُ مَالِكٍ"
        ],
        "reponse_correcte": "أَبُو بَكْرٍ الصِّدِّيقُ وَعَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُمَا",
        "explication": "سَارَعَ أَبُو بَكْرٍ الصِّدِّيقُ بِالْإِسْلَامِ مِنَ الرِّجَالِ وَعَلِيُّ بْنُ أَبِي طَالِبٍ مِنَ الصِّبْيَانِ.",
        "hint": "الْأَوَّلُ أَوَّلُ الْخُلَفَاءِ الرَّاشِدِينَ وَالثَّانِي رَابِعُهُمْ."
      }
    }
  },
  {
    "id": 6038,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui porte le surnom de « Dhû an-Nûrayn » (l'Homme aux deux lumières) et pourquoi ?",
    "options": [
      "'Uthmân ibn 'Affân (RTA), car il épousa successivement deux filles du Prophète ﷺ",
      "'Alî ibn Abî Tâlib (RTA)",
      "Khâlid ibn al-Walîd (RTA)",
      "Abû Bakr as-Siddîq (RTA)"
    ],
    "reponse_correcte": "'Uthmân ibn 'Affân (RTA), car il épousa successivement deux filles du Prophète ﷺ",
    "explication": "'Uthmân ibn 'Affân (RTA) épousa Ruqayya puis, après son décès, Umm Kulthûm, toutes deux filles du Messager d'Allah ﷺ.",
    "hint": "C'est le troisième Calife bien-guidé.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q77-Q81",
    "tags": [
      "uthman",
      "compagnons"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ ذُو النُّورَيْنِ؟",
        "options": [
          "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ",
          "عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ",
          "خَالِدُ بْنُ الْوَلِيدِ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ"
        ],
        "reponse_correcte": "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "سُمِّيَ عُثْمَانُ بْنُ عَفَّانَ بِذِي النُّورَيْنِ لِزَوَاجِهِ مِنْ بِنْتَيِ النَّبِيِّ ﷺ رُقَيَّةَ ثُمَّ أُمِّ كُلْثُومٍ.",
        "hint": "هُوَ ثَالِثُ الْخُلَفَاءِ الرَّاشِدِينَ."
      }
    }
  },
  {
    "id": 6039,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui sont respectivement « le Prince des martyrs », « le Sabre dégainé d'Allah » et « la première martyre de l'Islam » ?",
    "options": [
      "Hamza, Khâlid ibn al-Walîd et Sumayya (RTA)",
      "Ja'far, 'Umar et Khadîja",
      "Mus'ab, Sa'd et Â'icha",
      "Bilâl, Zayd et Fâtima"
    ],
    "reponse_correcte": "Hamza, Khâlid ibn al-Walîd et Sumayya (RTA)",
    "explication": "Hamza ibn 'Abd al-Muttalib tomba à Uhud, Khâlid ibn al-Walîd reçut le titre de Sayfullâh al-Maslûl, et Sumayya bint al-Khayyât fut la première martyre.",
    "hint": "Hamza était l'oncle du Prophète ﷺ, Khâlid un grand général, et Sumayya la mère de 'Ammâr.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q78-Q80",
    "tags": [
      "compagnons",
      "martyrs"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ سَيِّدُ الشُّهَدَاءِ وَمَنْ سَيْفُ اللَّهِ الْمَسْلُولُ وَمَنْ أَوَّلُ شَهِيدَةٍ؟",
        "options": [
          "حَمْزَةُ وَخَالِدُ بْنُ الْوَلِيدِ وَسُمَيَّةُ رَضِيَ اللَّهُ عَنْهُمْ",
          "جَعْفَرٌ وَعُمَرُ وَخَدِيجَةُ",
          "مُصْعَبٌ وَسَعْدٌ وَعَائِشَةُ",
          "بِلَالٌ وَزَيْدٌ وَفَاطِمَةُ"
        ],
        "reponse_correcte": "حَمْزَةُ وَخَالِدُ بْنُ الْوَلِيدِ وَسُمَيَّةُ رَضِيَ اللَّهُ عَنْهُمْ",
        "explication": "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ سَيِّدُ الشُّهَدَاءِ، وَخَالِدٌ سَيْفُ اللَّهِ الْمَسْلُولُ، وَسُمَيَّةُ بِنْتُ الْخَيَّاطِ أَوَّلُ شَهِيدَةٍ.",
        "hint": "حَمْزَةُ عَمُّ النَّبِيِّ ﷺ وَسُمَيَّةُ أُمُّ عَمَّارِ بْنِ يَاسِرٍ."
      }
    }
  },
  {
    "id": 6040,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Quelle invocation authentique dit-on juste avant de s'endormir ?",
    "options": [
      "« Bismika Allâhumma amûtu wa ahyâ » (En Ton nom, ô Allah, je meurs et je vis)",
      "« Ghufrânaka » (J'implore Ton pardon)",
      "« Allâhumma iftah lî abwâba rahmatik »",
      "« Jazâkallâhu khayran »"
    ],
    "reponse_correcte": "« Bismika Allâhumma amûtu wa ahyâ » (En Ton nom, ô Allah, je meurs et je vis)",
    "explication": "Le sommeil est comparé à une petite mort ; le musulman s'endort en confiant son âme à Allah par cette belle parole.",
    "hint": "Elle mentionne la mort (amûtu) et la vie (ahyâ).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q82",
    "tags": [
      "adhkar",
      "sommeil"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ قَبْلَ النَّوْمِ؟",
        "options": [
          "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          "غُفْرَانَكَ",
          "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
          "جَزَاكَ اللَّهُ خَيْرًا"
        ],
        "reponse_correcte": "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        "explication": "مِنَ السُّنَّةِ عِنْدَ النَّوْمِ قَوْلُ: «بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا».",
        "hint": "يُذْكَرُ فِيهَا الْمَوْتُ وَالْحَيَاةُ."
      }
    }
  },
  {
    "id": 6041,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que dit-on dès le réveil le matin ?",
    "options": [
      "« Al-hamdu lillâhi alladhî ahyânâ ba'da mâ amâtanâ wa ilayhi n-nuchûr »",
      "« Subhâna rabbiya l-'azîm »",
      "« Bismillâh walajnâ »",
      "« A'ûdhu billâhi mina ch-chaytâni r-rajîm »"
    ],
    "reponse_correcte": "« Al-hamdu lillâhi alladhî ahyânâ ba'da mâ amâtanâ wa ilayhi n-nuchûr »",
    "explication": "On loue Allah qui nous a rendu la vie après le sommeil et on se rappelle que vers Lui se fera la résurrection.",
    "hint": "Cette formule remercie Allah de nous avoir rendu la vie après le sommeil.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q83",
    "tags": [
      "adhkar",
      "reveil"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ بَعْدَ الِاسْتِيقَاظِ مِنَ النَّوْمِ؟",
        "options": [
          "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
          "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          "بِسْمِ اللَّهِ وَلَجْنَا",
          "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ"
        ],
        "reponse_correcte": "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        "explication": "يَحْمَدُ الْمُسْلِمُ اللَّهَ عِنْدَ اسْتِيقَاظِهِ لِأَنَّهُ رَدَّ عَلَيْهِ رُوحَهُ وَأَحْيَاهُ بَعْدَ النَّوْمِ.",
        "hint": "فِيهَا حَمْدُ اللَّهِ عَلَى الْإِحْيَاءِ بَعْدَ النَّوْمِ."
      }
    }
  },
  {
    "id": 6042,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que dit-on en sortant des toilettes ?",
    "options": [
      "« Ghufrânaka » (J'implore Ton pardon)",
      "« Subhânallâh »",
      "« Allâhumma sayyiban nâfi'an »",
      "« Yarhamukallâh »"
    ],
    "reponse_correcte": "« Ghufrânaka » (J'implore Ton pardon)",
    "explication": "En entrant aux toilettes on demande protection (« Allâhumma innî a'ûdhu bika mina l-khubthi wa l-khabâ'ith ») et en sortant on dit « Ghufrânaka ».",
    "hint": "C'est un mot court signifiant « J'implore Ton pardon ».",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q84-Q85",
    "tags": [
      "adhkar",
      "adab"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ عِنْدَ الْخُرُوجِ مِنَ الْحَمَّامِ (الْخَلَاءِ)؟",
        "options": [
          "غُفْرَانَكَ",
          "سُبْحَانَ اللَّهِ",
          "اللَّهُمَّ صَيِّبًا نَافِعًا",
          "يَرْحَمُكَ اللَّهُ"
        ],
        "reponse_correcte": "غُفْرَانَكَ",
        "explication": "ثَبَتَ عَنِ النَّبِيِّ ﷺ أَنَّهُ كَانَ إِذَا خَرَجَ مِنَ الْخَلَاءِ قَالَ: «غُفْرَانَكَ».",
        "hint": "كَلِمَةٌ وَاحِدَةٌ لِطَلَبِ الْمَغْفِرَةِ."
      }
    }
  },
  {
    "id": 6043,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quelle invocation complète dit-on après avoir terminé les ablutions (Woudhou) ?",
    "options": [
      "La Chahâda suivie de « Allâhumma j'alnî mina t-tawwâbîna wa j'alnî mina l-mutatahhirîn »",
      "« Bismika Allâhumma amûtu wa ahyâ »",
      "« Sami'allâhu liman hamidah »",
      "« Rabbighfir lî warhamnî »"
    ],
    "reponse_correcte": "La Chahâda suivie de « Allâhumma j'alnî mina t-tawwâbîna wa j'alnî mina l-mutatahhirîn »",
    "explication": "On prononce l'attestation de foi puis on demande à Allah de nous compter parmi ceux qui se repentent et ceux qui se purifient.",
    "hint": "Elle combine l'attestation de foi, le repentir (tawwâbîn) et la purification (mutatahhirîn).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q87",
    "tags": [
      "adhkar",
      "woudou"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ بَعْدَ الْفَرَاغِ مِنَ الْوُضُوءِ؟",
        "options": [
          "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ... اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
          "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
          "رَبِّ اغْفِرْ لِي وَارْحَمْنِي"
        ],
        "reponse_correcte": "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ... اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        "explication": "مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ ثُمَّ قَالَ هَذَا الذِّكْرَ فُتِحَتْ لَهُ أَبْوَابُ الْجَنَّةِ الثَّمَانِيَةُ.",
        "hint": "تَجْمَعُ بَيْنَ الشَّهَادَةِ وَسُؤَالِ التَّوْبَةِ وَالتَّطَهُّرِ."
      }
    }
  },
  {
    "id": 6044,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Quelle invocation prononce-t-on en sortant de la maison ?",
    "options": [
      "« Bismillâhi tawakkaltu 'alallâhi, wa lâ hawla wa lâ quwwata illâ billâh »",
      "« Allâhumma innî as'aluka min fadlik »",
      "« Mutirnâ bi-fadlillâhi wa rahmatih »",
      "« Subhâna rabbiya l-a'lâ »"
    ],
    "reponse_correcte": "« Bismillâhi tawakkaltu 'alallâhi, wa lâ hawla wa lâ quwwata illâ billâh »",
    "explication": "À celui qui sort en prononçant cette invocation de confiance en Allah, il est dit : « Tu es guidé, préservé et protégé ! »",
    "hint": "Elle exprime la confiance en Allah (tawakkul).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q88",
    "tags": [
      "adhkar",
      "maison"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ دُعَاءُ الْخُرُوجِ مِنَ الْمَنْزِلِ؟",
        "options": [
          "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
          "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
          "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
          "سُبْحَانَ رَبِّيَ الْأَعْلَى"
        ],
        "reponse_correcte": "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        "explication": "مَنْ قَالَهَا عِنْدَ خُرُوجِهِ يُقَالُ لَهُ: هُدِيتَ وَكُفِيتَ وَوُقِيتَ وَتَنَحَّى عَنْهُ الشَّيْطَانُ.",
        "hint": "تَبْدَأُ بِالتَّوَكُّلِ عَلَى اللَّهِ."
      }
    }
  },
  {
    "id": 6045,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que dit-on respectivement en entrant à la mosquée et en en sortant ?",
    "options": [
      "Entrée : « Ouvre-moi les portes de Ta miséricorde » ; Sortie : « Je Te demande de Ta grâce »",
      "Entrée : « Je Te demande de Ta grâce » ; Sortie : « Ghufrânaka »",
      "Entrée : « Amûtu wa ahyâ » ; Sortie : « Bismillâh »",
      "Entrée : « Yarhamukallâh » ; Sortie : « Al-hamdu lillâh »"
    ],
    "reponse_correcte": "Entrée : « Ouvre-moi les portes de Ta miséricorde » ; Sortie : « Je Te demande de Ta grâce »",
    "explication": "Dans la mosquée, on demande la miséricorde (rahma) spirituelle ; en sortant vers ses activités, on demande la grâce (fadl) et la subsistance licite.",
    "hint": "À l'entrée : miséricorde (rahma) ; à la sortie : grâce (fadl).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q89 & Q94",
    "tags": [
      "adhkar",
      "mosquee"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ عِنْدَ دُخُولِ الْمَسْجِدِ وَعِنْدَ الْخُرُوجِ مِنْهُ؟",
        "options": [
          "الدُّخُولُ: اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ، وَالْخُرُوجُ: اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
          "الدُّخُولُ: غُفْرَانَكَ، وَالْخُرُوجُ: بِسْمِ اللَّهِ",
          "الدُّخُولُ: بِاسْمِكَ اللَّهُمَّ، وَالْخُرُوجُ: يَرْحَمُكَ اللَّهُ",
          "الدُّخُولُ: أَسْأَلُكَ مِنْ فَضْلِكَ، وَالْخُرُوجُ: أَبْوَابَ رَحْمَتِكَ"
        ],
        "reponse_correcte": "الدُّخُولُ: اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ، وَالْخُرُوجُ: اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        "explication": "فِي الْمَسْجِدِ يَطْلُبُ الْمُؤْمِنُ الرَّحْمَةَ، وَعِنْدَ الْخُرُوجِ يَسْأَلُ اللَّهَ مِنْ فَضْلِهِ وَرِزْقِهِ.",
        "hint": "الدُّخُولُ مُرْتَبِطٌ بِالرَّحْمَةِ وَالْخُرُوجُ بِالْفَضْلِ."
      }
    }
  },
  {
    "id": 6046,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Quelle formule répète-t-on dans l'inclinaison (Rukû') et laquelle dans la prosternation (Sujûd) ?",
    "options": [
      "Rukû' : « Subhâna rabbiya l-'azîm » ; Sujûd : « Subhâna rabbiya l-a'lâ »",
      "Rukû' : « Subhâna rabbiya l-a'lâ » ; Sujûd : « Subhâna rabbiya l-'azîm »",
      "Rukû' : « Ghufrânaka » ; Sujûd : « Al-hamdu lillâh »",
      "Rukû' : « Allâhu Akbar » ; Sujûd : « As-salâmu 'alaykum »"
    ],
    "reponse_correcte": "Rukû' : « Subhâna rabbiya l-'azîm » ; Sujûd : « Subhâna rabbiya l-a'lâ »",
    "explication": "Dans le Rukû' on glorifie l'Immense (Al-'Azîm) et dans la prosternation — point le plus bas du corps — on glorifie le Très-Haut (Al-A'lâ).",
    "hint": "Au point physique le plus bas (le Sujûd), on prononce le Nom « Al-A'lâ » (Le Très-Haut).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q90 & Q92",
    "tags": [
      "adhkar",
      "salat"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ فِي الرُّكُوعِ وَمَاذَا نَقُولُ فِي السُّجُودِ؟",
        "options": [
          "فِي الرُّكُوعِ: سُبْحَانَ رَبِّيَ الْعَظِيمِ، وَفِي السُّجُودِ: سُبْحَانَ رَبِّيَ الْأَعْلَى",
          "فِي الرُّكُوعِ: سُبْحَانَ رَبِّيَ الْأَعْلَى، وَفِي السُّجُودِ: سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          "فِي الرُّكُوعِ: غُفْرَانَكَ، وَفِي السُّجُودِ: الْحَمْدُ لِلَّهِ",
          "فِي الرُّكُوعِ: اللَّهُ أَكْبَرُ، وَفِي السُّجُودِ: السَّلَامُ عَلَيْكُمْ"
        ],
        "reponse_correcte": "فِي الرُّكُوعِ: سُبْحَانَ رَبِّيَ الْعَظِيمِ، وَفِي السُّجُودِ: سُبْحَانَ رَبِّيَ الْأَعْلَى",
        "explication": "تُسَنُّ تَرْدِيدُ كُلٍّ مِنْهُمَا ثَلَاثَ مَرَّاتٍ فِي الرُّكُوعِ وَالسُّجُودِ.",
        "hint": "فِي السُّجُودِ نُسَبِّحُ بِاسْمِ اللَّهِ «الْأَعْلَى»."
      }
    }
  },
  {
    "id": 6047,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quel verset et quelles trois sourates est-il recommandé de réciter après chaque prière obligatoire ?",
    "options": [
      "Âyat al-Kursî et les trois protectrices (Al-Ikhlâs, Al-Falaq, An-Nâs)",
      "La fin de sourate Al-Mulk uniquement",
      "Sourate Al-Fîl et Al-Kâfirûn",
      "Sourate Al-Masad uniquement"
    ],
    "reponse_correcte": "Âyat al-Kursî et les trois protectrices (Al-Ikhlâs, Al-Falaq, An-Nâs)",
    "explication": "Après le Taslîm, l'istighfâr (3x), le tasbîh/tahmîd/takbîr (33x), le Prophète ﷺ recommandait Âyat al-Kursî et Al-Mu'awwidhât.",
    "hint": "Il s'agit du plus grand verset du Coran et des trois dernières sourates du Mushaf.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q95",
    "tags": [
      "adhkar",
      "salat"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الآيَةُ وَالسُّوَرُ الَّتِي يُسْتَحَبُّ قِرَاءَتُهَا بَعْدَ الصَّلَاةِ الْمَفْرُوضَةِ؟",
        "options": [
          "آيَةُ الْكُرْسِيِّ وَالْمُعَوِّذَاتُ (الْإِخْلَاصُ وَالْفَلَقُ وَالنَّاسُ)",
          "سُورَةُ الْفِيلِ وَالْكَافِرُونَ",
          "سُورَةُ الْمَسَدِ وَحْدَهَا",
          "سُورَةُ التَّكَاثُرِ فَقَطْ"
        ],
        "reponse_correcte": "آيَةُ الْكُرْسِيِّ وَالْمُعَوِّذَاتُ (الْإِخْلَاصُ وَالْفَلَقُ وَالنَّاسُ)",
        "explication": "مِنْ أَذْكَارِ مَا بَعْدَ الصَّلَاةِ قِرَاءَةُ آيَةِ الْكُرْسِيِّ وَالسُّوَرِ الثَّلَاثِ الْأَخِيرَةِ مِنَ الْمُصْحَفِ.",
        "hint": "أَعْظَمُ آيَةٍ فِي الْقُرْآنِ مَعَ السُّوَرِ الثَّلَاثِ الْأَخِيرَةِ."
      }
    }
  },
  {
    "id": 6048,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que répond le musulman à celui qui éternue et dit « Al-hamdu lillâh » ?",
    "options": [
      "« Yarhamukallâh » (Qu'Allah te fasse miséricorde)",
      "« Jazâkallâhu khayran »",
      "« Ghufrânaka »",
      "« Bismillâh »"
    ],
    "reponse_correcte": "« Yarhamukallâh » (Qu'Allah te fasse miséricorde)",
    "explication": "Celui qui éternue dit « Al-hamdu lillâh », on lui répond « Yarhamukallâh », puis il réplique « Yahdîkumullâhu wa yuslih bâlakum ».",
    "hint": "C'est une invocation de miséricorde (rahma).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q99",
    "tags": [
      "adhkar",
      "adab"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ لِلْعَاطِسِ إِذَا قَالَ (الْحَمْدُ لِلَّهِ)؟",
        "options": [
          "يَرْحَمُكَ اللَّهُ",
          "جَزَاكَ اللَّهُ خَيْرًا",
          "غُفْرَانَكَ",
          "بِسْمِ اللَّهِ"
        ],
        "reponse_correcte": "يَرْحَمُكَ اللَّهُ",
        "explication": "يَقُولُ الْعَاطِسُ: الْحَمْدُ لِلَّهِ، فَيَرُدُّ السَّامِعُ: يَرْحَمُكَ اللَّهُ، فَيَقُولُ الْعَاطِسُ: يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ.",
        "hint": "دُعَاءٌ بِالرَّحْمَةِ."
      }
    }
  },
  {
    "id": 6049,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que dit-on lorsqu'il pleut selon la Sunnah ?",
    "options": [
      "« Allâhumma sayyiban nâfi'an » (Ô Allah, fais-en une pluie bénéfique)",
      "« Ghufrânaka »",
      "« Amûtu wa ahyâ »",
      "« Iftah lî abwâba rahmatik »"
    ],
    "reponse_correcte": "« Allâhumma sayyiban nâfi'an » (Ô Allah, fais-en une pluie bénéfique)",
    "explication": "Pendant la pluie, on dit « Allâhumma sayyiban nâfi'an », et après la pluie « Mutirnâ bi-fadlillâhi wa rahmatih ».",
    "hint": "On demande à Allah que l'averse soit bénéfique (nâfi').",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q101",
    "tags": [
      "adhkar",
      "pluie"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ عِنْدَ نُزُولِ الْمَطَرِ؟",
        "options": [
          "اللَّهُمَّ صَيِّبًا نَافِعًا",
          "غُفْرَانَكَ",
          "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
        ],
        "reponse_correcte": "اللَّهُمَّ صَيِّبًا نَافِعًا",
        "explication": "كَانَ النَّبِيُّ ﷺ إِذَا رَأَى الْمَطَرَ قَالَ: «اللَّهُمَّ صَيِّبًا نَافِعًا»، وَبَعْدَهُ: «مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ».",
        "hint": "نَسْأَلُ اللَّهَ أَنْ يَكُونَ غَيْثًا نَافِعًا."
      }
    }
  },
  {
    "id": 6050,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quelle invocation répète-t-on sept fois lors de la visite d'un malade ?",
    "options": [
      "« As'alullâha l-'azîma rabba l-'archi l-'azîmi an yachfiyak »",
      "« Bismillâhi tawakkaltu 'alallâh »",
      "« Mutirnâ bi-fadlillâh »",
      "« Subhâna rabbiya l-'azîm »"
    ],
    "reponse_correcte": "« As'alullâha l-'azîma rabba l-'archi l-'azîmi an yachfiyak »",
    "explication": "Signification : « Je demande à Allah l'Immense, Seigneur du Trône immense, de te guérir » (7 fois).",
    "hint": "Cette invocation demande la guérison (chifâ') par Allah Seigneur du Trône immense.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q102",
    "tags": [
      "adhkar",
      "malade"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ سَبْعَ مَرَّاتٍ عِنْدَ زِيَارَةِ الْمَرِيضِ؟",
        "options": [
          "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
          "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
          "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
          "سُبْحَانَ رَبِّيَ الْعَظِيمِ"
        ],
        "reponse_correcte": "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
        "explication": "مَنْ عَادَ مَرِيضًا لَمْ يَحْضُرْ أَجَلُهُ فَقَالَ عِنْدَهُ هَذَا الدُّعَاءَ سَبْعَ مِرَارٍ عَافَاهُ اللَّهُ.",
        "hint": "دُعَاءٌ بِالشِّفَاءِ وَتَوَسُّلٌ بِرَبِّ الْعَرْشِ الْعَظِيمِ."
      }
    }
  },
  {
    "id": 6051,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que doit-on prononcer lorsqu'on est gagné par la colère ?",
    "options": [
      "« A'ûdhu billâhi mina ch-chaytâni r-rajîm » (Je cherche refuge auprès d'Allah contre Satan le lapidé)",
      "« Jazâkallâhu khayran »",
      "« Ghufrânaka »",
      "« Allâhumma sayyiban nâfi'an »"
    ],
    "reponse_correcte": "« A'ûdhu billâhi mina ch-chaytâni r-rajîm » (Je cherche refuge auprès d'Allah contre Satan le lapidé)",
    "explication": "Le Prophète ﷺ enseigna qu'une parole calme immédiatement la colère : chercher refuge auprès d'Allah contre Satan le lapidé.",
    "hint": "On demande protection contre celui qui attise la colère.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q103-Q104",
    "tags": [
      "adhkar",
      "colere"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ عِنْدَ الْغَضَبِ؟",
        "options": [
          "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
          "جَزَاكَ اللَّهُ خَيْرًا",
          "غُفْرَانَكَ",
          "اللَّهُمَّ صَيِّبًا نَافِعًا"
        ],
        "reponse_correcte": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        "explication": "الِاسْتِعَاذَةُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ تُذْهِبُ الْغَضَبَ بِإِذْنِ اللَّهِ.",
        "hint": "نَسْتَعِيذُ بِاللَّهِ مِمَّنْ يُشْعِلُ الْغَضَبَ."
      }
    }
  },
  {
    "id": 6052,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Quelle expression prophétique dit-on pour remercier quelqu'un qui nous a rendu un service ou fait un bienfait ?",
    "options": [
      "« Jazâkallâhu khayran » (Qu'Allah te récompense en bien)",
      "« Ghufrânaka »",
      "« Sami'allâhu liman hamidah »",
      "« Amûtu wa ahyâ »"
    ],
    "reponse_correcte": "« Jazâkallâhu khayran » (Qu'Allah te récompense en bien)",
    "explication": "Le Prophète ﷺ a dit : « Celui à qui on fait un bienfait et qui dit à son auteur : Jazâkallâhu khayran, aura pleinement exprimé son remerciement. »",
    "hint": "On demande à Allah Lui-même de rétribuer la personne en bien.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q98 & Q100",
    "tags": [
      "akhlaq",
      "gratitude"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ لِمَنْ صَنَعَ إِلَيْنَا مَعْرُوفًا؟",
        "options": [
          "جَزَاكَ اللَّهُ خَيْرًا",
          "غُفْرَانَكَ",
          "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
          "أَمُوتُ وَأَحْيَا"
        ],
        "reponse_correcte": "جَزَاكَ اللَّهُ خَيْرًا",
        "explication": "قَالَ ﷺ: «مَنْ صُنِعَ إِلَيْهِ مَعْرُوفٌ فَقَالَ لِفَاعِلِهِ: جَزَاكَ اللَّهُ خَيْرًا فَقَدْ أَبْلَغَ فِي الثَّنَاءِ».",
        "hint": "دُعَاءٌ لِلْمُحْسِنِ بِالْخَيْرِ."
      }
    }
  },
  {
    "id": 6053,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Parmi les 15 nobles caractères du musulman cités dans Zâd al-Muslim, lequel relève de l'aumône selon la Sunnah ?",
    "options": [
      "Le sourire et écarter ce qui nuit du chemin",
      "L'orgueil devant les camarades",
      "La colère et la trahison",
      "L'isolement complet"
    ],
    "reponse_correcte": "Le sourire et écarter ce qui nuit du chemin",
    "explication": "Zâd al-Muslim rappelle notamment le sourire fraternel, écarter les obstacles du chemin, la piété filiale, l'hospitalité, la pudeur et l'entraide.",
    "hint": "Pense au célèbre hadith : « Ton sourire au visage de ton frère est une aumône ».",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q105",
    "tags": [
      "akhlaq",
      "aumone"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مِنْ أَخْلَاقِ الْمُسْلِمِ الْمَذْكُورَةِ فِي زَادِ الْمُسْلِمِ الَّتِي تُعَدُّ صَدَقَةً:",
        "options": [
          "الِابْتِسَامَةُ وَإِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ",
          "الْكِبْرُ وَالْخُيَلَاءُ",
          "الْغِشُّ وَالْخِيَانَةُ",
          "الْبُخْلُ وَالْعُزْلَةُ"
        ],
        "reponse_correcte": "الِابْتِسَامَةُ وَإِمَاطَةُ الْأَذَى عَنِ الطَّرِيقِ",
        "explication": "فِي الْحَدِيثِ: «تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ، وَإِمَاطَتُكَ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ».",
        "hint": "تَذَكَّرْ حَدِيثَ التَّبَسُّمِ وَالطَّرِيقِ."
      }
    }
  },
  {
    "id": 6054,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Lequel de ces comportements illustre la loyauté (Al-Amâna) enseignée au jeune musulman ?",
    "options": [
      "Restituer un objet confié sans le trahir ni mentir",
      "Cacher ce qu'on nous a prêté",
      "Se moquer de son voisin",
      "Refuser d'aider celui qui est dans le besoin"
    ],
    "reponse_correcte": "Restituer un objet confié sans le trahir ni mentir",
    "explication": "L'Amâna (la loyauté et le respect des dépôts confiés) et la véracité figurent en tête des nobles caractères du musulman.",
    "hint": "C'était le surnom même du Prophète ﷺ avant sa mission : Al-Amîn.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q105",
    "tags": [
      "akhlaq",
      "amana"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الَّذِي يُعَبِّرُ عَنْ خُلُقِ الْأَمَانَةِ؟",
        "options": [
          "حِفْظُ الْوَدَائِعِ وَعَدَمُ الْخِيَانَةِ وَالصِّدْقُ",
          "كِتْمَانُ حُقُوقِ النَّاسِ",
          "إِيذَاءُ الْجَارِ",
          "تَرْكُ مُسَاعَدَةِ الْمُحْتَاجِ"
        ],
        "reponse_correcte": "حِفْظُ الْوَدَائِعِ وَعَدَمُ الْخِيَانَةِ وَالصِّدْقُ",
        "explication": "الْأَمَانَةُ وَالصِّدْقُ وَحُسْنُ الْجِوَارِ وَبِرُّ الْوَالِدَيْنِ مِنْ أَهَمِّ أَخْلَاقِ الْمُسْلِمِ.",
        "hint": "كَانَ النَّبِيُّ ﷺ يُلَقَّبُ بِالصَّادِقِ الْأَمِينِ."
      }
    }
  },
  {
    "id": 6055,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Combien y a-t-il de piliers de l'Islam et quel est le cinquième pilier ?",
    "options": [
      "Cinq piliers ; le cinquième est le pèlerinage (Hajj) pour qui en a les moyens",
      "Six piliers ; le cinquième est la croyance aux anges",
      "Quatre piliers ; le quatrième est l'aumône facultative",
      "Cinq piliers ; le cinquième est la récitation quotidienne"
    ],
    "reponse_correcte": "Cinq piliers ; le cinquième est le pèlerinage (Hajj) pour qui en a les moyens",
    "explication": "Les 5 piliers sont : la Chahâda, la Salât, la Zakât, le jeûne de Ramadan et le Hajj à La Mecque pour celui qui en a la capacité.",
    "hint": "Le dernier pilier se déroule à La Mecque durant Dhû al-Hijja.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q10",
    "tags": [
      "piliers",
      "islam",
      "hajj"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ أَرْكَانُ الْإِسْلَامِ وَمَا هُوَ الرُّكْنُ الْخَامِسُ؟",
        "options": [
          "خَمْسَةُ أَرْكَانٍ وَالْخَامِسُ حَجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
          "سِتَّةُ أَرْكَانٍ وَالْخَامِسُ الْإِيمَانُ بِالْمَلَائِكَةِ",
          "أَرْبَعَةُ أَرْكَانٍ وَالرَّابِعُ الصَّدَقَةُ",
          "خَمْسَةُ أَرْكَانٍ وَالْخَامِسُ بِرُّ الْوَالِدَيْنِ"
        ],
        "reponse_correcte": "خَمْسَةُ أَرْكَانٍ وَالْخَامِسُ حَجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
        "explication": "أَرْكَانُ الْإِسْلَامِ خَمْسَةٌ: الشَّهَادَتَانِ، وَالصَّلَاةُ، وَالزَّكَاةُ، وَصَوْمُ رَمَضَانَ، وَحَجُّ الْبَيْتِ لِلْمُسْتَطِيعِ.",
        "hint": "الرُّكْنُ الْأَخِيرُ يُؤَدَّى فِي مَكَّةَ الْمُكَرَّمَةِ فِي ذِي الْحِجَّةِ."
      }
    }
  },
  {
    "id": 6056,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Combien y a-t-il de piliers de la foi (Îmân) ?",
    "options": [
      "Six piliers",
      "Cinq piliers",
      "Trois piliers",
      "Sept piliers"
    ],
    "reponse_correcte": "Six piliers",
    "explication": "Les 6 piliers de la foi sont : croire en Allah, en Ses anges, en Ses Livres, en Ses messagers, au Jour dernier et au destin (Qadar).",
    "hint": "Il y en a un de plus que les piliers de l'Islam.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q18",
    "tags": [
      "piliers",
      "iman"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَرْكَانِ الْإِيمَانِ؟",
        "options": [
          "سِتَّةُ أَرْكَانٍ",
          "خَمْسَةُ أَرْكَانٍ",
          "ثَلَاثَةُ أَرْكَانٍ",
          "سَبْعَةُ أَرْكَانٍ"
        ],
        "reponse_correcte": "سِتَّةُ أَرْكَانٍ",
        "explication": "أَرْكَانُ الْإِيمَانِ سِتَّةٌ: الْإِيمَانُ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَالْقَدَرِ خَيْرِهِ وَشَرِّهِ.",
        "hint": "تَزِيدُ بِرُكْنٍ وَاحِدٍ عَلَى أَرْكَانِ الْإِسْلَامِ."
      }
    }
  },
  {
    "id": 6057,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Parmi les quatre grands anges cités dans Zâd al-Muslim, lequel est chargé de souffler dans la Trompe ?",
    "options": [
      "Isrâfîl (paix sur lui)",
      "Jibrîl (paix sur lui)",
      "Mîkâ'îl (paix sur lui)",
      "Mâlik (paix sur lui)"
    ],
    "reponse_correcte": "Isrâfîl (paix sur lui)",
    "explication": "Jibrîl transmet la révélation, Mîkâ'îl est chargé de la pluie et de la subsistance, Isrâfîl de la Trompe, et l'Ange de la mort de recueillir les âmes.",
    "hint": "Ce n'est ni l'ange de la révélation ni celui de la pluie.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q22",
    "tags": [
      "anges",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمَلَكُ الْمُوَكَّلُ بِالنَّفْخِ فِي الصُّورِ؟",
        "options": [
          "إِسْرَافِيلُ عَلَيْهِ السَّلَامُ",
          "جِبْرِيلُ عَلَيْهِ السَّلَامُ",
          "مِيكَائِيلُ عَلَيْهِ السَّلَامُ",
          "مَالِكٌ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "إِسْرَافِيلُ عَلَيْهِ السَّلَامُ",
        "explication": "جِبْرِيلُ مُوَكَّلٌ بِالْوَحْيِ، وَمِيكَائِيلُ بِالْقَطْرِ، وَإِسْرَافِيلُ بِالصُّورِ، وَمَلَكُ الْمَوْتِ بِقَبْضِ الْأَرْوَاحِ.",
        "hint": "لَيْسَ مَلَكَ الْوَحْيِ وَلَا مَلَكَ الْمَطَرِ."
      }
    }
  },
  {
    "id": 6058,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel prophète est né miraculeusement sans père par la volonté d'Allah ?",
    "options": [
      "'Îsâ ibn Maryam (paix sur lui)",
      "Yahyâ (paix sur lui)",
      "Ismâ'îl (paix sur lui)",
      "Yûsuf (paix sur lui)"
    ],
    "reponse_correcte": "'Îsâ ibn Maryam (paix sur lui)",
    "explication": "Allah créa 'Îsâ (paix sur lui) d'une parole adressée à la vierge véridique Maryam, tout comme Il créa Âdam sans père ni mère.",
    "hint": "Sa mère est la seule femme nommée explicitement dans le Coran.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q28",
    "tags": [
      "isa",
      "prophetes"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ النَّبِيُّ الَّذِي وُلِدَ بِدُونِ أَبٍ؟",
        "options": [
          "عِيسَى ابْنُ مَرْيَمَ عَلَيْهِ السَّلَامُ",
          "يَحْيَى عَلَيْهِ السَّلَامُ",
          "إِسْمَاعِيلُ عَلَيْهِ السَّلَامُ",
          "يُوسُفُ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "عِيسَى ابْنُ مَرْيَمَ عَلَيْهِ السَّلَامُ",
        "explication": "خَلَقَ اللَّهُ عِيسَى عَلَيْهِ السَّلَامُ مِنْ أُمٍّ بِلَا أَبٍ آيَةً لِلْعَالَمِينَ.",
        "hint": "أُمُّهُ هِيَ الْمَرْأَةُ الصِّدِّيقَةُ مَرْيَمُ."
      }
    }
  },
  {
    "id": 6059,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel prophète est appelé « Abû al-Anbiyâ' » (le père des prophètes) et « Khalîlullâh » (l'ami intime d'Allah) ?",
    "options": [
      "Ibrâhîm (paix sur lui)",
      "Nûh (paix sur lui)",
      "Âdam (paix sur lui)",
      "Dâwûd (paix sur lui)"
    ],
    "reponse_correcte": "Ibrâhîm (paix sur lui)",
    "explication": "De la descendance d'Ibrâhîm (paix sur lui) — par Ismâ'îl et Ishâq — sont issus la majorité des prophètes suivants, dont Mouhammad ﷺ.",
    "hint": "Il rebâtit la Ka'ba avec son fils Ismâ'îl.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q30",
    "tags": [
      "ibrahim",
      "prophetes"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ أَبُو الْأَنْبِيَاءِ وَخَلِيلُ اللَّهِ؟",
        "options": [
          "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
          "نُوحٌ عَلَيْهِ السَّلَامُ",
          "آدَمُ عَلَيْهِ السَّلَامُ",
          "دَاوُدُ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
        "explication": "اتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا وَجَعَلَ فِي ذُرِّيَّتِهِ النُّبُوَّةَ وَالْكِتَابَ.",
        "hint": "بَنَى الْكَعْبَةَ مَعَ ابْنِهِ إِسْمَاعِيلَ."
      }
    }
  },
  {
    "id": 6060,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel nom est donné au Coran dans la liste des Livres révélés dans Zâd al-Muslim pour souligner qu'il discerne le vrai du faux ?",
    "options": [
      "Al-Furqân",
      "Az-Zabûr",
      "At-Tawrât",
      "Al-Injîl"
    ],
    "reponse_correcte": "Al-Furqân",
    "explication": "Al-Furqân signifie « le Discernement » entre la vérité et l'erreur ; c'est aussi le nom de la sourate 25 du Noble Coran.",
    "hint": "C'est également le nom de la 25e sourate du Coran.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q24",
    "tags": [
      "livres",
      "coran"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الِاسْمُ الَّذِي يُطْلَقُ عَلَى الْقُرْآنِ لِأَنَّهُ يُفَرِّقُ بَيْنَ الْحَقِّ وَالْبَاطِلِ؟",
        "options": [
          "الْفُرْقَانُ",
          "الزَّبُورُ",
          "التَّوْرَاةُ",
          "الْإِنْجِيلُ"
        ],
        "reponse_correcte": "الْفُرْقَانُ",
        "explication": "الْفُرْقَانُ مِنْ أَسْمَاءِ الْقُرْآنِ الْكَرِيمِ لِأَنَّهُ يَفْرِقُ بَيْنَ الْحَقِّ وَالْبَاطِلِ.",
        "hint": "هُوَ أَيْضًا اسْمُ السُّورَةِ رَقْمِ ٢٥ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6061,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Lequel de ces Plus Beaux Noms d'Allah signifie « Le Très Saint / Pur de tout défaut » ?",
    "options": [
      "Al-Quddûs",
      "As-Samî'",
      "Al-Basîr",
      "Al-'Alîm"
    ],
    "reponse_correcte": "Al-Quddûs",
    "explication": "As-Samî' signifie L'Audient, Al-Basîr Le Clairvoyant, Al-'Alîm L'Omniscient et Al-Quddûs Le Très Saint, exempt de toute imperfection.",
    "hint": "Il vient de la racine Q-D-S (sainteté et pureté absolue).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q20",
    "tags": [
      "noms_allah",
      "aqidah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "أَيُّ أَسْمَاءِ اللَّهِ الْحُسْنَى يَعْنِي الْمُنَزَّهَ عَنْ كُلِّ نَقْصٍ وَعَيْبٍ؟",
        "options": [
          "الْقُدُّوسُ",
          "السَّمِيعُ",
          "الْبَصِيرُ",
          "الْعَلِيمُ"
        ],
        "reponse_correcte": "الْقُدُّوسُ",
        "explication": "الْقُدُّوسُ هُوَ الْمُطَهَّرُ الْمُنَزَّهُ عَنْ كُلِّ نَقْصٍ وَالْمُعَظَّمُ بِصِفَاتِ الْكَمَالِ.",
        "hint": "مُشْتَقٌّ مِنَ التَّقْدِيسِ وَالتَّنْزِيهِ."
      }
    }
  },
  {
    "id": 6062,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "En jurisprudence, qu'est-ce que l'Istinjâ' ?",
    "options": [
      "La purification des deux orifices naturels avec de l'eau après les besoins",
      "Le lavage des pieds avant d'entrer à la mosquée",
      "L'essuyage des chaussons en cuir",
      "Le rinçage de la bouche avant de manger"
    ],
    "reponse_correcte": "La purification des deux orifices naturels avec de l'eau après les besoins",
    "explication": "L'Istinjâ' consiste à se laver avec de l'eau pure après avoir fait ses besoins, avant d'accomplir les ablutions (Woudhou).",
    "hint": "C'est une étape d'hygiène préalable au Woudhou.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q35",
    "tags": [
      "tahara",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ الِاسْتِنْجَاءُ؟",
        "options": [
          "تَطْهِيرُ السَّبِيلَيْنِ بِالْمَاءِ",
          "غَسْلُ الْقَدَمَيْنِ قَبْلَ دُخُولِ الْمَسْجِدِ",
          "الْمَسْحُ عَلَى الْخُفَّيْنِ",
          "الْمَضْمَضَةُ بَعْدَ الطَّعَامِ"
        ],
        "reponse_correcte": "تَطْهِيرُ السَّبِيلَيْنِ بِالْمَاءِ",
        "explication": "الِاسْتِنْجَاءُ هُوَ إِزَالَةُ الْخَارِجِ مِنَ السَّبِيلَيْنِ بِالْمَاءِ الطَّاهِرِ.",
        "hint": "خُطْوَةٌ لِلطَّهَارَةِ تَسْبِقُ الْوُضُوءَ."
      }
    }
  },
  {
    "id": 6063,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Lequel de ces éléments figure parmi les annulatifs du Woudhou selon Zâd al-Muslim ?",
    "options": [
      "La perte de conscience par le sommeil profond",
      "Boire un verre d'eau fraîche",
      "Réciter le Coran à voix haute",
      "Sourire pendant la conversation"
    ],
    "reponse_correcte": "La perte de conscience par le sommeil profond",
    "explication": "Les annulatifs du Woudhou incluent ce qui sort des deux voies, la perte de conscience par le sommeil profond, et le contact direct des parties intimes.",
    "hint": "Lorsque la vigilance disparaît complètement, les ablutions sont rompues.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q37",
    "tags": [
      "woudou",
      "annulatifs"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ أَحَدُ نَوَاقِضِ الْوُضُوءِ؟",
        "options": [
          "زَوَالُ الْعَقْلِ بِنَوْمٍ أَوْ إِغْمَاءٍ",
          "شُرْبُ الْمَاءِ الْبَارِدِ",
          "قِرَاءَةُ الْقُرْآنِ جَهْرًا",
          "التَّبَسُّمُ فِي الْحَدِيثِ"
        ],
        "reponse_correcte": "زَوَالُ الْعَقْلِ بِنَوْمٍ أَوْ إِغْمَاءٍ",
        "explication": "مِنْ نَوَاقِضِ الْوُضُوءِ زَوَالُ الْعَقْلِ بِالنَّوْمِ الْمُسْتَغْرِقِ وَالْخَارِجُ مِنَ السَّبِيلَيْنِ.",
        "hint": "يَزُولُ فِيهِ الْإِدْرَاكُ وَالْوَعْيُ."
      }
    }
  },
  {
    "id": 6064,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Parmi ces éléments, lequel est une condition de validité (chart) préalable à la prière ?",
    "options": [
      "L'entrée de l'heure prescrite et l'orientation vers la Qibla",
      "Lire sourate Al-Kahf avant chaque prière",
      "Porter exclusivement des vêtements blancs",
      "Prier obligatoirement en voyage"
    ],
    "reponse_correcte": "L'entrée de l'heure prescrite et l'orientation vers la Qibla",
    "explication": "Les 8 conditions de la prière incluent l'Islam, la raison, le discernement, la pureté rituelle et matérielle, la couverture de la 'awra, l'entrée de l'heure et la Qibla.",
    "hint": "On ne peut pas prier Dhohr avant son heure ni tourner le dos à la Ka'ba sans excuse.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q41",
    "tags": [
      "salat",
      "conditions"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الَّذِي يُعَدُّ مِنْ شُرُوطِ صِحَّةِ الصَّلَاةِ؟",
        "options": [
          "دُخُولُ الْوَقْتِ وَاسْتِقْبَالُ الْقِبْلَةِ",
          "قِرَاءَةُ سُورَةِ الْكَهْفِ قَبْلَ كُلِّ صَلَاةٍ",
          "لُبْسُ الثِّيَابِ الْبَيْضَاءِ وُجُوبًا",
          "الصَّلَاةُ فِي السَّفَرِ فَقَطْ"
        ],
        "reponse_correcte": "دُخُولُ الْوَقْتِ وَاسْتِقْبَالُ الْقِبْلَةِ",
        "explication": "مِنْ شُرُوطِ الصَّلَاةِ الطَّهَارَةُ وَسَتْرُ الْعَوْرَةِ وَدُخُولُ الْوَقْتِ وَاسْتِقْبَالُ الْقِبْلَةِ.",
        "hint": "يَتَعَلَّقُ بِالزَّمَانِ وَالِاتِّجَاهِ نَحْوَ الْكَعْبَةِ."
      }
    }
  },
  {
    "id": 6065,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Lequel de ces actes annule la prière s'il est accompli volontairement ?",
    "options": [
      "Manger, boire ou parler volontairement pendant la prière",
      "Fermer les yeux un instant par recueillement",
      "Réciter une sourate courte après Al-Fâtiha",
      "Lever les mains lors du Takbîr d'entrée"
    ],
    "reponse_correcte": "Manger, boire ou parler volontairement pendant la prière",
    "explication": "La prière est annulée par le fait de manger, boire, parler volontairement, multiplier les mouvements inutiles, délaisser un pilier ou perdre ses ablutions.",
    "hint": "Ces actes brisent l'état de recueillement rituel exigé en prière.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q45",
    "tags": [
      "salat",
      "annulatifs"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الَّذِي يُبْطِلُ الصَّلَاةَ إِذَا فُعِلَ عَمْدًا؟",
        "options": [
          "الْأَكْلُ أَوِ الشُّرْبُ أَوِ الْكَلَامُ عَمْدًا",
          "قِرَاءَةُ سُورَةٍ قَصِيرَةٍ بَعْدَ الْفَاتِحَةِ",
          "رَفْعُ الْيَدَيْنِ عِنْدَ تَكْبِيرَةِ الْإِحْرَامِ",
          "الدُّعَاءُ فِي السُّجُودِ"
        ],
        "reponse_correcte": "الْأَكْلُ أَوِ الشُّرْبُ أَوِ الْكَلَامُ عَمْدًا",
        "explication": "مُبْطِلَاتُ الصَّلَاةِ تَشْمَلُ الْأَكْلَ وَالشُّرْبَ وَالْكَلَامَ عَمْدًا وَانْتِقَاضَ الْوُضُوءِ وَتَرْكَ الرُّكْنِ.",
        "hint": "أَفْعَالٌ تُنَافِي هَيْئَةَ الصَّلَاةِ وَحُرْمَتَهَا."
      }
    }
  },
  {
    "id": 6066,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Comment se définit le Hajj (pèlerinage) en Islam ?",
    "options": [
      "Se rendre à La Mecque avec l'intention d'accomplir les rites du pèlerinage",
      "Voyager vers n'importe quelle grande ville",
      "Offrir un repas uniquement le vendredi",
      "Jeûner dix jours au mois de Mouharram"
    ],
    "reponse_correcte": "Se rendre à La Mecque avec l'intention d'accomplir les rites du pèlerinage",
    "explication": "Le Hajj est le cinquième pilier de l'Islam ; il consiste à se rendre à La Mecque et aux lieux saints (Arafat, Muzdalifa, Mina) pour accomplir les rites prescrits.",
    "hint": "Sa destination unique est La Mecque honorée.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q48",
    "tags": [
      "hajj",
      "fiqh"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَعْرِيفُ الْحَجِّ؟",
        "options": [
          "قَصْدُ مَكَّةَ لِأَدَاءِ أَعْمَالِ الْحَجِّ",
          "السَّفَرُ إِلَى أَيِّ بَلَدٍ لِلنُّزْهَةِ",
          "إِطْعَامُ الطَّعَامِ يَوْمَ الْجُمُعَةِ فَقَطْ",
          "صِيَامُ عَشَرَةِ أَيَّامٍ مِنْ مُحَرَّمٍ"
        ],
        "reponse_correcte": "قَصْدُ مَكَّةَ لِأَدَاءِ أَعْمَالِ الْحَجِّ",
        "explication": "الْحَجُّ هُوَ قَصْدُ الْبَيْتِ الْحَرَامِ بِمَكَّةَ لِأَدَاءِ الْمَنَاسِكِ الْمَخْصُوصَةِ فِي أَوْقَاتٍ مَعْلُومَةٍ.",
        "hint": "وِجْهَتُهُ الْوَحِيدَةُ مَكَّةُ الْمُكَرَّمَةُ."
      }
    }
  },
  {
    "id": 6067,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui fut la toute première épouse du Prophète Mouhammad ﷺ et la première personne à croire en son message ?",
    "options": [
      "Khadîja bint Khuwaylid (RTA)",
      "'Â'icha bint Abî Bakr (RTA)",
      "Hafsa bint 'Umar (RTA)",
      "Umm Salama (RTA)"
    ],
    "reponse_correcte": "Khadîja bint Khuwaylid (RTA)",
    "explication": "Khadîja (RTA) soutint le Prophète ﷺ dès l'instant de la révélation dans la grotte de Hirâ', de sa personne, de ses paroles et de ses biens.",
    "hint": "Elle était surnommée At-Tâhira (La Pure) et fut mère de Fâtima.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q57",
    "tags": [
      "khadija",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هِيَ الزَّوْجَةُ الْأُولَى لِلنَّبِيِّ ﷺ وَأَوَّلُ مَنْ آمَنَ بِهِ؟",
        "options": [
          "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ رَضِيَ اللَّهُ عَنْهَا",
          "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ رَضِيَ اللَّهُ عَنْهَا",
          "حَفْصَةُ بِنْتُ عُمَرَ رَضِيَ اللَّهُ عَنْهَا",
          "أُمُّ سَلَمَةَ رَضِيَ اللَّهُ عَنْهَا"
        ],
        "reponse_correcte": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ رَضِيَ اللَّهُ عَنْهَا",
        "explication": "صَدَّقَتْهُ خَدِيجَةُ رَضِيَ اللَّهُ عَنْهَا وَوَاسَتْهُ بِنَفْسِهَا وَمَالِهَا عِنْدَمَا نَزَلَ عَلَيْهِ الْوَحْيُ.",
        "hint": "أُمُّ فَاطِمَةَ الزَّهْرَاءِ رَضِيَ اللَّهُ عَنْهَا."
      }
    }
  },
  {
    "id": 6068,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Combien d'enfants le Prophète Mouhammad ﷺ eut-il au total (garçons et filles) ?",
    "options": [
      "Sept enfants : trois garçons et quatre filles",
      "Quatre enfants : deux garçons et deux filles",
      "Cinq enfants : un garçon et quatre filles",
      "Neuf enfants : cinq garçons et quatre filles"
    ],
    "reponse_correcte": "Sept enfants : trois garçons et quatre filles",
    "explication": "Les garçons sont Al-Qâsim, 'Abd Allâh et Ibrâhîm ; les filles sont Zaynab, Ruqayya, Umm Kulthûm et Fâtima.",
    "hint": "Trois garçons et quatre filles.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q58",
    "tags": [
      "famille_prophete",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَوْلَادِ النَّبِيِّ ﷺ ذُكُورًا وَإِنَاثًا؟",
        "options": [
          "سَبْعَةُ أَوْلَادٍ: ثَلَاثَةُ ذُكُورٍ وَأَرْبَعُ إِنَاثٍ",
          "أَرْبَعَةُ أَوْلَادٍ: ذَكَرَانِ وَبِنْتَانِ",
          "خَمْسَةُ أَوْلَادٍ: ذَكَرٌ وَأَرْبَعُ إِنَاثٍ",
          "تِسْعَةُ أَوْلَادٍ: خَمْسَةُ ذُكُورٍ وَأَرْبَعُ إِنَاثٍ"
        ],
        "reponse_correcte": "سَبْعَةُ أَوْلَادٍ: ثَلَاثَةُ ذُكُورٍ وَأَرْبَعُ إِنَاثٍ",
        "explication": "الذُّكُورُ: الْقَاسِمُ وَعَبْدُ اللَّهِ وَإِبْرَاهِيمُ، وَالْإِنَاثُ: زَيْنَبُ وَرُقَيَّةُ وَأُمُّ كُلْثُومٍ وَفَاطِمَةُ.",
        "hint": "ثَلَاثَةٌ مِنَ الذُّكُورِ وَأَرْبَعٌ مِنَ الْإِنَاثِ."
      }
    }
  },
  {
    "id": 6069,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Combien de pèlerinages (Hajj) le Prophète ﷺ a-t-il accomplis après l'Hégire ?",
    "options": [
      "Un seul pèlerinage : le Pèlerinage d'Adieu (Hajjat al-Wadâ')",
      "Trois pèlerinages",
      "Cinq pèlerinages",
      "Dix pèlerinages"
    ],
    "reponse_correcte": "Un seul pèlerinage : le Pèlerinage d'Adieu (Hajjat al-Wadâ')",
    "explication": "Le Prophète ﷺ accomplit un seul Hajj en l'an 10 de l'Hégire (Hajjat al-Wadâ'), au cours duquel fut révélée la complétude de la religion.",
    "hint": "Il eut lieu en l'an 10 de l'Hégire et porte le nom d'« adieu ».",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q67",
    "tags": [
      "hajj",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ حَجَّةً حَجَّ النَّبِيُّ ﷺ بَعْدَ الْهِجْرَةِ؟",
        "options": [
          "حَجَّةٌ وَاحِدَةٌ وَهِيَ حَجَّةُ الْوَدَاعِ",
          "ثَلَاثُ حَجَّاتٍ",
          "خَمْسُ حَجَّاتٍ",
          "عَشْرُ حَجَّاتٍ"
        ],
        "reponse_correcte": "حَجَّةٌ وَاحِدَةٌ وَهِيَ حَجَّةُ الْوَدَاعِ",
        "explication": "حَجَّ النَّبِيُّ ﷺ حَجَّةً وَاحِدَةً فِي السَّنَةِ الْعَاشِرَةِ لِلْهِجْرَةِ وَعُرِفَتْ بِحَجَّةِ الْوَدَاعِ.",
        "hint": "سُمِّيَتْ بِحَجَّةِ الْوَدَاعِ فِي السَّنَةِ الْعَاشِرَةِ لِلْهِجْرَةِ."
      }
    }
  },
  {
    "id": 6070,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "En quelle année eut lieu la conquête pacifique de La Mecque (Fath Makka) ?",
    "options": [
      "En l'an 8 de l'Hégire",
      "En l'an 2 de l'Hégire",
      "En l'an 5 de l'Hégire",
      "En l'an 10 de l'Hégire"
    ],
    "reponse_correcte": "En l'an 8 de l'Hégire",
    "explication": "Badr eut lieu en l'an 2 H, Uhud en l'an 3 H, Al-Ahzâb en l'an 5 H, Khaybar en l'an 7 H et la conquête de La Mecque en l'an 8 H.",
    "hint": "Elle eut lieu deux ans avant le Pèlerinage d'Adieu.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q72",
    "tags": [
      "batailles",
      "sirah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سَنَةٍ وَقَعَ فَتْحُ مَكَّةَ؟",
        "options": [
          "فِي السَّنَةِ الثَّامِنَةِ لِلْهِجْرَةِ",
          "فِي السَّنَةِ الثَّانِيَةِ لِلْهِجْرَةِ",
          "فِي السَّنَةِ الْخَامِسَةِ لِلْهِجْرَةِ",
          "فِي السَّنَةِ الْعَاشِرَةِ لِلْهِجْرَةِ"
        ],
        "reponse_correcte": "فِي السَّنَةِ الثَّامِنَةِ لِلْهِجْرَةِ",
        "explication": "وَقَعَ فَتْحُ مَكَّةَ فِي شَهْرِ رَمَضَانَ مِنَ السَّنَةِ الثَّامِنَةِ لِلْهِجْرَةِ وَعَفَا النَّبِيُّ ﷺ عَنْ أَهْلِهَا.",
        "hint": "قَبْلَ حَجَّةِ الْوَدَاعِ بِسَنَتَيْنِ."
      }
    }
  },
  {
    "id": 6071,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui fut le premier et célèbre muezzin du Prophète Mouhammad ﷺ ?",
    "options": [
      "Bilâl ibn Rabâh (RTA)",
      "Salmân al-Fârisî (RTA)",
      "Abû Dharr al-Ghifârî (RTA)",
      "'Ammâr ibn Yâsir (RTA)"
    ],
    "reponse_correcte": "Bilâl ibn Rabâh (RTA)",
    "explication": "Bilâl ibn Rabâh (RTA), à la voix claire et émouvante, appelait les croyants à la prière à Médine et monta même sur la Ka'ba lors de la conquête de La Mecque.",
    "hint": "Il résista héroïquement aux persécutions à La Mecque en répétant « Ahad, Ahad ! ».",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q81",
    "tags": [
      "bilal",
      "compagnons"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ مُؤَذِّنُ النَّبِيِّ ﷺ؟",
        "options": [
          "بِلَالُ بْنُ رَبَاحٍ رَضِيَ اللَّهُ عَنْهُ",
          "سَلْمَانُ الْفَارِسِيُّ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو ذَرٍّ الْغِفَارِيُّ رَضِيَ اللَّهُ عَنْهُ",
          "عَمَّارُ بْنُ يَاسِرٍ رَضِيَ اللَّهُ عَنْهُ"
        ],
        "reponse_correcte": "بِلَالُ بْنُ رَبَاحٍ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "كَانَ بِلَالُ بْنُ رَبَاحٍ رَضِيَ اللَّهُ عَنْهُ مُؤَذِّنَ رَسُولِ اللَّهِ ﷺ وَرَمْزًا لِلثَّبَاتِ وَالصَّبْرِ.",
        "hint": "صَبَرَ عَلَى الْأَذَى بِمَكَّةَ وَهُوَ يَقُولُ: أَحَدٌ أَحَدٌ."
      }
    }
  },
  {
    "id": 6072,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Quelle courte formule bénie dit-on avant de commencer les ablutions et avant de manger ?",
    "options": [
      "« Bismillâh » (Au nom d'Allah)",
      "« Ghufrânaka »",
      "« Subhâna rabbiya l-'azîm »",
      "« Sami'allâhu liman hamidah »"
    ],
    "reponse_correcte": "« Bismillâh » (Au nom d'Allah)",
    "explication": "Prononcer « Bismillâh » avant de manger, de boire ou de faire ses ablutions attire la bénédiction (baraka) d'Allah et éloigne Satan.",
    "hint": "C'est le premier mot par lequel commencent presque toutes les sourates.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q86 & Q97",
    "tags": [
      "adhkar",
      "bismillah"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ قَبْلَ الْوُضُوءِ وَقَبْلَ الطَّعَامِ؟",
        "options": [
          "بِسْمِ اللَّهِ",
          "غُفْرَانَكَ",
          "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ"
        ],
        "reponse_correcte": "بِسْمِ اللَّهِ",
        "explication": "التَّسْمِيَةُ (بِسْمِ اللَّهِ) سُنَّةٌ قَبْلَ الطَّعَامِ وَالْوُضُوءِ لِتَحْصِيلِ الْبَرَكَةِ.",
        "hint": "تَبْدَأُ بِهَا مُعْظَمُ السُّوَرِ وَالْأَعْمَالِ الطَّيِّبَةِ."
      }
    }
  },
  {
    "id": 6073,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Que dit le fidèle en se relevant de l'inclinaison (Rukû') ?",
    "options": [
      "« Sami'allâhu liman hamidah, rabbanâ wa laka l-hamd... »",
      "« Subhâna rabbiya l-a'lâ »",
      "« Rabbighfir lî »",
      "« Allâhumma salli 'alâ Mouhammad »"
    ],
    "reponse_correcte": "« Sami'allâhu liman hamidah, rabbanâ wa laka l-hamd... »",
    "explication": "Signification : « Allah entend celui qui Le loue ; notre Seigneur, à Toi la louange, plein les cieux et plein la terre. »",
    "hint": "Cette formule loue Allah qui entend celui qui Le remercie.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q91",
    "tags": [
      "adhkar",
      "salat"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ بَعْدَ الرَّفْعِ مِنَ الرُّكُوعِ؟",
        "options": [
          "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ...",
          "سُبْحَانَ رَبِّيَ الْأَعْلَى",
          "رَبِّ اغْفِرْ لِي",
          "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ"
        ],
        "reponse_correcte": "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ...",
        "explication": "يَقُولُ الْمُصَلِّي عِنْدَ الرَّفْعِ مِنَ الرُّكُوعِ: سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ.",
        "hint": "ذِكْرٌ يَحْمَدُ اللَّهَ فِيهِ الْمُصَلِّي بَعْدَ الِاعْتِدَالِ."
      }
    }
  },
  {
    "id": 6074,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quelle invocation demande-t-on assis entre les deux prosternations ?",
    "options": [
      "« Rabbighfir lî, warhamnî, wajburnî, warfa'nî, warzuqnî, wahdinî »",
      "« At-tahiyyâtu lillâh »",
      "« Bismillâhi tawakkaltu 'alallâh »",
      "« Allâhumma sayyiban nâfi'an »"
    ],
    "reponse_correcte": "« Rabbighfir lî, warhamnî, wajburnî, warfa'nî, warzuqnî, wahdinî »",
    "explication": "On y demande à Allah le pardon, la miséricorde, la réparation, l'élévation, la subsistance et la guidée.",
    "hint": "Elle commence par « Seigneur, pardonne-moi ! » (Rabbighfir lî).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q93",
    "tags": [
      "adhkar",
      "salat"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ بَيْنَ السَّجْدَتَيْنِ؟",
        "options": [
          "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي",
          "التَّحِيَّاتُ لِلَّهِ",
          "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
          "اللَّهُمَّ صَيِّبًا نَافِعًا"
        ],
        "reponse_correcte": "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي",
        "explication": "يَسْأَلُ الْمُصَلِّي بَيْنَ السَّجْدَتَيْنِ رَبَّهُ الْمَغْفِرَةَ وَالرَّحْمَةَ وَالرِّزْقَ وَالْهِدَايَةَ.",
        "hint": "تَبْدَأُ بِطَلَبِ الْمَغْفِرَةِ: رَبِّ اغْفِرْ لِي."
      }
    }
  },
  {
    "id": 6075,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Que dit le musulman en entrant chez lui, avant de saluer sa famille ?",
    "options": [
      "« Bismillâhi walajnâ, wa bismillâhi kharajnâ, wa 'alâ rabbinâ tawakkalnâ »",
      "« Ghufrânaka »",
      "« Subhâna rabbiya l-'azîm »",
      "« Allâhumma iftah lî abwâba rahmatik »"
    ],
    "reponse_correcte": "« Bismillâhi walajnâ, wa bismillâhi kharajnâ, wa 'alâ rabbinâ tawakkalnâ »",
    "explication": "« Au nom d'Allah nous entrons, au nom d'Allah nous sortons, et en notre Seigneur nous plaçons notre confiance », puis on passe le Salâm à sa famille.",
    "hint": "Elle mentionne le fait d'entrer (walajnâ) et de sortir (kharajnâ).",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q96",
    "tags": [
      "adhkar",
      "maison"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ دُعَاءُ دُخُولِ الْمَنْزِلِ؟",
        "options": [
          "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا",
          "غُفْرَانَكَ",
          "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
          "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ"
        ],
        "reponse_correcte": "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا",
        "explication": "يُذْكَرُ اللَّهُ عِنْدَ دُخُولِ الْبَيْتِ ثُمَّ يُلْقِي الْمُسْلِمُ السَّلَامَ عَلَى أَهْلِهِ.",
        "hint": "يُذْكَرُ فِيهَا الدُّخُولُ (وَلَجْنَا) وَالْخُرُوجُ (خَرَجْنَا)."
      }
    }
  },
  {
    "id": 6076,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quel verset coranique récite-t-on dans l'invocation du voyageur en montant dans un véhicule ?",
    "options": [
      "« Subhâna lladhî sakhkhara lanâ hâdhâ wa mâ kunnâ lahû muqrinîn... » (Az-Zukhruf : 13-14)",
      "« Qul huwallâhu ahad »",
      "« Bismika Allâhumma amûtu wa ahyâ »",
      "« Mutirnâ bi-fadlillâhi wa rahmatih »"
    ],
    "reponse_correcte": "« Subhâna lladhî sakhkhara lanâ hâdhâ wa mâ kunnâ lahû muqrinîn... » (Az-Zukhruf : 13-14)",
    "explication": "Après Bismillâh et Al-hamdu lillâh, on glorifie Celui qui a mis ce moyen de transport à notre service et on se rappelle notre retour vers Allah.",
    "hint": "Ce verset provient de sourate Az-Zukhruf et parle d'assujettir la monture.",
    "source": "Zâd al-Muslim (Dr. 'Abd ach-Chakûr Mu'allim)",
    "reference": "Zâd al-Muslim Q104",
    "tags": [
      "adhkar",
      "voyage"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هُوَ دُعَاءُ الرُّكُوبِ؟",
        "options": [
          "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
          "قُلْ هُوَ اللَّهُ أَحَدٌ",
          "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
          "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ"
        ],
        "reponse_correcte": "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
        "explication": "هُوَ ذِكْرٌ قُرْآنِيٌّ مِنْ سُورَةِ الزُّخْرُفِ يَشْكُرُ فِيهِ الْمُسْلِمُ اللَّهَ عَلَى تَسْخِيرِ الْمَرْكَبِ.",
        "hint": "آيَةٌ مِنْ سُورَةِ الزُّخْرُفِ."
      }
    }
  },
  {
    "id": 6077,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Comment appelle-t-on parfois la sourate Tâ-Hâ selon les savants ?",
    "options": [
      "La sourate d'al-Kalîm (Mûsâ, l'interlocuteur d'Allah)",
      "La sourate de la Caverne",
      "La sourate des Anges",
      "La sourate du Fer"
    ],
    "reponse_correcte": "La sourate d'al-Kalîm (Mûsâ, l'interlocuteur d'Allah)",
    "explication": "Sourate Tâ-Hâ relate en détail l'histoire de Mûsâ (Kalîmullâh) et sa vocation prophétique.",
    "hint": "Cette sourate commence par une longue conversation entre Allah et Mûsâ.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q1",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَ تُسَمَّى سُورَةُ طَهَ؟",
        "options": [
          "سُورَةُ الْكَلِيمِ",
          "سُورَةُ الْكَهْفِ",
          "سُورَةُ الْمَلَائِكَةِ",
          "سُورَةُ الْحَدِيدِ"
        ],
        "reponse_correcte": "سُورَةُ الْكَلِيمِ",
        "explication": "تُسَمَّى سُورَةُ طَهَ بِسُورَةِ الْكَلِيمِ لِاشْتِمَالِهَا عَلَى قِصَّةِ كَلِيمِ اللَّهِ مُوسَى عَلَيْهِ السَّلَامُ.",
        "hint": "نِسْبَةً إِلَى لَقَبِ النَّبِيِّ مُوسَى عَلَيْهِ السَّلَامُ."
      }
    }
  },
  {
    "id": 6078,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle courte sourate équivaut en mérite de lecture à mille versets selon certaines traditions rapportées ?",
    "options": [
      "Sourate At-Takâthur",
      "Sourate Al-Fîl",
      "Sourate Quraych",
      "Sourate Al-Masad"
    ],
    "reponse_correcte": "Sourate At-Takâthur",
    "explication": "Sourate At-Takâthur (« La course aux richesses ») rappelle avec force la réalité de l'au-delà et de la reddition des comptes.",
    "hint": "Elle commence par « Al-hâkumu t-takâthur ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q5",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي تَعْدِلُ قِرَاءَتُهَا أَلْفَ آيَةٍ؟",
        "options": [
          "سُورَةُ التَّكَاثُرِ",
          "سُورَةُ الْفِيلِ",
          "سُورَةُ قُرَيْشٍ",
          "سُورَةُ الْمَسَدِ"
        ],
        "reponse_correcte": "سُورَةُ التَّكَاثُرِ",
        "explication": "سُورَةُ التَّكَاثُرِ تَبْدَأُ بِتَحْذِيرِ الْإِنْسَانِ مِنَ التَّلَاهِي بِزِينَةِ الدُّنْيَا حَتَّى زِيَارَةِ الْمَقَابِرِ.",
        "hint": "تَبْدَأُ بِقَوْلِهِ تَعَالَى: ﴿ أَلْهَاكُمُ التَّكَاثُرُ ﴾."
      }
    }
  },
  {
    "id": 6079,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien de sourates du Noble Coran commencent par une interrogation ?",
    "options": [
      "Six sourates",
      "Deux sourates",
      "Douze sourates",
      "Vingt sourates"
    ],
    "reponse_correcte": "Six sourates",
    "explication": "Six sourates débutent par une forme interrogative (comme Al-Insân, Al-Ghâchiya, Ach-Charh, Al-Fîl, Al-Mâ'ûn, An-Naba').",
    "hint": "C'est le même nombre que les piliers de la foi.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q6",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ سُورَةً مِنْ سُوَرِ الْقُرْآنِ تَبْدَأُ بِالِاسْتِفْهَامِ؟",
        "options": [
          "سِتُّ سُوَرٍ",
          "سُورَتَانِ",
          "اثْنَتَا عَشْرَةَ سُورَةً",
          "عِشْرُونَ سُورَةً"
        ],
        "reponse_correcte": "سِتُّ سُوَرٍ",
        "explication": "سِتُّ سُوَرٍ تَبْدَأُ بِالِاسْتِفْهَامِ مِنْهَا النَّبَأُ وَالْغَاشِيَةُ وَالشَّرْحُ وَالْفِيلُ وَالْمَاعُونُ.",
        "hint": "عَدَدُهَا مِثْلُ أَرْكَانِ الْإِيمَانِ."
      }
    }
  },
  {
    "id": 6080,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Sous quel surnom protecteur appelle-t-on parfois la sourate Al-Kahf ?",
    "options": [
      "Al-Hâ'ila (celle qui s'interpose entre son lecteur et le Feu)",
      "At-Tawdî' (les adieux)",
      "Al-Fâdiha (la dévoilante)",
      "Qistâs al-Qur'ân (la balance)"
    ],
    "reponse_correcte": "Al-Hâ'ila (celle qui s'interpose entre son lecteur et le Feu)",
    "explication": "Elle est nommée Al-Hâ'ila car elle protège son lecteur du Dajjâl et s'interpose entre lui et le Feu.",
    "hint": "Son nom vient du verbe « hâla » qui signifie s'interposer comme un bouclier.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q9-Q10",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَاذَا تُسَمَّى سُورَةُ الْكَهْفِ؟",
        "options": [
          "الْحَائِلَةُ",
          "سُورَةُ التَّوْدِيعِ",
          "الْفَاضِحَةُ",
          "قِسْطَاسُ الْقُرْآنِ"
        ],
        "reponse_correcte": "الْحَائِلَةُ",
        "explication": "سُمِّيَتْ سُورَةُ الْكَهْفِ بِالْحَائِلَةِ لِأَنَّهَا تَحُولُ بَيْنَ قَارِئِهَا وَبَيْنَ النَّارِ.",
        "hint": "مُشْتَقٌّ مِنْ أَنَّهَا تَحُولُ بَيْنَ قَارِئِهَا وَالنَّارِ."
      }
    }
  },
  {
    "id": 6081,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "De quel prophète ses frères disaient-ils à tort : « Un sien frère a déjà volé auparavant » [Yûsuf : 77] ?",
    "options": [
      "Yûsuf (Joseph, paix sur lui)",
      "Mûsâ (paix sur lui)",
      "Hârûn (paix sur lui)",
      "Ismâ'îl (paix sur lui)"
    ],
    "reponse_correcte": "Yûsuf (Joseph, paix sur lui)",
    "explication": "Lorsque la coupe royale fut trouvée dans les bagages de Binyâmîn, ses demi-frères firent allusion à Yûsuf sans savoir qu'il se tenait devant eux.",
    "hint": "Ce verset se trouve dans la sourate qui porte le nom même de ce prophète.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q11",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمُشَارُ إِلَيْهِ بِقَوْلِهِ تَعَالَى: ﴿ فَقَدْ سَرَقَ أَخٌ لَّهُ مِن قَبْلُ ﴾ [يوسف: 77]؟",
        "options": [
          "يُوسُفُ عَلَيْهِ السَّلَامُ",
          "مُوسَى عَلَيْهِ السَّلَامُ",
          "هَارُونُ عَلَيْهِ السَّلَامُ",
          "إِسْمَاعِيلُ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "يُوسُفُ عَلَيْهِ السَّلَامُ",
        "explication": "قَالَ إِخْوَةُ يُوسُفَ ذَلِكَ عَنْ بِنْيَامِينَ قَاصِدِينَ يُوسُفَ عَلَيْهِ السَّلَامُ.",
        "hint": "الْآيَةُ فِي السُّورَةِ الَّتِي تَحْمِلُ اسْمَهُ."
      }
    }
  },
  {
    "id": 6082,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Comment appelle-t-on parfois la sourate As-Sajda en référence aux croyants qui s'arrachent de leurs lits la nuit ?",
    "options": [
      "Sûrat al-Madâji' (la sourate des couches)",
      "Sûrat at-Taqwâ",
      "Sûrat al-Hawâriyyîn",
      "Sûrat al-Kalîm"
    ],
    "reponse_correcte": "Sûrat al-Madâji' (la sourate des couches)",
    "explication": "Le verset 16 dit : « Ils s'arrachent de leurs couches (madâji') pour invoquer leur Seigneur avec crainte et espoir. »",
    "hint": "Ce nom évoque les lits que les pieux quittent pour la prière nocturne.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q12",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَاذَا تُسَمَّى سُورَةُ السَّجْدَةِ؟",
        "options": [
          "سُورَةُ الْمَضَاجِعِ",
          "سُورَةُ التَّقْوَى",
          "سُورَةُ الْحَوَارِيِّينَ",
          "سُورَةُ الْكَلِيمِ"
        ],
        "reponse_correcte": "سُورَةُ الْمَضَاجِعِ",
        "explication": "سُمِّيَتْ بِسُورَةِ الْمَضَاجِعِ لِقَوْلِهِ تَعَالَى فِيهَا: ﴿ تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ ﴾ [السجدة: 16].",
        "hint": "تَتَحَدَّثُ عَنْ قِيَامِ اللَّيْلِ وَتَرْكِ الْفُرُشِ."
      }
    }
  },
  {
    "id": 6083,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Par quoi le Noble Coran s'est-il distingué dans sa révélation par rapport aux Écritures précédentes ?",
    "options": [
      "Il a été révélé de manière progressive sur 23 ans selon les événements",
      "Il a été écrit sur des tablettes de pierre en une seule nuit",
      "Il n'a été révélé qu'à Médine",
      "Il a été révélé en plusieurs langues différentes"
    ],
    "reponse_correcte": "Il a été révélé de manière progressive sur 23 ans selon les événements",
    "explication": "Le Coran a été descendu graduellement pour affermir le cœur du Prophète ﷺ et accompagner la communauté dans sa formation.",
    "hint": "Pense au contraste entre une révélation d'un seul bloc et une descente graduelle.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q16",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَاذَا تَمَيَّزَ نُزُولُ الْقُرْآنِ الْكَرِيمِ عَنِ الْكُتُبِ السَّمَاوِيَّةِ السَّابِقَةِ؟",
        "options": [
          "نَزَلَ مُنَجَّمًا (مُفَرَّقًا) حَسَبَ الْأَحْدَاثِ وَالْمُنَاسَبَاتِ",
          "نَزَلَ جُمْلَةً وَاحِدَةً فِي مَدِينَةٍ وَاحِدَةٍ",
          "نَزَلَ فِي الْمَدِينَةِ فَقَطْ",
          "نَزَلَ بِلُغَاتٍ مُتَعَدِّدَةٍ"
        ],
        "reponse_correcte": "نَزَلَ مُنَجَّمًا (مُفَرَّقًا) حَسَبَ الْأَحْدَاثِ وَالْمُنَاسَبَاتِ",
        "explication": "نَزَلَ الْقُرْآنُ مُفَرَّقًا خِلَالَ ٢٣ سَنَةً لِتَثْبِيتِ فُؤَادِ النَّبِيِّ ﷺ وَتَدْرِيجِ التَّشْرِيعِ.",
        "hint": "يُقَالُ لَهُ نَزَلَ «مُنَجَّمًا»."
      }
    }
  },
  {
    "id": 6084,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle reine est désignée dans la sourate An-Naml par les mots de la huppe : « J'ai trouvé une femme qui règne sur eux » ?",
    "options": [
      "Bilqîs, reine de Saba",
      "Âsiya, femme de Pharaon",
      "Maryam (paix sur elle)",
      "Hâjar (paix sur elle)"
    ],
    "reponse_correcte": "Bilqîs, reine de Saba",
    "explication": "La huppe informa Sulaymân (paix sur lui) au sujet de la reine Bilqîs au Yémen (Saba), qui finit par se soumettre à Allah avec Sulaymân.",
    "hint": "Son royaume se trouvait à Saba, au Yémen.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q18",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمَرْأَةُ الْمُشَارُ إِلَيْهَا فِي قَوْلِهِ تَعَالَى: ﴿ إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ ﴾ [النمل: 23]؟",
        "options": [
          "بِلْقِيسُ مَلِكَةُ سَبَأٍ",
          "آسِيَةُ امْرَأَةُ فِرْعَوْنَ",
          "مَرْيَمُ عَلَيْهَا السَّلَامُ",
          "هَاجَرُ عَلَيْهَا السَّلَامُ"
        ],
        "reponse_correcte": "بِلْقِيسُ مَلِكَةُ سَبَأٍ",
        "explication": "أَخْبَرَ الْهُدْهُدُ سُلَيْمَانَ عَلَيْهِ السَّلَامُ عَنْ مَلِكَةِ سَبَأٍ بِلْقِيسَ الَّتِي أَسْلَمَتْ لِلَّهِ رَبِّ الْعَالَمِينَ.",
        "hint": "كَانَتْ تَحْكُمُ مَمْلَكَةَ سَبَأٍ بِالْيَمَنِ."
      }
    }
  },
  {
    "id": 6085,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Sous quel nom est connue la sourate An-Nasr qui annonçait la proximité du départ du Prophète ﷺ ?",
    "options": [
      "La sourate des adieux (Sûrat at-Tawdî')",
      "La sourate de la victoire de Badr",
      "La sourate de la lumière",
      "La sourate de la patience"
    ],
    "reponse_correcte": "La sourate des adieux (Sûrat at-Tawdî')",
    "explication": "Ibn 'Abbâs comprit devant 'Umar que la sourate An-Nasr annonçait le terme prochain de la mission du Prophète ﷺ, d'où le nom Sûrat at-Tawdî'.",
    "hint": "Ibn 'Abbâs y vit l'annonce du départ imminent du Messager ﷺ.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q21",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الِاسْمُ الَّذِي تُعْرَفُ بِهِ سُورَةُ النَّصْرِ؟",
        "options": [
          "سُورَةُ التَّوْدِيعِ",
          "سُورَةُ التَّكْبِيرِ",
          "سُورَةُ الْحَجِّ",
          "سُورَةُ النُّورِ"
        ],
        "reponse_correcte": "سُورَةُ التَّوْدِيعِ",
        "explication": "فَهِمَ ابْنُ عَبَّاسٍ مِنْهَا أَنَّهَا نَعْيٌ لِرَسُولِ اللَّهِ ﷺ وَاقْتِرَابُ أَجَلِهِ فَسُمِّيَتْ سُورَةَ التَّوْدِيعِ.",
        "hint": "تَدُلُّ عَلَى اقْتِرَابِ وَفَاةِ النَّبِيِّ ﷺ."
      }
    }
  },
  {
    "id": 6086,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Sous l'ordre de quel Calife le Coran fut-il compilé pour la première fois dans un seul Mushaf ?",
    "options": [
      "Abû Bakr as-Siddîq (RTA)",
      "'Umar ibn al-Khattâb (RTA)",
      "'Alî ibn Abî Tâlib (RTA)",
      "Mu'âwiya ibn Abî Sufyân (RTA)"
    ],
    "reponse_correcte": "Abû Bakr as-Siddîq (RTA)",
    "explication": "Après la bataille d'Al-Yamâma où tombèrent de nombreux mémorisateurs, 'Umar conseilla à Abû Bakr de rassembler le Coran en un seul Mushaf par Zayd ibn Thâbit.",
    "hint": "C'est le premier Calife bien-guidé.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q23 & Q45",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ أَوَّلُ مَنْ جَمَعَ الْقُرْآنَ فِي مُصْحَفٍ وَاحِدٍ؟",
        "options": [
          "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ",
          "عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ",
          "عَلِيُّ بْنُ أَبِي طَالِبٍ رَضِيَ اللَّهُ عَنْهُ",
          "مُعَاوِيَةُ بْنُ أَبِي سُفْيَانَ"
        ],
        "reponse_correcte": "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "جُمِعَ الْقُرْآنُ فِي عَهْدِ أَبِي بَكْرٍ الصِّدِّيقِ بِمَشُورَةِ عُمَرَ وَكِتَابَةِ زَيْدِ بْنِ ثَابِتٍ رَضِيَ اللَّهُ عَنْهُمْ.",
        "hint": "فِي عَهْدِ أَوَّلِ الْخُلَفَاءِ الرَّاشِدِينَ."
      }
    }
  },
  {
    "id": 6087,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Sous quel autre nom court la sourate Al-Masad est-elle très souvent appelée ?",
    "options": [
      "Sourate Tabbat",
      "Sourate Al-Kawthar",
      "Sourate Iqra'",
      "Sourate Sabbih"
    ],
    "reponse_correcte": "Sourate Tabbat",
    "explication": "Elle tire ce nom de ses tout premiers mots : « Tabbat yadâ Abî Lahab... ».",
    "hint": "C'est le tout premier mot du premier verset.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q24",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَاذَا تُعْرَفُ سُورَةُ الْمَسَدِ أَيْضًا؟",
        "options": [
          "سُورَةُ تَبَّتْ",
          "سُورَةُ الْكَوْثَرِ",
          "سُورَةُ اقْرَأْ",
          "سُورَةُ سَبِّحْ"
        ],
        "reponse_correcte": "سُورَةُ تَبَّتْ",
        "explication": "تُسَمَّى سُورَةُ الْمَسَدِ بِسُورَةِ تَبَّتْ نِسْبَةً إِلَى أَوَّلِ كَلِمَةٍ فِيهَا.",
        "hint": "مَأْخُوذٌ مِنْ أَوَّلِ كَلِمَةٍ فِي السُّورَةِ."
      }
    }
  },
  {
    "id": 6088,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelles sont les deux sourates lumineuses (Az-Zahrâwân) qui ombrageront le croyant au Jour de la Résurrection ?",
    "options": [
      "Al-Baqara et Âl 'Imrân",
      "Yâ-Sîn et Ar-Rahmân",
      "Al-Kahf et Maryam",
      "Al-Fâtiha et Al-Ikhlâs"
    ],
    "reponse_correcte": "Al-Baqara et Âl 'Imrân",
    "explication": "Le Prophète ﷺ a dit dans Sahîh Muslim : « Récitez les deux lumineuses, Al-Baqara et Âl 'Imrân, car elles viendront au Jour de la Résurrection comme deux nuages protecteurs. »",
    "hint": "Ce sont les deux plus longues sourates situées juste après Al-Fâtiha.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q25",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَتَانِ اللَّتَانِ تُظِلَّانِ الْمُؤْمِنَ يَوْمَ الْقِيَامَةِ؟",
        "options": [
          "الْبَقَرَةُ وَآلُ عِمْرَانَ",
          "يس وَالرَّحْمَنُ",
          "الْكَهْفُ وَمَرْيَمُ",
          "الْفَاتِحَةُ وَالْإِخْلَاصُ"
        ],
        "reponse_correcte": "الْبَقَرَةُ وَآلُ عِمْرَانَ",
        "explication": "قَالَ ﷺ: «اقْرَءُوا الزَّهْرَاوَيْنِ الْبَقَرَةَ وَسُورَةَ آلِ عِمْرَانَ فَإِنَّهُمَا تَأْتِيَانِ يَوْمَ الْقِيَامَةِ كَأَنَّهُمَا غَمَامَتَانِ».",
        "hint": "أَطْوَلُ سُورَتَيْنِ بَعْدَ الْفَاتِحَةِ وَتُلَقَّبَانِ بِالزَّهْرَاوَيْنِ."
      }
    }
  },
  {
    "id": 6089,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Combien y a-t-il de pauses brèves sans reprise de souffle (sakatât) obligatoires selon la lecture de Hafs ?",
    "options": [
      "Quatre pauses (Al-Kahf, Yâ-Sîn, Al-Qiyâma, Al-Mutaffifîn)",
      "Deux pauses seulement",
      "Dix pauses",
      "Sept pauses"
    ],
    "reponse_correcte": "Quatre pauses (Al-Kahf, Yâ-Sîn, Al-Qiyâma, Al-Mutaffifîn)",
    "explication": "Selon la lecture Hafs 'an 'Âsim, les quatre sakatât célèbres figurent dans Al-Kahf (v.1), Yâ-Sîn (v.52), Al-Qiyâma (v.27) et Al-Mutaffifîn (v.14).",
    "hint": "Elles se trouvent dans quatre sourates bien connues, notées par un petit « س » dans le Mushaf.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q31",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ السَّكَتَاتِ الْوَاجِبَةِ فِي الْقُرْآنِ فِي رِوَايَةِ حَفْصٍ؟",
        "options": [
          "أَرْبَعُ سَكَتَاتٍ (الْكَهْفُ، يس، الْقِيَامَةُ، الْمُطَفِّفِينَ)",
          "سَكْتَتَانِ فَقَطْ",
          "عَشْرُ سَكَتَاتٍ",
          "سَبْعُ سَكَتَاتٍ"
        ],
        "reponse_correcte": "أَرْبَعُ سَكَتَاتٍ (الْكَهْفُ، يس، الْقِيَامَةُ، الْمُطَفِّفِينَ)",
        "explication": "السَّكَتَاتُ الْأَرْبَعُ الْمَشْهُورَةُ فِي رِوَايَةِ حَفْصٍ هِيَ: عِوَجَا (الْكَهْف)، مَرْقَدِنَا (يس)، مَنْ رَاقٍ (الْقِيَامَة)، بَلْ رَانَ (الْمُطَفِّفِين).",
        "hint": "يُشَارُ إِلَيْهَا بِحَرْفِ (س) الصَّغِيرِ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6090,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate est surnommée « la sourate de l'Adoration » (Al-'Ibâda) ?",
    "options": [
      "Sourate Al-Kâfirûn",
      "Sourate Al-Qadr",
      "Sourate Al-Fîl",
      "Sourate Al-Mâ'ûn"
    ],
    "reponse_correcte": "Sourate Al-Kâfirûn",
    "explication": "Sourate Al-Kâfirûn affirme le monothéisme pur dans l'adoration et le désaveu total du polythéisme.",
    "hint": "Elle répète plusieurs fois le verbe « a'budu » (j'adore).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q37",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي تُعْرَفُ بِسُورَةِ (الْعِبَادَةِ)؟",
        "options": [
          "سُورَةُ الْكَافِرُونَ",
          "سُورَةُ الْقَدْرِ",
          "سُورَةُ الْفِيلِ",
          "سُورَةُ الْمَاعُونِ"
        ],
        "reponse_correcte": "سُورَةُ الْكَافِرُونَ",
        "explication": "تُعْرَفُ سُورَةُ الْكَافِرُونَ بِسُورَةِ الْعِبَادَةِ وَسُورَةِ الْبَرَاءَةِ مِنَ الشِّرْكِ.",
        "hint": "تَتَكَرَّرُ فِيهَا كَلِمَةُ الْعِبَادَةِ وَمُشْتَقَّاتُهَا."
      }
    }
  },
  {
    "id": 6091,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Pourquoi l'imam Al-Ghazâlî a-t-il appelé sourate Al-Baqara « la Sourate de la Piété » (At-Taqwâ) ?",
    "options": [
      "Parce que le terme « taqwâ » (piété) y est mentionné plus de vingt fois",
      "Parce qu'elle ne compte que vingt versets",
      "Parce qu'elle commence par le mot Taqwâ",
      "Parce qu'elle fut révélée à Mina"
    ],
    "reponse_correcte": "Parce que le terme « taqwâ » (piété) y est mentionné plus de vingt fois",
    "explication": "Dès le deuxième verset (« Hudan li-l-muttaqîn »), la piété traverse toute la sourate Al-Baqara comme fil conducteur.",
    "hint": "Regarde son deuxième verset : « C'est un guide pour les pieux (muttaqîn) ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q38-Q39",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "لِمَاذَا سَمَّى الْإِمَامُ الْغَزَالِيُّ سُورَةَ الْبَقَرَةِ بِسُورَةِ التَّقْوَى؟",
        "options": [
          "لِأَنَّ لَفْظَ التَّقْوَى ذُكِرَ فِيهَا أَكْثَرَ مِنْ عِشْرِينَ مَرَّةً",
          "لِأَنَّهَا تَتَكَوَّنُ مِنْ عِشْرِينَ آيَةً",
          "لِأَنَّهَا تَبْدَأُ بِكَلِمَةِ التَّقْوَى",
          "لِأَنَّهَا نَزَلَتْ فِي مِنًى"
        ],
        "reponse_correcte": "لِأَنَّ لَفْظَ التَّقْوَى ذُكِرَ فِيهَا أَكْثَرَ مِنْ عِشْرِينَ مَرَّةً",
        "explication": "سُمِّيَتْ سُورَةُ التَّقْوَى لِكَثْرَةِ مَا وَرَدَ فِيهَا مِنْ تَذْكِيرٍ بِالتَّقْوَى وَوَصْفٍ لِلْمُتَّقِينَ.",
        "hint": "انْظُرْ إِلَى أَوَّلِ آيَاتِهَا: ﴿ هُدًى لِّلْمُتَّقِينَ ﴾."
      }
    }
  },
  {
    "id": 6092,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate du Coran commence par le nom d'une montagne sacrée ?",
    "options": [
      "Sourate At-Tûr",
      "Sourate Al-Fajr",
      "Sourate Ach-Chams",
      "Sourate Al-Layl"
    ],
    "reponse_correcte": "Sourate At-Tûr",
    "explication": "Allah jure au tout premier verset par le Mont Tûr (« Wa t-Tûr »), montagne où Il parla à Mûsâ.",
    "hint": "Son titre signifie littéralement « Le Mont ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q41",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي بَدَأَتْ بِاسْمِ أَحَدِ الْجِبَالِ؟",
        "options": [
          "سُورَةُ الطُّورِ",
          "سُورَةُ الْفَجْرِ",
          "سُورَةُ الشَّمْسِ",
          "سُورَةُ اللَّيْلِ"
        ],
        "reponse_correcte": "سُورَةُ الطُّورِ",
        "explication": "أَقْسَمَ اللَّهُ فِي مَطْلَعِ سُورَةِ الطُّورِ بِجَبَلِ الطُّورِ الَّذِي كَلَّمَ فِيهِ مُوسَى عَلَيْهِ السَّلَامُ.",
        "hint": "اسْمُ السُّورَةِ هُوَ نَفْسُهُ اسْمُ الْجَبَلِ."
      }
    }
  },
  {
    "id": 6093,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel Calife fit copier le Mushaf en plusieurs exemplaires officiels pour les envoyer aux grandes régions musulmanes ?",
    "options": [
      "'Uthmân ibn 'Affân (RTA)",
      "Abû Bakr as-Siddîq (RTA)",
      "Abû Hurayra (RTA)",
      "Talha ibn 'Ubaydillâh (RTA)"
    ],
    "reponse_correcte": "'Uthmân ibn 'Affân (RTA)",
    "explication": "En l'an 25 de l'Hégire, 'Uthmân unifia les copies officielles du Mushaf afin d'éviter toute divergence de récitation entre les contrées.",
    "hint": "C'est de lui que vient l'appellation « graphie 'uthmanienne » (ar-rasm al-'uthmânî).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q46",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ أَوَّلُ مَنْ نَسَخَ الْقُرْآنَ فِي مَصَاحِفَ وَأَرْسَلَهَا إِلَى الْأَمْصَارِ؟",
        "options": [
          "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ",
          "طَلْحَةُ بْنُ عُبَيْدِ اللَّهِ"
        ],
        "reponse_correcte": "عُثْمَانُ بْنُ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "فِي عَامِ ٢٥ هـ جَمَعَ عُثْمَانُ النَّاسَ عَلَى مُصْحَفٍ إِمَامٍ وَأَرْسَلَ نُسَخَهُ إِلَى الْبُلْدَانِ.",
        "hint": "إِلَيْهِ يُنْسَبُ الرَّسْمُ الْعُثْمَانِيُّ."
      }
    }
  },
  {
    "id": 6094,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle est l'unique femme dans le Coran explicitement qualifiée de « Véridique » (Siddîqa) ?",
    "options": [
      "Maryam (paix sur elle)",
      "Bilqîs",
      "Âsiya",
      "Sarah"
    ],
    "reponse_correcte": "Maryam (paix sur elle)",
    "explication": "Dans sourate Al-Mâ'ida (v. 75), Allah dit au sujet de la mère de 'Îsâ : « Wa ummuhu siddîqa » (Et sa mère était une véridique).",
    "hint": "Une sourate entière (la 19e) porte son nom.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q57",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمَرْأَةُ الْوَحِيدَةُ فِي الْقُرْآنِ الَّتِي وُصِفَتْ بِالصِّدِّيقَةِ؟",
        "options": [
          "مَرْيَمُ عَلَيْهَا السَّلَامُ",
          "بِلْقِيسُ",
          "آسِيَةُ",
          "سَارَةُ"
        ],
        "reponse_correcte": "مَرْيَمُ عَلَيْهَا السَّلَامُ",
        "explication": "قَالَ اللَّهُ تَعَالَى فِي سُورَةِ الْمَائِدَةِ: ﴿ وَأُمُّهُ صِدِّيقَةٌ ﴾ [المائدة: 75].",
        "hint": "تَحْمِلُ السُّورَةُ التَّاسِعَةَ عَشْرَةَ اسْمَهَا."
      }
    }
  },
  {
    "id": 6095,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel verset, récité avant de dormir, place le croyant sous la protection d'Allah et éloigne Satan jusqu'au matin ?",
    "options": [
      "Le verset du Trône (Âyat al-Kursî)",
      "Le premier verset d'Al-Kawthar",
      "Le dernier verset d'Al-Fîl",
      "Le verset 1 d'Al-Masad"
    ],
    "reponse_correcte": "Le verset du Trône (Âyat al-Kursî)",
    "explication": "Dans le hadith rapporté par Al-Bukhârî (récit d'Abû Hurayra), quiconque récite Âyat al-Kursî en se couchant demeure sous la garde d'un ange protecteur.",
    "hint": "C'est le verset 255 de sourate Al-Baqara, le plus grand verset du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q60",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْآيَةُ الَّتِي إِذَا قَرَأَهَا الْإِنْسَانُ عِنْدَ نَوْمِهِ حَفِظَهُ اللَّهُ حَتَّى يُصْبِحَ؟",
        "options": [
          "آيَةُ الْكُرْسِيِّ",
          "أَوَّلُ آيَةٍ مِنْ سُورَةِ الْكَوْثَرِ",
          "آخِرُ آيَةٍ مِنْ سُورَةِ الْفِيلِ",
          "أَوَّلُ آيَةٍ مِنْ سُورَةِ الْمَسَدِ"
        ],
        "reponse_correcte": "آيَةُ الْكُرْسِيِّ",
        "explication": "أَخْبَرَ النَّبِيُّ ﷺ أَنَّ مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ عِنْدَ نَوْمِهِ لَا يَزَالُ عَلَيْهِ مِنَ اللَّهِ حَافِظٌ.",
        "hint": "هِيَ أَعْظَمُ آيَةٍ فِي كِتَابِ اللَّهِ [البقرة: ٢٥٥]."
      }
    }
  },
  {
    "id": 6096,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans quelle sourate apparaît « Al-Hâwiya », l'un des noms de l'Enfer ?",
    "options": [
      "Sourate Al-Qâri'a",
      "Sourate Al-Fâtiha",
      "Sourate Al-Ikhlâs",
      "Sourate Al-Falaq"
    ],
    "reponse_correcte": "Sourate Al-Qâri'a",
    "explication": "Allah dit dans sourate Al-Qâri'a (v. 9) : « Fa-ummuhû hâwiya » (Sa demeure sera l'Abîme/Hâwiya).",
    "hint": "Cette sourate commence par décrire le Fracas du Jour dernier.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q62",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سُورَةٍ وَرَدَ اسْمُ (الْهَاوِيَةِ) مِنْ أَسْمَاءِ النَّارِ؟",
        "options": [
          "سُورَةُ الْقَارِعَةِ",
          "سُورَةُ الْفَاتِحَةِ",
          "سُورَةُ الْإِخْلَاصِ",
          "سُورَةُ الْفَلَقِ"
        ],
        "reponse_correcte": "سُورَةُ الْقَارِعَةِ",
        "explication": "وَرَدَ ذِكْرُ الْهَاوِيَةِ فِي سُورَةِ الْقَارِعَةِ فِي قَوْلِهِ تَعَالَى: ﴿ فَأُمُّهُ هَاوِيَةٌ ﴾.",
        "hint": "تَبْدَأُ السُّورَةُ بِاسْمٍ مِنْ أَسْمَاءِ يَوْمِ الْقِيَامَةِ."
      }
    }
  },
  {
    "id": 6097,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle chose sans âme est décrite dans sourate At-Takwîr comme « respirant » ?",
    "options": [
      "L'aube (« Et par l'aube quand elle respire ! »)",
      "La montagne",
      "La mer",
      "La pluie"
    ],
    "reponse_correcte": "L'aube (« Et par l'aube quand elle respire ! »)",
    "explication": "Dans sourate At-Takwîr (v. 18), Allah jure : « Wa s-subhi idhâ tanaffas » — belle métaphore de la lumière qui se répand doucement.",
    "hint": "Elle annonce l'arrivée du matin après la nuit.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q66",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الشَّيْءُ الَّذِي تَنَفَّسَ فِي الْقُرْآنِ بِغَيْرِ رُوحٍ؟",
        "options": [
          "الصُّبْحُ",
          "الْجَبَلُ",
          "الْبَحْرُ",
          "الْمَطَرُ"
        ],
        "reponse_correcte": "الصُّبْحُ",
        "explication": "قَالَ اللَّهُ تَعَالَى فِي سُورَةِ التَّكْوِيرِ: ﴿ وَالصُّبْحِ إِذَا تَنَفَّسَ ﴾ أَيْ أَقْبَلَ ضَوْؤُهُ.",
        "hint": "يَأْتِي بَعْدَ انْقِضَاءِ اللَّيْلِ."
      }
    }
  },
  {
    "id": 6098,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel prophète prononça l'invocation : « Seigneur, je cherche refuge auprès de Toi contre le fait de Te demander ce dont je n'ai aucune science » [Hûd : 47] ?",
    "options": [
      "Nûh (paix sur lui)",
      "Mûsâ (paix sur lui)",
      "Yûnus (paix sur lui)",
      "Dâwûd (paix sur lui)"
    ],
    "reponse_correcte": "Nûh (paix sur lui)",
    "explication": "Lorsqu'Allah éclaira Nûh au sujet de son fils qui avait refusé de monter dans l'Arche, Nûh se repentit aussitôt avec grande humilité.",
    "hint": "C'est le prophète du Déluge et de l'Arche.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q69",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ النَّبِيُّ الَّذِي قَالَ: ﴿ رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ ﴾ [هود: 47]؟",
        "options": [
          "نُوحٌ عَلَيْهِ السَّلَامُ",
          "مُوسَى عَلَيْهِ السَّلَامُ",
          "يُونُسُ عَلَيْهِ السَّلَامُ",
          "دَاوُدُ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "نُوحٌ عَلَيْهِ السَّلَامُ",
        "explication": "قَالَهَا نُوحٌ عَلَيْهِ السَّلَامُ مُتَوَاضِعًا لِرَبِّهِ بَعْدَ غَرَقِ ابْنِهِ الَّذِي أَبَى الرُّكُوبَ فِي السَّفِينَةِ.",
        "hint": "نَبِيُّ السَّفِينَةِ وَالطُّوفَانِ."
      }
    }
  },
  {
    "id": 6099,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans quelle sourate apparaît le mot « al-hazl » (plaisanterie), mentionné une seule fois dans tout le Coran ?",
    "options": [
      "Sourate At-Târiq",
      "Sourate Al-Baqara",
      "Sourate Al-Mâ'ida",
      "Sourate An-Nisâ'"
    ],
    "reponse_correcte": "Sourate At-Târiq",
    "explication": "Allah décrit le Coran au verset 13-14 d'At-Târiq : « Ceci est certes une parole décisive, et ce n'est point une plaisanterie (wa mâ huwa bi-l-hazl). »",
    "hint": "Cette sourate commence par un serment par le ciel et l'astre nocturne.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q72-Q73",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سُورَةٍ ذُكِرَتْ كَلِمَةُ (الْهَزْلِ) مَرَّةً وَاحِدَةً فِي الْقُرْآنِ؟",
        "options": [
          "سُورَةُ الطَّارِقِ",
          "سُورَةُ الْبَقَرَةِ",
          "سُورَةُ الْمَائِدَةِ",
          "سُورَةُ النِّسَاءِ"
        ],
        "reponse_correcte": "سُورَةُ الطَّارِقِ",
        "explication": "قَالَ تَعَالَى فِي سُورَةِ الطَّارِقِ وَاصِفًا الْقُرْآنَ: ﴿ إِنَّهُ لَقَوْلٌ فَصْلٌ ۝ وَمَا هُوَ بِالْهَزْلِ ﴾.",
        "hint": "تَبْدَأُ السُّورَةُ بِالْقَسَمِ بِالسَّمَاءِ وَالنَّجْمِ الثَّاقِبِ."
      }
    }
  },
  {
    "id": 6100,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Par la bouche de qui ont été prononcées ces paroles : « Aurons-nous vraiment une récompense si nous sommes les vainqueurs ? » [Ach-Chu'arâ' : 41] ?",
    "options": [
      "Les magiciens de Pharaon",
      "Les Compagnons de la Caverne",
      "Les frères de Yûsuf",
      "Les soldats de Tâlût"
    ],
    "reponse_correcte": "Les magiciens de Pharaon",
    "explication": "Avant d'affronter Mûsâ, les magiciens réclamèrent une récompense à Pharaon ; mais devant le miracle du bâton, ils se prosternèrent et crurent au Seigneur de Mûsâ et Hârûn !",
    "hint": "Ils affrontaient le prophète Mûsâ avant de se convertir.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q74",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "عَلَى لِسَانِ مَنْ وَرَدَ قَوْلُهُ تَعَالَى: ﴿ أَئِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ الْغَالِبِينَ ﴾ [الشعراء: 41]؟",
        "options": [
          "سَحَرَةُ فِرْعَوْنَ",
          "أَصْحَابُ الْكَهْفِ",
          "إِخْوَةُ يُوسُفَ",
          "جُنُودُ طَالُوتَ"
        ],
        "reponse_correcte": "سَحَرَةُ فِرْعَوْنَ",
        "explication": "قَالَ سَحَرَةُ فِرْعَوْنَ ذَلِكَ قَبْلَ مُنَاظَرَةِ مُوسَى، ثُمَّ آمَنُوا بِاللَّهِ حِينَ رَأَوْا مُعْجِزَةَ الْعَصَا.",
        "hint": "تَحَدَّوْا نَبِيَّ اللَّهِ مُوسَى ثُمَّ سَجَدُوا لِلَّهِ مُؤْمِنِينَ."
      }
    }
  },
  {
    "id": 6101,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle famille pieuse a donné son nom à la 3e sourate du Noble Coran ?",
    "options": [
      "Âl 'Imrân (La Famille d''Imrân)",
      "Les Banû Hâchim",
      "Les Banû Isrâ'îl",
      "La famille de Pharaon"
    ],
    "reponse_correcte": "Âl 'Imrân (La Famille d''Imrân)",
    "explication": "Sourate Âl 'Imrân (« La Famille d''Imrân ») honore cette famille bénie dont sont issus Maryam et 'Îsâ (paix sur eux).",
    "hint": "C'est la sourate située juste après Al-Baqara.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q76",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْعَائِلَةُ الَّتِي سُمِّيَتْ سُورَةٌ مِنَ الْقُرْآنِ بِاسْمِهَا؟",
        "options": [
          "آلُ عِمْرَانَ",
          "بَنُو هَاشِمٍ",
          "بَنُو النَّضِيرِ",
          "آلُ فِرْعَوْنَ"
        ],
        "reponse_correcte": "آلُ عِمْرَانَ",
        "explication": "سُورَةُ آلِ عِمْرَانَ هِيَ السُّورَةُ الثَّالِثَةُ فِي الْمُصْحَفِ وَتَذْكُرُ فَضْلَ هَذِهِ الْأُسْرَةِ الْمُبَارَكَةِ.",
        "hint": "تَقَعُ بَعْدَ سُورَةِ الْبَقَرَةِ مُبَاشَرَةً."
      }
    }
  },
  {
    "id": 6102,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'écriture traditionnelle spécifique dans laquelle le Mushaf est calligraphié ?",
    "options": [
      "La graphie 'uthmanienne (al-khatt al-'uthmânî)",
      "Le style maghrébin moderne",
      "L'écriture nabatéenne",
      "La calligraphie diwani"
    ],
    "reponse_correcte": "La graphie 'uthmanienne (al-khatt al-'uthmânî)",
    "explication": "Le Rasm 'Uthmânî préserve l'orthographe exacte des copies officielles compilées sous 'Uthmân ibn 'Affân (RTA).",
    "hint": "Elle porte le nom du troisième Calife bien-guidé.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q82",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا اسْمُ الْخَطِّ الَّذِي كُتِبَ بِهِ الْمُصْحَفُ الشَّرِيفُ؟",
        "options": [
          "الْخَطُّ (الرَّسْمُ) الْعُثْمَانِيُّ",
          "الْخَطُّ الدِّيوَانِيُّ",
          "خَطُّ الرُّقْعَةِ",
          "الْخَطُّ الْفَارِسِيُّ"
        ],
        "reponse_correcte": "الْخَطُّ (الرَّسْمُ) الْعُثْمَانِيُّ",
        "explication": "سُمِّيَ بِالرَّسْمِ الْعُثْمَانِيِّ نِسْبَةً إِلَى الْخَلِيفَةِ عُثْمَانَ بْنِ عَفَّانَ رَضِيَ اللَّهُ عَنْهُ.",
        "hint": "يُنْسَبُ إِلَى ثَالِثِ الْخُلَفَاءِ الرَّاشِدِينَ."
      }
    }
  },
  {
    "id": 6103,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate porte le nom d'une nuit bénie meilleure que mille mois ?",
    "options": [
      "Sourate Al-Qadr (La Destinée)",
      "Sourate Al-Fajr (L'Aube)",
      "Sourate Ad-Duhâ (La Matinée)",
      "Sourate Al-'Asr (Le Temps)"
    ],
    "reponse_correcte": "Sourate Al-Qadr (La Destinée)",
    "explication": "La Nuit du Destin (Laylat al-Qadr), durant le mois de Ramadan, marque le début de la descente du Coran et vaut plus que mille mois.",
    "hint": "On la recherche surtout durant les dix dernières nuits impaires de Ramadan.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q87",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي سُمِّيَتْ بِاسْمِ لَيْلَةٍ خَيْرٍ مِنْ أَلْفِ شَهْرٍ؟",
        "options": [
          "سُورَةُ الْقَدْرِ",
          "سُورَةُ الْفَجْرِ",
          "سُورَةُ الضُّحَى",
          "سُورَةُ الْعَصْرِ"
        ],
        "reponse_correcte": "سُورَةُ الْقَدْرِ",
        "explication": "سُورَةُ الْقَدْرِ تَصِفُ شَرَفَ لَيْلَةِ الْقَدْرِ الَّتِي أُنْزِلَ فِيهَا الْقُرْآنُ وَتَتَنَزَّلُ فِيهَا الْمَلَائِكَةُ.",
        "hint": "نَلْتَمِسُهَا فِي الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ."
      }
    }
  },
  {
    "id": 6104,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle partie du Coran les savants surnomment-ils « les jardins du Coran » (Riyâd al-Qur'ân) ?",
    "options": [
      "Al-Mufassal (les dernières sourates du Coran)",
      "Les dix premiers versets d'Al-Baqara",
      "Uniquement sourate Al-Fâtiha",
      "Le premier juz' uniquement"
    ],
    "reponse_correcte": "Al-Mufassal (les dernières sourates du Coran)",
    "explication": "Al-Mufassal désigne les sourates de Qâf (ou Al-Hujurât) jusqu'à An-Nâs, riches en rappels courts, rythmés et faciles à mémoriser.",
    "hint": "Il s'agit des sourates courtes situées à la fin du Mushaf.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q93",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْمَقْصُودُ بـِ (رِيَاضِ الْقُرْآنِ)؟",
        "options": [
          "الْمُفَصَّلُ (أَوَاخِرُ سُوَرِ الْقُرْآنِ)",
          "أَوَّلُ عَشْرِ آيَاتٍ مِنَ الْبَقَرَةِ",
          "الْجُزْءُ الْأَوَّلُ فَقَطْ",
          "سُورَةُ الْفَاتِحَةِ فَقَطْ"
        ],
        "reponse_correcte": "الْمُفَصَّلُ (أَوَاخِرُ سُوَرِ الْقُرْآنِ)",
        "explication": "الْمُفَصَّلُ مِنْ سُورَةِ ق (أَوِ الْحُجُرَاتِ) إِلَى النَّاسِ، وَيُسَمَّى رِيَاضَ الْقُرْآنِ لِكَثْرَةِ فَوَاصِلِهِ وَعَذُوبَتِهِ.",
        "hint": "تَشْمَلُ السُّوَرَ الْقِصَارَ فِي آخِرِ الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6105,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quel grand linguiste arabe a introduit les signes de la hamza et de la chadda pour faciliter la lecture du Mushaf ?",
    "options": [
      "Al-Khalîl ibn Ahmad al-Farâhîdî",
      "Al-Bukhârî",
      "Ibn Battûta",
      "Al-Khwârizmî"
    ],
    "reponse_correcte": "Al-Khalîl ibn Ahmad al-Farâhîdî",
    "explication": "Al-Khalîl ibn Ahmad al-Farâhîdî perfectionna le système de vocalisation (harakât, hamza, chadda) utilisé dans les Mushafs modernes.",
    "hint": "Il est aussi le fondateur de la métrique arabe ('ilm al-'arûd) et du premier dictionnaire arabe.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q97",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ أَوَّلُ مَنْ وَضَعَ الْهَمْزَةَ وَالشَّدَّةَ فِي الْمُصْحَفِ؟",
        "options": [
          "الْخَلِيلُ بْنُ أَحْمَدَ الْفَرَاهِيدِيُّ",
          "الْإِمَامُ الْبُخَارِيُّ",
          "ابْنُ بَطُّوطَةَ",
          "الْخُوَارِزْمِيُّ"
        ],
        "reponse_correcte": "الْخَلِيلُ بْنُ أَحْمَدَ الْفَرَاهِيدِيُّ",
        "explication": "طَوَّرَ الْخَلِيلُ بْنُ أَحْمَدَ الْفَرَاهِيدِيُّ عَلَامَاتِ الضَّبْطِ وَالشَّكْلِ وَالْهَمْزَةِ وَالشَّدَّةِ لِتَيْسِيرِ الْقِرَاءَةِ.",
        "hint": "عَالِمُ لُغَةٍ عَرَبِيٌّ وَمُؤَسِّسُ عِلْمِ الْعَرُوضِ."
      }
    }
  },
  {
    "id": 6106,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelles sont les trois sourates du Coran dont le tout dernier mot est le nom même de la sourate ?",
    "options": [
      "Al-Mâ'ûn, Al-Masad et An-Nâs",
      "Al-Fâtiha, Al-Baqara et Al-Kawthar",
      "Al-Fîl, Quraych et Al-Kâfirûn",
      "Al-Qadr, Al-'Asr et Al-Ikhlâs"
    ],
    "reponse_correcte": "Al-Mâ'ûn, Al-Masad et An-Nâs",
    "explication": "Vérifie la fin de chacune : « wa yamna'ûna l-mâ'ûn », « hablun min masad », « mina l-jinnati wa n-nâs » !",
    "hint": "Elles se trouvent toutes dans le 30e juz' ('Amma).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q101",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّوَرُ الثَّلَاثُ الَّتِي آخِرُ كَلِمَةٍ فِيهَا هِيَ اسْمُ السُّورَةِ نَفْسُهُ؟",
        "options": [
          "الْمَاعُونُ وَالْمَسَدُ وَالنَّاسُ",
          "الْفَاتِحَةُ وَالْبَقَرَةُ وَالْكَوْثَرُ",
          "الْفِيلُ وَقُرَيْشٌ وَالْكَافِرُونَ",
          "الْقَدْرُ وَالْعَصْرُ وَالْإِخْلَاصُ"
        ],
        "reponse_correcte": "الْمَاعُونُ وَالْمَسَدُ وَالنَّاسُ",
        "explication": "تَخْتَتِمُ بِـ: ﴿ وَيَمْنَعُونَ الْمَاعُونَ ﴾، ﴿ حَبْلٌ مِّن مَّسَدٍ ﴾، ﴿ مِنَ الْجِنَّةِ وَالنَّاسِ ﴾.",
        "hint": "جَمِيعُهَا مِنْ سُوَرِ جُزْءِ عَمَّ."
      }
    }
  },
  {
    "id": 6107,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Qu'appelle-t-on les « couronnes des sourates coraniques » (Tîjân as-suwar) ?",
    "options": [
      "La Basmala (Bismillâhi r-Rahmâni r-Rahîm)",
      "La dernière lettre de chaque verset",
      "La prosternation de récitation",
      "Le silence entre deux sourates"
    ],
    "reponse_correcte": "La Basmala (Bismillâhi r-Rahmâni r-Rahîm)",
    "explication": "La Basmala orne le début de chaque sourate (à l'exception d'At-Tawba) telle une couronne de bénédiction.",
    "hint": "On la prononce juste avant de commencer une sourate.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q103",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هِيَ (تِيجَانُ السُّوَرِ الْقُرْآنِيَّةِ)؟",
        "options": [
          "الْبَسْمَلَةُ (بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ)",
          "سَجْدَةُ التِّلَاوَةِ",
          "السَّكْتُ بَيْنَ السُّوَرِ",
          "فَوَاتِحُ الْآيَاتِ"
        ],
        "reponse_correcte": "الْبَسْمَلَةُ (بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ)",
        "explication": "الْبَسْمَلَةُ تُتَوِّجُ بَدَايَاتِ السُّوَرِ فَتُفْتَتَحُ بِهَا الْقِرَاءَةُ تَبَرُّكًا بِاسْمِ اللَّهِ.",
        "hint": "تَتَصَدَّرُ جَمِيعَ السُّوَرِ مَا عَدَا التَّوْبَةَ."
      }
    }
  },
  {
    "id": 6108,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate 'Umar ibn al-Khattâb (RTA) lut-il chez sa sœur juste avant d'embrasser l'Islam ?",
    "options": [
      "Sourate Tâ-Hâ",
      "Sourate Al-Mulk",
      "Sourate Yâ-Sîn",
      "Sourate An-Nisâ'"
    ],
    "reponse_correcte": "Sourate Tâ-Hâ",
    "explication": "La beauté et la force des premiers versets de sourate Tâ-Hâ touchèrent profondément le cœur de 'Umar, qui se rendit aussitôt auprès du Prophète ﷺ.",
    "hint": "Elle commence par deux lettres isolées : طه.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q113",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا أَوَّلُ سُورَةٍ قَرَأَهَا عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عِنْدَ إِسْلَامِهِ؟",
        "options": [
          "سُورَةُ طَهَ",
          "سُورَةُ الْمُلْكِ",
          "سُورَةُ يس",
          "سُورَةُ النِّسَاءِ"
        ],
        "reponse_correcte": "سُورَةُ طَهَ",
        "explication": "رَقَّ قَلْبُ عُمَرَ لِمَا سَمِعَ مِنْ أَوَائِلِ سُورَةِ طَهَ فِي بَيْتِ أُخْتِهِ فَاطِمَةَ فَأَسْلَمَ رَضِيَ اللَّهُ عَنْهُ.",
        "hint": "تَبْدَأُ بِحَرْفَيْنِ مُقَطَّعَيْنِ هُمَا طَهَ."
      }
    }
  },
  {
    "id": 6109,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelles sont les deux seules sourates du Coran dont le nom est composé d'une unique lettre arabe ?",
    "options": [
      "Les sourates Sâd (ص) et Qâf (ق)",
      "Les sourates Nûn et Mîm",
      "Les sourates Yâ-Sîn et Tâ-Hâ",
      "Les sourates Hâ-Mîm et Alif-Lâm"
    ],
    "reponse_correcte": "Les sourates Sâd (ص) et Qâf (ق)",
    "explication": "Sâd (sourate 38) et Qâf (sourate 50) portent chacune le nom d'une seule lettre isolée.",
    "hint": "Ce sont les sourates numéros 38 et 50.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q119",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَتَانِ اللَّتَانِ سُمِّيَتْ كُلٌّ مِنْهُمَا بِحَرْفٍ وَاحِدٍ فَقَطْ؟",
        "options": [
          "سُورَتَا (ص) وَ (ق)",
          "سُورَتَا (يس) وَ (طه)",
          "سُورَتَا (حم) وَ (الم)",
          "سُورَتَا (ن) وَ (طس)"
        ],
        "reponse_correcte": "سُورَتَا (ص) وَ (ق)",
        "explication": "السُّورَتَانِ اللَّتَانِ اسْمُهُمَا حَرْفٌ وَاحِدٌ هُمَا ص (٣٨) وَق (٥٠).",
        "hint": "تَرْتِيبُهُمَا ٣٨ وَ٥٠ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6110,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle fut la toute première parole prononcée au berceau par le prophète 'Îsâ (paix sur lui) selon sourate Maryam ?",
    "options": [
      "« Je suis certes le serviteur d'Allah » (Innî 'abdullâh)",
      "« Je suis le roi d'Israël »",
      "« Lisez le Livre avec moi »",
      "« Bâtissez un temple ici »"
    ],
    "reponse_correcte": "« Je suis certes le serviteur d'Allah » (Innî 'abdullâh)",
    "explication": "Au verset 30 de sourate Maryam, 'Îsâ parla dès le berceau pour innocenter sa mère et affirmer son rang de serviteur et prophète d'Allah.",
    "hint": "Il commença par affirmer humblement son statut de serviteur d'Allah.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q120",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا أَوَّلُ مَا نَطَقَ بِهِ نَبِيُّ اللَّهِ عِيسَى عَلَيْهِ السَّلَامُ فِي الْمَهْدِ؟",
        "options": [
          "﴿ إِنِّي عَبْدُ اللَّهِ ﴾",
          "﴿ إِنِّي مَلِكُ قَوْمِي ﴾",
          "﴿ اقْرَءُوا كِتَابِي ﴾",
          "﴿ أَنَا بَانِي الْمَعْبَدِ ﴾"
        ],
        "reponse_correcte": "﴿ إِنِّي عَبْدُ اللَّهِ ﴾",
        "explication": "قَالَ عِيسَى عَلَيْهِ السَّلَامُ فِي الْمَهْدِ: ﴿ قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا ﴾ [مريم: 30].",
        "hint": "اعْتَرَفَ أَوَّلًا بِعُبُودِيَّتِهِ لِلَّهِ تَعَالَى."
      }
    }
  },
  {
    "id": 6111,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "À propos de quel Compagnon contraint sous la torture est descendu : « sauf celui qui y est contraint alors que son cœur demeure serein dans la foi » [An-Nahl : 106] ?",
    "options": [
      "'Ammâr ibn Yâsir (RTA)",
      "Salmân al-Fârisî (RTA)",
      "Abû Bakr as-Siddîq (RTA)",
      "Sa'd ibn Abî Waqqâs (RTA)"
    ],
    "reponse_correcte": "'Ammâr ibn Yâsir (RTA)",
    "explication": "Après la mort en martyr de ses parents Yâsir et Sumayya, 'Ammâr fut torturé à l'extrême ; le Prophète ﷺ le rassura et ce verset fut révélé.",
    "hint": "Sa mère Sumayya fut la première martyre de l'Islam.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q127",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِيمَنْ نَزَلَ قَوْلُهُ تَعَالَى: ﴿ إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ ﴾ [النحل: 106]؟",
        "options": [
          "عَمَّارُ بْنُ يَاسِرٍ رَضِيَ اللَّهُ عَنْهُ",
          "سَلْمَانُ الْفَارِسِيُّ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللَّهُ عَنْهُ",
          "سَعْدُ بْنُ أَبِي وَقَّاصٍ رَضِيَ اللَّهُ عَنْهُ"
        ],
        "reponse_correcte": "عَمَّارُ بْنُ يَاسِرٍ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "نَزَلَتِ الْآيَةُ تَطْمِينًا لِعَمَّارِ بْنِ يَاسِرٍ بَعْدَ اشْتِدَادِ تَعْذِيبِ الْمُشْرِكِينَ لَهُ.",
        "hint": "أُمُّهُ سُمَيَّةُ أَوَّلُ شَهِيدَةٍ فِي الْإِسْلَامِ."
      }
    }
  },
  {
    "id": 6112,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quels deux prophètes dans le Coran ont reçu d'Allah des enfants alors qu'ils étaient déjà très âgés ?",
    "options": [
      "Ibrâhîm et Zakariyyâ (paix sur eux deux)",
      "Yûsuf et Mûsâ",
      "Dâwûd et Sulaymân",
      "Hûd et Sâlih"
    ],
    "reponse_correcte": "Ibrâhîm et Zakariyyâ (paix sur eux deux)",
    "explication": "Ibrâhîm reçut Ismâ'îl et Ishâq dans sa vieillesse, et Zakariyyâ reçut Yahyâ après avoir invoqué Allah avec espérance.",
    "hint": "Le fils de Zakariyyâ se nomme Yahyâ.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q131",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "نَبِيَّانِ رَزَقَهُمَا اللَّهُ الْأَوْلَادَ عَلَى كِبَرٍ فِي الْقُرْآنِ، فَمَنْ هُمَا؟",
        "options": [
          "إِبْرَاهِيمُ وَزَكَرِيَّا عَلَيْهِمَا السَّلَامُ",
          "يُوسُفُ وَمُوسَى",
          "دَاوُدُ وَسُلَيْمَانُ",
          "هُودٌ وَصَالِحٌ"
        ],
        "reponse_correcte": "إِبْرَاهِيمُ وَزَكَرِيَّا عَلَيْهِمَا السَّلَامُ",
        "explication": "رُزِقَ إِبْرَاهِيمُ بِإِسْمَاعِيلَ وَإِسْحَاقَ، وَرُزِقَ زَكَرِيَّا بِيَحْيَى عَلَى كِبَرٍ.",
        "hint": "وَلَدُ زَكَرِيَّا هُوَ النَّبِيُّ يَحْيَى عَلَيْهِ السَّلَامُ."
      }
    }
  },
  {
    "id": 6113,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Par quel phénomène naturel le peuple rebelle de 'Âd fut-il anéanti selon le Coran ?",
    "options": [
      "Un vent furieux et violent",
      "Un déluge d'eau",
      "Une pluie de pierres brûlantes",
      "Un tremblement de terre unique"
    ],
    "reponse_correcte": "Un vent furieux et violent",
    "explication": "Sourate Al-Hâqqa (v. 6) raconte que le peuple de 'Âd (peuple de Hûd) fut détruit par un vent glacial et furieux pendant sept nuits et huit jours.",
    "hint": "Il souffla sept nuits et huit jours sans relâche.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q133",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِأَيِّ شَيْءٍ أُهْلِكَ قَوْمُ عَادٍ؟",
        "options": [
          "بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ",
          "بِطُوفَانٍ عَظِيمٍ",
          "بِحِجَارَةٍ مِنْ سِجِّيلٍ",
          "بِالْغَرَقِ فِي الْبَحْرِ"
        ],
        "reponse_correcte": "بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ",
        "explication": "أُهْلِكَ قَوْمُ هُودٍ (عَادٌ) بِرِيحٍ عَاتِيَةٍ سَخَّرَهَا اللَّهُ عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ.",
        "hint": "دَامَتْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا."
      }
    }
  },
  {
    "id": 6114,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate est connue sous le nom de « Ad-Dîn » (La Religion) et clôt la série des sourates commençant par une interrogation ?",
    "options": [
      "Sourate Al-Mâ'ûn",
      "Sourate Al-Kawthar",
      "Sourate Al-Fîl",
      "Sourate Al-Qâri'a"
    ],
    "reponse_correcte": "Sourate Al-Mâ'ûn",
    "explication": "Sourate Al-Mâ'ûn s'ouvre par « A-ra'ayta lladhî yukadhdhibu bi-d-dîn » (Vois-tu celui qui traite de mensonge la Rétribution/Religion ?).",
    "hint": "Elle mentionne aussi la négligence de la prière et le refus d'entraide.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q136-Q138",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي تُعْرَفُ بِسُورَةِ (الدِّينِ) وَهِيَ آخِرُ سُورَةٍ بَدَأَتْ بِالِاسْتِفْهَامِ؟",
        "options": [
          "سُورَةُ الْمَاعُونِ",
          "سُورَةُ الْكَوْثَرِ",
          "سُورَةُ الْفِيلِ",
          "سُورَةُ الْقَارِعَةِ"
        ],
        "reponse_correcte": "سُورَةُ الْمَاعُونِ",
        "explication": "تَبْدَأُ سُورَةُ الْمَاعُونِ بِـ: ﴿ أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ﴾ وَلِذَلِكَ تُعْرَفُ بِسُورَةِ الدِّينِ.",
        "hint": "تَتَحَدَّثُ عَنْ إِطْعَامِ الْمِسْكِينِ وَإِكْرَامِ الْيَتِيمِ."
      }
    }
  },
  {
    "id": 6115,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate n'a eu son semblable ni dans la Thora ni dans l'Évangile selon un hadith authentique ?",
    "options": [
      "Sourate Al-Fâtiha",
      "Sourate Yâ-Sîn",
      "Sourate Al-Kahf",
      "Sourate Al-Wâqi'a"
    ],
    "reponse_correcte": "Sourate Al-Fâtiha",
    "explication": "Le Prophète ﷺ a qualifié Al-Fâtiha de « plus grande sourate du Coran » et des sept versets répétés (As-Sab' al-Mathânî).",
    "hint": "On la récite obligatoirement dans chaque rak'a de la prière.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q143",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي لَمْ يَنْزِلْ مِثْلُهَا فِي التَّوْرَاةِ وَلَا فِي الْإِنجِيلِ؟",
        "options": [
          "سُورَةُ الْفَاتِحَةِ",
          "سُورَةُ يس",
          "سُورَةُ الْكَهْفِ",
          "سُورَةُ الْوَاقِعَةِ"
        ],
        "reponse_correcte": "سُورَةُ الْفَاتِحَةِ",
        "explication": "سُورَةُ الْفَاتِحَةِ هِيَ أُمُّ الْكِتَابِ وَأَعْظَمُ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ.",
        "hint": "نَقْرَؤُهَا فِي كُلِّ رَكْعَةٍ مِنَ الصَّلَاةِ."
      }
    }
  },
  {
    "id": 6116,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Qui est désigné par : « Le lui a enseigné un être doué d'une force prodigieuse » [An-Najm : 5] ?",
    "options": [
      "L'ange Jibrîl (paix sur lui)",
      "L'ange Mîkâ'îl",
      "Le prophète Mûsâ",
      "Le Compagnon Zayd ibn Thâbit"
    ],
    "reponse_correcte": "L'ange Jibrîl (paix sur lui)",
    "explication": "C'est l'ange Jibrîl (Gabriel), fidèle messager de la révélation, qui transmit le Coran au Prophète Mouhammad ﷺ.",
    "hint": "C'est l'ange chargé de transmettre la révélation aux prophètes.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q146",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمَقْصُودُ بِقَوْلِهِ تَعَالَى: ﴿ عَلَّمَهُ شَدِيدُ الْقُوَىٰ ﴾ [النجم: 5]؟",
        "options": [
          "جِبْرِيلُ عَلَيْهِ السَّلَامُ",
          "مِيكَائِيلُ عَلَيْهِ السَّلَامُ",
          "مُوسَى عَلَيْهِ السَّلَامُ",
          "زَيْدُ بْنُ ثَابِتٍ"
        ],
        "reponse_correcte": "جِبْرِيلُ عَلَيْهِ السَّلَامُ",
        "explication": "شَدِيدُ الْقُوَى هُوَ جِبْرِيلُ عَلَيْهِ السَّلَامُ أَمِينُ الْوَحْيِ.",
        "hint": "الْمَلَكُ الْمُوَكَّلُ بِالْوَحْيِ."
      }
    }
  },
  {
    "id": 6117,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "De quelle sourate le Prophète ﷺ a-t-il dit que Satan s'enfuit de la maison dans laquelle elle est récitée ?",
    "options": [
      "Sourate Al-Baqara",
      "Sourate Al-Qalam",
      "Sourate Al-Muddathir",
      "Sourate Al-Burûj"
    ],
    "reponse_correcte": "Sourate Al-Baqara",
    "explication": "Dans Sahîh Muslim : « Ne faites pas de vos maisons des tombeaux ; certes Satan s'enfuit de la maison où l'on récite sourate Al-Baqara. »",
    "hint": "C'est la plus longue sourate du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q147 & Q254",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي يَفِرُّ الشَّيْطَانُ مِنَ الْبَيْتِ الَّذِي تُقْرَأُ فِيهِ؟",
        "options": [
          "سُورَةُ الْبَقَرَةِ",
          "سُورَةُ الْقَلَمِ",
          "سُورَةُ الْمُدَّثِّرِ",
          "سُورَةُ الْبُرُوجِ"
        ],
        "reponse_correcte": "سُورَةُ الْبَقَرَةِ",
        "explication": "قَالَ ﷺ: «إِنَّ الشَّيْطَانَ يَنْفِرُ مِنَ الْبَيْتِ الَّذِي تُقْرَأُ فِيهِ سُورَةُ الْبَقَرَةِ».",
        "hint": "هِيَ أَطْوَلُ سُورَةٍ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6118,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans le verset « Et Nous l'avons guidé vers les deux voies (an-najdayn) » [Al-Balad : 10], que désigne « an-najdayn » ?",
    "options": [
      "Les deux voies : celle du bien et celle du mal",
      "Les deux montagnes de La Mecque",
      "Les deux mers de l'Orient",
      "Les deux saisons de l'année"
    ],
    "reponse_correcte": "Les deux voies : celle du bien et celle du mal",
    "explication": "Allah a montré clairement à l'être humain le chemin de la guidée et celui de l'égarement afin qu'il choisisse le bien.",
    "hint": "Il s'agit d'un choix moral entre deux directions opposées.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q149",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا مَعْنَى (النَّجْدَيْنِ) فِي سُورَةِ الْبَلَدِ: ﴿ وَهَدَيْنَاهُ النَّجْدَيْنِ ﴾؟",
        "options": [
          "طَرِيقَا الْخَيْرِ وَالشَّرِّ",
          "جَبَلَا مَكَّةَ",
          "الْبَحْرَانِ الشَّرْقِيُّ وَالْغَرْبِيُّ",
          "فَصْلَا السَّنَةِ"
        ],
        "reponse_correcte": "طَرِيقَا الْخَيْرِ وَالشَّرِّ",
        "explication": "النَّجْدَانِ هُمَا طَرِيقُ الْخَيْرِ وَالْهُدَى، وَطَرِيقُ الشَّرِّ وَالضَّلَالِ، وَقَدْ بَيَّنَهُمَا اللَّهُ لِلْإِنْسَانِ.",
        "hint": "طَرِيقَانِ مُتَقَابِلَانِ فِي الْعَمَلِ وَالسُّلُوكِ."
      }
    }
  },
  {
    "id": 6119,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Sous quel arbre Maryam (paix sur elle) s'assit-elle lorsqu'elle donna naissance à 'Îsâ (paix sur lui) ?",
    "options": [
      "Un palmier (dattier)",
      "Un olivier",
      "Un figuier",
      "Un grenadier"
    ],
    "reponse_correcte": "Un palmier (dattier)",
    "explication": "Allah lui dit dans sourate Maryam (v. 25) : « Secoue vers toi le tronc du palmier : il fera tomber sur toi des dattes fraîches et mûres. »",
    "hint": "Ses fruits sont des dattes mûres et nourrissantes.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q163",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الشَّجَرَةُ الَّتِي جَلَسَتْ تَحْتَهَا مَرْيَمُ عَلَيْهَا السَّلَامُ حِينَ وَلَدَتْ عِيسَى عَلَيْهِ السَّلَامُ؟",
        "options": [
          "النَّخْلَةُ",
          "الزَّيْتُونَةُ",
          "التِّينَةُ",
          "الرُّمَّانَةُ"
        ],
        "reponse_correcte": "النَّخْلَةُ",
        "explication": "قَالَ تَعَالَى: ﴿ وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا ﴾ [مريم: 25].",
        "hint": "أَسْقَطَتْ لَهَا رُطَبًا جَنِيًّا."
      }
    }
  },
  {
    "id": 6120,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate médinoise fut révélée entièrement à propos des événements liés aux Banû an-Nadîr ?",
    "options": [
      "Sourate Al-Hachr",
      "Sourate Al-Mâ'ida",
      "Sourate At-Tîn",
      "Sourate Luqmân"
    ],
    "reponse_correcte": "Sourate Al-Hachr",
    "explication": "Ibn 'Abbâs surnommait même sourate Al-Hachr « la sourate des Banû an-Nadîr », et elle s'achève par les célèbres versets des Beaux Noms d'Allah.",
    "hint": "C'est la sourate 59, qui s'achève par « Huwallâhu lladhî lâ ilâha illâ huwa... ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q166",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي نَزَلَتْ بِأَكْمَلِهَا فِي غَزْوَةِ بَنِي النَّضِيرِ؟",
        "options": [
          "سُورَةُ الْحَشْرِ",
          "سُورَةُ الْمَائِدَةِ",
          "سُورَةُ التِّينِ",
          "سُورَةُ لُقْمَانَ"
        ],
        "reponse_correcte": "سُورَةُ الْحَشْرِ",
        "explication": "كَانَ ابْنُ عَبَّاسٍ يَقُولُ عَنْ سُورَةِ الْحَشْرِ: قُلْ سُورَةُ بَنِي النَّضِيرِ.",
        "hint": "تَخْتَتِمُ بِذِكْرِ أَسْمَاءِ اللَّهِ الْحُسْنَى [الحشر: ٢٢-٢٤]."
      }
    }
  },
  {
    "id": 6121,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate, récitée avant de dormir, constitue un désaveu clair du polythéisme ?",
    "options": [
      "Sourate Al-Kâfirûn",
      "Sourate Al-Fîl",
      "Sourate At-Takâthur",
      "Sourate Al-Humaza"
    ],
    "reponse_correcte": "Sourate Al-Kâfirûn",
    "explication": "Le Prophète ﷺ a enseigné de réciter « Qul yâ ayyuhâ l-kâfirûn » avant le coucher comme attestation de monothéisme pur.",
    "hint": "Elle s'achève par « À vous votre religion, et à moi ma religion ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q172",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي إِذَا قَرَأْتَهَا عِنْدَ نَوْمِكَ كَانَتْ بَرَاءَةً لَكَ مِنَ الشِّرْكِ؟",
        "options": [
          "سُورَةُ الْكَافِرُونَ",
          "سُورَةُ الْفِيلِ",
          "سُورَةُ التَّكَاثُرِ",
          "سُورَةُ الْهُمَزَةِ"
        ],
        "reponse_correcte": "سُورَةُ الْكَافِرُونَ",
        "explication": "أَوْصَى النَّبِيُّ ﷺ بِقِرَاءَةِ ﴿ قُلْ يَا أَيُّهَا الْكَافِرُونَ ﴾ عِنْدَ النَّوْمِ فَإِنَّهَا بَرَاءَةٌ مِنَ الشِّرْكِ.",
        "hint": "تَخْتَتِمُ بِـ ﴿ لَكُمْ دِينُكُمْ وَلِيَ دِينِ ﴾."
      }
    }
  },
  {
    "id": 6122,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelles sont les quatre sourates du Coran qui comptent chacune exactement cinq versets ?",
    "options": [
      "Al-Qadr, Al-Fîl, Al-Masad et Al-Falaq",
      "Al-Fâtiha, Al-Ikhlâs, Al-Kawthar et An-Nâs",
      "Al-'Asr, Quraych, Al-Mâ'ûn et An-Nasr",
      "At-Tîn, Al-'Alaq, Ad-Duhâ et Ach-Charh"
    ],
    "reponse_correcte": "Al-Qadr, Al-Fîl, Al-Masad et Al-Falaq",
    "explication": "Chacune de ces quatre sourates brèves du 30e juz' est composée de 5 versets exactement.",
    "hint": "La première parle de la Nuit du Destin et la dernière cherche protection à l'aube.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q173",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا هِيَ السُّوَرُ الْأَرْبَعُ فِي الْقُرْآنِ الَّتِي عَدَدُ آيَاتِ كُلٍّ مِنْهَا خَمْسُ آيَاتٍ؟",
        "options": [
          "الْقَدْرُ وَالْفِيلُ وَالْمَسَدُ وَالْفَلَقُ",
          "الْفَاتِحَةُ وَالْإِخْلَاصُ وَالْكَوْثَرُ وَالنَّاسُ",
          "الْعَصْرُ وَقُرَيْشٌ وَالْمَاعُونُ وَالنَّصْرُ",
          "التِّينُ وَالْعَلَقُ وَالضُّحَى وَالشَّرْحُ"
        ],
        "reponse_correcte": "الْقَدْرُ وَالْفِيلُ وَالْمَسَدُ وَالْفَلَقُ",
        "explication": "كُلٌّ مِنَ الْقَدْرِ وَالْفِيلِ وَالْمَسَدِ وَالْفَلَقِ تَتَأَلَّفُ مِنْ خَمْسِ آيَاتٍ.",
        "hint": "أُولَاهَا تَتَحَدَّثُ عَنْ لَيْلَةِ الْقَدْرِ وَآخِرُهَا سُورَةُ الْفَلَقِ."
      }
    }
  },
  {
    "id": 6123,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Durant quel mois béni l'ange Jibrîl révisait-il le Coran avec le Prophète ﷺ chaque année ?",
    "options": [
      "Le mois de Ramadan",
      "Le mois de Chawwâl",
      "Le mois de Rajab",
      "Le mois de Safar"
    ],
    "reponse_correcte": "Le mois de Ramadan",
    "explication": "Jibrîl rencontrait le Prophète ﷺ chaque nuit de Ramadan pour réviser le Coran — et deux fois durant le dernier Ramadan de sa vie.",
    "hint": "C'est le mois du jeûne obligatoire et de la révélation du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q180",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ شَهْرٍ كَانَ يُدَارِسُ جِبْرِيلُ عَلَيْهِ السَّلَامُ النَّبِيَّ ﷺ الْقُرْآنَ كُلَّ عَامٍ؟",
        "options": [
          "شَهْرُ رَمَضَانَ",
          "شَهْرُ شَوَّالٍ",
          "شَهْرُ رَجَبٍ",
          "شَهْرُ صَفَرٍ"
        ],
        "reponse_correcte": "شَهْرُ رَمَضَانَ",
        "explication": "كَانَ جِبْرِيلُ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، وَعَارَضَهُ مَرَّتَيْنِ فِي عَامِ وَفَاتِهِ.",
        "hint": "شَهْرُ الصِّيَامِ وَنُزُولِ الْقُرْآنِ."
      }
    }
  },
  {
    "id": 6124,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle est l'unique sourate du Coran dont les deux premiers versets sont tous deux composés de lettres isolées ?",
    "options": [
      "Sourate Ach-Chûrâ (حم ۝ عسق)",
      "Sourate Al-Baqara",
      "Sourate Yâ-Sîn",
      "Sourate Maryam"
    ],
    "reponse_correcte": "Sourate Ach-Chûrâ (حم ۝ عسق)",
    "explication": "Dans sourate Ach-Chûrâ (42), le verset 1 est « Hâ-Mîm » et le verset 2 est « 'Ayn-Sîn-Qâf ».",
    "hint": "Son titre signifie « La Consultation ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q186",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الْوَحِيدَةُ الَّتِي أَوَّلُ آيَتَيْنِ فِيهَا حُرُوفٌ مُقَطَّعَةٌ؟",
        "options": [
          "سُورَةُ الشُّورَى (حم ۝ عسق)",
          "سُورَةُ الْبَقَرَةِ",
          "سُورَةُ يس",
          "سُورَةُ مَرْيَمَ"
        ],
        "reponse_correcte": "سُورَةُ الشُّورَى (حم ۝ عسق)",
        "explication": "سُورَةُ الشُّورَى تَبْدَأُ بِآيَتَيْنِ مِنَ الْحُرُوفِ الْمُقَطَّعَةِ: الآيَةُ ١ (حم) وَالْآيَةُ ٢ (عسق).",
        "hint": "اسْمُهَا يَدُلُّ عَلَى مَبْدَأِ التَّشَاوُرِ."
      }
    }
  },
  {
    "id": 6125,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel prophète prononça : « C'est plutôt le plus grand d'entre eux que voici qui l'a fait. Demandez-leur donc, s'ils peuvent parler » [Al-Anbiyâ' : 63] ?",
    "options": [
      "Ibrâhîm (paix sur lui)",
      "Mûsâ (paix sur lui)",
      "Hûd (paix sur lui)",
      "Sâlih (paix sur lui)"
    ],
    "reponse_correcte": "Ibrâhîm (paix sur lui)",
    "explication": "Ibrâhîm (paix sur lui) brisa les idoles sauf la plus grande afin d'éveiller la raison de son peuple sur l'absurdité d'adorer des statues impuissantes.",
    "hint": "Il brisa les idoles de son peuple avant d'être jeté dans le feu rendu frais.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q193",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمُتَحَدِّثُ فِي قَوْلِهِ تَعَالَى: ﴿ قَالَ بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِن كَانُوا يَنطِقُونَ ﴾ [الأنبياء: 63]؟",
        "options": [
          "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
          "مُوسَى عَلَيْهِ السَّلَامُ",
          "هُودٌ عَلَيْهِ السَّلَامُ",
          "صَالِحٌ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ",
        "explication": "أَقَامَ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ الْحُجَّةَ الْعَقْلِيَّةَ عَلَى قَوْمِهِ الَّذِينَ يَعْبُدُونَ أَصْنَامًا لَا تَنْطِقُ.",
        "hint": "حَطَّمَ الْأَصْنَامَ وَتَرَكَ كَبِيرَهَا."
      }
    }
  },
  {
    "id": 6126,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Qui parle dans le verset : « J'ai trouvé une femme qui règne sur eux » [An-Naml : 23] ?",
    "options": [
      "La huppe de Sulaymân (paix sur lui)",
      "La fourmi de la vallée",
      "Le ministre Âsaf",
      "Un ange messager"
    ],
    "reponse_correcte": "La huppe de Sulaymân (paix sur lui)",
    "explication": "La huppe (al-hudhud) revint auprès de Sulaymân avec des nouvelles précises du royaume de Saba et de sa reine Bilqîs.",
    "hint": "C'est un oiseau célèbre dans sourate An-Naml.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q195",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ الْمُتَحَدِّثُ فِي قَوْلِهِ تَعَالَى: ﴿ إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ ﴾ [النمل: 23]؟",
        "options": [
          "هُدْهُدُ سُلَيْمَانَ عَلَيْهِ السَّلَامُ",
          "النَّمْلَةُ",
          "آصَفُ بْنُ بَرْخِيَا",
          "مَلَكٌ مُرْسَلٌ"
        ],
        "reponse_correcte": "هُدْهُدُ سُلَيْمَانَ عَلَيْهِ السَّلَامُ",
        "explication": "جَاءَ الْهُدْهُدُ إِلَى سُلَيْمَانَ عَلَيْهِ السَّلَامُ بِخَبَرِ مَمْلَكَةِ سَبَأٍ وَمَلِكَتِهَا بِلْقِيسَ.",
        "hint": "طَائِرٌ مَذْكُورٌ فِي سُورَةِ النَّمْلِ."
      }
    }
  },
  {
    "id": 6127,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "À quelle expédition fait allusion le verset : « Lorsque vous étiez sur le versant le plus proche et eux sur le versant le plus éloigné » [Al-Anfâl : 42] ?",
    "options": [
      "La bataille de Badr",
      "La bataille d'Uhud",
      "La bataille des Coalisés (Al-Ahzâb)",
      "L'expédition de Tabûk"
    ],
    "reponse_correcte": "La bataille de Badr",
    "explication": "Sourate Al-Anfâl expose en détail la bataille de Badr (An 2 H), où Allah secourut les croyants peu nombreux face à une armée trois fois supérieure.",
    "hint": "Cette sourate entière traite du partage du butin et du Jour du Discernement (Yawm al-Furqân).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q196-Q199",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْغَزْوَةُ الَّتِي تُشِيرُ إِلَيْهَا الْآيَةُ: ﴿ إِذْ أَنتُم بِالْعُدْوَةِ الدُّنْيَا وَهُم بِالْعُدْوَةِ الْقُصْوَىٰ ﴾ [الأنفال: 42]؟",
        "options": [
          "غَزْوَةُ بَدْرٍ",
          "غَزْوَةُ أُحُدٍ",
          "غَزْوَةُ الْأَحْزَابِ",
          "غَزْوَةُ تَبُوكَ"
        ],
        "reponse_correcte": "غَزْوَةُ بَدْرٍ",
        "explication": "تَحَدَّثَتْ سُورَةُ الْأَنْفَالِ عَنْ غَزْوَةِ بَدْرٍ الْكُبْرَى وَنَصْرِ اللَّهِ لِلْمُؤْمِنِينَ فِيهَا.",
        "hint": "تُسَمَّى يَوْمَ الْفُرْقَانِ فِي سُورَةِ الْأَنْفَالِ."
      }
    }
  },
  {
    "id": 6128,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "À quelle bataille fait allusion : « Nous avons envoyé contre elles un vent et des armées que vous n'avez pas vues » [Al-Ahzâb : 9] ?",
    "options": [
      "La bataille des Coalisés (Al-Ahzâb / le Fossé)",
      "La bataille de Badr",
      "La bataille de Khaybar",
      "La bataille de Hunayn"
    ],
    "reponse_correcte": "La bataille des Coalisés (Al-Ahzâb / le Fossé)",
    "explication": "En l'an 5 H, alors que Médine était assiégée derrière le fossé creusé sur le conseil de Salmân al-Fârisî, Allah envoya un vent glacial qui dispersa les coalisés.",
    "hint": "Le nom de la bataille est aussi le titre même de la sourate 33.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q197",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "إِلَى أَيِّ غَزْوَةٍ يُشِيرُ قَوْلُهُ تَعَالَى: ﴿ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا وَجُنُودًا لَّمْ تَرَوْهَا ﴾ [الأحزاب: 9]؟",
        "options": [
          "غَزْوَةُ الْأَحْزَابِ (الْخَنْدَقُ)",
          "غَزْوَةُ بَدْرٍ",
          "غَزْوَةُ خَيْبَرَ",
          "غَزْوَةُ حُنَيْنٍ"
        ],
        "reponse_correcte": "غَزْوَةُ الْأَحْزَابِ (الْخَنْدَقُ)",
        "explication": "حَفَرَ الْمُسْلِمُونَ الْخَنْدَقَ بِمَشُورَةِ سَلْمَانَ الْفَارِسِيِّ، فَأَرْسَلَ اللَّهُ رِيحًا صَرْصَرًا شَتَّتَتِ الْأَحْزَابَ.",
        "hint": "الِاسْمُ مُطَابِقٌ لِاسْمِ السُّورَةِ رَقْمِ ٣٣."
      }
    }
  },
  {
    "id": 6129,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle est la plus longue histoire relatée d'un seul tenant dans le Noble Coran ?",
    "options": [
      "L'histoire de Yûsuf (Joseph, paix sur lui)",
      "L'histoire des Compagnons de la Caverne",
      "L'histoire de Dhu al-Qarnayn",
      "L'histoire de Qârûn"
    ],
    "reponse_correcte": "L'histoire de Yûsuf (Joseph, paix sur lui)",
    "explication": "Toute la sourate Yûsuf (111 versets) suit chronologiquement la vie du prophète Yûsuf, qualifiée par le Coran de « plus beau des récits ».",
    "hint": "Une sourate entière lui est consacrée du rêve d'enfance jusqu'aux retrouvailles familiales.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q202",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا أَطْوَلُ قِصَّةٍ مُتَّصِلَةٍ فِي الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "قِصَّةُ يُوسُفَ عَلَيْهِ السَّلَامُ",
          "قِصَّةُ أَصْحَابِ الْكَهْفِ",
          "قِصَّةُ ذِي الْقَرْنَيْنِ",
          "قِصَّةُ قَارُونَ"
        ],
        "reponse_correcte": "قِصَّةُ يُوسُفَ عَلَيْهِ السَّلَامُ",
        "explication": "أُفْرِدَتْ سُورَةُ يُوسُفَ كَامِلَةً لِسَرْدِ قِصَّتِهِ وَسَمَّاهَا اللَّهُ ﴿ أَحْسَنَ الْقَصَصِ ﴾.",
        "hint": "وُصِفَتْ فِي السُّورَةِ بِأَنَّهَا «أَحْسَنُ الْقَصَصِ»."
      }
    }
  },
  {
    "id": 6130,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle est la Demeure sacrée située au septième ciel dont le nom figure dans sourate At-Tûr ?",
    "options": [
      "Al-Bayt al-Ma'mûr (la Maison peuplée)",
      "Al-Masjid al-Aqsâ",
      "Dâr an-Nadwa",
      "Bayt al-Hikma"
    ],
    "reponse_correcte": "Al-Bayt al-Ma'mûr (la Maison peuplée)",
    "explication": "Chaque jour, soixante-dix mille anges entrent dans Al-Bayt al-Ma'mûr pour y prier et n'y reviennent plus jamais.",
    "hint": "Son nom signifie littéralement « la Maison peuplée (d'adorateurs) ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q204",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْبَيْتُ الْمَوْجُودُ فِي السَّمَاءِ الَّذِي ذُكِرَ اسْمُهُ فِي سُورَةِ الطُّورِ؟",
        "options": [
          "الْبَيْتُ الْمَعْمُورُ",
          "الْمَسْجِدُ الْأَقْصَى",
          "دَارُ النَّدْوَةِ",
          "بَيْتُ الْحِكْمَةِ"
        ],
        "reponse_correcte": "الْبَيْتُ الْمَعْمُورُ",
        "explication": "أَقْسَمَ اللَّهُ بِهِ فِي سُورَةِ الطُّورِ، وَيَدْخُلُهُ كُلَّ يَوْمٍ سَبْعُونَ أَلْفَ مَلَكٍ لِلْعِبَادَةِ.",
        "hint": "تَقَعُ فَوْقَ السَّمَاءِ السَّابِعَةِ وَتُحَاذِي الْكَعْبَةَ."
      }
    }
  },
  {
    "id": 6131,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans quelle sourate l'histoire des deux fils d'Âdam (Hâbîl et Qâbîl) est-elle racontée ?",
    "options": [
      "Sourate Al-Mâ'ida",
      "Sourate Al-Fajr",
      "Sourate Al-Burûj",
      "Sourate Al-Ikhlâs"
    ],
    "reponse_correcte": "Sourate Al-Mâ'ida",
    "explication": "Aux versets 27 à 31 de sourate Al-Mâ'ida, Allah relate l'offrande acceptée de Hâbîl et la leçon morale contre la jalousie et l'injustice.",
    "hint": "C'est la 5e sourate du Coran (« La Table servie »).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q208",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سُورَةٍ ذُكِرَتْ قِصَّةُ ابْنَيْ آدَمَ (هَابِيلَ وَقَابِيلَ)؟",
        "options": [
          "سُورَةُ الْمَائِدَةِ",
          "سُورَةُ الْفَجْرِ",
          "سُورَةُ الْبُرُوجِ",
          "سُورَةُ الْإِخْلَاصِ"
        ],
        "reponse_correcte": "سُورَةُ الْمَائِدَةِ",
        "explication": "وَرَدَتِ الْقِصَّةُ فِي سُورَةِ الْمَائِدَةِ [٢٧-٣١] لِتَبْيِينِ عَاقِبَةِ الْحَسَدِ وَالْعُدْوَانِ وَحُرْمَةِ النَّفْسِ.",
        "hint": "هِيَ السُّورَةُ الْخَامِسَةُ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6132,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Comment le Coran appelle-t-il ceux dont les bonnes et mauvaises actions s'équilibrent au Jour dernier ?",
    "options": [
      "Les gens d'Al-A'râf",
      "Les gens du Paradis directement",
      "Les Compagnons de la Caverne",
      "Les gens du Fossé"
    ],
    "reponse_correcte": "Les gens d'Al-A'râf",
    "explication": "Ils séjournent un temps sur les murailles élevées d'Al-A'râf entre le Paradis et l'Enfer, puis Allah leur fait miséricorde et les fait entrer au Paradis.",
    "hint": "Une sourate médino-mecquoise (la 7e) porte leur nom.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q214",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِمَاذَا يُعْرَفُ الَّذِينَ تَتَسَاوَى حَسَنَاتُهُمْ وَسَيِّئَاتُهُمْ يَوْمَ الْقِيَامَةِ؟",
        "options": [
          "أَهْلُ الْأَعْرَافِ",
          "أَصْحَابُ الْكَهْفِ",
          "أَصْحَابُ الْأُخْدُودِ",
          "أَصْحَابُ الرَّسِّ"
        ],
        "reponse_correcte": "أَهْلُ الْأَعْرَافِ",
        "explication": "ذُكِرَ حَالُهُمْ فِي سُورَةِ الْأَعْرَافِ [٤٦-٤٩]، ثُمَّ يَدْخُلُونَ الْجَنَّةَ بِرَحْمَةِ اللَّهِ.",
        "hint": "تَحْمِلُ السُّورَةُ السَّابِعَةُ اسْمَ هَذَا الْمَكَانِ."
      }
    }
  },
  {
    "id": 6133,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Où sont descendus les tout premiers versets du Noble Coran ?",
    "options": [
      "Dans la grotte de Hirâ', à La Mecque honorée",
      "Dans la grotte de Thawr",
      "À la mosquée Al-Aqsâ",
      "Dans la vallée de Badr"
    ],
    "reponse_correcte": "Dans la grotte de Hirâ', à La Mecque honorée",
    "explication": "Le Prophète ﷺ s'y recueillait lorsque Jibrîl vint lui révéler les premiers versets de sourate Al-'Alaq.",
    "hint": "Elle se situe sur le mont an-Nûr, près de La Mecque (à ne pas confondre avec Thawr lors de l'Hégire).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q233",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "أَيْنَ نَزَلَتْ أَوَّلُ آيَاتِ الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "فِي غَارِ حِرَاءٍ بِمَكَّةَ الْمُكَرَّمَةِ",
          "فِي غَارِ ثَوْرٍ",
          "فِي الْمَسْجِدِ الْأَقْصَى",
          "فِي وَادِي بَدْرٍ"
        ],
        "reponse_correcte": "فِي غَارِ حِرَاءٍ بِمَكَّةَ الْمُكَرَّمَةِ",
        "explication": "نَزَلَتْ أَوَائِلُ سُورَةِ الْعَلَقِ عَلَى النَّبِيِّ ﷺ وَهُوَ يَتَعَبَّدُ فِي غَارِ حِرَاءٍ بِجَبَلِ النُّورِ.",
        "hint": "يَقَعُ فِي جَبَلِ النُّورِ بِمَكَّةَ (لَيْسَ غَارَ الْهِجْرَةِ)."
      }
    }
  },
  {
    "id": 6134,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelles sont les deux seules sourates du Coran à ne compter que trois versets ?",
    "options": [
      "Sourates Al-'Asr et Al-Kawthar",
      "Sourates Al-Ikhlâs et An-Nâs",
      "Sourates Al-Fîl et Al-Mâ'ûn",
      "Sourates Al-Qadr et An-Nasr"
    ],
    "reponse_correcte": "Sourates Al-'Asr et Al-Kawthar",
    "explication": "Al-Kawthar (10 mots, 3 versets) et Al-'Asr (3 versets) — auxquelles s'ajoute parfois An-Nasr qui compte 3 versets également ; ici la paire classique des sourates brèves est Al-'Asr & Al-Kawthar.",
    "hint": "L'une jure par le Temps et l'autre parle du fleuve du Paradis.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q234",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَتَانِ اللَّتَانِ عَدَدُ آيَاتِ كُلٍّ مِنْهُمَا ثَلَاثُ آيَاتٍ؟",
        "options": [
          "سُورَتَا الْعَصْرِ وَالْكَوْثَرِ",
          "سُورَتَا الْإِخْلَاصِ وَالنَّاسِ",
          "سُورَتَا الْفِيلِ وَالْمَاعُونِ",
          "سُورَتَا الْقَدْرِ وَالْفَلَقِ"
        ],
        "reponse_correcte": "سُورَتَا الْعَصْرِ وَالْكَوْثَرِ",
        "explication": "سُورَةُ الْعَصْرِ ثَلَاثُ آيَاتٍ وَسُورَةُ الْكَوْثَرِ أَقْصَرُ سُوَرِ الْقُرْآنِ وَهِيَ ثَلَاثُ آيَاتٍ أَيْضًا.",
        "hint": "إِحْدَاهُمَا تُقْسِمُ بِالْعَصْرِ وَالْأُخْرَى تَذْكُرُ نَهْرَ الْكَوْثَرِ."
      }
    }
  },
  {
    "id": 6135,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel prophète aimait beaucoup les chevaux nobles décrits dans sourate Sâd ?",
    "options": [
      "Sulaymân (Salomon, paix sur lui)",
      "Yûnus (paix sur lui)",
      "Lût (paix sur lui)",
      "Zakariyyâ (paix sur lui)"
    ],
    "reponse_correcte": "Sulaymân (Salomon, paix sur lui)",
    "explication": "Sourate Sâd (v. 31-33) évoque la revue des chevaux rapides de Sulaymân et son attachement à ce qu'ils servent la cause d'Allah.",
    "hint": "Il était le fils du prophète Dâwûd et commandait aussi au vent.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q245",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ النَّبِيُّ الَّذِي كَانَ يُحِبُّ الْخَيْلَ الصَّافِنَاتِ الْجِيَادَ؟",
        "options": [
          "سُلَيْمَانُ عَلَيْهِ السَّلَامُ",
          "يُونُسُ عَلَيْهِ السَّلَامُ",
          "لُوطٌ عَلَيْهِ السَّلَامُ",
          "زَكَرِيَّا عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "سُلَيْمَانُ عَلَيْهِ السَّلَامُ",
        "explication": "ذَكَرَتْ سُورَةُ ص عَرْضَ الصَّافِنَاتِ الْجِيَادِ عَلَى سُلَيْمَانَ عَلَيْهِ السَّلَامُ.",
        "hint": "ابْنُ دَاوُدَ عَلَيْهِمَا السَّلَامُ."
      }
    }
  },
  {
    "id": 6136,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Qui est l'auteur de la célèbre exégèse « Ad-Durr al-Manthûr fî-t-Tafsîr bi-l-Ma'thûr » ?",
    "options": [
      "Jalâl ad-Dîn as-Suyûtî",
      "Al-Bukhârî",
      "At-Tabarî",
      "An-Nawawî"
    ],
    "reponse_correcte": "Jalâl ad-Dîn as-Suyûtî",
    "explication": "L'imam As-Suyûtî (m. 911 H) a rassemblé dans « Ad-Durr al-Manthûr » les hadiths et traditions des pieux prédécesseurs expliquant le Coran.",
    "hint": "Il est aussi co-auteur du célèbre « Tafsîr al-Jalâlayn » et de « Al-Itqân ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q246 & Q251",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ صَاحِبُ تَفْسِيرِ (الدُّرِّ الْمَنْثُورِ فِي التَّفْسِيرِ بِالْمَأْثُورِ)؟",
        "options": [
          "جَلَالُ الدِّينِ السُّيُوطِيُّ",
          "الْإِمَامُ الْبُخَارِيُّ",
          "الْإِمَامُ الطَّبَرِيُّ",
          "الْإِمَامُ النَّوَوِيُّ"
        ],
        "reponse_correcte": "جَلَالُ الدِّينِ السُّيُوطِيُّ",
        "explication": "أَلَّفَ الْإِمَامُ السُّيُوطِيُّ هَذَا التَّفْسِيرَ الْجَامِعَ لِلْأَحَادِيثِ وَالْآثَارِ التَّفْسِيرِيَّةِ.",
        "hint": "أَحَدُ مُؤَلِّفَيْ تَفْسِيرِ الْجَلَالَيْنِ وَصَاحِبُ كِتَابِ الْإِتْقَانِ."
      }
    }
  },
  {
    "id": 6137,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Combien de versets compte sourate Al-Fâtiha ?",
    "options": [
      "Sept versets",
      "Cinq versets",
      "Dix versets",
      "Douze versets"
    ],
    "reponse_correcte": "Sept versets",
    "explication": "Al-Fâtiha est appelée « As-Sab' al-Mathânî » (les Sept versets répétés) mentionnés dans sourate Al-Hijr (v. 87).",
    "hint": "On l'appelle « les Sept répétés » (As-Sab' al-Mathânî).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q261",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ آيَاتِ سُورَةِ الْفَاتِحَةِ؟",
        "options": [
          "سَبْعُ آيَاتٍ",
          "خَمْسُ آيَاتٍ",
          "عَشْرُ آيَاتٍ",
          "اثْنَتَا عَشْرَةَ آيَةً"
        ],
        "reponse_correcte": "سَبْعُ آيَاتٍ",
        "explication": "تُسَمَّى سُورَةُ الْفَاتِحَةِ بِالسَّبْعِ الْمَثَانِي لِأَنَّهَا سَبْعُ آيَاتٍ تُثَنَّى فِي كُلِّ رَكْعَةٍ.",
        "hint": "لُقِّبَتْ بِـ «السَّبْعِ الْمَثَانِي»."
      }
    }
  },
  {
    "id": 6138,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien de « Hizb » compte le Noble Coran au total (répartis en 30 Juz') ?",
    "options": [
      "60 Hizb",
      "30 Hizb",
      "114 Hizb",
      "24 Hizb"
    ],
    "reponse_correcte": "60 Hizb",
    "explication": "Le Coran est divisé en 30 Juz', et chaque Juz' contient 2 Hizb, soit exactement 60 Hizb.",
    "hint": "Il y a 2 Hizb dans chacun des 30 Juz'.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q267",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا عَدَدُ أَحْزَابِ الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "60 حِزْبًا",
          "30 حِزْبًا",
          "114 حِزْبًا",
          "24 حِزْبًا"
        ],
        "reponse_correcte": "60 حِزْبًا",
        "explication": "يَنْقَسِمُ الْقُرْآنُ إِلَى ٣٠ جُزْءًا، وَفِي كُلِّ جُزْءٍ حِزْبَانِ، فَالْمَجْمُوعُ ٦٠ حِزْبًا.",
        "hint": "فِي كُلِّ جُزْءٍ حِزْبَانِ اثْنَانِ (٢ × ٣٠)."
      }
    }
  },
  {
    "id": 6139,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate porte le nom d'un homme sage et vertueux qui n'était pas un prophète ?",
    "options": [
      "Sourate Luqmân",
      "Sourate Yûsuf",
      "Sourate Yûnus",
      "Sourate Hûd"
    ],
    "reponse_correcte": "Sourate Luqmân",
    "explication": "Allah accorda la sagesse à Luqmân et immortalisa dans la sourate 31 les conseils paternels emplis de douceur qu'il donna à son fils.",
    "hint": "C'est la sourate 31, célèbre pour les recommandations d'un père à son fils.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q269",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي سُمِّيَتْ بِاسْمِ رَجُلٍ صَالِحٍ لَيْسَ مِنَ الْأَنْبِيَاءِ؟",
        "options": [
          "سُورَةُ لُقْمَانَ",
          "سُورَةُ يُوسُفَ",
          "سُورَةُ يُونُسَ",
          "سُورَةُ هُودٍ"
        ],
        "reponse_correcte": "سُورَةُ لُقْمَانَ",
        "explication": "آتَى اللَّهُ لُقْمَانَ الْحِكْمَةَ وَخَلَّدَ وَصَايَاهُ التَّرْبَوِيَّةَ لِابْنِهِ فِي سُورَةِ لُقْمَانَ.",
        "hint": "تَضَمَّنَتْ وَصَايَاهُ الْحَكِيمَةَ لِابْنِهِ."
      }
    }
  },
  {
    "id": 6140,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate Usayd ibn Hudayr (RTA) récitait-il la nuit lorsque les anges descendirent près de lui tels un nuage lumineux ?",
    "options": [
      "Sourate Al-Baqara",
      "Sourate Al-Kahf",
      "Sourate Al-Mulk",
      "Sourate Al-Fath"
    ],
    "reponse_correcte": "Sourate Al-Baqara",
    "explication": "Dans Sahîh al-Bukhârî, le Prophète ﷺ dit à Usayd que ces lumières étaient les anges descendus pour écouter sa récitation d'Al-Baqara.",
    "hint": "C'est la 2e sourate du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q277",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي قَرَأَهَا أُسَيْدُ بْنُ حُضَيْرٍ فَدَنَتِ الْمَلَائِكَةُ لِتَسْمَعَهَا كَالظُّلَّةِ؟",
        "options": [
          "سُورَةُ الْبَقَرَةِ",
          "سُورَةُ الْكَهْفِ",
          "سُورَةُ الْمُلْكِ",
          "سُورَةُ الْفَتْحِ"
        ],
        "reponse_correcte": "سُورَةُ الْبَقَرَةِ",
        "explication": "أَخْبَرَ النَّبِيُّ ﷺ أُسَيْدًا أَنَّ تِلْكَ الْمَلَائِكَةُ دَنَتْ لِصَوْتِهِ بِسُورَةِ الْبَقَرَةِ.",
        "hint": "هِيَ السُّورَةُ الثَّانِيَةُ فِي الْمُصْحَفِ."
      }
    }
  },
  {
    "id": 6141,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien de versets compte sourate Ar-Rahmân ?",
    "options": [
      "78 versets",
      "40 versets",
      "110 versets",
      "55 versets"
    ],
    "reponse_correcte": "78 versets",
    "explication": "Sourate Ar-Rahmân compte 78 versets et répète 31 fois l'interrogation « Lequel donc des bienfaits de votre Seigneur nierez-vous ? ».",
    "hint": "C'est un peu moins de 80 versets.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q280",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ يَبْلُغُ عَدَدُ آيَاتِ سُورَةِ الرَّحْمَٰنِ؟",
        "options": [
          "78 آيَةً",
          "40 آيَةً",
          "110 آيَاتٍ",
          "55 آيَةً"
        ],
        "reponse_correcte": "78 آيَةً",
        "explication": "تَتَكَوَّنُ سُورَةُ الرَّحْمَٰنِ مِنْ ٧٨ آيَةً وَتَتَكَرَّرُ فِيهَا آيَةُ ﴿ فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ ﴾ ٣١ مَرَّةً.",
        "hint": "قَرِيبٌ مِنْ ثَمَانِينَ آيَةً."
      }
    }
  },
  {
    "id": 6142,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Pourquoi la sourate At-Tawba est-elle également appelée « Sourate Barâ'a » ?",
    "options": [
      "Parce qu'elle commence par le mot « Barâ'a » (Désaveu)",
      "Parce qu'elle a été révélée à La Mecque",
      "Parce qu'elle parle uniquement du Prophète Nûh",
      "Parce qu'elle commence par deux Basmalas"
    ],
    "reponse_correcte": "Parce qu'elle commence par le mot « Barâ'a » (Désaveu)",
    "explication": "Sourate At-Tawba est la seule sourate sans Basmala au début et commence directement par « Barâ'atun minallâhi wa rasûlih ».",
    "hint": "Regarde le tout premier mot de la sourate 9.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q281",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "لِمَاذَا تُسَمَّى سُورَةُ التَّوْبَةِ بِسُورَةِ (بَرَاءَةَ)؟",
        "options": [
          "لِأَنَّهَا بَدَأَتْ بِكَلِمَةِ ﴿ بَرَاءَةٌ ﴾",
          "لِأَنَّهَا نَزَلَتْ بِمَكَّةَ",
          "لِأَنَّهَا خَاصَّةٌ بِقِصَّةِ نُوحٍ",
          "لِأَنَّهَا تَبْدَأُ بِبَسْمَلَتَيْنِ"
        ],
        "reponse_correcte": "لِأَنَّهَا بَدَأَتْ بِكَلِمَةِ ﴿ بَرَاءَةٌ ﴾",
        "explication": "سُورَةُ التَّوْبَةِ هِيَ السُّورَةُ الْوَحِيدَةُ الَّتِي لَا تُفْتَتَحُ بِالْبَسْمَلَةِ وَتَبْدَأُ بِـ ﴿ بَرَاءَةٌ مِنَ اللَّهِ وَرَسُولِهِ ﴾.",
        "hint": "انْظُرْ إِلَى أَوَّلِ كَلِمَةٍ فِي السُّورَةِ التَّاسِعَةِ."
      }
    }
  },
  {
    "id": 6143,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quel animal est évoqué dans sourate Al-Qalam sous le nom de « al-hût » (le grand poisson / la baleine) à propos de Yûnus ?",
    "options": [
      "Le grand poisson / la baleine (al-hût)",
      "Le chameau",
      "La fourmi",
      "L'éléphant"
    ],
    "reponse_correcte": "Le grand poisson / la baleine (al-hût)",
    "explication": "Sourate Al-Qalam (v. 48) appelle le prophète Yûnus « Sâhib al-Hût » (le Compagnon du grand poisson).",
    "hint": "Le prophète Yûnus fut avalé puis rejeté sain et sauf sur le rivage.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q289",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الْحَيَوَانُ الَّذِي ذَكَرَهُ اللَّهُ فِي سُورَةِ الْقَلَمِ بِلَقَبِ صَاحِبِهِ (صَاحِبِ الْحُوتِ)؟",
        "options": [
          "الْحُوتُ",
          "النَّاقَةُ",
          "النَّمْلَةُ",
          "الْفِيلُ"
        ],
        "reponse_correcte": "الْحُوتُ",
        "explication": "قَالَ تَعَالَى: ﴿ وَلَا تَكُن كَصَاحِبِ الْحُوتِ ﴾ [القلم: 48] يَعْنِي يُونُسَ عَلَيْهِ السَّلَامُ.",
        "hint": "الْحَيَوَانُ الْبَحْرِيُّ فِي قِصَّةِ يُونُسَ عَلَيْهِ السَّلَامُ."
      }
    }
  },
  {
    "id": 6144,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Combien d'années le prophète Nûh (paix sur lui) a-t-il prêché parmi son peuple selon sourate Al-'Ankabût ?",
    "options": [
      "950 ans",
      "120 ans",
      "400 ans",
      "63 ans"
    ],
    "reponse_correcte": "950 ans",
    "explication": "Sourate Al-'Ankabût (v. 14) indique : « Il demeura parmi eux mille ans moins cinquante ans » (soit 950 ans).",
    "hint": "Le Coran le formule par « mille ans moins cinquante ans ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q292",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ سَنَةً لَبِثَ نُوحٌ عَلَيْهِ السَّلَامُ يَدْعُو قَوْمَهُ؟",
        "options": [
          "950 سَنَةً",
          "120 سَنَةً",
          "400 سَنَةٍ",
          "63 سَنَةً"
        ],
        "reponse_correcte": "950 سَنَةً",
        "explication": "قَالَ اللَّهُ تَعَالَى: ﴿ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا ﴾ [العنكبوت: 14].",
        "hint": "ذَكَرَهُ اللَّهُ بِصِيغَةِ «أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا»."
      }
    }
  },
  {
    "id": 6145,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate porte le nom d'un métal utile descendu par Allah sur terre ?",
    "options": [
      "Sourate Al-Hadîd (Le Fer)",
      "Sourate Ar-Ra'd (Le Tonnerre)",
      "Sourate Al-Qamar (La Lune)",
      "Sourate Al-Mulk (La Royauté)"
    ],
    "reponse_correcte": "Sourate Al-Hadîd (Le Fer)",
    "explication": "Sourate Al-Hadîd (57) mentionne au verset 25 : « Et Nous avons fait descendre le fer, dans lequel il y a une force redoutable et des avantages pour les gens. »",
    "hint": "Ce métal est réputé pour sa solidité et son utilité industrielle.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q294",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي سُمِّيَتْ بِاسْمِ أَحَدِ الْمَعَادِنِ؟",
        "options": [
          "سُورَةُ الْحَدِيدِ",
          "سُورَةُ الرَّعْدِ",
          "سُورَةُ الْقَمَرِ",
          "سُورَةُ الْمُلْكِ"
        ],
        "reponse_correcte": "سُورَةُ الْحَدِيدِ",
        "explication": "قَالَ تَعَالَى فِي سُورَةِ الْحَدِيدِ: ﴿ وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ ﴾.",
        "hint": "مَعْدِنٌ صُلْبٌ لَهُ مَنَافِعُ كَثِيرَةٌ لِلنَّاسِ."
      }
    }
  },
  {
    "id": 6146,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Selon la majorité des savants, l'ordre des sourates du Coran est-il le fruit d'un choix humain (ijtihâdî) ou d'une instruction prophétique (tawqîfî) ?",
    "options": [
      "Tawqîfî (établi par instruction divine et prophétique)",
      "Un pur hasard de reliure",
      "Un classement alphabétique moderne",
      "Un ordre purement chronologique de révélation"
    ],
    "reponse_correcte": "Tawqîfî (établi par instruction divine et prophétique)",
    "explication": "Le classement des versets est unanimement tawqîfî, et l'ordre des sourates du Mushaf a été arrêté sous la guidance du Prophète ﷺ et confirmé par les Compagnons.",
    "hint": "Le terme arabe signifie « fixé par la révélation / l'enseignement du Prophète ﷺ ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q297",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "هَلْ تَرْتِيبُ آيَاتِ وَسُوَرِ الْمُصْحَفِ الشَّرِيفِ اجْتِهَادِيٌّ مَحْضٌ أَمْ تَوْقِيفِيٌّ؟",
        "options": [
          "تَوْقِيفِيٌّ (مَعْلُومٌ بِالنَّصِّ وَالتَّوْجِيهِ النَّبَوِيِّ)",
          "تَرْتِيبٌ أَبْجَدِيٌّ حَدِيثٌ",
          "تَرْتِيبٌ بِحَسَبِ الْحُرُوفِ الْأُولَى",
          "تَرْتِيبٌ زَمَنِيٌّ بَحْتٌ"
        ],
        "reponse_correcte": "تَوْقِيفِيٌّ (مَعْلُومٌ بِالنَّصِّ وَالتَّوْجِيهِ النَّبَوِيِّ)",
        "explication": "عَلَّمَ النَّبِيُّ ﷺ أَصْحَابَهُ مَوَاضِعَ الْآيَاتِ وَالسُّوَرِ كَمَا عَارَضَهُ بِهَا جِبْرِيلُ عَلَيْهِ السَّلَامُ.",
        "hint": "كَلِمَةٌ تَعْنِي أَنَّهُ ثَابِتٌ بِوَحْيٍ وَتَوْقِيفٍ مِنَ النَّبِيِّ ﷺ."
      }
    }
  },
  {
    "id": 6147,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans quelle sourate la Mosquée Al-Aqsa est-elle explicitement mentionnée dès le premier verset ?",
    "options": [
      "Sourate Al-Isrâ' (Le Voyage nocturne)",
      "Sourate Al-Fath",
      "Sourate Al-Mulk",
      "Sourate Yâ-Sîn"
    ],
    "reponse_correcte": "Sourate Al-Isrâ' (Le Voyage nocturne)",
    "explication": "Le verset 1 d'Al-Isrâ' évoque le voyage nocturne du Prophète ﷺ de la Mosquée Sacrée (La Mecque) vers la Mosquée Al-Aqsa (Jérusalem).",
    "hint": "Le nom de la sourate désigne le Voyage nocturne.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q301",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سُورَةٍ جَاءَ ذِكْرُ الْمَسْجِدِ الْأَقْصَى فِي أَوَّلِ آيَةٍ؟",
        "options": [
          "سُورَةُ الْإِسْرَاءِ",
          "سُورَةُ الْفَتْحِ",
          "سُورَةُ الْمُلْكِ",
          "سُورَةُ يس"
        ],
        "reponse_correcte": "سُورَةُ الْإِسْرَاءِ",
        "explication": "قَالَ تَعَالَى: ﴿ سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى ﴾ [الإسراء: 1].",
        "hint": "سُمِّيَتِ السُّورَةُ بِاسْمِ رِحْلَةِ الْإِسْرَاءِ."
      }
    }
  },
  {
    "id": 6148,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans quelle sourate Allah jure-t-Il dès le premier verset par deux arbres fruitiers (le figuier et l'olivier) ?",
    "options": [
      "Sourate At-Tîn",
      "Sourate Al-Mâ'ûn",
      "Sourate Ad-Duhâ",
      "Sourate Al-Fajr"
    ],
    "reponse_correcte": "Sourate At-Tîn",
    "explication": "Sourate At-Tîn (95) s'ouvre par : « Par le figuier et l'olivier ! Et par le Mont Sinaï ! Et par cette Cité sûre ! ».",
    "hint": "Son titre signifie « Le Figuier ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q307",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي أَقْسَمَ اللَّهُ فِيهَا بِالتِّينِ وَالزَّيْتُونِ؟",
        "options": [
          "سُورَةُ التِّينِ",
          "سُورَةُ الْمَاعُونِ",
          "سُورَةُ الضُّحَى",
          "سُورَةُ الْفَجْرِ"
        ],
        "reponse_correcte": "سُورَةُ التِّينِ",
        "explication": "تَبْدَأُ سُورَةُ التِّينِ بِقَوْلِهِ تَعَالَى: ﴿ وَالتِّينِ وَالزَّيْتُونِ ۝ وَطُورِ سِينِينَ ﴾.",
        "hint": "اسْمُهَا هُوَ الثَّمَرَةُ الْأُولَى فِي الْقَسَمِ."
      }
    }
  },
  {
    "id": 6149,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle est l'unique sourate du Mushaf commençant par les quatre lettres isolées « Alif-Lâm-Mîm-Râ » (المر) ?",
    "options": [
      "Sourate Ar-Ra'd",
      "Sourate Yûnus",
      "Sourate Hûd",
      "Sourate Ibrâhîm"
    ],
    "reponse_correcte": "Sourate Ar-Ra'd",
    "explication": "Sourate Ar-Ra'd (13) débute par « Alif-Lâm-Mîm-Râ », tandis que Yûnus, Hûd et Ibrâhîm débutent par « Alif-Lâm-Râ ».",
    "hint": "Son nom signifie « Le Tonnerre ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q329",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الْوَحِيدَةُ الَّتِي بَدَأَتْ بِـ (المر)؟",
        "options": [
          "سُورَةُ الرَّعْدِ",
          "سُورَةُ يُونُسَ",
          "سُورَةُ هُودٍ",
          "سُورَةُ إِبْرَاهِيمَ"
        ],
        "reponse_correcte": "سُورَةُ الرَّعْدِ",
        "explication": "تَنْفَرِدُ سُورَةُ الرَّعْدِ بِبِدَايَتِهَا بِـ ﴿ المر ﴾، بَيْنَمَا تَبْدَأُ يُونُسُ وَهُودٌ بِـ ﴿ الر ﴾.",
        "hint": "اسْمُهَا يَعْنِي الرَّعْدَ."
      }
    }
  },
  {
    "id": 6150,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle est l'unique sourate du juz' Tabâraka (29e juz') à commencer par une lettre isolée ?",
    "options": [
      "Sourate Al-Qalam (ن)",
      "Sourate Al-Mulk",
      "Sourate Al-Muzzammil",
      "Sourate Nûh"
    ],
    "reponse_correcte": "Sourate Al-Qalam (ن)",
    "explication": "Sourate Al-Qalam (68) commence par la lettre Nûn (ن) suivie du serment par le calame et ce que l'on écrit.",
    "hint": "Elle s'ouvre par la lettre Nûn (ن) et le Calame (la plume).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q331",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الْوَحِيدَةُ الَّتِي بَدَأَتْ بِالْحُرُوفِ الْمُقَطَّعَةِ فِي جُزْءِ تَبَارَكَ؟",
        "options": [
          "سُورَةُ الْقَلَمِ (ن)",
          "سُورَةُ الْمُلْكِ",
          "سُورَةُ الْمُزَّمِّلِ",
          "سُورَةُ نُوحٍ"
        ],
        "reponse_correcte": "سُورَةُ الْقَلَمِ (ن)",
        "explication": "تَبْدَأُ سُورَةُ الْقَلَمِ بِقَوْلِهِ تَعَالَى: ﴿ ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ ﴾.",
        "hint": "تَبْدَأُ بِحَرْفِ النُّونِ وَالْقَسَمِ بِالْقَلَمِ."
      }
    }
  },
  {
    "id": 6151,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle sourate porte exactement le numéro 100 dans l'ordre du Mushaf ?",
    "options": [
      "Sourate Al-'Âdiyât",
      "Sourate Al-Qâri'a",
      "Sourate Az-Zalzala",
      "Sourate Al-Ikhlâs"
    ],
    "reponse_correcte": "Sourate Al-'Âdiyât",
    "explication": "Sourate 99 est Az-Zalzala, sourate 100 est Al-'Âdiyât (Les coursiers galopants), et sourate 101 est Al-Qâri'a.",
    "hint": "Elle commence par un serment par les coursiers haletants (wal-'âdiyâti dabhan).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q334",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا السُّورَةُ الَّتِي تَحْمِلُ رَقْمَ (100) فِي الْمُصْحَفِ؟",
        "options": [
          "سُورَةُ الْعَادِيَاتِ",
          "سُورَةُ الْقَارِعَةِ",
          "سُورَةُ الزَّلْزَلَةِ",
          "سُورَةُ الْإِخْلَاصِ"
        ],
        "reponse_correcte": "سُورَةُ الْعَادِيَاتِ",
        "explication": "سُورَةُ الْعَادِيَاتِ هِيَ السُّورَةُ الْمِائَةُ بَعْدَ الزَّلْزَلَةِ (٩٩) وَقَبْلَ الْقَارِعَةِ (١٠١).",
        "hint": "تُقْسِمُ بِالْخَيْلِ الْمُغِيرَةِ (وَالْعَادِيَاتِ ضَبْحًا)."
      }
    }
  },
  {
    "id": 6152,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Selon la majorité des exégètes, quelles sont « les dix nuits » par lesquelles Allah jure dans sourate Al-Fajr ?",
    "options": [
      "Les dix premiers jours/nuits de Dhû al-Hijja",
      "Les dix nuits de Safar",
      "Les dix nuits de Rajab",
      "Les dix premières nuits de Chawwâl"
    ],
    "reponse_correcte": "Les dix premiers jours/nuits de Dhû al-Hijja",
    "explication": "Les dix premiers jours de Dhû al-Hijja sont les jours les plus bénis de l'année pour les bonnes œuvres, culminant avec 'Arafat et l''Îd al-Adhâ.",
    "hint": "C'est durant ce mois que s'accomplit le grand pèlerinage (Hajj).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q353",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا (اللَّيَالِي الْعَشْرُ) الَّتِي أَقْسَمَ اللَّهُ بِهَا فِي سُورَةِ الْفَجْرِ؟",
        "options": [
          "الْعَشْرُ الْأُوَلُ مِنْ ذِي الْحِجَّةِ",
          "الْعَشْرُ الْأُوَلُ مِنْ صَفَرٍ",
          "الْعَشْرُ الْأُوَلُ مِنْ رَجَبٍ",
          "الْعَشْرُ الْأُوَلُ مِنْ شَوَّالٍ"
        ],
        "reponse_correcte": "الْعَشْرُ الْأُوَلُ مِنْ ذِي الْحِجَّةِ",
        "explication": "عَشْرُ ذِي الْحِجَّةِ هِيَ أَفْضَلُ أَيَّامِ الدُّنْيَا عِنْدَ اللَّهِ وَتَجْتَمِعُ فِيهَا أُمَّهَاتُ الْعِبَادَاتِ.",
        "hint": "تَقَعُ فِي شَهْرِ الْحَجِّ."
      }
    }
  },
  {
    "id": 6153,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Qui fut le chef des scribes de la révélation auprès du Prophète ﷺ, puis le compilateur principal du Mushaf ?",
    "options": [
      "Zayd ibn Thâbit (RTA)",
      "Bilâl ibn Rabâh (RTA)",
      "Abû Dharr (RTA)",
      "Suhaib ar-Rûmî (RTA)"
    ],
    "reponse_correcte": "Zayd ibn Thâbit (RTA)",
    "explication": "Jeune Ansâr d'une intelligence et d'une intégrité exceptionnelles, Zayd ibn Thâbit écrivit la révélation puis dirigea la compilation du Mushaf sous Abû Bakr et 'Uthmân.",
    "hint": "Il mémorisait le Coran intégralement et dirigea le comité de compilation.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q362",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ كَبِيرُ كُتَّابِ الْوَحْيِ الَّذِي عُهِدَ إِلَيْهِ بِجَمْعِ الْقُرْآنِ؟",
        "options": [
          "زَيْدُ بْنُ ثَابِتٍ رَضِيَ اللَّهُ عَنْهُ",
          "بِلَالُ بْنُ رَبَاحٍ رَضِيَ اللَّهُ عَنْهُ",
          "أَبُو ذَرٍّ الْغِفَارِيُّ",
          "صُهَيْبٌ الرُّومِيُّ"
        ],
        "reponse_correcte": "زَيْدُ بْنُ ثَابِتٍ رَضِيَ اللَّهُ عَنْهُ",
        "explication": "أُسْنِدَتْ إِلَى زَيْدِ بْنِ ثَابِتٍ مَهَمَّةُ جَمْعِ الْقُرْآنِ مَرَّتَيْنِ: فِي عَهْدِ أَبِي بَكْرٍ وَفِي عَهْدِ عُثْمَانَ رَضِيَ اللَّهُ عَنْهُمْ.",
        "hint": "كَانَ شَابًّا أَنْصَارِيًّا حَافِظًا مُتْقِنًا لِلْكِتَابَةِ."
      }
    }
  },
  {
    "id": 6154,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Qu'est-ce qui indiqua aux djinns le décès du prophète Sulaymân (paix sur lui) selon sourate Saba' ?",
    "options": [
      "La bête de la terre (le termite) qui rongea son bâton",
      "Un vent violent qui renversa son palais",
      "Un rêve fait par la reine Bilqîs",
      "Le chant de la huppe"
    ],
    "reponse_correcte": "La bête de la terre (le termite) qui rongea son bâton",
    "explication": "Sourate Saba' (v. 14) raconte que Sulaymân resta appuyé sur son bâton jusqu'à ce qu'un termite le ronge et qu'il s'effondre, montrant aux djinns qu'ils ignorent l'invisible.",
    "hint": "Ce petit insecte s'attaqua au bâton sur lequel s'appuyait Sulaymân.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q368",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الَّذِي دَلَّ الْجِنَّ عَلَى مَوْتِ سُلَيْمَانَ عَلَيْهِ السَّلَامُ؟",
        "options": [
          "دَابَّةُ الْأَرْضِ (الْأَرَضَةُ) تَأْكُلُ مِنْسَأَتَهُ",
          "رِيحٌ شَدِيدَةٌ هَدَمَتِ الْقَصْرَ",
          "صَوْتُ الْهُدْهُدِ",
          "زِلْزَالٌ فِي الْأَرْضِ"
        ],
        "reponse_correcte": "دَابَّةُ الْأَرْضِ (الْأَرَضَةُ) تَأْكُلُ مِنْسَأَتَهُ",
        "explication": "قَالَ تَعَالَى: ﴿ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ ﴾ [سبأ: 14]، وَالْمِنْسَأَةُ هِيَ الْعَصَا.",
        "hint": "حَشَرَةٌ أَكَلَتْ عَصَاهُ الَّتِي كَانَ يَتَّكِئُ عَلَيْهَا."
      }
    }
  },
  {
    "id": 6155,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Combien de versets compte exactement sourate Al-Baqara, la plus longue sourate du Coran ?",
    "options": [
      "286 versets",
      "200 versets",
      "176 versets",
      "120 versets"
    ],
    "reponse_correcte": "286 versets",
    "explication": "Sourate Al-Baqara compte 286 versets ; ses deux derniers versets (« Âmana r-rasûlu... ») suffisent à celui qui les récite la nuit.",
    "hint": "Le nombre se situe entre 280 et 290.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q372",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا عَدَدُ آيَاتِ سُورَةِ الْبَقَرَةِ؟",
        "options": [
          "286 آيَةً",
          "200 آيَةٍ",
          "176 آيَةً",
          "120 آيَةً"
        ],
        "reponse_correcte": "286 آيَةً",
        "explication": "سُورَةُ الْبَقَرَةِ أَطْوَلُ سُورَةٍ فِي الْقُرْآنِ وَتَبْلُغُ ٢٨٦ آيَةً.",
        "hint": "يَقَعُ الْعَدَدُ بَيْنَ ٢٨٠ وَ٢٩٠."
      }
    }
  },
  {
    "id": 6156,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quel jour béni Allah sauva-t-Il Mûsâ et les Enfants d'Israël de Pharaon ?",
    "options": [
      "Le jour d''Âchûrâ' (10 Mouharram)",
      "Le premier jour de Cha'bân",
      "Le 15 Ramadan",
      "Le dernier jour de Dhû al-Qa'da"
    ],
    "reponse_correcte": "Le jour d''Âchûrâ' (10 Mouharram)",
    "explication": "Le Prophète ﷺ jeûnait le jour d''Âchûrâ' (10 Mouharram) en reconnaissance envers Allah pour le salut accordé à Mûsâ.",
    "hint": "Le nom de ce jour signifie « le dixième » (de Mouharram).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q373 & Q386",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ يَوْمٍ نَجَّى اللَّهُ مُوسَى وَبَنِي إِسْرَائِيلَ مِنْ فِرْعَوْنَ؟",
        "options": [
          "يَوْمُ عَاشُورَاءَ (١٠ مُحَرَّمٍ)",
          "أَوَّلُ يَوْمٍ مِنْ شَعْبَانَ",
          "مُنْتَصَفُ رَمَضَانَ",
          "آخِرُ ذِي الْقَعْدَةِ"
        ],
        "reponse_correcte": "يَوْمُ عَاشُورَاءَ (١٠ مُحَرَّمٍ)",
        "explication": "نَجَّى اللَّهُ مُوسَى فِي عَاشُورَاءَ، وَسَنَّ النَّبِيُّ ﷺ صِيَامَهُ شُكْرًا لِلَّهِ تَعَالَى.",
        "hint": "اسْمُهُ مَأْخُوذٌ مِنَ الْيَوْمِ الْعَاشِرِ مِنْ شَهْرِ مُحَرَّمٍ."
      }
    }
  },
  {
    "id": 6157,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien d'ailes possède l'ange Jibrîl (paix sur lui) selon le hadith authentique ?",
    "options": [
      "600 ailes",
      "12 ailes",
      "70 ailes",
      "100 ailes"
    ],
    "reponse_correcte": "600 ailes",
    "explication": "Le Prophète ﷺ vit Jibrîl sous sa véritable forme angélique avec six cents ailes qui couvraient l'horizon.",
    "hint": "Ce nombre se compte en centaines (plus de 500).",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q378",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا عَدَدُ أَجْنِحَةِ جِبْرِيلَ عَلَيْهِ السَّلَامُ كَمَا رَآهُ النَّبِيُّ ﷺ؟",
        "options": [
          "600 جَنَاحٍ",
          "12 جَنَاحًا",
          "70 جَنَاحًا",
          "100 جَنَاحٍ"
        ],
        "reponse_correcte": "600 جَنَاحٍ",
        "explication": "ثَبَتَ فِي الصَّحِيحِ أَنَّ النَّبِيَّ ﷺ رَأَى جِبْرِيلَ عَلَى صُورَتِهِ وَلَهُ سِتُّمِائَةِ جَنَاحٍ قَدْ سَدَّتِ الْأُفُقَ.",
        "hint": "عَدَدٌ بِالْمِئَاتِ يَفُوقُ الْخَمْسَمِائَةِ."
      }
    }
  },
  {
    "id": 6158,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Combien d'apôtres (Hawâriyyûn) soutenaient le prophète 'Îsâ (paix sur lui) ?",
    "options": [
      "12 apôtres",
      "7 apôtres",
      "40 apôtres",
      "3 apôtres"
    ],
    "reponse_correcte": "12 apôtres",
    "explication": "Comme les 12 tribus d'Israël, 'Îsâ (paix sur lui) fut entouré de douze apôtres fidèles qui répondirent : « Nous sommes les auxiliaires d'Allah ».",
    "hint": "C'est le même nombre que les mois de l'année.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q382",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ حَوَارِيِّي عِيسَى عَلَيْهِ السَّلَامُ؟",
        "options": [
          "12 حَوَارِيًّا",
          "7 حَوَارِيِّينَ",
          "40 حَوَارِيًّا",
          "3 حَوَارِيِّينَ"
        ],
        "reponse_correcte": "12 حَوَارِيًّا",
        "explication": "كَانَ أَنْصَارُ عِيسَى عَلَيْهِ السَّلَامُ (الْحَوَارِيُّونَ) اثْنَيْ عَشَرَ رَجُلًا.",
        "hint": "مِثْلُ عَدَدِ شُهُورِ السَّنَةِ."
      }
    }
  },
  {
    "id": 6159,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quel est le deuxième nom courant de la sourate Al-Insân (76) ?",
    "options": [
      "Sourate Ad-Dahr (Le Temps / L'Époque)",
      "Sourate Al-Qalam",
      "Sourate Al-Mulk",
      "Sourate Al-Fajr"
    ],
    "reponse_correcte": "Sourate Ad-Dahr (Le Temps / L'Époque)",
    "explication": "Elle s'ouvre par « Hal atâ 'alâ l-insâni hînun mina d-dahr » : les mots « al-insân » et « ad-dahr » figurent tous deux dès le 1er verset.",
    "hint": "C'est le tout dernier mot du 1er verset de cette sourate.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q388",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَا الِاسْمُ الثَّانِي لِسُورَةِ الْإِنْسَانِ؟",
        "options": [
          "سُورَةُ الدَّهْرِ",
          "سُورَةُ الْقَلَمِ",
          "سُورَةُ الْمُلْكِ",
          "سُورَةُ الْفَجْرِ"
        ],
        "reponse_correcte": "سُورَةُ الدَّهْرِ",
        "explication": "تُسَمَّى سُورَةُ الْإِنْسَانِ بِسُورَةِ الدَّهْرِ أَوْ هَلْ أَتَى لِقَوْلِهِ تَعَالَى فِي مَطْلَعِهَا: ﴿ هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ ﴾.",
        "hint": "آخِرُ كَلِمَةٍ فِي الْآيَةِ الْأُولَى مِنَ السُّورَةِ."
      }
    }
  },
  {
    "id": 6160,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "D'après le hadith prophétique, qui est le plus en droit de diriger la prière en commun (Imâm) ?",
    "options": [
      "Celui qui maîtrise et récite le mieux le Livre d'Allah",
      "Le plus riche de l'assemblée",
      "Le plus rapide dans ses gestes",
      "Celui qui porte les plus beaux vêtements"
    ],
    "reponse_correcte": "Celui qui maîtrise et récite le mieux le Livre d'Allah",
    "explication": "Le Prophète ﷺ a établi la priorité pour l'imamat : d'abord celui qui récite et connaît le mieux le Coran, puis le plus savant dans la Sunnah.",
    "hint": "Ce critère valorise avant tout l'apprentissage et la maîtrise du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q395",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنْ أَوْلَى النَّاسِ بِالْإِمَامَةِ فِي الصَّلَاةِ؟",
        "options": [
          "أَقْرَؤُهُمْ لِكِتَابِ اللَّهِ تَعَالَى",
          "أَغْنَاهُمْ مَالًا",
          "أَسْرَعُهُمْ حَرَكَةً",
          "أَجْمَلُهُمْ ثِيَابًا"
        ],
        "reponse_correcte": "أَقْرَؤُهُمْ لِكِتَابِ اللَّهِ تَعَالَى",
        "explication": "قَالَ ﷺ: «يَؤُمُّ الْقَوْمَ أَقْرَؤُهُمْ لِكِتَابِ اللَّهِ».",
        "hint": "تَقْدِيمُ أَهْلِ الْقُرْآنِ فِي الْإِمَامَةِ."
      }
    }
  },
  {
    "id": 6161,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Pourquoi la sourate Al-Munâfiqûn est-elle parfois appelée « Al-Fâdiha » (la Dévoilante) ?",
    "options": [
      "Parce qu'elle a mis à nu les ruses et le caractère des hypocrites",
      "Parce qu'elle parle du mois de Ramadan",
      "Parce qu'elle décrit la création des cieux",
      "Parce qu'elle rapporte les lois de l'héritage"
    ],
    "reponse_correcte": "Parce qu'elle a mis à nu les ruses et le caractère des hypocrites",
    "explication": "Tout comme At-Tawba, sourate Al-Munâfiqûn expose clairement les attitudes des hypocrites à Médine afin que la communauté reste vigilante.",
    "hint": "Son titre ordinaire désigne précisément les « Hypocrites ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q420",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "لِمَاذَا سُمِّيَتْ سُورَةُ الْمُنَافِقُونَ بِـ (الْفَاضِحَةِ)؟",
        "options": [
          "لِأَنَّهَا فَضَحَتْ أَوْصَافَ الْمُنَافِقِينَ وَخَطَطَهُمْ",
          "لِأَنَّهَا تَتَحَدَّثُ عَنْ شَهْرِ رَمَضَانَ",
          "لِأَنَّهَا تَصِفُ خَلْقَ السَّمَاوَاتِ",
          "لِأَنَّهَا تَذْكُرُ أَحْكَامَ الْمِيرَاثِ"
        ],
        "reponse_correcte": "لِأَنَّهَا فَضَحَتْ أَوْصَافَ الْمُنَافِقِينَ وَخَطَطَهُمْ",
        "explication": "كَشَفَتِ السُّورَةُ صِفَاتِ الْمُنَافِقِينَ وَنَوَايَاهُمْ حَتَّى يَحْذَرَهُمُ الْمُؤْمِنُونَ.",
        "hint": "مِنَ اسْمِ السُّورَةِ نَفْسِهِ (الْمُنَافِقُونَ)."
      }
    }
  },
  {
    "id": 6162,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien de prosternations de récitation (sajadât at-tilâwa) compte le Noble Coran au complet ?",
    "options": [
      "15 prosternations",
      "5 prosternations",
      "30 prosternations",
      "7 prosternations"
    ],
    "reponse_correcte": "15 prosternations",
    "explication": "Le Mushaf de Médine marque 15 emplacements de prosternation de récitation (dont deux dans sourate Al-Hajj).",
    "hint": "Il y en a environ la moitié de 30.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q429",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ سَجَدَاتِ التِّلَاوَةِ فِي الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "15 سَجْدَةً",
          "5 سَجَدَاتٍ",
          "30 سَجْدَةً",
          "7 سَجَدَاتٍ"
        ],
        "reponse_correcte": "15 سَجْدَةً",
        "explication": "تَتَوَزَّعُ سَجَدَاتُ التِّلَاوَةِ الْخَمْسَ عَشْرَةَ فِي الْمُصْحَفِ الشَّرِيفِ وَمِنْهَا سَجْدَتَانِ فِي سُورَةِ الْحَجِّ.",
        "hint": "نِصْفُ عَدَدِ أَجْزَاءِ الْقُرْآنِ تَقْرِيبًا."
      }
    }
  },
  {
    "id": 6163,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Combien de fois la Basmala complète (« Bismillâhi r-Rahmâni r-Rahîm ») figure-t-elle dans tout le Coran ?",
    "options": [
      "114 fois (absente au début d'At-Tawba, mais présente dans An-Naml v. 30)",
      "113 fois seulement",
      "115 fois",
      "120 fois"
    ],
    "reponse_correcte": "114 fois (absente au début d'At-Tawba, mais présente dans An-Naml v. 30)",
    "explication": "Bien que sourate At-Tawba n'ait pas de Basmala en tête, la Basmala réapparaît au verset 30 de sourate An-Naml dans la lettre de Sulaymân à Bilqîs, rétablissant le total exact de 114 !",
    "hint": "Une sourate en manque au début, mais une autre en possède une seconde à l'intérieur !",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q414",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "كَمْ مَرَّةً وَرَدَتِ الْبَسْمَلَةُ فِي الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "114 بَسْمَلَةً (سَقَطَتْ فِي التَّوْبَةِ وَوَرَدَتْ فِي آيَةِ النَّمْلِ)",
          "113 بَسْمَلَةً فَقَطْ",
          "115 بَسْمَلَةً",
          "120 بَسْمَلَةً"
        ],
        "reponse_correcte": "114 بَسْمَلَةً (سَقَطَتْ فِي التَّوْبَةِ وَوَرَدَتْ فِي آيَةِ النَّمْلِ)",
        "explication": "عُوِّضَتْ بَسْمَلَةُ التَّوْبَةِ بِوُرُودِهَا دَاخِلَ سُورَةِ النَّمْلِ [آية ٣٠]: ﴿ إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴾.",
        "hint": "مَسَاوٍ لِعَدَدِ السُّوَرِ رَغْمَ خُلُوِّ التَّوْبَةِ مِنْهَا فِي أَوَّلِهَا."
      }
    }
  },
  {
    "id": 6164,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "À qui appartenait l'Arche qui sauva les croyants du Déluge dans sourate Hûd ?",
    "options": [
      "Au prophète Nûh (Noé, paix sur lui)",
      "Au prophète Hûd (paix sur lui)",
      "Au prophète Sâlih (paix sur lui)",
      "Au prophète Lût (paix sur lui)"
    ],
    "reponse_correcte": "Au prophète Nûh (Noé, paix sur lui)",
    "explication": "Allah ordonna à Nûh : « Construis l'arche sous Nos yeux et d'après Notre révélation » (Hûd : 37) et sauva ceux qui y embarquèrent avec lui.",
    "hint": "Son nom est aussi le titre de la 71e sourate du Coran.",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q17",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "مَنِ النَّبِيُّ الَّذِي صَنَعَ السَّفِينَةَ بِوَحْيِ اللَّهِ وَنَجَا بِهَا مِنَ الطُّوفَانِ؟",
        "options": [
          "نُوحٌ عَلَيْهِ السَّلَامُ",
          "هُودٌ عَلَيْهِ السَّلَامُ",
          "صَالِحٌ عَلَيْهِ السَّلَامُ",
          "لُوطٌ عَلَيْهِ السَّلَامُ"
        ],
        "reponse_correcte": "نُوحٌ عَلَيْهِ السَّلَامُ",
        "explication": "قَالَ تَعَالَى لِنُوحٍ: ﴿ وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا ﴾ [هود: 37].",
        "hint": "سُمِّيَتِ السُّورَةُ الحَادِيَةُ وَالسَّبْعُونَ بِاسْمِهِ."
      }
    }
  },
  {
    "id": 6165,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Sous quel nom La Mecque est-elle désignée dans sourate Ach-Chûrâ (v. 7) ?",
    "options": [
      "Umm al-Qurâ (La Mère des cités)",
      "Dâr as-Salâm",
      "Yathrib",
      "Al-Madîna al-Munawwara"
    ],
    "reponse_correcte": "Umm al-Qurâ (La Mère des cités)",
    "explication": "Allah l'appelle « Umm al-Qurâ » (La Mère des cités) en raison de sa centralité spirituelle et de la présence de la Ka'ba.",
    "hint": "Cette expression signifie littéralement « La Mère des cités ».",
    "source": "Encyclopédie des Concours — 1000 Questions sur le Noble Coran",
    "reference": "1000 Coran Q253",
    "tags": [
      "coran",
      "sciences_coraniques"
    ],
    "verification_status": "verified",
    "translations": {
      "ar": {
        "question": "بِأَيِّ اسْمٍ ذُكِرَتْ مَكَّةُ فِي سُورَةِ الشُّورَى [آية 7]؟",
        "options": [
          "أُمُّ الْقُرَى",
          "دَارُ السَّلَامِ",
          "يَثْرِبُ",
          "الْمَدِينَةُ الْمُنَوَّرَةُ"
        ],
        "reponse_correcte": "أُمُّ الْقُرَى",
        "explication": "قَالَ تَعَالَى: ﴿ لِتُنذِرَ أُمَّ الْقُرَىٰ وَمَنْ حَوْلَهَا ﴾ [الشورى: 7] وَهِيَ مَكَّةُ الْمُكَرَّمَةُ.",
        "hint": "تَعْنِي مَرْكَزَ الْقُرَى وَأَصْلَهَا."
      }
    }
  }
];
