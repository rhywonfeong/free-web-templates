import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-stone-100/50 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl tracking-tighter uppercase font-playfair font-medium">ELVAINO</a>
          <div className="hidden md:flex items-center gap-6 text-sm font-light text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors font-geist">Men</a>
            <a href="#" className="hover:text-stone-900 transition-colors font-geist">Women</a>
            <a href="#" className="hover:text-stone-900 transition-colors font-geist">Unstitched</a>
            <a href="#" className="hover:text-stone-900 transition-colors font-geist">Collections</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-stone-600 hover:text-stone-900 transition-colors">
            <iconify-icon icon="solar:magnifer-linear" width="20" height="20" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </button>
          <button className="text-stone-600 hover:text-stone-900 transition-colors relative">
            <iconify-icon icon="solar:bag-2-linear" width="20" height="20" style={{ strokeWidth: 1.5 }}></iconify-icon>
            <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-geist">0</span>
          </button>
          <button className="md:hidden text-stone-600">
            <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-200 bg-orange-900/60 w-full max-w-7xl border-white/10 border rounded-3xl mt-8 mx-auto overflow-hidden shadow-2xl h-[600px]">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594932224010-77f4ad44929a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Brand Watermark */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6 animate-fadeIn animation-delay-600" style={{ letterSpacing: '-0.02em' }}>
          <span className="block leading-none font-playfair font-medium" style={{ fontWeight: 600, fontSize: 'min(18vw, 240px)', lineHeight: 0.8, color: 'rgba(255, 255, 255, 0.05)' }}>ELVAINO</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <span className="text-white/60 text-xs tracking-widest uppercase mb-4 block animate-fadeInLeft font-geist">Autumn/Winter 2024</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-white tracking-tighter animate-fadeInLeft animation-delay-300 font-playfair font-medium">
              Defining The Art of Modern Tailoring.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-sm sm:text-base text-orange-300 max-w-[38ch] animate-fadeInRight animation-delay-400 font-light leading-relaxed font-geist">
              Experience the fusion of heritage craftsmanship and contemporary design. Bespoke stitched and premium unstitched fabrics for the discerning.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-500 mt-8 items-center">
              <a href="#shop" className="hero-btn-primary group">
                <span className="bg-white px-6 rounded-[7px] h-full flex items-center justify-center gap-2 font-medium font-geist">
                  Shop Men's
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </span>
              </a>
              <a href="#women" className="hero-btn-secondary font-geist">
                Shop Women's
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ image, title, subtitle }) => (
  <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100">
    <img src={image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-8 left-8">
      <h3 className="text-xl text-white tracking-tight translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-playfair font-medium">{title}</h3>
      <p className="text-white/70 text-xs mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 uppercase tracking-widest font-light font-geist">{subtitle}</p>
    </div>
  </div>
);

const ProductCard = ({ image, name, category, price }) => (
  <div className="group flex flex-col">
    <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 rounded-xl mb-4">
      <img src={image} className="w-full h-full object-cover" alt={name} />
      <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
      </button>
    </div>
    <h4 className="text-sm font-medium text-stone-800 font-geist">{name}</h4>
    <p className="text-xs text-stone-400 font-light mt-1 font-geist">{category}</p>
    <p className="text-sm font-medium mt-2 font-geist">{price}</p>
  </div>
);

const ValueItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center md:items-start gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-stone-50 border border-stone-100">
      <iconify-icon icon={icon} width="22" className="text-stone-600"></iconify-icon>
    </div>
    <h5 className="text-sm font-medium tracking-tight font-geist">{title}</h5>
    <p className="text-xs text-stone-500 font-light leading-relaxed font-geist">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl tracking-tighter mb-6 font-playfair font-medium">Stay Connected</h2>
            <p className="text-stone-400 text-sm font-light max-w-sm leading-relaxed mb-8 font-geist">Join the Elvaino inner circle for exclusive access to collection launches and style guides.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 flex-grow max-w-xs font-light" />
              <button className="bg-white text-stone-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-200 transition-colors font-geist">Join</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h6 className="text-xs font-medium uppercase tracking-widest mb-6 text-stone-500 font-geist">Shop</h6>
              <ul className="space-y-4 text-sm text-stone-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors font-geist">Men's Suits</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Women's Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Unstitched Fabrics</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-medium uppercase tracking-widest mb-6 text-stone-500 font-geist">Brand</h6>
              <ul className="space-y-4 text-sm text-stone-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors font-geist">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Artisans</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Bespoke Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-medium uppercase tracking-widest mb-6 text-stone-500 font-geist">Support</h6>
              <ul className="space-y-4 text-sm text-stone-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors font-geist">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-geist">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xl tracking-tighter uppercase font-playfair font-medium">ELVAINO</div>
          <p className="text-stone-600 text-xs font-light font-geist">© 2024 Elvaino Emporium. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-stone-500 hover:text-white transition-colors"><iconify-icon icon="solar:share-circle-linear" width="20"></iconify-icon></a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors"><iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <Hero />

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl tracking-tighter mb-4 font-playfair font-medium">Curated Categories</h2>
              <p className="text-stone-500 text-sm font-light font-geist">Explore our latest arrivals across multiple collections, from formal stitched suits to premium unstitched fabrics.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors group font-geist">
              View All Collections
              <iconify-icon icon="solar:arrow-right-up-linear" width="16" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard 
              image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              title="Men's Stitched"
              subtitle="Executive Selection"
            />
            <CategoryCard 
              image="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop"
              title="Women's Couture"
              subtitle="Elegance Redefined"
            />
            <CategoryCard 
              image="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop"
              title="Premium Unstitched"
              subtitle="Create Your Vision"
            />
          </div>
        </section>

        {/* Product Grid */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase mb-3 font-geist">Shop Essentials</span>
              <h2 className="text-3xl tracking-tighter text-stone-900 font-playfair font-medium">The Signature Series</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              <ProductCard 
                image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                name="Classic Navy Wool Suit"
                category="Stitched / Premium Blend"
                price="$285.00"
              />
              <ProductCard 
                image="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1964&auto=format&fit=crop"
                name="Ivory Embroidered Silk"
                category="Unstitched / Luxury Edition"
                price="$145.00"
              />
              <ProductCard 
                image="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop"
                name="Charcoal Plaid Slim-Fit"
                category="Stitched / Italian Fabric"
                price="$320.00"
              />
              <ProductCard 
                image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                name="Emerald Pure Linen Set"
                category="Unstitched / Breathable"
                price="$115.00"
              />
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-24 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              <ValueItem 
                icon="solar:scissors-linear"
                title="Master Tailoring"
                description="Precision in every stitch, ensuring a silhouette that commands attention."
              />
              <ValueItem 
                icon="solar:stars-minimalistic-linear"
                title="Premium Fabrics"
                description="Sourced from the finest mills worldwide to guarantee luxury feel."
              />
              <ValueItem 
                icon="solar:box-minimalistic-linear"
                title="Global Delivery"
                description="Expertly packaged and shipped with care to any destination."
              />
              <ValueItem 
                icon="solar:user-circle-linear"
                title="Personal Styling"
                description="Consult with our style experts for the perfect fit and look."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}