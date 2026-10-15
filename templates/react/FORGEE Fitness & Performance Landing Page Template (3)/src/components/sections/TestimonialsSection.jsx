import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
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

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <SectionHeader 
          eyebrow="O que dizem"
          title="RESULTADOS\nQUE FALAM."
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-base border border-subtle p-8 rounded-2xl flex flex-col justify-between min-h-[280px]">
              <div>
                <iconify-icon icon="solar:quote-right-bold" className="text-[#BFFF00]/20 text-4xl mb-6"></iconify-icon>
                <p className="font-serif italic text-lg leading-relaxed text-white">"{t.quote}"</p>
              </div>
              <div className="mt-8 pt-6 border-t border-subtle">
                <p className="font-semibold text-white text-sm">{t.author}</p>
                <p className="text-xs text-[#888780] mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>AGENDAR UMA VISITA GRATUITA</Button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;