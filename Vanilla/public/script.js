import { randomColour } from './src/colours.js';
import { updateColour } from './src/colours.js';
import { showColour } from './src/colours.js';

let interval = 15;

let timer;
let newColour;
let currentColour;

let toggle = false;

$('#button').click(() => {
    newColour = new randomColour();
    currentColour = newColour.getColour();

    showColour(currentColour[0], currentColour[1], currentColour[2]);

    document.querySelector('#rainbow').style.border = "1px black solid"; 

    clearInterval(timer);
    timer = null;
})

$('#rainbow').click(() => {
    document.querySelector('#rainbow').style.border = "2px solid black";
    timer = setInterval(updateColour, interval);
})

$('#toggle-button').click(() => {
    if (!toggle) {
        document.querySelector('.options-grid').style.display = "block";
        document.querySelector('#icon').style.transform = 'rotate(180deg)';
        toggle = true;
    } else {
        document.querySelector('.options-grid').style.display = "none";
        document.querySelector('#icon').style.transform = 'rotate(0deg)';
        toggle = false;
    }
})

