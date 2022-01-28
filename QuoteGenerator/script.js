"use strict";
const quotes = [
    'Think like a man of action and act like man of thought.',
    'Courage is very important. Like a muscle, it is strengthened by use.',
    'Life is the art of drawing sufficient conclusions from insufficient premises.',
    'By doubting we come at the truth.',
    'A man that hath no virtue in himself, ever envieth virtue in others.',
    'When money speaks, the truth keeps silent.',
    'Better the last smile than the first laughter.',
    'In the morning of life, work; in the midday, give counsel; in the evening, pray.',
    'Painless poverty is better than embittered wealth.',
    'A poet is the painter of the soul.',
];
const $root3 = document.querySelector('#root');
const $clickBtn3 = document.querySelector('#btn');
const $message = document.querySelector('#message');
$clickBtn3.addEventListener('click', () => {
    console.log('click!');
    $message.innerHTML = quotes[Math.floor(Math.random() * 10)];
});
