import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- PROCEDURAL AUDIO ENGINE ---
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.lastThudTime = 0;
    this.enabled = true;
  }
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSpawn() {
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playThud(intensity) {
    if (!this.ctx || !this.enabled || intensity < 0.02) return;
    
    const now = this.ctx.currentTime;
    // Throttle thud sounds to prevent audio clipping during multi-collisions
    if (now - this.lastThudTime < 0.08) return; 
    this.lastThudTime = now;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
    
    const vol = Math.min(intensity * 0.8, 0.4);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playClick() {
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
    
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    
    osc.start(now);
    osc.stop(now + 0.05);
  }

  playReset() {
    if (!this.ctx || !this.enabled) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    osc.start(now);
    osc.stop(now + 0.3);
  }
}

// --- CUSTOM VERLET PHYSICS ENGINE ---
class PhysicsWorld {
  constructor(scene, audio) {
    this.scene = scene;
    this.audio = audio;
    this.particles = [];
    this.constraints = [];
    this.updatables = [];
    this.gravity = new THREE.Vector3(0, -15, 0);
    this.bounds = 15;
  }

  addParticle(x, y, z, r = 0.2, mass = 1) {
    const p = { pos: new THREE.Vector3(x, y, z), oldPos: new THREE.Vector3(x, y, z), r, mass, mesh: null };
    this.particles.push(p);
    return p;
  }

  addConstraint(p1, p2, stiffness = 1, visible = true) {
    const len = p1.pos.distanceTo(p2.pos);
    const c = { p1, p2, len, stiffness, visible, mesh: null };
    
    if (visible) {
      const geo = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
      const mat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.7 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      this.scene.add(mesh);
      c.mesh = mesh;
    }
    
    this.constraints.push(c);
    return c;
  }

  update(dt) {
    // 1. Integrate (Verlet)
    for (let p of this.particles) {
      if (p.mass === 0) continue;
      const vel = p.pos.clone().sub(p.oldPos);
      p.oldPos.copy(p.pos);
      p.pos.add(vel).add(this.gravity.clone().multiplyScalar(dt * dt));
    }

    // 2. Solve Constraints & Collisions (Multiple iterations for stability)
    const iterations = 5;
    for (let i = 0; i < iterations; i++) {
      
      // Distance Constraints
      for (let c of this.constraints) {
        const delta = c.p2.pos.clone().sub(c.p1.pos);
        const dist = delta.length();
        if (dist === 0) continue;
        
        const diff = (dist - c.len) / dist * c.stiffness;
        const totalMass = c.p1.mass + c.p2.mass;
        const w1 = c.p1.mass === 0 ? 0 : (c.p2.mass === 0 ? 1 : c.p2.mass / totalMass);
        const w2 = c.p2.mass === 0 ? 0 : 1 - w1;

        delta.multiplyScalar(diff);
        if (c.p1.mass > 0) c.p1.pos.add(delta.clone().multiplyScalar(w1));
        if (c.p2.mass > 0) c.p2.pos.sub(delta.clone().multiplyScalar(w2));
      }

      // Collisions
      for (let j = 0; j < this.particles.length; j++) {
        const p1 = this.particles[j];
        let impacted = 0;
        
        // Floor Collision
        if (p1.pos.y < p1.r) {
          impacted = Math.max(impacted, p1.r - p1.pos.y);
          p1.pos.y = p1.r;
          // Friction
          p1.pos.x += (p1.oldPos.x - p1.pos.x) * 0.3;
          p1.pos.z += (p1.oldPos.z - p1.pos.z) * 0.3;
        }

        // Bounds Collision
        if (p1.pos.x > this.bounds) { impacted = Math.max(impacted, p1.pos.x - this.bounds); p1.pos.x = this.bounds; }
        if (p1.pos.x < -this.bounds) { impacted = Math.max(impacted, -this.bounds - p1.pos.x); p1.pos.x = -this.bounds; }
        if (p1.pos.z > this.bounds) { impacted = Math.max(impacted, p1.pos.z - this.bounds); p1.pos.z = this.bounds; }
        if (p1.pos.z < -this.bounds) { impacted = Math.max(impacted, -this.bounds - p1.pos.z); p1.pos.z = -this.bounds; }

        if (impacted > 0.05 && this.audio) {
          this.audio.playThud(impacted);
        }

        // Particle-Particle Collision
        for (let k = j + 1; k < this.particles.length; k++) {
          const p2 = this.particles[k];
          const delta = p2.pos.clone().sub(p1.pos);
          const dist = delta.length();
          const minDist = p1.r + p2.r;
          
          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            
            if (overlap > 0.05 && this.audio) {
              this.audio.playThud(overlap);
            }

            const dir = delta.normalize();
            const totalMass = p1.mass + p2.mass;
            const w1 = p1.mass === 0 ? 0 : (p2.mass === 0 ? 1 : p2.mass / totalMass);
            const w2 = p2.mass === 0 ? 0 : 1 - w1;
            
            if (p1.mass > 0) p1.pos.sub(dir.clone().multiplyScalar(overlap * w1));
            if (p2.mass > 0) p2.pos.add(dir.clone().multiplyScalar(overlap * w2));
          }
        }
      }
    }

    // 3. Update Visuals
    for (let p of this.particles) {
      if (p.mesh) p.mesh.position.copy(p.pos);
    }
    
    const up = new THREE.Vector3(0, 1, 0);
    for (let c of this.constraints) {
      if (c.mesh) {
        const dir = c.p2.pos.clone().sub(c.p1.pos);
        const len = dir.length();
        c.mesh.scale.set(1, len, 1);
        c.mesh.position.copy(c.p1.pos).add(c.p2.pos).multiplyScalar(0.5);
        if (len > 0.001) c.mesh.quaternion.setFromUnitVectors(up, dir.normalize());
      }
    }

    for (let u of this.updatables) u.update();
  }

  clear() {
    this.particles.forEach(p => p.mesh && this.scene.remove(p.mesh));
    this.constraints.forEach(c => c.mesh && this.scene.remove(c.mesh));
    this.updatables.forEach(u => u.mesh && this.scene.remove(u.mesh));
    this.particles = [];
    this.constraints = [];
    this.updatables = [];
  }
}

