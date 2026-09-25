# Al-Mouyassar Play & Learn V2 — État d’implémentation

| Phase | Sprint | Sujet | Statut |
| --- | --- | --- | --- |
| 1 | S1 | Audit architecture | DONE |
| 1 | S2 | Refactor architecture | IN PROGRESS |
| 1 | S3 | Sécurité et stabilisation | IN PROGRESS |
| 2 | S4 | Modèle pédagogique | DONE |
| 2 | S5 | Progression et maîtrise | DONE |
| 2 | S6 | Révision intelligente | IN PROGRESS |
| 2 | S7 | XP + multilingue | IN PROGRESS |
| 3 | S8 | Expérience enfant | IN PROGRESS |
| 3 | S9 | Aventure + missions + badges | IN PROGRESS |
| 3 | S10 | Espace parent | IN PROGRESS |
| 3 | S11 | CMS pédagogique | IN PROGRESS |
| 3 | S12 | IA + PWA + analytics | IN PROGRESS |

## Sprint 1 — Audit architecture
### Prévu
- analyser le code existant et identifier les principes de séparation.
### Implémenté
- audit de [src/App.tsx](src/App.tsx), [src/store.ts](src/store.ts), [src/hooks/useQuizEngine.ts](src/hooks/useQuizEngine.ts), [src/types.ts](src/types.ts), [server.ts](server.ts), [src/supabaseClient.ts](src/supabaseClient.ts)
- création de [PHASE1_SPRINT1_ARCHITECTURE_AUDIT.md](PHASE1_SPRINT1_ARCHITECTURE_AUDIT.md)
### Validation
- TypeScript, tests et build validés

## Sprint 2 — Refactor architecture
### Prévu
- réduire le rôle de App.tsx et séparer logique / données / services.
### Implémenté
- création des modules [src/features/learning](src/features/learning) et [src/features/progression](src/features/progression)
- ajout des services [src/services/learningService.ts](src/services/learningService.ts) et [src/services/contentRepository.ts](src/services/contentRepository.ts)
- extraction du moteur de réponse dans [src/features/quiz/sessionService.ts](src/features/quiz/sessionService.ts) pour réduire la responsabilité de [src/App.tsx](src/App.tsx)
- intégration du résumé pédagogique dans l’UI de [src/App.tsx](src/App.tsx)
### Problèmes restants
- le refactor legacy reste incomplet, App.tsx garde encore une grande partie du contrôle UI
- l’extraction du shell d’authentification, de navigation et d’aventure reste à terminer

## Sprint 3 — Sécurité et stabilisation
### Prévu
- sécuriser Supabase, RLS et logique de progression.
### Implémenté
- ajout d’une table `children_progress` dans [supabase_secure_rpc.sql](supabase_secure_rpc.sql)
- ajout d’une table `parent_child_links` et de politiques de lecture/écriture ciblées dans [supabase_secure_rpc.sql](supabase_secure_rpc.sql)
- ajout du garde-fou d’accès parent/enfant dans [src/features/parent/parentAccessService.ts](src/features/parent/parentAccessService.ts)
- intégration de synchronisation Supabase dans [src/App.tsx](src/App.tsx)
### Problèmes restants
- les règles d’accès à l’enfant et les policies institutionnelles restent à finaliser dans l’environnement Supabase réel
- les tests RLS doivent être exécutés contre un projet Supabase de test avec rôles parent/enfant réels

## Tests de sécurité et progression
### Ajouté
- [tests/parent-access.test.ts](tests/parent-access.test.ts) vérifie qu’un parent n’a accès qu’aux enfants explicitement liés.
- le service de progression [src/features/quiz/sessionService.ts](src/features/quiz/sessionService.ts) centralise XP, badges et comptabilisation de catégories.

## Sprint 4 — Modèle pédagogique
### Prévu
- définir le contenu pédagogique en structure persistante.
### Implémenté
- [src/types/pedagogy.ts](src/types/pedagogy.ts)
- [src/features/learning/pedagogicalModel.ts](src/features/learning/pedagogicalModel.ts)
- [docs/pedagogy/pedagogical-model.md](docs/pedagogy/pedagogical-model.md)
### Validation
- tests de moteur pédagogique passés

## Sprint 5 — Progression et maîtrise
### Prévu
- suivre la progression par catégorie et par notion.
### Implémenté
- [src/features/progression/progressionEngine.ts](src/features/progression/progressionEngine.ts)
- [src/services/learningService.ts](src/services/learningService.ts)
### Validation
- tests passés

## Sprint 6 — Révision intelligente
### Prévu
- calculer des révisions espacées et selector la queue de questions.
### Implémenté
- logique de plan de révision dans [src/features/progression/progressionEngine.ts](src/features/progression/progressionEngine.ts)
- intégration visible dans l’UI de [src/App.tsx](src/App.tsx) et [src/components/StatsCard.tsx](src/components/StatsCard.tsx)
- historique réel des réponses enfant dans [src/services/progressRepository.ts](src/services/progressRepository.ts)
- sélection de révision alimentée par cet historique dans [src/services/learningService.ts](src/services/learningService.ts)
### Validation
- tests passés

