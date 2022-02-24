const body = document.getElementById("body");
const colour = document.getElementById("colour");

const rainbow = [
    [255, 0, 0],
    [255, 127, 0],
    [255, 255, 0],
    [0, 255, 0],
    [0, 0, 255],
    [75, 0, 130],
    [148, 0, 211],
    [255, 0, 0]
]

let pointer = 0;
export let currentColour = [255, 0, 0];

export default class randomColour {

    constructor() {
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.rgb = [this.r, this.g, this.b];
    }

    getColour() {
        return this.rgb;
    }
}

export function updateColour() {

    let r = rainbow[pointer][0];
    let g = rainbow[pointer][1];
    let b = rainbow[pointer][2];

    if(currentColour[0] < r) currentColour[0]++;
    if(currentColour[1] < g) currentColour[1]++;
    if(currentColour[2] < b) currentColour[2]++;

    if(currentColour[0] > r) currentColour[0]--;
    if(currentColour[1] > g) currentColour[1]--;
    if(currentColour[2] > b) currentColour[2]--;

    if(currentColour[0] === r && currentColour[1] === g && currentColour[2] === b) pointer++;

    if(pointer === 7) pointer = 0;

    showColour(currentColour[0], currentColour[1], currentColour[2]);

}

export function showColour(r, g, b) {
    console.log(r + ", " + g + ", " + b);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    console.log(colour);
    colour.innerText = `RGB : ${r}, ${g}, ${b}`
}