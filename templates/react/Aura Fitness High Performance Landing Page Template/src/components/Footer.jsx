export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <iconify-icon icon="solar:flame-bold" class="text-[#FF5500] text-3xl"></iconify-icon>
              <span className="font-display text-3xl tracking-wider text-white">AURA</span>
            </a>
            <p className="text-[#888888] text-sm leading-relaxed mb-6">
              Onde método encontra disciplina. Academia de alta performance para quem leva resultado a sério.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#888888] hover:text-[#FF5500] transition-colors text-xl">
                <iconify-icon icon="simple-icons:instagram"></iconify-icon>
              </a>
              <a href="#" className="text-[#888888] hover:text-[#FF5500] transition-colors text-xl">
                <iconify-icon icon="simple-icons:youtube"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#quem-somos" className="text-[#888888] hover:text-white transition-colors text-sm">Quem Somos</a></li>
              <li><a href="#estrutura" className="text-[#888888] hover:text-white transition-colors text-sm">Estrutura</a></li>
              <li><a href="#protocolo" className="text-[#888888] hover:text-white transition-colors text-sm">Protocolo</a></li>
              <li><a href="#planos" className="text-[#888888] hover:text-white transition-colors text-sm">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Suporte</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#faq" className="text-[#888888] hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-[#888888] hover:text-white transition-colors text-sm">Privacidade</a></li>
              <li><a href="#contato" className="text-[#888888] hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Visite-nos</h4>
            <p className="text-[#888888] text-sm mb-2">Av. Paulista, 1.240 — Bela Vista</p>
            <p className="text-[#888888] text-sm mb-4">São Paulo — SP</p>
            <p className="text-[#888888] text-sm mb-1">(11) 9 0000-0000</p>
            <p className="text-[#888888] text-sm">contato@aurafitness.com.br</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-xs">
            © {new Date().getFullYear()} Aura Fitness. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-[#555555] text-xs">
            Feito com <iconify-icon icon="solar:heart-bold" class="text-[#FF5500]"></iconify-icon> para alta performance
          </div>
        </div>
      </div>
    </footer>
  );
}