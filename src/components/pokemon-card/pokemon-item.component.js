import React from 'react';

import { PokemonItemContainer, PokemonImageContainer, PokemonImage,
         PokemonDetailChar, PokemoName, PokemonId } from './pokemon-item.styled';
const PokemonItem = ({ id, name, image, history }) => {
   
    const handlePokemonDetail = (name) => {
        history.push(`/pokemon-detail/${name}`);
    }
    const fullId = id < 10? '00'+id : id < 100? '0' + id: id;
    return (
        <PokemonItemContainer onClick={() => handlePokemonDetail(name)} >

            <PokemonImageContainer>
                    <img width='100%' height='100%' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fullId}.png`} alt=''/>
                </PokemonImageContainer>
            <PokemonDetailChar>
                <PokemonId>#{id < 10? '000'+id : id < 100? '00' + id : id < 1000? '0' + id: id}</PokemonId>
                <PokemoName>{name}</PokemoName>
            </PokemonDetailChar>
         
        </PokemonItemContainer>
    )
}

export default PokemonItem;