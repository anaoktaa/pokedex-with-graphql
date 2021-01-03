import styled from '@emotion/styled';

export const BadgeContainer = styled.div`
    display: inline-block;
    padding: 2px 20px;
    font-size: 12px;
    color: #fff;
    background-color: ${({ theme, type }) => theme[type]};
    margin-right: 7px;
    border-radius: 20px;
    text-transform: capitalize;
    font-family: 'Heebo',sans-serif;
`;