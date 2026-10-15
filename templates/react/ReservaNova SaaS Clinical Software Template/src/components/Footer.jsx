import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl border-t border-white/[0.05] mt-20 relative bg-[#06080a] skeuo-card z-10">
      <div className="px-8 py-12 flex flex-col md:flex-row justify-between items-center border-b border-white/[0.02]">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm">
            <iconify-icon icon="solar:calendar-date-bold-duotone" class="text-xl text-rose-500"></iconify-icon>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-wide uppercase leading-none">ReservaNova</span>
            <span className="text-[0.65rem] text-white/40 tracking-widest uppercase mt-0.5">Software Clínico</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm font-medium tracking-wide text-white/60">
          <Link to="/" className="text-rose-500">Inicio</Link>
          <Link to="/caracteristicas" className="hover:text-white transition-colors">Características</Link>
          <Link to="/precios" className="hover:text-white transition-colors">Precios</Link>
          <Link to="/recursos" className="hover:text-white transition-colors">Recursos</Link>
        </div>
      </div>

      <div className="px-8 py-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] text-white/40 tracking-widest uppercase">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <iconify-icon icon="simple-icons:instagram" class="text-lg hover:text-white cursor-pointer transition-colors"></iconify-icon>
          <iconify-icon icon="simple-icons:whatsapp" class="text-lg hover:text-white cursor-pointer transition-colors"></iconify-icon>
          <iconify-icon icon="simple-icons:linkedin" class="text-lg hover:text-white cursor-pointer transition-colors"></iconify-icon>
        </div>

        <div className="flex space-x-3 mb-4 md:mb-0">
          <div className="px-3 py-1.5 border border-white/10 rounded-sm flex items-center space-x-2 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
            <iconify-icon icon="solar:apple-linear" class="text-sm text-white"></iconify-icon>
            <span className="leading-none text-[0.5rem] text-white text-left">Descargar en la<br/><span className="text-[0.65rem] font-bold">App Store</span></span>
          </div>
          <div className="px-3 py-1.5 border border-white/10 rounded-sm flex items-center space-x-2 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors">
            <iconify-icon icon="solar:play-circle-linear" class="text-sm text-[#00a4ef]"></iconify-icon>
            <span className="leading-none text-[0.5rem] text-white text-left">Disponible en<br/><span className="text-[0.65rem] font-bold">Google Play</span></span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <a href="#" className="hover:text-white mb-1 transition-colors">Políticas de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos del Servicio</a>
        </div>
      </div>
    </footer>
  );
}