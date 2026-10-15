export default function Marquee() {
  const items = [
    "Força", "Cardio", "Funcional", "Condicionamento", 
    "Nutrição", "Alta Performance", "Coaching Personalizado", "Infraestrutura Premium"
  ];

  // Duplicate items to create seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#111111] border-y border-[#2E2E2E] py-6 overflow-hidden flex items-center relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10"></div>
      
      <div className="animate-marquee items-center gap-12">
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wider text-[#2E2E2E] transition-colors hover:text-[#FF4500] cursor-default">
              {item}
            </span>
            <iconify-icon icon="solar:star-fall-bold" class="text-[#2E2E2E] text-xl"></iconify-icon>
          </div>
        ))}
      </div>
    </div>
  );
}