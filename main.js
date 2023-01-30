import * as THREE from 'three';

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
const camera = new THREE.OrthographicCamera(-sizes.width,sizes.width,sizes.height,-sizes.height,1,10000);
//const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height, 1, 10000);
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

sphere.position.x = -sizes.width;
sphere.position.y = sizes.height;
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
 * Animation loop
 */
function animate() {
  requestAnimationFrame(animate);
  //controls.update();
  renderer.render(scene,camera);
}

animate();