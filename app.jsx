import React, { useState, useEffect } from 'react';
import './app.css';
import ReactDOM from 'react-dom/client';

function BoitePrincipale() {
    const [pokemon, setPokemon] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [tri, setTri] = useState("id");
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1350";
        fetch(url)
            .then((response) => response.json())
            .then((donnes) => setPokemon(donnes.results))
            .catch((error) => console.error(error));
    }, []);

    const voirDetails = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSelectedPokemon(data));
    };
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
                                <li key={id} className="pokemon-card" onClick={() => voirDetails(unPokemon.url)}>
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
                <FichePokemon 
                    data={selectedPokemon} 
                    onFermer={() => setSelectedPokemon(null)} 
                />
        </div>
    );
}

function FichePokemon({ data, onFermer }) {
    if (!data) return null;

    return (
        <div className="modal-overlay" onClick={onFermer}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onFermer}>X</button>

                <div className="modal-header">
                    <h2>{data.name.toUpperCase()}</h2>
                    <span className="pokedex-id">#{data.id}</span>
                </div>

                <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />

                <div className="modal-body">
                    <div className="stat-row">
                        <span>Taille:</span> <strong>{data.height / 10} m</strong>
                    </div>
                    <div className="stat-row">
                        <span>Poids:</span> <strong>{data.weight / 10} kg</strong>
                    </div>
                    <div className="types-container">
                        {data.types.map(t => (
                            <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BoitePrincipale />);
export default BoitePrincipale;