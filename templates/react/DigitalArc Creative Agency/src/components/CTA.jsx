import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 xl:px-0 px-5 border-b">
      <div className="container flex flex-col items-center text-center justify-center gap-8">
        <h2 className="xl:text-7xl lg:text-5xl text-4xl font-semibold uppercase max-w-4xl tracking-tighter leading-tight">
          A CREATIVE VIDEO / PRODUCTION STUDIO
        </h2>
        <div className="flex group items-center gap-1 mt-4">
          <a 
            className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary h-12 rounded-full px-8 text-base font-medium uppercase text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/80" 
            href="#"
          >
            Start Project
          </a>
          <a 
            className="focus-visible:ring-ring/50 border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] inline-flex items-center justify-center whitespace-nowrap transition-all outline-none select-none bg-primary size-9 h-12 w-12 rounded-full text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/80 group-hover:[&>iconify-icon]:rotate-312" 
            href="#"
          >
            <iconify-icon icon="solar:arrow-right-linear" class="size-5 transition-transform duration-300 ease-out"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
}