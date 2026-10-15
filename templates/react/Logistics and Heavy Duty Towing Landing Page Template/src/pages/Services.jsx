export default function Services() {
  const details = [
    {
      title: "Heavy Duty & Rotator Recovery",
      desc: "Our fleet includes state-of-the-art 50-ton and 75-ton rotators. We specialize in complex recoveries, off-road winching, overturned tractor-trailers, and specialized cargo recovery for USA commercial fleets.",
      features: ["75-Ton Century Rotators", "Air Cushion Recovery Ops", "Load Shifts & Transfers", "Hazmat Cleanup Coordination"],
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/a09f3a5f-b914-4406-a83b-d524315ca6e5/f33d18b5-e687-44ee-8005-0b8c3231a2e6-Gemini_Generated_Image_gcd4kvgcd4kvgcd4-1-.jpg?v=1775148410229",
      reversed: false,
      sysId: "SRV-01-HEAVY"
    },
    {
      title: "Commercial Collision Repair",
      desc: "Accidents happen. When they do, our certified heavy-duty body shop gets your rig back on the road. Our mechanics are certified for all major US platforms, including Freightliner Cascadia, Kenworth, Peterbilt, and Volvo VNL.",
      features: ["Heavy Frame Straightening", "Custom Aluminum Fabrication", "60ft Commercial Paint Booths", "Insurance Claims Direct Processing"],
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/a09f3a5f-b914-4406-a83b-d524315ca6e5/d971050c-ceed-4e4e-b0c1-8c9198ae5037-ERM_Towing-mod-1170x465.jpg?v=1775148431503",
      reversed: true,
      sysId: "SRV-02-REPAIR"
    },
    {
      title: "Secure Commercial Storage",
      desc: "Need a secure place for your truck, trailer, or cargo after an incident? We offer acres of fenced, lighted, and monitored freightyards across our Southeastern service network.",
      features: ["24/7 Monitored Surveillance", "Climate Controlled Options", "Cross-docking Facilities", "Digital Inventory Management"],
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/a09f3a5f-b914-4406-a83b-d524315ca6e5/7769522f-fb1d-475a-9901-0ff589434500-3a3306_4336aafa986b4cea8ba518cd933e03fd-mv2.avif?v=1775148357379",
      reversed: false,
      sysId: "SRV-03-STORAGE"
    }
  ];

  return (
    <div className="pb-32 relative w-full bg-[#050505] min-h-screen bg-schematic">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-32 relative">
          <div className="font-mono text-[#FF3C00] text-sm tracking-widest mb-6">[ SYSTEM.DIRECTORY ]</div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 uppercase leading-none">
            COMPREHENSIVE <br/>
            <span className="text-[#333] stroke-text relative">
              <span className="absolute inset-0 text-[#FF3C00] clip-corner bg-[#FF3C00]/10 border-l-8 border-[#FF3C00] pl-4">CAPABILITIES.</span>
              CAPABILITIES.
            </span>
          </h1>
          <p className="text-xl font-light text-gray-400 max-w-2xl">
            From the moment of impact to the final coat of paint, Titan provides uncompromising end-to-end management of commercial vehicular incidents for America's logistics sector.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          {details.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col gap-12 lg:items-center ${item.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                <div className="absolute -inset-4 bg-[#FF3C00]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative overflow-hidden border border-[#333] aspect-[4/3] clip-corner bg-[#121212]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
                  />
                  <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  
                  {/* Tech overlay elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#FF3C00] opacity-50"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#FF3C00] opacity-50"></div>
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-white bg-[#050505]/80 px-2 py-1 backdrop-blur-sm border border-[#333]">
                    {item.sysId}
                  </div>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                <div className="hidden lg:block absolute top-0 -left-12 bottom-0 w-[1px] bg-gradient-to-b from-[#FF3C00] to-transparent opacity-30"></div>
                
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide uppercase">
                  {item.title}
                </h2>
                <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg border-l-2 border-[#333] pl-6">
                  {item.desc}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-gray-200 group">
                      <div className="w-6 h-6 mt-1 flex items-center justify-center shrink-0 border border-[#FF3C00] bg-[#121212] group-hover:bg-[#FF3C00] transition-colors">
                        <iconify-icon icon="solar:alt-arrow-right-line-duotone" class="text-[#FF3C00] group-hover:text-[#050505] text-sm transition-colors"></iconify-icon>
                      </div>
                      <span className="font-heading text-lg tracking-wider mt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}