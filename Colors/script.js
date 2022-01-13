const $root = document.querySelector('#root');
const $btn = document.querySelector('#btn');

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

$btn.addEventListener('click', () => {
    $root.style.backgroundColor = colors[index++ % COLOR_LENGTH];
});