// --- ENTITY GENERATORS ---
function createRagdoll(world, x, y, z) {
  const s = 0.8; // scale
  
  // Joints
  const head = world.addParticle(x, y + 3.5*s, z, 0.3*s);
  const neck = world.addParticle(x, y + 2.8*s, z, 0.2*s);
  const chest = world.addParticle(x, y + 2.0*s, z, 0.25*s);
  const pelvis = world.addParticle(x, y + 1.0*s, z, 0.25*s);

  const lShoulder = world.addParticle(x - 0.8*s, y + 2.5*s, z, 0.2*s);
  const rShoulder = world.addParticle(x + 0.8*s, y + 2.5*s, z, 0.2*s);
  const lElbow = world.addParticle(x - 1.5*s, y + 1.6*s, z, 0.2*s);
  const rElbow = world.addParticle(x + 1.5*s, y + 1.6*s, z, 0.2*s);
  const lHand = world.addParticle(x - 1.8*s, y + 0.6*s, z, 0.2*s);
  const rHand = world.addParticle(x + 1.8*s, y + 0.6*s, z, 0.2*s);

  const lHip = world.addParticle(x - 0.5*s, y + 0.8*s, z, 0.2*s);
  const rHip = world.addParticle(x + 0.5*s, y + 0.8*s, z, 0.2*s);
  const lKnee = world.addParticle(x - 0.5*s, y - 0.2*s, z, 0.2*s);
  const rKnee = world.addParticle(x + 0.5*s, y - 0.2*s, z, 0.2*s);
  const lFoot = world.addParticle(x - 0.5*s, y - 1.2*s, z, 0.2*s);
  const rFoot = world.addParticle(x + 0.5*s, y - 1.2*s, z, 0.2*s);

  const jointGeo = new THREE.SphereGeometry(1, 16, 16);
  const jointMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.1 });
  const particles = [head, neck, chest, pelvis, lShoulder, rShoulder, lElbow, rElbow, lHand, rHand, lHip, rHip, lKnee, rKnee, lFoot, rFoot];

  particles.forEach(p => {
    const mesh = new THREE.Mesh(jointGeo, jointMat);
    mesh.scale.setScalar(p.r);
    mesh.castShadow = true;
    world.scene.add(mesh);
    p.mesh = mesh;
    // Store reference to particle in mesh for raycasting interaction
    mesh.userData.particle = p; 
  });

  // Visible Bones
  const addB = (p1, p2) => world.addConstraint(p1, p2, 1, true);
  addB(head, neck); addB(neck, chest); addB(chest, pelvis);
  addB(neck, lShoulder); addB(neck, rShoulder);
  addB(lShoulder, lElbow); addB(rShoulder, rElbow);
  addB(lElbow, lHand); addB(rElbow, rHand);
  addB(pelvis, lHip); addB(pelvis, rHip);
  addB(lHip, lKnee); addB(rHip, rKnee);
  addB(lKnee, lFoot); addB(rKnee, rFoot);

  // Invisible Structural Constraints
  const addH = (p1, p2) => world.addConstraint(p1, p2, 0.8, false);
  addH(lShoulder, rShoulder); addH(lHip, rHip);
  addH(chest, lHip); addH(chest, rHip);
  addH(neck, pelvis); addH(lShoulder, chest); addH(rShoulder, chest);
}

