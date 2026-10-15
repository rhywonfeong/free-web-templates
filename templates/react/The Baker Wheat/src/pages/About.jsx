import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const values = [
    { icon: 'lucide:award', title: 'Uncompromising Quality', desc: 'Every batch is tested for crumb structure, crust integrity, and flavor profile before leaving our facility.' },
    { icon: 'lucide:shield-check', title: 'Strictly Halal', desc: '100% JAKIM certified. We maintain rigorous standards over our entire supply chain and production line.' },
    { icon: 'lucide:lightbulb', title: 'Constant Innovation', desc: 'Our R&D kitchen is always exploring new hydration techniques, resting times, and grain blends.' },
    { icon: 'lucide:clock', title: 'Absolute Reliability', desc: 'With a 99.8% fulfillment rate, we ensure your kitchen never runs out of the bread your guests expect.' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?w=1600&q=80" 
            alt="Bakery production" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full">
          <ScrollReveal variant="scale">
            <div className="bg-white/95 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-soft text-center border border-white/20">
              <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Established 2018</div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#133875] tracking-tight mb-6">Our Story</h1>
              <p className="text-slate-600 text-lg">
                Born from the belief that scale shouldn't mean sacrificing soul, The Baker Wheat brings artisan baking techniques to commercial F&B operations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="up">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Bridging the Gap Between Artisan and Commercial</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              In 2018, we noticed a recurring problem in the Malaysian hospitality sector: chefs were forced to choose between the premium quality of small artisan bakeries and the reliability of large industrial suppliers. 
            </p>
            <p>
              We built our 8,000 sqft Nilai facility specifically to solve this. By integrating long-fermentation dough processing with advanced blast-freezing technology, we freeze time itself—locking in the complex flavors of artisan bread while delivering it in a format that allows any kitchen to finish baking it on demand.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal variant="up">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Our Core Principles</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={i} variant="up" delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex gap-6 hover-lift">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#504566]/10 text-[#504566] flex items-center justify-center">
                    <iconify-icon icon={val.icon} width="32"></iconify-icon>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}