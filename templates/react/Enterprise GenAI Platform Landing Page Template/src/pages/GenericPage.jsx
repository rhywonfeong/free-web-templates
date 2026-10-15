// A generic component to serve as a placeholder for the routing requirements
// ensuring the app is fully functional and navigable without breaking on missing pages.

import { Link } from 'react-router-dom';

export default function GenericPage({ title }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <iconify-icon icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Esta es una página de demostración para ilustrar el enrutamiento de la aplicación. 
          En un entorno de producción, aquí se implementaría el contenido completo de la sección "{title}".
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#4862ff] hover:text-[#364ce6] bg-blue-50 px-5 py-2.5 rounded-lg transition-colors"
        >
          <iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Volver al Inicio
        </Link>
      </div>
    </div>
  );
}