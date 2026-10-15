import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/5 bg-[#050505]/80 backdrop-blur-xl pt-20 pb-10 px-6 mt-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        <div className="md:col-span-5 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer mb-6">
            <iconify-icon icon="solar:box-minimalistic-linear" width="32" height="32" class="text-white group-hover:text-indigo-300 transition-colors"></iconify-icon>
            <span className="font-medium text-2xl tracking-tight text-white">Aether</span>
          </Link>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8">
            Pioneering the future of spatial interfaces. We equip creators to scale digital ecosystems from local nodes to global networks with unparalleled aesthetic precision.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all">
              <iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
            </a>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
          <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-2">Platform</h4>
          <Link to="/explore" className="text-zinc-500 hover:text-white text-sm transition-colors w-max">Explore Grid</Link>
          <Link to="/nodes" className="text-zinc-500 hover:text-white text-sm transition-colors w-max">Node Network</Link>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">Architecture</span>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">Documentation</span>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-2">Company</h4>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">About Us</span>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">Careers</span>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">Blog</span>
          <span className="text-zinc-500 hover:text-white text-sm transition-colors w-max cursor-pointer">Contact</span>
        </div>

      </div>
      
      <div className="max-w-[1200px] mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Aether Spatial Networks. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}