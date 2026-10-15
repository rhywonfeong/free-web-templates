import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import CTAGroup from '../ui/CTAGroup';

const Stats = () => {
  return (
    <section className="py-32 brand-gradient relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
        <SectionHeader 
          theme="dark"
          align="center"
          eyebrow="Forgee EM DADOS"
          title="OS NÚMEROS NÃO MENTEM."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-center">
          <StatBlock value="+1.200" label="ALUNOS ATIVOS" desc="Comunidade em crescimento contínuo, com renovação trimestral superior a 88%." />
          <StatBlock value="96%" label="TAXA DE FREQUÊNCIA" desc="A maior taxa de adesão entre academias premium de São Paulo — medida mensalmente." />
          <StatBlock value="14" label="ANOS DE EXCELÊNCIA" desc="Uma década e meia forjando atletas, refinando método e elevando o padrão." />
        </div>

        <div className="mt-24 text-center">
          <p className="font-accent text-white/80 text-[13px] tracking-[3px] uppercase max-w-2xl mx-auto">
            PROGRESSO NÃO É UM MILAGRE. É UM PADRÃO DE ESCOLHAS REPETIDO EM RITMO.
          </p>
          <CTAGroup theme="dark" justify="center" className="mt-12" />
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ value, label, desc }) => (
  <div className="flex flex-col items-center">
    <span className="font-display font-black text-white text-[80px] md:text-[100px] leading-[0.9] tracking-[-3px] mb-4">
      {value}
    </span>
    <span className="font-accent text-[#FF9955] text-[14px] font-semibold tracking-[2px] uppercase mb-4">
      {label}
    </span>
    <p className="text-white/80 text-[15px] leading-[1.6] max-w-[280px]">
      {desc}
    </p>
  </div>
);

export default Stats;