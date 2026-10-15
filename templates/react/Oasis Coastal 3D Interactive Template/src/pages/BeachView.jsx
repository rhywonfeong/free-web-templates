import React, { useState } from 'react';
import ThreeBeach from '../components/ThreeBeach';

export default function BeachView() {
  const [waveSpeed, setWaveSpeed] = useState(1.0);
  const [timeOfDay, setTimeOfDay] = useState(12); // 6 to 18 (6am to 6pm)

  return (
    <div className="relative w-full h-full">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <ThreeBeach waveSpeed={waveSpeed} timeOfDay={timeOfDay} />
      </div>

      {/* UI Overlay Controls */}
      <div className="absolute bottom-8 right-8 z-10 w-80 p-6 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-blue-900/10 transition-all">
        <h2 className="text-lg tracking-tight font-medium text-slate-900 mb-6 flex items-center gap-2">
          <iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
          Environment Controls
        </h2>
        
        <div className="space-y-6">
          {/* Wave Speed Control */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-medium text-slate-700">
              <label htmlFor="waveSpeed">Wave Intensity</label>
              <span className="text-slate-500 text-xs bg-white/50 px-2 py-1 rounded-md">{waveSpeed.toFixed(1)}x</span>
            </div>
            <input 
              id="waveSpeed"
              type="range" 
              min="0.1" 
              max="3.0" 
              step="0.1" 
              value={waveSpeed}
              onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
            />
          </div>

          {/* Time of Day Control */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-medium text-slate-700">
              <label htmlFor="timeOfDay">Time of Day</label>
              <span className="text-slate-500 text-xs bg-white/50 px-2 py-1 rounded-md">
                {Math.floor(timeOfDay)}:00
              </span>
            </div>
            <input 
              id="timeOfDay"
              type="range" 
              min="6" 
              max="18" 
              step="0.1" 
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(parseFloat(e.target.value))}
              className="accent-orange-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium uppercase tracking-wider px-1">
              <span>Dawn</span>
              <span>Noon</span>
              <span>Dusk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}