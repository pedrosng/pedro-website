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
 * On re-size
*/
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  sphere.position.set(-sizes.width,sizes.height);
  
  camera.z = sizes.width;
  camera.left = -sizes.width;
  camera.right = sizes.width;
  camera.top = sizes.height;
  camera.bottom = -sizes.height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(sizes.width,sizes.height);
});

/**
 * Animation loop
 */
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y -= 0.004;
  renderer.render(scene,camera);
}

animate();