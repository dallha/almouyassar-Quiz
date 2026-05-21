import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Cache de Rate Limiting en mémoire
const ipCache = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining?: number; message?: string } {
  const now = Date.now();
  const limit = 60; // Maximum 60 requêtes de traduction (plus souple pour le défilement rapide des questions)
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
      message: "Trop de requêtes de traduction. Veuillez patienter un instant. 😊"
    };
  }

  current.count++;
  ipCache.set(ip, current);
  return { allowed: true };
}

// Handler de la fonction Serverless Vercel
export default async function handler(req: any, res: any) {
  // Configurer les en-têtes CORS de base pour autoriser les requêtes depuis la SPA
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
  }

  try {
    // 1. Détermination de l'IP du client pour le Rate Limiting
    const ip = (req.headers['x-forwarded-for'] as string) || req.socket?.remoteAddress || "unknown";
    const limitCheck = checkRateLimit(ip);
    if (!limitCheck.allowed) {
      return res.status(429).json({ error: limitCheck.message });
    }

    const { questionText, options, reponseCorrecte, explication, language } = req.body;

    // 2. Validation des entrées
    if (typeof questionText !== "string" || !questionText.trim()) {
      return res.status(400).json({ error: "Le paramètre questionText est obligatoire et doit être une chaîne non vide." });
    }
    if (!Array.isArray(options) || options.length === 0) {
      return res.status(400).json({ error: "Le paramètre options est obligatoire et doit être un tableau non vide." });
    }
    if (typeof reponseCorrecte !== "string" || !reponseCorrecte.trim()) {
      return res.status(400).json({ error: "Le paramètre reponseCorrecte est obligatoire et doit être une chaîne non vide." });
    }
    if (typeof explication !== "string") {
      return res.status(400).json({ error: "Le paramètre explication doit être une chaîne." });
    }
    if (language !== 'ar' && language !== 'wo') {
      return res.status(400).json({ error: "La langue de destination doit être 'ar' (Arabe) ou 'wo' (Wolof)." });
    }

    // 3. Initialisation du client GoogleGenAI
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Erreur de configuration : GEMINI_API_KEY est manquante dans les variables d'environnement.");
      return res.status(500).json({ error: "Configuration de l'IA incomplète sur le serveur." });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    // 4. Prompt de traduction
    const prompt = `Agis en tant que traducteur expert bilingue spécialisé dans la pédagogie islamique pour les enfants de 6 à 15 ans.
Traduis les éléments de ce quiz islamique de manière fluide, bienveillante et adaptée aux enfants en : ${
      language === 'ar' 
        ? 'Arabe simple, littéraire et ENTIÈREMENT vocalise (avec tout le Tashkeel / Harakat obligatoirement pour faciliter la lecture aux enfants).' 
        : 'Wolof simple écrit en alphabet latin conventionnel d\'Afrique de l\'Ouest tel que pratiqué couramment.'
    }

Données d'entrée (en Français) :
Question: "${questionText}"
Options: ${JSON.stringify(options)}
Réponse correcte à traduire: "${reponseCorrecte}"
Explication pédagogique: "${explication}"

Tu dois impérativement renvoyer EXCLUSIVEMENT un objet JSON valide contenant cette structure exacte, sans enrobage markdown (\`\`\`json ... \`\`\`), sans texte explicatif avant ou après :
{
  "question": "traduction de la question",
  "options": ["traduction option 1", "traduction option 2", "traduction option 3", "traduction option 4"],
  "reponse_correcte": "traduction de la réponse correcte",
  "explication": "traduction de l'explication"
}

Règles impératives :
1. Les options doivent rester dans le même ordre de positionnement.
2. Le champ "reponse_correcte" doit correspondre à la traduction exacte de l'option gagnante contenue dans le tableau "options".
3. L'explication doit rester très douce, poétique, motivante et pleine de pédagogie pour les enfants.
4. N'invente pas d'autres détails, traduis fidèlement le sens théologique de la question d'origine en adaptant le ton.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.1,
      }
    });

    const translatedText = response.text;
    if (!translatedText) {
      throw new Error("L'IA a retourné une réponse vide.");
    }

    // Validation du JSON généré
    const parsedTranslation = JSON.parse(translatedText.trim());

    // Vérifier la présence des champs requis
    if (!parsedTranslation.question || !Array.isArray(parsedTranslation.options) || !parsedTranslation.reponse_correcte || !parsedTranslation.explication) {
      throw new Error("La structure de traduction retournée par l'IA est incomplète.");
    }

    return res.status(200).json(parsedTranslation);
  } catch (error: any) {
    console.error("Gemini Serverless Translate API Error:", error);
    return res.status(500).json({ 
      error: "Impossible de traduire cette question en ce moment.",
      details: error.message || error
    });
  }
}
