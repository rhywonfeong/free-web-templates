import React from 'react';
import Reveal from './Reveal';

const projects = [
  {
    id: '01',
    title: 'Aura Architecture',
    desc: 'Immersive portfolio for an award-winning architectural firm.',
    tech: 'Next.js, WebGL, Tailwind',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    colSpan: 'md:col-span-12',
  },
  {
    id: '02',
    title: 'Fintech Core',
    desc: 'Banking dashboard with complex data visualization.',
    tech: 'React, Recharts, TypeScript',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-6',
  },
  {
    id: '03',
    title: 'Onyx Studio',
    desc: 'E-commerce platform for high-end ceramics.',
    tech: 'Shopify, React, Framer',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-6',
  },
  {
    id: '04',
    title: 'System Zero',
    desc: 'Open-source design system documentation site.',
    tech: 'Astro, MDX, Tailwind',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    colSpan: 'md:col-span-12',
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 max-w-[1600px] mx-auto border-b border-[#222]">
      <Reveal>
        <div className="flex justify-between items-end mb-16 border-b border-[#222] pb-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase">Selected Works</h2>
          <span className="text-xs font-medium tracking-widest text-[#888] uppercase">(04)</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-24">
        {projects.map((project, index) => (
          <div key={project.id} className={`${project.colSpan} group cursor-pointer`}>
            <Reveal delay={index * 100}>
              <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-[#111]">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#F0F0F0] text-xs font-medium tracking-widest py-1 px-3 border border-[#333]">
                  {project.id}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-t border-[#222] pt-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase group-hover:text-[#A0A0A0] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#888] mt-2 max-w-md">{project.desc}</p>
                </div>
                <div className="text-xs font-medium tracking-widest uppercase text-[#555] text-left md:text-right">
                  {project.tech}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}