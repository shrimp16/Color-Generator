import randomColour from '../src/colours.js';
import { updateColour } from '../src/colours.js';

const body = document.getElementById("body");

let timer;
let newColour;
let currentColour;

$('#button').click(() => {
    newColour = new randomColour();
    currentColour = newColour.getColour();

    body.style.backgroundColor = `rgb(${currentColour[0]}, ${currentColour[1]}, ${currentColour[2]})`

    document.querySelector('#rainbow').style.border = "";
    
    clearInterval(timer);
    timer = null;
})

$('#rainbow').click(() => {
    document.querySelector('#rainbow').style.borderBottom = "2px solid black";
    timer = setInterval(updateColour, 10);
})

