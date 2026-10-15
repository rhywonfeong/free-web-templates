import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()
  
  const navItems = [
    { name: 'Foundry', path: '/' },
    { name: 'Engineering', path: '/engineering' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-[#1a1a1a] shadow-sm"
    >
      <Link to="/" className="flex flex-col">
        <span className="font-sans font-black tracking-tighter text-2xl uppercase leading-none text-white">BSP</span>
        <span className="font-mono text-[10px] text-[#FF4500] tracking-widest uppercase">Engineering Works</span>
      </Link>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className="group relative font-mono text-xs uppercase tracking-widest text-[#848884] hover:text-white transition-colors duration-300"
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#FF4500]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      <button className="md:hidden text-white hover:text-[#FF4500] transition-colors">
        <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
      </button>
    </motion.nav>
  )
}