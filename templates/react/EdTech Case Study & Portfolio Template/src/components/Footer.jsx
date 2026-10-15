export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2E2E2E] pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl tracking-tight font-medium text-[#F0F0F0] max-w-3xl leading-tight">
            Design que transforma <span className="font-accent-italic text-[#C9A84C]">negócios</span> em experiências inesquecíveis.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-[#2E2E2E] pt-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:slash-circle-linear" style={{ fontSize: '24px' }}></iconify-icon>
              <span className="text-lg font-medium text-[#F0F0F0]">Mythika.</span>
            </div>
            <p className="text-[#8A8A8A] text-sm max-w-xs">
              Estúdio de design digital focado em criar produtos excepcionais para marcas ambiciosas.
            </p>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#666666] mb-6">Contato</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#F0F0F0]">
              <li><a href="#" className="hover:text-[#C9A84C] transition-colors">hello@mythika.com</a></li>
              <li><a href="#" className="hover:text-[#C9A84C] transition-colors">+55 11 99999-9999</a></li>
              <li className="text-[#8A8A8A] mt-2">São Paulo, BR</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#666666] mb-6">Social</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#F0F0F0]">
              <li><a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-2">Instagram <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
              <li><a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-2">LinkedIn <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
              <li><a href="#" className="hover:text-[#C9A84C] transition-colors flex items-center gap-2">Behance <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 text-[10px] text-[#666666] uppercase tracking-widest">
          <p>© 2026 Mythika Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#8A8A8A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8A8A8A] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}