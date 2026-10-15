import React from 'react';
import { motion } from 'framer-motion';

const RwaPortal = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[1400px] mx-auto px-6 py-12"
    >
       <div className="text-left mb-16 border-l-4 border-white pl-6">
         <h1 className="text-5xl lg:text-7xl font-bold font-inter tracking-tighter mb-4">Portafolio <span className="text-white/40">RWA</span></h1>
         <p className="text-white/50 max-w-2xl text-lg font-light">Explora nuestra selección de grado institucional. Inversiones en infraestructura energética, centros de datos y bienes raíces que respaldan el ecosistema DRACMA.</p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          
          {/* Solar AI Data Center Asset */}
          <div className="bg-[#0a0a0a] border border-white/10 group hover:border-white/30 transition-all duration-500 rounded-none overflow-hidden">
             <div className="h-72 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80" alt="Data Center Solar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 rounded-sm shadow-xl">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Generando Retornos
               </div>
             </div>
             <div className="p-10">
                <div className="text-[10px] text-white/50 font-bold mb-4 uppercase tracking-widest border border-white/10 inline-block px-3 py-1">Infraestructura IA Renovable</div>
                <h3 className="text-3xl font-inter font-bold tracking-tight mb-4">Centro de Datos Solar, Texas</h3>
                <p className="text-white/60 font-light mb-8 leading-relaxed">
                  Instalación de computación de alto rendimiento (HPC) de 10MW impulsada íntegramente por un parque solar adyacente. Alquilado a empresas de IA, genera flujos de caja masivos gracias a la energía de costo casi nulo.
                </p>
                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                   <div>
                     <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">APY Proyectado</p>
                     <p className="text-3xl font-bold font-mono">18.5%</p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">Valoración</p>
                     <p className="text-2xl font-bold font-mono text-white/70">$14.2M</p>
                   </div>
                </div>
                <button className="w-full mt-8 border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                  Ver Métricas en Cadena
                </button>
             </div>
          </div>

          {/* Real Estate Asset */}
          <div className="bg-[#0a0a0a] border border-white/10 group hover:border-white/30 transition-all duration-500 rounded-none overflow-hidden">
             <div className="h-72 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" alt="Bienes Raíces Comerciales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 rounded-sm shadow-xl">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Generando Retornos
               </div>
             </div>
             <div className="p-10">
                <div className="text-[10px] text-white/50 font-bold mb-4 uppercase tracking-widest border border-white/10 inline-block px-3 py-1">Inmobiliario Comercial AAA</div>
                <h3 className="text-3xl font-inter font-bold tracking-tight mb-4">Prime Tower, Zúrich</h3>
                <p className="text-white/60 font-light mb-8 leading-relaxed">
                  Edificio de oficinas Clase A totalmente arrendado a empresas tecnológicas y financieras multinacionales. Liquidez superior y una apreciación de capital estable como escudo contra la inflación.
                </p>
                <div className="flex justify-between items-end border-t border-white/10 pt-6">
                   <div>
                     <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">APY Proyectado</p>
                     <p className="text-3xl font-bold font-mono">11.2%</p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">Valoración</p>
                     <p className="text-2xl font-bold font-mono text-white/70">$45.0M</p>
                   </div>
                </div>
                <button className="w-full mt-8 border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                  Ver Métricas en Cadena
                </button>
             </div>
          </div>
       </div>
    </motion.div>
  )
}

export default RwaPortal;