import React, { useEffect, useRef } from 'react';

export function Cursor() {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);
  const pos = useRef({ mouseX: 0, mouseY: 0, cursorX: 0, cursorY: 0, isHovering: false });
  const trailPos = useRef(Array(20).fill(0).map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.mouseX = e.clientX;
      pos.current.mouseY = e.clientY;
    };

    const handleMouseEnter = () => { pos.current.isHovering = true; };
    const handleMouseLeave = () => { pos.current.isHovering = false; };

    window.addEventListener('mousemove', handleMouseMove);

    const updateInteractiveElements = () => {
      const interactiveEls = document.querySelectorAll('a, button, .cursor-none');
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initial binding and a delayed binding for injected elements
    updateInteractiveElements();
    const timer = setTimeout(updateInteractiveElements, 1000);

    let animationFrame;
    const animate = () => {
      pos.current.cursorX += (pos.current.mouseX - pos.current.cursorX) * 0.2;
      pos.current.cursorY += (pos.current.mouseY - pos.current.cursorY) * 0.2;

      if (cursorRef.current) {
        const scale = pos.current.isHovering ? 2 : 1;
        cursorRef.current.style.transform = `translate(${pos.current.cursorX}px, ${pos.current.cursorY}px) translate(-50%, -50%) scale(${scale})`;
        
        if (pos.current.isHovering) {
          cursorRef.current.style.backgroundColor = 'transparent';
          cursorRef.current.style.border = '1px solid #ef4444';
        } else {
          cursorRef.current.style.backgroundColor = '#ef4444';
          cursorRef.current.style.border = 'none';
        }
      }

      let prevX = pos.current.cursorX;
      let prevY = pos.current.cursorY;

      trailsRef.current.forEach((trail, index) => {
        if (!trail) return;
        const tPos = trailPos.current[index];
        tPos.x += (prevX - tPos.x) * 0.3;
        tPos.y += (prevY - tPos.y) * 0.3;
        
        trail.style.transform = `translate(${tPos.x}px, ${tPos.y}px) translate(-50%, -50%) scale(${1 - index/20})`;
        
        prevX = tPos.x;
        prevY = tPos.y;
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_20px_rgba(239,68,68,1)] transition-colors duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
      <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            ref={el => trailsRef.current[i] = el} 
            className="absolute w-2 h-2 bg-red-500/50 rounded-full blur-sm mix-blend-screen transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </div>
    </>
  );
}