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
