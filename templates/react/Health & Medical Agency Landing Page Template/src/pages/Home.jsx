import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: "Agence digitale santé & chirurgiens plasticiens | Roots Agency",
    description: "Création de sites web premiums, branding et acquisition de patients pour chirurgiens plasticiens et cliniques privées en Belgique.",
    canonical: "/"
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse"></span>
              <span className="text-xs font-medium tracking-widest uppercase text-white/80">Agence Digitale Médicale</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="font-syne font-bold text-[12vw] leading-[0.85] tracking-tighter uppercase text-white mb-8">
              Digital<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Excellence.</span>
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
                  Nous concevons des écosystèmes digitaux sur-mesure pour les chirurgiens plasticiens et les cliniques privées. Design premium, acquisition ciblée et stricte conformité déontologique.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-4 text-white font-syne font-bold uppercase tracking-wider text-sm hover:text-[#c9a96e] transition-colors"
                >
                  <span className="bg-white group-hover:bg-[#c9a96e] text-black group-hover:text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform group-hover:scale-110">
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                  </span>
                  Démarrer un projet
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-10 border-y border-white/10 bg-[#0a0a0a] overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content items-center gap-16 px-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="font-syne font-bold text-4xl text-white/30 uppercase tracking-tighter">Web Design</span>
                <iconify-icon icon="solar:star-fall-bold" className="text-[#c9a96e] text-2xl"></iconify-icon>
                <span className="font-syne font-bold text-4xl text-white/30 uppercase tracking-tighter">Acquisition Patient</span>
                <iconify-icon icon="solar:star-fall-bold" className="text-[#c9a96e] text-2xl"></iconify-icon>
                <span className="font-syne font-bold text-4xl text-white/30 uppercase tracking-tighter">Branding</span>
                <iconify-icon icon="solar:star-fall-bold" className="text-[#c9a96e] text-2xl"></iconify-icon>
                <span className="font-syne font-bold text-4xl text-white/30 uppercase tracking-tighter">Automatisation</span>
                <iconify-icon icon="solar:star-fall-bold" className="text-[#c9a96e] text-2xl"></iconify-icon>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Section (Kota style big cards) */}
      <section id="services" className="py-32 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="font-syne font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-20">
              Nos <span className="text-white/40">Expertises</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="group relative overflow-hidden bg-[#0f0f0f] p-10 md:p-16 aspect-square md:aspect-auto md:h-[600px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80" 
                  alt="Medical Web Design" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="relative z-20">
                  <span className="font-syne font-bold text-[#c9a96e] tracking-widest uppercase text-sm">01 //</span>
                </div>
                <div className="relative z-20">
                  <h3 className="font-syne font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">Sites Web<br/>Premiums</h3>
                  <p className="text-white/70 font-light max-w-sm mb-8">Design sur-mesure et galeries avant/après sécurisées pour refléter le prestige de votre clinique.</p>
                  <Link to="/services/chirurgien-plasticien" className="inline-flex items-center gap-2 text-white font-medium uppercase text-sm tracking-wider hover:gap-4 transition-all">
                    Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="group relative overflow-hidden bg-[#0f0f0f] p-10 md:p-16 aspect-square md:aspect-auto md:h-[600px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
                  alt="Patient Acquisition" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
                />
                <div className="relative z-20">
                  <span className="font-syne font-bold text-[#c9a96e] tracking-widest uppercase text-sm">02 //</span>
                </div>
                <div className="relative z-20">
                  <h3 className="font-syne font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">Acquisition<br/>Ciblée</h3>
                  <p className="text-white/70 font-light max-w-sm mb-8">Google Ads et SEO local optimisés pour capter une patientèle qualifiée en stricte conformité médicale.</p>
                  <Link to="/services/clinique-medicale" className="inline-flex items-center gap-2 text-white font-medium uppercase text-sm tracking-wider hover:gap-4 transition-all">
                    Découvrir <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Difference Section (Brutalist dark) */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-syne font-bold text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-6">
                  L'Avantage<br/>Roots
                </h2>
                <p className="text-white/60 font-light text-lg">
                  Nous avons fait le choix radical de nous dédier exclusivement aux professionnels de la santé et de l'esthétique.
                </p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 space-y-12">
              {[
                { title: "Déontologie Maîtrisée", desc: "Fini les campagnes bloquées. Nous maîtrisons les règles de l'INAMI et de l'Ordre des médecins sur le bout des doigts." },
                { title: "Esthétique Pure", desc: "Le secteur médical exige de la rassurance. Nos designs épurés instaurent une confiance immédiate chez le patient." },
                { title: "Conversion Mesurée", desc: "Chaque action est trackée. Vous savez exactement combien vous coûte une nouvelle demande de consultation." }
              ].map((item, idx) => (
                <Reveal key={item.title} delay={idx * 100}>
                  <div className="group border-t border-white/10 pt-8">
                    <h3 className="font-syne font-bold text-2xl uppercase tracking-tighter mb-4 group-hover:text-[#c9a96e] transition-colors">{item.title}</h3>
                    <p className="text-white/60 font-light text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}