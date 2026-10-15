export default function Thesis() {
  const areas = [
    { name: 'Digitalization', icon: 'solar:server-square-linear' },
    { name: 'AI & Data', icon: 'solar:cpu-linear' },
    { name: 'Cybersecurity', icon: 'solar:shield-keyhole-linear' },
    { name: 'IoT', icon: 'solar:smart-home-linear' }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">Investment thesis</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-8 leading-tight">
            We invest where efficiency, intelligence and security become business-critical.
          </h2>
          
          <div className="space-y-6 text-zinc-600 leading-relaxed">
            <p>
              EPIC Ventures was built around a simple conviction: the next generation of valuable B2B technology companies will not win through novelty alone. They will win by solving expensive, recurring and strategically important problems for businesses.
            </p>
            <p>
              Across Europe and beyond, companies are under growing pressure to digitize fragmented workflows, automate repetitive operations, make better use of data, improve productivity and strengthen cybersecurity across increasingly connected environments. These are no longer side initiatives. They are operational priorities.
            </p>
            <p>
              That is why we focus on enterprise software, AI-enabled tools, data and automation systems, cybersecurity products and selected IoT solutions. We are not looking for technology as theater. We are looking for products that create measurable operating value, address real market demand and have the potential to become internationally relevant businesses.
            </p>
            <p>
              We also believe strong technology investing requires judgment about what not to chase. EPIC Ventures is interested in solutions with clear economic utility, practical adoption potential and long-term relevance, rather than speculative narratives without durable business substance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, idx) => (
            <div 
              key={idx}
              className="bg-white aspect-square rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 mb-6 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-all duration-300">
                <iconify-icon icon={area.icon} width="32"></iconify-icon>
              </div>
              <h3 className="font-medium text-lg tracking-tight text-zinc-900">{area.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}