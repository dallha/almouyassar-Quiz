import { AdventureZone } from './types';

export const ADVENTURE_ZONES: AdventureZone[] = [
  // ── ZONE 1 : Fiqh des Fondations & Ablutions ──
  {
    id: 'zone-1',
    title: 'La Vallée de la Pureté',
    description: 'Ton voyage commence ici. Purifie ton cœur et apprends les fondements de la foi et des ablutions.',
    theme: 'mecca',
    order: 1,
    isLocked: false,
    nodes: [
      {
        id: 'node-1-1',
        zoneId: 'zone-1',
        title: 'Le Premier Pas',
        type: 'story',
        status: 'available',
        description: 'Rencontre avec ton guide spirituel.',
        xpReward: 50,
        preDialogue: [
          { character: 'guide', text: 'Bienvenue, jeune voyageur. La route du savoir est longue, mais chaque pas est béni.', expression: 'smile' },
          { character: 'guide', text: 'Es-tu prêt à découvrir les piliers qui soutiendront ta foi ?', expression: 'neutral' }
        ],
        emotionalReward: {
          type: 'title',
          name: 'Apprenti Voyageur',
          description: 'Tu as commencé ton grand voyage.',
          icon: '🌱',
          color: 'text-emerald-500'
        }
      },
      {
        id: 'node-1-2',
        zoneId: 'zone-1',
        title: 'Les Fondations',
        type: 'quiz',
        status: 'locked',
        description: 'Prouve ta compréhension de la Shahada et de la Prière.',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 70,
        xpReward: 100,
      },
      {
        id: 'node-1-3',
        zoneId: 'zone-1',
        title: 'La Source de Zamzam',
        type: 'checkpoint',
        status: 'locked',
        description: 'Une pause bien méritée pour reprendre des forces.',
        xpReward: 50,
        preDialogue: [
          { character: 'guide', text: 'Bois de cette eau bénie. Elle purifie le corps et l\'esprit.', expression: 'smile' },
          { character: 'guide', text: 'Ta persévérance portera ses fruits très bientôt.', expression: 'happy' }
        ],
      },
      {
        id: 'node-1-4',
        zoneId: 'zone-1',
        title: 'L\'Épreuve du Jeûne',
        type: 'quiz',
        status: 'locked',
        description: 'Teste tes connaissances sur le mois de Ramadan et les ablutions.',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 80,
        xpReward: 150,
      },
      {
        id: 'node-1-5',
        zoneId: 'zone-1',
        title: 'Le Gardien de la Vallée',
        type: 'boss',
        status: 'locked',
        description: 'L\'épreuve finale de la Vallée de la Pureté.',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        timeLimit: 120,
        xpReward: 300,
        preDialogue: [
          { character: 'oustaz', text: 'Tu as bien progressé dans la compréhension de la pureté rituelle.', expression: 'thoughtful' },
          { character: 'oustaz', text: 'Triomphe de cette épreuve pour ouvrir les portes du Jardin !', expression: 'smile' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Clé du Jardin',
          description: 'Tu as débloqué le Jardin des Invocations.',
          icon: '🗝️',
          color: 'text-amber-500'
        }
      }
    ]
  },

  // ── ZONE 2 : Adhkar & Mœurs ──
  {
    id: 'zone-2',
    title: 'Le Jardin des Invocations',
    description: 'Un lieu paisible où les paroles de rappel et le noble caractère s\'épanouissent.',
    theme: 'andalus',
    order: 2,
    isLocked: true,
    nodes: [
      {
        id: 'node-2-1',
        zoneId: 'zone-2',
        title: 'Murmures à l\'aube',
        type: 'story',
        status: 'locked',
        xpReward: 60,
        preDialogue: [
          { character: 'guide', text: 'Sens-tu le parfum de ce jardin ? Chaque fleur représente une belle parole et un rappel.', expression: 'smile' },
          { character: 'guide', text: 'Le cœur a besoin de se souvenir de son Créateur pour trouver la sérénité.', expression: 'neutral' }
        ]
      },
      {
        id: 'node-2-2',
        zoneId: 'zone-2',
        title: 'Les Adhkar Quotidiens',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Akhlaq',
        requiredAccuracy: 75,
        xpReward: 120,
        description: 'Prouve que tu connais les invocations protectrices du matin et du soir.'
      },
      {
        id: 'node-2-3',
        zoneId: 'zone-2',
        title: 'L\'Arbre des Mœurs',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 70,
        description: 'Le bon comportement (Akhlaq) est le fruit d\'une foi sincère.',
        preDialogue: [
          { character: 'guide', text: 'Regarde cet arbre majestueux. Ses racines sont la foi, mais ses fruits sont la bienveillance.', expression: 'happy' }
        ]
      },
      {
        id: 'node-2-4',
        zoneId: 'zone-2',
        title: 'L\'Épreuve du Comportement',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Akhlaq',
        requiredAccuracy: 80,
        xpReward: 160,
        description: 'Montre que tu connais les nobles caractères du croyant au quotidien.'
      },
      {
        id: 'node-2-5',
        zoneId: 'zone-2',
        title: 'Le Sage du Jardin',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Akhlaq',
        requiredAccuracy: 85,
        timeLimit: 100,
        xpReward: 350,
        description: 'Affronte le sage sur tes connaissances en éthique et bienfaisance.',
        preDialogue: [
          { character: 'oustaz', text: 'Le noble caractère pèse très lourd sur la balance des actes.', expression: 'neutral' },
          { character: 'oustaz', text: 'Montre que ton comportement reflète la lumière de l\'Islam !', expression: 'thoughtful' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Sceau des Prophètes',
          description: 'Tu as débloqué Le Voyage des Prophètes.',
          icon: '📜',
          color: 'text-amber-600'
        }
      }
    ]
  },

  // ── ZONE 3 : Sira & Prophètes ──
  {
    id: 'zone-3',
    title: 'Le Voyage des Prophètes',
    description: 'Marche sur les traces des envoyés d\'Allah et découvre l\'histoire sainte.',
    theme: 'desert',
    order: 3,
    isLocked: true,
    nodes: [
      {
        id: 'node-3-1',
        zoneId: 'zone-3',
        title: 'Les Sables du Temps',
        type: 'story',
        status: 'locked',
        xpReward: 70,
        description: 'L\'histoire des prophètes d\'Adam à Ibrahim.',
        preDialogue: [
          { character: 'guide', text: 'Le vent porte ici les récits de patience et de sacrifice des prophètes.', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-3-2',
        zoneId: 'zone-3',
        title: 'L\'Histoire Ancienne',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 75,
        xpReward: 160,
        description: 'Réponds aux questions sur les prophètes antérieurs.'
      },
      {
        id: 'node-3-3',
        zoneId: 'zone-3',
        title: 'La Grotte de Hira',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 80,
        description: 'Un moment de recueillement avant le début de la révélation.',
        preDialogue: [
          { character: 'guide', text: 'C\'est dans le silence de Hira que l\'injonction "Iqra" a résonné pour guider l\'humanité.', expression: 'smile' }
        ]
      },
      {
        id: 'node-3-4',
        zoneId: 'zone-3',
        title: 'La Vie du Messager',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 85,
        xpReward: 220,
        description: 'Teste tes connaissances sur la vie du Prophète Muhammad (PSL).'
      },
      {
        id: 'node-3-5',
        zoneId: 'zone-3',
        title: 'L\'Héritier de la Prophétie',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 85,
        timeLimit: 110,
        xpReward: 500,
        description: 'Une épreuve décisive sur les grandes étapes de la Sirah.',
        preDialogue: [
          { character: 'oustaz', text: 'La vie du Prophète (PSL) est le phare de notre communauté.', expression: 'smile' },
          { character: 'oustaz', text: 'Prouve que son histoire et son exemple sont gravés dans ta mémoire !', expression: 'happy' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'La Barque de la Science',
          description: 'Tu as débloqué l\'Océan du Fiqh.',
          icon: '⛵',
          color: 'text-blue-500'
        }
      }
    ]
  },

  // ── ZONE 4 : Jurisprudence Approfondie ──
  {
    id: 'zone-4',
    title: 'L\'Océan du Fiqh',
    description: 'Plonge dans les profondeurs de la jurisprudence islamique et des règles cultuelles.',
    theme: 'medina',
    order: 4,
    isLocked: true,
    nodes: [
      {
        id: 'node-4-1',
        zoneId: 'zone-4',
        title: 'L\'Embarquement du Savoir',
        type: 'story',
        status: 'locked',
        xpReward: 80,
        preDialogue: [
          { character: 'guide', text: 'La jurisprudence est comme un océan : vaste et profonde. Il faut la naviguer avec rigueur.', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-4-2',
        zoneId: 'zone-4',
        title: 'Les Flots de l\'Adoration',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 80,
        xpReward: 250,
        description: 'Questions poussées sur les règles de prière, les oublis et les réparations.'
      },
      {
        id: 'node-4-3',
        zoneId: 'zone-4',
        title: 'Le Phare des Mouftis',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 90,
        description: 'La science sans pratique est comme un arbre sans fruits.',
        preDialogue: [
          { character: 'guide', text: 'Chaque règle apprise est une clé pour parfaire ta dévotion.', expression: 'smile' }
        ]
      },
      {
        id: 'node-4-4',
        zoneId: 'zone-4',
        title: 'L\'Épreuve des Piliers',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        xpReward: 300,
        description: 'Maîtrise les conditions d\'acceptation des actes rituels.'
      },
      {
        id: 'node-4-5',
        zoneId: 'zone-4',
        title: 'Le Maître de l\'Océan',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        timeLimit: 90,
        xpReward: 600,
        description: 'L\'ultime défi de jurisprudence des fondations.',
        preDialogue: [
          { character: 'oustaz', text: 'C\'est l\'épreuve qui sépare l\'imitateur du chercheur attentif.', expression: 'neutral' },
          { character: 'oustaz', text: 'Démontre ta précision sur chaque question juridique !', expression: 'thoughtful' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'La Plume Coranique',
          description: 'Tu as débloqué La Citadelle des Versets et Sourates.',
          icon: '✒️',
          color: 'text-emerald-400'
        }
      }
    ]
  },

  // ── ZONE 5 : Sciences du Coran & Versets (Issu de 1000 Questions sur le Noble Coran) ──
  {
    id: 'zone-5',
    title: 'La Citadelle des Versets et Sourates',
    description: 'Explore les mystères et la beauté du Livre Sacré, ses révélations mecquoises et médinoises.',
    theme: 'aqsa',
    order: 5,
    isLocked: true,
    nodes: [
      {
        id: 'node-5-1',
        zoneId: 'zone-5',
        title: 'Les Portes de la Révélation',
        type: 'story',
        status: 'locked',
        xpReward: 90,
        preDialogue: [
          { character: 'guide', text: 'Voici la Citadelle du Coran. C\'est le Livre qui ne contient nul doute, une guidée pour les pieux.', expression: 'smile' },
          { character: 'guide', text: 'Connais-tu les circonstances de descente des plus nobles sourates ?', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-5-2',
        zoneId: 'zone-5',
        title: 'L\'Ordre des Sourates',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Coran',
        requiredAccuracy: 80,
        xpReward: 300,
        description: 'Distingue les sourates révélées à La Mecque et celles de Médine.'
      },
      {
        id: 'node-5-3',
        zoneId: 'zone-5',
        title: 'La Coupole d\'Al-Fatiha',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 100,
        description: 'Méditation sur la Mère du Livre et ses sept versets répétés.',
        preDialogue: [
          { character: 'guide', text: 'Al-Fatiha est le cœur de chaque prière, résumant l\'ensemble du Message céleste.', expression: 'happy' }
        ]
      },
      {
        id: 'node-5-4',
        zoneId: 'zone-5',
        title: 'Les Miracles du Texte',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Coran',
        requiredAccuracy: 85,
        xpReward: 350,
        description: 'Questions précises issues de l\'encyclopédie coranique sur les prophètes cités.'
      },
      {
        id: 'node-5-5',
        zoneId: 'zone-5',
        title: 'Le Gardien du Mushaf',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Coran',
        requiredAccuracy: 85,
        timeLimit: 120,
        xpReward: 750,
        description: 'Le grand duel sur la composition et les versets clés du Coran.',
        preDialogue: [
          { character: 'oustaz', text: 'Le Coran élève celui qui s\'y attache fermement.', expression: 'smile' },
          { character: 'oustaz', text: 'Prouve que tu es digne de porter le savoir coranique !', expression: 'happy' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Livre de Lumière',
          description: 'Tu as débloqué Les Chemins de la Sagesse (Zâd al-Muslim).',
          icon: '📖',
          color: 'text-amber-400'
        }
      }
    ]
  },

  // ── ZONE 6 : Pratique Spirituelle & Éthique (Issu de Zâd al-Muslim) ──
  {
    id: 'zone-6',
    title: 'Les Chemins de la Sagesse (Zâd al-Muslim)',
    description: 'Nourris ton âme des enseignements de Zâd al-Muslim : Zakat, Hajj, piété et noblesse d\'âme.',
    theme: 'desert',
    order: 6,
    isLocked: true,
    nodes: [
      {
        id: 'node-6-1',
        zoneId: 'zone-6',
        title: 'La Provision du Voyageur',
        type: 'story',
        status: 'locked',
        xpReward: 100,
        preDialogue: [
          { character: 'guide', text: '"Et prenez vos provisions ; mais vraiment la meilleure provision est la piété (Taqwa)."', expression: 'thoughtful' },
          { character: 'guide', text: 'Zâd al-Muslim enseigne la conciliation entre l\'acte et la pureté du cœur.', expression: 'smile' }
        ]
      },
      {
        id: 'node-6-2',
        zoneId: 'zone-6',
        title: 'L\'Épreuve de la Zakat & Bienfaisance',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 80,
        xpReward: 320,
        description: 'Questions sur la purification des biens et la solidarité fraternelle.'
      },
      {
        id: 'node-6-3',
        zoneId: 'zone-6',
        title: 'La Halte d\'Arafat',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 110,
        description: 'La station suprême du pèlerinage où les invocations sont exaucées.',
        preDialogue: [
          { character: 'guide', text: 'Le pèlerinage purifie le serviteur jusqu\'à ce qu\'il redevienne comme au jour de sa naissance.', expression: 'happy' }
        ]
      },
      {
        id: 'node-6-4',
        zoneId: 'zone-6',
        title: 'Le Pèlerinage Sacré',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        xpReward: 380,
        description: 'Règles et rites du Hajj et de la Omra selon la tradition prophétique.'
      },
      {
        id: 'node-6-5',
        zoneId: 'zone-6',
        title: 'Le Maître de Zâd al-Muslim',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        timeLimit: 110,
        xpReward: 800,
        description: 'Examen de synthèse sur les piliers pratiques et l\'éthique musulmane.',
        preDialogue: [
          { character: 'oustaz', text: 'Ceux qui s\'arment de piété ne craignent rien dans l\'au-delà.', expression: 'smile' },
          { character: 'oustaz', text: 'Démontre ta maîtrise des règles et ton discernement !', expression: 'neutral' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Balance de Justice',
          description: 'Tu as débloqué La Voie de la Sunnah et des Hadiths.',
          icon: '⚖️',
          color: 'text-emerald-500'
        }
      }
    ]
  },

  // ── ZONE 7 : Traditions & Paroles Prophétiques ──
  {
    id: 'zone-7',
    title: 'La Voie de la Sunnah et des Hadiths',
    description: 'Imprègne-toi des paroles d\'or du Messager d\'Allah et des chaînes de transmission authentiques.',
    theme: 'medina',
    order: 7,
    isLocked: true,
    nodes: [
      {
        id: 'node-7-1',
        zoneId: 'zone-7',
        title: 'Le Minbar de Médine',
        type: 'story',
        status: 'locked',
        xpReward: 110,
        preDialogue: [
          { character: 'guide', text: 'Chaque parole prophétique est une perle de sagesse universelle.', expression: 'smile' },
          { character: 'guide', text: 'La Sunnah clarifie le Coran et éclaire chaque recoin de notre existence.', expression: 'neutral' }
        ]
      },
      {
        id: 'node-7-2',
        zoneId: 'zone-7',
        title: 'Les Hadiths Fondamentaux',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Akhlaq',
        requiredAccuracy: 80,
        xpReward: 350,
        description: 'Teste ta mémoire des hadiths sur l\'intention, la foi et l\'excellence (Ihsan).'
      },
      {
        id: 'node-7-3',
        zoneId: 'zone-7',
        title: 'L\'Ombre des Palmiers',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 120,
        description: 'La douceur du rappel et la méditation sur les vertus de la véracité.',
        preDialogue: [
          { character: 'guide', text: '"Le croyant fort est meilleur et plus aimé d\'Allah que le croyant faible, et en chacun il y a du bien."', expression: 'happy' }
        ]
      },
      {
        id: 'node-7-4',
        zoneId: 'zone-7',
        title: 'La Transmission Sacrée',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 85,
        xpReward: 420,
        description: 'Reconnais les paroles célèbres et les contextes d\'énonciation des hadiths.'
      },
      {
        id: 'node-7-5',
        zoneId: 'zone-7',
        title: 'Le Gardien du Hadith',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Akhlaq',
        requiredAccuracy: 85,
        timeLimit: 100,
        xpReward: 900,
        description: 'Défi majeur sur la transmission et la mise en pratique de la Sunnah.',
        preDialogue: [
          { character: 'oustaz', text: 'La science du Hadith exige rigueur et mémoire infaillible.', expression: 'thoughtful' },
          { character: 'oustaz', text: 'Fais honneur aux transmetteurs de la guidée prophétique !', expression: 'smile' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Flambeau de Médine',
          description: 'Tu as débloqué Le Refuge des Croyants.',
          icon: '🔥',
          color: 'text-amber-500'
        }
      }
    ]
  },

  // ── ZONE 8 : Tawhid & Dogme Approfondi ──
  {
    id: 'zone-8',
    title: 'Le Refuge des Croyants',
    description: 'Contemple la majesté du Créateur et fortifie ton Aqidah dans l\'Unicité absolue (Tawhid).',
    theme: 'mecca',
    order: 8,
    isLocked: true,
    nodes: [
      {
        id: 'node-8-1',
        zoneId: 'zone-8',
        title: 'La Colline de la Certitude',
        type: 'story',
        status: 'locked',
        xpReward: 120,
        preDialogue: [
          { character: 'guide', text: 'Au plus haut de cette colline, la brume du doute se dissipe devant la certitude.', expression: 'smile' },
          { character: 'guide', text: 'L\'Aqidah est le socle de tous les actes : si elle est droite, tout l\'édifice tient.', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-8-2',
        zoneId: 'zone-8',
        title: 'Les Attributs Divins',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 85,
        xpReward: 400,
        description: 'Questions sur les plus beaux Noms d\'Allah et les Piliers de la Foi.'
      },
      {
        id: 'node-8-3',
        zoneId: 'zone-8',
        title: 'Le Dôme de la Sérénité',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 130,
        description: 'La paix intérieure trouvée dans la soumission sincère à Allah.',
        preDialogue: [
          { character: 'guide', text: '"N\'est-ce point par l\'évocation d\'Allah que les cœurs se tranquillisent ?"', expression: 'happy' }
        ]
      },
      {
        id: 'node-8-4',
        zoneId: 'zone-8',
        title: 'Les Anges et les Livres',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 85,
        xpReward: 460,
        description: 'Teste tes connaissances sur le monde invisible et les livres célestes.'
      },
      {
        id: 'node-8-5',
        zoneId: 'zone-8',
        title: 'Le Gardien du Tawhid',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 90,
        timeLimit: 100,
        xpReward: 1000,
        description: 'L\'épreuve sans compromis sur la pureté du monothéisme islamique.',
        preDialogue: [
          { character: 'oustaz', text: 'La foi n\'admet aucun mélange ni hésitation.', expression: 'thoughtful' },
          { character: 'oustaz', text: 'Montre que ta croyance est inébranlable comme la montagne !', expression: 'smile' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'Bouclier de la Foi',
          description: 'Tu as débloqué Les Miroirs de l\'Histoire Islamique.',
          icon: '🛡️',
          color: 'text-teal-400'
        }
      }
    ]
  },

  // ── ZONE 9 : Histoire & Compagnons (Sahaba) ──
  {
    id: 'zone-9',
    title: 'Les Miroirs de l\'Histoire Islamique',
    description: 'Rencontre les grandes figures de la communauté, les Compagnons et l\'héritage d\'Al-Mouyassar.',
    theme: 'andalus',
    order: 9,
    isLocked: true,
    nodes: [
      {
        id: 'node-9-1',
        zoneId: 'zone-9',
        title: 'L\'Écho des Califes',
        type: 'story',
        status: 'locked',
        xpReward: 130,
        preDialogue: [
          { character: 'guide', text: 'Regarde dans ces miroirs d\'or : Abou Bakr, Omar, Othman et Ali, les étoiles de la droiture.', expression: 'smile' },
          { character: 'guide', text: 'Leur dévouement a posé les fondations de notre civilisation.', expression: 'neutral' }
        ]
      },
      {
        id: 'node-9-2',
        zoneId: 'zone-9',
        title: 'Les Étoiles de Médine',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 85,
        xpReward: 450,
        description: 'Questions historiques sur les Compagnons et les mères des croyants.'
      },
      {
        id: 'node-9-3',
        zoneId: 'zone-9',
        title: 'La Cour des Savants',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 140,
        description: 'Un hommage vibrant aux générations qui ont préservé la lumière de l\'Islam.',
        preDialogue: [
          { character: 'guide', text: 'De Médine à Fès, du Caire à Kaolack, la chaîne du savoir ne s\'est jamais rompue.', expression: 'happy' }
        ]
      },
      {
        id: 'node-9-4',
        zoneId: 'zone-9',
        title: 'L\'Héritage d\'Al-Mouyassar',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Institut Al-Mouyassar',
        requiredAccuracy: 85,
        xpReward: 500,
        description: 'Connais-tu l\'histoire de notre institut et la mission des Ansar ?'
      },
      {
        id: 'node-9-5',
        zoneId: 'zone-9',
        title: 'Le Protecteur de la Cité',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 90,
        timeLimit: 90,
        xpReward: 1200,
        description: 'Défi suprême sur les repères historiques de la civilisation islamique.',
        preDialogue: [
          { character: 'oustaz', text: 'Ceux qui oublient leur histoire ne peuvent guider l\'avenir.', expression: 'thoughtful' },
          { character: 'oustaz', text: 'Triomphe de cette épreuve pour gravir le Sommet ultime !', expression: 'happy' }
        ],
        emotionalReward: {
          type: 'zone_unlock',
          name: 'La Couronne des Ansar',
          description: 'Tu as débloqué Le Sommet d\'Al-Mouyassar.',
          icon: '👑',
          color: 'text-amber-500'
        }
      }
    ]
  },

  // ── ZONE 10 : L'Apogée & Épreuve Ultime ──
  {
    id: 'zone-10',
    title: 'Le Sommet d\'Al-Mouyassar',
    description: 'L\'ascension finale. Démontre ta maîtrise de l\'ensemble des sciences sacrées pour décrocher la dignité d\'Alim.',
    theme: 'aqsa',
    order: 10,
    isLocked: true,
    nodes: [
      {
        id: 'node-10-1',
        zoneId: 'zone-10',
        title: 'Le Regard vers les Cieux',
        type: 'story',
        status: 'locked',
        xpReward: 150,
        preDialogue: [
          { character: 'guide', text: 'Macha\'Allah, te voici au pied du Sommet. Tu as traversé les vallées, les jardins et les citadelles.', expression: 'happy' },
          { character: 'guide', text: 'Chaque épreuve passée t\'a forgé. Désormais, tout ton savoir va être mis à l\'épreuve.', expression: 'smile' }
        ]
      },
      {
        id: 'node-10-2',
        zoneId: 'zone-10',
        title: 'La Synthèse du Fiqh & de l\'Éthique',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        xpReward: 550,
        description: 'Questions expertes de jurisprudence et de morale pratique.'
      },
      {
        id: 'node-10-3',
        zoneId: 'zone-10',
        title: 'La Halte des Maîtres',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 180,
        description: 'L\'ultime souffle de recueillement avant le grand examen final.',
        preDialogue: [
          { character: 'guide', text: '"Seigneur, augmente ma science !" N\'oublie jamais cette invocation sacrée.', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-10-4',
        zoneId: 'zone-10',
        title: 'La Symphonie du Coran et de la Sirah',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Coran',
        requiredAccuracy: 90,
        xpReward: 650,
        description: 'Dernière révision sur les versets, les prophètes et la biographie sacrée.'
      },
      {
        id: 'node-10-5',
        zoneId: 'zone-10',
        title: 'Le Grand Gardien d\'Al-Mouyassar',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 95,
        timeLimit: 120,
        xpReward: 2000,
        description: 'L\'épreuve des maîtres : 7 questions décisives pour couronner ton voyage.',
        preDialogue: [
          { character: 'oustaz', text: 'Je suis fier de ton cheminement spirituel et intellectuel.', expression: 'smile' },
          { character: 'oustaz', text: 'Réponds avec sérénité et justesse pour entrer dans le rang des Grands Maîtres d\'Al-Mouyassar !', expression: 'happy' }
        ],
        emotionalReward: {
          type: 'title',
          name: 'Grand Maître Al-Mouyassar',
          description: 'Tu as complété l\'intégralité des 10 Zones de l\'Aventure Sacrée.',
          icon: '💎',
          color: 'text-amber-300'
        }
      }
    ]
  }
];
