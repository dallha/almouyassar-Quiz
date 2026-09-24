# Modèle pédagogique V2

Le moteur pédagogique centralise les éléments suivants :

- domaine ;
- catégorie ;
- chapitre ;
- leçon ;
- objectif d’apprentissage ;
- niveau ;
- difficulté ;
- tags ;
- workflow de publication.

Le modèle est désormais construit dans src/types/pedagogy.ts et est exploitable par les services de progression et de révision.

Les principes de base sont les suivants :
- chaque contenu est associé à un domaine pédagogique ;
- chaque leçon est intégrée à une progression mesurable ;
- les contenus peuvent être classés par workflow de validation ;
- la difficulté combine le niveau pédagogique et les signatures de performance.
