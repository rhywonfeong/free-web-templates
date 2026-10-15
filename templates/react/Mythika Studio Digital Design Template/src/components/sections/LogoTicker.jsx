const LogoTicker = () => {
  const logos = [
    { name: 'Liz & Co.', icon: 'solar:hanger-2-linear' },
    { name: 'Aurora Pet', icon: 'solar:cat-linear' },
    { name: 'Studio Nova', icon: 'solar:camera-minimalistic-linear' },
    { name: 'Lumina Tech', icon: 'solar:cpu-linear' },
    { name: 'Verde Gastronomia', icon: 'solar:chef-hat-linear' },
    { name: 'Vanguard Law', icon: 'solar:scales-linear' },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-[#0A0A0A] border-y border-[#1A1A1A] overflow-hidden flex flex-col items-center">
      <span className="text-xs uppercase tracking-[0.12em] text-[#666666] mb-8 text-center block">
        Marcas que confiam na Mythika
      </span>
      
      <div className="w-full max-w-screen-2xl mx-auto overflow-hidden relative mask-image-fade">
        {/* Inline style for mask image to fade edges */}
        <div 
          className="flex gap-16 md:gap-24 w-max animate-marquee items-center"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-3 text-[#4A4A4A] grayscale hover:grayscale-0 hover:text-[#8A8A8A] transition-all duration-300">
              <iconify-icon icon={logo.icon} class="text-2xl"></iconify-icon>
              <span className="font-medium text-lg tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;