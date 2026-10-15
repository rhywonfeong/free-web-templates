import Tag from '../ui/Tag';
import Button from '../ui/Button';

export default function Location() {
  return (
    <section className="py-24 bg-[#111111] border-t border-[#2E2E2E]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden relative border border-[#2E2E2E]">
            {/* Map placeholder visually representing high-end location */}
            <div className="absolute inset-0 bg-[#1A1A1A]">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="Fachada da Academia APEX" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-xl border border-[#2E2E2E] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center shrink-0 shadow-glow-fire">
                <iconify-icon icon="solar:map-point-bold" class="text-white text-2xl"></iconify-icon>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Batel, Curitiba</h4>
                <p className="text-[#B0B0B0] text-sm">Rua Comendador Araújo, 143</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start">
            <Tag className="mb-6">Onde Estamos</Tag>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-8">
              Venha nos <br/>
              <span className="text-[#FF4500]">conhecer</span>
            </h2>
            
            <div className="space-y-8 w-full mb-10">
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-2 tracking-wide">Endereço</h3>
                <p className="text-[#B0B0B0] leading-relaxed">
                  Rua Comendador Araújo, 143<br/>
                  Batel — Curitiba, PR<br/>
                  CEP 80420-000
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-4 tracking-wide">Horários de Funcionamento</h3>
                <ul className="space-y-3 w-full max-w-md">
                  <li className="flex justify-between items-center text-[#B0B0B0] border-b border-[#2E2E2E] pb-2">
                    <span>Segunda a Sexta</span>
                    <span className="text-white font-medium">05:30 – 23:00</span>
                  </li>
                  <li className="flex justify-between items-center text-[#B0B0B0] border-b border-[#2E2E2E] pb-2">
                    <span>Sábado</span>
                    <span className="text-white font-medium">07:00 – 20:00</span>
                  </li>
                  <li className="flex justify-between items-center text-[#B0B0B0] border-b border-[#2E2E2E] pb-2">
                    <span>Domingo e Feriados</span>
                    <span className="text-white font-medium">08:00 – 15:00</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button href="https://wa.me/5541999999999" icon="solar:arrow-right-linear">
              Agendar visita gratuita
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}