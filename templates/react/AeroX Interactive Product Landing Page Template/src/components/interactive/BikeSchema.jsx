import { useState } from 'react';
import { bikeParts } from '../../data/bikeData';
import HotspotMarker from './HotspotMarker';
import DetailPanel from './DetailPanel';

export default function BikeSchema() {
  const [activePartId, setActivePartId] = useState(null);

  const activePart = activePartId ? bikeParts.find(p => p.id === activePartId) : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
      
      {/* Left Area: The interactive bike image */}
      <div className="flex-grow relative flex items-center justify-center min-h-[400px] lg:min-h-0 bg-gradient-to-b from-zinc-900/50 to-transparent rounded-3xl border border-zinc-800/50 p-4 lg:p-8">
        
        <div className="relative w-full max-w-4xl aspect-[4/3] lg:aspect-[16/9] flex items-center justify-center">
          {/* 
            Main Bike Image
            Using a clean side-profile bike image. 
          */}
          <img 
            src="https://images.unsplash.com/photo-1576435728678-68ce0b622602?w=1600&q=80&auto=format&fit=crop" 
            alt="AeroX Side Profile" 
            className="w-full h-full object-contain filter drop-shadow-2xl select-none"
            draggable="false"
          />

          {/* Hotspots Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* We map over the parts and create absolute positioned buttons.
                We reset pointer-events to auto for the buttons so they are clickable. */}
            {bikeParts.map((part) => (
              <div key={part.id} className="pointer-events-auto">
                <HotspotMarker 
                  part={part} 
                  isActive={activePartId === part.id}
                  onClick={(id) => setActivePartId(activePartId === id ? null : id)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Helper text for mobile */}
        <div className="absolute bottom-4 left-0 right-0 text-center lg:hidden pointer-events-none">
           <span className="bg-black/60 backdrop-blur text-zinc-400 text-xs px-4 py-2 rounded-full inline-flex items-center gap-2">
             <iconify-icon icon="solar:point-up-linear"></iconify-icon> Tap hotspots to explore
           </span>
        </div>
      </div>

      {/* Right Area: Detail Panel */}
      <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 h-[500px] lg:h-auto">
        <DetailPanel 
          part={activePart} 
          onClose={() => setActivePartId(null)} 
        />
      </div>

    </div>
  );
}