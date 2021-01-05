import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { GET_POKEMON } from '../../graphql/graphql';
import PokemonDetail from './pokemon-detail.component';

const mocks = [
    {
        request: {
            query: GET_POKEMON,
            variables: {
                name: "butterfree"
            },
        },
        result:  {
           "data":{"pokemon":{"id":12,"name":"butterfree","abilities":[{"ability":{"url":"https://pokeapi.co/api/v2/ability/14/","name":"compound-eyes","__typename":"BaseName"},"__typename":"Ability"},{"ability":{"url":"https://pokeapi.co/api/v2/ability/110/","name":"tinted-lens","__typename":"BaseName"},"__typename":"Ability"}],"height":11,"weight":320,"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png","back_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png","back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png","back_shiny_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/12.png","front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png","front_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/12.png","front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png","front_shiny_female":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/12.png","__typename":"Sprite"},"moves":[{"move":{"name":"razor-wind","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"gust","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"whirlwind","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"take-down","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"double-edge","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"supersonic","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"psybeam","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"hyper-beam","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"mega-drain","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"solar-beam","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"poison-powder","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"stun-spore","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"sleep-powder","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"string-shot","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"toxic","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"confusion","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"psychic","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"rage","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"teleport","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"mimic","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"double-team","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"reflect","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"bide","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"swift","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"dream-eater","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"flash","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"psywave","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"rest","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"substitute","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"thief","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"nightmare","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"snore","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"curse","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"protect","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"giga-drain","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"endure","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"swagger","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"attract","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"sleep-talk","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"return","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"frustration","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"safeguard","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"sweet-scent","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"hidden-power","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"twister","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"rain-dance","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"sunny-day","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"psych-up","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"shadow-ball","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"facade","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"skill-swap","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"secret-power","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"air-cutter","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"silver-wind","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"signal-beam","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"aerial-ace","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"roost","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"natural-gift","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"tailwind","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"u-turn","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"air-slash","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"bug-buzz","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"energy-ball","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"giga-impact","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"defog","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"captivate","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"bug-bite","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"ominous-wind","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"venoshock","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"rage-powder","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"quiver-dance","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"round","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"acrobatics","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"struggle-bug","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"electroweb","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"confide","__typename":"BaseName"},"__typename":"Move"},{"move":{"name":"infestation","__typename":"BaseName"},"__typename":"Move"}],"stats":[{"base_stat":60,"effort":0,"stat":{"name":"hp","__typename":"BaseName"},"__typename":"Stat"},{"base_stat":45,"effort":0,"stat":{"name":"attack","__typename":"BaseName"},"__typename":"Stat"},{"base_stat":50,"effort":0,"stat":{"name":"defense","__typename":"BaseName"},"__typename":"Stat"},{"base_stat":90,"effort":2,"stat":{"name":"special-attack","__typename":"BaseName"},"__typename":"Stat"},{"base_stat":80,"effort":1,"stat":{"name":"special-defense","__typename":"BaseName"},"__typename":"Stat"},{"base_stat":70,"effort":0,"stat":{"name":"speed","__typename":"BaseName"},"__typename":"Stat"}],"types":[{"type":{"name":"bug","__typename":"BaseName"},"__typename":"Type"},{"type":{"name":"flying","__typename":"BaseName"},"__typename":"Type"}],"message":"","status":true,"__typename":"Pokemon"}}
        }
    }
];

const mocks_err = {
    request: {
        query: GET_POKEMON,
        variables: {
            name: "butterfree"
        },
    },
    error: new Error('An error occurred'),
};

const mocks_err_graphql = [
    {
        request: {
            query: GET_POKEMON,
            variables: {
                name: "butterfrii"
            },
        },
        result: { errors: [{ message: "" }] }
    }
];


const match = {
    isExact:  true,
    params: {
        pokeName: 'butterfree',
        path: '/pekomon-detail/:pokeName',
        url: 'pokemon-detail/butterfree'
    }
}

describe('Test the query component for <PokemonDetail/>', () => {
    it("should render without error", () => {
        render(
            <MockedProvider mocks={[]} >
                <PokemonDetail match={match}/>
            </MockedProvider>  
        )
    });
    it('should render loading state initially', () => {
        const { getByTestId } = render (
            <MockedProvider mocks={[]} >
                <PokemonDetail match={match}/>
            </MockedProvider>  
        )
        expect(getByTestId('loading-progress')).toBeInTheDocument();
    });
    it('render pokemon detail page', async () => {
        const { getByTestId, findByText } =  render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonDetail match={match}/>
            </MockedProvider>  
        );
        window.HTMLElement.prototype.scrollIntoView = function() {};
        expect(getByTestId('loading-progress')).toBeInTheDocument();

        //find text nama pokemon
        const pokeName = await findByText('butterfree');
        expect(pokeName).toBeInTheDocument();

        //find text type pokemon
        const pokeType = await findByText('bug');
        expect(pokeType).toBeInTheDocument();

        //find text tinggi pokemon
        const pokeHeight = await findByText(/11 m/i);
        expect(pokeHeight).toBeInTheDocument();

        //find text berat pokemon
        const pokeWeight = await findByText(/320 kg/i);
        expect(pokeWeight).toBeInTheDocument();

        //find pokemon ability (HP)
        const pokeStatVal = await findByText(/90/);
        expect(pokeStatVal).toBeInTheDocument();

    });
    it("should query the pokemon detail and render error message when error network", async () => {
        const { findByText } = render (
            <MockedProvider mocks={[mocks_err]} addTypename={false}>
                <PokemonDetail match={match}/>
            </MockedProvider>  
        )
        const pokeName = await findByText(/error/i);
        expect(pokeName).toBeInTheDocument();
    });

    it("should query the pokemondetail and render error message when graphql return error", async () => {      
        const { findByText } = render (
            <MockedProvider mocks={mocks_err_graphql} addTypename={false}>
                <PokemonDetail match={match}/>
            </MockedProvider>  
        )
        const pokeName = await findByText(/error/i);
        expect(pokeName).toBeInTheDocument();
    })
});

