import React, { useEffect, useRef } from 'react';

export default function JewelleryHero() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wrapperRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Only parallax if in view
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      
      const rx = ((e.clientY - rect.height/2) / rect.height) * -8;
      const ry = ((e.clientX - rect.width/2)  / rect.width)  *  8;
      
      wrapperRef.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      <div 
        ref={wrapperRef}
        className="will-change-transform"
        style={{ 
          transformStyle: 'preserve-3d', 
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <svg 
          viewBox="0 0 500 500" 
          className="w-[300px] h-[300px] md:w-[480px] md:h-[480px] animate-jewel drop-shadow-2xl"
          style={{ transform: 'translateZ(50px)' }}
        >
          <defs>
            <linearGradient id="goldMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8b6914"/>
              <stop offset="25%"  stopColor="#c9a84c"/>
              <stop offset="50%"  stopColor="#f7e7c1"/>
              <stop offset="75%"  stopColor="#c9a84c"/>
              <stop offset="100%" stopColor="#a07520"/>
            </linearGradient>
            
            <radialGradient id="emeraldGem" cx="40%" cy="30%">
              <stop offset="0%"   stopColor="#e0f5e0"/>
              <stop offset="20%"  stopColor="#4caf50"/>
              <stop offset="55%"  stopColor="#1b5e20"/>
              <stop offset="100%" stopColor="#0a1f0a"/>
            </radialGradient>

            <linearGradient id="goldShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1405" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0a0802" stopOpacity="0"/>
            </linearGradient>
          </defs>

          {/* Abstract Serpenti/B.zero1 hybrid coil geometry */}
          <g transform="translate(250, 250) rotate(-15)">
            {/* Background coil */}
            <path 
              d="M -120 -40 C -80 -180, 150 -160, 140 -20 C 130 100, -100 120, -140 20" 
              fill="none" 
              stroke="url(#goldShadow)" 
              strokeWidth="48" 
              strokeLinecap="round"
            />
            
            <path 
              d="M -130 -30 C -90 -160, 130 -140, 120 -10 C 110 90, -80 100, -120 10" 
              fill="none" 
              stroke="url(#goldMain)" 
              strokeWidth="32" 
              strokeLinecap="round"
            />

            {/* Middle coil */}
            <path 
              d="M -150 20 C -110 -120, 160 -100, 150 30 C 140 140, -130 160, -170 60" 
              fill="none" 
              stroke="url(#goldShadow)" 
              strokeWidth="50" 
              strokeLinecap="round"
            />
            
            <path 
              d="M -160 30 C -120 -100, 140 -80, 130 40 C 120 130, -110 140, -150 50" 
              fill="none" 
              stroke="url(#goldMain)" 
              strokeWidth="34" 
              strokeLinecap="round"
            />

            {/* Foreground coil / Head */}
            <path 
              d="M -170 70 C -130 -70, 180 -50, 170 80 C 160 190, -150 210, -190 100" 
              fill="none" 
              stroke="url(#goldShadow)" 
              strokeWidth="52" 
              strokeLinecap="round"
            />
            
            <path 
              d="M -180 80 C -140 -50, 160 -30, 150 90 C 140 180, -130 190, -170 90" 
              fill="none" 
              stroke="url(#goldMain)" 
              strokeWidth="36" 
              strokeLinecap="round"
            />

            {/* Geometric Gem Setting */}
            <g transform="translate(-170, 90)">
              <polygon 
                points="-35,-20 0,-40 35,-20 0,25" 
                fill="url(#goldMain)" 
                stroke="#f7e7c1" 
                strokeWidth="1"
              />
              <polygon 
                points="-25,-15 0,-30 25,-15 0,15" 
                fill="url(#emeraldGem)"
              />
              {/* Gem facets */}
              <polyline points="-25,-15 0,0 25,-15" stroke="#4caf50" strokeWidth="0.5" fill="none"/>
              <line x1="0" y1="-30" x2="0" y2="0" stroke="#a5d6a7" strokeWidth="0.5" opacity="0.6"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}