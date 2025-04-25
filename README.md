# EcoloFolio

Un projet Nuxt 3 avec Tailwind CSS pour présenter des projets écologiques.

## Fonctionnalités

- Interface utilisateur moderne avec Tailwind CSS
- Composants réutilisables
- Pages d'accueil, à propos et contact
- Formulaire de contact
- Responsive design

## Configuration requise

- Node.js (v16 ou supérieur)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-utilisateur/ecolofolio.git
cd ecolofolio
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

## Développement

Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## Production

Construisez l'application pour la production :

```bash
npm run build
# ou
yarn build
```

Prévisualisez la version de production :

```bash
npm run preview
# ou
yarn preview
```

## Structure du projet

```
ecolofolio/
├── assets/            # Fichiers statiques (CSS, images)
├── components/        # Composants Vue réutilisables
├── layouts/           # Layouts de l'application
├── pages/             # Pages de l'application
├── public/            # Fichiers publics
├── app.vue            # Point d'entrée de l'application
├── nuxt.config.ts     # Configuration Nuxt
└── tailwind.config.js # Configuration Tailwind CSS
```

## Personnalisation

### Tailwind CSS

Vous pouvez personnaliser Tailwind CSS en modifiant le fichier `tailwind.config.js`.

### Composants

Les composants réutilisables se trouvent dans le dossier `components/`.

## Licence

MIT
