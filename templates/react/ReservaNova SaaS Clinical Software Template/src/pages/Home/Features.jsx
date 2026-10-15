import { useReveal } from '../../hooks/useReveal';
import MaskedText from '../../components/MaskedText';

export default function Features() {
  const headerRef = useReveal();
  const gridRef = useReveal({ threshold: 0.1 });

  const features = [
    {
      title: "Agenda Estilo Google",
      description: "Visualiza tus citas diarias, semanales o mensuales con una interfaz rápida y fácil que no requiere capacitaciones complejas.",
      icon: "solar:calendar-search-linear",
      colSpan: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
    },
    {
      title: "Recordatorios Automáticos",
      description: "Envío de alertas automáticas vía WhatsApp y SMS a tus pacientes para disminuir las horas perdidas.",
      icon: "solar:chat-round-line-linear",
      colSpan: "md:col-span-1",
      image: null
    },
    {
      title: "Historial y Notas Clínicas",
      description: "Accede al registro de atenciones, añade fotos, evoluciones y categoriza a tus pacientes fácilmente.",
      icon: "solar:user-id-linear",
      colSpan: "md:col-span-1",
      image: null
    },
    {
      title: "Reportes y Asistencia",
      description: "Descarga reportes de recaudación, inasistencias y métricas clave para la contabilidad de tu local en un solo clic.",
      icon: "solar:document-text-linear",
      colSpan: "md:col-span-2",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ];

  return (
    <section className="w-full max-w-7xl py-32 px-6 relative border-b border-white/[0.05]">
      {/* Grid Lines inside section */}
      <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/[0.03] -z-10"></div>
      <div className="absolute top-0 bottom-0 right-1/3 w-px bg-white/[0.03] -z-10"></div>

      <div ref={headerRef} className="text-center mb-24">
        <div className="flex items-center justify-center space-x-4 mb-4 text-[0.65rem] tracking-widest uppercase text-rose-500 font-medium clip-slide delay-100">
          <span>03</span>
          <div className="w-12 h-px bg-rose-500/50"></div>
          <span>Características MVP</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
          <MaskedText text="Todo lo que necesitas,\nnada de lo que no" delayStart={200} stagger={100} />
        </h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={`clip-slide delay-${(idx + 1) * 100} ${feature.colSpan}`}
          >
            <div className="group relative overflow-hidden p-8 rounded-sm border border-white/5 skeuo-card hover:-translate-y-2 transition-all duration-300 h-full">
              {feature.image && (
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                <div>
                  <div className="w-12 h-12 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-colors">
                    <iconify-icon icon={feature.icon} class="text-2xl text-white/70 group-hover:text-rose-500 transition-colors"></iconify-icon>
                  </div>
                  <h3 className="text-2xl text-white font-medium tracking-tight mb-3 group-hover:text-rose-500 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
              
              {/* Subtle highlight effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}