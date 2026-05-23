import { Chapter, ChapterNode } from '../types';

/* ── CHAPITRES DE L'AVENTURE ── */

const fiqhNodes: ChapterNode[] = [
    {
        id: 'fiqh-1',
        title: 'Les Piliers de l\'Islam',
        description: 'Découvre les 5 piliers qui fondent la foi musulmane.',
        type: 'lesson',
        status: 'available',
        xpReward: 20,
    },
    {
        id: 'fiqh-2',
        title: 'Quiz : Les Fondations',
        description: 'Teste tes connaissances sur les piliers de l\'Islam.',
        type: 'quiz',
        status: 'locked',
        xpReward: 30,
        requiredAccuracy: 60,
    },
    {
        id: 'fiqh-3',
        title: 'Les Ablutions (Wudu)',
        description: 'Apprends les étapes de la purification avant la prière.',
        type: 'lesson',
        status: 'locked',
        xpReward: 25,
    },
    {
        id: 'fiqh-4',
        title: 'Défi : Wudu',
        description: 'Un défi chronométré sur les règles des ablutions.',
        type: 'challenge',
        status: 'locked',
        xpReward: 40,
        requiredAccuracy: 80,
    },
    {
        id: 'fiqh-5',
        title: 'La Prière (Salat)',
        description: 'Comprends les obligations et les actes de la prière.',
        type: 'lesson',
        status: 'locked',
        xpReward: 30,
    },
    {
        id: 'fiqh-6',
        title: 'Boss : Maître du Fiqh',
        description: 'Un quiz final pour valider ta maîtrise du Fiqh.',
        type: 'boss',
        status: 'locked',
        xpReward: 100,
        requiredAccuracy: 70,
    },
];

const aqidahNodes: ChapterNode[] = [
    {
        id: 'aqidah-1',
        title: 'Les 6 Piliers de la Foi',
        description: 'Découvre les fondements de la croyance islamique.',
        type: 'lesson',
        status: 'available',
        xpReward: 20,
    },
    {
        id: 'aqidah-2',
        title: 'Quiz : La Foi',
        description: 'Teste ta compréhension des piliers de la foi.',
        type: 'quiz',
        status: 'locked',
        xpReward: 30,
        requiredAccuracy: 60,
    },
    {
        id: 'aqidah-3',
        title: 'Les Noms d\'Allah',
        description: 'Apprends les 99 Noms et leurs significations.',
        type: 'lesson',
        status: 'locked',
        xpReward: 35,
    },
    {
        id: 'aqidah-4',
        title: 'Défi : Les Noms Divins',
        description: 'Associe chaque Nom à sa signification.',
        type: 'challenge',
        status: 'locked',
        xpReward: 50,
        requiredAccuracy: 70,
    },
    {
        id: 'aqidah-5',
        title: 'Boss : Gardien de la Foi',
        description: 'Un défi ultime sur la Aqidah.',
        type: 'boss',
        status: 'locked',
        xpReward: 120,
        requiredAccuracy: 75,
    },
];

const sirahNodes: ChapterNode[] = [
    {
        id: 'sirah-1',
        title: 'La Naissance du Prophète',
        description: 'Découvre l\'enfance et la jeunesse du Prophète Muhammad (PSL).',
        type: 'lesson',
        status: 'available',
        xpReward: 20,
    },
    {
        id: 'sirah-2',
        title: 'Quiz : Les Débuts',
        description: 'Teste tes connaissances sur les premières années.',
        type: 'quiz',
        status: 'locked',
        xpReward: 30,
        requiredAccuracy: 60,
    },
    {
        id: 'sirah-3',
        title: 'La Révélation',
        description: 'L\'histoire de la première révélation à la grotte de Hira.',
        type: 'lesson',
        status: 'locked',
        xpReward: 25,
    },
    {
        id: 'sirah-4',
        title: 'La Migration (Hijra)',
        description: 'Le voyage de La Mecque à Médine.',
        type: 'lesson',
        status: 'locked',
        xpReward: 30,
    },
    {
        id: 'sirah-5',
        title: 'Défi : Chronologie',
        description: 'Replace les événements dans l\'ordre chronologique.',
        type: 'challenge',
        status: 'locked',
        xpReward: 45,
        requiredAccuracy: 70,
    },
    {
        id: 'sirah-6',
        title: 'Boss : Connaisseur de la Sirah',
        description: 'Le défi final sur la vie du Prophète (PSL).',
        type: 'boss',
        status: 'locked',
        xpReward: 150,
        requiredAccuracy: 75,
    },
];

