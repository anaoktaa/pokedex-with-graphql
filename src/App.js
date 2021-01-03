import React, { useContext, useEffect } from  'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'

import PokemonList from './pages/pokemon-list/pokemon-list.component';
import PokemonDetail from './pages/pokemon-detail/pokemon-detail.component';
import MyPokemonList from './pages/my-pokemon-list/my-pokemon-list.component';
import Header from './components/header/header.component';

import { PokemonContext } from './context/pokemon.context';
import { AppWrapper, AppContentWrapper } from './App.styled';
import theme from './components/style/style';

import './App.css';
  
const App = () => {
    const { mode } = useContext(PokemonContext)
    const appliedTheme = theme(mode);

    useEffect(() => {
        const applyModeToBody = () => {
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundColor = appliedTheme.background;
        }
        applyModeToBody();
    },[mode]);

    return (
        <ThemeProvider theme={appliedTheme}>
            <AppWrapper>
                <Header/>
                <AppContentWrapper>
                    <Switch>
                        <Route exact path='/' component={PokemonList}/>
                        <Route path='/pokemon-detail/:pokeName' component={PokemonDetail} />
                        <Route exact path='/my-pokemon-list' component={MyPokemonList}/>
                    </Switch>
                </AppContentWrapper>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default withRouter(App);