import React, { useEffect, useRef, useState } from 'react';

const Capabilities = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Handle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let lines = [];
    let animationFrameId;

    const initLines = () => {
      lines = [];
      const numberOfLines = Math.floor(width / 30);
      for (let i = 0; i < numberOfLines; i++) {
        lines.push(new GridLine(Math.random() * width));
      }
    };

    class GridLine {
      constructor(x) {
        this.x = x;
        this.y = Math.random() * height;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.y = -this.length;
          this.x = Math.random() * width;
        }
      }
      draw() {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, `rgba(16, 185, 129, 0)`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(16, 185, 129, 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initLines();
    };

    const animateCanvas = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw static vertical structural lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      for(let i = 0; i < width; i += 100) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
      }
      ctx.stroke();

      // Draw animated particles/lines
      lines.forEach(line => {
        line.update();
        line.draw();
      });
      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    window.addEventListener('resize', resize);
    resize();
    animateCanvas();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#030706] text-neutral-200 font-sans min-h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-[#10B981] selection:text-white relative border-t border-white/5"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(16,185,129,0.015) 0, rgba(16,185,129,0.015) 1px, transparent 1px, transparent 12px)' }}
      ></div>

      <canvas 
        ref={canvasRef} 
        id="grid-canvas" 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 w-full h-full"
      ></canvas>

      <main className="w-full max-w-6xl mx-auto px-4 py-24 relative z-10 flex flex-col items-center justify-center min-h-screen">
        
        {/* Framed Grid Container */}
        <div className="relative w-full p-6 md:p-12">
            
          {/* Container Lines & Corner Marks */}
          <div className="absolute inset-0 border border-emerald-500/20 pointer-events-none z-0"></div>
          
          {/* Mini corner squares */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-900 border border-emerald-500/50 z-10"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-900 border border-emerald-500/50 z-10"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-900 border border-emerald-500/50 z-10"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-900 border border-emerald-500/50 z-10"></div>

          {/* L-Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-500/40 -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-500/40 translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-500/40 -translate-x-1/2 translate-y-1/2 z-10"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-500/40 translate-x-1/2 translate-y-1/2 z-10"></div>

          {/* Header Section */}
          <div className={`mb-16 text-center space-y-4 relative transition-all duration-1000 ease-out ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm text-xs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Security Operations Center
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Full-spectrum defense.</h2>
          </div>

          {/* Main Layout: Background Track for Desktop */}
          <div className="relative w-full">
            {/* Desktop Horizontal Track */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[280px] bg-[#050C09]/80 backdrop-blur-md border border-emerald-500/10 rounded-2xl z-0"></div>

            {/* Grid Items Wrapper */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 items-center">

              {/* Item 1: Threat Hunting */}
              <div 
                className={`relative flex flex-col items-center justify-between py-10 md:h-[280px] bg-neutral-900/50 md:bg-transparent rounded-2xl md:rounded-none border border-neutral-800 md:border-none md:border-r md:border-emerald-500/20 group transition-all duration-700 ease-out delay-100 ${isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
              >
                <div className="text-center space-y-8 flex flex-col items-center">
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600 group-hover:text-emerald-400 transition-colors duration-300">Threat Hunting</h3>
                  <iconify-icon icon="solar:target-linear" class="text-5xl text-neutral-600 group-hover:text-emerald-500 group-hover:scale-110 transition-all duration-500 ease-out"></iconify-icon>
                </div>
                
              </div>

              {/* Item 2: Penetration Testing (Elevated/Active) */}
              <div 
                className={`relative flex flex-col items-center justify-between p-8 h-[380px] rounded-xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] z-20 md:mx-[-1px] transition-all duration-700 ease-out delay-200 ${isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
              >
                {/* Subtle Gradient Border Treatment */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-b from-emerald-500/60 via-emerald-800/20 to-neutral-900 z-0">
                  <div className="absolute inset-0 bg-[#030706] rounded-[11px] h-full w-full"></div>
                </div>
                
                {/* Inner content wrapper */}
                <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white mt-2">Penetration Testing</h3>
                  
                  <div className="relative flex items-center justify-center w-24 h-24 mt-4">
                    {/* Circular dashed line decoration */}
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-emerald-500/40 animate-[spin_20s_linear_infinite]"></div>
                    <iconify-icon icon="solar:bug-minimalistic-linear" class="text-6xl text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"></iconify-icon>
                  </div>

                  <button className="w-full mt-6 py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] group">
                    Request Audit
                    <iconify-icon icon="solar:arrow-right-linear" class="text-sm group-hover:translate-x-1 transition-transform"></iconify-icon>
                  </button>
                </div>
              </div>

              {/* Item 3: Compliance */}
              <div 
                className={`relative flex flex-col items-center justify-between py-10 md:h-[280px] bg-neutral-900/50 md:bg-transparent rounded-2xl md:rounded-none border border-neutral-800 md:border-none md:border-l md:border-emerald-500/20 group transition-all duration-700 ease-out delay-300 ${isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
              >
                <div className="text-center space-y-8 flex flex-col items-center">
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600 group-hover:text-emerald-400 transition-colors duration-300">Compliance</h3>
                  <iconify-icon icon="solar:lock-linear" class="text-5xl text-neutral-600 group-hover:text-rose-500 group-hover:scale-110 transition-all duration-500 ease-out"></iconify-icon>
                </div>
                
              </div>

              {/* Item 4: Incident Response */}
              <div 
                className={`relative flex flex-col items-center justify-between py-10 md:h-[280px] bg-neutral-900/50 md:bg-transparent rounded-2xl md:rounded-none border border-neutral-800 md:border-none md:border-l md:border-emerald-500/20 group transition-all duration-700 ease-out delay-500 ${isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
              >
                <div className="text-center space-y-8 flex flex-col items-center">
                  <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600 group-hover:text-emerald-400 transition-colors duration-300">Incident Response</h3>
                  <iconify-icon icon="solar:siren-linear" class="text-5xl text-neutral-600 group-hover:text-rose-500 group-hover:scale-110 transition-all duration-500 ease-out"></iconify-icon>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Capabilities;