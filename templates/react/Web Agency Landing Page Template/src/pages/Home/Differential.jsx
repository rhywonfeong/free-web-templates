import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Differential() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="diferencial" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={ref} className={clsx("reveal-up", isRevealed && "is-revealed")}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-6 text-xs font-medium text-violet-300 border-violet-500/30">
              <iconify-icon icon="solar:star-fall-linear" />
              Nuestro Enfoque
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
              No hacemos webs bonitas. <br />
              Hacemos webs que <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">funcionan.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Cualquiera puede usar una plantilla. Nosotros analizamos tu mercado, diseñamos interfaces intuitivas y escribimos código limpio para garantizar que cada clic te acerque a tus objetivos comerciales.
            </p>
            
            <ul className="space-y-4">
              {[
                "Diseño orientado a la conversión (CRO)",
                "Arquitectura técnica escalable",
                "Experiencia de usuario sin fricciones"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <iconify-icon icon="solar:check-read-linear" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={clsx("relative h-[500px] lg:h-[600px] w-full reveal-fade", isRevealed && "is-revealed")} style={{ transitionDelay: '200ms' }}>
            {/* Abstract UI Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-cyan-900/20 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
              
              {/* Animated rings */}
              <div className="absolute w-64 h-64 border border-violet-500/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute w-96 h-96 border border-cyan-500/20 rounded-full animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" />

              {/* Central Element */}
              <div className="relative z-10 w-64 h-80 glass-card rounded-2xl p-6 shadow-2xl animate-float flex flex-col gap-4">
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-violet-500/40 to-cyan-500/40 animate-pulse-glow" />
                <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                <div className="mt-auto h-10 w-full rounded-lg bg-violet-600/80 flex items-center justify-center text-xs font-semibold text-white">
                  Conversión Exitosa
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-20 right-10 w-40 glass-card p-4 rounded-xl animate-float-slow shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 w-12 bg-green-400/50 rounded-full" />
                  <iconify-icon icon="solar:graph-up-linear" className="text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white">+145%</div>
                <div className="text-[10px] text-gray-400">Tráfico orgánico</div>
              </div>

              <div className="absolute bottom-20 left-10 w-48 glass-card p-4 rounded-xl animate-float-slow shadow-xl" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-500/30" />
                  <div>
                    <div className="h-2 w-16 bg-white/20 rounded-full mb-1" />
                    <div className="h-2 w-10 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-violet-500 rounded-full" />
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}