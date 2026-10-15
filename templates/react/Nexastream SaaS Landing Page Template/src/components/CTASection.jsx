import React from 'react';

const CTASection = () => {
  return (
    <div className="z-20 flex flex-col w-full border-white/5 border-t relative">
      <section className="z-10 md:px-12 w-full max-w-[1400px] border-white/5 border-b mx-auto pt-32 px-6 pb-24 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif-custom font-normal text-white tracking-tight mb-8 drop-shadow-2xl">
            Ready to unify
            <span className="bg-clip-text animate-gradient-x italic text-transparent bg-gradient-to-r from-sky-300 via-indigo-400 to-sky-300 pr-2"> your data stack?</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-2xl">
            Join engineering teams at high-growth companies who trust Nexastream for mission-critical data ingestion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105">
              <span className="mr-2">Start for free</span>
              <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 px-8 font-semibold text-white transition-all hover:bg-zinc-800 hover:border-white/20">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;