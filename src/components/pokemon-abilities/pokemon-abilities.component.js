import React, { useEffect, useState } from'react';
import { useQuery } from '@apollo/client';

import { AbilityText } from './pokemon-abilities.styled';

import { GET_ABILITY } from '../../graphql/graphql';

const PokemonAbilities = ({ ability }) => {
    const { loading, data, error } = useQuery(GET_ABILITY, {
        variables: {
            ability: ability
        },
    });  

    const [ abilityDetail, setAbilityDetail ] = useState(''); 

    useEffect(() => {
        const getDescriptionAbility = () => {
            if (!data) return;
            let allDescription = '';
            data.ability.response.effect_entries.forEach((effectEntry) => {
                if (effectEntry.language.name === 'en') {
                    allDescription = allDescription + effectEntry.effect
                }
            })
            setAbilityDetail(allDescription);
        }

        getDescriptionAbility();

    }, [data]);

    if (loading) return '';
    if (error) return `Error :  ${error}`;
    return (
        <AbilityText>{abilityDetail}</AbilityText>
    )
}

export default PokemonAbilities;