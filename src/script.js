import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
camera.position.z = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);
// instatiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.autoRotate = true

// 'Render' Render constantly
const renderLoop = () => {
  // console.log('renderLoop')
  // Update has to be before the render
  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();

