import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    icon: "solar:pen-new-square-linear",
    title: "Diseño UI/UX",
    desc: "Diseñamos experiencias que guían al usuario y aumentan la conversión.",
    color: "from-fuchsia-500 to-violet-500"
  },
  {
    icon: "solar:code-square-linear",
    title: "Desarrollo Web",
    desc: "Construimos con WordPress, Elementor, React, HTML, CSS, JS y más.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: "solar:magnifer-bug-linear",
    title: "Optimización",
    desc: "Velocidad, rendimiento y SEO para que tu web no pierda clientes.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: "solar:shield-check-linear",
    title: "Mantenimiento",
    desc: "Nos encargamos de todo para que tú solo te enfoques en crecer.",
    color: "from-orange-500 to-red-500"
  }
];

export default function Services() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section id="servicios" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className={clsx("text-center mb-16 reveal-up", isRevealed && "is-revealed")}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluciones integrales diseñadas para posicionar tu marca y escalar tu negocio digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} isRevealed={isRevealed} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isRevealed }) {
  return (
    <div 
      className={clsx(
        "group relative p-[1px] rounded-2xl bg-white/5 hover:bg-transparent transition-all duration-500 reveal-up",
        isRevealed && "is-revealed"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
           style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
           className={clsx("absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10", service.color)}
      />
      
      {/* Outer Glow on hover */}
      <div className={clsx(
        "absolute -inset-1 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-20",
        service.color
      )} />

      <div className="relative h-full glass-card p-8 rounded-[15px] flex flex-col items-start overflow-hidden">
        <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br text-white shadow-lg", service.color)}>
          <iconify-icon icon={service.icon} width="24" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
        
        <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-medium uppercase tracking-wider flex items-center gap-1 text-white/70">
            Saber más <iconify-icon icon="solar:arrow-right-linear" />
          </span>
        </div>
      </div>
    </div>
  );
}