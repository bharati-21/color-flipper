const btnChangeColor = document.querySelector('.btn-change-color');
const colorCode = document.querySelector('.color-code');
const btnRgb = document.querySelector('.btn-rgb');
const btnHex = document.querySelector('.btn-hex');

let hex = false;


let currentBgColor = '#FFC2C3';
colorCode.textContent = currentBgColor;

btnChangeColor.addEventListener('click', changeBgColor);
// btnHex.addEventListener('click',(e) => {
//     e.preventDefault();
//     hex = true;
// });

// btnRgb.addEventListener('click', (e)=> {
//     e.preventDefault();
//     hex = false;
// })


function changeBgColor(e) {
    e.preventDefault();
    
    document.body.style.backgroundColor = currentBgColor; 

    currentBgColor = generateRandomColors();
    colorCode.textContent = currentBgColor;
    console.log((Math.floor(Math.random() * 0xffffff) + 1).toString(16));
}

function generateRandomColors() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return "rgb("+r+", "+g+", "+b+")";
}


