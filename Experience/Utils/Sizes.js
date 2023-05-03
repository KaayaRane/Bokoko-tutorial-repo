import {EventEmitter} from "events";

export default class Sizes extends EventEmitter{
    constructor(){
        super();
        this.width = window.innerWidth; // width of window
        this.height = window.innerHeight; // height of window (canvas might be better?)
        this.aspect = this.width/this.height; // for our camera
        this.pixelRatio = Math.min(window.devicePixelRatio, 2); // want to find min window device pixel ratio

        window.addEventListener("resize", () =>{
            this.width = window.innerWidth;
            this.height = window.innerHeigth;
            this.aspect = this.width/this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })

    }
}