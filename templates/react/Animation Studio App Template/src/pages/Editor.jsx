import React from 'react';
import Toolbar from '../components/Toolbar';
import CanvasArea from '../components/CanvasArea';
import Timeline from '../components/Timeline';

export default function Editor() {
  return (
    <div className="flex-1 flex flex-col h-full w-full relative">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Toolbar */}
        <div className="w-16 border-r border-white/5 bg-black/10 backdrop-blur-sm z-10 flex flex-col py-4 items-center gap-6 shrink-0">
          <Toolbar />
        </div>
        
        {/* Main Canvas Area */}
        <div className="flex-1 relative flex items-center justify-center p-2 overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{
                 backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)',
                 backgroundSize: '24px 24px'
               }}
          />
          <CanvasArea />
        </div>
      </div>
      
      {/* Bottom Timeline */}
      <div className="h-48 border-t border-white/5 bg-black/40 backdrop-blur-xl z-20 flex flex-col shrink-0">
        <Timeline />
      </div>
    </div>
  );
}