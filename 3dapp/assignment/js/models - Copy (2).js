import * as three from "https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js";
import {GLTFLoader} from "https://unpkg.com/three@0.117.1/examples/jsm/controls/GLTFLoader.js";

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(75, 1000, 0.1, 1000);
        
camera.translateZ(30);
        
const renderer = new three.WebGLRenderer({
        canvas: document.querySelector("#model"),
});
        
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(1000, 1000);
        
renderer.render(scene, camera);

//const loader = new GLTFLoader();

//loader.load("models/sprite.gltf", function (gltf){
       // scene.add(gltf.scene);
//});

//const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
//const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
//const torus = new THREE.Mesh(geometry, material);      
//scene.add(torus);
renderer.render(scene, camera);
