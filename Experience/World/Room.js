import * as THREE from 'three';
import Experience from "../Experience.js";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        console.log(this.actualRoom);
        
        this.setModel();


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
    
    resize(){
        
    }

    update(){
        
    }

}