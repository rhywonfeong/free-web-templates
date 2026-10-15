import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide6() {
  const services = [
    {
      title: "9D Breathwork",
      price: "$80",
      unit: "per session",
      features: ["Multi-sensory experience", "Binaural beat integration", "Somatic release guidance"],
      accent: "bg-brand-blue"
    },
    {
      title: "Group Retreats",
      price: "$2,000",
      unit: "per retreat",
      features: ["Immersive weekend journey", "Community integration", "Advanced somatic work"],
      accent: "bg-brand-gold"
    },
    {
      title: "3-Month Coaching",
      price: "$3,000",
      unit: "per program",
      features: ["Weekly 1:1 sessions", "EFT Integration", "Ongoing nervous system tracking"],
      accent: "bg-brand-indigo"
    }
  ];

  return (
    <SlideWrapper theme="light" className="bg-brand-light">
      <div className="w-full h-full flex flex-col px-24 py-20">
        <Header 
          theme="light"
          subtitle="Our Offerings"
          title="Your Service"
          align="center"
        />

        <div className="flex-1 flex items-center justify-center gap-8 mt-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-[380px] bg-white rounded-3xl shadow-xl shadow-brand-dark/5 overflow-hidden border border-gray-100 hover:-translate-y-4 transition-transform duration-500 flex flex-col"
            >
              <div className={`h-3 w-full ${service.accent}`}></div>
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-brand-dark mb-6 text-center">{service.title}</h3>
                
                <div className="text-center mb-10 pb-10 border-b border-gray-100">
                  <span className="text-5xl font-light text-brand-dark tracking-tight">{service.price}</span>
                  <span className="block text-brand-text-dark/50 text-sm mt-2 uppercase tracking-wider">{service.unit}</span>
                </div>

                <ul className="space-y-5 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-text-dark/80">
                      <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0">
                        <iconify-icon icon="solar:check-read-linear" width="14" class="text-brand-gold"></iconify-icon>
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-10 py-4 rounded-xl border border-brand-dark text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}