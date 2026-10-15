import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tech = [
  { name: "WordPress", icon: "simple-icons:wordpress" },
  { name: "Elementor", icon: "simple-icons:elementor" },
  { name: "Gutenberg", icon: "simple-icons:gutenberg" },
  { name: "HTML5", icon: "simple-icons:html5" },
  { name: "CSS3", icon: "simple-icons:css3" },
  { name: "JavaScript", icon: "simple-icons:javascript" },
  { name: "React", icon: "simple-icons:react" },
  { name: "Tailwind", icon: "simple-icons:tailwindcss" },
];

export default function TechStack() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section className="py-20 relative z-10 border-y border-white/5 bg-gradient-to-b from-[#030308] to-[#0a0a16]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h3 ref={ref} className={clsx("text-sm font-medium uppercase tracking-widest text-gray-500 mb-10 reveal-fade", isRevealed && "is-revealed")}>
          Potenciado por tecnología real
        </h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
          {tech.map((item, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "group flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 reveal-up",
                isRevealed && "is-revealed"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <iconify-icon icon={item.icon} width="40" className="text-gray-400 group-hover:text-white transition-colors relative z-10" />
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}