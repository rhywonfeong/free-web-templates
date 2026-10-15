import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import Button from '../ui/Button';

export default function Modalities() {
  const modalities = [
    {
      title: "Taekwondo",
      desc: "Arte marcial e esporte de combate que combina golpes com chutes certeiros e potentes. Desenvolve agilidade, flexibilidade e autoconfiança.",
      img: "https://images.unsplash.com/photo-1580806460395-5bc4ecadcf82?w=800&q=80"
    },
    {
      title: "Hapkido",
      desc: "A defesa pessoal mais completa da atualidade — chutes, defesas, escapes, manipulação de articulações, arremessos, quedas e rolamentos.",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
    },
    {
      title: "Gumdo",
      desc: "Autoconhecimento profundo conectando corpo, mente e espírito através do caminho da espada coreana. Lide com o stress desenvolvendo equilíbrio.",
      img: "https://images.unsplash.com/photo-1590400032545-d463d1a8e225?w=800&q=80"
    }
  ];

  return (
    <section id="modalidades" className="py-24 bg-[#0B0D14]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionLabel>O Que Oferecemos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Artes marciais para <br/> você e sua família.
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Seja você um iniciante ou alguém que quer aprimorar suas habilidades, temos a modalidade certa para cada fase da sua jornada.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 hidden md:flex">Ver grade de horários</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modalities.map((mod, idx) => (
            <div key={idx} className="group relative h-[500px] overflow-hidden bg-[#12151F] flex flex-col justify-end cursor-pointer">
              <img 
                src={mod.img} 
                alt={mod.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/80 to-transparent"></div>
              
              <div className="relative z-10 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-[#E8193C] pl-4">{mod.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {mod.desc}
                </p>
                <div className="flex items-center gap-2 text-[#E8193C] font-bold text-sm uppercase tracking-widest">
                  Conhecer turmas <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}