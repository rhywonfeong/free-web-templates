export default function LocationSection() {
  return (
    <section id="contato" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-[#FF5500] font-semibold tracking-widest uppercase text-sm mb-4 block">Onde estamos</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 leading-tight">
              Fácil de chegar, <br/>
              <span className="text-[#888888]">impossível de esquecer.</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 border border-white/5">
                  <iconify-icon icon="solar:map-point-bold" class="text-[#FF5500] text-2xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Endereço</h4>
                  <p className="text-[#AAAAAA]">Av. Paulista, 1.240 — Bela Vista</p>
                  <p className="text-[#AAAAAA]">São Paulo — SP, CEP: 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 border border-white/5">
                  <iconify-icon icon="solar:bus-bold" class="text-[#3DFF6E] text-2xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Como chegar</h4>
                  <p className="text-[#AAAAAA]">Próximo à estação de metrô Trianon-Masp. Estacionamento próprio gratuito para alunos. Ponto de ônibus na porta.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0 border border-white/5">
                  <iconify-icon icon="solar:phone-calling-bold" class="text-[#2979FF] text-2xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Contato direto</h4>
                  <p className="text-[#AAAAAA]">Telefone: (11) 9 0000-0000</p>
                  <p className="text-[#AAAAAA]">E-mail: contato@aurafitness.com.br</p>
                  <p className="text-[#AAAAAA]">Instagram: @aurafitness</p>
                </div>
              </div>
            </div>

            <a href="#planos" className="inline-flex items-center justify-center gap-2 bg-[#FF5500] hover:bg-[#FF6B2B] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)]">
              Agendar visita gratuita
            </a>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-[#111111]">
            {/* Placeholder for Map - Using an image representation to maintain dark theme aesthetic */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 grayscale contrast-150"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply"></div>
            
            {/* Map Pin UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF5500]/20 rounded-full animate-ping absolute"></div>
              <div className="w-12 h-12 bg-[#FF5500] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,85,0,0.8)] relative z-10">
                <iconify-icon icon="solar:flame-bold" class="text-white text-2xl"></iconify-icon>
              </div>
              <div className="mt-4 bg-[#111111] px-4 py-2 rounded-lg border border-white/10 shadow-xl backdrop-blur-sm relative z-10 text-center">
                <p className="text-white font-display text-xl tracking-wide">AURA FITNESS</p>
                <p className="text-[#888888] text-xs">Av. Paulista, 1.240</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}