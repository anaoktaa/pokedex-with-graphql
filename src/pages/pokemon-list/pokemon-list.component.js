import React from  'react-router';
import { useQuery } from '@apollo/client';

import { GET_POKEMONS } from '../../graphql/graphql';
import PokemonCard from '../../components/pokemon-card/pokemon-card.component';

import './pokemon-list.styles.css';

const PokemonList = ({ history }) => {
 
    const limit = 3
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
        <div className='pokemon-list-container'>
            {
                !data.pokemons.results? null : data.pokemons.results.map((pokemonItem) => (
                    <div className='pokemon-item-container' onClick={() => handlePokemonDetail(pokemonItem)} key={pokemonItem.id}>
                        <div className='image-pokemon-container'>
                            <img className='pokemon-sprites' src={pokemonItem.image} alt=''/>
                        </div>
                        <div className='pokemon-id-overlay'>#{pokemonItem.id < 10? '000'+pokemonItem.id  : pokemonItem.id < 100? '00' + pokemonItem.id : pokemonItem.id < 1000? '0' + pokemonItem.id: pokemonItem.id}</div>
                        <div className='pokemon-name-container'>{pokemonItem.name}</div>
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

export default PokemonList;