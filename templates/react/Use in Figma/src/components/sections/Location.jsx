import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Location = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionTitle 
              eyebrow="Onde estamos"
              title="A BASE DE"
              titleAccent="OPERAÇÕES."
            />
            
            <div className="space-y-8 text-sm md:text-base">
              <div>
                <h4 className="text-white font-display text-xl uppercase tracking-tight mb-2">Endereço</h4>
                <p className="text-[#B0B0B0]">Av. Conceição, 1500 — Vila Maria<br/>Indaiatuba, SP — 13330-000</p>
                <p className="text-[#6B6B6B] text-xs uppercase tracking-widest mt-2">200m do Carrefour · Próximo à saída SP-075</p>
              </div>

              <div>
                <h4 className="text-white font-display text-xl uppercase tracking-tight mb-4">Horários</h4>
                <div className="grid grid-cols-2 gap-y-3 max-w-sm text-[#B0B0B0] border-l border-subtle pl-4">
                  <span>Segunda a Sexta</span>
                  <span className="text-white text-right">05H00 – 23H00</span>
                  
                  <span>Sábado</span>
                  <span className="text-white text-right">07H00 – 20H00</span>
                  
                  <span>Domingo e Feriados</span>
                  <span className="text-[#6B6B6B] text-right">08H00 – 14H00</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-display text-xl uppercase tracking-tight mb-4">Contato</h4>
                <ul className="space-y-3 text-[#B0B0B0]">
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="simple-icons:whatsapp" width="18" className="text-[#E8400A]" />
                    (19) 98234-5678
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="solar:letter-linear" width="18" className="text-[#E8400A]" />
                    contato@forgee.academy
                  </li>
                  <li className="flex items-center gap-3">
                    <iconify-icon icon="simple-icons:instagram" width="18" className="text-[#E8400A]" />
                    @forgee.academy
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button>Falar no WhatsApp</Button>
                <Button variant="secondary">Como Chegar</Button>
              </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] border border-subtle bg-surface group">
            {/* Minimalist Map Representation */}
            <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="Map area" 
                className="w-full h-full object-cover opacity-30 grayscale contrast-150 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[#E8400A]/30 flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full border border-[#E8400A]/50 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-[#E8400A] rounded-full shadow-[0_0_20px_#E8400A]"></div>
                  </div>
                  <div className="absolute w-px h-12 bg-[#E8400A] bottom-full"></div>
                  <div className="absolute w-px h-12 bg-[#E8400A] top-full"></div>
                  <div className="absolute h-px w-12 bg-[#E8400A] right-full"></div>
                  <div className="absolute h-px w-12 bg-[#E8400A] left-full"></div>
                </div>
                <span className="mt-4 bg-[#0A0A0A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-subtle">
                  FORGEE HQ
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;