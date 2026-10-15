import React from 'react';

/**
 * Generates an abstract SVG background to enhance the glassmorphism effect on the cards.
 * Uses the index variant to shift colors slightly.
 */
export default function AbstractGlassArt({ variant = 0 }) {
  // Define color palettes based on variant
  const colors = [
    { fill1: "#3b82f6", fill2: "#8b5cf6" }, // Blue/Purple
    { fill1: "#10b981", fill2: "#0ea5e9" }, // Emerald/Sky
    { fill1: "#f59e0b", fill2: "#ef4444" }, // Amber/Red
    { fill1: "#6366f1", fill2: "#ec4899" }, // Indigo/Pink
    { fill1: "#14b8a6", fill2: "#3b82f6" }, // Teal/Blue
  ];

  const palette = colors[variant % colors.length];

  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id={`blur-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="40" result="blur" />
        </filter>
        <linearGradient id={`grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.fill1} stopOpacity="0.4" />
          <stop offset="100%" stopColor={palette.fill2} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      <circle 
        cx={150 + (variant * 20)} 
        cy={100 + (variant * 10)} 
        r={120} 
        fill={palette.fill1} 
        opacity="0.3" 
        filter={`url(#blur-${variant})`} 
      />
      
      <circle 
        cx={250 - (variant * 15)} 
        cy={280 - (variant * 25)} 
        r={140} 
        fill={palette.fill2} 
        opacity="0.2" 
        filter={`url(#blur-${variant})`} 
      />
      
      <rect 
        width="400" 
        height="400" 
        fill={`url(#grad-${variant})`} 
        style={{ mixBlendMode: 'overlay' }} 
      />
    </svg>
  );
}