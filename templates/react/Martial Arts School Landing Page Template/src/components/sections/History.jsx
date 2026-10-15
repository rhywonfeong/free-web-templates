import React from 'react';
import SectionLabel from '../ui/SectionLabel';

export default function History() {
  return (
    <section id="historia" className="py-24 bg-[#12151F] border-t border-[#2B3045] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Collage */}
        <div className="relative h-[500px] w-full">
          <div className="absolute top-0 left-0 w-2/3 h-4/5 z-10 shadow-2xl border border-[#2B3045]">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Old dojo" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="absolute bottom-0 right-0 w-3/5 h-2/3 z-20 shadow-2xl border-2 border-[#E8193C]">
            <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80" alt="Training" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionLabel>Nossa História</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Raízes Fortes.
          </h2>
          
          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
            <p>
              A ideia de um sistema de artes marciais completo — onde o esporte, a defesa pessoal e as técnicas com armas milenares pudesse ser ensinado com esmero em um único lugar — nasceu em 1995.
            </p>
            <p>
              Foi quando o idealizador da KMAS, o Mestre Ivo Rodrigo Heck, iniciou sua carreira como instrutor de taekwondo em uma das franquias mais importantes do mundo.
            </p>
            <p>
              A partir de então, novos e competentes alunos se tornaram faixas pretas e instrutores, compartilhando deste mesmo sonho de ensinar as artes marciais coreanas com respeito e honestidade, sem deixar para trás as tradições.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}