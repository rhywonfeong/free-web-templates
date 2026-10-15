import React, { useEffect, useRef, useState } from 'react';

const CoreTechnologies = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Canvas Network Animation (Replacing WebGL/ThreeJS dependency)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const nodes = [];
    const numNodes = Math.floor((width * height) / 20000); // Responsive node count
    
    for(let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: Math.random() > 0.3 ? '#10B981' : '#047857'
      });
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if(node.x < 0 || node.x > width) node.vx *= -1;
        if(node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      for(let i = 0; i < nodes.length; i++) {
        for(let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if(dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            // Dynamic opacity based on distance
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 - dist / 800})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 py-32 min-h-screen flex flex-col justify-center overflow-hidden bg-[#030706] selection:bg-[#10B981] selection:text-[#030706]"
      style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(16,185,129,0.01) 0px, rgba(16,185,129,0.01) 1px, transparent 1px, transparent 12px)' }}
    >
      {/* 2D Canvas Replacing ThreeJS */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"></canvas>

      {/* Global Container Framing Lines */}
      <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-emerald-500/5 pointer-events-none z-0"></div>
      <div className="absolute top-0 bottom-0 right-[5%] w-[1px] bg-emerald-500/5 pointer-events-none z-0"></div>
      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-emerald-500/[0.02] pointer-events-none z-0"></div>
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative">
          
        {/* Header area */}
        <div className={`mb-20 pl-4 relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute top-2 left-0 w-8 h-[2px] bg-[#10B981]"></div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 ml-8">Defense Infrastructure</h2>
          <p className="text-slate-400 max-w-xl ml-8 text-sm leading-relaxed">Discover our unified stack designed for scalability, absolute security, and seamless threat mitigation across distributed cloud networks.</p>
        </div>

        {/* Framed Grid Wrapper */}
        <div className={`relative transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Structural Boundary Lines & Intersections */}
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-emerald-500/10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-emerald-500/10 pointer-events-none"></div>
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-[1px] bg-emerald-500/10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-[-100vh] bottom-[-100vh] right-0 w-[1px] bg-emerald-500/10 pointer-events-none hidden md:block"></div>

          {/* Corner Nodes (Mini Squares) */}
          <div className="absolute top-[-2px] left-[-2px] w-1 h-1 bg-[#030706] border border-[#10B981]/60 hidden md:block"></div>
          <div className="absolute top-[-2px] right-[-2px] w-1 h-1 bg-[#030706] border border-[#10B981]/60 hidden md:block"></div>
          <div className="absolute bottom-[-2px] left-[-2px] w-1 h-1 bg-[#030706] border border-[#10B981]/60 hidden md:block"></div>
          <div className="absolute bottom-[-2px] right-[-2px] w-1 h-1 bg-[#030706] border border-[#10B981]/60 hidden md:block"></div>

          {/* L-Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#10B981]/50 -translate-x-full -translate-y-full hidden md:block"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#10B981]/50 translate-x-full translate-y-full hidden md:block"></div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
              
            {/* Inner Grid Dividers */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/10 z-20 pointer-events-none"></div>
            <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-white/10 z-20 pointer-events-none"></div>

            {/* Card 1: Foundation Layer */}
            <div className={`relative p-8 md:p-10 border-b md:border-b-0 border-white/10 group flex flex-col items-center text-center bg-[#050C09]/50 hover:bg-[#050C09] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <div className="h-56 w-full relative mb-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.4)_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                  {/* CSS Orbiting Rings */}
                  <div className="absolute w-40 h-40 rounded-full border border-[#10B981]/30 border-dashed animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-32 h-32 rounded-full border border-[#047857]/50 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="64" class="text-[#10B981] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"></iconify-icon>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Zero-Trust Architecture</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Implement continuous authentication and micro-segmentation to secure your perimeter natively.</p>
              
              <button className="flex items-stretch border border-white/10 hover:border-[#10B981]/50 transition-colors w-full md:w-auto group/btn">
                <span className="px-5 py-3 text-xs font-semibold tracking-widest text-slate-300 group-hover/btn:text-white uppercase bg-white/5 transition-colors">Learn More</span>
                <span className="px-4 py-3 border-l border-white/10 bg-white/5 flex items-center justify-center group-hover/btn:bg-[#10B981]/20 transition-colors overflow-hidden">
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-white text-lg transition-transform group-hover/btn:translate-x-1"></iconify-icon>
                </span>
              </button>
            </div>

            {/* Card 2: Application Suite (Highlighted) */}
            <div className={`relative p-8 md:p-10 border-b md:border-b-0 border-white/10 group flex flex-col items-center text-center overflow-hidden transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ background: 'linear-gradient(180deg, #022c22 0%, #030706 100%)' }}>
              <div className="absolute inset-0 border border-[#10B981]/30 z-10 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-80 z-10"></div>
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,transparent_70%)] pointer-events-none"></div>

              {/* Graphic Placeholder (Isometric CSS Plates) */}
              <div className="h-56 w-full relative mb-8 flex items-center justify-center perspective-[1000px]">
                <div className="relative w-32 h-32 group-hover:scale-110 transition-transform duration-700 ease-out" style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 border border-[#10B981]/40 bg-[#10B981]/10 backdrop-blur-sm rounded-md" style={{ transform: 'translateZ(0px)' }}></div>
                  <div className="absolute inset-[-10px] border border-[#10B981]/80 bg-[#10B981]/20 backdrop-blur-md rounded-md flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]" style={{ transform: 'translateZ(30px)' }}>
                     <div className="w-8 h-8 rounded border border-white/30 bg-white/5 flex items-center justify-center" style={{ transform: 'rotateX(-60deg) rotateZ(45deg)' }}>
                        <iconify-icon icon="solar:server-square-update-linear" class="text-white text-xl"></iconify-icon>
                     </div>
                  </div>
                  <div className="absolute top-4 left-4 right-[-20px] bottom-[-20px] border border-white/20 bg-white/5 backdrop-blur-sm rounded-md" style={{ transform: 'translateZ(60px)' }}></div>
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]" style={{ transform: 'translateZ(15px) translateX(-5px) translateY(-5px)' }}></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_10px_#34d399]" style={{ transform: 'translateZ(45px) translateX(5px) translateY(5px)' }}></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 relative z-20">Cloud Posture Management</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow relative z-20">Automate compliance checks and immediately remediate misconfigurations across your AWS, Azure, and GCP fleets.</p>
              
              <button className="flex items-stretch border border-[#10B981]/50 hover:border-[#10B981] transition-colors w-full md:w-auto relative z-20 group/btn shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="px-5 py-3 text-xs font-semibold tracking-widest text-white uppercase bg-[#10B981]/10 transition-colors">Start Scanning</span>
                <span className="px-4 py-3 border-l border-[#10B981]/50 bg-[#10B981]/20 flex items-center justify-center group-hover/btn:bg-[#10B981]/30 transition-colors overflow-hidden">
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-white text-lg transition-transform group-hover/btn:translate-x-1"></iconify-icon>
                </span>
              </button>
            </div>

            {/* Card 3: Threat Defense */}
            <div className={`relative p-8 md:p-10 group flex flex-col items-center text-center bg-[#050C09]/50 hover:bg-[#050C09] transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <div className="h-56 w-full relative mb-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.3)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  {/* CSS Orbiting Rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-[#10B981]/30 border-dotted animate-[spin_25s_linear_infinite]"></div>
                  <div className="absolute w-36 h-36 rounded-full border border-[#10B981]/20 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
                  <iconify-icon icon="solar:radar-outline" width="68" class="text-[#10B981] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"></iconify-icon>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">AI Threat Intelligence</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">Eliminate vulnerabilities and preempt costly breaches using behavioral models driven by neural heuristics.</p>
              
              <button className="flex items-stretch border border-white/10 hover:border-[#10B981]/50 transition-colors w-full md:w-auto group/btn">
                <span className="px-5 py-3 text-xs font-semibold tracking-widest text-slate-300 group-hover/btn:text-white uppercase bg-white/5 transition-colors">Learn More</span>
                <span className="px-4 py-3 border-l border-white/10 bg-white/5 flex items-center justify-center group-hover/btn:bg-[#10B981]/20 transition-colors overflow-hidden">
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-white text-lg transition-transform group-hover/btn:translate-x-1"></iconify-icon>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;