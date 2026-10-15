import { Link } from 'react-router-dom';
import RevealText from './RevealText';

export default function CTA() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12 z-10 relative">
      <div className="relative rounded-[3rem] p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-black/80 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.8)] group">
        
        <div className="absolute inset-[1px] rounded-[calc(3rem-1px)] z-0 bg-zinc-950 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
          {/* Animated Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000"></div>
        </div>

        <div className="relative z-10 p-12 md:p-24 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-4">
            <div className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse"></div>
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Network Open</span>
          </div>
          
          <RevealText 
            text="Initialize your spatial domain." 
            className="text-4xl md:text-[5rem] lg:text-[6rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)]" 
          />
          
          <p className="text-zinc-500 max-w-xl text-lg md:text-xl font-light">
            Join thousands of pioneers building the next generation of 3D interfaces and distributed physical networks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link to="/explore" className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-tight shadow-[0_0_30px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2">
              <span>Start Building</span>
              <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl"></iconify-icon>
            </Link>
            <Link to="/nodes" className="bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-tight flex justify-center items-center gap-2">
              <span>View Nodes</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}