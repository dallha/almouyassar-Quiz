import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data.ts');
const TEMP_FILE_PATH = path.join(process.cwd(), 'scratch', 'translated_questions_temp.json');

// Charger les questions depuis data.ts
import { QUESTIONS } from '../src/data.ts';

async function run() {
  if (!fs.existsSync(TEMP_FILE_PATH)) {
    console.log("Aucun fichier de cache temporaire trouvé.");
    process.exit(0);
  }

  const cache = JSON.parse(fs.readFileSync(TEMP_FILE_PATH, 'utf-8'));
  console.log(`Fusion de ${Object.keys(cache).length} questions traduites...`);

  const staticQuestions = QUESTIONS.filter(q => q.id <= 180);

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

  let dataContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

  const startIndex = dataContent.indexOf('export const QUESTIONS: Question[] = [');
  const endIndex = dataContent.indexOf('export const BADGES: Badge[] = [');

  if (startIndex === -1 || endIndex === -1) {
    console.error("Impossible de localiser la zone QUESTIONS dans data.ts.");
    process.exit(1);
  }

  const formattedQuestionsText = updatedQuestions.map(q => {
    return `  ${JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')}`;
  }).join(',\n') + ',\n  ...EXTRA_QUESTIONS\n';

  const newQuestionsBlock = `export const QUESTIONS: Question[] = [\n${formattedQuestionsText}];\n\n`;

  const prefix = dataContent.slice(0, startIndex);
  const suffix = dataContent.slice(endIndex);
  
  const finalContent = prefix + newQuestionsBlock + suffix;

  fs.writeFileSync(DATA_FILE_PATH, finalContent, 'utf-8');
  console.log("🎉 Les 12 nouvelles questions ont été fusionnées avec succès dans src/data.ts !");
}

run();
