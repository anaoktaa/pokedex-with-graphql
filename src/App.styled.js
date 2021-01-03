import styled from '@emotion/styled';

export const AppWrapper = styled.div`
    text-align: left;
    height: 100%;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    min-width: 320px;
`;  

export const AppContentWrapper = styled.div`
    margin-top: 70px;
    padding: 20px 0 80px;
`;