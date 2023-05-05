import * as THREE from 'three';
import Experience from "../Experience.js";
import GSAP from "gsap";
import GUI from "lil-gui";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        //this.gui = new GUI({container: document.querySelector('.hero-main')});
        this.obj = {
            colorObj: {r: 0, g: 0, b: 0},
            intensity: 3,
        };
        
        this.setSunlight();
        //this.setGUI();
    }

    setGUI(){
        this.gui.addColor(this.obj, "colorObj").onChange(()=>{
            this.sunlight.color.copy(this.obj.colorObj)
            this.ambientLight.color.copy(this.obj.colorObj)
            console.log(this.obj)
        });
        this.gui.add(this.obj, "intensity", 0, 10).onChange(()=>{
            this.sunlight.intensity = this.obj.intensity
            this.ambientLight.intensity = this.obj.intensity
        })
    }

    setSunlight(){
        this.sunlight = new THREE.DirectionalLight("#ffffff", 3);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        //this.sunlight.shadow.camera.near = 1;
        this.sunlight.shadow.mapSize.set(1024, 1024);
        this.sunlight.shadow.normalBias = 0.05;
        this.sunlight.position.set(1.5, 7, 3);
        this.scene.add(this.sunlight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
        this.scene.add(this.ambientLight);
        GSAP.to(this.sunlight.color,{
            r: 0.5725490196078431,
            g: 0.1843137254901961,
            b: 0.1843137254901961,
        })
        GSAP.to(this.ambientLight.color,{
            r: 0.5725490196078431,
            g: 0.1843137254901961,
            b: 0.1843137254901961,
        })
        GSAP.to(this.sunlight, {
            intensity: 3,
        })
        GSAP.to(this.ambientLight, {
            intensity: 1,
        })
    }

    switchTheme(theme){
        if(theme==="dark"){
            GSAP.to(this.sunlight.color,{
                r: 0.09411764705882353,
                g: 0.054901960784313725,
                b: 0.24705882352941178,
            })
            GSAP.to(this.ambientLight.color,{
                r: 0.09411764705882353,
                g: 0.054901960784313725,
                b: 0.24705882352941178,
            })
            GSAP.to(this.sunlight, {
                intensity: 1.4,
            })
            GSAP.to(this.ambientLight, {
                intensity: 1.4,
            })
        }else{
            GSAP.to(this.sunlight.color,{
                r: 0.5725490196078431,
                g: 0.1843137254901961,
                b: 0.1843137254901961,
                
            })
            GSAP.to(this.ambientLight.color,{
                r: 0.5725490196078431,
                g: 0.1843137254901961,
                b: 0.1843137254901961,
            })
            GSAP.to(this.sunlight, {
                intensity: 3,
            })
            GSAP.to(this.ambientLight, {
                intensity: 1,
            })

        }
    }
    
    resize(){
        
    }

    update(){
        
    }

}