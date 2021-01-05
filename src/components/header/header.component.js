import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon onClick={handleToggleMenu} style={style.icon} icon={faBars} />
                    </div>
                  <div className={`icon-close ${!hiddenMenu? 'icon-close-show' : ''}`}>
                    <FontAwesomeIcon onClick={handleToggleMenu} style={style.icon} icon={faTimes} />
                  </div>
                </div>
                <RightMenuContainer>
                    <LinkMenu><Link to='/'>Pokemon List</Link></LinkMenu>
                    <LinkMenu><Link to='/my-pokemon-list'>My Pokemons</Link></LinkMenu>
                    <Switch/>
                </RightMenuContainer>
            </HeaderWrapper>
            <HeaderDropdownMenu>
                <LinkMenu><Link onClick={handleCloseHeader} to='/'>Pokemon List</Link></LinkMenu>
                <LinkMenu><Link onClick={handleCloseHeader} to='/my-pokemon-list'>My Pokemons</Link></LinkMenu>
                <Switch/>
            </HeaderDropdownMenu>
         
        </HeaderContainer>
    )
}

const style = {
    icon: {
        fontSize: '22px',
        cursor: 'pointer',
    }
}
export default Header;