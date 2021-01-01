import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POKEMON } from '../../graphql/graphql';

const PokemonCard = ({ pokemonName }) => {
    const { loading, data, error } = useQuery(GET_POKEMON, {
        variables: {
            name: pokemonName
        },
    });

    if (loading) return 'Loading...';
    if (error) return `Error :  ${error}`;

    console.log('data', data);

    return (
        <div className='pokemon-list-container' key={data.pokemon.id}>
            <p>{data.pokemon.name}</p>

        </div>
    )
}

export default PokemonCard;