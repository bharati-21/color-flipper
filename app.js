const btnChangeColor = document.querySelector('.btn-change-color');
const colorCode = document.querySelector('.color-code');
const btnRgb = document.querySelector('.btn-rgb');
const btnHex = document.querySelector('.btn-hex');

let hex = false;


let currentBgColor = '#FFC2C3';
colorCode.textContent = currentBgColor;

btnChangeColor.addEventListener('click', changeBgColor);
btnHex.addEventListener('click',(e) => {
    e.preventDefault();
    hex = true;
});

btnRgb.addEventListener('click', (e)=> {
    e.preventDefault();
    hex = false;
})


function changeBgColor(e) {
    e.preventDefault();
    
    document.body.style.backgroundColor = currentBgColor; 

    currentBgColor = generateRandomColors();
}


