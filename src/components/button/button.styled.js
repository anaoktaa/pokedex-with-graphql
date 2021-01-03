import styled from '@emotion/styled';
import { css } from '@emotion/react'

export const CustomButton = styled.button`
    padding: 10px 25px;
    border-radius: 30px;
    border: none;
    color: white;
    background-color: ${({ theme, bgColor }) => theme[bgColor]? theme[bgColor] : bgColor };
    font-family: 'Heebo', sans-serif;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    background-position: center;
    transition: background 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }

    &:hover {
        background: ${({ theme, bgColor }) => theme[bgColor]? theme[bgColor] : bgColor } radial-gradient(circle, transparent 1%, ${({ bgColorHover }) => bgColorHover} 1%) center/15000%;
    }

    &:disabled {
        background-color: #b7b7b7;
        cursor: not-allowed;
    }
    &:active {
        background-color: ${({ theme, bgColor }) => theme[bgColor]? theme[bgColor] : bgColor };
        background-size: 100%;
        transition: background 0s;
    }
`;