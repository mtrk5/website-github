import * as THREE from "./three.module.js";
import {GLTFLoader} from "./GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1000, 0.1, 100000000);
        
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;
        
const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#model"),
});
        
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(1000, 1000);
        
renderer.render(scene, camera);

const al = new THREE.HemisphereLight(0xffffff,0x000000, 1000);
al.position.y = 20;
scene.add(al);


const loader = new GLTFLoader();

let model = null;

loader.load("./assets/models/sprite.gltf", function (gltf){
        model = gltf.scene;
        console.log(model);
        gltf.scene.scale.set(1,1,1);
        gltf.scene.position.set(0,0,0);
        scene.add(model);
        console.log(model);
        console.log(scene);

}, undefined, function (error){
        console.log("error");
});


console.log(model);
console.log(scene);

scene.background = new THREE.Color(0xFFFFFF);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
}

animate();
