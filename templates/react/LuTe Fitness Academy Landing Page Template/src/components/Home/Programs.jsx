import React from 'react';
import Button from '../UI/Button';

const programs = [
  {
    title: 'FORGEE STRENGTH',
    desc: 'Musculação por periodização. Para iniciantes a avançados em hipertrofia.',
    freq: '3 a 5× por semana',
    highlight: false
  },
  {
    title: 'FORGEE CONDITIONING',
    desc: 'Sessões de 45 min de alta intensidade. Grupos reduzidos e acompanhamento próximo.',
    freq: '06H · 07H · 12H · 18H · 19H30',
    highlight: true
  },
  {
    title: 'FORGEE MOBILITY',
    desc: 'Foco em postura e prevenção de lesões para quem treina pesado e busca longevidade.',
    freq: '2× por semana',
    highlight: false
  },
  {
    title: 'PERSONAL TRAINING',
    desc: 'Sessões 1:1 com avaliação completa e revisão mensal estruturada.',
    freq: 'Horário flexível',
    highlight: false
  }
];

const Programs = () => {
  return (
    <section id="programas" className="py-24 bg-[#121212] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00F9E4]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">
          UM PROTOCOLO PARA CADA OBJETIVO.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={`p-8 flex flex-col h-full transition-all duration-300 ${
                prog.highlight 
                  ? 'bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A] border border-[#00F9E4]/30 shadow-[0_0_30px_rgba(0,249,228,0.05)] transform hover:-translate-y-2' 
                  : 'bg-[#0A0A0A] border border-[#1C1C1C] hover:border-[#3A3A3A]'
              }`}
            >
              {prog.highlight && (
                <span className="bg-[#00F9E4] text-[#0A0A0A] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full self-start mb-6">
                  Destaque
                </span>
              )}
              <h3 className={`text-xl font-semibold mb-4 tracking-tight ${prog.highlight ? 'text-[#00F9E4]' : 'text-white'}`}>
                {prog.title}
              </h3>
              <p className="text-[#9A9A9A] text-sm leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>
              
              <div className="pt-6 border-t border-[#1C1C1C] mt-auto">
                <div className="flex items-center gap-2 text-xs font-medium text-[#6B6B6B]">
                  <iconify-icon icon="solar:clock-circle-linear" class="text-lg"></iconify-icon>
                  {prog.freq}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;