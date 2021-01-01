import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext({
    myPokemonList : localStorage.getItem('myPokemonList')? localStorage.getItem('myPokemonList') : [] ,
    addMyPokemon : () => {},
    removeMyPokemonFromList: () => {}
});

const PokemonProvider = ({ children }) => {
    const [ myPokemonList, setMyPokemonList ] = useState(localStorage.getItem('myPokemonList')? JSON.parse(localStorage.getItem('myPokemonList')) : []);
    
    const addMyPokemon = (value) => {
        setMyPokemonList(oldData => [...oldData, value]);
    }

    const removeMyPokemonFromList = (value) => {
        setMyPokemonList(oldData => oldData.filter((item) => item.ownAliasName !== value))
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
                myPokemonList,
                addMyPokemon,
                removeMyPokemonFromList
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;