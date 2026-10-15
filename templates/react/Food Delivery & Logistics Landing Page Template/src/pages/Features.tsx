import React from 'react';
import 'iconify-icon';
import Button from '../components/Button';

const PageHeader = () => (
  <section className="relative bg-brand-gradient text-white pt-24 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[80px] text-center">
      <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
        <iconify-icon icon="solar:magic-stick-3-bold" width="16"></iconify-icon>
        <span>Features</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">Why Choose Island Run</h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
        The app that gets authentic Caribbean food straight to your door — fresh, fast, and full of island flavor.
      </p>
    </div>
    <div className="umbrella-curve-hero"></div>
  </section>
);

const FeatureCards = () => {
  const features = [
    {
      title: 'Authentic Caribbean Flavors',
      desc: 'Jerk chicken, oxtail, curry goat, and more — real island cooking from trusted local kitchens, delivered piping hot to your door.',
      icon: 'solar:chef-hat-bold-duotone',
      color: 'bg-surface',
      points: ['Trusted island kitchens', 'Classic Caribbean dishes', 'Hot food, every time']
    },
    {
      title: 'Real-Time Tracking',
      desc: "Complete transparency. Follow your meal's journey from the restaurant's kitchen straight to your front door.",
      icon: 'solar:map-point-wave-bold-duotone',
      color: 'bg-brand-accent/20',
      points: ['Live map of your driver', 'Kitchen-to-door visibility', 'Instant status notifications']
    },
    {
      title: 'International Scale',
      desc: 'Expertly managing food logistics from the Caribbean to major US metropolitan areas with consistent reliability.',
      icon: 'solar:global-bold-duotone',
      color: 'bg-brand-primary/10',
      points: ['Caribbean to US metros', 'Consistent reliability', 'World-class quality standards']
    }
  ];

  return (
    <section className="py-[96px] px-6 lg:px-[80px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="network-card flex flex-col h-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${item.color}`}>
              <iconify-icon icon={item.icon} width="40" className="text-black"></iconify-icon>
            </div>
            <h3 className="text-3xl mb-4">{item.title}</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
            <ul className="mt-auto space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-700 font-medium">
                  <iconify-icon icon="solar:check-circle-bold" width="22" className="text-brand-primary flex-shrink-0"></iconify-icon>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="https://onelink.to/a6939s" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="text-lg px-8 py-4 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
            Order Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default function Features() {
  return (
    <>
      <PageHeader />
      <FeatureCards />
    </>
  );
}
