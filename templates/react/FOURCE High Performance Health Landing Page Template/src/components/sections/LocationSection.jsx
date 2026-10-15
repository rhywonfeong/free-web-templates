import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const LocationSection = () => {
  return (
    <section className="py-32 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionHeading 
            theme="light"
            label="Onde estamos"
            title={<>NO CORAÇÃO<br/>DE INDAIATUBA.</>}
            className="mb-12"
          />

          <div className="space-y-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#9E9E9E] mb-4 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-linear" className="text-xl text-[#1A5C00]"></iconify-icon>
                Endereço
              </h4>
              <p className="text-2xl font-medium text-[#0A2E00] leading-snug">
                Rua das Esmeraldas, 742<br/>
                Jardim Morada do Sol — Indaiatuba, SP<br/>
                CEP 13.334-210
              </p>
              <p className="text-[#4A4A4A] mt-2">200m do Carrefour · Próximo à saída SP-075</p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#9E9E9E] mb-4 flex items-center gap-2">
                <iconify-icon icon="solar:clock-circle-linear" className="text-xl text-[#1A5C00]"></iconify-icon>
                Horários
              </h4>
              <ul className="space-y-2 text-lg font-medium text-[#0A2E00]">
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span>Segunda a Sexta</span> <span>05H00 – 23H00</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span>Sábado</span> <span>07H00 – 20H00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Domingo e Feriados</span> <span>08H00 – 14H00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#9E9E9E] mb-4 flex items-center gap-2">
                <iconify-icon icon="solar:phone-linear" className="text-xl text-[#1A5C00]"></iconify-icon>
                Contato
              </h4>
              <ul className="space-y-2 text-lg font-medium text-[#0A2E00]">
                <li>(19) 98234-5678</li>
                <li>contato@forgee.academy</li>
                <li>@forgee.academy</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button icon="simple-icons:whatsapp" iconPosition="left">FALAR NO WHATSAPP</Button>
              <Button variant="dark" icon="solar:routing-2-linear">COMO CHEGAR</Button>
            </div>
          </div>
        </div>

        {/* Map Placeholder Graphic */}
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#F5F5F5] rounded-[40px] border border-[#E8E8E8] overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1A5C00 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10 w-24 h-24 bg-[#0A2E00] rounded-full flex items-center justify-center text-[#CCFF00] shadow-2xl animate-pulse">
            <iconify-icon icon="solar:map-point-bold" width="48"></iconify-icon>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LocationSection