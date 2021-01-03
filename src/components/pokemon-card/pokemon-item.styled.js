import styled from '@emotion/styled';


export const PokemonOverlayDelete = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #6f698a;
    position: absolute;
    opacity: 1;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const PokemonItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    background: ${({ theme }) => theme.secondaryBackground};
    text-align: center;
    cursor: ${({ overlay }) => overlay? 'default': 'pointer'};
    border-radius: 10px;
    margin-bottom: 10px;
    text-transform: capitalize;
    position: relative;
    padding: 10px 0;  
    overflow: hidden;
    height: 116px;
    font-size: 13px;
    font-family: 'Baloo Bhai 2',cursive;
    box-shadow: ${({ theme }) => theme.background === '#fff'? '7px 6px 1px #dadadad1, 0px 1px 5px #dadadad1': 'none'};


`;

export const BadgeContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
`;

export const BadgeCount = styled.div`
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    z-index: 9;
    right: 0;
    font-size: 16px;
    color: white;
    background-color: #7f77a2;
    border-top-left-radius: 0;
    border-bottom-left-radius: 10px;
    line-height: 30px;
`;

export const PokemonImageContainer = styled.div`
    width: 140px;
    height: 140px;
    text-align: end;

    img {
        object-fit: contain;
        image-rendering: pixelated;
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
// color: #ded8cd2e;
export const PokemonId = styled.p`
    font-size: 40px;
    color: ${({ theme }) => theme.transparentText};
    font-weight: 500;
    margin: 0;
    padding: 0;
`;
//  color: #d2d2d2;
export const PokemoName = styled.p`
    font-size: 22px;
  
    color: ${({ theme }) => theme.primaryText};
    margin: -15px 0 0;
    padding: 0;
`;