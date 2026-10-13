# Phase 1 — Sprint 1 : Audit de l'architecture

## Objectif
Cartographier l’architecture actuelle et identifier les zones à refactorer sans casser le moteur de quiz existant.

## Fichiers clés analysés
- src/App.tsx
- src/store.ts
- src/types.ts
- src/data.ts
- src/questions_extra.ts
- server.ts
- src/components/*
- src/hooks/useQuizEngine.ts
- src/supabaseClient.ts

## Diagnostique
- Le cœur du projet est bien le moteur de quiz et la progression.
- L’application a déjà une logique fonctionnelle importante, mais elle est dispersée dans App.tsx.
- Les données d’apprentissage et les badges sont présents, mais la séparation entre données, logique métier et UI reste incomplète.
- Les statuts utilisateur doivent être centralisés et homogénéisés pour éviter les incohérences.
- Les services IA et la configuration Supabase doivent rester séparés des composants UI.

## Conclusion
Le projet est viable mais exige une refonte progressive, avec une priorité claire :
1. stabiliser le socle ;
2. séparer la logique de progression ;
3. formaliser le modèle pédagogique V2 ;
4. sécuriser l’API et les données utilisateurs.

## Actions de refonte
- créer un sous-système de types pédagogiques ;
- centraliser le moteur de progression ;
- documenter les flux de contenu et d’XP ;
- conserver les composants existants tant que leur logique est validée.
