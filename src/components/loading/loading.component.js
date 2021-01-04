import React from 'react';

import { LoadingContainer } from './loading.styled';
import { PokeImageContainer } from '../../pages/pokemon-detail/pokemon-detail.styled';

import pokeball from '../../assets/ball.png';

const Loading = () => {
    return (
        <LoadingContainer>
            <PokeImageContainer style={{marginTop: 0}}>
                <img className={`pokeball-catch show-pokeball-infinite`} src={pokeball} alt='' width='100%' height='100%'/>
            </PokeImageContainer>
        </LoadingContainer>
    )
}

export default Loading;