export default function Location() {
  return (
    <section className="px-6 md:px-12 max-w-[1280px] mx-auto bg-[#111111] py-24 rounded-[32px] border border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-[#E84A1A] uppercase tracking-[0.15em] text-xs font-bold block mb-4">Onde estamos</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] tracking-tight uppercase mb-12">
            No Coração<br />De Indaiatuba.
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:map-point-bold" class="text-3xl text-[#1B40FF] shrink-0"></iconify-icon>
              <div>
                <p className="text-white font-medium text-lg mb-1">Rua das Esmeraldas, 742</p>
                <p className="text-[#888888]">Jardim Morada do Sol — Indaiatuba, SP</p>
                <p className="text-[#888888]">CEP 13.334-210</p>
                <p className="text-xs text-[#E84A1A] uppercase tracking-wider font-bold mt-2">200m do Carrefour · Próximo à saída SP-075</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:clock-circle-bold" class="text-3xl text-[#1B40FF] shrink-0"></iconify-icon>
              <div className="w-full max-w-sm">
                <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="text-white">Segunda a Sexta</span>
                  <span className="text-[#AAAAAA]">05H00 – 23H00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="text-white">Sábado</span>
                  <span className="text-[#AAAAAA]">07H00 – 20H00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Domingos/Feriados</span>
                  <span className="text-[#AAAAAA]">08H00 – 14H00</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:phone-bold" class="text-3xl text-[#1B40FF] shrink-0"></iconify-icon>
              <div>
                <p className="text-white font-medium mb-1">(19) 98234-5678</p>
                <p className="text-[#888888]">contato@forgee.academy</p>
                <p className="text-[#888888]">@forgee.academy</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <button className="px-6 py-3 bg-[#25D366] text-[#0A0A0A] rounded-md font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-white transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" class="text-lg"></iconify-icon>
              Falar no WhatsApp
            </button>
            <button className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-md font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors">
              Como Chegar
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-2xl overflow-hidden bg-[#1E1E1E] min-h-[400px] relative border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
            alt="Mapa Localização" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B40FF]/10 mix-blend-overlay"></div>
          {/* Fake Map Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-12 h-12 bg-[#E84A1A] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(232,74,26,0.8)] border-4 border-[#141414]">
              <iconify-icon icon="solar:map-point-bold" class="text-white text-xl"></iconify-icon>
            </div>
            <div className="bg-[#141414] text-white text-xs font-bold px-3 py-1 rounded mt-2 uppercase tracking-wider shadow-xl">
              FORGEE ACADEMY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}