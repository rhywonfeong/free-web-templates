import { useEffect, useRef } from 'react';
import RevealText from './RevealText';

// Custom 2D Canvas implementation of a 3D particle globe to avoid heavy Three.js dependencies
const CanvasGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let animationId;
    let width, height;
    let time = 0;
    
    const corePoints = [];
    const ringPoints = [];
    
    // Generate Core Sphere Points
    const numCore = 180;
    for (let i = 0; i < numCore; i++) {
      const phi = Math.acos(-1 + (2 * i) / numCore);
      const theta = Math.sqrt(numCore * Math.PI) * phi;
      corePoints.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi)
      });
    }

    // Generate Ring Points
    const numRing = 400;
    for (let i = 0; i < numRing; i++) {
      const r = 1.2 + Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      ringPoints.push({
        x: r * Math.cos(theta),
        y: (Math.random() - 0.5) * 0.2, // flat disk
        z: r * Math.sin(theta),
        speed: 0.5 + Math.random() * 0.5
      });
    }

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resize);
    resize();

    const drawPoint = (p, scale, baseColor, isRing) => {
      // Rotate around Y and slightly X/Z
      const rotY = isRing ? -time * 0.5 : time;
      const tiltX = 0.4;
      
      // Y Rotation
      let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
      let z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY);
      let y1 = p.y;

      // X Tilt
      let y2 = y1 * Math.cos(tiltX) - z1 * Math.sin(tiltX);
      let z2 = z1 * Math.cos(tiltX) + y1 * Math.sin(tiltX);
      let x2 = x1;

      // 3D Projection
      const fov = 2.5;
      const zOffset = 3.5;
      const zFinal = z2 + zOffset;
      if (zFinal <= 0.1) return; // Behind camera

      const projScale = fov / zFinal;
      const xScreen = (x2 * projScale) * (width / 2) + width / 2;
      const yScreen = (y2 * projScale) * (width / 2) + height / 2;
      
      // Size and Opacity based on depth
      const size = Math.max(0.1, (isRing ? 0.8 : 1.2) * projScale * scale);
      const alpha = Math.max(0.1, Math.min(1, 1.5 - (z2 * 0.5))) * (isRing ? 0.5 : 0.8);

      ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(xScreen, yScreen, size, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Draw sorted by approximate depth to look right
      const allPoints = [
        ...corePoints.map(p => ({...p, isRing: false, color: '228, 228, 231'})),
        ...ringPoints.map(p => ({...p, isRing: true, color: '168, 162, 158'}))
      ];

      allPoints.forEach(p => drawPoint(p, 2.5, p.color, p.isRing));
      
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[5] opacity-80 pointer-events-none" />;
};

