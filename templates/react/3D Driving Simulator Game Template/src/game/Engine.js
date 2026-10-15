export class Engine {
  constructor(canvas, onStateChange) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onStateChange = onStateChange;
    this.animationFrameId = null;
    
    // Physics constants (Y-Up coordinate system logic)
    this.gravity = -0.4;
    this.enginePower = 0.8;
    this.brakingPower = 0.6;
    this.friction = 0.985;
    this.airResistance = 0.995;
    
    this.state = this.getInitialState();
    this.keys = { ArrowRight: false, ArrowLeft: false };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.loop = this.loop.bind(this);

    // Set initial size
    this.resize(window.innerWidth, window.innerHeight);

    // Generate Textures
    this.grassPattern = this.createGrassPattern();
    this.dirtPattern = this.createDirtPattern();
  }

  createGrassPattern() {
    const p = document.createElement('canvas');
    p.width = 64; p.height = 64;
    const c = p.getContext('2d');
    c.fillStyle = '#166534'; // Base green
    c.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 80; i++) {
      c.fillStyle = Math.random() > 0.5 ? '#15803d' : '#14532d'; // Darker/Lighter blades
      c.fillRect(Math.random() * 64, Math.random() * 64, 2 + Math.random() * 2, 6 + Math.random() * 8);
    }
    return this.ctx.createPattern(p, 'repeat');
  }

  createDirtPattern() {
    const p = document.createElement('canvas');
    p.width = 128; p.height = 128;
    const c = p.getContext('2d');
    c.fillStyle = '#78350f'; // Base dirt brown
    c.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 150; i++) {
      c.fillStyle = Math.random() > 0.5 ? '#92400e' : '#451a03'; // Pebbles/noise
      c.fillRect(Math.random() * 128, Math.random() * 128, 3, 3);
    }
    return this.ctx.createPattern(p, 'repeat');
  }

  getInitialState() {
    return {
      x: 0,
      y: 200, // Start above ground
      vx: 0,
      vy: 0,
      speed: 0,
      angle: 0,
      wheelAngle: 0,
      fuel: 100,
      distance: 0,
      gameOver: false,
      fuelCans: []
    };
  }

  reset() {
    this.state = this.getInitialState();
    this.state.y = this.getElevation(0) + 100; // Drop into start
    this.onStateChange(this.getStateForUI());
  }

  resize(width, height) {
    if (this.canvas) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  async init() {
    this.generateFuelCans(0, 5000);
    this.reset();
    return Promise.resolve();
  }

  start() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.lastTime = performance.now();
    this.animationFrameId = requestAnimationFrame(this.loop);
  }

  stop() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  handleKeyDown(e) {
    if (this.keys.hasOwnProperty(e.code) || e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
      this.keys[e.code] = true;
    }
  }

  handleKeyUp(e) {
    if (this.keys.hasOwnProperty(e.code) || e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
      this.keys[e.code] = false;
    }
  }

  getStateForUI() {
    return {
      distance: Math.max(0, Math.floor(this.state.x)),
      fuel: this.state.fuel,
      gameOver: this.state.gameOver
    };
  }

  getElevation(x) {
    return Math.sin(x / 600) * 200 
         + Math.sin(x / 300) * 75 
         + Math.sin(x / 100) * 25;
  }

  getSlopeAndAngle(x) {
    const dx = 1;
    const dy = this.getElevation(x + dx) - this.getElevation(x - dx);
    const slope = dy / (dx * 2);
    return { slope, angle: Math.atan(slope) };
  }

  generateFuelCans(startX, endX) {
    for (let x = startX + 1000; x < endX; x += 1000 + Math.random() * 800) {
      if (!this.state.fuelCans.find(c => Math.abs(c.x - x) < 100)) {
        this.state.fuelCans.push({
          x: x,
          y: this.getElevation(x),
          collected: false
        });
      }
    }
  }

  update() {
    if (this.state.gameOver) return;

    // Fuel logic
    if (this.state.vx > 0.5 || this.keys.ArrowRight) {
      this.state.fuel -= 0.03;
    } else {
      this.state.fuel -= 0.005; // Idle drain
    }

    if (this.state.fuel <= 0) {
      this.state.fuel = 0;
      if (Math.abs(this.state.speed) < 0.5 && Math.abs(this.state.vx) < 0.5) {
        this.state.gameOver = true;
      }
    }

    const { x, y } = this.state;
    const nextX = x + this.state.vx;
    
    // Physics Step (Y is up)
    this.state.vy += this.gravity;
    let nextY = y + this.state.vy;
    let nextTerrainY = this.getElevation(nextX);

    // Collision Detection
    const isGrounded = nextY <= nextTerrainY + 2; 

    if (isGrounded) {
      this.state.y = nextTerrainY;
      
      const { angle } = this.getSlopeAndAngle(nextX);
      this.state.angle += (angle - this.state.angle) * 0.2; // Smooth orientation

      let currentSpeed = Math.sqrt(this.state.vx ** 2 + this.state.vy ** 2) * Math.sign(this.state.vx || 1);
      
      if (this.keys.ArrowRight && this.state.fuel > 0) currentSpeed += this.enginePower;
      if (this.keys.ArrowLeft) currentSpeed -= this.brakingPower;
      
      // Gravity pulls speed down or up hills
      currentSpeed += Math.sin(angle) * this.gravity * 2;
      currentSpeed *= this.friction;

      if (!this.keys.ArrowRight && !this.keys.ArrowLeft && Math.abs(currentSpeed) < 0.2) {
          currentSpeed = 0;
      }

      this.state.speed = currentSpeed;
      this.state.vx = currentSpeed * Math.cos(angle);
      this.state.vy = currentSpeed * Math.sin(angle);
      this.state.wheelAngle -= currentSpeed * 0.05;

    } else {
      this.state.x = nextX;
      this.state.y = nextY;
      this.state.vx *= this.airResistance;
      this.state.vy *= this.airResistance;
      
      const airAngle = this.state.vy < 0 ? -0.2 : 0.1;
      this.state.angle += (airAngle - this.state.angle) * 0.05;
      
      if (this.keys.ArrowRight) this.state.angle -= 0.02;
      if (this.keys.ArrowLeft) this.state.angle += 0.02;
    }

    this.state.x += this.state.vx;
    
    if (this.state.x < 0) {
      this.state.x = 0;
      this.state.vx = 0;
    }

    // Collectibles Check
    this.state.fuelCans.forEach(can => {
      if (!can.collected) {
        const dist = Math.hypot(can.x - this.state.x, can.y - this.state.y);
        if (dist < 80) {
          can.collected = true;
          this.state.fuel = Math.min(100, this.state.fuel + 40);
        }
      }
    });

    if (this.state.x > this.state.distance + 2000) {
       this.generateFuelCans(this.state.x, this.state.x + 3000);
    }

    this.state.distance = Math.max(this.state.distance, this.state.x);

    if (Math.floor(this.state.x) % 10 === 0 || this.state.gameOver) {
      this.onStateChange(this.getStateForUI());
    }
  }

  draw() {
    const { ctx, canvas, state } = this;
    const width = canvas.width;
    const height = canvas.height;

    // Reset transform to draw static backgrounds
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // 1. Draw Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
    skyGrad.addColorStop(0, '#0ea5e9'); // Sky blue
    skyGrad.addColorStop(0.5, '#7dd3fc');
    skyGrad.addColorStop(1, '#e0f2fe'); // Pale horizon
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Sun
    ctx.save();
    const sunX = width * 0.8;
    const sunY = height * 0.25;
    
    // Sun corona (glow)
    ctx.beginPath();
    ctx.arc(sunX, sunY, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(253, 224, 71, 0.2)';
    ctx.fill();

    // Core sun
    ctx.beginPath();
    ctx.arc(sunX, sunY, 60, 0, Math.PI * 2);
    ctx.fillStyle = '#fde047';
    ctx.shadowColor = '#fef08a';
    ctx.shadowBlur = 40;
    ctx.fill();
    ctx.restore();

    // 3. Draw Parallax Background Mountains
    ctx.fillStyle = '#bae6fd'; // Light mountain silhouette
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let i = 0; i <= width; i += 50) {
      let mY = height * 0.6 + Math.sin((i + state.x * 0.1) * 0.005) * 150 + Math.cos((i + state.x * 0.1) * 0.01) * 50;
      ctx.lineTo(i, mY);
    }
    ctx.lineTo(width, height);
    ctx.fill();

    // Setup Camera for World Space
    const camX = width * 0.3 - state.x;
    const camY = height * 0.6 + state.y; // Shift origin down as elevation goes up

    ctx.translate(camX, camY);

    // 4. Draw Procedural Hills (Dirt & Grass)
    const startX = state.x - width * 0.5;
    const endX = state.x + width * 1.5;

    ctx.beginPath();
    ctx.moveTo(startX, -this.getElevation(startX));
    for (let x = startX; x <= endX; x += 20) {
      ctx.lineTo(x, -this.getElevation(x));
    }
    ctx.lineTo(endX, height * 2); // Deep underground
    ctx.lineTo(startX, height * 2);
    ctx.closePath();

    // Fill dirt
    ctx.fillStyle = this.dirtPattern || '#78350f';
    ctx.fill();

    // Draw grass surface stroke
    ctx.beginPath();
    ctx.moveTo(startX, -this.getElevation(startX));
    for (let x = startX; x <= endX; x += 10) {
      ctx.lineTo(x, -this.getElevation(x));
    }
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.grassPattern || '#22c55e';
    ctx.stroke();

    // 5. Draw Collectibles (Fuel Cans)
    state.fuelCans.forEach(can => {
      if (!can.collected && Math.abs(can.x - state.x) < width) {
        ctx.save();
        ctx.translate(can.x, -can.y - 15);
        
        // Floating animation
        const floatY = Math.sin(performance.now() * 0.005 + can.x) * 5;
        ctx.translate(0, floatY);

        // Can body
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-10, -15, 20, 30);
        
        // Cap/Spout
        ctx.fillStyle = '#fca5a5';
        ctx.fillRect(-6, -20, 12, 5);
        
        // Label
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('GAS', 0, 5);
        
        ctx.restore();
      }
    });

    // 6. Draw Player Car
    ctx.save();
    ctx.translate(state.x, -state.y);
    ctx.rotate(-state.angle);

    // Drop shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(-40, 5, 80, 10);

    // Chassis
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(-42, -12, 84, 16, 4);
    else ctx.fillRect(-42, -12, 84, 16);
    ctx.fill();

    // Cabin
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(-20, -32, 45, 20, 8);
    else ctx.fillRect(-20, -32, 45, 20);
    ctx.fill();

    // Window
    ctx.fillStyle = '#bae6fd';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(0, -28, 20, 12, 4);
    else ctx.fillRect(0, -28, 20, 12);
    ctx.fill();

    // Glowing trim
    ctx.fillStyle = '#06b6d4';
    ctx.fillRect(-40, -4, 80, 2);

    // Wheels
    const drawWheel = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-state.wheelAngle);

      // Tire
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.fill();

      // Hubcap
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();

      // Rim details (to show rotation)
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(-2, -10, 4, 20);
      ctx.fillRect(-10, -2, 20, 4);

      ctx.restore();
    };

    drawWheel(-24, 8);
    drawWheel(24, 8);

    ctx.restore();
  }

  loop(timestamp) {
    if (!this.lastTime) this.lastTime = timestamp;
    const dt = timestamp - this.lastTime;
    
    // Fixed time step for consistent physics
    if (dt >= 16) { 
      this.update();
      this.draw();
      this.lastTime = timestamp;
    }

    this.animationFrameId = requestAnimationFrame(this.loop);
  }
}