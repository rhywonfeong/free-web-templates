import Tag from '../ui/Tag';

export default function About() {
  const pillars = [
    { icon: "solar:bolt-linear", title: "Método APEX", desc: "Protocolo exclusivo de periodização adaptativa." },
    { icon: "solar:chart-square-linear", title: "Dados em Tempo Real", desc: "Monitoramento de carga, frequência e evolução." },
    { icon: "solar:cup-star-linear", title: "Coaches de Elite", desc: "Profissionais com formação internacional." },
    { icon: "solar:city-linear", title: "Infraestrutura Top", desc: "3.200m² de área equipada com o que há de mais moderno." }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Tag>Quem Somos</Tag>
            <span className="inline-flex items-center px-3 py-1 bg-[#1A1A1A] rounded-full text-xs font-medium text-[#B0B0B0] border border-[#2E2E2E]">
              <span className="w-2 h-2 rounded-full bg-[#AAFF00] mr-2"></span>
              12 Anos de História
            </span>
          </div>

          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-tight">
            Mais do que <br/>
            <span className="text-[#FF4500]">Uma Academia</span>
          </h2>

          <div className="pl-6 border-l-2 border-[#FF4500]">
            <p className="font-display text-xl md:text-2xl font-medium text-white italic tracking-wide">
              "A melhor versão de você começa <span className="text-[#AAFF00] not-italic">aqui.</span>"
            </p>
          </div>

          <div className="space-y-6 text-[#B0B0B0] text-lg leading-relaxed">
            <p>
              A APEX Performance foi fundada com uma missão clara: criar um ambiente onde atletas amadores e profissionais treinam com o mesmo nível de seriedade. Em 12 anos, construímos uma referência em treinamento de alto padrão em Curitiba.
            </p>
            <p>
              Nossa filosofia combina ciência do movimento, tecnologia aplicada ao treino e coaching humano. Não vendemos mensalidade — entregamos transformação com método, dados e acompanhamento real.
            </p>
          </div>
        </div>

        {/* Right Column - Pillars Grid */}
        <div className="grid sm:grid-cols-2 gap-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(170,255,0,0.05)_0%,_transparent_60%)] pointer-events-none"></div>
          
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#111111] border border-[#2E2E2E] rounded-2xl p-8 hover:border-[#FF4500]/50 transition-colors group">
              <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF4500] transition-colors duration-300">
                <iconify-icon icon={pillar.icon} class="text-2xl text-[#AAFF00] group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}