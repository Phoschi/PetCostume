# Changelog

## 2026-09-09

- Creation du setup Expo / React Native / TypeScript: `package.json`, `app.json`, `tsconfig.json`, `babel.config.js`, `eslint.config.js`.
- Ajout de l'architecture V1: `src/app`, `src/components`, `src/services`, `src/data`, `src/types`, `src/utils`, `src/constants`.
- Ajout du workflow principal Home -> Upload -> Costumes -> Generate -> Result.
- Ajout des rapports agents dans `agents/rapport`.
- Installation des dependances npm et correction de la configuration ESLint compatible Expo.
- Correction du lancement Expo: ajout de `expo-asset` en dependance directe.
- Mise a jour du projet vers Expo SDK 57 pour compatibilite avec Expo Go recent.
- Alignement des dependances SDK 57: React 19, React Native 0.86, Expo Router 57 et modules Expo.
- Correction de la sauvegarde galerie avec la nouvelle API `Asset.create` de `expo-media-library`.
- Ajout de `.nvmrc` pour recommander Node 20 sur ce projet.
