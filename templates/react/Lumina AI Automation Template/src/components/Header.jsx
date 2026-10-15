import React from 'react';

export default function Header() {
  return (
    <header className="fixed flex md:px-12 z-50 pointer-events-auto pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between">
      <a href="#" className="flex items-center gap-2.5 text-xl tracking-tight font-medium text-white hover:opacity-80 transition-opacity">
        <iconify-icon icon="solar:play-bold" className="text-white rotate-90 w-5 h-5 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
        Lumina
      </a>
      
      <nav className="hidden md:flex items-center gap-10 text-base font-normal text-zinc-400">
        <a href="#" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group">
          Product <iconify-icon icon="solar:alt-arrow-down-linear" className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }}></iconify-icon>
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group">
          Resources <iconify-icon icon="solar:alt-arrow-down-linear" className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }}></iconify-icon>
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors group">
          Pricing <iconify-icon icon="solar:alt-arrow-down-linear" className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: 1.5 }}></iconify-icon>
        </a>
      </nav>
      
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-base font-normal text-zinc-300 hover:text-white transition-colors px-4 py-2 bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-full">Login</a>
        
        {/* Animated Hover CTA Nav */}
        <button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal text-zinc-300 tracking-tight bg-[#09090b]/80 backdrop-blur-md border border-zinc-700/80 rounded-full px-5 py-2.5 items-center justify-center text-sm">
          {/* Original text (slides down on hover) */}
          <span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
            Start Today It's Free
            <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </span>
          
          {/* Clone text (slides in from top on hover) */}
          <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
            Start Today It's Free
            <iconify-icon icon="solar:arrow-right-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </span>

          {/* bottom light gradient line on hover */}
          <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
          
          {/* bottom light gradient on hover */}
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
        </button>
      </div>
    </header>
  );
}