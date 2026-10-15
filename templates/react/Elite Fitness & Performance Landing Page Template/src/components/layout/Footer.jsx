import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="flex flex-col col-span-1 lg:col-span-2">
            <span className="text-4xl font-black tracking-tightest leading-none mb-2 text-white">FORGEE</span>
            <span className="text-xs font-medium text-[#757575] uppercase tracking-wide-label mb-8">Beyond Limits Known™</span>
            <div className="flex gap-4 mt-auto">
              <a href="#" className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E8201A] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#E8201A] transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wide-label mb-4">Academia</h4>
            <a href="#estrutura" className="text-sm text-[#757575] hover:text-white transition-colors">Espaço</a>
            <a href="#programas" className="text-sm text-[#757575] hover:text-white transition-colors">Programas</a>
            <a href="#equipe" className="text-sm text-[#757575] hover:text-white transition-colors">Equipe</a>
            <a href="#planos" className="text-sm text-[#757575] hover:text-white transition-colors">Planos</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wide-label mb-4">Legal & Redes</h4>
            <Link to="#" className="text-sm text-[#757575] hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="#" className="text-sm text-[#757575] hover:text-white transition-colors">Termos de Uso</Link>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[#757575] uppercase tracking-wide-label">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;