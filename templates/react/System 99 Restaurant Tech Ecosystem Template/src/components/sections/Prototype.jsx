import React from 'react';

const Prototype = () => {
  return (
    <section id="prototype" className="scroll-mt-32">
      {/* Section 1: Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 mb-6">
          <iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon>
          Koncepcja Wizualna
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Mini Prototyp: Zobacz swój system w akcji
        </h2>
        <p className="text-lg text-zinc-400">
          Uproszczona wizualizacja interfejsów dedykowanej platformy. Poczuj, jak płynnie i intuicyjnie będzie wyglądać zarządzanie zamówieniami oraz ścieżka zakupowa Twojego klienta.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        
        {/* Section 2: Web App - POS Dashboard */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white tracking-tight">Aplikacja Webowa: Panel Obsługi Restauracji</h3>
            <p className="text-zinc-500 mt-2">Działa błyskawicznie na każdym tablecie i komputerze. Żadnych opóźnień.</p>
          </div>
          
          <div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative group">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* Fake Browser Window Controls */}
            <div className="h-10 border-b border-zinc-800 flex items-center px-4 gap-2 bg-zinc-900/50">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>

            {/* App Layout */}
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-16 md:w-20 border-r border-zinc-800 flex flex-col items-center py-6 gap-6 bg-zinc-950/80 z-10">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                  <iconify-icon icon="solar:pizza-linear" width="24"></iconify-icon>
                </div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800 text-white flex items-center justify-center relative cursor-pointer hover:bg-zinc-700 transition-colors">
                  <iconify-icon icon="solar:bell-bing-bold-duotone" width="24"></iconify-icon>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </div>
                <div className="w-10 h-10 rounded-xl text-zinc-500 flex items-center justify-center cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors">
                  <iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
                </div>
                <div className="mt-auto w-10 h-10 rounded-xl text-zinc-500 flex items-center justify-center cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors">
                  <iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col z-10 bg-zinc-950/40 backdrop-blur-sm">
                <div className="h-16 border-b border-zinc-800 flex items-center px-8 justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-white tracking-tight">Kolejka Zamówień</h4>
                    <span className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20">1 NOWE</span>
                  </div>
                  <div className="text-sm text-zinc-500 font-medium">12:48 PM, Wtorek</div>
                </div>

                {/* Orders List Container */}
                <div className="p-8 flex-1 overflow-hidden grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Order Card - NEW (Highlighted) */}
                  <div className="bg-zinc-900 border border-red-500/40 rounded-xl flex flex-col shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)] transform hover:-translate-y-1 transition-transform">
                    <div className="p-4 border-b border-zinc-800 bg-red-500/5 flex justify-between items-center rounded-t-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold text-red-500 tracking-wider">NOWE ZAMÓWIENIE</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">#4092</span>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-semibold text-white text-lg">Jan Kowalski</p>
                          <p className="text-sm text-zinc-400 mt-1 flex items-start gap-1">
                            <iconify-icon icon="solar:map-point-linear" className="mt-0.5"></iconify-icon>
                            ul. Marszałkowska 1/2<br/>00-001 Warszawa
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-zinc-300">1x Pizza Pepperoni (Duża)</span>
                          <span className="text-zinc-400">45.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-zinc-300">1x Sos Czosnkowy</span>
                          <span className="text-zinc-400">3.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-zinc-300">Dostawa</span>
                          <span className="text-zinc-400">12.00</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-zinc-800 mb-6">
                        <span className="text-sm font-medium text-zinc-400">Do zapłaty</span>
                        <span className="text-xl font-bold text-white">60.00 PLN</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="bg-red-600 hover:bg-red-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                          <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
                          AKCEPTUJ
                        </button>
                        <button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium py-2.5 rounded-lg text-sm transition-colors border border-zinc-700">
                          ODRZUĆ
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Card - IN PREP */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col opacity-60">
                    <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="text-xs font-bold text-yellow-500 tracking-wider">W PRZYGOTOWANIU</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">#4091</span>
                    </div>
                    <div className="p-5 flex-1">
                      <p className="font-semibold text-white text-lg mb-1">Anna Nowak</p>
                      <p className="text-sm text-zinc-400 mb-4">Odbiór osobisty</p>
                      <div className="space-y-2 mb-6 text-sm text-zinc-300">
                        <p>2x Pizza Margherita (Mała)</p>
                      </div>
                      <div className="mt-auto">
                        <button className="w-full bg-zinc-800 text-zinc-400 font-medium py-2.5 rounded-lg text-sm border border-zinc-700" disabled>
                          OCZEKUJE
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Card - DELIVERY */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col opacity-60 hidden lg:flex">
                    <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-xs font-bold text-blue-500 tracking-wider">W DOSTAWIE</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">#4090</span>
                    </div>
                    <div className="p-5 flex-1">
                      <p className="font-semibold text-white text-lg mb-1">Piotr Wiśniewski</p>
                      <p className="text-sm text-zinc-400 mb-4">Kierowca: Tomek K.</p>
                      <div className="space-y-2 mb-6 text-sm text-zinc-300">
                        <p>1x Pizza Capricciosa (Mega)</p>
                        <p>1x Cola Zero 1L</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Mobile App - Client Ordering */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white tracking-tight">Aplikacja Mobilna: Klient Zamawia</h3>
            <p className="text-zinc-500 mt-2">Dedykowana aplikacja z Twoim logo w App Store i Google Play.</p>
          </div>

          <div className="relative group">
            {/* Phone Hardware Mockup */}
            <div className="w-[320px] h-[650px] bg-black border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl relative overflow-hidden z-10">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-zinc-800 rounded-b-2xl z-50"></div>
              
              {/* Phone Screen Content */}
              <div className="h-full w-full bg-zinc-950 overflow-y-auto pb-24 scrollbar-hide flex flex-col">
                
                {/* Header */}
                <div className="px-6 pt-12 pb-4">
                  <p className="text-sm text-zinc-400">Witaj, Jan! 👋</p>
                  <div className="flex items-center gap-1 mt-1 cursor-pointer">
                    <h4 className="font-semibold text-white text-lg">Gdzie dowozimy?</h4>
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-red-500 mt-1"></iconify-icon>
                  </div>
                </div>

                {/* For You Section */}
                <div className="px-6 mb-6">
                  <h5 className="font-medium text-white mb-3">Dla Ciebie</h5>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group/card">
                    <img 
                      src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop" 
                      alt="Pizza Pepperoni" 
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-white font-semibold text-lg drop-shadow-md">Spicy Pepperoni</p>
                          <p className="text-zinc-300 text-xs drop-shadow-md mt-1">Podwójne salami, jalapeno, mozzarella</p>
                        </div>
                        <div className="bg-red-600 text-white font-bold text-sm px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          45.00 zł
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customization */}
                <div className="px-6 mb-4">
                  <h5 className="font-medium text-white mb-3 text-sm">Rozmiar</h5>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border border-zinc-800 rounded-xl py-3 text-center cursor-pointer hover:bg-zinc-900 transition-colors">
                      <span className="text-zinc-400 text-xs block mb-1">32 cm</span>
                      <span className="text-white text-sm font-medium">Mała</span>
                    </div>
                    <div className="border border-red-500/50 bg-red-500/10 rounded-xl py-3 text-center cursor-pointer relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-red-500 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
                      <iconify-icon icon="solar:check-circle-bold" className="absolute top-1 right-1 text-white text-[10px] z-10"></iconify-icon>
                      <span className="text-red-400 text-xs block mb-1">42 cm</span>
                      <span className="text-white text-sm font-medium">Duża</span>
                    </div>
                    <div className="border border-zinc-800 rounded-xl py-3 text-center cursor-pointer hover:bg-zinc-900 transition-colors">
                      <span className="text-zinc-400 text-xs block mb-1">50 cm</span>
                      <span className="text-white text-sm font-medium">Mega</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <h5 className="font-medium text-white mb-3 text-sm">Dodatkowe składniki</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 border border-zinc-700 rounded-full text-xs text-zinc-300">Podwójny ser +4.00</span>
                    <span className="px-3 py-1.5 bg-red-600 border border-red-600 rounded-full text-xs text-white">Pieczarki +3.00</span>
                    <span className="px-3 py-1.5 border border-zinc-700 rounded-full text-xs text-zinc-300">Cebula +2.00</span>
                  </div>
                </div>
                
              </div>

              {/* Bottom Sticky CTA */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent pt-12 pb-8 px-6">
                <button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                  <iconify-icon icon="solar:cart-large-4-linear" width="24"></iconify-icon>
                  <span className="text-left leading-tight text-sm">
                    ZAMÓW I ZAPŁAĆ <br/> 
                    <span className="text-lg font-bold">48.00 PLN</span>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Soft background shadow for mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[600px] bg-red-600/10 blur-[80px] pointer-events-none -z-10"></div>
          </div>
        </div>

        {/* Section 4: Disclaimer */}
        <div className="glass-panel border-zinc-800/50 rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-inner">
          <div className="flex items-center justify-center gap-2 text-zinc-500 mb-2">
            <iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
            <span className="text-xs font-semibold uppercase tracking-widest">Informacja Projektowa</span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            To jest uproszczona, niefunkcjonalna wizualizacja Twojej przyszłej platformy. Prawdziwa aplikacja będzie zbudowana od zera na solidnych fundamentach technicznych, dając Ci pełną niezależność, wysoką wydajność i całkowitą kontrolę nad logistyką Twojej sieci.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Prototype;