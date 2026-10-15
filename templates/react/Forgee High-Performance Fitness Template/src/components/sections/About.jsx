import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import CTAGroup from '../ui/CTAGroup';

const About = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-[#F8F7F6]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionHeader 
              eyebrow="QUEM SOMOS"
              title={<>NÃO TREINAMOS SÓ O CORPO. <br/>FORJAMOS SUA MELHOR VERSÃO.</>}
              className="mb-8"
            />
            
            <div className="space-y-6 text-[#1E1B18] text-[17px] leading-[1.65]">
              <p>
                A Forgee nasceu da convicção de que o treinamento de alto padrão não deveria ser privilégio de poucos. Fundada há 14 anos em São Paulo, construímos uma das estruturas mais completas e metodologicamente avançadas do país — sem abrir mão da individualidade de cada aluno.
              </p>
              <p>
                Aqui, cada detalhe foi projetado com intenção: dos equipamentos à periodização, da arquitetura à curadoria de coaches. O ambiente não é decoração — é parte do protocolo.
              </p>
              <p>
                Nosso sistema não promete resultados rápidos. Promete resultados reais, construídos sobre disciplina repetida, orientação especializada e uma estrutura que não aceita mediocridade.
              </p>
            </div>

            <div className="mt-10 p-8 bg-white rounded-2xl border border-[#E6E3E0] shadow-sm relative overflow-hidden group hover:border-[#E84E0F]/30 hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E84E0F]" />
              <p className="font-display text-[28px] md:text-[32px] font-bold uppercase tracking-tight text-[#0F0D0B] leading-tight mb-2">
                "Disciplina é o tempo tornado visível."
              </p>
              <p className="font-accent text-[#8A837C] text-[12px] tracking-widest uppercase">
                — Princípio Forgee. Desde 2010.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] rounded-[32px] overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
              alt="Ambiente interno da academia" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[600ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E84E0F] animate-pulse" />
                <span className="font-accent text-white text-xs tracking-widest uppercase">STATUS_ATIVO</span>
              </div>
              <p className="font-display font-bold text-white text-2xl uppercase tracking-tight">
                2.400m² DE ESTRUTURA PURA
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PillarCard 
            icon="solar:layers-bold"
            title="MÉTODO"
            desc="Treinamento periodizado e individualizado, construído por coaches com formação nacional e internacional."
          />
          <PillarCard 
            icon="solar:target-bold"
            title="AMBIENTE"
            desc="Infraestrutura projetada para performance — sem barulho desnecessário, sem distração."
          />
          <PillarCard 
            icon="solar:graph-up-bold"
            title="RESULTADO"
            desc="Mais de 14 anos entregando transformações mensuráveis. Não prometemos. Demonstramos."
          />
        </div>

        <CTAGroup className="mt-16" />
      </div>
    </section>
  );
};

const PillarCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-[24px] border border-[#E6E3E0] shadow-sm hover:shadow-md hover:border-[#E84E0F]/30 hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 rounded-full bg-[#FFF0E8] flex items-center justify-center mb-6">
      <iconify-icon icon={icon} width="24" class="text-[#E84E0F]" />
    </div>
    <h3 className="font-display font-bold text-[24px] uppercase tracking-tight text-[#0F0D0B] mb-3">
      {title}
    </h3>
    <p className="text-[#4A4540] text-[15px] leading-[1.6]">
      {desc}
    </p>
  </div>
);

export default About;