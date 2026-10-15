import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const Testimonials = () => {
  const reviews = [
    {
      name: "Mariana Costa",
      meta: "34 anos — Empresária | Elite (18 meses)",
      text: "Já treinei em academias caras. Nenhuma tinha o que essa tem: um sistema de verdade. Em 6 meses perdi 14kg e ganhei mais músculo do que em 3 anos treinando sem método."
    },
    {
      name: "Thiago Rocha",
      meta: "41 anos — Executivo | Plus (11 meses)",
      text: "Vim após uma lesão no joelho. O trabalho de mobilidade e a supervisão mudaram tudo. Hoje levanto o dobro de antes e durmo melhor. Não é marketing — é o que aconteceu."
    },
    {
      name: "Fernanda Alves",
      meta: "28 anos — Fisioterapeuta | Plus (8 meses)",
      text: "Como profissional da saúde, sou exigente. Aqui o nível é diferente. Os coaches sabem o que fazem, os equipamentos são mantidos. Indico para todos os meus pacientes."
    },
    {
      name: "Carlos Henrique",
      meta: "52 anos — Médico | Elite (2 anos)",
      text: "Cheguei com hipertensão e sedentarismo. O time construiu um protocolo que respeitava minha biologia. Hoje tenho mais energia do que aos 35. Vale cada centavo."
    }
  ];

  return (
    <section className="py-24 bg-[#111111] bg-texture">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeader 
          tag="O que dizem" 
          title="Resultado é o que fica." 
          subtitle="Experiência é o que faz você voltar."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 md:p-10 border border-[#252525] relative">
              <iconify-icon icon="solar:quote-right-bold" class="absolute top-8 right-8 text-4xl text-[#333333]"></iconify-icon>
              
              <div className="flex gap-1 mb-6 text-[#AAFF00]">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>
                ))}
              </div>
              
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8 font-sans">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-[#252525] pt-6">
                <div className="w-12 h-12 bg-[#252525] rounded-full flex items-center justify-center font-display font-bold text-[#AAFF00] text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase text-white leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-[#666666] text-xs uppercase tracking-wide">
                    {review.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;