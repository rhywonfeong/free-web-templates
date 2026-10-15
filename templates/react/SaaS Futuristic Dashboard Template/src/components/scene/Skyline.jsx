import React, { useMemo } from 'react';

// Deterministic random utility to keep buildings static per render
const seededRandom = (seed) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export default function Skyline({ layer, colorClass }) {
  // Generate a static skyline based on the layer prop
  const buildings = useMemo(() => {
    let seed = layer === 'back' ? 100 : layer === 'mid' ? 200 : 300;
    const count = layer === 'back' ? 40 : layer === 'mid' ? 25 : 15;
    const items = [];

    for (let i = 0; i < count; i++) {
      // Randomize height, width, and horizontal position
      const height = 20 + seededRandom(seed++) * 80; // 20% to 100% of container height
      const width = 2 + seededRandom(seed++) * 8; // width in rem
      const left = seededRandom(seed++) * 100; // 0% to 100% position
      const hasAntenna = seededRandom(seed++) > 0.7;
      
      items.push({ id: i, height, width, left, hasAntenna });
    }
    
    // Sort by left position for better rendering predictability (optional)
    return items.sort((a, b) => a.left - b.left);
  }, [layer]);

  return (
    <div className="w-full h-full relative overflow-hidden flex items-end">
      {buildings.map((b) => (
        <div 
          key={b.id}
          className={`absolute bottom-0 border-t border-r border-white/5 shadow-2xl flex flex-col justify-end items-center ${colorClass}`}
          style={{
            height: `${b.height}%`,
            width: `${b.width}rem`,
            left: `${b.left}%`,
          }}
        >
          {/* Add a little antenna to some buildings for a more sci-fi look */}
          {b.hasAntenna && (
            <div className="w-px h-6 bg-slate-700 absolute -top-6">
              <div className="w-1 h-1 bg-red-500/50 rounded-full absolute -top-1 -left-[1.5px]"></div>
            </div>
          )}
          
          {/* Minimalist windows for mid/front layers */}
          {layer !== 'back' && b.height > 40 && b.width > 4 && (
             <div className="w-full h-[80%] flex justify-around px-2 opacity-10">
               <div className="w-1 h-full bg-white/20 border-x border-dashed border-black/50"></div>
               <div className="w-1 h-full bg-white/20 border-x border-dashed border-black/50"></div>
             </div>
          )}
        </div>
      ))}
    </div>
  );
}