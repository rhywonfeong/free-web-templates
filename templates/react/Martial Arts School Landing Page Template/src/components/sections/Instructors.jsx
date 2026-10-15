import React from 'react';
import SectionLabel from '../ui/SectionLabel';

export default function Instructors() {
  const instructors = [
    {
      name: "Mauricio Costa",
      grad: "Faixa Preta 3ºDan Taekwondo",
      units: "Barreiros · Lisboa · Bela Vista",
      bio: "Iniciou a prática em 2015, tornando-se Faixa Preta em 2021. Ministra aulas para todas as idades nas três unidades da escola.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Carlos Silva",
      grad: "Faixa Preta 2ºDan Taekwondo",
      units: "Lisboa",
      bio: "Especialista em treinamento infantil e juvenil. Focado no desenvolvimento disciplinar e motor dos alunos iniciantes.",
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Amanda Costa",
      grad: "Faixa Preta 1ºDan Taekwondo · Hapkido",
      units: "Bela Vista",
      bio: "Atleta competitiva com diversos títulos regionais. Ministra as turmas avançadas de Hapkido e defesa pessoal feminina.",
      img: "https://images.unsplash.com/photo-1580806460395-5bc4ecadcf82?w=400&h=400&fit=crop&q=80"
    }
  ];

  return (
    <section id="instrutores" className="py-24 bg-[#12151F] border-t border-[#2B3045]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel>Nossos Instrutores</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-4 mb-4">Aprenda com quem viveu o tatame.</h2>
          <p className="text-[#94A3B8]">Nossa equipe carrega anos de experiência — em competições, em formação e, acima de tudo, em pessoas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((inst, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative mb-6 overflow-hidden bg-[#0B0D14] aspect-square">
                <img src={inst.img} alt={inst.name} className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-8 h-8 bg-[#E8193C] text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black transition-colors"><iconify-icon icon="simple-icons:instagram"></iconify-icon></div>
                  <div className="w-8 h-8 bg-[#25D366] text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black transition-colors"><iconify-icon icon="simple-icons:whatsapp"></iconify-icon></div>
                </div>
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-tight mb-1">{inst.name}</h3>
              <p className="text-[#E8193C] text-xs font-bold uppercase tracking-widest mb-3">{inst.grad}</p>
              <p className="text-[#6B7280] text-xs font-bold uppercase mb-4"><iconify-icon icon="solar:map-point-bold" className="mr-1"></iconify-icon> {inst.units}</p>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{inst.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}