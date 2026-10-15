import React from 'react';
import { motion } from 'framer-motion';

const Governance = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-[1400px] mx-auto px-6 py-12"
    >
       <div className="mb-16 border-l-4 border-white pl-6">
         <h1 className="text-5xl lg:text-7xl font-bold font-inter tracking-tighter mb-4">Gobernanza <span className="text-white/40">Suiza</span></h1>
         <p className="text-white/50 max-w-2xl text-lg font-light">Estructura de votación institucional. Los titulares de $DRACMA tienen autoridad directa sobre las adquisiciones de RWA, las expansiones de Centros de Datos Solares y el modelo Fintech.</p>
       </div>
       
       <div className="bg-[#0a0a0a] border border-white/20 rounded-none p-10 lg:p-12 mb-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Swiss Grid background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
              <span className="bg-white text-black text-xs font-bold px-4 py-1.5 uppercase tracking-widest">Activo</span>
              <span className="text-white/50 text-xs font-mono tracking-widest uppercase">Cierra en 48 Horas</span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="max-w-3xl">
                <p className="text-xs text-white/50 font-bold tracking-widest uppercase mb-3">SIP-014</p>
                <h3 className="text-3xl font-inter font-bold tracking-tight mb-4">Adquisición y Expansión: Centro de Datos Solar 15MW en España</h3>
                <p className="text-white/60 font-light leading-relaxed text-lg">
                  Propuesta para desplegar $6.5M del tesoro para adquirir e instalar paneles solares de alta eficiencia en una instalación de datos en Andalucía. Se proyecta que esto reduzca el gasto operativo a cero, elevando el APY del DAO al 22%.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 w-full lg:w-64 shrink-0">
                <button className="w-full border border-white/30 bg-white/5 text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                  <iconify-icon icon="lucide:check"></iconify-icon> Votar A Favor
                </button>
                <button className="w-full border border-white/10 bg-transparent text-white/50 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                  <iconify-icon icon="lucide:x"></iconify-icon> Votar En Contra
                </button>
              </div>
            </div>

            {/* Progress Bar for Votes */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex justify-between text-xs mb-3 font-bold uppercase tracking-widest">
                <span className="text-white">A Favor: 92%</span>
                <span className="text-white/40">En Contra: 8%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 overflow-hidden flex">
                <div className="h-full bg-white w-[92%]"></div>
              </div>
              <p className="text-left text-xs text-white/40 mt-4 font-mono tracking-tight uppercase">Quórum actual: 18,450,000 $DRACMA</p>
            </div>
          </div>
       </div>

       <h3 className="text-2xl font-inter font-bold tracking-tight mb-6">Historial Institucional</h3>
       <div className="bg-[#050505] border border-white/10 p-8 opacity-60 hover:opacity-100 transition-opacity">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-l-2 border-white/30 pl-4">
           <div>
             <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-2 block">SIP-013 • Ejecutado</span>
             <h4 className="font-bold text-lg font-inter tracking-tight text-white/90">Lanzamiento de Tarjeta DRACMA Black Fintech</h4>
           </div>
           <span className="bg-white/10 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Aprobado</span>
         </div>
       </div>
    </motion.div>
  )
}

export default Governance;