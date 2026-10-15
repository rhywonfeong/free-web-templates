import React from 'react';

export default function AnimatedBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-1] opacity-40 bg-grid-animate"
      aria-hidden="true"
    />
  );
}