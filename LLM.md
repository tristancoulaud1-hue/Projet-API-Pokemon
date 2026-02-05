# Journal d'utilisation de l'IA (LLM.md)
Ce document répertorie les échanges clés avec l'intelligence artificielle pour la conception du Pokédex, démontrant la compréhension des solutions implémentées.

## 1. Architecture et Organisation du Code
Question posée : > "Comment organiser mes composants React et séparer le point d'entrée de la logique de l'application ?"

Réponse retenue et comprise : Pour respecter les standards de développement, il faut séparer le Bootstrap (le moment où React s'attache au DOM) du Composant Racine :

main.jsx (ou index.jsx) : Contient ReactDOM.createRoot. C'est la porte d'entrée.

App.jsx : Contient la logique globale (états, effets) et retourne le JSX. Il ne doit pas contenir de logique de rendu direct dans le DOM.

Dossier /components : Regroupe les sous-composants (Card.jsx, Grid.jsx, etc.) pour une meilleure scalabilité.

## 2. Gestion des Hooks (useState & useEffect)
Question posée : > "Comment récupérer les données de l'API PokeAPI de manière efficace au chargement ?"

Réponse retenue et comprise : L'utilisation combinée de deux hooks est nécessaire :

useState : Pour créer un espace de stockage réactif pour la liste des Pokémon et l'état de chargement.

useEffect : Avec un tableau de dépendances vide [], il permet de déclencher l'appel API (fetch) une seule fois au montage du composant.

## 3. Logique de Filtrage et de Tri
Question posée : > "Comment trier ma liste de Pokémon par nom ou par ID sans modifier l'état source ?"

Réponse retenue et comprise : Au lieu de modifier la variable pokemon stockée dans le state, on crée une variable calculée (pokemonAffiche) à chaque rendu :

.filter() : Pour filtrer les noms basés sur l'input de recherche.

.sort() : Pour réorganiser les données. Pour le tri alphabétique, on utilise localeCompare(). Pour le tri par ID, on extrait le numéro de l'URL et on compare des entiers (parseInt).

## 4. Bonnes pratiques Git (Le .gitignore)
Question posée : > "Pourquoi ne faut-il pas envoyer le dossier node_modules sur GitHub ?"

Réponse retenue et comprise : Le dossier node_modules est volumineux et spécifique à chaque machine. Il peut être recréé à tout moment grâce au fichier package.json avec la commande npm install. Il doit donc être listé dans un fichier .gitignore pour ne pas polluer le dépôt distant.