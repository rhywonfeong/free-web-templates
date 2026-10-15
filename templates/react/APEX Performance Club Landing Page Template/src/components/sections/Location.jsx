export default function Location() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <span className="inline-block uppercase font-medium text-xs tracking-[0.12em] mb-6 border border-[#111111] rounded-full px-4 py-1.5">
            Onde estamos
          </span>
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl tracking-tight leading-[0.9] mb-12">
            No coração da cidade,<br/>perto de você.
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:map-point-bold-duotone" class="text-3xl text-acid shrink-0"></iconify-icon>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-2">Endereço</h4>
                <p className="font-light text-neutral-800 leading-relaxed">
                  Av. das Nações Unidas, 14.401 — Conjunto 42<br/>
                  Vila Gertrudes, São Paulo — SP · CEP 04794-000
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:clock-circle-bold-duotone" class="text-3xl text-acid shrink-0"></iconify-icon>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-2">Funcionamento</h4>
                <p className="font-light text-neutral-800 leading-relaxed">
                  Seg–Sex: 05h30 às 23h00<br/>
                  Sáb: 07h00 às 20h00<br/>
                  Dom e feriados: 08h00 às 14h00
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <iconify-icon icon="solar:bus-bold-duotone" class="text-3xl text-acid shrink-0"></iconify-icon>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-2">Como chegar</h4>
                <p className="font-light text-neutral-800 leading-relaxed text-sm">
                  A 5 minutos da estação Berrini (CPTM). Estacionamento gratuito para alunos no subsolo do edifício — até 3h por acesso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map / Image placeholder */}
        <div className="h-[500px] w-full rounded-[24px] overflow-hidden shadow-lg relative bg-neutral-200">
          <img 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80" 
            alt="Localização São Paulo Berrini" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-[#111111]/20"></div>
          
          {/* Map Pin UI */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-acid text-[#111111] px-4 py-2 rounded-lg font-display font-bold uppercase shadow-xl mb-2 flex items-center gap-2">
              <iconify-icon icon="solar:bolt-bold"></iconify-icon>
              APEX Club
            </div>
            <div className="w-4 h-4 bg-acid rotate-45 -mt-4"></div>
            <div className="w-12 h-12 bg-black/20 rounded-full animate-ping absolute -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}