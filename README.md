# I) *Description du projet*

Ce projet est une application web interactive de type Pokédex développée avec React. Elle permet aux utilisateurs de parcourir les 1350 derniers Pokemon. L'interface est fluide et réactive, offrant des outils de recherche et d'organisation pour retrouver facilement ses Pokémon préférés.

Ce projet a été réalisé dans un objectif pédagogique afin de pratiquer :

    - React (hooks, composants, props, état)
    - Les appels API asynchrones
    - La manipulation de données
    - La structuration d’une application front-end


# II) *API Utilisée*

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

# III) *Fonctionnalités implémentées*

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

Technologies utilisées :

    - React
        - Utilisation des hooks React :
            - useState
            - useEffect
    - JavaScript
    - HTML
    - CSS
    - PokéAPI

# IV) *Installation et Lancement du Projet*

Pour faire fonctionner ce projet localement sur votre machine, suivez ces étapes :

### 1. Cloner le dépôt
Ouvrez un terminal et récupérez le projet depuis GitHub :

''' text
Bash
git clone https://github.com/tristancoulaud1-hue/Projet-API-Pokemon.git
cd Projet-API-Pokemon
'''
### 2. Installer les dépendances
Comme le dossier node_modules est exclu du dépôt (via .gitignore), vous devez télécharger les bibliothèques nécessaires listées dans le package.json :

''' text
Bash
npm install
'''
### 3. Lancer le projet
Une fois l'installation terminée, démarrez le serveur de développement local :

''' text
Bash
npm run dev
'''
### 4. Accéder à l'application
Le terminal affichera une URL (généralement http://localhost:5173/). Copiez-la et collez-la dans votre navigateur pour explorer le Pokédex.