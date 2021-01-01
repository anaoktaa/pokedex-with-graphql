import React from  'react';
import { Switch, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';

import PokemonContainer from './pages/pokemon-list/pokemon-list.container';
import PokemonDetail from './pages/pokemon-detail/pokemon-detail.component';
import MyPokemonList from './pages/my-pokemon-list/my-pokemon-list.component';

const App = () => {
    return (
        <div>
            <Link to='/my-pokemon-list' >My Pokemon</Link>
            <Switch>
                <Route exact path='/' component={PokemonContainer}/>
                <Route path='/pokemon-detail/:pokemonId' component={PokemonDetail} />
                <Route exact path='/my-pokemon-list' component={MyPokemonList}/>
            </Switch>
        </div>

    );
}

export default withRouter(App);