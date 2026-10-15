import React from 'react';

function App() {
  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      <nav className="absolute w-full z-50 py-6 px-8 flex justify-between items-center text-white mix-blend-difference">
        <a href="#" className="text-xl tracking-tighter uppercase font-medium">Deltanova</a>
        <div className="hidden md:flex gap-12 text-sm tracking-wide">
          <a href="#" className="hover:text-[#BBA88E] transition-colors">Technologies</a>
          <a href="#" className="hover:text-[#BBA88E] transition-colors">Expertise</a>
          <a href="#" className="hover:text-[#BBA88E] transition-colors">Masterclass</a>
        </div>
        <a href="#" className="text-xs uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">Contact</a>
      </nav>

      {/* 1. Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-[#1A1A1A]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-60 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/08f0e618-c8f0-4948-b2e8-28376317b11c/1600w.jpg')]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#1A1A1A] overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
            <source src="https://deltanova-group.fr/wp-content/uploads/2024/11/NEW-VIDEO-SLIDER.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">
          {/* Left: Typography */}
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Technologies esthétiques premium pour les professionnels exigeants.
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light mb-12 max-w-lg leading-relaxed">
              Visage, corps, épilation définitive, diagnostic et accompagnement sur-mesure pour faire évoluer votre carte de soins.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="bg-white text-[#1A1A1A] text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#BBA88E] hover:text-white transition-colors duration-500">
                Découvrir nos technologies
              </a>
              <a href="#" className="flex items-center gap-3 text-sm uppercase tracking-widest text-white hover:text-[#BBA88E] transition-colors duration-500">
                Être rappelé
                <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Right: Floating Card */}
          <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-sm text-white">
            <div className="text-xs uppercase tracking-widest text-[#BBA88E] mb-8">Votre projet d'équipement</div>
            <div className="space-y-6">
              <a href="#" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-white/40 transition-colors">
                <div className="flex items-center gap-4">
                  <iconify-icon icon="solar:stars-linear" className="text-2xl text-white/50 group-hover:text-[#BBA88E] transition-colors"></iconify-icon>
                  <span className="text-lg font-light tracking-wide">Renouveler mes technologies</span>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></iconify-icon>
              </a>
              <a href="#" className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-white/40 transition-colors">
                <div className="flex items-center gap-4">
                  <iconify-icon icon="solar:buildings-linear" className="text-2xl text-white/50 group-hover:text-[#BBA88E] transition-colors"></iconify-icon>
                  <span className="text-lg font-light tracking-wide">Ouvrir un nouveau centre</span>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></iconify-icon>
              </a>
              <a href="#" className="group flex items-center justify-between pb-2 hover:border-white/40 transition-colors">
                <div className="flex items-center gap-4">
                  <iconify-icon icon="solar:graph-up-linear" className="text-2xl text-white/50 group-hover:text-[#BBA88E] transition-colors"></iconify-icon>
                  <span className="text-lg font-light tracking-wide">Développer mon CA</span>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        {/* Mini Banner Sub-nav */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-[#1A1A1A]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center py-5 text-xs text-white/60 uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">Visage</span>
            <span className="hover:text-white cursor-pointer transition-colors">Corps</span>
            <span className="hover:text-white cursor-pointer transition-colors">Épilation</span>
            <span className="hover:text-white cursor-pointer transition-colors">Scanner IA</span>
            <span className="hover:text-[#BBA88E] cursor-pointer transition-colors">Masterclass</span>
          </div>
        </div>
      </header>

      {/* 2. Bloc “Pourquoi Deltanova” */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl tracking-tight leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            L'exigence clinique appliquée<br />au développement de votre institut.
          </h2>
          <p className="text-base text-gray-500">Une approche globale qui sécurise votre investissement et pérennise vos résultats.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Card 1 */}
          <div className="relative group">
            <div className="text-4xl text-[#EBE9E4] mb-6 group-hover:text-[#BBA88E] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>01</div>
            <h3 className="text-lg tracking-tight mb-4 border-b border-[#EBE9E4] pb-4">Technologies sélectionnées</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Des équipements audités pour leur efficacité clinique, leur fiabilité technique et leur rentabilité sur le marché français.
            </p>
          </div>
          {/* Card 2 */}
          <div className="relative group">
            <div className="text-4xl text-[#EBE9E4] mb-6 group-hover:text-[#BBA88E] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>02</div>
            <h3 className="text-lg tracking-tight mb-4 border-b border-[#EBE9E4] pb-4">Accompagnement 360°</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              De l'étude de zone de chalandise jusqu'à l'installation physique, nous structurons le projet à vos côtés.
            </p>
          </div>
          {/* Card 3 */}
          <div className="relative group">
            <div className="text-4xl text-[#EBE9E4] mb-6 group-hover:text-[#BBA88E] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>03</div>
            <h3 className="text-lg tracking-tight mb-4 border-b border-[#EBE9E4] pb-4">Formation continue</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Montée en compétence théorique et pratique pour garantir des résultats constants et sécuriser vos protocoles.
            </p>
          </div>
          {/* Card 4 */}
          <div className="relative group">
            <div className="text-4xl text-[#EBE9E4] mb-6 group-hover:text-[#BBA88E] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>04</div>
            <h3 className="text-lg tracking-tight mb-4 border-b border-[#EBE9E4] pb-4">Suivi de performance</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Support marketing, maintenance préventive et points réguliers pour optimiser le taux de remplissage de la machine.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Bloc “Vos univers de traitement” */}
      <section className="bg-[#EBE9E4] py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl tracking-tight mb-16 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Vos univers de traitement
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visage */}
            <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-white">
              <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" alt="Visage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl tracking-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Visage & Anti-âge</h3>
                    <p className="text-sm text-white/70 font-light max-w-sm">Rajeunissement cellulaire, traitement des imperfections et protocoles signature.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                  </div>
                </div>
              </div>
            </a>
            
            {/* Corps */}
            <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-white">
              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop" alt="Corps" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl tracking-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Remodelage Corps</h3>
                    <p className="text-sm text-white/70 font-light max-w-sm">Cryolipolyse, ondes électromagnétiques et réduction ciblée des volumes.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                  </div>
                </div>
              </div>
            </a>

            {/* Epilation */}
            <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-white">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop" alt="Epilation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl tracking-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Épilation Définitive</h3>
                    <p className="text-sm text-white/70 font-light max-w-sm">Laser diode haute puissance pour tous phototypes, rapide et indolore.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                  </div>
                </div>
              </div>
            </a>

            {/* Diagnostic */}
            <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Diagnostic IA" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent"></div>
              <div className="absolute top-10 right-10">
                <span className="bg-[#BBA88E] text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full">Nouveau</span>
              </div>
              <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl tracking-tight mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Diagnostic & IA</h3>
                    <p className="text-sm text-white/70 font-light max-w-sm">Analyse cutanée par intelligence artificielle pour prescrire avec précision.</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#1A1A1A] transition-all duration-300">
                    <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Bloc “Pour qui ?” */}
      <section className="py-32 px-8 max-w-7xl mx-auto border-b border-[#EBE9E4]">
        <div className="text-center mb-20">
          <h2 className="text-4xl tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Une réponse technologique par profil
          </h2>
          <p className="text-sm uppercase tracking-widest text-gray-400">Choisissez votre domaine d'expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EBE9E4] border border-[#EBE9E4]">
          {/* Profil 1 */}
          <div className="bg-[#F9F8F6] p-12 hover:bg-white transition-colors duration-500">
            <div className="w-12 h-12 bg-[#EBE9E4] rounded-full flex items-center justify-center mb-8">
              <iconify-icon icon="solar:shop-linear" className="text-2xl text-[#1A1A1A]"></iconify-icon>
            </div>
            <h3 className="text-2xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Instituts de beauté</h3>
            <p className="text-sm text-gray-500 mb-8 min-h-[4rem]">Différenciez-vous avec des soins High-Tech et fidélisez par des résultats visibles dès la première séance.</p>
            <ul className="space-y-3 mb-10 text-sm">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Technologies mains-libres</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Forte rentabilité horaire</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Kit marketing lancement</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#BBA88E] transition-colors pb-1 border-b border-[#1A1A1A] hover:border-[#BBA88E]">
              Voir l'accompagnement
            </a>
          </div>

          {/* Profil 2 */}
          <div className="bg-[#F9F8F6] p-12 hover:bg-white transition-colors duration-500">
            <div className="w-12 h-12 bg-[#EBE9E4] rounded-full flex items-center justify-center mb-8">
              <iconify-icon icon="solar:stethoscope-linear" className="text-2xl text-[#1A1A1A]"></iconify-icon>
            </div>
            <h3 className="text-2xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>IDE & Praticiens</h3>
            <p className="text-sm text-gray-500 mb-8 min-h-[4rem]">Capitalisez sur votre expertise médicale pour proposer des protocoles esthétiques avancés en toute sécurité.</p>
            <ul className="space-y-3 mb-10 text-sm">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Protocoles rigoureux</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Masterclass dédiées IDE</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Aide à l'installation</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#BBA88E] transition-colors pb-1 border-b border-[#1A1A1A] hover:border-[#BBA88E]">
              Découvrir l'offre
            </a>
          </div>

          {/* Profil 3 */}
          <div className="bg-[#F9F8F6] p-12 hover:bg-white transition-colors duration-500">
            <div className="w-12 h-12 bg-[#EBE9E4] rounded-full flex items-center justify-center mb-8">
              <iconify-icon icon="solar:health-linear" className="text-2xl text-[#1A1A1A]"></iconify-icon>
            </div>
            <h3 className="text-2xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Médecins esthétiques</h3>
            <p className="text-sm text-gray-500 mb-8 min-h-[4rem]">Complétez votre offre d'injectables avec des plateformes multi-technologies pour une prise en charge globale.</p>
            <ul className="space-y-3 mb-10 text-sm">
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Synergie thérapeutique</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> Équipements certifiés CE Médical</li>
              <li className="flex items-center gap-3"><div className="w-1 h-1 bg-[#BBA88E] rounded-full"></div> SAV prioritaire</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#1A1A1A] hover:text-[#BBA88E] transition-colors pb-1 border-b border-[#1A1A1A] hover:border-[#BBA88E]">
              Contact dédié
            </a>
          </div>
        </div>
      </section>

      {/* 5 & 6. Tech + Results & Beyond Machines (Combined Clinical approach) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-4xl tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Plus qu’un équipement,<br />un partenaire de croissance.
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                Nous ne livrons pas seulement une machine. Nous structurons avec vous une offre de soins rentable et désirable pour votre patientèle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l border-[#BBA88E] pl-6">
                <iconify-icon icon="solar:chart-square-linear" className="text-2xl text-[#8F9A90] mb-3"></iconify-icon>
                <h4 className="text-base font-medium mb-2">Étude de rentabilité</h4>
                <p className="text-xs text-gray-500">Business plan et calcul du ROI avant investissement.</p>
              </div>
              <div className="border-l border-[#BBA88E] pl-6">
                <iconify-icon icon="solar:diploma-linear" className="text-2xl text-[#8F9A90] mb-3"></iconify-icon>
                <h4 className="text-base font-medium mb-2">Formation continue</h4>
                <p className="text-xs text-gray-500">Certification de vos équipes aux protocoles exclusifs.</p>
              </div>
              <div className="border-l border-[#BBA88E] pl-6">
                <iconify-icon icon="solar:gallery-linear" className="text-2xl text-[#8F9A90] mb-3"></iconify-icon>
                <h4 className="text-base font-medium mb-2">Supports Marketing</h4>
                <p className="text-xs text-gray-500">PLV, visuels réseaux sociaux et stratégies de lancement.</p>
              </div>
              <div className="border-l border-[#BBA88E] pl-6">
                <iconify-icon icon="solar:settings-linear" className="text-2xl text-[#8F9A90] mb-3"></iconify-icon>
                <h4 className="text-base font-medium mb-2">SAV Réactif</h4>
                <p className="text-xs text-gray-500">Intervention rapide pour garantir la continuité de vos soins.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Abstract/Clinical graphic representation */}
            <div className="aspect-square bg-[#EBE9E4] relative p-8">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="self-end bg-white p-6 shadow-sm max-w-[200px]">
                  <div className="text-3xl text-[#BBA88E] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>+45%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Augmentation du ticket moyen observé</div>
                </div>
                <div className="bg-[#1A1A1A] p-6 shadow-sm max-w-[240px] text-white">
                  <iconify-icon icon="solar:verified-check-linear" className="text-2xl text-[#8F9A90] mb-3"></iconify-icon>
                  <div className="text-sm font-medium mb-1">Différenciation garantie</div>
                  <div className="text-xs text-white/60">Montez en gamme avec des protocoles signature.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Bloc “Sélection de technologies” (Minimalist Carousel Simulation) */}
      <section className="overflow-hidden text-white bg-[#1A1A1A] pt-32 pr-8 pb-32 pl-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Excellence Technologique
              </h2>
              <p className="text-sm text-white/60 max-w-sm">Une sélection de nos équipements phares pour redéfinir les standards de la beauté.</p>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <iconify-icon icon="solar:arrow-left-linear" className="text-xl"></iconify-icon>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
              </button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {/* Tech 1 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
              <div className="aspect-[3/4] bg-[#2A2A2A] relative mb-6 overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80" alt="Delta Lift" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="group-hover:border-[#BBA88E]/50 transition-colors duration-500 border-white/10 border absolute top-0 right-0 bottom-0 left-0"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-[#BBA88E] uppercase tracking-widest mb-2">Soin Anti-âge Global</div>
                  <h3 className="text-2xl tracking-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Delta Lift</h3>
                  <p className="text-sm text-white/50">Radiofréquence fractionnée</p>
                </div>
                <iconify-icon icon="solar:add-circle-linear" className="text-2xl text-white/30 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
              <div className="aspect-[3/4] bg-[#2A2A2A] relative mb-6 overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1542833807-ad5af0977050?w=800&q=80" alt="Jetskin Pro" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#BBA88E]/50 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-[#BBA88E] uppercase tracking-widest mb-2">Nettoyage Profond</div>
                  <h3 className="text-2xl tracking-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Jetskin Pro</h3>
                  <p className="text-sm text-white/50">Hydradermabrasion avancée</p>
                </div>
                <iconify-icon icon="solar:add-circle-linear" className="text-2xl text-white/30 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
              <div className="aspect-[3/4] bg-[#2A2A2A] relative mb-6 overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1670201203208-055d6d79db4a?w=800&q=80" alt="Novashape" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#BBA88E]/50 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-[#BBA88E] uppercase tracking-widest mb-2">Remodelage Corporel</div>
                  <h3 className="text-2xl tracking-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Novashape</h3>
                  <p className="text-sm text-white/50">Ondes électromagnétiques</p>
                </div>
                <iconify-icon icon="solar:add-circle-linear" className="text-2xl text-white/30 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>

             {/* Tech 4 */}
             <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
              <div className="aspect-[3/4] bg-[#2A2A2A] relative mb-6 overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80" alt="Deltadiode+" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#BBA88E]/50 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-[#BBA88E] uppercase tracking-widest mb-2">Épilation Définitive</div>
                  <h3 className="text-2xl tracking-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Deltadiode+</h3>
                  <p className="text-sm text-white/50">Laser Diode 3 ondes</p>
                </div>
                <iconify-icon icon="solar:add-circle-linear" className="text-2xl text-white/30 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>
          </div>

          {/* Custom scrollbar/progress indicator style */}
          <div className="mt-8 flex gap-2">
            <div className="h-[2px] w-12 bg-white"></div>
            <div className="h-[2px] w-12 bg-white/20"></div>
            <div className="h-[2px] w-12 bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* 7. Bloc “Masterclass” (Editorial Layout) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                L'Académie<br />Deltanova
              </h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Des formats de formation immersifs pour maîtriser les dernières avancées esthétiques, perfectionner vos gestes et développer l'attractivité de votre centre.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#1A1A1A] pb-1 border-b border-[#1A1A1A] hover:text-[#BBA88E] hover:border-[#BBA88E] transition-colors">
                Toutes les dates
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            {/* Card Masterclass 1 */}
            <a href="#" className="group flex flex-col md:flex-row gap-8 bg-white p-8 border border-[#EBE9E4] hover:shadow-lg hover:shadow-gray-100 transition-all duration-500">
              <div className="md:w-2/5 aspect-[4/3] bg-[#EBE9E4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=800&auto=format&fit=crop" alt="Formation" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <div className="text-xs text-[#8F9A90] uppercase tracking-widest mb-3">Pour les Esthéticiennes</div>
                <h3 className="text-2xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Masterclass Beauty Expert</h3>
                <p className="text-sm text-gray-500 mb-6">Deux jours en immersion pour devenir la référence anti-âge de votre région. Théorie cellulaire, pratique intensive et protocoles combinés.</p>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="flex items-center gap-2 border border-[#EBE9E4] px-3 py-1.5 rounded-full"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Paris, 12 Oct</span>
                  <span className="flex items-center gap-2 border border-[#EBE9E4] px-3 py-1.5 rounded-full"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 8 places restantes</span>
                </div>
              </div>
            </a>

            {/* Card Masterclass 2 */}
            <a href="#" className="group flex flex-col md:flex-row gap-8 bg-white p-8 border border-[#EBE9E4] hover:shadow-lg hover:shadow-gray-100 transition-all duration-500">
              <div className="md:w-2/5 aspect-[4/3] bg-[#EBE9E4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Formation Médicale" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <div className="text-xs text-[#8F9A90] uppercase tracking-widest mb-3">Pour les IDE & Praticiens</div>
                <h3 className="text-2xl tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Masterclass Clinique</h3>
                <p className="text-sm text-gray-500 mb-6">Approfondissement des techniques lasers et radiofréquence médicale. Gestion des complications et optimisation des paramètres.</p>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="flex items-center gap-2 border border-[#EBE9E4] px-3 py-1.5 rounded-full"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Lyon, 24 Nov</span>
                  <span className="flex items-center gap-2 border border-[#EBE9E4] px-3 py-1.5 rounded-full"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Liste d'attente</span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-40 px-8 bg-[#EBE9E4] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Parlons de votre projet d'équipement.
          </h2>
          <p className="text-base text-gray-600 mb-12 font-light leading-relaxed">
            Que vous souhaitiez enrichir votre carte de soins, lancer une nouvelle prestation ou faire évoluer le positionnement de votre centre, notre équipe vous accompagne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="w-full sm:w-auto bg-[#1A1A1A] text-white text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-black transition-colors duration-300">
              Nous contacter
            </a>
            <a href="#" className="w-full sm:w-auto border border-[#1A1A1A] text-[#1A1A1A] text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
              Être rappelé
            </a>
          </div>
        </div>
      </section>

      {/* 10. Footer épuré */}
      <footer className="bg-white pt-24 pb-12 px-8 border-t border-[#EBE9E4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl tracking-tighter uppercase font-medium mb-6 text-[#1A1A1A]">Deltanova</div>
            <p className="text-sm text-gray-500 max-w-xs font-light">
              Partenaire de référence en technologies esthétiques pour les instituts et centres médicaux en France.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">Visage & Anti-âge</a></li>
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">Remodelage Corps</a></li>
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">Épilation Définitive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1A1A1A] mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">L'accompagnement</a></li>
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">Masterclass</a></li>
              <li><a href="#" className="hover:text-[#BBA88E] transition-colors">Financement</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#EBE9E4] text-xs text-gray-400 font-light">
          <p>© 2024 Deltanova. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;