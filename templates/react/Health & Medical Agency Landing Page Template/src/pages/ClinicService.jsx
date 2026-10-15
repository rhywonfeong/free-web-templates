import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useSEO } from '../hooks/useSEO';

export default function ClinicService() {
  useSEO({
    title: "Marketing Digital Cliniques & Centres Médicaux | Roots Agency",
    description: "Architecture digitale, SEO multi-praticiens et flux d'accueil numériques pour cliniques privées en Belgique.",
    canonical: "/services/clinique-medicale"
  });

  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-20">
        
        {/* Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-8 text-[#c9a96e] font-syne font-bold tracking-widest text-sm uppercase">
                [ Infrastructure ]
              </div>
              <h1 className="font-syne font-bold text-5xl md:text-[5.5rem] uppercase tracking-tighter leading-[0.85] text-white mb-8">
                Scalez<br/>
                Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">Clinique.</span>
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <Reveal delay={200}>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                La gestion d'un centre multidisciplinaire exige une présence en ligne robuste. Nous centralisons votre image, développons l'acquisition par spécialité et optimisons vos flux de réservation.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 text-white font-syne font-bold uppercase tracking-wider text-sm hover:text-[#c9a96e] transition-colors"
              >
                <span className="border border-white/20 group-hover:border-[#c9a96e] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300">
                  <iconify-icon icon="solar:buildings-bold" width="20"></iconify-icon>
                </span>
                Auditer ma clinique
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-32">
          <Reveal>
            <div className="bg-[#050505] p-12 md:p-20 h-full">
              <iconify-icon icon="solar:folder-with-files-bold" className="text-4xl text-[#c9a96e] mb-8"></iconify-icon>
              <h3 className="font-syne font-bold text-3xl uppercase tracking-tighter mb-4">Architecture<br/>Multi-Praticiens</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Développement de portails capables de gérer des dizaines de profils médecins, couplés à des agendas de réservation distincts sans sacrifier l'expérience utilisateur.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-[#050505] p-12 md:p-20 h-full">
              <iconify-icon icon="solar:map-point-search-bold" className="text-4xl text-[#c9a96e] mb-8"></iconify-icon>
              <h3 className="font-syne font-bold text-3xl uppercase tracking-tighter mb-4">Domination<br/>SEO Locale</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Optimisation chirurgicale des fiches Google Business pour chaque spécialité de votre établissement, afin d'écraser la concurrence de proximité.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Full Bleed Image Block */}
        <Reveal>
          <div className="w-full h-[60vh] relative group overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80" 
              alt="Modern Clinic Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply"></div>
            <div className="absolute bottom-10 left-10 right-10 md:bottom-20 md:left-20 max-w-2xl">
              <h2 className="font-syne font-bold text-4xl md:text-5xl uppercase tracking-tighter text-white mb-4">L'accueil numérique parfait</h2>
              <p className="text-white/80 font-light text-lg">De la recherche Google à la porte du cabinet, nous concevons un parcours patient sans friction.</p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}