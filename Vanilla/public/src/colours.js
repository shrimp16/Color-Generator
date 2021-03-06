const body = document.getElementById("body");
const rgbColour = document.getElementById("RGB-colour");
const hexColour = document.getElementById("HEX-colour");
const rgbToggle = document.getElementById("rgb");
const hexToggle = document.getElementById("hex");

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

export class randomColour {

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
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    rgbColour.innerText = `RGB : ${r}, ${g}, ${b}`;
    hexColour.innerText = `HEX : #${hex(r)}${hex(g)}${hex(b)}`
    console.log(parseInt(r, 10).toString(16));
}

function hex(number){
    let nr = parseInt(number, 10).toString(16).toUpperCase();
    if(nr.length === 1){
        nr = "0" + nr;
    }
    return nr;
}