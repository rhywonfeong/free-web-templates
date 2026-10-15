import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center -mt-20 pt-20 border-b border-[#2B3045]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80" 
          alt="Treinamento de Artes Marciais" 
          className="w-full h-full object-cover object-center grayscale opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D14] via-[#0B0D14]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-[#0B0D14]/50"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="flex flex-col items-start pt-12 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E2230] border border-[#2B3045] rounded-sm mb-8 text-xs font-bold tracking-widest uppercase text-[#D4A017]">
            <iconify-icon icon="solar:star-bold"></iconify-icon>
            Korean Martial Arts System · Desde 1995
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] mb-6">
            Bem Vindo a <span className="text-[#E8193C]">KMAS</span><br/>
            A mudança que você procura começa aqui.
          </h1>
          
          <p className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-lg leading-relaxed">
            Taekwondo, Hapkido e Gumdo para crianças, adolescentes e adultos. 
            Mais de 29 anos formando pessoas com disciplina, respeito e evolução real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" onClick={() => document.getElementById('aula-experimental').scrollIntoView({ behavior: 'smooth' })}>
              Agendar Aula Experimental
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
              Falar com especialista
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-[#6B7280]">
            <div className="flex items-center gap-2"><span className="text-[#E8193C]">✦</span> Desde 1995</div>
            <div className="flex items-center gap-2"><span className="text-[#E8193C]">✦</span> Taekwondo · Hapkido · Gumdo</div>
            <div className="flex items-center gap-2"><span className="text-[#E8193C]">✦</span> 3 Unidades</div>
          </div>
        </div>

        {/* Empty col for layout balance against the image */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}