import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=80" 
          alt="Gym interior" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00F9E4]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00F9E4]/30 bg-[#00F9E4]/5 backdrop-blur-sm mb-8">
            <iconify-icon icon="solar:map-point-linear" className="text-[#00F9E4]"></iconify-icon>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00F9E4]">
              Beyond Limits Known · Indaiatuba, SP · Est. 2018
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.85] uppercase mb-8 text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9A9A9A]">Sem Mágica</span>
            <span className="block text-[#00F9E4]">Sem Atalhos</span>
            <span className="block">Sem Desculpas</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9A9A9A] leading-relaxed max-w-2xl mb-10 text-balance border-l-2 border-[#00F9E4] pl-6">
            Treinos progressivos e acompanhamento real! Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button href="#planos" icon="solar:arrow-right-linear">Começar Agora</Button>
            <Button href="#espaco" variant="secondary" icon="solar:eye-linear">Conhecer o Espaço</Button>
          </div>
        </div>
      </div>

      {/* KPI Bar */}
      <div className="relative z-10 border-t border-[#2A2A2A] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#2A2A2A] border-l border-r border-[#2A2A2A]">
            {[
              { label: 'Horário', value: '05H — 23H' },
              { label: 'Dias', value: '7 DIAS' },
              { label: 'Área', value: '1.800M²' },
              { label: 'Alunos', value: '+1.200 ALUNOS' },
              { label: 'Fundação', value: 'DESDE 2018' },
            ].map((kpi, i) => (
              <div key={i} className="p-6 flex flex-col justify-center items-center text-center group hover:bg-[#121212] transition-colors">
                <span className="text-[#6B6B6B] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 group-hover:text-[#00F9E4] transition-colors">{kpi.label}</span>
                <span className="text-white font-semibold text-lg md:text-xl tracking-tight">{kpi.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}