import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl font-black text-white mb-2">FORGEE</h2>
            <p className="text-xs tracking-[0.2em] uppercase text-[#636363] mb-8">
              B E Y O N D &nbsp; L I M I T S &nbsp; K N O W N ™
            </p>
            <p className="text-[#737069] text-sm max-w-sm">
              Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Academia</h4>
            <ul className="flex flex-col gap-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#D9D9D9] hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Legal & Redes</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-white text-sm transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-[#D9D9D9] hover:text-white text-sm transition-colors">Termos de Uso</a>
              </li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="text-[#636363] hover:text-white text-2xl transition-colors">
                  <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                </a>
                <a href="#" className="text-[#636363] hover:text-white text-2xl transition-colors">
                  <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Base */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#636363] text-xs tracking-widest uppercase text-center md:text-left">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
          </p>
          <p className="text-[#636363] text-xs tracking-widest uppercase">
            DESIGN SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;