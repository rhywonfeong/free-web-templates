import React from 'react';
import { motion } from 'motion/react';
import BlurText from '../BlurText';

const features = [
  {
    icon: 'solar:calendar-minimalistic-bold-duotone',
    title: "En días, no en meses",
    desc: "De la primera llamada a la web online en menos de una semana. Sin desarrollos eternos."
  },
  {
    icon: 'solar:user-check-rounded-bold-duotone',
    title: "Pensada para tu cliente",
    desc: "Cada decisión de diseño está orientada a una cosa: que tu cliente te llame, te reserve o te compre."
  },
  {
    icon: 'solar:settings-bold-duotone',
    title: "Mantenimiento incluido",
    desc: "Cambios ilimitados todos los meses. Tú nos avisas, nosotros lo hacemos. Sin contratos eternos."
  },
  {
    icon: 'solar:map-point-search-bold-duotone',
    title: "Visible en Google",
    desc: "Optimizada para que aparezcas cuando alguien busque tu servicio en tu zona. SEO local incluido."
  }
];

export default function FeaturesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-white text-xs font-medium font-body uppercase tracking-wider">
            Por qué Salto
          </span>
        </motion.div>
        
        <BlurText 
          text="La diferencia se nota desde el primer día." 
          className="section-heading text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] justify-center text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <iconify-icon icon={feature.icon} width="22" height="22" className="text-white/90"></iconify-icon>
            </div>
            <h4 className="card-heading text-xl font-heading italic tracking-tight text-white mb-3">
              {feature.title}
            </h4>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}