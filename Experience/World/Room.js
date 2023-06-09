import * as THREE from 'three';
import Experience from "../Experience.js";
import GSAP from "gsap";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        }
        //console.log(this.actualRoom);
        
        this.setModel();
        this.onMouseMove();
    }

    setModel(){
        this.actualRoom.children.forEach(child=>{
            child.castShadow = true;
            child.receiveShadow = true;

            if(child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    child.castShadow = true;
                    child.receiveShadow = true;

                })
                //console.log("found children")
            }

            if(child.name === "Cube005"){
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
                console.log("found cube 005")
                
            }

        });
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.225, 0.225, 0.225);
        //this.actualRoom.translateY(0.8);
    }

    onMouseMove(){
        window.addEventListener("mousemove", (e) => {
            this.rotation = ((e.clientX - window.innerWidth/2))*2 / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        })
    }
    
    resize(){
        
    }

    update(){
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;
        
    }

}