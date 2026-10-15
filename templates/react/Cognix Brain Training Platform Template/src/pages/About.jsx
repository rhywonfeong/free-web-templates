import React, { useRef, useState } from 'react';
import Reveal from '../components/ui/Reveal';
import { Link } from 'react-router-dom';

// Reusable Spotlight Card for local use
const SpotlightCard = ({ children, className = "" }) => {
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
      className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px z-20 transition duration-300 mix-blend-overlay"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function About() {
  const features = [
    { title: 'Neuroplasticity', icon: 'solar:bolt-linear', color: 'text-fuchsia-400' },
    { title: 'Spatial Recall', icon: 'solar:database-linear', color: 'text-cyan-400' },
    { title: 'Executive Function', icon: 'solar:target-linear', color: 'text-indigo-400' }
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden">
      <Reveal className="max-w-3xl flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md animate-float-anim relative group cursor-pointer hover:border-white/30 transition-colors">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <iconify-icon icon="solar:info-circle-linear" className="text-3xl text-indigo-300 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          The Science Behind Cognix
        </h1>
        
        <p className="text-gray-400 leading-relaxed text-lg mb-12 max-w-2xl animate-fade-in-up stagger-1">
          We collaborate with leading neuroscientists to translate clinical cognitive exercises into engaging digital mechanics. Every interaction is designed to strengthen specific neural pathways.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 w-full mb-16">
          {features.map((trait, i) => (
            <Reveal key={i} delay={i * 150} direction="up" className="w-full">
              <SpotlightCard className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center group/card">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300">
                  <iconify-icon icon={trait.icon} className={`text-2xl ${trait.color}`}></iconify-icon>
                </div>
                <h3 className="font-medium text-white mb-2">{trait.title}</h3>
                <p className="text-xs text-gray-500">Targeted protocols for sustained improvement.</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} direction="up">
          <Link to="/" className="group px-6 py-3 rounded-full border border-white/20 text-xs font-medium uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <iconify-icon icon="solar:arrow-left-linear" className="text-lg group-hover:-translate-x-1 transition-transform"></iconify-icon>
            Back to Platform
          </Link>
        </Reveal>
      </Reveal>
    </div>
  );
}