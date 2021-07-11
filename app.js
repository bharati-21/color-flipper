const btnChangeColor = document.querySelector('.btn-change-color');
const nextColor = document.querySelector('.next-color');
const btnRgb = document.querySelector('.btn-rgb');
const btnHex = document.querySelector('.btn-hex');

const currentColorCode = document.querySelector('.current-color-code');
const currentColor = document.querySelector('.current-color');

let hex = false;


let nextBgColor = "#FFC2C3", nextBgCode = "RGB"; 
let currentBgColor = '#f4f4f4', currentBgCode = "RGB"; 

nextColor.textContent = nextBgColor;

currentColorCode.textContent = currentBgCode;
currentColor.textContent = currentBgColor;


btnChangeColor.addEventListener("click", changeBgColor);

btnHex.addEventListener('click',(e) => {
    e.preventDefault();
    hex = true;
});

btnRgb.addEventListener('click', (e)=> {
    e.preventDefault();
    hex = false;
});


function changeBgColor(e) {
    e.preventDefault();
    
    document.body.style.backgroundColor = nextBgColor; 

    currentColor.textContent = nextBgColor;
    currentColorCode.textContent = nextBgCode;

    nextBgColor = generateRandomColors();
    
    nextColor.textContent = nextBgColor;
    console.log();
}

function generateRandomColors() {
    if(!hex) {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;

        nextBgCode = "RGB";
        return "rgb("+r+", "+g+", "+b+")";
    }
    const hexColor = (Math.floor(Math.random() * 0xffffff) + 1).toString(16);

    nextBgCode = "HEX";
    return "#"+hexColor;
}


