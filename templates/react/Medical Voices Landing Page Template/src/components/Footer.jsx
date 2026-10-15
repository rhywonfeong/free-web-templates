import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-gray-200 bg-[#fbfbfb] relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4 outline-none group w-max">
              <div className="flex flex-col justify-center">
                <span className="text-base font-bold tracking-[0.2em] uppercase leading-none">
                  MEDICAL<span className="text-emerald-500 mx-1">·</span>VOICES
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed font-medium mt-2">
              "Medical Voices. Onde a conexão com o conhecimento médico real acontece."
              <br /><br />
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                Construída por quem pratica a medicina — Brasil, 2025
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 md:col-start-8 flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">Plataforma</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Visão</Link>
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Recursos</Link>
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-max outline-none focus-visible:text-gray-900">Exclusividade</Link>
              <Link to="/contact" className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors w-max outline-none focus-visible:text-emerald-700 font-medium">Quero fazer parte</Link>
            </div>
          </div>

          {/* Status & Copyright */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between h-full min-h-[120px]">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-4">Acesso</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                Early Access Ativo
              </div>
            </div>
            
            <div className="text-xs text-gray-400 tracking-widest uppercase mt-8 md:mt-0 font-medium">
              &copy; 2025 Medical Voices.<br/>Todos os direitos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}