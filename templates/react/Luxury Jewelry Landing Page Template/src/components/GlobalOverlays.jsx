import React from 'react';

export default function GlobalOverlays() {
  return (
    <>
      {/* Film Grain - Z: 9990 */}
      <svg 
        id="grain" 
        className="fixed inset-0 z-[9990] opacity-[0.045] pointer-events-none w-full h-full animate-grain"
        style={{ width: '100vw', height: '100vh' }}
      >
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)"/>
      </svg>

      {/* Page Load Curtain - Z: 99997 */}
      <div className="fixed inset-0 z-[99997] bg-black animate-curtain pointer-events-none" />
    </>
  );
}