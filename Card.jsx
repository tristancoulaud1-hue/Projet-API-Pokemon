import React from 'react';

function Card({ unPokemon, voirDetails }) {
    const id = unPokemon.url.split('/')[6];
    return (
        <li
        key={id}
        className="pokemon-card"
        onClick={() => voirDetails(unPokemon.url)}
        >
        <div className="card-id">#{id}</div>
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={unPokemon.name}
        />
        <p className="pokemon-name">{unPokemon.name}</p>
        </li>
    );
}

export default Card;