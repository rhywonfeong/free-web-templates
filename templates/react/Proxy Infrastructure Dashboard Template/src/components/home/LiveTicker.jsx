import React from 'react';

const mockRates = [
  { symbol: 'Has Altın', price: '2.450,85 ₺', change: '+0.45%', up: true },
  { symbol: '24 Ayar Gram', price: '2.450,85 ₺', change: '+0.45%', up: true },
  { symbol: '22 Ayar Bilezik', price: '2.285,50 ₺', change: '+0.32%', up: true },
  { symbol: 'Çeyrek Altın', price: '4.085,00 ₺', change: '-0.15%', up: false },
  { symbol: 'Yarım Altın', price: '8.170,00 ₺', change: '-0.15%', up: false },
  { symbol: 'Cumhuriyet', price: '16.340,00 ₺', change: '+0.20%', up: true },
  { symbol: 'ONS Altın', price: '$2.345,60', change: '+0.85%', up: true },
  { symbol: 'Gümüş', price: '32,45 ₺', change: '-0.10%', up: false },
];

export default function LiveTicker() {
  // Duplicate array for seamless marquee loop
  const duplicatedRates = [...mockRates, ...mockRates, ...mockRates];

  return (
    <section className="w-full border-y border-white/5 bg-[#0A0A0A] py-4 relative overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-marquee">
        {duplicatedRates.map((rate, idx) => (
          <div key={idx} className="flex items-center gap-3 px-8 shrink-0 border-r border-white/5 last:border-0">
            <span className="text-gray-400 font-medium text-sm">{rate.symbol}</span>
            <span className="text-white font-semibold tracking-tight">{rate.price}</span>
            <span className={`text-xs font-bold flex items-center gap-0.5 ${rate.up ? 'text-green-400' : 'text-red-400'}`}>
              <iconify-icon icon={rate.up ? "solar:trend-up-bold" : "solar:trend-down-bold"} width="14" height="14"></iconify-icon>
              {rate.change}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10"></div>
    </section>
  );
}