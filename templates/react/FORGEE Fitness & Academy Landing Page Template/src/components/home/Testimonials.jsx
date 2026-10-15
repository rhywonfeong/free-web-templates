import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
      name: "Rafael M.",
      profile: "Engenheiro · Aluno há 3 anos"
    },
    {
      quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
      name: "Juliana T.",
      profile: "Professora · Aluna há 2 anos"
    },
    {
      quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
      name: "Lucas O.",
      profile: "Empresário · Aluno há 4 anos"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#000000]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#111111] p-10 border-glass flex flex-col justify-between group hover:border-[#FF1E00]/50 transition-colors duration-500 rounded-none">
              <iconify-icon icon="solar:quote-left-bold-duotone" class="text-4xl text-[#353535] mb-8 group-hover:text-[#FF1E00] transition-colors"></iconify-icon>
              <p className="text-lg text-[#D9D9D9] font-light leading-relaxed mb-12">
                "{item.quote}"
              </p>
              <div>
                <h4 className="font-display text-xl font-bold text-white tracking-wide uppercase">{item.name}</h4>
                <p className="text-xs tracking-widest uppercase text-[#636363] mt-1">{item.profile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;