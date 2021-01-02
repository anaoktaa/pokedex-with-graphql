import styled from '@emotion/styled';

export const PokemonItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    background: #3a384c;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 10px;
    text-transform: capitalize;
    position: relative;
    padding: 10px 0;  
    overflow: hidden;
    height: 116px;
    font-size: 13px;
    font-family: 'Baloo Bhai 2',cursive;
`;

export const PokemonImageContainer = styled.div`
    width: 120px;
    height: 120px;
    text-align: end;

    img {
        object-fit: contain;
    }
`;

export const PokemonImage = styled.img`
    display: flex;
    image-rendering: pixelated;
    position: absolute;
    right: 10px;
    bottom: 20px;
    transform: scale(1.7);
`;

export const PokemonDetailChar = styled.div`
    position: absolute;
    top: -40px;
    bottom: 0;
    left: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`;

export const PokemonId = styled.p`
    font-size: 40px;
    color: #ded8cd2e;
    font-weight: 500;
    margin: 0;
    padding: 0;
`;

export const PokemoName = styled.p`
    font-size: 22px;
    color: #d2d2d2;
    margin: -15px 0 0;
    padding: 0;
`;