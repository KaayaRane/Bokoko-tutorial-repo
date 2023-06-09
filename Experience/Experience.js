import * as THREE from 'three';
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js"
import assets from "./Utils/assets.js"
import Camera from "./Camera.js";
import Theme from './Theme.js';
import Renderer from "./Renderer.js";
import World from "./World/World.js";

export default class Experience{
    static instance // create an instance
    constructor(canvas){
        if(Experience.instance){ //if Experience instance exists return that instance
            return Experience.instance;
        }
        Experience.instance = this; // else return canvas as is below
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();
        this.theme = new Theme();
        this.sizes.on("resize", ()=>{
            this.resize();
        })
        this.time.on("update", ()=> {
            this.update();
        });
        this.theme.on("switch", (theme)=>{
            this.switchTheme(theme)
        })
    }

    switchTheme(theme){
        if(this.world.environment){
            this.world.environment.switchTheme(theme);
        }
    }

    resize(){
        this.camera.resize();
        this.renderer.resize();
        this.world.resize();
    }

    update(){
        this.camera.update();
        this.renderer.update();
        this.world.update();
    }
}