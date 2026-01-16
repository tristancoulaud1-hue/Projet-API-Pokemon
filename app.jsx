import React, { useState, useEffect } from 'react';
import './app.css';
import ReactDOM from 'react-dom/client';

function BoitePrincipale() {
    const [pokemon, setPokemon] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [tri, setTri] = useState("id");

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
        fetch(url)
            .then((response) => response.json())
            .then((donnes) => setPokemon(donnes.results))
            .catch((error) => console.error(error));
    }, []);

    const pokemonAffiche = pokemon
        .filter((p) => p.name.toLowerCase().includes(recherche.toLowerCase()))
        .sort((a, b) => {
            if (tri === "nom") return a.name.localeCompare(b.name);
            const idA = parseInt(a.url.split('/')[6]);
            const idB = parseInt(b.url.split('/')[6]);
            return idA - idB;
        });

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
            </div>

            <ul className="pokemon-grid">
                {pokemonAffiche.map((unPokemon) => {
                    const id = unPokemon.url.split('/')[6];
                    return (
                        <li key={id} className="pokemon-card">
                            <div className="card-id">#{id}</div>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                alt={unPokemon.name}
                            />
                            <p className="pokemon-name">{unPokemon.name}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BoitePrincipale />);
export default BoitePrincipale;