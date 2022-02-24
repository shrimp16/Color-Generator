import randomColour from '../src/colours.js'

const body = document.getElementById("body");

document.getElementById("button").onclick = function(){
    let newColour = new randomColour();
    let newColourVal = newColour.getColour();
    console.log(newColourVal);
    body.style.backgroundColor = `rgb(${newColourVal[0]}, ${newColourVal[1]}, ${newColourVal[2]})`
}