import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[1400px] mx-auto px-6 py-12"
    >
       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">
         <div>
           <h1 className="text-5xl font-bold font-inter tracking-tighter mb-2">Panel <span className="text-white/40">Fintech</span></h1>
           <p className="text-white/50 text-sm uppercase tracking-widest font-bold">Gestión Patrimonial Institucional</p>
         </div>
         <button className="bg-white/10 hover:bg-white/20 text-white rounded-none px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 border border-white/20">
           <iconify-icon icon="lucide:refresh-cw" width="16"></iconify-icon> Sincronizar Billetera
         </button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-none shadow-xl flex flex-col justify-between">
             <div>
               <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                 <iconify-icon icon="lucide:wallet" className="text-white"></iconify-icon> Balance Total
               </h3>
               <div className="text-5xl font-inter font-bold tracking-tighter mb-2">0.00 <span className="text-2xl text-white/30">$DRACMA</span></div>
             </div>
             <p className="text-xs text-white font-bold bg-white/10 inline-flex px-3 py-1.5 uppercase tracking-widest w-fit mt-8">+12.4% APY Estimado</p>
          </div>
          
          <div className="bg-[#0a0a0a] p-8 border border-white/10 rounded-none shadow-xl flex flex-col justify-between">
             <div>
               <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                 <iconify-icon icon="lucide:lock" className="text-white"></iconify-icon> Tokens Bloqueados (Vesting)
               </h3>
               <div className="text-5xl font-inter font-bold tracking-tighter mb-2">0.00 <span className="text-2xl text-white/30">$DRACMA</span></div>
             </div>
             <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-8">Próximo Desbloqueo: TGE + 60 Días</p>
          </div>

          <div className="dracma-card-metal p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Tarjeta Activa</p>
                <h3 className="font-syne font-bold text-xl text-white">DRACMA BLACK</h3>
              </div>
              <iconify-icon icon="lucide:wifi" width="20" className="text-white/50 rotate-90"></iconify-icon>
            </div>
            
            <div className="mt-6 mb-2">
              <div className="font-mono text-lg tracking-widest text-white/90">**** **** **** 8824</div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-auto">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Poder Adquisitivo</p>
                <p className="font-mono font-bold text-white">$0.00 USD</p>
              </div>
              <iconify-icon icon="logos:mastercard" width="30" className="grayscale contrast-200"></iconify-icon>
            </div>
          </div>
       </div>

       <div className="bg-[#0a0a0a] border border-white/10 rounded-none p-10">
         <h3 className="font-inter font-bold text-2xl tracking-tight mb-8">Recompensas & Staking Institucional</h3>
         <div className="text-center py-16 border border-dashed border-white/20 bg-[#050505]">
           <iconify-icon icon="lucide:inbox" width="48" className="text-white/20 mb-6"></iconify-icon>
           <p className="text-white/50 font-light text-lg">No hay activos disponibles para reclamar.</p>
           <p className="text-sm text-white/30 mt-2">Conecte su billetera autorizada para acceder a la liquidez.</p>
         </div>
       </div>
    </motion.div>
  )
}

export default Dashboard;