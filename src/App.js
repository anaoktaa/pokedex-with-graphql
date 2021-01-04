import React, { useContext, useEffect, lazy, Suspense } from  'react';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import Header from './components/header/header.component';
import { PokemonContext } from './context/pokemon.context';
import { AppWrapper, AppContentWrapper } from './App.styled';

import theme from './components/style/style';
import './App.css';

const PokemonListPage = lazy(() => import('./pages/pokemon-list/pokemon-list.component'));
const PokemonDetailPage = lazy(() => import('./pages/pokemon-detail/pokemon-detail.component'));
const MyPokemonListPage = lazy(() => import('./pages/my-pokemon-list/my-pokemon-list.component'));
  
const App = () => {
    const { mode } = useContext(PokemonContext)
    const appliedTheme = theme(mode);

    useEffect(() => {
        const applyModeToBody = () => {
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundColor = appliedTheme.background;
        }
        applyModeToBody();
    },[mode, appliedTheme.background]);

    return (
        <ThemeProvider theme={appliedTheme}>
            <AppWrapper>
                <Header/>
                <AppContentWrapper>
                    <Switch>
                        <Suspense fallback={<div></div>}>
                            <Route exact path='/' component={PokemonListPage}/>
                            <Route path='/pokemon-detail/:pokeName' component={PokemonDetailPage} />
                            <Route exact path='/my-pokemon-list' component={MyPokemonListPage}/>
                        </Suspense>
                    </Switch>
                </AppContentWrapper>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default withRouter(App);