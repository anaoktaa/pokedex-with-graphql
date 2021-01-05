import React from 'react';
import { render } from '@testing-library/react';

import MyPokemonList from './my-pokemon-list.component';
import { PokemonContext } from '../../context/pokemon.context';

describe('test my pokemon list page', () => {
    it('my pokemon list render no data', () => {
        const { getByText } =  render(
            <PokemonContext.Provider value={{
                myPokemonList: {}
            }}>
                <MyPokemonList>
                </MyPokemonList>
            </PokemonContext.Provider>
        );
        expect(getByText('No pokemons in here !')).toBeInTheDocument();
    })
    it('my pokemon list render data', () => {
        const { getByText } =  render(
            <PokemonContext.Provider value={{
                myPokemonList: {"butterfree":{"types":[{"__typename":"Type","type":{"__typename":"BaseName","name":"bug"}},{"__typename":"Type","type":{"__typename":"BaseName","name":"flying"}}],"id":12,"name":"butterfree","sprites":{"__typename":"Sprite","back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png","back_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png","back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png","back_shiny_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/12.png","front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png","front_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png","front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png","front_shiny_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/12.png"},"nameList":["kupukupu"]}}
            }}>
                <MyPokemonList>
                </MyPokemonList>
            </PokemonContext.Provider>
        );

        //menampilkan nama dan id my pokemon list
        expect(getByText('kupukupu')).toBeInTheDocument();
        expect(getByText(/0012/i)).toBeInTheDocument();
        expect(getByText('bug')).toBeInTheDocument();
    })
})