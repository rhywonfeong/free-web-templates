import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col lg:col-span-2">
            <Link to="/" className="flex flex-col w-fit mb-6">
              <span className="font-sans font-black tracking-tighter text-3xl uppercase leading-none text-white">BSP</span>
              <span className="font-mono text-[10px] text-[#FF4500] tracking-widest uppercase">Engineering Works</span>
            </Link>
            <p className="font-mono text-sm text-[#848884] max-w-sm mb-8 leading-relaxed">
              Industrial grade manufacturing, vintage restoration, and surgical precision tuning forged in Eluru.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#848884] hover:text-[#FF4500] hover:border-[#FF4500] transition-colors">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#848884] hover:text-[#FF4500] hover:border-[#FF4500] transition-colors">
                <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#848884] hover:text-[#FF4500] hover:border-[#FF4500] transition-colors">
                <iconify-icon icon="simple-icons:x"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="flex flex-col">
            <h4 className="font-sans font-bold tracking-tighter text-xl uppercase mb-6 text-white">Sectors</h4>
            <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-[#848884]">
              <Link to="/" className="hover:text-white transition-colors w-fit">Foundry Home</Link>
              <Link to="/engineering" className="hover:text-white transition-colors w-fit">Capabilities</Link>
              <Link to="/engineering" className="hover:text-white transition-colors w-fit">Tech Specs</Link>
              <Link to="/contact" className="hover:text-white transition-colors w-fit">Connect</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col">
            <h4 className="font-sans font-bold tracking-tighter text-xl uppercase mb-6 text-white">Headquarters</h4>
            <address className="not-italic flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-[#848884]">
              <p>West Godavari Hub</p>
              <p>Eluru, AP, India</p>
              <p className="mt-4 text-white hover:text-[#FF4500] transition-colors">
                <a href="mailto:chief.engineer@bspworks.com">chief.engineer@bspworks.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">
            © {currentYear} BSP Engineering Works. All rights reserved.
          </p>
          <div className="flex gap-6 font-mono text-[10px] text-[#848884] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}