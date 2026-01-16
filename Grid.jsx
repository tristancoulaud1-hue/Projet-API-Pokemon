import React from 'react';
import Card from './Card';
  

function grid({ pokemonAffiche, voirDetails }) {
    return (
        <ul className="pokemon-grid">
            {pokemonAffiche.map((unPokemon) => {
                const id = unPokemon.url.split('/')[6];
                return (
                    <Card 
                        key={id} 
                        unPokemon={unPokemon} 
                        voirDetails={voirDetails} 
                    />)
            })}
        </ul>
    );
}

export default grid;