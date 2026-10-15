import SlideWrapper from '../components/ui/SlideWrapper';
import { ASSETS } from '../config/constants';

export default function Slide1() {
  return (
    <SlideWrapper theme="dark">
      <div className="flex-1 flex w-full h-full">
        {/* Left Image Section */}
        <div className="w-[45%] relative h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark z-10"></div>
          <img 
            src={ASSETS.headshot} 
            alt="Nadine Hart" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-[55%] flex flex-col justify-center px-16 relative">
          <div className="absolute top-12 right-16 opacity-10">
            <img src={ASSETS.logoCosmic} alt="Logo Element" className="w-48" />
          </div>

          <div className="animate-slide-up relative z-20">
            <h2 className="text-brand-gold font-medium tracking-[0.25em] uppercase text-sm mb-6">
              Soul Balance Wellness Center
            </h2>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] mb-8">
              Reaching<br/>
              New Heights<br/>
              <span className="text-brand-gold italic">of Wellness</span>
            </h1>
            
            <div className="h-px w-24 bg-brand-gold/30 mb-8"></div>
            
            <div className="space-y-2 text-brand-text-light/80 text-lg">
              <p className="font-semibold text-white text-xl">Nadine Hart</p>
              <div className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" class="text-brand-gold"></iconify-icon>
                <span>soledadsglow@yahoo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear" class="text-brand-gold"></iconify-icon>
                <span>778-552-9149</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 right-16">
             <img src={ASSETS.logoGold} alt="Soul Balance Logo" className="w-40 mix-blend-screen opacity-90" />
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}