import styled from '@emotion/styled';

export const PokemonDetailContainer =  styled.div`
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
        padding: 0px 50px;
    }
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

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }

    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
`;

export const PokemonId = styled.p`
    font-size: 23px;
    color: #757575b3;
    margin: 0;
    padding: 0;
    text-transform: capitalize;

    @media screen and (min-width: 768px) {
        font-size: 26px;
    }

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;

export const PokeImageContainer = styled.div`
    width: 100%;
    margin-top: 40px;
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

    @media screen and (min-width: 1024px) {
        height: 350px;
        margin-top: 10px;
    }
`;

export const HeightandWeight = styled.p`
    position: absolute;
    bottom: -15px;
    left: 0;
    font-size: 13px;
    right: 0;
    color: #909090;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 19px;
    }
`;

export const DetailPanelContainer = styled.div`
    margin-top: 20px;

    @media screen and (min-width:  1024px) {
        margin-top: 35px;
    }
`;

export const CatchButtonContainer = styled.div`
    position: fixed;
    bottom: 10px;
    width: fit-content;
`;

export const PokeDetailGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 0;


    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`;