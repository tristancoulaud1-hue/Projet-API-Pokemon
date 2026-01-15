import React, { useState, useEffect } from 'react';


function BoitePrincipale() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

        fetch(url)
            .then((response) => response.json())
            .then((donnes) => {
                setPokemon(donnes.results);
            });
    }, []);
{pokemon.map((unPokemon) => {
    const id = unPokemon.url.split('/')[6];
    return (
        <li key={id} className="carte-pokemon">
            {<img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={unPokemon.name
            />}
        </li>
    )
})

}
    return (
        <div className="boite-principale">
            <h1>Bienvenue dans la Boîte Principale</h1>
            <p>Obtenez toutes les infos nécéssaires sur les Pokémons.</p>
             <ul>
                {pokemon.map((unPokemon) => (
                <li key={unPokemon.name}> {unPokemon.name} </li>
                ))} 
            </ul>
        </div>
    );
}

export default BoitePrincipale;