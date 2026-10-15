import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const LocationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#080808] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        <SectionHeading 
          label="Onde estamos"
          title="NO CORAÇÃO DE INDAIATUBA."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-12">
            
            {/* Address */}
            <div>
              <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-wide-label mb-4">Endereço</h4>
              <p className="text-xl font-medium text-white mb-2">Rua das Esmeraldas, 742</p>
              <p className="text-white">Jardim Morada do Sol — Indaiatuba, SP</p>
              <p className="text-[#757575] font-mono text-sm mt-1">CEP 13.334-210</p>
              <p className="text-[#E8201A] text-sm mt-4 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-bold"></iconify-icon>
                200m do Carrefour · Próximo à saída SP-075
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-wide-label mb-4">Horários</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Segunda a Sexta</span>
                  <span className="text-[#BDBDBD] font-mono">05H00 – 23H00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Sábado</span>
                  <span className="text-[#BDBDBD] font-mono">07H00 – 20H00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Domingos e Feriados</span>
                  <span className="text-[#BDBDBD] font-mono">08H00 – 14H00</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#757575] text-[10px] font-bold uppercase tracking-wide-label mb-4">Contato</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 text-white hover:text-[#E8201A] transition-colors cursor-pointer w-fit">
                  <iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                  <span className="font-mono">(19) 98234-5678</span>
                </li>
                <li className="flex items-center gap-4 text-white hover:text-[#E8201A] transition-colors cursor-pointer w-fit">
                  <iconify-icon icon="solar:letter-bold" width="20"></iconify-icon>
                  <span>contato@forgee.academy</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="secondary" className="flex items-center gap-2">
                <iconify-icon icon="simple-icons:whatsapp" width="16"></iconify-icon>
                Falar no WhatsApp
              </Button>
              <Button variant="ghost" className="border border-white/10">Como Chegar</Button>
            </div>
            
          </div>

          {/* Map Area Placeholder */}
          <div className="bg-[#1A1A1A] min-h-[400px] border border-white/5 relative flex items-center justify-center overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map View" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
            />
            <div className="relative z-10 bg-[#080808] px-6 py-3 border border-white/10 flex items-center gap-3">
              <span className="w-3 h-3 bg-[#E8201A] rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wide-label text-white">Ver no Maps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;