import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function Location() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionLabel>ONDE ESTAMOS</SectionLabel>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase leading-[1] tracking-tighter text-[#F5F5F5] mb-10">
              NO CORAÇÃO<br/>DE INDAIATUBA.
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:map-point-bold" class="text-3xl text-[#E82020] shrink-0 mt-1"></iconify-icon>
                <div>
                  <p className="text-[#E5E5E5] text-lg leading-relaxed mb-2">
                    Rua das Esmeraldas, 742<br/>
                    Jardim Morada do Sol · Indaiatuba, SP<br/>
                    CEP 13.334-210
                  </p>
                  <p className="text-[#7A7A7A] text-xs font-semibold tracking-widest uppercase">
                    288M DO CARREFOUR · PRÓXIMO À SAÍDA SP-075
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:clock-circle-bold" class="text-3xl text-[#E82020] shrink-0 mt-1"></iconify-icon>
                <div className="w-full">
                  <table className="w-full text-sm text-[#E5E5E5]">
                    <tbody>
                      <tr className="border-b border-[#2D2D2D]">
                        <td className="py-2">Segunda a Sexta</td>
                        <td className="py-2 text-right font-medium">05H00–23H00</td>
                      </tr>
                      <tr className="border-b border-[#2D2D2D]">
                        <td className="py-2">Sábado</td>
                        <td className="py-2 text-right font-medium">07H00–20H00</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#7A7A7A]">Domingo e Feriados</td>
                        <td className="py-2 text-right font-medium text-[#7A7A7A]">08H00–14H00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="primary" className="gap-2">
                  FALAR NO WHATSAPP <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </Button>
                <Button variant="secondary">COMO CHEGAR</Button>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden relative border border-[#2D2D2D] bg-[#181818] group">
            {/* Map Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800" 
              alt="Map view" 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500"
            />
            {/* Map Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-[#E82020] w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(232,32,32,0.5)] animate-pulse">
                <iconify-icon icon="solar:flame-bold" class="text-white text-2xl"></iconify-icon>
              </div>
              <span className="bg-[#111111] text-white font-display font-bold text-sm tracking-widest px-3 py-1 rounded shadow-lg">
                FORGEE ACADEMY
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}