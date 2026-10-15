import SlideWrapper from '../components/ui/SlideWrapper';
import { ASSETS } from '../config/constants';

export default function Slide5() {
  return (
    <SlideWrapper theme="split">
      <div className="flex w-full h-full">
        
        {/* Left Dark Panel */}
        <div className="w-5/12 bg-brand-dark text-white p-20 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={ASSETS.groupHeadphones} alt="Session" className="w-full h-full object-cover mix-blend-luminosity" />
            <div className="absolute inset-0 bg-brand-dark/80"></div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-center animate-slide-up">
            <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              The Solution
            </span>
            <h2 className="font-serif text-5xl tracking-tight leading-tight mb-8">
              Your Answer
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              Soul Balance Wellness Center delivers a revolutionary approach to mental and emotional wellbeing. By combining cutting-edge 9D spatial audio technology with decades of somatic expertise, we provide an unparalleled environment for profound transformation and nervous system reset.
            </p>
            <div className="mt-auto">
               <img src={ASSETS.groupHeadphones} alt="Headphones" className="w-full h-48 object-cover rounded-xl border border-white/10 shadow-2xl grayscale" />
            </div>
          </div>
        </div>

        {/* Right Light Panel */}
        <div className="w-7/12 bg-brand-light p-20 flex flex-col justify-center items-center">
          <div className="w-full max-w-2xl space-y-6">
            
            {[
              { title: "Group Sessions", desc: "Immersive collective experiences holding space for profound shared healing.", icon: "solar:users-group-two-rounded-linear" },
              { title: "Private 1:1 Care", desc: "Deeply personalized journeys tailored to individual nervous system needs.", icon: "solar:user-circle-linear" },
              { title: "Studio Partnerships", desc: "Collaborative wellness integrations expanding reach across local studios.", icon: "solar:buildings-2-linear" }
            ].map((format, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-brand-cream flex items-center gap-8 hover:-translate-x-2 hover:shadow-lg transition-all duration-300 animate-slide-up delay-${index * 100}`}
              >
                <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon={format.icon} width="32" class="text-brand-gold"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-brand-dark mb-2">{format.title}</h3>
                  <p className="text-brand-text-dark/70 text-lg">{format.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}