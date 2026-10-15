import React from 'react'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
          alt="Athlete training in a dark gym" 
          className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
        {/* Abstract geometric red shape behind content */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8190F] opacity-10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20 pb-32">
        <div className="max-w-2xl">
          <p className="text-[#E8190F] font-semibold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#E8190F]"></span>
            Treinos progressivos
          </p>
          
          <h1 className="font-display text-6xl md:text-[7rem] leading-none tracking-tight mb-8 text-white flex flex-col gap-3 md:gap-5">
            <span>SEM MÁGICA</span>
            <span>SEM <span className="text-[#FF4A1C]">ATALHOS</span></span>
            <span>SEM DESCULPAS</span>
          </h1>
          
          <p className="text-[#BFBFBF] text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Começar Agora <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
            </Button>
            <Button variant="outline" size="lg">
              Conhecer o espaço
            </Button>
          </div>
        </div>
      </div>

      {/* Social Proof / Stats Bar positioned at bottom */}
      <div className="absolute bottom-0 w-full z-20 bg-[#1C1C1C]/90 backdrop-blur-sm border-t border-[#2E2E2E]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x divide-[#2E2E2E] hidden md:grid">
            {[
              { label: "Horário", value: "05H–23H" },
              { label: "Operação", value: "7 DIAS" },
              { label: "Área total", value: "1.800M²" },
              { label: "Base", value: "+1.200 ALUNOS" },
              { label: "Fundação", value: "DESDE 2018" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col px-4 first:pl-0 last:pr-0 group">
                <span className="text-[#808080] text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-[#E8190F] transition-colors">{stat.label}</span>
                <span className="text-white font-display text-2xl tracking-wide">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection