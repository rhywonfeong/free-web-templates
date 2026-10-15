import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function ProgramsSection() {
  const programs = [
    {
      title: 'FORGEE STRENGTH',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      target: 'Iniciantes a avançados em hipertrofia e força.',
      freq: '3–5× por semana.',
      highlight: false
    },
    {
      title: 'FORGEE CONDITIONING',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      target: 'Condicionamento, perda de gordura.',
      schedule: '06H · 07H · 12H · 18H · 19H30',
      highlight: true
    },
    {
      title: 'FORGEE MOBILITY',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      target: 'Prevenção de lesões, recuperação.',
      freq: '2–3× por semana.',
      highlight: false
    },
    {
      title: 'PERSONAL TRAINING',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      target: 'Foco extremo e acompanhamento exclusivo.',
      freq: 'A definir com o coach.',
      highlight: false
    }
  ]

  return (
    <section id="programas" className="py-24 md:py-32 bg-[#0A0A0A] relative border-b border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <SectionLabel>O que oferecemos</SectionLabel>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white">
            Um Protocolo<br/>
            Para Cada<br/>
            Objetivo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className={`p-8 border relative flex flex-col h-full transition-all duration-300 ${
                prog.highlight 
                  ? 'bg-[#141414] border-[#E8001C] shadow-glow-red/20' 
                  : 'bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#3D3D3D]'
              }`}
            >
              {prog.highlight && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#E8001C] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Destaque
                </div>
              )}
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-wide mb-4">
                {prog.title}
              </h3>
              
              <p className="text-[#C8C8C8] text-sm leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>
              
              <div className="border-t border-[#1A1A1A] pt-4 space-y-2 mt-auto">
                <div className="flex items-start">
                  <span className="font-mono text-[10px] text-[#7A7A7A] uppercase w-24 flex-shrink-0 mt-0.5">Para quem:</span>
                  <span className="text-sm text-white">{prog.target}</span>
                </div>
                {prog.freq && (
                  <div className="flex items-start">
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase w-24 flex-shrink-0 mt-0.5">Frequência:</span>
                    <span className="text-sm text-white">{prog.freq}</span>
                  </div>
                )}
                {prog.schedule && (
                  <div className="flex items-start">
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase w-24 flex-shrink-0 mt-0.5">Turmas:</span>
                    <span className="text-sm text-[#00C2E0] font-bold">{prog.schedule}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}