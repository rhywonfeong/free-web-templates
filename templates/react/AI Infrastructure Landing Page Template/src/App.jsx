import React, { useRef, useEffect, useState } from 'react';
import HeroThreeJS from './components/HeroThreeJS';
import { Search, Activity, Cpu, Database, ChevronRight } from 'lucide-react';

export default function App() {
  const scrollTrackRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTrackRef.current) {
        setIsScrolled(scrollTrackRef.current.scrollTop > 50);
      }
    };
    
    const currentRef = scrollTrackRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-zinc-300 font-sans selection:bg-indigo-500/30">
      {/* Background WebGL */}
      <HeroThreeJS trackRef={scrollTrackRef} />

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'tactile-glass border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center animate-pulse-ring relative">
                <Activity className="w-4 h-4 text-indigo-400 z-10" />
            </div>
            <span className="font-medium text-white tracking-tight">NEXUS AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="btn-physical-dark p-2 rounded-lg text-zinc-400 hover:text-white hidden sm:block">
              <Search className="w-4 h-4" />
            </button>
            <button className="btn-physical-light px-5 py-2 rounded-lg text-sm font-medium">
              Initialize
            </button>
          </div>
        </div>
      </nav>

      {/* Main Scrollable Area */}
      <div 
        ref={scrollTrackRef}
        className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden pt-32 pb-24 scroll-smooth"
      >
        <main className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <section className="min-h-[85vh] flex flex-col justify-center items-center text-center hero-content-sync relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              v2.0 Kernel Active
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto drop-shadow-2xl">
              Compute at the Edge of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 animate-bar-sweep bg-[length:200%_auto]">Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Deploy massive neural networks across distributed hardware clusters with zero latency. The ultimate operating system for AI infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="btn-physical-light px-8 py-3.5 rounded-xl text-base font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                Deploy Cluster
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="btn-physical-dark px-8 py-3.5 rounded-xl text-base font-medium text-white flex items-center justify-center w-full sm:w-auto">
                View Documentation
              </button>
            </div>
          </section>

          {/* Infrastructure Pipeline Section */}
          <section id="infrastructure" className="mt-32 pt-32 hardware-pipeline-section relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Neural Data Pipeline</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Hardware-accelerated processing from ingest to inference.</p>
            </div>

            <div className="pipeline-shell max-w-5xl mx-auto relative">
              <div className="pipeline-spine"></div>
              <div className="pipeline-spine-track">
                <div className="pipeline-beam"></div>
              </div>

              {/* Pipeline Step 1 */}
              <div className="pipeline-step step-emerald is-visible">
                 <div className="step-copy left">
                    <h3>Ingestion Node</h3>
                    <p>Raw data streams are normalized and buffered in ultra-fast volatile memory arrays.</p>
                 </div>
                 <div className="step-node">
                    <div className="step-node-ring"><div className="step-node-dot"></div></div>
                 </div>
                 <div className="step-card right pipeline-card cmd-panel p-6 tactile-inset">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium text-zinc-300">Buffer Status</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded">1.2 TB/s</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill bg-gradient-to-r from-emerald-600 to-emerald-400" style={{'--target': '85%'}}></div>
                    </div>
                 </div>
              </div>

              {/* Pipeline Step 2 */}
              <div className="pipeline-step step-zinc is-visible mt-32">
                 <div className="step-card left pipeline-card cmd-panel p-6 tactile-inset">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-indigo-400" />
                        <span className="text-sm font-medium text-zinc-300">Compute Core</span>
                      </div>
                      <span className="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-2 py-1 rounded">98% Util</span>
                    </div>
                     <div className="flex gap-2 h-20 items-end border-b border-white/5 pb-2">
                        <div className="w-1/4 bg-indigo-500/40 rounded-t-sm transition-all duration-300" style={{ animation: 'aura-compute-bar-1 2s ease-in-out infinite' }}></div>
                        <div className="w-1/4 bg-indigo-500/60 rounded-t-sm transition-all duration-300" style={{ animation: 'aura-compute-bar-2 2.5s ease-in-out infinite' }}></div>
                        <div className="w-1/4 bg-indigo-500/30 rounded-t-sm transition-all duration-300" style={{ animation: 'aura-compute-bar-3 1.8s ease-in-out infinite' }}></div>
                        <div className="w-1/4 bg-indigo-500/80 rounded-t-sm h-[90%] transition-all duration-300"></div>
                     </div>
                 </div>
                 <div className="step-node">
                    <div className="step-node-ring"><div className="step-node-dot"></div></div>
                 </div>
                 <div className="step-copy right">
                    <h3>Tensor Processing</h3>
                    <p>Distributed vector calculations across multi-GPU clusters using optimized CUDA kernels.</p>
                 </div>
              </div>

            </div>
          </section>

          {/* Spacer to allow scrolling to see the bottom of the content over the 3D background */}
          <div className="h-[40vh]"></div>
          
        </main>
      </div>
    </div>
  );
}