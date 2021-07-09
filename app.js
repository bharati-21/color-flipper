const btnChangeColor = document.querySelector('.btn-change-color');
const colorCode = document.querySelector('.color-code');
const simple = document.querySelector('.simple');
const hex = document.querySelector('.hex');

let generateHexColors = false;

let currentBgColor = '#FFC2C3';
colorCode.textContent = currentBgColor;

btnChangeColor.addEventListener('click', changeBgColor);


function changeBgColor(e) {
    e.preventDefault();
    
    document.body.style.backgroundColor = currentBgColor;    ;
}

