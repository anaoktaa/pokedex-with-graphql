import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
    height: ${(props) => props.hiddenMenu? '70px' : '200px'};
    border-bottom: 1px solid #4a3e5636;
    transition: all .8s;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 103;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    font-family: 'Baloo Bhai 2', cursive;
    padding: 0 20px;

    @media screen and (min-width: 1024px) {
        padding: 0 50px;
        height: 70px;
    }
  
`;

export const HeaderWrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.p`
    font-size: 32px;
    margin: 0;
    padding: 0;
    font-weight: 800;
    color: ${({ theme }) => theme.primaryText};

    @media screen and (min-width: 768px) {
        font-size: 40px;
    }

    @media screen and (min-width: 768px) {
        font-size: 45px;
    }
`;

export const HeaderDropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinkMenu = styled.span`
    margin-bottom: 13px;
    a {
        color: ${({ theme }) => theme.primaryText};
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        transition: .5s;
        color: ${({ theme }) => theme.primaryText};
        font-family: 'Heebo',sans-serif;
    }

    a:hover {
        color: #787879;
    }

    @media screen and (min-width: 1024px) {
        margin-right: 33px;
        margin-bottom: 0;
    }
`;

export const RightMenuContainer = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
    }
`;  
