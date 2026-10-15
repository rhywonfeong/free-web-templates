import React from 'react';
import Navbar from '../components/Navbar';
import HeroVideo from '../components/HeroVideo';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-geist">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <HeroVideo />
      </div>

      {/* Blurred Overlay Shape */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none z-0 rounded-full"
        aria-hidden="true"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col flex-1 overflow-visible">
        <Navbar />
        
        {/* Main Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center mt-[-40px]">
          <h1 className="text-[120px] md:text-[220px] font-normal leading-[1.02] tracking-[-0.024em] font-general mt-8">
            <span className="text-foreground">Power </span>
            <span 
              className="bg-clip-text text-transparent" 
              style={{ 
                backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)' 
              }}
            >
              AI
            </span>
          </h1>
          
          <p className="text-hero-sub text-lg leading-8 max-w-md mt-[9px] opacity-80">
            The most powerful AI ever deployed<br />
            in talent acquisition
          </p>
          
          <button className="hero-secondary-btn rounded-full px-[29px] py-[24px] mt-[25px] font-medium text-lg">
            Schedule a Consult
          </button>
        </main>

        <Marquee />
      </div>
    </div>
  );
}