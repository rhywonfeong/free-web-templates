import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-[#0D0D0D]">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E84E1B]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0">
            <span className="text-[#E84E1B] font-bold text-sm tracking-[0.15em] mb-6 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#E84E1B]"></span>
              BEM-VINDO À FORGELAB
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-tighter uppercase leading-[0.95] text-white mb-8">
              Você não vem <br className="hidden sm:block"/> aqui para malhar.<br/>
              Você vem aqui <br className="hidden sm:block"/> para se <span className="text-[#E84E1B]">transformar.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-10 leading-relaxed font-medium">
              A FORGELAB é o ambiente onde performance encontra precisão. Treinamento de elite, metodologia científica e estrutura que poucos conhecem — tudo em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" icon="solar:arrow-right-linear">Comece Agora</Button>
              <Button variant="outline" size="lg">Agende Sua Visita</Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-16 pt-10 border-t border-white/10 w-full max-w-2xl">
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">+1.200</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide font-bold">Alunos Ativos</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">98%</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide font-bold">Retenção</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#E84E1B] mb-1">12 Anos</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide font-bold">Excelência</p>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent z-10 lg:hidden"></div>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80" 
              alt="Atleta em treinamento de alta performance" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Carousel Controls Simulation */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-2">
              <button className="w-12 h-12 bg-[#141414]/80 backdrop-blur border border-white/10 hover:bg-[#E84E1B] hover:border-[#E84E1B] transition-colors flex items-center justify-center text-white">
                <iconify-icon icon="solar:alt-arrow-left-linear" class="text-xl"></iconify-icon>
              </button>
              <button className="w-12 h-12 bg-[#141414]/80 backdrop-blur border border-white/10 hover:bg-[#E84E1B] hover:border-[#E84E1B] transition-colors flex items-center justify-center text-white">
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-xl"></iconify-icon>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;