/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Script de fusion amélioré pour intégrer les questions extraites dans data.ts
 * Utilisation : npx tsx scratch/merge_all_questions.ts
 * 
 * Ce script :
 * 1. Cherche tous les fichiers JSON dans scratch/extracted_*.json
 * 2. Les fusionne dans src/data.ts avant ...EXTRA_QUESTIONS
 * 3. Assigne automatiquement les IDs
 */

import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data.ts');
const SCRATCH_DIR = path.join(process.cwd(), 'scratch');

interface Question {
  id?: number;
  categorie: string;
  niveau: string;
  question: string;
  options: string[];
  reponse_correcte: string;
  explication: string;
  source?: string;
  tags?: string[];
  translations?: {
    ar?: { question: string; options: string[]; reponse_correcte: string; explication: string };
    wo?: { question: string; options: string[]; reponse_correcte: string; explication: string };
  };
}

function findNextId(dataContent: string): number {
  // Chercher le dernier ID dans le fichier avant ...EXTRA_QUESTIONS
  const insertionMarker = '...EXTRA_QUESTIONS';
  const insertionIndex = dataContent.indexOf(insertionMarker);
  
  if (insertionIndex === -1) {
    console.error("❌ Impossible de localiser '...EXTRA_QUESTIONS' dans src/data.ts");
    process.exit(1);
  }

  const preContent = dataContent.slice(0, insertionIndex);
  const regexId = /"id":\s*(\d+)/g;
  let match;
  let maxId = 0;

  while ((match = regexId.exec(preContent)) !== null) {
    const idNum = parseInt(match[1]);
    if (idNum > maxId) {
      maxId = idNum;
    }
  }

  return maxId + 1;
}

function formatQuestion(q: Question, id: number): string {
  const obj = { id, ...q };
  // Formater avec une indentation propre
  let json = JSON.stringify(obj, null, 2);
  // Ajouter l'indentation du tableau parent (2 espaces)
  const lines = json.split('\n');
  return lines.map((line, i) => {
    if (i === 0) return `  ${line}`;
    return `  ${line}`;
  }).join('\n');
}

function run() {
  console.log(`\n🌟 FUSION DES QUESTIONS - Script amélioré\n`);

  // Chercher tous les fichiers JSON extraits
  const jsonFiles = fs.readdirSync(SCRATCH_DIR)
    .filter(f => f.startsWith('extracted_') && f.endsWith('.json'))
    .map(f => path.join(SCRATCH_DIR, f));

  if (jsonFiles.length === 0) {
    console.log("ℹ️ Aucun fichier extracted_*.json trouvé dans scratch/");
    console.log("   Lancez d'abord : npx tsx scratch/batch_extract_questions.ts");
    console.log("   Ou placez vos fichiers JSON extraits dans scratch/");
    process.exit(0);
  }

  console.log(`📂 ${jsonFiles.length} fichier(s) JSON trouvé(s) :`);
  jsonFiles.forEach(f => console.log(`   - ${path.basename(f)}`));

  // Charger toutes les questions
  let allNewQuestions: Question[] = [];
  for (const jsonFile of jsonFiles) {
    try {
      const questions = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
      if (Array.isArray(questions)) {
        console.log(`   ✅ ${path.basename(jsonFile)} : ${questions.length} questions`);
        allNewQuestions = allNewQuestions.concat(questions);
      } else {
        console.warn(`   ⚠️ ${path.basename(jsonFile)} : n'est pas un tableau valide, ignoré`);
      }
    } catch (err: any) {
      console.error(`   ❌ Erreur lecture ${path.basename(jsonFile)} : ${err.message}`);
    }
  }

  if (allNewQuestions.length === 0) {
    console.log("\n❌ Aucune question valide à fusionner.");
    process.exit(1);
  }

  console.log(`\n📊 Total : ${allNewQuestions.length} nouvelles questions à intégrer`);

  // Lire data.ts
  let dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

  // Trouver le prochain ID disponible
  const nextId = findNextId(dataContent);
  console.log(`🎯 Prochain ID : ${nextId}`);

  // Assigner les IDs et formater
  const formattedQuestions = allNewQuestions.map((q, idx) => {
    return formatQuestion(q, nextId + idx);
  }).join(',\n') + ',\n';

  // Insérer dans data.ts
  const insertionMarker = '  ...EXTRA_QUESTIONS';
  const insertionIndex = dataContent.indexOf(insertionMarker);

  const prefix = dataContent.slice(0, insertionIndex);
  const suffix = dataContent.slice(insertionIndex);
  const updatedContent = prefix + formattedQuestions + suffix;

  // Sauvegarder
  fs.writeFileSync(DATA_FILE_PATH, updatedContent, 'utf-8');

  console.log(`\n🎉 FUSION RÉUSSIE !`);
  console.log(`   ${allNewQuestions.length} questions insérées dans src/data.ts`);
  console.log(`   IDs : ${nextId} à ${nextId + allNewQuestions.length - 1}`);
  console.log(`   Position : avant ...EXTRA_QUESTIONS\n`);

  // Option : archiver les fichiers JSON traités
  const archiveDir = path.join(SCRATCH_DIR, 'processed');
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir);
  }
  for (const jsonFile of jsonFiles) {
    const dest = path.join(archiveDir, path.basename(jsonFile));
    fs.renameSync(jsonFile, dest);
    console.log(`   📦 Archivé : ${path.basename(jsonFile)} → processed/`);
  }

  console.log(`\n✅ Terminé ! Vérifiez que le projet compile avec : npx tsc --noEmit\n`);
}

run();
