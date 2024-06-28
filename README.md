# Nom du Projet: Automatisation Playwright Cucumber TS pour Ztrain

Ce projet est un framework d'automatisation pour tester les fonctionnalités du site [Ztrain](https://ztrain-web.vercel.app/) en utilisant Playwright, Cucumber.js et TypeScript. Il couvre des fonctionnalités telles que la connexion, l'inscription et l'achat.

## Author

- **Nom:** Daryl NOUPIK
- **Email:** darylnoupik@gmail.com

## Table des Matières

- [Structure du Projet](#structure-du-projet)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Exécution des Tests](#exécution-des-tests)
- [Génération des Rapports](#génération-des-rapports)
- [Fonctionnalités](#fonctionnalités)
  - [Connexion](#connexion)
  - [Inscription](#inscription)
  - [Achat](#achat)
- [Configuration](#configuration)
- [Contribuer](#contribuer)
- [Licence](#License)

## Structure du Projet

```
|—— allure-results
|    |—— results.ndjson
|—— config
|     └── [Fichiers de configuration pour les hooks et les paramètres d'environnement]
|—— datas
 └── [Fichiers de données JSON des fonctionnalités]
|—— features
|    └── [Fichiers de fonctionnalités écrits en Gherkin]
|—— pages
|    └── [Modèles d'objets de page (POM)]
|—— reports
|    |—— cucumber_report.json
|—— screenshots
|—— steps
|    └── [Définitions des étapes pour Cucumber]
|—— utils
|    └── [Fichiers utilitaires]
|—— cucumber.js
|—— .env
|—— .gitignore
|—— htmlReportGenerator.js
|—— package-lock.json
|—— package.json
```

## Prérequis

### Outils

- Node
  ```
  Version : 20
  Allure : 2.29
  ```

## Installation

1. Clonez le depot

```
git clone https://github.com/DarylNoupik/Z-train.git
```

2. Accedez au repertoire du projet

```
cd Z-train
```

3. Installez les dependances

```
npm install
```

## Exécution des Tests

Pour exécuter les tests, utilisez la commande suivante :

```
npm test
```

Cela exécutera les cas de test définis dans le répertoire Features en utilisant les définitions d'étapes dans le répertoire steps.

## Génération des Rapports

## Fonctionnalités

## Configuration

Les fichiers de configuration se trouvent dans le répertoire `config`. Cela inclut les paramètres pour les hooks et les variables d'environnement.

## License

## Citing

```

```
