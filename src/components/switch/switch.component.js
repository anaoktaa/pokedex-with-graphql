import React, { useContext } from 'react';

import { PokemonContext } from '../../context/pokemon.context';

import './switch.styles.css';

const Switch = ({ ...props }) => {
    const { mode, setModeApp } = useContext(PokemonContext);
    return (
        <div {...props} className={`${mode === 'light' ? 'light' : ''} slider`} onClick={setModeApp}>
            <div className={` moon ${mode === 'dark'? 'moon-active' : ''}`}>
                <i class="fas fa-moon" style={{padding: '0 7px', color: '#ffdc33', fontSize: '20px'}}></i>
            </div>
            <div className={`sun ${mode === 'light'? 'sun-active' : ''}`}>
                <i class="fas fa-sun"  style={{padding: '0 7px', color: '#ffbe07', fontSize: '20px'}}></i>
            </div>
            
            <div className={`${mode === 'light'? 'light-mode' : ''} round`}></div>
        </div>
    )
};

export default Switch;