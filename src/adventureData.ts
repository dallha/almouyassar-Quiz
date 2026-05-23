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
          { character: 'guide', text: 'Sens-tu le parfum de ce jardin ? Chaque fleur représente une belle parole.', expression: 'smile' }
        ]
      },
      {
        id: 'node-2-2',
        zoneId: 'zone-2',
        title: 'Les 99 Noms (Partie 1)',
        type: 'quiz',
        status: 'locked',
        categoryFilter: 'Aqidah',
        requiredAccuracy: 70,
        xpReward: 120,
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
    nodes: []
  }
];
