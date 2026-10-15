import React from 'react';
import { motion } from 'motion/react';
import BlurText from '../BlurText';

export default function FeaturesChess() {
  return (
    <section className="md:py-32 flex flex-col md:gap-32 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-24 gap-y-24">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-white text-xs font-medium font-body uppercase tracking-wider">
            Qué hacemos
          </span>
        </motion.div>
        
        <BlurText 
          text="Webs serias. Sin complicaciones." 
          className="section-heading text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] justify-center text-white"
        />
      </div>

      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h3 className="feature-heading text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-tight">
            Diseñada para vender.<br />No solo para gustar.
          </h3>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-md">
            Cada sección está pensada para que tu cliente entienda lo que ofreces y dé el siguiente paso: llamar, reservar o pedir presupuesto. Sin distracciones, sin relleno.
          </p>
          <button className="liquid-glass-strong hover:bg-white/5 transition-colors rounded-full px-6 py-3 text-white font-medium text-sm mt-4">
            Ver ejemplos
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="liquid-glass rounded-2xl p-2 w-full aspect-video md:aspect-[4/3] overflow-hidden group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed3e723e-4f3d-493e-9c6a-8312f6f55f9f_1600w.png" 
              alt="Vista previa de una web profesional para negocio local" 
              className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
            />
          </div>
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 lg:pl-10"
        >
          <h3 className="feature-heading text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-tight">
            Mantenimiento incluido.<br />Tú a lo tuyo.
          </h3>
          <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-md">
            Cambios de horarios, fotos nuevas, precios, ofertas del mes… Nos encargamos nosotros. Tú mandas un WhatsApp y al día siguiente está hecho. Sin tarifas extra ni esperas.
          </p>
          <button className="liquid-glass-strong hover:bg-white/5 transition-colors rounded-full px-6 py-3 text-white font-medium text-sm mt-4">
            Cómo funciona el mantenimiento
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="liquid-glass rounded-2xl p-2 w-full aspect-video md:aspect-[4/3] overflow-hidden group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b8e92e7-fafa-4d40-aeae-c7b5ad3276db_800w.png" 
              alt="Vista previa del mantenimiento mensual de una web" 
              className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 mix-blend-screen w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}