import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide8() {
  return (
    <SlideWrapper theme="light" className="bg-brand-cream">
      <div className="w-full h-full flex flex-col px-24 py-20">
        <Header 
          theme="light"
          subtitle="Target Demographics"
          title="The Market"
        />

        <div className="flex-1 flex items-stretch justify-center gap-12 mt-8">
          
          {/* Audience Card */}
          <div className="w-1/2 bg-white rounded-3xl p-16 shadow-xl shadow-brand-dark/5 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-brand-indigo text-white flex items-center justify-center mb-8 relative z-10">
              <iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
            </div>
            
            <h3 className="text-3xl font-serif text-brand-dark mb-6 relative z-10">Target Audience</h3>
            
            <div className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
              <div className="flex items-center gap-6">
                <div className="text-4xl font-light text-brand-gold">25-65</div>
                <div className="text-lg text-brand-text-dark/80 leading-tight">Primary age demographic seeking profound healing.</div>
              </div>
              <div className="h-px w-full bg-gray-100"></div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon="solar:heart-pulse-linear" class="text-brand-indigo" width="24"></iconify-icon>
                </div>
                <div className="text-lg text-brand-text-dark/80 leading-tight">Health-conscious individuals prioritizing mental and somatic wellness.</div>
              </div>
            </div>
          </div>

          {/* Growth Card */}
          <div className="w-1/2 bg-white rounded-3xl p-16 shadow-xl shadow-brand-dark/5 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 relative z-10">
              <iconify-icon icon="solar:chart-square-linear" width="32"></iconify-icon>
            </div>
            
            <h3 className="text-3xl font-serif text-brand-dark mb-6 relative z-10">Market Growth</h3>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <h4 className="text-4xl font-serif text-brand-indigo mb-4 tracking-tight leading-tight">
                Fastest-Growing<br/>Wellness Modality
              </h4>
              <p className="text-xl text-brand-text-dark/70 leading-relaxed">
                Breathwork, particularly technologically enhanced somatic modalities, is experiencing exponential growth across Canada as traditional clinical approaches are increasingly supplemented with holistic body-based therapies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}