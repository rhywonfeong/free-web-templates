import React, { useState, useEffect } from 'react';

// Hook for smooth number animation
const AnimatedNumber = ({ value, prefix = '', suffix = '', decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp = null;
    const startValue = displayValue;
    const distance = value - startValue;
    const duration = 800; // ms

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(startValue + distance * ease);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value]);

  return (
    <span>
      {prefix}{Number(displayValue).toLocaleString('pl-PL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
};

const Warning = () => {
  // Configured defaults for the low volume scenario
  const [locals, setLocals] = useState(7);
  const [orders, setOrders] = useState(100);
  const [orderValue, setOrderValue] = useState(30);

  // Business Logic Math
  const totalRevenue = locals * orders * orderValue;
  const oldSystemMonthly = totalRevenue * 0.10;
  const oldSystemYearly = oldSystemMonthly * 12;
  const newSystemMonthly = 5000;
  
  // Scenarios logic
  const costIncrease = newSystemMonthly - oldSystemMonthly;
  const isUnfavorable = costIncrease > 0;
  
  const investment = 180000;
  const roiMonths = !isUnfavorable && costIncrease < 0 ? investment / Math.abs(costIncrease) : 0;

  const getPercentage = (val, min, max) => ((val - min) / (max - min)) * 100;

  return (
    <section id="problem" className="scroll-mt-32">
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 mb-6">
          <iconify-icon icon="solar:calculator-minimalistic-linear"></iconify-icon>
          Scenariusz Twoich Wartości
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Kalkulator opłacalności platformy
        </h2>
        <p className="text-zinc-400 text-lg">
          Zobacz na własnych liczbach, jak wygląda bilans kosztów. Przesuń suwaki i sprawdź, przy jakich wolumenach własny system staje się opłacalny względem obecnej prowizji.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden group border border-zinc-800">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Controls */}
          <div className="flex flex-col h-full justify-between gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
                <iconify-icon icon="solar:settings-minimalistic-bold" className="text-zinc-500"></iconify-icon>
                Parametry Twojej sieci
              </h3>
              
              <div className="space-y-12">
                {/* Slider 1: Locals */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <label className="text-zinc-300 font-medium block">Liczba lokali w sieci</label>
                      <span className="text-zinc-500 text-sm">Zakres: 1 - 100</span>
                    </div>
                    <span className="text-4xl font-black text-white tabular-nums drop-shadow-md">{locals}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" 
                    value={locals} 
                    onChange={(e) => setLocals(Number(e.target.value))} 
                    className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                    style={{ background: `linear-gradient(to right, ${isUnfavorable ? '#ef4444' : '#10b981'} ${getPercentage(locals, 1, 100)}%, #27272a ${getPercentage(locals, 1, 100)}%)` }}
                  />
                </div>

                {/* Slider 2: Orders */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <label className="text-zinc-300 font-medium block">Zamówienia internetowe</label>
                      <span className="text-zinc-500 text-sm">Na lokal miesięcznie (Zakres: 100 - 5000)</span>
                    </div>
                    <span className="text-4xl font-black text-white tabular-nums drop-shadow-md">{orders}</span>
                  </div>
                  <input 
                    type="range" min="100" max="5000" step="50"
                    value={orders} 
                    onChange={(e) => setOrders(Number(e.target.value))} 
                    className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                    style={{ background: `linear-gradient(to right, ${isUnfavorable ? '#ef4444' : '#10b981'} ${getPercentage(orders, 100, 5000)}%, #27272a ${getPercentage(orders, 100, 5000)}%)` }}
                  />
                  {orders <= 200 && (
                    <span className="absolute -bottom-6 right-0 text-red-500 text-xs font-medium animate-pulse flex items-center gap-1">
                      <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
                      Uwaga: Bardzo niski wolumen zamówień
                    </span>
                  )}
                </div>

                {/* Slider 3: Order Value */}
                <div className="relative">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <label className="text-zinc-300 font-medium block">Średnia wartość zamówienia</label>
                      <span className="text-zinc-500 text-sm">W PLN (Zakres: 30 - 200)</span>
                    </div>
                    <span className="text-4xl font-black text-white tabular-nums drop-shadow-md">{orderValue}</span>
                  </div>
                  <input 
                    type="range" min="30" max="200" step="1"
                    value={orderValue} 
                    onChange={(e) => setOrderValue(Number(e.target.value))} 
                    className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                    style={{ background: `linear-gradient(to right, ${isUnfavorable ? '#ef4444' : '#10b981'} ${getPercentage(orderValue, 30, 200)}%, #27272a ${getPercentage(orderValue, 30, 200)}%)` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:block mt-8">
              <button onClick={() => {
                document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' });
              }} className="w-full py-5 bg-zinc-100 hover:bg-white text-black font-bold rounded-2xl transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 text-lg">
                Rozpocznij wdrażanie Systemu 99
                <iconify-icon icon="solar:rocket-bold" width="24" className="text-red-600"></iconify-icon>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Scoreboard */}
          <div className="flex flex-col gap-6 relative">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] blur-[120px] pointer-events-none rounded-full transition-colors duration-1000 ${isUnfavorable ? 'bg-red-500/5' : 'bg-emerald-500/5'}`}></div>
            
            {/* Card 1: Red style, Commission Cost */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 p-6 opacity-[0.03]">
                  <iconify-icon icon="solar:graph-down-bold" width="160"></iconify-icon>
              </div>
              <div className="relative z-10">
                <h3 className="text-red-400 font-bold mb-2 uppercase tracking-widest text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  STARY SYSTEM (PROWIZJA 10%)
                </h3>
                <div className="text-zinc-400 font-medium text-sm mb-1 uppercase tracking-wider">
                  Twoje miesięczne koszty prowizji
                </div>
                <div className="text-4xl md:text-5xl font-black text-red-500 tracking-tight mb-2 drop-shadow-md">
                  <AnimatedNumber value={oldSystemMonthly} suffix=" PLN" />
                </div>
                <div className="text-red-400/80 text-sm font-medium mb-6">
                  Tyle tracisz miesięcznie
                </div>
                <div className="pt-6 border-t border-red-500/10">
                  <div className="text-red-400/60 uppercase tracking-wider text-xs mb-1 font-semibold">TYLE PŁACISZ ROCZNIE (PROWIZJA)</div>
                  <div className="text-2xl font-bold text-red-400 drop-shadow-sm">
                    <AnimatedNumber value={oldSystemYearly} suffix=" PLN" />
                  </div>
                  <div className="text-zinc-500 text-xs mt-1">Your annual commission payment</div>
                </div>
              </div>
            </div>

            {/* Card 2: Green style, Maintenance Cost */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 p-6 opacity-[0.03]">
                  <iconify-icon icon="solar:shield-check-bold" width="140"></iconify-icon>
              </div>
              <div className="relative z-10">
                <h3 className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-sm flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                  SYSTEM 99 (BRAK PROWIZJI)
                </h3>
                <div className="text-4xl font-black text-emerald-500 tracking-tight mb-2">
                  5 000 PLN
                </div>
                <div className="text-emerald-400/80 font-medium text-sm">
                  Stały koszt utrzymania niezależnie od obrotu
                </div>
              </div>
            </div>

            {/* Card 3: Dynamic Result (Unfavorable / Favorable) */}
            <div className={`border rounded-2xl p-8 md:p-10 relative overflow-hidden transform hover:-translate-y-1 transition-all duration-500 ${isUnfavorable ? 'bg-gradient-to-br from-red-950/40 to-zinc-950 border-red-500/40 shadow-[0_0_50px_-10px_rgba(239,68,68,0.15)]' : 'bg-gradient-to-br from-emerald-950/40 to-zinc-950 border-emerald-500/40 shadow-[0_0_50px_-10px_rgba(16,185,129,0.15)]'}`}>
              
              <div className={`absolute -top-32 -right-32 w-64 h-64 blur-[60px] rounded-full pointer-events-none transition-colors duration-1000 ${isUnfavorable ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}></div>
              
              <div className="relative z-10">
                <h3 className="text-white font-semibold mb-8 text-xl flex items-center gap-3">
                  <iconify-icon icon={isUnfavorable ? "solar:danger-triangle-bold" : "solar:wad-of-money-bold"} className={isUnfavorable ? "text-red-500" : "text-emerald-400"} width="28"></iconify-icon>
                  {isUnfavorable ? 'Podsumowanie Modelu Twoich Wartości (Scenariusz Niekorzystny)' : 'Podsumowanie Modelu Twoich Wartości (Scenariusz Korzystny)'}
                </h3>
                
                <div className="mb-8">
                  <div className={`text-sm uppercase tracking-wider mb-2 font-bold ${isUnfavorable ? 'text-red-400' : 'text-emerald-400'}`}>
                    {isUnfavorable ? 'CZYSTE ZWIĘKSZENIE MIESIĘCZNYCH WYDATKÓW' : 'CZYSTA OSZCZĘDNOŚĆ MIESIĘCZNA'}
                  </div>
                  {isUnfavorable && (
                    <div className="text-zinc-300 text-sm mb-2 font-medium">Twoje miesięczne wydatki wzrosną o:</div>
                  )}
                  <div className={`text-5xl md:text-6xl font-black tracking-tight ${isUnfavorable ? 'text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.2)]' : 'text-emerald-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]'}`}>
                    <AnimatedNumber value={Math.abs(costIncrease)} suffix=" PLN" />
                  </div>
                  <div className={`text-xs mt-2 font-bold uppercase tracking-wider ${isUnfavorable ? 'text-red-400/80' : 'text-emerald-400/80'}`}>
                    {isUnfavorable ? 'TWOJE WYDATKI MIESIĘCZNE WZROSNĄ' : 'TYLE ZYSKUJESZ MIESIĘCZNIE'}
                  </div>
                </div>

                <div className={`border-t pt-8 ${isUnfavorable ? 'border-red-500/20' : 'border-emerald-500/30'}`}>
                  <div className={`text-sm uppercase tracking-wider mb-2 font-bold ${isUnfavorable ? 'text-red-400' : 'text-emerald-400'}`}>
                    CZAS ZWROTU Z INWESTYCJI (ROI)
                  </div>
                  <div className="text-zinc-300 text-sm mb-2">System zwróci się w:</div>
                  <div className="text-2xl md:text-3xl font-bold text-white flex flex-wrap items-baseline gap-2 mb-4">
                    {isUnfavorable ? (
                      <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        NIGDY / INWESTYCJA NIEPŁACALNA
                      </span>
                    ) : (
                      <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <AnimatedNumber value={roiMonths} decimals={1} /> miesiąca
                      </span>
                    )}
                  </div>
                  
                  <div className={`text-sm leading-relaxed p-4 rounded-xl mb-4 ${isUnfavorable ? 'bg-red-500/10 text-red-200 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-100 border border-emerald-500/20'}`}>
                    {isUnfavorable ? (
                      "W tym scenariuszu, przy tak niskich obrotach, miesięczny koszt utrzymania własnej platformy przewyższa 10% prowizji. Inwestycja budowy platformy nie zwróci się w żadnym realnym czasie. Model finansowy własnej platformy staje się opłacalny dopiero przy wyższym wolumenie zamówień. Prosimy o rozważenie wariantu o wyższych wolumenach lub niższym stałym abonamencie technicznym."
                    ) : (
                      "Twój obecny wolumen zamówień generuje olbrzymie koszty prowizyjne. Przejście na własny system zryczałtowany jest wysoce opłacalne i pozwoli na drastyczne uwolnienie kapitału na dalsze skalowanie sieci."
                    )}
                  </div>

                  <div className="text-zinc-500 text-xs flex items-start gap-2">
                    <iconify-icon icon="solar:info-circle-linear" className={`mt-0.5 flex-shrink-0 ${isUnfavorable ? 'text-red-500' : 'text-emerald-500'}`}></iconify-icon>
                    Założono stały, jednorazowy koszt budowy platformy wynoszący 180 000 PLN.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile CTA */}
            <div className="block lg:hidden mt-4">
              <button onClick={() => {
                document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' });
              }} className="w-full py-5 bg-zinc-100 hover:bg-white text-black font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 text-lg">
                Rozpocznij wdrażanie Systemu 99
                <iconify-icon icon="solar:rocket-bold" width="24" className="text-red-600"></iconify-icon>
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Warning;