export default function Features() {
  return (
    <div className="relative max-w-[1200px] mx-auto px-6 py-12 md:py-24 z-10 flex flex-col justify-center">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:px-8">
        <RevealText 
          text="Built on Experience" 
          className="text-5xl md:text-[5rem] w-full md:w-[65%] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)]"
          as="h1"
        />
        <p className="text-sm md:text-base text-zinc-400 w-full md:w-[30%] max-w-sm text-balance mb-2 md:mb-4 font-normal animate-fade-up opacity-0 delay-200">
          Founded in 2020 by industry veterans with over 20 years of combined experience, DRT has rapidly become Europe's trusted partner for microwave transmission projects.
        </p>
      </header>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 h-auto md:h-[580px] lg:px-8">
        
        {/* Column 1: Info Cards */}
        <div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
          
          <article className="relative group rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-400/40 via-zinc-700/10 to-black/80 flex-1 overflow-hidden min-h-[160px] shadow-[0_8px_20px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.6)] backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <div className="relative z-10 p-7 h-full flex flex-col justify-between">
              <h3 className="text-xl lg:text-2xl font-geist font-light tracking-tighter text-emerald-50 w-3/4 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Our Core Philosophy.</h3>
              <button className="flex items-center justify-between bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-full px-4 py-2.5 border border-zinc-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(0,0,0,0.4),0_4px_6px_rgba(0,0,0,0.5)] mt-4 group-hover:from-zinc-600 group-hover:to-zinc-800 active:translate-y-px active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 w-full cursor-pointer">
                <span className="text-xs font-normal text-zinc-200 font-geist">Explore Vision</span>
                <iconify-icon icon="solar:arrow-right-up-linear" class="text-zinc-300 text-lg"></iconify-icon>
              </button>
            </div>
          </article>

          <article className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-400/30 via-zinc-700/10 to-black/80 flex-1 overflow-hidden min-h-[160px] shadow-[0_8px_20px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)] group">
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.6)] backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <CanvasGlobe />
            <div className="relative z-10 p-7 h-full flex flex-col justify-between pointer-events-none">
              <h3 className="text-xl lg:text-2xl font-geist font-light tracking-tighter text-amber-50/90 w-3/4 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Global Ecosystems.</h3>
              <div className="flex justify-end pointer-events-auto">
                <button className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-zinc-300 text-xl"></iconify-icon>
                </button>
              </div>
            </div>
          </article>

          <article className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-zinc-400/30 via-zinc-700/10 to-black/80 flex-1 overflow-hidden min-h-[160px] shadow-[0_8px_20px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)] group">
            <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/70 to-zinc-950/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.6)] backdrop-blur-xl rounded-[calc(2rem-1px)] z-0"></div>
            <div className="relative z-10 p-7 h-full flex flex-col justify-between">
              <h3 className="text-xl lg:text-2xl font-geist font-light tracking-tighter text-rose-50/90 w-3/4 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Sustainable Digital Practices.</h3>
              <div className="flex justify-end">
                <button className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-zinc-300 text-xl"></iconify-icon>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Column 2: Tall Image Card */}
        <article className="md:col-span-4 h-[400px] md:h-full relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/30 via-white/5 to-black/80 overflow-hidden group cursor-pointer shadow-[0_12px_24px_rgba(0,0,0,0.7),0_4px_8px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] overflow-hidden z-0 bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.8)]">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" alt="Futuristic Architecture" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full p-7 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 backdrop-blur-md border border-zinc-600/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.5)] w-max">
              <iconify-icon icon="solar:ruler-angular-linear" class="text-indigo-300 text-sm"></iconify-icon>
              <span className="text-xs font-normal text-zinc-200 font-geist">Architecture</span>
            </div>
            <div className="flex justify-between items-end gap-4">
              <h3 className="text-2xl lg:text-3xl font-geist font-light tracking-tighter text-white leading-tight [text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">Engineered for<br/>Tomorrow.</h3>
              <button className="w-11 h-11 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-300 border border-white text-zinc-900 flex flex-shrink-0 items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 active:scale-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300">
                <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl"></iconify-icon>
              </button>
            </div>
          </div>
        </article>

        {/* Column 3: Stacked Image Cards */}
        <div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
          
          <article className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/30 via-white/5 to-black/80 flex-1 overflow-hidden min-h-[250px] group cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] overflow-hidden z-0 bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.8)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" alt="Abstract Layers" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-7 flex flex-col justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 backdrop-blur-md border border-zinc-600/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.5)] w-max">
                <iconify-icon icon="solar:layers-linear" class="text-purple-300 text-sm"></iconify-icon>
                <span className="text-xs font-normal text-zinc-200 font-geist">Abstractions</span>
              </div>
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-xl lg:text-2xl font-geist font-light tracking-tighter text-white leading-tight [text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">Where Art Meets<br/>Computation.</h3>
                <button className="w-10 h-10 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-300 border border-white text-zinc-900 flex flex-shrink-0 items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 active:scale-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </article>

          <article className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/30 via-white/5 to-black/80 flex-1 overflow-hidden min-h-[250px] group cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] overflow-hidden z-0 bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-4px_8px_rgba(0,0,0,0.8)]">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" alt="Components" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-[#09090b]/20"></div>
            </div>
            <div className="relative z-10 h-full p-7 flex flex-col justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-b from-zinc-800/80 to-zinc-900/80 backdrop-blur-md border border-zinc-600/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.5)] w-max">
                <iconify-icon icon="solar:box-minimalistic-linear" class="text-blue-300/80 text-sm"></iconify-icon>
                <span className="text-xs font-normal text-zinc-200 font-geist">Components</span>
              </div>
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-xl lg:text-2xl font-geist font-light tracking-tighter text-white leading-tight [text-shadow:0_2px_6px_rgba(0,0,0,0.8)]">Refined, Tactile,<br/>Responsive.</h3>
                <button className="w-10 h-10 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-300 border border-white text-zinc-900 flex flex-shrink-0 items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 active:scale-95 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}