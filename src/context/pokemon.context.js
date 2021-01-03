import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext({
    mode: 'dark',
    hiddenMenu: true,
    myPokemonList : localStorage.getItem('myPokemonList')? localStorage.getItem('myPokemonList') : {} ,
    addMyPokemon : () => {},
    removeMyPokemonFromList: () => {},
    setModeApp: () => {},
    setHiddenMenu: () => {},

});

const PokemonProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');
    const [ hiddenMenu, setToggleHiddenMenu ] = useState(true);
    const [ myPokemonList, setMyPokemonList ] = useState(localStorage.getItem('myPokemonList')? JSON.parse(localStorage.getItem('myPokemonList')) : {});
    
    const addMyPokemon = (value) => {
        setMyPokemonList(prevState => ({
            ...prevState,
            [value.detail.pokemon.name]: {
                ...value.detail.pokemon,
                nameList: !prevState[value.detail.pokemon.name]? [value.ownAliasName] : [...prevState[value.detail.pokemon.name].nameList, value.ownAliasName]
            }
        }))
    }

    const removeMyPokemonFromList = (value) => {
        setMyPokemonList(prevState => ({
            ...prevState,
            [value.detail.pokemon.name]: {
                ...value.detail.pokemon,
                nameList: prevState[value.detail.pokemon.name].nameList.filter((item) => item !== value.ownAliasName)
            }
        }))

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
            const x = {...myPokemonList}
            const arr = x? Object.keys(x).map(key => x[key]) : [];
            let newArr = {};
            arr.forEach((item) => {
                if (item.nameList.length !== 0) {
                    newArr = {
                        ...newArr,
                        [item.name]: item
                    }
                }
            })
            // setMyPokemonList(newArr);
            localStorage.setItem('myPokemonList', JSON.stringify(newArr))
        }
        storeDataToLocalStorage();
    }, [myPokemonList, setMyPokemonList])

 
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