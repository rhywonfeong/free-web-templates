import React from 'react';

export function SceneContainer({ children, id }) {
  return (
    <section 
      id={id}
      className="w-full h-screen snap-center relative flex items-center justify-center overflow-hidden"
    >
      {/* Ghost Geometry - Subtle background shape per DESIGN.md */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#0B0F16] opacity-[0.05] blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#05070A] opacity-[0.08] rotate-45 z-0 pointer-events-none" />
      
      {/* Content Safe Area */}
      <div className="relative z-10 w-full max-w-[1600px] px-[140px] py-[90px] h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
}

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-tech-grid pointer-events-none" />
  );
}