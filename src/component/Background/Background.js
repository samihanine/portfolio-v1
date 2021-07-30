import './Background.scss';
import {
  useEffect
} from 'react';
import * as THREE from 'three';

function Background() {

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    let background1 = false;
    let background2 = false; 
    
    {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(
        'https://image.ibb.co/bMsBAe/sunset_360_preview.jpg',
        () => {
          const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
          rt.fromEquirectangularTexture(renderer, texture);
          background1 = rt.texture;
        });
    }

    {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(
        'https://image.ibb.co/eJ7uVe/night_360_preview.jpg',
        () => {
          const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
          rt.fromEquirectangularTexture(renderer, texture);
          background2 = rt.texture;
        });
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    camera.position.z = 5;
    let lon = 0;
    let lat = 0;
    let phi = 0;
    let theta = 0;

    var animate = () => {
      if (background1 && background2) {
        let theme = window.sessionStorage.getItem("background_theme");

        if (scene.background !== background2 && theme === "night") {
          scene.background = background2;
        } else if (scene.background !== background1 && theme !== "night") {
          scene.background = background1;
        }

      }

      requestAnimationFrame(animate);

      lon += 0.01;
      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      const x = 500 * Math.sin(phi) * Math.cos(theta);
      const y = 500 * Math.cos(phi);
      const z = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(x, y, z);
      renderer.render(scene, camera);
    };


    animate();


  }, [])

  return (
    <div className="background">
      <div id="container"></div>
    </div>
  );
}

/*
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
*/

export default Background;