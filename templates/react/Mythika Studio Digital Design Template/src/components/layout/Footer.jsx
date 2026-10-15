import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2E2E2E] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-4">
            "Design com intenção.<br/>Presença com propósito."
          </h2>
          <div className="w-20 h-[2px] bg-[#9333EA] mx-auto mb-6"></div>
          <p className="text-xs uppercase tracking-[0.12em] text-[#666666]">
            MYTHIKA STUDIO <br/> Design com intenção. Presença com propósito. ™
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">MYTHIKA<br/><span className="text-[#8A8A8A] font-normal">Studio</span></h3>
            <p className="text-sm text-[#8A8A8A] mb-6">
              Design com intenção.<br/>Presença com propósito.
            </p>
            <a href="mailto:contato@mythikastudio.com" className="text-sm text-white hover:text-[#9333EA] transition-colors block mb-2">
              contato@mythikastudio.com
            </a>
            <div className="flex gap-4 mt-4 text-[#8A8A8A]">
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:whatsapp" class="text-xl"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre', 'Serviços', 'Método LÚMEN', 'Portfólio', 'Para Quem', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-[#8A8A8A] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Sites e Landing Pages</a></li>
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">UX/UI e Produto Digital</a></li>
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Para Agências e Empresas</a></li>
              <li><a href="#contato" className="text-sm text-[#9333EA] hover:text-white transition-colors mt-2 block">Falar com a Mythika →</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Redes Sociais</h4>
            <p className="text-sm text-white mb-4">@mythikastudio</p>
            <ul className="space-y-4 flex flex-col">
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram</a></li>
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:linkedin"></iconify-icon> LinkedIn</a></li>
              <li><a href="#" className="text-sm text-[#8A8A8A] hover:text-white transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:behance"></iconify-icon> Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2E2E2E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666666]">© 2026 Mythika Studio · Todos os direitos reservados</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#666666] hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-[#666666] hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;