let btn1 = document.querySelector("#img1");
let btn2 = document.querySelector(".container");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let contact = document.querySelector(".contact");
function cop() {
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
    
    btn1.style.border= `solid ${randomColor} 10px `;
    // btn2.style.background = `linear-gradient(${randomColor}, ${randomColo})`;
    home.style.border= `solid ${randomColo} 5px `
    about.style.border= `solid ${randomColor} 5px `
    services.style.border= `solid ${randomColor} 5px `
    contact.style.border= `solid ${randomColo} 5px `

}