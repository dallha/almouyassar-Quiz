import { Question, Badge } from './types';
import { EXTRA_QUESTIONS } from './questions_extra';

export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel est le premier pilier de l'Islam ?",
    "options": [
      "La Prière",
      "L'Attestation de foi (Chahada)",
      "Le Jeûne",
      "La Zakat"
    ],
    "reponse_correcte": "L'Attestation de foi (Chahada)",
    "explication": "C'est la base de l'Islam : attester qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est Son messager.",
    "translations": {
      "ar": {
        "question": "مَا هُوَ الرُّكْنُ الْأَوَّلُ مِنَ الْإِسْلَامِ؟",
        "options": [
          "الصَّلَاةُ",
          "شَهَادَةُ أَنْ لَا إِلٰهَ إِلَّا اللهُ (الشَّهَادَةُ)",
          "الصَّوْمُ",
          "الزَّكَاةُ"
        ],
        "reponse_correcte": "شَهَادَةُ أَنْ لَا إِلٰهَ إِلَّا اللهُ (الشَّهَادَةُ)",
        "explication": "هَذَا هُوَ أَسَاسُ الْإِسْلَامِ: أَنْ تَشْهَدَ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ."
      },
      "wo": {
        "question": "Ban moy pontu Lislaam bu jëkk bi ?",
        "options": [
          "Julli",
          "Tuurëal bi (Chahada)",
          "Koor",
          "Asaka"
        ],
        "reponse_correcte": "Tuurëal bi (Chahada)",
        "explication": "Lii moy dëgërlay u Lislaam: Seere né amul benn yàlla bu war a jaamu budul Allah té Yonent bi Muhammad (PSL) ndawam la."
      }
    }
  },
  {
    "id": 2,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien y a-t-il de prières obligatoires par jour ?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "reponse_correcte": "5",
    "explication": "Le musulman doit accomplir 5 prières quotidiennes : Subh, Dhuhr, Asr, Maghrib et Isha.",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ الصَّلَوَاتِ الْمَفْرُوضَةِ فِي الْيَوْمِ؟",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "reponse_correcte": "5",
        "explication": "يَجِبُ عَلَى الْمُسْلِمِ أَنْ يُؤَدِّيَ خَمْسَ صَلَوَاتٍ فِي الْيَوْمِ: الصُّبْحُ، الظُّهْرُ، الْعَصْرُ، الْمَغْرِبُ، وَالْعِشَاءُ."
      },
      "wo": {
        "question": "Ñata julli yu war ño am ci bëjj-gël ?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "reponse_correcte": "5",
        "explication": "Julit bi dafa wara julli juróomi yoon ci bës bi: Fajar (Fadjr), Tisbar (Dhuhr), Takusaan (Asr), Timis (Maghrib) ak Gee (Isha)."
      }
    }
  },
  {
    "id": 3,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Par quoi doit-on commencer avant de faire ses ablutions ?",
    "options": [
      "Dire Bismillah",
      "Se laver les pieds",
      "Dire Allahu Akbar",
      "S'essuyer la tête"
    ],
    "reponse_correcte": "Dire Bismillah",
    "explication": "Toute action importante en Islam commence par le nom d'Allah.",
    "translations": {
      "ar": {
        "question": "بِمَاذَا يَجِبُ أَنْ نَبْدَأَ قَبْلَ الْوُضُوءِ؟",
        "options": [
          "قَوْلُ بِسْمِ اللهِ",
          "غَسْلُ الرِّجْلَيْنِ",
          "قَوْلُ اللهُ أَكْبَرُ",
          "مَسْحُ الرَّأْسِ"
        ],
        "reponse_correcte": "قَوْلُ بِسْمِ اللهِ",
        "explication": "كُلُّ عَمَلٍ مُهِمٍّ فِي الْإِسْلَامِ يَبْدَأُ بِاسْمِ اللهِ."
      },
      "wo": {
        "question": "Lan lañuy jëkka wax bala ngay soso ?",
        "options": [
          "Wax Bismillah",
          "Raxass say tànk",
          "Wax Allahu Akbar",
          "Mape sa bop"
        ],
        "reponse_correcte": "Wax Bismillah",
        "explication": "Lép lu am solo ci Lislaam ci turu Yàlla lañ koy tambalee."
      }
    }
  },
  {
    "id": 4,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien de fois est-il recommandé de laver chaque membre pendant les ablutions ?",
    "options": [
      "1 fois",
      "2 fois",
      "3 fois",
      "4 fois"
    ],
    "reponse_correcte": "3 fois",
    "explication": "La Sunnah recommande de laver le visage, les bras et les pieds trois fois.",
    "translations": {
      "ar": {
        "question": "كَمْ مَرَّةً يُسْتَحَبُّ غَسْلُ كُلِّ عُضْوٍ فِي الْوُضُوءِ؟",
        "options": [
          "مَرَّةً وَاحِدَةً",
          "مَرَّتَيْنِ",
          "٣ مَرَّاتٍ",
          "٤ مَرَّاتٍ"
        ],
        "reponse_correcte": "٣ مَرَّاتٍ",
        "explication": "تَنْصَحُ السُّنَّةُ بِغَسْلِ الْوَجْهِ، الْيَدَيْنِ، وَالرِّجْلَيْنِ ثَلَاثَ مَرَّاتٍ."
      },
      "wo": {
        "question": "Ñata yoon lañuy raxass sa cér bu nekk buy soso ci Sunnah bi ?",
        "options": [
          "1 yoon",
          "2 yoon",
          "3 yoon",
          "4 yoon"
        ],
        "reponse_correcte": "3 yoon",
        "explication": "Sunnah bi dafa digle raxass kanam bi, loxo yi ak tànk yi ñati yoon."
      }
    }
  },
  {
    "id": 5,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que purifie-t-on en premier lors des ablutions ?",
    "options": [
      "Le visage",
      "Les mains jusqu'aux poignets",
      "Les pieds",
      "La bouche"
    ],
    "reponse_correcte": "Les mains jusqu'aux poignets",
    "explication": "On commence par se laver les mains trois fois avant de procéder au reste.",
    "translations": {
      "ar": {
        "question": "مَاذَا نُطَهِّرُ أَوَّلاً فِي الْوُضُوءِ؟",
        "options": [
          "الْوَجْهُ",
          "الْغَسْلُ إِلَى الْكُوعَيْنِ (الْيَدَيْنِ)",
          "الرِّجْلَانِ",
          "الْفَمُ"
        ],
        "reponse_correcte": "الْغَسْلُ إِلَى الْكُوعَيْنِ (الْيَدَيْنِ)",
        "explication": "نَبْدَأُ بِغَسْلِ الْيَدَيْنِ ثَلَاثَ مَرَّاتٍ قَبْلَ الِاسْتِمْرَارِ فِي الْبَاقِي."
      },
      "wo": {
        "question": "Lan lañuy jëkka raxass buy soso ?",
        "options": [
          "Kanam bi",
          "Loxo yi ba ci col yi",
          "Tànk yi",
          "Gemiñ bi"
        ],
        "reponse_correcte": "Loxo yi ba ci col yi",
        "explication": "Dañuy tambalee raxass loxo yi ñati yoon bala ngay wëy."
      }
    }
  },
  {
    "id": 6,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle prière a lieu avant le lever du soleil ?",
    "options": [
      "Dhuhr",
      "Asr",
      "Maghrib",
      "Subh (Fajr)"
    ],
    "reponse_correcte": "Subh (Fajr)",
    "explication": "La prière de Subh s'accomplit à l'aube, avant l'apparition du soleil.",
    "translations": {
      "ar": {
        "question": "أَيُّ صَلَاةٍ تَكُونُ قَبْلَ شُرُوقِ الشَّمْسِ؟",
        "options": [
          "الظُّهْرُ",
          "الْعَصْرُ",
          "الْمَغْرِبُ",
          "الصُّبْحُ (الْفَجْرُ)"
        ],
        "reponse_correcte": "الصُّبْحُ (الْفَجْرُ)",
        "explication": "صَلَاةُ الصُّبْحِ تُؤَدَّى عِنْدَ الْفَجْرِ قَبْلَ ظُهُورِ الشَّمْسِ."
      },
      "wo": {
        "question": "Ban julli moy taxaw bala jant biy feeñ ?",
        "options": [
          "Tisbar",
          "Takusaan",
          "Timis",
          "Fajar (Fadjr)"
        ],
        "reponse_correcte": "Fajar (Fadjr)",
        "explication": "Jullit u Fajar dafay taxaw ci lëndëm bu dëggër bi bala jant biy feeñ."
      }
    }
  },
  {
    "id": 7,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Combien de Rak'ats (unités) composent la prière de Dhuhr ?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "reponse_correcte": "4",
    "explication": "La prière du midi (Dhuhr) compte 4 Rak'ats.",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ الرَّكَعَاتِ فِي صَلَاةِ الظُّهْرِ؟",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "reponse_correcte": "4",
        "explication": "صَلَاةُ الظُّهْرِ تَتَكَوَّنُ مِنْ أَرْبَعِ رَكَعَاتٍ."
      },
      "wo": {
        "question": "Ñata Rak'ats (sëgg) ño am ci Tisbar ?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "reponse_correcte": "4",
        "explication": "Julli Tisbar (Dhuhr) ñeenti sëgg la am."
      }
    }
  },
  {
    "id": 8,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle l'appel à la prière ?",
    "options": [
      "Iqama",
      "Adhan",
      "Tasbih",
      "Takbir"
    ],
    "reponse_correcte": "Adhan",
    "explication": "L'Adhan est l'appel public annonçant l'heure de la prière.",
    "translations": {
      "ar": {
        "question": "مَا هُوَ اسْمُ النِّدَاءِ لِلصَّلَاةِ؟",
        "options": [
          "الْإِقَامَةُ",
          "الْأَذَانُ",
          "التَّسْبِيحُ",
          "التَّكْبِيرُ"
        ],
        "reponse_correcte": "الْأَذَانُ",
        "explication": "الْأَذَانُ هُوَ النِّدَاءُ الْعَامُّ الَّذِي يُعْلِنُ عَنْ وَقْتِ الصَّلَاةِ."
      },
      "wo": {
        "question": "Naka lañuy waxëal nodd bi ?",
        "options": [
          "Likkam bi (Iqama)",
          "Nodd bi (Adhan)",
          "Tassbi bi",
          "Takbiir bi"
        ],
        "reponse_correcte": "Nodd bi (Adhan)",
        "explication": "Nodd bi (Adhan) moy yégle bi wone né waxtu julli jotna."
      }
    }
  },
  {
    "id": 9,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que récite-t-on obligatoirement à chaque Rak'at de la prière ?",
    "options": [
      "Sourate Al-Ikhlas",
      "Sourate Al-Fatiha",
      "Ayat Al-Kursi",
      "Une invocation libre"
    ],
    "reponse_correcte": "Sourate Al-Fatiha",
    "explication": "La prière n'est pas valide sans la récitation de la sourate Al-Fatiha.",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقْرَأُ وُجُوباً فِي كُلِّ رَكْعَةٍ مِنَ الصَّلَاةِ؟",
        "options": [
          "سُورَةُ الْإِخْلَاصِ",
          "سُورَةُ الْفَاتِحَةِ",
          "آيَةُ الْكُرْسِيِّ",
          "دُعَاءٌ حُرٌّ"
        ],
        "reponse_correcte": "سُورَةُ الْفَاتِحَةِ",
        "explication": "الصَّلَاةُ لَا تَصِحُّ بِدُونِ قِرَاءَةِ سُورَةِ الْفَاتِحَةِ."
      },
      "wo": {
        "question": "Lan la wara jàng ci sëgg bu nekk ci sa julli ?",
        "options": [
          "Sura Al-Ikhlas",
          "Sura Al-Fatiha",
          "Ayat Al-Kursi",
          "Ñaan gu la neex"
        ],
        "reponse_correcte": "Sura Al-Fatiha",
        "explication": "Julli du baax bu jàngulëo Sura Al-Fatiha ci sëgg bu nekk."
      }
    }
  },
  {
    "id": 10,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle est la direction vers laquelle on se tourne pour prier ?",
    "options": [
      "Le Nord",
      "Le Soleil",
      "La Qibla (La Mecque)",
      "Jérusalem"
    ],
    "reponse_correcte": "La Qibla (La Mecque)",
    "explication": "Tous les musulmans prient en direction de la Kaaba à La Mecque.",
    "translations": {
      "ar": {
        "question": "مَا هُوَ الِاتِّجَاهُ الَّذِي نَتَوَجَّهُ إِلَيْهِ لِلصَّلَاةِ؟",
        "options": [
          "الشَّمَالُ",
          "الشَّمْسُ",
          "الْقِبْلَةُ (مَكَّةُ)",
          "الْقُدْسُ"
        ],
        "reponse_correcte": "الْقِبْلَةُ (مَكَّةُ)",
        "explication": "يُصَلِّي جَمِيعُ الْمُسْلِمِينَ فِي اتِّجَاهِ الْكَعْبَةِ الْمُشَرَّفَةِ فِي مَكَّةَ."
      },
      "wo": {
        "question": "Ban wét la julit bi wara wëlikut buy julli ?",
        "options": [
          "Nord",
          "Jant bi",
          "Kibla bi (Makkah)",
          "Al-Quds"
        ],
        "reponse_correcte": "Kibla bi (Makkah)",
        "explication": "Mbooloo julit yépp dañuy wëlikut ci Kaaba gu tédd ga ci Makkah buy julli."
      }
    }
  },
  {
    "id": 11,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel mois jeûne-t-on obligatoirement ?",
    "options": [
      "Muharram",
      "Ramadan",
      "Cha'ban",
      "Chawwal"
    ],
    "reponse_correcte": "Ramadan",
    "explication": "Le jeûne du Ramadan est le 4ème pilier de l'Islam.",
    "translations": {
      "ar": {
        "question": "أَيُّ شَهْرٍ نَصُومُهُ وُجُوباً؟",
        "options": [
          "مُحَرَّمُ",
          "رَمَضَانُ",
          "شَعْبَانُ",
          "شَوَّالُ"
        ],
        "reponse_correcte": "رَمَضَانُ",
        "explication": "صَوْمُ رَمَضَانَ هُوَ الرُّكْنُ الرَّابِعُ مِنَ أَرْكَانِ الْإِسْلَامِ."
      },
      "wo": {
        "question": "Ban weer lañuy woor bu woor ?",
        "options": [
          "Weeru Tamxarit",
          "Weeru Koor (Ramadan)",
          "Weeru Diggi",
          "Weeru Koorite"
        ],
        "reponse_correcte": "Weeru Koor (Ramadan)",
        "explication": "Woor Weeru Koor (Ramadan) moy pontu Lislaam bu ñeentel bi."
      }
    }
  },
  {
    "id": 12,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que rompt le jeûne à la fin de la journée ?",
    "options": [
      "Le repas du Souhour",
      "Le repas de l'Iftar",
      "La prière de l'Aube",
      "Le sommeil"
    ],
    "reponse_correcte": "Le repas de l'Iftar",
    "explication": "Le repas de l'Iftar est le repas qui marque la rupture du jeûne au coucher du soleil.",
    "translations": {
      "ar": {
        "question": "مَا الَّذِي يَكْسِرُ الصِّيَامَ فِي نِهَايَةِ الْيَوْمِ؟",
        "options": [
          "وَجْبَةُ السَّحُورِ",
          "وَجْبَةُ الْإِفْطَارِ",
          "صَلَاةُ الْفَجْرِ",
          "النَّوْمُ"
        ],
        "reponse_correcte": "وَجْبَةُ الْإِفْطَارِ",
        "explication": "الْإِفْطَارُ هُوَ الْوَجْبَةُ الَّتِي تُمَيِّزُ نِهَايَةَ الصَّوْمِ عِنْدَ غُرُوبِ الشَّمْسِ."
      },
      "wo": {
        "question": "Lan lañuy dogé bu jant biy so ?",
        "options": [
          "Xëdd bi (Souhour)",
          "Dogu bi (Iftar)",
          "Jullig Fajar",
          "Nelaw bi"
        ],
        "reponse_correcte": "Dogu bi (Iftar)",
        "explication": "Dogu bi (Iftar) moy ñam wi ngay lekk buy dog bu jant biy so."
      }
    }
  },
  {
    "id": 13,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Qu'est-ce que la Zakat ?",
    "options": [
      "L'aumône légale obligatoire",
      "Une prière nocturne",
      "Le nom d'un Ange",
      "Un mois de l'année"
    ],
    "reponse_correcte": "L'aumône légale obligatoire",
    "explication": "La Zakat is une part de la richesse donnée aux pauvres, c'est le 3ème pilier de l'Islam.",
    "translations": {
      "ar": {
        "question": "مَا هِيَ الزَّكَاةُ؟",
        "options": [
          "الصَّدَقَةُ الْوَاجِبَةُ",
          "صَلَاةٌ لَيْلِيَّةٌ",
          "اسْمُ مَلَكٍ",
          "شَهْرٌ مِنَ السَّنَةِ"
        ],
        "reponse_correcte": "الصَّدَقَةُ الْوَاجِبَةُ",
        "explication": "الزَّكَاةُ هِيَ جُزْءٌ مِنَ الْمَالِ يُعْطَى لِلْفُقَرَاءِ، وَهِيَ الرُّكْنُ الثَّالِثُ مِنَ الْإِسْلَامِ."
      },
      "wo": {
        "question": "Lan moy Asaka ?",
        "options": [
          "Alal ji ñuy géné bu war",
          "Jullig Guddi",
          "Turu ab Malaaka",
          "Weer ci at mi"
        ],
        "reponse_correcte": "Alal ji ñuy géné bu war",
        "explication": "Asaka (Zakat) moy wàll ci sa alal ji ngay jox miskiin yi, pontu Lislaam bu ñettel bi la."
      }
    }
  },
  {
    "id": 14,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quand s'accomplit la prière de Jumu'ah ?",
    "options": [
      "Le vendredi midi",
      "Le lundi matin",
      "Le jeudi soir",
      "Le dimanche"
    ],
    "reponse_correcte": "Le vendredi midi",
    "explication": "La Jumu'ah remplace la prière de Dhuhr le vendredi en congrégation.",
    "translations": {
      "ar": {
        "question": "مَتَى تُؤَدَّى صَلَاةُ الْجُمُعَةِ؟",
        "options": [
          "ظُهْرَ الْجُمُعَةِ",
          "صَبَاحَ الِاثْنَيْنِ",
          "مَسَاءَ الْخَمِيسِ",
          "يَوْمَ الْأَحَدِ"
        ],
        "reponse_correcte": "ظُهْرَ الْجُمُعَةِ",
        "explication": "صَلَاةُ الْجُمُعَةِ تَحُلُّ مَحَلَّ صَلَاةِ الظُّهْرِ يَوْمَ الْجُمُعَةِ جَمَاعَةً."
      },
      "wo": {
        "question": "Ban waxtu lañuy julli Jumaa ?",
        "options": [
          "Àjjuma midi",
          "Altine suba",
          "Alxamis ngoon",
          "Dibéer"
        ],
        "reponse_correcte": "Àjjuma midi",
        "explication": "Jullig Àjjuma dafay wutu Tisbar bu Àjjuma joté ci mbooloo."
      }
    }
  },
  {
    "id": 15,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Quel acte annule les ablutions ?",
    "options": [
      "Manger",
      "Dormir profondément",
      "Parler",
      "Sourire"
    ],
    "reponse_correcte": "Dormir profondément",
    "explication": "Le sommeil lourd fait perdre les ablutions car on ne contrôle plus son état.",
    "translations": {
      "ar": {
        "question": "أَيُّ عَمَلٍ يُبْطِلُ الْوُضُوءَ؟",
        "options": [
          "الْأَكْلُ",
          "النَّوْمُ الْعَمِيقُ",
          "الْكَلَامُ",
          "الِابْتِسَامُ"
        ],
        "reponse_correcte": "النَّوْمُ الْعَمِيقُ",
        "explication": "النَّوْمُ الثَّقِيلُ يُفْقِدُ الْوُضُوءَ لِأَنَّ الشَّخْصَ لَا يَعُودُ يَتَحَكَّمُ فِي حَالَتِهِ."
      },
      "wo": {
        "question": "Lan moy yaq soso ?",
        "options": [
          "Lekk",
          "Nelaw bu dëggër",
          "Wax",
          "Muñëal"
        ],
        "reponse_correcte": "Nelaw bu dëggër",
        "explication": "Nelaw bu dëggër dafay yaq soso ndax danga nay faté sa bop."
      }
    }
  },
  {
    "id": 16,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle l'ablution sèche avec de la terre pure ?",
    "options": [
      "Ghusl",
      "Tayammum",
      "Wudu",
      "Masah"
    ],
    "reponse_correcte": "Tayammum",
    "explication": "Le Tayammum remplace le Wudu quand il n'y a pas d'eau ou qu'on est malade.",
    "translations": {
      "ar": {
        "question": "مَا اسْمُ التَّطَهُّرِ الْجَافِّ بِالتُّرَابِ الطَّاهِرِ؟",
        "options": [
          "الْغُسْلُ",
          "التَّيَمُّمُ",
          "الْوُضُوءُ",
          "الْمَسْحُ"
        ],
        "reponse_correcte": "التَّيَمُّمُ",
        "explication": "التَّيَمُّمُ يَحُلُّ مَحَلَّ الْوُضُوءِ عِنْدَ فِقْدَانِ الْمَاءِ أَوْ عِنْدَ الْمَرَضِ."
      },
      "wo": {
        "question": "Naka lañuy waxëal soso ak suuf si bu ndox amul ?",
        "options": [
          "Sangat bi (Ghusl)",
          "Tiyammum bi",
          "Soso bi (Wudu)",
          "Mape bi"
        ],
        "reponse_correcte": "Tiyammum bi",
        "explication": "Tiyammum (ablution sèche) moy wutu soso ndox bi bu ndox amul walla bu la febar sonalee."
      }
    }
  },
  {
    "id": 17,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle prière suit directement Dhuhr ?",
    "options": [
      "Maghrib",
      "Asr",
      "Isha",
      "Subh"
    ],
    "reponse_correcte": "Asr",
    "explication": "La prière de l'après-midi est Asr.",
    "translations": {
      "ar": {
        "question": "أَيُّ صَلَاةٍ تَلِي صَلَاةَ الظُّهْرِ مُبَاشَرَةً؟",
        "options": [
          "الْمَغْرِبُ",
          "الْعَصْرُ",
          "الْعِشَاءُ",
          "الصُّبْحُ"
        ],
        "reponse_correcte": "الْعَصْرُ",
        "explication": "صَلَاةُ بَعْدَ الظُّهْرِ هِيَ صَلَاةُ الْعَصْرِ."
      },
      "wo": {
        "question": "Ban julli moy tofto Tisbar ?",
        "options": [
          "Timis",
          "Takusaan (Asr)",
          "Gee",
          "Fajar"
        ],
        "reponse_correcte": "Takusaan (Asr)",
        "explication": "Takusaan (Asr) moy julli ngoon gui di tofto Tisbar."
      }
    }
  },
  {
    "id": 18,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Combien de Rak'ats composent les prières du Maghrib et de l'Isha réunies ?",
    "options": [
      "5",
      "7",
      "6",
      "8"
    ],
    "reponse_correcte": "7",
    "explication": "Maghrib (3) + Isha (4) font un total de 7 Rak'ats.",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ الرَّكَعَاتِ فِي صَلَاتَيِ الْمَغْرِبِ وَالْعِشَاءِ مَعاً؟",
        "options": [
          "5",
          "7",
          "6",
          "8"
        ],
        "reponse_correcte": "7",
        "explication": "الْمَغْرِبُ (٣) + الْعِشَاءُ (٤) يُسَاوِي ٧ رَكَعَاتٍ."
      },
      "wo": {
        "question": "Ñata sëgg (Rak'ats) ño nek ci Timis ak Gee buñ ko boole ?",
        "options": [
          "5",
          "7",
          "6",
          "8"
        ],
        "reponse_correcte": "7",
        "explication": "Timis (3) ak Gee (4) buñ ko boole juróom ñaari sëgg lay don."
      }
    }
  },
  {
    "id": 19,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que signifie 'Allahu Akbar' ?",
    "options": [
      "Allah est le Miséricordieux",
      "Allah est le plus Grand",
      "Gloire à Allah",
      "Merci à Allah"
    ],
    "reponse_correcte": "Allah est le plus Grand",
    "explication": "C'est le Takbir, prononcé pour entrer en prière.",
    "translations": {
      "ar": {
        "question": "مَا مَعْنَى 'اللهُ أَكْبَرُ'؟",
        "options": [
          "اللهُ هُوَ الرَّحْمٰنُ",
          "اللهُ أَكْبَرُ (أَعْظَمُ)",
          "سُبْحَانَ اللهِ",
          "الْحَمْدُ للهِ"
        ],
        "reponse_correcte": "اللهُ أَكْبَرُ (أَعْظَمُ)",
        "explication": "هَذَا هُوَ التَّكْبِيرُ، يُقَالُ لِلدُّخُولِ فِي الصَّلَاةِ."
      },
      "wo": {
        "question": "Lan moy firi 'Allahu Akbar' ?",
        "options": [
          "Yàlla moy Borom Yërmande",
          "Yàlla moy Ka gën a mak",
          "Sabala Yàlla",
          "Sant Yàlla"
        ],
        "reponse_correcte": "Yàlla moy Ka gën a mak",
        "explication": "Lii moy Takbiir bi ñuy waxé buy dugg ci julli bi."
      }
    }
  },
  {
    "id": 20,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Dans quelle position doit-on poser le front au sol pendant la prière ?",
    "options": [
      "Le Ruku (Inclinaison)",
      "Le Sujud (Prosternation)",
      "Le Qiyam (Debout)",
      "Le Tachahoud"
    ],
    "reponse_correcte": "Le Sujud (Prosternation)",
    "explication": "Le Sujud est l'acte de soumission totale où le front touche la terre.",
    "translations": {
      "ar": {
        "question": "فِي أَيِّ وَضْعِيَّةٍ نَضَعُ الْجَبْهَةَ عَلَى الْأَرْضِ أَثْنَاءَ الصَّلَاةِ؟",
        "options": [
          "الرُّكُوعُ",
          "السُّجُودُ",
          "الْقِيَامُ",
          "التَّشَهُّدُ"
        ],
        "reponse_correcte": "السُّجُودُ",
        "explication": "السُّجُودُ هُوَ فِعْلُ الْخُضُوعِ التَّامِّ حَيْثُ يَلْمِسُ الْجَبْهَةُ الْأَرْضَ."
      },
      "wo": {
        "question": "Ban fiire la sa jékk biy laal suuf si ci julli bi ?",
        "options": [
          "Ruku bi (Sëgg bi)",
          "Sujud bi (Sëj bi)",
          "Qiyam (Taxaw bi)",
          "Tachahoud bi"
        ],
        "reponse_correcte": "Sujud bi (Sëj bi)",
        "explication": "Sëj bi (Sujud) moy féñal wofi sango bi ci suuf ak tiitëlëm."
      }
    }
  },
  {
    "id": 21,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Qui est le Créateur de l'Univers ?",
    "options": [
      "Les Anges",
      "Les Prophètes",
      "Allah",
      "La nature"
    ],
    "reponse_correcte": "Allah",
    "explication": "Allah est le Créateur Unique et Tout-Puissant de toutes choses.",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ خَالِقُ الْكَوْنِ؟",
        "options": [
          "الْمَلَائِكَةُ",
          "الْأَنْبِيَاءُ",
          "اللَّهُ",
          "الطَّبِيعَةُ"
        ],
        "reponse_correcte": "اللَّهُ",
        "explication": "اللَّهُ هُوَ الْخَالِقُ الْوَاحِدُ الْقَوِيُّ لِكُلِّ شَيْءٍ. هُوَ الَّذِي أَبْدَعَ السَّمَاوَاتِ وَالْأَرْضَ وَكُلَّ مَا فِيهِمَا بِحُبٍّ وَحِكْمَةٍ. فَلْنَتَذَكَّرْ دَائِمًا عَظَمَتَهُ وَنَشْكُرْهُ عَلَى نِعَمِهِ!"
      },
      "wo": {
        "question": "Kan mooy Bindaakon Àddina bi yépp?",
        "options": [
          "Malaaka yi",
          "Yonent yi",
          "Yàlla",
          "Mbindéef yi"
        ],
        "reponse_correcte": "Yàlla",
        "explication": "Yàlla mooy Bindaakon bi Képp, Ku am Doole ci lépp. Mooy Ki bind asamaan ak suuf ak lépp lu nekk ci ñoom ak cofeel ak hikma. Nañu fàttaliku saa su nekk Magam te sant Ko ci barkeem!"
      }
    }
  },
  {
    "id": 22,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quel est le Livre Sacré des musulmans ?",
    "options": [
      "L'Injil",
      "Le Tawrat",
      "Le Coran",
      "Le Zabur"
    ],
    "reponse_correcte": "Le Coran",
    "explication": "Le Coran est la parole finale d'Allah.",
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْكِتَابُ الْمُقَدَّسُ لِلْمُسْلِمِينَ؟",
        "options": [
          "الْإِنْجِيلُ",
          "التَّوْرَاةُ",
          "الْقُرْآنُ",
          "الزَّبُورُ"
        ],
        "reponse_correcte": "الْقُرْآنُ",
        "explication": "الْقُرْآنُ هُوَ كَلَامُ اللَّهِ الْأَخِيرُ وَالْجَمِيلُ الَّذِي أَرْسَلَهُ لَنَا لِنَهْتَدِيَ بِهِ وَنَتَعَلَّمَ مِنْهُ كَيْفَ نُحِبُّ اللَّهَ وَنُطِيعُهُ."
      },
      "wo": {
        "question": "Lan mooy Téere bu Sell bi yépp ci jullit ñi?",
        "options": [
          "Injiil bi",
          "Tawraat bi",
          "Alxuraan ji",
          "Sabuur bi"
        ],
        "reponse_correcte": "Alxuraan ji",
        "explication": "Alxuraan ji mooy kàddug Yàlla gu mujj gi, gu rafet gi, mu jàppandi ñu ci, te ñu jàng ci nu ñuy bëgge Yàlla te topp ko. Mooy sunu leer ak sunu gind."
      }
    }
  },
  {
    "id": 23,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Combien y a-t-il de piliers de la Foi (Iman) ?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "reponse_correcte": "6",
    "explication": "Il y a 6 piliers : croire en Allah, Ses anges, Ses livres, Ses messagers, le Jour Dernier et le Destin.",
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَرْكَانِ الْإِيمَانِ؟",
        "options": [
          "٤",
          "٥",
          "٦",
          "٧"
        ],
        "reponse_correcte": "٦",
        "explication": "أَعِزَّائِي الصِّغَارَ، أَرْكَانُ الْإِيمَانِ سِتَّةٌ، وَهِيَ أَسَاسُ دِينِنَا الْجَمِيلِ. لِنَتَذَكَّرْهَا مَعًا: الْإِيمَانُ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَالْقَدَرِ خَيْرِهِ وَشَرِّهِ. هَذِهِ الْأَرْكَانُ تُقَوِّي قُلُوبَنَا وَتَجْعَلُنَا أَقْرَبَ إِلَى اللَّهِ تَعَالَى."
      },
      "wo": {
        "question": "Ñaata la ponki ngëm gi (Imaan) ?",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "reponse_correcte": "6",
        "explication": "Am na juroom benn ponk yu am solo ci ngëm gi, yoo xam ne ñoom la sunu diine ju rafet ji tegu. Ñoom ñooy: gëm Yàlla, gëm Malaaka yi, gëm Téereem yi, gëm Yónnentam yi, gëm Bésu Alxira, ak gëm Dogal bi (Qadar), bu baax ak bu bon. Lii day dëgëral sunuy xol te tax ñu gën a jege Yàlla."
      }
    }
  },
  {
    "id": 24,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Quel ange est chargé d'apporter la Révélation ?",
    "options": [
      "Mikail",
      "Israfil",
      "Jibril",
      "Malik"
    ],
    "reponse_correcte": "Jibril",
    "explication": "L'Ange Jibril (Gabriel) a transmis le Coran au Prophète Muhammad (PSL).",
    "translations": {
      "ar": {
        "question": "مَنِ الْمَلَكُ الْمُكَلَّفُ بِإِنْزَالِ الْوَحْيِ؟",
        "options": [
          "مِيكَائِيلُ",
          "إِسْرَافِيلُ",
          "جِبْرِيلُ",
          "مَالِكٌ"
        ],
        "reponse_correcte": "جِبْرِيلُ",
        "explication": "أَحْسَنْتَ! الْمَلَكُ جِبْرِيلُ عَلَيْهِ السَّلَامُ هُوَ الَّذِي أَنْزَلَ الْقُرْآنَ الْكَرِيمَ مِنْ عِنْدِ اللَّهِ إِلَى قَلْبِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ. لَقَدْ كَانَ أَمِينًا عَلَى هَذِهِ الرِّسَالَةِ الْعَظِيمَةِ لِنَتَعَلَّمَ مِنْهَا كُلَّ خَيْرٍ."
      },
      "wo": {
        "question": "Ana malaaka ji Yàlla jox liggéeyu indil Wahyu bi?",
        "options": [
          "Mikaayil",
          "Israafil",
          "Jibriil",
          "Maalik"
        ],
        "reponse_correcte": "Jibriil",
        "explication": "Maa ngi lay gërëm bu baax! Malaaka Jibriil (jàmm ak mucc yal na nekk ci moom) moo indil Alxuraan bu sell bi Yonent Yàlla Muhammad (jàmm ak mucc yal na nekk ci moom). Liggéey bu am solo la woon, ngir ñu mën ci jàng lépp lu baax ak lu jub."
      }
    }
  },
  {
    "id": 25,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Qui est le dernier des Prophètes ?",
    "options": [
      "Moussa (AS)",
      "Issa (AS)",
      "Ibrahim (AS)",
      "Muhammad (PSL)"
    ],
    "reponse_correcte": "Muhammad (PSL)",
    "explication": "Il est le Sceau des prophètes, aucun autre prophète ne viendra après lui.",
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ آخِرُ الْأَنْبِيَاءِ؟",
        "options": [
          "مُوسَىٰ (عَلَيْهِ السَّلَامُ)",
          "عِيسَىٰ (عَلَيْهِ السَّلَامُ)",
          "إِبْرَاهِيمُ (عَلَيْهِ السَّلَامُ)",
          "مُحَمَّدٌ (صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ)"
        ],
        "reponse_correcte": "مُحَمَّدٌ (صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ)",
        "explication": "إِنَّهُ خَاتَمُ الْأَنْبِيَاءِ، يَعْنِي أَنَّهُ آخِرُ نَبِيٍّ أَرْسَلَهُ اللّٰهُ إِلَيْنَا. لَنْ يَأْتِيَ بَعْدَهُ نَبِيٌّ آخَرُ أَبَدًا. لَقَدْ جَاءَنَا بِأَجْمَلِ الرِّسَالَاتِ وَأَكْمَلِ الْأَخْلَاقِ، فَلْنَتَعَلَّمْ مِنْهُ وَنُحِبَّهُ كَثِيرًا!"
      },
      "wo": {
        "question": "Ana ku mujj ci Yonent yi?",
        "options": [
          "Móosa (Jàmm ak Yërmande Yàlla nekk ci moom)",
          "Ciisa (Jàmm ak Yërmande Yàlla nekk ci moom)",
          "Ibraahiima (Jàmm ak Yërmande Yàlla nekk ci moom)",
          "Muhammad (Jàmm ak Yërmande Yàlla nekk ci moom)"
        ],
        "reponse_correcte": "Muhammad (Jàmm ak Yërmande Yàlla nekk ci moom)",
        "explication": "Moom la Yàlla mujj a yónni ci Yonent yi. Amul beneen Yonent bu ñëw ci gannaawam. Moo ñu indil xibaar yu gën a rafet ak jikko yu matale, kon nañu jàng ci moom te bëgg ko bu baax!"
      }
    }
  },
  {
    "id": 26,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'ange chargé de souffler dans la Trompe au Jour Dernier ?",
    "options": [
      "Jibril",
      "Mikail",
      "Israfil",
      "Azrail"
    ],
    "reponse_correcte": "Israfil",
    "explication": "Israfil donnera le signal de la fin des temps et de la résurrection.",
    "translations": {
      "ar": {
        "question": "مَا اسْمُ الْمَلَكِ الْمُكَلَّفِ بِالنَّفْخِ فِي الصُّورِ يَوْمَ الْقِيَامَةِ؟",
        "options": [
          "جِبْرِيلُ",
          "مِيكَائِيلُ",
          "إِسْرَافِيلُ",
          "عَزْرَائِيلُ"
        ],
        "reponse_correcte": "إِسْرَافِيلُ",
        "explication": "إِسْرَافِيلُ هُوَ الْمَلَكُ الَّذِي سَيَنْفُخُ فِي الصُّورِ لِيُعْلِنَ بِدَايَةَ نِهَايَةِ الدُّنْيَا وَبَدْءَ يَوْمِ الْبَعْثِ، حَيْثُ نَقُومُ جَمِيعًا لِنَلْتَقِيَ بِرَبِّنَا. فَلْنَحْرِصْ عَلَى فِعْلِ الْخَيْرِ لِنَكُونَ مِنَ الْفَائِزِينَ!"
      },
      "wo": {
        "question": "Bañ malaaka la Yàlla sant ci mu üf ci buum bi ci Bisub Alxiyàama?",
        "options": [
          "Jibril",
          "Mikaayil",
          "Israfil",
          "Asraayil"
        ],
        "reponse_correcte": "Israfil",
        "explication": "Israfil moo lay jox xibaar bi ne jamono ji jéex na te Bisub Alxiyàama tàmbli na. Ci bis boobu la ñépp di taxaw ngir dajje ak Yàlla, te gis li ñu defoon ci dund gi. Kon nañu gëna def lu baax ngir am yiw ci Yàlla!"
      }
    }
  },
  {
    "id": 27,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "À quel prophète a été révélé la Torah (Tawrat) ?",
    "options": [
      "Dawud (AS)",
      "Issa (AS)",
      "Moussa (AS)",
      "Ibrahim (AS)"
    ],
    "reponse_correcte": "Moussa (AS)",
    "explication": "La Tawrat a été donnée à Moussa.",
    "translations": {
      "ar": {
        "question": "لِأَيِّ نَبِيٍّ أُنْزِلَتِ التَّوْرَاةُ؟",
        "options": [
          "دَاوُودُ (عَلَيْهِ السَّلَامُ)",
          "عِيسَى (عَلَيْهِ السَّلَامُ)",
          "مُوسَى (عَلَيْهِ السَّلَامُ)",
          "إِبْرَاهِيمُ (عَلَيْهِ السَّلَامُ)"
        ],
        "reponse_correcte": "مُوسَى (عَلَيْهِ السَّلَامُ)",
        "explication": "أَحْسَنْتَ! التَّوْرَاةُ كِتَابٌ عَظِيمٌ وَنُورٌ مِنْ عِنْدِ اللَّهِ، أَنْزَلَهُ اللَّهُ عَلَى نَبِيِّهِ الْكَرِيمِ مُوسَى عَلَيْهِ السَّلَامُ لِيُرْشِدَ بِهِ قَوْمَهُ إِلَى الْخَيْرِ وَالْحَقِّ. كَمْ هُوَ جَمِيلٌ أَنْ نَتَعَلَّمَ عَنْ هَؤُلَاءِ الْأَنْبِيَاءِ الْعِظَامِ وَكُتُبِ اللَّهِ الْمُنَزَّلَةِ!"
      },
      "wo": {
        "question": "Ci kan la Yàlla wàcce Tawraat bi?",
        "options": [
          "Daawuud (Jàmmi Yàlla nekk ci moom)",
          "Ciisaa (Jàmmi Yàlla nekk ci moom)",
          "Musa (Jàmmi Yàlla nekk ci moom)",
          "Ibraahiim (Jàmmi Yàlla nekk ci moom)"
        ],
        "reponse_correcte": "Musa (Jàmmi Yàlla nekk ci moom)",
        "explication": "Maa ngi lay gërëm bu baax! Tawraat bi, téere bu am solo la te leer gu jóge ci Yàlla, moo ko wàcce ci yonentam bu tedd bi Musa (Jàmmi Yàlla nekk ci moom) ngir mu gindee askanam ci yoonu jub ak dëgg. Lu neex la te am solo ñu jàng ci yonent yu mag yi ak téere yi Yàlla wàcce!"
      }
    }
  },
  {
    "id": 28,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "À quel prophète a été révélé l'Évangile (Injil) ?",
    "options": [
      "Moussa (AS)",
      "Issa (AS)",
      "Dawud (AS)",
      "Muhammad (PSL)"
    ],
    "reponse_correcte": "Issa (AS)",
    "explication": "L'Injil a été donné à Issa (Jésus).",
    "translations": {
      "ar": {
        "question": "لِأَيِّ نَبِيٍّ أُنْزِلَ الْإِنْجِيلُ؟",
        "options": [
          "مُوسَىٰ (عَلَيْهِ السَّلَامُ)",
          "عِيسَىٰ (عَلَيْهِ السَّلَامُ)",
          "دَاوُودُ (عَلَيْهِ السَّلَامُ)",
          "مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)"
        ],
        "reponse_correcte": "عِيسَىٰ (عَلَيْهِ السَّلَامُ)",
        "explication": "لَقَدْ أَنْزَلَ اللَّهُ الْإِنْجِيلَ عَلَى نَبِيِّهِ عِيسَىٰ (عَلَيْهِ السَّلَامُ) لِيَهْدِيَ بِهِ النَّاسَ إِلَى الْخَيْرِ وَالنُّورِ. مَا أَجْمَلَ أَنْ نَتَعَلَّمَ عَنْ كُتُبِ اللَّهِ وَأَنْبِيَائِهِ!"
      },
      "wo": {
        "question": "Ki la Yàlla wàcceel Injiil bi ci yónnent yi?",
        "options": [
          "Musa (AS)",
          "Issa (AS)",
          "Dawud (AS)",
          "Muhammad (PSL)"
        ],
        "reponse_correcte": "Issa (AS)",
        "explication": "Yàlla moo wàcce Injiil bi ci Yónnentu Issa (AS) ngir mu gindil ko nit ñi ci yoonu leer ak jamm. Lu neex la ñu xam li Yàlla wàcce ak yónnentam yi!"
      }
    }
  },
  {
    "id": 29,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Que signifie 'Al-Ahad', l'un des noms d'Allah ?",
    "options": [
      "Le Clément",
      "L'Unique",
      "Le Pourvoyeur",
      "Le Savant"
    ],
    "reponse_correcte": "L'Unique",
    "explication": "Allah est Un, Il n'a pas d'associé.",
    "translations": {
      "ar": {
        "question": "مَاذَا يَعْنِي اسْمُ 'الْأَحَدِ' مِنْ أَسْمَاءِ اللَّهِ الْحُسْنَى؟",
        "options": [
          "الرَّحِيمُ",
          "الْوَاحِدُ",
          "الرَّزَّاقُ",
          "الْعَلِيمُ"
        ],
        "reponse_correcte": "الْوَاحِدُ",
        "explication": "اللَّهُ وَاحِدٌ لَا شَرِيكَ لَهُ. هُوَ الْفَرْدُ الَّذِي لَا يُشْبِهُهُ أَحَدٌ، وَلَا يُشَارِكُهُ فِي مُلْكِهِ أَحَدٌ."
      },
      "wo": {
        "question": "Lan la turu Yàlla bi di 'Al-Ahad' tekki?",
        "options": [
          "Ki Yërmande ji",
          "Ki Koom",
          "Ki May Nekk",
          "Ki Xam Lépp"
        ],
        "reponse_correcte": "Ki Koom",
        "explication": "Yàlla Koom la, amul kenn ku ko bokkal. Mooy Ki Koom, kenn amu ko moroom ci léppam."
      }
    }
  },
  {
    "id": 30,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Que signifie 'Al-Khaliq' ?",
    "options": [
      "Le Créateur",
      "Le Majestueux",
      "Le Juge",
      "Le Puissant"
    ],
    "reponse_correcte": "Le Créateur",
    "explication": "Celui qui a créé l'univers à partir du néant.",
    "translations": {
      "ar": {
        "question": "مَاذَا يَعْنِي اسْمُ 'الْخَالِقِ'؟",
        "options": [
          "الْخَالِقُ",
          "الْمَجِيدُ",
          "الْحَكَمُ",
          "الْقَوِيُّ"
        ],
        "reponse_correcte": "الْخَالِقُ",
        "explication": "هُوَ الَّذِي خَلَقَ كُلَّ شَيْءٍ فِي هَذَا الْكَوْنِ الْجَمِيلِ، مِنْ السَّمَاوَاتِ وَالْأَرْضِ وَالنُّجُومِ وَالْأَشْجَارِ وَالْحَيَوَانَاتِ، وَحَتَّى أَنْتَ يَا صَغِيرِي! لَقَدْ خَلَقَهَا مِنْ لَا شَيْءٍ بِقُدْرَتِهِ الْعَظِيمَةِ وَحُبِّهِ لَنَا. فَسُبْحَانَ الْخَالِقِ الْعَظِيمِ!"
      },
      "wo": {
        "question": "Lan la 'Al-Khaliq' tekki?",
        "options": [
          "Ki Sàkk",
          "Ki Màgg",
          "Ki Àtte",
          "Ki Am Doole"
        ],
        "reponse_correcte": "Ki Sàkk",
        "explication": "Mooy Ki sàkk lépp lu nekk ci àddina ju rafet jii, ci asamaan yi, suuf si, biddiw yi, garab yi, ak mala yi, ba sax yaw mi xale bi! Moom la Yàlla sàkk lépp ci dara, ak dooleem ju màgg ak bëggam bu réy ci nun. Kon, santal Yàlla Ki Sàkk lépp, mooy Ki nu bëgg!"
      }
    }
  },
  {
    "id": 31,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Quel est le premier humain créé par Allah ?",
    "options": [
      "Nuh (AS)",
      "Adam (AS)",
      "Ibrahim (AS)",
      "Moussa (AS)"
    ],
    "reponse_correcte": "Adam (AS)",
    "explication": "Adam est le père de l'humanité."
  },
  {
    "id": 32,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "De quoi ont été créés les anges ?",
    "options": [
      "D'argile",
      "De feu",
      "De lumière",
      "D'eau"
    ],
    "reponse_correcte": "De lumière",
    "explication": "Les anges sont des créatures de pure lumière obéissant à Allah."
  },
  {
    "id": 33,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "De quoi a été créé Adam ?",
    "options": [
      "De lumière",
      "De feu",
      "D'argile (terre)",
      "D'eau"
    ],
    "reponse_correcte": "D'argile (terre)",
    "explication": "L'homme a été façonné à partir de la terre."
  },
  {
    "id": 34,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Croire au Destin (Al-Qadar) signifie :",
    "options": [
      "Qu'Allah sait tout ce qui va arriver",
      "Qu'on ne peut rien faire",
      "Que la chance existe",
      "Que tout est accidentel"
    ],
    "reponse_correcte": "Qu'Allah sait tout ce qui va arriver",
    "explication": "Allah connaît et décrète toutes choses, le bien comme les épreuves."
  },
  {
    "id": 35,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Quel prophète est surnommé 'Khalilullah' (l'ami intime d'Allah) ?",
    "options": [
      "Moussa (AS)",
      "Ibrahim (AS)",
      "Nuh (AS)",
      "Yusuf (AS)"
    ],
    "reponse_correcte": "Ibrahim (AS)",
    "explication": "Ibrahim a reçu ce noble titre pour sa dévotion parfaite."
  },
  {
    "id": 36,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Dans quelle ville est né le Prophète Muhammad (PSL) ?",
    "options": [
      "Médine",
      "Jérusalem",
      "La Mecque",
      "Le Caire"
    ],
    "reponse_correcte": "La Mecque",
    "explication": "Il est né à La Mecque en l'an 570."
  },
  {
    "id": 37,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel était le nom du père du Prophète (PSL) ?",
    "options": [
      "Abu Talib",
      "Abdullah",
      "Abdul Muttalib",
      "Hamza"
    ],
    "reponse_correcte": "Abdullah",
    "explication": "Abdullah ibn Abdul Muttalib est décédé avant la naissance du Prophète."
  },
  {
    "id": 38,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel était le nom de la mère du Prophète (PSL) ?",
    "options": [
      "Khadija",
      "Fatima",
      "Amina",
      "Halima"
    ],
    "reponse_correcte": "Amina",
    "explication": "Amina bint Wahb a élevé le Prophète jusqu'à l'âge de 6 ans."
  },
  {
    "id": 39,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle la nourrice qui a allaité le Prophète (PSL) dans le désert ?",
    "options": [
      "Baraka",
      "Amina",
      "Halima As-Sa'diyya",
      "Khadija"
    ],
    "reponse_correcte": "Halima As-Sa'diyya",
    "explication": "Il a passé les premières années de sa vie dans la tribu des Bani Sa'd avec Halima."
  },
  {
    "id": 40,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui était le grand-père du Prophète (PSL) qui l'a pris en charge à la mort de sa mère ?",
    "options": [
      "Abu Talib",
      "Abdul Muttalib",
      "Abbas",
      "Abu Lahab"
    ],
    "reponse_correcte": "Abdul Muttalib",
    "explication": "Le chef de Quraysh, Abdul Muttalib, aimait profondément son petit-fils."
  },
  {
    "id": 41,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel oncle a protégé le Prophète (PSL) après la mort de son grand-père ?",
    "options": [
      "Abu Talib",
      "Hamza",
      "Abbas",
      "Abu Jahl"
    ],
    "reponse_correcte": "Abu Talib",
    "explication": "Abu Talib a élevé et protégé le Prophète durant de longues années."
  },
  {
    "id": 42,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quel âge avait le Prophète (PSL) lorsqu'il a reçu la première révélation ?",
    "options": [
      "30 ans",
      "35 ans",
      "40 ans",
      "50 ans"
    ],
    "reponse_correcte": "40 ans",
    "explication": "La première révélation eut lieu dans la grotte de Hira à ses 40 ans."
  },
  {
    "id": 43,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui fut la première femme du Prophète (PSL) ?",
    "options": [
      "Aisha",
      "Hafsa",
      "Zaynab",
      "Khadija"
    ],
    "reponse_correcte": "Khadija",
    "explication": "Khadija bint Khuwaylid fut son plus grand soutien et la première à croire en lui.",
    "translations": {
      "ar": {
        "question": "مَنْ كَانَتْ زَوْجَةَ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) الْأُولَى؟",
        "options": [
          "عَائِشَةُ",
          "حَفْصَةُ",
          "زَيْنَبُ",
          "خَدِيجَةُ"
        ],
        "reponse_correcte": "خَدِيجَةُ",
        "explication": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ، رَضِيَ اللَّهُ عَنْهَا، كَانَتْ سَنَدَهُ الْعَظِيمَ وَأَوَّلَ مَنْ آمَنَ بِهِ. يَا لَهَا مِنْ امْرَأَةٍ عَظِيمَةٍ!"
      },
      "wo": {
        "question": "Ana jabarub Yonent bi (Jàmm ak Xéewal Yàlla nekk ci moom) bu njëkk?",
        "options": [
          "Aayisa",
          "Hafsa",
          "Saynab",
          "Xadiija"
        ],
        "reponse_correcte": "Xadiija",
        "explication": "Xadiija bint Xuywaylid mooyoon ku ko gën a jàppale te doon ki njëkk a gëm ko. Moom de, jigeen ju màgg la woon!"
      }
    }
  },
  {
    "id": 44,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'émigration du Prophète (PSL) de La Mecque à Médine ?",
    "options": [
      "L'Isra",
      "Le Mi'raj",
      "La Hijra",
      "La Omra"
    ],
    "reponse_correcte": "La Hijra",
    "explication": "La Hijra marque le début du calendrier islamique."
  },
  {
    "id": 45,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quelle fut la première grande bataille de l'Islam ?",
    "options": [
      "Uhud",
      "Khandaq",
      "Badr",
      "Khaybar"
    ],
    "reponse_correcte": "Badr",
    "explication": "La bataille de Badr fut une victoire miraculeuse pour les musulmans."
  },
  {
    "id": 46,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui était le compagnon le plus intime du Prophète (PSL), premier calife ?",
    "options": [
      "Omar",
      "Othman",
      "Ali",
      "Abu Bakr"
    ],
    "reponse_correcte": "Abu Bakr",
    "explication": "Abu Bakr As-Siddiq l'a accompagné durant la Hijra et fut son premier successeur."
  },
  {
    "id": 47,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quel compagnon était surnommé 'Al-Faruq' ?",
    "options": [
      "Ali",
      "Omar",
      "Hamza",
      "Khalid"
    ],
    "reponse_correcte": "Omar",
    "explication": "Omar ibn Al-Khattab était connu pour distinguer fermement le vrai du faux."
  },
  {
    "id": 48,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Combien de sourates y a-t-il dans le Saint Coran ?",
    "options": [
      "99",
      "114",
      "120",
      "144"
    ],
    "reponse_correcte": "114",
    "explication": "Le Coran contient 114 sourates, allant de Al-Fatiha à An-Nas."
  },
  {
    "id": 49,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Quelle est la plus longue sourate du Coran ?",
    "options": [
      "Al-Fatiha",
      "Al-Baqarah",
      "Yasin",
      "Ar-Rahman"
    ],
    "reponse_correcte": "Al-Baqarah",
    "explication": "Al-Baqarah (La Vache) est la 2ème et la plus longue sourate.",
    "translations": {
      "ar": {
        "question": "مَا هِيَ أَطْوَلُ سُورَةٍ فِي كِتَابِ اللَّهِ الْعَظِيمِ، الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "الْفَاتِحَةُ",
          "الْبَقَرَةُ",
          "يس",
          "الرَّحْمَنُ"
        ],
        "reponse_correcte": "الْبَقَرَةُ",
        "explication": "يَا صَغِيرِي الْحَبِيبَ، سُورَةُ الْبَقَرَةِ (أَيْ: الْبَقَرَةُ) هِيَ السُّورَةُ الثَّانِيَةُ فِي تَرْتِيبِ الْمُصْحَفِ الشَّرِيفِ، وَهِيَ أَطْوَلُ سُوَرِ الْقُرْآنِ الْكَرِيمِ. مَا أَجْمَلَ أَنْ نَتَعَلَّمَ عَنْ كِتَابِ اللَّهِ!"
      },
      "wo": {
        "question": "Anaa suura bi gën a gudd ci Alxuraan?",
        "options": [
          "Al-Faatiha",
          "Al-Baxara",
          "Yaasiin",
          "Ar-Rahmaan"
        ],
        "reponse_correcte": "Al-Baxara",
        "explication": "Waw, sama doom ju baax, Al-Baxara (mooy 'Nag' ci Wolof) mooy ñaareelu suura bi ci Alxuraan, te mooy bi gën a gudd ci yépp. Moom la Yàlla tudd ci Alxuraan. Jàng Alxuraan dafa neex te am solo lool!"
      }
    }
  },
  {
    "id": 50,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle sourate est considérée comme le 'cœur' du Coran ?",
    "options": [
      "Al-Mulk",
      "Yasin",
      "Ar-Rahman",
      "Al-Kahf"
    ],
    "reponse_correcte": "Yasin",
    "explication": "Le Prophète a qualifié la sourate Yasin de cœur du Coran."
  },
  {
    "id": 51,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle est la plus courte sourate du Coran ?",
    "options": [
      "Al-Asr",
      "Al-Kawthar",
      "Al-Ikhlas",
      "An-Nas"
    ],
    "reponse_correcte": "Al-Kawthar",
    "explication": "Al-Kawthar ne contient que 3 courts versets."
  },
  {
    "id": 52,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle sourate ne commence pas par 'Bismillah Ar-Rahman Ar-Rahim' ?",
    "options": [
      "At-Tawbah",
      "Al-Anfal",
      "Yunus",
      "Hud"
    ],
    "reponse_correcte": "At-Tawbah",
    "explication": "C'est la seule des 114 sourates à ne pas débuter par la Basmalah."
  },
  {
    "id": 53,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Combien y a-t-il de Hizb (parties) dans le Coran ?",
    "options": [
      "30",
      "60",
      "114",
      "240"
    ],
    "reponse_correcte": "60",
    "explication": "Le Coran est divisé en 30 Juz', eux-mêmes divisés en 2, soit 60 Hizb."
  },
  {
    "id": 54,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que dit-on quand on éternue ?",
    "options": [
      "Allahu Akbar",
      "Alhamdulillah",
      "Bismillah",
      "Astaghfirullah"
    ],
    "reponse_correcte": "Alhamdulillah",
    "explication": "On loue Allah pour le bienfait de la santé."
  },
  {
    "id": 55,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que répond-on à celui qui dit Alhamdulillah après avoir éternué ?",
    "options": [
      "Amin",
      "Yarhamukallah",
      "Barakallah",
      "Choukran"
    ],
    "reponse_correcte": "Yarhamukallah",
    "explication": "C'est une invocation demandant la miséricorde d'Allah pour lui."
  },
  {
    "id": 56,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Avec quelle main un musulman doit-il manger et boire ?",
    "options": [
      "La main gauche",
      "La main droite",
      "Les deux mains",
      "Peu importe"
    ],
    "reponse_correcte": "La main droite",
    "explication": "Le Prophète (PSL) a ordonné de manger, boire et donner avec la main droite."
  },
  {
    "id": 57,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Quel comportement est obligatoire envers ses parents ?",
    "options": [
      "La désobéissance",
      "L'ignorance",
      "Le respect et la bonté (Birr al-Walidayn)",
      "L'impatience"
    ],
    "reponse_correcte": "Le respect et la bonté (Birr al-Walidayn)",
    "explication": "Allah ordonne d'être extrêmement bon envers ses parents, même dans la vieillesse."
  },
  {
    "id": 58,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Est-il permis à un musulman de mentir ?",
    "options": [
      "Oui, tout le temps",
      "Oui, pour s'amuser",
      "Non, l'Islam l'interdit",
      "Seulement aux enfants"
    ],
    "reponse_correcte": "Non, l'Islam l'interdit",
    "explication": "Le mensonge est un grave péché, le musulman doit toujours être Véridique (Sadiq)."
  },
  {
    "id": 59,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Qui a construit la Kaaba en premier ?",
    "options": [
      "Muhammad (PSL)",
      "Ibrahim et Ismail (AS)",
      "Moussa (AS)",
      "Sulayman (AS)"
    ],
    "reponse_correcte": "Ibrahim et Ismail (AS)",
    "explication": "Ils ont bâti la Maison d'Allah sur l'ordre divin."
  },
  {
    "id": 60,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quel acte est accompli autour de la Kaaba pendant le Hajj ?",
    "options": [
      "Le jeûne",
      "Le Tawaf (circumambulation)",
      "Le sacrifice",
      "La Zakat"
    ],
    "reponse_correcte": "Le Tawaf (circumambulation)",
    "explication": "Les pèlerins font 7 tours autour de la Kaaba."
  },
  {
    "id": 61,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'aumône spécifique versée à la fin du Ramadan ?",
    "options": [
      "Sadaqa",
      "Zakat al-Fitr",
      "Waqf",
      "Fidya"
    ],
    "reponse_correcte": "Zakat al-Fitr",
    "explication": "Elle purifie le jeûneur et permet aux pauvres de fêter l'Aïd."
  },
  {
    "id": 62,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quel était le surnom du Prophète (PSL) avant même la révélation, grâce à son honnêteté ?",
    "options": [
      "Al-Amin (Le Digne de confiance)",
      "Al-Khatim (Le Sceau)",
      "Al-Mahdi (Le Guidé)",
      "Al-Fatih (Le Conquérant)"
    ],
    "reponse_correcte": "Al-Amin (Le Digne de confiance)",
    "explication": "Les gens de La Mecque lui confiaient leurs biens car il ne trahissait jamais."
  },
  {
    "id": 63,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Combien de Takbirs (Allahu Akbar) compte la prière funéraire (Salat Al-Janazah) ?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "reponse_correcte": "4",
    "explication": "Elle se prie debout avec 4 Takbirs, sans inclinaison ni prosternation."
  },
  {
    "id": 64,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quel est le premier verset révélé du Coran ?",
    "options": [
      "Al-Hamdulillah",
      "Iqra' (Lis !)",
      "Qul Huwa Allahu Ahad",
      "Ar-Rahman"
    ],
    "reponse_correcte": "Iqra' (Lis !)",
    "explication": "Le premier mot de la sourate Al-Alaq appelle à la connaissance."
  },
  {
    "id": 65,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Dans quelle sourate trouve-t-on Ayat Al-Kursi (Le Verset du Trône) ?",
    "options": [
      "Al-Imran",
      "Al-Baqarah",
      "An-Nisa",
      "Al-Ma'idah"
    ],
    "reponse_correcte": "Al-Baqarah",
    "explication": "C'est le verset 255 de la sourate Al-Baqarah."
  },
  {
    "id": 66,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Que signifie le terme 'Sabr' ?",
    "options": [
      "La Colère",
      "La Joie",
      "La Patience et l'endurance",
      "La Peur"
    ],
    "reponse_correcte": "La Patience et l'endurance",
    "explication": "Le Sabr est une vertu majeure face aux épreuves et dans l'apprentissage."
  },
  {
    "id": 67,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle l'ange gardien du Paradis ?",
    "options": [
      "Malik",
      "Ridwan",
      "Munkar",
      "Nakir"
    ],
    "reponse_correcte": "Ridwan",
    "explication": "Ridwan est l'ange en charge des portes du Paradis."
  },
  {
    "id": 68,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle l'ange gardien de l'Enfer ?",
    "options": [
      "Malik",
      "Ridwan",
      "Jibril",
      "Israfil"
    ],
    "reponse_correcte": "Malik",
    "explication": "Malik est mentionné dans le Coran comme le gardien du feu."
  },
  {
    "id": 69,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Pendant quelle bataille le Prophète (PSL) a-t-il perdu une dent ?",
    "options": [
      "Badr",
      "Uhud",
      "Khandaq",
      "Tabuk"
    ],
    "reponse_correcte": "Uhud",
    "explication": "La bataille d'Uhud fut une épreuve difficile où le Prophète fut blessé."
  },
  {
    "id": 70,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Dans quelle ville le Prophète (PSL) est-il enterré ?",
    "options": [
      "La Mecque",
      "Jérusalem",
      "Médine",
      "Ta'if"
    ],
    "reponse_correcte": "Médine",
    "explication": "Il repose dans sa mosquée à Médine."
  },
  {
    "id": 71,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Comment s'appelle l'eau pure du puits situé à La Mecque ?",
    "options": [
      "L'eau de pluie",
      "L'eau de Zamzam",
      "L'eau de Kawthar",
      "L'eau de Salsabil"
    ],
    "reponse_correcte": "L'eau de Zamzam",
    "explication": "C'est une eau bénite qui a jailli pour Ismail et Hajar."
  },
  {
    "id": 72,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "En quelle langue originale le Coran a-t-il été révélé ?",
    "options": [
      "En français",
      "En hébreu",
      "En arabe",
      "En perse"
    ],
    "reponse_correcte": "En arabe",
    "explication": "Le Coran est une révelation en langue arabe claire."
  },
  {
    "id": 73,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Que signifie le mot 'Islam' ?",
    "options": [
      "La guerre",
      "La soumission et la paix",
      "La prière",
      "Le jeûne"
    ],
    "reponse_correcte": "La soumission et la paix",
    "explication": "L'Islam est la soumission pacifique à la volonté d'Allah."
  },
  {
    "id": 74,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelles prières peut-on raccourcir lorsqu'on est en voyage ?",
    "options": [
      "Subh et Maghrib",
      "Dhuhr, Asr et Isha",
      "Toutes les prières",
      "Aucune"
    ],
    "reponse_correcte": "Dhuhr, Asr et Isha",
    "explication": "Les prières de 4 Rak'ats sont réduites à 2 (Qasr) en voyage."
  },
  {
    "id": 75,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Que dit le Prophète (PSL) sur le sourire ?",
    "options": [
      "C'est interdit",
      "C'est une aumône (Sadaqa)",
      "C'est un défaut",
      "C'est réservé aux enfants"
    ],
    "reponse_correcte": "C'est une aumône (Sadaqa)",
    "explication": "Sourire à son frère est compté comme une bonne action."
  },
  {
    "id": 76,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle sourate est appelée 'La mère du Coran' (Oum Al-Kitab) ?",
    "options": [
      "Al-Ikhlas",
      "Al-Fatiha",
      "Al-Baqarah",
      "Yasin"
    ],
    "reponse_correcte": "Al-Fatiha",
    "explication": "Al-Fatiha résume le message entier du Coran."
  },
  {
    "id": 77,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Combien de versets (Ayat) compte la sourate Al-Fatiha ?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "reponse_correcte": "7",
    "explication": "Elle est composée de sept versets, souvent appelés les 'sept répétés'."
  },
  {
    "id": 78,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Comment s'appelle le mois durant lequel le Prophète (PSL) est né ?",
    "options": [
      "Ramadan",
      "Cha'ban",
      "Rabi' al-Awwal",
      "Muharram"
    ],
    "reponse_correcte": "Rabi' al-Awwal",
    "explication": "Il est né le 12 Rabi' al-Awwal."
  },
  {
    "id": 79,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel animal est sacrifié pour la fête de l'Aïd al-Adha ?",
    "options": [
      "Un cheval",
      "Un mouton ou assimilé",
      "Un poulet",
      "Un poisson"
    ],
    "reponse_correcte": "Un mouton ou assimilé",
    "explication": "En commémoration du sacrifice du prophète Ibrahim."
  },
  {
    "id": 80,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Qui a créé les djinns ?",
    "options": [
      "Les Anges",
      "Les Hommes",
      "Allah",
      "Ils n'existent pas"
    ],
    "reponse_correcte": "Allah",
    "explication": "Allah a créé les djinns à partir d'un feu sans fumée."
  },
  {
    "id": 81,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Qui est le fondateur de l'Institut Coranique Al-Mouyassar ?",
    "options": [
      "Cheikh Ibrahim Niass",
      "Cheikh El Hadji Abdallah Niasse",
      "Un groupe d'imams",
      "L'association des parents"
    ],
    "reponse_correcte": "Cheikh El Hadji Abdallah Niasse",
    "explication": "L'institut a été fondé by Cheikh El Hadji Abdallah Niasse, inspiré par Seyda Mariama Niasse.",
    "translations": {
      "ar": {
        "question": "من هو مؤسس معهد الميسر للقرآن الكريم ؟",
        "options": [
          "الشيخ إبراهيم نياس",
          "الشيخ الحاج عبد الله نياس",
          "مجموعة من الأئمة",
          "جمعية أولياء الأمور"
        ],
        "reponse_correcte": "الشيخ الحاج عبد الله نياس",
        "explication": "تأسس المعهد على يد الشيخ الحاج عبد الله نياس، مستلهماً من سيدة مريم نياس."
      },
      "wo": {
        "question": "Kan moy kiko sos, di sango Daara Al-Mouyassar ?",
        "options": [
          "Cheikh Ibrahim Niass",
          "Cheikh El Hadji Abdallah Niasse",
          "Mbooloo Imams",
          "Mbooloo Wajur yi"
        ],
        "reponse_correcte": "Cheikh El Hadji Abdallah Niasse",
        "explication": "Daara bi Cheikh El Hadji Abdallah Niasse moko sos, fas yéné yombal njàng mi."
      }
    }
  },
  {
    "id": 82,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Qui occupe le rôle de Directeur de l'Institut Al-Mouyassar ?",
    "options": [
      "Le Maire de la ville",
      "L'Oustaz virtuel",
      "Le grand frère du même nom (Abdallah Niass)",
      "L'AMDMEC"
    ],
    "reponse_correcte": "Le grand frère du même nom (Abdallah Niass)",
    "explication": "Le directeur de l'établissement est Abdallah Niass, grand frère du développeur de ce système.",
    "translations": {
      "ar": {
        "question": "من هو مدير معهد الميسر ؟",
        "options": [
          "عمدة المدينة",
          "الأستاذ الافتراضي",
          "الأخ الأكبر الذي يحمل نفس الاسم (عبد الله نياس)",
          "جمعية AMDMEC"
        ],
        "reponse_correcte": "الأخ الأكبر الذي يحمل نفس الاسم (عبد الله نياس)",
        "explication": "مدير المؤسسة هو عبد الله نياس، الأخ الأكبر لمطور هذا النظام."
      },
      "wo": {
        "question": "Kan moy Directeur u Daara Al-Mouyassar ?",
        "options": [
          "Maire u dëkk bi",
          "Oustaz AI bi",
          "Magu sango bi (Abdallah Niass)",
          "AMDMEC"
        ],
        "reponse_correcte": "Magu sango bi (Abdallah Niass)",
        "explication": "Magu sango bi Abdallah Niass moy Directeur u daara bi."
      }
    }
  },
  {
    "id": 83,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "En quelle année notre grand institut a-t-il été fondé ?",
    "options": [
      "2000",
      "2005",
      "2007",
      "2015"
    ],
    "reponse_correcte": "2007",
    "explication": "L'Institut Al-Mouyassar a vu le jour en 2007.",
    "translations": {
      "ar": {
        "question": "في أي عام تم تأسيس معهدنا العظيم ؟",
        "options": [
          "2000",
          "2005",
          "2007",
          "2015"
        ],
        "reponse_correcte": "2007",
        "explication": "رأى معهد الميسر النور في عام 2007."
      },
      "wo": {
        "question": "Ban at lañu sos sunu daara bu mak bi ?",
        "options": [
          "2000",
          "2005",
          "2007",
          "2015"
        ],
        "reponse_correcte": "2007",
        "explication": "Daara Al-Mouyassar ci atum 2007 la taxaw."
      }
    }
  },
  {
    "id": 84,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Quelles sont les deux couleurs officielles du logotype de l'Institut Al-Mouyassar ?",
    "options": [
      "Bleu et Blanc",
      "Rouge et Noir",
      "Vert foncé (#004D40) et Jaune doré (#D0A21C)",
      "Gris et Or"
    ],
    "reponse_correcte": "Vert foncé (#004D40) et Jaune doré (#D0A21C)",
    "explication": "Le Vert foncé et le Jaune doré/ocre sont les couleurs identitaires de notre institut.",
    "translations": {
      "ar": {
        "question": "ما هما اللونان الرسميان لشعار معهد الميسر ؟",
        "options": [
          "الأزرق والأبيض",
          "الأحمر والأسود",
          "الأخضر الداكن (#004D40) والأصفر الذهبي (#D0A21C)",
          "الرمادي والذهبي"
        ],
        "reponse_correcte": "الأخضر الداكن (#004D40) والأصفر الذهبي (#D0A21C)",
        "explication": "الأخضر الداكن والأصفر الذهبي هما اللونان الهوياتيّان لمعهدنا."
      },
      "wo": {
        "question": "Ban ñaari color ño nek ci logo u Daara Al-Mouyassar ?",
        "options": [
          "Bleu ak Blanc",
          "Rouge ak Noir",
          "Vert foncé (#004D40) ak Jaune doré (#D0A21C)",
          "Gris ak Or"
        ],
        "reponse_correcte": "Vert foncé (#004D40) ak Jaune doré (#D0A21C)",
        "explication": "Vert foncé ak Jaune doré ño nek color u daara bi."
      }
    }
  },
  {
    "id": 85,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Comment se nomme la toute première étape d'apprentissage à l'institut (lecture et épellation) ?",
    "options": [
      "Le Khatm",
      "Le Tahji",
      "La Sirah",
      "Le Fiqh"
    ],
    "reponse_correcte": "Le Tahji",
    "explication": "Le Tahji est le premier niveau obligatoire pour maîtriser la lecture.",
    "translations": {
      "ar": {
        "question": "ما هو اسم المرحلة الأولى للتعلم في المعهد (القراءة والتهجئة) ؟",
        "options": [
          "الختم",
          "التهجي",
          "السيرة",
          "الفقه"
        ],
        "reponse_correcte": "التهجي",
        "explication": "التهجي هو المستوى الأول الإلزامي لإتقان القراءة."
      },
      "wo": {
        "question": "Ban jàng moy tambali ci daara bi ngir xam léer ak bind ?",
        "options": [
          "Khatm bi",
          "Tahji bi",
          "Sirah bi",
          "Fiqh bi"
        ],
        "reponse_correcte": "Tahji bi",
        "explication": "Tahji bi moy tambali njàng mi ngir xam léer bu bax."
      }
    }
  },
  {
    "id": 86,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Combien de 'Quarts' composent la phase principale de mémorisation avant le Khatm ?",
    "options": [
      "2 Quarts",
      "3 Quarts",
      "4 Quarts",
      "5 Quarts"
    ],
    "reponse_correcte": "3 Quarts",
    "explication": "Le système de l'institut est divisé en 1er Quart, 2ème Quart et 3ème Quart de mémorisation.",
    "translations": {
      "ar": {
        "question": "كم 'ربعاً' تتكون منها مرحلة الحفظ الرئيسية قبل الختم ؟",
        "options": [
          "ربعان",
          "3 أرباع",
          "4 أرباع",
          "5 أرباع"
        ],
        "reponse_correcte": "3 أرباع",
        "explication": "ينقسم نظام الحفظ في المعهد إلى الربع الأول، والربع الثاني، والربع الثالث."
      },
      "wo": {
        "question": "Ñata 'Quarts' lañuy jàng ci mémorial Coran bi bala nga yegg ci Khatm bi ?",
        "options": [
          "2 Quarts",
          "3 Quarts",
          "4 Quarts",
          "5 Quarts"
        ],
        "reponse_correcte": "3 Quarts",
        "explication": "Njàngum daara bi mungi tegu ci ñati quarts yu woor."
      }
    }
  },
  {
    "id": 87,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'étape finale qui consacre la mémorisation totale du Coran ?",
    "options": [
      "Le Début",
      "Le Tahji",
      "Le Khatm",
      "La Hijra"
    ],
    "reponse_correcte": "Le Khatm",
    "explication": "Le Khatm est la clôture, célébrée lors de la grande cérémonie de remise de diplômes.",
    "translations": {
      "ar": {
        "question": "ما اسم المرحلة النهائية لتتويج الحفظ الكامل للقرآن الكريم ؟",
        "options": [
          "البداية",
          "التهجي",
          "الختم",
          "الهجرة"
        ],
        "reponse_correcte": "الختم",
        "explication": "الختم هو النهاية، ويُحتفل به في حفل توزيع الشهادات الكبير."
      },
      "wo": {
        "question": "Nan lañuy wax macc bu muj bi buy wone né paré nga Coran yépp ?",
        "options": [
          "Tambali bi",
          "Tahji bi",
          "Khatm bi",
          "Hijra bi"
        ],
        "reponse_correcte": "Khatm bi",
        "explication": "Khatm bi moy ubbil buntu ndam li."
      }
    }
  },
  {
    "id": 88,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Avancé",
    "question": "Quel est le nom exact et complet de l'association regroupant les anciens élèves (Ansar) de l'institut ?",
    "options": [
      "Amicale des Jeunes",
      "Les Bourgeons de la Foi",
      "Association des ressortissants de l'institut coranique almouyassar",
      "Union des Hafiz"
    ],
    "reponse_correcte": "Association des ressortissants de l'institut coranique almouyassar",
    "explication": "C'est la structure vitale qui maintient le lien spirituel et fraternel des anciens pensionnaires.",
    "translations": {
      "ar": {
        "question": "ما هو الاسم الصحيح والكامل للجمعية التي تضم خريجي المعهد (الأنصار) ؟",
        "options": [
          "رابطة الشباب",
          "براعم الإيمان",
          "جمعية خريجي معهد الميسر للقرآن الكريم",
          "اتحاد الحفاظ"
        ],
        "reponse_correcte": "جمعية خريجي معهد الميسر للقرآن الكريم",
        "explication": "هي الهيكل الحيوي الذي يحافظ على الروابط الروحية والأخوية بين الطلاب القدامى."
      },
      "wo": {
        "question": "Nan moy turu mbooloo kurel u magu talibé daara bi (Ansar) ?",
        "options": [
          "Amicale des Jeunes",
          "Les Bourgeons de la Foi",
          "Association des ressortissants de l'institut coranique almouyassar",
          "Union des Hafiz"
        ],
        "reponse_correcte": "Association des ressortissants de l'institut coranique almouyassar",
        "explication": "Association bi moy kurel bu mak bi di bolé talibé yi."
      }
    }
  },
  {
    "id": 89,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Avancé",
    "question": "Que signifie exactement le sigle AMDMEC au sein de notre institut ?",
    "options": [
      "Association des Maîtres d'École et de Coran",
      "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
      "Alliance des Mamans pour le Développement et le Maintien de l'École Coranique",
      "Association des Membres Directeurs du Mouvement Éducatif Coranique"
    ],
    "reponse_correcte": "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
    "explication": "L'AMDMEC est essentielle pour accompagner la direction de l'institut, soutenir le double cursus et moderniser les conditions d'apprentissage.",
    "translations": {
      "ar": {
        "question": "ماذا يعني بالضبط اختصار AMDMEC في معهدنا ؟",
        "options": [
          "جمعية معلمي المدارس والقرآن",
          "جمعية الميسر لتنمية وتحديث التعليم القرآني",
          "تحالف الأمهات لتنمية ودعم المدرسة القرآنية",
          "جمعية الأعضاء المدراء للحركة التعليمية القرآنية"
        ],
        "reponse_correcte": "جمعية الميسر لتنمية وتحديث التعليم القرآني",
        "explication": "تعد AMDMEC ضرورية لمرافقة إدارة المعهد، ودعم المنهج المزدوج وتحديث ظروف التعلم."
      },
      "wo": {
        "question": "Ban firi la AMDMEC am ci sunu daara bi ?",
        "options": [
          "Association des Maîtres d'École et de Coran",
          "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
          "Alliance des Mamans pour le Développement et le Maintien de l'École Coranique",
          "Association des Membres Directeurs du Mouvement Éducatif Coranique"
        ],
        "reponse_correcte": "Association AL-MOUYASSAR Pour le Développement Et la Modernisation de L'Enseignement Coranique",
        "explication": "Mbooloo AMDMEC mungi taxaw ngir dimbali daara bi ci njàngum xam-xam bi."
      }
    }
  },
  {
    "id": 90,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Quelle méthode éducative caractérise l'Institut Al-Mouyassar ?",
    "options": [
      "Uniquement le jeu",
      "Le Double Cursus (Coran & Enseignement Académique)",
      "L'école par correspondance",
      "Les cours d'été seulement"
    ],
    "reponse_correcte": "Le Double Cursus (Coran & Enseignement Académique)",
    "explication": "L'excellence de l'institut repose sur l'alliance de l'enseignement académique moderne et du Coran.",
    "translations": {
      "ar": {
        "question": "ما هو الأسلوب التعليمي الذي يتميز به معهد الميسر ؟",
        "options": [
          "اللعب فقط",
          "المنهج المزدوج (القرآن والتعليم الأكاديمي)",
          "المدرسة بالمراسلة",
          "الدروس الصيفية فقط"
        ],
        "reponse_correcte": "المنهج المزدوج (القرآن والتعليم الأكاديمي)",
        "explication": "يعتمد تميز المعهد على الجمع بين التعليم الأكاديمي الحديث والقرآن الكريم."
      },
      "wo": {
        "question": "Nan moy njàngum Daara Al-Mouyassar ?",
        "options": [
          "Po rek",
          "Double Cursus (Alquran ak jangum daara)",
          "Jàng ci kër yi",
          "Jangum vacance rek"
        ],
        "reponse_correcte": "Double Cursus (Alquran ak jangum daara)",
        "explication": "Njàngum Double Cursus bi moy jox talibé bi Alquran ak xam-xamu daara."
      }
    }
  },
  {
    "id": 91,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Dans quelle ville le futur grand Complexe Arabo-Islamique d'Al-Mouyassar est-il implanté ?",
    "options": [
      "Dakar Plateau",
      "Pikine",
      "Rufisque",
      "Saint-Louis"
    ],
    "reponse_correcte": "Pikine",
    "explication": "Le nouveau complexe ultramoderne est construit à Pikine.",
    "translations": {
      "ar": {
        "question": "في أي مدينة يقع مجمع الميسر العربي الإسلامي الكبير الجديد ؟",
        "options": [
          "دكار بلاتو",
          "بيكينه",
          "روفياسك",
          "سانت لويس"
        ],
        "reponse_correcte": "بيكينه",
        "explication": "يتم بناء المجمع الجديد المتطور للغاية في مدينة بيكينه."
      },
      "wo": {
        "question": "Ban dëkk lañuy tabax tabax bu mak bu daara Al-Mouyassar bi ?",
        "options": [
          "Dakar Plateau",
          "Pikine",
          "Rufisque",
          "Saint-Louis"
        ],
        "reponse_correcte": "Pikine",
        "explication": "Tabax u daara bi Pikine lañ ko fas yéné def."
      }
    }
  },
  {
    "id": 92,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Que signifie le nom 'Al-Mouyassar' ?",
    "options": [
      "Le Grand Arbre",
      "L'Inaccessible",
      "La Voie Facilitée",
      "La Montagne"
    ],
    "reponse_correcte": "La Voie Facilitée",
    "explication": "Ce nom illustre l'objectif de l'institut : rendre l'apprentissage de l'Islam accessible et facile.",
    "translations": {
      "ar": {
        "question": "ماذا يعني اسم 'الميسر' ؟",
        "options": [
          "الشجرة الكبيرة",
          "الصعب المنال",
          "الطريق الميسر والسهل",
          "الجبل"
        ],
        "reponse_correcte": "الطريق الميسر والسهل",
        "explication": "يوضح هذا الاسم هدف المعهد : جعل تعلم الإسلام متاحاً وسهلاً."
      },
      "wo": {
        "question": "Nan moy firi turu 'Al-Mouyassar' ?",
        "options": [
          "Garab bu mak",
          "Lu jafe",
          "Yoon bu yomb bi",
          "Tundu bi"
        ],
        "reponse_correcte": "Yoon bu yomb bi",
        "explication": "Al-Mouyassar moy yoon bu yomb ngir jangum Coran."
      }
    }
  },
  {
    "id": 93,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Quel bâtiment ne sera PAS présent dans le futur Complexe de l'Institut ?",
    "options": [
      "Une Mosquée",
      "Un Internat",
      "Une Bibliothèque",
      "Une salle de cinéma"
    ],
    "reponse_correcte": "Une salle de cinéma",
    "explication": "Le complexe comprendra une mosquée, un internat et une bibliothèque dédiée au savoir.",
    "translations": {
      "ar": {
        "question": "ما هو المبنى الذي لن يكون موجوداً في مجمع المعهد مستقبلاً ؟",
        "options": [
          "مسجد",
          "سكن داخلي",
          "مكتبة",
          "دار سينما"
        ],
        "reponse_correcte": "دار سينما",
        "explication": "سيضم المجمع مسجداً، وسكناً داخلياً، ومكتبة مخصصة للعلم والمعرفة."
      },
      "wo": {
        "question": "Ban tabax lañu du tabax ci tabax bu mak bu daara bi ?",
        "options": [
          "Jaka",
          "Internat",
          "Bibliothèque",
          "Cinéma"
        ],
        "reponse_correcte": "Cinéma",
        "explication": "Daara bi mungi am jaka, internat ak bibliothèque bu mak."
      }
    }
  },
  {
    "id": 94,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Comment le Talibé (élève) de l'institut doit-il se comporter avec ses Oustaz (enseignants) ?",
    "options": [
      "Avec arrogance",
      "En les ignorant",
      "Avec un profond respect et écoute",
      "En parlant plus fort qu'eux"
    ],
    "reponse_correcte": "Avec un profond respect et écoute",
    "explication": "Le respect du maître est la clé de la réussite dans la mémorisation du Coran."
  },
  {
    "id": 95,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Quel jour aura lieu le jugement des actions ?",
    "options": [
      "Le jour de la naissance",
      "Le Jour Dernier (Yawm al-Qiyamah)",
      "Le jour de l'Aïd",
      "Le premier jour du Ramadan"
    ],
    "reponse_correcte": "Le Jour Dernier (Yawm al-Qiyamah)",
    "explication": "C'est le jour où Allah jugera chaque être humain."
  },
  {
    "id": 96,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Par quelle sourate le Coran se termine-t-il ?",
    "options": [
      "Al-Fatiha",
      "Al-Baqarah",
      "An-Nas",
      "Al-Falaq"
    ],
    "reponse_correcte": "An-Nas",
    "explication": "An-Nas (Les Hommes) is la 114ème et dernière sourate du Livre."
  },
  {
    "id": 97,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quelle tribu dominait La Mecque à la naissance du Prophète (PSL) ?",
    "options": [
      "Banu Hashim",
      "Quraysh",
      "Aws",
      "Khazraj"
    ],
    "reponse_correcte": "Quraysh",
    "explication": "Le Prophète est issu de la noble tribu de Quraysh."
  },
  {
    "id": 98,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que doit faire un musulman s'il oublie une prière par sommeil ou par oubli ?",
    "options": [
      "L'abandonner",
      "Attendre l'année suivante",
      "La prier dès qu'il s'en souvient",
      "Payer une amende"
    ],
    "reponse_correcte": "La prier dès qu'il s'en souvient",
    "explication": "La réparation de l'oubli se fait par l'accomplissement immédiat de la prière."
  },
  {
    "id": 99,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Comment appelle-t-on le chant officiel de l'institut chanté par les élèves ?",
    "options": [
      "L'hymne national",
      "Le Nachid Al-Mouyassar",
      "Le Zikr",
      "Le Poème"
    ],
    "reponse_correcte": "Le Nachid Al-Mouyassar",
    "explication": "Le Nachid est l'hymne qui rassemble les voix des Bourgeons d'Al-Mouyassar."
  },
  {
    "id": 100,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Selon la tradition de l'institut, quelle grande valeur (Akhlaq) accompagne toujours l'apprentissage du Coran ?",
    "options": [
      "La vitesse",
      "Le Sabr (Patience)",
      "La compétition",
      "Le silence absolu"
    ],
    "reponse_correcte": "Le Sabr (Patience)",
    "explication": "Sans patience (Sabr), la mémorisation et le parcours jusqu'au Khatm sont impossibles."
  },
  {
    "id": 101,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Quel programme de l'Institut est spécialement conçu pour les enfants pendant les vacances d'été ?",
    "options": [
      "Le Programme Hivernal",
      "Daara Vacance",
      "L'Université d'été",
      "Le Camp de Base"
    ],
    "reponse_correcte": "Daara Vacance",
    "explication": "Le Daara Vacance permet aux enfants de 6 à 15 ans de réviser le Coran et de s'épanouir pendant les vacances."
  },
  {
    "id": 102,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Qu'est-ce que le programme 'Passerelle Accélérée' à l'Institut Al-Mouyassar ?",
    "options": [
      "Un cours de sport",
      "Un cycle de 3 ans pour aider les Huffaz à réintégrer le collège",
      "Une classe de maternelle",
      "Un jeu vidéo"
    ],
    "reponse_correcte": "Un cycle de 3 ans pour aider les Huffaz à réintégrer le collège",
    "explication": "Ce programme exceptionnel permet à ceux qui ont mémorisé le Coran de rattraper rapidement le cursus scolaire classique."
  },
  {
    "id": 103,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "Selon le règlement de l'Institut, entre quels âges un enfant peut-il être admis en Internat ?",
    "options": [
      "Entre 3 et 5 ans",
      "Entre 6 et 9 ans",
      "À partir de 15 ans",
      "Il n'y a pas d'âge"
    ],
    "reponse_correcte": "Entre 6 et 9 ans",
    "explication": "Pour garantir un bon encadrement éducatif et affectif, l'admission en internat se fait dès le plus jeune âge (6 à 9 ans)."
  },
  {
    "id": 104,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "D'après le manuel 'La religion facilitée', que doit faire un enfant s'il commet une erreur ?",
    "options": [
      "Cacher son erreur",
      "Accuser un camarade",
      "Pleurer",
      "S'excuser immédiatement"
    ],
    "reponse_correcte": "S'excuser immédiatement",
    "explication": "S'excuser quand on se trompe est une grande preuve de courage et de bon comportement (Akhlaq)."
  },
  {
    "id": 105,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Que doit faire un petit musulman avant de commencer à manger ?",
    "options": [
      "Parler fort",
      "Laver ses mains et dire Bismillah",
      "Courir",
      "Regarder la télévision"
    ],
    "reponse_correcte": "Laver ses mains et dire Bismillah",
    "explication": "La propreté et l'invocation du nom d'Allah apportent la bénédiction (Baraka) dans le repas."
  },
  {
    "id": 106,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Comment un élève (Talibé) doit-il entrer dans une pièce ou dans sa classe ?",
    "options": [
      "En courant",
      "En silence sans rien dire",
      "En saluant par 'As-Salamu Alaykum'",
      "En chantant"
    ],
    "reponse_correcte": "En saluant par 'As-Salamu Alaykum'",
    "explication": "Répandre le Salam est une recommandation forte du Prophète (PSL) qui crée l'amour entre les croyants."
  },
  {
    "id": 107,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Parmi ces comportements, lequel est une 'Habitude Saine' à adopter le matin ?",
    "options": [
      "Dormir jusqu'à midi",
      "Laisser son lit en désordre",
      "Faire son lit et se préparer avec énergie",
      "Se plaindre de la fatigue"
    ],
    "reponse_correcte": "Faire son lit et se préparer avec énergie",
    "explication": "L'Islam aime l'ordre, la propreté et la motivation dès le réveil pour accomplir la prière de Subh."
  },
  {
    "id": 108,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel Prophète a construit une grande arche pour sauver les croyants et les animaux du déluge ?",
    "options": [
      "Moussa (AS)",
      "Nuh (Noé) (AS)",
      "Issa (Jésus) (AS)",
      "Ibrahim (AS)"
    ],
    "reponse_correcte": "Nuh (Noé) (AS)",
    "explication": "Le Prophète Nuh a construit l'arche sur l'ordre d'Allah pour survivre à la grande inondation."
  },
  {
    "id": 109,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel Prophète avait le don de parler aux animaux et de commander aux djinns ?",
    "options": [
      "Sulayman (Salomon) (AS)",
      "Dawud (David) (AS)",
      "Yusuf (Joseph) (AS)",
      "Yunus (Jonas) (AS)"
    ],
    "reponse_correcte": "Sulayman (Salomon) (AS)",
    "explication": "Allah a accordé à Sulayman un royaume immense et des miracles extraordinaires, dont le langage des oiseaux et des fourmis."
  },
  {
    "id": 110,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel Prophète a été avalé par une immense baleine avant d'être sauvé par ses invocations ?",
    "options": [
      "Moussa (AS)",
      "Ibrahim (AS)",
      "Yunus (Jonas) (AS)",
      "Ayoub (AS)"
    ],
    "reponse_correcte": "Yunus (Jonas) (AS)",
    "explication": "Yunus a invoqué Allah dans les ténèbres du ventre de la baleine en disant : 'Il n'y a de divinité que Toi ! Gloire à Toi !'."
  },
  {
    "id": 111,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel Prophète a fendu la mer Rouge avec son bâton par la permission d'Allah ?",
    "options": [
      "Moussa (Moïse) (AS)",
      "Issa (AS)",
      "Dawud (AS)",
      "Muhammad (PSL)"
    ],
    "reponse_correcte": "Moussa (Moïse) (AS)",
    "explication": "Moussa a accompli ce miracle pour sauver les Enfants d'Israël de l'armée de Pharaon."
  },
  {
    "id": 112,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Dans quelle grotte le Prophète Muhammad (PSL) avait-il l'habitude de méditer avant de recevoir la Révélation ?",
    "options": [
      "La grotte de Thawr",
      "La grotte d'Uhud",
      "La grotte de Hira",
      "La grotte de Badr"
    ],
    "reponse_correcte": "La grotte de Hira",
    "explication": "C'est dans la grotte de Hira, sur le Mont de la Lumière (Jabal an-Nour), que l'ange Jibril lui a dit 'Iqra' (Lis)."
  },
  {
    "id": 113,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle Sourate du Coran équivaut à la lecture d'un tiers (1/3) du Coran entier en récompense ?",
    "options": [
      "Sourate Al-Fatiha",
      "Sourate Al-Ikhlas",
      "Sourate Al-Falaq",
      "Sourate Yasin"
    ],
    "reponse_correcte": "Sourate Al-Ikhlas",
    "explication": "Le Prophète (PSL) a dit que réciter 'Qul Huwa Allahu Ahad' équivaut en mérite à un tiers du Coran."
  },
  {
    "id": 114,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quelle Sourate est-il fortement recommandé de réciter chaque vendredi pour être illuminé jusqu'au vendredi suivant ?",
    "options": [
      "Sourate Al-Kahf (La Caverne)",
      "Sourate Maryam",
      "Sourate Ar-Rahman",
      "Sourate Al-Baqarah"
    ],
    "reponse_correcte": "Sourate Al-Kahf (La Caverne)",
    "explication": "C'est une Sunnah très importante du vendredi qui protège contre de nombreuses épreuves."
  },
  {
    "id": 115,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Comment s'appelle celui qui a mémorisé le Coran par cœur et le préserve dans sa poitrine ?",
    "options": [
      "Un Imam",
      "Un Muezzin",
      "Un Hafiz",
      "Un Qari"
    ],
    "reponse_correcte": "Un Hafiz",
    "explication": "Le Hafiz al-Quran est le protecteur du Livre d'Allah, c'est l'objectif suprême des élèves d'Al-Mouyassar."
  },
  {
    "id": 116,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle Sourate du Coran contient deux fois la formule 'Bismillah Ar-Rahman Ar-Rahim' ?",
    "options": [
      "Sourate Al-Anfal",
      "Sourate An-Naml (Les Fourmis)",
      "Sourate Al-Baqarah",
      "Sourate Al-Mulk"
    ],
    "reponse_correcte": "Sourate An-Naml (Les Fourmis)",
    "explication": "Elle se trouve au début de la sourate, puis dans la lettre envoyée par le Prophète Sulayman à la Reine de Saba."
  },
  {
    "id": 117,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quel est le plus long verset du Saint Coran ?",
    "options": [
      "Le Verset du Trône (Ayat Al-Kursi)",
      "Le Verset de la Lumière (Ayat An-Nour)",
      "Le Verset de la Dette (Ayat Ad-Dayn)",
      "Le premier verset de Yasin"
    ],
    "reponse_correcte": "Le Verset de la Dette (Ayat Ad-Dayn)",
    "explication": "C'est le verset 282 de la Sourate Al-Baqarah, qui explique comment écrire et gérer les dettes."
  },
  {
    "id": 118,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que doit-on dire à la fin de son repas ?",
    "options": [
      "Bismillah",
      "Alhamdulillah",
      "Allahu Akbar",
      "Amin"
    ],
    "reponse_correcte": "Alhamdulillah",
    "explication": "On remercie Allah de nous avoir nourris et abreuvés."
  },
  {
    "id": 119,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "L'eau de la mer est-elle pure et utilisable pour faire les ablutions (Wudu) ?",
    "options": [
      "Non, car elle est salée",
      "Oui, elle est pure et purifiante",
      "Seulement si on la fait bouillir",
      "Seulement pour les pieds"
    ],
    "reponse_correcte": "Oui, elle est pure et purifiante",
    "explication": "Le Prophète (PSL) a dit à propos de la mer : 'Son eau est purifiante et ses animaux morts sont licites'."
  },
  {
    "id": 120,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "De quelle heure à quelle heure le musulman doit-il jeûner pendant le mois de Ramadan ?",
    "options": [
      "Du lever du soleil jusqu'à minuit",
      "De l'aube (Fajr) jusqu'au coucher du soleil (Maghrib)",
      "Toute la journée et la nuit",
      "De midi au coucher du soleil"
    ],
    "reponse_correcte": "De l'aube (Fajr) jusqu'au coucher du soleil (Maghrib)",
    "explication": "Le jeûne consiste à s'abstenir de manger et de boire depuis l'apparition de l'aube jusqu'à la disparition du soleil."
  },
  {
    "id": 121,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que doit faire le fidèle lorsqu'il entend l'Adhan (l'appel à la prière) ?",
    "options": [
      "Continuer à parler fort",
      "Répéter ce que dit le Muezzin",
      "Sortir de la mosquée",
      "Fermer les yeux"
    ],
    "reponse_correcte": "Répéter ce que dit le Muezzin",
    "explication": "C'est une Sunnah de répéter silencieusement les paroles de l'appel à la prière."
  },
  {
    "id": 122,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "En Islam, qu'est-ce que le 'Ghusl' ?",
    "options": [
      "La petite ablution",
      "Le lavage des mains",
      "Le grand lavage (bain rituel) de tout le corps",
      "Le brossage des dents"
    ],
    "reponse_correcte": "Le grand lavage (bain rituel) de tout le corps",
    "explication": "Le Ghusl est nécessaire dans certaines situations majeures, ou recommandé comme pour la prière du Vendredi (Jumu'ah)."
  },
  {
    "id": 123,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Que signifie le nom d'Allah 'Ar-Rahman' ?",
    "options": [
      "Le Tout-Puissant",
      "Le Tout Miséricordieux",
      "Le Créateur",
      "Le Juge"
    ],
    "reponse_correcte": "Le Tout Miséricordieux",
    "explication": "Allah fait miséricorde à toutes Ses créatures sur terre."
  },
  {
    "id": 124,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Où iront les croyants qui ont fait de bonnes actions et suivi le Coran ?",
    "options": [
      "Nulle part",
      "Au Jannah (Le Paradis)",
      "Sur une autre planète",
      "Ils resteront sur terre"
    ],
    "reponse_correcte": "Au Jannah (Le Paradis)",
    "explication": "Le Jannah est la récompense éternelle promise par Allah aux pieux."
  },
  {
    "id": 125,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Est-il permis de jurer par autre qu'Allah (ex: jurer sur la tête de ses parents) ?",
    "options": [
      "Oui, si on dit la vérité",
      "Non, c'est interdit",
      "Oui, avec ses amis",
      "Oui, mais pas le vendredi"
    ],
    "reponse_correcte": "Non, c'est interdit",
    "explication": "Le Prophète (PSL) a dit : 'Que celui qui jure, jure par Allah ou se taise'."
  },
  {
    "id": 126,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Que signifie le pilier de la foi 'Croire au Jour Dernier' ?",
    "options": [
      "Croire que l'on vivra 100 ans",
      "Croire que le monde ne finira jamais",
      "Croire au jour de la résurrection et du jugement",
      "Croire aux jours de la semaine"
    ],
    "reponse_correcte": "Croire au jour de la résurrection et du jugement",
    "explication": "C'est la certitude que nous serons ressuscités pour rendre compte de nos actes devant Allah."
  },
  {
    "id": 127,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel âge avait le Prophète Muhammad (PSL) lorsqu'il est décédé ?",
    "options": [
      "40 ans",
      "50 ans",
      "63 ans",
      "70 ans"
    ],
    "reponse_correcte": "63 ans",
    "explication": "Il est retourné à Son Seigneur à l'âge de 63 ans, après avoir transmis tout le message de l'Islam."
  },
  {
    "id": 128,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel métier exerçait le Prophète (PSL) pendant sa jeunesse ?",
    "options": [
      "Forgeron",
      "Berger (Gardiens de moutons) puis Commerçant",
      "Agriculteur",
      "Médecin"
    ],
    "reponse_correcte": "Berger (Gardiens de moutons) puis Commerçant",
    "explication": "Comme beaucoup de prophètes, il a été berger, ce qui lui a appris la patience et la douceur."
  },
  {
    "id": 129,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Selon les règles de l'Institut, comment doit-on traiter le Saint Coran (Le Mushaf) ?",
    "options": [
      "Le poser par terre",
      "Le ranger avec respect dans un endroit propre et en hauteur",
      "Dessiner dessus",
      "Le lire sans ablutions"
    ],
    "reponse_correcte": "Le ranger avec respect dans un endroit propre et en hauteur",
    "explication": "Le Mushaf contient la parole d'Allah, le respecter est une obligation absolue."
  },
  {
    "id": 130,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Que doit-on dire lorsque l'on promet de faire chose à l'avenir ?",
    "options": [
      "C'est certain",
      "Inch'Allah (Si Allah le veut)",
      "Je le jure",
      "Peut-être"
    ],
    "reponse_correcte": "Inch'Allah (Si Allah le veut)",
    "explication": "Le musulman sait que rien ne se produit sans la volonté et la permission d'Allah."
  },
  {
    "id": 131,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Quelle est l'attitude d'un bon Talibé (élève) lorsqu'il y a du bruit ou du désordre (Fawda) en classe ?",
    "options": [
      "Il participe au désordre",
      "Il crie plus fort",
      "Il reste calme et écoute son Oustaz",
      "Il sort de la classe sans permission"
    ],
    "reponse_correcte": "Il reste calme et écoute son Oustaz",
    "explication": "L'apprentissage de la religion nécessite du calme, de la discipline et un grand respect pour le maître."
  },
  {
    "id": 132,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Comment s'appelle l'invocation faite avant de dormir ?",
    "options": [
      "Bismika Allahumma amutu wa ahya",
      "Alhamdulillah",
      "Subhanallah",
      "Allahu Akbar"
    ],
    "reponse_correcte": "Bismika Allahumma amutu wa ahya",
    "explication": "Cela signifie : 'C'est en Ton nom, ô Allah, que je meurs et que je vis'."
  },
  {
    "id": 133,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Combien y a-t-il de jours de fête religieuse (Aïd) en Islam ?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "reponse_correcte": "2",
    "explication": "Les deux fêtes majeures sont l'Aïd al-Fitr (fin du Ramadan) et l'Aïd al-Adha (la fête du sacrifice)."
  },
  {
    "id": 134,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Que doit-on dire avant de commencer à réciter le Coran ?",
    "options": [
      "A'udhu billahi minash-shaytanir-rajim (Je cherche refuge auprès d'Allah contre Satan)",
      "Allahu Akbar",
      "Rien du tout",
      "Amin"
    ],
    "reponse_correcte": "A'udhu billahi minash-shaytanir-rajim (Je cherche refuge auprès d'Allah contre Satan)",
    "explication": "C'est l'Isti'adha, pour se protéger des mauvaises pensées pendant la lecture."
  },
  {
    "id": 135,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans le Coran, comment s'appellent les petits signes qui aident à prononcer correctement (le Tajwid) ?",
    "options": [
      "Les lettres",
      "Les Harakat (Voyelles) et signes d'arrêt",
      "Les dessins",
      "Les numéros"
    ],
    "reponse_correcte": "Les Harakat (Voyelles) et signes d'arrêt",
    "explication": "Ces signes indiquent comment prolonger, arrêter ou lier les mots pour embellir la lecture."
  },
  {
    "id": 136,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Débutant",
    "question": "Sur quelle plateforme les parents peuvent-ils suivre en vidéo la cérémonie annuelle du Khatm de l'Institut ?",
    "options": [
      "Seulement à la télévision",
      "ALMOUYASSARTV (sur YouTube)",
      "À la radio",
      "Ce n'est pas filmé"
    ],
    "reponse_correcte": "ALMOUYASSARTV (sur YouTube)",
    "explication": "La chaîne officielle ALMOUYASSARTV permet de vivre les grands événements de l'institut en direct."
  },
  {
    "id": 137,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Intermédiaire",
    "question": "En plus de l'Islam et de l'Arabe, qu'apprend un élève du 'Double Cursus' de l'Institut Al-Mouyassar ?",
    "options": [
      "Le programme de l'école française classique (CFEE, Collège...)",
      "À conduire",
      "La menuiserie",
      "Uniquement des poèmes"
    ],
    "reponse_correcte": "Le programme de l'école française classique (CFEE, Collège...)",
    "explication": "C'est la force de l'institut : former des Hafiz qui réussissent aussi brillamment dans l'enseignement académique moderne."
  },
  {
    "id": 138,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Avancé",
    "question": "Lors du 5ème et dernier palier d'apprentissage (Le Khatm), que doit maîtriser parfaitement l'élève ?",
    "options": [
      "Seulement la lecture",
      "La mémorisation intégrale du Coran avec les règles de Tajwid",
      "L'écriture de son nom",
      "La moitié du Coran"
    ],
    "reponse_correcte": "La mémorisation intégrale du Coran avec les règles de Tajwid",
    "explication": "Le Khatm n'est validé que lorsque l'élève peut réciter le Livre entier de mémoire, avec perfection."
  },
  {
    "id": 139,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quelle femme a été la mère d'Ismail (AS) et a couru entre Safa et Marwa ?",
    "options": [
      "Sarah",
      "Khadija",
      "Hajar",
      "Aisha"
    ],
    "reponse_correcte": "Hajar",
    "explication": "C'est en mémoire de la course de Hajar cherchant de l'eau pour son bébé que les pèlerins font le Sa'y à La Mecque."
  },
  {
    "id": 140,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui était le père d'Ibrahim (AS), à qui il a demandé avec respect de quitter l'idolâtrie ?",
    "options": [
      "Azar",
      "Abu Talib",
      "Firaoun",
      "Namroud"
    ],
    "reponse_correcte": "Azar",
    "explication": "Malgré le refus de son père Azar, Ibrahim a fait preuve de patience et de douceur (Akhlaq) envers lui."
  },
  {
    "id": 141,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Que signifie le nom d'Allah 'Al-'Alim' ?",
    "options": [
      "L'Omniscient (Celui qui sait tout)",
      "Le Fort",
      "Le Pur",
      "Le Riche"
    ],
    "reponse_correcte": "L'Omniscient (Celui qui sait tout)",
    "explication": "Allah connaît tout le passé, le présent, le futur, et ce qui est caché dans les cœurs."
  },
  {
    "id": 142,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Quel était l'objectif d'Allah en créant les humains et les djinns ?",
    "options": [
      "Pour peupler la terre",
      "Pour qu'ils L'adorent (L'Ibadah)",
      "Pour qu'ils s'affrontent",
      "Pour s'enrichir"
    ],
    "reponse_correcte": "Pour qu'ils L'adorent (L'Ibadah)",
    "explication": "Allah dit dans le Coran : 'Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent'."
  },
  {
    "id": 143,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que dit-on lorsque l'on s'incline (Ruku) pendant la prière ?",
    "options": [
      "Subhana Rabbiyal 'Adhim",
      "Subhana Rabbiyal A'la",
      "Allahu Akbar",
      "Sami'a Allahu liman hamidah"
    ],
    "reponse_correcte": "Subhana Rabbiyal 'Adhim",
    "explication": "On glorifie Allah le Très Grand pendant l'inclinaison."
  },
  {
    "id": 144,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que dit-on lorsque l'on se prosterne (Sujud) au sol pendant la prière ?",
    "options": [
      "Subhana Rabbiyal 'Adhim",
      "Subhana Rabbiyal A'la",
      "Bismillah",
      "La ilaha illallah"
    ],
    "reponse_correcte": "Subhana Rabbiyal 'Adhim",
    "explication": "Dans la position la plus basse, on glorifie Allah le Très-Haut."
  },
  {
    "id": 145,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Que faut-il dire lorsque l'on veut demander un service ou une faveur ?",
    "options": [
      "Donne-le moi",
      "Je le veux tout de suite",
      "S'il te plaît",
      "Fais-le vite"
    ],
    "reponse_correcte": "S'il te plaît",
    "explication": "La politesse et la douceur sont les bases de l'éducation d'un enfant musulman."
  },
  {
    "id": 146,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "L'Islam permet-il le gaspillage de l'eau (le Tabdhir), même pour faire ses ablutions ?",
    "options": [
      "Oui, si l'eau est gratuite",
      "Non, le gaspillage est toujours interdit",
      "Oui, pour les enfants",
      "Oui, si on est pressé"
    ],
    "reponse_correcte": "Non, le gaspillage est toujours interdit",
    "explication": "Le Prophète (PSL) a interdit de gaspiller l'eau, même si l'on se trouve au bord d'un fleuve coulant."
  },
  {
    "id": 147,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle sourate raconte l'histoire complète d'un Prophète qui a été jeté dans un puits par ses frères ?",
    "options": [
      "Sourate Yusuf",
      "Sourate Ibrahim",
      "Sourate Nuh",
      "Sourate Muhammad"
    ],
    "reponse_correcte": "Sourate Yusuf",
    "explication": "La sourate Yusuf est décrite comme 'le plus beau des récits', enseignant la patience et le pardon."
  },
  {
    "id": 148,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quel était le nom de l'année où le Prophète (PSL) est né, marquée par l'attaque de La Mecque avec des éléphants ?",
    "options": [
      "L'Année du Chameau",
      "L'Année de la Tristesse",
      "L'Année de l'Éléphant (Am al-Fil)",
      "L'Année de la Victoire"
    ],
    "reponse_correcte": "L'Année de l'Éléphant (Am al-Fil)",
    "explication": "Le roi Abraha a essayé de détruire la Kaaba avec des éléphants, mais Allah l'a protégé (Sourate Al-Fil)."
  },
  {
    "id": 149,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Avec quel pied un musulman doit-il entrer dans les toilettes (lieux d'aisance) ?",
    "options": [
      "Le pied droit",
      "Le pied gauche",
      "Les deux pieds en même temps",
      "Peu importe"
    ],
    "reponse_correcte": "Le pied gauche",
    "explication": "C'est une Sunnah d'entrer dans ces lieux avec le pied gauche, et d'en sortir avec le pied droit."
  },
  {
    "id": 150,
    "categorie": "Institut Al-Mouyassar",
    "niveau": "Avancé",
    "question": "Quel grand projet futur est porté par l'Institut pour offrir aux élèves une mosquée, des résidences et une bibliothèque ?",
    "options": [
      "Un centre commercial",
      "Le Complexe Arabo-Islamique Almouyassar",
      "Le Grand Stade",
      "Une université virtuelle"
    ],
    "reponse_correcte": "Le Complexe Arabo-Islamique Almouyassar",
    "explication": "C'est la Vision pour l'Avenir (La Bâtisse de Demain) actuellement en construction à Pikine."
  },
  {
    "id": 151,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Le Prophète Muhammad (PSL) a dit : « Le meilleur d'entre vous est celui qui... »",
    "options": [
      "Gagne beaucoup d'argent",
      "Apprend le Coran et l'enseigne",
      "Est le plus fort physiquement",
      "Voyage le plus"
    ],
    "reponse_correcte": "Apprend le Coran et l'enseigne",
    "explication": "Ce Hadith (rapporté par Al-Bukhari) montre la grande valeur des élèves et des Oustaz de l'Institut Al-Mouyassar."
  },
  {
    "id": 152,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Complète ce célèbre Hadith : « Les actes ne valent que par... »",
    "options": [
      "Leur beauté",
      "Les intentions (An-Niyyah)",
      "L'argent qu'ils rapportent",
      "La rapidité"
    ],
    "reponse_correcte": "Les intentions (An-Niyyah)",
    "explication": "Rapporté par Bukhari et Muslim. Avant chaque action ou prière, le musulman doit avoir une intention pure pour Allah."
  },
  {
    "id": 153,
    "categorie": "Coran (Ayat)",
    "niveau": "Avancé",
    "question": "Le nom de l'institut 'Al-Mouyassar' vient du verset : 'Wa laqad yassarnâ al-Qur'âna lid-dhikri...' (En effet, Nous avons rendu le Coran facile pour la méditation). Dans quelle sourate se trouve-t-il ?",
    "options": [
      "Sourate Al-Baqarah",
      "Sourate Yasin",
      "Sourate Al-Qamar (La Lune)",
      "Sourate Ar-Rahman"
    ],
    "reponse_correcte": "Sourate Al-Qamar (La Lune)",
    "explication": "Ce magnifique verset (Sourate 54, Verset 17) est d'ailleurs écrit sur le site officiel de l'Institut !"
  },
  {
    "id": 154,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Selon le Prophète (PSL), « La propreté (At-Tuhur) est la moitié de... »",
    "options": [
      "La santé",
      "La foi (Al-Iman)",
      "La prière",
      "La vie"
    ],
    "reponse_correcte": "La foi (Al-Iman)",
    "explication": "Rapporté par Muslim. L'Islam accorde une immense importance à la pureté du corps, des vêtements et du cœur."
  },
  {
    "id": 155,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Où se trouve le Paradis selon une célèbre parole prophétique concernant les parents ?",
    "options": [
      "Dans les mosquées",
      "Sous les pieds des mères",
      "Dans le ciel",
      "Au sommet des montagnes"
    ],
    "reponse_correcte": "Sous les pieds des mères",
    "explication": "Cela signifie que servir, respecter et obéir à sa mère est l'un des plus grands chemins pour entrer au Paradis."
  },
  {
    "id": 156,
    "categorie": "Coran (Ayat)",
    "niveau": "Débutant",
    "question": "Quel est le tout premier ordre donné par Allah au Prophète (PSL) dans le Coran avec le mot 'Iqra' ?",
    "options": [
      "Prie !",
      "Lis ! (au nom de ton Seigneur)",
      "Jeûne !",
      "Voyage !"
    ],
    "reponse_correcte": "Lis ! (au nom de ton Seigneur)",
    "explication": "L'Islam est la religion du savoir et de la lecture. C'est le premier verset de la Sourate Al-'Alaq."
  },
  {
    "id": 157,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Le Prophète (PSL) a dit : « N'est pas des nôtres celui qui ne respecte pas nos aînés et qui... »",
    "options": [
      "Ne fait pas miséricorde à nos petits",
      "Ne parle pas arabe",
      "Ne court pas vite",
      "Ne mange pas beaucoup"
    ],
    "reponse_correcte": "Ne fait pas miséricorde à nos petits",
    "explication": "Rapporté par Tirmidhi. Ce Hadith enseigne la compassion envers les plus jeunes et le respect absolu envers les plus âgés."
  },
  {
    "id": 158,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Selon un célèbre Hadith rapporté par Ibn Omar, sur combien de piliers l'Islam est-il bâti ?",
    "options": [
      "3 piliers",
      "4 piliers",
      "5 piliers",
      "6 piliers"
    ],
    "reponse_correcte": "5 piliers",
    "explication": "« L'Islam est bâti sur cinq (piliers) : l'attestation de foi, la prière, la Zakat, le Hajj et le jeûne du Ramadan. » (Bukhari et Muslim)."
  },
  {
    "id": 159,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "D'après le Prophète (PSL), qui est le véritable homme « fort » ?",
    "options": [
      "Celui qui bat tout le monde à la lutte",
      "Celui qui maîtrise sa colère",
      "Celui qui souligne des poids lourds",
      "Celui qui crie le plus fort"
    ],
    "reponse_correcte": "Celui qui maîtrise sa colère",
    "explication": "Rapporté par Bukhari. La vraie force n'est pas physique, c'est la maîtrise de soi face à la colère (Sabr)."
  },
  {
    "id": 160,
    "categorie": "Coran (Ayat)",
    "niveau": "Intermédiaire",
    "question": "Quelle invocation (Du'a) Allah demande-t-Il au Prophète de dire pour augmenter son savoir (Sourate Ta-Ha, v. 114) ?",
    "options": [
      "Rabbi zidni 'ilma (Ô mon Seigneur, accroît mes connaissances)",
      "Allahu Akbar",
      "Subhanallah",
      "Alhamdulillah"
    ],
    "reponse_correcte": "Rabbi zidni 'ilma (Ô mon Seigneur, accroît mes connaissances)",
    "explication": "C'est l'invocation parfaite que tout élève de l'Institut Al-Mouyassar devrait réciter avant de réviser ses leçons."
  },
  {
    "id": 161,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Complète cette parole du Prophète (PSL) : « La prière (As-Salat) est une... »",
    "options": [
      "Lumière (Nour)",
      "Fatigue",
      "Perte de temps",
      "Option"
    ],
    "reponse_correcte": "Lumière (Nour)",
    "explication": "Rapporté par Muslim. La prière illumine le cœur du croyant, son visage et son chemin le Jour du Jugement."
  },
  {
    "id": 162,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que dit le Prophète (PSL) à propos de la triche (lors d'un examen ou dans le commerce) ?",
    "options": [
      "C'est permis si c'est difficile",
      "Celui qui nous trompe (triche) n'est pas des nôtres",
      "C'est un jeu",
      "C'est conseillé"
    ],
    "reponse_correcte": "Celui qui nous trompe (triche) n'est pas des nôtres",
    "explication": "Rapporté par Muslim. Le musulman doit toujours être honnête, même à l'école."
  },
  {
    "id": 163,
    "categorie": "Coran (Ayat)",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Ash-Sharh, Allah rassure les croyants en disant : « À côté de la difficulté est, certes... »",
    "options": [
      "Une punition",
      "Une facilité (Yusra)",
      "Une autre difficulté",
      "La tristesse"
    ],
    "reponse_correcte": "Une facilité (Yusra)",
    "explication": "« Inna ma'al 'usri yusra ». Un verset magnifique pour encourager les élèves quand la mémorisation du Coran semble difficile."
  },
  {
    "id": 164,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Le Prophète (PSL) a encouragé l'amour entre les croyants en disant : « Échangez des cadeaux, vous vous... »",
    "options": [
      "Enrichirez",
      "Aimerez (Tahabbou)",
      "Fatiguerez",
      "Oublierez"
    ],
    "reponse_correcte": "Aimerez (Tahabbou)",
    "explication": "Rapporté par Bukhari. Offrir un cadeau, même petit, crée de la joie et de la fraternité."
  },
  {
    "id": 165,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Qui est le véritable musulman d'après ce Hadith : « Le musulman est celui dont les autres sont à l'abri de... » ?",
    "options": [
      "Sa langue et sa main",
      "Sa richesse",
      "Son regard",
      "Ses vêtements"
    ],
    "reponse_correcte": "Sa langue et sa main",
    "explication": "Rapporté par Bukhari. Un bon musulman ne blesse les autres ni par de mauvaises paroles (insultes), ni par la violence physique."
  },
  {
    "id": 166,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Le Prophète (PSL) a dit : « La recherche de la science est une obligation pour... »",
    "options": [
      "Les adultes seulement",
      "Chaque musulman (et musulmane)",
      "Les savants uniquement",
      "Les prophètes"
    ],
    "reponse_correcte": "Chaque musulman (et musulmane)",
    "explication": "Rapporté par Ibn Majah. Apprendre sa religion et les sciences utiles est un devoir pour tout le monde."
  },
  {
    "id": 167,
    "categorie": "Coran (Ayat)",
    "niveau": "Avancé",
    "question": "Le Coran dit : « Ô les croyants ! Obéissez à Allah, obéissez au Messager et... » (Sourate An-Nisa). À qui d'autre ?",
    "options": [
      "À vos amis",
      "À ceux d'entre vous qui détiennent l'autorité (Ouloul 'Amr)",
      "Aux voisins",
      "Aux étrangers"
    ],
    "reponse_correcte": "À ceux d'entre vous qui détiennent l'autorité (Ouloul 'Amr)",
    "explication": "Cela inclut le respect des parents, des gouvernants justes et des professeurs (Oustaz) qui nous dirigent vers le bien."
  },
  {
    "id": 168,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Le Prophète (PSL) a comparé l'aumône (Sadaqa) à l'eau. Que fait l'aumône ?",
    "options": [
      "Elle éteint les péchés et la colère du Seigneur comme l'eau éteint le feu",
      "Elle fait pousser des arbres",
      "Elle nettoie les vêtements",
      "Elle donne soif"
    ],
    "reponse_correcte": "Elle éteint les péchés et la colère du Seigneur comme l'eau éteint le feu",
    "explication": "Rapporté par Tirmidhi. Donner aux pauvres efface nos fautes."
  },
  {
    "id": 169,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "« Que celui qui croit en Allah et au Jour Dernier dise du bien ou... »",
    "options": [
      "Qu'il crie",
      "Qu'il se taise",
      "Qu'il mente",
      "Qu'il pleure"
    ],
    "reponse_correcte": "Qu'il se taise",
    "explication": "Rapporté par Bukhari et Muslim. Il vaut mieux garder le silence que de dire des méchancetés ou des mensonges."
  },
  {
    "id": 170,
    "categorie": "Coran (Ayat)",
    "niveau": "Intermédiaire",
    "question": "Dans la Sourate Al-Anbiya, Allah explique la mission de Muhammad (PSL) : « Et Nous ne t'avons envoyé que comme... »",
    "options": [
      "Un roi pour les Arabes",
      "Une miséricorde pour l'univers (Rahmatan lil-'Alamin)",
      "Un guerrier",
      "Un juge sévère"
    ],
    "reponse_correcte": "Une miséricorde pour l'univers (Rahmatan lil-'Alamin)",
    "explication": "Le message de notre bien-aimé Prophète (PSL) est un message d'amour et de paix pour toute l'humanité."
  },
  {
    "id": 171,
    "categorie": "Coran (Ayat)",
    "niveau": "Débutant",
    "question": "Que nous recommande Allah envers nos parents dans la Sourate Al-Isra : « Et abaisse pour eux l'aile de... » ?",
    "options": [
      "La force",
      "La colère",
      "L'humilité et de la miséricorde",
      "L'indifférence"
    ],
    "reponse_correcte": "L'humilité et de la miséricorde",
    "explication": "Allah nous demande d'être doux et respectueux envers nos parents, en priant pour eux : 'Ô mon Seigneur, fais-leur miséricorde'."
  },
  {
    "id": 172,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Quelle est la chose qui pèsera le plus lourd dans la balance du croyant le Jour du Jugement selon le Prophète (PSL) ?",
    "options": [
      "L'argent accumulé",
      "Le bon comportement (Husn al-Khuluq)",
      "La force physique",
      "Le nombre d'enfants"
    ],
    "reponse_correcte": "Le bon comportement (Husn al-Khuluq)",
    "explication": "Rapporté par Tirmidhi. Le bon caractère (Akhlaq) est l'une des choses les plus récompensées en Islam."
  },
  {
    "id": 173,
    "categorie": "Coran (Ayat)",
    "niveau": "Débutant",
    "question": "Dans la sourate Al-Asr, Allah jure par le temps pour dire que l'homme est en perdition, SAUF ceux qui...",
    "options": [
      "Sont riches",
      "Croient, font de bonnes œuvres et s'encouragent à la vérité et à la patience",
      "Dorment beaucoup",
      "Ne font rien"
    ],
    "reponse_correcte": "Croient, font de bonnes œuvres et s'encouragent à la vérité et à la patience",
    "explication": "La sourate Al-Asr résume le chemin de la réussite : la foi, les bonnes actions, la vérité et la patience (Sabr)."
  },
  {
    "id": 174,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Le Prophète (PSL) a dit : « Ne vous mettez pas en colère, ne vous enviez pas, ne vous tournez pas le dos, et soyez... »",
    "options": [
      "Des ennemis",
      "Des serviteurs d'Allah, frères",
      "Indifférents",
      "Silencieux"
    ],
    "reponse_correcte": "Des serviteurs d'Allah, frères",
    "explication": "Rapporté par Bukhari et Muslim. L'Islam interdit la jalousie et ordonne la fraternité entre les croyants."
  },
  {
    "id": 175,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Selon un Hadith, que font les Anges pour celui qui part à la recherche de la science (pour apprendre le Coran) ?",
    "options": [
      "Ils l'ignorent",
      "Ils abaissent leurs ailes pour lui en signe de satisfaction",
      "Ils le grondent",
      "Ils s'envolent loin"
    ],
    "reponse_correcte": "Ils abaissent leurs ailes pour lui en signe de satisfaction",
    "explication": "Rapporté par Tirmidhi. C'est l'immense récompense invisible de chaque élève (Talibé) sur le chemin du Daara."
  },
  {
    "id": 176,
    "categorie": "Coran (Ayat)",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Al-Baqarah, Allah dit : « Et cherchez secours dans l'endurance (la patience) et... »",
    "options": [
      "La prière (As-Salat)",
      "Le sommeil",
      "La nourriture",
      "La fuite"
    ],
    "reponse_correcte": "La prière (As-Salat)",
    "explication": "Face aux épreuves, le musulman trouve sa force dans la patience (Sabr) et sa connexion avec Allah à travers la prière."
  },
  {
    "id": 177,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Le Prophète (PSL) a dit : « L'assise (le rassemblement) dans laquelle on évoque Allah est entourée par... »",
    "options": [
      "Les djinns",
      "Les Anges de la miséricorde",
      "Les oiseaux",
      "Le vent"
    ],
    "reponse_correcte": "Les Anges de la miséricorde",
    "explication": "Rapporté par Muslim. Quand les élèves du Daara se réunissent pour lire le Coran, la miséricorde d'Allah descend sur eux."
  },
  {
    "id": 178,
    "categorie": "Coran (Ayat)",
    "niveau": "Avancé",
    "question": "Complétez le verset (Sourate Al-Hujurat) : « Nous avons fait de vous des nations et des tribus, pour que vous... »",
    "options": [
      "Vous fassiez la guerre",
      "Vous vous entre-connaissiez",
      "Vous vous ignoriez",
      "Soyez tous pareils"
    ],
    "reponse_correcte": "Vous vous entre-connaissiez",
    "explication": "L'Islam célèbre la diversité humaine. Le plus noble auprès d'Allah est le plus pieux, peu importe son pays ou sa couleur."
  },
  {
    "id": 179,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que répond le Prophète (PSL) à l'homme qui lui demande : « Fais-moi une recommandation » ?",
    "options": [
      "Gagne de l'argent",
      "Ne te mets pas en colère",
      "Voyage souvent",
      "Mange bien"
    ],
    "reponse_correcte": "Ne te mets pas en colère",
    "explication": "Rapporté par Bukhari. L'homme a répété sa question plusieurs fois, et le Prophète a répété : 'Ne te mets pas en colère'."
  },
  {
    "id": 180,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Le Prophète (PSL) a dit : « Si l'Heure (la fin du monde) arrive et que l'un de vous a un plant (une petite plante) dans la main, s'il peut... »",
    "options": [
      "Qu'il le jette",
      "Qu'il le plante",
      "Qu'il le mange",
      "Qu'il s'enfuie"
    ],
    "reponse_correcte": "Qu'il le plante",
    "explication": "Rapporté par Ahmad. Ce Hadith exceptionnel nous apprend à faire le bien, à travailler et à protéger la nature jusqu'à la dernière seconde."
  },
  {
    "id": 381,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Avant de commencer la prière, comment doit-on faire l'intention (niyyah) ?",
    "options": [
      "En la disant à voix haute avec la langue.",
      "En la disant doucement avec la langue.",
      "En la faisant dans son cœur, sans la prononcer.",
      "L'intention n'est pas nécessaire pour la prière."
    ],
    "reponse_correcte": "En la faisant dans son cœur, sans la prononcer.",
    "explication": "L'intention est un acte du cœur, on la fait en pensant à la prière que l'on va accomplir, sans avoir besoin de la dire avec la langue. C'est Allah qui connaît le mieux ce qui est dans nos cœurs !",
    "translations": {
      "ar": {
        "question": "قَبْلَ أَنْ نَبْدَأَ الصَّلَاةَ، كَيْفَ نَنْوِي (نِيَّةَ) الصَّلَاةِ؟",
        "options": [
          "بِقَوْلِهَا بِصَوْتٍ عَالٍ بِاللِّسَانِ.",
          "بِقَوْلِهَا بِصَوْتٍ مُنْخَفِضٍ بِاللِّسَانِ.",
          "بِجَعْلِهَا فِي الْقَلْبِ، دُونَ النُّطْقِ بِهَا.",
          "النِّيَّةُ لَيْسَتْ ضَرُورِيَّةً لِلصَّلَاةِ."
        ],
        "reponse_correcte": "بِجَعْلِهَا فِي الْقَلْبِ، دُونَ النُّطْقِ بِهَا.",
        "explication": "النِّيَّةُ عَمَلٌ قَلْبِيٌّ، نَقُومُ بِهَا بِالتَّفْكِيرِ فِي الصَّلَاةِ الَّتِي سَنُؤَدِّيهَا، دُونَ الْحَاجَةِ إِلَى النُّطْقِ بِهَا بِاللِّسَانِ. وَاللَّهُ أَعْلَمُ بِمَا فِي قُلُوبِنَا!"
      },
      "wo": {
        "question": "Jàppandi, balaa ñuy tàmbali julli, nan lañuy def sunuy yéene (niyyah)?",
        "options": [
          "Di ko wax ci kaw ak làŋam.",
          "Di ko wax ci suuf ak làŋam.",
          "Di ko def ci xol bi, te duñu ko wax.",
          "Yéene du lu am solo ci julli."
        ],
        "reponse_correcte": "Di ko def ci xol bi, te duñu ko wax.",
        "explication": "Yéene, liggéeyu xol la. Nu koy def ci sunuy xol, di xalaat julli gi nuy def, te duñu ko wax ak làŋam. Yàlla moo gën a xam li nekk ci sunuy xol!"
      }
    }
  },
  {
    "id": 382,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Où doit-on placer nos mains lorsque nous sommes debout pendant la prière, après le Takbir d'ouverture ?",
    "options": [
      "Les laisser pendre le long du corps.",
      "Placer la main gauche sur la main droite, sur la poitrine.",
      "Placer la main droite sur la main gauche, sur la poitrine.",
      "Les croiser derrière le dos."
    ],
    "reponse_correcte": "Placer la main droite sur la main gauche, sur la poitrine.",
    "explication": "C'est une Sunnah du Prophète Muhammad (paix et bénédictions sur lui) de placer la main droite sur la main gauche, sur la poitrine, en signe de respect et de soumission devant Allah.",
    "translations": {
      "ar": {
        "question": "أَيْنَ يَجِبُ أَنْ نَضَعَ أَيْدِيَنَا عِنْدَمَا نَقِفُ فِي الصَّلَاةِ، بَعْدَ تَكْبِيرَةِ الْإِحْرَامِ؟",
        "options": [
          "نَتْرُكُهَا مُتَدَلِّيَةً بِجَانِبِ الْجِسْمِ.",
          "نَضَعُ الْيَدَ الْيُسْرَى عَلَى الْيَدِ الْيُمْنَى، عَلَى الصَّدْرِ.",
          "نَضَعُ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ.",
          "نُشَبِّكُهَا خَلْفَ الظَّهْرِ."
        ],
        "reponse_correcte": "نَضَعُ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ.",
        "explication": "مِنْ سُنَّةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَضَعَ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ، إِظْهَارًا لِلِاحْتِرَامِ وَالْخُضُوعِ لِلَّهِ."
      },
      "wo": {
        "question": "Fan lañuy teg sunuy loxo suñu taxawé ci julli, ginnaaw Takbiratul Ihram?",
        "options": [
          "Ñu bayyi leen ñuy dal ci wetu yaram bi.",
          "Teg loxo gu càmmooñ gi ci gu ndeyjoor gi, ci kàttan gi.",
          "Teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi.",
          "Ñu jàppale leen ci ginnaaw ginaaw."
        ],
        "reponse_correcte": "Teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi.",
        "explication": "Sunna ci Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) mooy teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi, ngir wone màggal ak ñeewu ci Yàlla."
      }
    }
  },
  {
    "id": 383,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quand on se relève de l'inclination (Ruku'), que dit-on ?",
    "options": [
      "\"Allahu Akbar\" (Allah est le Plus Grand).",
      "\"Subhana Rabbiyal A'la\" (Gloire à mon Seigneur, le Très-Haut).",
      "\"Sami' Allahu liman hamidah\" (Allah entend celui qui Le loue).",
      "\"Alhamdulillah\" (Toutes les louanges sont à Allah)."
    ],
    "reponse_correcte": "\"Sami' Allahu liman hamidah\" (Allah entend celui qui Le loue).",
    "explication": "Après le Ruku', en se relevant, on dit \"Sami' Allahu liman hamidah\". Puis, une fois debout et stable, on ajoute \"Rabbana wa lakal hamd\" (Ô notre Seigneur, à Toi la louange). C'est ainsi que le Prophète (paix et bénédictions sur lui) nous a montré.",
    "translations": {
      "ar": {
        "question": "عِنْدَمَا نَرْفَعُ رُؤُوسَنَا مِنَ الرُّكُوعِ، مَاذَا نَقُولُ؟",
        "options": [
          "\"اللَّهُ أَكْبَرُ\".",
          "\"سُبْحَانَ رَبِّيَ الْأَعْلَى\".",
          "\"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\".",
          "\"الْحَمْدُ لِلَّهِ\"."
        ],
        "reponse_correcte": "\"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\".",
        "explication": "بَعْدَ الرُّكُوعِ، عِنْدَ الرَّفْعِ مِنْهُ، نَقُولُ \"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\". ثُمَّ بَعْدَ الْوُقُوفِ وَالِاسْتِقْرَارِ، نُضِيفُ \"رَبَّنَا وَلَكَ الْحَمْدُ\". هَكَذَا عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)."
      },
      "wo": {
        "question": "Suñu joggé ci ruku gi, lan lañuy wax?",
        "options": [
          "\"Allahu Akbar\" (Yàlla moo gën a Màgg).",
          "\"Subhana Rabbiyal A'la\" (Sell na sama Boroom, mi gën a Kawe).",
          "\"Sami' Allahu liman hamidah\" (Yàlla dégg na ku ko sant).",
          "\"Alhamdulillah\" (Sant yépp Yàlla la)."
        ],
        "reponse_correcte": "\"Sami' Allahu liman hamidah\" (Yàlla dégg na ku ko sant).",
        "explication": "Ginnaaw ruku gi, suñu joggé, dañuy wax \"Sami' Allahu liman hamidah\". Te suñu taxawé ba dal, nu teg ci \"Rabbana wa lakal hamd\" (Yàlla sunu Boroom, yaw la sant yépp). Ni la Yonnant bi (jàmm ak mucc ñoo ngi ci moom) nu woné."
      }
    }
  },
  {
    "id": 384,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Sur combien de parties du corps (os) doit-on se prosterner (Sujud) ?",
    "options": [
      "Cinq parties.",
      "Six parties.",
      "Sept parties.",
      "Huit parties."
    ],
    "reponse_correcte": "Sept parties.",
    "explication": "Le Prophète Muhammad (paix et bénédictions sur lui) nous a enseigné de nous prosterner sur sept parties du corps : le front et le nez (comptés comme une seule), les deux mains, les deux genoux et les extrémités des deux pieds (les orteils).",
    "translations": {
      "ar": {
        "question": "عَلَى كَمْ جُزْءٍ مِنَ الْجِسْمِ (عَظْمٍ) يَجِبُ أَنْ نَسْجُدَ؟",
        "options": [
          "خَمْسَةِ أَجْزَاءٍ.",
          "سِتَّةِ أَجْزَاءٍ.",
          "سَبْعَةِ أَجْزَاءٍ.",
          "ثَمَانِيَةِ أَجْزَاءٍ."
        ],
        "reponse_correcte": "سَبْعَةِ أَجْزَاءٍ.",
        "explication": "عَلَّمَنَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَسْجُدَ عَلَى سَبْعَةِ أَعْضَاءٍ: الْجَبْهَةِ وَالْأَنْفِ (يُعَدَّانِ وَاحِدًا)، وَالْيَدَيْنِ، وَالرُّكْبَتَيْنِ، وَأَطْرَافِ الْقَدَمَيْنِ (أَصَابِعِ الْقَدَمَيْنِ)."
      },
      "wo": {
        "question": "Ci ñata wàllu yaram (yax) lañuy sujood?",
        "options": [
          "Juróom ñetti wàll.",
          "Juróom benni wàll.",
          "Juróom ñaari wàll.",
          "Juróom ñeenti wàll."
        ],
        "reponse_correcte": "Juróom ñaari wàll.",
        "explication": "Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) jàngal na nu nu sujood ci juróom ñaari wàllu yaram: jëmm ak bakkan (ñu jàpp leen benn), ñaari loxo yi, ñaari tànk yi, ak ñaari bàkkanu tànk yi."
      }
    }
  },
  {
    "id": 385,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que dit-on pendant la position assise du Tashahhud dans la prière ?",
    "options": [
      "Seulement \"Subhanallah\".",
      "Le Tashahhud et les Salawat sur le Prophète.",
      "Seulement \"Alhamdulillah\".",
      "Le Du'a al-Istiftah."
    ],
    "reponse_correcte": "Le Tashahhud et les Salawat sur le Prophète.",
    "explication": "Pendant le Tashahhud, nous récitons les paroles du Tashahhud qui incluent des salutations à Allah, au Prophète et aux pieux serviteurs, puis nous attestons de l'unicité d'Allah et de la prophétie de Muhammad. Ensuite, nous envoyons des prières (Salawat) sur le Prophète Muhammad (paix et bénédictions sur lui) et sa famille, comme il nous l'a appris.",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ فِي وَضْعِ الْجُلُوسِ لِلتَّشَهُّدِ فِي الصَّلَاةِ؟",
        "options": [
          "فَقَطْ \"سُبْحَانَ اللَّهِ\".",
          "التَّشَهُّدَ وَالصَّلَوَاتِ عَلَى النَّبِيِّ.",
          "فَقَطْ \"الْحَمْدُ لِلَّهِ\".",
          "دُعَاءَ الِاسْتِفْتَاحِ."
        ],
        "reponse_correcte": "التَّشَهُّدَ وَالصَّلَوَاتِ عَلَى النَّبِيِّ.",
        "explication": "أَثْنَاءَ التَّشَهُّدِ، نَتْلُو كَلِمَاتِ التَّشَهُّدِ الَّتِي تَشْمَلُ التَّحِيَّاتِ لِلَّهِ وَلِلنَّبِيِّ وَلِلْعِبَادِ الصَّالِحِينَ، ثُمَّ نَشْهَدُ بِوَحْدَانِيَّةِ اللَّهِ وَنُبُوَّةِ مُحَمَّدٍ. بَعْدَ ذَلِكَ، نُصَلِّي عَلَى النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) وَآلِهِ، كَمَا عَلَّمَنَا."
      },
      "wo": {
        "question": "Lan lañuy wax suñu toogé ci Tashahhud ci julli gi?",
        "options": [
          "\"Subhanallah\" rekk.",
          "Tashahhud bi ak Salawat yi ci Yonnant bi.",
          "\"Alhamdulillah\" rekk.",
          "Du'a al-Istiftah."
        ],
        "reponse_correcte": "Tashahhud bi ak Salawat yi ci Yonnant bi.",
        "explication": "Ci Tashahhud bi, dañuy jàngi ay baatu Tashahhud yu am solo, yu ci mel ni nuy nuyu Yàlla, Yonnant bi ak jaam yu baax yi, te nu seede ne amul benn yàlla bu wóor lu dul Yàlla, te Muhammad mooy Jaamam ak Yonnantam. Ginnaaw loolu, dañuy julli ci Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) ak njabootam, ni mu nu ko jàngale."
      }
    }
  },
  {
    "id": 386,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Pourquoi Allah nous a-t-Il créés ?",
    "options": [
      "Pour jouer et s'amuser.",
      "Pour L'adorer et Lui obéir.",
      "Pour manger et boire.",
      "Pour construire des maisons."
    ],
    "reponse_correcte": "Pour L'adorer et Lui obéir.",
    "explication": "Allah nous a créés avec une grande sagesse, pour que nous L'adorions Seul et que nous Lui obéissions, car Il est notre Créateur et notre Bienfaiteur.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِمَاذَا خَلَقَنَا اللَّهُ؟",
        "options": [
          "لِلَّعِبِ وَالْمَرَحِ.",
          "لِنَعْبُدَهُ وَنُطِيعَهُ.",
          "لِلْأَكْلِ وَالشُّرْبِ.",
          "لِبِنَاءِ الْبُيُوتِ."
        ],
        "reponse_correcte": "لِنَعْبُدَهُ وَنُطِيعَهُ.",
        "explication": "خَلَقَنَا اللَّهُ بِحِكْمَةٍ عَظِيمَةٍ، لِكَيْ نَعْبُدَهُ وَحْدَهُ وَنُطِيعَهُ، لِأَنَّهُ خَالِقُنَا وَمُنْعِمُنَا."
      },
      "wo": {
        "question": "Lan moo tax Yàlla sàkk nu?",
        "options": [
          "Ngir bëgg a fo ak a réy.",
          "Ngir ñu jaamu Ko te déglu Ko.",
          "Ngir lekk ak a naan.",
          "Ngir tabax kër yi."
        ],
        "reponse_correcte": "Ngir ñu jaamu Ko te déglu Ko.",
        "explication": "Yàlla sàkk nu ak hikma bu mag, ngir ñu jaamu Ko Képp te déglu Ko, ndaxte Moo nu sàkk te Moo nu may."
      }
    }
  },
  {
    "id": 387,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Qui est ton Seigneur ?",
    "options": [
      "Le soleil.",
      "La lune.",
      "Allah.",
      "Les étoiles."
    ],
    "reponse_correcte": "Allah.",
    "explication": "Notre Seigneur est Allah, le Créateur de tout, Celui qui nous nourrit et prend soin de nous.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ رَبُّكَ؟",
        "options": [
          "الشَّمْسُ.",
          "الْقَمَرُ.",
          "اللَّهُ.",
          "النُّجُومُ."
        ],
        "reponse_correcte": "اللَّهُ.",
        "explication": "رَبُّنَا هُوَ اللَّهُ، خَالِقُ كُلِّ شَيْءٍ، وَالَّذِي يَرْزُقُنَا وَيَعْتَنِي بِنَا."
      },
      "wo": {
        "question": "Kii ngay jaamu kan la?",
        "options": [
          "Jant bi.",
          "Weer wi.",
          "Yàlla.",
          "Biddiw yi."
        ],
        "reponse_correcte": "Yàlla.",
        "explication": "Sunu Boroom mooy Yàlla, Sàkkkat bi lépp, Ki nu diwli tey sàmm nu."
      }
    }
  },
  {
    "id": 388,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quel est le nom de notre Prophète (paix et bénédictions sur lui) ?",
    "options": [
      "Moussa.",
      "Issa.",
      "Muhammad.",
      "Ibrahim."
    ],
    "reponse_correcte": "Muhammad.",
    "explication": "Notre Prophète est Muhammad (paix et bénédictions sur lui), le dernier des prophètes envoyés par Allah pour guider l'humanité.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا اسْمُ نَبِيِّنَا (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "مُوسَى.",
          "عِيسَى.",
          "مُحَمَّدٌ.",
          "إِبْرَاهِيمُ."
        ],
        "reponse_correcte": "مُحَمَّدٌ.",
        "explication": "نَبِيُّنَا هُوَ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)، آخِرُ الْأَنْبِيَاءِ الَّذِينَ أَرْسَلَهُمُ اللَّهُ لِهِدَايَةِ الْبَشَرِ."
      },
      "wo": {
        "question": "Lan mooy turu sunu Yonent bi (jàmm ak mucc yal na nekk ci moom)?",
        "options": [
          "Muusa.",
          "Ciisa.",
          "Muhammadu.",
          "Ibraahiima."
        ],
        "reponse_correcte": "Muhammadu.",
        "explication": "Sunu Yonent bi mooy Muhammadu (jàmm ak mucc yal na nekk ci moom), mooy Yonent bi mujj ci Yonent yi Yàlla yónni ngir gindee nit ñi."
      }
    }
  },
  {
    "id": 389,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Combien y a-t-il de catégories de Tawhid (Unicité d'Allah) ?",
    "options": [
      "Une seule catégorie.",
      "Deux catégories.",
      "Trois catégories.",
      "Quatre catégories."
    ],
    "reponse_correcte": "Trois catégories.",
    "explication": "Le Tawhid se divise en trois catégories principales : l'unicité dans la Seigneurie (Rububiyyah), l'unicité dans la Divinité (Uluhiyyah) et l'unicité dans les Noms et Attributs (Asma wa Sifat).",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ قِسْمًا لِلتَّوْحِيدِ (وِحْدَانِيَّةِ اللَّهِ)؟",
        "options": [
          "قِسْمٌ وَاحِدٌ.",
          "قِسْمَانِ.",
          "ثَلَاثَةُ أَقْسَامٍ.",
          "أَرْبَعَةُ أَقْسَامٍ."
        ],
        "reponse_correcte": "ثَلَاثَةُ أَقْسَامٍ.",
        "explication": "يَنْقَسِمُ التَّوْحِيدُ إِلَى ثَلَاثَةِ أَقْسَامٍ رَئِيسِيَّةٍ: تَوْحِيدُ الرُّبُوبِيَّةِ، وَتَوْحِيدُ الْأُلُوهِيَّةِ، وَتَوْحِيدُ الْأَسْمَاءِ وَالصِّفَاتِ."
      },
      "wo": {
        "question": "Ñaata mbooloo la Tawhiid (Yàlla Képp) am?",
        "options": [
          "Mbooloo benn rekk.",
          "Mbooloo ñaar.",
          "Mbooloo ñett.",
          "Mbooloo ñeent."
        ],
        "reponse_correcte": "Mbooloo ñett.",
        "explication": "Tawhiid am na ñett mbooloo yu mag: Tawhiid Rubuubiyya (Boroom bi Képp), Tawhiid Uluuhiyya (Yàlla Képp), ak Tawhiid Asmaa' wa Sifaat (Tur yi ak Melokaan yi)."
      }
    }
  },
  {
    "id": 390,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quand notre Prophète Muhammad (paix et bénédictions sur lui) est-il né ?",
    "options": [
      "L'année de la migration.",
      "L'année de l'éléphant.",
      "L'année de la révélation.",
      "L'année de la conquête de La Mecque."
    ],
    "reponse_correcte": "L'année de l'éléphant.",
    "explication": "Notre Prophète Muhammad (paix et bénédictions sur lui) est né l'année où Abraha a tenté de détruire la Kaaba avec son armée d'éléphants.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَتَى وُلِدَ نَبِيُّنَا مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "عَامُ الْهِجْرَةِ.",
          "عَAMُ الْفِيلِ.",
          "عَامُ الْوَحْيِ.",
          "عَامُ فَتْحِ مَكَّةَ."
        ],
        "reponse_correcte": "عَامُ الْفِيلِ.",
        "explication": "وُلِدَ نَبِيُّنَا مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) فِي الْعَامِ الَّذِي حَاوَلَ فِيهِ أَبْرَهَةُ هَدْمَ الْكَعْبَةِ بِجَيْشِهِ الَّذِي كَانَ فِيهِ الْفِيلُ."
      },
      "wo": {
        "question": "Kañ la sunu Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom) juddoo?",
        "options": [
          "Atum Hijra.",
          "Atum Ñay.",
          "Atum Wahy.",
          "Atum Fàtt Makkah."
        ],
        "reponse_correcte": "Atum Ñay.",
        "explication": "Sunu Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom) juddoo na ci at mi Abraha jéemoon a sànni Kaaba gi ak mbooloomu ñay."
      }
    }
  },
  {
    "id": 391,
    "categorie": "Adhkar",
    "niveau": "Débutant",
    "question": "Que dis-tu en entrant aux toilettes ?",
    "options": [
      "Al-hamdulillah.",
      "Bismillah, Allahumma inni a'udhu bika minal khubuthi wal khaba'ith.",
      "Subhanallah.",
      "Allahu Akbar."
    ],
    "reponse_correcte": "Bismillah, Allahumma inni a'udhu bika minal khubuthi wal khaba'ith.",
    "explication": "C'est une invocation très importante pour demander la protection d'Allah contre les djinns mâles et femelles qui se trouvent dans ces lieux.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا تَقُولُ عِنْدَ دُخُولِ الْخَلَاءِ؟",
        "options": [
          "الْحَمْدُ لِلَّهِ.",
          "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.",
          "سُبْحَانَ اللَّهِ.",
          "اللَّهُ أَكْبَرُ."
        ],
        "reponse_correcte": "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.",
        "explication": "هَذَا دُعَاءٌ مُهِمٌّ جِدًّا لِطَلَبِ حِمَايَةِ اللَّهِ مِنَ الْجِنِّ ذُكُورِهِمْ وَإِنَاثِهِمْ الَّذِينَ يَتَوَاجَدُونَ فِي تِلْكَ الْأَمَاكِنِ."
      },
      "wo": {
        "question": "Lan ngay wax bu ngay dugg tooylet bi?",
        "options": [
          "Al-xamdulillaah.",
          "Bismillaah, Allaahumma inni a'uuzu bika minal xubuzi wal xabaa'izi.",
          "Subhaanallaah.",
          "Allaahu Akbar."
        ],
        "reponse_correcte": "Bismillaah, Allaahumma inni a'uuzu bika minal xubuzi wal xabaa'izi.",
        "explication": "Lii mooy ñaan bu am solo lool ngir ñaan Yàlla mu sàmm la ci jinne goor ak jinne jigéen yi nekk ci barab yooyu."
      }
    }
  },
  {
    "id": 392,
    "categorie": "Aqidah",
    "niveau": "Intermédiaire",
    "question": "Quel est le plus grand des péchés auprès d'Allah ?",
    "options": [
      "Le mensonge.",
      "Le vol.",
      "L'association à Allah (Shirk).",
      "La désobéissance aux parents."
    ],
    "reponse_correcte": "L'association à Allah (Shirk).",
    "explication": "Le Shirk, c'est-à-dire adorer autre qu'Allah ou Lui associer quoi que ce soit, est le plus grand des péchés car c'est une injustice envers Allah, notre Créateur.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا أَكْبَرُ السَّيِّئَاتِ عِنْدَ اللَّهِ؟",
        "options": [
          "الْكَذِبُ.",
          "السَّرِقَةُ.",
          "الشِّرْكُ بِاللَّهِ.",
          "عُقُوقُ الْوَالِدَيْنِ."
        ],
        "reponse_correcte": "الشِّرْكُ بِاللَّهِ.",
        "explication": "الشِّرْكُ، أَيْ عِبَادَةُ غَيْرِ اللَّهِ أَوْ الْإِشْرَاكُ بِهِ شَيْئًا، هُوَ أَكْبَرُ الذُّنُوبِ لِأَنَّهُ ظُلْمٌ لِلَّهِ، خَالِقِنَا."
      },
      "wo": {
        "question": "Lan mooy bàkkaar bi gën a mag ci Yàlla?",
        "options": [
          "Fen.",
          "Sàcc.",
          "Boole Yàlla ak yeneen (Shirk).",
          "Bàyyi waajur yi."
        ],
        "reponse_correcte": "Boole Yàlla ak yeneen (Shirk).",
        "explication": "Shirk, mooy jaamu lu dul Yàlla walla boole Yàlla ak lu nekk, mooy bàkkaar bi gën a mag ndaxte mooy njublaŋ ci Yàlla, sunu Sàkkkat bi."
      }
    }
  },
  {
    "id": 393,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Quel est le jugement de l'invocation des morts et de la demande d'aide auprès d'eux ?",
    "options": [
      "C'est une bonne action.",
      "C'est une innovation (Bid'ah) sans gravité.",
      "C'est un Shirk majeur qui fait sortir de l'Islam.",
      "C'est permis si on a une bonne intention."
    ],
    "reponse_correcte": "C'est un Shirk majeur qui fait sortir de l'Islam.",
    "explication": "Demander de l'aide aux morts ou les invoquer est un Shirk majeur, car seul Allah peut exaucer les invocations et apporter l'aide dans l'invisible.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا حُكْمُ دُعَاءِ الْأَمْوَاتِ وَالِاسْتِغَاثَةِ بِهِمْ؟",
        "options": [
          "هِيَ حَسَنَةٌ.",
          "هِيَ بِدْعَةٌ غَيْرُ خَطِيرَةٍ.",
          "هُوَ شِرْكٌ أَكْبَرُ يُخْرِجُ مِنَ الْمِلَّةِ.",
          "هُوَ جَائِزٌ إِذَا كَانَتِ النِّيَّةُ حَسَنَةً."
        ],
        "reponse_correcte": "هُوَ شِرْكٌ أَكْبَرُ يُخْرِجُ مِنَ الْمِلَّةِ.",
        "explication": "طَلَبُ الْمُسَاعَدَةِ مِنَ الْأَمْوَاتِ أَوْ دُعَاؤُهُمْ هُوَ شِرْكٌ أَكْبَرُ، لِأَنَّ اللَّهَ وَحْدَهُ هُوَ الَّذِي يَسْتَجِيبُ الدُّعَاءَ وَيُقَدِّمُ الْعَوْنَ فِي الْغَيْبِ."
      },
      "wo": {
        "question": "Lan mooy àttey ñaanu dee yi ak ñaan leen ndimbal?",
        "options": [
          "Li mooy jëf ju baax.",
          "Li mooy bid'a bu amul solo.",
          "Li mooy shirk bu mag bu génne ci Lislaam.",
          "Li baax na su fekkee ni yéene ji baax na."
        ],
        "reponse_correcte": "Li mooy shirk bu mag bu génne ci Lislaam.",
        "explication": "Ñaan ndimbal ci dee yi walla ñaan leen mooy shirk bu mag, ndaxte Yàlla Képp moo mën a tontu ñaan yi tey indil ndimbal ci gannaaw gu nit mënul gis."
      }
    }
  },
  {
    "id": 394,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Comment les Quraysh appelaient-ils le Prophète Muhammad (paix et bénédictions sur lui) avant sa prophétie ?",
    "options": [
      "Le menteur.",
      "Le sorcier.",
      "Le véridique, le digne de confiance (As-Sadiq al-Amin).",
      "Le poète."
    ],
    "reponse_correcte": "Le véridique, le digne de confiance (As-Sadiq al-Amin).",
    "explication": "Même ses ennemis reconnaissaient sa grande moralité et sa sincérité, l'appelant \"As-Sadiq al-Amin\" (le véridique, le digne de confiance).",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ كَانَتْ قُرَيْشٌ تُسَمِّي النَّبِيَّ مُحَمَّدًا (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) قَبْلَ نُبُوَّتِهِ؟",
        "options": [
          "الْكَذَّابُ.",
          "السَّاحِرُ.",
          "الصَّادِقُ الْأَمِينُ.",
          "الشَّاعِرُ."
        ],
        "reponse_correcte": "الصَّادِقُ الْأَمِينُ.",
        "explication": "حَتَّى أَعْدَاؤُهُ كَانُوا يَعْتَرِفُونَ بِأَخْلَاقِهِ الْعَالِيَةِ وَصِدْقِهِ، وَيُسَمُّونَهُ \"الصَّادِقَ الْأَمِينَ\"."
      },
      "wo": {
        "question": "Naka la Quraysh daan wooye Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom) balaa Yonentam?",
        "options": [
          "Fenkat bi.",
          "Bàkkan bi.",
          "Dëggu kat bi, wóor kat bi (As-Sadiq al-Amin).",
          "Woykat bi."
        ],
        "reponse_correcte": "Dëggu kat bi, wóor kat bi (As-Sadiq al-Amin).",
        "explication": "Ba sax ñi ko bañoon dañu daan nangu jikkoom ju rafet ak dëggoom, di ko wooye \"As-Sadiq al-Amin\" (dëggu kat bi, wóor kat bi)."
      }
    }
  },
  {
    "id": 395,
    "categorie": "Adhkar",
    "niveau": "Intermédiaire",
    "question": "Quelle est la meilleure invocation pour demander pardon (Sayyid al-Istighfar) ?",
    "options": [
      "Astaghfirullah.",
      "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.",
      "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka...",
      "Subhanallah wa bihamdih."
    ],
    "reponse_correcte": "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka...",
    "explication": "C'est une invocation très complète qui exprime notre reconnaissance envers Allah, notre Seigneur, et notre repentir pour nos péchés.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ سَيِّدُ الِاسْتِغْفَارِ؟",
        "options": [
          "أَسْتَغْفِرُ اللَّهَ.",
          "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي.",
          "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...",
          "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ."
        ],
        "reponse_correcte": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...",
        "explication": "هَذَا الدُّعَاءُ شَامِلٌ جِدًّا يُعَبِّرُ عَنْ شُكْرِنَا لِلَّهِ، رَبِّنَا، وَتَوْبَتِنَا مِنْ ذُنُوبِنَا."
      },
      "wo": {
        "question": "Lan mooy ñaanu jéggal gi gën a mag (Sayyid al-Istighfar)?",
        "options": [
          "Astagfirullaah.",
          "Allaahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.",
          "Allaahumma anta Rabbi laa ilaaha illaa anta, xalaqtanii wa anaa 'abduka...",
          "Subhaanallaah wa bihamdih."
        ],
        "reponse_correcte": "Allaahumma anta Rabbi laa ilaaha illaa anta, xalaqtanii wa anaa 'abduka...",
        "explication": "Ñaan gii dafa matale lool tey feeñal sunu gërëm ci Yàlla, sunu Boroom, ak sunu tuub ci sunu bàkkaar yi."
      }
    }
  },
  {
    "id": 396,
    "categorie": "Aqidah",
    "niveau": "Avancé",
    "question": "Parmi les conditions de \"La ilaha illa Allah\" (Il n'y a de divinité digne d'adoration qu'Allah), laquelle est essentielle pour que la parole soit acceptée ?",
    "options": [
      "La connaissance de son sens.",
      "La richesse.",
      "La beauté.",
      "La célébrité."
    ],
    "reponse_correcte": "La connaissance de son sens.",
    "explication": "Pour que la parole \"La ilaha illa Allah\" soit valide, il faut en connaître le sens, c'est-à-dire qu'il n'y a aucune divinité digne d'être adorée en dehors d'Allah.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مِنْ شُرُوطِ \"لَا إِلَهَ إِلَّا اللَّهُ\" (لَا مَعْبُودَ بِحَقٍّ إِلَّا اللَّهُ)، أَيُّهَا ضَرُورِيٌّ لِقَبُولِ الْكَلِمَةِ؟",
        "options": [
          "مَعْرِفَةُ مَعْنَاهَا.",
          "الْغِنَى.",
          "الْجَمَالُ.",
          "الشُّهْرَةُ."
        ],
        "reponse_correcte": "مَعْرِفَةُ مَعْنَاهَا.",
        "explication": "لِتَكُونَ كَلِمَةُ \"لَا إِلَهَ إِلَّا اللَّهُ\" صَحِيحَةً، يَجِبُ مَعْرِفَةُ مَعْنَاهَا، وَهُوَ أَنَّهُ لَا مَعْبُودَ بِحَقٍّ إِلَّا اللَّهُ."
      },
      "wo": {
        "question": "Ci àttey \"Laa ilaaha illaa Allaah\" (Amul jàmmukat bu dëggu lu dul Yàlla), lan mooy li gën a am solo ngir wax gi nangu?",
        "options": [
          "Xam njariñam.",
          "Am alal.",
          "Rafet.",
          "Siw."
        ],
        "reponse_correcte": "Xam njariñam.",
        "explication": "Ngir wax gi \"Laa ilaaha illaa Allaah\" mu baax, dafa war a xam njariñam, mooy amul jàmmukat bu dëggu lu dul Yàlla."
      }
    }
  },
  {
    "id": 397,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Qui fut le premier homme à embrasser l'Islam avec le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Umar ibn al-Khattab.",
      "Ali ibn Abi Talib.",
      "Abu Bakr as-Siddiq.",
      "Uthman ibn Affan."
    ],
    "reponse_correcte": "Abu Bakr as-Siddiq.",
    "explication": "Abu Bakr as-Siddiq fut le premier homme adulte à croire au Prophète Muhammad (paix et bénédictions sur lui) et à embrasser l'Islam.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ كَانَ أَوَّلَ رَجُلٍ أَسْلَمَ مَعَ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "عُمَرُ بْنُ الْخَطَّابِ.",
          "عَلِيُّ بْنُ أَبِي طَالِبٍ.",
          "أَبُو بَكْرٍ الصِّدِّيقُ.",
          "عُثْمَانُ بْنُ عَفَّانَ."
        ],
        "reponse_correcte": "أَبُو بَكْرٍ الصِّدِّيقُ.",
        "explication": "أَبُو بَكْرٍ الصِّدِّيقُ كَانَ أَوَّلَ رَجُلٍ بَالِغٍ يُؤْمِنُ بِالنَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) وَيُسْلِمُ."
      },
      "wo": {
        "question": "Kan mooy goor gu njëkk gi gëm Lislaam ak Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom)?",
        "options": [
          "Umar ibn al-Khattab.",
          "Ali ibn Abi Talib.",
          "Abu Bakr as-Siddiq.",
          "Uthman ibn Affan."
        ],
        "reponse_correcte": "Abu Bakr as-Siddiq.",
        "explication": "Abu Bakr as-Siddiq mooy goor gu mag gu njëkk gi gëm Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom) te gëm Lislaam."
      }
    }
  },
  {
    "id": 398,
    "categorie": "Adhkar",
    "niveau": "Avancé",
    "question": "Que dis-tu en entrant au marché ?",
    "options": [
      "Bismillah.",
      "La ilaha illa Allah wahdahu la sharika lah, lahul mulku wa lahul hamd, yuhyi wa yumit, wa huwa hayyun la yamut, bi yadihil khayr, wa huwa 'ala kulli shay'in qadir.",
      "Al-hamdulillah.",
      "Allahu Akbar."
    ],
    "reponse_correcte": "La ilaha illa Allah wahdahu la sharika lah, lahul mulku wa lahul hamd, yuhyi wa yumit, wa huwa hayyun la yamut, bi yadihil khayr, wa huwa 'ala kulli shay'in qadir.",
    "explication": "Cette invocation est très vertueuse et protège le musulman des distractions du marché, tout en lui rappelant l'unicité et la grandeur d'Allah.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا تَقُولُ عِنْدَ دُخُولِ السُّوقِ؟",
        "options": [
          "بِسْمِ اللَّهِ.",
          "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
          "الْحَمْدُ لِلَّهِ.",
          "اللَّهُ أَكْبَرُ."
        ],
        "reponse_correcte": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        "explication": "هَذَا الدُّعَاءُ ذُو فَضْلٍ عَظِيمٍ وَيَحْمِي الْمُسْلِمَ مِنْ مُلْهِيَاتِ السُّوقِ، وَيُذَكِّرُهُ بِتَوْحِيدِ اللَّهِ وَعَظَمَتِهِ."
      },
      "wo": {
        "question": "Lan ngay wax bu ngay dugg marse bi?",
        "options": [
          "Bismillaah.",
          "Laa ilaaha illaa Allaah wahdahu laa shariika lah, lahul mulku wa lahul hamd, yuhyii wa yumiitu, wa huwa hayyun laa yamuutu, bi yadihil xayru, wa huwa 'alaa kulli shay'in qadiir.",
          "Al-xamdulillaah.",
          "Allaahu Akbar."
        ],
        "reponse_correcte": "Laa ilaaha illaa Allaah wahdahu laa shariika lah, lahul mulku wa lahul hamd, yuhyii wa yumiitu, wa huwa hayyun laa yamuutu, bi yadihil xayru, wa huwa 'alaa kulli shay'in qadiir.",
        "explication": "Ñaan gii dafa am barke lool tey sàmm jullit bi ci yëngu-yënguy marse bi, tey fàttali ko Tawhiid ak màggug Yàlla."
      }
    }
  },
  {
    "id": 399,
    "categorie": "Aqidah",
    "niveau": "Débutant",
    "question": "Quelle est ta religion ?",
    "options": [
      "Le christianisme.",
      "Le judaïsme.",
      "L'islam.",
      "Le bouddhisme."
    ],
    "reponse_correcte": "L'islam.",
    "explication": "Notre religion est l'Islam, la religion de tous les prophètes, qui nous enseigne à adorer Allah Seul et à Lui obéir.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا دِينُكَ؟",
        "options": [
          "النَّصْرَانِيَّةُ.",
          "الْيَهُودِيَّةُ.",
          "الْإِسْلَامُ.",
          "الْبُوذِيَّةُ."
        ],
        "reponse_correcte": "الْإِسْلَامُ.",
        "explication": "دِينُنَا هُوَ الْإِسْلَامُ، دِينُ جَمِيعِ الْأَنْبِيَاءِ، الَّذِي يُعَلِّمُنَا عِبَادَةَ اللَّهِ وَحْدَهُ وَطَاعَتَهُ."
      },
      "wo": {
        "question": "Lan mooy sa diine?",
        "options": [
          "Kirist.",
          "Yawut.",
          "Lislaam.",
          "Budist."
        ],
        "reponse_correcte": "Lislaam.",
        "explication": "Sunu diine mooy Lislaam, diine Yonent yépp, bi nu jàngal a jaamu Yàlla Képp te déglu Ko."
      }
    }
  },
  {
    "id": 400,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui est la mère de notre Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Khadijah.",
      "Aisha.",
      "Aminah bint Wahb.",
      "Fatimah."
    ],
    "reponse_correcte": "Aminah bint Wahb.",
    "explication": "La mère de notre Prophète Muhammad (paix et bénédictions sur lui) s'appelait Aminah bint Wahb.",
    "source": "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هِيَ أُمُّ نَبِيِّنَا مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "خَدِيجَةُ.",
          "عَائِشَةُ.",
          "آمِنَةُ بِنْتُ وَهْبٍ.",
          "فَاطِمَةُ."
        ],
        "reponse_correcte": "آمِنَةُ بِنْتُ وَهْبٍ.",
        "explication": "أُمُّ نَبِيِّنَا مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) كَانَ اسْمُهَا آمِنَةَ بِنْتَ وَهْبٍ."
      },
      "wo": {
        "question": "Kan mooy ndeyu sunu Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom)?",
        "options": [
          "Xadiija.",
          "Aayisha.",
          "Aamina bint Wahb.",
          "Faatima."
        ],
        "reponse_correcte": "Aamina bint Wahb.",
        "explication": "Ndeyu sunu Yonent bi Muhammadu (jàmm ak mucc yal na nekk ci moom) daan na tudd Aamina bint Wahb."
      }
    }
  },
  {
    "id": 401,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Que nous apprend le Prophète Muhammad (paix et bénédictions sur lui) à propos du mauvais œil ?",
    "options": [
      "C'est une illusion.",
      "C'est une réalité.",
      "C'est une superstition.",
      "C'est une blague."
    ],
    "reponse_correcte": "C'est une réalité.",
    "explication": "Le Prophète (paix et bénédictions sur lui) nous a informés que le mauvais œil est une réalité, et nous devons nous en protéger en cherchant refuge auprès d'Allah.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يُعَلِّمُنَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَنِ الْعَيْنِ؟",
        "options": [
          "إِنَّهَا وَهْمٌ.",
          "إِنَّهَا حَقِيقَةٌ.",
          "إِنَّهَا خُرَافَةٌ.",
          "إِنَّهَا مُزَاحٌ."
        ],
        "reponse_correcte": "إِنَّهَا حَقِيقَةٌ.",
        "explication": "أَخْبَرَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنَّ الْعَيْنَ حَقٌّ، وَيَجِبُ عَلَيْنَا أَنْ نَسْتَعِيذَ بِاللَّهِ مِنْهَا لِحِمَايَةِ أَنْفُسِنَا."
      },
      "wo": {
        "question": "Lan la Yonnant bi Muhammad (jamm ak xéewal ci moom) di ñu jàngale ci wallu bët bu bon?",
        "options": [
          "Lu dul dëgg la.",
          "Dëgg la.",
          "Ay xuraafa la.",
          "Ay fank la."
        ],
        "reponse_correcte": "Dëgg la.",
        "explication": "Yonnant bi (jamm ak xéewal ci moom) wax na ñu ne bët bu bon dëgg la, te war na ñoo wut ci Yàlla mu mu ñu ci aar."
      }
    }
  },
  {
    "id": 402,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Selon le Prophète Muhammad (paix et bénédictions sur lui), qu'est-ce que toute bonne action ?",
    "options": [
      "Une obligation.",
      "Une aumône.",
      "Un devoir.",
      "Un plaisir."
    ],
    "reponse_correcte": "Une aumône.",
    "explication": "Ce hadith nous enseigne que chaque bonne action que nous faisons, même la plus petite, est considérée comme une aumône et nous rapproche d'Allah. C'est une belle façon de faire le bien chaque jour !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)، مَا هِيَ كُلُّ مَعْرُوفٍ؟",
        "options": [
          "وَاجِبٌ.",
          "صَدَقَةٌ.",
          "فَرْضٌ.",
          "مُتْعَةٌ."
        ],
        "reponse_correcte": "صَدَقَةٌ.",
        "explication": "يُعَلِّمُنَا هَذَا الْحَدِيثُ أَنَّ كُلَّ عَمَلٍ صَالِحٍ نَقُومُ بِهِ، حَتَّى لَوْ كَانَ صَغِيرًا، يُعْتَبَرُ صَدَقَةً وَيُقَرِّبُنَا إِلَى اللَّهِ. إِنَّهَا طَرِيقَةٌ جَمِيلَةٌ لِفِعْلِ الْخَيْرِ كُلَّ يَوْمٍ!"
      },
      "wo": {
        "question": "Ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe, lan mooy jëf ju baax ju nekk?",
        "options": [
          "Ay warteef la.",
          "Ay sadaka la.",
          "Ay liggéey la.",
          "Ay mbëgte la."
        ],
        "reponse_correcte": "Ay sadaka la.",
        "explication": "Hadis bi dafa ñu jàngal ne, jëf ju baax ju nekk su ñu ko defee, ba ci ju gën a tuuti, dafa mel ni sadaka la te dafa ñu jegeele Yàlla. Lii ab yoon bu rafet la ngir def lu baax bés bu nekk!"
      }
    }
  },
  {
    "id": 403,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Que se passe-t-il si nous ne faisons pas preuve de miséricorde envers les autres ?",
    "options": [
      "Allah nous récompensera.",
      "Allah nous fera miséricorde.",
      "Allah ne nous fera pas miséricorde.",
      "Rien ne se passera."
    ],
    "reponse_correcte": "Allah ne nous fera pas miséricorde.",
    "explication": "Ce hadith nous encourage à être miséricordieux et gentils avec tout le monde, car Allah (Exalté soit-Il) est le Plus Miséricordieux et aime ceux qui le sont. Soyons toujours doux et compréhensifs !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَحْدُثُ إِذَا لَمْ نَرْحَمِ الْآخَرِينَ؟",
        "options": [
          "سَيُكَافِئُنَا اللَّهُ.",
          "سَيَرْحَمُنَا اللَّهُ.",
          "لَنْ يَرْحَمَنَا اللَّهُ.",
          "لَنْ يَحْدُثَ شَيْءٌ."
        ],
        "reponse_correcte": "لَنْ يَرْحَمَنَا اللَّهُ.",
        "explication": "يُشَجِّعُنَا هَذَا الْحَدِيثُ عَلَى أَنْ نَكُونَ رُحَمَاءَ وَلُطَفَاءَ مَعَ الْجَمِيعِ، لِأَنَّ اللَّهَ (سُبْحَانَهُ وَتَعَالَى) هُوَ أَرْحَمُ الرَّاحِمِينَ وَيُحِبُّ الرُّحَمَاءَ. فَلْنَكُنْ دَائِمًا لُطَفَاءَ وَمُتَفَهِّمِينَ!"
      },
      "wo": {
        "question": "Lan mooy xew su ñu deful yërmande ci yeneen ñi?",
        "options": [
          "Yàlla dina ñu fay.",
          "Yàlla dina ñu yëram.",
          "Yàlla du ñu yëram.",
          "Du am dara."
        ],
        "reponse_correcte": "Yàlla du ñu yëram.",
        "explication": "Hadis bi dafa ñu xamal ne war na ñoo yëram te baax ci ñépp, ndax Yàlla (Subhaanahu wa Ta'aala) mooy Gën a Yëram te dafa bëgg ñi yëram. Na ñu baax te am jàmm ci ñépp!"
      }
    }
  },
  {
    "id": 404,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Selon le Prophète Muhammad (paix et bénédictions sur lui), quels sont les bienfaits du siwak ?",
    "options": [
      "Il rend les dents blanches.",
      "Il purifie la bouche et satisfait le Seigneur.",
      "Il donne bonne haleine.",
      "Il est juste une tradition."
    ],
    "reponse_correcte": "Il purifie la bouche et satisfait le Seigneur.",
    "explication": "Le siwak est une sunnah (pratique du Prophète) qui nous aide à garder notre bouche propre et à plaire à Allah. C'est une petite action avec une grande récompense !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)، مَا هِيَ فَوَائِدُ السِّوَاكِ؟",
        "options": [
          "يَجْعَلُ الْأَسْنَانَ بَيْضَاءَ.",
          "يُطَهِّرُ الْفَمَ وَيُرْضِي الرَّبَّ.",
          "يُعْطِي نَفَسًا طَيِّبًا.",
          "إِنَّهُ مُجَرَّدُ تَقْلِيدٍ."
        ],
        "reponse_correcte": "يُطَهِّرُ الْفَمَ وَيُرْضِي الرَّبَّ.",
        "explication": "السِّوَاكُ سُنَّةٌ (مِنْ سُنَنِ النَّبِيِّ) تُسَاعِدُنَا عَلَى الْحِفَاظِ عَلَى نَظَافَةِ أَفْوَاهِنَا وَإِرْضَاءِ اللَّهِ. إِنَّهُ عَمَلٌ صَغِيرٌ بِأَجْرٍ عَظِيمٍ!"
      },
      "wo": {
        "question": "Ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe, lan mooy njariñi siwak bi?",
        "options": [
          "Dafa def bëñ yi weex.",
          "Dafa setal gémmiñ gi te gërëm Boroom bi.",
          "Dafa may xëñ gu neex.",
          "Dafa doon aada rekk."
        ],
        "reponse_correcte": "Dafa setal gémmiñ gi te gërëm Boroom bi.",
        "explication": "Siwak bi sunna la (jëf ju Yonnant bi) ju ñu dimbali ci setal sunu gémmiñ te neexal Yàlla. Jëf ju tuuti la ak ab pay bu mag!"
      }
    }
  },
  {
    "id": 405,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Comment l'injustice sera-t-elle décrite le Jour de la Résurrection ?",
    "options": [
      "Comme une lumière.",
      "Comme une épreuve.",
      "Comme des ténèbres.",
      "Comme un jugement."
    ],
    "reponse_correcte": "Comme des ténèbres.",
    "explication": "Ce hadith nous avertit de l'importance d'être juste et d'éviter l'injustice, car ses conséquences seront très sombres le Jour du Jugement. Soyons toujours équitables et bons envers les autres !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ سَيُوصَفُ الظُّلْمُ يَوْمَ الْقِيَامَةِ؟",
        "options": [
          "كَضَوْءٍ.",
          "كَامْتِحَانٍ.",
          "كَظُلُمَاتٍ.",
          "كَحُكْمٍ."
        ],
        "reponse_correcte": "كَظُلُمَاتٍ.",
        "explication": "يُحَذِّرُنَا هَذَا الْحَدِيثُ مِنْ أَهَمِّيَّةِ الْعَدْلِ وَتَجَنُّبِ الظُّلْمِ، لِأَنَّ عَوَاقِبَهُ سَتَكُونُ مُظْلِمَةً جِدًّا يَوْمَ الْقِيَامَةِ. فَلْنَكُنْ دَائِمًا مُنْصِفِينَ وَطَيِّبِينَ مَعَ الْآخَرِينَ!"
      },
      "wo": {
        "question": "Naka lañuy waxe ci njuujoor bi ci Bisub Pecc mi?",
        "options": [
          "Ni leer.",
          "Ni coona.",
          "Ni lëndëm.",
          "Ni àtte."
        ],
        "reponse_correcte": "Ni lëndëm.",
        "explication": "Hadis bi dafa ñu yedd ci solo ci def njub ak bañ njuujoor, ndax ay ngënéelam dinañu lëndëm lool ci Bisub Àtte bi. Na ñu def njub te baax ci yeneen ñi!"
      }
    }
  },
  {
    "id": 406,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Pour être un vrai croyant, que devons-nous aimer pour notre frère ?",
    "options": [
      "Ce qu'il aime pour lui-même.",
      "Ce que nous aimons pour nous-mêmes.",
      "Ce qui est bon pour lui.",
      "Ce qui est juste."
    ],
    "reponse_correcte": "Ce que nous aimons pour nous-mêmes.",
    "explication": "Ce hadith nous enseigne l'importance de l'amour et de la fraternité en Islam. Aimer pour les autres ce que nous aimons pour nous-mêmes est un signe de foi sincère et nous aide à construire une communauté forte et unie.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "لِكَيْ نَكُونَ مُؤْمِنًا حَقِيقِيًّا، مَاذَا يَجِبُ عَلَيْنَا أَنْ نُحِبَّ لِأَخِينَا؟",
        "options": [
          "مَا يُحِبُّهُ لِنَفْسِهِ.",
          "مَا نُحِبُّهُ لِأَنْفُسِنَا.",
          "مَا هُوَ خَيْرٌ لَهُ.",
          "مَا هُوَ عَدْلٌ."
        ],
        "reponse_correcte": "مَا نُحِبُّهُ لِأَنْفُسِنَا.",
        "explication": "يُعَلِّمُنَا هَذَا الْحَدِيثُ أَهَمِّيَّةَ الْمَحَبَّةِ وَالْأُخُوَّةِ فِي الْإِسْلَامِ. أَنْ نُحِبَّ لِلْآخَرِينَ مَا نُحِبُّهُ لِأَنْفُسِنَا هُوَ عَلَامَةٌ عَلَى الْإِيمَانِ الصَّادِقِ وَيُسَاعِدُنَا عَلَى بِنَاءِ مُجْتَمَعٍ قَوِيٍّ وَمُتَّحِدٍ."
      },
      "wo": {
        "question": "Ngir doon ab jullit bu dëggu, lan lañu war a bëggal sunu mbokk?",
        "options": [
          "Li mu bëggal boppam.",
          "Li ñu bëggal sunu bopp.",
          "Li ko gënël.",
          "Li jub."
        ],
        "reponse_correcte": "Li ñu bëggal sunu bopp.",
        "explication": "Hadis bi dafa ñu jàngal solo ci bëgg ak mbokk ci Lislaam. Bëggal yeneen ñi li ñu bëggal sunu bopp ab ciiro la ci ngëm gu dëggu te dafa ñu dimbali ci tabax ab mbooloo mu dëgër te benn."
      }
    }
  },
  {
    "id": 407,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que fait Allah à celui à qui Il veut du bien ?",
    "options": [
      "Il lui donne beaucoup d'argent.",
      "Il le rend célèbre.",
      "Il l'éprouve.",
      "Il lui facilite tout."
    ],
    "reponse_correcte": "Il l'éprouve.",
    "explication": "Ce hadith nous apprend que les épreuves peuvent être un signe de l'amour d'Allah. Elles nous aident à grandir, à nous rapprocher de Lui et à purifier nos péchés. Soyons patients et confiants en Sa sagesse !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَفْعَلُ اللَّهُ بِمَنْ يُرِيدُ بِهِ خَيْرًا؟",
        "options": [
          "يُعْطِيهِ مَالًا كَثِيرًا.",
          "يَجْعَلُهُ مَشْهُورًا.",
          "يَبْتَلِيهِ.",
          "يُسَهِّلُ لَهُ كُلَّ شَيْءٍ."
        ],
        "reponse_correcte": "يَبْتَلِيهِ.",
        "explication": "يُعَلِّمُنَا هَذَا الْحَدِيثُ أَنَّ الِابْتِلَاءَاتِ قَدْ تَكُونُ عَلَامَةً عَلَى مَحَبَّةِ اللَّهِ. إِنَّهَا تُسَاعِدُنَا عَلَى النُّمُوِّ وَالتَّقَرُّبِ إِلَيْهِ وَتَطْهِيرِ ذُنُوبِنَا. فَلْنَكُنْ صَابِرِينَ وَوَاثِقِينَ بِحِكْمَتِهِ!"
      },
      "wo": {
        "question": "Lan la Yàlla def ci ku mu bëggal lu baax?",
        "options": [
          "Dafa ko may alal ju bare.",
          "Dafa ko def ku siiw.",
          "Dafa ko jéem.",
          "Dafa ko yombalal lépp."
        ],
        "reponse_correcte": "Dafa ko jéem.",
        "explication": "Hadis bi dafa ñu xamal ne, ay jéem yu Yàlla dafa am, te loolu mën na doon ab ciiro ci mbëggeelam. Dafa ñu dimbali ci màgg, ci jegeele ko, ak ci setal sunu bàkkaar. Na ñu muñ te wóor ci Hikmaam!"
      }
    }
  },
  {
    "id": 408,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que se passe-t-il si une action n'est pas conforme aux enseignements de l'Islam ?",
    "options": [
      "Elle sera acceptée si l'intention est bonne.",
      "Elle sera récompensée.",
      "Elle sera rejetée.",
      "Elle sera jugée plus tard."
    ],
    "reponse_correcte": "Elle sera rejetée.",
    "explication": "Pour que nos actions soient acceptées par Allah, elles doivent être faites avec une bonne intention et être conformes à la Sunnah du Prophète (paix et bénédictions sur lui). C'est ainsi que nous montrons notre amour et notre obéissance à Allah.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَحْدُثُ إِذَا لَمْ يَكُنِ الْعَمَلُ مُوَافِقًا لِتَعَالِيمِ الْإِسْلَامِ؟",
        "options": [
          "سَيُقْبَلُ إِذَا كَانَتِ النِّيَّةُ حَسَنَةً.",
          "سَيُكَافَأُ عَلَيْهِ.",
          "سَيُرَدُّ.",
          "سَيُحْكَمُ عَلَيْهِ لَاحِقًا."
        ],
        "reponse_correcte": "سَيُرَدُّ.",
        "explication": "لِكَيْ تَكُونَ أَعْمَالُنَا مَقْبُولَةً عِنْدَ اللَّهِ، يَجِبُ أَنْ تُؤَدَّى بِنِيَّةٍ صَالِحَةٍ وَأَنْ تَكُونَ مُوَافِقَةً لِسُنَّةِ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ). هَكَذَا نُظْهِرُ حُبَّنَا وَطَاعَتَنَا لِلَّهِ."
      },
      "wo": {
        "question": "Lan mooy xew su ab jëf jubul ak Lislaam?",
        "options": [
          "Dina ñu ko nangu su njort gi baaxee.",
          "Dina ñu ko fay.",
          "Dina ñu ko bañ.",
          "Dina ñu ko àtte gannaaw."
        ],
        "reponse_correcte": "Dina ñu ko bañ.",
        "explication": "Ngir Yàlla nangu sunu jëf yi, dafa war a doon ak njort gu baax te jub ak Sunna Yonnant bi (jamm ak xéewal ci moom). Loolu mooy ni ñuy wone sunu mbëggeel ak sunu topp ci Yàlla."
      }
    }
  },
  {
    "id": 409,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Qui est le meilleur d'entre nous selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Celui qui est riche.",
      "Celui qui est fort.",
      "Celui qui apprend le Coran et l'enseigne.",
      "Celui qui voyage beaucoup."
    ],
    "reponse_correcte": "Celui qui apprend le Coran et l'enseigne.",
    "explication": "Apprendre le Coran et le partager avec les autres est une action très noble et aimée d'Allah. C'est une lumière pour nous et pour ceux à qui nous l'enseignons. Efforçons-nous d'être parmi les meilleurs !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ خَيْرُنَا حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "الْغَنِيُّ.",
          "الْقَوِيُّ.",
          "مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
          "مَنْ يُسَافِرُ كَثِيرًا."
        ],
        "reponse_correcte": "مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
        "explication": "تَعَلُّمُ الْقُرْآنِ وَمُشَارَكَتُهُ مَعَ الْآخَرِينَ عَمَلٌ نَبِيلٌ جِدًّا وَمَحْبُوبٌ لِلَّهِ. إِنَّهُ نُورٌ لَنَا وَلِمَنْ نُعَلِّمُهُ. فَلْنَسْعَ لِنَكُونَ مِنْ خَيْرِ النَّاسِ!"
      },
      "wo": {
        "question": "Kan mooy gën ci ñun ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Ki am alal.",
          "Ki dëgër.",
          "Ki jàng Alxuraan te jàngale ko.",
          "Ki doxantu bari."
        ],
        "reponse_correcte": "Ki jàng Alxuraan te jàngale ko.",
        "explication": "Jàng Alxuraan ak seddale ko ci yeneen ñi ab jëf ju tedd la te Yàlla bëgg ko. Leer la ci ñun ak ci ñi ñu ko jàngal. Na ñu jéem a doon ci ñi gën!"
      }
    }
  },
  {
    "id": 410,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que reçoit celui qui prie sur le Prophète Muhammad (paix et bénédictions sur lui) une seule fois ?",
    "options": [
      "Une seule récompense.",
      "Dix prières d'Allah sur lui.",
      "Le pardon de ses péchés.",
      "La satisfaction d'Allah."
    ],
    "reponse_correcte": "Dix prières d'Allah sur lui.",
    "explication": "C'est une grande bénédiction et une récompense immense d'Allah (Exalté soit-Il) pour un acte si simple. N'oublions jamais de prier sur notre cher Prophète Muhammad (paix et bénédictions sur lui) !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَنَالُ مَنْ صَلَّى عَلَى النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) مَرَّةً وَاحِدَةً؟",
        "options": [
          "مُكَافَأَةً وَاحِدَةً فَقَطْ.",
          "عَشْرَ صَلَوَاتٍ مِنَ اللَّهِ عَلَيْهِ.",
          "مَغْفِرَةَ ذُنُوبِهِ.",
          "رِضَا اللَّهِ."
        ],
        "reponse_correcte": "عَشْرَ صَلَوَاتٍ مِنَ اللَّهِ عَلَيْهِ.",
        "explication": "إِنَّهَا بَرَكَةٌ عَظِيمَةٌ وَمُكَافَأَةٌ جَزِيلَةٌ مِنَ اللَّهِ (سُبْحَانَهُ وَتَعَالَى) لِعَمَلٍ بَسِيطٍ جِدًّا. فَلَا نَنْسَ أَبَدًا أَنْ نُصَلِّيَ عَلَى نَبِيِّنَا الْحَبِيبِ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)!"
      },
      "wo": {
        "question": "Lan la ki julli ci Yonnant bi Muhammad (jamm ak xéewal ci moom) benn yoon rekk am?",
        "options": [
          "Benn pay rekk.",
          "Fukki julli yu Yàlla def ci moom.",
          "Jéggal ci bàkkaaram yi.",
          "Ngërëmul Yàlla."
        ],
        "reponse_correcte": "Fukki julli yu Yàlla def ci moom.",
        "explication": "Lii ab barke bu mag la ak ab pay bu rëy ci Yàlla (Subhaanahu wa Ta'aala) ngir ab jëf bu yomb lool. Na ñu fàttaliku julli ci sunu Yonnant bu soppe bi Muhammad (jamm ak xéewal ci moom)!"
      }
    }
  },
  {
    "id": 411,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Quelle est la véritable richesse selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "L'abondance des biens.",
      "La richesse de l'âme.",
      "Beaucoup d'argent.",
      "Une grande maison."
    ],
    "reponse_correcte": "La richesse de l'âme.",
    "explication": "La vraie richesse ne se mesure pas par ce que nous possédons, mais par la satisfaction, la paix et la générosité de notre cœur. Un cœur riche est un trésor qui nous apporte le bonheur ici-bas et dans l'au-delà.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ الثَّرْوَةُ الْحَقِيقِيَّةُ حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "كَثْرَةُ الْأَمْوَالِ.",
          "غِنَى النَّفْسِ.",
          "الْكَثِيرُ مِنَ الْمَالِ.",
          "الْبَيْتُ الْكَبِيرُ."
        ],
        "reponse_correcte": "غِنَى النَّفْسِ.",
        "explication": "الثَّرْوَةُ الْحَقِيقِيَّةُ لَا تُقَاسُ بِمَا نَمْلِكُهُ، بَلْ بِالْقَنَاعَةِ وَالسَّلَامِ وَالْكَرَمِ فِي قُلُوبِنَا. الْقَلْبُ الْغَنِيُّ كَنْزٌ يَجْلِبُ لَنَا السَّعَادَةَ فِي الدُّنْيَا وَالْآخِرَةِ."
      },
      "wo": {
        "question": "Lan mooy alal ju dëggu ji ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Bari alal.",
          "Alal ju xol bi.",
          "Xaliss bu bare.",
          "Kër gu mag."
        ],
        "reponse_correcte": "Alal ju xol bi.",
        "explication": "Alal ju dëggu ji duñu ko natt ci li ñu am, waaye ci ngërëmul, jàmm ak yombal ci sunu xol. Xol bu am alal ab njël la ju ñu indil mbëgte ci adduna ak ci àllaaxira."
      }
    }
  },
  {
    "id": 412,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Quel est le bienfait du jeûne du jour de Achoura ?",
    "options": [
      "Il expie les péchés de l'année passée.",
      "Il expie les péchés de toute une vie.",
      "Il est obligatoire.",
      "Il donne beaucoup de récompenses."
    ],
    "reponse_correcte": "Il expie les péchés de l'année passée.",
    "explication": "Le jeûne du jour de Achoura est une occasion bénie de demander pardon à Allah pour les péchés de l'année écoulée. C'est un cadeau d'Allah pour nous aider à nous purifier et à nous rapprocher de Lui.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ فَضِيلَةُ صِيَامِ يَوْمِ عَاشُورَاءَ؟",
        "options": [
          "يُكَفِّرُ ذُنُوبَ السَّنَةِ الْمَاضِيَةِ.",
          "يُكَفِّرُ ذُنُوبَ الْعُمْرِ كُلِّهِ.",
          "إِنَّهُ وَاجِبٌ.",
          "يُعْطِي كَثِيرًا مِنَ الْأَجْرِ."
        ],
        "reponse_correcte": "يُكَفِّرُ ذُنُوبَ السَّنَةِ الْمَاضِيَةِ.",
        "explication": "صِيَامُ يَوْمِ عَاشُورَاءَ فُرْصَةٌ مُبَارَكَةٌ لِطَلَبِ الْمَغْفِرَةِ مِنَ اللَّهِ لِذُنُوبِ السَّنَةِ الْمَاضِيَةِ. إِنَّهُ هَدِيَّةٌ مِنَ اللَّهِ لِمُسَاعَدَتِنَا عَلَى التَّطْهِيرِ وَالتَّقَرُّبِ إِلَيْهِ."
      },
      "wo": {
        "question": "Lan mooy njariñu wooru bisu Achoura?",
        "options": [
          "Dafa far bàkkaar yi ci at mi weesu.",
          "Dafa far bàkkaar yi ci dund gi yépp.",
          "Dafa war.",
          "Dafa may ay pay yu bare."
        ],
        "reponse_correcte": "Dafa far bàkkaar yi ci at mi weesu.",
        "explication": "Wooru bisu Achoura ab yoon bu barkeel la ngir ñaan Yàlla mu jéggal ñu sunu bàkkaar yi ci at mi weesu. Ab may la ci Yàlla ngir dimbali ñu ci setal sunu bopp ak ci jegeele ko."
      }
    }
  },
  {
    "id": 413,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Quel conseil le Prophète Muhammad (paix et bénédictions sur lui) a-t-il répété plusieurs fois à un homme qui lui demandait un conseil ?",
    "options": [
      "Sois patient.",
      "Ne te mets pas en colère.",
      "Prie beaucoup.",
      "Fais le bien."
    ],
    "reponse_correcte": "Ne te mets pas en colère.",
    "explication": "La colère peut nous faire dire ou faire des choses que nous regrettons. Le Prophète (paix et bénédictions sur lui) nous a montré que maîtriser sa colère est une grande force et nous aide à rester calmes et sages.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ النَّصِيحَةُ الَّتِي كَرَّرَهَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) مِرَارًا لِرَجُلٍ طَلَبَ مِنْهُ النَّصِيحَةَ؟",
        "options": [
          "كُنْ صَابِرًا.",
          "لَا تَغْضَبْ.",
          "صَلِّ كَثِيرًا.",
          "افْعَلِ الْخَيْرَ."
        ],
        "reponse_correcte": "لَا تَغْضَبْ.",
        "explication": "الْغَضَبُ قَدْ يَجْعَلُنَا نَقُولُ أَوْ نَفْعَلُ أَشْيَاءَ نَنْدَمُ عَلَيْهَا. النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَرَانَا أَنَّ السَّيْطَرَةَ عَلَى الْغَضَبِ قُوَّةٌ عَظِيمَةٌ وَتُسَاعِدُنَا عَلَى الْبَقَاءِ هَادِئِينَ وَحُكَمَاءَ."
      },
      "wo": {
        "question": "Lan mooy ndigal li Yonnant bi Muhammad (jamm ak xéewal ci moom) waxoon lu bari ci ab góor bu ko laajoon ndigal?",
        "options": [
          "Muñal.",
          "Bu feebar.",
          "Julli lu bari.",
          "Defal lu baax."
        ],
        "reponse_correcte": "Bu feebar.",
        "explication": "Feebar mën na ñu tax a wax walla def lu ñu reggret. Yonnant bi (jamm ak xéewal ci moom) wone na ñu ne, teg feebar ci boppam doole bu mag la te dafa ñu dimbali ci des ci jàmm ak hikma."
      }
    }
  },
  {
    "id": 414,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Qu'est-ce qu'Allah a pardonné à la communauté du Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Les mauvaises pensées, si elles ne sont pas mises en œuvre ou prononcées.",
      "Tous les péchés.",
      "Seulement les petits péchés.",
      "Rien du tout."
    ],
    "reponse_correcte": "Les mauvaises pensées, si elles ne sont pas mises en œuvre ou prononcées.",
    "explication": "C'est une grande miséricorde d'Allah (Exalté soit-Il) ! Cela signifie que si nous avons de mauvaises pensées, mais que nous ne les réalisons pas et ne les disons pas, Allah nous pardonne. Cela nous encourage à contrôler nos pensées et à nous tourner vers le bien.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا غَفَرَ اللَّهُ لِأُمَّةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "الْأَفْكَارَ السَّيِّئَةَ، إِذَا لَمْ تُنَفَّذْ أَوْ تُقَلْ.",
          "جَمِيعَ الذُّنُوبِ.",
          "الذُّنُوبَ الصَّغِيرَةَ فَقَطْ.",
          "لَا شَيْءَ عَلَى الْإِطْلَاقِ."
        ],
        "reponse_correcte": "الْأَفْكَارَ السَّيِّئَةَ، إِذَا لَمْ تُنَفَّذْ أَوْ تُقَلْ.",
        "explication": "إِنَّهَا رَحْمَةٌ عَظِيمَةٌ مِنَ اللَّهِ (سُبْحَانَهُ وَتَعَالَى)! هَذَا يَعْنِي أَنَّهُ إِذَا خَطَرَتْ لَنَا أَفْكَارٌ سَيِّئَةٌ، وَلَكِنَّنَا لَمْ نُحَقِّقْهَا وَلَمْ نَقُلْهَا، فَإِنَّ اللَّهَ يَغْفِرُ لَنَا. هَذَا يُشَجِّعُنَا عَلَى السَّيْطَرَةِ عَلَى أَفْكَارِنَا وَالتَّوَجُّهِ نَحْوَ الْخَيْرِ."
      },
      "wo": {
        "question": "Lan la Yàlla jéggal umma Yonnant bi Muhammad (jamm ak xéewal ci moom)?",
        "options": [
          "Xalaat yu bon yi, su ñu ko deful walla wax ko.",
          "Bàkkaar yépp.",
          "Bàkkaar yu tuuti yi rekk.",
          "Dara."
        ],
        "reponse_correcte": "Xalaat yu bon yi, su ñu ko deful walla wax ko.",
        "explication": "Lii ab yërmande bu mag la ci Yàlla (Subhaanahu wa Ta'aala)! Loolu dafa tekki ne su ñu amee ay xalaat yu bon, waaye ñu deful ko te waxul ko, Yàlla dina ñu jéggal. Loolu dafa ñu digal ci saytu sunu xalaat yi ak ci jëm ci lu baax."
      }
    }
  },
  {
    "id": 415,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Qui est le véritable fort selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Celui qui gagne tous les combats.",
      "Celui qui a beaucoup de muscles.",
      "Celui qui se maîtrise en cas de colère.",
      "Celui qui est le plus intelligent."
    ],
    "reponse_correcte": "Celui qui se maîtrise en cas de colère.",
    "explication": "Le vrai courage n'est pas de vaincre les autres par la force physique, mais de maîtriser ses propres émotions, surtout la colère. C'est un signe de sagesse et de force intérieure qui plaît beaucoup à Allah.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ الْقَوِيُّ الْحَقِيقِيُّ حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "مَنْ يَفُوزُ بِجَمِيعِ الْمَعَارِكِ.",
          "مَنْ لَهُ عَضَلَاتٌ كَثِيرَةٌ.",
          "مَنْ يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.",
          "مَنْ هُوَ الْأَذْكَى."
        ],
        "reponse_correcte": "مَنْ يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.",
        "explication": "الشَّجَاعَةُ الْحَقِيقِيَّةُ لَيْسَتْ فِي هَزِيمَةِ الْآخَرِينَ بِالْقُوَّةِ الْبَدَنِيَّةِ، بَلْ فِي السَّيْطَرَةِ عَلَى عِوَاطِفِكَ الْخَاصَّةِ، خَاصَّةً الْغَضَبَ. إِنَّهَا عَلَامَةٌ عَلَى الْحِكْمَةِ وَالْقُوَّةِ الدَّاخِلِيَّةِ الَّتِي تُحِبُّهَا اللَّهُ كَثِيرًا."
      },
      "wo": {
        "question": "Kan mooy doole bu dëggu ji ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Ki daan ci xeex yépp.",
          "Ki am yaram bu dëgër.",
          "Ki saytu boppam ci feebar.",
          "Ki gën a xel."
        ],
        "reponse_correcte": "Ki saytu boppam ci feebar.",
        "explication": "Doole bu dëggu ji du ci daan yeneen ñi ci doole yaram, waaye ci saytu sa bët, rawatina feebar. Ab ciiro la ci hikma ak doole gu biir gi Yàlla bëgg lool."
      }
    }
  },
  {
    "id": 416,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Selon le Prophète Muhammad (paix et bénédictions sur lui), quels sont les bienfaits du siwak ?",
    "options": [
      "Il rend les dents blanches.",
      "Il purifie la bouche et satisfait le Seigneur.",
      "Il donne bonne haleine.",
      "Il est juste une tradition."
    ],
    "reponse_correcte": "Il purifie la bouche et satisfait le Seigneur.",
    "explication": "Le siwak est une sunnah (pratique du Prophète) qui nous aide à garder notre bouche propre et à plaire à Allah. C'est une petite action avec une grande récompense !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)، مَا هِيَ فَوَائِدُ السِّوَاكِ؟",
        "options": [
          "يَجْعَلُ الْأَسْنَانَ بَيْضَاءَ.",
          "يُطَهِّرُ الْفَمَ وَيُرْضِي الرَّبَّ.",
          "يُعْطِي نَفَسًا طَيِّبًا.",
          "إِنَّهُ مُجَرَّدُ تَقْلِيدٍ."
        ],
        "reponse_correcte": "يُطَهِّرُ الْفَمَ وَيُرْضِي الرَّبَّ.",
        "explication": "السِّوَاكُ سُنَّةٌ (مِنْ سُنَنِ النَّبِيِّ) تُسَاعِدُنَا عَلَى الْحِفَاظِ عَلَى نَظَافَةِ أَفْوَاهِنَا وَإِرْضَاءِ اللَّهِ. إِنَّهُ عَمَلٌ صَغِيرٌ بِأَجْرٍ عَظِيمٍ!"
      },
      "wo": {
        "question": "Ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe, lan mooy njariñi siwak bi?",
        "options": [
          "Dafa def bëñ yi weex.",
          "Dafa setal gémmiñ gi te gërëm Boroom bi.",
          "Dafa may xëñ gu neex.",
          "Dafa doon aada rekk."
        ],
        "reponse_correcte": "Dafa setal gémmiñ gi te gërëm Boroom bi.",
        "explication": "Siwak bi sunna la (jëf ju Yonnant bi) ju ñu dimbali ci setal sunu gémmiñ te neexal Yàlla. Jëf ju tuuti la ak ab pay bu mag!"
      }
    }
  },
  {
    "id": 417,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Comment l'injustice sera-t-elle décrite le Jour de la Résurrection ?",
    "options": [
      "Comme une lumière.",
      "Comme une épreuve.",
      "Comme des ténèbres.",
      "Comme un jugement."
    ],
    "reponse_correcte": "Comme des ténèbres.",
    "explication": "Ce hadith nous avertit de l'importance d'être juste et d'éviter l'injustice, car ses conséquences seront très sombres le Jour du Jugement. Soyons toujours équitables et bons envers les autres !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ سَيُوصَفُ الظُّلْمُ يَوْمَ الْقِيَامَةِ؟",
        "options": [
          "كَضَوْءٍ.",
          "كَامْتِحَانٍ.",
          "كَظُلُمَاتٍ.",
          "كَحُكْمٍ."
        ],
        "reponse_correcte": "كَظُلُمَاتٍ.",
        "explication": "يُحَذِّرُنَا هَذَا الْحَدِيثُ مِنْ أَهَمِّيَّةِ الْعَدْلِ وَتَجَنُّبِ الظُّلْمِ، لِأَنَّ عَوَاقِبَهُ سَتَكُونُ مُظْلِمَةً جِدًّا يَوْمَ الْقِيَامَةِ. فَلْنَكُنْ دَائِمًا مُنْصِفِينَ وَطَيِّبِينَ مَعَ الْآخَرِينَ!"
      },
      "wo": {
        "question": "Naka lañuy waxe ci njuujoor bi ci Bisub Pecc mi?",
        "options": [
          "Ni leer.",
          "Ni coona.",
          "Ni lëndëm.",
          "Ni àtte."
        ],
        "reponse_correcte": "Ni lëndëm.",
        "explication": "Hadis bi dafa ñu yedd ci solo ci def njub ak bañ njuujoor, ndax ay ngënéelam dinañu lëndëm lool ci Bisub Àtte bi. Na ñu def njub te baax ci yeneen ñi!"
      }
    }
  },
  {
    "id": 418,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Pour être un vrai croyant, que devons-nous aimer pour notre frère ?",
    "options": [
      "Ce qu'il aime pour lui-même.",
      "Ce que nous aimons pour nous-mêmes.",
      "Ce qui est bon pour lui.",
      "Ce qui est juste."
    ],
    "reponse_correcte": "Ce que nous aimons pour nous-mêmes.",
    "explication": "Ce hadith nous enseigne l'importance de l'amour et de la fraternité en Islam. Aimer pour les autres ce que nous aimons pour nous-mêmes est un signe de foi sincère et nous aide à construire une communauté forte et unie.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "لِكَيْ نَكُونَ مُؤْمِنًا حَقِيقِيًّا، مَاذَا يَجِبُ عَلَيْنَا أَنْ نُحِبَّ لِأَخِينَا؟",
        "options": [
          "مَا يُحِبُّهُ لِنَفْسِهِ.",
          "مَا نُحِبُّهُ لِأَنْفُسِنَا.",
          "مَا هُوَ خَيْرٌ لَهُ.",
          "مَا هُوَ عَدْلٌ."
        ],
        "reponse_correcte": "مَا نُحِبُّهُ لِأَنْفُسِنَا.",
        "explication": "يُعَلِّمُنَا هَذَا الْحَدِيثُ أَهَمِّيَّةَ الْمَحَبَّةِ وَالْأُخُوَّةِ فِي الْإِسْلَامِ. أَنْ نُحِبَّ لِلْآخَرِينَ مَا نُحِبُّهُ لِأَنْفُسِنَا هُوَ عَلَامَةٌ عَلَى الْإِيمَانِ الصَّادِقِ وَيُسَاعِدُنَا عَلَى بِنَاءِ مُجْتَمَعٍ قَوِيٍّ وَمُتَّحِدٍ."
      },
      "wo": {
        "question": "Ngir doon ab jullit bu dëggu, lan lañu war a bëggal sunu mbokk?",
        "options": [
          "Li mu bëggal boppam.",
          "Li ñu bëggal sunu bopp.",
          "Li ko gënël.",
          "Li jub."
        ],
        "reponse_correcte": "Li ñu bëggal sunu bopp.",
        "explication": "Hadis bi dafa ñu jàngal solo ci bëgg ak mbokk ci Lislaam. Bëggal yeneen ñi li ñu bëggal sunu bopp ab ciiro la ci ngëm gu dëggu te dafa ñu dimbali ci tabax ab mbooloo mu dëgër te benn."
      }
    }
  },
  {
    "id": 419,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que fait Allah à celui à qui Il veut du bien ?",
    "options": [
      "Il lui donne beaucoup d'argent.",
      "Il le rend célèbre.",
      "Il l'éprouve.",
      "Il lui facilite tout."
    ],
    "reponse_correcte": "Il l'éprouve.",
    "explication": "Ce hadith nous apprend que les épreuves peuvent être un signe de l'amour d'Allah. Elles nous aident à grandir, à nous rapprocher de Lui et à purifier nos péchés. Soyons patients et confiants en Sa sagesse !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَفْعَلُ اللَّهُ بِمَنْ يُرِيدُ بِهِ خَيْرًا؟",
        "options": [
          "يُعْطِيهِ مَالًا كَثِيرًا.",
          "يَجْعَلُهُ مَشْهُورًا.",
          "يَبْتَلِيهِ.",
          "يُسَهِّلُ لَهُ كُلَّ شَيْءٍ."
        ],
        "reponse_correcte": "يَبْتَلِيهِ.",
        "explication": "يُعَلِّمُنَا هَذَا الْحَدِيثُ أَنَّ الِابْتِلَاءَاتِ قَدْ تَكُونُ عَلَامَةً عَلَى مَحَبَّةِ اللَّهِ. إِنَّهَا تُسَاعِدُنُنَا عَلَى النُّمُوِّ وَالتَّقَرُّبِ إِلَيْهِ وَتَطْهِيرِ ذُنُوبِنَا. فَلْنَكُنْ صَابِرِينَ وَوَاثِقِينَ بِحِكْمَتِهِ!"
      },
      "wo": {
        "question": "Lan la Yàlla def ci ku mu bëggal lu baax?",
        "options": [
          "Dafa ko may alal ju bare.",
          "Dafa ko def ku siiw.",
          "Dafa ko jéem.",
          "Dafa ko yombalal lépp."
        ],
        "reponse_correcte": "Dafa ko jéem.",
        "explication": "Hadis bi dafa ñu xamal ne, ay jéem yu Yàlla dafa am, te loolu mën na doon ab ciiro ci mbëggeelam. Dafa ñu dimbali ci màgg, ci jegeele ko, ak ci setal sunu bàkkaar. Na ñu muñ te wóor ci Hikmaam!"
      }
    }
  },
  {
    "id": 420,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que se passe-t-il si une action n'est pas conforme aux enseignements de l'Islam ?",
    "options": [
      "Elle sera acceptée si l'intention est bonne.",
      "Elle sera récompensée.",
      "Elle sera rejetée.",
      "Elle sera jugée plus tard."
    ],
    "reponse_correcte": "Elle sera rejetée.",
    "explication": "Pour que nos actions soient acceptées par Allah, elles doivent être faites avec une bonne intention et être conformes à la Sunnah du Prophète (paix et bénédictions sur lui). C'est ainsi que nous montrons notre amour et notre obéissance à Allah.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَحْدُثُ إِذَا لَمْ يَكُنِ الْعَمَلُ مُوَافِقًا لِتَعَالِيمِ الْإِسْلَامِ؟",
        "options": [
          "سَيُقْبَلُ إِذَا كَانَتِ النِّيَّةُ حَسَنَةً.",
          "سَيُكَافَأُ عَلَيْهِ.",
          "سَيُرَدُّ.",
          "سَيُحْكَمُ عَلَيْهِ لَاحِقًا."
        ],
        "reponse_correcte": "سَيُرَدُّ.",
        "explication": "لِكَيْ تَكُونَ أَعْمَالُنَا مَقْبُولَةً عِنْدَ اللَّهِ، يَجِبُ أَنْ تُؤَدَّى بِنِيَّةٍ صَالِحَةٍ وَأَنْ تَكُونَ مُوَافِقَةً لِسُنَّةِ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ). هَكَذَا نُظْهِرُ حُبَّنَا وَطَاعَتَنَا لِلَّهِ."
      },
      "wo": {
        "question": "Lan mooy xew su ab jëf jubul ak Lislaam?",
        "options": [
          "Dina ñu ko nangu su njort gi baaxee.",
          "Dina ñu ko fay.",
          "Dina ñu ko bañ.",
          "Dina ñu ko àtte gannaaw."
        ],
        "reponse_correcte": "Dina ñu ko bañ.",
        "explication": "Ngir Yàlla nangu sunu jëf yi, dafa war a doon ak njort gu baax te jub ak Sunna Yonnant bi (jamm ak xéewal ci moom). Loolu mooy ni ñuy wone sunu mbëggeel ak sunu topp ci Yàlla."
      }
    }
  },
  {
    "id": 421,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Qui est le meilleur d'entre nous selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Celui qui est riche.",
      "Celui qui est fort.",
      "Celui qui apprend le Coran et l'enseigne.",
      "Celui qui voyage beaucoup."
    ],
    "reponse_correcte": "Celui qui apprend le Coran et l'enseigne.",
    "explication": "Apprendre le Coran et le partager avec les autres est une action très noble et aimée d'Allah. C'est une lumière pour nous et pour ceux à qui nous l'enseignons. Efforçons-nous d'être parmi les meilleurs !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ خَيْرُنَا حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "الْغَنِيُّ.",
          "الْقَوِيُّ.",
          "مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
          "مَنْ يُسَافِرُ كَثِيرًا."
        ],
        "reponse_correcte": "مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
        "explication": "تَعَلُّمُ الْقُرْآنِ وَمُشَارَكَتُهُ مَعَ الْآخَرِينَ عَمَلٌ نَبِيلٌ جِدًّا وَمَحْبُوبٌ لِلَّهِ. إِنَّهُ نُورٌ لَنَا وَلِمَنْ نُعَلِّمُهُ. فَلْنَسْعَ لِنَكُونَ مِنْ خَيْرِ النَّاسِ!"
      },
      "wo": {
        "question": "Kan mooy gën ci ñun ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Ki am alal.",
          "Ki dëgër.",
          "Ki jàng Alxuraan te jàngale ko.",
          "Ki doxantu bari."
        ],
        "reponse_correcte": "Ki jàng Alxuraan te jàngale ko.",
        "explication": "Jàng Alxuraan ak seddale ko ci yeneen ñi ab jëf ju tedd la te Yàlla bëgg ko. Leer la ci ñun ak ci ñi ñu ko jàngal. Na ñu jéem a doon ci ñi gën!"
      }
    }
  },
  {
    "id": 422,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Que reçoit celui qui prie sur le Prophète Muhammad (paix et bénédictions sur lui) une seule fois ?",
    "options": [
      "Une seule récompense.",
      "Dix prières d'Allah sur lui.",
      "Le pardon de ses péchés.",
      "La satisfaction d'Allah."
    ],
    "reponse_correcte": "Dix prières d'Allah sur lui.",
    "explication": "C'est une grande bénédiction et une récompense immense d'Allah (Exalté soit-Il) pour un acte si simple. N'oublions jamais de prier sur notre cher Prophète Muhammad (paix et bénédictions sur lui) !",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَنَالُ مَنْ صَلَّى عَلَى النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) مَرَّةً وَاحِدَةً؟",
        "options": [
          "مُكَافَأَةً وَاحِدَةً فَقَطْ.",
          "عَشْرَ صَلَوَاتٍ مِنَ اللَّهِ عَلَيْهِ.",
          "مَغْفِرَةَ ذُنُوبِهِ.",
          "رِضَا اللَّهِ."
        ],
        "reponse_correcte": "عَشْرَ صَلَوَاتٍ مِنَ اللَّهِ عَلَيْهِ.",
        "explication": "إِنَّهَا بَرَكَةٌ عَظِيمَةٌ وَمُكَافَأَةٌ جَزِيلَةٌ مِنَ اللَّهِ (سُبْحَانَهُ وَتَعَالَى) لِعَمَلٍ بَسِيطٍ جِدًّا. فَلَا نَنْسَ أَبَدًا أَنْ نُصَلِّيَ عَلَى نَبِيِّنَا الْحَبِيبِ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)!"
      },
      "wo": {
        "question": "Lan la ki julli ci Yonnant bi Muhammad (jamm ak xéewal ci moom) benn yoon rekk am?",
        "options": [
          "Benn pay rekk.",
          "Fukki julli yu Yàlla def ci moom.",
          "Jéggal ci bàkkaaram yi.",
          "Ngërëmul Yàlla."
        ],
        "reponse_correcte": "Fukki julli yu Yàlla def ci moom.",
        "explication": "Lii ab barke bu mag la ak ab pay bu rëy ci Yàlla (Subhaanahu wa Ta'aala) ngir ab jëf bu yomb lool. Na ñu fàttaliku julli ci sunu Yonnant bu soppe bi Muhammad (jamm ak xéewal ci moom)!"
      }
    }
  },
  {
    "id": 423,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Quelle est la véritable richesse selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "L'abondance des biens.",
      "La richesse de l'âme.",
      "Beaucoup d'argent.",
      "Une grande maison."
    ],
    "reponse_correcte": "La richesse de l'âme.",
    "explication": "La vraie richesse ne se mesure pas par ce que nous possédons, mais par la satisfaction, la paix et la générosité de notre cœur. Un cœur riche est un trésor qui nous apporte le bonheur ici-bas et dans l'au-delà.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ الثَّرْوَةُ الْحَقِيقِيَّةُ حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "كَثْرَةُ الْأَمْوَالِ.",
          "غِنَى النَّفْسِ.",
          "الْكَثِيرُ مِنَ الْمَالِ.",
          "الْبَيْتُ الْكَبِيرُ."
        ],
        "reponse_correcte": "غِنَى النَّفْسِ.",
        "explication": "الثَّرْوَةُ الْحَقِيقِيَّةُ لَا تُقَاسُ بِمَا نَمْلِكُهُ، بَلْ بِالْقَنَاعَةِ وَالسَّلَامِ وَالْكَرَمِ فِي قُلُوبِنَا. الْقَلْبُ الْغَنِيُّ كَنْزٌ يَجْلِبُ لَنَا السَّعَادَةَ فِي الدُّنْيَا وَالْآخِرَةِ."
      },
      "wo": {
        "question": "Lan mooy alal ju dëggu ji ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Bari alal.",
          "Alal ju xol bi.",
          "Xaliss bu bare.",
          "Kër gu mag."
        ],
        "reponse_correcte": "Alal ju xol bi.",
        "explication": "Alal ju dëggu ji duñu ko natt ci li ñu am, waaye ci ngërëmul, jàmm ak yombal ci sunu xol. Xol bu am alal ab njël la ju ñu indil mbëgte ci adduna ak ci àllaaxira."
      }
    }
  },
  {
    "id": 424,
    "categorie": "Hadith & Sunnah",
    "niveau": "Intermédiaire",
    "question": "Quel est le bienfait du jeûne du jour de Achoura ?",
    "options": [
      "Il expie les péchés de l'année passée.",
      "Il expie les péchés de toute une vie.",
      "Il est obligatoire.",
      "Il donne beaucoup de récompenses."
    ],
    "reponse_correcte": "Il expie les péchés de l'année passée.",
    "explication": "Le jeûne du jour de Achoura est une occasion bénie de demander pardon à Allah pour les péchés de l'année écoulée. C'est un cadeau d'Allah pour nous aider à nous purifier et à nous rapprocher de Lui.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ فَضِيلَةُ صِيَامِ يَوْمِ عَاشُورَاءَ؟",
        "options": [
          "يُكَفِّرُ ذُنُوبَ السَّنَةِ الْمَاضِيَةِ.",
          "يُكَفِّرُ ذُنُوبَ الْعُمْرِ كُلِّهِ.",
          "إِنَّهُ وَاجِبٌ.",
          "يُعْطِي كَثِيرًا مِنَ الْأَجْرِ."
        ],
        "reponse_correcte": "يُكَفِّرُ ذُنُوبَ السَّنَةِ الْمَاضِيَةِ.",
        "explication": "صِيَامُ يَوْمِ عَاشُورَاءَ فُرْصَةٌ مُبَارَكَةٌ لِطَلَبِ الْمَغْفِرَةِ مِنَ اللَّهِ لِذُنُوبِ السَّنَةِ الْمَاضِيَةِ. إِنَّهُ هَدِيَّةٌ مِنَ اللَّهِ لِمُسَاعَدَتِنَا عَلَى التَّطْهِيرِ وَالتَّقَرُّبِ إِلَيْهِ."
      },
      "wo": {
        "question": "Lan mooy njariñu wooru bisu Achoura?",
        "options": [
          "Dafa far bàkkaar yi ci at mi weesu.",
          "Dafa far bàkkaar yi ci dund gi yépp.",
          "Dafa war.",
          "Dafa may ay pay yu bare."
        ],
        "reponse_correcte": "Dafa far bàkkaar yi ci at mi weesu.",
        "explication": "Wooru bisu Achoura ab yoon bu barkeel la ngir ñaan Yàlla mu jéggal ñu sunu bàkkaar yi ci at mi weesu. Ab may la ci Yàlla ngir dimbali ñu ci setal sunu bopp ak ci jegeele ko."
      }
    }
  },
  {
    "id": 425,
    "categorie": "Hadith & Sunnah",
    "niveau": "Débutant",
    "question": "Quel conseil le Prophète Muhammad (paix et bénédictions sur lui) a-t-il répété plusieurs fois à un homme qui lui demandait un conseil ?",
    "options": [
      "Sois patient.",
      "Ne te mets pas en colère.",
      "Prie beaucoup.",
      "Fais le bien."
    ],
    "reponse_correcte": "Ne te mets pas en colère.",
    "explication": "La colère peut nous faire dire ou faire des choses que nous regrettons. Le Prophète (paix et bénédictions sur lui) nous a montré que maîtriser sa colère est une grande force et nous aide à rester calmes et sages.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ النَّصِيحَةُ الَّتِي كَرَّرَهَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) مِرَارًا لِرَجُلٍ طَلَبَ مِنْهُ النَّصِيحَةَ؟",
        "options": [
          "كُنْ صَابِرًا.",
          "لَا تَغْضَبْ.",
          "صَلِّ كَثِيرًا.",
          "افْعَلِ الْخَيْرَ."
        ],
        "reponse_correcte": "لَا تَغْضَبْ.",
        "explication": "الْغَضَبُ قَدْ يَجْعَلُنَا نَقُولُ أَوْ نَفْعَلُ أَشْيَاءَ نَنْدَمُ عَلَيْهَا. النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَرَانَا أَنَّ السَّيْطَرَةَ عَلَى الْغَضَبِ قُوَّةٌ عَظِيمَةٌ وَتُسَاعِدُنَا عَلَى الْبَقَاءِ هَادِئِينَ وَحُكَمَاءَ."
      },
      "wo": {
        "question": "Lan mooy ndigal li Yonnant bi Muhammad (jamm ak xéewal ci moom) waxoon lu bari ci ab góor bu ko laajoon ndigal?",
        "options": [
          "Muñal.",
          "Bu feebar.",
          "Julli lu bari.",
          "Defal lu baax."
        ],
        "reponse_correcte": "Bu feebar.",
        "explication": "Feebar mën na ñu tax a wax walla def lu ñu reggret. Yonnant bi (jamm ak xéewal ci moom) wone na ñu ne, teg feebar ci boppam doole bu mag la te dafa ñu dimbali ci des ci jàmm ak hikma."
      }
    }
  },
  {
    "id": 426,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Qu'est-ce qu'Allah a pardonné à la communauté du Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Les mauvaises pensées, si elles ne sont pas mises en œuvre ou prononcées.",
      "Tous les péchés.",
      "Seulement les petits péchés.",
      "Rien du tout."
    ],
    "reponse_correcte": "Les mauvaises pensées, si elles ne sont pas mises en œuvre ou prononcées.",
    "explication": "C'est une grande miséricorde d'Allah (Exalté soit-Il) ! Cela signifie que si nous avons de mauvaises pensées, mais que nous ne les réalisons pas et ne les disons pas, Allah nous pardonne. Cela nous encourage à contrôler nos pensées et à nous tourner vers le bien.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا غَفَرَ اللَّهُ لِأُمَّةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "الْأَفْكَارَ السَّيِّئَةَ، إِذَا لَمْ تُنَفَّذْ أَوْ تُقَلْ.",
          "جَمِيعَ الذُّنُوبِ.",
          "الذُّنُوبَ الصَّغِيرَةَ فَقَطْ.",
          "لَا شَيْءَ عَلَى الْإِطْلَاقِ."
        ],
        "reponse_correcte": "الْأَفْكَارَ السَّيِّئَةَ، إِذَا لَمْ تُنَفَّذْ أَوْ تُقَلْ.",
        "explication": "إِنَّهَا رَحْمَةٌ عَظِيمَةٌ مِنَ اللَّهِ (سُبْحَانَهُ وَتَعَالَى)! هَذَا يَعْنِي أَنَّهُ إِذَا خَطَرَتْ لَنَا أَفْكَارٌ سَيِّئَةٌ، وَلَكِنَّنَا لَمْ نُحَقِّقْهَا وَلَمْ نَقُلْهَا، فَإِنَّ اللَّهَ يَغْفِرُ لَنَا. هَذَا يُشَجِّعُنَا عَلَى السَّيْطَرَةِ عَلَى أَفْكَارِنَا وَالتَّوَجُّهِ نَحْوَ الْخَيْرِ."
      },
      "wo": {
        "question": "Lan la Yàlla jéggal umma Yonnant bi Muhammad (jamm ak xéewal ci moom)?",
        "options": [
          "Xalaat yu bon yi, su ñu ko deful walla wax ko.",
          "Bàkkaar yépp.",
          "Bàkkaar yu tuuti yi rekk.",
          "Dara."
        ],
        "reponse_correcte": "Xalaat yu bon yi, su ñu ko deful walla wax ko.",
        "explication": "Lii ab yërmande bu mag la ci Yàlla (Subhaanahu wa Ta'aala)! Loolu dafa tekki ne su ñu amee ay xalaat yu bon, waaye ñu deful ko te waxul ko, Yàlla dina ñu jéggal. Loolu dafa ñu digal ci saytu sunu xalaat yi ak ci jëm ci lu baax."
      }
    }
  },
  {
    "id": 427,
    "categorie": "Hadith & Sunnah",
    "niveau": "Avancé",
    "question": "Qui est le véritable fort selon le Prophète Muhammad (paix et bénédictions sur lui) ?",
    "options": [
      "Celui qui gagne tous les combats.",
      "Celui qui a beaucoup de muscles.",
      "Celui qui se maîtrise en cas de colère.",
      "Celui qui est le plus intelligent."
    ],
    "reponse_correcte": "Celui qui se maîtrise en cas de colère.",
    "explication": "Le vrai courage n'est pas de vaincre les autres par la force physique, mais de maîtriser ses propres émotions, surtout la colère. C'est un signe de sagesse et de force intérieure qui plaît beaucoup à Allah.",
    "source": "1200 hadiths à mémoriser - paroles prophétiques",
    "tags": [
      "hadith_sunnah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هُوَ الْقَوِيُّ الْحَقِيقِيُّ حَسَبَ قَوْلِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "مَنْ يَفُوزُ بِجَمِيعِ الْمَعَارِكِ.",
          "مَنْ لَهُ عَضَلَاتٌ كَثِيرَةٌ.",
          "مَنْ يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.",
          "مَنْ هُوَ الْأَذْكَى."
        ],
        "reponse_correcte": "مَنْ يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.",
        "explication": "الشَّجَاعَةُ الْحَقِيقِيَّةُ لَيْسَتْ فِي هَزِيمَةِ الْآخَرِينَ بِالْقُوَّةِ الْبَدَنِيَّةِ، بَلْ فِي السَّيْطَرَةِ عَلَى عِوَاطِفِكَ الْخَاصَّةِ، خَاصَّةً الْغَضَبَ. إِنَّهَا عَلَامَةٌ عَلَى الْحِكْمَةِ وَالْقُوَّةِ الدَّاخِلِيَّةِ الَّتِي تُحِبُّهَا اللَّهُ كَثِيرًا."
      },
      "wo": {
        "question": "Kan mooy doole bu dëggu ji ni Yonnant bi Muhammad (jamm ak xéewal ci moom) waxe?",
        "options": [
          "Ki daan ci xeex yépp.",
          "Ki am yaram bu dëgër.",
          "Ki saytu boppam ci feebar.",
          "Ki gën a xel."
        ],
        "reponse_correcte": "Ki saytu boppam ci feebar.",
        "explication": "Doole bu dëggu ji du ci daan yeneen ñi ci doole yaram, waaye ci saytu sa bët, rawatina feebar. Ab ciiro la ci hikma ak doole gu biir gi Yàlla bëgg lool."
      }
    }
  },
  {
    "id": 428,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien y a-t-il de piliers de l'Islam ?",
    "options": [
      "Trois",
      "Quatre",
      "Cinq",
      "Six"
    ],
    "reponse_correcte": "Cinq",
    "explication": "Les piliers de l'Islam sont les fondations de notre belle religion, et ils sont au nombre de cinq.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَرْكَانِ الإِسْلَامِ؟",
        "options": [
          "ثَلَاثَةٌ",
          "أَرْبَعَةٌ",
          "خَمْسَةٌ",
          "سِتَّةٌ"
        ],
        "reponse_correcte": "خَمْسَةٌ",
        "explication": "أَرْكَانُ الإِسْلَامِ هِيَ أَسَاسُ دِينِنَا الجَمِيلِ، وَعَدَدُهَا خَمْسَةٌ."
      },
      "wo": {
        "question": "Ñaata ponk la Lislaam am?",
        "options": [
          "Ñett",
          "Ñeent",
          "Juróom",
          "Juróom-benn"
        ],
        "reponse_correcte": "Juróom",
        "explication": "Ponki Lislaam ñoo di yëf yi gën a am solo ci sunu diine ju rafet ji, te ñoo ngi juróom."
      }
    }
  },
  {
    "id": 429,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que signifie la Shahada (l'attestation de foi) ?",
    "options": [
      "Croire en Allah seulement",
      "Croire en Allah et en Ses Prophètes",
      "Croire qu'il n'y a de dieu qu'Allah et que Muhammad est Son Messager",
      "Croire au Jour du Jugement"
    ],
    "reponse_correcte": "Croire qu'il n'y a de dieu qu'Allah et que Muhammad est Son Messager",
    "explication": "La Shahada est la clé de l'Islam, elle signifie que nous attestons qu'il n'y a de divinité digne d'adoration qu'Allah, et que Muhammad est Son serviteur et Messager.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا تَعْنِي الشَّهَادَةُ (شَهَادَةُ الإِيمَانِ)؟",
        "options": [
          "الإِيمَانُ بِاللَّهِ فَقَطْ",
          "الإِيمَانُ بِاللَّهِ وَبِأَنْبِيَائِهِ",
          "الإِيمَانُ بِأَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
          "الإِيمَانُ بِيَوْمِ القِيَامَةِ"
        ],
        "reponse_correcte": "الإِيمَانُ بِأَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        "explication": "الشَّهَادَةُ هِيَ مِفْتَاحُ الإِسْلَامِ، وَتَعْنِي أَنَّنَا نَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ."
      },
      "wo": {
        "question": "Lan mooy Shahada (seedeel gi)?",
        "options": [
          "Gëm Yàlla rekk",
          "Gëm Yàlla ak Yonentam yi",
          "Gëm ne amul jëkkër lu dul Yàlla te Muhammad mooy Yonentam",
          "Gëm Bésu Àllaaxira"
        ],
        "reponse_correcte": "Gëm ne amul jëkkër lu dul Yàlla te Muhammad mooy Yonentam",
        "explication": "Shahada mooy càmmiñu Lislaam, mooy seedeel ne amul jëkkër lu dul Yàlla, te Muhammad mooy Jaamam ak Yonentam."
      }
    }
  },
  {
    "id": 430,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quelle est la première épouse du Prophète Muhammad (paix et bénédictions sur lui) mentionnée dans le livre ?",
    "options": [
      "Aïcha bint Abi Bakr",
      "Khadija bint Khuwaylid",
      "Hafsa bint Umar",
      "Zaynab bint Khuzaymah"
    ],
    "reponse_correcte": "Khadija bint Khuwaylid",
    "explication": "Khadija (qu'Allah l'agrée) fut la première épouse du Prophète Muhammad (paix et bénédictions sur lui) et la mère de la plupart de ses enfants.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ هِيَ أَوَّلُ زَوْجَةٍ لِلنَّبِيِّ مُحَمَّدٍ ﷺ ذُكِرَتْ فِي الكِتَابِ؟",
        "options": [
          "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ",
          "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
          "حَفْصَةُ بِنْتُ عُمَرَ",
          "زَيْنَبُ بِنْتُ خُزَيْمَةَ"
        ],
        "reponse_correcte": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
        "explication": "خَدِيجَةُ رَضِيَ اللَّهُ عَنْهَا كَانَتْ أَوَّلَ زَوْجَاتِ النَّبِيِّ مُحَمَّدٍ ﷺ وَأُمَّ مُعْظَمِ أَوْلَادِهِ."
      },
      "wo": {
        "question": "Ana jabarug Yonent bi Muhammad (jàmm ak mucc yal nako Yàlla def ci moom) bu njëkk biñu wax ci téere bi?",
        "options": [
          "Aïcha bint Abi Bakr",
          "Khadija bint Khuwaylid",
          "Hafsa bint Umar",
          "Zaynab bint Khuzaymah"
        ],
        "reponse_correcte": "Khadija bint Khuwaylid",
        "explication": "Khadija (Yàlla na ko gërëm) mooy jabarug Yonent bi Muhammad (jàmm ak mucc yal nako Yàlla def ci moom) bu njëkk, te mooy yaayu ëpp ci doomam yi."
      }
    }
  },
  {
    "id": 431,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quelle invocation disons-nous avant de dormir ?",
    "options": [
      "\"Au nom d'Allah, je meurs et je vis.\"",
      "\"Louange à Allah qui nous a fait revivre après nous avoir fait mourir.\"",
      "\"Ô Allah, c'est par Toi que nous nous réveillons.\"",
      "\"Ô Allah, je cherche refuge auprès de Toi contre le mal de ce que Tu as créé.\""
    ],
    "reponse_correcte": "\"Au nom d'Allah, je meurs et je vis.\"",
    "explication": "C'est une belle invocation pour se souvenir d'Allah avant de dormir et se remettre à Lui.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "أَيُّ دُعَاءٍ نَقُولُهُ قَبْلَ النَّوْمِ؟",
        "options": [
          "\"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.\"",
          "\"الحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا.\"",
          "\"اللَّهُمَّ بِكَ أَصْبَحْنَا.\"",
          "\"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.\""
        ],
        "reponse_correcte": "\"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.\"",
        "explication": "هَذَا دُعَاءٌ جَمِيلٌ لِنَتَذَكَّرَ اللَّهَ قَبْلَ النَّوْمِ وَنُسَلِّمَ أَنْفُسَنَا إِلَيْهِ."
      },
      "wo": {
        "question": "Ana ñaan giñuy wax buñuy tëdd?",
        "options": [
          "\"Ci sa tur, Yàlla, laay dee tey dund.\"",
          "\"Alhamdoulillah liñu dundal ginnaaw biñu dee.\"",
          "\"Yàlla, ci yaw lañuy yewwu.\"",
          "\"Yàlla, dama lay sàkku ci yaw ci bonn bi nga sàkk.\""
        ],
        "reponse_correcte": "\"Ci sa tur, Yàlla, laay dee tey dund.\"",
        "explication": "Lii mooy ñaan gu rafet ngir fàttaliku Yàlla buñuy tëdd te jébbalu ci Moom."
      }
    }
  },
  {
    "id": 432,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Parmi les choses suivantes, laquelle n'invalide PAS les ablutions (Wudu) ?",
    "options": [
      "Uriner ou déféquer",
      "Émettre des gaz",
      "Manger de la viande de chameau",
      "Manger de la viande de poulet"
    ],
    "reponse_correcte": "Manger de la viande de poulet",
    "explication": "Manger de la viande de poulet est permis et n'invalide pas les ablutions. Les autres actions mentionnées sont des annulations des ablutions.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مِنْ بَيْنِ الأُمُورِ التَّالِيَةِ، أَيُّهَا لَا يُبْطِلُ الوُضُوءَ؟",
        "options": [
          "البَوْلُ أَوِ الغَائِطُ",
          "خُرُوجُ الرِّيحِ",
          "أَكْلُ لَحْمِ الجَمَلِ",
          "أَكْلُ لَحْمِ الدَّجَاجِ"
        ],
        "reponse_correcte": "أَكْلُ لَحْمِ الدَّجَاجِ",
        "explication": "أَكْلُ لَحْمِ الدَّجَاجِ مُبَاحٌ وَلَا يُبْطِلُ الوُضُوءَ. الأَفْعَالُ الأُخْرَى المَذْكُورَةُ هِيَ مِنْ نَوَاقِضِ الوُضُوءِ."
      },
      "wo": {
        "question": "Ci yëf yi, lan ci la bokk ci luy bañ a yàq jàngi (Wudu)?",
        "options": [
          "Sànni mbaa dëgg",
          "Génne ngelaw",
          "Lekk yàppu gémm",
          "Lekk yàppu ginaar"
        ],
        "reponse_correcte": "Lekk yàppu ginaar",
        "explication": "Lekk yàppu ginaar amul benn coono te du yàq jàngi. Yeneen yëf yiñu wax ci kaw ñoo yàq jàngi."
      }
    }
  },
  {
    "id": 433,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle est la première chose sur laquelle le serviteur sera jugé le Jour du Jugement ?",
    "options": [
      "La prière",
      "Le jeûne",
      "La zakat",
      "Le pèlerinage"
    ],
    "reponse_correcte": "La prière",
    "explication": "Notre Prophète Muhammad (paix et bénédictions sur lui) nous a enseigné que la prière est la première chose sur laquelle nous serons interrogés, car elle est le lien entre nous et Allah.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ أَوَّلُ مَا يُحَاسَبُ عَلَيْهِ العَبْدُ يَوْمَ القِيَامَةِ؟",
        "options": [
          "الصَّلَاةُ",
          "الصَّوْمُ",
          "الزَّكَاةُ",
          "الحَجُّ"
        ],
        "reponse_correcte": "الصَّلَاةُ",
        "explication": "عَلَّمَنَا نَبِيُّنَا مُحَمَّدٌ ﷺ أَنَّ الصَّلَاةَ هِيَ أَوَّلُ مَا نُسْأَلُ عَنْهُ، لِأَنَّهَا الصِّلَةُ بَيْنَنَا وَبَيْنَ اللَّهِ."
      },
      "wo": {
        "question": "Lan mooy yëf bu njëkk biñuy laaj jaam bi ci Bésu Àllaaxira?",
        "options": [
          "Julli gi",
          "Woor gi",
          "Jakka gi",
          "Hajj gi"
        ],
        "reponse_correcte": "Julli gi",
        "explication": "Yonent bi Muhammad (jàmm ak mucc yal nako Yàlla def ci moom) wax nañu ne julli gi mooy yëf bu njëkk biñuy laaj, ndax mooy jokkoo bi ci sunu diggante ak Yàlla."
      }
    }
  },
  {
    "id": 434,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Qu'est-ce que la Zakat ?",
    "options": [
      "Une prière surérogatoire",
      "Un jeûne volontaire",
      "Une aumône obligatoire donnée aux pauvres",
      "Un pèlerinage facultatif"
    ],
    "reponse_correcte": "Une aumône obligatoire donnée aux pauvres",
    "explication": "La Zakat est une obligation pour les musulmans riches, c'est une part de leur richesse donnée aux pauvres et aux nécessiteux pour les aider.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ الزَّكَاةُ؟",
        "options": [
          "صَلَاةٌ نَافِلَةٌ",
          "صَوْمٌ تَطَوُّعِيٌّ",
          "صَدَقَةٌ وَاجِبَةٌ تُعْطَى لِلْفُقَرَاءِ",
          "حَجٌّ اخْتِيَارِيٌّ"
        ],
        "reponse_correcte": "صَدَقَةٌ وَاجِبَةٌ تُعْطَى لِلْفُقَرَاءِ",
        "explication": "الزَّكَاةُ وَاجِبَةٌ عَلَى المُسْلِمِينَ الأَغْنِيَاءِ، وَهِيَ جُزْءٌ مِنْ ثَرْوَتِهِمْ يُعْطَى لِلْفُقَرَاءِ وَالمَسَاكِينِ لِمُسَاعَدَتِهِمْ."
      },
      "wo": {
        "question": "Lan mooy Jakka?",
        "options": [
          "Julli gu yees",
          "Woor gu bëgg",
          "Sarax su war a jox ñi amul",
          "Hajj bu bëgg"
        ],
        "reponse_correcte": "Sarax su war a jox ñi amul",
        "explication": "Jakka mooy lu war ci jullit yi am alal, mooy benn xaaj ci seen alal biñuy jox ñi amul ak ñi soxla ngir dimbali leen."
      }
    }
  },
  {
    "id": 435,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel est un bon comportement pour un enfant musulman à l'école ?",
    "options": [
      "Parler fort en classe",
      "Ne pas saluer ses camarades",
      "Jeter les déchets par terre",
      "Saluer ses camarades avec le Salam"
    ],
    "reponse_correcte": "Saluer ses camarades avec le Salam",
    "explication": "Saluer avec le Salam est une belle manière d'exprimer la paix et l'affection, et c'est une Sunnah de notre Prophète (paix et bénédictions sur lui).",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ أَحَدُ الآدَابِ الحَسَنَةِ لِلطِّفْلِ المُسْلِمِ فِي المَدْرَسَةِ؟",
        "options": [
          "التَّحَدُّثُ بِصَوْتٍ عَالٍ فِي الفَصْلِ",
          "عَدَمُ إِلقَاءِ التَّحِيَّةِ عَلَى الزُّمَلَاءِ",
          "رَمْيُ النِّفَايَاتِ عَلَى الأَرْضِ",
          "إِلقَاءُ التَّحِيَّةِ عَلَى الزُّمَلَاءِ بِالسَّلَامِ"
        ],
        "reponse_correcte": "إِلقَاءُ التَّحِيَّةِ عَلَى الزُّمَلَاءِ بِالسَّلَامِ",
        "explication": "إِلقَاءُ التَّحِيَّةِ بِالسَّلَامِ هِيَ طَرِيقَةٌ جَمِيلَةٌ لِلتَّعْبِيرِ عَنِ السَّلَامِ وَالمَحَبَّةِ، وَهِيَ سُنَّةٌ عَنْ نَبِيِّنَا ﷺ."
      },
      "wo": {
        "question": "Ana jikko ju baax ju doom ju jullit war a am ci daara?",
        "options": [
          "Wax lëg-lëg ci klas bi",
          "Bañ a nuyu sa morom",
          "Sànni mbalit ci suuf",
          "Nuyu sa morom ak Salaam"
        ],
        "reponse_correcte": "Nuyu sa morom ak Salaam",
        "explication": "Nuyu ak Salaam mooy jikko ju rafet ju wone jàmm ak mbëggeel, te mooy Sunna Yonent bi (jàmm ak mucc yal nako Yàlla def ci moom)."
      }
    }
  },
  {
    "id": 436,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Que disons-nous après avoir entendu l'Adhan (l'appel à la prière) ?",
    "options": [
      "\"Ô Allah, Toi le Seigneur de cet appel parfait et de la prière établie, donne à Muhammad la Wasila et la Fadhila.\"",
      "\"Louange à Allah qui nous a fait revivre après nous avoir fait mourir.\"",
      "\"Au nom d'Allah, je meurs et je vis.\"",
      "\"Ô Allah, c'est par Toi que nous nous réveillons et c'est par Toi que nous nous endormons.\""
    ],
    "reponse_correcte": "\"Ô Allah, Toi le Seigneur de cet appel parfait et de la prière établie, donne à Muhammad la Wasila et la Fadhila.\"",
    "explication": "Cette invocation spéciale après l'Adhan est très importante et nous rapproche du Prophète (paix et bénédictions sur lui) car elle nous promet son intercession.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ بَعْدَ سَمَاعِ الأَذَانِ؟",
        "options": [
          "\"اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ القَائِمَةِ آتِ مُحَمَّدًا الوَسِيلَةَ وَالفَضِيلَةَ.\"",
          "\"الحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا.\"",
          "\"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.\"",
          "\"اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا.\""
        ],
        "reponse_correcte": "\"اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ القَائِمَةِ آتِ مُحَمَّدًا الوَسِيلَةَ وَالفَضِيلَةَ.\"",
        "explication": "هَذَا الدُّعَاءُ الخَاصُّ بَعْدَ الأَذَانِ مُهِمٌّ جِدًّا وَيُقَرِّبُنَا مِنَ النَّبِيِّ ﷺ لِأَنَّهُ يَعِدُنَا بِشَفَاعَتِهِ."
      },
      "wo": {
        "question": "Lan lañuy wax buñu déggee Azaan (woo gi ci julli)?",
        "options": [
          "\"Yàlla, Yaw Boroom woo gi mat ak julli gi taxaw, jox Muhammad Wasila ak Fadhila.\"",
          "\"Alhamdoulillah liñu dundal ginnaaw biñu dee.\"",
          "\"Ci sa tur, Yàlla, laay dee tey dund.\"",
          "\"Yàlla, ci yaw lañuy yewwu te ci yaw lañuy tëdd.\""
        ],
        "reponse_correcte": "\"Yàlla, Yaw Boroom woo gi mat ak julli gi taxaw, jox Muhammad Wasila ak Fadhila.\"",
        "explication": "Ñaan gii ci ginnaaw Azaan am na solo lool te dinañu rafetal sunu jokkoo ak Yonent bi (jàmm ak mucc yal nako Yàlla def ci moom) ndax dinañu am ci moom safaaro."
      }
    }
  },
  {
    "id": 437,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Pendant combien de temps le Prophète Nuh (paix sur lui) a-t-il appelé son peuple à Allah ?",
    "options": [
      "100 ans",
      "500 ans",
      "950 ans",
      "1000 ans"
    ],
    "reponse_correcte": "950 ans",
    "explication": "Le Prophète Nuh (paix sur lui) a fait preuve d'une patience incroyable en appelant son peuple à Allah pendant 950 ans, sans jamais se décourager.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ سَنَةً دَعَا النَّبِيُّ نُوحٌ عَلَيْهِ السَّلَامُ قَوْمَهُ إِلَى اللَّهِ؟",
        "options": [
          "١٠٠ سَنَةٍ",
          "٥٠٠ سَنَةٍ",
          "٩٥٠ سَنَةٍ",
          "١٠٠٠ سَنَةٍ"
        ],
        "reponse_correcte": "٩٥٠ سَنَةٍ",
        "explication": "لَقَدْ أَظْهَرَ النَّبِيُّ نُوحٌ عَلَيْهِ السَّلَامُ صَبْرًا عَظِيمًا فِي دَعْوَةِ قَوْمِهِ إِلَى اللَّهِ لِمُدَّةِ ٩٥٠ سَنَةً، دُونَ أَنْ يَيْأَسَ أَبَدًا."
      },
      "wo": {
        "question": "Ñaata at la Yonent bi Nuh (jàmm yal na ci moom) woo askanam ci Yàlla?",
        "options": [
          "100 at",
          "500 at",
          "950 at",
          "1000 at"
        ],
        "reponse_correcte": "950 at",
        "explication": "Yonent bi Nuh (jàmm yal na ci moom) wone na muñ gu màgg ci woo askanam ci Yàlla ci 950 at, te muccul a sonn."
      }
    }
  },
  {
    "id": 438,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel est un bon comportement à adopter avant de manger ?",
    "options": [
      "Manger avec la main gauche",
      "Ne pas dire \"Bismillah\"",
      "Manger ce qui est devant soi",
      "Critiquer la nourriture"
    ],
    "reponse_correcte": "Manger ce qui est devant soi",
    "explication": "Le Prophète (paix et bénédictions sur lui) nous a appris à manger avec la main droite, à dire \"Bismillah\" et à manger ce qui est proche de nous, sans gaspiller ni critiquer.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ أَدَبٌ حَسَنٌ يَنْبَغِي اعْتِمَادُهُ قَبْلَ الأَكْلِ؟",
        "options": [
          "الأَكْلُ بِاليَدِ اليُسْرَى",
          "عَدَمُ قَوْلِ \"بِسْمِ اللَّهِ\"",
          "الأَكْلُ مِمَّا أَمَامَكَ",
          "انْتِقَادُ الطَّعَامِ"
        ],
        "reponse_correcte": "الأَكْلُ مِمَّا أَمَامَكَ",
        "explication": "عَلَّمَنَا النَّبِيُّ ﷺ أَنْ نَأْكُلَ بِاليَدِ اليُمْنَى، وَأَنْ نَقُولَ \"بِسْمِ اللَّهِ\"، وَأَنْ نَأْكُلَ مِمَّا هُوَ قَرِيبٌ مِنَّا، دُونَ إِسْرَافٍ أَوْ انْتِقَادٍ."
      },
      "wo": {
        "question": "Ana jikko ju baax juñu war a am buñuy lekk?",
        "options": [
          "Lekk ak loxo gu càmmooñ",
          "Bañ a wax \"Bismillah\"",
          "Lekk li nekk ci sa kanam",
          "Tëxal dund bi"
        ],
        "reponse_correcte": "Lekk li nekk ci sa kanam",
        "explication": "Yonent bi (jàmm ak mucc yal nako Yàlla def ci moom) jàngal nañu ne dañuy lekk ak loxo gu ndeyjoor, wax \"Bismillah\" te lekk li nekk ci sunu kanam, bañ a yàq mbaa tëxal dund bi."
      }
    }
  },
  {
    "id": 439,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Quelle est l'invocation connue sous le nom de \"Sayyid al-Istighfar\" (le maître des demandes de pardon) ?",
    "options": [
      "\"Ô Allah, Tu es mon Seigneur, il n'y a de dieu que Toi. Tu m'as créé et je suis Ton serviteur...\"",
      "\"Astaghfirullah al-Azim wa atubu ilayh.\"",
      "\"Subhanallah wa bihamdih, Subhanallah al-Azim.\"",
      "\"La ilaha illa Anta Subhanaka inni kuntu minaz-zalimin.\""
    ],
    "reponse_correcte": "\"Ô Allah, Tu es mon Seigneur, il n'y a de dieu que Toi. Tu m'as créé et je suis Ton serviteur...\"",
    "explication": "Sayyid al-Istighfar est une invocation très complète et puissante pour demander pardon à Allah, et il est recommandé de la réciter le matin et le soir.",
    "source": "Les devoirs et obligations du jeune musulman (Fiqh de base)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ الدُّعَاءُ المَعْرُوفُ بِاسْمِ \"سَيِّدِ الاسْتِغْفَارِ\"؟",
        "options": [
          "\"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...\"",
          "\"أَسْتَغْفِرُ اللَّهَ العَظِيمَ وَأَتُوبُ إِلَيْهِ.\"",
          "\"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ العَظِيمِ.\"",
          "\"لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.\""
        ],
        "reponse_correcte": "\"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...\"",
        "explication": "سَيِّدُ الاسْتِغْفَارِ هُوَ دُعَاءٌ شَامِلٌ وَقَوِيٌّ لِطَلَبِ المَغْفِرَةِ مِنَ اللَّهِ، وَيُسْتَحَبُّ قِرَاءَتُهُ فِي الصَّبَاحِ وَالمَسَاءِ."
      },
      "wo": {
        "question": "Ana ñaan giñuy wax \"Sayyid al-Istighfar\" (kilifa giy sàkku njëggal)?",
        "options": [
          "\"Yàlla, Yaw yaay sama Boroom, amul jëkkër lu dul Yaw. Yaw ya ma sàkk te man sama jaam laa...\"",
          "\"Astaghfirullah al-Azim wa atubu ilayh.\"",
          "\"Subhanallah wa bihamdih, Subhanallah al-Azim.\"",
          "\"La ilaha illa Anta Subhanaka inni kuntu minaz-zalimin.\""
        ],
        "reponse_correcte": "\"Yàlla, Yaw yaay sama Boroom, amul jëkkër lu dul Yaw. Yaw ya ma sàkk te man sama jaam laa...\"",
        "explication": "Sayyid al-Istighfar mooy ñaan gu mat seuk te am doole ngir sàkku njëggal ci Yàlla, te dañuy diggal ñu koy jàng suba ak ngoon."
      }
    }
  },
  {
    "id": 440,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Selon le livre, quel est le but le plus important de la lecture du Coran ?",
    "options": [
      "Le lire rapidement pour finir beaucoup de chapitres.",
      "Le réciter avec une belle voix sans comprendre.",
      "Méditer sur ses significations et les comprendre.",
      "Le garder dans un endroit propre et élevé."
    ],
    "reponse_correcte": "Méditer sur ses significations et les comprendre.",
    "explication": "Le livre nous enseigne que le Coran a été révélé pour que nous méditions sur ses versets, comprenions ses significations et agissions en conséquence. C'est le but le plus grand de sa lecture.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "وَفْقًا لِلْكِتَابِ، مَا هُوَ الْهَدَفُ الْأَهَمُّ مِنْ قِرَاءَةِ الْقُرْآنِ؟",
        "options": [
          "قِرَاءَتُهُ بِسُرْعَةٍ لِإِنْهَاءِ الْكَثِيرِ مِنَ الْأَجْزَاءِ.",
          "تِلَاوَتُهُ بِصَوْتٍ جَمِيلٍ دُونَ فَهْمٍ.",
          "التَّدَبُّرُ فِي مَعَانِيهِ وَفَهْمُهَا.",
          "حِفْظُهُ فِي مَكَانٍ نَظِيفٍ وَمُرْتَفِعٍ."
        ],
        "reponse_correcte": "التَّدَبُّرُ فِي مَعَانِيهِ وَفَهْمُهَا.",
        "explication": "يُعَلِّمُنَا الْكِتَابُ أَنَّ الْقُرْآنَ نَزَلَ لِنَتَدَبَّرَ آيَاتِهِ، وَنَفْهَمَ مَعَانِيهِ، وَنَعْمَلَ بِمُقْتَضَاهَا. هَذَا هُوَ الْهَدَفُ الْأَسْمَى مِنْ قِرَاءَتِهِ."
      },
      "wo": {
        "question": "Ni mel ni bind bi, lan mooy njariñ li gëna am solo ci jàng Alxuraan?",
        "options": [
          "Jàng ko gaaw ngir jexal ay baatu yu bare.",
          "Jàng ko ak baat bu neex te xamoo ko.",
          "Xool ci ay njariñam te xam ko.",
          "Fàggu ko ci barab bu set te kawe."
        ],
        "reponse_correcte": "Xool ci ay njariñam te xam ko.",
        "explication": "Téere bi dafa ñu jàngal ne Alxuraan dafa wàcc ngir ñu xool ci ay aayoom, te xam ay njariñam te def li mu diggal. Loolu mooy njariñ li gëna am solo ci jàng ko."
      }
    }
  },
  {
    "id": 441,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "La sourate Al-Qamar (54:17) dit : \"Et Nous avons certes rendu le Coran facile pour la méditation. Y a-t-il donc quelqu'un pour méditer ?\" Que nous enseigne ce verset sur le Coran ?",
    "options": [
      "Qu'il est difficile à comprendre pour la plupart des gens.",
      "Qu'il est facile à réciter mais difficile à appliquer.",
      "Qu'il est facile à mémoriser mais compliqué à méditer.",
      "Qu'il est facile à réciter, à mémoriser, à comprendre et à appliquer."
    ],
    "reponse_correcte": "Qu'il est facile à réciter, à mémoriser, à comprendre et à appliquer.",
    "explication": "Ce verset nous montre que le Coran est facile dans tous ses aspects : la récitation, la mémorisation, la compréhension et l'application. Allah nous a facilité son chemin pour que nous puissions en tirer profit.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "تَقُولُ سُورَةُ الْقَمَرِ (54:17): ﴿وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ﴾ مَاذَا يُعَلِّمُنَا هَذَا الْآيَةُ عَنِ الْقُرْآنِ؟",
        "options": [
          "أَنَّهُ صَعْبُ الْفَهْمِ لِأَغْلَبِ النَّاسِ.",
          "أَنَّهُ سَهْلُ التِّلَاوَةِ وَلَكِنْ صَعْبُ التَّطْبِيقِ.",
          "أَنَّهُ سَهْلُ الْحِفْظِ وَلَكِنْ مُعَقَّدُ التَّدَبُّرِ.",
          "أَنَّهُ سَهْلُ التِّلَاوَةِ وَالْحِفْظِ وَالْفَهْمِ وَالتَّطْبِيقِ."
        ],
        "reponse_correcte": "أَنَّهُ سَهْلُ التِّلَاوَةِ وَالْحِفْظِ وَالْفَهْمِ وَالتَّطْبِيقِ.",
        "explication": "تُبَيِّنُ لَنَا هَذِهِ الْآيَةُ أَنَّ الْقُرْآنَ سَهْلٌ فِي جَمِيعِ جَوَانِبِهِ: التِّلَاوَةِ، وَالْحِفْظِ، وَالْفَهْمِ، وَالتَّطْبِيقِ. لَقَدْ يَسَّرَ اللَّهُ لَنَا طَرِيقَهُ لِنَسْتَفِيدَ مِنْهُ."
      },
      "wo": {
        "question": "Suura Al-Qamar (54:17) nee na: \"Te dëgg-dëgg, def nañu Alxuraan mu yomb ci xalaat. Ndax am na ku ci xalaat?\" Lan la aayoo jàngale ci Alxuraan?",
        "options": [
          "Ne dafa jafe ci ñu bare ñu ko xam.",
          "Ne dafa yomb ci jàng te dafa jafe ci def li mu diggal.",
          "Ne dafa yomb ci xam ci xol te dafa jafe ci xalaat.",
          "Ne dafa yomb ci jàng, ci xam ci xol, ci xam te ci def li mu diggal."
        ],
        "reponse_correcte": "Ne dafa yomb ci jàng, ci xam ci xol, ci xam te ci def li mu diggal.",
        "explication": "Aayoo dafa ñu wone ne Alxuraan dafa yomb ci léppam: ci jàng, ci xam ci xol, ci xam te ci def li mu diggal. Yàlla dafa ñu yombal yoonam ngir ñu mën ci am njariñ."
      }
    }
  },
  {
    "id": 442,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Le Coran est décrit comme une lumière, une bénédiction, une guidance et une miséricorde pour qui ?",
    "options": [
      "Seulement pour les Arabes.",
      "Seulement pour les prophètes.",
      "Pour tous les mondes (l'humanité et les djinns).",
      "Pour ceux qui le mémorisent entièrement."
    ],
    "reponse_correcte": "Pour tous les mondes (l'humanité et les djinns).",
    "explication": "Allah a fait du Coran une lumière et une guidance pour toute l'humanité et les djinns, afin qu'ils puissent trouver le droit chemin et la miséricorde.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "يُوصَفُ الْقُرْآنُ بِأَنَّهُ نُورٌ وَبَرَكَةٌ وَهُدًى وَرَحْمَةٌ لِمَنْ؟",
        "options": [
          "لِلْعَرَبِ فَقَطْ.",
          "لِلْأَنْبِيَاءِ فَقَطْ.",
          "لِلْعَالَمِينَ أَجْمَعِينَ (الْإِنْسِ وَالْجِنِّ).",
          "لِمَنْ يَحْفَظُهُ كَامِلًا."
        ],
        "reponse_correcte": "لِلْعَالَمِينَ أَجْمَعِينَ (الْإِنْسِ وَالْجِنِّ).",
        "explication": "جَعَلَ اللَّهُ الْقُرْآنَ نُورًا وَهُدًى لِجَمِيعِ الْبَشَرِ وَالْجِنِّ، لِكَيْ يَجِدُوا الطَّرِيقَ الصَّحِيحَ وَالرَّحْمَةَ."
      },
      "wo": {
        "question": "Alxuraan dafa ñu ko wax ne dafa leer, dafa barkeel, dafa yombal te dafa yëram ci kan?",
        "options": [
          "Ci Arab yi rekk.",
          "Ci Yonent yi rekk.",
          "Ci àdduna yépp (nit ñi ak jinne yi).",
          "Ci ñi ko xam ci xol yépp."
        ],
        "reponse_correcte": "Ci àdduna yépp (nit ñi ak jinne yi).",
        "explication": "Yàlla def na Alxuraan mu leer te mu yombal ci nit ñi ak jinne yi yépp, ngir ñu mën ci am yoon wu jub te am yërmande."
      }
    }
  },
  {
    "id": 443,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Contrairement aux livres précédents, qu'est-ce qui est spécial à propos du Coran concernant sa préservation ?",
    "options": [
      "Il a été préservé par les anges.",
      "Allah a promis de le préserver Lui-même.",
      "Les prophètes l'ont écrit de leurs propres mains.",
      "Il a été transmis oralement sans être écrit."
    ],
    "reponse_correcte": "Allah a promis de le préserver Lui-même.",
    "explication": "Allah a promis de préserver le Coran, contrairement aux livres précédents qui ont été altérés. C'est une bénédiction pour nous, car nous avons le livre d'Allah tel qu'il a été révélé.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "بِخِلَافِ الْكُتُبِ السَّابِقَةِ، مَا الْمُمَيِّزُ فِي الْقُرْآنِ بِخُصُوصِ حِفْظِهِ؟",
        "options": [
          "لَقَدْ حَفِظَتْهُ الْمَلَائِكَةُ.",
          "وَعَدَ اللَّهُ بِحِفْظِهِ بِنَفْسِهِ.",
          "كَتَبَهُ الْأَنْبِيَاءُ بِأَيْدِيهِمْ.",
          "نُقِلَ شَفَوِيًّا دُونَ كِتَابَةٍ."
        ],
        "reponse_correcte": "وَعَدَ اللَّهُ بِحِفْظِهِ بِنَفْسِهِ.",
        "explication": "وَعَدَ اللَّهُ بِحِفْظِ الْقُرْآنِ، بِخِلَافِ الْكُتُبِ السَّابِقَةِ الَّتِي تَعَرَّضَتْ لِلتَّحْرِيفِ. هَذِهِ نِعْمَةٌ لَنَا، لِأَنَّ لَدَيْنَا كِتَابَ اللَّهِ كَمَا أُنْزِلَ."
      },
      "wo": {
        "question": "Ni mel ni téere yi jiitu, lan mooy li gëna wutale Alxuraan ci wallu aar gi?",
        "options": [
          "Malaaka yi ñoo ko aar.",
          "Yàlla moo dige ne moom ci boppam dina ko aar.",
          "Yonent yi ñoo ko bind ak seen loxo.",
          "Dafa ñu ko jox ci gémmiñ te bindu ñu ko."
        ],
        "reponse_correcte": "Yàlla moo dige ne moom ci boppam dina ko aar.",
        "explication": "Yàlla dige na ne dina aar Alxuraan, ni mel ni téere yi jiitu yi ñu soppi woon. Loolu mooy barke ci ñun, ndax am nañu téere Yàlla bi ni mu wàccee."
      }
    }
  },
  {
    "id": 444,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Le livre \"Awalu Marra Atadabbar al-Quran\" est présenté comme une \"clé\" pour quoi ?",
    "options": [
      "Pour apprendre l'arabe rapidement.",
      "Pour mémoriser le Coran sans effort.",
      "Pour ouvrir la porte à la méditation du Coran et aux livres d'exégèse.",
      "Pour devenir un grand savant en sciences islamiques."
    ],
    "reponse_correcte": "Pour ouvrir la porte à la méditation du Coran et aux livres d'exégèse.",
    "explication": "Ce livre est comme une clé qui nous aide à commencer notre voyage de méditation du Coran et nous encourage à explorer les livres d'exégèse avec plus de confiance et de compréhension.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "يُقَدَّمُ كِتَابُ \"أَوَّلُ مَرَّةٍ أَتَدَبَّرُ الْقُرْآنَ\" كَمِفْتَاحٍ لِمَاذَا؟",
        "options": [
          "لِتَعَلُّمِ اللُّغَةِ الْعَرَبِيَّةِ بِسُرْعَةٍ.",
          "لِحِفْظِ الْقُرْآنِ دُونَ جُهْدٍ.",
          "لِفَتْحِ بَابِ تَدَبُّرِ الْقُرْآنِ وَكُتُبِ التَّفْسِيرِ.",
          "لِتُصْبِحَ عَالِمًا كَبِيرًا فِي الْعُلُومِ الْإِسْلَامِيَّةِ."
        ],
        "reponse_correcte": "لِفَتْحِ بَابِ تَدَبُّرِ الْقُرْآنِ وَكُتُبِ التَّفْسِيرِ.",
        "explication": "هَذَا الْكِتَابُ بِمَثَابَةِ الْمِفْتَاحِ الَّذِي يُسَاعِدُنَا عَلَى بَدْءِ رِحْلَةِ تَدَبُّرِ الْقُرْآنِ وَيُشَجِّعُنَا عَلَى اسْتِكْشَافِ كُتُبِ التَّفْسِيرِ بِمَزِيدٍ مِنَ الثِّقَةِ وَالْفَهْمِ."
      },
      "wo": {
        "question": "Téere bi \"Awalu Marra Atadabbar al-Quran\" dafa ñu ko wone ni \"caabi\" ci lan?",
        "options": [
          "Ngir jàng Arab gaaw.",
          "Ngir xam Alxuraan ci xol te amul jafe-jafe.",
          "Ngir ubbi buntu xalaat ci Alxuraan ak téere Tafsir yi.",
          "Ngir nekk borom xam-xam bu mag ci xam-xami Lislaam."
        ],
        "reponse_correcte": "Ngir ubbi buntu xalaat ci Alxuraan ak téere Tafsir yi.",
        "explication": "Téere bi dafa mel ni caabi bi ñuy ubbi ci sunu yoonu xalaat ci Alxuraan te dafa ñu xëcc ngir ñu xool ci téere Tafsir yi ak gëna wóor te gëna xam."
      }
    }
  },
  {
    "id": 445,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Lorsque tu lis le Coran pour méditer, que te conseille le livre de faire si tu trouves une sourate difficile ?",
    "options": [
      "Arrêter de lire et passer à autre chose.",
      "La lire rapidement pour ne pas perdre de temps.",
      "Ne pas la lire du tout.",
      "Ne pas t'énerver et continuer à méditer, car Allah t'ouvrira les portes de la compréhension."
    ],
    "reponse_correcte": "Ne pas t'énerver et continuer à méditer, car Allah t'ouvrira les portes de la compréhension.",
    "explication": "Le livre nous encourage à ne pas nous décourager si nous trouvons des difficultés. Avec patience et persévérance, Allah nous aidera à comprendre et à méditer Ses paroles.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "عِنْدَمَا تَقْرَأُ الْقُرْآنَ لِلتَّدَبُّرِ، مَاذَا يَنْصَحُكَ الْكِتَابُ أَنْ تَفْعَلَ إِذَا وَجَدْتَ سُورَةً صَعْبَةً؟",
        "options": [
          "تَتَوَقَّفُ عَنِ الْقِرَاءَةِ وَتَنْتَقِلُ إِلَى شَيْءٍ آخَرَ.",
          "تَقْرَأُهَا بِسُرْعَةٍ لِعَدَمِ إِضَاعَةِ الْوَقْتِ.",
          "لَا تَقْرَأُهَا أَبَدًا.",
          "لَا تَضْجَرُ وَتَسْتَمِرُّ فِي التَّدَبُّرِ، فَإِنَّ اللَّهَ سَيَفْتَحُ لَكَ أَبْوَابَ الْفَهْمِ."
        ],
        "reponse_correcte": "لَا تَضْجَرُ وَتَسْتَمِرُّ فِي التَّدَبُّرِ، فَإِنَّ اللَّهَ سَيَفْتَحُ لَكَ أَبْوَابَ الْفَهْمِ.",
        "explication": "يُشَجِّعُنَا الْكِتَابُ عَلَى عَدَمِ الْيَأْسِ إِذَا وَاجَهْنَا صُعُوبَاتٍ. بِالصَّبْرِ وَالْمُثَابَرَةِ، سَيُسَاعِدُنَا اللَّهُ عَلَى فَهْمِ كَلِمَاتِهِ وَتَدَبُّرِهَا."
      },
      "wo": {
        "question": "Su jàngee Alxuraan ngir xalaat, lan la téere bi la diggal nga def su fekkee am nga suura bu jafe?",
        "options": [
          "Bay jàng te dem ci yeneen.",
          "Jàng ko gaaw ngir bañ a yàq sa jamono.",
          "Bañ ko jàng sax.",
          "Bañ a mer te wéy ci xalaat, ndax Yàlla dina la ubbi buntu xam-xam."
        ],
        "reponse_correcte": "Bañ a mer te wéy ci xalaat, ndax Yàlla dina la ubbi buntu xam-xam.",
        "explication": "Téere bi dafa ñu xëcc ngir bañ a décourager su fekkee am nañu ay jafe-jafe. Ak muñ ak sax, Yàlla dina ñu dimbali ñu xam te xalaat ci ay kàddoom."
      }
    }
  },
  {
    "id": 446,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "La sourate Al-Fatiha a plusieurs noms. Lequel de ces noms n'est PAS mentionné dans le livre ?",
    "options": [
      "Umm Al-Kitab (La Mère du Livre).",
      "Al-Hamd (La Louange).",
      "Al-Baqarah (La Vache).",
      "Ash-Shafiyah (La Guérisseuse)."
    ],
    "reponse_correcte": "Al-Baqarah (La Vache).",
    "explication": "La sourate Al-Baqarah est une autre sourate du Coran, pas un nom d'Al-Fatiha. Al-Fatiha a de nombreux noms qui soulignent son importance, comme Umm Al-Kitab, Al-Hamd et Ash-Shafiyah.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِسُورَةِ الْفَاتِحَةِ عِدَّةُ أَسْمَاءٍ. أَيُّ هَذِهِ الْأَسْمَاءِ لَمْ يُذْكَرْ فِي الْكِتَابِ؟",
        "options": [
          "أُمُّ الْكِتَابِ.",
          "الْحَمْدُ.",
          "الْبَقَرَةُ.",
          "الشَّافِيَةُ."
        ],
        "reponse_correcte": "الْبَقَرَةُ.",
        "explication": "سُورَةُ الْبَقَرَةِ هِيَ سُورَةٌ أُخْرَى مِنَ الْقُرْآنِ، وَلَيْسَتْ اسْمًا لِلْفَاتِحَةِ. لِلْفَاتِحَةِ أَسْمَاءٌ كَثِيرَةٌ تُبْرِزُ أَهَمِّيَّتَهَا، مِثْلُ أُمِّ الْكِتَابِ، وَالْحَمْدِ، وَالشَّافِيَةِ."
      },
      "wo": {
        "question": "Suura Al-Fatiha am na ay tur yu bare. Ci tur yii, bi lan lañu waxul ci téere bi?",
        "options": [
          "Umm Al-Kitab (Ndèye Téere bi).",
          "Al-Hamd (Sant gi).",
          "Al-Baqarah (Nag gi).",
          "Ash-Shafiyah (Ki Faju)."
        ],
        "reponse_correcte": "Al-Baqarah (Nag gi).",
        "explication": "Suura Al-Baqarah mooy beneen suura ci Alxuraan, te du turu Al-Fatiha. Al-Fatiha am na ay tur yu bare yu wone soloom, ni mel ni Umm Al-Kitab, Al-Hamd ak Ash-Shafiyah."
      }
    }
  },
  {
    "id": 447,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Le Prophète Muhammad (paix et bénédictions sur lui) a dit qu'Al-Fatiha est la plus grande sourate du Coran. Quel est son autre nom mentionné dans ce contexte ?",
    "options": [
      "Al-Kahf (La Caverne).",
      "Al-Mulk (La Royauté).",
      "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
      "Yasin."
    ],
    "reponse_correcte": "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
    "explication": "Le Prophète (paix et bénédictions sur lui) a souligné la grandeur d'Al-Fatiha en l'appelant \"As-Sab' Al-Mathani\" et \"Le Grand Coran\", car elle est récitée dans chaque prière et contient les fondements de la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "قَالَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) إِنَّ الْفَاتِحَةَ أَعْظَمُ سُورَةٍ فِي الْقُرْآنِ. مَا اسْمُهَا الْآخَرُ الْمَذْكُورُ فِي هَذَا السِّيَاقِ؟",
        "options": [
          "الْكَهْفُ.",
          "الْمُلْكُ.",
          "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
          "يس."
        ],
        "reponse_correcte": "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
        "explication": "أَكَّدَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَلَى عَظَمَةِ الْفَاتِحَةِ بِتَسْمِيَتِهَا \"السَّبْعَ الْمَثَانِي\" وَ\"الْقُرْآنَ الْعَظِيمَ\"، لِأَنَّهَا تُتْلَى فِي كُلِّ صَلَاةٍ وَتَحْتَوِي عَلَى أُسُسِ الدِّينِ."
      },
      "wo": {
        "question": "Yonent bi Muhammad (jamm ak mucc ñoo ngi ci moom) nee na Al-Fatiha mooy suura bi gëna mag ci Alxuraan. Lan mooy beneen turam bi ñu wax ci loolu?",
        "options": [
          "Al-Kahf (Bàmbara gi).",
          "Al-Mulk (Nguur gi).",
          "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
          "Yasin."
        ],
        "reponse_correcte": "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
        "explication": "Yonent bi (jamm ak mucc ñoo ngi ci moom) wone na soloom Al-Fatiha bi mu ko woowee \"As-Sab' Al-Mathani\" ak \"Alxuraan bu Mag bi\", ndax dafa ñu ko jàng ci lépp lu ñu julli te dafa am ay cosaanu diine."
      }
    }
  },
  {
    "id": 448,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "La sourate Al-Fatiha commence par la croyance, puis l'adoration, et enfin la méthodologie. Quel verset indique l'adoration ?",
    "options": [
      "\"Louange à Allah, Seigneur des mondes.\"",
      "\"Le Tout Miséricordieux, le Très Miséricordieux.\"",
      "\"C'est Toi Seul que nous adorons, et c'est Toi Seul dont nous implorons le secours.\"",
      "\"Guide-nous dans le droit chemin.\""
    ],
    "reponse_correcte": "\"C'est Toi Seul que nous adorons, et c'est Toi Seul dont nous implorons le secours.\"",
    "explication": "Ce verset (Ayah 5) est le cœur de l'adoration dans Al-Fatiha, car il exprime notre soumission totale à Allah et notre dépendance envers Lui seul.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "تَبْدَأُ سُورَةُ الْفَاتِحَةِ بِالْعَقِيدَةِ، ثُمَّ الْعِبَادَةِ، ثُمَّ الْمَنْهَجِ. أَيُّ آيَةٍ تُشِيرُ إِلَى الْعِبَادَةِ؟",
        "options": [
          "﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ﴾",
          "﴿الرَّحْمَنِ الرَّحِيمِ﴾",
          "﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ﴾",
          "﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ﴾"
        ],
        "reponse_correcte": "﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ﴾",
        "explication": "هَذِهِ الْآيَةُ (الْآيَةُ 5) هِيَ قَلْبُ الْعِبَادَةِ فِي الْفَاتِحَةِ، لِأَنَّهَا تُعَبِّرُ عَنِ اسْتِسْلَامِنَا التَّامِّ لِلَّهِ وَاعْتِمَادِنَا عَلَيْهِ وَحْدَهُ."
      },
      "wo": {
        "question": "Suura Al-Fatiha dafa tàmbalee ak ngëm, boobu ñu def ci Yàlla, te ci gannaaw loolu ñu def ci yoon. Ci aayoo yii, bi lan mooy bi wone ñu def ci Yàlla?",
        "options": [
          "\"Sant na Yàlla, Boroom àdduna yépp.\"",
          "\"Ki yëram, Ki yëram lu nekk.\"",
          "\"Yaa ngi ñu def ci Yàlla, te Yaa ngi ñu ñaan ndimbal.\"",
          "\"Yombalal ñu ci yoon wu jub.\""
        ],
        "reponse_correcte": "\"Yaa ngi ñu def ci Yàlla, te Yaa ngi ñu ñaan ndimbal.\"",
        "explication": "Aayoo (Aaya 5) mooy xolu ñu def ci Yàlla ci Al-Fatiha, ndax dafa wone sunu jébbalu gu mat ci Yàlla ak sunu wéeru ci moom rekk."
      }
    }
  },
  {
    "id": 449,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Comment la fin de la sourate Al-Fatiha est-elle liée au début de la sourate Al-Baqarah ?",
    "options": [
      "Al-Fatiha se termine par une demande de guidance, et Al-Baqarah commence par la description des pieux qui suivent cette guidance.",
      "Al-Fatiha se termine par une prière pour la richesse, et Al-Baqarah commence par la mention des bienfaits matériels.",
      "Al-Fatiha se termine par une mise en garde contre les hypocrites, et Al-Baqarah commence par leur description.",
      "Il n'y a pas de lien direct entre la fin d'Al-Fatiha et le début d'Al-Baqarah."
    ],
    "reponse_correcte": "Al-Fatiha se termine par une demande de guidance, et Al-Baqarah commence par la description des pieux qui suivent cette guidance.",
    "explication": "Al-Fatiha se termine par notre demande à Allah de nous guider sur le droit chemin, et Al-Baqarah commence en décrivant ceux qui sont guidés, les pieux, qui croient en l'invisible et suivent la guidance d'Allah. C'est une belle continuité.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ تَرْتَبِطُ نِهَايَةُ سُورَةِ الْفَاتِحَةِ بِبِدَايَةِ سُورَةِ الْبَقَرَةِ؟",
        "options": [
          "تَنْتَهِي الْفَاتِحَةُ بِطَلَبِ الْهِدَايَةِ، وَتَبْدَأُ الْبَقَرَةُ بِوَصْفِ الْمُتَّقِينَ الَّذِينَ يَتَّبِعُونَ هَذِهِ الْهِدَايَةَ.",
          "تَنْتَهِي الْفَاتِحَةُ بِدُعَاءٍ لِلْغِنَى، وَتَبْدَأُ الْبَقَرَةُ بِذِكْرِ النِّعَمِ الْمَادِّيَّةِ.",
          "تَنْتَهِي الْفَاتِحَةُ بِتَحْذِيرٍ مِنَ الْمُنَافِقِينَ، وَتَبْدَأُ الْبَقَرَةُ بِوَصْفِهِمْ.",
          "لَا يُوجَدُ رَبْطٌ مُبَاشِرٌ بَيْنَ نِهَايَةِ الْفَاتِحَةِ وَبِدَايَةِ الْبَقَرَةِ."
        ],
        "reponse_correcte": "تَنْتَهِي الْفَاتِحَةُ بِطَلَبِ الْهِدَايَةِ، وَتَبْدَأُ الْبَقَرَةُ بِوَصْفِ الْمُتَّقِينَ الَّذِينَ يَتَّبِعُونَ هَذِهِ الْهِدَايَةَ.",
        "explication": "تَنْتَهِي الْفَاتِحَةُ بِطَلَبِنَا مِنَ اللَّهِ أَنْ يَهْدِيَنَا إِلَى الصِّرَاطِ الْمُسْتَقِيمِ، وَتَبْدَأُ الْبَقَرَةُ بِوَصْفِ الْمُهْتَدِينَ، وَهُمُ الْمُتَّقُونَ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيَتَّبِعُونَ هُدَى اللَّهِ. هَذِهِ اسْتِمْرَارِيَّةٌ جَمِيلَةٌ."
      },
      "wo": {
        "question": "Naka la jexu suura Al-Fatiha ak tàmbli suura Al-Baqarah di jokkoo?",
        "options": [
          "Al-Fatiha dafa jex ci ñaan yoon, te Al-Baqarah dafa tàmbli ci wax ci ñi ragal Yàlla yi topp yoon woowu.",
          "Al-Fatiha dafa jex ci ñaan alal, te Al-Baqarah dafa tàmbli ci wax ci barke alal.",
          "Al-Fatiha dafa jex ci yedd ci munaafiq yi, te Al-Baqarah dafa tàmbli ci wax ci ñoom.",
          "Amul benn jokkoo bu leer ci jexu Al-Fatiha ak tàmbli Al-Baqarah."
        ],
        "reponse_correcte": "Al-Fatiha dafa jex ci ñaan yoon, te Al-Baqarah dafa tàmbli ci wax ci ñi ragal Yàlla yi topp yoon woowu.",
        "explication": "Al-Fatiha dafa jex ci sunu ñaan ci Yàlla mu yombalal ñu ci yoon wu jub, te Al-Baqarah dafa tàmbli ci wax ci ñi yombalal ñu, ñi ragal Yàlla, ñi gëm ci li ñu gisul te topp yoonu Yàlla. Loolu mooy benn jokkoo bu rafet."
      }
    }
  },
  {
    "id": 450,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "La sourate Al-Baqarah est appelée \"Umm Al-Kitab\" (La Mère du Livre) dans le livre. Pourquoi ce nom lui est-il attribué ?",
    "options": [
      "Parce qu'elle est la plus longue sourate du Coran.",
      "Parce qu'elle contient l'histoire de la vache.",
      "Parce qu'elle englobe tous les objectifs de la religion.",
      "Parce qu'elle a été révélée en premier."
    ],
    "reponse_correcte": "Parce qu'elle englobe tous les objectifs de la religion.",
    "explication": "Al-Baqarah est appelée \"Umm Al-Kitab\" car elle contient les principes fondamentaux et les objectifs essentiels de l'Islam, ce qui en fait une sourate très complète pour comprendre la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "تُسَمَّى سُورَةُ الْبَقَرَةِ \"أُمَّ الْكِتَابِ\" فِي الْكِتَابِ. لِمَاذَا أُطْلِقَ عَلَيْهَا هَذَا الِاسْمُ؟",
        "options": [
          "لِأَنَّهَا أَطْوَلُ سُورَةٍ فِي الْقُرْآنِ.",
          "لِأَنَّهَا تَحْتَوِي عَلَى قِصَّةِ الْبَقَرَةِ.",
          "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
          "لِأَنَّهَا أُنْزِلَتْ أَوَّلًا."
        ],
        "reponse_correcte": "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
        "explication": "تُسَمَّى الْبَقَرَةُ \"أُمَّ الْكِتَابِ\" لِأَنَّهَا تَحْتَوِي عَلَى الْمَبَادِئِ الْأَسَاسِيَّةِ وَالْأَهْدَافِ الْجَوْهَرِيَّةِ لِلْإِسْلَامِ، مِمَّا يَجْعَلُهَا سُورَةً شَامِلَةً جِدًّا لِفَهْمِ الدِّينِ."
      },
      "wo": {
        "question": "Suura Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" (Ndèye Téere bi) ci téere bi. Lan motax ñu ko woowee tur woowu?",
        "options": [
          "Ndax mooy suura bi gëna gudd ci Alxuraan.",
          "Ndax dafa am ci biiram taarixu nag gi.",
          "Ndax dafa boole lépp lu diine bi bëgg.",
          "Ndax mooy bi ñu wàccee ci jiital."
        ],
        "reponse_correcte": "Ndax dafa boole lépp lu diine bi bëgg.",
        "explication": "Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" ndax dafa am ci biiram ay cosaan yu am solo ak ay njariñ yu am solo ci Lislaam, loolu motax mooy suura bu matale bu am solo ngir xam diine bi."
      }
    }
  },
  {
    "id": 451,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quel est le thème principal (axe central) de la sourate Al-Baqarah ?",
    "options": [
      "Les histoires des prophètes.",
      "La gestion de la richesse et le commerce.",
      "La succession sur Terre selon la méthodologie d'Allah.",
      "Les règles du mariage et du divorce."
    ],
    "reponse_correcte": "La succession sur Terre selon la méthodologie d'Allah.",
    "explication": "Le thème principal d'Al-Baqarah est l'établissement de la succession (Khalifa) sur Terre en suivant les lois et la guidance d'Allah, montrant comment l'humanité doit vivre et gérer le monde selon Sa volonté.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْمِحْوَرُ الرَّئِيسِيُّ (الْهَدَفُ الْعَامُّ) لِسُورَةِ الْبَقَرَةِ؟",
        "options": [
          "قِصَصُ الْأَنْبِيَاءِ.",
          "إِدَارَةُ الثَّرْوَةِ وَالتِّجَارَةِ.",
          "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
          "أَحْكَامُ الزَّوَاجِ وَالطَّلَاقِ."
        ],
        "reponse_correcte": "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
        "explication": "الْمِحْوَرُ الرَّئِيسِيُّ لِسُورَةِ الْبَقَرَةِ هُوَ إِقَامَةُ الْخِلَافَةِ فِي الْأَرْضِ بِاتِّبَاعِ شَرَائِعِ اللَّهِ وَهُدَاهُ، مِمَّا يُبَيِّنُ كَيْفَ يَنْبَغِي لِلْبَشَرِ أَنْ يَعِيشُوا وَيُدِيرُوا الْعَالَمَ وَفْقًا لِإِرَادَتِهِ سُبْحَانَهُ."
      },
      "wo": {
        "question": "Lan mooy tema bi gëna am solo (axe central) ci suura Al-Baqarah?",
        "options": [
          "Taarixu yonent yi.",
          "Jëfandikoo alal ak njaay.",
          "Nekkal ci suuf ni mel ni yoonu Yàlla.",
          "Ay àttey séy ak fas séy."
        ],
        "reponse_correcte": "Nekkal ci suuf ni mel ni yoonu Yàlla.",
        "explication": "Tema bi gëna am solo ci Al-Baqarah mooy taxawal nekkaal (Khalifa) ci suuf ci topp ay àttey Yàlla ak yoonam, di wone ni nit ñi war a dund te jëfandikoo àdduna bi ni mu ko bëgge."
      }
    }
  },
  {
    "id": 452,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Quel est le thème principal (axe central) de la sourate Al-Baqarah ?",
    "options": [
      "Les histoires des prophètes.",
      "La gestion de la richesse et le commerce.",
      "La succession sur Terre selon la méthodologie d'Allah.",
      "Les règles du mariage et du divorce."
    ],
    "reponse_correcte": "La succession sur Terre selon la méthodologie d'Allah.",
    "explication": "Le thème principal d'Al-Baqarah est l'établissement de la succession (Khalifa) sur Terre en suivant les lois et la guidance d'Allah, montrant comment l'humanité doit vivre et gérer le monde selon Sa volonté.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْمِحْوَرُ الرَّئِيسِيُّ (الْهَدَفُ الْعَامُّ) لِسُورَةِ الْبَقَرَةِ؟",
        "options": [
          "قِصَصُ الْأَنْبِيَاءِ.",
          "إِدَارَةُ الثَّرْوَةِ وَالتِّجَارَةِ.",
          "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
          "أَحْكَامُ الزَّوَاجِ وَالطَّلَاقِ."
        ],
        "reponse_correcte": "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
        "explication": "الْمِحْوَرُ الرَّئِيسِيُّ لِسُورَةِ الْبَقَرَةِ هُوَ إِقَامَةُ الْخِلَافَةِ فِي الْأَرْضِ بِاتِّبَاعِ شَرَائِعِ اللَّهِ وَهُدَاهُ، مِمَّا يُبَيِّنُ كَيْفَ يَنْبَغِي لِلْبَشَرِ أَنْ يَعِيشُوا وَيُدِيرُوا الْعَالَمَ وَفْقًا لِإِرَادَتِهِ سُبْحَانَهُ."
      },
      "wo": {
        "question": "Lan mooy tema bi gëna am solo (axe central) ci suura Al-Baqarah?",
        "options": [
          "Taarixu yonent yi.",
          "Jëfandikoo alal ak njaay.",
          "Nekkal ci suuf ni mel ni yoonu Yàlla.",
          "Ay àttey séy ak fas séy."
        ],
        "reponse_correcte": "Nekkal ci suuf ni mel ni yoonu Yàlla.",
        "explication": "Tema bi gëna am solo ci Al-Baqarah mooy taxawal nekkaal (Khalifa) ci suuf ci topp ay àttey Yàlla ak yoonam, di wone ni nit ñi war a dund te jëfandikoo àdduna bi ni mu ko bëgge."
      }
    }
  },
  {
    "id": 453,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Le Prophète Muhammad (paix et bénédictions sur lui) a dit qu'Al-Fatiha est la plus grande sourate du Coran. Quel est son autre nom mentionné dans ce contexte ?",
    "options": [
      "Al-Kahf (La Caverne).",
      "Al-Mulk (La Royauté).",
      "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
      "Yasin."
    ],
    "reponse_correcte": "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
    "explication": "Le Prophète (paix et bénédictions sur lui) a souligné la grandeur d'Al-Fatiha en l'appelant \"As-Sab' Al-Mathani\" et \"Le Grand Coran\", car elle est récitée dans chaque prière et contient les fondements de la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "قَالَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) إِنَّ الْفَاتِحَةَ أَعْظَمُ سُورَةٍ فِي الْقُرْآنِ. مَا اسْمُهَا الْآخَرُ الْمَذْكُورُ فِي هَذَا السِّيَاقِ؟",
        "options": [
          "الْكَهْفُ.",
          "الْمُلْكُ.",
          "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
          "يس."
        ],
        "reponse_correcte": "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
        "explication": "أَكَّدَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَلَى عَظَمَةِ الْفَاتِحَةِ بِتَسْمِيَتِهَا \"السَّبْعَ الْمَثَانِي\" وَ\"الْقُرْآنَ الْعَظِيمَ\"، لِأَنَّهَا تُتْلَى فِي كُلِّ صَلَاةٍ وَتَحْتَوِي عَلَى أُسُسِ الدِّينِ."
      },
      "wo": {
        "question": "Yonent bi Muhammad (jamm ak mucc ñoo ngi ci moom) nee na Al-Fatiha mooy suura bi gëna mag ci Alxuraan. Lan mooy beneen turam bi ñu wax ci loolu?",
        "options": [
          "Al-Kahf (Bàmbara gi).",
          "Al-Mulk (Ngur gi).",
          "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
          "Yasin."
        ],
        "reponse_correcte": "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
        "explication": "Yonent bi (jamm ak mucc ñoo ngi ci moom) wone na soloom Al-Fatiha bi mu ko woowee \"As-Sab' Al-Mathani\" ak \"Alxuraan bu Mag bi\", ndax dafa ñu ko jàng ci lépp lu ñu julli te dafa am ay cosaanu diine."
      }
    }
  },
  {
    "id": 454,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "La sourate Al-Fatiha a plusieurs noms. Lequel de ces noms n'est PAS mentionné dans le livre ?",
    "options": [
      "Umm Al-Kitab (La Mère du Livre).",
      "Al-Hamd (La Louange).",
      "Al-Baqarah (La Vache).",
      "Ash-Shafiyah (La Guérisseuse)."
    ],
    "reponse_correcte": "Al-Baqarah (La Vache).",
    "explication": "La sourate Al-Baqarah est une autre sourate du Coran, pas un nom d'Al-Fatiha. Al-Fatiha a de nombreux noms qui soulignent son importance, comme Umm Al-Kitab, Al-Hamd et Ash-Shafiyah.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِسُورَةِ الْفَاتِحَةِ عِدَّةُ أَسْمَاءٍ. أَيُّ هَذِهِ الْأَسْمَاءِ لَمْ يُذْكَرْ فِي الْكِتَابِ؟",
        "options": [
          "أُمُّ الْكِتَابِ.",
          "الْحَمْدُ.",
          "الْبَقَرَةُ.",
          "الشَّافِيَةُ."
        ],
        "reponse_correcte": "الْبَقَرَةُ.",
        "explication": "سُورَةُ الْبَقَرَةِ هِيَ سُورَةٌ أُخْرَى مِنَ الْقُرْآنِ، وَلَيْسَتْ اسْمًا لِلْفَاتِحَةِ. لِلْفَاتِحَةِ أَسْمَاءٌ كَثِيرَةٌ تُبْرِزُ أَهَمِّيَّتَهَا، مِثْلُ أُمِّ الْكِتَابِ، وَالْحَمْدِ، وَالشَّافِيَةِ."
      },
      "wo": {
        "question": "Suura Al-Fatiha am na ay tur yu bare. Ci tur yii, bi lan lañu waxul ci téere bi?",
        "options": [
          "Umm Al-Kitab (Ndèye Téere bi).",
          "Al-Hamd (Sant gi).",
          "Al-Baqarah (Nag gi).",
          "Ash-Shafiyah (Ki Faju)."
        ],
        "reponse_correcte": "Al-Baqarah (Nag gi).",
        "explication": "Suura Al-Baqarah mooy beneen suura ci Alxuraan, te du turu Al-Fatiha. Al-Fatiha am na ay tur yu bare yu wone soloom, ni mel ni Umm Al-Kitab, Al-Hamd ak Ash-Shafiyah."
      }
    }
  },
  {
    "id": 455,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "La sourate Al-Baqarah est appelée \"Umm Al-Kitab\" (La Mère du Livre) dans le livre. Pourquoi ce nom lui est-il attribué ?",
    "options": [
      "Parce qu'elle est la plus longue sourate du Coran.",
      "Parce qu'elle contient l'histoire de la vache.",
      "Parce qu'elle englobe tous les objectifs de la religion.",
      "Parce qu'elle a été révélée en premier."
    ],
    "reponse_correcte": "Parce qu'elle englobe tous les objectifs de la religion.",
    "explication": "Al-Baqarah est appelée \"Umm Al-Kitab\" car elle contient les principes fondamentaux et les objectifs essentiels de l'Islam, ce qui en fait une sourate très complète pour comprendre la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "تُسَمَّى سُورَةُ الْبَقَرَةِ \"أُمَّ الْكِتَابِ\" فِي الْكِتَابِ. لِمَاذَا أُطْلِقَ عَلَيْهَا هَذَا الِاسْمُ؟",
        "options": [
          "لِأَنَّهَا أَطْوَلُ سُورَةٍ فِي الْقُرْآنِ.",
          "لِأَنَّهَا تَحْتَوِي عَلَى قِصَّةِ الْبَقَرَةِ.",
          "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
          "لِأَنَّهَا أُنْزِلَتْ أَوَّلًا."
        ],
        "reponse_correcte": "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
        "explication": "تُسَمَّى الْبَقَرَةُ \"أُمَّ الْكِتَابِ\" لِأَنَّهَا تَحْتَوِي عَلَى الْمَبَادِئِ الْأَسَاسِيَّةِ وَالْأَهْدَافِ الْجَوْهَرِيَّةِ لِلْإِسْلَامِ، مِمَّا يَجْعَلُهَا سُورَةً شَامِلَةً جِدًّا لِفَهْمِ الدِّينِ."
      },
      "wo": {
        "question": "Suura Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" (Ndèye Téere bi) ci téere bi. Lan motax ñu ko woowee tur woowu?",
        "options": [
          "Ndax mooy suura bi gëna gudd ci Alxuraan.",
          "Ndax dafa am ci biiram taarixu nag gi.",
          "Ndax dafa boole lépp lu diine bi bëgg.",
          "Ndax mooy bi ñu wàccee ci jiital."
        ],
        "reponse_correcte": "Ndax dafa boole lépp lu diine bi bëgg.",
        "explication": "Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" ndax dafa am ci biiram ay cosaan yu am solo ak ay njariñ yu am solo ci Lislaam, loolu motax mooy suura bu matale bu am solo ngir xam diine bi."
      }
    }
  },
  {
    "id": 456,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quel est le thème principal (axe central) de la sourate Al-Baqarah ?",
    "options": [
      "Les histoires des prophètes.",
      "La gestion de la richesse et le commerce.",
      "La succession sur Terre selon la méthodologie d'Allah.",
      "Les règles du mariage et du divorce."
    ],
    "reponse_correcte": "La succession sur Terre selon la méthodologie d'Allah.",
    "explication": "Le thème principal d'Al-Baqarah est l'établissement de la succession (Khalifa) sur Terre en suivant les lois et la guidance d'Allah, montrant comment l'humanité doit vivre et gérer le monde selon Sa volonté.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْمِحْوَرُ الرَّئِيسِيُّ (الْهَدَفُ الْعَامُّ) لِسُورَةِ الْبَقَرَةِ؟",
        "options": [
          "قِصَصُ الْأَنْبِيَاءِ.",
          "إِدَارَةُ الثَّرْوَةِ وَالتِّجَارَةِ.",
          "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
          "أَحْكَامُ الزَّوَاجِ وَالطَّلَاقِ."
        ],
        "reponse_correcte": "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
        "explication": "الْمِحْوَرُ الرَّئِيسِيُّ لِسُورَةِ الْبَقَرَةِ هُوَ إِقَامَةُ الْخِلَافَةِ فِي الْأَرْضِ بِاتِّبَاعِ شَرَائِعِ اللَّهِ وَهُدَاهُ، مِمَّا يُبَيِّنُ كَيْفَ يَنْبَغِي لِلْبَشَرِ أَنْ يَعِيشُوا وَيُدِيرُوا الْعَالَمَ وَفْقًا لِإِرَادَتِهِ سُبْحَانَهُ."
      },
      "wo": {
        "question": "Lan mooy tema bi gëna am solo (axe central) ci suura Al-Baqarah?",
        "options": [
          "Taarixu yonent yi.",
          "Jëfandikoo alal ak njaay.",
          "Nekkal ci suuf ni mel ni yoonu Yàlla.",
          "Ay àttey séy ak fas séy."
        ],
        "reponse_correcte": "Nekkal ci suuf ni mel ni yoonu Yàlla.",
        "explication": "Tema bi gëna am solo ci Al-Baqarah mooy taxawal nekkaal (Khalifa) ci suuf ci topp ay àttey Yàlla ak yoonam, di wone ni nit ñi war a dund te jëfandikoo àdduna bi ni mu ko bëgge."
      }
    }
  },
  {
    "id": 457,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Le Prophète Muhammad (paix et bénédictions sur lui) a dit qu'Al-Fatiha est la plus grande sourate du Coran. Quel est son autre nom mentionné dans ce contexte ?",
    "options": [
      "Al-Kahf (La Caverne).",
      "Al-Mulk (La Royauté).",
      "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
      "Yasin."
    ],
    "reponse_correcte": "As-Sab' Al-Mathani (Les Sept Répétés) et le Grand Coran.",
    "explication": "Le Prophète (paix et bénédictions sur lui) a souligné la grandeur d'Al-Fatiha en l'appelant \"As-Sab' Al-Mathani\" et \"Le Grand Coran\", car elle est récitée dans chaque prière et contient les fondements de la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "قَالَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) إِنَّ الْفَاتِحَةَ أَعْظَمُ سُورَةٍ فِي الْقُرْآنِ. مَا اسْمُهَا الْآخَرُ الْمَذْكُورُ فِي هَذَا السِّيَاقِ؟",
        "options": [
          "الْكَهْفُ.",
          "الْمُلْكُ.",
          "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
          "يس."
        ],
        "reponse_correcte": "السَّبْعُ الْمَثَانِي وَالْقُرْآنُ الْعَظِيمُ.",
        "explication": "أَكَّدَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَلَى عَظَمَةِ الْفَاتِحَةِ بِتَسْمِيَتِهَا \"السَّبْعَ الْمَثَانِي\" وَ\"الْقُرْآنَ الْعَظِيمَ\"، لِأَنَّهَا تُتْلَى فِي كُلِّ صَلَاةٍ وَتَحْتَوِي عَلَى أُسُسِ الدِّينِ."
      },
      "wo": {
        "question": "Yonent bi Muhammad (jamm ak mucc ñoo ngi ci moom) nee na Al-Fatiha mooy suura bi gëna mag ci Alxuraan. Lan mooy beneen turam bi ñu wax ci loolu?",
        "options": [
          "Al-Kahf (Bàmbara gi).",
          "Al-Mulk (Ngur gi).",
          "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
          "Yasin."
        ],
        "reponse_correcte": "As-Sab' Al-Mathani (Juroom ñaari yu ñu wéyal) ak Alxuraan bu Mag bi.",
        "explication": "Yonent bi (jamm ak mucc ñoo ngi ci moom) wone na soloom Al-Fatiha bi mu ko woowee \"As-Sab' Al-Mathani\" ak \"Alxuraan bu Mag bi\", ndax dafa ñu ko jàng ci lépp lu ñu julli te dafa am ay cosaanu diine."
      }
    }
  },
  {
    "id": 458,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "La sourate Al-Fatiha a plusieurs noms. Lequel de ces noms n'est PAS mentionné dans le livre ?",
    "options": [
      "Umm Al-Kitab (La Mère du Livre).",
      "Al-Hamd (La Louange).",
      "Al-Baqarah (La Vache).",
      "Ash-Shafiyah (La Guérisseuse)."
    ],
    "reponse_correcte": "Al-Baqarah (La Vache).",
    "explication": "La sourate Al-Baqarah est une autre sourate du Coran, pas un nom d'Al-Fatiha. Al-Fatiha a de nombreux noms qui soulignent son importance, comme Umm Al-Kitab, Al-Hamd et Ash-Shafiyah.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِسُورَةِ الْفَاتِحَةِ عِدَّةُ أَسْمَاءٍ. أَيُّ هَذِهِ الْأَسْمَاءِ لَمْ يُذْكَرْ فِي الْكِتَابِ؟",
        "options": [
          "أُمُّ الْكِتَابِ.",
          "الْحَمْدُ.",
          "الْبَقَرَةُ.",
          "الشَّافِيَةُ."
        ],
        "reponse_correcte": "الْبَقَرَةُ.",
        "explication": "سُورَةُ الْبَقَرَةِ هِيَ سُورَةٌ أُخْرَى مِنَ الْقُرْآنِ، وَلَيْسَتْ اسْمًا لِلْفَاتِحَةِ. لِلْفَاتِحَةِ أَسْمَاءٌ كَثِيرَةٌ تُبْرِزُ أَهَمِّيَّتَهَا، مِثْلُ أُمِّ الْكِتَابِ، وَالْحَمْدِ، وَالشَّافِيَةِ."
      },
      "wo": {
        "question": "Suura Al-Fatiha am na ay tur yu bare. Ci tur yii, bi lan lañu waxul ci téere bi?",
        "options": [
          "Umm Al-Kitab (Ndèye Téere bi).",
          "Al-Hamd (Sant gi).",
          "Al-Baqarah (Nag gi).",
          "Ash-Shafiyah (Ki Faju)."
        ],
        "reponse_correcte": "Al-Baqarah (Nag gi).",
        "explication": "Suura Al-Baqarah mooy beneen suura ci Alxuraan, te du turu Al-Fatiha. Al-Fatiha am na ay tur yu bare yu wone soloom, ni mel ni Umm Al-Kitab, Al-Hamd ak Ash-Shafiyah."
      }
    }
  },
  {
    "id": 459,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "La sourate Al-Baqarah est appelée \"Umm Al-Kitab\" (La Mère du Livre) dans le livre. Pourquoi ce nom lui est-il attribué ?",
    "options": [
      "Parce qu'elle est la plus longue sourate du Coran.",
      "Parce qu'elle contient l'histoire de la vache.",
      "Parce qu'elle englobe tous les objectifs de la religion.",
      "Parce qu'elle a été révélée en premier."
    ],
    "reponse_correcte": "Parce qu'elle englobe tous les objectifs de la religion.",
    "explication": "Al-Baqarah est appelée \"Umm Al-Kitab\" car elle contient les principes fondamentaux et les objectifs essentiels de l'Islam, ce qui en fait une sourate très complète pour comprendre la religion.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "تُسَمَّى سُورَةُ الْبَقَرَةِ \"أُمَّ الْكِتَابِ\" فِي الْكِتَابِ. لِمَاذَا أُطْلِقَ عَلَيْهَا هَذَا الِاسْمُ؟",
        "options": [
          "لِأَنَّهَا أَطْوَلُ سُورَةٍ فِي الْقُرْآنِ.",
          "لِأَنَّهَا تَحْتَوِي عَلَى قِصَّةِ الْبَقَرَةِ.",
          "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
          "لِأَنَّهَا أُنْزِلَتْ أَوَّلًا."
        ],
        "reponse_correcte": "لِأَنَّهَا تَشْمَلُ جَمِيعَ مَقَاصِدِ الدِّينِ.",
        "explication": "تُسَمَّى الْبَقَرَةُ \"أُمَّ الْكِتَابِ\" لِأَنَّهَا تَحْتَوِي عَلَى الْمَبَادِئِ الْأَسَاسِيَّةِ وَالْأَهْدَافِ الْجَوْهَرِيَّةِ لِلْإِسْلَامِ، مِمَّا يَجْعَلُهَا سُورَةً شَامِلَةً جِدًّا لِفَهْمِ الدِّينِ."
      },
      "wo": {
        "question": "Suura Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" (Ndèye Téere bi) ci téere bi. Lan motax ñu ko woowee tur woowu?",
        "options": [
          "Ndax mooy suura bi gëna gudd ci Alxuraan.",
          "Ndax dafa am ci biiram taarixu nag gi.",
          "Ndax dafa boole lépp lu diine bi bëgg.",
          "Ndax mooy bi ñu wàccee ci jiital."
        ],
        "reponse_correcte": "Ndax dafa boole lépp lu diine bi bëgg.",
        "explication": "Al-Baqarah dafa ñu ko woowee \"Umm Al-Kitab\" ndax dafa am ci biiram ay cosaan yu am solo ak ay njariñ yu am solo ci Lislaam, loolu motax mooy suura bu matale bu am solo ngir xam diine bi."
      }
    }
  },
  {
    "id": 460,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quel est le thème principal (axe central) de la sourate Al-Baqarah ?",
    "options": [
      "Les histoires des prophètes.",
      "La gestion de la richesse et le commerce.",
      "La succession sur Terre selon la méthodologie d'Allah.",
      "Les règles du mariage et du divorce."
    ],
    "reponse_correcte": "La succession sur Terre selon la méthodologie d'Allah.",
    "explication": "Le thème principal d'Al-Baqarah est l'établissement de la succession (Khalifa) sur Terre en suivant les lois et la guidance d'Allah, montrant comment l'humanité doit vivre et gérer le monde selon Sa volonté.",
    "source": "Méditation et réflexion sur le Coran (Tadabbur)",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ الْمِحْوَرُ الرَّئِيسِيُّ (الْهَدَفُ الْعَامُّ) لِسُورَةِ الْبَقَرَةِ؟",
        "options": [
          "قِصَصُ الْأَنْبِيَاءِ.",
          "إِدَارَةُ الثَّرْوَةِ وَالتِّجَارَةِ.",
          "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
          "أَحْكَامُ الزَّوَاجِ وَالطَّلَاقِ."
        ],
        "reponse_correcte": "الِاسْتِخْلَافُ فِي الْأَرْضِ بِمَنْهَجِ اللَّهِ.",
        "explication": "الْمِحْوَرُ الرَّئِيسِيُّ لِسُورَةِ الْبَقَرَةِ هُوَ إِقَامَةُ الْخِلَافَةِ فِي الْأَرْضِ بِاتِّبَاعِ شَرَائِعِ اللَّهِ وَهُدَاهُ، مِمَّا يُبَيِّنُ كَيْفَ يَنْبَغِي لِلْبَشَرِ أَنْ يَعِيشُوا وَيُدِيرُوا الْعَالَمَ وَفْقًا لِإِرَادَتِهِ سُبْحَانَهُ."
      },
      "wo": {
        "question": "Lan mooy tema bi gëna am solo (axe central) ci suura Al-Baqarah?",
        "options": [
          "Taarixu yonent yi.",
          "Jëfandikoo alal ak njaay.",
          "Nekkal ci suuf ni mel ni yoonu Yàlla.",
          "Ay àttey séy ak fas séy."
        ],
        "reponse_correcte": "Nekkal ci suuf ni mel ni yoonu Yàlla.",
        "explication": "Tema bi gëna am solo ci Al-Baqarah mooy taxawal nekkaal (Khalifa) ci suuf ci topp ay àttey Yàlla ak yoonam, di wone ni nit ñi war a dund te jëfandikoo àdduna bi ni mu ko bëgge."
      }
    }
  },
  {
    "id": 461,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quand est né notre cher Prophète Muhammad (PSL) ?",
    "options": [
      "L'année de l'Éléphant",
      "L'année du Tigre",
      "L'année du Lion",
      "L'année de la Gazelle"
    ],
    "reponse_correcte": "L'année de l'Éléphant",
    "explication": "Notre Prophète (PSL) est né l'année où Allah a protégé la Kaaba de l'armée de l'éléphant, c'est un signe de la grandeur de sa venue.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَتَى وُلِدَ نَبِيُّنَا مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "عَامُ الْفِيلِ",
          "عَامُ النَّمِرِ",
          "عَامُ الْأَسَدِ",
          "عَامُ الْغَزَالِ"
        ],
        "reponse_correcte": "عَامُ الْفِيلِ",
        "explication": "وُلِدَ نَبِيُّنَا (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) فِي الْعَامِ الَّذِي حَمَى فِيهِ اللَّهُ الْكَعْبَةَ مِنْ جَيْشِ الْفِيلِ، وَهَذَا دَلِيلٌ عَلَى عَظَمَةِ قُدُومِهِ."
      },
      "wo": {
        "question": "Kagna la sunu Yonent bi (PSL) juddoo?",
        "options": [
          "Atum Ñay bi",
          "Atum Tigre bi",
          "Atum Gaynde bi",
          "Atum Gazelle bi"
        ],
        "reponse_correcte": "Atum Ñay bi",
        "explication": "Sunu Yonent bi (PSL) juddoo na ci at mi Yàlla musal Kaaba ci armee bu ñay bi, loolu firnde la ci màggug ñëwam."
      }
    }
  },
  {
    "id": 462,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui était la nourrice de notre Prophète Muhammad (PSL) qui l'a allaité ?",
    "options": [
      "Amina",
      "Khadija",
      "Halima As-Sa'diya",
      "Aïcha"
    ],
    "reponse_correcte": "Halima As-Sa'diya",
    "explication": "Halima As-Sa'diya a eu l'honneur d'allaiter notre Prophète (PSL) et de s'occuper de lui pendant son enfance, ce fut une grande bénédiction pour elle et sa famille.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ كَانَتْ مُرْضِعَةَ نَبِيِّنَا مُحَمَّدٍ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) الَّتِي أَرْضَعَتْهُ؟",
        "options": [
          "آمِنَةُ",
          "خَدِيجَةُ",
          "حَلِيمَةُ السَّعْدِيَّةُ",
          "عَائِشَةُ"
        ],
        "reponse_correcte": "حَلِيمَةُ السَّعْدِيَّةُ",
        "explication": "حَلِيمَةُ السَّعْدِيَّةُ كَانَ لَهَا شَرَفُ إِرْضَاعِ نَبِيِّنَا (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) وَرِعَايَتِهِ فِي طُفُولَتِهِ، وَكَانَتْ بَرَكَةً عَظِيمَةً لَهَا وَلِأَهْلِهَا."
      },
      "wo": {
        "question": "Kii kan la woon ci ñi yare Yonent bi (PSL) te mu nàmpal ko?",
        "options": [
          "Amina",
          "Khadija",
          "Halima As-Sa'diya",
          "Aïcha"
        ],
        "reponse_correcte": "Halima As-Sa'diya",
        "explication": "Sunu Yonent bi (PSL) amoon na ndam lu mag ci nàmpal ko te mu yare ko ci jamonoomu gone, loolu barke bu mag la woon ci moom ak ci njabootam."
      }
    }
  },
  {
    "id": 463,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quel âge avait notre Prophète Muhammad (PSL) lorsqu'il a épousé Khadija (RA) ?",
    "options": [
      "20 ans",
      "25 ans",
      "30 ans",
      "40 ans"
    ],
    "reponse_correcte": "25 ans",
    "explication": "Notre Prophète (PSL) avait 25 ans quand il a épousé Khadija (RA), qui était une femme noble et pieuse, et elle fut sa première épouse.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ كَانَ عُمْرُ نَبِيِّنَا مُحَمَّدٍ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) عِنْدَمَا تَزَوَّجَ خَدِيجَةَ (رَضِيَ اللَّهُ عَنْهَا)؟",
        "options": [
          "20 سَنَةً",
          "25 سَنَةً",
          "30 سَنَةً",
          "40 سَنَةً"
        ],
        "reponse_correcte": "25 سَنَةً",
        "explication": "كَانَ عُمْرُ نَبِيِّنَا (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) 25 سَنَةً عِنْدَمَا تَزَوَّجَ خَدِيجَةَ (رَضِيَ اللَّهُ عَنْهَا)، وَكَانَتْ خَدِيجَةُ امْرَأَةً نَبِيلَةً وَتَقِيَّةً، وَهِيَ أَوَّلُ زَوْجَاتِهِ."
      },
      "wo": {
        "question": "Ñata at la Yonent bi (PSL) amoon bi mu takk Khadija (RA)?",
        "options": [
          "20 at",
          "25 at",
          "30 at",
          "40 at"
        ],
        "reponse_correcte": "25 at",
        "explication": "Yonent bi (PSL) amoon na 25 at bi mu takk Khadija (RA), moom Khadija jigéen ju baax te sell la woon, te moom la jëkk a takk."
      }
    }
  },
  {
    "id": 464,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Où notre Prophète Muhammad (PSL) a-t-il reçu la première révélation du Coran ?",
    "options": [
      "Dans la Kaaba",
      "Dans la grotte de Hira",
      "À la maison",
      "Sur le mont Safa"
    ],
    "reponse_correcte": "Dans la grotte de Hira",
    "explication": "La première révélation du Coran est descendue sur notre Prophète (PSL) alors qu'il méditait dans la grotte de Hira, c'était un moment très important pour l'Islam.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "أَيْنَ تَلَقَّى نَبِيُّنَا مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) أَوَّلَ وَحْيٍ مِنَ الْقُرْآنِ الْكَرِيمِ؟",
        "options": [
          "فِي الْكَعْبَةِ",
          "فِي غَارِ حِرَاءٍ",
          "فِي الْمَنْزِلِ",
          "عَلَى جَبَلِ الصَّفَا"
        ],
        "reponse_correcte": "فِي غَارِ حِرَاءٍ",
        "explication": "نَزَلَ أَوَّلُ وَحْيٍ مِنَ الْقُرْآنِ الْكَرِيمِ عَلَى نَبِيِّنَا (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) وَهُوَ يَتَأَمَّلُ فِي غَارِ حِرَاءٍ، وَكَانَ ذَلِكَ لَحْظَةً عَظِيمَةً لِلْإِسْلَامِ."
      },
      "wo": {
        "question": "Fan la sunu Yonent bi (PSL) jëlee wahyu bu jëkk bi ci Alxuraan?",
        "options": [
          "Ci Kaaba gi",
          "Ci kër Hira gi",
          "Ci kër gi",
          "Ci tund Safa gi"
        ],
        "reponse_correcte": "Ci kër Hira gi",
        "explication": "Wahyu bu jëkk bi ci Alxuraan wàcc na ci sunu Yonent bi (PSL) bi mu nekkee di xalaat ci kër Hira gi, loolu jamono ju am solo la woon ci Lislaam."
      }
    }
  },
  {
    "id": 465,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Qui fut la première personne à embrasser l'Islam parmi les compagnons du Prophète (PSL) ?",
    "options": [
      "Ali ibn Abi Talib",
      "Zayd ibn Haritha",
      "Abu Bakr As-Siddiq",
      "Khadija bint Khuwaylid"
    ],
    "reponse_correcte": "Khadija bint Khuwaylid",
    "explication": "Khadija (RA), l'épouse du Prophète (PSL), fut la première à croire en son message et à embrasser l'Islam, montrant ainsi son amour et son soutien.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ كَانَتْ أَوَّلَ مَنْ أَسْلَمَ مِنَ الصَّحَابَةِ (رَضِيَ اللَّهُ عَنْهُمْ)؟",
        "options": [
          "عَلِيُّ بْنُ أَبِي طَالِبٍ",
          "زَيْدُ بْنُ حَارِثَةَ",
          "أَبُو بَكْرٍ الصِّدِّيقُ",
          "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ"
        ],
        "reponse_correcte": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
        "explication": "خَدِيجَةُ (رَضِيَ اللَّهُ عَنْهَا)، زَوْجَةُ النَّبِيِّ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)، كَانَتْ أَوَّلَ مَنْ آمَنَ بِرِسَالَتِهِ وَأَسْلَمَ، مُظْهِرَةً بِذَلِكَ حُبَّهَا وَدَعْمَهَا لَهُ."
      },
      "wo": {
        "question": "Kan la woon ci ñi jëkk a Lislaam ci sahaba yi (RA)?",
        "options": [
          "Ali ibn Abi Talib",
          "Zayd ibn Haritha",
          "Abu Bakr As-Siddiq",
          "Khadija bint Khuwaylid"
        ],
        "reponse_correcte": "Khadija bint Khuwaylid",
        "explication": "Khadija (RA), jabar Yonent bi (PSL), mooy ki jëkk a gëm ci bataaxal bi te Lislaam, won na ci bëggam ak dimbalim."
      }
    }
  },
  {
    "id": 466,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Pourquoi les premiers musulmans ont-ils émigré vers l'Abyssinie ?",
    "options": [
      "Pour le commerce",
      "Pour échapper à la persécution",
      "Pour chercher de nouvelles terres",
      "Pour faire la guerre"
    ],
    "reponse_correcte": "Pour échapper à la persécution",
    "explication": "Les musulmans ont émigré vers l'Abyssinie parce que les Quraysh les persécutaient à La Mecque. Le roi d'Abyssinie, le Négus, était un homme juste qui les a protégés.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "لِمَاذَا هَاجَرَ الْمُسْلِمُونَ الْأَوَائِلُ إِلَى الْحَبَشَةِ؟",
        "options": [
          "لِلتِّجَارَةِ",
          "لِلْفِرَارِ مِنَ الِاضْطِهَادِ",
          "لِلْبَحْثِ عَنْ أَرْضٍ جَدِيدَةٍ",
          "لِخَوْضِ الْحَرْبِ"
        ],
        "reponse_correcte": "لِلْفِرَارِ مِنَ الِاضْطِهَادِ",
        "explication": "هَاجَرَ الْمُسْلِمُونَ إِلَى الْحَبَشَةِ لِأَنَّ قُرَيْشًا كَانَتْ تُضْطَهِدُهُمْ فِي مَكَّةَ. وَكَانَ مَلِكُ الْحَبَشَةِ، النَّجَاشِيُّ، رَجُلًا عَادِلًا حَمَاهُمْ."
      },
      "wo": {
        "question": "Lu taxoon ñi jëkk a Lislaam dem ci Hijra Abyssinie?",
        "options": [
          "Ngir defar njaay",
          "Ngir daw fitna",
          "Ngir wut suuf yu bees",
          "Ngir xare"
        ],
        "reponse_correcte": "Ngir daw fitna",
        "explication": "Ñi Lislaam dem nañu Abyssinie ndax Quraysh da leen di fitna ci Makka. Buur Abyssinie bi, Négus bi, nit ku jub la woon te mu musal leen."
      }
    }
  },
  {
    "id": 467,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Combien de temps a duré le boycott imposé par Quraysh contre les Banu Hashim ?",
    "options": [
      "Un an",
      "Deux ans",
      "Trois ans",
      "Quatre ans"
    ],
    "reponse_correcte": "Trois ans",
    "explication": "Le boycott était une période difficile où les Banu Hashim ne pouvaient ni acheter ni vendre, et ils ont souffert de la faim et de la soif pendant trois longues années.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ دَامَ الْحِصَارُ الَّذِي فَرَضَتْهُ قُرَيْشٌ عَلَى بَنِي هَاشِمٍ؟",
        "options": [
          "سَنَةً وَاحِدَةً",
          "سَنَتَيْنِ",
          "ثَلَاثَ سَنَوَاتٍ",
          "أَرْبَعَ سَنَوَاتٍ"
        ],
        "reponse_correcte": "ثَلَاثَ سَنَوَاتٍ",
        "explication": "كَانَ الْحِصَارُ فَتْرَةً صَعْبَةً حَيْثُ لَمْ يَسْتَطِعْ بَنُو هَاشِمٍ الشِّرَاءَ وَلَا الْبَيْعَ، وَعَانَوْا مِنَ الْجُوعِ وَالْعَطَشِ لِمُدَّةِ ثَلَاثِ سَنَوَاتٍ طَوِيلَةٍ."
      },
      "wo": {
        "question": "Ñata at la boycott bi Quraysh defoon ci Banu Hashim yagoon?",
        "options": [
          "Benn at",
          "Ñaar at",
          "Ñett at",
          "Ñeent at"
        ],
        "reponse_correcte": "Ñett at",
        "explication": "Boycott bi jamono ju metti la woon fu Banu Hashim mënul woon jënd ak jaay, te ñu sonn ci xiif ak mar ci ñett at yu yagg."
      }
    }
  },
  {
    "id": 468,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quand a eu lieu le voyage nocturne (Isra) et l'ascension (Mi'raj) du Prophète (PSL) ?",
    "options": [
      "Après l'Hégire",
      "Avant l'Hégire",
      "Pendant la bataille de Badr",
      "Pendant la conquête de La Mecque"
    ],
    "reponse_correcte": "Avant l'Hégire",
    "explication": "Le voyage nocturne et l'ascension sont des miracles qui ont eu lieu avant l'Hégire, pour montrer au Prophète (PSL) les signes d'Allah et le renforcer avant les grandes épreuves.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَتَى وَقَعَتْ رِحْلَةُ الْإِسْرَاءِ وَالْمِعْرَاجِ لِلنَّبِيِّ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "بَعْدَ الْهِجْرَةِ",
          "قَبْلَ الْهِجْرَةِ",
          "أَثْنَاءَ غَزْوَةِ بَدْرٍ",
          "أَثْنَاءَ فَتْحِ مَكَّةَ"
        ],
        "reponse_correcte": "قَبْلَ الْهِجْرَةِ",
        "explication": "الْإِسْرَاءُ وَالْمِعْرَاجُ هُمَا مُعْجِزَتَانِ وَقَعَتَا قَبْلَ الْهِجْرَةِ، لِيُرِيَ اللَّهُ نَبِيَّهُ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) آيَاتِهِ الْكُبْرَى وَيُقَوِّيَهُ قَبْلَ التَّحَدِّيَاتِ الْكَبِيرَةِ."
      },
      "wo": {
        "question": "Kagna la Israa ak Mi'raj Yonent bi (PSL) amoon?",
        "options": [
          "Gannaaw Hijra gi",
          "Jantale Hijra gi",
          "Ci jamonoomu xare Badr",
          "Ci jamonoomu teg Makka"
        ],
        "reponse_correcte": "Jantale Hijra gi",
        "explication": "Israa ak Mi'raj ay mujiza lañu woon yu amoon jantale Hijra gi, ngir Yàlla won Yonent bi (PSL) ay firndeem yu mag te mu dëgëral ko jantale ay jafe-jafe yu mag."
      }
    }
  },
  {
    "id": 469,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Quelle fut la première chose que le Prophète (PSL) a fait construire en arrivant à Médine ?",
    "options": [
      "Sa maison",
      "La mosquée",
      "Un marché",
      "Une forteresse"
    ],
    "reponse_correcte": "La mosquée",
    "explication": "La première chose que le Prophète (PSL) a construite à Médine fut la mosquée, car c'est le lieu de rassemblement des musulmans pour la prière et l'apprentissage.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ أَوَّلُ شَيْءٍ بَنَاهُ النَّبِيُّ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) عِنْدَ وُصُولِهِ إِلَى الْمَدِينَةِ؟",
        "options": [
          "بَيْتَهُ",
          "الْمَسْجِدَ",
          "سُوقًا",
          "حِصْنًا"
        ],
        "reponse_correcte": "الْمَسْجِدَ",
        "explication": "أَوَّلُ شَيْءٍ بَنَاهُ النَّبِيُّ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) فِي الْمَدِينَةِ كَانَ الْمَسْجِدَ، لِأَنَّهُ مَكَانُ تَجَمُّعِ الْمُسْلِمِينَ لِلصَّلَاةِ وَالتَّعَلُّمِ."
      },
      "wo": {
        "question": "Lan mooy lu jëkk Yonent bi (PSL) tabax bi mu agsee Madina?",
        "options": [
          "Këram",
          "Jumaa ji",
          "Marsé bi",
          "Daaru xare bi"
        ],
        "reponse_correcte": "Jumaa ji",
        "explication": "Lu jëkk Yonent bi (PSL) tabax ci Madina mooy jumaa ji, ndax mooy barab bu jullit ñi dajaloo ngir julli ak jàng."
      }
    }
  },
  {
    "id": 470,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Quelle est la première grande bataille de l'Islam où les musulmans ont remporté une victoire éclatante ?",
    "options": [
      "La bataille de Uhud",
      "La bataille de la Tranchée",
      "La bataille de Badr",
      "La bataille de Khaybar"
    ],
    "reponse_correcte": "La bataille de Badr",
    "explication": "La bataille de Badr fut une victoire miraculeuse pour les musulmans, malgré leur petit nombre, grâce à l'aide d'Allah.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ أَوَّلُ غَزْوَةٍ عَظِيمَةٍ فِي الْإِسْلَامِ انْتَصَرَ فِيهَا الْمُسْلِمُونَ انْتِصَارًا بَاهِرًا؟",
        "options": [
          "غَزْوَةُ أُحُدٍ",
          "غَزْوَةُ الْخَنْدَقِ",
          "غَزْوَةُ بَدْرٍ",
          "غَزْوَةُ خَيْبَرَ"
        ],
        "reponse_correcte": "غَزْوَةُ بَدْرٍ",
        "explication": "غَزْوَةُ بَدْرٍ كَانَتْ نَصْرًا مُعْجِزًا لِلْمُسْلِمِينَ، عَلَى الرَّغْمِ مِنْ قِلَّةِ عَدَدِهِمْ، بِفَضْلِ اللَّهِ تَعَالَى."
      },
      "wo": {
        "question": "Lan mooy xare bu mag bu jëkk ci Lislaam bi jullit ñi amee ndam lu rëy?",
        "options": [
          "Xare Uhud",
          "Xare Khandaq",
          "Xare Badr",
          "Xare Khaybar"
        ],
        "reponse_correcte": "Xare Badr",
        "explication": "Xare Badr ndam lu mujiza la woon ci jullit ñi, baaxul woon ci seen diggante, ci ndimbalu Yàlla."
      }
    }
  },
  {
    "id": 471,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quel traité, initialement perçu comme une défaite, s'est avéré être une grande victoire pour l'Islam ?",
    "options": [
      "Le traité de Badr",
      "Le traité de Uhud",
      "Le traité d'Hudaybiyyah",
      "Le traité de Khaybar"
    ],
    "reponse_correcte": "Le traité d'Hudaybiyyah",
    "explication": "Le traité d'Hudaybiyyah a permis aux musulmans de se renforcer, de se propager et a ouvert la voie à la conquête de La Mecque, montrant que la sagesse d'Allah est au-delà de ce que nous percevons.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "أَيُّ مُعَاهَدَةٍ، رُئِيَتْ فِي الْبِدَايَةِ كَهَزِيمَةٍ، أَثْبَتَتْ أَنَّهَا كَانَتْ نَصْرًا عَظِيمًا لِلْإِسْلَامِ؟",
        "options": [
          "صُلْحُ بَدْرٍ",
          "صُلْحُ أُحُدٍ",
          "صُلْحُ الْحُدَيْبِيَةِ",
          "صُلْحُ خَيْبَرَ"
        ],
        "reponse_correcte": "صُلْحُ الْحُدَيْبِيَةِ",
        "explication": "صُلْحُ الْحُدَيْبِيَةِ مَكَّنَ الْمُسْلِمِينَ مِنَ التَّقَوِّي وَالِانْتِشَارِ، وَفَتَحَ الطَّرِيقَ لِفَتْحِ مَكَّةَ، مُظْهِرًا أَنَّ حِكْمَةَ اللَّهِ أَعْظَمُ مِمَّا نُدْرِكُهُ."
      },
      "wo": {
        "question": "Lan mooy paspon bi, bi ñu ko jëkk a gis muy ndogal, mu feeñe ne ndam lu mag la woon ci Lislaam?",
        "options": [
          "Paspon Badr",
          "Paspon Uhud",
          "Paspon Hudaybiyyah",
          "Paspon Khaybar"
        ],
        "reponse_correcte": "Paspon Hudaybiyyah",
        "explication": "Paspon Hudaybiyyah dafa taxoon jullit ñi dëgëral seen bopp, te ñu tasoo, te mu ubbi yoon wi ci teg Makka, won na ne hikma Yàlla gi moo gën a mag li ñuy gis."
      }
    }
  },
  {
    "id": 472,
    "categorie": "Sirah",
    "niveau": "Débutant",
    "question": "Où notre Prophète Muhammad (PSL) est-il décédé ?",
    "options": [
      "À La Mecque",
      "À Jérusalem",
      "À Médine",
      "À Taïf"
    ],
    "reponse_correcte": "À Médine",
    "explication": "Notre cher Prophète (PSL) est décédé à Médine, la ville qu'il a illuminée par sa présence et où il a établi l'État islamique.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "أَيْنَ تُوُفِّيَ نَبِيُّنَا مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)؟",
        "options": [
          "فِي مَكَّةَ",
          "فِي الْقُدْسِ",
          "فِي الْمَدِينَةِ",
          "فِي الطَّائِفِ"
        ],
        "reponse_correcte": "فِي الْمَدِينَةِ",
        "explication": "تُوُفِّيَ نَبِيُّنَا الْكَرِيمُ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) فِي الْمَدِينَةِ، الْمَدِينَةِ الَّتِي نَوَّرَهَا بِوُجُودِهِ وَأَقَامَ فِيهَا الدَّوْلَةَ الْإِسْلَامِيَّةَ."
      },
      "wo": {
        "question": "Fan la sunu Yonent bi (PSL) faatoo?",
        "options": [
          "Ci Makka",
          "Ci Yerusalem",
          "Ci Madina",
          "Ci Taïf"
        ],
        "reponse_correcte": "Ci Madina",
        "explication": "Sunu Yonent bi (PSL) faatoo na ci Madina, dëkk bi mu leerale ak taxawale ci Lislaam."
      }
    }
  },
  {
    "id": 473,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Combien d'enfants le Prophète Muhammad (PSL) a-t-il eu avec Khadija (RA) ?",
    "options": [
      "4 enfants",
      "5 enfants",
      "6 enfants",
      "7 enfants"
    ],
    "reponse_correcte": "6 enfants",
    "explication": "Le Prophète (PSL) a eu six enfants avec Khadija (RA) : Al-Qasim, Zaynab, Ruqayya, Umm Kulthum, Fatima et Abdullah.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ عَدَدُ أَوْلَادِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) مِنْ خَدِيجَةَ (رَضِيَ اللَّهُ عَنْهَا)؟",
        "options": [
          "4 أَوْلَادٍ",
          "5 أَوْلَادٍ",
          "6 أَوْلَادٍ",
          "7 أَوْلَادٍ"
        ],
        "reponse_correcte": "6 أَوْلَادٍ",
        "explication": "أَنْجَبَ النَّبِيُّ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) سِتَّةَ أَوْلَادٍ مِنْ خَدِيجَةَ (رَضِيَ اللَّهُ عَنْهَا): الْقَاسِمُ، وَزَيْنَبُ، وَرُقَيَّةُ، وَأُمُّ كُلْثُومٍ، وَفَاطِمَةُ، وَعَبْدُ اللَّهِ."
      },
      "wo": {
        "question": "Ñata doom la Yonent bi (PSL) amoon ak Khadija (RA)?",
        "options": [
          "4 doom",
          "5 doom",
          "6 doom",
          "7 doom"
        ],
        "reponse_correcte": "6 doom",
        "explication": "Yonent bi (PSL) amoon na juróom-benn doom ak Khadija (RA): Al-Qasim, Zaynab, Ruqayya, Umm Kulthum, Fatima ak Abdullah."
      }
    }
  },
  {
    "id": 474,
    "categorie": "Sirah",
    "niveau": "Intermédiaire",
    "question": "Qui a dirigé la prière lors du voyage nocturne (Isra) et de l'ascension (Mi'raj) où tous les prophètes étaient rassemblés ?",
    "options": [
      "L'Ange Jibril",
      "Le Prophète Muhammad (PSL)",
      "Le Prophète Musa (Moïse)",
      "Le Prophète Isa (Jésus)"
    ],
    "reponse_correcte": "Le Prophète Muhammad (PSL)",
    "explication": "Lors de l'Isra et du Mi'raj, Allah a honoré notre Prophète Muhammad (PSL) en faisant de lui l'imam de tous les prophètes et messagers, montrant ainsi sa position élevée.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "مَنْ أَمَّ الصَّلَاةَ فِي لَيْلَةِ الْإِسْرَاءِ وَالْمِعْرَاجِ حَيْثُ اجْتَمَعَ جَمِيعُ الْأَنْبِيَاءِ؟",
        "options": [
          "الْمَلَكُ جِبْرِيلُ",
          "النَّبِيُّ مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)",
          "النَّبِيُّ مُوسَى (عَلَيْهِ السَّلَامُ)",
          "النَّبِيُّ عِيسَى (عَلَيْهِ السَّلَامُ)"
        ],
        "reponse_correcte": "النَّبِيُّ مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ)",
        "explication": "فِي لَيْلَةِ الْإِسْرَاءِ وَالْمِعْرَاجِ، أَكْرَمَ اللَّهُ نَبِيَّنَا مُحَمَّدًا (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) بِأَنْ جَعَلَهُ إِمَامًا لِجَمِيعِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ، مُظْهِرًا بِذَلِكَ مَكَانَتَهُ الْعَالِيَةَ."
      },
      "wo": {
        "question": "Kan mooy ki jiite julli bi ci guddi Israa ak Mi'raj bi, fu Yonent yépp dajaloo woon?",
        "options": [
          "Malaaka Jibril",
          "Yonent bi Muhammad (PSL)",
          "Yonent bi Musa (AS)",
          "Yonent bi Isa (AS)"
        ],
        "reponse_correcte": "Yonent bi Muhammad (PSL)",
        "explication": "Ci guddi Israa ak Mi'raj, Yàlla defal na Yonent bi Muhammad (PSL) ndam lu mag ci def ko imam ci Yonent yépp ak ndaw yépp, won na ci darajaam ju kawe."
      }
    }
  },
  {
    "id": 475,
    "categorie": "Sirah",
    "niveau": "Avancé",
    "question": "Quelle bataille a été nommée d'après la tranchée creusée autour de Médine pour défendre la ville ?",
    "options": [
      "La bataille de Uhud",
      "La bataille de Badr",
      "La bataille de la Tranchée",
      "La bataille de Khaybar"
    ],
    "reponse_correcte": "La bataille de la Tranchée",
    "explication": "La bataille de la Tranchée a été nommée ainsi car les musulmans, sur le conseil de Salman Al-Farisi (RA), ont creusé une grande tranchée autour de Médine pour empêcher l'ennemi d'entrer.",
    "source": "La biographie du Prophète Muhammad (PSL) en points clés",
    "tags": [
      "sirah"
    ],
    "translations": {
      "ar": {
        "question": "أَيُّ غَزْوَةٍ سُمِّيَتْ بِاسْمِ الْخَنْدَقِ الَّذِي حُفِرَ حَوْلَ الْمَدِينَةِ لِلدِّفَاعِ عَنْهَا؟",
        "options": [
          "غَزْوَةُ أُحُدٍ",
          "غَزْوَةُ بَدْرٍ",
          "غَزْوَةُ الْخَنْدَقِ",
          "غَزْوَةُ خَيْبَرَ"
        ],
        "reponse_correcte": "غَزْوَةُ الْخَنْدَقِ",
        "explication": "سُمِّيَتْ غَزْوَةُ الْخَنْدَقِ بِهَذَا الِاسْمِ لِأَنَّ الْمُسْلِمِينَ، بِنَصِيحَةِ سَلْمَانَ الْفَارِسِيِّ (رَضِيَ اللَّهُ عَنْهُ)، حَفَرُوا خَنْدَقًا كَبِيرًا حَوْلَ الْمَدِينَةِ لِمَنْعِ الْأَعْدَاءِ مِنَ الدُّخُولِ."
      },
      "wo": {
        "question": "Lan mooy xare bi ñu tudd ci turu xandag bi ñu defoon ci wetu Madina ngir aar dëkk bi?",
        "options": [
          "Xare Uhud",
          "Xare Badr",
          "Xare Khandaq",
          "Xare Khaybar"
        ],
        "reponse_correcte": "Xare Khandaq",
        "explication": "Xare Khandaq tudd na ci turu xandag bi ndax jullit ñi, ci ndigalul Salman Al-Farisi (RA), def nañu xandag bu mag ci wetu Madina ngir tere noon yi dugg."
      }
    }
  },
  {
    "id": 476,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "En quelle année de l'Hégire le jeûne du Ramadan a-t-il été rendu obligatoire ?",
    "options": [
      "La première année de l'Hégire",
      "La deuxième année de l'Hégire",
      "La troisième année de l'Hégire",
      "La quatrième année de l'Hégire"
    ],
    "reponse_correcte": "La deuxième année de l'Hégire",
    "explication": "Le jeûne du Ramadan est devenu obligatoire pour les musulmans la deuxième année après l'Hégire du Prophète Muhammad (paix et bénédictions sur lui) de La Mecque à Médine. C'est une information importante pour comprendre l'histoire de l'Islam.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "فِي أَيِّ سَنَةٍ مِنَ الْهِجْرَةِ فُرِضَ صِيَامُ رَمَضَانَ؟",
        "options": [
          "السَّنَةِ الْأُولَى مِنَ الْهِجْرَةِ",
          "السَّنَةِ الثَّانِيَةِ مِنَ الْهِجْرَةِ",
          "السَّنَةِ الثَّالِثَةِ مِنَ الْهِجْرَةِ",
          "السَّنَةِ الرَّابِعَةِ مِنَ الْهِجْرَةِ"
        ],
        "reponse_correcte": "السَّنَةِ الثَّانِيَةِ مِنَ الْهِجْرَةِ",
        "explication": "صِيَامُ رَمَضَانَ أَصْبَحَ وَاجِبًا عَلَى الْمُسْلِمِينَ فِي السَّنَةِ الثَّانِيَةِ بَعْدَ هِجْرَةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) مِنْ مَكَّةَ إِلَى الْمَدِينَةِ. هَذِهِ مَعْلُومَةٌ مُهِمَّةٌ لِفَهْمِ تَارِيخِ الْإِسْلَامِ."
      },
      "wo": {
        "question": "Ci atum Hijra bu ñeela la wooru Ramadan war?",
        "options": [
          "Atum Hijra bu njëkk bi",
          "Atum Hijra bu ñaareel bi",
          "Atum Hijra bu ñetteel bi",
          "Atum Hijra bu ñeenteel bi"
        ],
        "reponse_correcte": "Atum Hijra bu ñaareel bi",
        "explication": "Wooru Ramadan war na ci jullit ñi ci ñaareelu atum Hijra ginaaw bi Yonent bi Muhammad (saw) tuxoo Makka dem Madina. Loolu ab xam-xam bu am solo la ngir mën a dégg taarixu Lislaam."
      }
    }
  },
  {
    "id": 477,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel est le rang du jeûne du Ramadan parmi les piliers de l'Islam ?",
    "options": [
      "Le deuxième pilier",
      "Le troisième pilier",
      "Le quatrième pilier",
      "Le cinquième pilier"
    ],
    "reponse_correcte": "Le quatrième pilier",
    "explication": "Le jeûne du Ramadan est le quatrième des cinq piliers de l'Islam, qui sont les fondations de notre religion. Les autres piliers sont l'attestation de foi, la prière, la zakat et le pèlerinage.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ تَرْتِيبُ صِيَامِ رَمَضَانَ بَيْنَ أَرْكَانِ الْإِسْلَامِ؟",
        "options": [
          "الرُّكْنُ الثَّانِي",
          "الرُّكْنُ الثَّالِثُ",
          "الرُّكْنُ الرَّابِعُ",
          "الرُّكْنُ الْخَامِسُ"
        ],
        "reponse_correcte": "الرُّكْنُ الرَّابِعُ",
        "explication": "صِيَامُ رَمَضَانَ هُوَ الرُّكْنُ الرَّابِعُ مِنْ أَرْكَانِ الْإِسْلَامِ الْخَمْسَةِ، الَّتِي هِيَ أَسَاسُ دِينِنَا. الْأَرْكَانُ الْأُخْرَى هِيَ شَهَادَةُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَإِقَامُ الصَّلَاةِ، وَإِيتَاءُ الزَّكَاةِ، وَحَجُّ الْبَيْتِ."
      },
      "wo": {
        "question": "Wooru Ramadan, lan la ci diggante ponki Lislaam yi?",
        "options": [
          "Ponku ñaareel bi",
          "Ponku ñetteel bi",
          "Ponku ñeenteel bi",
          "Ponku juróomeel bi"
        ],
        "reponse_correcte": "Ponku ñeenteel bi",
        "explication": "Wooru Ramadan mooy ñeenteelu ponk ci juróomi ponki Lislaam yi, ñoom ñoo di yëngu-yëngu diine ji. Yeneen ponk yi ñoo di seede, julli, zakat ak aj."
      }
    }
  },
  {
    "id": 478,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Le Prophète Muhammad (paix et bénédictions sur lui) nous a interdit de jeûner juste avant le Ramadan de combien de jours ?",
    "options": [
      "Une semaine",
      "Un jour ou deux",
      "Un mois",
      "Trois jours"
    ],
    "reponse_correcte": "Un jour ou deux",
    "explication": "Le Prophète (paix et bénédictions sur lui) nous a interdit de jeûner un jour ou deux avant le Ramadan pour ne pas anticiper le mois béni et pour bien distinguer le jeûne obligatoire du jeûne surérogatoire.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "نَهَانَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَنِ الصَّوْمِ قَبْلَ رَمَضَانَ بِكَمْ يَوْمٍ؟",
        "options": [
          "بِأُسْبُوعٍ",
          "بِيَوْمٍ أَوْ يَوْمَيْنِ",
          "بِشَهْرٍ",
          "بِثَلَاثَةِ أَيَّامٍ"
        ],
        "reponse_correcte": "بِيَوْمٍ أَوْ يَوْمَيْنِ",
        "explication": "نَهَانَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَنِ الصَّوْمِ قَبْلَ رَمَضَانَ بِيَوْمٍ أَوْ يَوْمَيْنِ لِكَيْ لَا نَسْتَبِقَ الشَّهْرَ الْمُبَارَكَ وَلِلتَّفْرِيقِ بَيْنَ الصَّوْمِ الْوَاجِبِ وَالتَّطَوُّعِ."
      },
      "wo": {
        "question": "Yonent bi Muhammad (saw) tere nañu woor lu jiitu Ramadan ci ñata bis?",
        "options": [
          "Ci benn ayu-bis",
          "Ci benn bis walla ñaar",
          "Ci benn weer",
          "Ci ñett bis"
        ],
        "reponse_correcte": "Ci benn bis walla ñaar",
        "explication": "Yonent bi (saw) tere nañu woor benn bis walla ñaar njëkk Ramadan ngir bañ a jiitu weeru barke bi te ngir mën a texe diggante wooru war ak wooru sunna."
      }
    }
  },
  {
    "id": 479,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "En quel mois le Saint Coran a-t-il été révélé pour la première fois ?",
    "options": [
      "Mouharram",
      "Dhoul Hijjah",
      "Ramadan",
      "Chawwal"
    ],
    "reponse_correcte": "Ramadan",
    "explication": "Le mois de Ramadan est très spécial car c'est pendant ce mois que le Coran, notre livre sacré, a commencé à être révélé au Prophète Muhammad (paix et bénédictions sur lui). C'est pourquoi on l'appelle aussi le \"mois du Coran\".",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "فِي أَيِّ شَهْرٍ نَزَلَ الْقُرْآنُ الْكَرِيمُ لِأَوَّلِ مَرَّةٍ؟",
        "options": [
          "الْمُحَرَّمِ",
          "ذِي الْحِجَّةِ",
          "رَمَضَانَ",
          "شَوَّالٍ"
        ],
        "reponse_correcte": "رَمَضَانَ",
        "explication": "شَهْرُ رَمَضَانَ مُمَيَّزٌ جِدًّا لِأَنَّ الْقُرْآنَ، كِتَابَنَا الْمُقَدَّسَ، بَدَأَ نُزُولُهُ فِيهِ عَلَى النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ). لِذَلِكَ يُسَمَّى أَيْضًا \"شَهْرَ الْقُرْآنِ\"."
      },
      "wo": {
        "question": "Ci weeru lan la Alxuraan bu sell bi dale ci njëkk?",
        "options": [
          "Muharram",
          "Dhul Hijjah",
          "Ramadan",
          "Shawwal"
        ],
        "reponse_correcte": "Ramadan",
        "explication": "Weeru Ramadan am na solo lool ndax ci weer woowu la Alxuraan, sunu téere bu sell bi, dale ci Yonent bi Muhammad (saw). Looloo tax ñu koy wax itam \"weeru Alxuraan\"."
      }
    }
  },
  {
    "id": 480,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Parmi les Sunnahs (traditions) du Prophète (paix et bénédictions sur lui) pendant le Ramadan, laquelle est correcte ?",
    "options": [
      "Retarder le repas de rupture du jeûne (Iftar) et avancer le repas de l'aube (Souhour)",
      "Avancer le repas de rupture du jeûne (Iftar) et retarder le repas de l'aube (Souhour)",
      "Retarder le repas de rupture du jeûne (Iftar) et retarder le repas de l'aube (Souhour)",
      "Avancer le repas de rupture du jeûne (Iftar) et avancer le repas de l'aube (Souhour)"
    ],
    "reponse_correcte": "Avancer le repas de rupture du jeûne (Iftar) et retarder le repas de l'aube (Souhour)",
    "explication": "C'est une Sunnah de se hâter de rompre le jeûne dès que le soleil se couche et de retarder le Souhour (repas de l'aube) le plus près possible de l'heure du Fajr. Cela apporte une grande bénédiction et suit l'exemple de notre Prophète bien-aimé.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مِنْ سُنَنِ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) فِي رَمَضَانَ، أَيُّهَا صَحِيحٌ؟",
        "options": [
          "تَأْخِيرُ الْفُطُورِ وَالتَّبْكِيرُ بِالسَّحُورِ",
          "تَعْجِيلُ الْفُطُورِ وَتَأْخِيرُ السَّحُورِ",
          "تَأْخِيرُ الْفُطُورِ وَتَأْخِيرُ السَّحُورِ",
          "تَعْجِيلُ الْفُطُورِ وَتَعْجِيلُ السَّحُورِ"
        ],
        "reponse_correcte": "تَعْجِيلُ الْفُطُورِ وَتَأْخِيرُ السَّحُورِ",
        "explication": "مِنَ السُّنَّةِ الْمُبَادَرَةُ بِالْفِطْرِ عِنْدَ غُرُوبِ الشَّمْسِ وَتَأْخِيرُ السَّحُورِ إِلَى أَقْرَبِ وَقْتٍ مُمْكِنٍ مِنْ أَذَانِ الْفَجْرِ. هَذَا يَجْلِبُ بَرَكَةً كَبِيرَةً وَيَتْبَعُ مِثَالَ نَبِيِّنَا الْحَبِيبِ."
      },
      "wo": {
        "question": "Ci sunna Yonent bi (saw) ci Ramadan, lan mooy lu dëgg?",
        "options": [
          "Yeesal ndog yi te gaawale sahur",
          "Gaawale ndog yi te yeesal sahur",
          "Yeesal ndog yi te yeesal sahur",
          "Gaawale ndog yi te gaawale sahur"
        ],
        "reponse_correcte": "Gaawale ndog yi te yeesal sahur",
        "explication": "Sunna la ñu gaaw a dog su jant bi soowee te ñu yeesal sahur bi ba mu jege Fajr. Loolu dafa indi barke bu bari te dafa topp ci royu Yonent bi (saw)."
      }
    }
  },
  {
    "id": 481,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Qu'est-ce que la Zakat al-Fitr que Allah nous a rendue obligatoire ?",
    "options": [
      "De la nourriture de base du pays donnée aux pauvres et aux nécessiteux",
      "De l'argent donné aux pauvres et aux nécessiteux avant la prière de l'Aïd",
      "De la nourriture ou de l'argent donné aux pauvres et aux nécessiteux avant la prière de l'Aïd",
      "De l'argent donné aux pauvres et aux nécessiteux après la prière de l'Aïd"
    ],
    "reponse_correcte": "De la nourriture de base du pays donnée aux pauvres et aux nécessiteux",
    "explication": "La Zakat al-Fitr est une aumône obligatoire donnée sous forme de nourriture de base (comme des dattes, du riz, du blé) aux pauvres et aux nécessiteux avant la prière de l'Aïd. Elle purifie le jeûneur et nourrit les démunis pour qu'ils puissent aussi célébrer l'Aïd.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ زَكَاةُ الْفِطْرِ الَّتِي فَرَضَهَا اللَّهُ عَلَيْنَا؟",
        "options": [
          "طَعَامٌ مِنْ قُوتِ أَهْلِ الْبَلَدِ يُعْطَى لِلْفُقَرَاءِ وَالْمَسَاكِينِ",
          "أَوْرَاقٌ نَقْدِيَّةٌ تُعْطَى لِلْفُقَرَاءِ وَالْمَسَاكِينِ قَبْلَ صَلَاةِ الْعِيدِ",
          "طَعَامٌ أَوْ نُقُودٌ تُعْطَى لِلْفُقَرَاءِ وَالْمَسَاكِينِ قَبْلَ صَلَاةِ الْعِيدِ",
          "أَوْرَاقٌ نَقْدِيَّةٌ تُعْطَى لِلْفُقَرَاءِ وَالْمَسَاكِينِ بَعْدَ صَلَاةِ الْعِيدِ"
        ],
        "reponse_correcte": "طَعَامٌ مِنْ قُوتِ أَهْلِ الْبَلَدِ يُعْطَى لِلْفُقَرَاءِ وَالْمَسَاكِينِ",
        "explication": "زَكَاةُ الْفِطْرِ هِيَ صَدَقَةٌ وَاجِبَةٌ تُعْطَى عَلَى شَكْلِ طَعَامٍ أَسَاسِيٍّ (كَالتَّمْرِ أَوِ الْأَرُزِّ أَوِ الْقَمْحِ) لِلْفُقَرَاءِ وَالْمَسَاكِينِ قَبْلَ صَلَاةِ الْعِيدِ. إِنَّهَا تُطَهِّرُ الصَّائِمَ وَتُطْعِمُ الْمُحْتَاجِينَ لِيَتَمَكَّنُوا أَيْضًا مِنَ الِاحْتِفَالِ بِالْعِيدِ."
      },
      "wo": {
        "question": "Lan mooy Zakat al-Fitr bi Yalla defal nu war?",
        "options": [
          "Ndeyeum dund gu dekk bi jox ko ñakk yi ak miskin yi",
          "Xaalis buñu jox ñakk yi ak miskin yi njëkk julli Aid",
          "Ndeyeum dund walla xaalis buñu jox ñakk yi ak miskin yi njëkk julli Aid",
          "Xaalis buñu jox ñakk yi ak miskin yi ginaaw julli Aid"
        ],
        "reponse_correcte": "Ndeyeum dund gu dekk bi jox ko ñakk yi ak miskin yi",
        "explication": "Zakat al-Fitr mooy sarax su war suñu joxe ci melokaanu dund gu dekk bi (ni mel ni tandarma, ceeb, walla farin) ñakk yi ak miskin yi njëkk julli Aid. Dafay setal ki woor te dundal ñakk yi ngir ñoom itam mën a fete Aid bi."
      }
    }
  },
  {
    "id": 482,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Le voyageur et le malade dont la guérison est espérée, peuvent-ils rompre leur jeûne et doivent-ils le rattraper plus tard ?",
    "options": [
      "Oui, c'est correct",
      "Non, c'est faux",
      "Ils ne peuvent pas rompre leur jeûne",
      "Ils peuvent rompre mais ne rattrapent pas"
    ],
    "reponse_correcte": "Oui, c'est correct",
    "explication": "Allah nous facilite les choses. Si tu es malade et que tu espères guérir, ou si tu es en voyage, tu peux rompre ton jeûne. Mais tu devras rattraper ces jours plus tard, quand tu seras en bonne santé ou de retour de voyage.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "هَلْ يَجُوزُ لِلْمُسَافِرِ وَالْمَرِيضِ الَّذِي يُرْجَى لَهُ الشِّفَاءُ أَنْ يُفْطِرَا وَيَجِبُ عَلَيْهِمَا أَنْ يَقْضِيَا صَوْمَهُمَا بَعْدَ ذَلِكَ؟",
        "options": [
          "نَعَمْ، صَحِيحٌ",
          "لَا، خَطَأٌ",
          "لَا يَجُوزُ لَهُمَا أَنْ يُفْطِرَا",
          "يَجُوزُ لَهُمَا أَنْ يُفْطِرَا وَلَا يَقْضِيَانِ"
        ],
        "reponse_correcte": "نَعَمْ، صَحِيحٌ",
        "explication": "اللَّهُ يُيَسِّرُ الْأُمُورَ عَلَيْنَا. إِذَا كُنْتَ مَرِيضًا وَتَأْمُلُ الشِّفَاءَ، أَوْ كُنْتَ مُسَافِرًا، يُمْكِنُكَ الْإِفْطَارُ. وَلَكِنْ يَجِبُ عَلَيْكَ قَضَاءُ هَذِهِ الْأَيَّامِ لَاحِقًا، عِنْدَمَا تَكُونُ بِصِحَّةٍ جَيِّدَةٍ أَوْ تَعُودُ مِنْ سَفَرِكَ."
      },
      "wo": {
        "question": "Jëmm ju yéewu ak jëmm ju feebar juñu yaakaar ne dina wér, mën nañu dog te war nañu ko faji ginaaw bi?",
        "options": [
          "Waaw, dëgg la",
          "Déedéet, lu baaxul la",
          "Mënunu dog",
          "Mën nañu dog waaye duñu faji"
        ],
        "reponse_correcte": "Waaw, dëgg la",
        "explication": "Yalla dafa nu yombalal. Su fekkee da ngay feebar te yaakaar ne dina nga wér, walla da ngay yéewu, mën nga dog. Waaye da nga war a faji bis yooyu ginaaw bi, su nga wéree walla su nga dellusee ci sa yéewu."
      }
    }
  },
  {
    "id": 483,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "L'incapable de jeûner et le malade dont la guérison n'est pas espérée, peuvent-ils rompre leur jeûne et doivent-ils nourrir un pauvre pour chaque jour ?",
    "options": [
      "Oui, c'est correct",
      "Non, c'est faux",
      "Ils doivent jeûner malgré tout",
      "Ils ne doivent rien faire"
    ],
    "reponse_correcte": "Oui, c'est correct",
    "explication": "Pour ceux qui ne peuvent pas jeûner du tout, comme les personnes très âgées ou les malades chroniques qui n'espèrent pas guérir, Allah leur a facilité les choses. Ils ne jeûnent pas, mais ils doivent nourrir un pauvre pour chaque jour de jeûne manqué. C'est une belle façon de compenser et d'aider les autres.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "هَلْ يَجُوزُ لِلْعَاجِزِ عَنِ الصِّيَامِ وَالْمَرِيضِ الَّذِي لَا يُرْجَى لَهُ الشِّفَاءُ أَنْ يُفْطِرَا، وَلَكِنْ يَجِبُ عَلَيْهِمَا أَنْ يُطْعِمَا بَدَلَ الصِّيَامِ عَنْ كُلِّ يَوْمٍ مِسْكِينًا؟",
        "options": [
          "نَعَمْ، صَحِيحٌ",
          "لَا، خَطَأٌ",
          "يَجِبُ عَلَيْهِمَا الصِّيَامُ بِالرَّغْمِ مِنْ ذَلِكَ",
          "لَا يَجِبُ عَلَيْهِمَا فِعْلُ شَيْءٍ"
        ],
        "reponse_correcte": "نَعَمْ، صَحِيحٌ",
        "explication": "لِلَّذِينَ لَا يَسْتَطِيعُونَ الصِّيَامَ مُطْلَقًا، كَالْكِبَارِ فِي السِّنِّ جِدًّا أَوِ الْمَرْضَى الْمُزْمِنِينَ الَّذِينَ لَا يُرْجَى شِفَاؤُهُمْ، قَدْ يَسَّرَ اللَّهُ عَلَيْهِمُ الْأَمْرَ. فَهُمْ لَا يَصُومُونَ، وَلَكِنْ يَجِبُ عَلَيْهِمْ إِطْعَامُ مِسْكِينٍ عَنْ كُلِّ يَوْمٍ فَاتَهُمْ. هَذِهِ طَرِيقَةٌ جَمِيلَةٌ لِلتَّعْوِيضِ وَمُسَاعَدَةِ الْآخَرِينَ."
      },
      "wo": {
        "question": "Ki mënul woor ak jëmm ju feebar juñu yaakaar ne dina wér, mën nañu dog te war nañu lekkale benn miskin ci bis bu nekk?",
        "options": [
          "Waaw, dëgg la",
          "Déedéet, lu baaxul la",
          "War nañu woor ci lu nekk",
          "Warunu def dara"
        ],
        "reponse_correcte": "Waaw, dëgg la",
        "explication": "Ñi mënul woor dara, ni mel ni mag yu màgg yi walla ñi feebar feebar bu sax te yaakaarunu ne dinañu wér, Yalla dafa leen yombalal. Duñu woor, waaye war nañu lekkale benn miskin ci bis bu nekk buñu ñakk. Loolu ab yoon bu rafet la ngir faji te dimbali yeneen ñi."
      }
    }
  },
  {
    "id": 484,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Parmi les exigences du jeûne, laquelle est la plus importante ?",
    "options": [
      "Jouer à des jeux interdits",
      "Regarder des séries comiques",
      "La piété envers Allah et la protection de tous les membres du corps contre les interdits",
      "Manger et boire beaucoup"
    ],
    "reponse_correcte": "La piété envers Allah et la protection de tous les membres du corps contre les interdits",
    "explication": "Le jeûne n'est pas seulement s'abstenir de manger et de boire. C'est aussi un entraînement pour notre âme et notre corps à se rapprocher d'Allah. Cela signifie que nous devons faire attention à ce que nous disons, à ce que nous regardons, à ce que nous écoutons, et à toutes nos actions, pour qu'elles soient agréables à Allah.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مِنْ لَوَازِمِ الصِّيَامِ، أَيُّهَا الْأَهَمُّ؟",
        "options": [
          "اللَّعِبُ بِالْأَلْعَابِ الْمُحَرَّمَةِ",
          "مُشَاهَدَةُ الْمُسَلْسَلَاتِ الْمُضْحِكَةِ",
          "تَقْوَى اللَّهِ وَحِفْظُ جَمِيعِ الْجَوَارِحِ عَنِ الْمُحَرَّمَاتِ",
          "الْأَكْلُ وَالشُّرْبُ الْكَثِيرُ"
        ],
        "reponse_correcte": "تَقْوَى اللَّهِ وَحِفْظُ جَمِيعِ الْجَوَارِحِ عَنِ الْمُحَرَّمَاتِ",
        "explication": "الصِّيَامُ لَيْسَ مُجَرَّدَ الْإِمْسَاكِ عَنِ الْأَكْلِ وَالشُّرْبِ. إِنَّهُ أَيْضًا تَدْرِيبٌ لِرُوحِنَا وَجَسَدِنَا عَلَى التَّقَرُّبِ إِلَى اللَّهِ. هَذَا يَعْنِي أَنَّهُ يَجِبُ عَلَيْنَا الِانْتِبَاهُ لِمَا نَقُولُهُ، وَمَا نَنْظُرُ إِلَيْهِ، وَمَا نَسْتَمِعُ إِلَيْهِ، وَلِجَمِيعِ أَفْعَالِنَا، لِتَكُونَ مُرْضِيَةً لِلَّهِ."
      },
      "wo": {
        "question": "Ci li wooru laaj, lan mooy li ëpp solo?",
        "options": [
          "Féex ak ay jëw yu haram",
          "Seetaan ay série yu reetaan",
          "Raggal Yalla ak samm yëpp ci sa yaram ci haram yi",
          "Lekk ak naan lu bari"
        ],
        "reponse_correcte": "Raggal Yalla ak samm yëpp ci sa yaram ci haram yi",
        "explication": "Wooru du rekk bañ a lekk ak bañ a naan. Ab yar la itam ci sunu ruu ak sunu yaram ngir jege Yalla. Loolu dafa tekki ne war nañu moytu li ñuy wax, li ñuy seetaan, li ñuy dégg, ak sunu jëf yëpp, ngir ñu neex Yalla."
      }
    }
  },
  {
    "id": 485,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien d'Aïds (fêtes) les musulmans ont-ils ?",
    "options": [
      "L'Aïd des enfants et l'Aïd des mères",
      "L'Aïd de Noël et l'Aïd de l'amour",
      "L'Aïd al-Adha et l'Aïd al-Fitr",
      "Un seul Aïd"
    ],
    "reponse_correcte": "L'Aïd al-Adha et l'Aïd al-Fitr",
    "explication": "En Islam, nous avons deux grandes fêtes joyeuses : l'Aïd al-Fitr, qui vient après le Ramadan, et l'Aïd al-Adha, la fête du sacrifice. Ce sont des jours de joie, de remerciement à Allah et de partage avec la famille et les amis.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ عِيدًا لِلْمُسْلِمِينَ؟",
        "options": [
          "عِيدُ الطِّفْلِ وَعِيدُ الْأُمِّ",
          "عِيدُ الْكَرِيسْمَسِ وَعِيدُ الْحُبِّ",
          "عِيدُ الْأَضْحَى وَعِيدُ الْفِطْرِ",
          "عِيدٌ وَاحِدٌ فَقَطْ"
        ],
        "reponse_correcte": "عِيدُ الْأَضْحَى وَعِيدُ الْفِطْرِ",
        "explication": "فِي الْإِسْلَامِ، لَدَيْنَا عِيدَانِ كَبِيرَانِ مُفْرِحَانِ: عِيدُ الْفِطْرِ، الَّذِي يَأْتِي بَعْدَ رَمَضَانَ، وَعِيدُ الْأَضْحَى، عِيدُ الْقُرْبَانِ. هَذِهِ أَيَّامُ فَرَحٍ وَشُكْرٍ لِلَّهِ وَمُشَارَكَةٍ مَعَ الْعَائِلَةِ وَالْأَصْدِقَاءِ."
      },
      "wo": {
        "question": "Ñata Aid lañu am ci Lislaam?",
        "options": [
          "Aidu doom yi ak Aidu yaay yi",
          "Aidu Noël ak Aidu mbëggeel",
          "Aid al-Adha ak Aid al-Fitr",
          "Benn Aid rekk"
        ],
        "reponse_correcte": "Aid al-Adha ak Aid al-Fitr",
        "explication": "Ci Lislaam, am nañu ñaari Aid yu mag yu neex: Aid al-Fitr, bi ñuy fete ginaaw Ramadan, ak Aid al-Adha, Aidu sarax bi. Bis yoyu bisu mbëggeel la, bisu gërëm Yalla ak bisu séddale ak sa njaboot ak sa xarit."
      }
    }
  },
  {
    "id": 486,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quand commence et quand se termine le temps de la prière de l'Aïd ?",
    "options": [
      "Elle commence au lever du soleil et se termine après le zénith",
      "Elle commence au lever du soleil et se termine au lever du soleil",
      "Elle commence à la hauteur du soleil d'une lance et se termine avant le zénith",
      "Elle commence à la hauteur du soleil d'une lance et se termine après le zénith"
    ],
    "reponse_correcte": "Elle commence à la hauteur du soleil d'une lance et se termine avant le zénith",
    "explication": "La prière de l'Aïd commence environ un quart d'heure après le lever du soleil (quand le soleil est à la hauteur d'une lance) et se termine juste avant que le soleil n'atteigne son point le plus haut dans le ciel (le zénith). C'est important de la faire à l'heure pour ne pas manquer cette belle prière.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَتَى يَبْدَأُ وَمَتَى يَنْتَهِي وَقْتُ صَلَاةِ الْعِيدِ؟",
        "options": [
          "يَبْدَأُ مِنْ طُلُوعِ الشَّمْسِ وَيَنْتَهِي بَعْدَ زَوَالِ الشَّمْسِ",
          "يَبْدَأُ مِنْ طُلُوعِ الْفَجْرِ وَيَنْتَهِي عِنْدَ شُرُوقِ الشَّمْسِ",
          "يَبْدَأُ عِنْدَ ارْتِفَاعِ الشَّمْسِ قَدْرَ رُمْحٍ وَيَنْتَهِي قَبْلَ زَوَالِ الشَّمْسِ",
          "يَبْدَأُ عِنْدَ ارْتِفَاعِ الشَّمْسِ قَدْرَ رُمْحٍ وَيَنْتَهِي بَعْدَ زَوَالِ الشَّمْسِ"
        ],
        "reponse_correcte": "يَبْدَأُ عِنْدَ ارْتِفَاعِ الشَّمْسِ قَدْرَ رُمْحٍ وَيَنْتَهِي قَبْلَ زَوَالِ الشَّمْسِ",
        "explication": "صَلَاةُ الْعِيدِ تَبْدَأُ بَعْدَ شُرُوقِ الشَّمْسِ بِرُبْعِ سَاعَةٍ تَقْرِيبًا (عِنْدَمَا تَرْتَفِعُ الشَّمْسُ قَدْرَ رُمْحٍ) وَتَنْتَهِي قَبْلَ أَنْ تَصِلَ الشَّمْسُ إِلَى مُنْتَصَفِ السَّمَاءِ (الزَّوَالِ). مِنْ الْمُهِمِّ أَدَاؤُهَا فِي وَقْتِهَا لِكَيْ لَا نُفَوِّتَ هَذِهِ الصَّلَاةَ الْجَمِيلَةَ."
      },
      "wo": {
        "question": "Kañ la julli Aid di tàmbalee te kañ la di jéex?",
        "options": [
          "Di tàmbalee ci bëcëg te di jéex ginaaw tisbaar",
          "Di tàmbalee ci suba te di jéex ci bëcëg",
          "Di tàmbalee ci bëcëg bu jant bi yéegoo ci lu tollu ak benn lance te di jéex njëkk tisbaar",
          "Di tàmbalee ci bëcëg bu jant bi yéegoo ci lu tollu ak benn lance te di jéex ginaaw tisbaar"
        ],
        "reponse_correcte": "Di tàmbalee ci bëcëg bu jant bi yéegoo ci lu tollu ak benn lance te di jéex njëkk tisbaar",
        "explication": "Julli Aid dafay tàmbalee lu tollu ak fukki minit ak juróom ginaaw bëcëg (su jant bi yéegoo ci lu tollu ak benn lance) te di jéex njëkk jant bi aju ci diggu asamaan (tisbaar). Am solo la ñu def ko ci waxtu wi ngir bañ a ñakk julli bu rafet boobu."
      }
    }
  },
  {
    "id": 487,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Quand est-il recommandé de faire le Takbir (dire \"Allahou Akbar\") pour l'Aïd al-Fitr ?",
    "options": [
      "Dès l'apparition du croissant de lune de Chawwal jusqu'à la prière de l'Aïd",
      "Du Fajr du jour de l'Aïd jusqu'au troisième jour de Chawwal",
      "De la prière de l'Icha de la nuit de l'Aïd jusqu'à l'Asr du jour de l'Aïd",
      "Pendant les dix premiers jours de Dhoul Hijjah"
    ],
    "reponse_correcte": "Dès l'apparition du croissant de lune de Chawwal jusqu'à la prière de l'Aïd",
    "explication": "Pour l'Aïd al-Fitr, nous commençons à dire le Takbir dès que nous savons que le mois de Ramadan est terminé et que le mois de Chawwal a commencé (généralement après avoir vu la nouvelle lune), et nous continuons jusqu'à ce que la prière de l'Aïd soit accomplie. C'est une façon de montrer notre joie et notre gratitude à Allah.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَتَى يُسَنُّ التَّكْبِيرُ فِي عِيدِ الْفِطْرِ؟",
        "options": [
          "مِنْ ثُبُوتِ دُخُولِ شَهْرِ شَوَّالٍ حَتَّى صَلَاةِ الْعِيدِ",
          "مِنْ صَلَاةِ فَجْرِ يَوْمِ الْعِيدِ حَتَّى ثَالِثِ يَوْمٍ مِنْ شَهْرِ شَوَّالٍ",
          "مِنْ صَلَاةِ الْعِشَاءِ لِلَيْلَةِ الْعِيدِ حَتَّى عَصْرِ يَوْمِ الْعِيدِ",
          "فِي الْأَيَّامِ الْعَشْرِ الْأُولَى مِنْ ذِي الْحِجَّةِ"
        ],
        "reponse_correcte": "مِنْ ثُبُوتِ دُخُولِ شَهْرِ شَوَّالٍ حَتَّى صَلَاةِ الْعِيدِ",
        "explication": "لِعِيدِ الْفِطْرِ، نَبْدَأُ بِالتَّكْبِيرِ بِمُجَرَّدِ عِلْمِنَا بِانْتِهَاءِ شَهْرِ رَمَضَانَ وَبَدْءِ شَهْرِ شَوَّالٍ (عَادَةً بَعْدَ رُؤْيَةِ الْهِلَالِ)، وَنَسْتَمِرُّ حَتَّى تُؤَدَّى صَلَاةُ الْعِيدِ. هَذِهِ طَرِيقَةٌ لِإِظْهَارِ فَرَحِنَا وَشُكْرِنَا لِلَّهِ."
      },
      "wo": {
        "question": "Kañ lañuy def Takbir ci Aid al-Fitr?",
        "options": [
          "Ci njëkk gi weeru Shawwal feeñ ba ci julli Aid",
          "Ci Fajr bu bisu Aid ba ci ñetteelu bisu Shawwal",
          "Ci julli Icha bu guddi Aid ba ci Asr bu bisu Aid",
          "Ci fukki bis yu njëkk yi ci Dhul Hijjah"
        ],
        "reponse_correcte": "Ci njëkk gi weeru Shawwal feeñ ba ci julli Aid",
        "explication": "Ci Aid al-Fitr, dañuy tàmbalee Takbir buñu xamee ne weeru Ramadan jéex na te weeru Shawwal tàmbalee na (ci lu ëpp ginaaw biñu gisee weeru bees bi), te dañuy wéy ba julli Aid bi jéex. Loolu ab yoon la ngir wone sunu mbëggeel ak sunu gërëm ci Yalla."
      }
    }
  },
  {
    "id": 488,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Comment est l'odeur de la bouche du jeûneur auprès d'Allah ?",
    "options": [
      "Désagréable",
      "Normale",
      "Plus agréable que l'odeur du musc",
      "Indifférente"
    ],
    "reponse_correcte": "Plus agréable que l'odeur du musc",
    "explication": "Même si l'odeur de la bouche du jeûneur peut être un peu différente pour nous, auprès d'Allah, elle est très aimée et plus agréable que le parfum du musc. C'est un signe de la grande récompense et de l'honneur que les jeûneurs reçoivent d'Allah pour leur obéissance.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ رَائِحَةُ فَمِ الصَّائِمِ عِنْدَ اللَّهِ؟",
        "options": [
          "كَرِيهَةٌ",
          "عَادِيَّةٌ",
          "أَطْيَبُ مِنْ رِيحِ الْمِسْكِ",
          "غَيْرُ مُهِمَّةٍ"
        ],
        "reponse_correcte": "أَطْيَبُ مِنْ رِيحِ الْمِسْكِ",
        "explication": "حَتَّى لَوْ كَانَتْ رَائِحَةُ فَمِ الصَّائِمِ مُخْتَلِفَةً قَلِيلًا بِالنِّسْبَةِ لَنَا، فَإِنَّهَا عِنْدَ اللَّهِ مَحْبُوبَةٌ جِدًّا وَأَطْيَبُ مِنْ رَائِحَةِ الْمِسْكِ. هَذِهِ عَلَامَةٌ عَلَى الْأَجْرِ الْعَظِيمِ وَالشَّرَفِ الَّذِي يَنَالُهُ الصَّائِمُونَ مِنْ اللَّهِ عَلَى طَاعَتِهِمْ."
      },
      "wo": {
        "question": "Nu mu mel xëdd gu ki woor ci Yalla?",
        "options": [
          "Lu bonn la",
          "Lu normal la",
          "Gën a neex xëdd gu misk",
          "Lu amul solo la"
        ],
        "reponse_correcte": "Gën a neex xëdd gu misk",
        "explication": "Même si xëdd gu ki woor mën na nekk lu wuute tuuti ci nun, ci Yalla dafa neex lool te gën a neex xëdd gu misk. Loolu ab tektal la ci pay gi ak daraja gi ñuy jox ñi woor ci seen topp Yalla."
      }
    }
  },
  {
    "id": 489,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Le jeûne du Ramadan est obligatoire pour qui ?",
    "options": [
      "Musulman, sain d'esprit, pubère, résident, capable, femme exempte de menstrues et de lochies",
      "Musulman, sain d'esprit, pubère, résident, capable",
      "Musulman, sain d'esprit, pubère",
      "Tous les musulmans, quel que soit leur âge"
    ],
    "reponse_correcte": "Musulman, sain d'esprit, pubère, résident, capable, femme exempte de menstrues et de lochies",
    "explication": "Pour que le jeûne du Ramadan soit obligatoire, il faut remplir plusieurs conditions : être musulman, avoir toute sa raison, avoir atteint la puberté, être résident (non voyageur), être capable de jeûner (non malade), et pour les femmes, être exempte de menstrues ou de lochies. Si l'une de ces conditions n'est pas remplie, le jeûne n'est pas obligatoire, mais il peut y avoir des compensations.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "عَلَى مَنْ يَجِبُ صَوْمُ رَمَضَانَ؟",
        "options": [
          "عَلَى كُلِّ مُسْلِمٍ، عَاقِلٍ، بَالِغٍ، مُقِيمٍ، قَادِرٍ، وَامْرَأَةٍ خَالِيَةٍ عَنِ الْحَيْضِ وَالنِّفَاسِ",
          "عَلَى كُلِّ مُسْلِمٍ، عَاقِلٍ، بَالِغٍ، مُقِيمٍ، قَادِرٍ",
          "عَلَى كُلِّ مُسْلِمٍ، عَاقِلٍ، بَالِغٍ",
          "عَلَى جَمِيعِ الْمُسْلِمِينَ بِغَضِّ النَّظَرِ عَنْ عُمْرِهِمْ"
        ],
        "reponse_correcte": "عَلَى كُلِّ مُسْلِمٍ، عَاقِلٍ، بَالِغٍ، مُقِيمٍ، قَادِرٍ، وَامْرَأَةٍ خَالِيَةٍ عَنِ الْحَيْضِ وَالنِّفَاسِ",
        "explication": "لِكَيْ يَكُونَ صَوْمُ رَمَضَانَ وَاجِبًا، يَجِبُ تَوَفُّرُ عِدَّةِ شُرُوطٍ: أَنْ يَكُونَ مُسْلِمًا، عَاقِلًا، بَالِغًا، مُقِيمًا (غَيْرَ مُسَافِرٍ)، قَادِرًا عَلَى الصِّيَامِ (غَيْرَ مَرِيضٍ)، وَبِالنِّسْبَةِ لِلنِّسَاءِ، أَنْ تَكُونَ خَالِيَةً مِنَ الْحَيْضِ أَوِ النِّفَاسِ. إِذَا لَمْ يَتَوَفَّرْ أَحَدُ هَذِهِ الشُّرُوطِ، فَالصِّيَامُ لَيْسَ وَاجِبًا، وَلَكِنْ قَدْ تَكُونُ هُنَاكَ كَفَّارَاتٌ."
      },
      "wo": {
        "question": "Wooru Ramadan war na ci kan?",
        "options": [
          "Ci jullit, ku am xel, ku mag, ku dëkk, ku mën, ak jigéen ju set ci caax ak nifaas",
          "Ci jullit, ku am xel, ku mag, ku dëkk, ku mën",
          "Ci jullit, ku am xel, ku mag",
          "Ci jullit yëpp, lu nekk seen at"
        ],
        "reponse_correcte": "Ci jullit, ku am xel, ku mag, ku dëkk, ku mën, ak jigéen ju set ci caax ak nifaas",
        "explication": "Ngir wooru Ramadan war, dafa laaj ñu am ay sàrt yu bari: nekk jullit, am sa xel mat, magat, dëkk (du yéewu), mën a woor (du feebar), te ci jigéen ñi, ñu set ci caax ak nifaas. Su fekkee benn ci sàrt yooyu amul, wooru warul, waaye mën na am ay faju."
      }
    }
  },
  {
    "id": 490,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Quelle est la meilleure invocation à dire pendant la Nuit du Destin (Laylat al-Qadr) ?",
    "options": [
      "Ô Allah, accorde-moi de l'argent",
      "Ô Allah, accorde-moi une belle demeure",
      "Ô Allah, Tu es Pardonneur, Tu aimes le pardon, alors pardonne-moi",
      "Ô Allah, accorde-moi la santé"
    ],
    "reponse_correcte": "Ô Allah, Tu es Pardonneur, Tu aimes le pardon, alors pardonne-moi",
    "explication": "La Nuit du Destin est une nuit très spéciale où les invocations sont exaucées. Le Prophète (paix et bénédictions sur lui) a enseigné à Aïcha (qu'Allah l'agrée) de dire cette invocation : \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni\" (Ô Allah, Tu es Pardonneur, Tu aimes le pardon, alors pardonne-moi). C'est la meilleure demande que l'on puisse faire en cette nuit bénie.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ أَفْضَلُ دُعَاءٍ يُقَالُ فِي لَيْلَةِ الْقَدْرِ؟",
        "options": [
          "اللَّهُمَّ ارْزُقْنِي مَالًا",
          "اللَّهُمَّ ارْزُقْنِي مَنْزِلًا",
          "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
          "اللَّهُمَّ ارْزُقْنِي الصِّحَّةَ"
        ],
        "reponse_correcte": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        "explication": "لَيْلَةُ الْقَدْرِ لَيْلَةٌ خَاصَّةٌ جِدًّا تُسْتَجَابُ فِيهَا الدَّعَوَاتُ. عَلَّمَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَائِشَةَ (رَضِيَ اللَّهُ عَنْهَا) أَنْ تَقُولَ هَذَا الدُّعَاءَ: \"اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي\". هَذَا أَفْضَلُ طَلَبٍ يُمْكِنُ الْمَرْءُ أَنْ يَدْعُوَ بِهِ فِي هَذِهِ اللَّيْلَةِ الْمُبَارَكَةِ."
      },
      "wo": {
        "question": "Lan mooy ñaan gu gën ci Laylat al-Qadr?",
        "options": [
          "Yalla, may ma xaalis",
          "Yalla, may ma kër gu baax",
          "Yalla, yaw yaa ngi baal, yaa ngi bëgg baal, baal ma",
          "Yalla, may ma wér gu yaram"
        ],
        "reponse_correcte": "Yalla, yaw yaa ngi baal, yaa ngi bëgg baal, baal ma",
        "explication": "Guddi Qadr guddi gu am solo la lool, ci la ñaan yi di ñu tontu. Yonent bi (saw) jangal na Aïcha (Yalla na ko Yalla gërëm) mu wax ñaan gi: \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni\" (Yalla, yaw yaa ngi baal, yaa ngi bëgg baal, baal ma). Loolu mooy ñaan gu gën gi ñu mën a def ci guddi gu barke googu."
      }
    }
  },
  {
    "id": 491,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quel est le statut de la prière du Tarawih pendant le Ramadan ?",
    "options": [
      "Recommandée (Mustahabbah)",
      "Innovation (Bid'ah)",
      "Sunnah confirmée (Sunnah Mu'akkadah)",
      "Obligatoire (Fard)"
    ],
    "reponse_correcte": "Sunnah confirmée (Sunnah Mu'akkadah)",
    "explication": "La prière du Tarawih est une Sunnah très importante et confirmée du Prophète (paix et bénédictions sur lui) pendant le mois de Ramadan. Elle apporte de grandes récompenses et permet de se rapprocher d'Allah pendant les nuits bénies.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ حُكْمُ صَلَاةِ التَّرَاوِيحِ فِي شَهْرِ رَمَضَانَ؟",
        "options": [
          "مُسْتَحَبَّةٌ",
          "بِدْعَةٌ",
          "سُنَّةٌ مُؤَكَّدَةٌ",
          "فَرْضٌ"
        ],
        "reponse_correcte": "سُنَّةٌ مُؤَكَّدَةٌ",
        "explication": "صَلَاةُ التَّرَاوِيحِ هِيَ سُنَّةٌ مُهِمَّةٌ جِدًّا وَمُؤَكَّدَةٌ عَنِ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) فِي شَهْرِ رَمَضَانَ. إِنَّهَا تَجْلِبُ أَجْرًا عَظِيمًا وَتُسَاعِدُ عَلَى التَّقَرُّبِ إِلَى اللَّهِ فِي اللَّيَالِي الْمُبَارَكَةِ."
      },
      "wo": {
        "question": "Lan mooy àtte julli Tarawih ci weeru Ramadan?",
        "options": [
          "Luñu digal la (Mustahabbah)",
          "Lu bees la (Bid'ah)",
          "Sunna buñu wóoral la (Sunnah Mu'akkadah)",
          "Lu war la (Fard)"
        ],
        "reponse_correcte": "Sunna buñu wóoral la (Sunnah Mu'akkadah)",
        "explication": "Julli Tarawih ab Sunna bu am solo la te buñu wóoral ci Yonent bi (saw) ci weeru Ramadan. Dafay indi ay pay yu mag te dafay tax ñu jege Yalla ci guddi yu barke yooyu."
      }
    }
  },
  {
    "id": 492,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien d'années le Prophète Muhammad (paix et bénédictions sur lui) a-t-il jeûné le Ramadan ?",
    "options": [
      "7 ans",
      "9 ans",
      "10 ans",
      "11 ans"
    ],
    "reponse_correcte": "9 ans",
    "explication": "Le Prophète Muhammad (paix et bénédictions sur lui) a jeûné le Ramadan pendant neuf années de sa vie. Le jeûne a été rendu obligatoire la deuxième année de l'Hégire, et il est décédé la onzième année de l'Hégire.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ سَنَةً صَامَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) رَمَضَانَ؟",
        "options": [
          "7 سَنَوَاتٍ",
          "9 سَنَوَاتٍ",
          "10 سَنَوَاتٍ",
          "11 سَنَةً"
        ],
        "reponse_correcte": "9 سَنَوَاتٍ",
        "explication": "صَامَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) رَمَضَانَ لِمُدَّةِ تِسْعِ سَنَوَاتٍ مِنْ حَيَاتِهِ. فُرِضَ الصِّيَامُ فِي السَّنَةِ الثَّانِيَةِ مِنَ الْهِجْرَةِ، وَتُوُفِّيَ فِي السَّنَةِ الْحَادِيَةَ عَشْرَةَ مِنَ الْهِجْرَةِ."
      },
      "wo": {
        "question": "Ñata at la Yonent bi Muhammad (saw) woor Ramadan?",
        "options": [
          "7 at",
          "9 at",
          "10 at",
          "11 at"
        ],
        "reponse_correcte": "9 at",
        "explication": "Yonent bi Muhammad (saw) woor na Ramadan ci juróom ñetti at ci dundam. Wooru war na ci ñaareelu atum Hijra, te mu faatu ci fukki at ak benn ci Hijra."
      }
    }
  },
  {
    "id": 493,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Le Dhikr (rappel d'Allah) illimité (non restreint à un moment précis) peut être fait à tout moment, comme par exemple :",
    "options": [
      "Le Dhikr après la prière",
      "Les invocations du matin et du soir",
      "Le Tasbih (dire \"Soubhanallah\"), le Tahlil (dire \"La ilaha illallah\") et l'Istighfar (demander pardon)",
      "Le Dhikr avant de dormir"
    ],
    "reponse_correcte": "Le Tasbih (dire \"Soubhanallah\"), le Tahlil (dire \"La ilaha illallah\") et l'Istighfar (demander pardon)",
    "explication": "Il existe deux types de Dhikr : le Dhikr restreint, qui se fait à des moments précis (comme après la prière ou le matin/soir), et le Dhikr illimité, que l'on peut faire à tout moment, comme le Tasbih, le Tahlil et l'Istighfar. C'est une belle façon de se souvenir d'Allah tout au long de la journée.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "الذِّكْرُ الْمُطْلَقُ يَكُونُ فِي كُلِّ وَقْتٍ، مِثْلُ:",
        "options": [
          "الذِّكْرُ بَعْدَ الصَّلَاةِ",
          "أَذْكَارُ الصَّبَاحِ وَالْمَسَاءِ",
          "التَّسْبِيحُ وَالتَّهْلِيلُ وَالِاسْتِغْفَارُ",
          "الذِّكْرُ قَبْلَ النَّوْمِ"
        ],
        "reponse_correcte": "التَّسْبِيحُ وَالتَّهْلِيلُ وَالِاسْتِغْفَارُ",
        "explication": "يُوجَدُ نَوْعَانِ مِنَ الذِّكْرِ: الذِّكْرُ الْمُقَيَّدُ، الَّذِي يُؤَدَّى فِي أَوْقَاتٍ مُحَدَّدَةٍ (كَالذِّكْرِ بَعْدَ الصَّلَاةِ أَوْ أَذْكَارِ الصَّبَاحِ وَالْمَسَاءِ)، وَالذِّكْرُ الْمُطْلَقُ، الَّذِي يُمْكِنُ أَدَاؤُهُ فِي أَيِّ وَقْتٍ، كَالتَّسْبِيحِ وَالتَّهْلِيلِ وَالِاسْتِغْفَارِ. هَذِهِ طَرِيقَةٌ جَمِيلَةٌ لِتَذَكُّرِ اللَّهِ طَوَالَ الْيَوْمِ."
      },
      "wo": {
        "question": "Dhikr bu amul dayo (buñu tëggul ci waxtu bu am solo) mën nañu ko def ci bés bu nekk, ni mel ni:",
        "options": [
          "Dhikr ginaaw julli",
          "Ñaanu suba ak guddi",
          "Tasbih (Subhanallah), Tahlil (La ilaha illallah) ak Istighfar (jégël)",
          "Dhikr njëkk nelaw"
        ],
        "reponse_correcte": "Tasbih (Subhanallah), Tahlil (La ilaha illallah) ak Istighfar (jégël)",
        "explication": "Am na ñaari xeetu Dhikr: Dhikr bu tëgg, bi ñuy def ci waxtu yu am solo (ni mel ni ginaaw julli walla suba ak guddi), ak Dhikr bu amul dayo, bi ñuy mën a def ci waxtu wu nekk, ni mel ni Tasbih, Tahlil ak Istighfar. Loolu ab yoon bu rafet la ngir fàttaliku Yalla ci bés bi yëpp."
      }
    }
  },
  {
    "id": 494,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Si quelqu'un insulte un jeûneur, que doit-il dire ?",
    "options": [
      "Il doit lui répondre de la même manière",
      "Il doit prier contre lui",
      "Il doit dire : \"Je suis en train de jeûner\"",
      "Il doit l'ignorer"
    ],
    "reponse_correcte": "Il doit dire : \"Je suis en train de jeûner\"",
    "explication": "Quand tu jeûnes, tu t'entraînes à être patient et à avoir un bon comportement. Si quelqu'un t'insulte ou te cherche querelle, le Prophète (paix et bénédictions sur lui) nous a appris à dire calmement : \"Je suis en train de jeûner.\" Cela nous aide à nous rappeler notre adoration et à éviter les disputes.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "إِذَا سَبَّ أَحَدٌ صَائِمًا، فَمَاذَا يَقُولُ؟",
        "options": [
          "فَلْيَقُلْ لَهُ مِثْلَمَا قَالَ",
          "دَعَا عَلَيْهِ",
          "فَلْيَقُلْ لَهُ: \"إِنِّي امْرُؤٌ صَائِمٌ\"",
          "يَتَجَاهَلُهُ"
        ],
        "reponse_correcte": "فَلْيَقُلْ لَهُ: \"إِنِّي امْرُؤٌ صَائِمٌ\"",
        "explication": "عِنْدَمَا تَصُومُ، تَتَدَرَّبُ عَلَى الصَّبْرِ وَحُسْنِ الْخُلُقِ. إِذَا سَبَّكَ أَحَدٌ أَوْ خَاصَمَكَ، عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَقُولَ بِهُدُوءٍ: \"إِنِّي صَائِمٌ\". هَذَا يُسَاعِدُنَا عَلَى تَذَكُّرِ عِبَادَتِنَا وَتَجَنُّبِ الْخِصَامِ."
      },
      "wo": {
        "question": "Su kenn sagaale ki woor, lan la war a wax?",
        "options": [
          "War na ko tontu ni mu ko defee",
          "War na ñaanal ko lu bonn",
          "War na wax: \"Maa ngi woor\"",
          "War na ko bañ a gis"
        ],
        "reponse_correcte": "War na wax: \"Maa ngi woor\"",
        "explication": "Su nga wooree, da ngay yar sa bopp ci muñ ak am jikko ju baax. Su kenn sagaale la walla mu laal la, Yonent bi (saw) jangal na nu ñu wax ci jàmm: \"Maa ngi woor.\" Loolu dafay tax ñu fàttaliku sunu jaamu Yalla te bañ a xuloo."
      }
    }
  },
  {
    "id": 495,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Selon la Sunnah, avec quoi doit-on rompre le jeûne ?",
    "options": [
      "Des gâteaux (Baklava)",
      "Du lait",
      "Des dattes fraîches (Rutab), sinon des dattes sèches (Tamr), sinon de l'eau",
      "Du jus"
    ],
    "reponse_correcte": "Des dattes fraîches (Rutab), sinon des dattes sèches (Tamr), sinon de l'eau",
    "explication": "La Sunnah du Prophète (paix et bénédictions sur lui) est de rompre le jeûne avec des dattes fraîches (rutab) si elles sont disponibles. Sinon, avec des dattes sèches (tamr). Et si on n'en a pas, alors avec de l'eau. C'est une façon simple et bénie de commencer l'Iftar.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "مِنَ السُّنَّةِ الْفِطْرُ عَلَى:",
        "options": [
          "بَقْلَاوَةٍ",
          "حَلِيبٍ",
          "رُطَبٍ فَإِنْ لَمْ تَجِدْ فَتَمْرٍ فَإِنْ لَمْ تَجِدْ فَمَاءٍ",
          "عَصِيرٍ"
        ],
        "reponse_correcte": "رُطَبٍ فَإِنْ لَمْ تَجِدْ فَتَمْرٍ فَإِنْ لَمْ تَجِدْ فَمَاءٍ",
        "explication": "سُنَّةُ النَّبِيِّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) هِيَ الْفِطْرُ عَلَى الرُّطَبِ إِنْ وُجِدَتْ. وَإِلَّا فَعَلَى التَّمْرِ. وَإِنْ لَمْ يُوجَدْ، فَعَلَى الْمَاءِ. هَذِهِ طَرِيقَةٌ بَسِيطَةٌ وَمُبَارَكَةٌ لِبَدْءِ الْإِفْطَارِ."
      },
      "wo": {
        "question": "Ci sunna bi, lan lañuy dogale?",
        "options": [
          "Baklava",
          "Mle",
          "Tandarma yu bees (Rutab), su fekkee amul, tandarma yu wow (Tamr), su fekkee amul, ndox",
          "Jus"
        ],
        "reponse_correcte": "Tandarma yu bees (Rutab), su fekkee amul, tandarma yu wow (Tamr), su fekkee amul, ndox",
        "explication": "Sunna Yonent bi (saw) mooy dogale ci tandarma yu bees (rutab) su amee. Su amul, ci tandarma yu wow (tamr). Te su amul, ci ndox. Loolu ab yoon bu yomb la te bu barke ngir tàmbalee dog."
      }
    }
  },
  {
    "id": 496,
    "categorie": "Fiqh",
    "niveau": "Avancé",
    "question": "Une fille a eu ses menstrues à quatorze ans et n'a pas jeûné par ignorance que cela signifiait la puberté. Que doit-elle faire ?",
    "options": [
      "Elle n'a rien à faire car elle était ignorante",
      "Elle doit rattraper les jours manqués et n'a pas de péché pour l'ignorance",
      "Elle doit rattraper les jours manqués et se repentir pour son ignorance",
      "Elle doit seulement se repentir"
    ],
    "reponse_correcte": "Elle doit rattraper les jours manqués et n'a pas de péché pour l'ignorance",
    "explication": "Si une fille atteint la puberté (par les menstrues, par exemple) et ne jeûne pas parce qu'elle ne savait pas que cela la rendait responsable, elle n'a pas de péché pour son ignorance passée. Cependant, dès qu'elle apprend la règle, elle doit rattraper tous les jours de jeûne qu'elle a manqués pendant cette période.",
    "source": "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)",
    "tags": [
      "fiqh"
    ],
    "translations": {
      "ar": {
        "question": "فَتَاةٌ أَتَاهَا الْحَيْضُ وَهِيَ فِي الرَّابِعَةِ عَشْرَةَ مِنْ عُمْرِهَا وَتَرَكَتِ الصِّيَامَ جَهْلًا مِنْهَا بِأَنَّ الْبُلُوغَ يَحْصُلُ بِذَلِكَ. فَمَا الْحُكْمُ؟",
        "options": [
          "لَا شَيْءَ عَلَيْهَا لِأَنَّهَا كَانَتْ جَاهِلَةً",
          "يَجِبُ عَلَيْهَا قَضَاءُ الْأَيَّامِ الْفَائِتَةِ وَلَا إِثْمَ عَلَيْهَا لِلْجَهْلِ",
          "يَجِبُ عَلَيْهَا قَضَاءُ الْأَيَّامِ الْفَائِتَةِ وَالتَّوْبَةُ لِجَهْلِهَا",
          "يَجِبُ عَلَيْهَا التَّوْبَةُ فَقَطْ"
        ],
        "reponse_correcte": "يَجِبُ عَلَيْهَا قَضَاءُ الْأَيَّامِ الْفَائِتَةِ وَلَا إِثْمَ عَلَيْهَا لِلْجَهْلِ",
        "explication": "إِذَا بَلَغَتِ الْفَتَاةُ (بِالْحَيْضِ مَثَلًا) وَلَمْ تَصُمْ لِجَهْلِهَا بِأَنَّ ذَلِكَ يُوجِبُ عَلَيْهَا الصِّيَامَ، فَلَا إِثْمَ عَلَيْهَا لِجَهْلِهَا السَّابِقِ. وَلَكِنْ بِمُجَرَّدِ أَنْ تَعْلَمَ الْحُكْمَ، يَجِبُ عَلَيْهَا قَضَاءُ جَمِيعِ أَيَّامِ الصِّيَامِ الَّتِي فَاتَتْهَا فِي تِلْكَ الْفَتْرَةِ."
      },
      "wo": {
        "question": "Jigéen bu am caax ci fukki at ak ñeent te woorul ndax xamul ne loolu mooy magat. Que doit-elle faire?",
        "options": [
          "Amul lu mu def ndax xamul woon",
          "War na faji bis yi mu ñakk te amul bàkkaar ci xamul gi",
          "War na faji bis yi mu ñakk te tuub ci xamul gi",
          "War na tuub rekk"
        ],
        "reponse_correcte": "War na faji bis yi mu ñakk te amul bàkkaar ci xamul gi",
        "explication": "Su fekkee jigéen magat na (ci caax, ni mel ni) te woorul ndax xamul woon ne loolu dafa tax mu war a woor, amul bàkkaar ci xamul gi mu defoon. Waaye bu mu xamee àtte bi, war na faji bis yëpp yu mu ñakkoon ci waxtu woowu."
      }
    }
  },
  {
    "id": 497,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Que signifie \"Alhamdulillah\" (الحَمْدُ للهِ) dans la sourate Al-Fatiha ?",
    "options": [
      "Louange à Allah",
      "Gloire à Allah",
      "Allah est Grand",
      "Allah est le Créateur"
    ],
    "reponse_correcte": "Louange à Allah",
    "explication": "« Alhamdulillah » est la base de toute louange et signifie que toutes les formes de louange appartiennent à Allah seul. C'est une belle façon de commencer notre prière et de reconnaître Sa grandeur.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَعْنِي قَوْلُنَا \"الحَمْدُ للهِ\" فِي سُورَةِ الفَاتِحَةِ؟",
        "options": [
          "الثَّنَاءُ عَلَى اللهِ",
          "تَسْبِيحُ اللهِ",
          "تَعْظِيمُ اللهِ",
          "اللهُ هُوَ الخَالِقُ"
        ],
        "reponse_correcte": "الثَّنَاءُ عَلَى اللهِ",
        "explication": "« الحَمْدُ للهِ » هِيَ أَصْلُ كُلِّ حَمْدٍ وَثَنَاءٍ، وَتَعْنِي أَنَّ جَمِيعَ أَنْوَاعِ المَدْحِ وَالشُّكْرِ تَرْجِعُ للهِ وَحْدَهُ. إِنَّهَا طَرِيقَةٌ جَمِيلَةٌ لِبَدْءِ صَلَاتِنَا وَلِتَعْظِيمِ رَبِّنَا."
      },
      "wo": {
        "question": "Lan mooy \"Alhamdulillah\" ci suuratul Faatiha?",
        "options": [
          "Sant Yalla",
          "Gërëm Yalla",
          "Yalla moo mag",
          "Yalla moom la Sàkk"
        ],
        "reponse_correcte": "Sant Yalla",
        "explication": "« Alhamdulillah » mooy cosaanu lépp luñuy sant, te dafa firi ne lépp luñuy sant Yalla rekk la. Loolu mooy benn ci ay jëf yu rafet ngir tàmbali sunuy ñaan ak ngir xam ne Yalla moo gën a mag."
      }
    }
  },
  {
    "id": 498,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Pourquoi Allah a-t-Il mentionné \"Ar-Rahman Ar-Rahim\" (Le Tout Miséricordieux, le Très Miséricordieux) ensemble dans la sourate Al-Fatiha ?",
    "options": [
      "Pour montrer l'étendue de Sa miséricorde",
      "Pour nous rappeler Sa puissance",
      "Pour nous enseigner la patience",
      "Pour nous dire qu'Il est le Juge"
    ],
    "reponse_correcte": "Pour montrer l'étendue de Sa miséricorde",
    "explication": "Allah a mentionné ces deux noms pour nous faire comprendre que Sa miséricorde est immense et qu'elle englobe tout. « Ar-Rahman » est une miséricorde générale pour toutes les créatures, et « Ar-Rahim » est une miséricorde spécifique pour les croyants.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِمَاذَا ذَكَرَ اللهُ تَعَالَى اسْمَيْهِ \"الرَّحْمَنِ الرَّحِيمِ\" مَعًا فِي سُورَةِ الفَاتِحَةِ؟",
        "options": [
          "لِيُبَيِّنَ سَعَةَ رَحْمَتِهِ",
          "لِيُذَكِّرَنَا بِقُوَّتِهِ",
          "لِيُعَلِّمَنَا الصَّبْرَ",
          "لِيُخْبِرَنَا أَنَّهُ القَاضِي"
        ],
        "reponse_correcte": "لِيُبَيِّنَ سَعَةَ رَحْمَتِهِ",
        "explication": "ذَكَرَ اللهُ هَذَيْنِ الاسْمَيْنِ لِيُفْهِمَنَا أَنَّ رَحْمَتَهُ وَاسِعَةٌ وَشَامِلَةٌ لِكُلِّ شَيْءٍ. « الرَّحْمَنُ » رَحْمَةٌ عَامَّةٌ لِجَمِيعِ الخَلْقِ، وَ« الرَّحِيمُ » رَحْمَةٌ خَاصَّةٌ بِالمُؤْمِنِينَ."
      },
      "wo": {
        "question": "Lu tax Yalla tudd \"Ar-Rahman Ar-Rahim\" ci suuratul Faatiha?",
        "options": [
          "Ngir wone yërmandeem gu yaatu",
          "Ngir fàttali nu kàttanam",
          "Ngir jàngal nu muñ",
          "Ngir wax nu ne Mooy Àttekat bi"
        ],
        "reponse_correcte": "Ngir wone yërmandeem gu yaatu",
        "explication": "Yalla tudd na tur yooyu ñaar ngir nu xam ne yërmandeem dafa yaatu te mu àpp lépp. « Ar-Rahman » mooy yërmande gu àpp mboolem mbindeef yi, te « Ar-Rahim » mooy yërmande gu jagleel jullit ñi."
      }
    }
  },
  {
    "id": 499,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Al-Baqarah, que signifie \"Khatamallahu 'ala qulubihim\" (Allah a scellé leurs cœurs) ?",
    "options": [
      "Qu'Allah a mis un voile sur leurs cœurs à cause de leur mécréance",
      "Qu'Allah a protégé leurs cœurs",
      "Qu'Allah a purifié leurs cœurs",
      "Qu'Allah a rempli leurs cœurs de lumière"
    ],
    "reponse_correcte": "Qu'Allah a mis un voile sur leurs cœurs à cause de leur mécréance",
    "explication": "Ce verset signifie qu'à cause de leur refus de croire et de leur entêtement, Allah a mis un voile sur leurs cœurs, leurs oreilles et leurs yeux, les empêchant de voir la vérité et de recevoir la guidance. C'est une conséquence de leurs propres choix.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ البَقَرَةِ، مَاذَا يَعْنِي قَوْلُهُ تَعَالَى: \"خَتَمَ اللَّهُ عَلَى قُلُوبِهِمْ\"؟",
        "options": [
          "أَنَّ اللهَ وَضَعَ غِشَاوَةً عَلَى قُلُوبِهِمْ بِسَبَبِ كُفْرِهِمْ",
          "أَنَّ اللهَ حَمَى قُلُوبَهُمْ",
          "أَنَّ اللهَ طَهَّرَ قُلُوبَهُمْ",
          "أَنَّ اللهَ مَلَأَ قُلُوبَهُمْ نُورًا"
        ],
        "reponse_correcte": "أَنَّ اللهَ وَضَعَ غِشَاوَةً عَلَى قُلُوبِهِمْ بِسَبَبِ كُفْرِهِمْ",
        "explication": "يَعْنِي هَذَا الوَرْدُ أَنَّهُ بِسَبَبِ رَفْضِهِمْ لِلإِيمَانِ وَعِنَادِهِمْ، وَضَعَ اللهُ غِشَاوَةً عَلَى قُلُوبِهِمْ وَأَسْمَاعِهِمْ وَأَبْصَارِهِمْ، فَمَنَعَهُمْ مِنْ رُؤْيَةِ الحَقِّ وَقَبُولِ الهِدَايَةِ. وَهَذَا نَتِيجَةٌ لِاخْتِيَارَاتِهِمْ هُمْ."
      },
      "wo": {
        "question": "Ci suuratul Baqara, lan mooy \"Khatamallahu 'ala qulubihim\" (Yalla tëj na seeni xol)?",
        "options": [
          "Ne Yalla def na rëcc ci seeni xol ngir seeni bokka",
          "Ne Yalla musal na seeni xol",
          "Ne Yalla setal na seeni xol",
          "Ne Yalla feesal na seeni xol ak leer"
        ],
        "reponse_correcte": "Ne Yalla def na rëcc ci seeni xol ngir seeni bokka",
        "explication": "Aaya bi dafa firi ne ngir seen bañ a gëm ak seen tàngal, Yalla def na rëcc ci seeni xol, seeni nopp ak seeni bët, loolu tax duñu gis dëgg te duñu nangu gindiku. Loolu mooy li juddoo ci seeni tànn."
      }
    }
  },
  {
    "id": 500,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Pourquoi Allah a-t-Il donné l'exemple du moustique dans le Coran ?",
    "options": [
      "Pour montrer que même la plus petite créature a une sagesse",
      "Pour nous faire peur",
      "Pour nous montrer qu'Il est le plus fort",
      "Pour nous enseigner la biologie"
    ],
    "reponse_correcte": "Pour montrer que même la plus petite créature a une sagesse",
    "explication": "Allah a donné l'exemple du moustique pour nous montrer que même dans les plus petites créatures, il y a des signes de Sa grandeur et de Sa sagesse. Cela nous invite à réfléchir et à ne pas sous-estimer la création d'Allah.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِمَاذَا ضَرَبَ اللهُ مَثَلَ البَعُوضَةِ فِي القُرْآنِ الكَرِيمِ؟",
        "options": [
          "لِيُبَيِّنَ أَنَّ فِي أَصْغَرِ المَخْلُوقَاتِ حِكْمَةً",
          "لِيُخِيفَنَا",
          "لِيُرِيَنَا أَنَّهُ الأَقْوَى",
          "لِيُعَلِّمَنَا عِلْمَ الأَحْيَاءِ"
        ],
        "reponse_correcte": "لِيُبَيِّنَ أَنَّ فِي أَصْغَرِ المَخْلُوقَاتِ حِكْمَةً",
        "explication": "ضَرَبَ اللهُ مَثَلَ البَعُوضَةِ لِيُرِيَنَا أَنَّهُ حَتَّى فِي أَصْغَرِ المَخْلُوقَاتِ، هُنَاكَ دَلَائِلُ عَلَى عَظَمَتِهِ وَحِكْمَتِهِ. وَهَذَا يَدْعُونَا إِلَى التَّفَكُّرِ وَعَدَمِ اسْتِصْغَارِ خَلْقِ اللهِ."
      },
      "wo": {
        "question": "Lu tax Yalla jox misaal bu yooŋ bi ci Alxuraan?",
        "options": [
          "Ngir wone ne mbindeef mi gën a tuuti am na hikma",
          "Ngir ragalël nu",
          "Ngir wone nu ne Mooy ki gën a am doole",
          "Ngir jàngal nu ci wallu dundin"
        ],
        "reponse_correcte": "Ngir wone ne mbindeef mi gën a tuuti am na hikma",
        "explication": "Yalla jox na misaal bu yooŋ bi ngir wone nu ne ba ci mbindeef mi gën a tuuti sax, am na ci ay màndarga yu wone màggu ak hikmaam. Loolu dafa tax nu xalaat te bañ a yàq seen xel ci li Yalla sàkk."
      }
    }
  },
  {
    "id": 501,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Al-Baqarah, qu'est-ce qu'Allah nous demande d'utiliser pour chercher Son aide ?",
    "options": [
      "La patience et la prière",
      "L'argent et le pouvoir",
      "La force et le courage",
      "La nourriture et la boisson"
    ],
    "reponse_correcte": "La patience et la prière",
    "explication": "Allah nous enseigne que la patience (sabr) et la prière (salat) sont nos meilleurs outils pour surmonter les difficultés et chercher Son aide. Elles renforcent notre lien avec Lui et nous apportent la tranquillité.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ البَقَرَةِ، بِمَاذَا أَمَرَنَا اللهُ أَنْ نَسْتَعِينَ لِطَلَبِ عَوْنِهِ؟",
        "options": [
          "بِالصَّبْرِ وَالصَّلَاةِ",
          "بِالمَالِ وَالسُّلْطَةِ",
          "بِالقُوَّةِ وَالشَّجَاعَةِ",
          "بِالطَّعَامِ وَالشَّرَابِ"
        ],
        "reponse_correcte": "بِالصَّبْرِ وَالصَّلَاةِ",
        "explication": "يُعَلِّمُنَا اللهُ أَنَّ الصَّبْرَ وَالصَّلَاةَ هُمَا أَفْضَلُ وَسَائِلِنَا لِتَجَاوُزِ الصِّعَابِ وَطَلَبِ عَوْنِهِ. إِنَّهُمَا يُقَوِّيَانِ صِلَتَنَا بِهِ وَيَجْلِبَانِ لَنَا الطُّمَأْنِينَةَ."
      },
      "wo": {
        "question": "Ci suuratul Baqara, lan la Yalla sant nu nu jëfandikoo ngir sàkku ci Moom ndimbal?",
        "options": [
          "Muñ ak julli",
          "Xaalis ak nguur",
          "Doole ak fit",
          "Lekk ak naan"
        ],
        "reponse_correcte": "Muñ ak julli",
        "explication": "Yalla dafa nu jàngal ne muñ (sabr) ak julli (salat) ñooñuy sunuy jumtukaay yu gën a baax ngir jàppale nu ci jafe-jafe yi ak ngir sàkku ci Moom ndimbal. Ñoom dañuy dëgëral sunu jokkoo ak Moom te indil nu jàmm."
      }
    }
  },
  {
    "id": 502,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle est la sagesse derrière le verset \"La yukallifullahu nafsan illa wus'aha\" (Allah n'impose à aucune âme une charge supérieure à sa capacité) ?",
    "options": [
      "Qu'Allah est Juste et ne nous demande que ce que nous pouvons faire",
      "Qu'Allah est Miséricordieux et nous pardonne nos péchés",
      "Qu'Allah est Puissant et peut tout faire",
      "Qu'Allah est Savant et connaît tout"
    ],
    "reponse_correcte": "Qu'Allah est Juste et ne nous demande que ce que nous pouvons faire",
    "explication": "Ce verset nous rassure en nous montrant qu'Allah est parfaitement Juste. Il ne nous demande jamais plus que ce que nous sommes capables de supporter, ce qui nous encourage à faire de notre mieux sans désespérer.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ الحِكْمَةُ مِنْ قَوْلِهِ تَعَالَى: \"لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا\"؟",
        "options": [
          "أَنَّ اللهَ عَدْلٌ وَلَا يَطْلُبُ مِنَّا إِلَّا مَا نُطِيقُ",
          "أَنَّ اللهَ رَحِيمٌ وَيَغْفِرُ ذُنُوبَنَا",
          "أَنَّ اللهَ قَوِيٌّ وَيَفْعَلُ كُلَّ شَيْءٍ",
          "أَنَّ اللهَ عَلِيمٌ وَيَعْلَمُ كُلَّ شَيْءٍ"
        ],
        "reponse_correcte": "أَنَّ اللهَ عَدْلٌ وَلَا يَطْلُبُ مِنَّا إِلَّا مَا نُطِيقُ",
        "explication": "يُطَمْئِنُنَا هَذَا الوَرْدُ بِأَنَّ اللهَ عَادِلٌ تَمَامًا. إِنَّهُ لَا يَطْلُبُ مِنَّا أَبَدًا أَكْثَرَ مِمَّا نَسْتَطِيعُ تَحَمُّلَهُ، وَهَذَا يُشَجِّعُنَا عَلَى بَذْلِ قُصَارَى جُهْدِنَا دُونَ يأسٍ."
      },
      "wo": {
        "question": "Lan mooy hikma gi nekk ci aaya bi ne \"La yukallifullahu nafsan illa wus'aha\" (Yalla du teg benn xel lu ko gën a neex)?",
        "options": [
          "Ne Yalla mooy ki jub te du nu laaj lu nu mënul",
          "Ne Yalla yërmande la te dafa baal sunuy bàkkar",
          "Ne Yalla am na kàttan te mën na def lépp",
          "Ne Yalla xam na lépp"
        ],
        "reponse_correcte": "Ne Yalla mooy ki jub te du nu laaj lu nu mënul",
        "explication": "Aaya bi dafa nu wone ne Yalla mooy ki gën a jub. Du nu laaj lu nu mënul, loolu dafa nu dëgëral nu def sunu kàttan gépp te bañ a naaxsaay."
      }
    }
  },
  {
    "id": 503,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans la sourate Al-Imran, quel prophète a prié Allah pour avoir un enfant alors que lui et sa femme étaient âgés ?",
    "options": [
      "Prophète Zakariya",
      "Prophète Ibrahim",
      "Prophète Moussa",
      "Prophète Issa"
    ],
    "reponse_correcte": "Prophète Zakariya",
    "explication": "Le Prophète Zakariya, malgré son âge avancé et la stérilité de sa femme, a prié Allah avec sincérité et Allah lui a accordé un fils, Yahya. Cela nous montre qu'Allah est capable de tout.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ آلِ عِمْرَانَ، أَيُّ نَبِيٍّ دَعَا اللهَ لِيَرْزُقَهُ وَلَدًا مَعَ كِبَرِ سِنِّهِ وَعُقْمِ زَوْجَتِهِ؟",
        "options": [
          "النَّبِيُّ زَكَرِيَّا",
          "النَّبِيُّ إِبْرَاهِيمُ",
          "النَّبِيُّ مُوسَى",
          "النَّبِيُّ عِيسَى"
        ],
        "reponse_correcte": "النَّبِيُّ زَكَرِيَّا",
        "explication": "النَّبِيُّ زَكَرِيَّا، عَلَى الرَّغْمِ مِنْ كِبَرِ سِنِّهِ وَعُقْمِ زَوْجَتِهِ، دَعَا اللهَ بِإِخْلَاصٍ، وَاسْتَجَابَ اللهُ لَهُ وَرَزَقَهُ ابْنًا هُوَ يَحْيَى. وَهَذَا يُرِينَا أَنَّ اللهَ قَادِرٌ عَلَى كُلِّ شَيْءٍ."
      },
      "wo": {
        "question": "Ci suuratul Al-Imran, waneb yonent la ñaan Yalla mu jox ko doom, mu mag te soxnaam du am doom?",
        "options": [
          "Yonent Zakariya",
          "Yonent Ibrahim",
          "Yonent Musa",
          "Yonent Isa"
        ],
        "reponse_correcte": "Yonent Zakariya",
        "explication": "Yonent Zakariya, moom ak soxnaam magoon nañu te duñu am doom, waaye ñaan na Yalla ak dëgg-dëgg, te Yalla jox ko doom, Yahya. Loolu dafa nu wone ne Yalla mën na def lépp."
      }
    }
  },
  {
    "id": 504,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Pourquoi Allah a-t-Il dit dans la sourate An-Nisa que l'être humain a été créé faible ?",
    "options": [
      "Pour qu'il reconnaisse son besoin d'Allah et ne s'enorgueillisse pas",
      "Pour qu'il soit triste et désespéré",
      "Pour qu'il ne puisse rien faire seul",
      "Pour qu'il demande toujours de l'aide aux autres"
    ],
    "reponse_correcte": "Pour qu'il reconnaisse son besoin d'Allah et ne s'enorgueillisse pas",
    "explication": "L'être humain a été créé faible pour qu'il se tourne vers Allah dans tous ses besoins, qu'il ne s'enorgueillisse pas de sa propre force et qu'il reconnaisse toujours la puissance et la grandeur d'Allah.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "لِمَاذَا قَالَ اللهُ فِي سُورَةِ النِّسَاءِ إِنَّ الإِنْسَانَ خُلِقَ ضَعِيفًا؟",
        "options": [
          "لِيَعْرِفَ حَاجَتَهُ إِلَى اللهِ وَلَا يَتَكَبَّرَ",
          "لِيَحْزَنَ وَيَيْأَسَ",
          "لِكَيْ لَا يَسْتَطِيعَ فِعْلَ شَيْءٍ بِمُفْرَدِهِ",
          "لِيَطْلُبَ العَوْنَ دَائِمًا مِنَ الآخَرِينَ"
        ],
        "reponse_correcte": "لِيَعْرِفَ حَاجَتَهُ إِلَى اللهِ وَلَا يَتَكَبَّرَ",
        "explication": "خُلِقَ الإِنْسَانُ ضَعِيفًا لِيَلْجَأَ إِلَى اللهِ فِي جَمِيعِ حَاجَاتِهِ، وَلَا يَتَكَبَّرَ بِقُوَّتِهِ، وَلِيَعْتَرِفَ دَائِمًا بِقُوَّةِ اللهِ وَعَظَمَتِهِ."
      },
      "wo": {
        "question": "Lu tax Yalla wax ci suuratun Nisaa ne nit ki dafa ñakk doole?",
        "options": [
          "Ngir mu xam ne Yalla la soxla te bañ a rëy",
          "Ngir mu naaxsaay te am naqar",
          "Ngir mu mënul def dara moom rekk",
          "Ngir mu di ñaanal ñeneen ndimbal"
        ],
        "reponse_correcte": "Ngir mu xam ne Yalla la soxla te bañ a rëy",
        "explication": "Nit ki dafa ñakk doole ngir mu jëm ci Yalla ci lépp lu mu soxla, te bañ a rëy ci dooleem, te mu di xam kàttanu Yalla ak màggu Yalla."
      }
    }
  },
  {
    "id": 505,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans la sourate Al-Ma'idah, qu'est-ce qui est le plus proche de la piété (taqwa) ?",
    "options": [
      "La justice",
      "La richesse",
      "La beauté",
      "La force"
    ],
    "reponse_correcte": "La justice",
    "explication": "Le Coran nous enseigne que la justice est essentielle et qu'elle nous rapproche le plus de la piété. Être juste envers soi-même et envers les autres est une grande vertu en Islam.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ المَائِدَةِ، مَا هُوَ الأَقْرَبُ إِلَى التَّقْوَى؟",
        "options": [
          "العَدْلُ",
          "الغِنَى",
          "الجَمَالُ",
          "القُوَّةُ"
        ],
        "reponse_correcte": "العَدْلُ",
        "explication": "يُعَلِّمُنَا القُرْآنُ أَنَّ العَدْلَ أَسَاسِيٌّ وَهُوَ الَّذِي يُقَرِّبُنَا أَكْثَرَ إِلَى التَّقْوَى. أَنْ نَكُونَ عَدْلِينَ مَعَ أَنْفُسِنَا وَمَعَ الآخَرِينَ هِيَ فَضِيلَةٌ عَظِيمَةٌ فِي الإِسْلَامِ."
      },
      "wo": {
        "question": "Ci suuratul Maa'ida, lan mooy li gën a jege ragal Yalla (taqwa)?",
        "options": [
          "Jub",
          "Alal",
          "Rafet",
          "Doole"
        ],
        "reponse_correcte": "Jub",
        "explication": "Alxuraan dafa nu jàngal ne jub dafa am solo te mooy li nu gën a jege ragal Yalla. Jub ci sa bopp ak ci ñeneen mooy jikko ju baax ci Lislaam."
      }
    }
  },
  {
    "id": 506,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Al-Anfal, qu'est-ce qu'Allah nous demande de faire lorsque le Prophète nous appelle à ce qui nous donne la vie ?",
    "options": [
      "Répondre à Allah et à Son Messager",
      "Ignorer l'appel",
      "Faire ce que nous voulons",
      "Demander plus de preuves"
    ],
    "reponse_correcte": "Répondre à Allah et à Son Messager",
    "explication": "Le Prophète nous appelle à l'Islam, qui est la vraie vie pour nos cœurs et nos âmes. Répondre à cet appel, c'est accepter la guidance qui nous apporte le bonheur ici-bas et dans l'au-delà.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ الأَنْفَالِ، مَاذَا يَطْلُبُ مِنَّا اللهُ عِنْدَمَا يَدْعُونَا الرَّسُولُ إِلَى مَا يُحْيِينَا؟",
        "options": [
          "أَنْ نَسْتَجِيبَ للهِ وَلِرَسُولِهِ",
          "أَنْ نَتَجَاهَلَ الدَّعْوَةَ",
          "أَنْ نَفْعَلَ مَا نُرِيدُ",
          "أَنْ نَطْلُبَ مَزِيدًا مِنَ الأَدِلَّةِ"
        ],
        "reponse_correcte": "أَنْ نَسْتَجِيبَ للهِ وَلِرَسُولِهِ",
        "explication": "يَدْعُونَا الرَّسُولُ إِلَى الإِسْلَامِ، وَهُوَ الحَيَاةُ الحَقِيقِيَّةُ لِقُلُوبِنَا وَأَرْوَاحِنَا. الاسْتِجَابَةُ لِهَذِهِ الدَّعْوَةِ هِيَ قَبُولُ الهِدَايَةِ الَّتِي تَجْلِبُ لَنَا السَّعَادَةَ فِي الدُّنْيَا وَالآخِرَةِ."
      },
      "wo": {
        "question": "Ci suuratul Anfal, lan la Yalla sant nu nu def su nu Yonent bi woo nu ci li nu jox dund?",
        "options": [
          "Tontu Yalla ak Yonentam",
          "Bañ a tontu woo bi",
          "Def li nu neex",
          "Laaj ay preuve yu gën a bari"
        ],
        "reponse_correcte": "Tontu Yalla ak Yonentam",
        "explication": "Yonent bi dafa nu woo ci Lislaam, mooy dund gu dëggu gi sunuy xol ak sunuy ruu soxla. Tontu woo bi mooy nangu gindiku gi nu indil mbëgéel ci adduna ak ci allaaxira."
      }
    }
  },
  {
    "id": 507,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Dans la sourate Al-Anfal, pourquoi Allah nous interdit-Il de nous disputer ?",
    "options": [
      "Pour ne pas échouer et perdre notre force",
      "Pour ne pas déranger les autres",
      "Pour ne pas perdre de temps",
      "Pour ne pas se fatiguer"
    ],
    "reponse_correcte": "Pour ne pas échouer et perdre notre force",
    "explication": "Les disputes et les désaccords affaiblissent la communauté des croyants et peuvent mener à l'échec. L'unité et l'harmonie sont essentielles pour la force et le succès des musulmans.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ الأَنْفَالِ، لِمَاذَا نَهَانَا اللهُ عَنِ التَّنَازُعِ وَالاخْتِلَافِ؟",
        "options": [
          "لِكَيْ لَا نَفْشَلَ وَتَذْهَبَ قُوَّتُنَا",
          "لِكَيْ لَا نُزْعِجَ الآخَرِينَ",
          "لِكَيْ لَا نُضَيِّعَ الوَقْتَ",
          "لِكَيْ لَا نَتْعَبَ"
        ],
        "reponse_correcte": "لِكَيْ لَا نَفْشَلَ وَتَذْهَبَ قُوَّتُنَا",
        "explication": "التَّنَازُعُ وَالخِلَافَاتُ تُضْعِفُ جَمَاعَةَ المُؤْمِنِينَ وَيُمْكِنُ أَنْ تُؤَدِّيَ إِلَى الفَشَلِ. الوَحْدَةُ وَالِاتِّفَاقُ ضَرُورِيَّانِ لِقُوَّةِ المُسْلِمِينَ وَنَجَاحِهِمْ."
      },
      "wo": {
        "question": "Ci suuratul Anfal, lu tax Yalla téré nu nu xuloo?",
        "options": [
          "Ngir bañ a naaxsaay te ñakk sunu doole",
          "Ngir bañ a sonal ñeneen",
          "Ngir bañ a yàq jamono",
          "Ngir bañ a sonn"
        ],
        "reponse_correcte": "Ngir bañ a naaxsaay te ñakk sunu doole",
        "explication": "Xuloo ak wut-wutlu dañuy ñakk doole jullit ñi te mën na tax ñu naaxsaay. Bennoo ak jàmm dañuy am solo ci doole ak sàmm gi jullit ñi am."
      }
    }
  },
  {
    "id": 508,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Lors de la migration du Prophète Muhammad (paix et bénédictions sur lui) de La Mecque, qui était avec lui dans la grotte ?",
    "options": [
      "Abu Bakr As-Siddiq",
      "Umar ibn Al-Khattab",
      "Ali ibn Abi Talib",
      "Uthman ibn Affan"
    ],
    "reponse_correcte": "Abu Bakr As-Siddiq",
    "explication": "Lors de la Hijra (migration), le Prophète Muhammad (paix et bénédictions sur lui) était accompagné de son cher compagnon Abu Bakr As-Siddiq dans la grotte de Thawr, où Allah les a protégés.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "عِنْدَ هِجْرَةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) مِن مَكَّةَ، مَن كَانَ مَعَهُ فِي الغَارِ؟",
        "options": [
          "أَبُو بَكْرٍ الصِّدِّيقُ",
          "عُمَرُ بْنُ الخَطَّابِ",
          "عَلِيُّ بْنُ أَبِي طَالِبٍ",
          "عُثْمَانُ بْنُ عَفَّانَ"
        ],
        "reponse_correcte": "أَبُو بَكْرٍ الصِّدِّيقُ",
        "explication": "عِنْدَ الهِجْرَةِ، كَانَ النَّبِيُّ مُحَمَّدٌ (صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ) مَعَ صَاحِبِهِ الحَبِيبِ أَبِي بَكْرٍ الصِّدِّيقِ فِي غَارِ ثَوْرٍ، حَيْثُ حَمَاهُمَا اللهُ."
      },
      "wo": {
        "question": "Bi Yonent Yalla Muhammad (jamm ak mucc yal na nekk ci moom) di tukki jëme Makka, ku mu doon àndal ci kër gi?",
        "options": [
          "Abu Bakr As-Siddiq",
          "Umar ibn Al-Khattab",
          "Ali ibn Abi Talib",
          "Uthman ibn Affan"
        ],
        "reponse_correcte": "Abu Bakr As-Siddiq",
        "explication": "Bi Hijra (tukki) bi amee, Yonent Yalla Muhammad (jamm ak mucc yal na nekk ci moom) dafa doon àndal ak sa saaba bu baax bi, Abu Bakr As-Siddiq, ci kër gu Thawr, fa la Yalla musal leen."
      }
    }
  },
  {
    "id": 509,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Yusuf, pourquoi les frères de Yusuf l'ont-ils vendu pour un prix si bas ?",
    "options": [
      "Parce qu'ils ne lui accordaient aucune valeur",
      "Parce qu'ils n'avaient pas besoin d'argent",
      "Parce qu'ils voulaient s'en débarrasser rapidement",
      "Parce qu'ils ne savaient pas qu'il était un prophète"
    ],
    "reponse_correcte": "Parce qu'ils ne lui accordaient aucune valeur",
    "explication": "Le Coran nous dit que les frères de Yusuf l'ont vendu pour un prix dérisoire car ils étaient « zahidin » (indifférents, sans intérêt) à son égard. Cela montre leur manque d'amour et de respect pour leur frère.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ يُوسُفَ، لِمَاذَا بَاعَ إِخْوَةُ يُوسُفَ أَخَاهُمْ بِثَمَنٍ بَخْسٍ؟",
        "options": [
          "لِأَنَّهُمْ لَمْ يُعْطُوهُ أَيَّ قِيمَةٍ",
          "لِأَنَّهُمْ لَمْ يَكُونُوا بِحَاجَةٍ إِلَى المَالِ",
          "لِأَنَّهُمْ أَرَادُوا التَّخَلُّصَ مِنْهُ بِسُرْعَةٍ",
          "لِأَنَّهُمْ لَمْ يَعْلَمُوا أَنَّهُ نَبِيٌّ"
        ],
        "reponse_correcte": "لِأَنَّهُمْ لَمْ يُعْطُوهُ أَيَّ قِيمَةٍ",
        "explication": "يُخْبِرُنَا القُرْآنُ أَنَّ إِخْوَةَ يُوسُفَ بَاعُوهُ بِثَمَنٍ قَلِيلٍ جِدًّا لِأَنَّهُمْ كَانُوا « زَاهِدِينَ » فِيهِ، أَيْ لَمْ يَكُونُوا مُهْتَمِّينَ بِهِ أَوْ يُقَدِّرُونَهُ. وَهَذَا يُظْهِرُ نَقْصَ حُبِّهِمْ وَاحْتِرَامِهِمْ لِأَخِيهِمْ."
      },
      "wo": {
        "question": "Ci suuratul Yusuf, lu tax magi Yusuf jaay ko ci njëg gu néew?",
        "options": [
          "Ndax duñu ko jox benn njariñ",
          "Ndax soxlawuñu woon xaalis",
          "Ndax dañu ko bëggoon a génne ci gaaw",
          "Ndax xamunu woon ne yonent la"
        ],
        "reponse_correcte": "Ndax duñu ko jox benn njariñ",
        "explication": "Alxuraan dafa nu wax ne magi Yusuf jaay nañu ko ci njëg gu néew ndax dañu ko doon « zahidin » (ñakk njariñ, bañ a am intérêt) ci moom. Loolu dafa wone ne amunu woon bëgg ak worma ci seen rakk."
      }
    }
  },
  {
    "id": 510,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans l'histoire des Gens de la Caverne, quel était l'un des signes de la protection d'Allah pendant leur sommeil ?",
    "options": [
      "Leurs corps étaient tournés de droite à gauche",
      "Ils étaient nourris par des anges",
      "Le soleil ne les atteignait jamais",
      "Ils étaient entourés de fleurs"
    ],
    "reponse_correcte": "Leurs corps étaient tournés de droite à gauche",
    "explication": "Allah a fait en sorte que leurs corps soient régulièrement tournés de droite à gauche pendant leur long sommeil. Cela évitait que leurs corps ne se décomposent ou ne soient blessés, montrant ainsi la protection divine.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي قِصَّةِ أَصْحَابِ الكَهْفِ، مَا هِيَ إِحْدَى عَلامَاتِ حِمَايَةِ اللهِ لَهُمْ أَثْنَاءَ نَوْمِهِمْ؟",
        "options": [
          "كَانَتْ أَجْسَادُهُمْ تُقَلَّبُ يَمِينًا وَشِمَالًا",
          "كَانَتِ المَلَائِكَةُ تُطْعِمُهُمْ",
          "لَمْ تَصِلْ إِلَيْهِمْ الشَّمْسُ أَبَدًا",
          "كَانُوا مُحَاطِينَ بِالزُّهُورِ"
        ],
        "reponse_correcte": "كَانَتْ أَجْسَادُهُمْ تُقَلَّبُ يَمِينًا وَشِمَالًا",
        "explication": "جَعَلَ اللهُ أَجْسَادَهُمْ تُقَلَّبُ بِانْتِظَامٍ يَمِينًا وَشِمَالًا أَثْنَاءَ نَوْمِهِمُ الطَّوِيلِ. وَهَذَا مَنَعَ أَجْسَادَهُمْ مِنَ التَّعَفُّنِ أَوِ التَّضَرُّرِ، مِمَّا يُظْهِرُ الحِمَايَةَ الإِلَهِيَّةَ."
      },
      "wo": {
        "question": "Ci taarixu Ashabul Kahf, lan mooy benn ci màndarga yi wone ne Yalla musal na leen ci seeni nelaw?",
        "options": [
          "Seen yaram dañu leen di wëlbati ci ndeyjoor ak càmmooñ",
          "Malaaka yi dañu leen di lekkal",
          "Jant bi du leen jot mukk",
          "Dañu leen di wëggal ay ràpp"
        ],
        "reponse_correcte": "Seen yaram dañu leen di wëlbati ci ndeyjoor ak càmmooñ",
        "explication": "Yalla dafa def seen yaram di wëlbati ci ndeyjoor ak càmmooñ ci seen nelaw gu gudd gi. Loolu dafa tax seen yaram bañ a yàqu mbaa ñu am ay gañu-gañu, te wone musalug Yalla gi."
      }
    }
  },
  {
    "id": 511,
    "categorie": "Coran",
    "niveau": "Avancé",
    "question": "Quelle leçon importante pouvons-nous tirer de l'histoire de Dhul-Qarnayn, dont la vie est résumée en une seule page du Coran ?",
    "options": [
      "La vie d'ici-bas est courte et éphémère",
      "Le pouvoir est la chose la plus importante",
      "Voyager est toujours bénéfique",
      "Construire des murs est une bonne stratégie"
    ],
    "reponse_correcte": "La vie d'ici-bas est courte et éphémère",
    "explication": "Le fait que la vie d'un grand roi comme Dhul-Qarnayn soit résumée en si peu de mots dans le Coran nous rappelle que la vie terrestre est très courte. Cela nous encourage à nous concentrer sur l'au-delà et sur les bonnes actions.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "مَا هِيَ العِبْرَةُ الهَامَّةُ الَّتِي نَسْتَخْلِصُهَا مِنْ قِصَّةِ ذِي القَرْنَيْنِ، الَّتِي تَمَّ تَلْخِيصُ حَيَاتِهِ فِي صَفْحَةٍ وَاحِدَةٍ مِنَ القُرْآنِ؟",
        "options": [
          "أَنَّ الحَيَاةَ الدُّنْيَا قَصِيرَةٌ وَزَائِلَةٌ",
          "أَنَّ القُوَّةَ هِيَ الأَهَمُّ",
          "أَنَّ السَّفَرَ دَائِمًا مُفِيدٌ",
          "أَنَّ بِنَاءَ الجُدْرَانِ اسْتِرَاتِيجِيَّةٌ جَيِّدَةٌ"
        ],
        "reponse_correcte": "أَنَّ الحَيَاةَ الدُّنْيَا قَصِيرَةٌ وَزَائِلَةٌ",
        "explication": "كَوْنُ حَيَاةِ مَلِكٍ عَظِيمٍ مِثْلِ ذِي القَرْنَيْنِ تُلَخَّصُ فِي كَلِمَاتٍ قَلِيلَةٍ جِدًّا فِي القُرْآنِ يُذَكِّرُنَا بِأَنَّ الحَيَاةَ الدُّنْيَا قَصِيرَةٌ جِدًّا. وَهَذَا يُشَجِّعُنَا عَلَى التَّرْكِيزِ عَلَى الآخِرَةِ وَالأَعْمَالِ الصَّالِحَةِ."
      },
      "wo": {
        "question": "Lan mooy jàngale ju am solo ji nu mën a génne ci taarixu Dhul-Qarnayn, bi seen dund tënk ci benn xët ci Alxuraan?",
        "options": [
          "Dundug adduna dafa gàtt te du yàgg",
          "Doole mooy li gën a am solo",
          "Tukki dafa baax lépp",
          "Tabax ay mir mooy strateji bu baax"
        ],
        "reponse_correcte": "Dundug adduna dafa gàtt te du yàgg",
        "explication": "Li tax dundug buur bu mag bi Dhul-Qarnayn tënk ci ay baat yu néew ci Alxuraan dafa nu fàttali ne dundug adduna dafa gàtt lool. Loolu dafa nu dëgëral nu jëm ci allaaxira ak ci jëf yu baax yi."
      }
    }
  },
  {
    "id": 512,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate An-Nisa, de quel sentiment Allah nous met-Il en garde, qui pousse certaines personnes à souhaiter la disparition des bienfaits d'autrui ?",
    "options": [
      "L'envie (hasad)",
      "La colère (ghadab)",
      "La tristesse (huzn)",
      "La peur (khawf)"
    ],
    "reponse_correcte": "L'envie (hasad)",
    "explication": "L'envie est un sentiment négatif qui nous pousse à désirer que les autres perdent les bienfaits qu'Allah leur a accordés. L'Islam nous enseigne plutôt à être reconnaissants pour ce que nous avons et à demander à Allah de nous accorder de Ses faveurs.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ النِّسَاءِ، مَا هُوَ الشُّعُورُ الَّذِي يُحَذِّرُنَا اللهُ مِنْهُ، وَالَّذِي يَدْفَعُ بَعْضَ النَّاسِ إِلَى تَمَنِّي زَوَالِ نِعَمِ الآخَرِينَ؟",
        "options": [
          "الحَسَدُ",
          "الغَضَبُ",
          "الحُزْنُ",
          "الخَوْفُ"
        ],
        "reponse_correcte": "الحَسَدُ",
        "explication": "الحَسَدُ شُعُورٌ سَلْبِيٌّ يَدْفَعُنَا إِلَى تَمَنِّي زَوَالِ النِّعَمِ الَّتِي أَنْعَمَ اللهُ بِهَا عَلَى الآخَرِينَ. يُعَلِّمُنَا الإِسْلَامُ أَنْ نَكُونَ شَاكِرِينَ عَلَى مَا لَدَيْنَا وَأَنْ نَطْلُبَ مِنَ اللهِ أَنْ يَرْزُقَنَا مِنْ فَضْلِهِ."
      },
      "wo": {
        "question": "Ci suuratun Nisaa, lan mooy xol bu Yalla téré nu, bu tax nit ñi di bëgg ne xéewal yi ñeneen am nañu ñu génn ci ñoom?",
        "options": [
          "Bàkkar (hasad)",
          "Mér (ghadab)",
          "Naqar (huzn)",
          "Raggal (khawf)"
        ],
        "reponse_correcte": "Bàkkar (hasad)",
        "explication": "Bàkkar mooy xol bu bon bu tax nu bëgg ne ñeneen ñakk xéewal yi Yalla jox leen. Lislaam dafa nu jàngal nu sant Yalla ci li nu am te ñaan Yalla mu jox nu ci ay xéewalam."
      }
    }
  },
  {
    "id": 513,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans la sourate Al-A'raf, que nous demande Allah de ne pas ressentir dans nos cœurs concernant le Coran ?",
    "options": [
      "De la contrainte ou de la gêne",
      "De la joie",
      "De l'amour",
      "De la curiosité"
    ],
    "reponse_correcte": "De la contrainte ou de la gêne",
    "explication": "Allah nous demande d'accueillir le Coran avec un cœur ouvert, sans aucune gêne ni difficulté, car c'est un guide et une miséricorde pour nous.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ الأَعْرَافِ، مَاذَا يَطْلُبُ مِنَّا اللهُ أَلَّا نَشْعُرَ بِهِ فِي قُلُوبِنَا بِخُصُوصِ القُرْآنِ؟",
        "options": [
          "الحَرَجَ أَوِ الضِّيقَ",
          "الفَرَحَ",
          "الحُبَّ",
          "الفُضُولَ"
        ],
        "reponse_correcte": "الحَرَجَ أَوِ الضِّيقَ",
        "explication": "يَطْلُبُ مِنَّا اللهُ أَنْ نَسْتَقْبِلَ القُرْآنَ بِقَلْبٍ مَفْتُوحٍ، دُونَ أَيِّ ضِيقٍ أَوْ صُعُوبَةٍ، لِأَنَّهُ هُدًى وَرَحْمَةٌ لَنَا."
      },
      "wo": {
        "question": "Ci suuratul A'raf, lan la Yalla sant nu bañ a am ci sunuy xol ci wallu Alxuraan?",
        "options": [
          "Jafe-jafe mbaa xat-xat",
          "Mbëgéel",
          "Bëgg",
          "Xam-xam"
        ],
        "reponse_correcte": "Jafe-jafe mbaa xat-xat",
        "explication": "Yalla dafa nu sant nu nangu Alxuraan ak xol bu ubbeeku, bañ a am benn jafe-jafe mbaa xat-xat, ndax mooy gindiku ak yërmande ci nun."
      }
    }
  },
  {
    "id": 514,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Yunus, quelle bonne nouvelle est annoncée aux croyants qui ont œuvré avec sincérité ?",
    "options": [
      "Qu'ils auront une position élevée auprès de leur Seigneur",
      "Qu'ils seront riches dans ce monde",
      "Qu'ils vivront longtemps",
      "Qu'ils seront célèbres"
    ],
    "reponse_correcte": "Qu'ils auront une position élevée auprès de leur Seigneur",
    "explication": "Le verset promet aux croyants sincères une « place de vérité » ou une « haute position » auprès d'Allah, ce qui signifie une grande récompense et un honneur dans l'au-delà.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ يُونُسَ، مَا هِيَ البُشْرَى الَّتِي تُزَفُّ لِلْمُؤْمِنِينَ الَّذِينَ عَمِلُوا بِصِدْقٍ؟",
        "options": [
          "أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِنْدَ رَبِّهِمْ",
          "أَنَّهُمْ سَيَكُونُونَ أَغْنِيَاءَ فِي الدُّنْيَا",
          "أَنَّهُمْ سَيَعِيشُونَ طَوِيلًا",
          "أَنَّهُمْ سَيَكُونُونَ مَشْهُورِينَ"
        ],
        "reponse_correcte": "أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِنْدَ رَبِّهِمْ",
        "explication": "يَعِدُ الوَرْدُ المُؤْمِنِينَ الصَّادِقِينَ بـ\"قَدَمِ صِدْقٍ\" أَوْ \"مَكَانَةٍ عَالِيَةٍ\" عِنْدَ اللهِ، وَهَذَا يَعْنِي جَزَاءً عَظِيمًا وَشَرَفًا فِي الآخِرَةِ."
      },
      "wo": {
        "question": "Ci suuratul Yunus, lan mooy xibaar bu baax bi ñuy wax jullit ñi def jëf yu dëggu?",
        "options": [
          "Ne dañuy am daraja bu kawe ci seen Boroom",
          "Ne dañuy am alal ci adduna bi",
          "Ne dañuy dund lu yàgg",
          "Ne dañuy siiw"
        ],
        "reponse_correcte": "Ne dañuy am daraja bu kawe ci seen Boroom",
        "explication": "Aaya bi dafa digal jullit ñu dëggu \"barab bu dëggu\" mbaa \"daraja bu kawe\" ci Yalla, loolu dafa firi ne dañuy am pay bu mag ak teraanga ci allaaxira."
      }
    }
  },
  {
    "id": 515,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Yusuf, que nous enseigne l'histoire de la femme d'Al-Aziz (Zulaikha) qui a fermé les portes et a tenté Yusuf ?",
    "options": [
      "L'importance de la chasteté et de la pureté",
      "L'importance de la richesse",
      "L'importance du pouvoir",
      "L'importance de la beauté"
    ],
    "reponse_correcte": "L'importance de la chasteté et de la pureté",
    "explication": "L'histoire de Yusuf et de la femme d'Al-Aziz est un grand rappel de l'importance de la chasteté, de la pureté et de la résistance aux tentations, même face à de grandes pressions.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ يُوسُفَ، مَاذَا تُعَلِّمُنَا قِصَّةُ امْرَأَةِ العَزِيزِ (زُلَيْخَا) الَّتِي أَغْلَقَتِ الأَبْوَابَ وَحَاوَلَتْ إِغْوَاءَ يُوسُفَ؟",
        "options": [
          "أَهَمِّيَّةَ العِفَّةِ وَالطَّهَارَةِ",
          "أَهَمِّيَّةَ الغِنَى",
          "أَهَمِّيَّةَ السُّلْطَةِ",
          "أَهَمِّيَّةَ الجَمَالِ"
        ],
        "reponse_correcte": "أَهَمِّيَّةَ العِفَّةِ وَالطَّهَارَةِ",
        "explication": "قِصَّةُ يُوسُفَ وَامْرَأَةِ العَزِيزِ هِيَ تَذْكِيرٌ عَظِيمٌ بِأَهَمِّيَّةِ العِفَّةِ وَالطَّهَارَةِ وَمُقَاوَمَةِ الفِتَنِ، حَتَّى فِي وَجْهِ الضُّغُوطِ الكَبِيرَةِ."
      },
      "wo": {
        "question": "Ci suuratul Yusuf, lan la nu jàngale ci taarixu jigéenu Al-Aziz (Zulaikha) bi tëj buntu yi te bëgg a yàq Yusuf?",
        "options": [
          "Am solo ci set ak sell",
          "Am solo ci alal",
          "Am solo ci nguur",
          "Am solo ci rafet"
        ],
        "reponse_correcte": "Am solo ci set ak sell",
        "explication": "Taarixu Yusuf ak jigéenu Al-Aziz mooy fàttali bu mag ci am solo ci set, sell ak bañ a nangu fitna yi, ba ci jamono yu jafe yi."
      }
    }
  },
  {
    "id": 516,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans la sourate Al-Mu'minun, quelle est la première qualité des croyants qui réussissent ?",
    "options": [
      "L'humilité dans leur prière",
      "La richesse",
      "La force physique",
      "La beauté"
    ],
    "reponse_correcte": "L'humilité dans leur prière",
    "explication": "La première qualité des croyants qui réussissent est d'être humbles et concentrés dans leur prière. Cela signifie que leur cœur et leur esprit sont entièrement tournés vers Allah pendant la salat.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ المُؤْمِنُونَ، مَا هِيَ الصِّفَةُ الأُولَى لِلْمُؤْمِنِينَ المُفْلِحِينَ؟",
        "options": [
          "الخُشُوعُ فِي صَلَاتِهِمْ",
          "الغِنَى",
          "القُوَّةُ الجَسَدِيَّةُ",
          "الجَمَالُ"
        ],
        "reponse_correcte": "الخُشُوعُ فِي صَلَاتِهِمْ",
        "explication": "الصِّفَةُ الأُولَى لِلْمُؤْمِنِينَ المُفْلِحِينَ هِيَ أَنْ يَكُونُوا خَاشِعِينَ وَمُرَكِّزِينَ فِي صَلَاتِهِمْ. وَهَذَا يَعْنِي أَنَّ قُلُوبَهُمْ وَعُقُولَهُمْ مُتَّجِهَةٌ بِالْكَامِلِ إِلَى اللهِ أَثْنَاءَ الصَّلَاةِ."
      },
      "wo": {
        "question": "Ci suuratul Mu'minun, lan mooy jikko ju njëkk ci jullit ñi am ndam?",
        "options": [
          "Woyof ci seen julli",
          "Alal",
          "Doole gu yaram",
          "Rafet"
        ],
        "reponse_correcte": "Woyof ci seen julli",
        "explication": "Jikko ju njëkk ci jullit ñi am ndam mooy woyof ak dëggu ci seen julli. Loolu dafa firi ne seen xol ak seen xel dañuy jëm ci Yalla ci jamonoy julli."
      }
    }
  },
  {
    "id": 517,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate An-Nur, de quel événement grave est-il question, qui a causé beaucoup de peine à la communauté musulmane ?",
    "options": [
      "L'incident de la calomnie (Al-Ifk)",
      "La bataille de Badr",
      "La migration (Hijra)",
      "La construction de la Kaaba"
    ],
    "reponse_correcte": "L'incident de la calomnie (Al-Ifk)",
    "explication": "La sourate An-Nur aborde l'incident de la calomnie, où des hypocrites ont propagé de fausses rumeurs contre la femme du Prophète, Aïcha. Allah a révélé des versets pour la disculper et enseigner des leçons sur la pureté et la protection de l'honneur.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ النُّورِ، عَنْ أَيِّ حَدَثٍ خَطِيرٍ تَتَحَدَّثُ السُّورَةُ، وَالَّذِي سَبَّبَ كَثِيرًا مِنَ الأَلَمِ لِلْمُجْتَمَعِ المُسْلِمِ؟",
        "options": [
          "حَادِثَةِ الإِفْكِ",
          "غَزْوَةِ بَدْرٍ",
          "الهِجْرَةِ",
          "بِنَاءِ الكَعْبَةِ"
        ],
        "reponse_correcte": "حَادِثَةِ الإِفْكِ",
        "explication": "تَتَنَاوَلُ سُورَةُ النُّورِ حَادِثَةَ الإِفْكِ، حَيْثُ نَشَرَ المُنافِقُونَ إِشَاعَاتٍ كَاذِبَةً ضِدَّ زَوْجَةِ النَّبِيِّ عَائِشَةَ. وَأَنْزَلَ اللهُ آيَاتٍ لِتَبْرِئَتِهَا وَتَعْلِيمِ دُرُوسٍ عَنِ الطَّهَارَةِ وَحِمَايَةِ الشَّرَفِ."
      },
      "wo": {
        "question": "Ci suuratun Nuur, lan mooy xew-xew bu metti biñuy wax, bi sonaloon mboolem jullit ñi?",
        "options": [
          "Xew-xewu Ifk (jàppante)",
          "Xareb Badr",
          "Tukki (Hijra)",
          "Tabaxu Kaaba"
        ],
        "reponse_correcte": "Xew-xewu Ifk (jàppante)",
        "explication": "Suuratun Nuur dafa wax ci xew-xewu Ifk, fa la naafiq yi tasaaroo ay wax yu fen ci jigeenu Yonent bi, Aïcha. Yalla wàcce ay aaya ngir setal ko te jàngale ay jàngale ci set ak musal teraanga."
      }
    }
  },
  {
    "id": 518,
    "categorie": "Coran",
    "niveau": "Débutant",
    "question": "Dans la sourate An-Naml, quel prophète a souri en entendant la fourmi parler ?",
    "options": [
      "Prophète Sulayman",
      "Prophète Dawud",
      "Prophète Nuh",
      "Prophète Lut"
    ],
    "reponse_correcte": "Prophète Sulayman",
    "explication": "Le Prophète Sulayman (paix sur lui) avait la capacité de comprendre le langage des animaux. Son sourire en entendant la fourmi parler montre sa sagesse et sa reconnaissance envers Allah pour ce don.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ النَّمْلِ، أَيُّ نَبِيٍّ تَبَسَّمَ عِنْدَمَا سَمِعَ النَّمْلَةَ تَتَكَلَّمُ؟",
        "options": [
          "النَّبِيُّ سُلَيْمَانُ",
          "النَّبِيُّ دَاوُدُ",
          "النَّبِيُّ نُوحٌ",
          "النَّبِيُّ لُوطٌ"
        ],
        "reponse_correcte": "النَّبِيُّ سُلَيْمَانُ",
        "explication": "كَانَ النَّبِيُّ سُلَيْمَانُ (عَلَيْهِ السَّلَامُ) يَمْتَلِكُ القُدْرَةَ عَلَى فَهْمِ لُغَةِ الحَيَوَانَاتِ. وَتَبَسُّمُهُ عِنْدَ سَمَاعِ النَّمْلَةِ يَتَكَلَّمُ يُظْهِرُ حِكْمَتَهُ وَشُكْرَهُ للهِ عَلَى هَذِهِ الهِبَةِ."
      },
      "wo": {
        "question": "Ci suuratun Naml, waneb yonent la rëy ci bi mu déggee xàjj mi di wax?",
        "options": [
          "Yonent Sulayman",
          "Yonent Dawud",
          "Yonent Nuh",
          "Yonent Lut"
        ],
        "reponse_correcte": "Yonent Sulayman",
        "explication": "Yonent Sulayman (jamm yal na nekk ci moom) amoon na kàttan gu mu mën a déggee waxu mala yi. Rëyam ci bi mu déggee xàjj mi di wax dafa wone hikmaam ak santam ci Yalla ci may gi."
      }
    }
  },
  {
    "id": 519,
    "categorie": "Coran",
    "niveau": "Intermédiaire",
    "question": "Dans la sourate Al-Qasas, qu'est-ce qu'Allah a inspiré à la mère de Moussa (Moïse) lorsqu'elle craignait pour son fils ?",
    "options": [
      "De l'allaiter et de le jeter dans le fleuve",
      "De le cacher dans la maison",
      "De le confier à une autre femme",
      "De le tuer pour le protéger"
    ],
    "reponse_correcte": "De l'allaiter et de le jeter dans le fleuve",
    "explication": "Allah a inspiré à la mère de Moussa de l'allaiter puis de le déposer dans un panier et de le jeter dans le fleuve, avec la promesse qu'Il le lui rendrait. C'est un signe de la confiance totale en Allah.",
    "source": "500+ subtilités et merveilles du Coran",
    "tags": [
      "coran"
    ],
    "translations": {
      "ar": {
        "question": "فِي سُورَةِ القَصَصِ، مَاذَا أَوْحَى اللهُ إِلَى أُمِّ مُوسَى عِنْدَمَا خَافَتْ عَلَى ابْنِهَا؟",
        "options": [
          "أَنْ تُرْضِعَهُ وَتُلْقِيَهُ فِي النَّهْرِ",
          "أَنْ تُخْفِيَهُ فِي البَيْتِ",
          "أَنْ تُسَلِّمَهُ لِامْرَأَةٍ أُخْرَى",
          "أَنْ تَقْتُلَهُ لِحِمَايَتِهِ"
        ],
        "reponse_correcte": "أَنْ تُرْضِعَهُ وَتُلْقِيَهُ فِي النَّهْرِ",
        "explication": "أَوْحَى اللهُ إِلَى أُمِّ مُوسَى أَنْ تُرْضِعَهُ ثُمَّ تَضَعَهُ فِي صُنْدُوقٍ وَتُلْقِيَهُ فِي النَّهْرِ، مَعَ وَعْدٍ بِأَنَّهُ سَيَرُدُّهُ إِلَيْهَا. وَهَذَا دَلِيلٌ عَلَى الثِّقَةِ الكَامِلَةِ بِاللهِ."
      },
      "wo": {
        "question": "Ci suuratul Qasas, lan la Yalla wax yaayu Musa bi mu ragalee doomam?",
        "options": [
          "Mu nàmpal ko te sànni ko ci dex gi",
          "Mu nëbb ko ci kër gi",
          "Mu jox ko jigéen jeneen",
          "Mu rey ko ngir musal ko"
        ],
        "reponse_correcte": "Mu nàmpal ko te sànni ko ci dex gi",
        "explication": "Yalla dafa wax yaayu Musa mu nàmpal ko te mu def ko ci benn kër te mu sànni ko ci dex gi, ak digal ne dina ko dellu. Loolu mooy màndargam gëm Yalla gu mat."
      }
    }
  },
  {
    "id": 520,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Que doit-on dire avant de commencer à manger selon la Sunnah ?",
    "options": [
      "Alhamdulillah",
      "Bismillah",
      "Allahu Akbar",
      "Subhanallah"
    ],
    "reponse_correcte": "Bismillah",
    "explication": "Le Prophète (PSL) nous a enseigné de dire 'Bismillah' avant de manger pour bénir notre nourriture et éloigner le diable.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَجِبُ أَنْ نَقُولَ قَبْلَ أَنْ نَبْدَأَ الْأَكْلَ حَسَبَ السُّنَّةِ؟",
        "options": [
          "الْحَمْدُ لِلَّهِ",
          "بِسْمِ اللَّهِ",
          "اللَّهُ أَكْبَرُ",
          "سُبْحَانَ اللَّهِ"
        ],
        "reponse_correcte": "بِسْمِ اللَّهِ",
        "explication": "عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَقُولَ 'بِسْمِ اللَّهِ' قَبْلَ الْأَكْلِ لِتَبْرِيكِ طَعَامِنَا وَإِبْعَادِ الشَّيْطَانِ."
      },
      "wo": {
        "question": "Lan lañuy wax balaa ñuy tàmbali lekk ci sunna bi?",
        "options": [
          "Alhamdulillah",
          "Bismillah",
          "Allahu Akbar",
          "Subhanallah"
        ],
        "reponse_correcte": "Bismillah",
        "explication": "Yonnant bi (PSL) jàngal na nu nu wax 'Bismillah' balaa ñuy lekk ngir Yàlla barkeel sunuy ñam te Iblis baax ci."
      }
    }
  },
  {
    "id": 521,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Avec quelle main doit-on manger et boire selon la Sunnah ?",
    "options": [
      "La main gauche",
      "La main droite",
      "Les deux mains",
      "Peu importe"
    ],
    "reponse_correcte": "La main droite",
    "explication": "Le Prophète (PSL) mangeait et buvait avec la main droite, car le diable mange et boit avec la main gauche.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "بِأَيِّ يَدٍ يَجِبُ أَنْ نَأْكُلَ وَنَشْرَبَ حَسَبَ السُّنَّةِ؟",
        "options": [
          "الْيَدُ الْيُسْرَى",
          "الْيَدُ الْيُمْنَى",
          "كِلْتَا الْيَدَيْنِ",
          "لَا يُهِمُّ"
        ],
        "reponse_correcte": "الْيَدُ الْيُمْنَى",
        "explication": "كَانَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) يَأْكُلُ وَيَشْرَبُ بِيَدِهِ الْيُمْنَى، لِأَنَّ الشَّيْطَانَ يَأْكُلُ وَيَشْرَبُ بِيَدِهِ الْيُسْرَى."
      },
      "wo": {
        "question": "Ban loxo lañuy lekk ak naan ci sunna bi?",
        "options": [
          "Loxo gu càmmooñ gi",
          "Loxo gu ndeyjoor gi",
          "Ñaari loxo yi",
          "Du am solo"
        ],
        "reponse_correcte": "Loxo gu ndeyjoor gi",
        "explication": "Yonnant bi (PSL) daa lekk ak naan ci loxo gu ndeyjoor gi, ndax Iblis dafa lekk ak naan ci loxo gu càmmooñ gi."
      }
    }
  },
  {
    "id": 522,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Que doit-on faire après avoir fini de manger ?",
    "options": [
      "Se lever immédiatement",
      "Dire 'Alhamdulillah' et remercier Allah",
      "Aller dormir",
      "Crier de joie"
    ],
    "reponse_correcte": "Dire 'Alhamdulillah' et remercier Allah",
    "explication": "Le Prophète (PSL) disait toujours 'Alhamdulillah' après avoir mangé pour remercier Allah de nous avoir nourris.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَجِبُ أَنْ نَفْعَلَ بَعْدَ الْفَرَاغِ مِنَ الْأَكْلِ؟",
        "options": [
          "الْوُقُوفُ فَوْراً",
          "قَوْلُ 'الْحَمْدُ لِلَّهِ' وَشُكْرُ اللَّهِ",
          "الذَّهَابُ لِلنَّوْمِ",
          "الصُّرَاخُ فَرَحاً"
        ],
        "reponse_correcte": "قَوْلُ 'الْحَمْدُ لِلَّهِ' وَشُكْرُ اللَّهِ",
        "explication": "كَانَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) يَقُولُ دَائِماً 'الْحَمْدُ لِلَّهِ' بَعْدَ الْأَكْلِ لِشُكْرِ اللَّهِ عَلَى مَا رَزَقَنَا."
      },
      "wo": {
        "question": "Lan lañuy def suñu lekk ba jeex?",
        "options": [
          "Joggé sunu kaw",
          "Wax 'Alhamdulillah' te sant Yàlla",
          "Dem nelaw",
          "Wax ndong"
        ],
        "reponse_correcte": "Wax 'Alhamdulillah' te sant Yàlla",
        "explication": "Yonnant bi (PSL) daa wax 'Alhamdulillah' suñu lekk ba jeex ngir sant Yàlla ci li mu nu may."
      }
    }
  },
  {
    "id": 523,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Comment doit-on frapper à la porte selon les bonnes manières islamiques ?",
    "options": [
      "Frapper fort et plusieurs fois",
      "Frapper doucement trois fois et attendre",
      "Entrer sans frapper",
      "Crier devant la porte"
    ],
    "reponse_correcte": "Frapper doucement trois fois et attendre",
    "explication": "La Sunnah est de frapper trois fois doucement et d'attendre une réponse entre chaque coup.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ يَجِبُ أَنْ نَطْرُقَ الْبَابَ حَسَبَ الْآدَابِ الْإِسْلَامِيَّةِ؟",
        "options": [
          "الطَّرْقُ بِقُوَّةٍ وَعِدَّةَ مَرَّاتٍ",
          "الطَّرْقُ بِلُطْفٍ ثَلَاثَ مَرَّاتٍ وَالِانْتِظَارُ",
          "الدُّخُولُ بِدُونِ اسْتِئْذَانٍ",
          "الصُّرَاخُ أَمَامَ الْبَابِ"
        ],
        "reponse_correcte": "الطَّرْقُ بِلُطْفٍ ثَلَاثَ مَرَّاتٍ وَالِانْتِظَارُ",
        "explication": "مِنَ السُّنَّةِ أَنْ نَطْرُقَ ثَلَاثَ مَرَّاتٍ بِلُطْفٍ وَنَنْتَظِرَ رَدّاً بَيْنَ كُلِّ طَرْقَةٍ."
      },
      "wo": {
        "question": "Nan lañuy fàgg bunt bi ci anam yu baax yi?",
        "options": [
          "Fàgg ndox te lu bari",
          "Fàgg ndaw ñetti yoon te xaar",
          "Dugg bu fàggul",
          "Wax ndong ci bunt bi"
        ],
        "reponse_correcte": "Fàgg ndaw ñetti yoon te xaar",
        "explication": "Sunna bi mooy fàgg ñetti yoon ndaw te xaar tontu bi ci diggante fàgg bi nekk."
      }
    }
  },
  {
    "id": 524,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Que doit-on dire quand on éternue ?",
    "options": [
      "Alhamdulillah",
      "Allahu Akbar",
      "Bismillah",
      "La ilaha illallah"
    ],
    "reponse_correcte": "Alhamdulillah",
    "explication": "Le Prophète (PSL) nous a enseigné de dire 'Alhamdulillah' après avoir éternué, et celui qui entend doit répondre 'Yarhamukallah'.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ عِنْدَ الْعُطَاسِ؟",
        "options": [
          "الْحَمْدُ لِلَّهِ",
          "اللَّهُ أَكْبَرُ",
          "بِسْمِ اللَّهِ",
          "لَا إِلٰهَ إِلَّا اللَّهُ"
        ],
        "reponse_correcte": "الْحَمْدُ لِلَّهِ",
        "explication": "عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَقُولَ 'الْحَمْدُ لِلَّهِ' بَعْدَ الْعُطَاسِ، وَعَلَى السَّامِعِ أَنْ يَرُدَّ 'يَرْحَمُكَ اللَّهُ'."
      },
      "wo": {
        "question": "Lan lañuy wax suñu tis?",
        "options": [
          "Alhamdulillah",
          "Allahu Akbar",
          "Bismillah",
          "La ilaha illallah"
        ],
        "reponse_correcte": "Alhamdulillah",
        "explication": "Yonnant bi (PSL) jàngal na nu nu wax 'Alhamdulillah' suñu tis, te ku dégg war a tontu 'Yarhamukallah'."
      }
    }
  },
  {
    "id": 525,
    "categorie": "Akhlaq",
    "niveau": "Débutant",
    "question": "Comment doit-on saluer en entrant dans une maison ?",
    "options": [
      "Dire 'Bonjour'",
      "Dire 'Assalamu Alaykum' (Que la paix soit sur vous)",
      "Dire 'Merci'",
      "Ne rien dire"
    ],
    "reponse_correcte": "Dire 'Assalamu Alaykum' (Que la paix soit sur vous)",
    "explication": "Le salut islamique 'Assalamu Alaykum' est une invocation de paix et de bénédiction recommandée par le Coran et la Sunnah.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "enfants"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ نُسَلِّمُ عِنْدَ دُخُولِ الْبَيْتِ؟",
        "options": [
          "قَوْلُ 'بُونَ جُور' (Bonjour)",
          "قَوْلُ 'السَّلَامُ عَلَيْكُمْ'",
          "قَوْلُ 'شُكْراً'",
          "لَا نَقُولُ شَيْئاً"
        ],
        "reponse_correcte": "قَوْلُ 'السَّلَامُ عَلَيْكُمْ'",
        "explication": "التَّحِيَّةُ الْإِسْلَامِيَّةُ 'السَّلَامُ عَلَيْكُمْ' هِيَ دُعَاءٌ بِالسَّلَامِ وَالْبَرَكَةِ أَوْصَى بِهَا الْقُرْآنُ وَالسُّنَّةُ."
      },
      "wo": {
        "question": "Nan lañuy nuyu suñu dugg kër?",
        "options": [
          "Wax 'Bonjour'",
          "Wax 'Assalamu Alaykum'",
          "Wax 'Jërëjëf'",
          "Duñu wax lenn"
        ],
        "reponse_correcte": "Wax 'Assalamu Alaykum'",
        "explication": "Nuyu bi 'Assalamu Alaykum' mooy ñaanu jàmm ak barke ci Alxuraan ak Sunna la."
      }
    }
  },
  {
    "id": 526,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Que doit-on faire si quelqu'un nous invite chez lui ?",
    "options": [
      "Refuser poliment",
      "Accepter l'invitation et y aller avec joie",
      "Demander ce qu'il y a à manger",
      "Y aller sans prévenir"
    ],
    "reponse_correcte": "Accepter l'invitation et y aller avec joie",
    "explication": "Le Prophète (PSL) a encouragé d'accepter les invitations des musulmans pour renforcer les liens fraternels.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "fraternite"
    ],
    "translations": {
      "ar": {
        "question": "مَاذَا يَجِبُ أَنْ نَفْعَلَ إِذَا دَعَانَا أَحَدٌ إِلَى بَيْتِهِ؟",
        "options": [
          "الرَّفْضُ بِأَدَبٍ",
          "قَبُولُ الدَّعْوَةِ وَالذَّهَابُ بِفَرَحٍ",
          "سُؤَالُ مَا هُنَاكَ لِلْأَكْلِ",
          "الذَّهَابُ بِدُونِ إِخْبَارٍ"
        ],
        "reponse_correcte": "قَبُولُ الدَّعْوَةِ وَالذَّهَابُ بِفَرَحٍ",
        "explication": "حَثَّ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) عَلَى قَبُولِ دَعَوَاتِ الْمُسْلِمِينَ لِتَقْوِيَةِ رَوَابِطِ الْأُخُوَّةِ."
      },
      "wo": {
        "question": "Lan lañuy def suñu ñówalee ci kër?",
        "options": [
          "Nangoo ak jàmm",
          "Nangu ñówal bi te dem ak cofeel bu baax",
          "Laaj lu ñu lekk",
          "Dem bu ñu xamul"
        ],
        "reponse_correcte": "Nangu ñówal bi te dem ak cofeel bu baax",
        "explication": "Yonnant bi (PSL) digle na nangu ñówal yi ngir gën a dëgëral mbokk ya."
      }
    }
  },
  {
    "id": 527,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Comment doit-on traiter ses voisins en Islam ?",
    "options": [
      "On peut les ignorer",
      "On doit être gentil et bienveillant avec eux",
      "On ne leur parle jamais",
      "On peut leur faire du mal"
    ],
    "reponse_correcte": "On doit être gentil et bienveillant avec eux",
    "explication": "Le Prophète (PSL) a dit : 'Celui qui croit en Allah et au Jour Dernier, qu'il soit bon envers son voisin'.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "voisinage"
    ],
    "translations": {
      "ar": {
        "question": "كَيْفَ يَجِبُ أَنْ نُعَامِلَ جِيرَانَنَا فِي الْإِسْلَامِ؟",
        "options": [
          "يُمْكِنُنَا تَجَاهُلُهُمْ",
          "يَجِبُ أَنْ نَكُونَ لُطَفَاءَ وَمُحْسِنِينَ مَعَهُمْ",
          "لَا نَتَكَلَّمُ مَعَهُمْ أَبَداً",
          "يُمْكِنُنَا إِيذَاؤُهُمْ"
        ],
        "reponse_correcte": "يَجِبُ أَنْ نَكُونَ لُطَفَاءَ وَمُحْسِنِينَ مَعَهُمْ",
        "explication": "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ): 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُحْسِنْ إِلَى جَارِهِ'."
      },
      "wo": {
        "question": "Nan lañuy jàppale sunuy mbokka ci Lislaam?",
        "options": [
          "Mën nañu ko fattaliku",
          "War nañu am cofeel bu baax ak ñoom",
          "Duñu wax ak ñoom",
          "Mën nañu ñoom def lom bon"
        ],
        "reponse_correcte": "War nañu am cofeel bu baax ak ñoom",
        "explication": "Yonnant bi (PSL) nee na: 'Ku gëm Yàlla ak Bésu Alxira, na def baax ci mbokkam'."
      }
    }
  },
  {
    "id": 528,
    "categorie": "Akhlaq",
    "niveau": "Intermédiaire",
    "question": "Quelle est l'attitude du musulman envers les animaux ?",
    "options": [
      "Il peut les frapper",
      "Il doit être doux et miséricordieux envers eux",
      "Il doit les ignorer",
      "Il peut les enfermer sans nourriture"
    ],
    "reponse_correcte": "Il doit être doux et miséricordieux envers eux",
    "explication": "Le Prophète (PSL) a dit qu'une femme est entrée au Paradis pour avoir donné à boire à un chien assoiffé, et qu'une autre est entrée en Enfer pour avoir enfermé un chat sans nourriture.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "animaux",
      "misericorde"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ مَوْقِفُ الْمُسْلِمِ تُجَاهَ الْحَيَوَانَاتِ؟",
        "options": [
          "يُمْكِنُهُ ضَرْبُهَا",
          "يَجِبُ أَنْ يَكُونَ لَطِيفاً وَرَحِيماً بِهَا",
          "يَجِبُ أَنْ يَتَجَاهَلَهَا",
          "يُمْكِنُهُ حَبْسُهَا بِدُونِ طَعَامٍ"
        ],
        "reponse_correcte": "يَجِبُ أَنْ يَكُونَ لَطِيفاً وَرَحِيماً بِهَا",
        "explication": "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) إِنَّ امْرَأَةً دَخَلَتِ الْجَنَّةَ لِأَنَّهَا سَقَتْ كَلْباً عَطْشَانَ، وَأُخْرَى دَخَلَتِ النَّارَ لِأَنَّهَا حَبَسَتْ هِرَّةً بِدُونِ طَعَامٍ."
      },
      "wo": {
        "question": "Nan la jullit bi war a jàppale mala yi?",
        "options": [
          "Mën nañu ko bàkke",
          "War na am yërmande ak ñoom",
          "War na ko fattaliku",
          "Mën nañu ko lëngel bu ñu mayul ko"
        ],
        "reponse_correcte": "War na am yërmande ak ñoom",
        "explication": "Yonnant bi (PSL) nee na jigéen benn dugg na Jànn ndax teye na xaj bi mar, te beneen dugg na Jahannama ndax lëngel na muus bi bu ñu mayul ko."
      }
    }
  },
  {
    "id": 529,
    "categorie": "Akhlaq",
    "niveau": "Avancé",
    "question": "Que signifie le terme 'Husn al-Khuluq' (le bon caractère) en Islam ?",
    "options": [
      "Avoir un beau visage",
      "Avoir un bon comportement et de belles manières avec les autres",
      "Être riche",
      "Parler plusieurs langues"
    ],
    "reponse_correcte": "Avoir un bon comportement et de belles manières avec les autres",
    "explication": "Le Prophète (PSL) a dit : 'La chose la plus lourde dans la balance du croyant le Jour du Jugement est le bon caractère'.",
    "source": "Les bonnes manières prophétiques pour les enfants",
    "tags": [
      "akhlaq",
      "sunnah",
      "caractere"
    ],
    "translations": {
      "ar": {
        "question": "مَا مَعْنَى 'حُسْنِ الْخُلُقِ' فِي الْإِسْلَامِ؟",
        "options": [
          "وَجْهٌ جَمِيلٌ",
          "سُلُوكٌ حَسَنٌ وَأَخْلَاقٌ جَمِيلَةٌ مَعَ الْآخَرِينَ",
          "أَنْ تَكُونَ غَنِيّاً",
          "التَّحَدُّثُ بِعِدَّةِ لُغَاتٍ"
        ],
        "reponse_correcte": "سُلُوكٌ حَسَنٌ وَأَخْلَاقٌ جَمِيلَةٌ مَعَ الْآخَرِينَ",
        "explication": "قَالَ النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ): 'أَثْقَلُ شَيْءٍ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ حُسْنُ الْخُلُقِ'."
      },
      "wo": {
        "question": "Lan moy firi 'Husn al-Khuluq' (jikko bu baax) ci Lislaam?",
        "options": [
          "Am kanam gu rafet",
          "Am jikko bu baax ak anam yu rafet ci mbokk yi",
          "Am alal",
          "Wax ci ay làkk yu bari"
        ],
        "reponse_correcte": "Am jikko bu baax ak anam yu rafet ci mbokk yi",
        "explication": "Yonnant bi (PSL) nee na: 'Li gën a dijë ci asaka bu néew gi ci bisub Alxira, mooy jikko bu baax'."
      }
    }
  },
  {
    "id": 530,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quel est le premier mois du calendrier islamique (Hijri) ?",
    "options": [
      "Ramadan",
      "Muharram",
      "Chawwal",
      "Dhu al-Hijjah"
    ],
    "reponse_correcte": "Muharram",
    "explication": "Le calendrier islamique commence par le mois de Muharram et se termine par Dhu al-Hijjah.",
    "source": "Les devoirs et obligations du jeune musulman",
    "tags": [
      "fiqh",
      "calendrier",
      "hijri"
    ],
    "translations": {
      "ar": {
        "question": "مَا هُوَ الشَّهْرُ الْأَوَّلُ فِي التَّقْوِيمِ الْإِسْلَامِيِّ (الْهِجْرِيِّ)؟",
        "options": [
          "رَمَضَانُ",
          "مُحَرَّمُ",
          "شَوَّالُ",
          "ذُو الْحِجَّةِ"
        ],
        "reponse_correcte": "مُحَرَّمُ",
        "explication": "يَبْدَأُ التَّقْوِيمُ الْإِسْلَامِيُّ بِشَهْرِ مُحَرَّمَ وَيَنْتَهِي بِذِي الْحِجَّةِ."
      },
      "wo": {
        "question": "Ban weer mooy jëkk bi ci lislaam (Hijri)?",
        "options": [
          "Weeru Koor",
          "Weeru Tamxarit",
          "Weeru Koorite",
          "Weeru Hajj"
        ],
        "reponse_correcte": "Weeru Tamxarit",
        "explication": "Lislaam weer yi dañuy tàmbali ci weeru Tamxarit te jeex ci weeru Hajj."
      }
    }
  },
  {
    "id": 531,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Combien de fois par jour un musulman prie-t-il ?",
    "options": [
      "3 fois",
      "5 fois",
      "7 fois",
      "1 fois"
    ],
    "reponse_correcte": "5 fois",
    "explication": "Les cinq prières obligatoires sont : Fajr (aube), Dhuhr (midi), Asr (après-midi), Maghrib (coucher du soleil) et Isha (nuit).",
    "source": "Les devoirs et obligations du jeune musulman",
    "tags": [
      "fiqh",
      "priere",
      "obligations"
    ],
    "translations": {
      "ar": {
        "question": "كَمْ مَرَّةً فِي الْيَوْمِ يُصَلِّي الْمُسْلِمُ؟",
        "options": [
          "٣ مَرَّاتٍ",
          "٥ مَرَّاتٍ",
          "٧ مَرَّاتٍ",
          "مَرَّةً وَاحِدَةً"
        ],
        "reponse_correcte": "٥ مَرَّاتٍ",
        "explication": "الصَّلَوَاتُ الْخَمْسُ الْمَفْرُوضَةُ هِيَ: الْفَجْرُ، الظُّهْرُ، الْعَصْرُ، الْمَغْرِبُ، وَالْعِشَاءُ."
      },
      "wo": {
        "question": "Ñata yoon ci bës la jullit bi julli?",
        "options": [
          "3 yoon",
          "5 yoon",
          "7 yoon",
          "1 yoon"
        ],
        "reponse_correcte": "5 yoon",
        "explication": "Juróomi julli yu war yi ñooy: Fajar, Tisbar, Takusaan, Timis, ak Gee."
      }
    }
  },
  {
    "id": 532,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Qu'est-ce qui annule le jeûne du Ramadan ?",
    "options": [
      "Dormir",
      "Manger et boire volontairement",
      "Parler",
      "Marcher"
    ],
    "reponse_correcte": "Manger et boire volontairement",
    "explication": "Le jeûne consiste à s'abstenir de manger, boire et avoir des relations conjugales de l'aube au coucher du soleil.",
    "source": "Les trésors du Ramadan pour enfants",
    "tags": [
      "fiqh",
      "ramadan",
      "jeune"
    ],
    "translations": {
      "ar": {
        "question": "مَا الَّذِي يُبْطِلُ صَوْمَ رَمَضَانَ؟",
        "options": [
          "النَّوْمُ",
          "الْأَكْلُ وَالشُّرْبُ عَمْداً",
          "الْكَلَامُ",
          "الْمَشْيُ"
        ],
        "reponse_correcte": "الْأَكْلُ وَالشُّرْبُ عَمْداً",
        "explication": "الصِّيَامُ هُوَ الِامْتِنَاعُ عَنِ الْأَكْلِ وَالشُّرْبِ وَالْجِمَاعِ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ."
      },
      "wo": {
        "question": "Lan moy yaq koor gi?",
        "options": [
          "Nelaw",
          "Lekk ak naan ci mbëj",
          "Wax",
          "Doox"
        ],
        "reponse_correcte": "Lekk ak naan ci mbëj",
        "explication": "Koor gi mooy bañ lekk, naan ak goom ci jamono ju fajar ba timis."
      }
    }
  },
  {
    "id": 533,
    "categorie": "Fiqh",
    "niveau": "Intermédiaire",
    "question": "Quelle est la différence entre la Zakat (aumône obligatoire) et la Sadaqah (aumône volontaire) ?",
    "options": [
      "Il n'y a aucune différence",
      "La Zakat est obligatoire avec des règles précises, la Sadaqah est volontaire",
      "La Sadaqah est obligatoire",
      "La Zakat se donne uniquement aux parents"
    ],
    "reponse_correcte": "La Zakat est obligatoire avec des règles précises, la Sadaqah est volontaire",
    "explication": "La Zakat est le 3ème pilier de l'Islam avec un montant précis (2.5% de l'épargne), tandis que la Sadaqah est une aumône libre qu'on donne quand on veut.",
    "source": "Les devoirs et obligations du jeune musulman",
    "tags": [
      "fiqh",
      "zakat",
      "sadaqah"
    ],
    "translations": {
      "ar": {
        "question": "مَا الْفَرْقُ بَيْنَ الزَّكَاةِ (الصَّدَقَةِ الْوَاجِبَةِ) وَالصَّدَقَةِ (التَّطَوُّعِيَّةِ)؟",
        "options": [
          "لَا فَرْقَ بَيْنَهُمَا",
          "الزَّكَاةُ وَاجِبَةٌ بِقَوَاعِدَ مُحَدَّدَةٍ، وَالصَّدَقَةُ تَطَوُّعِيَّةٌ",
          "الصَّدَقَةُ وَاجِبَةٌ",
          "الزَّكَاةُ تُعْطَى لِلْوَالِدَيْنِ فَقَطْ"
        ],
        "reponse_correcte": "الزَّكَاةُ وَاجِبَةٌ بِقَوَاعِدَ مُحَدَّدَةٍ، وَالصَّدَقَةُ تَطَوُّعِيَّةٌ",
        "explication": "الزَّكَاةُ هِيَ الرُّكْنُ الثَّالِثُ مِنَ الْإِسْلَامِ بِمِقْدَارٍ مُحَدَّدٍ (٢.٥٪ مِنَ الِادِّخَارِ)، بَيْنَمَا الصَّدَقَةُ هِيَ عَطَاءٌ حُرٌّ نُعْطِيهِ مَتَى شِئْنَا."
      },
      "wo": {
        "question": "Lan moy wuute ci diggante Asaka (bu war) ak Sadaqa (bu xameel) ?",
        "options": [
          "Amul wuute",
          "Asaka war na, Sadaqa xameel la",
          "Sadaqa mooy war",
          "Asaka ñu may ko ci waajur yi rekk"
        ],
        "reponse_correcte": "Asaka war na, Sadaqa xameel la",
        "explication": "Asaka mooy pontu Lislaam bu ñettel bi, 2.5% ci sa alal la. Sadaqa xameel la, mën nga may ko bu bëgge."
      }
    }
  },
  {
    "id": 534,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Avant de commencer la prière, comment doit-on faire l'intention (niyyah) ?",
    "options": [
      "En la disant à voix haute avec la langue.",
      "En la disant doucement avec la langue.",
      "En la faisant dans son cœur, sans la prononcer.",
      "L'intention n'est pas nécessaire pour la prière."
    ],
    "reponse_correcte": "En la faisant dans son cœur, sans la prononcer.",
    "explication": "L'intention est un acte du cœur, on la fait en pensant à la prière que l'on va accomplir, sans avoir besoin de la dire avec la langue. C'est Allah qui connaît le mieux ce qui est dans nos cœurs !",
    "translations": {
      "ar": {
        "question": "قَبْلَ أَنْ نَبْدَأَ الصَّلَاةَ، كَيْفَ نَنْوِي (نِيَّةَ) الصَّلَاةِ؟",
        "options": [
          "بِقَوْلِهَا بِصَوْتٍ عَالٍ بِاللِّسَانِ.",
          "بِقَوْلِهَا بِصَوْتٍ مُنْخَفِضٍ بِاللِّسَانِ.",
          "بِجَعْلِهَا فِي الْقَلْبِ، دُونَ النُّطْقِ بِهَا.",
          "النِّيَّةُ لَيْسَتْ ضَرُورِيَّةً لِلصَّلَاةِ."
        ],
        "reponse_correcte": "بِجَعْلِهَا فِي الْقَلْبِ، دُونَ النُّطْقِ بِهَا.",
        "explication": "النِّيَّةُ عَمَلٌ قَلْبِيٌّ، نَقُومُ بِهَا بِالتَّفْكِيرِ فِي الصَّلَاةِ الَّتِي سَنُؤَدِّيهَا، دُونَ الْحَاجَةِ إِلَى النُّطْقِ بِهَا بِاللِّسَانِ. وَاللَّهُ أَعْلَمُ بِمَا فِي قُلُوبِنَا!"
      },
      "wo": {
        "question": "Jàppandi, balaa ñuy tàmbali julli, nan lañuy def sunuy yéene (niyyah)?",
        "options": [
          "Di ko wax ci kaw ak làŋam.",
          "Di ko wax ci suuf ak làŋam.",
          "Di ko def ci xol bi, te duñu ko wax.",
          "Yéene du lu am solo ci julli."
        ],
        "reponse_correcte": "Di ko def ci xol bi, te duñu ko wax.",
        "explication": "Yéene, liggéeyu xol la. Nu koy def ci sunuy xol, di xalaat julli gi nuy def, te duñu ko wax ak làŋam. Yàlla moo gën a xam li nekk ci sunuy xol!"
      }
    }
  },
  {
    "id": 535,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Où doit-on placer nos mains lorsque nous sommes debout pendant la prière, après le Takbir d'ouverture ?",
    "options": [
      "Les laisser pendre le long du corps.",
      "Placer la main gauche sur la main droite, sur la poitrine.",
      "Placer la main droite sur la main gauche, sur la poitrine.",
      "Les croiser derrière le dos."
    ],
    "reponse_correcte": "Placer la main droite sur la main gauche, sur la poitrine.",
    "explication": "C'est une Sunnah du Prophète Muhammad (paix et bénédictions sur lui) de placer la main droite sur la main gauche, sur la poitrine, en signe de respect et de soumission devant Allah.",
    "translations": {
      "ar": {
        "question": "أَيْنَ يَجِبُ أَنْ نَضَعَ أَيْدِيَنَا عِنْدَمَا نَقِفُ فِي الصَّلَاةِ، بَعْدَ تَكْبِيرَةِ الْإِحْرَامِ؟",
        "options": [
          "نَتْرُكُهَا مُتَدَلِّيَةً بِجَانِبِ الْجِسْمِ.",
          "نَضَعُ الْيَدَ الْيُسْرَى عَلَى الْيَدِ الْيُمْنَى، عَلَى الصَّدْرِ.",
          "نَضَعُ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ.",
          "نُشَبِّكُهَا خَلْفَ الظَّهْرِ."
        ],
        "reponse_correcte": "نَضَعُ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ.",
        "explication": "مِنْ سُنَّةِ النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَضَعَ الْيَدَ الْيُمْنَى عَلَى الْيَدِ الْيُسْرَى، عَلَى الصَّدْرِ، إِظْهَارًا لِلِاحْتِرَامِ وَالْخُضُوعِ لِلَّهِ."
      },
      "wo": {
        "question": "Fan lañuy teg sunuy loxo suñu taxawé ci julli, ginnaaw Takbiratul Ihram?",
        "options": [
          "Ñu bayyi leen ñuy dal ci wetu yaram bi.",
          "Teg loxo gu càmmooñ gi ci gu ndeyjoor gi, ci kàttan gi.",
          "Teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi.",
          "Ñu jàppale leen ci ginnaaw ginaaw."
        ],
        "reponse_correcte": "Teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi.",
        "explication": "Sunna ci Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) mooy teg loxo gu ndeyjoor gi ci gu càmmooñ gi, ci kàttan gi, ngir wone màggal ak ñeewu ci Yàlla."
      }
    }
  },
  {
    "id": 536,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Quand on se relève de l'inclination (Ruku'), que dit-on ?",
    "options": [
      "\"Allahu Akbar\" (Allah est le Plus Grand).",
      "\"Subhana Rabbiyal A'la\" (Gloire à mon Seigneur, le Très-Haut).",
      "\"Sami' Allahu liman hamidah\" (Allah entend celui qui Le loue).",
      "\"Alhamdulillah\" (Toutes les louanges sont à Allah)."
    ],
    "reponse_correcte": "\"Sami' Allahu liman hamidah\" (Allah entend celui qui Le loue).",
    "explication": "Après le Ruku', en se relevant, on dit \"Sami' Allahu liman hamidah\". Puis, une fois debout et stable, on ajoute \"Rabbana wa lakal hamd\" (Ô notre Seigneur, à Toi la louange). C'est ainsi que le Prophète (paix et bénédictions sur lui) nous a montré.",
    "translations": {
      "ar": {
        "question": "عِنْدَمَا نَرْفَعُ رُؤُوسَنَا مِنَ الرُّكُوعِ، مَاذَا نَقُولُ؟",
        "options": [
          "\"اللَّهُ أَكْبَرُ\".",
          "\"سُبْحَانَ رَبِّيَ الْأَعْلَى\".",
          "\"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\".",
          "\"الْحَمْدُ لِلَّهِ\"."
        ],
        "reponse_correcte": "\"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\".",
        "explication": "بَعْدَ الرُّكُوعِ، عِنْدَ الرَّفْعِ مِنْهُ، نَقُولُ \"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\". ثُمَّ بَعْدَ الْوُقُوفِ وَالِاسْتِقْرَارِ، نُضِيفُ \"رَبَّنَا وَلَكَ الْحَمْدُ\". هَكَذَا عَلَّمَنَا النَّبِيُّ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ)."
      },
      "wo": {
        "question": "Suñu joggé ci ruku gi, lan lañuy wax?",
        "options": [
          "\"Allahu Akbar\" (Yàlla moo gën a Màgg).",
          "\"Subhana Rabbiyal A'la\" (Sell na sama Boroom, mi gën a Kawe).",
          "\"Sami' Allahu liman hamidah\" (Yàlla dégg na ku ko sant).",
          "\"Alhamdulillah\" (Sant yépp Yàlla la)."
        ],
        "reponse_correcte": "\"Sami' Allahu liman hamidah\" (Yàlla dégg na ku ko sant).",
        "explication": "Ginnaaw ruku gi, suñu joggé, dañuy wax \"Sami' Allahu liman hamidah\". Te suñu taxawé ba dal, nu teg ci \"Rabbana wa lakal hamd\" (Yàlla sunu Boroom, yaw la sant yépp). Ni la Yonnant bi (jàmm ak mucc ñoo ngi ci moom) nu woné."
      }
    }
  },
  {
    "id": 537,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Sur combien de parties du corps (os) doit-on se prosterner (Sujud) ?",
    "options": [
      "Cinq parties.",
      "Six parties.",
      "Sept parties.",
      "Huit parties."
    ],
    "reponse_correcte": "Sept parties.",
    "explication": "Le Prophète Muhammad (paix et bénédictions sur lui) nous a enseigné de nous prosterner sur sept parties du corps : le front et le nez (comptés comme une seule), les deux mains, les deux genoux et les extrémités des deux pieds (les orteils).",
    "translations": {
      "ar": {
        "question": "عَلَى كَمْ جُزْءٍ مِنَ الْجِسْمِ (عَظْمٍ) يَجِبُ أَنْ نَسْجُدَ؟",
        "options": [
          "خَمْسَةِ أَجْزَاءٍ.",
          "سِتَّةِ أَجْزَاءٍ.",
          "سَبْعَةِ أَجْزَاءٍ.",
          "ثَمَانِيَةِ أَجْزَاءٍ."
        ],
        "reponse_correcte": "سَبْعَةِ أَجْزَاءٍ.",
        "explication": "عَلَّمَنَا النَّبِيُّ مُحَمَّدٌ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) أَنْ نَسْجُدَ عَلَى سَبْعَةِ أَعْضَاءٍ: الْجَبْهَةِ وَالْأَنْفِ (يُعَدَّانِ وَاحِدًا)، وَالْيَدَيْنِ، وَالرُّكْبَتَيْنِ، وَأَطْرَافِ الْقَدَمَيْنِ (أَصَابِعِ الْقَدَمَيْنِ)."
      },
      "wo": {
        "question": "Ci ñata wàllu yaram (yax) lañuy sujood?",
        "options": [
          "Juróom ñetti wàll.",
          "Juróom benni wàll.",
          "Juróom ñaari wàll.",
          "Juróom ñeenti wàll."
        ],
        "reponse_correcte": "Juróom ñaari wàll.",
        "explication": "Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) jàngal na nu nu sujood ci juróom ñaari wàllu yaram: jëmm ak bakkan (ñu jàpp leen benn), ñaari loxo yi, ñaari tànk yi, ak ñaari bàkkanu tànk yi."
      }
    }
  },
  {
    "id": 538,
    "categorie": "Fiqh",
    "niveau": "Débutant",
    "question": "Que dit-on pendant la position assise du Tashahhud dans la prière ?",
    "options": [
      "Seulement \"Subhanallah\".",
      "Le Tashahhud et les Salawat sur le Prophète.",
      "Seulement \"Alhamdulillah\".",
      "Le Du'a al-Istiftah."
    ],
    "reponse_correcte": "Le Tashahhud et les Salawat sur le Prophète.",
    "explication": "Pendant le Tashahhud, nous récitons les paroles du Tashahhud qui incluent des salutations à Allah, au Prophète et aux pieux serviteurs, puis nous attestons de l'unicité d'Allah et de la prophétie de Muhammad. Ensuite, nous envoyons des prières (Salawat) sur le Prophète Muhammad (paix et bénédictions sur lui) et sa famille, comme il nous l'a appris.",
    "translations": {
      "ar": {
        "question": "مَاذَا نَقُولُ فِي وَضْعِ الْجُلُوسِ لِلتَّشَهُّدِ فِي الصَّلَاةِ؟",
        "options": [
          "فَقَطْ \"سُبْحَانَ اللَّهِ\".",
          "التَّشَهُّدَ وَالصَّلَوَاتِ عَلَى النَّبِيِّ.",
          "فَقَطْ \"الْحَمْدُ لِلَّهِ\".",
          "دُعَاءَ الِاسْتِفْتَاحِ."
        ],
        "reponse_correcte": "التَّشَهُّدَ وَالصَّلَوَاتِ عَلَى النَّبِيِّ.",
        "explication": "أَثْنَاءَ التَّشَهُّدِ، نَتْلُو كَلِمَاتِ التَّشَهُّدِ الَّتِي تَشْمَلُ التَّحِيَّاتِ لِلَّهِ وَلِلنَّبِيِّ وَلِلْعِبَادِ الصَّالِحِينَ، ثُمَّ نَشْهَدُ بِوَحْدَانِيَّةِ اللَّهِ وَنُبُوَّةِ مُحَمَّدٍ. بَعْدَ ذَلِكَ، نُصَلِّي عَلَى النَّبِيِّ مُحَمَّدٍ (صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ) وَآلِهِ، كَمَا عَلَّمَنَا."
      },
      "wo": {
        "question": "Lan lañuy wax suñu toogé ci Tashahhud ci julli gi?",
        "options": [
          "\"Subhanallah\" rekk.",
          "Tashahhud bi ak Salawat yi ci Yonnant bi.",
          "\"Alhamdulillah\" rekk.",
          "Du'a al-Istiftah."
        ],
        "reponse_correcte": "Tashahhud bi ak Salawat yi ci Yonnant bi.",
        "explication": "Ci Tashahhud bi, dañuy jàngi ay baatu Tashahhud yu am solo, yu ci mel ni nuy nuyu Yàlla, Yonnant bi ak jaam yu baax yi, te nu seede ne amul benn yàlla bu wóor lu dul Yàlla, te Muhammad mooy Jaamam ak Yonnantam. Ginnaaw loolu, dañuy julli ci Yonnant bi Muhammad (jàmm ak mucc ñoo ngi ci moom) ak njabootam, ni mu nu ko jàngale."
      }
    }
  },
  ...EXTRA_QUESTIONS
];

export const BADGES: Badge[] = [
  {
    id: 'first_steps',
    title: 'Premier Pas',
    description: 'Répondez correctement à votre toute première question.',
    icon: 'Sparkles',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    requirementType: 'xp',
    requirementValue: 15
  },
  {
    id: 'talibe_fidele',
    title: 'Talibé Fidèle',
    description: 'Obtenez 150 XP au total en répondant bien aux questions.',
    icon: 'Award',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    requirementType: 'xp',
    requirementValue: 150
  },
  {
    id: 'expert_fiqh',
    title: 'Faqih Découvreur',
    description: 'Ayez un score sans faute de 3 questions correctes en Fiqh.',
    icon: 'BookOpen',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    requirementType: 'category',
    requirementValue: 3,
    requirementDetail: 'Fiqh'
  },
  {
    id: 'expert_sirah',
    title: 'Biographe du Prophète',
    description: 'Complétez 3 bonnes réponses sur la Sirah.',
    icon: 'Compass',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    requirementType: 'category',
    requirementValue: 3,
    requirementDetail: 'Sirah'
  },
  {
    id: 'expert_coran',
    title: 'Compagnon du Coran',
    description: 'Complétez 3 bonnes réponses sur le Coran.',
    icon: 'BookOpen',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    requirementType: 'category',
    requirementValue: 3,
    requirementDetail: 'Coran'
  },
  {
    id: 'expert_akhlaq',
    title: 'Modèle de Comportement',
    description: "Complétez 3 bonnes réponses sur l'Akhlaq.",
    icon: 'Heart',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    requirementType: 'category',
    requirementValue: 3,
    requirementDetail: 'Akhlaq'
  },
  {
    id: 'ami_mouyassar',
    title: "Ami de l'Institut",
    description: 'Répondez juste à 4 questions sur l\'Institut Al-Mouyassar.',
    icon: 'Heart',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    requirementType: 'category',
    requirementValue: 4,
    requirementDetail: 'Institut Al-Mouyassar'
  },
  {
    id: 'gardien_aqidah',
    title: 'Gardien de la Aqidah',
    description: 'Complétez 2 bonnes réponses en Aqidah.',
    icon: 'Shield',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    requirementType: 'category',
    requirementValue: 2,
    requirementDetail: 'Aqidah'
  },
  {
    id: 'streak_maitre',
    title: 'Série de Génie',
    description: 'Obtenez une série de 5 bonnes réponses d\'affilée.',
    icon: 'Zap',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    requirementType: 'streak',
    requirementValue: 5
  },
  {
    id: 'grand_savant',
    title: 'Érudit de l\'Institut',
    description: 'Atteignez 500 XP pour honorer le savoir de Cheikh El Hadji Abdallah Niasse.',
    icon: 'GraduationCap',
    color: 'bg-violet-50 text-violet-700 border-violet-200',
    requirementType: 'xp',
    requirementValue: 500
  },
  {
    id: 'progression_beginner',
    title: 'Bourgeon des Épreuves',
    description: 'Complétez votre premier quiz avec succès (1 session).',
    icon: 'Award',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    requirementType: 'completed_quizzes',
    requirementValue: 1
  },
  {
    id: 'progression_intermediate',
    title: 'Pélerin des Quiz',
    description: 'Faites preuve de constance en complétant 5 sessions de quiz.',
    icon: 'Compass',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    requirementType: 'completed_quizzes',
    requirementValue: 5
  },
  {
    id: 'progression_advanced',
    title: 'Savant Émérite',
    description: 'Accédez à l\'excellence en achevant 10 sessions de quiz entières.',
    icon: 'Trophy',
    color: 'bg-[#004D40]/10 text-[#004D40] border-[#004D40]/25',
    requirementType: 'completed_quizzes',
    requirementValue: 10
  },
  {
    id: 'graine_de_la_foi',
    title: 'Graine de la Foi',
    description: 'Obtenu en terminant le Chapitre 1 de l\'Aventure Al-Mouyassar.',
    icon: 'BookOpen',
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    requirementType: 'adventure',
    requirementValue: 1
  },
  {
    id: 'chemin_de_la_lumiere',
    title: 'Chemin de la Lumière',
    description: 'Obtenu en terminant le Chapitre 2 de l\'Aventure Al-Mouyassar.',
    icon: 'Compass',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    requirementType: 'adventure',
    requirementValue: 2
  },
  {
    id: 'batisseur_avenir',
    title: 'Bâtisseur de l\'Avenir',
    description: 'Obtenu en terminant le Chapitre 3 de l\'Aventure Al-Mouyassar.',
    icon: 'Trophy',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    requirementType: 'adventure',
    requirementValue: 3
  },
  {
    id: 'soutien_structurel',
    title: 'Pilier de la Modernisation',
    description: 'Obtenu en terminant le Chapitre 4 de l\'Aventure Al-Mouyassar sur l\'AMDMEC.',
    icon: 'Shield',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    requirementType: 'adventure',
    requirementValue: 4
  },
  {
    id: 'vox_burda',
    title: 'Mélode de la Burda',
    description: 'Obtenu pour avoir interprété la célèbre Qasida de la Burda d\'Al-Busiri avec brio.',
    icon: 'Music',
    color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    requirementType: 'xp',
    requirementValue: 10000 // custom trigger from karaoke
  },
  {
    id: 'vox_niass',
    title: 'Héritier du Fondateur',
    description: 'Obtenu pour avoir interprété le Poème du Savoir Lumineux d\'El Hadji Abdallah Niasse.',
    icon: 'GraduationCap',
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    requirementType: 'xp',
    requirementValue: 10000
  },
  {
    id: 'vox_hanana',
    title: 'Messager du Bonheur',
    description: 'Obtenu pour avoir complété et chanté le sublime chant de liesse \'Ya Hanana\'.',
    icon: 'Sparkles',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    requirementType: 'xp',
    requirementValue: 10000
  },
  {
    id: 'vox_or_mouyassar',
    title: 'Voix d\'Or Al-Mouyassar',
    description: 'Obtenu pour avoir chanté le Nachid de l\'institut avec un score impérial.',
    icon: 'Music',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    requirementType: 'xp',
    requirementValue: 10000
  },
  {
    id: 'recitateur_medine',
    title: 'Mélode de Médine',
    description: 'Obtenu pour avoir interprété Tala\'al Badru \'Alayna avec ferveur.',
    icon: 'Music',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    requirementType: 'xp',
    requirementValue: 10000
  }
];

export const SCHOOL_INFO = {
  name: "Institut Coranique Al-Mouyassar",
  location: "Dakar, Sénégal",
  founded: "2007",
  founder: "Cheikh El Hadji Abdallah Niasse",
  mission: "Faciliter l'accès, l'apprentissage et la mémorisation complète du Noble Coran, ainsi que l'initiation aux sciences islamiques (Fiqh, Aqidah, Hadith) pour former des individus vertueux guidés par un comportement exemplaire (Akhlaq).",
  chiffresCles: [
    { label: "Élèves formés", value: "+550" },
    { label: "Huffaz diplômés", value: "+466" },
    { label: "Réussite au CFEE (2023)", value: "100%" },
    { label: "Agrément National", value: "N°0048/MEN" }
  ],
  contacts: {
    adresse: "CICES Foire, Villa n°17151 – Dakar, Sénégal",
    telephones: ["+221 78 292 14 14", "+221 77 292 14 14"],
    email: "dara.almouyassar@gmail.com",
    facebook: "ALMOUYASSAR66",
    youtube: "ALMOUYASSARTV"
  },
  programmes: [
    {
      title: "1. Double Cursus Coran & Académie",
      description: "Permet à chaque élève de mémoriser le Coran tout en suivant une scolarité classique de la maternelle au CFEE."
    },
    {
      title: "2. Passerelle Accélérée",
      description: "Cycle de 3 ans destiné aux Huffaz, facilitant leur réintégration harmonieuse dans le système scolaire (collège)."
    },
    {
      title: "3. Daara Vacance",
      description: "Programme éducatif et ludique de 6 à 15 ans lors des vacances (Révision du Coran, éducation religieuse et activités sportives)."
    }
  ],
  values: [
    {
      title: "Le Tahji (Épellation)",
      description: "La toute première étape d'apprentissage à l'institut, consistant à acquérir la maîtrise de l'alphabet arabe, de sa prononciation et des règles élémentaires de lecture."
    },
    {
      title: "Le Khatm",
      description: "Le couronnement et la célébration annuelle récompensant la clôture réussie de la mémorisation complète du Saint Coran."
    },
    {
      title: "L'Akhlaq",
      description: "Le perfectionnement du comportement et de l'éthique individuelle, indissociable de la récitation du Coran."
    }
  ],
  structures: [
    {
      name: "AMDMEC",
      description: "L'Association pour la Modernisation et le Développement du Mouvement Éducatif Coranique, regroupant activement les parents d'élèves engagés pour le soutien de l'Institut depuis 2009."
    },
    {
      name: "Ansar Al-Mouyassar",
      description: "L'Amicale des anciens élèves et sympathisants (Ansar signifiant 'Les Auxiliaires' ou 'Les Soutiens'), œuvrant à perpétuer la fraternité, à s'entraider et à guider les nouvelles générations d'élèves de l'Institut."
    }
  ]
};
