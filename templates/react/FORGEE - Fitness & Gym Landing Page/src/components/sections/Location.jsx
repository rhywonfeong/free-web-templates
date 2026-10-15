import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Location() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading 
              title={["NO CORAÇÃO", "DE INDAIATUBA."]}
            />
            
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">Endereço</h4>
                <p className="text-lg text-white font-medium mb-2">Rua das Esmeraldas, 742</p>
                <p className="text-zinc-400 font-light">Jardim Morada do Sol — Indaiatuba, SP<br/>CEP 13.334-210</p>
                <p className="text-xs text-red-500 font-medium uppercase tracking-widest mt-4">
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">Horários</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-400">Segunda a Sexta</span>
                    <span className="text-white font-mono">05H00 – 23H00</span>
                  </li>
                  <li className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-zinc-400">Sábado</span>
                    <span className="text-white font-mono">07H00 – 20H00</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-zinc-400">Domingo e Feriados</span>
                    <span className="text-white font-mono">08H00 – 14H00</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4">Contato</h4>
                <div className="space-y-3">
                  <p className="flex items-center gap-4 text-zinc-300">
                    <iconify-icon icon="solar:phone-linear" className="text-red-500"></iconify-icon>
                    (19) 98234-5678
                  </p>
                  <p className="flex items-center gap-4 text-zinc-300">
                    <iconify-icon icon="solar:letter-linear" className="text-red-500"></iconify-icon>
                    contato@forgee.academy
                  </p>
                  <p className="flex items-center gap-4 text-zinc-300">
                    <iconify-icon icon="simple-icons:instagram" className="text-red-500"></iconify-icon>
                    @forgee.academy
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="primary">FALAR NO WHATSAPP</Button>
                <Button variant="secondary">COMO CHEGAR</Button>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-auto border border-zinc-900 bg-zinc-950 flex items-center justify-center overflow-hidden">
            {/* Placeholder for map or location image to fit aesthetic */}
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" 
              alt="Gym location exterior representation" 
              className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute flex flex-col items-center gap-2">
              <iconify-icon icon="solar:map-point-bold" className="text-red-600 text-5xl drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"></iconify-icon>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}