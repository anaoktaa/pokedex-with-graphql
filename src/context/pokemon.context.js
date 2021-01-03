import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext({
    mode: 'dark',
    hiddenMenu: true,
    myPokemonList : localStorage.getItem('myPokemonList')? localStorage.getItem('myPokemonList') : [] ,
    addMyPokemon : () => {},
    removeMyPokemonFromList: () => {},
    setModeApp: () => {},
    setHiddenMenu: () => {},

});

const PokemonProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');
    const [ hiddenMenu, setToggleHiddenMenu ] = useState(true);
    const [ myPokemonList, setMyPokemonList ] = useState(localStorage.getItem('myPokemonList')? JSON.parse(localStorage.getItem('myPokemonList')) : []);
    
    const addMyPokemon = (value) => {
        setMyPokemonList(oldData => [...oldData, value]);
    }

    const removeMyPokemonFromList = (value) => {
        setMyPokemonList(oldData => oldData.filter((item) => item.ownAliasName !== value))
    }

    const setHiddenMenu = () => {
        setToggleHiddenMenu(!hiddenMenu);
    }

    const setModeApp = () => {
        if (mode === 'light') {
            setMode('dark');
        }
        else {
            setMode('light');
        }
    }

    useEffect(() => {
        const storeDataToLocalStorage = () => {
            localStorage.setItem('myPokemonList', JSON.stringify(myPokemonList))
        }
        storeDataToLocalStorage();
    }, [myPokemonList])

 
    return (
        <PokemonContext.Provider
            value={{
                mode,
                myPokemonList,
                hiddenMenu,
                addMyPokemon,
                removeMyPokemonFromList,
                setModeApp,
                setHiddenMenu
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;