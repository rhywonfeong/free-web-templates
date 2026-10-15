import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide4() {
  return (
    <SlideWrapper theme="light" className="bg-brand-light">
      <div className="w-full h-full flex flex-col px-24 py-20 relative overflow-hidden">
        
        {/* Subtle background circles */}
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] rounded-full border-[40px] border-brand-cream/50 pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border-[20px] border-brand-gold/5 pointer-events-none"></div>

        <Header 
          theme="light"
          subtitle="Our Competitive Edge"
          title="Your Advantages"
          className="relative z-10 text-center mx-auto"
          align="center"
        />

        <div className="flex-1 flex items-center justify-center gap-12 mt-12 relative z-10">
          
          {/* Card 1 */}
          <div className="w-[500px] bg-white rounded-3xl shadow-xl shadow-brand-dark/5 p-12 hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
            <div className="h-20 w-20 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8">
              <iconify-icon icon="solar:headphones-round-sound-linear" width="40" class="text-brand-blue"></iconify-icon>
            </div>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Unique 9D Technology</h3>
            <ul className="space-y-4">
              {[
                "Binaural Beats for brainwave entrainment",
                "High-Definition wireless headphones",
                "Subliminal therapeutic messaging",
                "Multi-sensory somatic experience",
                "Immersive spatial audio scapes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-brand-text-dark/80 text-lg">
                  <iconify-icon icon="solar:check-circle-linear" class="text-brand-blue mt-1 flex-shrink-0"></iconify-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus Sign */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold text-2xl font-light">
              <iconify-icon icon="solar:add-linear" width="32"></iconify-icon>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[500px] bg-white rounded-3xl shadow-xl shadow-brand-dark/5 p-12 hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
             <div className="h-20 w-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8">
              <iconify-icon icon="solar:infinity-linear" width="40" class="text-brand-gold"></iconify-icon>
            </div>
            <h3 className="text-3xl font-serif text-brand-dark mb-6">Holistic Synergy</h3>
            <ul className="space-y-4">
              {[
                "25 Years of deep tissue & somatic massage",
                "Mastery of anatomical bodywork",
                "Certified 9D Breathwork Facilitation",
                "Integration of EFT (Emotional Freedom Technique)",
                "Trauma-informed spatial holding"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-brand-text-dark/80 text-lg">
                  <iconify-icon icon="solar:check-circle-linear" class="text-brand-gold mt-1 flex-shrink-0"></iconify-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}