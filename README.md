I) Description du projet

Ce projet est une application web interactive de type Pokédex développée avec React. Elle permet aux utilisateurs de parcourir les 151 Pokémon de la première génération. L'interface est fluide et réactive, offrant des outils de recherche et d'organisation pour retrouver facilement ses Pokémon préférés.

L'application démontre l'utilisation des concepts fondamentaux de React :

La gestion d'état (useState).

La synchronisation avec une API externe (useEffect).

Le rendu dynamique de listes.

II) API Utilisée

Le projet consomme les données de la PokeAPI, une API REST complète pour tout ce qui concerne l'univers Pokémon.

Endpoint principal : https://pokeapi.co/api/v2/pokemon?limit=151

Images : Les sprites officiels sont récupérés dynamiquement via le dépôt GitHub de PokeAPI pour garantir une haute qualité d'affichage.

III) Fonctionnalités implémentées

1. Affichage dynamique
Récupération automatique des données au chargement de la page.

Génération d'une grille de cartes affichant le N°, l'image et le nom du Pokémon.

2. Système de Recherche
Barre de recherche textuelle en temps réel.

Le filtrage est insensible à la casse (majuscules/minuscules) pour une meilleure expérience utilisateur.

3. Tri des données
L'utilisateur peut organiser la liste selon deux critères grâce à un menu déroulant :

Par numéro (ID) : L'ordre naturel du Pokédex national.

Par ordre alphabétique : Pour retrouver un Pokémon par son nom.

4. Interface Responsive
Utilisation d'un système de grille (CSS Grid) pour s'adapter aux différentes tailles d'écrans (ordinateurs, tablettes, mobiles).