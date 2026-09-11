# Pet Costume

Application mobile permettant de transformer une photo d'animal avec un costume, puis d'ouvrir le produit associe via un lien d'affiliation.

## Stack

- React Native
- Expo
- TypeScript
- Expo Router
- Android en priorite
- iOS via Expo / EAS

## Demarrage

```bash
npm install
npm run start
```

Pour Android :

```bash
npm run android
```

## Scripts

- `npm run start` lance Expo.
- `npm run android` lance Expo avec cible Android.
- `npm run ios` lance Expo avec cible iOS.
- `npm run typecheck` verifie TypeScript.
- `npm run lint` lance ESLint.

## Architecture

```text
agents/rapport/     Memoire technique courte du projet
src/app/            Pages et navigation Expo Router
src/components/     Composants UI reutilisables
src/constants/      Constantes partagees
src/data/           Donnees statiques de V1
src/services/       Acces services externes ou mocks
src/types/          Types TypeScript partages
src/utils/          Fonctions utilitaires
```

Avant chaque modification, consulter `agents/rapport/status.md`, `agents/rapport/changelog.md` et `agents/rapport/decisions.md` si la tache touche l'architecture.
