import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';
import { ASSETS } from '../config/constants';

export default function Slide9() {
  const comparison = [
    { feature: "Spatial Audio Integration", standard: false, soul: true },
    { feature: "Binaural Brainwave Beats", standard: false, soul: true },
    { feature: "Somatic Bodywork Expertise", standard: false, soul: true },
    { feature: "EFT Integration", standard: false, soul: true },
    { feature: "General Breathing Techniques", standard: true, soul: true },
    { feature: "HD Wireless Headphones", standard: false, soul: true }
  ];

  return (
    <SlideWrapper theme="light" className="bg-brand-light">
      <div className="w-full h-full flex flex-col">
        <div className="px-24 pt-16 pb-8">
          <Header 
            theme="light"
            subtitle="Market Positioning"
            title="The Competition"
            align="center"
          />
        </div>

        <div className="flex-1 px-24 flex justify-center pb-8">
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl shadow-brand-dark/5 overflow-hidden border border-gray-100 flex flex-col">
            
            {/* Table Header */}
            <div className="flex bg-brand-indigo text-white p-6">
              <div className="w-1/2 font-serif text-xl pl-6">Feature / Capability</div>
              <div className="w-1/4 text-center font-medium opacity-80 uppercase tracking-widest text-sm self-center">Standard Breathwork</div>
              <div className="w-1/4 text-center font-bold text-brand-gold uppercase tracking-widest text-sm self-center">Soul Balance</div>
            </div>

            {/* Table Body */}
            <div className="flex-1 bg-white">
              {comparison.map((item, i) => (
                <div key={i} className={`flex border-b border-gray-100 hover:bg-brand-cream/30 transition-colors ${i === comparison.length - 1 ? 'border-none' : ''}`}>
                  <div className="w-1/2 py-5 pl-12 text-lg text-brand-dark font-medium flex items-center">
                    {item.feature}
                  </div>
                  <div className="w-1/4 py-5 flex items-center justify-center border-l border-gray-50 bg-gray-50/50">
                    {item.standard ? 
                      <iconify-icon icon="solar:check-circle-bold" width="24" class="text-gray-400"></iconify-icon> : 
                      <iconify-icon icon="solar:close-circle-linear" width="24" class="text-gray-200"></iconify-icon>
                    }
                  </div>
                  <div className="w-1/4 py-5 flex items-center justify-center border-l border-brand-gold/10 bg-brand-gold/5">
                    {item.soul ? 
                      <iconify-icon icon="solar:check-circle-bold" width="28" class="text-brand-gold"></iconify-icon> : 
                      <iconify-icon icon="solar:close-circle-linear" width="24" class="text-gray-200"></iconify-icon>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Strip Bottom */}
        <div className="h-48 w-full relative mt-auto">
           <img 
            src={ASSETS.splitBlueLeds} 
            alt="9D Experience" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
        </div>
      </div>
    </SlideWrapper>
  );
}