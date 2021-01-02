import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, HeaderTitle, HeaderWrapper, HeaderDropdownMenu } from './header.styled';
import './header.styles.css';

const Header = () => {
    const [ hiddenMenu, setHiddenMenu ] = useState(true);

    const handleToggleMenu = () => {
        setHiddenMenu(!hiddenMenu);
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
            </HeaderWrapper>
            <HeaderDropdownMenu>
                <li><Link className={`header-menu-dropdown`} to='#'>Home</Link></li>
                <li><Link className={`header-menu-dropdown`} to='#'>My Pokemons</Link></li>
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