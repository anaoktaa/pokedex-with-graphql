import React from 'react';

const PokemonList = ({ pokemonList }) => {
    return (
        <div>
            <h1>
                Pokemon List
            </h1>
            {
                !pokemonList? null : pokemonList.map((pokemonItem) => (
                    <div key={pokemonItem.name}>
                        <p>{pokemonItem.name}</p>
                        <img src={pokemonItem.image} alt=''/>
                    </div>
                ))
              
            }
        </div>
    )
}

export default PokemonList;