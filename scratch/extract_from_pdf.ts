/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Charger les variables d'environnement
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ Erreur: GEMINI_API_KEY est introuvable dans le fichier .env !");
  process.exit(1);
}

// Initialiser le client GoogleGenAI
const ai = new GoogleGenAI({ apiKey: API_KEY });

// Chemin par défaut du fichier PDF à traiter
const DEFAULT_PDF_PATH = "/Users/mac/Documents/Islamiyat/صفة الصلاة للأطفال.pdf";

async function run() {
  const args = process.argv.slice(2);
  const pdfPath = args[0] || DEFAULT_PDF_PATH;

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Erreur: Le fichier PDF n'existe pas au chemin : ${pdfPath}`);
    process.exit(1);
  }

  console.log(`\n📂 Fichier source détecté : ${path.basename(pdfPath)} (${(fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(2)} MB)`);
  
  // Copier le fichier vers un nom de fichier ASCII temporaire pour éviter l'erreur de conversion de caractères non-ASCII (ex: caractères arabes)
  const tempUploadPath = path.join(process.cwd(), 'scratch', 'temp_upload.pdf');
  console.log(`⏳ Copie du fichier vers un chemin ASCII temporaire : ${tempUploadPath}`);
  fs.copyFileSync(pdfPath, tempUploadPath);

  console.log("⏳ Upload du fichier PDF vers l'API Gemini...");

  let uploadResult;
  try {
    uploadResult = await ai.files.upload({
      file: tempUploadPath,
    });
    console.log(`✅ Upload réussi ! URI du fichier : ${uploadResult.uri}`);
    console.log(`Nom temporaire du fichier : ${uploadResult.name}`);
  } catch (err: any) {
    console.error("❌ Échec de l'upload du fichier PDF :", err.message || err);
    if (fs.existsSync(tempUploadPath)) {
      fs.unlinkSync(tempUploadPath);
    }
    process.exit(1);
  }

  // Nettoyer la copie locale temporaire après l'upload
  try {
    if (fs.existsSync(tempUploadPath)) {
      fs.unlinkSync(tempUploadPath);
    }
  } catch (e: any) {
    console.warn("⚠️ Impossible de nettoyer la copie locale temporaire :", e.message);
  }

  // Déterminer la catégorie par rapport au nom du fichier
  let category = "Fiqh";
  const filenameLower = path.basename(pdfPath).toLowerCase();
  if (filenameLower.includes("صلاة") || filenameLower.includes("صلاة")) {
    category = "Fiqh";
  } else if (filenameLower.includes("آداب") || filenameLower.includes("اداب") || filenameLower.includes("سيرة") || filenameLower.includes("سيره")) {
    category = "Sirah";
  } else if (filenameLower.includes("قرآن") || filenameLower.includes("قران")) {
    category = "Coran";
  } else if (filenameLower.includes("عقيدة") || filenameLower.includes("عقيده") || filenameLower.includes("فرائض")) {
    category = "Aqidah";
  }

  console.log(`🏷️ Catégorie déterminée automatiquement : ${category}`);
  console.log("🧠 Analyse et extraction des questions par Gemini...");

  const prompt = `Agis en tant que concepteur de quiz et pédagogue musulman expert.
Analyse le document PDF fourni et extrais exactement 5 questions de type QCM (Choix Multiples avec 4 options dont 1 seule réponse correcte) basées sur le contenu de ce livre.

Ces questions doivent être adaptées aux enfants de 6 à 15 ans, écrites avec douceur, pédagogie et rigueur doctrinale.

Tu dois impérativement renvoyer EXCLUSIVEMENT un tableau JSON valide contenant 5 objets questions, sans enrobage markdown (\`\`\`json ... \`\`\`), sans texte explicatif avant ou après.

Chaque objet du tableau doit respecter strictement cette structure TypeScript :
{
  "categorie": "${category}",
  "niveau": "Débutant", // Choisir parmi: Débutant, Intermédiaire, Avancé
  "question": "Texte de la question en Français",
  "options": ["Option 1 en Français", "Option 2 en Français", "Option 3 en Français", "Option 4 en Français"],
  "reponse_correcte": "L'option exacte parmi les 4 ci-dessus en Français",
  "explication": "Une explication douce, encourageante et pédagogique en Français",
  "translations": {
    "ar": {
      "question": "Traduction exacte en Arabe littéraire entièrement vocalisé avec tous les Harakats (Tashkeel) pour les enfants",
      "options": ["Option 1 en Arabe vocalisé", "Option 2 en Arabe vocalisé", "Option 3 en Arabe vocalisé", "Option 4 en Arabe vocalisé"],
      "reponse_correcte": "L'option exacte en Arabe vocalisé",
      "explication": "Traduction de l'explication en Arabe entièrement vocalisé"
    },
    "wo": {
      "question": "Traduction exacte en Wolof simple (alphabet latin standard couramment utilisé)",
      "options": ["Option 1 en Wolof", "Option 2 en Wolof", "Option 3 en Wolof", "Option 4 en Wolof"],
      "reponse_correcte": "L'option exacte en Wolof",
      "explication": "Traduction de l'explication en Wolof"
    }
  }
}

Règles impératives :
1. Dans "ar" et "wo", l'ordre des options dans le tableau DOIT être identique au tableau d'origine en Français.
2. Le champ "reponse_correcte" dans "ar" et "wo" doit être l'exacte copie textuelle de l'option correcte dans la langue correspondante.
3. Les explications en Arabe doivent également comporter tout le Tashkeel (vocalisation) pour être lisibles par des enfants qui apprennent.
4. Assure-toi que les questions soient historiquement et juridiquement correctes d'un point de vue islamique.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Utilisation de gemini-2.5-flash
      contents: [
        {
          fileData: {
            fileUri: uploadResult.uri,
            mimeType: uploadResult.mimeType || 'application/pdf'
          }
        },
        prompt
      ],
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      }
    });

    const responseText = response.text?.trim();
    if (!responseText) {
      throw new Error("Réponse de l'API vide.");
    }

    console.log("🎉 Extraction réussie ! Voici les questions générées :\n");
    
    // Parser pour valider que c'est du JSON correct
    const questions = JSON.parse(responseText);
    console.log(JSON.stringify(questions, null, 2));

    // Sauvegarder dans un fichier temporaire pour examen
    const outputPath = path.join(process.cwd(), 'scratch', `extracted_${path.basename(pdfPath, '.pdf')}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`\n💾 Fichier de simulation sauvegardé dans : ${outputPath}`);

  } catch (err: any) {
    console.error("❌ Échec lors de la génération ou de la validation des questions :", err.message || err);
  } finally {
    // Nettoyer le fichier temporaire sur l'API Gemini
    console.log("🧹 Suppression du fichier temporaire de l'API Gemini...");
    try {
      await ai.files.delete({ name: uploadResult.name });
      console.log("✅ Fichier temporaire supprimé.");
    } catch (err: any) {
      console.warn("⚠️ Impossible de supprimer le fichier temporaire de l'API Gemini :", err.message || err);
    }
  }
}

run();
