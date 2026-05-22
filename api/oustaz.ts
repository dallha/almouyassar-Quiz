import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Cache de Rate Limiting en mémoire
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

    const { message, history, language } = req.body;

    // 2. Validation des entrées
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Le message fourni doit être une chaîne de caractères non vide." });
    }

    if (history !== undefined && !Array.isArray(history)) {
      return res.status(400).json({ error: "L'historique fourni doit être un tableau valide." });
    }

    // 3. Modérateur de contenu multilingue
    if (hasInappropriateContent(message)) {
      let moderationText = "Mon cher enfant, ce sujet n'est pas adapté à notre espace d'échange dédié à l'apprentissage et aux valeurs de l'Islam. Choisissons plutôt des paroles pleines de sagesse, de respect, et de bienveillance. 😊";
      if (language === 'ar') {
        moderationText = "يا بني الحبيب، هذا الموضوع غير مناسب لمساحة حوارنا المخصصة للتعلم وقيم الإسلام الجميلة. فلنختر دائماً كلمات مليئة بالحكمة، الاحترام، واللطف. 😊";
      } else if (language === 'wo') {
        moderationText = "Sama doom bou rafet, li nga wax fii andul ak sunu barabu waxtaan bi gnu jagleel diine ak teggine. Nan faral di wax waxtaan yu am solo, tey waxtaane teggine ak yërmande. 😊";
      }
      return res.status(200).json({ text: moderationText });
    }

    // 4. Initialisation du client GoogleGenAI à l'intérieur du handler pour s'assurer que les variables d'environnement sont injectées
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

    // 5. Appel à l'API Gemini 3.5 Flash avec instructions personnalisées par langue
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
    return res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini Serverless API Error:", error);
    return res.status(500).json({ 
      error: "Impossible de joindre l'Oustaz Virtuel en ce moment.",
      details: error.message || error
    });
  }
}
