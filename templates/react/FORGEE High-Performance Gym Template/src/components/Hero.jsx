export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" 
          alt="Forgee Gym Interior" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        {/* Radial dark gradient for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent"></div>
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#1B40FF] opacity-10 blur-[120px] rounded-full mix-blend-screen"></div>
        {/* Diagonal styling band */}
        <div className="absolute bottom-0 right-0 w-full h-[200px] bg-gradient-to-br from-transparent to-[#E84A1A]/10 transform translate-y-1/2 rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-white mb-8 flex flex-col">
            <span>SEM MÁGICA</span>
            <span className="text-[#888888]">SEM ATALHOS</span>
            <span className="text-[#E84A1A]">SEM DESCULPAS</span>
          </h1>
          
          <div className="max-w-xl mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Treinos progressivos e acompanhamento real!</h3>
            <p className="text-[#AAAAAA] text-base md:text-lg leading-relaxed">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-24">
            <button className="px-8 py-4 rounded-full bg-[#E84A1A] text-white font-semibold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(232,74,26,0.4)] transition-all transform hover:-translate-y-1">
              Começar Agora
            </button>
            <button className="px-8 py-4 rounded-md border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
              Conhecer o Espaço
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-t border-white/10">
          {[
            { v: '05H–23H', l: 'Horário' },
            { v: '7 DIAS', l: 'Por semana' },
            { v: '1.800M²', l: 'Área total' },
            { v: '+1.200', l: 'Alunos' },
            { v: '2018', l: 'Fundação' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-3xl md:text-4xl text-white tracking-tight">{stat.v}</span>
              <span className="text-xs text-[#888888] uppercase tracking-widest font-medium mt-1">{stat.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}