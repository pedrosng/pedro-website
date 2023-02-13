import * as THREE from 'three';

const frame = document.querySelector('.frame');

const sizes = {
  width: frame.clientWidth,
  height: frame.clientHeight
}

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Camera
 */
const camera = new THREE.OrthographicCamera(-sizes.width,sizes.width,sizes.height,-sizes.height,1,10000);
camera.position.z = sizes.width;
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
const sphereGeometry = new THREE.SphereGeometry( 1000 ,60, 60 );
const sphereMaterial = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set(-sizes.width,sizes.height);
scene.add(sphere);

/**
 * Renderer
 */
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer( { antialias:true, canvas } );
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene,camera);

/** 
 * On window resize
*/
window.addEventListener('resize', () => {
  updateSizes();
  updateSphere();
  updateCamera();
  updateRenderer();
});

/**
 * Animation loop
*/
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.004;
  renderer.render(scene,camera);
}

export default animate;

/**
 * utils
 */
const updateSizes = () => {
  sizes.width = frame.clientWidth;
  sizes.height = frame.clientHeight;
}

const updateSphere = () => {
  sphere.position.set(-sizes.width,sizes.height);
} 

const updateCamera = () => {
  camera.z = sizes.width;
  camera.left = -sizes.width;
  camera.right = sizes.width;
  camera.top = sizes.height;
  camera.bottom = -sizes.height;
  camera.updateProjectionMatrix(); 
}

const updateRenderer = () => {
  renderer.setSize(sizes.width,sizes.height);
}

