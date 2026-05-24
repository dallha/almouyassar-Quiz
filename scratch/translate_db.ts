/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Charger les variables d'environnement (.env)
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ Erreur: GEMINI_API_KEY est introuvable dans le fichier .env !");
  process.exit(1);
}

// Initialiser le client GoogleGenAI
const ai = new GoogleGenAI({ apiKey: API_KEY });

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data.ts');
const TEMP_FILE_PATH = path.join(process.cwd(), 'scratch', 'translated_questions_temp.json');

// Charger les questions depuis data.ts
import { QUESTIONS } from '../src/data';

interface QuestionTranslation {
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
}

interface Question {
  id: number;
  categorie: string;
  niveau: string;
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
  translations?: {
    ar?: QuestionTranslation;
    wo?: QuestionTranslation;
  };
}

// Fonction d'appel avec retry et gestion d'erreur 429 robuste
async function translateBatchWithRetry(
  batch: Question[],
  batchIndex: number,
  totalBatches: number,
  retriesLeft = 5,
  delayMs = 8000
): Promise<Record<number, { ar: QuestionTranslation; wo: QuestionTranslation }> | null> {
  
  console.log(`[Batch ${batchIndex}/${totalBatches}] Traduction en cours de ${batch.length} questions (IDs: ${batch.map(q => q.id).join(', ')})...`);

  const inputData = batch.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    reponse_correcte: q.reponse_correcte,
    explication: q.explication
  }));

  const prompt = `Agis en tant que traducteur expert bilingue spécialisé dans la pédagogie islamique pour les enfants de 6 à 15 ans.
Tu dois traduire un lot de questions du français vers DEUX langues :
1. En Arabe simple, littéraire et ENTIÈREMENT vocalisé (avec tout le Tashkeel / Harakat obligatoirement pour faciliter la lecture aux enfants).
2. En Wolof simple écrit en alphabet latin conventionnel d'Afrique de l'Ouest tel que pratiqué couramment.

Données d'entrée (en Français, format JSON) :
${JSON.stringify(inputData, null, 2)}

Tu dois impérativement renvoyer EXCLUSIVEMENT un objet JSON valide contenant cette structure exacte, sans enrobage markdown (\`\`\`json ... \`\`\`), sans texte explicatif avant ou après.
L'objet retourné doit avoir pour clés les IDs des questions, et pour valeur un objet contenant les traductions en arabe ("ar") et en wolof ("wo") de la question correspondante :
{
  "21": {
    "ar": {
      "question": "traduction de la question 21 en arabe vocalisé",
      "options": ["option 1 en arabe", "option 2 en arabe", "option 3 en arabe", "option 4 en arabe"],
      "reponse_correcte": "traduction de la réponse correcte en arabe",
      "explication": "traduction de l'explication en arabe"
    },
    "wo": {
      "question": "traduction de la question 21 en wolof",
      "options": ["option 1 en wolof", "option 2 en wolof", "option 3 en wolof", "option 4 en wolof"],
      "reponse_correcte": "traduction de la réponse correcte en wolof",
      "explication": "traduction de l'explication en wolof"
    }
  }
}

Règles impératives :
1. Les options dans "ar" et "wo" doivent rester dans le même ordre de positionnement que le tableau d'entrée.
2. Le champ "reponse_correcte" dans chaque langue doit correspondre à la traduction exacte de l'option gagnante.
3. L'explication doit rester très douce, poétique, motivante et pleine de pédagogie pour les enfants.
4. Traduis fidèlement sans omettre d'ID ni de champ.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Utiliser 2.0-flash pour éviter la saturation du quota 2.5-flash
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.1,
      }
    });

    const text = response.text;
    if (!text) throw new Error("Réponse de l'API vide.");

    const parsed = JSON.parse(text.trim());
    return parsed as Record<number, { ar: QuestionTranslation; wo: QuestionTranslation }>;
  } catch (error: any) {
    const errorMessage = error.message || JSON.stringify(error);
    const isRateLimit = errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("RESOURCE_EXHAUSTED");

    if (isRateLimit && retriesLeft > 0) {
      // Attendre un temps de recharge généreux de 35s
      const waitTime = 35000;
      console.warn(`⚠️ Rate limit (429) détecté sur l'API. Pause stratégique de ${waitTime / 1000}s avant essai (${retriesLeft} restants)...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return translateBatchWithRetry(batch, batchIndex, totalBatches, retriesLeft - 1, delayMs);
    } else {
      console.error(`❌ Échec définitif pour ce lot:`, errorMessage);
      return null;
    }
  }
}

