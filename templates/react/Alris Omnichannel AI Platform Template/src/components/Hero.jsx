import React from 'react';

const Hero = () => {
  return (
    <section className="lg:pt-32 lg:pb-24 overflow-hidden bg-[#0B0614] border-white/10 border-b py-16 relative">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-70 -z-20"></div>

      {/* Top right glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8624FF] rounded-full blur-[120px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      {/* Bottom center glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8624FF] rounded-full blur-[150px] opacity-15 -z-10 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-normal text-white tracking-tight font-roboto mb-8 max-w-4xl leading-tight">
          Omnichannel AI Platform for Customer-Facing Teams
        </h1>

        {/* Subtitle */}
        <p className="leading-relaxed text-xl text-white/70 max-w-3xl mx-auto mb-10">
          One AI agent handles calls 24/7, responds to emails, sends SMS, and
          updates records automatically. Your team stops doing manual
          follow-ups. Customers get instant responses on their preferred
          channel.
        </p>

        {/* Buttons Row 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 w-full sm:w-auto">
          <a href="#" className="w-full sm:w-auto bg-[#8624FF] text-white text-base font-normal px-8 py-3.5 rounded-full hover:bg-[#721ED9] transition-all shadow-[0_0_20px_rgba(134,36,255,0.3)] flex items-center justify-center gap-2">
            Book Demo
            <span className="w-1.5 h-1.5 rounded-full bg-white block animate-pulse"></span>
          </a>
          <a href="#" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white text-base font-normal px-8 py-3.5 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            Try Alris Live
            <span className="w-1.5 h-1.5 rounded-full border border-white/50 block"></span>
          </a>
        </div>

        {/* Lower Section: Waveform & Agent Button */}
        <div className="w-full max-w-4xl mx-auto relative flex flex-col items-center">
          <p className="text-base text-white/60 mb-8 font-normal">
            Call our AI agent to learn about our services :
          </p>

          {/* Waveform Container */}
          <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
            {/* Center Button over waveform */}
            <a href="#" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-white/20 text-[#0F0F14] text-lg font-normal px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(134,36,255,0.3)] hover:shadow-[0_0_40px_rgba(134,36,255,0.4)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap">
              Talk To AI Agent
            </a>

            {/* Waveform Bars */}
            <div className="flex items-center gap-1.5 md:gap-2 w-full justify-center opacity-60 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-3"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-6"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-4"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-5"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-14"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>

              {/* Middle section */}
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-28"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-24"></div>

              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-14"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-20"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-10"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-16"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-12"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-5"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-8"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-4"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-6"></div>
              <div className="w-1.5 md:w-2 rounded-full bg-[#8624FF]/50 h-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;