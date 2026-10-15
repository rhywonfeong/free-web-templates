import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function MethodologySection() {
  const steps = [
    {
      num: "01",
      title: "Avaliação Completa",
      desc: "Bioimpedância, teste de força, mobilidade articular e anamnese detalhada. Conhecemos seu ponto de partida antes de começar."
    },
    {
      num: "02",
      title: "Plano Personalizado",
      desc: "Um coach dedicado monta sua periodização com base nos dados coletados. Nada copiado, nada genérico."
    },
    {
      num: "03",
      title: "Execução Supervisionada",
      desc: "Cada treino é acompanhado — presencialmente ou via app — para garantir técnica, segurança e intensidade adequadas."
    },
    {
      num: "04",
      title: "Revisão e Ajuste",
      desc: "A cada 4 semanas, reavaliamos os dados e ajustamos o plano. Seu treino evolui com você."
    }
  ]

  const tags = ["Periodização Linear", "Avaliação Mensal", "Carga Progressiva", "Recuperação Ativa", "Monitoramento Semanal"]

  return (
    <section id="methodology" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionLabel>Metodologia</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight">
            O Protocolo FORGE.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Concept Block */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-6">O que é o Protocolo?</h3>
            <p className="text-[#8A8A8A] leading-relaxed mb-6">
              O Protocolo FORGE é nossa metodologia proprietária de treinamento — um sistema inteligente que une avaliação funcional, periodização progressiva e monitoramento contínuo para garantir que cada semana de treino seja melhor que a anterior.
            </p>
            <p className="text-[#8A8A8A] leading-relaxed mb-8">
              Não é um programa genérico. É uma estrutura viva que se adapta à sua resposta fisiológica, agenda e objetivos em tempo real.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#1E1E24] text-[#D4D4D4] text-xs font-semibold uppercase tracking-wider rounded-md border border-[#2A2A2A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-[#111111] p-8 rounded-[16px] border border-[#2A2A2A] relative overflow-hidden group hover:border-[#E8541A] transition-colors">
                  <div className="absolute -right-4 -top-8 text-[120px] font-black text-[#1E1E24] opacity-50 group-hover:text-[#E8541A]/10 transition-colors pointer-events-none select-none">
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="text-[#E63422]">{step.num}.</span> {step.title}
                    </h4>
                    <p className="text-[#8A8A8A]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}