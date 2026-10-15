export default function Specifications() {
  const specs = [
    { category: "Frameset", items: [
      { name: "Frame", val: "AeroX FACT 12r Carbon, Rider-First Engineered™, Win Tunnel Engineered, BSA bottom bracket, 12x142mm thru-axle, flat-mount disc" },
      { name: "Fork", val: "AeroX FACT 12r Carbon, 12x100mm thru-axle, flat-mount disc" }
    ]},
    { category: "Cockpit", items: [
      { name: "Handlebars", val: "AeroX Integrated Cockpit, Carbon, 125mm drop, 75mm reach" },
      { name: "Tape", val: "Supacaz Super Sticky Kush" },
      { name: "Saddle", val: "Body Geometry S-Works Power, carbon fiber rails, carbon fiber base" },
      { name: "SeatPost", val: "2024 AeroX Carbon Seat Post, FACT Carbon, 15mm offset" }
    ]},
    { category: "Drivetrain", items: [
      { name: "Rear Derailleur", val: "SRAM RED eTap AXS, 12-speed" },
      { name: "Front Derailleur", val: "SRAM RED eTap AXS, braze-on" },
      { name: "Cassette", val: "SRAM RED XG-1290, 12-speed, 10-33t" },
      { name: "Crankset", val: "SRAM RED AXS Power Meter" },
      { name: "Chainrings", val: "48/35T" }
    ]}
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 w-full animate-fade-in">
      <div className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-center md:text-left">Technical Specifications</h1>
        <p className="text-zinc-400 max-w-2xl text-center md:text-left">Every millimeter of the AeroX has been meticulously analyzed, tested, and refined. Here is the complete breakdown of the build.</p>
      </div>

      <div className="space-y-12">
        {specs.map((section, i) => (
          <div key={i} className="glass-panel p-8 rounded-3xl">
            <h2 className="text-xl font-medium mb-6 text-cyan-400 flex items-center gap-3">
              <iconify-icon icon="solar:tuning-square-2-linear"></iconify-icon>
              {section.category}
            </h2>
            <div className="divide-y divide-zinc-800/50">
              {section.items.map((item, j) => (
                <div key={j} className="py-4 flex flex-col md:flex-row md:gap-8">
                  <div className="md:w-1/3 text-zinc-400 text-sm font-medium mb-1 md:mb-0">
                    {item.name}
                  </div>
                  <div className="md:w-2/3 text-zinc-200 text-sm leading-relaxed">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}