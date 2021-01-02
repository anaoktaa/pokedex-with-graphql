import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POKEMON } from '../../graphql/graphql';
import { GetRandomInteger, findPokemonName } from '../../utils/utils';

import BottomModal from '../../components/bottom-modal/bottom-modal.component';
import { PokemonContext } from '../../context/pokemon.context';
import { PokemonImageContainer, PokemoName } from '../../components/pokemon-card/pokemon-item.styled';

import './pokemon-detail.styles.css';

const PokemonDetail = ({ match: { params: { pokemonId } } }) => {
    const [ showBottomModal, setShowBottomModal ] = useState(false);
    const [ pokemonName, setPokemonName ] = useState(''); 
    const { addMyPokemon, myPokemonList } = useContext(PokemonContext);

    const { loading, data, error } = useQuery(GET_POKEMON, {
        variables: {
            name: pokemonId
        },
    });

    const handleCatchPokemon = () => {
        const probability = GetRandomInteger(2);
        if (probability === 1) {
            setTimeout(() => {
                setShowBottomModal(true);
            }, 1000)
        }
    }   

    const handleChange = event => {
        const { value } = event.target;
        setPokemonName(value);
    }

    const handleSavePokemon = () => {
        if (!pokemonName) return;
        const findDuplicateName = findPokemonName(myPokemonList, pokemonName);
        if (findDuplicateName) {
            alert('Name already taken');
            return;
        }  
        addMyPokemon({
            ownAliasName: pokemonName,
            detail: data
        });
    }

    useEffect(() => {
        const handleCloseBottomModal = () => {
            setPokemonName('');
            setShowBottomModal(false);
        }
        handleCloseBottomModal();
    }, [myPokemonList])

    if (loading) return 'Loading...';
    if (error) return `Error :  ${error}`;

    return (
            <div className='pokemon-detail-container'>   
                <div className='pokemon-short-detail'>
                    <div>
                       
                        <p className='poke-name'>
                            {data.pokemon.name}
                        </p>

                        <div>
                            <div className='badge'>Fire</div>
                            <div className='badge'>Ground</div>
                        </div>
                    </div>
                    <p className='poke-id'>
                        #0001
                    </p>
                  
                </div>
                <div className='text-end'>
                    <img width='100%' height='100%' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${data.pokemon.id}.png`} alt=''/>
                </div>
            <BottomModal
                show={showBottomModal}
            >
                <div className='save-pokemon-container'>
                    <input value={pokemonName} onChange={handleChange} placeholder='Type your pokemon name'/>
                    <button onClick={handleSavePokemon}>Save Your Pokemon</button>
                    <button onClick={handleCatchPokemon}>Catch Pokemon</button>
                </div>
          
            </BottomModal>
        </div>
    );
}

export default PokemonDetail;