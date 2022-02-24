export default class randomColour {

    constructor() {
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);
        this.rgb = [this.r, this.g, this.b];
    }

    getColour(){
        return this.rgb;
    }
}