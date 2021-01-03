import React from  'react-router';
import { useQuery } from '@apollo/client';

import { GET_POKEMONS } from '../../graphql/graphql';

import PokemonItem from '../../components/pokemon-card/pokemon-item.component';
import Button from '../../components/button/button.component';

import './pokemon-list.styles.css';

const PokemonList = ({ history }) => {
 
    const limit = 12;
    const { loading, data, error, fetchMore  } = useQuery(GET_POKEMONS, {
        variables: {
            limit,
            offset: 0
        },
    });

    const handleDetail = (data) => {
        history.push(`/pokemon-detail/${data.name}`)
        console.log("data", data)
    }


    if (loading) return 'Loading...';
    if (error) return `Errro ${error}`;

    return (
        <div className='poke-wrapper'>
            <div className='pokemon-list-container'>
                {
                    !data.pokemons.results? null : data.pokemons.results.map((pokemon) => (
                        <PokemonItem
                            data={pokemon}
                            handleOnClick={handleDetail}
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            history={history}
                            showBadgeCount={true}
                        />
                    ))
                }
            </div>
            {
                fetchMore?
                    <Button 
                        bgColor='#8e8e8e'
                        bgColorHover='#bdbbbb'
                        style={{width: '250px', marginTop: '20px'}}
                        onClick={() => {
                            const url = new URL(data.pokemons.next);
                            const offset = url.searchParams.get("offset");
                            if (fetchMore) {
                                fetchMore({
                                    variables: { limit: limit, offset: Number(offset) },
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
                    Show More
                </Button>
                :
                null
            }
        </div>

    )
}

export default PokemonList;