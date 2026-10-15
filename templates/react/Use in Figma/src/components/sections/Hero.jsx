import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-0 overflow-hidden border-b border-subtle">
      {/* Background with dark overlay and subtle grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')] bg-cover bg-center bg-no-repeat grayscale-[0.8] opacity-50 mix-blend-luminosity"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] bg-[#E8400A] opacity-10 blur-[150px] rounded-full z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8400A]"></div>
              <span className="text-[#E8400A] text-[11px] font-bold uppercase tracking-[0.2em]">
                Treinos progressivos e acompanhamento real
              </span>
            </div>
            
            <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tighter uppercase text-white text-shadow-sm">
              O AMBIENTE DITA O <span className="text-[#E8400A]">RESULTADO.</span>
            </h1>
            
            <p className="text-[#B0B0B0] text-lg max-w-xl leading-relaxed border-l border-[#2A2A2A] pl-6 py-2">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button href="#planos">Começar Agora</Button>
              <Button href="#espaco" variant="secondary">Conhecer o Espaço</Button>
            </div>
          </div>

          {/* Right Image/Visual element (Optional since bg has an image, but requested by ref) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative aspect-[3/4] border border-[#2A2A2A] overflow-hidden bg-surface">
               <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" 
                alt="Athlete training" 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
            {/* Nav Arrows mimicking the reference */}
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111111] border border-subtle flex items-center justify-center text-white hover:text-[#E8400A] transition-colors">
              <iconify-icon icon="solar:alt-arrow-left-linear" width="24" />
            </button>
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111111] border border-subtle flex items-center justify-center text-white hover:text-[#E8400A] transition-colors">
              <iconify-icon icon="solar:alt-arrow-right-linear" width="24" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-subtle pt-12 mt-24">
          {[
            { label: 'Horário', value: '05H–23H' },
            { label: 'Dias', value: '7 DIAS' },
            { label: 'Área', value: '1.800M²' },
            { label: 'Alunos', value: '+1.200' },
            { label: 'Fundação', value: 'EST. 2018' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-white font-display text-2xl md:text-3xl font-bold tracking-tight mb-1">{stat.value}</span>
              <span className="text-[#6B6B6B] text-[10px] uppercase tracking-[0.15em] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;