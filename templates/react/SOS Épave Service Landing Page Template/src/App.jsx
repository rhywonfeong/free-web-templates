import React from 'react';

function App() {
  return (
    <>
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase flex items-center gap-2">
            <span className="text-[#E30613]">SOS</span> ÉPAVE IDF
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <span className="flex items-center gap-2 text-[#888888]">
              <iconify-icon icon="solar:verified-check-linear"></iconify-icon> Agréé VHU
            </span>
            <span className="flex items-center gap-2 text-[#888888]">
              <iconify-icon icon="solar:map-point-linear"></iconify-icon> Toute l'Île-de-France
            </span>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 min-h-screen flex flex-col justify-center overflow-hidden border-b border-[#1A1A1A]">
        <div className="absolute inset-0 bg-grid opacity-50"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#E30613] opacity-5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Live Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1A1A1A] mb-8">
            <span className="w-2 h-2 bg-[#E30613] animate-pulse"></span>
            <span className="font-display text-xs md:text-sm font-medium uppercase tracking-widest text-[#888888]">
              Disponible maintenant — 24h/24, 7j/7
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold uppercase tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            Enlèvement d'épave <br className="hidden md:block" />
            <span className="text-[#E30613]">gratuit</span> en Île-de-France
          </h1>

          <p className="text-base md:text-lg text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed">
            Intervention rapide jour et nuit. Service agréé VHU, certificat de destruction fourni, zéro frais pour vous.
          </p>

          {/* Phone Number Huge */}
          <a href="tel:+33753201967" className="group block mb-12">
            <div className="font-display font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl text-[#E30613] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(227,6,19,0.3)]">
              07 53 20 19 67
            </div>
          </a>

          {/* CTAs */}
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+33753201967" className="flex-1 bg-[#E30613] text-white font-display font-bold uppercase tracking-tight text-lg py-5 px-6 flex items-center justify-center gap-3 hover:bg-white hover:text-[#0A0A0A] transition-all group border border-transparent">
              <iconify-icon icon="solar:phone-calling-linear" strokeWidth="2" className="text-2xl group-hover:animate-ring"></iconify-icon>
              Appeler maintenant
            </a>
            <a href="https://wa.me/33753201967?text=Bonjour,%20je%20souhaite%20faire%20enlever%20mon%20épave%20en%20Île-de-France." target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white font-display font-bold uppercase tracking-tight text-lg py-5 px-6 flex items-center justify-center gap-3 hover:bg-white hover:text-[#0A0A0A] transition-all border border-transparent">
              <iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="2" className="text-2xl"></iconify-icon>
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs md:text-sm text-[#888888] font-medium uppercase tracking-wider">
            <span>Agréé VHU</span>
            <span className="hidden sm:inline">•</span>
            <span>Enlèvement 100% gratuit</span>
            <span className="hidden sm:inline">•</span>
            <span>Certificat fourni</span>
            <span className="hidden sm:inline">•</span>
            <span>Toute l'Île-de-France</span>
          </div>
        </div>
      </section>

      {/* 2. SECTION NOS SERVICES */}
      <section className="py-24 px-4 border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display font-bold uppercase tracking-tighter text-3xl md:text-5xl mb-4">Ce que nous faisons</h2>
            <div className="w-16 h-1 bg-[#E30613]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {/* Card 1 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:truck-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Enlèvement d'épave gratuit</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Nous venons chercher votre véhicule hors d'usage directement chez vous, sans frais, partout en Île-de-France.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:document-text-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Certificat de destruction</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Remise immédiate du certificat officiel pour vos démarches en préfecture (radiation carte grise).</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:leaf-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Dépollution & Recyclage</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Traitement écologique agréé VHU : dépollution, recyclage des pièces et matériaux dans le respect de la loi.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:danger-triangle-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Véhicules accidentés</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Enlèvement rapide après accident, sinistre, incendie, inondation ou vandalisme.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:settings-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Pannes définitives</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Voitures en panne moteur, non roulantes, sans contrôle technique, sans carte grise — on prend tout.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-[#1A1A1A] p-8 border border-transparent hover:border-[#E30613] transition-colors group">
              <iconify-icon icon="solar:clipboard-list-linear" className="text-4xl text-[#E30613] mb-6 group-hover:scale-110 transition-transform"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Démarches administratives</h3>
              <p className="text-[#888888] text-sm leading-relaxed">Nous vous accompagnons pour la cession et la radiation de votre véhicule en préfecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. VÉHICULES & ZONE (Split layout) */}
      <section className="border-b border-[#1A1A1A]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Vehicules Pris en Charge */}
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]">
            <div className="mb-12">
              <h2 className="font-display font-bold uppercase tracking-tighter text-3xl mb-4">Véhicules pris en charge</h2>
              <p className="text-[#888888] text-sm">Avec ou sans carte grise — sans contrôle technique — tous états.</p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#E30613] border border-[#333]"><iconify-icon icon="solar:routing-2-linear" className="text-xl"></iconify-icon></div>
                <span className="font-medium">Voitures</span> <span className="text-sm text-[#888888] ml-auto">Toutes marques</span>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#E30613] border border-[#333]"><iconify-icon icon="solar:bicycle-linear" className="text-xl"></iconify-icon></div>
                <span className="font-medium">Motos et scooters</span>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#E30613] border border-[#333]"><iconify-icon icon="solar:bus-linear" className="text-xl"></iconify-icon></div>
                <span className="font-medium">Utilitaires et camionnettes</span>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#E30613] border border-[#333]"><iconify-icon icon="solar:delivery-linear" className="text-xl"></iconify-icon></div>
                <span className="font-medium">Camions et poids lourds</span>
              </li>
              <li className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] text-[#E30613] border border-[#333]"><iconify-icon icon="solar:fire-square-linear" className="text-xl"></iconify-icon></div>
                <span className="font-medium">Brûlés, accidentés, inondés</span>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div className="p-8 md:p-16 bg-[#050505]">
            <div className="mb-12">
              <h2 className="font-display font-bold uppercase tracking-tighter text-3xl mb-4">Zone d'intervention</h2>
              <p className="text-[#E30613] text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E30613] animate-pulse"></span>
                Sous 1h à 2h selon localisation
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {/* Depts */}
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">75</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Paris</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">77</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Seine-et-M.</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">78</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Yvelines</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">91</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Essonne</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">92</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Hauts-de-S.</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">93</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Seine-St-D.</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">94</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Val-de-M.</div>
              </div>
              <div className="bg-[#1A1A1A] border border-[#222] p-4 text-center hover:bg-[#E30613] hover:border-[#E30613] hover:text-white transition-all group cursor-default">
                <div className="font-display font-bold text-3xl text-[#888888] group-hover:text-white mb-1 transition-colors">95</div>
                <div className="text-xs uppercase tracking-wider text-[#555] group-hover:text-white/80 transition-colors">Val-d'Oise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POURQUOI NOUS CHOISIR */}
      <section className="py-24 px-4 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#222] p-6 bg-[#1A1A1A]">
              <iconify-icon icon="solar:wallet-money-linear" className="text-3xl text-[#E30613] mb-4"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-lg mb-2">100% Gratuit</h3>
              <p className="text-[#888888] text-sm">Aucun frais, aucune surprise. Service intégralement pris en charge.</p>
            </div>
            <div className="border border-[#222] p-6 bg-[#1A1A1A]">
              <iconify-icon icon="solar:bolt-linear" className="text-3xl text-[#E30613] mb-4"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-lg mb-2">Rapide 24/7</h3>
              <p className="text-[#888888] text-sm">Disponible de jour comme de nuit, week-ends et jours fériés inclus.</p>
            </div>
            <div className="border border-[#222] p-6 bg-[#1A1A1A]">
              <iconify-icon icon="solar:shield-check-linear" className="text-3xl text-[#E30613] mb-4"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-lg mb-2">Agréé VHU</h3>
              <p className="text-[#888888] text-sm">Centre de traitement agréé par la préfecture d'Île-de-France.</p>
            </div>
            <div className="border border-[#222] p-6 bg-[#1A1A1A]">
              <iconify-icon icon="solar:file-check-linear" className="text-3xl text-[#E30613] mb-4"></iconify-icon>
              <h3 className="font-display font-bold uppercase tracking-tight text-lg mb-2">Certificat fourni</h3>
              <p className="text-[#888888] text-sm">Document officiel de destruction remis sur place pour la préfecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMENT ÇA MARCHE */}
      <section className="py-24 px-4 border-b border-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold uppercase tracking-tighter text-3xl md:text-5xl mb-16 text-center">Comment ça marche</h2>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-[#333] z-0"></div>
            
            {/* Step 1 */}
            <div className="flex-1 relative z-10 flex flex-col items-center text-center group">
              <div className="bg-[#0A0A0A] px-4 animate-scan mb-4">
                <span className="font-display font-bold text-7xl text-[#E30613] opacity-80 group-hover:opacity-100 transition-opacity">01</span>
              </div>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Vous nous contactez</h3>
              <p className="text-[#888888] text-sm max-w-xs">Appelez-nous ou écrivez sur WhatsApp. Donnez-nous le lieu, la marque et l'état du véhicule.</p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative z-10 flex flex-col items-center text-center group">
              <div className="bg-[#0A0A0A] px-4 animate-scan mb-4">
                <span className="font-display font-bold text-7xl text-[#E30613] opacity-80 group-hover:opacity-100 transition-opacity">02</span>
              </div>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">On se déplace</h3>
              <p className="text-[#888888] text-sm max-w-xs">Intervention rapide partout en Île-de-France, à l'heure convenue, jour ou nuit.</p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 relative z-10 flex flex-col items-center text-center group">
              <div className="bg-[#0A0A0A] px-4 animate-scan mb-4">
                <span className="font-display font-bold text-7xl text-[#E30613] opacity-80 group-hover:opacity-100 transition-opacity">03</span>
              </div>
              <h3 className="font-display font-bold uppercase tracking-tight text-xl mb-3">Certificat remis</h3>
              <p className="text-[#888888] text-sm max-w-xs">Remise immédiate du certificat de destruction officiel. Affaire classée.</p>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <a href="tel:+33753201967" className="bg-[#E30613] text-white font-display font-bold uppercase tracking-tight text-xl py-6 px-10 hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center gap-4">
              Démarrer maintenant <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* 7. AVIS CLIENTS */}
      <section className="py-24 pl-4 md:pl-8 border-b border-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto pr-4 md:pr-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold uppercase tracking-tighter text-3xl md:text-5xl mb-2">Avis Clients</h2>
            <div className="flex items-center gap-2 text-[#E30613]">
              <iconify-icon icon="solar:star-bold"></iconify-icon>
              <span className="text-white font-bold text-lg">4.9/5</span>
              <span className="text-[#888888] text-sm">— sur +300 interventions</span>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar pr-4 md:pr-8">
          {/* Review 1 */}
          <div className="min-w-[300px] md:min-w-[400px] bg-[#1A1A1A] p-8 border border-[#222] snap-start flex-shrink-0 flex flex-col">
            <div className="flex gap-1 text-[#E30613] mb-6 text-xl">
              ★★★★★
            </div>
            <p className="text-sm text-gray-300 mb-8 flex-1">"Intervention en moins de 2h à Paris 18e. Équipe pro et rapide, certificat remis sur place. Je recommande vivement."</p>
            <p className="font-display font-bold text-xs uppercase tracking-wider text-[#555]">Karim B. — Paris 18e</p>
          </div>
          {/* Review 2 */}
          <div className="min-w-[300px] md:min-w-[400px] bg-[#1A1A1A] p-8 border border-[#222] snap-start flex-shrink-0 flex flex-col">
            <div className="flex gap-1 text-[#E30613] mb-6 text-xl">
              ★★★★★
            </div>
            <p className="text-sm text-gray-300 mb-8 flex-1">"Appelé dimanche soir, ils sont venus lundi matin à Créteil. Service impeccable, tout gratuit, aucune démarche à faire."</p>
            <p className="font-display font-bold text-xs uppercase tracking-wider text-[#555]">Sophie L. — Créteil (94)</p>
          </div>
          {/* Review 3 */}
          <div className="min-w-[300px] md:min-w-[400px] bg-[#1A1A1A] p-8 border border-[#222] snap-start flex-shrink-0 flex flex-col">
            <div className="flex gap-1 text-[#E30613] mb-6 text-xl">
              ★★★★★
            </div>
            <p className="text-sm text-gray-300 mb-8 flex-1">"Ma voiture était accidentée depuis 6 mois. En un appel c'était réglé. Merci pour le professionnalisme."</p>
            <p className="font-display font-bold text-xs uppercase tracking-wider text-[#555]">Anthony D. — Argenteuil (95)</p>
          </div>
          {/* Review 4 */}
          <div className="min-w-[300px] md:min-w-[400px] bg-[#1A1A1A] p-8 border border-[#222] snap-start flex-shrink-0 flex flex-col">
            <div className="flex gap-1 text-[#E30613] mb-6 text-xl">
              ★★★★★
            </div>
            <p className="text-sm text-gray-300 mb-8 flex-1">"Enlèvement à Bobigny en pleine nuit, équipe sérieuse et ponctuelle. Certificat de destruction reçu immédiatement."</p>
            <p className="font-display font-bold text-xs uppercase tracking-wider text-[#555]">Fatima K. — Bobigny (93)</p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-4 bg-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold uppercase tracking-tighter text-3xl md:text-5xl mb-12 text-center">Questions Fréquentes</h2>
          
          <div className="space-y-4">
            {/* Item */}
            <details className="group border border-[#222] bg-[#1A1A1A] [&_summary::-webkit-details-marker]:hidden open:border-[#E30613] transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-bold uppercase tracking-tight text-lg select-none">
                L'enlèvement est-il vraiment gratuit ?
                <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#E30613] text-xl transition-transform group-open:rotate-180"></iconify-icon>
              </summary>
              <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#222] pt-4 mt-2">
                Oui, 100% gratuit. Aucun frais ne vous sera demandé, quel que soit l'état du véhicule ou le département en Île-de-France.
              </div>
            </details>
            
            {/* Item */}
            <details className="group border border-[#222] bg-[#1A1A1A] [&_summary::-webkit-details-marker]:hidden open:border-[#E30613] transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-bold uppercase tracking-tight text-lg select-none">
                Dans quels délais intervenez-vous ?
                <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#E30613] text-xl transition-transform group-open:rotate-180"></iconify-icon>
              </summary>
              <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#222] pt-4 mt-2">
                Nous intervenons 24h/24 et 7j/7, généralement sous 1 à 2 heures selon votre localisation en Île-de-France, ou sur rendez-vous à votre convenance.
              </div>
            </details>

            {/* Item */}
            <details className="group border border-[#222] bg-[#1A1A1A] [&_summary::-webkit-details-marker]:hidden open:border-[#E30613] transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-bold uppercase tracking-tight text-lg select-none">
                Que faire si je n'ai pas la carte grise ?
                <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#E30613] text-xl transition-transform group-open:rotate-180"></iconify-icon>
              </summary>
              <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#222] pt-4 mt-2">
                Pas de souci, nous prenons en charge les véhicules même sans carte grise (perte, vol, retrait). Nous vous guiderons pour les démarches administratives nécessaires (déclaration de perte).
              </div>
            </details>

            {/* Item */}
            <details className="group border border-[#222] bg-[#1A1A1A] [&_summary::-webkit-details-marker]:hidden open:border-[#E30613] transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-bold uppercase tracking-tight text-lg select-none">
                Quels véhicules prenez-vous ?
                <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#E30613] text-xl transition-transform group-open:rotate-180"></iconify-icon>
              </summary>
              <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#222] pt-4 mt-2">
                Tous : voitures, motos, scooters, utilitaires, camions, véhicules anciens. Qu'ils soient accidentés, brûlés, inondés, en panne, avec ou sans contrôle technique.
              </div>
            </details>

            {/* Item */}
            <details className="group border border-[#222] bg-[#1A1A1A] [&_summary::-webkit-details-marker]:hidden open:border-[#E30613] transition-colors">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-bold uppercase tracking-tight text-lg select-none">
                Recevrai-je un certificat de destruction ?
                <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#E30613] text-xl transition-transform group-open:rotate-180"></iconify-icon>
              </summary>
              <div className="px-6 pb-6 text-[#888888] text-sm leading-relaxed border-t border-[#222] pt-4 mt-2">
                Oui, systématiquement. Le certificat de destruction officiel vous est remis sur place lors de l'enlèvement. Il est indispensable pour la radiation en préfecture et pour votre assurance.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 9. CTA BAND URGENCE */}
      <section className="bg-[#E30613] text-white py-20 px-4 text-center border-y-8 border-black">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-black/20 mb-8">
            <span className="w-2 h-2 bg-white animate-pulse"></span>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-white">En ligne maintenant</span>
          </div>

          <h2 className="font-display font-black uppercase tracking-tighter text-4xl md:text-6xl lg:text-7xl mb-6 leading-none">
            Une épave à enlever ?<br />On est là. 24h/24.
          </h2>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-90">Intervention gratuite partout en Île-de-France, jour et nuit.</p>
          
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
            <a href="tel:+33753201967" className="flex-1 bg-[#0A0A0A] text-white font-display font-bold uppercase tracking-tight text-lg md:text-xl py-6 px-6 flex items-center justify-center gap-3 hover:bg-[#1A1A1A] transition-colors border-2 border-transparent">
              <iconify-icon icon="solar:phone-calling-linear" strokeWidth="2" className="text-3xl"></iconify-icon>
              Appeler 07 53 20 19 67
            </a>
            <a href="https://wa.me/33753201967?text=Bonjour,%20je%20souhaite%20faire%20enlever%20mon%20épave%20en%20Île-de-France." target="_blank" rel="noopener noreferrer" className="sm:flex-none sm:w-1/3 bg-[#25D366] text-white font-display font-bold uppercase tracking-tight text-lg md:text-xl py-6 px-6 flex items-center justify-center gap-3 hover:bg-green-600 transition-colors border-2 border-transparent">
              <iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="2" className="text-3xl"></iconify-icon>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#0A0A0A] pt-20 pb-8 px-4 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Col 1 */}
            <div>
              <div className="font-display font-bold text-2xl tracking-tighter uppercase mb-2">
                <span className="text-[#E30613]">SOS</span> ÉPAVE IDF
              </div>
              <p className="text-[#555] text-xs uppercase tracking-wider font-bold mb-6">Épaviste agréé VHU — Île-de-France</p>
              <div className="space-y-3">
                <a href="tel:+33753201967" className="flex items-center gap-3 text-[#E30613] font-display font-bold text-2xl hover:text-white transition-colors">
                  07 53 20 19 67
                </a>
                <a href="https://wa.me/33753201967?text=Bonjour,%20je%20souhaite%20faire%20enlever%20mon%20épave%20en%20Île-de-France." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#25D366] font-medium text-sm hover:text-white transition-colors">
                  <iconify-icon icon="solar:chat-round-dots-linear" className="text-xl"></iconify-icon> Contact WhatsApp
                </a>
                <span className="flex items-center gap-3 text-[#888888] font-medium text-sm">
                  <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon> contact@sosepaveidf.fr
                </span>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-tight mb-6 text-white">Zones (IDF)</h4>
              <ul className="space-y-2 text-[#888888] text-sm">
                <li>75 - Paris</li>
                <li>77 - Seine-et-Marne</li>
                <li>78 - Yvelines</li>
                <li>91 - Essonne</li>
                <li>92 - Hauts-de-Seine</li>
                <li>93 - Seine-Saint-Denis</li>
                <li>94 - Val-de-Marne</li>
                <li>95 - Val-d'Oise</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-tight mb-6 text-white">Services</h4>
              <ul className="space-y-2 text-[#888888] text-sm">
                <li>Enlèvement gratuit 24/7</li>
                <li>Certificat de destruction</li>
                <li>Dépollution et recyclage</li>
                <li>Gestion administrative</li>
                <li>Véhicules accidentés</li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-tight mb-6 text-white">Légal</h4>
              <ul className="space-y-2 text-[#888888] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li className="mt-4 inline-block border border-[#333] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#555]">Centre agréé VHU</li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E30613]/50 to-transparent mb-8"></div>
          
          <div className="text-center text-[#555] text-xs font-medium uppercase tracking-wider">
            © 2026 SOS Épave IDF — Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Call */}
        <a href="tel:+33753201967" className="w-14 h-14 md:w-16 md:h-16 bg-[#E30613] text-white flex items-center justify-center shadow-[0_0_20px_rgba(227,6,19,0.3)] hover:bg-white hover:text-[#E30613] transition-all group relative" aria-label="Appeler maintenant" title="Appeler maintenant">
          <span className="absolute inset-0 border-2 border-[#E30613] animate-ping opacity-50"></span>
          <iconify-icon icon="solar:phone-calling-linear" strokeWidth="2" className="text-2xl md:text-3xl relative z-10 group-hover:animate-ring"></iconify-icon>
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/33753201967?text=Bonjour,%20je%20souhaite%20faire%20enlever%20mon%20épave%20en%20Île-de-France.%0A%0AVoici%20mes%20infos%20:%0A-%20Ville%20/%20code%20postal%20:%0A-%20Marque%20et%20modèle%20du%20véhicule%20:%0A-%20État%20du%20véhicule%20:%0A%0AMerci." target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:bg-white hover:text-[#25D366] transition-all relative" aria-label="Message WhatsApp" title="Message WhatsApp">
          <span className="absolute inset-0 border-2 border-[#25D366] animate-ping opacity-20"></span>
          <iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="2" className="text-2xl md:text-3xl relative z-10"></iconify-icon>
        </a>
      </div>
    </>
  );
}

export default App;