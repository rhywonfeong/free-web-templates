import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartScreen() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple mount animation delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    navigate('/menu');
  };

  return (
    <div 
      className={`w-full h-full flex flex-col relative transition-opacity duration-700 select-none cursor-pointer ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleStart}
    >
      {/* Background texture simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#F7F6F2] to-[#EAE9E4] pointer-events-none" />

      {/* Top Promotional Text */}
      <div className="pt-10 flex flex-col items-center z-20 relative px-4 text-center">
        <span className="text-[#DA291C] font-black text-2xl md:text-3xl tracking-tighter-kiosk uppercase mb-[-4px]">
          New!
        </span>
        <span className="text-[#FFBC0D] font-black text-2xl md:text-3xl tracking-tighter-kiosk uppercase text-shadow-subtle">
          Bacon Ranch McCrispy™
        </span>
      </div>

      {/* Primary Call to Action Title */}
      <div className="flex justify-center z-20 relative mt-2 md:mt-4">
        <h1 className="text-black font-black text-[5rem] md:text-[6.5rem] leading-[0.85] tracking-tighter-kiosk">
          Order Here
        </h1>
      </div>

      {/* Food Collage Area */}
      <div className="flex-1 relative z-10 w-full mt-4 overflow-visible">
        
        {/* Main Left Burger (Using provided URL 1) */}
        <div className="absolute top-[5%] -left-8 md:-left-12 w-[320px] md:w-[400px] transition-transform duration-1000 ease-out translate-y-0 hover:scale-105">
          <img 
            src="https://i.imgur.com/W9iYquY.png" 
            alt="Main Burger" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
          />
          <div className="absolute top-[80%] left-[30%] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-[10px] md:text-xs font-bold text-zinc-800 uppercase tracking-wider">
              Bacon Ranch
            </span>
          </div>
        </div>

        {/* Secondary Right Item (Using provided URL 2) */}
        <div className="absolute top-[25%] -right-12 md:-right-16 w-[280px] md:w-[350px] transition-transform duration-1000 delay-100 ease-out translate-y-0 hover:scale-105">
          <img 
            src="https://i.imgur.com/QCgiOkg.png" 
            alt="Secondary Burger" 
            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
          />
          <div className="absolute top-[75%] right-[30%] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-[10px] md:text-xs font-bold text-zinc-800 uppercase tracking-wider">
              McCrispy™
            </span>
          </div>
        </div>

        {/* Lower Decor/Fries representation (Using a high quality cutout standard to complete the composition) */}
        <div className="absolute -bottom-8 -left-4 w-[250px] md:w-[300px] z-[-1]">
            <img 
              src="https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=400&auto=format&fit=crop" 
              alt="Fries Decor" 
              className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-20 blur-[2px]"
            />
        </div>
      </div>

      {/* Interactive Footer Bar */}
      <div className="h-[140px] md:h-[160px] bg-black w-full flex items-center justify-between px-8 md:px-10 z-30 relative overflow-hidden group">
        {/* Subtle hover effect background for footer */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
        
        {/* Logo */}
        <div className="text-[#FFBC0D] text-[4rem] md:text-[5rem] flex items-center justify-center drop-shadow-md">
          <iconify-icon icon="simple-icons:mcdonalds"></iconify-icon>
        </div>
        
        {/* Action Text */}
        <div className="flex flex-col items-end justify-center animate-pulse">
          <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">
            Touch to Order
          </span>
          <span className="text-zinc-400 font-medium text-lg md:text-xl mt-[-2px]">
            Toca para ordenar
          </span>
        </div>
      </div>
    </div>
  );
}