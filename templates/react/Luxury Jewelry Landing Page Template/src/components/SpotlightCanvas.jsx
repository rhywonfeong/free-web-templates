import React, { useEffect, useRef } from 'react';

export default function SpotlightCanvas({ progress }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawSpotlight();
    };

    const drawSpotlight = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      
      ctx.clearRect(0, 0, W, H);
      
      let gx, gy, size, col1, col2;

      if (progress < 0.33) {
        // Phase 1: Warm amber — emerging from darkness
        const t = progress / 0.33;
        size = 250 + t * 180; 
        gx = cx; 
        gy = cy;
        col1 = `rgba(201,168,76,${0.10 + t*0.12})`;
        col2 = `rgba(180,130,40,${0.06 + t*0.06})`;
      } else if (progress < 0.66) {
        // Phase 2: Cool silver sweep — inspecting the piece
        const t = (progress - 0.33) / 0.33;
        size = 300; 
        gx = cx - 160 + t*320; 
        gy = cy;
        col1 = `rgba(180,200,220,${0.12 + t*0.05})`;
        col2 = `rgba(140,170,190,0.07)`;
      } else {
        // Phase 3: Rich gold convergence — best light
        const t = (progress - 0.66) / 0.34;
        size = 280 + t*80;
        gx = cx + Math.sin(t*Math.PI)*60; 
        gy = cy - t*30;
        col1 = `rgba(201,168,76,${0.20 + t*0.15})`;
        col2 = `rgba(232,213,163,${0.10 + t*0.08})`;
      }

      // Ensure gradient radius is positive
      const radius = Math.max(0.1, size);
      
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
      grad.addColorStop(0, col1);
      grad.addColorStop(0.5, col2);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    };

    window.addEventListener('resize', resize);
    resize(); // Initial draw

    // Update whenever progress changes
    drawSpotlight();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [progress]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
    />
  );
}