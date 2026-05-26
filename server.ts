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
  const ip = (req.headers['x-forwarded-for'] as string) || req.ip || req.socket?.remoteAddress || "unknown";
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
    const { message, history, language } = req.body;

    // Validation stricte des entrées
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Le message fourni doit être une chaîne de caractères non vide." });
    }

    if (history !== undefined && !Array.isArray(history)) {
      return res.status(400).json({ error: "L'historique fourni doit être un tableau valide." });
    }
    
    // Modérateur de contenu multilingue
    if (hasInappropriateContent(message)) {
      let moderationText = "Mon cher enfant, ce sujet n'est pas adapté à notre espace d'échange dédié à l'apprentissage et aux valeurs de l'Islam. Choisissons plutôt des paroles pleines de sagesse, de respect, et de bienveillance. 😊";
      if (language === 'ar') {
        moderationText = "يا بني الحبيب، هذا الموضوع غير مناسب لمساحة حوارنا المخصصة للتعلم وقيم الإسلام الجميلة. فلنختر دائماً كلمات مليئة بالحكمة، الاحترام، واللطف. 😊";
      } else if (language === 'wo') {
        moderationText = "Sama doom bou rafet, li nga wax fii andul ak sunu barabu waxtaan bi gnu jagleel diine ak teggine. Nan faral di wax waxtaan yu am solo, tey waxtaane teggine ak yërmande. 😊";
      }
      return res.json({ text: moderationText });
    }
    
    // Invite système personnalisée par langue
    let systemInstruction = `Agis en tant qu'Oustaz virtuel de l'Institut Al-Mouyassar. Tu guides des enfants de 6 à 15 ans. Ton ton est exclusivement bienveillant, doux et motivant. Utilise des expressions valorisantes comme "Macha'Allah", "Barakallahou fik", "Mon cher enfant". En cas d'erreur de l'élève aux quiz du jeu, reformule et explique de manière simple et pédagogique la règle de Fiqh ou la valeur morale (Sabr, Akhlaq) sans le pénaliser. Réponds impérativement en français.`;

    if (language === 'ar') {
      systemInstruction = `تصرّف كأستاذ افتراضي (Oustaz) لمعهد الميسر (Institut Al-Mouyassar). أنت ترشد أطفالاً تتراوح أعمارهم بين 6 و15 عاماً. نبرتك لطيفة جداً، رحيمة، دافئة ومحفزة للغاية. استخدم تعبيرات تشجيعية جميلة مثل "ما شاء الله"، "بارك الله فيك"، "يا بني الحبيب"، "يا بنيتي الغالية". في حالة إجابة الطفل الخاطئة في اختبارات اللعبة، قم بإعادة الصياغة والشرح بطريقة مبسطة وتربوية للأحكام الفقهية أو القيم الأخلاقية (مثل الصبر، الأخلاق) دون إحباطه. يجب أن تجيب باللغة العربية البسيطة والمُشكَّلة (عربية مشكولة لتسهيل القراءة للأطفال) وتكون قريبة لقلوبهم.`;
    } else if (language === 'wo') {
      systemInstruction = `Nanga fi nekk di Oustaz bou virtuel bou Institut Al-Mouyassar. Yanga yi yedd ak di jangal xale yi am 6 ba 15 at. Sa baat dafa wara neex, dëgër, am yërmande, mel ni baay walla ndey bou beug doomam tey diko dëjël. Nanga lay faral di wax ay baat yu rafet yu mel ni "Macha'Allah", "Barakallahou fik", "Sama doom bou lëmm / Sama doom bou rafet". Bou xale bi juumee ci ab quiz, dangako wara faramfacceel ak leeral ko bu baax ci anam bou yomb te neex, diko jangal diiné ak téggine (Sabr, Akhlaq) té doko gnakal yaakar. Nanga tontu ci wolof bou leer, bou rafet te yomb a dégg, di ko bind ci mbindum wolof bi gnu koy binde ci alphabet latin bi gnu tàmm ci ecole yi.`;
    }

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
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

app.post("/api/translate", rateLimiter, async (req, res) => {
  try {
    const { questionText, options, reponseCorrecte, explication, language } = req.body;

    // Validation des entrées
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

    const prompt = `Agis en tant que traducteur expert bilingue spécialisé dans la pédagogie islamique pour les enfants de 6 à 15 ans.
Traduis les éléments de ce quiz islamique de manière fluide, bienveillante et adaptée aux enfants en : ${
      language === 'ar' 
        ? 'Arabe simple, littéraire et ENTIÈREMENT vocalisé (avec tout le Tashkeel / Harakat obligatoirement pour faciliter la lecture aux enfants).' 
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
      model: "gemini-2.5-flash",
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

    const parsedTranslation = JSON.parse(translatedText.trim());

    if (!parsedTranslation.question || !Array.isArray(parsedTranslation.options) || !parsedTranslation.reponse_correcte || !parsedTranslation.explication) {
      throw new Error("La structure de traduction retournée par l'IA est incomplète.");
    }

    res.json(parsedTranslation);
  } catch (error: any) {
    console.error("Gemini Oustaz Translate API error:", error);
    res.status(500).json({ error: "Impossible de traduire cette question en ce moment." });
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
