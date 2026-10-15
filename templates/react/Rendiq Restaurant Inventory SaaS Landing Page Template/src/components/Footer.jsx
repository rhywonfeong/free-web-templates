import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-0 pt-24 pb-8">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 border-b border-neutral-800 pb-20">
          
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="font-display text-3xl tracking-wide uppercase mb-2">RENDIQ</div>
              <p className="text-xs font-bold text-neutral-500 tracking-widest uppercase">RENDIMENTO + QUANTIDADE™</p>
            </div>
            <div className="mt-8 text-sm text-neutral-400 space-y-2">
              <p>contato@rendiq.com.br</p>
              <p>@rendiq</p>
              <p>WhatsApp: (19) 99999-0000</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-0 mb-6 uppercase tracking-wider">Produto</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-0 mb-6 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-neutral-0 mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">LGPD</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-medium">
          <p>RENDIQ TECNOLOGIA LTDA. · CNPJ 00.000.000/0001-00</p>
          <p>© 2024–2026</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer