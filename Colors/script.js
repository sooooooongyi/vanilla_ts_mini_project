"use strict";
const $root1 = document.querySelector('#root');
const $clickBtn1 = document.querySelector('#btn');
const COLOR_LENGTH = 17;
let index = 0;
const colors = [
    'red',
    'Blue',
    'Yellow',
    'Green',
    'Orange',
    'Cyan',
    'DodgerBlue',
    'Violet',
    'Navy',
    'Purple',
    'YellowGreen',
    'OrangeRed',
    'SlateBlue',
    'Salmon',
    'Crimson',
    'HotPink',
    'Magenta',
];
$clickBtn1.addEventListener('click', () => {
    $root1.style.backgroundColor = colors[index++ % COLOR_LENGTH];
});
