import React from 'react';

const Location = () => {
  return (
    <section className="py-24 bg-[#0F1420] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/2">
          <span className="text-[#8ADB00] uppercase tracking-widest text-xs font-bold mb-4 block">Onde estamos</span>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-10">
            No Coração <br/>De Indaiatuba.
          </h2>

          <div className="flex flex-col gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-bold" class="text-[#E8280D]"></iconify-icon> Endereço
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Rua das Esmeraldas, 742<br/>
                Jardim Morada do Sol · Indaiatuba, SP<br/>
                CEP 13.334-210
              </p>
              <p className="text-[#FF6B2B] text-xs uppercase tracking-wider mt-2 font-medium">200m do Carrefour · Próximo à saída SP-075</p>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                <iconify-icon icon="solar:clock-circle-bold" class="text-[#E8280D]"></iconify-icon> Horários
              </h4>
              <ul className="text-neutral-400 text-sm space-y-2">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Segunda a Sexta</span> <span className="text-white">05H00 – 23H00</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Sábado</span> <span className="text-white">07H00 – 20H00</span></li>
                <li className="flex justify-between pb-2"><span>Domingo e Feriados</span> <span className="text-white">08H00 – 14H00</span></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all flex items-center gap-2 text-sm">
              <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon>
              Falar no WhatsApp
            </a>
            <a href="#" className="bg-white/5 text-white hover:bg-white/10 font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all flex items-center gap-2 text-sm">
              <iconify-icon icon="solar:routing-2-bold" class="text-lg"></iconify-icon>
              Como Chegar
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 min-h-[400px] rounded-3xl overflow-hidden relative border border-white/10 bg-[#131313]">
          {/* Decorative Map Placeholder - Using image since iframe embedding can be tricky without API keys */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
            alt="Localização" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#0F1420]/50"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8280D] rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(232,40,13,0.5)]">
              <iconify-icon icon="solar:map-point-bold" class="text-white text-3xl"></iconify-icon>
            </div>
            <div className="w-8 h-2 bg-black/50 rounded-full blur-sm mt-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;