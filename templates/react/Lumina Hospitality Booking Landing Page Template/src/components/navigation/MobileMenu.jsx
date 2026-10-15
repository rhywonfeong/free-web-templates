import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronRight } from 'lucide-react'

export default function MobileMenu({ isOpen, onClose, links }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a] text-white flex flex-col pt-20 px-6 pb-8 animate-in fade-in duration-200">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close menu"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="flex flex-col gap-6 mt-8">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={onClose}
            className="flex items-center justify-between font-jakarta font-medium text-2xl py-2 border-b border-white/10"
          >
            {link.label}
            <ChevronRight className="w-6 h-6 opacity-40" />
          </Link>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <Link 
          to="/signin"
          onClick={onClose}
          className="w-full text-center bg-white/10 rounded-[8px] px-5 py-4 font-dm font-semibold text-[16px] hover:bg-white/20 transition-colors"
        >
          Sign In
        </Link>
        <Link 
          to="/start"
          onClick={onClose}
          className="w-full text-center bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-[8px] px-5 py-4 font-dm font-semibold text-[16px] shadow-lg transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}