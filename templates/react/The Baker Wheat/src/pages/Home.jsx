import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuraCMSCollection } from '../lib/auraCms';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  const { items: products, loading: productsLoading } = useAuraCMSCollection('products');
  const { items: testimonials, loading: testimonialsLoading } = useAuraCMSCollection('testimonials');
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  const marqueeLogos = [
    { name: 'Marriott', icon: 'simple-icons:marriott' },
    { name: 'Hilton', icon: 'simple-icons:hilton' },
    { name: 'Shangri-La', icon: 'simple-icons:shangrila' },
    { name: 'Hyatt', icon: 'simple-icons:hyatt' },
    { name: 'Four Seasons', icon: 'simple-icons:foursquare' },
    { name: 'InterContinental', icon: 'simple-icons:intercom' }
  ];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80" 
            alt="Bakery production facility" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-2xl">
            <ScrollReveal variant="up" delay={0}>
              <div className="inline-block bg-[#133875]/10 text-[#133875] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Malaysia's Premium B2B Bakery
              </div>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-6">
                Artisan Bread, Built for <span className="text-[#133875]">Business</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={200}>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10">
                Elevate your menu with our premium frozen and par-baked solutions. Consistent quality, authentic flavor, and scale designed for the most demanding hotels and restaurants.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-[#133875] text-white px-8 py-4 rounded-lg font-semibold text-center btn-press shadow-soft hover:bg-[#102e60] transition-colors">
                  Explore Our Range
                </Link>
                <Link to="/contact" className="bg-white text-[#133875] border-2 border-[#133875] px-8 py-4 rounded-full font-semibold text-center btn-press hover:bg-slate-50 transition-colors">
                  Partner With Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Logo Strip Marquee */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Trusted By Leading Brands</p>
        </div>
        <div className="relative flex w-full overflow-hidden mask-edges">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: isMarqueeHovered ? 40 : 15, ease: "linear" }}
            className="flex w-max items-center"
            onHoverStart={() => setIsMarqueeHovered(true)}
            onHoverEnd={() => setIsMarqueeHovered(false)}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 px-12 items-center">
                {marqueeLogos.map((logo, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-400 hover:text-[#133875] transition-colors duration-300">
                    <iconify-icon icon={logo.icon} width="32"></iconify-icon>
                    <span className="font-bold text-xl tracking-tight">{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { target: "150", suffix: "+", label: "B2B Partners" },
              { target: "8000", suffix: " sqft", label: "Facility" },
              { target: "10000", suffix: "+", label: "Loaves/Day" },
              { target: "99.8", suffix: "%", label: "Consistency Rate" }
            ].map((stat, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#133875] tracking-tight mb-2">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="up">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-12">Engineered for Scale, <br/><span className="text-[#133875]">Crafted by Artisans.</span></h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[340px]">
            {/* Main large card */}
            <ScrollReveal variant="up" className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-soft group hover-lift bg-slate-900">
                <img src="https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?w=800&q=80" alt="Baking facility" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Nilai Facility</div>
                  <h3 className="text-3xl text-white font-extrabold mb-4">State-of-the-Art Production</h3>
                  <p className="text-slate-300 text-lg max-w-xl">Our 8,000 sqft facility combines traditional long-fermentation processes with modern freezing technology, locking in flavor and freshness.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Small card 1 */}
            <ScrollReveal variant="left" delay={100} className="h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-soft bg-slate-50 p-8 flex flex-col justify-center group hover-lift border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#504566]/10 text-[#504566] flex items-center justify-center mb-6">
                  <iconify-icon icon="lucide:check-circle" width="28"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">100% Halal Certified</h3>
                <p className="text-slate-500">Fully certified by JAKIM, ensuring strict compliance and peace of mind for all your hospitality and dining needs.</p>
              </div>
            </ScrollReveal>

            {/* Small card 2 */}
            <ScrollReveal variant="left" delay={200} className="h-full">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-soft bg-[#133875] text-white p-8 flex flex-col justify-center group hover-lift">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#D4AF37]">
                  <iconify-icon icon="lucide:flask-conical" width="28"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Formulations</h3>
                <p className="text-white/80">Need a signature burger bun or a bespoke crust? Our master bakers develop proprietary recipes exclusive to your brand.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Product Collection (CMS Data) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <ScrollReveal variant="up">
              <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Our Core Range</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Signature Collection</h2>
            </ScrollReveal>
            <ScrollReveal variant="left">
              <Link to="/products" className="text-[#133875] font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                View Full Catalog <iconify-icon icon="lucide:arrow-right"></iconify-icon>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsLoading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl overflow-hidden shadow-soft">
                  <div className="aspect-[4/5] bg-slate-200"></div>
                  <div className="p-6">
                    <div className="h-3 w-1/3 bg-slate-200 mb-3 rounded"></div>
                    <div className="h-6 w-3/4 bg-slate-200 mb-4 rounded"></div>
                    <div className="h-4 w-full bg-slate-200 mb-2 rounded"></div>
                    <div className="h-4 w-2/3 bg-slate-200 mb-6 rounded"></div>
                    <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ))
            ) : products?.length > 0 ? (
              products.slice(0, 4).map((product, i) => (
                <ScrollReveal key={product.id || i} variant="up" delay={i * 100}>
                  <div className="group rounded-2xl overflow-hidden shadow-soft bg-white hover-lift">
                    <div className="aspect-[4/5] overflow-hidden relative bg-slate-100">
                      <img 
                        src={product.image || product.thumbnail || product.imageUrl || 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80'} 
                        alt={product.title || product.name || 'Bakery product'} 
                        className="w-full h-full object-cover hover-zoom" 
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                        <iconify-icon icon="lucide:star"></iconify-icon> Signature
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">
                        {product.category || 'Artisan Bakery'}
                      </div>
                      <h3 className="text-xl font-extrabold text-[#133875] mb-2 tracking-tight">
                        {product.title || product.name || 'Artisan Loaf'}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                        {product.description || product.excerpt || 'Premium quality baked goods crafted for professionals.'}
                      </p>
                      <Link to="/products" className="text-[#133875] text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Details <iconify-icon icon="lucide:arrow-right"></iconify-icon>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-slate-500">
                Product collection is currently empty. Please check CMS.
              </div>
            )}
          </div>

          <ScrollReveal variant="up" className="mt-16">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft">
              <div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Looking for Wholesale Pricing?</h3>
                <p className="text-slate-400">Get access to our full B2B catalog and bulk tier pricing.</p>
              </div>
              <Link to="/contact" className="bg-[#D4AF37] hover:bg-[#c29f30] text-slate-900 px-8 py-4 rounded-lg font-bold whitespace-nowrap btn-press transition-colors">
                Get a Custom Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Testimonials (CMS Data) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal variant="up">
              <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Industry Voices</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Partner Testimonials</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse bg-slate-50 p-8 rounded-2xl shadow-soft h-64 border border-gray-100"></div>
              ))
            ) : testimonials?.length > 0 ? (
              testimonials.slice(0, 3).map((test, i) => (
                <ScrollReveal key={test.id || i} variant="up" delay={i * 100}>
                  <div className="bg-slate-50 p-8 rounded-2xl shadow-soft hover-lift h-full flex flex-col border border-gray-100">
                    <div className="flex gap-1 text-[#D4AF37] mb-6">
                      {[...Array(5)].map((_, idx) => (
                        <iconify-icon key={idx} icon="lucide:star" width="18"></iconify-icon>
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-8 flex-grow">
                      "{test.quote || test.content || 'Excellent quality and service.'}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[#133875] text-white flex items-center justify-center font-bold text-lg">
                        {(test.author || test.name || 'P').charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 tracking-tight">{test.author || test.name || 'Partner'}</div>
                        <div className="text-sm text-slate-500">{test.role || test.position || 'Executive Chef'}</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            ) : (
               <div className="col-span-full text-center py-8 text-slate-500">
                No testimonials found in CMS.
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-24 relative overflow-hidden bg-[#133875]">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#102e60] rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1a4a9a] rounded-full blur-[100px] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal variant="up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to Elevate Your Menu?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join leading F&B establishments across Malaysia who trust The Baker Wheat for their daily bread and pastry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-[#133875] px-8 py-4 rounded-lg font-bold btn-press shadow-lg hover:bg-slate-50 transition-colors">
                Speak to Our Team
              </Link>
              <Link to="/products" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold btn-press hover:bg-white/10 transition-colors">
                Get a Free Sample Kit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}