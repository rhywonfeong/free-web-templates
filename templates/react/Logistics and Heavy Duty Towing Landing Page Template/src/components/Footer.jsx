import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-24 pb-12 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 font-heading text-[20vw] leading-none text-white/5 pointer-events-none select-none overflow-hidden h-full flex items-end">
        TITAN
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 bg-[#FF3C00] clip-corner">
                <iconify-icon icon="solar:routing-2-bold" class="text-[#050505] text-2xl"></iconify-icon>
              </div>
              <span className="font-heading text-3xl font-bold tracking-tight text-white uppercase leading-none">
                TITAN<span className="text-[#FF3C00]">RECOVERY</span>
              </span>
            </Link>
            <p className="font-mono text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
              Elite heavy-duty recovery, rotator transport, and commercial collision repair for USA trucking fleets across the Southeastern logistics corridors.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 border border-[#2A2A2A] bg-[#0A0A0A] flex items-center justify-center text-gray-400 hover:border-[#FF3C00] hover:text-[#FF3C00] transition-all clip-corner">
                  <iconify-icon icon="simple-icons:facebook" class="text-xl"></iconify-icon>
               </a>
               <a href="#" className="w-12 h-12 border border-[#2A2A2A] bg-[#0A0A0A] flex items-center justify-center text-gray-400 hover:border-[#FF3C00] hover:text-[#FF3C00] transition-all clip-corner">
                  <iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon>
               </a>
               <a href="#" className="w-12 h-12 border border-[#2A2A2A] bg-[#0A0A0A] flex items-center justify-center text-gray-400 hover:border-[#FF3C00] hover:text-[#FF3C00] transition-all clip-corner">
                  <iconify-icon icon="simple-icons:linkedin" class="text-xl"></iconify-icon>
               </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-6">Capabilities</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Heavy Towing</Link></li>
              <li><Link to="/services" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Storage Yard</Link></li>
              <li><Link to="/services" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Mobile Rescue</Link></li>
              <li><Link to="/services" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Body Repair</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-6">Network</h3>
            <ul className="space-y-4">
              <li><Link to="/coverage" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Florida & GA</Link></li>
              <li><Link to="/coverage" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Carolinas</Link></li>
              <li><Link to="/coverage" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Gulf Coast</Link></li>
              <li><Link to="/coverage" className="font-heading text-lg text-gray-300 hover:text-[#FF3C00] uppercase tracking-wider transition-colors">Terminal Map</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-6">Command Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300">
                <div className="w-8 h-8 shrink-0 border border-[#333] flex items-center justify-center text-[#FF3C00]">
                  <iconify-icon icon="solar:phone-bold"></iconify-icon>
                </div>
                <span className="font-heading text-xl tracking-wider">(954) 758-9694</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <div className="w-8 h-8 shrink-0 border border-[#333] flex items-center justify-center text-[#FF3C00]">
                  <iconify-icon icon="solar:letter-bold"></iconify-icon>
                </div>
                <span className="font-heading text-lg lg:text-xl tracking-wider break-all sm:break-normal">dispatch@titanrecoveryllc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-gray-600 tracking-wider">
            &copy; {new Date().getFullYear()} TITAN HEAVY RECOVERY USA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 font-mono text-xs text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}