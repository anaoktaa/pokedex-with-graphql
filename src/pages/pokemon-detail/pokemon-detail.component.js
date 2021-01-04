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
import Loading from '../../components/loading/loading.component';
import TextField from '../../components/text-field/text-field.component'
import { changeIdDigit } from '../../utils/utils';
import { PokemonContext } from '../../context/pokemon.context';
import { PokemonDetailContainer, PokemonShortDetail, PokemonName,
         PokemonId, PokeImageContainer, HeightandWeight,DetailPanelContainer,
         CatchButtonContainer, PokeDetailGrid } from './pokemon-detail.styled';

import pokeball from '../../assets/ball.png';
import './pokemon-detail.styles.css';

const PokemonDetail = ({ match: { params: { pokeName } } }) => {
    const [ showBottomModal, setShowBottomModal ] = useState(false);
    const [ pokemonName, setPokemonName ] = useState(''); 
    const [ throwBall, showThrowBall ] = useState(false);
    const [ caughtMsg, setSuccessCaught ] = useState('');
    const [ errName, setErrName ] = useState(null); 
    const { addMyPokemon, myPokemonList } = useContext(PokemonContext);

    const { loading, data, error } = useQuery(GET_POKEMON, {
        variables: {
            name: pokeName
        },
    });

    const handleCatchPokemon = () => {
        setSuccessCaught('');
        const probability = GetRandomInteger(2);
        window.scrollTo(0, 0);
        showThrowBall(true);
        
        if (probability === 1) {
            setTimeout(() => {
                setShowBottomModal(true);
            }, 7000)
        }
        setTimeout(() => {
            if (probability === 1) {
                setSuccessCaught('Pokemon is caught !')
            }
            else {
                setSuccessCaught('Failed to catch Pokemon !')
            }
            showThrowBall(false);
        }, 7000)
    }   

    const handleChange = event => {
        const { value } = event.target;
        setErrName(null);
        setPokemonName(value);
    }

    const handleSavePokemon = (event) => {
        event.preventDefault();
        const regexName = (/^\w+$/g.test(pokemonName));

        if (!pokemonName || !regexName) {
            setErrName('Name is invalid !')
            return;
        }

        if (!myPokemonList) {
            addMyPokemon({
                ownAliasName: pokemonName,
                detail: {
                    pokemon: {
                        types: data.pokemon.types,
                        id: data.pokemon.id,
                        name: data.pokemon.name,
                        sprites: data.pokemon.sprites
                    }
                }
            });
        }
        else {
            const findDuplicateName = findPokemonName(myPokemonList, pokemonName);

            if (findDuplicateName) {
                setErrName('Name already taken')
                return;
            }  
            addMyPokemon({
                ownAliasName: pokemonName,
                detail: {
                    pokemon: {
                        types: data.pokemon.types,
                        id: data.pokemon.id,
                        name: data.pokemon.name,
                        sprites: data.pokemon.sprites
                    }
                }
            });
            showThrowBall(false);
            setSuccessCaught('Pokemon is added to your list');
        }       
    }

    useEffect(() => {
        const handleCloseBottomModal = () => {
            setPokemonName('');
            setShowBottomModal(false);
        }
        handleCloseBottomModal();
    }, [myPokemonList])

    if (loading) return <Loading/>;
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
            <PokeDetailGrid>
                <PokeImageContainer>
                    <p className={`msg ${caughtMsg? 'mgs-show' :''}`}>{caughtMsg}</p>
                    <img width='100%' height='100%' src={data.pokemon.sprites.front_default} alt=''/>
                    <HeightandWeight>Height : {data.pokemon.height} m and Weight : {data.pokemon.weight} kg</HeightandWeight>
                    <img className={`pokeball-catch ${throwBall?  'show-pokeball' : ''}`} src={pokeball} alt='' width='100%' height='100%'/>
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

            </PokeDetailGrid>
           
            <CatchButtonContainer>
                <Button disabled={throwBall} onClick={handleCatchPokemon} bgColor='#deb918' bgColorHover='#f1ca24' style={{width: '250px'}}>
                    <img src={pokeball} alt='' width='10%' height='10%'/> &nbsp;
                    Catch Pokemon
                </Button>
            </CatchButtonContainer>

            <BottomModal
                show={showBottomModal}
                // show={true}
            >
                <div className='save-pokemon-container'>
                    <form className='column-center' onSubmit={handleSavePokemon}>
                        <TextField 
                            labelText='Your pokemon nickname'
                            error={errName}
                            helperText={errName}
                            value={pokemonName} 
                            onChange={handleChange}
                            placeholder='Type your pokemon name'/>
                        <Button onSubmit={handleSavePokemon}  bgColor='#4c4c4c' bgColorHover='#7b7878' style={{width: '250px', marginTop: '20px'}}>
                            Save Pokemon
                        </Button>
                    </form>                  
                </div>
          
            </BottomModal>
        </PokemonDetailContainer>
    );
}

export default PokemonDetail;