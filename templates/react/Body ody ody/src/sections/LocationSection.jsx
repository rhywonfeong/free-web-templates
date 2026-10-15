import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function LocationSection() {
  return (
    <section className="bg-[#1A1A1A] border-t border-[#2E2E2E]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Info Box */}
        <div className="py-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center order-2 lg:order-1">
          <Eyebrow color="yellow">Onde estamos</Eyebrow>
          <h2 className="text-h2 mb-12">
            Fácil de chegar. Difícil de <span className="text-[#E5C000]">sair</span>.
          </h2>

          <div className="space-y-10">
            <div>
              <h4 className="text-[#888888] text-xs uppercase tracking-widest mb-3">Endereço</h4>
              <p className="text-white text-lg font-medium">AURA Performance</p>
              <p className="text-[#F5F5F5]">Av. das Nações Unidas, 12901 - Brooklin</p>
              <p className="text-[#F5F5F5]">São Paulo, SP — CEP 04578-910</p>
              <p className="text-[#888888] text-sm mt-2 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-linear"></iconify-icon>
                A 200m do metrô Berrini · Estacionamento próprio
              </p>
            </div>

            <div>
              <h4 className="text-[#888888] text-xs uppercase tracking-widest mb-4">Horários</h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-[#2E2E2E] pb-2">
                  <span className="text-[#F5F5F5]">Segunda a Sexta</span>
                  <span className="text-white font-medium">06h00 às 23h00</span>
                </div>
                <div className="flex justify-between border-b border-[#2E2E2E] pb-2">
                  <span className="text-[#F5F5F5]">Sábado</span>
                  <span className="text-white font-medium">08h00 às 18h00</span>
                </div>
                <div className="flex justify-between border-b border-[#2E2E2E] pb-2">
                  <span className="text-[#F5F5F5]">Domingos e Feriados</span>
                  <span className="text-white font-medium">09h00 às 14h00</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="outline">Como chegar</Button>
            </div>
          </div>
        </div>

        {/* Image / Map Placeholder */}
        <div className="h-[400px] lg:h-auto relative order-1 lg:order-2">
          <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200" 
            alt="Gym Exterior Location" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/40"></div>
          {/* Fictional Map Overlay Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E5C000] flex items-center justify-center text-3xl text-[#1A1A1A] rounded-full shadow-2xl shadow-[#E5C000]/50 mb-4 animate-bounce">
              <iconify-icon icon="solar:map-point-bold"></iconify-icon>
            </div>
            <span className="bg-[#1A1A1A] text-white font-display uppercase tracking-widest px-4 py-2 text-sm border border-[#2E2E2E]">AURA HQ</span>
          </div>
        </div>

      </div>
    </section>
  )
}