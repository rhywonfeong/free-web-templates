import React, { useEffect, useState } from 'react';
import UnicornScene from 'unicornstudio-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    goal: '',
    details: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileMenu = (e) => {
    e.preventDefault();
    alert('Menu móvel clicado');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Solicitação enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', budget: '', goal: '', details: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="h-full w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0">
        <div className="absolute w-full h-full left-0 top-0 -z-10" style={{ filter: 'hue-rotate(90deg)' }}>
          <UnicornScene projectId="vTTCp5g4cVl9nwjlT56Z" />
        </div>
      </div>

      <div id="landing-view" className="h-full overflow-y-auto w-full transition-opacity duration-500">
        <header className="relative overflow-hidden">
          <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
            <nav className="flex mt-6 items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/57de746f-614d-4356-817c-c18322fede6b/672619f8-086f-4bba-92f2-7d7549d4816b-Kynera-K3.png?v=1777967472963" alt="Kynera" className="w-auto h-12 object-contain" />
              </a>
              <div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
                <a href="#manifesto" className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3">Filosofia</a>
                <a href="#ecosystem" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Ecossistema</a>
                <a href="#pricing" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Investimento</a>
                <div className="relative inline-block group text-xs rounded-full">
                  <a href="#application" className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex">
                    <span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Inscreva-se Agora</span>
                  </a>
                </div>
              </div>
              <button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle" onClick={handleMobileMenu}>
                <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" class="h-5 w-5"></iconify-icon>
                Menu
              </button>
            </nav>
            <section className="z-10 sm:pt-20 md:pt-40 md:pb-24 text-center w-full pt-20 pb-32 relative">
              <h1 className="display-xl reveal active hover-trigger tracking-tight filled font-geist font-bold text-white leading-[0.85] text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] opacity-0 mx-auto block w-full">INNERFLOW</h1>
            </section>
          </div>
        </header>

        <section className="border-y border-white/5 pt-24 pb-24 relative" id="manifesto">
          <div className="sm:px-6 lg:px-8 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-xs font-semibold tracking-wider text-blue-500 uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">O Manifesto</h2>
            <h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">A Dura Verdade: <br/>O Seu Site Está Perdendo Dinheiro.</h3>
            
            <div className="sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] bg-neutral-900/50 border-white/10 border rounded-2xl mt-10 pt-8 pr-8 pb-8 pl-8 relative">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Nike Air Max Campaign", name: "Maria Santos", role: "Creative Director", img: "https://images.unsplash.com/photo-1560918801-53fe5c710a80?w=1080&q=80", bg: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" },
                  { title: "Stripe Rebrand", name: "Sarah Chen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1080&q=80", bg: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" },
                  { title: "Vercel Ship", name: "David Park", role: "Creative Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80", bg: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" }
                ].map((card, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-2xl lg:rounded-3xl group bg-cover bg-center shadow-xl w-full min-h-[350px]" style={{ backgroundImage: `url('${card.bg}')` }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
                    <div className="z-10 flex flex-col p-6 h-full relative justify-between text-left">
                      <h3 className="text-2xl font-normal text-white tracking-tight">{card.title}</h3>
                      <div className="mt-4 flex items-center gap-3">
                        <img src={card.img} alt={card.name} className="w-8 h-8 object-cover rounded-full" />
                        <div className="text-xs text-white/90">
                          <div>{card.name}</div>
                          <div className="text-white/60">{card.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}