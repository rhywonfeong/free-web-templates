import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { clsx } from 'clsx'

export default function PricingSection() {
  const plans = [
    {
      name: "Livre",
      price: "199",
      popular: false,
      benefits: ["Acesso à estrutura completa", "Horários livres (exceto pico)", "App de treino FORGE", "Avaliação inicial"],
      btnText: "Começar Agora",
      btnVariant: "ghost"
    },
    {
      name: "Plus",
      price: "349",
      popular: true,
      badge: "Mais Escolhido",
      benefits: ["Tudo do Plano Livre", "Coach dedicado — 2x/semana", "Periodização personalizada", "Avaliação mensal com relatório", "Acesso a todas as aulas"],
      btnText: "Escolher Plus",
      btnVariant: "primary"
    },
    {
      name: "Elite",
      price: "599",
      popular: false,
      benefits: ["Tudo do Plano Plus", "Coach dedicado — ilimitado", "Nutricionista esportivo", "Acesso à sala de recuperação", "Armário exclusivo", "Prioridade em horários"],
      btnText: "Escolher Elite",
      btnVariant: "secondary"
    }
  ]

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" className="py-24 bg-[#111111] border-t border-[#2A2A2A] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Matrículas</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white tracking-tight mb-6">
            Escolha Seu Nível de Comprometimento.
          </h2>
          <p className="text-[#8A8A8A] text-lg">
            Sem taxa de matrícula em todos os planos. Cancele quando quiser. Sem fidelidade forçada — ficamos porque entregamos resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "rounded-[24px] p-8 relative transition-transform duration-300",
                plan.popular 
                  ? "bg-[#1E1E24] border-2 border-[#E8541A] md:scale-105 shadow-[0_8px_32px_rgba(232,84,26,0.15)] z-10" 
                  : "bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#4A4A4A]"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8541A] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-[#8A8A8A] font-medium">R$</span>
                <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                <span className="text-[#8A8A8A]">/mês</span>
              </div>

              <ul className="space-y-4 mb-8 min-h-[240px]">
                {plan.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-bold" class={clsx("mt-0.5 text-xl flex-shrink-0", plan.popular ? "text-[#E8541A]" : "text-[#4A4A4A]")}></iconify-icon>
                    <span className="text-[#D4D4D4] text-sm leading-snug">{ben}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.btnVariant} 
                className="w-full"
                onClick={() => scrollTo('#location')}
              >
                {plan.btnText}
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={() => scrollTo('#location')}>Agendar Visita Gratuita</Button>
          <Button variant="secondary" onClick={() => window.open('https://wa.me/5511999990000')}>Falar com Especialista</Button>
        </div>
      </div>
    </section>
  )
}