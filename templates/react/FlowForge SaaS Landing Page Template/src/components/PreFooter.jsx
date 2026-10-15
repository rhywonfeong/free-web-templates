import React from 'react';

const PreFooter = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-mesh z-20 flex flex-col items-center justify-center text-center border-b border-white/5">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-6">
          <iconify-icon icon="solar:star-fall-linear" style={{ strokeWidth: '1.5' }} className="text-zinc-300 text-sm"></iconify-icon>
          <span className="font-mono text-xs text-zinc-300">Early Access</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white mb-5 text-balance">
          Ready to forge your automated future?
        </h2>
        
        <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl mb-10 text-balance leading-relaxed">
          Join the waitlist today. Get exclusive access to the beta and start building operational intelligence at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md relative z-20">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors shadow-sm"
          />
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md transition-colors duration-200 font-medium text-sm whitespace-nowrap hover:bg-zinc-200 shadow-sm">
            Sign Up
            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-base"></iconify-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;