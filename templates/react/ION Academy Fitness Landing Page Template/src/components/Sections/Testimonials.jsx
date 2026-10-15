import React from 'react';

const testimonials = [
  {
    quote: "Treinei em academias em São Paulo por anos. A ION é a única que me fez não sentir falta de nenhuma delas.",
    author: "Rafael M.",
    role: "Engenheiro · Aluno há 3 anos"
  },
  {
    quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
    author: "Juliana T.",
    role: "Professora · Aluna há 2 anos"
  },
  {
    quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
    author: "Lucas O.",
    role: "Empresário · Aluno há 4 anos"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-neutral-900 p-8 border border-neutral-850 hover:bg-neutral-850 transition-colors flex flex-col justify-between">
              <div className="mb-8">
                <div className="text-brand-purple mb-4">
                  <iconify-icon icon="solar:quote-left-bold" width="32"></iconify-icon>
                </div>
                <p className="text-neutral-200 text-lg leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-500 font-bold uppercase">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-neutral-50 font-semibold text-sm uppercase tracking-tight">{t.author}</div>
                  <div className="text-neutral-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}