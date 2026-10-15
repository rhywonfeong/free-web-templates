import React, { useState, useEffect, useRef } from 'react';
import Reveal from '../components/ui/Reveal';

// Interactive Spotlight Card Component
const SpotlightCard = ({ children, className = "", glowClass = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px z-20 transition duration-300 mix-blend-overlay"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 40%)`,
        }}
      />
      {/* Background glow specifically matched to the card's theme */}
      <div 
        className={`pointer-events-none absolute z-0 transition-opacity duration-500 blur-[80px] w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 ${glowClass}`}
        style={{
          opacity: opacity * 0.5,
          left: position.x,
          top: position.y
        }}
      />
      {children}
    </div>
  );
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Parallax effect listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const impactStats = [
    {
      domain: "Memory Retention",
      metric: "+42%",
      desc: "Improvement in short-term spatial recall and complex pattern matching.",
      icon: "solar:database-linear",
      bgGradient: "from-cyan-500/30",
      hoverGradient: "hover:from-cyan-500/40",
      iconBg: "bg-cyan-500/10",
      iconBorder: "border-cyan-500/20",
      iconColor: "text-cyan-400",
      textGradient: "to-cyan-200",
      spotlightGlow: "bg-cyan-500"
    },
    {
      domain: "Processing Speed",
      metric: "+28%",
      desc: "Faster decision-making and reduced latency in complex choice-reaction scenarios.",
      icon: "solar:stopwatch-linear",
      bgGradient: "from-fuchsia-500/30",
      hoverGradient: "hover:from-fuchsia-500/40",
      iconBg: "bg-fuchsia-500/10",
      iconBorder: "border-fuchsia-500/20",
      iconColor: "text-fuchsia-400",
      textGradient: "to-fuchsia-200",
      spotlightGlow: "bg-fuchsia-500"
    },
    {
      domain: "Executive Focus",
      metric: "+35%",
      desc: "Extended concentration duration during high-interference cognitive tasks.",
      icon: "solar:target-linear",
      bgGradient: "from-indigo-500/30",
      hoverGradient: "hover:from-indigo-500/40",
      iconBg: "bg-indigo-500/10",
      iconBorder: "border-indigo-500/20",
      iconColor: "text-indigo-400",
      textGradient: "to-indigo-200",
      spotlightGlow: "bg-indigo-500"
    }
  ];

  const appModules = [
    {
      title: "Neural Pathways",
      desc: "Connect the sequences to establish stable connections.",
      icon: "lucide:network",
      gradient: "from-cyan-400 to-blue-600",
      textClass: "text-cyan-400",
      bgClass: "bg-cyan-500/20",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26155054-4542-4a59-9ca1-870225c4a134_800w.webp"
    },
    {
      title: "Quantum Logic",
      desc: "Resolve complex multi-variable state equations rapidly.",
      icon: "lucide:cpu",
      gradient: "from-orange-400 to-red-600",
      textClass: "text-orange-400",
      bgClass: "bg-orange-500/20",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5db50487-ddab-4bd6-b7a3-c84b85768235_800w.webp"
    },
    {
      title: "Synaptic Flow",
      desc: "Maintain continuous flow states under interference.",
      icon: "lucide:infinity",
      gradient: "from-fuchsia-400 to-purple-600",
      textClass: "text-fuchsia-400",
      bgClass: "bg-fuchsia-500/20",
      img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba40826a-9475-48c0-b76a-fa60ceeaf96d_800w.webp"
    }
  ];

  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-16 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 border-b border-white/5">
        
        {/* Content */}
        <div className="flex-1 w-full relative z-10">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up stagger-1">
            <div className="w-8 h-[1px] bg-fuchsia-500"></div>
            <span className="text-xs font-medium tracking-widest text-fuchsia-400 uppercase">Cognitive Evolution App</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 animate-fade-in-up stagger-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Expand Your<br/>Boundaries
          </h1>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
            <button className="group relative px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <iconify-icon icon="solar:apple-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              <span className="text-sm font-medium">App Store</span>
            </button>
            <button className="group relative px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <iconify-icon icon="solar:play-stream-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
              <span className="text-sm font-medium">Google Play</span>
            </button>
          </div>
        </div>

        {/* Hero Graphic (Phone Mockup with Parallax) */}
        <div 
          className="flex-1 relative w-full flex justify-center lg:justify-end perspective-[1000px] animate-fade-in-up stagger-4 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-600/40 blur-[80px]"></div>
          <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-fuchsia-600/30 blur-[60px]"></div>

          <div className="animate-float-phone relative w-[280px] h-[580px] rounded-[40px] p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_30px_60px_rgba(139,92,246,0.3),inset_0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-500 group">
            <div className="w-full h-full rounded-[38px] bg-[#0A0A1A] overflow-hidden relative border border-black/50 transform-gpu isolate">
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-1/3 h-full bg-black rounded-b-xl"></div>
              </div>
              
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[38px]">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" alt="App Background" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A1A]/50 to-[#0A0A1A]"></div>
                <div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay"></div>
              </div>

              <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                <h3 className="text-2xl tracking-tight font-medium mb-1 drop-shadow-md">Synapse Flow</h3>
                <p className="text-xs text-indigo-300 mb-4 drop-shadow-md">Level 12 • Spatial</p>
                
                <div className="flex gap-3 mb-6 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex-shrink-0 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-fuchsia-400 animate-pulse"></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur border border-white/10 flex-shrink-0 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="w-4 h-4 rounded-sm border border-indigo-400 rotate-45"></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur border border-white/10 flex-shrink-0 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="w-5 h-5 rounded-sm border border-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Technology Section */}
      <section className="relative flex flex-col items-center text-center">
        <div className="w-px h-16 bg-gradient-to-b from-fuchsia-500 to-transparent absolute -top-16 lg:-top-24"></div>
        
        <Reveal className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">Framework</span>
            <div className="w-8 h-[1px] bg-indigo-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Architecture of the Mind</h2>
          <div className="flex items-start gap-4 text-left justify-center bg-white/5 hover:bg-white/10 transition-colors duration-500 p-4 rounded-2xl border border-white/10 backdrop-blur-sm cursor-default">
            <iconify-icon icon="solar:cpu-bolt-linear" className="text-2xl text-fuchsia-400 mt-1 flex-shrink-0" stroke-width="1.5"></iconify-icon>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Cognix is engineered to accelerate neural pathways through targeted, progressive mechanics. Built on a foundation of adaptive learning algorithms, it ensures consistent cognitive engagement.
            </p>
          </div>
        </Reveal>

        {/* Interactive CSS Chart Card */}
        <Reveal delay={200} className="w-full max-w-4xl rounded-2xl bg-[#090818]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-indigo-500/10 blur-[50px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-white/10 pb-4 relative z-10 gap-4">
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:chart-square-linear" className="text-indigo-400 text-xl" stroke-width="1.5"></iconify-icon>
              <span className="text-sm font-medium">Metrics: Median Performance Delta</span>
            </div>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 bg-indigo-900 rounded-sm"></div> Baseline</span>
              <span className="flex items-center gap-2 text-white"><div className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div> Active Module</span>
            </div>
          </div>

          <div className="relative h-64 w-full flex items-end justify-between px-2 md:px-12 z-10">
            {/* Guide Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[120, 100, 80, 60, 40, 20, 0].map((val) => (
                <div key={val} className={`w-full h-px relative ${val === 100 ? 'bg-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]' : val === 0 ? 'bg-white/10' : 'bg-white/5'}`}>
                  <span className="absolute -left-6 -top-2 text-[10px] text-gray-500 font-medium">{val}</span>
                </div>
              ))}
            </div>

            {/* Bars Data Mapping */}
            {[
              { label: '< 18 YRS', base: 30, active: 70 },
              { label: '18 - 35', base: 40, active: 60 },
              { label: '36 - 50', base: 25, active: 75 },
              { label: '51 - 65', base: 35, active: 65 },
              { label: '65+ YRS', base: 20, active: 80 }
            ].map((col, i) => (
              <div key={i} className="w-10 md:w-16 h-full flex flex-col justify-end group/bar relative z-10 mx-1 cursor-crosshair">
                {/* Tooltip on hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                  +{col.active - col.base}% Delta
                </div>
                
                <div 
                  className="w-full bg-gradient-to-t from-indigo-900/50 to-indigo-600/50 border border-indigo-500/20 rounded-t-sm mb-1 transition-all duration-500 ease-out group-hover/bar:brightness-125" 
                  style={{ height: `${col.base}%` }}
                ></div>
                <div 
                  className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 border-t border-x border-cyan-300/50 rounded-t-sm shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-500 ease-out group-hover/bar:brightness-125 group-hover/bar:-translate-y-2 group-hover/bar:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                  style={{ height: `${col.active}%` }}
                ></div>
              </div>
            ))}
          </div>

          <div className="flex justify-between px-2 md:px-12 mt-4 text-[10px] text-gray-500 uppercase tracking-widest relative z-10 font-medium">
            <span className="w-10 md:w-16 text-center">&lt; 18</span>
            <span className="w-10 md:w-16 text-center">18-35</span>
            <span className="w-10 md:w-16 text-center">36-50</span>
            <span className="w-10 md:w-16 text-center">51-65</span>
            <span className="w-10 md:w-16 text-center">65+</span>
          </div>
        </Reveal>
      </section>

      {/* App Showcase & Interactive Modules */}
      <section className="relative flex flex-col items-center pt-16">
        <Reveal className="w-full">
          <div className="relative w-full max-w-5xl h-[600px] md:h-[800px] flex items-center justify-center">
            
            {/* Center Phone */}
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px] rounded-[45px] p-[2px] bg-gradient-to-b from-white/30 via-white/5 to-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_100px_rgba(139,92,246,0.15)] z-20 group">
              <div className="w-full h-full rounded-[43px] bg-[#0A0A1A] overflow-hidden relative transform-gpu isolate">
                
                {/* Dynamic Crossfading Images */}
                <div className="absolute inset-0 z-0 h-[65%] overflow-hidden rounded-t-[43px]">
                  {appModules.map((mod, idx) => (
                    <img 
                      key={idx}
                      src={mod.img} 
                      alt={mod.title}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 mix-blend-screen ${activeModuleIndex === idx ? 'opacity-70 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`} 
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/90 to-transparent"></div>
                </div>
                
                {/* Dynamic Text Content */}
                <div className="absolute bottom-0 w-full p-6 text-center pb-12 z-10 flex flex-col">
                  <div className="h-24 mb-6 flex flex-col justify-end items-center">
                    <h3 className="text-2xl font-semibold tracking-tight mb-2 text-white transition-opacity duration-300 flex items-center justify-center gap-2">
                      <iconify-icon icon={appModules[activeModuleIndex].icon} className={`text-2xl ${appModules[activeModuleIndex].textClass} transition-colors duration-300`}></iconify-icon>
                      {appModules[activeModuleIndex].title}
                    </h3>
                    <p className="text-sm text-gray-400 transition-opacity duration-300">
                      {appModules[activeModuleIndex].desc}
                    </p>
                  </div>
                  
                  {/* Module Toggle Buttons */}
                  <div className="flex justify-center gap-4">
                    {appModules.map((mod, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveModuleIndex(idx)}
                        className={`w-14 h-14 rounded-2xl p-[1px] bg-gradient-to-br transition-all duration-300 cursor-pointer ${activeModuleIndex === idx ? `${mod.gradient} -translate-y-2 shadow-lg` : 'from-white/10 to-white/5 hover:-translate-y-1 hover:from-white/20'}`}
                      >
                        <div className="w-full h-full bg-[#0A0A1A] rounded-2xl flex items-center justify-center relative overflow-hidden">
                          <div className={`absolute inset-0 transition-opacity duration-300 ${activeModuleIndex === idx ? mod.bgClass : 'bg-transparent'}`}></div>
                          <iconify-icon icon={mod.icon} className={`text-2xl transition-colors duration-300 ${activeModuleIndex === idx ? mod.textClass : 'text-gray-500'}`}></iconify-icon>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Module Icons (with Parallax offset) */}
            <div 
              className="hidden md:block absolute left-[5%] top-[20%] w-32 h-32 rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10 backdrop-blur-xl group cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
              style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
              onClick={() => setActiveModuleIndex(1)}
            >
              <div className="animate-float-anim w-full h-full bg-[#0A0A1A]/80 rounded-[31px] overflow-hidden relative transform-gpu isolate">
                <img src={appModules[1].img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-screen duration-500" alt="Logic" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-0 w-full text-center text-xs font-medium text-white tracking-widest uppercase">Logic</div>
              </div>
            </div>
            
            <div 
              className="hidden md:block absolute left-[15%] bottom-[15%] w-24 h-24 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 backdrop-blur-xl group cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
              style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}
            >
              <div className="animate-float-anim-delayed w-full h-full bg-[#0A0A1A]/80 rounded-[23px] overflow-hidden relative transform-gpu isolate">
                <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-screen duration-500" alt="Structure" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-2 left-0 w-full text-center text-[10px] font-medium text-white tracking-widest uppercase">Struct</div>
              </div>
            </div>

            <div 
              className="hidden md:block absolute right-[10%] top-[30%] w-36 h-36 rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 backdrop-blur-xl group cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
              style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
              onClick={() => setActiveModuleIndex(2)}
            >
               <div className="animate-float-tilt w-full h-full bg-[#0A0A1A]/80 rounded-[31px] overflow-hidden relative transform-gpu isolate">
                <img src={appModules[2].img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-screen duration-500" alt="Flow" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-0 w-full text-center text-xs font-medium text-white tracking-widest uppercase">Flow</div>
              </div>
            </div>

            <div 
              className="hidden md:block absolute right-[20%] bottom-[25%] w-20 h-20 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10 backdrop-blur-xl group cursor-pointer transition-transform duration-700 ease-out hover:scale-105"
              style={{ transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)` }}
            >
              <div className="animate-float-anim-delayed w-full h-full bg-[#0A0A1A]/80 rounded-[15px] overflow-hidden relative flex items-center justify-center transform-gpu isolate">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <iconify-icon icon="solar:augmented-reality-linear" className="text-3xl text-indigo-300 group-hover:scale-110 group-hover:text-white transition-all duration-300"></iconify-icon>
              </div>
            </div>
            
          </div>
        </Reveal>
      </section>

      {/* Clinical Impact Section (Interactive Spotlight Cards) */}
      <section className="relative flex flex-col items-center pt-24 pb-8 border-t border-white/5">
        <Reveal className="text-center mb-16 px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">Clinical Impact</span>
            <div className="w-8 h-[1px] bg-cyan-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Measurable Cognitive Growth</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Longitudinal studies and user telemetry indicate significant improvements across primary cognitive domains after 30 days of consistent engagement.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
          {impactStats.map((stat, i) => (
            <Reveal key={i} delay={i * 150} direction="up">
              <SpotlightCard 
                className={`group p-[1px] rounded-3xl bg-gradient-to-b ${stat.bgGradient} to-white/5 ${stat.hoverGradient}`}
                glowClass={stat.spotlightGlow}
              >
                <div className="h-full bg-[#0A0A1A]/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-start relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} border ${stat.iconBorder} flex items-center justify-center mb-8 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <iconify-icon icon={stat.icon} className="text-2xl"></iconify-icon>
                  </div>
                  <div className={`text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white ${stat.textGradient} mb-3 group-hover:translate-x-1 transition-transform duration-300`}>
                    {stat.metric}
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3 tracking-tight">{stat.domain}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 pt-16 group">
        <Reveal direction="left" className="relative w-64 h-64 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center z-20 shadow-[0_0_40px_rgba(37,99,235,0.6),inset_0_5px_15px_rgba(255,255,255,0.4)] relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
            <iconify-icon icon="solar:programming-linear" className="text-white text-4xl relative z-10" stroke-width="1.5"></iconify-icon>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full"></div>
          </div>
          
          <div className="absolute top-2 w-16 h-16 rounded-full bg-indigo-700 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] animate-pulse group-hover:translate-y-4 transition-transform duration-700"></div>
          <div className="absolute bottom-4 w-20 h-20 rounded-full bg-blue-800 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] animate-bounce group-hover:-translate-x-4 transition-transform duration-700" style={{animationDuration: '3s'}}></div>
          <div className="absolute left-4 w-12 h-12 rounded-full bg-indigo-900 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] group-hover:translate-x-6 transition-transform duration-500"></div>
          <div className="absolute right-2 w-[4rem] h-[4rem] rounded-full bg-cyan-700 shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.5)] group-hover:-translate-y-6 transition-transform duration-500"></div>
          
          <div className="absolute -left-6 top-1/4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl z-30 flex items-center justify-center animate-float-anim cursor-pointer hover:bg-white/20 transition-colors">
            <div className="w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)] animate-pulse"></div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={200} className="text-center lg:text-left">
          <span className="text-xs font-medium tracking-widest text-fuchsia-400 uppercase mb-4 block">Begin Your Journey</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">40+ Neuro-<br/>Architected Games</h2>
          <button className="group/btn px-8 py-4 rounded-full border border-white/20 bg-white/5 text-sm font-medium uppercase tracking-widest hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 mx-auto lg:mx-0">
            Explore Catalog
            <iconify-icon icon="solar:arrow-right-linear" className="text-lg group-hover/btn:translate-x-2 transition-transform duration-300"></iconify-icon>
          </button>
        </Reveal>
      </section>

    </div>
  );
}