import ScrollReveal from '../components/ScrollReveal';

export default function Solutions() {
  const segments = [
    {
      title: 'Hotels & Resorts',
      desc: 'Consistent, premium quality baked goods for breakfast buffets, in-room dining, and banquets.',
      features: ['Large volume consistency', '24/7 technical support', 'Frozen-to-oven convenience', 'Halal certified'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
    },
    {
      title: 'Cafes & Bakeries',
      desc: 'Expand your display case instantly without expanding your kitchen space or labor costs.',
      features: ['Artisan appearance', 'Par-baked efficiency', 'Flexible ordering', 'Custom signature items'],
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80'
    },
    {
      title: 'Restaurants & Catering',
      desc: 'Elevate the table bread experience and streamline your burger and sandwich operations.',
      features: ['Exact sizing specs', 'Rapid thawing', 'Waste reduction', 'Consistent crumb structure'],
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80'
    }
  ];

  return (
    <div className="w-full pt-20 pb-24 bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal variant="up">
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Tailored B2B Services</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Solutions for Every Scale</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              We design our par-baked and frozen dough programs around the specific operational realities of your kitchen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((seg, i) => (
            <ScrollReveal key={i} variant="up" delay={i * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover-lift h-full flex flex-col">
                <div className="aspect-[4/3]">
                  <img src={seg.image} alt={seg.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extrabold text-[#133875] mb-4">{seg.title}</h3>
                  <p className="text-slate-600 mb-8">{seg.desc}</p>
                  <ul className="mt-auto space-y-3">
                    {seg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                        <iconify-icon icon="lucide:check-circle-2" class="text-[#D4AF37] text-lg"></iconify-icon>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#133875] py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal variant="up">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">How It Works</h2>
              <p className="text-white/70 max-w-xl mx-auto">A seamless onboarding process designed to integrate our bakery solutions into your operations without disruption.</p>
            </ScrollReveal>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4 mt-16">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-white/20"></div>
            
            {[
              { num: '1', title: 'Consultation', desc: 'We assess your menu needs, freezer space, and operational flow.' },
              { num: '2', title: 'Sampling', desc: 'Receive a curated kit of baked goods to test in your own kitchen.' },
              { num: '3', title: 'Customization', desc: 'Need tweaks? We adjust sizing, crust profile, or formulations.' },
              { num: '4', title: 'Delivery', desc: 'Consistent, scheduled cold-chain delivery directly to your facility.' }
            ].map((step, i) => (
              <ScrollReveal key={i} variant="up" delay={i * 150} className="relative z-10 flex-1 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-slate-900 font-extrabold flex items-center justify-center text-xl mb-6 shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-white/70 text-sm max-w-[200px]">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}