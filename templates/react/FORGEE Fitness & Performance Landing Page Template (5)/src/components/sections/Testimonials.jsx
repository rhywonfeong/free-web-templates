import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      name: "RAFAEL M.",
      profile: "ENGENHEIRO · ALUNO HÁ 3 ANOS"
    },
    {
      text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      name: "JULIANA T.",
      profile: "PROFESSORA · ALUNA HÁ 2 ANOS"
    },
    {
      text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      name: "LUCAS O.",
      profile: "EMPRESÁRIO · ALUNO HÁ 4 ANOS"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-[#1A1A1A] border border-[#2C2C2C] rounded-lg p-8 flex flex-col justify-between h-full hover:bg-[#1f1f1f] transition-colors relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F46A17]"></div>
            <p className="text-[#CCCCCC] text-base leading-relaxed font-medium mb-8">"{review.text}"</p>
            <div>
              <div className="text-white font-bold tracking-widest text-sm uppercase mb-1">{review.name}</div>
              <div className="text-[#888888] text-xs font-semibold tracking-wider uppercase">{review.profile}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}