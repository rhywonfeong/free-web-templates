import React from 'react';
import { Label, H2, SectionMarker } from '../../components/Typography';

export default function ProgramsSection() {
  const programs = [
    {
      id: '01',
      title: 'FORGEE STRENGTH',
      desc: 'Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.',
      target: 'Iniciantes a avançados em hipertrofia e força.',
      freq: '3–5× por semana',
      featured: false
    },
    {
      id: '02',
      title: 'FORGEE CONDITIONING',
      desc: 'Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.',
      target: 'Condicionamento, perda de gordura.',
      freq: '06H · 07H · 12H · 18H · 19H30',
      featured: true
    },
    {
      id: '03',
      title: 'FORGEE MOBILITY',
      desc: 'Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.',
      target: 'Prevenção, recuperação, controle.',
      freq: 'Livre / Agendado',
      featured: false
    },
    {
      id: '04',
      title: 'PERSONAL TRAINING',
      desc: 'Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.',
      target: 'Foco total, reabilitação, alta performance.',
      freq: 'Agendamento direto',
      featured: false
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 bg-[#EDE9E3] border-y border-[#D6CFC5]">
      <div className="max-w-[1600px] mx-auto">
        <SectionMarker current="04" total="09" />
        <Label className="mb-6">O que oferecemos</Label>
        <H2 className="mb-16">UM PROTOCOLO<br/>PARA CADA<br/>OBJETIVO.</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className={`p-8 md:p-12 flex flex-col h-full border ${prog.featured ? 'bg-[#1E2B1F] text-[#F5F3EF] border-[#1E2B1F]' : 'bg-[#F5F3EF] border-[#D6CFC5] hover:border-[#1A1812]'} transition-colors duration-300`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`text-sm font-semibold tracking-widest ${prog.featured ? 'text-[#A09688]' : 'text-[#6B6259]'}`}>{prog.id}</span>
                {prog.featured && <span className="text-[10px] uppercase tracking-[0.2em] bg-[#F5F3EF] text-[#1A1812] px-2 py-1">Destaque</span>}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{prog.title}</h3>
              <p className={`text-sm leading-relaxed mb-12 flex-grow ${prog.featured ? 'text-[#D6CFC5]' : 'text-[#6B6259]'}`}>
                {prog.desc}
              </p>
              <div className={`pt-6 border-t ${prog.featured ? 'border-[#2D3A2E]' : 'border-[#D6CFC5]'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className={`block text-[10px] uppercase tracking-widest mb-1 ${prog.featured ? 'text-[#A09688]' : 'text-[#A09688]'}`}>Para quem é</span>
                    <span className="text-sm font-medium">{prog.target}</span>
                  </div>
                  <div>
                    <span className={`block text-[10px] uppercase tracking-widest mb-1 ${prog.featured ? 'text-[#A09688]' : 'text-[#A09688]'}`}>Frequência / Turmas</span>
                    <span className="text-sm font-medium">{prog.freq}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}