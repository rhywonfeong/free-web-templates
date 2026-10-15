import { motion } from 'framer-motion'

export default function FloatingCTA() {
  return (
    <motion.a
      href="#connect"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-8 right-6 z-40 flex items-center justify-center w-12 h-12 bg-white text-[#0D0D0D] rounded-full copper-glow cursor-pointer"
    >
      <iconify-icon icon="simple-icons:whatsapp" width="24" height="24"></iconify-icon>
    </motion.a>
  )
}