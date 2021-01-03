import styled from '@emotion/styled';

export const PokemonDetailContainer =  styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonShortDetail = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
`;

export const PokemonName = styled.p`
    font-size: 25px;
    color: ${({ theme }) => theme.primaryText};
    margin: 0;
    padding: 0;
    text-transform: capitalize;
`;

export const PokemonId = styled.p`
    font-size: 23px;
    color: #757575b3;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
`;

export const PokeImageContainer = styled.div`
    width: 80%;
    margin-top: 10px;
    height: 200px;
    text-align: center;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: contain;
        image-rendering: pixelated;
    }
`;

export const HeightandWeight = styled.p`
    position: absolute;
    bottom: -15px;
    left: 0;
    font-size: 13px;
    right: 0;
    color: #909090;
`;

export const DetailPanelContainer = styled.div`
    margin-top: 20px;
`;

export const CatchButtonContainer = styled.div`
    position: fixed;
    bottom: 10px;
    width: fit-content;
`;