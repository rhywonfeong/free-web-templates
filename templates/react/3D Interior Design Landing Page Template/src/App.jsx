import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function App() {
    const mountRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x404040, 20, 50);
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setClearColor(0x1a1a1a);
        mount.appendChild(renderer.domElement);

        // Enhanced Lighting System
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);

        // Main ceiling light
        const ceilingLight = new THREE.PointLight(0xffffcc, 1.2, 25);
        ceilingLight.position.set(0, 11, -2);
        ceilingLight.castShadow = true;
        ceilingLight.shadow.mapSize.width = 2048;
        ceilingLight.shadow.mapSize.height = 2048;
        scene.add(ceilingLight);

        // Ceiling light fixture
        const lightFixtureGeometry = new THREE.CylinderGeometry(0.8, 1.2, 0.3, 8);
        const lightFixtureMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff, 
            emissive: 0xffffcc, 
            emissiveIntensity: 0.3 
        });
        const lightFixture = new THREE.Mesh(lightFixtureGeometry, lightFixtureMaterial);
        lightFixture.position.set(0, 11.5, -2);
        scene.add(lightFixture);

        // Corner accent lights
        const cornerLight1 = new THREE.PointLight(0xff9966, 0.8, 15);
        cornerLight1.position.set(-8, 8, -8);
        cornerLight1.castShadow = true;
        scene.add(cornerLight1);

        const cornerLight2 = new THREE.PointLight(0x66ccff, 0.6, 15);
        cornerLight2.position.set(8, 8, -8);
        cornerLight2.castShadow = true;
        scene.add(cornerLight2);

        // Window light
        const windowLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
        windowLight.position.set(15, 10, 0);
        windowLight.castShadow = true;
        scene.add(windowLight);

        // Room structure
        const roomGroup = new THREE.Group();

        // Enhanced Floor with pattern
        const floorGeometry = new THREE.PlaneGeometry(24, 24);
        const svgString = `
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#8B4513"/>
                <rect x="0" y="0" width="50" height="50" fill="#A0522D"/>
                <rect x="50" y="50" width="50" height="50" fill="#A0522D"/>
            </svg>
        `;
        const floorTexture = new THREE.TextureLoader().load('data:image/svg+xml;base64,' + btoa(svgString));
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(8, 8);
        
        const floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        roomGroup.add(floor);

        // Enhanced walls with better textures
        const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xF5F5DC });
        
        // Back wall with window
        const backWallGeometry = new THREE.PlaneGeometry(24, 12);
        const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        backWall.position.set(0, 6, -12);
        backWall.receiveShadow = true;
        roomGroup.add(backWall);

        // Window in back wall
        const windowGeometry = new THREE.PlaneGeometry(4, 3);
        const windowMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x87ceeb, 
            transparent: true, 
            opacity: 0.3,
            emissive: 0x87ceeb,
            emissiveIntensity: 0.1
        });
        const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
        window1.position.set(6, 7, -11.9);
        scene.add(window1);

        // Left wall
        const leftWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        leftWall.position.set(-12, 6, 0);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.receiveShadow = true;
        roomGroup.add(leftWall);

        // Right wall  
        const rightWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        rightWall.position.set(12, 6, 0);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.receiveShadow = true;
        roomGroup.add(rightWall);

        // Enhanced ceiling
        const ceilingGeometry = new THREE.PlaneGeometry(24, 24);
        const ceilingMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
        const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = 12;
        ceiling.receiveShadow = true;
        roomGroup.add(ceiling);

        scene.add(roomGroup);

        // Enhanced Furniture
        // Modern Sofa Set
        const sofaGroup = new THREE.Group();
        
        const sofaGeometry = new THREE.BoxGeometry(5, 1.8, 2.5);
        const sofaMaterial = new THREE.MeshPhongMaterial({ color: 0x2E4F99 });
        const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial);
        sofa.position.set(-4, 0.9, -6);
        sofa.castShadow = true;
        sofaGroup.add(sofa);

        for(let i = 0; i < 3; i++) {
            const cushionGeometry = new THREE.BoxGeometry(1.4, 0.3, 1.8);
            const cushionMaterial = new THREE.MeshPhongMaterial({ color: 0x4169E1 });
            const cushion = new THREE.Mesh(cushionGeometry, cushionMaterial);
            cushion.position.set(-4 + (i-1) * 1.6, 1.95, -6);
            cushion.castShadow = true;
            sofaGroup.add(cushion);
        }

        const sofaBackGeometry = new THREE.BoxGeometry(5, 2.5, 0.5);
        const sofaBack = new THREE.Mesh(sofaBackGeometry, sofaMaterial);
        sofaBack.position.set(-4, 2.15, -7.2);
        sofaBack.castShadow = true;
        sofaGroup.add(sofaBack);

        scene.add(sofaGroup);

        // Glass Coffee Table
        const tableTopGeometry = new THREE.BoxGeometry(3, 0.1, 1.5);
        const tableTopMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.3,
            reflectivity: 1
        });
        const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
        tableTop.position.set(-4, 1.2, -3);
        tableTop.castShadow = true;
        tableTop.receiveShadow = true;
        scene.add(tableTop);

        const legGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1.1);
        const legMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
        for(let i = 0; i < 4; i++) {
            const leg = new THREE.Mesh(legGeometry, legMaterial);
            leg.position.set(
                -4 + (i % 2) * 2.7 - 1.35,
                0.55,
                -3 + Math.floor(i / 2) * 1.2 - 0.6
            );
            leg.castShadow = true;
            scene.add(leg);
        }

        // Large TV with stand
        const tvGeometry = new THREE.BoxGeometry(4, 2.5, 0.15);
        const tvMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
        const tv = new THREE.Mesh(tvGeometry, tvMaterial);
        tv.position.set(0, 4.5, -11.8);
        tv.castShadow = true;
        scene.add(tv);

        const screenGeometry = new THREE.PlaneGeometry(3.6, 2.1);
        const screenMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x0066ff, 
            emissive: 0x001133,
            emissiveIntensity: 0.2
        });
        const screen = new THREE.Mesh(screenGeometry, screenMaterial);
        screen.position.set(0, 4.5, -11.7);
        scene.add(screen);

        const standGeometry = new THREE.BoxGeometry(4.5, 0.8, 1.2);
        const standMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
        const stand = new THREE.Mesh(standGeometry, standMaterial);
        stand.position.set(0, 2.8, -11.5);
        stand.castShadow = true;
        scene.add(stand);

        // Enhanced Bookshelf
        const shelfGroup = new THREE.Group();
        const mainShelfGeometry = new THREE.BoxGeometry(2.5, 8, 1.2);
        const shelfMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const mainShelf = new THREE.Mesh(mainShelfGeometry, shelfMaterial);
        mainShelf.position.set(8, 4, -9);
        mainShelf.castShadow = true;
        shelfGroup.add(mainShelf);

        for(let i = 0; i < 4; i++) {
            const dividerGeometry = new THREE.BoxGeometry(2.3, 0.1, 1);
            const divider = new THREE.Mesh(dividerGeometry, shelfMaterial);
            divider.position.set(8, i * 1.8 + 1, -9);
            shelfGroup.add(divider);

            for(let j = 0; j < 8; j++) {
                const bookGeometry = new THREE.BoxGeometry(0.15, 1.5, 0.8);
                const bookColors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0x6c5ce7, 0xa55eea];
                const bookMaterial = new THREE.MeshPhongMaterial({ color: bookColors[j] });
                const book = new THREE.Mesh(bookGeometry, bookMaterial);
                book.position.set(8 - 1 + j * 0.25, i * 1.8 + 1.8, -9);
                book.castShadow = true;
                shelfGroup.add(book);
            }
        }
        scene.add(shelfGroup);

        // Add a rug
        const rugGeometry = new THREE.PlaneGeometry(6, 4);
        const rugMaterial = new THREE.MeshPhongMaterial({ color: 0x8B0000 });
        const rug = new THREE.Mesh(rugGeometry, rugMaterial);
        rug.rotation.x = -Math.PI / 2;
        rug.position.set(-4, 0.01, -4);
        rug.receiveShadow = true;
        scene.add(rug);

        // Add plants
        const plantPotGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.6);
        const plantPotMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const plantPot = new THREE.Mesh(plantPotGeometry, plantPotMaterial);
        plantPot.position.set(-10, 0.3, -10);
        plantPot.castShadow = true;
        scene.add(plantPot);

        const plantGeometry = new THREE.SphereGeometry(0.8, 8, 6);
        const plantMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 });
        const plant = new THREE.Mesh(plantGeometry, plantMaterial);
        plant.position.set(-10, 1.1, -10);
        plant.castShadow = true;
        scene.add(plant);

        // Camera setup & Interactions
        camera.position.set(0, 2, 8);
        let cameraRotationX = 0;
        let cameraRotationY = 0;

        let dragging = false;
        let previousMouseX = 0;
        let previousMouseY = 0;
        const keys = {};

        const handleMouseDown = (event) => {
            dragging = true;
            setIsDragging(true);
            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        };

        const handleMouseUp = () => {
            dragging = false;
            setIsDragging(false);
        };

        const handleMouseMove = (event) => {
            if (dragging) {
                const deltaX = event.clientX - previousMouseX;
                const deltaY = event.clientY - previousMouseY;
                
                cameraRotationY -= deltaX * 0.01;
                cameraRotationX -= deltaY * 0.01;
                cameraRotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, cameraRotationX));
                
                camera.rotation.order = 'YXZ';
                camera.rotation.y = cameraRotationY;
                camera.rotation.x = cameraRotationX;
                
                previousMouseX = event.clientX;
                previousMouseY = event.clientY;
            }
        };

        const handleKeyDown = (event) => { keys[event.code] = true; };
        const handleKeyUp = (event) => { keys[event.code] = false; };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        function updateMovement() {
            const speed = 0.12;
            const direction = new THREE.Vector3();
            
            if (keys['KeyW']) direction.z -= 1;
            if (keys['KeyS']) direction.z += 1;
            if (keys['KeyA']) direction.x -= 1;
            if (keys['KeyD']) direction.x += 1;
            
            direction.applyQuaternion(camera.quaternion);
            direction.y = 0;
            direction.normalize();
            
            camera.position.add(direction.multiplyScalar(speed));
        }

        let time = 0;
        let animationFrameId;

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            time += 0.01;
            
            ceilingLight.intensity = 1.2 + Math.sin(time * 0.5) * 0.1;
            cornerLight1.intensity = 0.8 + Math.sin(time * 0.3) * 0.2;
            
            updateMovement();
            renderer.render(scene, camera);
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        animate();

        // Cleanup function for React unmounting
        return () => {
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('resize', handleResize);
            
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            className={`relative w-full h-screen overflow-hidden bg-[#1a1a1a] select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
        >
            <div className="absolute top-5 left-5 text-white font-sans text-sm z-[100] bg-black/50 p-2.5 rounded shadow-sm pointer-events-none">
                <div className="mb-1">🏠 Enhanced House Interior</div>
                <div className="mb-1">🖱️ Click and drag to look around</div>
                <div>⌨️ WASD keys to move</div>
            </div>
            
            <div ref={mountRef} className="w-full h-full block" />
        </div>
    );
}