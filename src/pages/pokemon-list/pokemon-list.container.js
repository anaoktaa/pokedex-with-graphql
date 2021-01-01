import React from  'react-router';
import { useQuery } from '@apollo/client';

import { GET_POKEMONS } from '../../graphql/graphql';

import './pokemon-list.styles.css';

const PokemonListContainer = ({ history }) => {
 
    const limit = 10;
    const { loading, data, error, fetchMore  } = useQuery(GET_POKEMONS, {
        variables: {
            limit,
            offset: 0
        },
    });

    const handlePokemonDetail = (pokemonDetail) => {
       history.push(`/pokemon-detail/${pokemonDetail.name}`)
    }

    if (loading) return 'Loading...';
    if (error) return `Errro ${error}`;

    return (
        <div>
            {
                !data.pokemons.results? null : data.pokemons.results.map((pokemonItem) => (
                    <div onClick={() => handlePokemonDetail(pokemonItem)} className='pokemon-list-container' key={pokemonItem.id}>
                        <p>{pokemonItem.name}</p>
                        <img className='pokemon-sprites' src={pokemonItem.image} alt=''/>
                    </div>
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

export default PokemonListContainer;