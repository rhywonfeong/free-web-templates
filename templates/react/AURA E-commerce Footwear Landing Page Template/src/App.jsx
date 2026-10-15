import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "AURA Phantom",
    category: "Men's Lifestyle Shoe",
    price: "$145",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
    tag: "New",
    tagClass: "bg-white/90 text-zinc-900"
  },
  {
    id: 2,
    name: "AURA Classic",
    category: "Unisex Canvas",
    price: "$95",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "AURA Velocity",
    category: "Women's Running Shoe",
    price: "$160",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    tag: "Bestseller",
    tagClass: "bg-zinc-900/90 text-white"
  },
  {
    id: 4,
    name: "AURA Core",
    category: "Men's Training Shoe",
    price: "$130",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter submission logic would go here
  };

  return (
    <div className="bg-white text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </button>

            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-lg font-semibold text-zinc-900 tracking-tighter">AURA</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Men</a>
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Women</a>
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">New Arrivals</a>
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Our Story</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
                <iconify-icon icon="solar:magnifer-linear" width="22" height="22" style={{ strokeWidth: "1.5" }}></iconify-icon>
              </button>
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <iconify-icon icon="solar:user-linear" width="22" height="22" style={{ strokeWidth: "1.5" }}></iconify-icon>
              </button>
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
                <iconify-icon icon="solar:cart-large-linear" width="22" height="22" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-zinc-900 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-6 space-y-4 shadow-xl">
            <a href="#" className="block text-base font-medium text-zinc-900">Men</a>
            <a href="#" className="block text-base font-medium text-zinc-900">Women</a>
            <a href="#" className="block text-base font-medium text-zinc-900">New Arrivals</a>
            <a href="#" className="block text-base font-medium text-zinc-900">Our Story</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white min-h-[90vh] flex flex-col items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 mb-8 border border-zinc-200/50">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Introducing the Series 02
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
              Motion, refined.
            </h1>
            <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Engineered for the demands of modern life. Uncompromising comfort meets an aesthetic born from pure functionality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all shadow-sm">
                Shop Collection
              </a>
              <a href="#" className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-50 transition-all border border-zinc-200 shadow-sm flex items-center justify-center gap-2">
                <iconify-icon icon="solar:play-circle-linear" width="20" height="20" style={{ strokeWidth: "1.5" }}></iconify-icon>
                Watch Film
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop" 
              alt="Premium white sneaker" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-zinc-200/50 relative z-0 mix-blend-darken filter contrast-125"
            />
          </div>
        </section>

        {/* Features Bar */}
        <section className="border-y border-zinc-100 bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100">
              <div className="flex flex-col items-center text-center px-4">
                <iconify-icon icon="solar:leaf-linear" width="24" height="24" className="text-zinc-400 mb-3" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <span className="text-xs font-medium text-zinc-900 tracking-tight">Eco-Materials</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <iconify-icon icon="solar:wind-linear" width="24" height="24" className="text-zinc-400 mb-3" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <span className="text-xs font-medium text-zinc-900 tracking-tight">Hyper Breathable</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <iconify-icon icon="solar:cloud-linear" width="24" height="24" className="text-zinc-400 mb-3" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <span className="text-xs font-medium text-zinc-900 tracking-tight">Cloud Cushioning</span>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <iconify-icon icon="solar:shield-check-linear" width="24" height="24" className="text-zinc-400 mb-3" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <span className="text-xs font-medium text-zinc-900 tracking-tight">Lifetime Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Curated for you</h2>
                <p className="text-sm text-zinc-500 font-medium">Explore our latest silhouettes.</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
                View all <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" style={{ strokeWidth: "1.5" }}></iconify-icon>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {products.map((product) => (
                <a key={product.id} href="#" className="group block">
                  <div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl overflow-hidden mb-5">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-110"
                    />
                    {product.tag && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-2.5 py-1 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm ${product.tagClass}`}>
                          {product.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1">{product.name}</h3>
                      <p className="text-xs text-zinc-500 font-medium">{product.category}</p>
                    </div>
                    <span className="text-sm font-medium text-zinc-900">{product.price}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 sm:hidden flex justify-center">
              <a href="#" className="px-6 py-2.5 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors w-full text-center">
                View all products
              </a>
            </div>
          </div>
        </section>

        {/* Story Section (Split) */}
        <section className="py-24 sm:py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                  Crafted for the conscious. <br className="hidden sm:block" /> Designed for the long run.
                </h2>
                <p className="text-sm text-zinc-500 mb-8 font-medium leading-relaxed">
                  Every pair of AURA shoes is a testament to minimalist design and maximum performance. We source only the finest sustainable materials, ensuring a footprint that's as light on the earth as our shoes are on your feet.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-zinc-900 mt-0.5" style={{ strokeWidth: "1.5" }}></iconify-icon>
                    <span className="text-sm text-zinc-700 font-medium">100% Recycled mesh uppers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-zinc-900 mt-0.5" style={{ strokeWidth: "1.5" }}></iconify-icon>
                    <span className="text-sm text-zinc-700 font-medium">Algae-based responsive foam midsoles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-zinc-900 mt-0.5" style={{ strokeWidth: "1.5" }}></iconify-icon>
                    <span className="text-sm text-zinc-700 font-medium">Ethically assembled in certified facilities</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors border-b border-zinc-900 pb-0.5">
                  Discover our materials <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" style={{ strokeWidth: "1.5" }}></iconify-icon>
                </a>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square bg-zinc-200 rounded-3xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=2000&auto=format&fit=crop" 
                    alt="Shoe materials close up" 
                    className="object-cover w-full h-full filter contrast-110 saturate-50"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-zinc-100 rounded-full -z-10 blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Banner */}
        <section className="bg-zinc-900 py-20 text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-6">Join the movement.</h2>
          <p className="text-sm text-zinc-400 font-medium max-w-md mx-auto mb-8">
            Subscribe for early access to new releases, exclusive editorial content, and a 10% welcome gift.
          </p>
          <form className="max-w-sm mx-auto relative flex items-center" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Email address" 
              required
              className="w-full bg-transparent border-b border-zinc-700 text-white placeholder-zinc-500 text-sm py-3 px-0 focus:outline-none focus:border-white transition-colors appearance-none"
            />
            <button type="submit" className="absolute right-0 text-zinc-400 hover:text-white transition-colors">
              <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <span className="text-lg font-semibold tracking-tighter text-zinc-900 block mb-6">AURA</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-xs">
                Designing the future of footwear. Built for motion, crafted for life.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Mens</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Womens</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">FAQ</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Returns</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Shipping</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">About</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Sustainability</a></li>
                <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-medium">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100 gap-4">
            <p className="text-xs text-zinc-400 font-medium">
              © 2024 AURA Footwear Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <iconify-icon icon="solar:global-linear" width="20" height="20" style={{ strokeWidth: "1.5" }}></iconify-icon>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <iconify-icon icon="solar:letter-linear" width="20" height="20" style={{ strokeWidth: "1.5" }}></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;