const coranNodes: ChapterNode[] = [
    {
        id: 'coran-1',
        title: 'L\'Histoire du Coran',
        description: 'Comment le Coran a été révélé et préservé.',
        type: 'lesson',
        status: 'available',
        xpReward: 25,
    },
    {
        id: 'coran-2',
        title: 'Quiz : Le Livre Sacré',
        description: 'Teste tes connaissances sur le Coran.',
        type: 'quiz',
        status: 'locked',
        xpReward: 35,
        requiredAccuracy: 60,
    },
    {
        id: 'coran-3',
        title: 'Les Sourates',
        description: 'Apprends les noms et les thèmes des principales sourates.',
        type: 'lesson',
        status: 'locked',
        xpReward: 30,
    },
    {
        id: 'coran-4',
        title: 'Défi : Les Sourates',
        description: 'Associe chaque sourate à son thème principal.',
        type: 'challenge',
        status: 'locked',
        xpReward: 50,
        requiredAccuracy: 70,
    },
    {
        id: 'coran-5',
        title: 'Boss : Hafiz en Herbe',
        description: 'Le défi ultime sur la connaissance du Coran.',
        type: 'boss',
        status: 'locked',
        xpReward: 180,
        requiredAccuracy: 80,
    },
];

const akhlaqNodes: ChapterNode[] = [
    {
        id: 'akhlaq-1',
        title: 'Les Bonnes Manières',
        description: 'Découvre l\'importance du caractère en Islam.',
        type: 'lesson',
        status: 'available',
        xpReward: 20,
    },
    {
        id: 'akhlaq-2',
        title: 'Quiz : Le Caractère',
        description: 'Teste tes connaissances sur l\'éthique islamique.',
        type: 'quiz',
        status: 'locked',
        xpReward: 30,
        requiredAccuracy: 60,
    },
    {
        id: 'akhlaq-3',
        title: 'La Honnêteté',
        description: 'Pourquoi la vérité est si importante en Islam.',
        type: 'lesson',
        status: 'locked',
        xpReward: 25,
    },
    {
        id: 'akhlaq-4',
        title: 'La Générosité',
        description: 'Les vertus du partage et de l\'entraide.',
        type: 'lesson',
        status: 'locked',
        xpReward: 25,
    },
    {
        id: 'akhlaq-5',
        title: 'Boss : Parangon de Vertu',
        description: 'Le défi final sur l\'éthique et le caractère.',
        type: 'boss',
        status: 'locked',
        xpReward: 130,
        requiredAccuracy: 75,
    },
];

/* ── CHAPITRES COMPLETS ── */

