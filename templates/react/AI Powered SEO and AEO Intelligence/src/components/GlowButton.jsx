import React, { useRef } from 'react';

export function GlowButton({ children, className = "" }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className={`glow-btn ${className}`}
      style={{ '--x': '50%', '--y': '50%' }}
    >
      {children}
    </button>
  );
}