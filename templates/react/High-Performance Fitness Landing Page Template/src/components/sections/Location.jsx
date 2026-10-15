import React from 'react';
import Eyebrow from '../ui/Eyebrow';
import Headline from '../ui/Headline';
import Button from '../ui/Button';

const Location = () => {
  return (
    <section className="py-24 md:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Eyebrow>Localização</Eyebrow>
            <Headline className="mb-10">Estamos perto de você.</Headline>
            
            <div className="space-y-8 bg-[#181818] p-8 rounded-xl border border-[#2A2A2A]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#FF3A00] shrink-0">
                  <iconify-icon icon="solar:map-point-bold-duotone" class="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-display uppercase text-sm tracking-widest text-[#CCCCCC] mb-1">Endereço</h4>
                  <p className="text-[#888888]">Av. Brigadeiro Faria Lima, 2.369<br/>Pinheiros, São Paulo / SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1E1E1E] flex items-center justify-center text-[#FF3A00] shrink-0">
                  <iconify-icon icon="solar:clock-circle-bold-duotone" class="text-xl"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-display uppercase text-sm tracking-widest text-[#CCCCCC] mb-1">Horário</h4>
                  <p className="text-[#888888]">
                    Seg–Sex: 5h30 às 23h<br/>
                    Sáb: 7h às 20h<br/>
                    Dom: 8h às 14h
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2A2A2A] flex flex-wrap gap-4">
                <Button variant="voltage" icon="solar:routing-2-bold">Traçar Rota</Button>
              </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-[#2A2A2A]">
            {/* Map placeholder - using a dark architectural image to represent location/building in theme */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Building facade" 
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/40 mix-blend-multiply"></div>
            
            {/* Map Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF3A00] rounded-full flex items-center justify-center text-[#F5F5F5] shadow-[0_0_40px_rgba(255,58,0,0.5)] animate-bounce">
                <iconify-icon icon="solar:map-point-bold" class="text-3xl"></iconify-icon>
              </div>
              <div className="mt-4 bg-[#111111] px-4 py-2 rounded-full border border-[#2A2A2A] text-sm font-display uppercase tracking-widest text-[#F5F5F5]">
                Forge Academy
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;