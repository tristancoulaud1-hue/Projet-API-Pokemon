import React from 'react';

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

                <img 
                    src={data.sprites.other['official-artwork'].front_default} 
                    alt={data.name} 
                />

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

export default FichePokemon;