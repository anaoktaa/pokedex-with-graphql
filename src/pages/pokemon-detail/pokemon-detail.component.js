import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POKEMON } from '../../graphql/graphql';
import { GetRandomInteger, findPokemonName } from '../../utils/utils';

import BottomModal from '../../components/bottom-modal/bottom-modal.component';
import { PokemonContext } from '../../context/pokemon.context';

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
        <div>
            <h2>
                {data.pokemon.name}
            </h2>
            <img className='pokemon-sprites' src={data.pokemon.sprites.front_default} alt=''/>
            <button onClick={handleCatchPokemon}>Catch Pokemon</button>

            <BottomModal
                show={showBottomModal}
            >
                <div className='save-pokemon-container'>
                    <input value={pokemonName} onChange={handleChange} placeholder='Type your pokemon name'/>
                    <button onClick={handleSavePokemon}>Save Your Pokemon</button>

                </div>
          
            </BottomModal>
        </div>
    );
}

export default PokemonDetail;