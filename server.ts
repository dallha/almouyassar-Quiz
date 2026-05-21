import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GenAI client on the server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API rate limiter simple en mémoire pour protéger l'API Gemini des abus
const ipCache = new Map<string, { count: number; resetTime: number }>();

function rateLimiter(req: express.Request, res: express.Response, next: express.NextFunction) {
  const ip = (req.headers['x-forwarded-for'] as string) || req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const limit = 30; // Maximum 30 requêtes
  const windowMs = 15 * 60 * 1000; // Par fenêtre de 15 minutes

  const current = ipCache.get(ip);

  if (!current) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return next();
  }

  if (now > current.resetTime) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return next();
  }

  if (current.count >= limit) {
    return res.status(429).json({
      error: "Trop de requêtes. Veuillez patienter quelques minutes avant de solliciter à nouveau l'Oustaz Virtuel. 😊"
    });
  }

  current.count++;
  ipCache.set(ip, current);
  next();
}

// API routes FIRST
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

app.post("/api/oustaz", rateLimiter, async (req, res) => {
  try {
    const { message, history } = req.body;

    // Validation stricte des entrées
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Le message fourni doit être une chaîne de caractères non vide." });
    }

    if (history !== undefined && !Array.isArray(history)) {
      return res.status(400).json({ error: "L'historique fourni doit être un tableau valide." });
    }
    
    if (hasInappropriateContent(message)) {
      return res.json({ 
        text: "Mon cher enfant, ce sujet n'est pas adapté à notre espace d'échange dédié à l'apprentissage et aux valeurs de l'Islam. Choisissons plutôt des paroles pleines de sagesse, de respect, et de bienveillance. 😊" 
      });
    }
    
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
    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Oustaz API error:", error);
    // Masquage du message d'erreur d'origine pour éviter les fuites d'informations vers le client
    res.status(500).json({ error: "Impossible de joindre l'Oustaz Virtuel en ce moment." });
  }
});

// Boot helper
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
