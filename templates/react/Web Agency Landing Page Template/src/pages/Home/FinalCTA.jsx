import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        
        {/* Glowing Background Block */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-[3rem] blur-2xl -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 rounded-[3rem] border border-white/10 glass-panel -z-10" />

        <div ref={ref} className="px-8 py-20 md:py-32 text-center rounded-[3rem] relative overflow-hidden">
          {/* Animated Mesh inside CTA */}
          <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10">
            <h2 className={clsx("text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight reveal-up", isRevealed && "is-revealed")}>
              Tu web puede ser tu mejor vendedor. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 opacity-80">O tu mayor pérdida.</span>
            </h2>
            
            <p className={clsx("text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 reveal-up", isRevealed && "is-revealed")} style={{ transitionDelay: '100ms' }}>
              La diferencia está en cómo está construida. Deja de perder clientes por una web lenta o confusa y empieza a dominar tu nicho.
            </p>

            <a href="#contacto" className={clsx("inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#030308] font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] reveal-up", isRevealed && "is-revealed")} style={{ transitionDelay: '200ms' }}>
              Empezar mi proyecto
              <iconify-icon icon="solar:arrow-right-up-linear" width="24" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}