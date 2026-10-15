import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 500); // Fade in text
    const t2 = setTimeout(() => setStage(2), 2000); // Fade out all
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050A10] transition-opacity duration-700 ease-in-out">
      <div 
        className={`flex flex-col items-center transition-all duration-1000 transform ${
          stage === 0 ? 'opacity-0 translate-y-4' : 
          stage === 1 ? 'opacity-100 translate-y-0' : 
          'opacity-0 -translate-y-4'
        }`}
      >
        <iconify-icon icon="solar:anchor-outline" style={{ fontSize: '48px', color: '#E6C98A' }}></iconify-icon>
        <h1 className="font-heading text-3xl tracking-tight text-white mt-6 mb-2">AURELIA</h1>
        <p className="font-accent text-sm text-gold tracking-[0.2em] uppercase">Sail Beyond Luxury</p>
        
        <div className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-gold w-full animate-[loading_1.5s_ease-in-out_forwards]"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}} />
    </div>
  );
}