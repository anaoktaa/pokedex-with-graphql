const color = {
    grass : "#399494",
    fire: "#fb8224",
    water: "#8bc5cd",
    bug: "#7fdc4e",
    flying: "#8383bd",
    poison: "#945ab4",
    normal: "#a47c5a",
    electric: "#f6bd20",
    ground: "#cdb400",
    fairy: "#f33a4e",
    fighting: "#394162",
    rock: "#c5915d",
    steel : "#868686",
    ghost: "#8a95c3",
    psychic: "#698e62",
    ice: "#dedede",
    dragon: "#de5239",
    dark:  "#2f3336",
    unkown: "#b3a125",
    shadow: "#7b675b",
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
    transparentText: '#ded8cd2e',
    ...color
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;