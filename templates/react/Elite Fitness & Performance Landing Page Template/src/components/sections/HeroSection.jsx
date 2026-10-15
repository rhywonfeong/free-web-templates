import Button from '../ui/Button';

const HeroSection = () => {
  const stats = [
    { value: "05H–23H", label: "Horário de funcionamento" },
    { value: "7 DIAS", label: "Dias por semana" },
    { value: "1.800M²", label: "Área total" },
    { value: "+1.200", label: "Alunos desde 2018" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 lg:pb-32 bg-[#080808] overflow-hidden pt-20">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
          alt="Atleta em treinamento" 
          className="w-full h-full object-cover object-top opacity-50 grayscale mix-blend-luminosity"
        />
        {/* Kinetic Light Effect (Vertical Red Glow) */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[200px] bg-gradient-to-r from-[#E8201A]/0 via-[#E8201A]/30 to-[#E8201A]/0 blur-[80px] pointer-events-none transform -skew-x-12"></div>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]/80"></div>
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-20 mt-auto">
        <div className="max-w-4xl">
          <p className="text-[#E8201A] text-xs font-bold uppercase tracking-wide-label mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#E8201A]"></span>
            Treinos progressivos e acompanhamento real!
          </p>
          
          <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-black uppercase tracking-tightest leading-[0.9] text-white mb-8">
            SEM MÁGICA<br/>
            SEM ATALHOS<br/>
            <span className="text-[#424242]">SEM DESCULPAS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#BDBDBD] max-w-2xl mb-12 leading-relaxed border-l-2 border-white/20 pl-6">
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="primary">Começar Agora</Button>
            <Button variant="secondary">Conhecer o Espaço</Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-black uppercase tracking-tightest text-white mb-2">{stat.value}</span>
              <span className="text-[10px] text-[#757575] uppercase tracking-wide-label font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;