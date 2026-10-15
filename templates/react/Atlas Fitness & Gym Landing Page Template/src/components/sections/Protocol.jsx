import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Protocol = () => {
  const steps = [
    { title: "Assessment Completo", desc: "Avaliação física, funcional e de composição corporal com equipamento de bioimpedância e análise postural detalhada." },
    { title: "Definição de Objetivos", desc: "Sessão estratégica com seu coach para alinhar expectativas, definir metas mensuráveis e estabelecer um horizonte realista." },
    { title: "Prescrição de Treino", desc: "Periodização individualizada com divisão de treinos, volumes, intensidades e métodos baseados no seu assessment." },
    { title: "Execução Monitorada", desc: "Treinos acompanhados por coaches que verificam técnica, ajustam carga e garantem execução segura e eficiente." },
    { title: "Check-in Mensal", desc: "Reavaliação de métricas, ajuste de protocolo e atualização de metas com base na sua evolução real." },
    { title: "Periodização Anual", desc: "Visão macro de toda a sua jornada, com fases de volume, intensidade, deload e pico planejadas com antecedência." }
  ];

  return (
    <section id="protocolo" className="py-24 md:py-32 px-5 md:px-10 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <SectionHeader 
            label="O Sistema ATLAS"
            title="O que chamamos de Protocolo."
          />
          
          <div className="flex flex-col gap-8 lg:pt-8">
            <div className="text-neutral-300 text-lg leading-relaxed flex flex-col gap-4">
              <p>
                Protocolo não é uma palavra bonita no nosso cardápio. É a espinha dorsal de tudo que fazemos. É o sistema que transforma esforço aleatório em progresso previsível — porque resultados reais exigem método, não sorte.
              </p>
              <p>
                Cada aluno da ATLAS passa por um processo de diagnóstico completo antes de colocar o pé na área de treino. Avaliamos composição corporal, histórico de lesões, capacidade cardiovascular, padrões de movimento e objetivos reais — não os que você acha que tem, os que você realmente precisa.
              </p>
            </div>
            
            <blockquote className="border-l-2 border-acid pl-6 italic text-xl md:text-2xl font-medium text-offwhite">
              "Não existe treino certo para todo mundo. Existe o treino certo para você — e é isso que construímos juntos."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="primary">Agendar Avaliação Gratuita</Button>
              <Button variant="outline">Falar com Especialista</Button>
            </div>
          </div>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-neutral-950 p-8 border border-neutral-800 hover:border-acid transition-colors group">
              <div className="text-6xl font-display font-black text-neutral-800 group-hover:text-acid transition-colors mb-6 leading-none">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold uppercase tracking-wide text-offwhite mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Protocol;