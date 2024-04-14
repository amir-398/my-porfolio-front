# Portfolio Personnel avec Next.js et TypeScript
![Static Badge](https://img.shields.io/badge/version-1.0.0-blue)

Ce projet est un portfolio personnel construit avec Next.js en utilisant TypeScript. Il comprend un front office pour la présentation du portfolio et un back office pour la gestion des contenus.

## Caractéristiques

- **Front Office**: Une interface utilisateur élégante pour présenter les compétences, les projets et les expériences professionnelles.
- **Back Office**: Une interface d'administration pour gérer le contenu du portfolio, tel que les projets, les blogs et les informations personnelles.

## Technologies Utilisées

- **Next.js**: Un framework React pour des applications de page unique ou server-rendered.
- **TypeScript**: Un sur-ensemble de JavaScript qui ajoute des types statiques.
- **CSS Modules**: Pour le styling localisé et modulaire des composants.

## Installation

Pour lancer le projet localement, suivez ces étapes :

1. Clonez le dépôt :

```bash
git clone https://github.com/amir-398/my-porfolio-front.git
cd my-porfolio-front
```
2. Installez les dépendances :
```bash
npm install
```
3. Lancez le serveur de développement :
```bash
npm run dev
```
## Structure du Projet
```bash
/my-porfolio-front
|-- pages
|   |-- index.tsx        # Page d'accueil du front office
|   |-- api
|       |-- ...         # API routes pour le back office
|-- components          # Composants React réutilisables
|-- public              # Fichiers statiques comme les images
|-- styles              # Fichiers CSS pour le styling global
|-- lib                 # Bibliothèque de fonctions utiles ou hooks
|-- admin               # Composants et pages spécifiques au back office
```
