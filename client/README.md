# Client

Ce projet est un client web utilisant React, Vite, Tailwind CSS, et plusieurs autres bibliothèques pour la gestion d'interface utilisateur, d'icônes, et de formulaires.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante dans le dossier ``client`` :
```bash
npm install
```

## Scripts Disponibles

Voici une liste des scripts que vous pouvez exécuter avec ce projet :

* `npm run dev` : Lance l'application en mode développement sur le port 3000. Utilisez `Ctrl + C` pour arrêter le serveur.
* `npm run build` : Compile le projet pour la production.
* `npm run lint` : Vérifie que le code respecte les normes de qualité en utilisant `prettier` et `eslint`.
* `npm run fix` : Corrige automatiquement les problèmes de formatage et de lint dans le code.
* `npm run clean` : Supprime les dossiers `node_modules`, `dist`, et le fichier `package-lock.json`.
* `npm run preview` : Prévisualise le build de production.

## Dépendances

Le projet utilise les bibliothèques suivantes :

* **React** : pour la construction d'interfaces utilisateur.
* **React Router DOM** : pour la gestion des routes.
* **FontAwesome** et **Heroicons** : pour les icônes.
* **Headless UI** : pour les composants d'interface utilisateur.
* **Material Tailwind** : pour les composants UI avec Tailwind CSS.
* **React Google Recaptcha** : pour ajouter des captcha dans vos formulaires.

## Dépendances de Développement

* **Vite** : pour le bundling et le serveur de développement.
* **ESLint** et **Prettier** : pour la qualité du code.
* **Tailwind CSS** : pour le style.

## Configuration de Lint-Staged

Ce projet utilise `lint-staged` pour s'assurer que les fichiers sont correctement formatés avant chaque commit :

* `**/*` : Applique `prettier --write` à tous les fichiers, en ignorant les retours chariots spécifiques à CRLF.

## Auteur

* **PierreMaze**

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.