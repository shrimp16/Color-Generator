import randomColour from '../src/colours.js'

const body = document.getElementById("body");

$('#button').click(() => {
    let newColour = new randomColour();
    let newColourVal = newColour.getColour();
    console.log(newColourVal);
    body.style.backgroundColor = `rgb(${newColourVal[0]}, ${newColourVal[1]}, ${newColourVal[2]})`
})

$('#random').click(() => {
    document.querySelector('#random').style.border = "2px black solid";
    document.querySelector('#rainbow').style.border = "";
})

$('#rainbow').click(() => {
    document.querySelector('#rainbow').style.border = "2px black solid";
    document.querySelector('#random').style.border = "";
})