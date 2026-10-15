export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920" 
          alt="Athlete training" 
          className="w-full h-full object-cover object-top opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF5500] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-white/10 text-[#AAAAAA] text-xs font-semibold tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3DFF6E] animate-pulse"></span>
            Matrículas Abertas
          </div>
          
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8">
            Seu corpo é o projeto <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] to-[#FF8C5A]">mais importante</span> <br/>
            que você vai executar.
          </h1>
          
          <p className="text-[#AAAAAA] text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-body">
            Não estamos aqui para te motivar. Estamos aqui para te transformar — com método, estrutura e acompanhamento que poucos lugares no mundo oferecem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#planos" className="flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#FF6B2B] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 glow-orange hover:glow-orange-hover">
              Agendar visita gratuita
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </a>
            <a href="#contato" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Falar com especialista
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-start gap-3">
              <iconify-icon icon="solar:shield-check-bold" class="text-[#FF5500] text-2xl mt-0.5"></iconify-icon>
              <span className="text-[#888888] text-sm font-medium">Sem fidelidade no primeiro mês</span>
            </div>
            <div className="flex items-start gap-3">
              <iconify-icon icon="solar:clipboard-check-bold" class="text-[#FF5500] text-2xl mt-0.5"></iconify-icon>
              <span className="text-[#888888] text-sm font-medium">Avaliação física inclusa</span>
            </div>
            <div className="flex items-start gap-3">
              <iconify-icon icon="solar:medal-star-bold" class="text-[#FF5500] text-2xl mt-0.5"></iconify-icon>
              <span className="text-[#888888] text-sm font-medium">Equipe certificada internacionalmente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}