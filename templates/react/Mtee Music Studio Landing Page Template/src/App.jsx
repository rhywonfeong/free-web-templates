import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Calendar,
  ChevronRight,
  Menu,
  Mic,
  PlayCircle,
  Plus,
  Star,
  X,
} from "lucide-react";

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005.76 20.9a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.45a4.85 4.85 0 01-1.8-.85z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { name: "TikTok", href: "https://www.tiktok.com/@mteestudios", Icon: TikTokIcon },
  { name: "Instagram", href: "https://www.instagram.com/mtee_studios/", Icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100092259409391", Icon: FacebookIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/mtee-studios", Icon: LinkedInIcon },
];

function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#4285F4" d="M23.52 12.273c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.011h3.878c2.269-2.089 3.578-5.165 3.578-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.956-1.075 7.942-2.907l-3.878-3.011c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.771-2.111-6.715-4.948H1.276v3.11A11.995 11.995 0 0012 24z" />
      <path fill="#FBBC05" d="M5.285 14.279A7.213 7.213 0 014.909 12c0-.791.136-1.56.376-2.279V6.611H1.276A11.995 11.995 0 000 12c0 1.936.464 3.769 1.276 5.389l4.009-3.11z" />
      <path fill="#EA4335" d="M12 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.951 1.19 15.235 0 12 0 7.31 0 3.25 2.69 1.276 6.611l4.009 3.11C6.229 6.884 8.875 4.773 12 4.773z" />
    </svg>
  );
}

function StarRating({ className = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 étoiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${className} text-[#FBBC05] fill-[#FBBC05]`} strokeWidth={0} />
      ))}
    </div>
  );
}

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=avis+sur+mtee+studios";

