import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Massive CTA Section */}
        <Reveal>
          <div className="text-center mb-32 group cursor-pointer" onClick={() => window.location.href='/contact'}>
            <h2 className="font-syne font-bold text-[10vw] leading-[0.8] tracking-tighter uppercase text-white/50 group-hover:text-white transition-colors duration-500">
              Prêt À<br/>
              <span className="text-white group-hover:text-[#c9a96e] transition-colors duration-500">Inno<span className="italic">ver</span> ?</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-syne font-bold text-3xl tracking-tighter text-white uppercase">
                Roots<span className="text-[#c9a96e]">.</span>
              </span>
            </Link>
            <p className="text-white/50 font-light text-sm max-w-xs leading-relaxed">
              L'agence digitale premium belge dédiée à la croissance des professionnels de santé.
            </p>
          </div>
          
          <div>
            <h3 className="font-syne font-bold text-white uppercase tracking-widest text-sm mb-6">Expertises</h3>
            <ul className="space-y-4">
              <li><Link to="/services/chirurgien-plasticien" className="text-white/50 hover:text-white font-light text-sm transition-colors">Chirurgiens</Link></li>
              <li><Link to="/services/clinique-medicale" className="text-white/50 hover:text-white font-light text-sm transition-colors">Cliniques</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-white uppercase tracking-widest text-sm mb-6">Bureaux</h3>
            <ul className="space-y-4">
              <li className="text-white/50 font-light text-sm">Bruxelles, BE</li>
              <li>
                <a href="mailto:contact@rootsagency.be" className="text-white hover:text-[#c9a96e] font-light text-sm transition-colors">
                  contact@rootsagency.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light tracking-wide">
            &copy; {new Date().getFullYear()} ROOTS AGENCY. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <span className="text-white/30 text-xs font-light uppercase tracking-wide cursor-pointer hover:text-white transition-colors">Légal</span>
            <span className="text-white/30 text-xs font-light uppercase tracking-wide cursor-pointer hover:text-white transition-colors">Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}