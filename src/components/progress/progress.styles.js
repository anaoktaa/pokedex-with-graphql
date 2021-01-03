import styled from '@emotion/styled';

export const ProgressContainer = styled.div`
    height: 8px;
    border-radius: 10px;
    width: 100%;
    background-color: #e0e0e0f2;
    position: relative;
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        text-transform: capitalize;
        font-family: 'Heebo',sans-serif;
    }
`;


export const ProgressBarValue = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: ${({ bgColor, theme }) => theme[bgColor]};
    left: 0;
    width: ${({ valueWidth }) => valueWidth+'%'};
`;

