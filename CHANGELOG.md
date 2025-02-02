# Journal des modifications

## [0.1.0] - 2025-01-30

### Ajouté

- Création du projet initial
- Ajout de la structure des fichiers Markdown (Readme, Installation, Changelog, TodoList, ...)
- Ajout et configuration de la librairie Tailwind
- Ajout et configuration de la librairie Prettier
- Définition des services proposés

### Changed

- Mise en place de la structure de base du projet

#

## [1.0.1] - 2025-01-31

### Added

- Ajout du dossier `components` et du dossier `layout`
- Ajout du fichier `Header.jsx` dans le dossier `layout`
- Ajout du fichier `Logo.jsx` dans le dossier`components`
- Mise en plave du `Header` et du `Logo`

#

## [1.0.2] - 2025-01-31

### Added

- Ajout des sections de la page Home :

  - Hero section.
  - Bar section.
  - Rental section.
  - Events section.
  - FAQ section.

- Ajout de tous les tableaux de données de toutes les sections de la page Home :

  - Details Bar data.
  - Services Offered data.
  - Events data.
  - FAQ data.

- Mappage des données de toutes les sections de la page Home.

- Ajout des composants `CardEvent.jsx` et `FaqAccordion.jsx`

## [1.0.3] - 2025-02-02

### Hotfix

- Hero section layout et style :
  - Correction du z-index dans la hero section pour la mettre au premier plan.
  - Espacement ajouté entre les sous-titres de la hero section.
  - Mise à jour de la couleur de la police pour correspondre au design system (gray -> zinc).
- Style de la section Location :
  - Correction du layout du bouton et ajustement de la taille de la police dans la section location de la homepage.
- Style de la section Events :
  - Ajout d’un message dans la section Events lorsqu'aucun événement n'est prévu.
