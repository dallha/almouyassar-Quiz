import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialisation du client Gemini en dehors du handler pour le réutiliser d'une invocation à l'autre (optimisation cold start)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Cache de Rate Limiting en mémoire (partagé au sein de la même instance serverless)
const ipCache = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining?: number; message?: string } {
  const now = Date.now();
  const limit = 30; // Maximum 30 requêtes
  const windowMs = 15 * 60 * 1000; // Par 15 minutes

  const current = ipCache.get(ip);

  if (!current) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (now > current.resetTime) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      message: "Trop de requêtes. Veuillez patienter quelques minutes avant de solliciter à nouveau l'Oustaz Virtuel. 😊"
    };
  }

  current.count++;
  ipCache.set(ip, current);
  return { allowed: true };
}

// Filtre de contenu inapproprié
const INAPPROPRIATE_KEYWORDS = [
  'tuer', 'meurtre', 'fusil', 'pistolet', 'assassiner', 'guerre', 'violence', 'frapper', 'sanglant', 'bagarre',
  'sexe', 'sexuel', 'porno', 'pornographie', 'orgasme', 'copain', 'copine', 'flirter',
  'drogue', 'cocaine', 'heroine', 'cannabis', 'marijuana', 'alcool', 'biere', 'vodka', 'casino', 'parier', 'gambling',
  'merde', 'putain', 'connard', 'salope', 'batard', 'enculer'
];

function hasInappropriateContent(text: string): boolean {
  if (!text) return false;
  const normalized = text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return INAPPROPRIATE_KEYWORDS.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b|${keyword}`, 'i');
    return regex.test(normalized);
  });
}

// Handler de la fonction Serverless Vercel
export default async function handler(req: any, res: any) {
  // Vercel gère les CORS par défaut ou on peut les configurer si besoin.
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
  }

  try {
    // 1. Détermination de l'IP du client pour le Rate Limiting
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || "unknown";
    const limitCheck = checkRateLimit(ip);
    if (!limitCheck.allowed) {
      return res.status(429).json({ error: limitCheck.message });
    }

    const { message, history } = req.body;

    // 2. Validation des entrées
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Le message fourni doit être une chaîne de caractères non vide." });
    }

    if (history !== undefined && !Array.isArray(history)) {
      return res.status(400).json({ error: "L'historique fourni doit être un tableau valide." });
    }

    // 3. Modérateur de contenu
    if (hasInappropriateContent(message)) {
      return res.status(200).json({
        text: "Mon cher enfant, ce sujet n'est pas adapté à notre espace d'échange dédié à l'apprentissage et aux valeurs de l'Islam. Choisissons plutôt des paroles pleines de sagesse, de respect, et de bienveillance. 😊"
      });
    }

    // 4. Appel à l'API Gemini 3.5 Flash
    const systemInstruction = `Agis en tant qu'Oustaz virtuel de l'Institut Al-Mouyassar. Tu guides des enfants de 6 à 15 ans. Ton ton est exclusivement bienveillant, doux et motivant. Utilise des expressions valorisantes comme "Macha'Allah", "Barakallahou fik", "Mon cher enfant". En cas d'erreur de l'élève aux quiz du jeu, reformule et explique de manière simple et pédagogique la règle de Fiqh ou la valeur morale (Sabr, Akhlaq) sans le pénaliser.`;

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history || []
    });

    const response = await chat.sendMessage({ message });
    return res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Serverless API Error:", error);
    return res.status(500).json({ error: "Impossible de joindre l'Oustaz Virtuel en ce moment." });
  }
}