function createSoftCube(world, x, y, z, size) {
  const s = size / 2;
  const pts = [];
  
  // Create 8 corners
  for (let dx of [-1, 1]) {
    for (let dy of [-1, 1]) {
      for (let dz of [-1, 1]) {
        const p = world.addParticle(x + dx*s, y + dy*s, z + dz*s, 0.2, 2);
        pts.push(p);
        
        // Invisible mesh for raycasting
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.3), new THREE.MeshBasicMaterial({ visible: false }));
        m.userData.particle = p;
        world.scene.add(m);
        p.mesh = m;
      }
    }
  }

  // Connect everything for rigid soft-body
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) {
      world.addConstraint(pts[i], pts[j], 1, false);
    }
  }

  // Visual Cube Mesh
  const geo = new THREE.BoxGeometry(size, size, size);
  const mat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.2, metalness: 0.2 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  world.scene.add(mesh);

  world.updatables.push({
    mesh,
    update: () => {
      // Extract orientation from specific corners
      const p0 = pts[0].pos; // - - -
      const pZ = pts[1].pos; // - - +
      const pY = pts[2].pos; // - + -
      const pX = pts[4].pos; // + - -

      const vX = pX.clone().sub(p0).normalize();
      const vY = pY.clone().sub(p0).normalize();
      
      const zAxis = vX.clone().cross(vY).normalize();
      const yAxis = zAxis.clone().cross(vX).normalize(); // Re-orthogonalize

      const matrix = new THREE.Matrix4().makeBasis(vX, yAxis, zAxis);
      mesh.rotation.setFromRotationMatrix(matrix);

      const center = new THREE.Vector3();
      pts.forEach(p => center.add(p.pos));
      center.multiplyScalar(1/8);
      mesh.position.copy(center);
    }
  });
}

function createSphere(world, x, y, z, r) {
  const p = world.addParticle(x, y, z, r, 3);
  const geo = new THREE.SphereGeometry(r, 32, 32);
  const mat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.1, metalness: 0.3 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  world.scene.add(mesh);
  p.mesh = mesh;
  mesh.userData.particle = p;
}

