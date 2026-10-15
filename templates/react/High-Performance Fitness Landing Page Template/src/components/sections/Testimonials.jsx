import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Treinei em muitos lugares antes da Forge. A diferença está nos detalhes — nos equipamentos, no nível dos coaches, na seriedade do protocolo. Em 6 meses tive mais resultado do que em 3 anos em outros lugares.",
      author: "Lucas Tavares",
      role: "Aluno Elite · há 14 meses"
    },
    {
      text: "Vim pelo espaço, fiquei pela metodologia. O protocolo personalizado mudou minha relação com o treino. Pela primeira vez entendo por que faço cada exercício — e isso faz toda a diferença na consistência.",
      author: "Fernanda Melo",
      role: "Aluna Plus · há 8 meses"
    },
    {
      text: "Como atleta amador, precisava de um ambiente que me desafiasse. A Forge entregou isso e mais. Os coaches sabem o que fazem e o espaço é absurdamente bem estruturado. Vale cada centavo.",
      author: "Rafael Drummond",
      role: "Aluno Plus · há 22 meses"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111111] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <Eyebrow>Depoimentos</Eyebrow>
          <Headline>O que dizem quem já transformou.</Headline>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#181818] border border-[#2A2A2A] p-8 rounded-xl relative group hover:border-[#3D3D3D] transition-colors">
              <iconify-icon icon="solar:quote-left-bold" class="text-5xl text-[#2A2A2A] absolute top-6 right-6 group-hover:text-[#FF3A00]/20 transition-colors"></iconify-icon>
              
              <div className="flex gap-1 text-[#C8F200] mb-6">
                {[1,2,3,4,5].map(star => (
                  <iconify-icon key={star} icon="solar:star-bold" class="text-sm"></iconify-icon>
                ))}
              </div>
              
              <p className="text-[#CCCCCC] mb-8 relative z-10 text-sm leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-display uppercase tracking-widest text-[#F5F5F5] mb-1">{item.author}</h4>
                <p className="text-[#888888] text-xs uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;