import React from 'react';

export default function NetworkOverlay({ activeRoutes }) {
  // Using percentage coordinates mapped to a 1000x1000 viewBox roughly matches our CSS Grid layout
  // P1: Gateway (16.6% X, 50% Y)
  // P2: Switch (50% X, 50% Y)
  // P3: Main Brain (83.3% X, 25% Y)
  // P4: Assistant Brain (83.3% X, 75% Y)
  
  const pGateway = "166,500";
  const pSwitch = "500,500";
  const pMain = "833,250";
  const pAssistant = "833,750";

  // Predefine SVG path strings
  const pathGatewayToSwitch = `M ${pGateway} L ${pSwitch}`;
  const pathSwitchToMain = `M ${pSwitch} L ${pMain}`;
  const pathSwitchToAssistant = `M ${pSwitch} L ${pAssistant}`;

  return (
    <svg 
      className="w-full h-full absolute inset-0 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" 
      viewBox="0 0 1000 1000" 
      preserveAspectRatio="none"
    >
      {/* Static Base Lines (Dimmed) */}
      <g stroke="rgba(51, 65, 85, 0.4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d={pathGatewayToSwitch} />
        <path d={pathSwitchToMain} />
        <path d={pathSwitchToAssistant} />
      </g>

      {/* Render Active Animated Packets */}
      {activeRoutes.map((route) => {
        // First segment is always Gateway to Switch
        // Second segment depends on target
        const secondSegmentPath = route.target === 'main' ? pathSwitchToMain : pathSwitchToAssistant;
        const color = route.target === 'main' ? '#22d3ee' : '#818cf8'; // Cyan or Indigo
        
        return (
          <g key={route.id} strokeWidth="6" strokeLinecap="round" fill="none">
            {/* Segment 1: Gateway -> Switch */}
            <path 
              d={pathGatewayToSwitch} 
              stroke={color}
              strokeDasharray="20 100"
              className="animate-packet"
              style={{ animationDuration: '0.4s', animationTimingFunction: 'ease-in' }}
            />
            {/* Segment 2: Switch -> Target (Delayed start) */}
            <path 
              d={secondSegmentPath} 
              stroke={color}
              strokeDasharray="20 100"
              className="animate-packet"
              style={{ animationDuration: '0.5s', animationDelay: '0.4s', animationTimingFunction: 'ease-out', opacity: 0 }}
            />
          </g>
        );
      })}
    </svg>
  );
}