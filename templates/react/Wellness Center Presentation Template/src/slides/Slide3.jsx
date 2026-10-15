import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide3() {
  const cards = [
    {
      icon: "solar:graph-down-new-linear",
      title: "The Stress Epidemic",
      desc: "Canadians are experiencing unprecedented levels of chronic stress, anxiety, and burnout. Traditional talk therapy often falls short in addressing deep-seated nervous system dysregulation.",
      delay: "delay-100"
    },
    {
      icon: "solar:target-linear",
      title: "Critical Shortage",
      desc: "There is a severe lack of certified 9D Breathwork facilitators across Canada, leaving a massive gap in the market for advanced, technology-assisted somatic healing modalities.",
      delay: "delay-200"
    },
    {
      icon: "solar:waterdrops-linear",
      title: "A Deeper Need",
      desc: "Clients are actively seeking profound, experiential healing that bypasses the conscious mind and addresses trauma stored in the body, requiring synergistic approaches beyond standard methods.",
      delay: "delay-300"
    }
  ];

  return (
    <SlideWrapper theme="dark" className="bg-brand-indigo">
      <div className="w-full h-full flex flex-col px-24 py-20 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-dark/50 to-transparent pointer-events-none"></div>

        <Header 
          theme="dark"
          subtitle="Identifying the Gap"
          title="The Problem"
          className="relative z-10"
        />

        <div className="flex-1 flex items-center justify-center gap-8 relative z-10 mt-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`flex-1 h-[400px] bg-brand-dark/80 backdrop-blur-md rounded-2xl border border-white/5 p-10 flex flex-col hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 animate-slide-up ${card.delay}`}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 flex items-center justify-center mb-8 border border-brand-gold/20">
                <iconify-icon icon={card.icon} width="32" class="text-brand-gold"></iconify-icon>
              </div>
              <h3 className="text-2xl font-serif text-white mb-6 tracking-tight">{card.title}</h3>
              <p className="text-brand-text-light/70 text-lg leading-relaxed flex-1">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}