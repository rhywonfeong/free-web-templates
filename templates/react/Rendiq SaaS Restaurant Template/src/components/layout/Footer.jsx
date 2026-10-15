const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-[#FCFBFC] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <span className="text-2xl font-semibold tracking-tight text-[#CEFE00]">RENDIQ</span>
            <p className="text-xs text-[#B8B7B8] font-medium tracking-wide">
              RENDIMENTO + QUANTIDADE™
            </p>
            <p className="text-sm text-[#E2E1E2] italic mt-2">
              "Inteligência que não sobra."
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#8A898A] hover:text-[#CEFE00] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-[#8A898A] hover:text-[#CEFE00] transition-colors">
                <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#8A898A] mb-2 uppercase tracking-wider">Produto</h4>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Funcionalidades</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Planos</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Roadmap</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#8A898A] mb-2 uppercase tracking-wider">Empresa</h4>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Sobre</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Contato</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#8A898A] mb-2 uppercase tracking-wider">Legal</h4>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Política de Privacidade</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">Termos de Uso</a>
            <a href="#" className="text-sm text-[#FCFBFC] hover:text-[#CEFE00] transition-colors">LGPD</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3D3C3D] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#8A898A] flex flex-col md:flex-row items-center gap-2">
            <span>contato@rendiq.com.br</span>
            <span className="hidden md:inline">•</span>
            <span>WhatsApp: (19) 99999-0000</span>
          </div>
          <div className="text-xs text-[#8A898A] text-center md:text-right">
            RENDIQ TECNOLOGIA LTDA. · CNPJ 00.000.000/0001-00 · © 2024–2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;