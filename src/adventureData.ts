import { AdventureZone, AdventureNodeStatus } from './types';

export const ADVENTURE_ZONES: AdventureZone[] = [
  {
    id: 'zone-1',
    title: 'La Vallée de la Pureté',
    description: 'Ton voyage commence ici. Purifie ton cœur et apprends les fondements de la foi.',
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
        requiredAccuracy: 70, // 70% pour passer
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
        description: 'Teste tes connaissances sur le mois de Ramadan.',
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
        categoryFilter: 'Aqidah',
        requiredAccuracy: 100, // Sans-faute
        timeLimit: 120, // 2 minutes
        xpReward: 300,
        preDialogue: [
          { character: 'oustaz', text: 'Tu as bien progressé. Mais l\'Aqidah demande une précision absolue.', expression: 'thoughtful' },
          { character: 'oustaz', text: 'Montre-moi que ta croyance est inébranlable !', expression: 'smile' }
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
  {
    id: 'zone-2',
    title: 'Le Jardin des Invocations',
    description: 'Un lieu paisible où les mots s\'envolent vers les cieux.',
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
        xpReward: 50,
        preDialogue: [
          { character: 'guide', text: 'Sens-tu le parfum de ce jardin ? Chaque fleur représente une belle parole.', expression: 'smile' },
          { character: 'guide', text: 'Le cœur a besoin de se souvenir de son Créateur pour trouver la paix.', expression: 'neutral' }
        ]
      },
      {
        id: 'node-2-2',
        zoneId: 'zone-2',
        title: 'La Croyance Authentique',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 75,
        xpReward: 120,
        description: 'Prouve que ton dogme (Aqidah) est solidement ancré.'
      },
      {
        id: 'node-2-3',
        zoneId: 'zone-2',
        title: 'L\'Arbre des Mœurs',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 60,
        description: 'Le bon comportement (Akhlaq) est le fruit d\'une foi sincère.',
        preDialogue: [
          { character: 'guide', text: 'Regarde cet arbre majestueux. Ses racines sont la croyance, mais ses fruits sont le comportement.', expression: 'happy' }
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
        xpReward: 150,
        description: 'Montre que tu connais les nobles caractères du Musulman.'
      },
      {
        id: 'node-2-5',
        zoneId: 'zone-2',
        title: 'L\'Érudit du Jardin',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 85,
        timeLimit: 90,
        xpReward: 350,
        description: 'Affronte l\'érudit du Jardin sur tes connaissances en Aqidah.',
        preDialogue: [
          { character: 'oustaz', text: 'Le bon comportement ne suffit pas si l\'intention n\'est pas pure.', expression: 'neutral' },
          { character: 'oustaz', text: 'Montre-moi que tu comprends l\'Unicité d\'Allah !', expression: 'thoughtful' }
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
  {
    id: 'zone-3',
    title: 'Le Voyage des Prophètes',
    description: 'Marche sur les traces de ceux qui ont guidé l\'humanité.',
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
        xpReward: 60,
        description: 'L\'histoire des peuples anciens.',
        preDialogue: [
          { character: 'guide', text: 'Le vent porte ici les histoires de patience et de sacrifice des envoyés d\'Allah.', expression: 'thoughtful' }
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
        xpReward: 150,
        description: 'Réponds aux questions sur les prophètes antérieurs.'
      },
      {
        id: 'node-3-3',
        zoneId: 'zone-3',
        title: 'La Grotte de Hira',
        type: 'checkpoint',
        status: 'locked',
        xpReward: 80,
        description: 'Un moment de recueillement avant la révélation.',
        preDialogue: [
          { character: 'guide', text: 'C\'est dans le silence de la méditation que la plus grande des révélations a débuté.', expression: 'smile' }
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
        xpReward: 200,
        description: 'Teste tes connaissances sur la vie du dernier des Prophètes (PSL).'
      },
      {
        id: 'node-3-5',
        zoneId: 'zone-3',
        title: 'L\'Héritier des Prophètes',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Sirah',
        requiredAccuracy: 100,
        timeLimit: 100,
        xpReward: 500,
        description: 'Une épreuve sans-faute sur la Sirah.',
        preDialogue: [
          { character: 'oustaz', text: 'L\'histoire de notre Prophète (PSL) est notre modèle.', expression: 'smile' },
          { character: 'oustaz', text: 'Prouve que son histoire est gravée dans ton cœur, sans la moindre erreur !', expression: 'happy' }
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
  {
    id: 'zone-4',
    title: 'L\'Océan du Fiqh',
    description: 'Plonge dans les profondeurs de la jurisprudence islamique.',
    theme: 'mecca',
    order: 4,
    isLocked: true,
    nodes: [
      {
        id: 'node-4-1',
        zoneId: 'zone-4',
        title: 'L\'Embarquement',
        type: 'story',
        status: 'locked',
        xpReward: 70,
        preDialogue: [
          { character: 'guide', text: 'La jurisprudence est comme un océan : vaste, profonde, et nécessitant un bon navire pour naviguer.', expression: 'thoughtful' }
        ]
      },
      {
        id: 'node-4-2',
        zoneId: 'zone-4',
        title: 'Les Flots de l\'Adoration',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 85,
        xpReward: 250,
        description: 'Questions poussées sur les règles de prière et de purification.'
      },
      {
        id: 'node-4-3',
        zoneId: 'zone-4',
        title: 'Le Maître de l\'Océan',
        type: 'boss',
        status: 'locked',
        categoryFilter: 'Fiqh',
        requiredAccuracy: 100,
        timeLimit: 80,
        xpReward: 1000,
        description: 'L\'ultime défi de jurisprudence.',
        preDialogue: [
          { character: 'oustaz', text: 'C\'est l\'épreuve des savants. La précision est de rigueur.', expression: 'neutral' },
          { character: 'oustaz', text: 'Prépare-toi !', expression: 'thoughtful' }
        ],
        emotionalReward: {
          type: 'title',
          name: 'Maître Émérite',
          description: 'Tu as triomphé de la dernière zone de l\'aventure !',
          icon: '👑',
          color: 'text-yellow-400'
        }
      }
    ]
  }
];
