import React from 'react'
import SectionLabel from '../ui/SectionLabel'

export default function AboutSection() {
  const pillars = [
    {
      title: "Propósito Claro",
      desc: "Cada aluno recebe um plano individualizado. Sem atalhos, sem promessas vazias. Trabalhamos com metas reais, prazos honestos e evolução mensurável.",
      icon: "solar:target-bold"
    },
    {
      title: "Padrão de Excelência",
      desc: "Equipamentos de nível profissional, higienização rigorosa e manutenção diária. O espaço em que você treina reflete o respeito que temos pelo seu tempo.",
      icon: "solar:medal-star-bold"
    },
    {
      title: "Base Científica",
      desc: "Nossa metodologia é construída sobre periodização, avaliação constante e ajustes progressivos. Treinamento que funciona porque é baseado em evidências.",
      icon: "solar:test-tube-minimalistic-bold"
    },
    {
      title: "Comunidade Real",
      desc: "Você não treina sozinho. Aqui você encontra pessoas com a mesma mentalidade — comprometidas, respeitosas e dispostas a evoluir junto com você.",
      icon: "solar:users-group-two-rounded-bold"
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#111111] relative border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <SectionLabel>Quem Somos</SectionLabel>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Mais que uma academia.<br/>Uma filosofia de vida.
          </h2>
          <p className="text-[#8A8A8A] text-lg leading-relaxed">
            Fundada por atletas e profissionais de saúde, a FORGE nasceu da convicção de que o treinamento de alto rendimento não deveria ser privilégio de poucos. Combinamos ciência do esporte, tecnologia e um ambiente que inspira — para que cada visita seja um compromisso renovado consigo mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#1E1E24] p-8 rounded-[16px] hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#2A2A2A]">
              <div className="w-12 h-12 bg-[#0A0A0A] rounded-full flex items-center justify-center mb-6 text-[#E63422]">
                <iconify-icon icon={pillar.icon} width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
              <p className="text-[#8A8A8A] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}