/**
 * Extraction d'un seul PDF : المختصر في الاخلاق - الإيجي
 * Utilisation : npx tsx scratch/extract_single_pdf.ts
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY || API_KEY === 'votre_cle_api_ici') {
  console.error("❌ Erreur: Clé API non configurée dans .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const PDF_PATH = "/Users/mac/Documents/Islamiyat/المختصر في الاخلاق- الإيجي .pdf";
const CATEGORY = "Akhlaq";
const NIVEAU = "Intermédiaire";
const NB_QUESTIONS = 15;

const PROMPT = `Tu es un professeur d'éducation islamique. Extrais ${NB_QUESTIONS} questions QCM (4 options) de ce PDF sur l'éthique islamique (المختصر في الأخلاق).

RÈGLES STRICTES :
1. Chaque question doit avoir 4 options dont UNE SEULE correcte
2. Les questions doivent être en FRANÇAIS
3. Ajoute les traductions en ARABE VOCALISÉ (avec tashkeel) et WOLOF
4. Ajoute une explication pédagogique en français
5. Niveau : ${NIVEAU}
6. Catégorie : ${CATEGORY}

Format JSON UNIQUEMENT (pas de markdown, pas de \`\`\`):
{
  "questions": [
    {
      "question": "...",
      "options": ["...", "...", "...", "..."],
      "reponse_correcte": "...",
      "explication": "...",
      "categorie": "${CATEGORY}",
      "niveau": "${NIVEAU}",
      "translations": {
        "ar": {
          "question": "...",
          "options": ["...", "...", "...", "..."],
          "reponse_correcte": "...",
          "explication": "..."
        },
        "wo": {
          "question": "...",
          "options": ["...", "...", "...", "..."],
          "reponse_correcte": "...",
          "explication": "..."
        }
      }
    }
  ]
}`;

async function main() {
  console.log("📂 Traitement : المختصر في الاخلاق - الإيجي");
  console.log(`📁 Catégorie : ${CATEGORY} | Niveau : ${NIVEAU}`);
  console.log(`📝 Questions à extraire : ${NB_QUESTIONS}`);
  console.log("============================================================");

  // Copie vers fichier temporaire
  const tmpPath = "/tmp/temp_pdf_upload.pdf";
  console.log("⏳ Copie vers fichier temporaire...");
  fs.copyFileSync(PDF_PATH, tmpPath);

  // Upload
  console.log("⏳ Upload vers Gemini API...");
  const uploadResponse = await ai.files.upload({
    file: tmpPath,
    config: { mimeType: "application/pdf" },
  });
  console.log(`✅ Upload réussi : ${uploadResponse.name}`);

  // Extraction
  console.log("🧠 Extraction des questions par Gemini...");
  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: PROMPT }] }],
    config: {
      systemInstruction: "Tu es un expert en extraction de données structurées. Réponds UNIQUEMENT avec du JSON valide, sans markdown.",
      temperature: 0.3,
    },
  });

  const text = result.text;
  if (!text) {
    console.error("❌ Pas de réponse de l'API");
    fs.unlinkSync(tmpPath);
    process.exit(1);
  }

  // Nettoyer la réponse
  let cleanJson = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  
  try {
    const parsed = JSON.parse(cleanJson);
    const questions = parsed.questions || [];
    console.log(`✅ ${questions.length} questions extraites avec succès !`);

    // Sauvegarder
    const outputPath = path.join(process.cwd(), "scratch", "extracted_المختصر_في_الاخلاق.json");
    fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), "utf-8");
    console.log(`💾 Sauvegardé dans : ${outputPath}`);
  } catch (e) {
    console.error("❌ Erreur parsing JSON:", e);
    console.log("📝 Réponse brute (1000 premiers chars):", text.substring(0, 1000));
  }

  // Nettoyage
  fs.unlinkSync(tmpPath);
  console.log("🧹 Fichier temporaire supprimé.");
}

main().catch(console.error);
