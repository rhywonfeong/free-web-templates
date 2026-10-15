export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-8 leading-tight">
              Construída para quem leva <span className="text-[#888888]">performance</span> a sério.
            </h2>
            
            <div className="space-y-6 text-[#AAAAAA] text-lg leading-relaxed">
              <p>
                Há mais de 12 anos formando corpos e mentalidades de alto desempenho. A Aura nasceu da convicção de que treinamento de qualidade não deveria ser privilégio de atletas de elite.
              </p>
              
              <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-[#FF5500]/30 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#FF5500]"></div>
                <h3 className="text-white font-semibold text-xl mb-2 flex items-center gap-2">
                  <iconify-icon icon="solar:lightbulb-bolt-bold" class="text-[#FF5500]"></iconify-icon>
                  Nossa filosofia
                </h3>
                <p className="text-sm">
                  Acreditamos que resultado não é acidente — é consequência de método. Por isso estruturamos cada aspecto do treinamento com base em ciência, dados e acompanhamento individualizado.
                </p>
              </div>
              
              <div className="bg-[#111111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-[#FF5500]/30 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#3DFF6E]"></div>
                <h3 className="text-white font-semibold text-xl mb-2 flex items-center gap-2">
                  <iconify-icon icon="solar:buildings-bold" class="text-[#3DFF6E]"></iconify-icon>
                  Nossa estrutura
                </h3>
                <p className="text-sm">
                  Mais de 1.200m² de espaço dedicado exclusivamente à evolução do seu corpo. Equipamentos premium, climatização total e ambientes projetados para máxima performance.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contato" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF5500] transition-colors">
                Falar com especialista
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000" 
                alt="Gym Interior" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(circle,_#FF5500_0%,_transparent_70%)] opacity-30 mix-blend-screen blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}