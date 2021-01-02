import React from  'react';
import { Switch, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';

import PokemonList from './pages/pokemon-list/pokemon-list.component';
import PokemonDetail from './pages/pokemon-detail/pokemon-detail.component';
import MyPokemonList from './pages/my-pokemon-list/my-pokemon-list.component';
import Header from './components/header/header.component';

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <div className='app-content-container'>
                <Switch>
                    <Route exact path='/' component={PokemonList}/>
                    <Route path='/pokemon-detail/:pokemonId' component={PokemonDetail} />
                    <Route exact path='/my-pokemon-list' component={MyPokemonList}/>
                </Switch>
            </div>
            
        </div>

    );
}

export default withRouter(App);