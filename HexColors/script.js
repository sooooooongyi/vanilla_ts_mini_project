"use strict";
const $root2 = document.querySelector('#root');
const $clickBtn2 = document.querySelector('#btn');
const $right = document.querySelector('#right');
const $left = document.querySelector('#left');
const getRandomColor = () => {
    let colorString = '';
    for (let i = 0; i < 6; i++) {
        colorString += String(Math.floor(Math.random() * 16).toString(16));
    }
    return colorString;
};
$clickBtn2.addEventListener('click', () => {
    let rightColor = '';
    let leftColor = '';
    for (let i = 0; i < 6; i++) {
        rightColor += String(Math.floor(Math.random() * 16).toString(16));
        leftColor += String(Math.floor(Math.random() * 16).toString(16));
    }
    $right.textContent = '#' + rightColor;
    $left.textContent = '#' + leftColor;
    $root2.style.background = `linear-gradient(to right, #${leftColor}, #${rightColor})`;
});
