const $root = document.querySelector('#root') as HTMLDivElement;
const $btn = document.querySelector('#btn') as HTMLButtonElement;

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
