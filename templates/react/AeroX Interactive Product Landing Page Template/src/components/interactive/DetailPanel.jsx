import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

export default function DetailPanel({ part, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle entry animation smoothly
  useEffect(() => {
    if (part) {
      setIsVisible(false);
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [part]);

  if (!part) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-zinc-500 p-8 text-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/30">
        <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
          <iconify-icon icon="solar:mouse-circle-linear" width="32"></iconify-icon>
        </div>
        <p className="text-lg font-medium text-zinc-400">Interactive Schema</p>
        <p className="text-sm mt-2 max-w-[250px]">Click on the glowing hotspots on the bicycle to explore detailed component specifications.</p>
      </div>
    );
  }

  return (
    <div className={clsx(
      "glass-panel rounded-2xl h-full flex flex-col overflow-hidden transition-all duration-500 ease-out transform shadow-2xl shadow-black/50 relative",
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
    )}>
      {/* Decorative top gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-zinc-400 hover:text-white hover:bg-black transition-colors"
      >
        <iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
      </button>

      <div className="relative h-48 w-full bg-zinc-900 overflow-hidden shrink-0">
        <img 
          src={part.image} 
          alt={part.name}
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
        <div className="absolute bottom-4 left-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400">
            <iconify-icon icon={part.icon} width="22"></iconify-icon>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{part.name}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col overflow-y-auto custom-scrollbar">
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          {part.description}
        </p>

        <div className="mt-auto">
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">Technical Specifications</h4>
          <ul className="space-y-3">
            {part.specs.map((spec, index) => (
              <li key={index} className="flex justify-between items-center text-sm group">
                <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">{spec.label}</span>
                <span className="font-medium text-zinc-200 text-right">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}