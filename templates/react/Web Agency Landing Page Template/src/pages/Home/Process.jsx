import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const steps = [
  { id: "01", title: "Estrategia", desc: "Definimos objetivos, analizamos la competencia y trazamos el plan de acción.", icon: "solar:lightbulb-bolt-linear" },
  { id: "02", title: "Diseño", desc: "Creamos prototipos visuales enfocados en la experiencia del usuario.", icon: "solar:pallete-2-linear" },
  { id: "03", title: "Desarrollo", desc: "Escribimos código limpio, rápido y optimizado para buscadores.", icon: "solar:programming-linear" },
  { id: "04", title: "Lanzamiento", desc: "Pruebas exhaustivas, publicación y monitoreo de resultados.", icon: "solar:rocket-2-linear" },
];

export default function Process() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="proceso" className="py-32 relative z-10 bg-[#030308]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Un proceso transparente</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Sin sorpresas. Cada fase está diseñada para mantener el proyecto en tiempo y forma.</p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={clsx(
                  "group relative pt-8 md:pt-0 reveal-up",
                  isRevealed && "is-revealed"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Mobile vertical line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-32px] w-[1px] bg-white/10 md:hidden" />
                )}

                <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8">
                  
                  {/* Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 group-hover:bg-violet-600 transition-all duration-300 relative">
                      <iconify-icon icon={step.icon} width="24" />
                      {/* Pulse effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-violet-500 opacity-0 group-hover:animate-ping -z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:text-center mt-1 md:mt-0">
                    <div className="text-sm font-bold text-violet-400 mb-1">{step.id}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed md:max-w-[200px] mx-auto">{step.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}