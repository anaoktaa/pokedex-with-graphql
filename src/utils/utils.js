export const GetRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const findPokemonName = (pokemonList, name) => {
    return pokemonList.find(item => item.ownAliasName === name);
}

export const changeIdDigit = (id) => {
    const fullId = id < 10? '000'+id : id < 100? '00' + id : id < 1000? '0' + id: id;
    return fullId;
}

export const statColor = (stat) => {
    let color = null;
    if (stat === 'hp' || stat === 'speed') {
        color = 'danger';
    }
    else if (stat === 'attack') {
        color = 'warning';
    }
    else if (stat === 'defense' || stat === 'special-defense') {
        color = 'info'
    }
    else if (stat === 'special-attack') {
        color='success'
    }

    return color;
}

