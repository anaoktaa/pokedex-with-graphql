import React from  'react-router';
import { useQuery } from '@apollo/client';

import { GET_POKEMONS } from '../../graphql/graphql';

import PokemonItem from '../../components/pokemon-card/pokemon-item.component';

import './pokemon-list.styles.css';

const PokemonList = ({ history }) => {
 
    const limit = 10;
    const { loading, data, error, fetchMore  } = useQuery(GET_POKEMONS, {
        variables: {
            limit,
            offset: 0
        },
    });


    if (loading) return 'Loading...';
    if (error) return `Errro ${error}`;

    return (
        <div className='pokemon-list-container'>
            {
                !data.pokemons.results? null : data.pokemons.results.map((pokemon) => (
                    <PokemonItem
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        history={history}
                    />
                ))
            }
            <button
                onClick={() => {
                    const url = new URL(data.pokemons.next);
                    const offset = url.searchParams.get("offset");
                    if (fetchMore) {
                        fetchMore({
                            variables: { limit: 10, offset: Number(offset) },
                            updateQuery: (prevResult, { fetchMoreResult }) => {
                                fetchMoreResult.pokemons.results = [
                                    ...prevResult.pokemons.results,
                                    ...fetchMoreResult.pokemons.results
                                ];
                              return fetchMoreResult;
                            }
                        });
                    }
                }}
            >
                More
            </button>
        </div>
    )
}

export default PokemonList;