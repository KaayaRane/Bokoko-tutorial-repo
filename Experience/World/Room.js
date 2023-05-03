import * as THREE from 'three';
import Experience from "../Experience.js";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        // this.resources = this.experience.resources;
        // this.room = this.resources.items.room;
        // this.actualRoom = this.room.scene;
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        var geo = new THREE.EdgesGeometry(cube.geometry); // or WireframeGeometry
        var mat = new THREE.LineBasicMaterial({ color: 0xffffff });
        var wireframe = new THREE.LineSegments(geo, mat);
        cube.add(wireframe);
        console.log("cube added")
        
        //this.setModel();


    }

    setModel(){
        this.scene.add(this.actualRoom);
    }
    
    resize(){
        
    }

    update(){
        
    }

}