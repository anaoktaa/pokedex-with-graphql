import React from 'react';
import { render, cleanup, fireEvent  } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { GET_POKEMONS } from '../../graphql/graphql';
import PokemonList from './pokemon-list.component';

afterEach(cleanup);

const mocks = [
    {
        request: {
            query: GET_POKEMONS,
            variables: {
                limit: 12,
                offset: 0
            },
        },
        result:  {
            "data":{"pokemons":{"count":1118,"next":"https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12","previous":null,"results":[{"url":"https://pokeapi.co/api/v2/pokemon/1/","name":"bulbasaur","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","id":1,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/2/","name":"ivysaur","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png","id":2,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/3/","name":"venusaur","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png","id":3,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/4/","name":"charmander","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png","id":4,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/5/","name":"charmeleon","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png","id":5,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/6/","name":"charizard","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png","id":6,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/7/","name":"squirtle","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","id":7,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/8/","name":"wartortle","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png","id":8,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/9/","name":"blastoise","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png","id":9,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/10/","name":"caterpie","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png","id":10,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/11/","name":"metapod","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png","id":11,"__typename":"PokemonItem"},{"url":"https://pokeapi.co/api/v2/pokemon/12/","name":"butterfree","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png","id":12,"__typename":"PokemonItem"}],"__typename":"PokemonList"}}
        }
    }
];

const mocks_err = {
    request: {
        query: GET_POKEMONS,
        variables: {
            limit: 12,
            offset: 0
        },
    },
    error: new Error('An error occurred'),
};

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Test the query component for <PokemonList/>', () => {
    it("should render without error", () => {
        render(
            <MockedProvider mocks={[]} >
                <PokemonList/>
            </MockedProvider>  
        )
    });
    it('should render loading state initially', () => {
        const { getByTestId } = render (
            <MockedProvider mocks={[]} >
                <PokemonList/>
            </MockedProvider>  
        )
        expect(getByTestId('loading-progress')).toBeInTheDocument();
    });
    it('render pokemon list page', async() => {
        const { getByTestId, findByText } =  render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonList history={history} />
            </MockedProvider>  
          
        );
        expect(getByTestId('loading-progress')).toBeInTheDocument();
        const pokeName = await findByText('butterfree');
        expect(pokeName).toBeInTheDocument();

        const pokeName2 = await getByTestId('pokemon-list-page-butterfree');
        expect(pokeName2).toBeInTheDocument();

        fireEvent.click(pokeName2);
        expect(mockHistoryPush).toHaveBeenCalledWith('/pokemon-detail/butterfree');

    });
    it("should query the pokemons and render error message", async () => {
        const { findByText } = render (
            <MockedProvider mocks={[mocks_err]} addTypename={false}>
                <PokemonList/>
            </MockedProvider>  
        )
        const pokeName = await findByText('Error(Error: An error occurred)');
        expect(pokeName).toBeInTheDocument();
    });
});

