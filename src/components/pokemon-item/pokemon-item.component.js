import React, { useContext } from 'react';

import { PokemonItemContainer, PokemonImageContainer,
         PokemonDetailChar, PokemoName, PokemonId, BadgeCount,
         BadgeContainer } from './pokemon-item.styled';
import { changeIdDigit } from '../../utils/utils';
import Badge from '../badge/badge.component';

import { PokemonContext } from '../../context/pokemon.context';

const PokemonItem = ({ dataTestId, id, name, image, history, typeList, children, showBadgeCount, data, handleOnClick, ...props }) => {
    const { myPokemonList } = useContext(PokemonContext);

    const handleClick = () => {
        handleOnClick(data);
    }
  
    return (
        <PokemonItemContainer data-testid={dataTestId} onClick={handleClick} >
            <PokemonImageContainer>
                    <img width='100%' height='100%' src={image} alt=''/>
                </PokemonImageContainer>
            <PokemonDetailChar>
                <PokemonId>#{changeIdDigit(id)}</PokemonId>
                <PokemoName>{name}</PokemoName>
            </PokemonDetailChar>
            {
                typeList?
                <BadgeContainer>
                    {
                        typeList.map((item) => (
                            <Badge key={item.type.name} type={item.type.name}>{item.type.name}</Badge>
                        ))
                    }
                </BadgeContainer>
                :
                null
            }
            {
                showBadgeCount && myPokemonList[name] && myPokemonList[name].nameList.length > 0?
                <BadgeCount>{myPokemonList[name].nameList.length}</BadgeCount>
                :
                null
            }
            {children}
        </PokemonItemContainer>
    )
}

export default PokemonItem;