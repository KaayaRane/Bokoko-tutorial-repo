import {EventEmitter} from "events";

export default class Time extends EventEmitter{
    constructor(){
       super();
       this.start = Date.now();
       this.current = this.start;
       this.elapsed = 0;
       this.delta = 16; // time between each frame (amount in milliseconds)

       this.update()
    }

    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start; // for delay time for animation
        this.emit("update");
        window.requestAnimationFrame(this.update.bind(this));
    }
}