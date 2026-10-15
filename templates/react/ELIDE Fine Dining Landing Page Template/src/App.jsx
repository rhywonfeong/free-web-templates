import { useState, useEffect } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle nav background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-[#FAFAFA] text-zinc-900 antialiased selection:bg-zinc-200 selection:text-black flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="text-xl font-medium tracking-tighter uppercase text-black">
              E L I D E
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-zinc-500 hover:text-black transition-colors">Experience</a>
              <a href="#menu" className="text-sm text-zinc-500 hover:text-black transition-colors">Menu</a>
              <a href="#reviews" className="text-sm text-zinc-500 hover:text-black transition-colors">Reviews</a>
              <a href="#visit" className="text-sm text-zinc-500 hover:text-black transition-colors">Visit</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#visit" className="hidden md:flex items-center justify-center px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors">
              Reserve a Table
            </a>
            <button 
              className="md:hidden flex items-center justify-center text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <iconify-icon icon={isMobileMenuOpen ? "solar:close-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-medium">
            <a href="#about" onClick={closeMobileMenu} className="text-zinc-900 hover:text-black">Experience</a>
            <a href="#menu" onClick={closeMobileMenu} className="text-zinc-900 hover:text-black">Menu</a>
            <a href="#reviews" onClick={closeMobileMenu} className="text-zinc-900 hover:text-black">Reviews</a>
            <a href="#visit" onClick={closeMobileMenu} className="text-zinc-900 hover:text-black">Visit</a>
            <div className="h-px w-full bg-zinc-100 my-4"></div>
            <a href="#visit" onClick={closeMobileMenu} className="inline-flex items-center justify-center px-6 py-4 bg-black text-white text-base font-medium rounded-xl">
              Reserve a Table
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex-grow pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-hero rounded-3xl h-[75vh] min-h-[600px] flex items-end p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium tracking-wide uppercase mb-6">
              <iconify-icon icon="solar:map-point-linear"></iconify-icon>
              Downtown, Metropolis
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
              Culinary simplicity, elevated.
            </h1>
            <p className="text-base md:text-lg text-white/80 font-normal max-w-md leading-relaxed mb-8">
              Experience seasonal ingredients prepared with intention. A sanctuary for modern dining where every detail is considered.
            </p>
            <a href="#visit" className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-100 transition-colors">
              Make a Reservation
            </a>
          </div>
        </div>

        {/* About / Info */}
        <section id="about" className="py-24 md:py-32 max-w-4xl mx-auto text-center px-6">
          <span className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6 block">Our Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-snug">
            We believe in the purity of flavor. By sourcing locally and intervening minimally, we let the ingredients speak for themselves in an atmosphere of quiet elegance.
          </h2>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-16 max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-2">Seasonal Highlights</h2>
              <p className="text-sm text-zinc-500">A glimpse into our current tasting menu.</p>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="hidden md:flex items-center gap-2 text-sm font-medium text-black hover:text-zinc-600 transition-colors group">
              View Full Menu
              <iconify-icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group flex flex-col gap-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 relative">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" alt="Charred Wagyu" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium tracking-tight text-zinc-900">Charred Wagyu</h3>
                  <span className="text-sm text-zinc-500">$48</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Smoked marrow, preserved wild mushrooms, and a delicate reduction of black garlic.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="group flex flex-col gap-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 relative">
                <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop" alt="Artisan Agnolotti" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium tracking-tight text-zinc-900">Artisan Agnolotti</h3>
                  <span className="text-sm text-zinc-500">$32</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Handmade pasta filled with ricotta, finished in a sage brown butter sauce with toasted pine nuts.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="group flex flex-col gap-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 relative">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Citrus Tart" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium tracking-tight text-zinc-900">Citrus Tart</h3>
                  <span className="text-sm text-zinc-500">$16</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Meyer lemon curd, torched meringue, atop a buttery shortbread crust.</p>
              </div>
            </div>
          </div>
          
          <a href="#" onClick={(e) => e.preventDefault()} className="mt-10 md:hidden flex items-center justify-center w-full py-3.5 border border-zinc-200 rounded-xl text-sm font-medium text-black">
            View Full Menu
          </a>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 my-16 bg-white border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Guest Experiences</h2>
              <div className="flex items-center justify-center gap-1 text-black">
                <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
                <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
                <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
                <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
                <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-100/50">
                <p className="text-base text-zinc-700 leading-relaxed">
                  "An absolute triumph of modern cuisine. The pacing of the tasting menu was flawless, and the wine pairings were exceptionally considered."
                </p>
              </div>
              
              {/* Review 2 */}
              <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-100/50">
                <p className="text-base text-zinc-700 leading-relaxed">
                  "The attention to detail is unmatched. Every dish tells a compelling story, and the dining atmosphere remains wonderfully serene."
                </p>
              </div>

              {/* Review 3 */}
              <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-100/50">
                <p className="text-base text-zinc-700 leading-relaxed">
                  "A truly memorable experience from start to finish. The charred wagyu was an absolute revelation. We will certainly be returning soon."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Visit */}
      <footer id="visit" className="py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-200/60 pt-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-medium tracking-tighter uppercase text-black mb-2">E L I D E</h3>
            <p className="text-sm text-zinc-500">123 Culinary Ave, Metropolis, NY 10001</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-black transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-400 hover:text-black transition-colors">
              <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;