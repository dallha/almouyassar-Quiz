const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '/Users/mac/Documents/Mes Docs/code/AlMouyassar Islamic Quiz/.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log("Vérification de la configuration Supabase...");
console.log("URL:", supabaseUrl);
console.log("Clé Anonyme (début):", supabaseAnonKey ? supabaseAnonKey.slice(0, 20) + "..." : "Absente");

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Erreur: L'URL ou la clé anonyme de Supabase est absente dans le fichier .env !");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Essayer de lire la table profiles pour voir si l'accès fonctionne (même si elle est vide ou inexistante)
    console.log("Tentative de lecture de la table 'profiles'...");
    const { data, error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    if (error) {
      // Si la table n'existe pas, cela renverra une erreur de table manquante, mais l'authentification/connexion réseau elle aura fonctionné !
      if (error.code === 'PGRST116' || error.message.includes("relation \"public.profiles\" does not exist")) {
        console.log("✅ Connexion Supabase établie avec succès !");
        console.warn("⚠️ Attention: La table 'profiles' n'existe pas encore dans votre base Supabase. Avez-vous exécuté le script SQL fourni dans l'éditeur de Supabase ?");
      } else {
        console.error("❌ Erreur Supabase lors de la requête:", error.message, "(Code:", error.code, ")");
      }
    } else {
      console.log("✅ Connexion Supabase établie avec succès ! La table 'profiles' est présente et accessible.");
    }
  } catch (err) {
    console.error("❌ Erreur de connexion réseau ou d'initialisation :", err.message);
  }
}

testConnection();
