import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log("Clé API détectée :", apiKey ? "Oui (commence par " + apiKey.substring(0, 8) + ")" : "Non");

if (!apiKey) {
  console.error("Erreur : GEMINI_API_KEY non configurée.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function run() {
  try {
    const prompt = `Agis en tant que traducteur expert bilingue spécialisé dans la pédagogie islamique pour les enfants de 6 à 15 ans.
Traduis en Arabe simple, littéraire et ENTIÈREMENT vocalisé (avec tout le Tashkeel / Harakat obligatoirement) :

Données d'entrée (en Français) :
Question: "Quel est le nom du célèbre recueil de quarante Hadiths compilé par l'Imam An-Nawawi ?"
Options: ["Les 40 Hadiths d'An-Nawawi", "Le Jardin des Vertueux", "Le Bulugh al-Maram", "La Voie Facilitée"]
Réponse correcte à traduire: "Les 40 Hadiths d'An-Nawawi"
Explication pédagogique: "Ce recueil réunit les principes fondamentaux de la croyance et de l'éthique islamique."

Tu devez impérativement renvoyer EXCLUSIVEMENT un objet JSON valide contenant cette structure exacte, sans enrobage markdown, sans texte explicatif avant ou après :
{
  "question": "traduction de la question",
  "options": ["traduction option 1", "traduction option 2", "traduction option 3", "traduction option 4"],
  "reponse_correcte": "traduction de la réponse correcte",
  "explication": "traduction de l'explication"
}
`;

    console.log("Envoi de la requête à Gemini 2.5 Flash...");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.1,
      }
    });

    console.log("Réponse brute de l'IA :");
    console.log(response.text);
    
    const parsed = JSON.parse(response.text.trim());
    console.log("JSON analysé avec succès :", parsed);
  } catch (error) {
    console.error("Une erreur est survenue pendant le test :", error);
  }
}

run();
