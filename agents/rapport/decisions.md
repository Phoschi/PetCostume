# Decisions

## Expo Router pour la navigation

Decision: utiliser Expo Router avec les pages dans `src/app`.

Raison: le brief demande Expo Router et une navigation simple par pages pour la V1.

## Etat local React pour la V1

Decision: utiliser un context React local pour stocker photo, costume selectionne et resultat.

Raison: le flux V1 est lineaire et ne justifie pas encore une dependance de state management.

## Service IA mocke

Decision: isoler la generation dans `src/services/ai/generateCostumeImage.ts` avec une implementation temporaire mockee.

Raison: le fournisseur IA n'est pas encore defini; le mock permet de valider le parcours applicatif sans bloquer l'architecture.

## Donnees costumes statiques

Decision: stocker les costumes V1 dans `src/data/costumes.ts`.

Raison: le brief prevoit des donnees simples pour la V1 avant connexion eventuelle a un backend ou catalogue externe.

## ESLint 8 avec eslint-config-expo

Decision: utiliser ESLint 8 et `.eslintrc.js`.

Raison: `eslint-config-expo@8` expose une configuration classique, compatible avec ESLint 8.

## Expo SDK 57

Decision: mettre a jour le projet de SDK 52 vers SDK 57.

Raison: Expo Go installe sur telephone physique utilise SDK 57 et refuse les projets SDK 52.

## API MediaLibrary SDK 57

Decision: utiliser `Asset.create` depuis `expo-media-library` pour sauvegarder l'image dans la galerie.

Raison: `saveToLibraryAsync` importe depuis `expo-media-library` est deprecie et leve une erreur runtime en SDK 57.
