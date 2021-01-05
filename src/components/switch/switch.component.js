import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { PokemonContext } from '../../context/pokemon.context';

import './switch.styles.css';

const Switch = ({ ...props }) => {
    const { mode, setModeApp } = useContext(PokemonContext);
    return (
        <div {...props} className={`${mode === 'light' ? 'light' : ''} slider`} onClick={setModeApp}>
            <div className={` moon ${mode === 'dark'? 'moon-active' : ''}`}>
                <FontAwesomeIcon style={{padding: '0 7px', color: '#ffdc33', fontSize: '20px'}} icon={faMoon} />
            </div>
            <div className={`sun ${mode === 'light'? 'sun-active' : ''}`}>
            <FontAwesomeIcon style={{padding: '0 7px', color: '#ffbe07', fontSize: '20px'}} icon={faSun} />
            </div>
            
            <div className={`${mode === 'light'? 'light-mode' : ''} round`}></div>
        </div>
    )
};

export default Switch;