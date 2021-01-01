import React, { useContext } from 'react';

import { PokemonContext } from '../../context/pokemon.context';

import './my-pokemon-list.styles.css';

const MyPokemonList = () => {
    const { myPokemonList, removeMyPokemonFromList } = useContext(PokemonContext);

    const handleRemovePokemon = (item) => {
        removeMyPokemonFromList(item.ownAliasName);
    }

    return (
        <div>
            <h2>My pokemon page</h2>
            {
                myPokemonList.map((myPoke) => (
                   <div key={myPoke.ownAliasName} className='flex-row space-between'>
                        <p >{myPoke.ownAliasName}</p>
                        <button onClick={() => handleRemovePokemon(myPoke)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default MyPokemonList;