// --- MAIN REACT COMPONENT ---
export default function App() {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const audioRef = useRef(new AudioEngine());
  const [stats, setStats] = useState({ objects: 0 });
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x09090b);
    scene.fog = new THREE.FogExp2(0x09090b, 0.02);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 10, 25);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const spotLight = new THREE.SpotLight(0x3b82f6, 5);
    spotLight.position.set(-10, 15, -10);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // 3. Environment
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({ 
      color: 0x18181b, 
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Grid Helper
    const grid = new THREE.GridHelper(100, 50, 0x3f3f46, 0x27272a);
    grid.position.y = 0.01;
    scene.add(grid);

    // 4. Physics World Initialization
    const world = new PhysicsWorld(scene, audioRef.current);
    createRagdoll(world, 0, 5, 0);

    // 5. Interaction Setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let draggedParticle = null;
    let dragPlane = new THREE.Plane();
    let dragOffset = new THREE.Vector3();

    const onPointerDown = (e) => {
      audioRef.current.init(); // Initialize audio context on first user interaction
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      // Intersect only meshes that belong to particles
      const meshes = world.particles.map(p => p.mesh).filter(m => m);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        audioRef.current.playClick();
        controls.enabled = false;
        draggedParticle = intersects[0].object.userData.particle;
        
        // Setup plane facing camera at the object's depth
        const planeNormal = new THREE.Vector3().copy(camera.position).sub(draggedParticle.pos).normalize();
        dragPlane.setFromNormalAndCoplanarPoint(planeNormal, draggedParticle.pos);
        
        // Calculate offset
        raycaster.ray.intersectPlane(dragPlane, dragOffset);
        dragOffset.sub(draggedParticle.pos);
      }
    };

    const onPointerMove = (e) => {
      if (!draggedParticle) return;
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersectPoint = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(dragPlane, intersectPoint)) {
        const newPos = intersectPoint.sub(dragOffset);
        // Direct manipulation kills velocity
        draggedParticle.pos.copy(newPos);
        draggedParticle.oldPos.copy(newPos);
      }
    };

    const onPointerUp = () => {
      draggedParticle = null;
      controls.enabled = true;
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05); // cap dt to prevent explosions
      
      world.update(dt);
      controls.update();
      renderer.render(scene, camera);
      
      // Update stats occasionally (not every frame for performance)
      if (Math.random() < 0.05) {
        setStats({ objects: world.particles.length });
      }
    };
    animate();

    // 7. Expose Engine API
    engineRef.current = {
      addRagdoll: () => createRagdoll(world, (Math.random()-0.5)*10, 8, (Math.random()-0.5)*10),
      addCube: () => createSoftCube(world, (Math.random()-0.5)*10, 8, (Math.random()-0.5)*10, 1.5 + Math.random()),
      addSphere: () => createSphere(world, (Math.random()-0.5)*10, 8, (Math.random()-0.5)*10, 0.8 + Math.random()*0.5),
      reset: () => {
        world.clear();
        createRagdoll(world, 0, 5, 0);
      }
    };

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      world.clear();
    };
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    audioRef.current.enabled = nextState;
    if (nextState) audioRef.current.init();
  };

  const handleAction = (action) => {
    audioRef.current.init();
    if (action === 'reset') {
      audioRef.current.playReset();
      engineRef.current?.reset();
    } else {
      audioRef.current.playSpawn();
      engineRef.current?.[action]();
    }
  };

  return (
    <div className="relative w-full h-full bg-zinc-950 text-zinc-100 overflow-hidden font-sans">
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 pointer-events-none flex flex-col justify-between h-full">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="backdrop-blur-md bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/50 shadow-2xl pointer-events-auto transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between gap-6">
              <h1 className="text-2xl font-semibold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent flex items-center gap-2">
                <iconify-icon icon="solar:atom-linear" className="text-blue-500"></iconify-icon>
                Kinetic Engine
              </h1>
              <button 
                onClick={toggleSound}
                className={`p-2 rounded-lg flex items-center justify-center transition-colors ${soundEnabled ? 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white' : 'bg-zinc-800/40 text-zinc-600 hover:bg-zinc-800 hover:text-zinc-400'}`}
                title={soundEnabled ? "Mute Sound" : "Enable Sound"}
              >
                <iconify-icon icon={soundEnabled ? "solar:volume-up-bold" : "solar:muted-bold"} className="text-lg"></iconify-icon>
              </button>
            </div>
            <p className="text-zinc-400 text-sm mt-1 max-w-[250px]">
              Verlet integration physics simulator. Drag any joint or object with your mouse.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-zinc-500 bg-zinc-950/50 rounded-full px-3 py-1 w-fit border border-zinc-800/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              {stats.objects} Particles Active
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-6">
          <div className="backdrop-blur-xl bg-zinc-900/80 p-2 rounded-2xl border border-zinc-700/50 shadow-2xl pointer-events-auto flex gap-2">
            
            <button 
              onClick={() => handleAction('addRagdoll')}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-200 group border border-transparent hover:border-blue-500/30"
            >
              <iconify-icon icon="solar:user-rounded-linear" className="text-xl group-hover:scale-110 transition-transform"></iconify-icon>
              <span className="font-medium text-sm">Add Ragdoll</span>
            </button>

            <button 
              onClick={() => handleAction('addCube')}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-200 group border border-transparent hover:border-emerald-500/30"
            >
              <iconify-icon icon="solar:box-minimalistic-linear" className="text-xl group-hover:scale-110 transition-transform"></iconify-icon>
              <span className="font-medium text-sm">Soft Cube</span>
            </button>

            <button 
              onClick={() => handleAction('addSphere')}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-rose-500/20 hover:text-rose-400 transition-all duration-200 group border border-transparent hover:border-rose-500/30"
            >
              <iconify-icon icon="solar:sphere-linear" className="text-xl group-hover:scale-110 transition-transform"></iconify-icon>
              <span className="font-medium text-sm">Rigid Sphere</span>
            </button>

            <div className="w-px bg-zinc-700/50 mx-1 my-2"></div>

            <button 
              onClick={() => handleAction('reset')}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-700 transition-all duration-200 group border border-transparent hover:border-zinc-600"
            >
              <iconify-icon icon="solar:refresh-circle-linear" className="text-xl group-hover:-rotate-180 transition-transform duration-500"></iconify-icon>
              <span className="font-medium text-sm">Reset</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}