import React from 'react';
import RevealText from './RevealText';

export default function Integrations() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12 z-10 relative">
      <div className="flex flex-col items-center text-center mb-16">
        <RevealText 
          text="Seamless Architecture." 
          className="text-4xl md:text-[4rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-4" 
        />
        <p className="text-lg text-zinc-400 font-geist font-light max-w-2xl">
          Engineered to run natively with modern deployment stacks.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
          <iconify-icon icon="simple-icons:vercel" width="24" class="text-white"></iconify-icon>
          <span className="text-white font-medium tracking-tight text-lg">Vercel</span>
        </div>
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
          <iconify-icon icon="simple-icons:react" width="28" class="text-[#61DAFB]"></iconify-icon>
          <span className="text-white font-medium tracking-tight text-lg">React</span>
        </div>
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
          <iconify-icon icon="simple-icons:webgl" width="28" class="text-[#990000]"></iconify-icon>
          <span className="text-white font-medium tracking-tight text-lg">WebGL</span>
        </div>
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
          <iconify-icon icon="simple-icons:tailwindcss" width="28" class="text-[#38B2AC]"></iconify-icon>
          <span className="text-white font-medium tracking-tight text-lg">Tailwind</span>
        </div>
        <div className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
          <iconify-icon icon="simple-icons:supabase" width="26" class="text-[#3ECF8E]"></iconify-icon>
          <span className="text-white font-medium tracking-tight text-lg">Supabase</span>
        </div>
      </div>
    </div>
  );
}