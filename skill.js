const main=document.querySelector(".main-container")
let colors = [
    "#F44336", // Red
    "#E91E63", // Pink
    "#9C27B0", // Purple
    "#673AB7", // Deep Purple
    "#3F51B5", // Indigo
    "#2196F3", // Blue
    "#03A9F4", // Light Blue
    "#00BCD4", // Cyan
    "#009688", // Teal
    "#4CAF50", // Green
    "#8BC34A", // Light Green
    "#CDDC39", // Lime
    "#FFEB3B", // Yellow
    "#FFC107", // Amber
    "#FF9800", // Orange
    "#FF5722"  // Deep Orange
];
let rgb =[
    "#E91E63",
    "#009688",
    "#FF5722",
    "#FFC107",
    "#CDDC39",

]

let randomColor = colors[Math.floor(Math.random() * colors.length)];
let randomColo = rgb[Math.floor(Math.random()  * rgb.length)];

main.style.background=` ${randomColor}  `;