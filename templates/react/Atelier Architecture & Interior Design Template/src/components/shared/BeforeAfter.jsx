import React, { useState, useRef, useEffect } from 'react';

export function BeforeAfter({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden select-none bg-gray-100" ref={containerRef}>
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After renovation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before renovation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
      </div>

      {/* Invisible Range Slider */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleSliderChange}
        className="slider-overlay absolute inset-0 w-full h-full opacity-0 cursor-ew-resize m-0 p-0 z-10"
      />

      {/* Labels */}
      <div className="absolute bottom-6 left-6 text-white text-xs uppercase tracking-widest font-medium z-0 drop-shadow-md bg-charcoal/30 px-3 py-1 backdrop-blur-sm">Before</div>
      <div className="absolute bottom-6 right-6 text-white text-xs uppercase tracking-widest font-medium z-0 drop-shadow-md bg-charcoal/30 px-3 py-1 backdrop-blur-sm">After</div>
    </div>
  );
}