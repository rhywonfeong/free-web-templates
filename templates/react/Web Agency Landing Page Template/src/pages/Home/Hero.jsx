import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className={clsx("inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-8 text-xs font-medium text-cyan-300 border-cyan-500/30 reveal-up", isRevealed && "is-revealed")}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Optimizado para conversión
          </div>

          <h1 className={clsx("text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6 reveal-up", isRevealed && "is-revealed")} style={{ transitionDelay: '100ms' }}>
            No necesitas otra web. <br className="hidden md:block" />
            Necesitas una que <span className="text-gradient-primary">genere resultados.</span>
          </h1>

          <p className={clsx("text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed reveal-up", isRevealed && "is-revealed")} style={{ transitionDelay: '200ms' }}>
            En Astravia combinamos diseño, tecnología y estrategia para crear experiencias digitales que convierten visitas en clientes.
          </p>

          <div className={clsx("flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto reveal-up", isRevealed && "is-revealed")} style={{ transitionDelay: '300ms' }}>
            <a href="#contacto" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(113,69,214,0.4)] hover:shadow-[0_0_30px_rgba(113,69,214,0.6)] hover:-translate-y-1">
              Quiero una web que venda
            </a>
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white font-medium hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Ver cómo trabajamos
              <iconify-icon icon="solar:arrow-right-linear" />
            </a>
          </div>

        </div>

        {/* Floating UI Badges */}
        <div className="absolute top-1/4 left-10 hidden lg:flex items-center gap-3 glass-card p-3 pr-5 rounded-2xl animate-float opacity-80">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <iconify-icon icon="solar:rocket-linear" width="20" />
          </div>
          <div>
            <div className="text-xs text-gray-400">Rendimiento</div>
            <div className="text-sm font-semibold text-white">99/100</div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-10 hidden lg:flex items-center gap-3 glass-card p-3 pr-5 rounded-2xl animate-float-slow opacity-80" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
            <iconify-icon icon="solar:crown-star-linear" width="20" />
          </div>
          <div>
            <div className="text-xs text-gray-400">Diseño</div>
            <div className="text-sm font-semibold text-white">Premium</div>
          </div>
        </div>
      </div>
    </section>
  );
}