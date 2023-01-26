import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 1, 100);
camera.position.z = 100
scene.add(camera);

/**
 * Light
 */
const light = new THREE.AmbientLight(0x404040,1.8);
scene.add(light);

/**
 * Sphere Geometry
 */
const loader = new THREE.TextureLoader();
const texture = loader.load('/textures/lroc_color_poles_1k.jpg')
const sphereGeometry = new THREE.SphereGeometry( 40 ,60, 60 );
const sphereMaterial = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
console.log(sphere.position);
scene.add( sphere );

/** 
 * Helper
*/
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

/**
 * Renderer
 */
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer( { antialias:true, canvas } );
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene,camera);

/**
 * Controls
*/
const controls = new OrbitControls(camera,canvas);
controls.autoRotate=true;
controls.enableZoom=false;

/**
 * Animation loop
 */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene,camera);
}

animate();