import React from 'react'
import Button from '../ui/Button'

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background with editorial crop style */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full md:w-[65%] h-full relative">
          {/* Heavy gradient overlay for text readability on the left, fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10"></div>
          {/* Bottom gradient to blend with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop" 
            alt="Atleta em treinamento" 
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-2xl">
          {/* Context Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#E63422]"></span>
            <span className="text-[#D4D4D4] text-sm uppercase tracking-[0.15em] font-medium">Alto Padrão · Resultados Comprovados</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-[clamp(48px,8vw,96px)] font-black text-white leading-[0.95] tracking-tighter mb-6 uppercase">
            Forge <span className="text-[#E63422]">Seu</span><br/>Melhor Self.
          </h1>

          {/* Subtitle */}
          <p className="text-[#8A8A8A] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Um ambiente onde disciplina encontra excelência. Metodologia de elite, estrutura premium e coaches certificados comprometidos com a sua evolução real.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={() => scrollTo('#location')}>Agendar Visita Gratuita</Button>
            <Button variant="secondary" size="lg" onClick={() => window.open('https://wa.me/5511999990000')}>Falar com Especialista</Button>
          </div>

          {/* Social Proof Badge */}
          <div className="glass-panel rounded-[16px] p-4 inline-flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#1E1E24] object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#1E1E24] object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#1E1E24] object-cover" />
            </div>
            <div>
              <div className="flex text-[#F0A500] mb-1">
                {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold"></iconify-icon>)}
              </div>
              <p className="text-xs font-medium text-[#D4D4D4]"><strong className="text-white">+1.200</strong> alunos ativos · nota 4.9</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative scribbles/icons as requested in design system */}
      <iconify-icon icon="solar:dumbell-bold" class="absolute bottom-32 right-[10%] text-[#E8541A]/20 text-6xl rotate-12 z-10"></iconify-icon>
      <iconify-icon icon="solar:heart-pulse-bold" class="absolute top-40 right-[20%] text-[#E63422]/20 text-5xl -rotate-12 z-10"></iconify-icon>
    </section>
  )
}