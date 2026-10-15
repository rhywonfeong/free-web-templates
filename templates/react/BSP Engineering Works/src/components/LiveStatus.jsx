import { motion } from 'framer-motion'

export default function LiveStatus() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-6 z-40 flex items-center gap-3 glass-panel px-4 py-2 rounded-full"
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4500] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4500]"></span>
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-[10px] text-white uppercase tracking-widest">Workshop Live</span>
        <span className="font-mono text-[8px] text-[#848884] uppercase tracking-wider">Eluru Facility</span>
      </div>
    </motion.div>
  )
}