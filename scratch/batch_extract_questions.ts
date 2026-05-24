/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Script batch d'extraction de questions depuis des PDFs via Gemini API
 * Utilisation : npx tsx scratch/batch_extract_questions.ts
 * 
 * Ce script traite tous les PDFs du dossier /Users/mac/Documents/Islamiyat/
 * et extrait des questions QCM avec traductions AR/WO.
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY || API_KEY === 'votre_cle_api_ici') {
  console.error("❌ Erreur: Veuillez configurer votre clé API Gemini dans le fichier .env");
  console.error("   Obtenez une clé ici : https://aistudio.google.com/apikey");
  console.error("   Puis modifiez le fichier .env avec votre clé.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Configuration des PDFs à traiter
interface PdfConfig {
  path: string;
  category: string;
  niveau_principal: string;
  nb_questions: number;
  description: string;
}

const PDFS_DIR = "/Users/mac/Documents/Islamiyat";

const PDFS_TO_PROCESS: PdfConfig[] = [
  {
    path: path.join(PDFS_DIR, "فرائض الطفل المسلم.pdf"),
    category: "Fiqh",
    niveau_principal: "Débutant",
    nb_questions: 12,
    description: "Les devoirs et obligations du jeune musulman (Fiqh de base)"
  },
  {
    path: path.join(PDFS_DIR, "هيّا نتعلم الآداب النبوية.pdf"),
    category: "Akhlaq",
    niveau_principal: "Débutant",
    nb_questions: 10,
    description: "Les bonnes manières prophétiques pour les enfants"
  },
  {
    path: path.join(PDFS_DIR, "الكنوز_الأثرية_الرمضانية_للأطفال.pdf"),
    category: "Fiqh",
    niveau_principal: "Intermédiaire",
    nb_questions: 15,
    description: "Les trésors du Ramadan pour enfants (jeûne, prières, invocations)"
  },
  {
    path: path.join(PDFS_DIR, "° تغريدات السيرة النبوية °.pdf"),
    category: "Sirah",
    niveau_principal: "Intermédiaire",
    nb_questions: 12,
    description: "La biographie du Prophète Muhammad (PSL) en points clés"
  },
  {
    path: path.join(PDFS_DIR, "¹²⁰⁰ حديث للحفظ.pdf"),
    category: "Hadith & Sunnah",
    niveau_principal: "Intermédiaire",
    nb_questions: 15,
    description: "1200 hadiths à mémoriser - paroles prophétiques"
  },
  {
    path: path.join(PDFS_DIR, "__مـ100ـائة سؤال وجواب ط5 حفص قراءة.pdf"),
    category: "Coran",
    niveau_principal: "Intermédiaire",
    nb_questions: 15,
    description: "100 questions/réponses sur la lecture Hafs du Coran (Tajwid)"
  },
  {
    path: path.join(PDFS_DIR, "أول مرة أتدبر القرآن.pdf"),
    category: "Coran",
    niveau_principal: "Avancé",
    nb_questions: 12,
    description: "Méditation et réflexion sur le Coran (Tadabbur)"
  },
  {
    path: path.join(PDFS_DIR, "لطائف_قرآنية_أكثر_من_⁵⁰⁰_لطيفة_قرآنية.pdf"),
    category: "Coran",
    niveau_principal: "Avancé",
    nb_questions: 15,
    description: "500+ subtilités et merveilles du Coran"
  },
  {
    path: path.join(PDFS_DIR, "خرائط ذهنية في تربية الأطفال.pdf"),
    category: "Akhlaq",
    niveau_principal: "Intermédiaire",
    nb_questions: 10,
    description: "Cartes mentales pour l'éducation islamique des enfants"
  }
];

function getPrompt(config: PdfConfig): string {
  return `Agis en tant que concepteur de quiz et pédagogue musulman expert.
Analyse le document PDF fourni et extrais exactement ${config.nb_questions} questions de type QCM (Choix Multiples avec 4 options dont 1 seule réponse correcte) basées sur le contenu de ce livre.

Ces questions doivent être adaptées aux enfants de 6 à 15 ans, écrites avec douceur, pédagogie et rigueur doctrinale.

Tu dois impérativement renvoyer EXCLUSIVEMENT un tableau JSON valide contenant ${config.nb_questions} objets questions, sans enrobage markdown (\`\`\`json ... \`\`\`), sans texte explicatif avant ou après.

Chaque objet du tableau doit respecter strictement cette structure TypeScript :
{
  "categorie": "${config.category}",
  "niveau": "Débutant", // Choisir parmi: Débutant, Intermédiaire, Avancé (varie selon la difficulté)
  "question": "Texte de la question en Français",
  "options": ["Option 1 en Français", "Option 2 en Français", "Option 3 en Français", "Option 4 en Français"],
  "reponse_correcte": "L'option exacte parmi les 4 ci-dessus en Français",
  "explication": "Une explication douce, encourageante et pédagogique en Français",
  "source": "${config.description}",
  "tags": ["${config.category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}"],
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
4. Assure-toi que les questions soient historiquement et juridiquement correctes d'un point de vue islamique.
5. Varie les niveaux de difficulté : environ 40% Débutant, 40% Intermédiaire, 20% Avancé.`;
}

async function processPdf(config: PdfConfig): Promise<void> {
  const pdfPath = config.path;
  const pdfName = path.basename(pdfPath, '.pdf');
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Fichier introuvable : ${pdfPath}`);
    return;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📂 Traitement : ${pdfName}`);
  console.log(`📁 Catégorie : ${config.category} | Niveau : ${config.niveau_principal}`);
  console.log(`📝 Questions à extraire : ${config.nb_questions}`);
  console.log(`${'='.repeat(60)}`);

  // Copier vers un chemin ASCII temporaire
  const tempUploadPath = path.join(process.cwd(), 'scratch', `temp_${Date.now()}.pdf`);
  console.log(`⏳ Copie vers fichier temporaire...`);
  fs.copyFileSync(pdfPath, tempUploadPath);

  console.log(`⏳ Upload vers Gemini API...`);
  let uploadResult;
  try {
    uploadResult = await ai.files.upload({ file: tempUploadPath });
    console.log(`✅ Upload réussi : ${uploadResult.uri}`);
  } catch (err: any) {
    console.error(`❌ Échec upload : ${err.message}`);
    fs.unlinkSync(tempUploadPath);
    return;
  }

  // Nettoyer le fichier temporaire local
  try { fs.unlinkSync(tempUploadPath); } catch {}

  const prompt = getPrompt(config);

  try {
    console.log(`🧠 Extraction des questions par Gemini...`);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { fileData: { fileUri: uploadResult.uri, mimeType: 'application/pdf' } },
        prompt
      ],
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      }
    });

    const responseText = response.text?.trim() || '';
    if (!responseText) throw new Error("Réponse vide");

    const questions = JSON.parse(responseText);
    console.log(`✅ ${questions.length} questions extraites avec succès !`);

    // Sauvegarder dans un fichier JSON
    const safeName = pdfName.replace(/[^a-zA-Z0-9_\-]/g, '_').substring(0, 50);
    const outputPath = path.join(process.cwd(), 'scratch', `extracted_${safeName}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`💾 Sauvegardé dans : ${outputPath}`);

  } catch (err: any) {
    console.error(`❌ Échec extraction : ${err.message}`);
  } finally {
    // Nettoyer le fichier sur l'API
    try {
      await ai.files.delete({ name: uploadResult.name });
      console.log(`🧹 Fichier temporaire API supprimé.`);
    } catch {}
  }
}

async function run() {
  console.log(`\n🌟 DÉBUT DE L'EXTRACTION BATCH - ${PDFS_TO_PROCESS.length} PDFs à traiter\n`);

  for (let i = 0; i < PDFS_TO_PROCESS.length; i++) {
    const config = PDFS_TO_PROCESS[i];
    console.log(`\n📌 [${i + 1}/${PDFS_TO_PROCESS.length}] ${config.description}`);
    await processPdf(config);
    
    // Pause entre les requêtes pour éviter les limites de l'API
    if (i < PDFS_TO_PROCESS.length - 1) {
      console.log(`⏳ Pause de 3 secondes avant le prochain PDF...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`🎉 EXTRACTION BATCH TERMINÉE !`);
  console.log(`📁 Les fichiers JSON sont dans le dossier scratch/`);
  console.log(`🔄 Utilisez 'npx tsx scratch/merge_new_questions.ts <fichier.json>' pour fusionner`);
  console.log(`${'='.repeat(60)}\n`);
}

run().catch(console.error);
