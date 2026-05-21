# 🌟 Al-Mouyassar Play & Learn — Quiz Islamique Interactif

<div align="center">
  <img width="1200" height="475" alt="Bannière Al-Mouyassar" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

---

**Al-Mouyassar Play & Learn** est une plateforme ludo-éducative web moderne, interactive et haut de gamme, conçue pour faciliter l'apprentissage du Coran et des sciences islamiques (Fiqh, Sirah, Aqidah, Akhlaq, Hadith) pour les élèves de 6 à 15 ans. 

Dédiée à l'**Institut Coranique Al-Mouyassar**, fondé en **2007** par le vénérable **Cheikh El Hadji Abdallah Niasse**, cette application allie les standards de la gamification éducative moderne aux technologies d'intelligence artificielle pour offrir un parcours spirituel et intellectuel captivant.

---

## 📌 Table des Matières
- [✨ Fonctionnalités Majeures](#-fonctionnalités-majeures)
  - [1. Mode Nuit Étoilée (Thème Sombre Poétique)](#1-mode-nuit-étoilée-thème-sombre-poétique)
  - [2. Contrôles Physiques en Relief 3D Tactiles (Duolingo Style)](#2-contrôles-physiques-en-relief-3d-tactiles-duolingo-style)
  - [3. L'Oustaz Virtuel Intelligent (IA Gemini 3.5 Flash)](#3-loustaz-virtuel-intelligent-ia-gemini-35-flash)
  - [4. Espace Parental Sécurisé (Anti-Force Brute & Défi Mathématique)](#4-espace-parental-sécurisé-anti-force-brute--défi-mathématique)
  - [5. Voix des Ansar (Karaoké Poétique Interactif)](#5-voix-des-ansar-karaoké-poétique-interactif)
  - [6. Système Sonore Immersif & Micro-Animations](#6-système-sonore-immersif--micro-animations)
- [🏗️ Architecture & Structure du Projet](#-architecture--structure-du-projet)
- [🛠️ Stack Technique](#️-stack-technique)
- [🛡️ Sécurité & Proxy API](#️-sécurité--proxy-api)
- [💾 Schéma de Base de Données Supabase (PostgreSQL)](#-schéma-de-base-de-données-supabase-postgresql)
- [🚀 Guide d'Installation Local](#-guide-dinstallation-local)
- [⚡ Guide de Déploiement Cloud](#-guide-de-déploiement-cloud)
  - [Option A : Déploiement sur Vercel (Serverless)](#option-a--déploiement-sur-vercel-serverless)
  - [Option B : Hébergement Node.js Traditionnel (Render, Railway)](#option-b--hébergement-nodejs-traditionnel-render-railway)

---

## ✨ Fonctionnalités Majeures

### 1. Mode Nuit Étoilée (Thème Sombre Poétique)
* **Double Identité Visuelle** : Un sélecteur Lune/Soleil animé en haut de l'écran bascule instantanément l'application entre le mode **Jour Chaleureux** (tonalités crème et émeraude clair) et le mode **Nuit Étoilée** (bleu nuit profond et vert émeraude mystique).
* **Constellation interactive** : En mode sombre, l'arrière-plan s'orne d'une constellation de **48 étoiles scintillantes** qui s'animent à des rythmes poétiques différenciés.
* **Persistance** : Le choix thématique est enregistré dans le stockage local de l'utilisateur (`localStorage`) pour persister lors des prochaines visites.

### 2. Contrôles Physiques en Relief 3D Tactiles (Duolingo Style)
* **Sensation physique** : Tous les boutons de réponses aux quiz, les sélecteurs de catégories, les niveaux d'étude et le minuteur possèdent un relief 3D de 4 pixels.
* **Rétroaction tactile** : Au clic, le bouton s'abaisse physiquement de 3 pixels pour offrir un retour visuel d'une fluidité remarquable.
* **Jaillissement d'Étoiles (Starry Burst)** : La validation d'une bonne réponse libère une micro-explosion locale de **16 particules scintillantes** (étoiles, lunes, éclats dorés) rayonnant de manière radiale.

### 3. L'Oustaz Virtuel Intelligent (IA Gemini 3.5 Flash)
* **Compagnon d'Apprentissage** : Un assistant IA bienveillant dialogue avec l'élève pour le féliciter avec des expressions valorisantes (*Macha'Allah*, *Barakallahou fik*) ou lui expliquer calmement ses erreurs de Fiqh ou d'histoire islamique.
* **Sécurité & Modération** : Un filtre de modération automatique analyse et intercepte instantanément les questions inappropriées ou impolies pour protéger les jeunes élèves.
* **Persistance Supabase** : L'historique complet des discussions est synchronisé dans le Cloud via Supabase pour chaque élève connecté.

### 4. Espace Parental Sécurisé (Anti-Force Brute & Défi Mathématique)
* **Code PIN Secret Personnalisable** : Pour empêcher les enfants de contourner les règles ou de réinitialiser leur progression, le parent configure un **code PIN à 4 chiffres** persistant lors de son premier accès.
* **Pavé Numérique Virtuel 3D** : Un magnifique clavier tactile en relief 3D avec masquage de saisie et effet de secousse (`animate-shake`) en cas de mot de passe erroné.
* **Protection Anti-Force Brute** : Verrouillage temporel strict de l'interface de saisie pendant **30 secondes** après 3 tentatives infructueuses consécutives, agrémenté d'un compte à rebours interactif.
* **Récupération d'Urgence** : Un calcul de multiplication complexe à double chiffre (ex: $18 \times 13$) fait office de barrière mathématique de secours pour réinitialiser le PIN en cas d'oubli.

### 5. Voix des Ansar (Karaoké Poétique Interactif)
* **Apprentissage Rythmé** : Un module de karaoké éducatif interactif qui permet aux enfants d'apprendre des poèmes religieux traditionnels (anachid) avec défilement synchrone des paroles.
* **Suivi visuel** : Mise en évidence dynamique des vers en cours de récitation pour une mémorisation facilitée.

### 6. Système Sonore Immersif & Micro-Animations
* **Effets sonores** : Utilisation d'un moteur de sons localisé (`SoundEngine.ts`) pour accompagner chaque réussite d'un son majestueux et chaque erreur d'un signal doux.
* **Transitions en glissement et flou** : Les changements d'onglets s'effectuent par un glissement latéral couplé à une mise au point progressive (`blur`) gérée par Framer Motion pour un effet haut de gamme.

---

## 🏗️ Architecture & Structure du Projet

L'application suit une architecture hybride **SPA (Single Page Application)** développée en **React 19** et **TypeScript**, orchestrée par **Vite** en développement, et servie par un serveur de proxy API **Express** en production.

```
AlMouyassar Islamic Quiz/
├── .env.example             # Exemple de variables d'environnement
├── server.ts                # Serveur Express (Proxy Gemini & Service de fichiers statiques)
├── index.html               # Entrée principale HTML5
├── package.json             # Fichier de configuration NPM et scripts de build
├── tsconfig.json            # Configuration du compilateur TypeScript
├── vite.config.ts           # Configuration du bundler Vite
├── src/
│   ├── main.tsx             # Point d'entrée React
│   ├── App.tsx              # Composant racine orchestrant l'application
│   ├── index.css            # Styles CSS globaux et système de design
│   ├── data.ts              # Base de données locale de quiz de base (Aventure & Libre)
│   ├── questions_extra.ts   # Base de données de questions additionnelles
│   ├── types.ts             # Définitions de types TypeScript
│   ├── supabaseClient.ts    # Initialisation du client Supabase
│   ├── LanguageContext.tsx  # Contexte de gestion bilingue (Français/Arabe)
│   ├── locales/             # Dictionnaires de traduction pour l'internationalisation
│   └── components/          # Composants modulaires de l'interface utilisateur
│       ├── AdventureMode.tsx     # Module de progression pas-à-pas (Mode Aventure)
│       ├── VoixDesAnsar.tsx      # Module Karaoké et chants poétiques
│       ├── OustazVirtual.tsx     # Module d'échange avec l'intelligence artificielle
│       ├── ParentalDashboard.tsx # Espace Parent sécurisé avec code PIN 3D et anti-force brute
│       ├── GlobalSearch.tsx      # Moteur de recherche globale au sein des quiz
│       ├── QuizRecommender.tsx   # Système de recommandation intelligente de quiz
│       ├── SoundEngine.ts        # Moteur sonore de gamification
│       ├── MobileInstallPrompt.tsx # Boîte de dialogue PWA d'installation mobile
│       ├── Header.tsx            # Barre de navigation supérieure (Thème/Langues)
│       ├── SchoolInfo.tsx        # Section de présentation de l'Institut Coranique
│       ├── SchoolLogo.tsx        # Composant Logo stylisé en SVG interactif
│       ├── StatsCard.tsx         # Cartes statistiques des élèves
│       └── VisionPitch.tsx       # Manifeste de l'Institut Al-Mouyassar
```

---

## 🛠️ Stack Technique

* **Frontend** : React 19, TypeScript, Vite, Vanilla CSS (pour le design sur-mesure premium en relief 3D), Framer Motion (animations fluides), Lucide React (icônes).
* **Backend** : Node.js, Express (serveur proxy pour sécuriser la clé Gemini & servir le client).
* **Base de données / Services** : 
  - **Supabase** (Authentification des utilisateurs, base PostgreSQL, politiques de sécurité RLS).
  - **Google Gemini 3.5 Flash** (Moteur d'intelligence artificielle).

---

## 🛡️ Sécurité & Proxy API

Pour protéger l'intégrité de l'application et éviter toute fuite de secret industriel, les appels à l'API de Google Gemini ne sont jamais effectués directement depuis le navigateur de l'élève.

1. **Masquage de la clé d'API** : Le client React contacte un point de terminaison interne `/api/oustaz` exposé par le serveur Express local. C'est ce serveur Express (côté serveur sécurisé) qui injecte de manière invisible la clé `GEMINI_API_KEY` et communique avec Google GenAI.
2. **Rate Limiting Anti-Abus** : Le point d'accès `/api/oustaz` est protégé par un système de limitation de requêtes en mémoire. Chaque adresse IP est limitée à un maximum de **30 requêtes par tranche de 15 minutes** pour prévenir le spam et maîtriser les coûts de consommation d'API.
3. **Modérateur de Contenu Sensible** : Un dictionnaire de sécurité rejette à la volée les requêtes contenant des termes vulgaires ou violents avant même qu'elles n'atteignent l'intelligence artificielle, garantissant un dialogue 100 % adapté aux enfants.

---

## 💾 Schéma de Base de Données Supabase (PostgreSQL)

Pour initialiser votre instance Supabase, ouvrez le **SQL Editor** sur votre tableau de bord Supabase et exécutez le script ci-dessous. Il configure les tables requises, leurs contraintes, et les politiques de sécurité (RLS) associées.

```sql
-- 1. Table des Profils Élèves (scores, progression, badges)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text,
  xp integer default 0,
  total_answered integer default 0,
  correct_answers_count integer default 0,
  streak integer default 0,
  highest_streak integer default 0,
  completed_quizzes_count integer default 0,
  unlocked_badge_ids text[] default '{}'::text[],
  last_played_date date,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Activer la sécurité RLS (Row Level Security) sur profiles
alter table public.profiles enable row level security;

-- Créer les politiques de sécurité pour profiles
create policy "Les utilisateurs lisent leur propre profil."
  on public.profiles for select using ( auth.uid() = id );

create policy "Les utilisateurs créent leur propre profil."
  on public.profiles for insert with check ( auth.uid() = id );

create policy "Les utilisateurs mettent à jour leur propre profil."
  on public.profiles for update using ( auth.uid() = id );


-- 2. Table des Salons de Discussion de l'Oustaz (oustaz_chats)
create table public.oustaz_chats (
  id text primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Activer la sécurité RLS sur oustaz_chats
alter table public.oustaz_chats enable row level security;

-- Créer les politiques de sécurité pour oustaz_chats
create policy "Les utilisateurs lisent leurs salons de discussion."
  on public.oustaz_chats for select using ( auth.uid() = user_id );

create policy "Les utilisateurs créent leurs salons."
  on public.oustaz_chats for insert with check ( auth.uid() = user_id );

create policy "Les utilisateurs modifient leurs salons."
  on public.oustaz_chats for update using ( auth.uid() = user_id );

create policy "Les utilisateurs suppriment leurs salons."
  on public.oustaz_chats for delete using ( auth.uid() = user_id );


-- 3. Table des Messages de Discussion (oustaz_messages)
create table public.oustaz_messages (
  id bigint generated always as identity primary key,
  chat_id text references public.oustaz_chats(id) on delete cascade not null,
  role text not null check (role in ('user', 'model')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Activer la sécurité RLS sur oustaz_messages
alter table public.oustaz_messages enable row level security;

-- Créer les politiques de sécurité pour oustaz_messages
create policy "Les utilisateurs lisent les messages de leurs salons."
  on public.oustaz_messages for select
  using (
    exists (
      select 1 from public.oustaz_chats
      where public.oustaz_chats.id = oustaz_messages.chat_id
      and public.oustaz_chats.user_id = auth.uid()
    )
  );

create policy "Les utilisateurs ajoutent des messages dans leurs salons."
  on public.oustaz_messages for insert
  with check (
    exists (
      select 1 from public.oustaz_chats
      where public.oustaz_chats.id = oustaz_messages.chat_id
      and public.oustaz_chats.user_id = auth.uid()
    )
  );
```

---

## 🚀 Guide d'Installation Local

### Prérequis
* **Node.js** (Version 18.0.0 ou supérieure)
* **NPM** (Version 9.0.0 ou supérieure)

### 1. Cloner et installer les dépendances
```bash
git clone https://github.com/dallha/almouyassar-Quiz.git
cd almouyassar-Quiz
npm install
```

### 2. Configurer le fichier d'environnement `.env`
Créez un fichier `.env` à la racine du projet (ou copiez `.env.example`) :
```env
# Clé API Google Gemini (Obtenue sur Google AI Studio)
GEMINI_API_KEY="votre_cle_api_gemini"

# Variables Supabase (côté client web)
VITE_SUPABASE_URL="https://votre-projet-id.supabase.co"
VITE_SUPABASE_ANON_KEY="votre-cle-publique-anonyme-supabase"
```

### 3. Lancer le serveur de développement
L'application se lance via une seule commande unifiée qui démarre le serveur Express et intègre le serveur de développement Vite en middleware :
```bash
npm run dev
```
Ouvrez ensuite votre navigateur sur **[http://localhost:3000](http://localhost:3000)**.

---

## ⚡ Guide de Déploiement Cloud

### Option A : Déploiement sur Vercel (Serverless)

Vercel prend nativement en charge les applications React générées par Vite, mais comme nous disposons d'une route d'API `/api/oustaz` écrite en Express dans le fichier `server.ts`, nous devons indiquer à Vercel comment router cette API vers une fonction sans serveur (Serverless Function).

1. **Créer un fichier de configuration Vercel** : Créez un fichier `vercel.json` à la racine de votre projet avec le contenu suivant :
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "dist/server.cjs",
         "use": "@vercel/node"
       },
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ],
     "routes": [
       {
         "src": "/api/oustaz",
         "dest": "dist/server.cjs"
       },
       {
         "src": "/(.*)",
         "dest": "/$1"
       }
     ]
   }
   ```
2. **Ajouter les Variables d'Environnement** sur le tableau de bord Vercel :
   - `GEMINI_API_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `NODE_ENV` = `production`
3. **Lancer le déploiement** en liant votre dépôt GitHub `dallha/almouyassar-Quiz` !

### Option B : Hébergement Node.js Traditionnel (Render, Railway, Fly.io)

Il s'agit de la méthode la plus simple et robuste pour notre architecture unifiée (Express + Vite), car elle exploite directement les scripts de production fournis dans notre `package.json`.

1. **Lier le projet** à votre compte **Render** ou **Railway**.
2. **Définir la commande de Build** (Build Command) :
   ```bash
   npm run build
   ```
   *Ce script compile l'application React avec Vite dans le dossier `dist/` et compile le fichier `server.ts` avec esbuild dans `dist/server.cjs`.*
3. **Définir la commande de Démarrage** (Start Command) :
   ```bash
   npm run start
   ```
   *Ce script lance le serveur Node qui sert l'API et distribue l'application React.*
4. **Définir les Variables d'Environnement** de production dans les paramètres du service :
   - `GEMINI_API_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `NODE_ENV` = `production`
5. Déployer l'application. Elle sera accessible publiquement avec une gestion dynamique du routage et de la mémoire !

---
*Développé avec ferveur et rigueur pour l'excellence de l'éducation islamique de la jeunesse. Qu'Allah bénisse ce projet et l'œuvre de l'Institut Coranique Al-Mouyassar.* 🤲✨