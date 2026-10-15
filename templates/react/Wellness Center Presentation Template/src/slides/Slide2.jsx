import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';
import { ASSETS } from '../config/constants';

export default function Slide2() {
  return (
    <SlideWrapper theme="light" className="bg-brand-cream">
      <div className="flex-1 flex w-full h-full items-center">
        
        {/* Left Side - Image with artistic frame */}
        <div className="w-1/2 flex justify-center items-center p-16 relative">
          <div className="absolute w-[400px] h-[500px] bg-brand-gold/10 -rotate-3 rounded-2xl"></div>
          <div className="relative z-10 w-[400px] h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white">
            <img 
              src={ASSETS.headshot} 
              alt="Nadine Hart" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 pr-24 pl-8">
          <div className="animate-slide-up">
            <Header 
              theme="light" 
              subtitle="The Visionary Behind The Practice"
              title="Your Team"
            />
            
            <h3 className="text-3xl font-serif text-brand-indigo mb-8">Nadine Hart</h3>
            <p className="text-brand-text-dark/70 text-xl mb-12 italic border-l-4 border-brand-gold pl-6 py-2">
              Founder & Lead Facilitator
            </p>

            <div className="space-y-8">
              {[
                { icon: 'solar:medal-ribbon-linear', title: '25 Years Experience', desc: 'Extensive background in professional massage therapy and somatic work.' },
                { icon: 'solar:verified-check-linear', title: 'Certified 9D Facilitator', desc: 'Trained in advanced multi-sensory breathwork facilitation methodologies.' },
                { icon: 'solar:heart-angle-linear', title: 'EFT Practitioner', desc: 'Currently expanding modalities with upcoming Emotional Freedom Technique certification.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <iconify-icon icon={item.icon} width="28" class="text-brand-gold"></iconify-icon>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-brand-text-dark/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}