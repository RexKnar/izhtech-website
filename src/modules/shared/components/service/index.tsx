import { FC } from 'react';

import NextLink from '../reuseable/links/NextLink';
import { serviceList } from '../../data/service-list';

// Gear Imports

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ServiceCard from '../reuseable/service-card';



// -------- custom component -------- //
// -------- data -------- //

const Services: FC = () => {

        const canvasRef = useRef<HTMLCanvasElement>(null);
      
        useEffect(() => {
          if (!canvasRef.current) return;
      
          // Scene
          const scene = new THREE.Scene();
      
          // Lights
          const directionalLight = new THREE.DirectionalLight("#ffffff", 2);
          directionalLight.position.set(1, 1, 5);
          scene.add(directionalLight);
      
          // Sizes
          const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
          // Camera
          const camera = new THREE.PerspectiveCamera(
            65,
            sizes.width / sizes.height,
            1,
            1000
          );
          // camera.position.z = 3;
          camera.position.z = Math.max(2, 5 );
          scene.add(camera);
      
          // Renderer
          const canvas = canvasRef.current;
          if (!canvas) return;
          const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
          renderer.setSize(((sizes.width*50)/100), sizes.height);
      
          // Importing Object
          const loader = new GLTFLoader();
          let sandalGear: THREE.Object3D;
          let greenGear: THREE.Object3D;
          let pinkGear: THREE.Object3D;
          let orangeGear: THREE.Object3D;
          loader.load(
            "src/assets/3d-object/sandal-gear.gltf",
            (gltf) => {
              sandalGear = gltf.scene;
              scene.add(sandalGear);
             
            },
            undefined,
            (error) => {
              console.error(error);
            }
          );
          loader.load(
            "src/assets/3d-object/green-gear.gltf",
            (gltf) => {
              greenGear = gltf.scene;
              greenGear.position.set(-1.5, 1.12, 0);
              scene.add(greenGear);
              
             
            },
            undefined,
            (error) => {
              console.error(error);
            }
          );
          loader.load(
            "src/assets/3d-object/pink-gear.gltf",
            (gltf) => {
              pinkGear = gltf.scene;
              pinkGear.position.set(-1.60, -1.0, 0);
              pinkGear.rotation.z -=0.18;
              scene.add(pinkGear);
              
             
            },
            undefined,
            (error) => {
              console.error(error);
            }
          );
          loader.load(
            "src/assets/3d-object/orange-gear.gltf",
            (gltf) => {
              orangeGear = gltf.scene;
              orangeGear.position.set(-3.22, 0.42, 0);
              scene.add(orangeGear);
              
             
            },
            undefined,
            (error) => {
              console.error(error);
            }
          );
          
        
          
          let lastScrollTop=0;
          window.addEventListener("scroll", () => {
      
            if (greenGear && orangeGear && pinkGear && sandalGear) {
              if(lastScrollTop<window.pageYOffset)
              {
                greenGear.rotation.z +=0.01;
                orangeGear.rotation.z -=0.01;
                pinkGear.rotation.z +=0.01;
                sandalGear.rotation.z -=0.01;
              }
              else{
                greenGear.rotation.z -=0.01;
                orangeGear.rotation.z +=0.01;
                pinkGear.rotation.z -=0.01;
                sandalGear.rotation.z +=0.01;
              }
              lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
      
            }
      
            renderer.render(scene, camera);
          });
           
      
          return () => {
          };
        }, []);
      
       
       
            
      
  return (
    <>
    {/* <canvas ref={canvasRef} id="canvas" ></canvas> */}
    
    <div className="row gx-lg-8 gx-xl-12 gy-10   align-items-center">
      <div className="col-lg-7 order-lg-2">
        <div className="row gx-md-5 gy-5">
          {serviceList.map(({ id, Icon, color, ...item }) => (
            <ServiceCard key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
          ))}
        </div>
      </div>

      <div className="col-lg-5">
       
        <canvas ref={canvasRef} id="canvas" ></canvas>
      </div>
    </div>
    </>
  );
};

export default Services;
