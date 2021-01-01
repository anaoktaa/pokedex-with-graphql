export const GetRandomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const findPokemonName = (pokemonList, name) => {
    return pokemonList.find(item => item.ownAliasName === name);
}
