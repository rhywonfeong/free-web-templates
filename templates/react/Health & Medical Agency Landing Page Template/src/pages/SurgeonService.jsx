import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

export default function SurgeonService() {
  useSEO({
    title: "Marketing Chirurgien Plasticien | Roots Agency",
    description: "Marketing chirurgie esthétique en Belgique. Stratégies d'acquisition et création de sites web premiums pour chirurgiens.",
    canonical: "/services/chirurgien-plasticien"
  });

  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-20">
        
        {/* Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-8 text-[#c9a96e] font-syne font-bold tracking-widest text-sm uppercase">
                [ Expertise ]
              </div>
              <h1 className="font-syne font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-white mb-8">
                L'Autorité<br/>
                <span className="text-white/40">Digitale</span> du<br/>
                Chirurgien.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <Reveal delay={200}>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-10 border-l border-[#c9a96e] pl-6">
                La chirurgie esthétique est un secteur basé sur la confiance. Votre réputation en ligne précède chaque première consultation. Nous concevons l'écosystème digital qui reflète le prestige de votre pratique.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-white text-black font-syne font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
              >
                Planifier un audit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Large Image Block */}
        <Reveal>
          <div className="w-full h-[50vh] md:h-[70vh] relative mb-32 overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80" 
              alt="Medical Professional" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          </div>
        </Reveal>

        {/* Services List - Brutalist Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-syne font-bold text-3xl uppercase tracking-tighter sticky top-32">
                Le socle de votre <br/>
                <span className="text-[#c9a96e]">croissance</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  id: "01",
                  title: "Site Web Premium",
                  desc: "Un design épuré, pensé pour rassurer. Navigation fluide, intégration de galeries avant/après sécurisées et prise de rendez-vous en ligne."
                },
                {
                  id: "02",
                  title: "Acquisition & SEO",
                  desc: "Dominez les recherches pour « augmentation mammaire », « rhinoplastie » dans votre région. Nous captons la demande active via Google Ads avec un ROI mesurable."
                },
                {
                  id: "03",
                  title: "Conformité Légale",
                  desc: "Nous connaissons les limites de la publicité médicale. Nos stratégies privilégient l'information qualitative et objective, en accord total avec l'Ordre."
                }
              ].map((item, idx) => (
                <Reveal key={item.id} delay={idx * 100}>
                  <div className="py-12 group">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                      <span className="font-syne font-bold text-2xl text-white/20 group-hover:text-[#c9a96e] transition-colors">{item.id}</span>
                      <div>
                        <h3 className="font-syne font-bold text-3xl uppercase tracking-tighter text-white mb-4">{item.title}</h3>
                        <p className="text-white/60 font-light text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}