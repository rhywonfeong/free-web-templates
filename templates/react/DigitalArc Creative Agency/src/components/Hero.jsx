import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="py-10 xl:py-20 xl:px-10 px-5 relative border-b">
        <div className="container xl:px-10 px-0">
          <div className="flex lg:flex-row flex-col justify-between lg:items-end relative z-10 gap-6">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold uppercase max-w-3xl tracking-tighter">
              A creative Design production studio
            </h1>
            <div className="flex group items-center gap-1">
              <a 
                className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary h-12 rounded-full px-8 text-base font-medium uppercase text-primary-foreground hover:bg-primary/90" 
                href="#"
              >
                Get Started
              </a>
              <a 
                className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary size-9 h-12 w-12 rounded-full text-primary-foreground hover:bg-primary/90 group-hover:[&>iconify-icon]:rotate-312" 
                href="#"
              >
                <iconify-icon icon="solar:arrow-right-linear" class="size-5 transition-transform duration-300 ease-out"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-5 border-x container right-0 z-0 pointer-events-none opacity-10">
          <div className="border-r"></div>
          <div className="border-r"></div>
          <div className="border-r"></div>
          <div className="border-r"></div>
          <div className=""></div>
        </div>
      </section>

      <section className="container xl:px-0 px-5">
        <div className="relative overflow-hidden lg:aspect-[16/6] md:aspect-[16/8] aspect-video">
          <img 
            alt="Video banner" 
            className="object-cover transition-opacity duration-500 ease-in-out opacity-100 absolute h-full w-full left-0 top-0 right-0 bottom-0" 
            src="https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fbackgrounds%2Fvideo-banner.webp&w=3840&q=75"
          />
        </div>
      </section>
      
      <section className="lg:py-7 py-5 border-y border-border w-full bg-background"></section>
    </>
  );
}