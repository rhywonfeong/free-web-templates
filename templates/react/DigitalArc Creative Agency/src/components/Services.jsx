import React from 'react';

const services = [
  {
    num: '01',
    title: 'APP DESIGN',
    desc: 'Intuitive mobile app design focused on usability, performance, and seamless user journeys across iOS and Android platforms.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fapp-design.webp&w=3840&q=75'
  },
  {
    num: '02',
    title: 'WEB DESIGN',
    desc: 'Modern dark-mode web design delivering sleek visuals, responsive layouts, and conversion-focused interfaces.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fweb-design.webp&w=3840&q=75'
  },
  {
    num: '03',
    title: 'PRODUCT DESIGN',
    desc: 'End-to-end product design combining UX research, wireframing, prototyping, and scalable design systems.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fproject-design.webp&w=3840&q=75'
  },
  {
    num: '04',
    title: 'BRAND DESIGN',
    desc: 'Strategic brand identity design including logo systems, typography, color palettes, and visual storytelling.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fbrand-design.webp&w=3840&q=75'
  }
];

export default function Services() {
  return (
    <section className="container xl:px-0 px-5 my-10">
      <div className="flex md:flex-row flex-col gap-4 justify-between border-x px-5 py-10 xl:px-15 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 bg-foreground"></span>
          <h6 className="uppercase font-medium text-base font-mono">What we do</h6>
        </div>
        <h2 className="xl:text-6xl lg:text-5xl text-3xl font-semibold uppercase max-w-3xl tracking-tighter">
          SERVICES.
        </h2>
      </div>

      <div className="border-x border-border">
        {services.map((service, idx) => (
          <div key={idx} className="flex lg:flex-row flex-col border-b border-border last:border-b-0 group overflow-hidden lg:p-0 p-5 lg:gap-0 gap-5 hover:bg-card transition-colors duration-300">
            <div className="xl:max-w-lg lg:max-w-xs w-full xl:p-10 lg:p-5 p-0 flex xl:gap-15 gap-8 relative">
              <span className="text-base font-mono font-medium text-muted-foreground group-hover:text-foreground z-10 transition-colors duration-300">
                ({service.num})
              </span>
              <h3 className="xl:text-3xl md:text-2xl text-xl font-medium tracking-tight uppercase text-foreground z-10 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            
            <div className="lg:p-5 lg:max-w-xs w-full border-x border-transparent group-hover:border-border overflow-hidden transition-colors duration-300 hidden lg:block">
              <img 
                alt={service.title} 
                loading="lazy" 
                className="group-hover:scale-110 transition-transform duration-500 ease-out object-cover w-full h-full" 
                src={service.img}
              />
            </div>
            
            <div className="xl:px-10 lg:py-6 px-0 py-0 flex flex-col gap-6 justify-between flex-1">
              <p className="text-base tracking-tight text-muted-foreground group-hover:text-foreground/90 font-normal transition-colors duration-300 pt-4 lg:pt-0">
                {service.desc}
              </p>
              <button 
                type="button" 
                className="focus-visible:ring-[3px] border border-transparent bg-clip-padding text-sm font-medium inline-flex items-center justify-center whitespace-nowrap transition-all outline-none bg-secondary text-secondary-foreground lg:h-12 lg:w-12 h-10 w-10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <iconify-icon icon="solar:arrow-right-linear" class="size-5 transition-transform duration-300 ease-out group-hover:-rotate-45"></iconify-icon>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}