import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: "FinTech Dashboard",
    category: "App Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    result: "+40% retención de usuarios"
  },
  {
    title: "Studio Arquitectura",
    category: "Sitio Corporativo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    result: "Carga en < 1 segundo"
  },
  {
    title: "EcoStore",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    result: "+120% en ventas online"
  },
  {
    title: "Nova Health",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    result: "Tasa de conversión 8.5%"
  }
];

export default function Portfolio() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="portfolio" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Trabajo Reciente</h2>
            <p className="text-gray-400 max-w-xl">Proyectos reales. Resultados medibles. Explora cómo hemos ayudado a otras marcas a destacar en su sector.</p>
          </div>
          <button className="shrink-0 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors flex items-center gap-2">
            Ver todo el portfolio <iconify-icon icon="solar:arrow-right-linear" />
          </button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={clsx(
                "group relative rounded-3xl overflow-hidden aspect-[4/3] reveal-up",
                isRevealed && "is-revealed"
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-[#030308]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white/80 mb-3 border border-white/10">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-violet-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <iconify-icon icon="solar:chart-square-linear" />
                    {project.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}