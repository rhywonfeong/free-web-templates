import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Dark to transparent gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0A0A0A]/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 flex flex-col justify-between min-h-[70vh]">
        
        <div className="max-w-2xl mt-12 md:mt-24">
          <div className="inline-block border border-[#2D2D2D] rounded-full px-4 py-1.5 mb-8 bg-[#111111]/50 backdrop-blur-sm">
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.1em] text-[#7A7A7A] uppercase">
              BEYOND LIMITS KNOWN™ · INDAIATUBA, SP · EST. 2018
            </p>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-[96px] leading-[0.9] font-black uppercase mb-6 tracking-tighter">
            <span className="text-[#E82020] block mb-2 drop-shadow-[0_0_15px_rgba(232,32,32,0.3)]">SEM MÁGICA</span>
            <span className="text-[#F5F5F5] block">SEM ATALHOS</span>
          </h1>
          
          <p className="font-display text-xl sm:text-2xl text-[#E5E5E5] font-semibold mb-6 uppercase tracking-tight">
            TREINOS PROGRESSIVOS E ACOMPANHAMENTO REAL!
          </p>
          
          <p className="text-[#7A7A7A] text-base md:text-lg mb-10 max-w-lg leading-relaxed">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 group">
              COMEÇAR AGORA 
              <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </Button>
            <Button variant="secondary" size="lg">CONHECER O ESPAÇO</Button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-24 md:mt-auto border-t border-[#2D2D2D]/50 bg-[#111111]/30 backdrop-blur-md rounded-t-2xl p-6 hidden md:block">
          <div className="flex justify-between items-center divide-x divide-[#2D2D2D]/50">
            {[
              { label: 'Horário', val: '05H–23H' },
              { label: 'Dias', val: '7 DIAS' },
              { label: 'Área', val: '1.800M²' },
              { label: 'Alunos', val: '+1.200 ALUNOS' },
              { label: 'Fundação', val: 'DESDE 2018' },
            ].map((stat, i) => (
              <div key={i} className="px-6 first:pl-0 last:pr-0 flex flex-col">
                <span className="text-[#7A7A7A] text-xs uppercase tracking-wider mb-1">{stat.label}</span>
                <span className="text-[#F5F5F5] font-display font-semibold tracking-tight">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}