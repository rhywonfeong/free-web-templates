import { Eyebrow, Headline } from '../ui/Typography';
import { Button } from '../ui/Button';

export default function Location() {
  return (
    <section className="py-32 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <Eyebrow>Onde estamos</Eyebrow>
          <Headline text="NO CORAÇÃO DE INDAIATUBA." highlight="INDAIATUBA." size="md" />
          
          <div className="mt-12 bg-[#181818] border border-[#2A2A2A] rounded-md p-8">
            <div className="flex items-start gap-4 mb-8 pb-8 border-b border-[#2A2A2A]">
              <iconify-icon icon="solar:map-point-linear" class="text-[#E8400A] text-2xl shrink-0 mt-1"></iconify-icon>
              <div>
                <p className="text-white font-medium mb-1">Rua das Esmeraldas, 742</p>
                <p className="text-[#B0B0B0] text-sm">Jardim Morada do Sol<br/>Indaiatuba, SP<br/>CEP 13.334-210</p>
                <p className="text-xs text-[#6B6B6B] mt-4 flex items-center gap-2">
                  <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#2A2A2A]">
              <div>
                <span className="block text-[10px] font-medium tracking-wide uppercase text-[#6B6B6B] mb-3">Horários</span>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between text-[#D9D9D9]"><span>Seg – Sex</span> <span className="font-medium text-white">05H – 23H</span></li>
                  <li className="flex justify-between text-[#D9D9D9]"><span>Sábado</span> <span className="font-medium text-white">07H – 20H</span></li>
                  <li className="flex justify-between text-[#6B6B6B]"><span>Dom/Fer</span> <span>08H – 14H</span></li>
                </ul>
              </div>
              <div>
                <span className="block text-[10px] font-medium tracking-wide uppercase text-[#6B6B6B] mb-3">Contato</span>
                <ul className="text-sm space-y-3">
                  <li className="flex items-center gap-2 text-white">
                    <iconify-icon icon="simple-icons:whatsapp" class="text-[#E8400A]"></iconify-icon>
                    (19) 98234-5678
                  </li>
                  <li className="flex items-center gap-2 text-[#D9D9D9]">
                    <iconify-icon icon="solar:letter-linear" class="text-[#6B6B6B]"></iconify-icon>
                    contato@forgee.academy
                  </li>
                  <li className="flex items-center gap-2 text-[#D9D9D9]">
                    <iconify-icon icon="simple-icons:instagram" class="text-[#6B6B6B]"></iconify-icon>
                    @forgee.academy
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full">Falar no WhatsApp</Button>
              <Button variant="secondary" className="w-full">Como chegar</Button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-[400px] lg:h-auto bg-[#1E1E1E] rounded-md overflow-hidden border border-[#2A2A2A] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-20 grayscale"></div>
          <div className="absolute inset-0 bg-[#111111]/60"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8400A]/10 rounded-full flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-[#E8400A] rounded-full shadow-[0_0_20px_#E8400A]"></div>
            </div>
            <span className="font-display font-bold tracking-widest text-xl">FORGEE</span>
          </div>
        </div>

      </div>
    </section>
  );
}