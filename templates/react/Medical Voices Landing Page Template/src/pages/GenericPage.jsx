import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GenericPage({ title }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="flex-1 w-full flex flex-col justify-center items-center py-32 px-6 relative z-10 min-h-[70vh]">
      <div className="max-w-2xl text-center flex flex-col items-center">
        <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-gray-900 mb-8 rotate-45">
          <iconify-icon icon="solar:box-minimalistic-linear" width="24" height="24" className="-rotate-45"></iconify-icon>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-gray-500 mb-12 leading-relaxed max-w-md font-medium">
          Este componente estrutural está atualmente em desenvolvimento. O layout arquitetônico para esta rota será implantado em breve.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="16" height="16"></iconify-icon>
          Retornar ao Início
        </Link>
      </div>
    </main>
  );
}