import React, { useState, useEffect } from 'react';
import './app.css';
import FichePokemon from './components/FichePokemon.jsx';
import Grid from './components/Grid.jsx';
import { fetchPokemonList, fetchPokemonDetails, toggleTheme } from './Api.js';


function BoitePrincipale() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [recherche, setRecherche] = useState("");
    const [tri, setTri] = useState("id");
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        fetchPokemonList()
            .then((data) => {setPokemon(data.results); setLoading(false);})
            .catch((error) => {console.error(error); setLoading(false);
            });
    }, []);

    const voirDetails = (url) => {
        fetchPokemonDetails(url)
            .then((data) => {setSelectedPokemon(data);})
            .catch((error) => console.error("Erreur détails:", error));
    };

    const pokemonAffiche = pokemon
        .filter((p) => p.name.toLowerCase().includes(recherche.toLowerCase()))
        .sort((a, b) => {
            if (tri === "nom") return a.name.localeCompare(b.name);
            const idA = parseInt(a.url.split('/')[6]);
            const idB = parseInt(b.url.split('/')[6]);
            return idA - idB;
        });
    
    

    if (loading) {return <div>Chargement des Pokemon</div>;}

    return (
        <div className="boite-principale">    
                    <h1>Mon Pokédex</h1>

                    <div className="controls">
                        <input
                            type="text"
                            placeholder="Rechercher un Pokémon..."
                            className="search-bar"
                            value={recherche}
                            onChange={(e) => setRecherche(e.target.value)}
                        />
                        <select className="sort-select" value={tri} onChange={(e) => setTri(e.target.value)}>
                            <option value="id">Trier par N°</option>
                            <option value="nom">Trier par Nom</option>
                        </select>
                        <button id="theme-toggle" onClick={toggleTheme}>Modifier le thème</button>
                    </div>

                    
                <Grid pokemonAffiche={pokemonAffiche} voirDetails={voirDetails} />
                <FichePokemon data={selectedPokemon} onFermer={() => setSelectedPokemon(null)} />
        </div>
    );
}

export default BoitePrincipale;