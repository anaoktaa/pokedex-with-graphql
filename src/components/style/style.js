const color = {
    grass : "#327f7f",
    fire: "#de6405",
    water: "#037a8a",
    bug: "#488628",
    flying: "#49499e",
    poison: "#6e378c",
    normal: "#775639",
    electric: "#c39107",
    ground: "#a79303",
    fairy: "#d81228",
    fighting: "#394162",
    rock: "#94683c",
    steel : "#6b6464",
    ghost: "#3b4b8c",
    psychic: "#3e6138",
    ice: "#156b61",
    dragon: "#b92b11",
    dark:  "#2f3336",
    unkown: "#736712",
    shadow: "#5f4f46",
    badge: "#737475",
    danger: "#f33a4e",
    info: "#6c6ce5",
    success: "#44d7b6",
    warning: "#ffd05c"

}

const themeLight = {
    background: '#fff',
    secondaryBackground: '#fff',
    primaryText: '#2e2d3c',
    secondaryText: '#3a384c',
    transparentText: '#373558d6',
    ...color
};

const themeDark = {
    background: '#2e2d3c',
    secondaryBackground: '#3a384c',
    primaryText: '#fff',
    secondaryText: '#f5f5f5',
    transparentText: '#b8b9dc',
    ...color
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;