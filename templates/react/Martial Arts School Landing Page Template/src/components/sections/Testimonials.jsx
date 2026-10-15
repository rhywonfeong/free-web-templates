import React from 'react';
import SectionLabel from '../ui/SectionLabel';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Quando coloquei meu filho na KMAS, não imaginava o quanto ele ia mudar. Em poucos meses, ficou mais disciplinado, confiante e focado na escola. É a melhor decisão que tomei.",
      author: "Juliana Silva",
      role: "Mãe de aluno · 2 anos de academia"
    },
    {
      text: "Comecei adulto, sem nenhuma experiência. Os professores têm uma paciência incrível e me fizeram sentir parte da equipe. Hoje sou faixa verde e não paro por aí.",
      author: "Ricardo Mendes",
      role: "Engenheiro · aluno há 18 meses"
    },
    {
      text: "Treino na KMAS há anos e já competi em vários campeonatos. A estrutura, os treinos e o suporte dos professores fazem toda a diferença na hora da competição.",
      author: "Lucas Costa",
      role: "Atleta competitivo · Faixa Preta"
    },
    {
      text: "Voltei a praticar esportes depois de anos parado. O Taekwondo me deu de volta a energia, o foco e uma comunidade que me motiva todo dia.",
      author: "Marcos Antonio",
      role: "Empresário · aluno há 8 meses"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-[#0B0D14]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <SectionLabel>O Que Nossos Alunos Dizem</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4">
            Histórias reais.<br/>Transformações reais.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#12151F] border border-[#2B3045] p-8 hover:border-[#E8193C] transition-colors duration-300">
              <div className="flex text-[#D4A017] mb-6 text-sm">
                {[...Array(5)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>)}
              </div>
              <p className="text-lg text-white mb-8 font-medium leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2B3045] rounded-full flex items-center justify-center font-bold text-[#94A3B8]">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">{t.author}</h4>
                  <p className="text-xs text-[#6B7280]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}