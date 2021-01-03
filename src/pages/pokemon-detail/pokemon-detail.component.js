import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_POKEMON } from '../../graphql/graphql';
import { GetRandomInteger, findPokemonName, statColor } from '../../utils/utils';

import BottomModal from '../../components/bottom-modal/bottom-modal.component';
import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';
import Badge from '../../components/badge/badge.component';
import PokemonAbilities from '../../components/pokemon-abilities/pokemon-abilities.component';
import Progress from '../../components/progress/progress.component';
import Button from '../../components/button/button.component';
import { changeIdDigit } from '../../utils/utils';
import { PokemonContext } from '../../context/pokemon.context';
import { PokemonDetailContainer, PokemonShortDetail, PokemonName,
         PokemonId, PokeImageContainer, HeightandWeight,DetailPanelContainer,
         CatchButtonContainer } from './pokemon-detail.styled';

import pokeball from '../../assets/ball.png';
import './pokemon-detail.styles.css';

const PokemonDetail = ({ match: { params: { pokeName } } }) => {
    const [ showBottomModal, setShowBottomModal ] = useState(false);
    const [ pokemonName, setPokemonName ] = useState(''); 
    const { addMyPokemon, myPokemonList } = useContext(PokemonContext);

    const { loading, data, error } = useQuery(GET_POKEMON, {
        variables: {
            name: pokeName
        },
    });

    const handleCatchPokemon = () => {
        const probability = GetRandomInteger(2);
        if (probability === 1) {
            setTimeout(() => {
                setShowBottomModal(true);
            }, 1000)
        }
    }   

    const handleChange = event => {
        const { value } = event.target;
        setPokemonName(value);
    }

    const handleSavePokemon = () => {
        if (!pokemonName) return;
        const findDuplicateName = findPokemonName(myPokemonList, pokemonName);
        if (findDuplicateName) {
            alert('Name already taken');
            return;
        }  
        addMyPokemon({
            ownAliasName: pokemonName,
            detail: data
        });
    }

    useEffect(() => {
        const handleCloseBottomModal = () => {
            setPokemonName('');
            setShowBottomModal(false);
        }
        handleCloseBottomModal();
    }, [myPokemonList])

    if (loading) return 'Loading...';
    if (error) return `Error :  ${error}`;

    return (
        <PokemonDetailContainer>   
            <PokemonShortDetail>
                <div>
                    <PokemonName>
                        {data.pokemon.name}
                    </PokemonName>
                    {
                        data.pokemon.types.map((item) => (
                            <Badge key={item.type.name} type={item.type.name}>{item.type.name}</Badge>
                        ))
                    }
                </div>
                <PokemonId>
                    #{changeIdDigit(data.pokemon.id)}
                </PokemonId>
            </PokemonShortDetail>

            <PokeImageContainer>
                <img width='100%' height='100%' src={data.pokemon.sprites.front_default} alt=''/>
                <HeightandWeight>Height : {data.pokemon.height} m and Weight : {data.pokemon.weight} kg</HeightandWeight>
            </PokeImageContainer>

            <CustomTabsWrapper style={{marginTop: '20px'}}>
                <CustomTabPanel data-key='statistic' title='Statistics'>
                    <DetailPanelContainer>
                        {
                            data.pokemon.stats.map((item) => (
                                <Progress value={item.base_stat} color={statColor(item.stat.name)} name={item.stat.name} />
                            ))
                        }
                      
                    </DetailPanelContainer>
                </CustomTabPanel>
                <CustomTabPanel data-key='abilities' title='Abilities'>
                   <DetailPanelContainer>
                        {
                            data.pokemon.abilities.map((item, index) => (
                                <PokemonAbilities key={index} ability={item.ability.name}/>
                            ))
                        }
                   </DetailPanelContainer>
                </CustomTabPanel>

                <CustomTabPanel data-key='moves' title='Moves'>
                    <DetailPanelContainer>
                        {data.pokemon.moves.map(({ move: {name } }) => {
                         
                            return (
                                <Badge type='badge'>{name}</Badge>
                            )
                        })}
                    </DetailPanelContainer>
                </CustomTabPanel>
            </CustomTabsWrapper>

            <CatchButtonContainer>
                <Button onClick={handleCatchPokemon} bgColor='#ffc509' bgColorHover='#e4bb35' style={{width: '250px'}}>
                    <img src={pokeball} alt='' width='10%' height='10%'/> &nbsp;
                    Catch Pokemon
                </Button>
            </CatchButtonContainer>

            {/* <BottomModal
                show={showBottomModal}
            >
                <div className='save-pokemon-container'>
                    <input value={pokemonName} onChange={handleChange} placeholder='Type your pokemon name'/>
                    <button onClick={handleSavePokemon}>Save Your Pokemon</button>
                </div>
          
            </BottomModal> */}
        </PokemonDetailContainer>
    );
}

export default PokemonDetail;