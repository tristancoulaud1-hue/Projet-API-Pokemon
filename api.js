const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1350";

const handTheResponse = async (response) => {
    if (!response.ok) {
        throw new Error(error.message || "Erreur lors de la récupération des données");
    }
    return response.json();
};

// Récup la liste des pokémons
export const fetchPokemonList = () => {
    return fetch(API_URL)
        .then((response) => {if (!response.ok) throw new Error("Erreur API"); return response.json();})
        .catch((error) => {console.error(error);throw error;});
};

// Récup les détails d'un Pokémon avec URL spé
export const fetchPokemonDetails = (pokemonUrl) => {
    return fetch(pokemonUrl)
        .then((res) => {if (!res.ok) throw new Error("Erreur détails"); return res.json();})
        .catch((error) => {console.error(error);throw error;})
};