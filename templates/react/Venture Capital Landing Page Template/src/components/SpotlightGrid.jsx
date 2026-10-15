import React, { useRef } from 'react';

export default function SpotlightGrid({ children, className = "" }) {
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // We update custom properties on the container
    gridRef.current.style.setProperty('--mouse-x', `${x}px`);
    gridRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={gridRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-grid ${className}`}
    >
      {children}
    </div>
  );
}