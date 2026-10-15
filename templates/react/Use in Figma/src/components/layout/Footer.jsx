import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-subtle">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-24">
          
          <div className="md:col-span-2">
            <Link to="/" className="text-white font-display font-bold text-4xl tracking-tighter block mb-4">
              FORGEE
            </Link>
            <p className="text-[#6B6B6B] uppercase tracking-widest text-sm font-medium mb-8">
              BEYOND LIMITS KNOWN™
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-surface border border-subtle flex items-center justify-center text-white hover:border-[#E8400A] hover:text-[#E8400A] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="18" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-surface border border-subtle flex items-center justify-center text-white hover:border-[#E8400A] hover:text-[#E8400A] transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" width="18" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] font-bold mb-6">Academia</h4>
            <ul className="flex flex-col gap-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#B0B0B0] text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] font-bold mb-6">Legal & Redes</h4>
            <ul className="flex flex-col gap-4">
              {['Política de Privacidade', 'Termos de Uso'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#B0B0B0] text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="w-full h-px bg-[#2A2A2A] mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B6B6B] text-[11px] uppercase tracking-wider">
          <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
          <p>DESIGN SYSTEM © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;