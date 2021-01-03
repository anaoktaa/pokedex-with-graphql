import React from 'react';

import { PokemonItemContainer, PokemonImageContainer,
         PokemonDetailChar, PokemoName, PokemonId } from './pokemon-item.styled';
import { changeIdDigit } from '../../utils/utils';

const PokemonItem = ({ id, name, image, history }) => {
   
    const handlePokemonDetail = (name) => {
        history.push(`/pokemon-detail/${name}`);
    }
  
    return (
        <PokemonItemContainer onClick={() => handlePokemonDetail(name)} >
            <PokemonImageContainer>
                    <img width='100%' height='100%' src={image} alt=''/>
                </PokemonImageContainer>
            <PokemonDetailChar>
                <PokemonId>#{changeIdDigit(id)}</PokemonId>
                <PokemoName>{name}</PokemoName>
            </PokemonDetailChar>
        </PokemonItemContainer>
    )
}

export default PokemonItem;