import React, { useState, useEffect } from 'react';

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate rendering progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Jump by 5-20%
      });
    }, 150);

    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1600);

    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center transition-opacity duration-[800ms]" 
      style={{ opacity }}
    >
      <div className="relative flex flex-col items-center w-full max-w-lg px-8">
        
        {/* Realistic Rendering UI */}
        <div className="w-full flex justify-between text-xs font-geist text-zinc-500 mb-2 uppercase tracking-widest">
          <span>Rendering Sequence</span>
          <span className="text-red-500 font-bold">{Math.min(progress, 100)}%</span>
        </div>
        
        <div className="w-full h-8 bg-zinc-900 border border-zinc-800 rounded relative overflow-hidden flex items-center shadow-[0_0_20px_rgba(239,68,68,0.1)] p-1">
          {/* Grid background for timeline look */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_11px)]"></div>
          
          {/* Progress Bar */}
          <div 
            className="h-full bg-gradient-to-r from-red-800 via-red-600 to-red-500 relative transition-all duration-150 ease-out z-10 shadow-[0_0_15px_rgba(239,68,68,0.8)] rounded-sm"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            {/* Playhead marker on progress tip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white shadow-[0_0_10px_white]"></div>
          </div>
        </div>

        <div className="w-full flex justify-between mt-2 text-[10px] font-mono text-zinc-600">
          <span>FRAME: {Math.floor(progress * 24.5)} / 2450</span>
          <span className="animate-pulse text-red-500/80">EST. TIME: 00:00:0{Math.max(3 - Math.floor(progress/33), 0)}</span>
        </div>
      </div>
    </div>
  );
}