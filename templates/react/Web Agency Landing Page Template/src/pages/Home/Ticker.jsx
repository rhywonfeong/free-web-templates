export default function Ticker() {
  const items = [
    { text: "+50 proyectos", icon: "solar:folder-with-files-linear" },
    { text: "Clientes satisfechos", icon: "solar:users-group-two-rounded-linear" },
    { text: "Tecnologías modernas", icon: "solar:cpu-bolt-linear" },
    { text: "Resultados reales", icon: "solar:graph-up-linear" },
  ];

  // Duplicate for seamless marquee
  const tickerContent = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full py-6 border-y border-white/5 bg-[#030308]/50 backdrop-blur-md overflow-hidden flex relative z-10">
      <div className="flex animate-marquee whitespace-nowrap min-w-max">
        {tickerContent.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-8 text-gray-400">
            <iconify-icon icon={item.icon} width="20" className="text-violet-500" />
            <span className="text-sm font-medium tracking-wide uppercase">{item.text}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 ml-8" />
          </div>
        ))}
      </div>
    </div>
  );
}