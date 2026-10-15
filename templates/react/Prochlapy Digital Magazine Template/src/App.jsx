import React from 'react';

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* 1. Sticky minimal nav */}
      <header className="sticky top-0 z-50 bg-[#FAFAF7]/90 backdrop-blur-md border-b border-neutral-200/70 transition-all duration-300 shadow-[0_8px_24px_rgba(10,10,10,0.04)]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="font-serif font-medium tracking-tight text-2xl uppercase">
            Prochlapy.
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {['Vztahy', 'Styl', 'Technika', 'Kultura', 'Celebrity', 'Zábava', 'Soutěže'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium tracking-tight uppercase hover:text-[#D62828] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-neutral-500 hover:text-[#0A0A0A] transition-colors" aria-label="Search">
              <iconify-icon icon="solar:magnifer-linear" width="22" height="22"></iconify-icon>
            </button>
            <button className="text-neutral-500 hover:text-[#0A0A0A] transition-colors" aria-label="Theme toggle">
              <iconify-icon icon="solar:moon-linear" width="22" height="22"></iconify-icon>
            </button>
            <button className="lg:hidden text-neutral-500 hover:text-[#0A0A0A] transition-colors" aria-label="Menu">
              <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="flex flex-col gap-10 lg:gap-14">
          {/* Main Hero */}
          <article className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center group cursor-pointer">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-neutral-100 order-2 lg:order-2 border border-neutral-200/70 shadow-[0_10px_30px_rgba(10,10,10,0.08)] rounded-lg">
              <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/02/r.jpg?fit=1200%2C800&ssl=1" alt="Artemis II" className="w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-1">
              <span className="font-mono text-xs text-[#D62828] uppercase mb-4 tracking-widest block">
                Technika
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium mb-6 group-hover:text-[#D62828] transition-colors duration-300">
                Artemis II odstartovala. Lidé se poprvé od roku 1972 vydali k
                Měsíci
              </h1>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
                Start rakety SLS s misí Artemis II z Kennedyho vesmírného
                střediska na Floridě během nočního vzletu přepisuje historii.
                Lidstvo se vrací do hlubokého vesmíru.
              </p>
              <div className="flex items-center gap-4 font-mono text-xs text-neutral-400 uppercase">
                <span>Jakub Dvořák</span>
                <span>—</span>
                <span>6 min čtení</span>
              </div>
            </div>
          </article>

          {/* Secondary articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer flex flex-col gap-4">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-[0_10px_24px_rgba(10,10,10,0.06)] rounded-lg">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/12/madar.jpg?fit=800%2C600&ssl=1" alt="Maďarsko" className="w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-2">
                  Maďarsko mění směr. Orbána porazil Magyar
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 uppercase mt-3">
                  <span className="text-[#D62828]">Kultura</span>
                  <span>—</span>
                  <span>4 min čtení</span>
                </div>
              </div>
            </article>
            <article className="group cursor-pointer flex flex-col gap-4">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-[0_10px_24px_rgba(10,10,10,0.06)] rounded-lg">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/03/31/FOTBA.png?fit=800%2C600&ssl=1" alt="Fotbal" className="w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-2">
                  Češi jsou po dvaceti letech na mistrovství světa!
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 uppercase mt-3">
                  <span className="text-[#D62828]">Zábava</span>
                  <span>—</span>
                  <span>3 min čtení</span>
                </div>
              </div>
            </article>
            <article className="group cursor-pointer flex flex-col gap-4">
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-[0_10px_24px_rgba(10,10,10,0.06)] rounded-lg">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/03/31/beranek.png?fit=800%2C600&ssl=1" alt="Policie" className="w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-2">
                  Rapera Lea Beránka odvedli v poutech. Zásah v bytě
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 uppercase mt-3">
                  <span className="text-[#D62828]">Celebrity</span>
                  <span>—</span>
                  <span>2 min čtení</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Latest strip */}
      <section className="border-t border-neutral-200/70 bg-white py-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-8">
            Trending today
          </h2>
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
            {[
              { cat: 'Kultura', img: 'https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/12/madar.jpg?fit=800%2C600&ssl=1', title: 'Maďarsko mění směr. Orbána porazil Magyar' },
              { cat: 'Zábava', img: 'https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/03/31/FOTBA.png?fit=800%2C600&ssl=1', title: 'Češi jsou po dvaceti letech na mistrovství světa!' },
              { cat: 'Celebrity', img: 'https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/03/31/beranek.png?fit=800%2C600&ssl=1', title: 'Rapera Lea Beránka odvedli v poutech. Zásah v bytě' },
              { cat: 'Společnost', img: 'https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/01/Martina-se-musela-rozhodnout.jpg?fit=800%2C600&ssl=1', title: 'V Naked Attraction padne nečekaná žádost o ruku' },
              { cat: 'Vztahy', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg', title: 'Sex v autě: 12 rad, jak si ho užít a neskončit s bolestí zad' },
              { cat: 'Technika', img: 'https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/02/13/stazeny-soubor-26.jpg?fit=1200%2C1200&ssl=1', title: 'Nejčastěji stočené tachometry: Jeden model vyčnívá' }
            ].map((item, idx) => (
              <article key={idx} className="group cursor-pointer flex-shrink-0 w-[240px] lg:w-auto snap-start flex flex-col gap-3">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 relative border border-neutral-200/70 shadow-[0_10px_22px_rgba(10,10,10,0.06)] rounded-lg">
                  <span className="absolute top-2 left-2 bg-[#D62828] text-white font-mono text-[10px] uppercase px-2 py-1 z-10 tracking-wider">
                    {item.cat}
                  </span>
                  <img src={item.img} alt={item.cat} className="w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
                </div>
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Category showcase (Vztahy) */}
      <section className="border-t border-neutral-200/70 bg-[#FAFAF7] py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-5xl tracking-tight mb-4 inline-block text-[#0A0A0A]">
            Vztahy
          </h2>
          <div className="w-full h-[2px] bg-[#D62828] mb-12 max-w-[80px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-6">
            {/* Large 2x2 */}
            <article className="md:col-span-2 md:row-span-2 group cursor-pointer flex flex-col h-full min-h-[400px]">
              <div className="relative w-full h-full overflow-hidden bg-neutral-100 border border-white/10 shadow-[0_14px_40px_rgba(10,10,10,0.12)] rounded-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Vztahy" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="font-mono text-[10px] bg-[#D62828] text-white px-2 py-1 uppercase tracking-wider mb-3 inline-block">
                    Hlavní téma
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight font-medium text-white leading-snug mb-3">
                    Sex v autě: 12 rad, jak si ho užít a neskončit s bolestí zad
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-300 uppercase">
                    <span>Jakub Dvořák</span>
                    <span>—</span>
                    <span>5 min čtení</span>
                  </div>
                </div>
              </div>
            </article>
            {/* Wide 2x1 */}
            <article className="md:col-span-2 md:row-span-1 group cursor-pointer flex flex-col sm:flex-row h-full overflow-hidden bg-white border border-neutral-200/70 rounded-lg">
              <div className="w-full sm:w-2/5 h-48 sm:h-full bg-neutral-100 relative overflow-hidden border-r border-neutral-200/70">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/05/02/a1d2569e-f80b-4efb-84b3-f47d4d5e1a65.png?fit=400%2C300&ssl=1" alt="Zájem" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="w-full sm:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                <h3 className="font-serif text-xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-4">
                  5 důvodů, proč ženy ztrácejí zájem – a chlapi to nevidí
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  <span>Pavel Nový</span>
                  <span>—</span>
                  <span>4 min čtení</span>
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-white border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Stres" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Porno, tlak a realita: proč máme ze sexu spíš stres
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  3 min čtení
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-white border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2025/08/23/Worpress-leden-1200-x-630-px-40.png?fit=400%2C300&ssl=1" alt="Orgasmus" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Cesta k ženskému orgasmu: klitorální vs. vaginální
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  5 min čtení
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-white border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/01/Martina-se-musela-rozhodnout.jpg?fit=800%2C600&ssl=1" alt="Žádost" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  V Naked Attraction padne nečekaná žádost o ruku
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  4 min čtení
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-white border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/03/31/beranek.png?fit=800%2C600&ssl=1" alt="Policie" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Rapera Lea Beránka odvedli v poutech. Zásah v bytě
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  2 min čtení
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Category showcase (Technika) */}
      <section className="border-t border-neutral-200/70 bg-white py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-5xl tracking-tight mb-4 inline-block text-[#0A0A0A]">
            Technika
          </h2>
          <div className="w-full h-[2px] bg-[#D62828] mb-12 max-w-[80px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-6">
            {/* Large 2x2 */}
            <article className="md:col-span-2 md:row-span-2 group cursor-pointer flex flex-col h-full min-h-[400px]">
              <div className="relative w-full h-full overflow-hidden bg-neutral-100 border border-white/10 shadow-[0_14px_40px_rgba(10,10,10,0.12)] rounded-lg">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/02/13/stazeny-soubor-26.jpg?fit=1200%2C1200&ssl=1" alt="Technika" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="font-mono text-[10px] bg-[#D62828] text-white px-2 py-1 uppercase tracking-wider mb-3 inline-block">
                    Auta
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight font-medium text-white leading-snug mb-3">
                    Nejčastěji stočené tachometry: Jeden model výrazně vyčnívá
                  </h3>
                  <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-300 uppercase">
                    <span>Tomáš Novák</span>
                    <span>—</span>
                    <span>6 min čtení</span>
                  </div>
                </div>
              </div>
            </article>
            {/* Wide 2x1 */}
            <article className="md:col-span-2 md:row-span-1 group cursor-pointer flex flex-col sm:flex-row h-full overflow-hidden bg-[#FAFAF7] border border-neutral-200/70 rounded-lg">
              <div className="w-full sm:w-2/5 h-48 sm:h-full bg-neutral-100 relative overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="Auto" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="w-full sm:w-3/5 p-5 md:p-6 flex flex-col justify-center">
                <h3 className="font-serif text-xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-4">
                  Zamrzlé okno auta nebo zámek. Vychytávky, které pomůžou
                </h3>
                <div className="flex items-center gap-3 font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  <span>Rádce</span>
                  <span>—</span>
                  <span>4 min čtení</span>
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-[#FAFAF7] border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" alt="Alkohol" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Zbytkový alkohol: Jak zjistit, že už můžete bezpečně řídit?
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  Zdraví
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-[#FAFAF7] border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2017/12/73627663_l-1.jpg?fit=400%2C300&ssl=1" alt="Řetězy" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Jsou potřeba v zimě řetězy na kola? Test levných vs. drahých
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  Recenze
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-[#FAFAF7] border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/02/r.jpg?fit=1200%2C800&ssl=1" alt="Raketa" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Kdy se člověk vrátí na Měsíc? Mise Artemis v ohrožení
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  Vesmír
                </div>
              </div>
            </article>
            {/* Standard 1x1 */}
            <article className="md:col-span-1 md:row-span-1 group cursor-pointer flex flex-col bg-[#FAFAF7] border border-neutral-200/70 h-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/12/madar.jpg?fit=800%2C600&ssl=1" alt="Tech" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] border border-black/5" />
              </div>
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors mb-3 line-clamp-3">
                  Nová AI od Googlu dokáže přeložit myšlenky do textu
                </h3>
                <div className="font-mono text-[10px] text-neutral-400 uppercase mt-auto">
                  5 min čtení
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Most read this week */}
      <section className="border-t border-neutral-200/70 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-center text-neutral-400 mb-16">
            Nejčtenější tento týden
          </h2>

          <div className="flex flex-col">
            {[
              { num: '01', title: 'Zemřel olympijský vítěz ve vzpírání Ota Zaremba', cat: 'Sport', time: '3 min' },
              { num: '02', title: 'Lukáš Kohout: český podvodník, který svou drzostí bavil i štval', cat: 'Společnost', time: '7 min' },
              { num: '03', title: 'Pardubice jsou po 14 letech mistři. Titul rozhodl Červenka v prodloužení', cat: 'Sport', time: '4 min' },
              { num: '04', title: 'Zrádci 2: Mia vyhrála milion a ukázala, že platí pevné nervy', cat: 'Zábava', time: '5 min' },
            ].map((item, idx) => (
              <article key={idx} className={`flex items-baseline gap-6 md:gap-8 py-8 ${idx !== 3 ? 'border-b border-neutral-200/70' : 'border-transparent'} group cursor-pointer`}>
                <span className="font-mono text-3xl text-neutral-300 font-light">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight font-medium leading-snug group-hover:text-[#D62828] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-mono text-xs text-[#D62828] uppercase">
                      {item.cat}
                    </span>
                    <span className="font-mono text-xs text-neutral-400 uppercase">
                      — {item.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Long-form article showcase */}
      <section className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-[#D62828]"></div>
            <h2 className="font-mono text-xs text-white uppercase tracking-widest">
              Long Read
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Long Read 1 */}
            <article className="group cursor-pointer flex flex-col bg-[#171717] border border-neutral-800 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/24/dabel-nosi-pradu--e1777039339266.jpg?fit=1600%2C900&ssl=1" alt="Teenageři" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 border border-white/10" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-[#D62828] uppercase mb-3 block tracking-wider">
                  Společnost
                </span>
                <h3 className="font-serif text-xl tracking-tight font-medium text-white leading-snug mb-3 group-hover:text-[#D62828] transition-colors">
                  Teenageři odkládají sex. Paradox dnešní generace
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                  Virtuální svět nabízí instantní uspokojení, zatímco reálné
                  vztahy přinášejí riziko zklamání. Proč dnešní dvacátníci volí
                  samotu před intimitou?
                </p>
                <div className="font-mono text-[10px] text-neutral-500 uppercase mt-auto">
                  12 min čtení
                </div>
              </div>
            </article>
            {/* Long Read 2 */}
            <article className="group cursor-pointer flex flex-col bg-[#171717] border border-neutral-800 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/04/12/madar.jpg?fit=800%2C600&ssl=1" alt="Generace" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 border border-white/10" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-[#D62828] uppercase mb-3 block tracking-wider">
                  Politika
                </span>
                <h3 className="font-serif text-xl tracking-tight font-medium text-white leading-snug mb-3 group-hover:text-[#D62828] transition-colors">
                  Pád starých struktur a jak se mění mapa Evropy
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                  Západní svět se potýká s krizí důvěry v tradiční strany. Může
                  nová vlna populistů přinést řešení, nebo nás čeká další chaos?
                </p>
                <div className="font-mono text-[10px] text-neutral-500 uppercase mt-auto">
                  15 min čtení
                </div>
              </div>
            </article>
            {/* Long Read 3 */}
            <article className="group cursor-pointer flex flex-col bg-[#171717] border border-neutral-800 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Vztahy" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 border border-white/10" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-[#D62828] uppercase mb-3 block tracking-wider">
                  Psychologie
                </span>
                <h3 className="font-serif text-xl tracking-tight font-medium text-white leading-snug mb-3 group-hover:text-[#D62828] transition-colors">
                  Fenomén vyhoření: Kdy už nestačí jen změnit práci
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                  Proč jsme vyčerpaní, i když fyzicky nepracujeme. Hloubkový
                  pohled na to, jak mozek reaguje na neustálý digitální tlak.
                </p>
                <div className="font-mono text-[10px] text-neutral-500 uppercase mt-auto">
                  10 min čtení
                </div>
              </div>
            </article>
            {/* Long Read 4 */}
            <article className="group cursor-pointer flex flex-col bg-[#171717] border border-neutral-800 overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                <img src="https://i0.wp.com/www.prochlapy.cz/wp-content/uploads/2026/02/13/stazeny-soubor-26.jpg?fit=1200%2C1200&ssl=1" alt="Tech" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 border border-white/10" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-[#D62828] uppercase mb-3 block tracking-wider">
                  Technologie
                </span>
                <h3 className="font-serif text-xl tracking-tight font-medium text-white leading-snug mb-3 group-hover:text-[#D62828] transition-colors">
                  Konec soukromí. Jak o nás auta ví více než my sami
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-3 mb-4">
                  Moderní vozy sdílejí terabyty dat měsíčně. Komu je posílají a
                  jak s nimi automobilky nakládají v šedé zóně zákona?
                </p>
                <div className="font-mono text-[10px] text-neutral-500 uppercase mt-auto">
                  14 min čtení
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Newsletter signup */}
      <section className="bg-neutral-100 py-24 border-y border-neutral-200/70">
        <div className="max-w-xl mx-auto px-6 text-center">
          <iconify-icon icon="solar:letter-linear" width="32" height="32" className="text-neutral-400 mb-6"></iconify-icon>
          <h2 className="font-serif text-3xl tracking-tight font-medium mb-4">
            Týdně ti pošleme to nejlepší.
          </h2>
          <p className="text-lg text-neutral-600 mb-10">
            Žádný spam, jen pečlivě vybraná kvalita přímo do tvé schránky.
          </p>

          <form className="relative flex items-center w-full group" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="Tvůj e-mail" required className="w-full bg-transparent border-b border-neutral-400 pb-3 text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:border-[#0A0A0A] transition-colors text-lg rounded-none appearance-none" />
            <button type="submit" className="absolute right-0 bottom-3 font-mono text-sm uppercase tracking-wider text-[#0A0A0A] hover:text-[#D62828] transition-colors">
              Odebírat
            </button>
          </form>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0A0A0A] text-neutral-400 pt-20 pb-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <a href="#" className="font-serif font-medium tracking-tight text-2xl text-white uppercase mb-6 block">
                Prochlapy.
              </a>
              <p className="text-sm max-w-xs leading-relaxed">
                Magazín pro muže, kteří chtějí víc než jen povrchní čtení. Styl,
                technika, vztahy a kultura s nadhledem a bez klišé.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Kategorie
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Vztahy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Styl</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technika</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kultura</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Celebrity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zábava</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                O nás
              </h4>
              <ul className="flex flex-col gap-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Redakce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Napsali o nás</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pro klienty a agentury</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-6">
                Právní info
              </h4>
              <ul className="flex flex-col gap-3 text-sm mb-8">
                <li><a href="#" className="hover:text-white transition-colors">Ochrana soukromí</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nastavení cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Podmínky užití</a></li>
              </ul>
              <div className="flex gap-4">
                <a href="#" aria-label="Social 1" className="text-neutral-500 hover:text-white transition-colors">
                  <iconify-icon icon="solar:basketball-linear" width="20" height="20"></iconify-icon>
                </a>
                <a href="#" aria-label="Social 2" className="text-neutral-500 hover:text-white transition-colors">
                  <iconify-icon icon="solar:camera-linear" width="20" height="20"></iconify-icon>
                </a>
                <a href="#" aria-label="Social 3" className="text-neutral-500 hover:text-white transition-colors">
                  <iconify-icon icon="solar:letter-linear" width="20" height="20"></iconify-icon>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs">
            <span>© 2026 Prochlapy.cz. Všechna práva vyhrazena.</span>
            <span>Design pro rok 2026</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;