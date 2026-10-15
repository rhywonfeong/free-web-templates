import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#030308] pt-20 pb-10 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold tracking-tighter">
                A
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">Astravia</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Combinamos diseño, tecnología y estrategia para crear experiencias digitales que convierten visitas en clientes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Navegación</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#diferencial" className="hover:text-white transition-colors">Diferencial</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:linkedin" /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:instagram" /> Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:x" /> Twitter / X</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Astravia Agency. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}