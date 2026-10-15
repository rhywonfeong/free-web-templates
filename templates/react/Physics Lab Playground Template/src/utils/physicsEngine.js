/**
 * Custom 2D Physics Engine Core
 * Handles Euler integration, distance constraints, boundary collisions, elastic collisions, and continuous forces.
 */

export function updatePhysics(particles, width, height, settings) {
  const { gravity, restitution, damping, constraints, clothStiffness, fanActive, fanDirection = 'up' } = settings;

  // 1. Integration Step (Apply forces and update positions)
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    if (p.isHeld || p.isStatic) continue; // Skip physics if dragging or static

    // Apply global gravity with particle's individual multiplier
    const currentGravity = gravity * (p.gravityMultiplier !== undefined ? p.gravityMultiplier : 1);
    p.vy += currentGravity;

    // Apply Fan Force if active (directional wind with turbulence)
    if (fanActive) {
      const force = 0.6; // Strong push
      const turbulence = (Math.random() - 0.5) * 1.0; 

      if (fanDirection === 'up') {
        p.vy -= force;
        p.vx += turbulence;
      } else if (fanDirection === 'down') {
        p.vy += force;
        p.vx += turbulence;
      } else if (fanDirection === 'left') {
        p.vx -= force;
        p.vy += turbulence;
      } else if (fanDirection === 'right') {
        p.vx += force;
        p.vy += turbulence;
      }
    }

    // Apply continuous forces from attractors/repellers
    for (let j = 0; j < particles.length; j++) {
      if (i === j) continue;
      const p2 = particles[j];
      
      if (p2.forceStrength) {
        const dx = p2.x - p.x;
        const dy = p2.y - p.y;
        const distSq = dx * dx + dy * dy;
        
        // Minimum distance guard to prevent singularity explosion
        if (distSq > 200) {
          const dist = Math.sqrt(distSq);
          // Inverse square law: F = strength / d^2. Apply directly to velocity.
          const force = p2.forceStrength / distSq;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    }

    // Apply damping (friction)
    p.vx *= damping;
    p.vy *= damping;

    // Update position
    p.x += p.vx;
    p.y += p.vy;

    // Boundary Collisions
    const bounce = (p.restitution !== undefined ? p.restitution : 0.8) * restitution;
    
    // Boundary rest states depending on gravity and fan
    const isPushedUp = fanActive && fanDirection === 'up';
    const isPushedDown = fanActive && fanDirection === 'down';
    const isPushedLeft = fanActive && fanDirection === 'left';
    const isPushedRight = fanActive && fanDirection === 'right';
    
    if (p.x - p.radius < 0) {
      p.x = p.radius;
      p.vx *= -bounce;
      if (Math.abs(p.vx) < 0.5 && isPushedLeft) p.vx = 0;
    } else if (p.x + p.radius > width) {
      p.x = width - p.radius;
      p.vx *= -bounce;
      if (Math.abs(p.vx) < 0.5 && isPushedRight) p.vx = 0;
    }

    if (p.y - p.radius < 0) {
      p.y = p.radius;
      p.vy *= -bounce;
      // Stop completely if floating very slowly on the ceiling
      if (Math.abs(p.vy) < 0.5 && (currentGravity < 0 || isPushedUp)) {
        p.vy = 0;
      }
    } else if (p.y + p.radius > height) {
      p.y = height - p.radius;
      p.vy *= -bounce;
      // Stop completely if bouncing very slowly on the floor
      if (Math.abs(p.vy) < 0.5 && (currentGravity > 0 || isPushedDown) && !isPushedUp) {
        p.vy = 0;
      }
    }
  }

  // 1.5 Constraint Resolution Step (Distance Constraints for Cloth)
  if (constraints && constraints.length > 0) {
    const iterations = 5; // Higher = stiffer constraints and more stable mesh
    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < constraints.length; i++) {
        const c = constraints[i];
        const dx = c.p2.x - c.p1.x;
        const dy = c.p2.y - c.p1.y;
        const distSq = dx * dx + dy * dy;
        
        if (distSq === 0) continue;
        
        const dist = Math.sqrt(distSq);
        const diff = (dist - c.restLength) / dist;

        const invMass1 = c.p1.isStatic || c.p1.isHeld ? 0 : 1 / c.p1.mass;
        const invMass2 = c.p2.isStatic || c.p2.isHeld ? 0 : 1 / c.p2.mass;
        const sumInvMass = invMass1 + invMass2;

        if (sumInvMass === 0) continue;

        // Use global clothStiffness if defined, fallback to constraint's stiffness.
        // Capped at 1.0 to prevent explosive overcorrection
        const stiffness = Math.min(1.0, clothStiffness !== undefined ? clothStiffness : (c.stiffness || 1));
        const correction = diff * (1 / sumInvMass) * stiffness;
        
        const cx = (dx / dist) * correction;
        const cy = (dy / dist) * correction;

        // Position AND Velocity correction. 
        if (invMass1 > 0) {
          const moveX = cx * invMass1;
          const moveY = cy * invMass1;
          c.p1.x += moveX;
          c.p1.y += moveY;
          c.p1.vx += moveX;
          c.p1.vy += moveY;
        }
        if (invMass2 > 0) {
          const moveX = cx * invMass2;
          const moveY = cy * invMass2;
          c.p2.x -= moveX;
          c.p2.y -= moveY;
          c.p2.vx -= moveX;
          c.p2.vy -= moveY;
        }
      }
    }
  }

  // 2. Collision Resolution Step (Circle vs Circle)
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const p1 = particles[i];
      const p2 = particles[j];

      // Skip self-collision for cloth particles to maintain stability
      if (p1.type === 'cloth' && p2.type === 'cloth') continue;

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const distSq = dx * dx + dy * dy;
      const minDist = p1.radius + p2.radius;

      // Check overlap
      if (distSq < minDist * minDist) {
        const dist = Math.sqrt(distSq) || 0.01;
        const overlap = minDist - dist;

        // Collision normal
        const nx = dx / dist;
        const ny = dy / dist;

        // Inverse mass (0 for static objects)
        const invMass1 = p1.isStatic || p1.isHeld ? 0 : 1 / p1.mass;
        const invMass2 = p2.isStatic || p2.isHeld ? 0 : 1 / p2.mass;
        const invMassSum = invMass1 + invMass2;

        if (invMassSum === 0) continue; // Both objects are static

        // Positional correction (move them apart based on mass)
        const ratio1 = invMass1 / invMassSum;
        const ratio2 = invMass2 / invMassSum;

        if (invMass1 > 0) {
          p1.x -= nx * overlap * ratio1;
          p1.y -= ny * overlap * ratio1;
        }
        if (invMass2 > 0) {
          p2.x += nx * overlap * ratio2;
          p2.y += ny * overlap * ratio2;
        }

        // Relative velocity calculation
        const dvx = p2.vx - p1.vx;
        const dvy = p2.vy - p1.vy;
        const velAlongNormal = dvx * nx + dvy * ny;

        // Do not resolve if separating
        if (velAlongNormal > 0) continue;

        // Restitution (bounciness)
        const e1 = p1.restitution !== undefined ? p1.restitution : 0.8;
        const e2 = p2.restitution !== undefined ? p2.restitution : 0.8;
        const e = Math.min(e1, e2) * restitution;

        // Calculate impulse scalar
        let jImpulse = -(1 + e) * velAlongNormal;
        jImpulse /= invMassSum;

        // Apply impulse
        const impulseX = jImpulse * nx;
        const impulseY = jImpulse * ny;

        if (invMass1 > 0) {
          p1.vx -= impulseX * invMass1;
          p1.vy -= impulseY * invMass1;
        }
        if (invMass2 > 0) {
          p2.vx += impulseX * invMass2;
          p2.vy += impulseY * invMass2;
        }
      }
    }
  }
}