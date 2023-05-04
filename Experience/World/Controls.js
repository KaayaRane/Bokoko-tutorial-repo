import * as THREE from 'three';
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

export default class Controls{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        GSAP.registerPlugin(ScrollTrigger);
        this.setPath();
        
        // Vectors and progress utilized for basic controls
        // this.progress = 0;
        // this.dummyVector = new THREE.Vector3(0, 0, 0)
        // this.lookAtPosition = new THREE.Vector3(0, 0, 0)

        // this.directionalVector = new THREE.Vector3(0, 0, 0);
        // this.staticVector = new THREE.Vector3(0, 1, 0);
        // this.crossVector = new THREE.Vector3(0, 0, 0);

        //this.position = new THREE.Vector3(0, 0, 0)

        // this.setPath();
        // this.onWheel();

    }

    setPath(){
        this.timeline = new GSAP.timeline();
        this.timeline.to(this.room.position, {
            x: ()=>{return this.sizes.width * .0018},
            scrollTrigger: {
                trigger: ".first-move-section-margin",
                markers: true,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                invalidateOnRefresh: true,
            }
        });
    }


    // Basic controls that could be implemented
    // setPath(){
    //     this.curve = new THREE.CatmullRomCurve3( [
    //         // new THREE.Vector3( -5, 0, 0 ),
    //         // new THREE.Vector3( 0, 0, -5 ),
    //         // new THREE.Vector3( 5, 0, 0 ),
    //         // new THREE.Vector3( 0, 0, 5 ),
    //         new THREE.Vector3( -5, 0, 0 ),
    //         new THREE.Vector3( 0, 1, -5 ),
    //         new THREE.Vector3( 5, 12, 0 ),
    //         new THREE.Vector3( 0, 0, 5 ),
    //         new THREE.Vector3( -5, 4, 0 ),
    //         new THREE.Vector3( 6, 0, -5 ),
    //         new THREE.Vector3( 5, 3, 0 ),
    //         new THREE.Vector3( 2, 0, 9 ),
    //     ], true );

        
    //     //this.curve.getPointAt(1, this.dummyVector);
        
    //     const points = this.curve.getPoints( 50 );
    //     const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
    //     const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        
    //     // Create the final object to add to the scene
    //     const curveObject = new THREE.Line( geometry, material );
    //     this.scene.add(curveObject);
    // }

    // Basic Controls that could be implemented
    // onWheel(){
    //     window.addEventListener("wheel", (e)=>{
    //         console.log(e)
    //         if(e.deltaY > 0){
    //             this.lerp.target += 0.01;
    //             this.back = false;
    //             //console.log("i read line 46")
    //             //this.progress += 0.1;
    //             // if(this.progress > 0){
    //             //     this.progress = 1;
    //             // }
    //         } else {
    //             this.lerp.target -= 0.01;
    //             //this.progress -= 0.1;
    //             this.back = true;
    //             if(this.lerp.target < 0){
    //                 this.lerp.target = 1;
    //             }
    //         }
    //     })
    // }

    
    
    resize(){
        
    }

    update(){
        ////////////////////Basic Controls////////////////////////////////////
        // this.curve.getPointAt(this.lerp.current % 1, this.position);
        // this.camera.orthographicCamera.position.copy(this.position);

        // this.directionalVector.subVectors(this.curve.getPointAt((this.lerp.current%1)+0.000001), this.position);
        // this.directionalVector.normalize();
        // this.crossVector.crossVectors(
        //     this.directionalVector,
        //     this.staticVector
        // )
        // this.crossVector.multiplyScalar(100000);
        // this.camera.orthographicCamera.lookAt(0,0,0)
        /////////////////////Basic Controls///////////////////////////////////
        //this.camera.orthographicCamera.lookAt(this.crossVector)
        // if(this.back){
        //     this.lerp.target -= 0.001;
        // }else{
        //     this.lerp.target += 0.001;
        // }
        // //this.lerp.target += 0.01;
        // this.lerp.target = GSAP.utils.clamp(0, 1, this.lerp.target);
        // this.lerp.current = GSAP.utils.clamp(0, 1, this.lerp.current);
        // this.curve.getPointAt(this.lerp.current, this.position);
        // this.curve.getPointAt((this.lerp.current+0.00001)%1, this.lookAtPosition);
        // //console.log("i read line 61")
        // //this.progress += 0.001;
        // // if(this.progress < 0){
        // //     this.progress = 1;
        // // }
        // this.camera.orthographicCamera.position.copy(this.position);
        // this.camera.orthographicCamera.lookAt(this.lookAtPosition);
    }

}