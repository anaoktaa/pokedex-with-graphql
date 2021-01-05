export const GetRandomInteger = (max) => {
    if (isNaN(max)) return ''; 
    return Math.floor(Math.random() * Math.floor(max));
}

export const findPokemonName = (pokemonList, name) => {
    let find = false;
    const arrPokeList = pokemonList? Object.keys(pokemonList).map(key => pokemonList[key]) : [];
    arrPokeList.forEach((item) => {
        item.nameList.forEach((itemList) =>{
            if (itemList.toLowerCase() === name.toLowerCase()){
                find = find || true
            }
        })
    });
    return find;
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