export const CHAPTERS: Chapter[] = [
    {
        id: 'fiqh',
        title: 'Le Chemin du Fiqh',
        description: 'Maîtrise les règles et les pratiques de l\'Islam.',
        icon: 'BookOpen',
        category: 'Fiqh',
        order: 1,
        requiredXp: 0,
        requiredChapters: [],
        status: 'available',
        nodes: fiqhNodes,
        totalNodes: fiqhNodes.length,
        completedNodes: 0,
        xpReward: 250,
        badgeReward: 'faqih',
    },
    {
        id: 'aqidah',
        title: 'La Forteresse de la Foi',
        description: 'Fortifie ta croyance et ta compréhension d\'Allah.',
        icon: 'Shield',
        category: 'Aqidah',
        order: 2,
        requiredXp: 100,
        requiredChapters: ['fiqh'],
        status: 'locked',
        nodes: aqidahNodes,
        totalNodes: aqidahNodes.length,
        completedNodes: 0,
        xpReward: 300,
        badgeReward: 'mu-min',
    },
    {
        id: 'sirah',
        title: 'Sur les Pas du Prophète',
        description: 'Voyage à travers la vie du Messager d\'Allah (PSL).',
        icon: 'Footprints',
        category: 'Sirah',
        order: 3,
        requiredXp: 250,
        requiredChapters: ['fiqh', 'aqidah'],
        status: 'locked',
        nodes: sirahNodes,
        totalNodes: sirahNodes.length,
        completedNodes: 0,
        xpReward: 350,
        badgeReward: 'muhaddith',
    },
    {
        id: 'coran',
        title: 'La Lumière du Coran',
        description: 'Plonge dans la révélation et la préservation du Livre Sacré.',
        icon: 'Book',
        category: 'Coran',
        order: 4,
        requiredXp: 400,
        requiredChapters: ['fiqh', 'aqidah'],
        status: 'locked',
        nodes: coranNodes,
        totalNodes: coranNodes.length,
        completedNodes: 0,
        xpReward: 400,
        badgeReward: 'qari',
    },
    {
        id: 'akhlaq',
        title: 'Le Jardin des Vertus',
        description: 'Cultive ton caractère et deviens la meilleure version de toi-même.',
        icon: 'Heart',
        category: 'Akhlaq',
        order: 5,
        requiredXp: 300,
        requiredChapters: ['fiqh', 'aqidah'],
        status: 'locked',
        nodes: akhlaqNodes,
        totalNodes: akhlaqNodes.length,
        completedNodes: 0,
        xpReward: 300,
        badgeReward: 'karim',
    },
    {
        id: 'institut',
        title: 'L\'Héritage d\'Al-Mouyassar',
        description: 'Découvre l\'histoire et la mission de l\'Institut.',
        icon: 'Landmark',
        category: 'Institut Al-Mouyassar',
        order: 6,
        requiredXp: 500,
        requiredChapters: ['fiqh', 'aqidah', 'sirah', 'coran', 'akhlaq'],
        status: 'locked',
        nodes: [
            {
                id: 'inst-1',
                title: 'La Fondation',
                description: 'Comment l\'Institut Al-Mouyassar a vu le jour en 2007.',
                type: 'lesson',
                status: 'available',
                xpReward: 30,
            },
            {
                id: 'inst-2',
                title: 'Quiz : L\'Histoire',
                description: 'Teste tes connaissances sur l\'Institut.',
                type: 'quiz',
                status: 'locked',
                xpReward: 40,
                requiredAccuracy: 60,
            },
            {
                id: 'inst-3',
                title: 'Boss Final : Gardien du Savoir',
                description: 'Le défi ultime. Prouve ta maîtrise de toutes les sciences.',
                type: 'boss',
                status: 'locked',
                xpReward: 500,
                requiredAccuracy: 85,
            },
        ],
        totalNodes: 3,
        completedNodes: 0,
        xpReward: 1000,
        badgeReward: 'alim',
        isBoss: true,
    },
];

/* ── FONCTIONS UTILITAIRES ── */

export function getChapterById(id: string): Chapter | undefined {
    return CHAPTERS.find(c => c.id === id);
}

export function getUnlockedChapters(totalXp: number, completedChapterIds: string[]): string[] {
    return CHAPTERS
        .filter(ch => {
            if (ch.requiredXp > totalXp) return false;
            return ch.requiredChapters.every(reqId => completedChapterIds.includes(reqId));
        })
        .map(ch => ch.id);
}

export function getNextRecommendedChapter(totalXp: number, completedChapterIds: string[]): Chapter | null {
    const unlocked = getUnlockedChapters(totalXp, completedChapterIds);
    const notCompleted = CHAPTERS.filter(ch =>
        unlocked.includes(ch.id) && !completedChapterIds.includes(ch.id)
    );
    return notCompleted.sort((a, b) => a.order - b.order)[0] || null;
}
