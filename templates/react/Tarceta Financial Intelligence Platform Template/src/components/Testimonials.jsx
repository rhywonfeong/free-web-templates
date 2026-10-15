import React from 'react';

const Testimonials = () => {
  return (
    <section className="pt-20 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border bg-white/10 border-white/10">
          <iconify-icon icon="solar:chat-round-dots-linear" width="24" height="24" className="text-white"></iconify-icon>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
          Mida räägivad meie <br className="hidden md:block"/>kliendid?
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial Item 1 */}
        <div className="transition-colors bg-[#111111] border rounded-2xl p-6 hover:border-white/10 border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Laura K.</div>
              <div className="text-[10px] text-gray-500">Turundusjuht</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Tarceta on muutnud meie andmeanalüüsi täielikult. Kogu info on ühes kohas ja otsuste tegemine on kordades kiirem."</p>
        </div>

        {/* Testimonial Item 2 */}
        <div className="bg-[#111111] p-6 rounded-2xl border transition-colors border-white/5 hover:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Martin T.</div>
              <div className="text-[10px] text-gray-500">Finantsjuht</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Intuitiivne, funktsionaalne ja lihtsasti seadistatav platvorm. Reaalajas ülevaade rahavoogudest on andnud olulise eelise."</p>
        </div>

        {/* Testimonial Item 3 */}
        <div className="bg-[#111111] p-6 rounded-2xl border transition-colors border-white/5 hover:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Sandra L.</div>
              <div className="text-[10px] text-gray-500">Tegevjuht</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Väga efektiivne tööriist. Soovitan kõigile, kes soovivad oma ettevõtte finantsidel ja kasumlikkusel mugavalt kätt pulsil hoida."</p>
        </div>

        {/* Testimonial Item 4 */}
        <div className="bg-[#111111] p-6 rounded-2xl border transition-colors border-white/5 hover:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Marko V.</div>
              <div className="text-[10px] text-gray-500">Tootejuht</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Andmete visuaalne pool ja disain on lihtsalt laitmatu. See teeb keeruliste raportite esitlemise juhtkonnale palju lihtsamaks."</p>
        </div>

        {/* Testimonial Item 5 */}
        <div className="bg-[#111111] p-6 rounded-2xl border transition-colors border-white/5 hover:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Joonas P.</div>
              <div className="text-[10px] text-gray-500">Analüütik</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Funktsionaalsus on tipptasemel. Eriti avaldasid muljet prognoosimise mudelid ja trendide tuvastamise tööriistad."</p>
        </div>

        {/* Testimonial Item 6 */}
        <div className="bg-[#111111] p-6 rounded-2xl border transition-colors border-white/5 hover:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 rounded-full object-cover grayscale opacity-70" alt="User" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">Liis M.</div>
              <div className="text-[10px] text-gray-500">Müügijuht</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed font-light text-gray-400">"Lõpuks ometi tarkvara, mis ühendab endas kõik vajalikud müügiandmed. Meie CRM-i integratsioon võttis vaid paar minutit."</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;