import React, { useState, useEffect } from 'react';

// --- DATA ---
const features = [
  { id: '01', icon: 'solar:test-tube-linear', title: 'Pureza de Grau Clínico', desc: 'Sintetizados em laboratórios com certificação ISO9001, garantindo pureza >99% em cada lote.' },
  { id: '02', icon: 'solar:thermometer-linear', title: 'Cadeia de Frio Intacta', desc: 'Enviados em embalagens térmicas com controle de temperatura para preservar a integridade peptídica.' },
  { id: '03', icon: 'solar:document-medicine-linear', title: 'Protocolos Validados', desc: 'Acesso a guias de dosagem detalhados baseados em literatura científica atualizada.' },
  { id: '04', icon: 'solar:shield-check-linear', title: 'Testes Independentes', desc: 'Certificados de Análise (COA) de terceiros disponíveis para todos os nossos produtos.' }
];

const categories = [
  { name: 'Emagrecimento', count: 42, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80' },
  { name: 'Antienvelhecimento', count: 38, img: 'https://images.unsplash.com/photo-1615397323146-5b91b9793132?w=800&q=80' },
  { name: 'Recuperação', count: 56, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
  { name: 'Saúde Cognitiva', count: 24, img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80' }
];

const products = [
  { name: 'Semaglutida 5mg', price: 'R$ 389', tags: ['Emagrecimento', 'Metabolismo'], popular: true, img: 'https://images.unsplash.com/photo-1584308666744-24d5e47a957c?w=800&q=80' },
  { name: 'GHK-Cu 50mg', price: 'R$ 245', tags: ['Pele', 'Cura'], popular: false, img: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&q=80' },
  { name: 'BPC-157 10mg', price: 'R$ 210', tags: ['Recuperação', 'Articulações'], popular: true, img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80' },
  { name: 'Tirzepatida 10mg', price: 'R$ 520', tags: ['Emagrecimento'], popular: false, img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80' }
];

const blogPosts = [
  { title: 'A Ciência por trás do GHK-Cu na Regeneração Celular', img: 'https://images.unsplash.com/photo-1532187863486-abf9db0977dc?w=800&q=80' },
  { title: 'Como armazenar seus peptídeos corretamente', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80' },
  { title: 'Protocolos de ciclagem para iniciantes', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80' }
];

const testimonials = [
  { name: 'Camila R.', loc: 'São Paulo, SP', text: 'Perfeito! Chegou gelado, a embalagem foi discreta e super profissional. Senti resultados na primeira semana.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80' },
  { name: 'Juliana M.', loc: 'Rio de Janeiro, RJ', text: 'Quarta compra. Sempre chega no prazo e o suporte clínico pelo WhatsApp tira todas as minhas dúvidas.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
  { name: 'Amanda T.', loc: 'Curitiba, PR', text: 'A qualidade é incomparável. Já testei outras marcas, mas a HerGlowLabs entrega o que promete. Pele renovada!', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80' }
];

const faqs = [
  { q: 'Os peptídeos precisam de refrigeração?', a: 'Sim. Peptídeos liofilizados (em pó) podem ficar em temperatura ambiente fora da luz por algumas semanas, mas recomendamos refrigeração (2-8°C) para armazenamento a longo prazo. Após reconstituídos com água bacteriostática, devem permanecer refrigerados.' },
  { q: 'Como é feito o envio?', a: 'Enviamos via Sedex com embalagens térmicas e gelox para garantir que a temperatura seja mantida durante o trânsito até sua casa.' },
  { q: 'Vocês fornecem o kit de reconstituição?', a: 'Sim, dependendo do plano ou produto selecionado, você pode adicionar o Kit Lab (água bacteriostática + seringas) diretamente na página do produto.' },
  { q: 'É seguro usar BPC-157?', a: 'O BPC-157 é amplamente estudado por suas propriedades regenerativas. Oferecemos protocolos detalhados e recomendamos acompanhamento com um profissional de saúde qualificado.' }
];

// --- COMPONENTS ---

// 1. Barra de Urgência
const UrgencyBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(48 * 3600 + 23 * 60 + 17); // 48:23:17

  useEffect(() => {
    if (sessionStorage.getItem('hideUrgencyBar')) setIsVisible(false);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible || timeLeft === 0) return null;

  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const closeBar = () => {
    setIsVisible(false);
    sessionStorage.setItem('hideUrgencyBar', 'true');
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#F59E0B] to-[#B45309] text-white flex items-center justify-center px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium animate-pulse-subtle shadow-md">
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center text-center">
        <span>🎉 Desconto Exclusivo: <strong>PRIMEIRA_COMPRA15</strong> — 15% OFF</span>
        <span className="opacity-90">⏰ Válido por: {hours}:{minutes}:{seconds}</span>
      </div>
      <button onClick={closeBar} className="absolute right-4 hover:opacity-70 transition-opacity" aria-label="Fechar">
        <iconify-icon icon="solar:close-square-linear" width="20"></iconify-icon>
      </button>
    </div>
  );
};

// 2. Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white border-b border-[#D1D9E0] ${isScrolled ? 'shadow-sm' : ''} mt-[40px] sm:mt-[44px]`}>
      <div className="max-w-[1400px] mx-auto px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#111827] font-semibold text-lg cursor-pointer">
          <iconify-icon icon="solar:test-tube-bold-duotone" width="24" className="text-[#06B6D4]"></iconify-icon>
          HerGlowLabs
        </div>

        <nav className="hidden md:flex gap-8 text-[#5A6470] text-sm">
          {['Conteúdos', 'FAQ', 'Planos', 'Loja'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#111827] transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#06B6D4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3 text-[#5A6470]">
            <button className="hover:text-[#06B6D4] transition-colors"><iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon></button>
            <button className="hover:text-[#06B6D4] transition-colors"><iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon></button>
          </div>
          <button className="hidden sm:block bg-[#06B6D4] hover:bg-[#0E7490] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-[0_4px_8px_rgba(0,0,0,0.12)] hover:shadow-lg">
            Começar Agora
          </button>
          <button className="md:hidden text-[#111827]" onClick={() => setMobileMenu(!mobileMenu)}>
            <iconify-icon icon={mobileMenu ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="24"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#D1D9E0] p-4 flex flex-col gap-4 md:hidden shadow-lg animate-slideDown">
          {['Conteúdos', 'FAQ', 'Planos', 'Loja'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[#5A6470] text-sm font-medium py-2 border-b border-[#EDF1F5]" onClick={() => setMobileMenu(false)}>
              {item}
            </a>
          ))}
          <button className="bg-[#06B6D4] text-white px-6 py-3 rounded-md text-sm font-semibold w-full mt-2">
            Começar Agora
          </button>
        </div>
      )}
    </header>
  );
};

// 3. Hero Section
const Hero = () => (
  <section className="relative bg-[#FFFFFF] overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#06B6D4]/10 to-transparent pointer-events-none rounded-bl-full opacity-60"></div>
    <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="flex flex-col gap-6">
        <span className="text-[#06B6D4] text-[11px] font-medium tracking-[0.05em] uppercase">Australian Peptide Lab · Est. 2021</span>
        <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-semibold text-[#111827] leading-[1.1] tracking-tight">
          REVELE SEU <br className="hidden sm:block"/> BRILHO RADIANTE
        </h1>
        <p className="text-lg text-[#5A6470] max-w-[520px] leading-relaxed">
          Peptídeos de grau de pesquisa, formulados com precisão clínica e pureza. Aprovados por mais de 25.000 clientes para reparação celular, performance e beleza de dentro para fora.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-[#06B6D4] hover:bg-[#0E7490] text-white px-7 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-all shadow-[0_6px_12px_rgba(6,182,212,0.30)] hover:-translate-y-0.5">
            Comprar Agora
          </button>
          <button className="border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/5 hover:border-[#0E7490] px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide transition-all">
            Certificados →
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Laboratory vials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061222]/40 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

// 4. Social Proof
const SocialProof = () => (
  <section className="bg-white border-y border-[#D1D9E0]">
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
        <div className="flex-1">
          <div className="flex gap-4 mb-4">
            <span className="flex items-center gap-1 text-[#06B6D4] text-xs font-medium uppercase"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon> 4.7 Média</span>
            <span className="flex items-center gap-1 text-[#06B6D4] text-xs font-medium uppercase"><iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon> 977 Avaliações</span>
          </div>
          <h2 className="text-3xl font-semibold text-[#111827] tracking-tight">A Prova Social.</h2>
          <p className="text-[#5A6470] mt-2">Veja o que nossa comunidade está dizendo.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 flex-[2]">
          {testimonials.slice(0,2).map((t, i) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#D1D9E0] p-6 rounded-xl flex flex-col gap-3">
              <div className="flex gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, j) => <iconify-icon key={j} icon="solar:star-bold" width="14"></iconify-icon>)}
              </div>
              <p className="text-sm text-[#5A6470] italic">"{t.text}"</p>
              <div className="mt-auto pt-4 border-t border-[#D1D9E0] flex items-center justify-between">
                <div>
                  <span className="block text-sm font-semibold text-[#111827] uppercase">{t.name}</span>
                  <span className="flex items-center gap-1 text-[11px] text-[#10B981] mt-1"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> COMPRA VERIFICADA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 5. Diferenciais
const Features = () => (
  <section className="bg-[#F8FAFC] py-16 sm:py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl font-semibold text-[#111827] tracking-tight mb-2">Não somos uma marca de beleza. <br/>Somos um laboratório.</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <div key={f.id} className="bg-white border border-[#D1D9E0] p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4]">
                <iconify-icon icon={f.icon} width="24"></iconify-icon>
              </div>
              <span className="text-3xl font-light text-[#06B6D4] opacity-40">{f.id}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#111827] mb-2">{f.title}</h3>
            <p className="text-sm text-[#5A6470] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 6. Preview Categorias
const Categories = () => (
  <section className="py-16 sm:py-20 bg-white" id="conteúdos">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-semibold text-[#111827] tracking-tight">Explore por Objetivo</h2>
        <a href="#" className="text-sm font-semibold text-[#06B6D4] hover:text-[#0E7490] hover:underline flex items-center gap-1 transition-colors">
          Ver Todas <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <div key={i} className="group relative h-[240px] rounded-xl overflow-hidden cursor-pointer">
            <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-white text-[22px] font-semibold tracking-tight">{c.name}</h3>
              <p className="text-white/80 text-sm mt-1">{c.count} Protocolos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 7. Peptídeos em Destaque
const FeaturedProducts = () => (
  <section className="py-16 sm:py-20 bg-white border-t border-[#D1D9E0]" id="loja">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-[#06B6D4] text-xs font-medium uppercase tracking-wide">Backed by Science</span>
          <h2 className="text-3xl font-semibold text-[#111827] tracking-tight mt-1">Os Mais Pedidos</h2>
        </div>
        <a href="#" className="text-sm font-semibold text-[#06B6D4] hover:text-[#0E7490] hover:underline flex items-center gap-1 transition-colors">
          Loja Completa <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
        </a>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="group flex flex-col">
            <div className="relative bg-[#F8FAFC] rounded-t-xl overflow-hidden aspect-[4/5] mb-4">
              {p.popular && (
                <div className="absolute top-3 left-3 bg-[#F59E0B] text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded shadow-sm z-10">
                  Mais Popular
                </div>
              )}
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex gap-2 mb-3 flex-wrap">
              {p.tags.map(tag => (
                <span key={tag} className="bg-[#EDF1F5] text-[#5A6470] text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mb-4 mt-auto">
              <h3 className="text-base font-semibold text-[#111827]">{p.name}</h3>
              <span className="text-base font-semibold text-[#111827]">{p.price}</span>
            </div>
            <button className="w-full bg-[#EDF1F5] text-[#111827] border border-[#D1D9E0] py-2.5 rounded-md text-sm font-semibold hover:border-[#94A3B0] transition-colors">
              Selecionar Opções
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 8. Freemium Protocol
const Freemium = () => (
  <section className="py-16 sm:py-24 bg-[#EDF1F5]">
    <div className="max-w-[900px] mx-auto px-6 text-center">
      <span className="text-[#06B6D4] text-[12px] font-medium uppercase tracking-[0.05em] block mb-2">Sem Necessidade de Login</span>
      <h2 className="text-3xl font-semibold text-[#111827] tracking-tight mb-10">Acesse Nossa Biblioteca Educacional</h2>
      
      <div className="bg-white border border-[#D1D9E0] p-8 sm:p-12 rounded-xl text-left shadow-sm">
        <span className="text-[#5A6470] text-sm uppercase tracking-wider block mb-1">Cura & Articulações</span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#111827] mb-4 tracking-tight">Protocolo BPC-157</h3>
        <p className="text-[#5A6470] text-base leading-relaxed mb-8">
          O "Body Protection Compound-157" é um peptídeo derivado do suco gástrico humano. Nossa pesquisa compila dados sobre sua influência na angiogênese, reparação de tendões e saúde intestinal. Acesse o guia completo de dosagem, reconstituição e ciclos de forma gratuita.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-[#06B6D4] hover:bg-[#0E7490] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors flex-1 text-center justify-center flex items-center gap-2">
            Ler Protocolo Completo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </button>
          <button className="bg-white border-2 border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4]/5 px-6 py-3 rounded-md text-sm font-semibold transition-colors flex-1 text-center">
            Desbloquear Área VIP
          </button>
        </div>
        
        <div className="pt-6 border-t border-[#EDF1F5] flex flex-wrap items-center gap-3">
          <span className="text-[#5A6470] text-sm">Ou veja amostras de:</span>
          {['GHK-Cu', 'CJC-1295', 'TB-500'].map(tag => (
            <button key={tag} className="border border-[#D1D9E0] text-[#111827] text-xs px-3 py-1.5 rounded-full hover:border-[#06B6D4] transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 9. Blog
const Blog = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-semibold text-[#111827] tracking-tight">Educação e Ciência</h2>
        <a href="#" className="text-sm font-semibold text-[#06B6D4] hover:text-[#0E7490] hover:underline transition-colors hidden sm:block">
          Ver Todos Artigos →
        </a>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <div key={i} className="group border border-[#D1D9E0] rounded-xl overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="h-[180px] overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-[#111827] mb-4 line-clamp-2 leading-snug">{post.title}</h3>
              <a href="#" className="text-[#06B6D4] text-sm font-semibold hover:text-[#0E7490] hover:underline flex items-center gap-1 w-fit">
                Ler Artigo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 10. Depoimentos Grid
const TestimonialGrid = () => (
  <section className="py-16 sm:py-20 bg-[#F8FAFC]">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-semibold text-[#111827] tracking-tight mb-10 text-center">Histórias Reais. Resultados Reais.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border border-[#D1D9E0] p-6 rounded-xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-semibold text-[#111827]">{t.name}</h4>
                <span className="text-xs text-[#94A3B0]">{t.loc}</span>
              </div>
            </div>
            <p className="text-sm text-[#5A6470] italic leading-relaxed flex-1">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 11. Planos Pricing
const Pricing = () => (
  <section className="py-16 sm:py-24 bg-white" id="planos">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] tracking-tight mb-4">Escolha Seu Nível de Acesso</h2>
        <p className="text-[#5A6470] max-w-xl mx-auto">Acesso completo à biblioteca educacional, fóruns privados e descontos exclusivos na loja.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
        {/* Basic */}
        <div className="bg-[#F8FAFC] border border-[#D1D9E0] p-8 rounded-xl hover:-translate-y-1 transition-transform">
          <h3 className="text-lg font-semibold text-[#111827] mb-2 uppercase tracking-wide">Mensal</h3>
          <div className="text-3xl font-semibold text-[#06B6D4] mb-1">R$ 47</div>
          <span className="text-sm text-[#5A6470] block mb-6">cobrado mensalmente</span>
          <ul className="space-y-3 mb-8">
            {['Acesso a protocolos básicos', 'Suporte via email', 'Acesso à loja padrão'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#111827]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#10B981]"></iconify-icon> {item}
              </li>
            ))}
          </ul>
          <button className="w-full bg-white border border-[#D1D9E0] text-[#111827] py-2.5 rounded-md text-sm font-semibold hover:border-[#06B6D4] transition-colors">
            Assinar Mensal
          </button>
        </div>

        {/* Lifetime (Highlight) */}
        <div className="bg-[#F0FAFE] border-2 border-[#06B6D4] p-8 rounded-xl relative shadow-lg transform md:-translate-y-4">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#06B6D4] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            ★ Melhor Valor
          </div>
          <h3 className="text-lg font-semibold text-[#111827] mb-2 uppercase tracking-wide mt-2">Vitalício</h3>
          <div className="text-4xl font-semibold text-[#06B6D4] mb-1">R$ 297</div>
          <span className="text-sm text-[#5A6470] block mb-6">pagamento único</span>
          <ul className="space-y-3 mb-8">
            {['Acesso completo à base', 'Atualizações automáticas', 'Suporte VIP WhatsApp', 'Novos protocolos inclusos', '15% OFF eterno na loja'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#111827] font-medium">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#10B981]"></iconify-icon> {item}
              </li>
            ))}
          </ul>
          <button className="w-full bg-[#06B6D4] hover:bg-[#0E7490] text-white py-3 rounded-md text-sm font-semibold transition-all shadow-[0_4px_12px_rgba(6,182,212,0.25)]">
            Garantir Acesso Vitalício
          </button>
          <div className="mt-4 text-center">
             <span className="text-xs text-[#F59E0B] font-medium flex items-center justify-center gap-1">
               <iconify-icon icon="solar:alarm-linear"></iconify-icon> Aplique PRIMEIRA_COMPRA15 no checkout
             </span>
          </div>
        </div>

        {/* Semestral */}
        <div className="bg-[#F8FAFC] border border-[#D1D9E0] p-8 rounded-xl hover:-translate-y-1 transition-transform">
          <h3 className="text-lg font-semibold text-[#111827] mb-2 uppercase tracking-wide">Semestral</h3>
          <div className="text-3xl font-semibold text-[#06B6D4] mb-1">R$ 197</div>
          <span className="text-sm text-[#5A6470] block mb-6">cada 6 meses</span>
          <ul className="space-y-3 mb-8">
            {['Acesso completo à base', 'Suporte prioritário', 'Acesso à loja VIP'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[#111827]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#10B981]"></iconify-icon> {item}
              </li>
            ))}
          </ul>
          <button className="w-full bg-white border border-[#D1D9E0] text-[#111827] py-2.5 rounded-md text-sm font-semibold hover:border-[#06B6D4] transition-colors">
            Assinar Semestral
          </button>
        </div>
      </div>
    </div>
  </section>
);

// 12. FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC]" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#06B6D4] text-xs font-medium uppercase tracking-[0.05em]">Frequently Asked Questions</span>
          <h2 className="text-3xl font-semibold text-[#111827] tracking-tight mt-2">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-lg transition-colors cursor-pointer ${isOpen ? 'border-[#06B6D4] bg-white' : 'border-[#D1D9E0] bg-white hover:bg-[#EDF1F5]'}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <div className="p-4 sm:p-5 flex justify-between items-center gap-4">
                  <h4 className="text-sm sm:text-base font-semibold text-[#111827]">{faq.q}</h4>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`text-[#5A6470] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#06B6D4]' : ''}`}
                    width="20"
                  ></iconify-icon>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-5 ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-[#5A6470] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 13. Final CTA
const FinalCTA = () => (
  <section className="bg-gradient-to-r from-[#06B6D4] to-[#0E7490] py-16 sm:py-24">
    <div className="max-w-[1200px] mx-auto px-6 text-center text-white">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Ainda tem dúvidas? Estamos aqui para você.</h2>
      <p className="text-white/90 text-base max-w-[480px] mx-auto mb-8">Nossa equipe de especialistas clínicos está pronta para ajudar você a montar o protocolo ideal para seus objetivos.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#06B6D4] px-8 py-3 rounded-md text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
          Falar com Especialista <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
        </button>
        <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-md text-sm font-semibold transition-colors">
          Ir para a Loja
        </button>
      </div>
    </div>
  </section>
);

// 14. Footer
const Footer = () => (
  <footer className="bg-[#061222] pt-16 pb-8 border-t border-[#132640]">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-semibold text-xl">
            <iconify-icon icon="solar:test-tube-bold-duotone" width="28" className="text-[#06B6D4]"></iconify-icon>
            HerGlowLabs
          </div>
          <p className="text-[#94A3B0] text-xs leading-relaxed max-w-[250px]">
            Peptídeos de pesquisa com precisão clínica. Focados em qualidade, pureza e educação para o empoderamento feminino.
          </p>
          <div className="flex gap-3 text-[#94A3B0] mt-2">
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:tiktok" width="20"></iconify-icon></a>
            <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon></a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-[0.05em] mb-4">Loja Rápida</h4>
          <ul className="flex flex-col gap-2.5">
            {['Todos os Peptídeos', 'Kits de Iniciação', 'Acessórios Lab', 'Mais Vendidos'].map(link => (
              <li key={link}><a href="#" className="text-[#94A3B0] text-[13px] hover:text-white hover:underline transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-[0.05em] mb-4">Educação</h4>
          <ul className="flex flex-col gap-2.5">
            {['Biblioteca de Protocolos', 'Base de Conhecimento', 'Certificados de Análise (COA)', 'Blog Médico'].map(link => (
              <li key={link}><a href="#" className="text-[#94A3B0] text-[13px] hover:text-white hover:underline transition-all">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-[0.05em] mb-4">Precisa de Ajuda?</h4>
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2 text-[#94A3B0] text-[13px]">
              <iconify-icon icon="solar:letter-linear"></iconify-icon> support@herglowlabs.com
            </li>
            <li className="flex items-center gap-2 text-[#94A3B0] text-[13px]">
              <iconify-icon icon="solar:phone-linear"></iconify-icon> Seg-Sex, 9h às 18h (BRT)
            </li>
          </ul>
          <button className="mt-4 w-full border border-[#132640] text-[#94A3B0] py-2 rounded-md text-xs font-medium hover:bg-[#0B1C30] hover:text-white transition-colors flex items-center justify-center gap-2">
            <iconify-icon icon="simple-icons:whatsapp"></iconify-icon> Chamar no WhatsApp
          </button>
        </div>

      </div>

      <div className="border-t border-[#132640] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#94A3B0] text-[11px]">© {new Date().getFullYear()} HerGlowLabs. Todos os direitos reservados. "Research Purporse Only".</p>
        <div className="flex gap-4">
          {['Termos de Serviço', 'Política de Privacidade', 'Política de Reembolso'].map(link => (
            <a key={link} href="#" className="text-[#94A3B0] text-[11px] hover:text-[#06B6D4] transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <UrgencyBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <Categories />
        <FeaturedProducts />
        <Freemium />
        <Blog />
        <TestimonialGrid />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}