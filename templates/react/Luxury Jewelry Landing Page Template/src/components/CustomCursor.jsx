import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Use refs for animation variables to avoid React re-renders on every frame
  const coords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    let animationFrameId;
    const animateRing = () => {
      ringCoords.current.x += (coords.current.x - ringCoords.current.x) * 0.12;
      ringCoords.current.y += (coords.current.y - ringCoords.current.y) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-gold rounded-full pointer-events-none z-[99999] -ml-[3px] -mt-[3px] mix-blend-screen"
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full pointer-events-none z-[99998] -ml-[15px] -mt-[15px]"
        style={{ border: '1px solid var(--dim-gold)' }}
      />
    </>
  );
}