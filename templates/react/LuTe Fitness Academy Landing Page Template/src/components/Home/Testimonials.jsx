import React from 'react';

const testimonials = [
  {
    name: "Rafael M.",
    role: "Engenheiro · Aluno há 3 anos",
    text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas."
  },
  {
    name: "Juliana T.",
    role: "Professora · Aluna há 2 anos",
    text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha o meu progresso diário."
  },
  {
    name: "Lucas O.",
    role: "Empresário · Aluno há 4 anos",
    text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado na minha vida."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#121212] border-y border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0A0A0A] p-8 border border-[#1C1C1C] hover:border-[#00998A] transition-colors duration-300 rounded flex flex-col justify-between group">
              <iconify-icon icon="solar:quote-left-bold" class="text-3xl text-[#2A2A2A] group-hover:text-[#00F9E4] transition-colors mb-6"></iconify-icon>
              <p className="text-[#CFCFCF] text-lg leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <span className="text-[#6B6B6B] text-xs tracking-wide uppercase">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;