async function run() {
  console.log("🚀 Lancement du traducteur de base de données Al-Mouyassar (Mode Optimisé par Lots)...");

  // Filtrer les questions statiques (id <= 180)
  const staticQuestions = (QUESTIONS as Question[]).filter(q => q.id <= 180);
  console.log(`Nombre total de questions statiques dans le code : ${staticQuestions.length}`);

  // Charger le cache de progression si existant
  let cache: Record<number, { ar: QuestionTranslation; wo: QuestionTranslation }> = {};
  if (fs.existsSync(TEMP_FILE_PATH)) {
    try {
      cache = JSON.parse(fs.readFileSync(TEMP_FILE_PATH, 'utf-8'));
      console.log(`Cache chargé : ${Object.keys(cache).length} questions déjà traduites.`);
    } catch (e) {
      console.warn("Fichier de cache temporaire illisible, démarrage d'un nouveau cache.");
    }
  }

  // Identifier les questions à traduire
  const questionsToTranslate = staticQuestions.filter(q => {
    const hasArInSource = !!q.translations?.ar?.question;
    const hasWoInSource = !!q.translations?.wo?.question;
    const inCache = !!cache[q.id];

    return !(hasArInSource && hasWoInSource) && !inCache;
  });

  console.log(`Nombre de questions nécessitant des traductions : ${questionsToTranslate.length}`);

  if (questionsToTranslate.length === 0) {
    console.log("✅ Toutes les questions statiques sont déjà parfaitement traduites !");
    process.exit(0);
  }

  // Diviser en lots de 8 questions pour maximiser l'efficacité
  const BATCH_SIZE = 8;
  const batches: Question[][] = [];
  for (let i = 0; i < questionsToTranslate.length; i += BATCH_SIZE) {
    batches.push(questionsToTranslate.slice(i, i + BATCH_SIZE));
  }

  console.log(`Sélection de ${batches.length} lots de ${BATCH_SIZE} questions à traduire.`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    
    // Attendre 8 secondes entre chaque lot réussi pour ne pas saturer le RPM
    if (i > 0) {
      console.log("⏳ Pause de 8 secondes avant le lot suivant...");
      await new Promise(resolve => setTimeout(resolve, 8000));
    }

    const batchResult = await translateBatchWithRetry(batch, i + 1, batches.length);
    
    if (batchResult) {
      // Fusionner les résultats dans notre cache
      Object.entries(batchResult).forEach(([qId, tr]) => {
        const idNum = parseInt(qId);
        if (!isNaN(idNum)) {
          cache[idNum] = tr;
        }
      });

      // Sauvegarder immédiatement le cache
      fs.writeFileSync(TEMP_FILE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
      successCount += Object.keys(batchResult).length;
      console.log(`✨ Lot ${i + 1} enregistré avec succès. Total traduits : ${Object.keys(cache).length}`);
    } else {
      failCount += batch.length;
      console.error(`❌ Lot ${i + 1} a échoué.`);
    }
  }

  console.log(`\n📊 Bilan : ${successCount} questions traduites avec succès, ${failCount} échecs.`);

  // Re-fusionner et mettre à jour data.ts
  console.log("\n🔄 Fusion des traductions dans src/data.ts...");
  const updatedQuestions = staticQuestions.map(q => {
    const cachedTr = cache[q.id];
    
    if (cachedTr) {
      return {
        ...q,
        translations: {
          ...q.translations,
          ar: cachedTr.ar,
          wo: cachedTr.wo
        }
      };
    }
    
    return q;
  });

  // Lire data.ts d'origine pour remplacer la section QUESTIONS
  let dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

  // Localiser la zone export const QUESTIONS
  const startIndex = dataContent.indexOf('export const QUESTIONS: Question[] = [');
  const endIndex = dataContent.indexOf('export const BADGES: Badge[] = [');

  if (startIndex === -1 || endIndex === -1) {
    console.error("❌ Erreur: Impossible de localiser la zone QUESTIONS ou BADGES dans src/data.ts !");
    process.exit(1);
  }

  // Formater le nouveau bloc QUESTIONS
  const formattedQuestionsText = updatedQuestions.map(q => {
    return `  ${JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')}`;
  }).join(',\n') + ',\n  ...EXTRA_QUESTIONS\n';

  const newQuestionsBlock = `export const QUESTIONS: Question[] = [\n${formattedQuestionsText}];\n\n`;

  // Remplacer dans le contenu d'origine
  const prefix = dataContent.slice(0, startIndex);
  const suffix = dataContent.slice(endIndex);
  
  const finalContent = prefix + newQuestionsBlock + suffix;

  // Écrire dans src/data.ts
  fs.writeFileSync(DATA_FILE_PATH, finalContent, 'utf-8');
  console.log("🎉 Le fichier src/data.ts a été enrichi et sauvegardé avec succès !");

  // Supprimer le cache temporaire après le succès complet
  if (fs.existsSync(TEMP_FILE_PATH)) {
    fs.unlinkSync(TEMP_FILE_PATH);
    console.log("🧹 Cache temporaire nettoyé.");
  }
}

run();
