import React from 'react'
import Particles from './Particles'

export default function HeroBackground() {
  return (
    <div 
      className="relative w-full aspect-[16/9] min-h-[400px] max-h-[800px] bg-[#020204] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/5"
      aria-hidden="true"
    >
      {/* 
        Base ambient gradient from top to bottom.
        Top is near black, transitioning subtly downwards.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060b14]/50 to-[#0a1930]/80 pointer-events-none" />

      {/* 
        Animated Particle layer (Stars/Dust) 
        Placed behind the strongest glows but above the background
      */}
      <Particles />

      {/* 
        Horizon Glows
        Layered absolute divs with intense blurring to create the soft, cinematic light source at the bottom
      */}
      
      {/* Broad, diffuse navy/blue ambient glow */}
      <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] rounded-[100%] bg-blue-900/30 blur-[120px] pointer-events-none" />
      
      {/* Tighter, brighter mid-blue glow */}
      <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-[100%] bg-blue-600/25 blur-[100px] pointer-events-none" />
      
      {/* Focused, icy pale-blue core at the very bottom edge */}
      <div className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] rounded-[100%] bg-sky-300/15 blur-[80px] pointer-events-none" />

      {/* 
        Static Grain Overlay
        Using a fixed pseudo-element style approach with our custom CSS classes for the noise texture.
        Opacity lowered to be very subtle as requested.
      */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-screen bg-noise pointer-events-none" 
      />

      {/* 
        Vignette / Inner Shadow
        Helps anchor the edges in darkness, making the center glow more pronounced
      */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)] pointer-events-none" />
    </div>
  )
}