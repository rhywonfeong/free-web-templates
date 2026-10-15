import React from 'react';
import { Label, SectionMarker } from '../../components/Typography';

export default function MetricsSection() {
  const testimonials = [
    { quote: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.", author: "Rafael M.", role: "Engenheiro", time: "Aluno há 3 anos", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
    { quote: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.", author: "Juliana T.", role: "Professora", time: "Aluna há 2 anos", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { quote: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.", author: "Lucas O.", role: "Empresário", time: "Aluno há 4 anos", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-[#1A1812] text-[#F5F3EF]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2E2A24] border border-[#2E2A24] mb-32">
          {[
            { value: '+1.200', label: 'Alunos ativos' },
            { value: '94%', label: 'Retenção 6 meses' },
            { value: '8 anos', label: 'Em operação' },
            { value: '1.8K', label: 'M² Dedicados' }
          ].map((metric, i) => (
            <div key={i} className="bg-[#1A1812] p-8 flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{metric.value}</span>
              <Label className="text-[#A09688]">{metric.label}</Label>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
             <div className="w-8 h-[1px] bg-[#F5F3EF]"></div>
             <span className="text-xs font-medium tracking-widest text-[#F5F3EF]">02 / 09</span>
          </div>
          <Label className="mb-12 text-[#A09688]">Resultados Reais</Label>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-[#2E2A24] p-8 flex flex-col justify-between hover:border-[#6B6259] transition-colors">
                <div>
                  <div className="w-16 h-16 rounded-none overflow-hidden mb-8">
                     <img src={t.img} alt={t.author} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="text-lg leading-relaxed mb-12 text-[#D6CFC5]">"{t.quote}"</p>
                </div>
                <div>
                  <h5 className="font-semibold uppercase tracking-wider text-sm mb-1">{t.author}</h5>
                  <span className="text-xs text-[#6B6259] uppercase tracking-widest block">{t.role}</span>
                  <span className="text-xs text-[#6B6259] uppercase tracking-widest block">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}