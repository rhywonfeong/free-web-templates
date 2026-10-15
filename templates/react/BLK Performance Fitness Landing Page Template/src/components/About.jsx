import React from 'react';
import SectionLabel from './ui/SectionLabel';
import Button from './ui/Button';

export default function About() {
  const pillars = [
    { num: '01', title: 'Força' },
    { num: '02', title: 'Método' },
    { num: '03', title: 'Resultado' }
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 relative border-b border-[var(--color-ash)]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionLabel>Quem Somos</SectionLabel>
              <h2 className="font-display text-[40px] md:text-[64px] leading-[0.9] tracking-tight mb-8">
                FORJADOS PELA <br/><span className="text-[var(--color-primary)]">DISCIPLINA</span>
              </h2>
            </div>

            <div className="hidden lg:flex gap-12 mt-12">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="flex flex-col">
                  <span className="text-[11px] text-[var(--color-smoke)] tracking-[0.1em] mb-2 font-mono">{pillar.num}</span>
                  <span className="font-display tracking-wider text-xl text-white">{pillar.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 relative mt-8 lg:mt-0">
            {/* 12 Years Badge overlaying text */}
            <div className="absolute -top-8 -right-2 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border border-[var(--color-ash)] rounded-full flex flex-col items-center justify-center bg-[var(--color-carbon)] z-10 transform rotate-12 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="font-display text-2xl md:text-3xl text-[var(--color-primary)]">12</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-[var(--color-silver)] text-center px-2">Anos de<br/>Excelência</span>
            </div>

            <div className="bg-[var(--color-iron)]/30 p-8 pt-16 pr-16 md:p-12 md:pt-16 md:pr-32 border border-[var(--color-ash)]/50 relative z-0">
              <p className="text-[16px] leading-relaxed text-[var(--color-silver)] mb-6">
                A BLK nasceu de uma convicção: transformação real exige ambiente real. Construímos um espaço onde a arquitetura, os equipamentos e os protocolos de treinamento convergem para um único objetivo — <strong className="text-white font-medium">levar você além do que julgava possível.</strong>
              </p>
              <p className="text-[16px] leading-relaxed text-[var(--color-silver)]">
                Nossa metodologia não é genérica. Cada programa é estruturado em fases progressivas, acompanhado por coaches certificados e calibrado para o seu perfil físico e psicológico. Não vendemos matrícula. <strong className="text-[var(--color-primary)] font-medium">Construímos atletas.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Button variant="primary">Agendar Visita Gratuita</Button>
              <Button variant="link">Falar com Especialista</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}