## Sprint 7 — XP + multilingue
### Prévu
- centraliser XP et maintenir FR / AR / WO.
### Implémenté
- calcul d’XP dynamique via [src/services/learningService.ts](src/services/learningService.ts)
- usage réel dans [src/App.tsx](src/App.tsx)
### Problèmes restants
- le support AR / WO ne couvre pas encore l’intégralité du contenu éditorial et du CMS
- les contrôles de complétude des catalogues AR/WO doivent encore être automatisés

## Sprint 8 — Expérience enfant
### Prévu
- interface claire, mobile-first, recommandations.
### Implémenté
- recommandations existantes déjà présentes dans [src/components/QuizRecommender.tsx](src/components/QuizRecommender.tsx)
- panneau de progression V2 intégré dans l’UI
### Problèmes restants
- parcours enfant plus personnalisé et plus structuré à compléter
- les paramètres parentaux ne pilotent pas encore toutes les recommandations V2

## Sprint 9 — Aventure + missions + badges
### Prévu
- gamification dépendante du parcours pédagogique.
### Implémenté
- moteur de badge et missions existants conservés et stabilisés
### Problèmes restants
- dépendance explicite du moteur pédagogique à la gamification non finalisée
- les nœuds Adventure historiques doivent encore consommer les missions V2 directement

## Sprint 10 — Espace parent
### Prévu
- supervision des enfants, sécurité stricte et données propres.
### Implémenté
- [src/components/ParentalDashboard.tsx](src/components/ParentalDashboard.tsx) conservé et renforcé
### Problèmes restants
- les tests de lecture croisée doivent encore être exécutés contre une instance Supabase de test

## Sprint 11 — CMS pédagogique
### Prévu
- gestion du contenu publié sans code source.
### Implémenté
- [src/services/contentRepository.ts](src/services/contentRepository.ts) pour un accès structuré au contenu
- workflow versionné et audité dans [src/features/cms/contentWorkflow.ts](src/features/cms/contentWorkflow.ts)
- chaîne pédagogique utilisable dans [src/features/learning/learningPath.ts](src/features/learning/learningPath.ts) et [src/components/LearningPathPanel.tsx](src/components/LearningPathPanel.tsx)
- CRUD Supabase et transitions versionnées dans [src/services/cmsService.ts](src/services/cmsService.ts) et [src/components/CmsDashboard.tsx](src/components/CmsDashboard.tsx)
### Problèmes restants
- le rôle institutionnel doit encore être formalisé dans Supabase au-delà des policies auteur

## Sprint 12 — IA + PWA + analytics
### Prévu
- assistant pedagogique, offline, analytics.
### Implémenté
- garde-fous de contexte et de taille dans [server.ts](server.ts) et contexte enfant dans [src/components/OustazVirtual.tsx](src/components/OustazVirtual.tsx)
- enregistrement PWA depuis [src/main.tsx](src/main.tsx) et cache versionné dans [public/service-worker.js](public/service-worker.js)
- événements produit et pédagogiques dans [src/services/analyticsService.ts](src/services/analyticsService.ts)
- file de synchronisation offline dans [src/services/offlineSyncService.ts](src/services/offlineSyncService.ts)
- scénario navigateur production dans [tests/e2e/offline-reconnect.spec.ts](tests/e2e/offline-reconnect.spec.ts)
### Statut
- les tableaux de bord analytics serveur restent à brancher

## Validation globale
- `npm run lint` ✅
- `npm test` ✅
- `npm run build` ✅

## Conclusion honnête
- les fondations V2 sont maintenant intégrées au quiz réel, au parcours publié, à l’historique de révision, aux missions, à Oustaz, à la synchronisation et à la PWA ;
- aucun sprint n’est déclaré DONE sans interface et validation correspondantes ;
- les travaux restants sont explicitement identifiés : extraction complète du shell, validation RLS réelle, complétude multilingue et analytics serveur.

## Migration Neon
### Implémenté
- projet `steep-silence-28823593` lié à la branche `production` ;
- Neon Auth activé avec `neon.ts` et authentification navigateur via [src/neonAuthClient.ts](src/neonAuthClient.ts) ;
- schéma applicatif déployé par [db/neon-schema.sql](db/neon-schema.sql) ;
- APIs Neon authentifiées pour progression, profil, CMS et dashboard parent dans [server](server) ;
- frontend progression, CMS et parent routés vers les APIs Neon.
### Problèmes restants
- l’adaptateur `SupabaseAuthAdapter` reste utilisé uniquement comme compatibilité d’API fournie par Neon Auth ; le SDK Supabase et les anciens services d’accès ont été retirés ;
- `VITE_NEON_AUTH_URL` doit être configurée dans l’environnement Vercel.
