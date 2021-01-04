import React, { useContext, useEffect, useState } from 'react';

import { PokemonContext } from '../../context/pokemon.context';
import PokemonItem from '../../components/pokemon-item/pokemon-item.component';

import './my-pokemon-list.styles.css';

const MyPokemonList = () => {
    const { myPokemonList, removeMyPokemonFromList } = useContext(PokemonContext);
    const [ overlay, setOverlay ] = useState(null);
    const [ emptyData, setEmptyData ] = useState(true);
    const arrMyPokemonList =Object.keys(myPokemonList).map(key => myPokemonList[key]);

    const handleRemovePokemon = (item, detail) => {
        removeMyPokemonFromList({
            ownAliasName: item,
            detail: {
                pokemon: {
                    ...detail
                }
            }
        })
    }

    const handleDetail = (data) => {
        setOverlay(data)
    }

    useEffect(() => {
        const checking = () => {
            let empty = true;
            arrMyPokemonList.forEach((item) => {
                if (item.nameList.length !== 0) {
                    empty = empty && false;
                }
            })
            setEmptyData(empty)
        }

        checking();

    }, [arrMyPokemonList])
    return (
        <div className='poke-wrapper'>
            <div className='pokemon-list-container'>
                {
                    arrMyPokemonList.map((pokemons) => {
                        return pokemons.nameList.map((pokemon) => (
                            <PokemonItem
                                data={pokemon}
                                handleOnClick={handleDetail}
                                deleteFunc={true}
                                key={pokemon}
                                id={pokemons.id}
                                name={pokemon}
                                typeList={pokemons.types}
                                image={pokemons.sprites.front_default}
                            >
                                <div className={`pokeoverlay ${overlay === pokemon? 'show-overlay' : ''}`}>
                                    <i onClick={() => handleRemovePokemon(pokemon, pokemons)} class="far fa-trash-alt" style={{fontSize: '45px', color: '#fff', cursor: 'pointer'}}></i>
                                </div>
                            </PokemonItem>
                        ))
                    })
                }
          
            </div>
            {
                emptyData ?
                <h1 style={{textAlign: 'center'}}>No pokemons in here !</h1>
                :
                null
            }
        </div>
    )
}

export default MyPokemonList;