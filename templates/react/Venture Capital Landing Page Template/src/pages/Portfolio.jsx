import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Portfolio() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 min-h-screen">
      <div className="mb-20">
        <div className="text-[10px] font-mono text-neutral-400 uppercase mb-4">
          02 — Track Record
        </div>
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black mb-6">
          Portfolio <br className="hidden md:block"/> Inwestycji
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl font-light">
          Katalog wybranych projektów, dla których świadczyliśmy usługi doradcze, pomogliśmy pozyskać finansowanie lub zrealizować sprzedaż przedsiębiorstwa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((project) => (
          <div key={project.id} className="group flex flex-col border border-black/5 bg-white hover:bg-neutral-50 transition-colors overflow-hidden">
            <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100 border-b border-black/5">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-mono border border-black/10">
                {project.year}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-neutral-400 uppercase border border-black/5 px-2 py-0.5 bg-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-medium text-black mb-3">{project.name}</h3>
              <p className="text-sm text-neutral-500 font-light flex-grow leading-relaxed">
                {project.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-black/5 flex justify-between items-center">
                 <span className="text-[10px] font-mono text-neutral-400 uppercase">Rezultat</span>
                 <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">{project.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}