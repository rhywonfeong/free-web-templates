import SectionHeading from '../ui/SectionHeading'

export default function Contact() {
  return (
    <section id="contato" className="py-32 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div>
            <SectionHeading 
              badge="Localização e Contato"
              title="Onde estamos."
              className="mb-12"
            />
            
            <div className="bg-[#121212] border border-[#1C1C1C] rounded-2xl p-8 mb-8 hover:border-[#2A2A2A] transition-colors">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                <iconify-icon icon="solar:map-point-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
                Endereço
              </h4>
              <p className="text-[#9A9A9A] text-lg leading-relaxed">
                Rua das Esmeraldas, 742<br />
                Jd. Morada do Sol<br />
                Indaiatuba, SP<br />
                <span className="text-sm text-[#6B6B6B] mt-2 block">(Ref: 200m do Carrefour)</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-[#121212] border border-[#1C1C1C] rounded-2xl p-8 hover:border-[#2A2A2A] transition-colors">
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                  <iconify-icon icon="solar:clock-circle-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
                  Horários
                </h4>
                <ul className="space-y-3 text-[#9A9A9A] text-sm">
                  <li className="flex justify-between items-center border-b border-[#1C1C1C] pb-2">
                    <span className="text-white">Segunda a Sexta</span>
                    <span className="font-mono">05H — 23H</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-[#1C1C1C] pb-2">
                    <span className="text-white">Sábado</span>
                    <span className="font-mono">07H — 20H</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white">Dom e Feriados</span>
                    <span className="font-mono">08H — 14H</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#121212] border border-[#1C1C1C] rounded-2xl p-8 hover:border-[#2A2A2A] transition-colors">
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                  <iconify-icon icon="solar:phone-linear" className="text-[#00F9E4] text-lg"></iconify-icon>
                  Contato direto
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#00F9E4] transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center group-hover:bg-[#00F9E4]/10 transition-colors">
                        <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                      </div>
                      <span className="text-sm font-medium tracking-wide">(19) 98234-5678</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contato@lute.academy" className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#00F9E4] transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center group-hover:bg-[#00F9E4]/10 transition-colors">
                        <iconify-icon icon="solar:letter-linear"></iconify-icon>
                      </div>
                      <span className="text-sm font-medium tracking-wide">E-mail Corporativo</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] bg-[#121212] rounded-2xl border border-[#1C1C1C] relative overflow-hidden group">
            {/* Dark stylized map abstraction */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00F9E4] via-transparent to-transparent blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-30 grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-[2s]" />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#00F9E4] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,249,228,0.5)] animate-bounce">
                  <iconify-icon icon="solar:map-point-bold" className="text-[#0A0A0A] text-2xl"></iconify-icon>
                </div>
                <div className="w-4 h-1 bg-black/50 rounded-full mt-2 blur-[2px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}