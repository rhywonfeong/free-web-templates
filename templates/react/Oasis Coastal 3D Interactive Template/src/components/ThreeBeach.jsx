import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBeach({ waveSpeed = 1.0, timeOfDay = 12 }) {
  const mountRef = useRef(null);
  
  // Refs to hold mutable scene objects and state without triggering re-renders
  const sceneRefs = useRef({});
  const stateRefs = useRef({ waveSpeed, timeOfDay });

  // Sync state to refs for animation loop
  useEffect(() => {
    stateRefs.current.waveSpeed = waveSpeed;
    stateRefs.current.timeOfDay = timeOfDay;
  }, [waveSpeed, timeOfDay]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Setup Scene, Camera, Renderer
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Default sky blue
    sceneRefs.current.scene = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(-10, 20, -10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    scene.add(sunLight);
    sceneRefs.current.sunLight = sunLight;

    // 3. Environment Objects
    
    // Sand
    const sandGeo = new THREE.PlaneGeometry(100, 50);
    const sandMat = new THREE.MeshStandardMaterial({ 
      color: 0xebd5b3, 
      roughness: 1.0, 
      metalness: 0.0 
    });
    const sand = new THREE.Mesh(sandGeo, sandMat);
    sand.rotation.x = -Math.PI / 2;
    sand.position.z = 10;
    sand.receiveShadow = true;
    scene.add(sand);

    // Water
    const waterGeo = new THREE.PlaneGeometry(100, 60, 64, 64);
    const waterMat = new THREE.MeshStandardMaterial({ 
      color: 0x0077be, 
      transparent: true,
      opacity: 0.85,
      flatShading: true,
      roughness: 0.1,
      metalness: 0.8
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.2; // Slightly above sand
    water.position.z = -15;
    water.receiveShadow = true;
    scene.add(water);
    sceneRefs.current.water = water;

    // Objects: Umbrella & Ball
    const umbrellaGroup = new THREE.Group();
    umbrellaGroup.position.set(4, 0, 5);
    
    const poleGeo = new THREE.CylinderGeometry(0.1, 0.1, 4);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 2;
    pole.castShadow = true;
    umbrellaGroup.add(pole);

    const canopyGeo = new THREE.ConeGeometry(3, 1, 8);
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0xff3366, flatShading: true });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.y = 4;
    canopy.castShadow = true;
    umbrellaGroup.add(canopy);
    scene.add(umbrellaGroup);

    const ballGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const ballMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, flatShading: true });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(-5, 0.6, 8);
    ball.castShadow = true;
    scene.add(ball);

    // Clouds
    const createCloud = () => {
      const group = new THREE.Group();
      const geo = new THREE.SphereGeometry(1, 8, 8);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
      for(let i=0; i<5; i++) {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 1,
          (Math.random() - 0.5) * 2
        );
        mesh.scale.setScalar(Math.random() * 0.5 + 0.8);
        group.add(mesh);
      }
      return group;
    };

    const clouds = [];
    for(let i=0; i<4; i++) {
      const cloud = createCloud();
      cloud.position.set((Math.random() - 0.5) * 40, 12 + Math.random() * 5, -20 - Math.random() * 10);
      scene.add(cloud);
      clouds.push(cloud);
    }
    sceneRefs.current.clouds = clouds;

    // 4. Animation Loop Setup
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentWaveSpeed = stateRefs.current.waveSpeed;
      const currentTimeOfDay = stateRefs.current.timeOfDay;

      // Animate Water Vertices
      if (sceneRefs.current.water) {
        const positions = sceneRefs.current.water.geometry.attributes.position;
        const timeOffset = elapsedTime * currentWaveSpeed * 2;
        
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          // Complex wave combining sine waves
          const z = Math.sin(x * 0.2 + timeOffset) * 0.4 + 
                    Math.cos(y * 0.3 + timeOffset * 0.8) * 0.4;
          positions.setZ(i, z);
        }
        positions.needsUpdate = true;
      }

      // Animate Clouds
      sceneRefs.current.clouds.forEach(cloud => {
        cloud.position.x += 0.02 * currentWaveSpeed;
        if (cloud.position.x > 30) {
          cloud.position.x = -30;
        }
      });

      // Update Lighting & Sky based on Time of Day
      // timeOfDay is 6 (morning) to 18 (evening)
      const normalizedTime = (currentTimeOfDay - 6) / 12; // 0 to 1
      const sunAngle = Math.PI - (normalizedTime * Math.PI); // PI to 0 (moving right to left)
      
      if (sceneRefs.current.sunLight) {
        sceneRefs.current.sunLight.position.x = Math.cos(sunAngle) * 30;
        sceneRefs.current.sunLight.position.y = Math.sin(sunAngle) * 25 + 2; // Keep slightly above horizon
        
        // Adjust intensity
        const intensity = Math.sin(sunAngle) * 1.5 + 0.2;
        sceneRefs.current.sunLight.intensity = Math.max(0, intensity);
      }

      // Adjust Sky and Ambient color based on time
      let targetSkyColor;
      let targetAmbientIntensity = 0.4;
      
      if (currentTimeOfDay < 8) {
        // Sunrise (Orange/Pink)
        targetSkyColor = new THREE.Color(0xffa07a);
        targetAmbientIntensity = 0.3;
      } else if (currentTimeOfDay > 16) {
        // Sunset (Purple/Orange)
        targetSkyColor = new THREE.Color(0xee82ee).lerp(new THREE.Color(0xff8c00), (currentTimeOfDay - 16)/2);
        targetAmbientIntensity = 0.3;
      } else {
        // Midday (Blue)
        targetSkyColor = new THREE.Color(0x87CEEB);
        targetAmbientIntensity = 0.6;
      }
      
      // Smooth color transition
      sceneRefs.current.scene.background.lerp(targetSkyColor, 0.05);
      ambientLight.intensity += (targetAmbientIntensity - ambientLight.intensity) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 5. Resize Handler
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(mountRef.current);

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose Geometries and Materials
      scene.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (object.material.isMaterial) {
          object.material.dispose();
        } else if (Array.isArray(object.material)) {
          object.material.forEach(mat => mat.dispose());
        }
      });
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures Three.js scene only initializes once

  return <div ref={mountRef} className="w-full h-full bg-slate-100" />;
}