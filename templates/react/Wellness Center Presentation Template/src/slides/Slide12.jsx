import SlideWrapper from '../components/ui/SlideWrapper';
import { ASSETS } from '../config/constants';

export default function Slide12() {
  return (
    <SlideWrapper theme="dark" className="bg-brand-dark">
      <div className="w-full h-full flex flex-col items-center justify-center px-24 py-20 relative">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="animate-slide-up text-center max-w-4xl relative z-10 flex flex-col items-center">
          
          <img src={ASSETS.logoGold} alt="Soul Balance Logo" className="w-48 mb-16 mix-blend-screen" />

          <blockquote className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight mb-16 relative">
            <span className="absolute -top-8 -left-8 text-8xl text-brand-gold/20 font-sans">"</span>
            Empowering individuals to heal from within, rewriting their stories through the breath.
            <span className="absolute -bottom-16 -right-8 text-8xl text-brand-gold/20 font-sans rotate-180">"</span>
          </blockquote>

          <h2 className="text-3xl font-serif text-brand-gold mb-2">Thank You</h2>
          <p className="text-brand-text-light/60 text-lg mb-12">For considering Soul Balance Wellness Center</p>

          <div className="flex items-center gap-12 border-t border-white/10 pt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:user-linear" width="24" class="text-brand-gold"></iconify-icon>
              </div>
              <span className="text-white font-medium">Nadine Hart</span>
              <span className="text-white/50 text-sm">Founder</span>
            </div>
            
            <div className="w-px h-16 bg-white/10"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:letter-linear" width="24" class="text-brand-gold"></iconify-icon>
              </div>
              <span className="text-white font-medium">soledadsglow@yahoo.com</span>
              <span className="text-white/50 text-sm">Email</span>
            </div>

            <div className="w-px h-16 bg-white/10"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:phone-linear" width="24" class="text-brand-gold"></iconify-icon>
              </div>
              <span className="text-white font-medium">778-552-9149</span>
              <span className="text-white/50 text-sm">Direct</span>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}