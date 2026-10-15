import React from 'react'
import clsx from 'clsx'

const ProgramsSection = () => {
  const programs = [
    {
      id: 'strength',
      title: 'Forgee Strength',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      target: 'Iniciantes a avançados em hipertrofia e força.',
      freq: '3–5× por semana.',
      highlight: false
    },
    {
      id: 'conditioning',
      title: 'Forgee Conditioning',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      target: 'Condicionamento, perda de gordura.',
      freq: 'Turmas: 06H · 07H · 12H · 18H · 19H30',
      highlight: true
    },
    {
      id: 'mobility',
      title: 'Forgee Mobility',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      target: 'Recuperação, prevenção de lesões.',
      freq: '1-2× por semana.',
      highlight: false
    },
    {
      id: 'personal',
      title: 'Personal Training',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      target: 'Objetivos específicos, reabilitação, atletas.',
      freq: 'Agendamento livre.',
      highlight: false
    }
  ]

  return (
    <section id="programas" className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-eyebrow block mb-6">O que oferecemos</span>
          <h2 className="font-display font-bold text-[48px] md:text-[64px] leading-[1] uppercase tracking-tighter">
            Um protocolo<br />para cada <span className="text-[#E8400A]">objetivo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((prog, i) => (
            <div 
              key={prog.id} 
              className={clsx(
                "p-8 md:p-10 border transition-all duration-300 flex flex-col group relative overflow-hidden",
                prog.highlight 
                  ? "bg-[#1E1E1E] border-[#E8400A]/30 hover:border-[#E8400A]" 
                  : "bg-[#181818] border-[#2A2A2A] hover:border-[#6B6B6B]"
              )}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-0 bg-[#E8400A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Destaque
                </div>
              )}
              
              <h3 className={clsx(
                "font-display text-3xl font-semibold uppercase tracking-tight mb-4",
                prog.highlight ? "text-[#E8400A]" : "text-white"
              )}>
                {prog.title}
              </h3>
              
              <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>
              
              <div className="border-t border-[#2A2A2A] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-[#6B6B6B] text-[10px] uppercase tracking-widest mb-1">Para quem é</span>
                  <span className="block text-[#D9D9D9] text-sm">{prog.target}</span>
                </div>
                <div>
                  <span className="block text-[#6B6B6B] text-[10px] uppercase tracking-widest mb-1">{prog.title.includes('Conditioning') ? 'Turmas' : 'Frequência'}</span>
                  <span className="block text-[#D9D9D9] text-sm">{prog.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProgramsSection