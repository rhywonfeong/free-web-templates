import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';
import { ASSETS } from '../config/constants';

export default function Slide7() {
  return (
    <SlideWrapper theme="dark" className="bg-brand-dark relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.blueLedSession} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark"></div>
      </div>

      <div className="w-full h-full flex flex-col px-24 py-20 relative z-10">
        <Header 
          theme="dark"
          subtitle="Traction & Validation"
          title="Results So Far"
          align="center"
        />

        <div className="flex-1 flex flex-col justify-center items-center mt-8">
          
          <div className="grid grid-cols-3 gap-16 w-full max-w-6xl">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center group animate-slide-up delay-100">
              <div className="relative">
                <span className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter">
                  25
                </span>
                <span className="absolute -bottom-4 right-0 text-brand-gold font-serif text-2xl italic">Years</span>
              </div>
              <p className="mt-8 text-xl text-brand-text-light/70 uppercase tracking-widest font-medium">
                Professional<br/>Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center group animate-slide-up delay-200">
              <div className="relative">
                <span className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-b from-brand-gold to-brand-gold/20 tracking-tighter">
                  $2.4k
                </span>
              </div>
              <p className="mt-8 text-xl text-brand-text-light/70 uppercase tracking-widest font-medium">
                Early Net<br/>Profit Generated
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center group animate-slide-up delay-300">
              <div className="relative flex items-center justify-center h-full">
                <div className="text-6xl md:text-7xl font-light text-white tracking-tight flex items-center gap-4">
                  PEAK
                  <iconify-icon icon="solar:graph-up-new-bold-duotone" class="text-brand-blue" width="72"></iconify-icon>
                </div>
              </div>
              <p className="mt-8 text-xl text-brand-text-light/70 uppercase tracking-widest font-medium">
                Market Demand<br/>& Waitlists
              </p>
            </div>

          </div>

          <div className="mt-24 h-px w-1/3 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
        </div>
      </div>
    </SlideWrapper>
  );
}