/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data.ts');

function run() {
  const args = process.argv.slice(2);
  const jsonPath = args[0];

  if (!jsonPath) {
    console.error("❌ Erreur: Veuillez spécifier le chemin du fichier JSON de questions (ex: scratch/extracted_xxx.json)");
    process.exit(1);
  }

  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ Erreur: Le fichier JSON n'existe pas : ${jsonPath}`);
    process.exit(1);
  }

  // Charger les nouvelles questions
  const newQuestions = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  if (!Array.isArray(newQuestions) || newQuestions.length === 0) {
    console.error("❌ Erreur: Le fichier JSON doit contenir un tableau non vide d'objets questions.");
    process.exit(1);
  }

  console.log(`📂 Chargement de ${newQuestions.length} nouvelles questions depuis ${path.basename(jsonPath)}...`);

  // Lire data.ts d'origine
  let dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

  // Trouver l'indice d'insertion juste avant '...EXTRA_QUESTIONS'
  const insertionMarker = '  ...EXTRA_QUESTIONS';
  const insertionIndex = dataContent.indexOf(insertionMarker);

  if (insertionIndex === -1) {
    console.error("❌ Erreur: Impossible de localiser '...EXTRA_QUESTIONS' dans src/data.ts.");
    process.exit(1);
  }

  // Déterminer le prochain ID disponible
  // Les questions statiques d'origine vont jusqu'à 180.
  // Les EXTRA_QUESTIONS vont de 181 à 380.
  // Les nouvelles questions insérées après 180 commenceront à 381.
  // Mais cherchons d'abord si nous avons déjà inséré des questions personnalisées avant ...EXTRA_QUESTIONS.
  // Pour ce faire, cherchons le dernier ID présent dans le fichier data.ts avant l'indice d'insertion.
  const regexId = /"id":\s*(\d+)/g;
  let match;
  let maxId = 180; // Valeur par défaut si rien trouvé

  const preContent = dataContent.slice(0, insertionIndex);
  while ((match = regexId.exec(preContent)) !== null) {
    const idNum = parseInt(match[1]);
    if (idNum > maxId && idNum < 1000) { // On filtre les très grands nombres s'il y en a
      maxId = idNum;
    }
  }

  // Si on a déjà inséré des questions personnalisées (par exemple de 381 à 385), le maxId sera 385, et on commencera à 386.
  // Sinon, si on commence pour la première fois, maxId est 180, mais les EXTRA_QUESTIONS occupent déjà 181-380.
  // Donc, si maxId === 180, on doit sauter à 381 pour éviter le conflit avec EXTRA_QUESTIONS.
  let nextId = maxId + 1;
  if (nextId === 181) {
    nextId = 381;
  }

  console.log(`🎯 Prochain ID de question disponible calculé : ${nextId}`);

  // Assigner les IDs aux nouvelles questions et formater le texte
  const processedQuestions = newQuestions.map((q, idx) => {
    return {
      id: nextId + idx,
      ...q
    };
  });

  const formattedQuestionsText = processedQuestions.map(q => {
    return `  ${JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')}`;
  }).join(',\n') + ',\n';

  // Effectuer l'insertion
  const prefix = dataContent.slice(0, insertionIndex);
  const suffix = dataContent.slice(insertionIndex);
  const updatedContent = prefix + formattedQuestionsText + suffix;

  fs.writeFileSync(DATA_FILE_PATH, updatedContent, 'utf-8');

  console.log(`\n🎉 Fusion réussie ! ${processedQuestions.length} questions insérées dans src/data.ts avec les IDs de ${nextId} à ${nextId + processedQuestions.length - 1}.`);
}

run();
