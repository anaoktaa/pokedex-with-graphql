import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, HeaderTitle, HeaderWrapper, HeaderDropdownMenu,
         LinkMenu, RightMenuContainer } from './header.styled';
import Switch from '../switch/switch.component';
import './header.styles.css';

const Header = () => {
    const [ hiddenMenu, setHiddenMenu ] = useState(true);

    const handleToggleMenu = () => {
        setHiddenMenu(!hiddenMenu);
    }

    const handleCloseHeader = () => {
        setHiddenMenu(true);
    }

    return (
        <HeaderContainer hiddenMenu={hiddenMenu}>
            <HeaderWrapper>
                <HeaderTitle>Pokédex</HeaderTitle>
                <div className='icon-header-container'>
                    <div className={`icon-bar-show ${!hiddenMenu? 'icon-bar-hidden' : ''}`}>
                        <i onClick={handleToggleMenu} style={style.icon} class="fas fa-bars"></i>
                    </div>
                  <div className={`icon-close ${!hiddenMenu? 'icon-close-show' : ''}`}>
                    <i onClick={handleToggleMenu} style={style.icon} class="fas fa-times"></i>
                  </div>
                </div>
                <RightMenuContainer>
                    <LinkMenu><Link to='/'>Pokemon List</Link></LinkMenu>
                    <LinkMenu><Link to='/my-pokemon-list'>My Pokemons</Link></LinkMenu>
                    <Switch/>
                </RightMenuContainer>
            </HeaderWrapper>
            <HeaderDropdownMenu>
                <li><LinkMenu><Link onClick={handleCloseHeader} to='/'>Pokemon List</Link></LinkMenu></li>
                <li><LinkMenu><Link onClick={handleCloseHeader} to='/my-pokemon-list'>My Pokemons</Link></LinkMenu></li>
                <Switch/>
            </HeaderDropdownMenu>
      
        </HeaderContainer>
    )
}

const style = {
    icon: {
        fontSize: '22px',
        cursor: 'pointer'
    }
}
export default Header;