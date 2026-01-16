I) Description du projet

Ce projet est une application web interactive de type Pokédex développée avec React. Elle permet aux utilisateurs de parcourir les 1350 derniers Pokemon. L'interface est fluide et réactive, offrant des outils de recherche et d'organisation pour retrouver facilement ses Pokémon préférés.

Ce projet a été réalisé dans un objectif pédagogique afin de pratiquer :
    - React (hooks, composants, props, état)
    - Les appels API asynchrones
    - La manipulation de données
    - La structuration d’une application front-end

II) API Utilisée

L’application utilise l’API publique PokéAPI :
URL principale :
https://pokeapi.co/api/v2/pokemon

Données récupérées :
    - Liste complète des Pokémon (nom, URL)
    - Détails d’un Pokémon :
        - ID
        - Nom
        - Image officielle
        - Taille
        - Poids
        - Types (feu, eau, plante, etc.)

Les sprites et artworks sont fournis par les ressources officielles liées à la PokéAPI.

III) Fonctionnalités implémentées

Recherche :
    - Recherche en temps réel par nom de Pokémon
    - Filtrage dynamique sans rechargement de page

Tri :
    - Tri des pokemon :
        - Par numéro de Pokédex
        - Par ordre alphabétique

Affichage en grille :
    - Grille responsive de cartes Pokémon
    - Chaque carte affiche :
        - Numéro
        - Sprite
        - Nom

Fiche détaillée (modal) :
    - Ouverture d’une fenêtre modale au clic sur un Pokémon
    - Affichage des informations détaillées :
        - Nom
        - Numéro
        - Image officielle
        - Taille  
        - Poids
        - Types (avec badges colorés)
    - Fermeture via bouton ou clic à l’extérieur

Architecture du projet :
    - Composants séparé :
        - Grid.jsx
        - Card.jsx
        - Fichepokemon.jsx
    - Gestion des appels API dans un fichier dédié (Api.js)
    - Utilisation des hooks React :
        - useState
        - useEffect

Technologies utilisées :
    - React
    - JavaScript
    - HTML
    - CSS
    - PokéAPI