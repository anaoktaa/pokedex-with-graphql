import React from  'react-router';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { GET_POKEMONS } from '../../graphql/graphql';

import PokemonItem from '../../components/pokemon-item/pokemon-item.component';
import Button from '../../components/button/button.component';
import Loading from '../../components/loading/loading.component';

import './pokemon-list.styles.css';

const PokemonList = () => {
    const history = useHistory();
    console.log("ISI HISTOR", history);
    const limit = 12;
    const { loading, data, error, fetchMore  } = useQuery(GET_POKEMONS, {
        variables: {
            limit,
            offset: 0
        },
    });

    const handleDetail = (data) => {
        console.log("maju teruss cuyy");
        history.push(`/pokemon-detail/${data.name}`)
    }

    if (loading) return <Loading/>;
    if (error) return `Error(${error})`;

    return (
        <div className='poke-wrapper'>
            <div className='pokemon-list-container'>
                {
                    !data.pokemons.results? null : data.pokemons.results.map((pokemon) => (
                        <PokemonItem
                            dataTestId={`pokemon-list-page-${pokemon.name}`}
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
                        bgColor='#574d69'
                        bgColorHover='#73668a'
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