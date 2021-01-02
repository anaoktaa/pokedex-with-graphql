import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
    height: ${(props) => props.hiddenMenu? '70px' : '160px'};
    border-bottom: 1px solid #ffffff36;
    transition: all .8s;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #2e2d3c;
    color: #efefef;
    font-family: 'Baloo Bhai 2', cursive;
    padding: 0 20px;
  
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
    color: #efefef;
`;

export const HeaderDropdownMenu = styled.ul`
    list-style-type: none;
    margin: 0 0 10px;
    padding: 0;
    text-align: left;
    
    li {
        margin-bottom: 8px;
        font-size: 12px;
    }
`;

