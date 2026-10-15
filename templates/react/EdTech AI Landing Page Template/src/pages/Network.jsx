import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export default function Network() {
  const [networkRef, networkVisible] = useScrollReveal();

  return (
    <div ref={networkRef} className={clsx("min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden p-6 text-center", networkVisible && "is-visible")}>
      {/* Decorative center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 border border-white/10 p-12 bg-brand-surface/50 backdrop-blur-md max-w-2xl w-full">
        <div className="reveal-clip-slide delay-100 flex items-center justify-center gap-4 mb-8">
          <iconify-icon icon="solar:routing-3-linear" class="text-4xl text-brand-accent"></iconify-icon>
        </div>
        
        <h1 className="reveal-clip-slide delay-200 text-4xl md:text-5xl font-medium tracking-tighter uppercase text-white mb-6">Global Node Map</h1>
        <p className="reveal-clip-slide delay-300 text-brand-muted text-sm leading-relaxed mb-12">
          Visualization modules are currently offline for routine calibration. Security protocols require temporary suspension of external routing interfaces. 
        </p>
        
        <div className="reveal-clip-slide delay-400 flex justify-center gap-4">
          <Link to="/" className="px-6 py-3 border border-white/10 bg-[#161921] text-xs font-semibold tracking-widest uppercase text-white hover:border-brand-accent transition-colors">
            Return to Core
          </Link>
          <button disabled className="px-6 py-3 border border-white/10 bg-brand-base text-xs font-semibold tracking-widest uppercase text-brand-muted opacity-50 cursor-not-allowed">
            Authenticate
          </button>
        </div>

        {/* Dummy status indicators */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-between gap-4 text-[10px] font-medium tracking-widest uppercase text-brand-muted">
           <div className="reveal-clip-slide delay-500 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
             US-EAST-1 Active
           </div>
           <div className="reveal-clip-slide delay-600 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse delay-100"></span>
             EU-WEST-2 Active
           </div>
           <div className="reveal-clip-slide delay-700 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-200"></span>
             AP-SOUTHEAST Restarting
           </div>
        </div>
      </div>
    </div>
  );
}