const googleReviews = [
  {
    name: "Yannick",
    initial: "Y",
    color: "#4285F4",
    date: "il y a 2 mois",
    text: "J'ai eu une expérience fantastique en enregistrant dans ce studio à Paris. L'équipe était professionnelle et très talentueuse. Le résultat final était incroyable.",
  },
  {
    name: "Sarah L.",
    initial: "S",
    color: "#EA4335",
    date: "il y a 3 mois",
    text: "Accueil chaleureux, matériel de pointe et une équipe à l'écoute du début à la fin. Le meilleur studio d'enregistrement du 5ème arrondissement, je recommande les yeux fermés.",
  },
  {
    name: "Karim B.",
    initial: "K",
    color: "#34A853",
    date: "il y a 4 mois",
    text: "Mixage et mastering au top. Michael est très pédagogue et le cadre du studio est unique. Mes morceaux n'ont jamais aussi bien sonné.",
  },
  {
    name: "Chloé M.",
    initial: "C",
    color: "#FBBC05",
    date: "il y a 5 mois",
    text: "Super session d'enregistrement ! Ambiance détendue, ingénieur son très pro et un rendu vraiment propre. J'y retournerai sans hésiter pour mon prochain EP.",
  },
  {
    name: "David R.",
    initial: "D",
    color: "#685141",
    date: "il y a 6 mois",
    text: "Studio magnifique en plein cœur de Paris. Équipement dernier cri, équipe passionnée et de très bons conseils pour la production. Une valeur sûre.",
  },
  {
    name: "Inès T.",
    initial: "I",
    color: "#3B2818",
    date: "il y a 7 mois",
    text: "Une équipe en or ! Ils m'ont accompagnée sur l'écriture, l'enregistrement et le clip. Résultat professionnel et délais respectés. Merci Mtee Studios !",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="aura-source-body font-sans antialiased bg-[#F5EBE1] text-[#685141] selection:bg-[#3B2818]/20 selection:text-[#3B2818]">
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl">
            <div className="relative rounded-full border border-white/25 bg-[#3B2818]/55 backdrop-blur-xl shadow-[0_8px_32px_rgba(59,40,24,0.35)] transition-all duration-300">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-transparent" aria-hidden="true"></div>

              <div className="relative px-5 md:px-7 h-16 flex items-center justify-between gap-4">

                <a href="#" className="flex items-center gap-2 group shrink-0">
                  <AudioLines className="w-7 h-7 transition-colors text-[#F5EBE1] group-hover:text-white" strokeWidth={1.5} />
                  <span className="text-lg font-medium tracking-tight uppercase text-[#F5EBE1]">
                    Mtee
                  </span>
                </a>


                <div className="hidden lg:flex items-center gap-7">
                  <a href="https://calendly.com/mteestudios" target="_blank" className="text-xs uppercase tracking-widest transition-colors font-medium text-[#F5EBE1]/90 hover:text-white">
                    Réservation en ligne
                  </a>
                  <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="text-xs uppercase tracking-widest transition-colors text-[#F5EBE1]/90 hover:text-white">
                    YouTube
                  </a>
                  <a href="#avis" className="text-xs uppercase tracking-widest transition-colors text-[#F5EBE1]/90 hover:text-white">
                    Avis
                  </a>
                </div>


                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {socialLinks.map(({ name, href, Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        title={name}
                        className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-[#F5EBE1] backdrop-blur-sm transition-all duration-300 hover:bg-[#F5EBE1] hover:text-[#3B2818] hover:scale-110"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>

                  <div className="hidden lg:flex items-center gap-2 border-l pl-4 border-white/20">
                    <button className="text-xs uppercase tracking-widest font-medium text-white">
                      FR
                    </button>
                    <span className="text-white/40">/</span>
                    <button className="text-xs uppercase tracking-widest transition-colors text-[#F5EBE1]/60 hover:text-white">
                      EN
                    </button>
                  </div>
                </div>


                <button
                  className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-[#F5EBE1] transition-colors hover:bg-white/20"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? (
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  ) : (
                    <Menu className="w-5 h-5" strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>


            {menuOpen && (
              <div className="md:hidden mt-3 rounded-[1.75rem] border border-white/25 bg-[#3B2818]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(59,40,24,0.4)] p-6 flex flex-col gap-5">
                <a href="https://calendly.com/mteestudios" target="_blank" onClick={() => setMenuOpen(false)} className="text-xs uppercase tracking-widest font-medium text-[#F5EBE1] hover:text-white transition-colors">
                  Réservation en ligne
                </a>
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" onClick={() => setMenuOpen(false)} className="text-xs uppercase tracking-widest text-[#F5EBE1]/90 hover:text-white transition-colors">
                  YouTube
                </a>
                <a href="#avis" onClick={() => setMenuOpen(false)} className="text-xs uppercase tracking-widest text-[#F5EBE1]/90 hover:text-white transition-colors">
                  Avis
                </a>
                <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-[#F5EBE1] transition-all duration-300 hover:bg-[#F5EBE1] hover:text-[#3B2818]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>


          <header className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-20 bg-[#3B2818]">

            <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
              <iframe
                className="hero-video"
                src="https://www.youtube.com/embed/jeEuyF5KCpc?autoplay=1&mute=1&loop=1&playlist=jeEuyF5KCpc&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
                title="Vidéo du studio Mtee Studios en boucle"
                allow="autoplay; encrypted-media; picture-in-picture"
                frameBorder="0"
                tabIndex={-1}
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-b from-[#3B2818]/80 via-[#3B2818]/40 to-[#3B2818]/80"></div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5EBE1]/20 to-transparent"></div>
            </div>


            <div className="relative z-10 flex flex-col items-center justify-center fade-up w-full max-w-5xl mx-auto">
              <span className="inline-block text-xs uppercase tracking-[0.3em] mb-6 font-medium text-[#F5EBE1] px-4 py-1.5 rounded-full border border-[#F5EBE1]/30 bg-[#3B2818]/30 backdrop-blur-sm">
                Studio d'enregistrement · Paris 5ème
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter uppercase mb-6 leading-none text-white drop-shadow-[0_4px_24px_rgba(59,40,24,0.6)]">
                Mtee Studios
              </h1>
              <p className="text-sm md:text-base uppercase tracking-widest mb-10 font-medium text-[#F5EBE1]/90">
                Enregistrement · Mixage · Mastering · Post Production
              </p>
              <div>
                <a href="https://calendly.com/mteestudios" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 border text-xs uppercase tracking-widest transition-all duration-300 group backdrop-blur-sm border-[#F5EBE1] bg-[#F5EBE1] text-[#3B2818] hover:bg-transparent hover:text-[#F5EBE1] rounded-full hover:scale-105 active:scale-95 shadow-lg">
                  Réservations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                </a>
              </div>
            </div>


            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-20">
              <span className="text-xs uppercase tracking-widest font-medium text-[#F5EBE1]">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b to-transparent from-[#F5EBE1]/70"></div>
            </div>
          </header>


          <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-16 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 01</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  À Propos
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                <div className="lg:col-span-5 fade-up">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-8 text-[#3B2818]">
                    Studio d'enregistrement
                  </h3>
                  <div className="space-y-6 text-base font-normal leading-relaxed text-[#685141]">
                    <p>
                      Mtee Studios a été créé par l'artiste
                      <span className="text-[#3B2818]">Michael Tee</span>
                      et son ami associé Christian de Ruty. Le studio est situé en
                      plein cœur du 5e arrondissement, dans l'un des quartiers les
                      plus anciens et prestigieux de Paris.
                    </p>
                    <p>
                      Vous aurez droit à un accueil sur-mesure, accompagné par une
                      équipe professionnelle, dans un cadre unique et futuriste doté
                      d'équipement dernier cri.
                    </p>
                    <p>
                      À votre service : une équipe d'arrangeurs, auteurs,
                      compositeurs, sound designers, beat makers, ingénieurs,
                      webmasters, réalisateurs audiovisuels, cameramen, étalonneurs,
                      chef opérateur, monteurs, photographes.
                    </p>
                  </div>
                  <a href="https://calendly.com/mteestudios" target="_blank" className="inline-flex items-center gap-2 mt-12 text-xs uppercase tracking-widest border-b pb-1 transition-colors text-[#3B2818] border-[#3B2818]/30 hover:border-[#685141] hover:text-[#685141]">
                    Découvrir les offres
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>


                <div className="lg:col-span-7 relative h-[600px] w-full fade-up">
                  <div className="absolute top-0 right-0 w-3/4 h-[400px] overflow-hidden rounded-[2rem]">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Artiste au micro" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-2/3 h-[300px] overflow-hidden border-4 border-[#F5EBE1] rounded-[2rem]">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Console SSL" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="absolute top-1/4 left-1/4 w-1/3 h-[200px] overflow-hidden border-4 z-10 border-[#F5EBE1] rounded-[2rem] shadow-xl">
                    <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Guitare" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="py-32 border-y relative bg-[#EAE0D5] border-[#3B2818]/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-16 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 02</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Nos Activités
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                <div className="lg:col-span-5 flex flex-col justify-center fade-up">
                  <p className="text-xl md:text-2xl font-medium tracking-tight mb-12 leading-snug text-[#3B2818]">
                    Les prestations proposées par le studio d'enregistrement :
                  </p>

                  <div className="space-y-0 border-t border-[#3B2818]/10">

                    <div className="group border-b py-6 cursor-pointer flex items-center justify-between border-[#3B2818]/10">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-medium transition-colors text-[#8C7563] group-hover:text-[#3B2818]">
                          / 01
                        </span>
                        <h4 className="text-sm md:text-base font-medium tracking-widest uppercase transition-colors text-[#685141] group-hover:text-[#3B2818]">
                          Studio A
                        </h4>
                      </div>
                      <Plus className="w-5 h-5 transition-colors text-[#8C7563] group-hover:text-[#3B2818]" strokeWidth={1.5} />
                    </div>

                    <div className="group border-b py-6 cursor-pointer flex items-center justify-between border-[#3B2818]/10">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-medium transition-colors text-[#8C7563] group-hover:text-[#3B2818]">
                          / 02
                        </span>
                        <h4 className="text-sm md:text-base font-medium tracking-widest uppercase transition-colors text-[#685141] group-hover:text-[#3B2818]">
                          Studio B
                        </h4>
                      </div>
                      <Plus className="w-5 h-5 transition-colors text-[#8C7563] group-hover:text-[#3B2818]" strokeWidth={1.5} />
                    </div>

                    <div className="group border-b py-6 cursor-pointer flex items-center justify-between border-[#3B2818]/10">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-medium transition-colors text-[#8C7563] group-hover:text-[#3B2818]">
                          / 03
                        </span>
                        <h4 className="text-sm md:text-base font-medium tracking-widest uppercase transition-colors text-[#685141] group-hover:text-[#3B2818]">
                          Matériel
                        </h4>
                      </div>
                      <Plus className="w-5 h-5 transition-colors text-[#8C7563] group-hover:text-[#3B2818]" strokeWidth={1.5} />
                    </div>

                    <div className="group border-b py-6 cursor-pointer flex items-center justify-between border-[#3B2818]/10">
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-medium transition-colors text-[#8C7563] group-hover:text-[#3B2818]">
                          / 04
                        </span>
                        <h4 className="text-sm md:text-base font-medium tracking-widest uppercase transition-colors text-[#685141] group-hover:text-[#3B2818]">
                          Masterclass
                        </h4>
                      </div>
                      <Plus className="w-5 h-5 transition-colors text-[#8C7563] group-hover:text-[#3B2818]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>


                <div className="lg:col-span-7 flex flex-col justify-center fade-up delay-100">
                  <div className="aspect-[4/3] w-full overflow-hidden mb-8 relative rounded-[2rem]">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Studio A" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                  </div>
                  <Mic className="w-8 h-8 mb-6 text-[#3B2818]" strokeWidth={1.5} />
                  <p className="text-base font-normal leading-relaxed max-w-xl text-[#685141]">
                    Un grand studio d'enregistrement en plein centre de Paris, conçu
                    pour produire, enregistrer, mixer et masteriser avec la plus haute
                    des qualités. Équipé de technologies audio de pointe et des
                    microphones rares.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="relative py-40">
            <div className="absolute z-0 inset-0 overflow-hidden bg-[#F5EBE1]">
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=2958&amp;auto=format&amp;fit=crop" alt="Production Vidéo" className="w-full h-full object-cover object-center filter grayscale opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 fade-up">
              <h3 className="text-2xl md:text-4xl font-medium tracking-tight uppercase mb-12 text-[#3B2818]">
                Autres Prestations
              </h3>
              <div className="flex flex-col items-center gap-4 text-sm md:text-base font-normal text-[#685141]">
                <p>Conception de pochettes de disques et de graphismes.</p>
                <div className="w-1 h-1 rounded-full my-2 bg-[#3B2818]"></div>
                <p>Photographie professionnelle.</p>
                <div className="w-1 h-1 rounded-full my-2 bg-[#3B2818]"></div>
                <p className="max-w-2xl text-[#685141]">
                  Projets vidéo avec équipe de techniciens spécialisés : réalisateurs,
                  opérateurs de caméra, étalonneurs, cameramen, directeurs de la
                  photographie.
                </p>
              </div>
            </div>
          </section>


          <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-24 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 03</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Professionnels
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                <div className="fade-up">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-8 text-[#3B2818]">
                    La Team
                  </h3>
                  <p className="text-base font-normal leading-relaxed mb-12 text-[#685141]">
                    Les professionnels du studio d'enregistrement sont des experts en
                    matière de production musicale et de technique du son. Ils ont une
                    grande expérience dans l'enregistrement, le mixage et le
                    mastering. Ils sont engagés à fournir une qualité de son
                    supérieure pour chaque projet, en s'assurant que la musique sonne
                    parfaitement sur toutes les plateformes.
                  </p>
                  <div className="aspect-square w-full md:w-3/4 overflow-hidden relative group rounded-[2rem]">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Equipe au travail" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  </div>
                </div>


                <div className="flex flex-col justify-center fade-up delay-100">
                  <div className="border-t border-[#3B2818]/10">

                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Michael Tee
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Auteur / Comp. / Prod.
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Pyke Manos
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Music Producer
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Walkman
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Music Producer
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">Theddy</span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Music Producer
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">Hams</span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Music Producer
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">Selik</span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Webdesigner
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Martin Brunet
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right max-w-[150px] text-[#8C7563]">
                        Bassiste / Arrangeur
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Isshogai
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Photographe Fashion
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">
                        Eddy Murté
                      </span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Animateur
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-b py-5 group transition-colors px-2 border-[#3B2818]/10 hover:bg-[#3B2818]/5">
                      <span className="text-base font-medium text-[#3B2818]">Jack S</span>
                      <span className="text-xs uppercase tracking-widest text-right text-[#8C7563]">
                        Ingénieur Son
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative border-t border-[#3B2818]/10 bg-[#EAE0D5]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-24 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ Ref</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Nos Références
                </h2>
              </div>
              <div className="relative fade-up delay-100">
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Artiste 1" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 1
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Studio A
                    </p>
                  </div>
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Artiste 2" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 2
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Mixage
                    </p>
                  </div>
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://images.unsplash.com/photo-1520423465871-0866049020b7?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Artiste 3" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 3
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Mastering
                    </p>
                  </div>
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Artiste 4" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 4
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Production
                    </p>
                  </div>
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Artiste 5" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 5
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Studio B
                    </p>
                  </div>
                  <div className="flex-none w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-start group">
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                      <img src="https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&amp;w=800&amp;auto=format&amp;fit=crop" alt="Artiste 6" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight uppercase text-[#3B2818] transition-colors group-hover:text-[#685141]">
                      Artiste 6
                    </h3>
                    <p className="text-xs text-[#685141] uppercase tracking-widest mt-2">
                      Enregistrement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-32 relative border-t border-[#3B2818]/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-24 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 05</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Dernières Vidéos
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up delay-100">
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#EAE0D5] border border-[#3B2818]/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-[9/16]">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=600&amp;auto=format&amp;fit=crop" alt="Session Live 01" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3B2818]/40 backdrop-blur-sm">
                      <PlayCircle className="w-12 h-12 text-[#F5EBE1]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold tracking-tight uppercase mb-2 text-[#3B2818] group-hover:text-[#685141] transition-colors">
                      Session Live 01
                    </h3>
                    <p className="text-xs text-[#685141]">
                      Enregistrement exclusif au Studio A.
                    </p>
                  </div>
                </a>
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#EAE0D5] border border-[#3B2818]/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-[9/16]">
                    <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=600&amp;auto=format&amp;fit=crop" alt="Masterclass Beatmaking" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3B2818]/40 backdrop-blur-sm">
                      <PlayCircle className="w-12 h-12 text-[#F5EBE1]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold tracking-tight uppercase mb-2 text-[#3B2818] group-hover:text-[#685141] transition-colors">
                      Masterclass Beatmaking
                    </h3>
                    <p className="text-xs text-[#685141]">
                      Apprenez les secrets de la production.
                    </p>
                  </div>
                </a>
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#EAE0D5] border border-[#3B2818]/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-[9/16]">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Mixage Vocal Avancé" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3B2818]/40 backdrop-blur-sm">
                      <PlayCircle className="w-12 h-12 text-[#F5EBE1]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold tracking-tight uppercase mb-2 text-[#3B2818] group-hover:text-[#685141] transition-colors">
                      Mixage Vocal Avancé
                    </h3>
                    <p className="text-xs text-[#685141]">
                      Techniques de mixage en studio.
                    </p>
                  </div>
                </a>
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#EAE0D5] border border-[#3B2818]/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-[9/16]">
                    <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=600&amp;auto=format&amp;fit=crop" alt="Visite du Studio B" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#3B2818]/40 backdrop-blur-sm">
                      <PlayCircle className="w-12 h-12 text-[#F5EBE1]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold tracking-tight uppercase mb-2 text-[#3B2818] group-hover:text-[#685141] transition-colors">
                      Visite du Studio B
                    </h3>
                    <p className="text-xs text-[#685141]">
                      Découvrez notre nouvel équipement.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section className="py-32 relative border-t border-[#3B2818]/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-24 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 04</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Galerie
                </h2>
              </div>

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 fade-up delay-100">
                <div className="group relative overflow-hidden inline-block w-full rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Console de mixage" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                </div>
                <div className="group relative overflow-hidden inline-block w-full rounded-[2rem]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Enregistrement en studio" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                </div>
                <div className="group relative overflow-hidden inline-block w-full rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Equipement vidéo" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                </div>
                <div className="group relative overflow-hidden inline-block w-full rounded-[2rem]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Artiste au micro" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                </div>
                <div className="group relative overflow-hidden inline-block w-full rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Instruments" className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 ring-1 ring-inset pointer-events-none ring-[#3B2818]/10 rounded-[2rem]"></div>
                </div>
                <div className="group relative overflow-hidden inline-block w-full aspect-square flex flex-col items-center justify-center text-center p-8 border rounded-[2rem] bg-[#EAE0D5] border-[#3B2818]/10">
                  <h3 className="text-2xl font-medium tracking-tight uppercase mb-4 text-[#3B2818]">
                    Votre Projet
                  </h3>
                  <p className="text-sm mb-6 text-[#685141]">
                    Donnez vie à vos idées dans notre studio d'enregistrement de
                    classe mondiale.
                  </p>
                  <a href="https://calendly.com/mteestudios" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 border text-xs uppercase tracking-widest transition-all duration-300 group border-[#3B2818] bg-[#3B2818] text-[#F5EBE1] hover:bg-[#685141] hover:border-[#685141] rounded-full">
                    Réserver
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>


          <section id="avis" className="py-32 border-y px-6 bg-[#EAE0D5] border-[#3B2818]/10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-16 fade-up">
                <span className="text-xs font-medium text-[#8C7563]">/ 06</span>
                <div className="h-[1px] flex-1 bg-[#3B2818]/10"></div>
                <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-[#685141]">
                  Avis Google
                </h2>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 fade-up">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GoogleIcon className="w-8 h-8" />
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-[#3B2818]">
                      Ils nous ont notés
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-semibold text-[#3B2818] leading-none">5,0</span>
                    <div>
                      <StarRating className="w-5 h-5" />
                      <p className="text-xs uppercase tracking-widest mt-2 text-[#685141]">
                        Basé sur les avis Google
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border text-xs uppercase tracking-widest font-medium transition-all duration-300 group border-[#3B2818] bg-[#3B2818] text-[#F5EBE1] hover:bg-[#685141] hover:border-[#685141] rounded-full hover:scale-105 active:scale-95 shadow-lg self-start md:self-auto"
                >
                  <span className="w-5 h-5 rounded-full bg-[#F5EBE1] flex items-center justify-center shrink-0">
                    <GoogleIcon className="w-3 h-3" />
                  </span>
                  Voir les avis sur Google
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up delay-100">
                {googleReviews.map((review) => (
                  <a
                    key={review.name}
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col text-left p-8 rounded-[2rem] bg-[#F5EBE1] border border-[#3B2818]/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <GoogleIcon className="w-5 h-5 absolute top-8 right-8" />
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold text-[#F5EBE1] shrink-0"
                        style={{ backgroundColor: review.color }}
                      >
                        {review.initial}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#3B2818]">{review.name}</p>
                        <p className="text-xs text-[#8C7563]">Avis Google</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <StarRating />
                      <span className="text-xs text-[#8C7563]">{review.date}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#685141]">"{review.text}"</p>
                  </a>
                ))}
              </div>

              <div className="flex justify-center mt-12 fade-up">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b pb-1 transition-colors text-[#3B2818] border-[#3B2818]/30 hover:border-[#685141] hover:text-[#685141]"
                >
                  Laisser un avis ou tout consulter sur Google
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-32 p-12 md:p-16 rounded-[2rem] bg-[#3B2818] shadow-xl fade-up text-center">
              <h3 className="text-sm font-medium tracking-widest uppercase mb-6 text-[#F5EBE1]">
                Réservations &amp; Conditions
              </h3>
              <p className="text-sm font-normal leading-relaxed mb-8 text-[#EAE0D5]">
                Toute réservation bénéficie d'un délai de grâce de 24h après
                confirmation (dans la limite de 48h avant l'événement). Passé ce
                délai, la réservation devient ferme, définitive et non remboursable.
              </p>
              <a href="https://calendly.com/mteestudios" target="_blank" className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors duration-300 bg-[#F5EBE1] text-[#3B2818] hover:bg-[#EAE0D5] rounded-full">
                Réserver une session
              </a>
            </div>
          </section>


          <footer className="pt-32 pb-16 px-6 border-t bg-[#3B2818] border-[#F5EBE1]/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

              <div className="flex flex-col gap-6">
                <a href="#" className="flex items-center gap-2">
                  <AudioLines className="w-6 h-6 text-[#F5EBE1]" strokeWidth={1.5} />
                  <span className="text-lg font-medium tracking-tight uppercase text-[#F5EBE1]">
                    Mtee Studios
                  </span>
                </a>
                <p className="text-xs leading-relaxed text-[#EAE0D5]">
                  Studio d'enregistrement haut de gamme, post-production et formations
                  au cœur de Paris.
                </p>
              </div>


              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-medium uppercase tracking-widest mb-2 text-[#F5EBE1]">
                  Contact
                </h4>
                <p className="text-sm text-[#EAE0D5]">5 Sq. Adanson, 75005 Paris</p>
                <a href="mailto:contact@mteestudios.com" className="text-sm transition-colors text-[#EAE0D5] hover:text-[#F5EBE1]">
                  contact@mteestudios.com
                </a>
                <div className="flex flex-col gap-1 text-sm text-[#EAE0D5]/70 mt-2">
                  <a href="tel:0624898788" className="transition-colors hover:text-[#F5EBE1]">
                    06 24 89 87 88
                  </a>
                  <a href="tel:0144549993" className="transition-colors hover:text-[#F5EBE1]">
                    01 44 54 99 93
                  </a>
                </div>
              </div>


              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-medium uppercase tracking-widest mb-2 text-[#F5EBE1]">
                  Réseaux
                </h4>
                <a href="https://www.instagram.com/mtee_studios/" target="_blank" className="text-sm transition-colors flex items-center gap-2 text-[#EAE0D5] hover:text-[#F5EBE1]">
                  Instagram
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </a>
                <a href="https://www.youtube.com/@MTEESTUDIOS_MUSIC" target="_blank" className="text-sm transition-colors flex items-center gap-2 text-[#EAE0D5] hover:text-[#F5EBE1]">
                  YouTube
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100092259409391" target="_blank" className="text-sm transition-colors flex items-center gap-2 text-[#EAE0D5] hover:text-[#F5EBE1]">
                  Facebook
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </a>
                <a href="https://www.tiktok.com/@mteestudios" target="_blank" className="text-sm transition-colors flex items-center gap-2 text-[#EAE0D5] hover:text-[#F5EBE1]">
                  TikTok
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </a>
              </div>


              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest mb-6 text-[#F5EBE1]">
                  Aperçu
                </h4>
                <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Thumb" />
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Thumb" />
                  <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-full aspect-square object-cover opacity-70 hover:opacity-100 transition-opacity" alt="Thumb" />
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t text-xs border-[#F5EBE1]/10 text-[#EAE0D5]/70">
              <p>Designed by © Sêlik. Mtee Studio — All Rights Reserved 2024</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="transition-colors hover:text-[#F5EBE1]">
                  Mentions Légales
                </a>
                <a href="#" className="transition-colors hover:text-[#F5EBE1]">
                  Confidentialité
                </a>
              </div>
            </div>
          </footer>


          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            <a href="https://calendly.com/mteestudios" target="_blank" className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 bg-[#3B2818] text-[#F5EBE1] hover:bg-[#685141]" title="Réserver">
              <Calendar className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/33624898788" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:bg-[#1EBE5D] transition-all duration-300" title="WhatsApp" aria-label="Contacter sur WhatsApp">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
    </div>
  );
}
