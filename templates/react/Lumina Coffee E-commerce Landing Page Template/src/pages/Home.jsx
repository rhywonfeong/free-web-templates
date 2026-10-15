import React from 'react';
import Button from '../components/Button';
import Ticker from '../components/Ticker';
import { useCart } from '../context/CartContext';

// Sample product data
const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Display Coffee Mug",
    description: "Keep your coffee at the exact perfect temperature for hours. Features an integrated LED display showing real-time liquid temperature and remaining battery life.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1565452329774-0610f607c37d?w=800&q=80",
    color: "from-amber-100 to-orange-100"
  },
  {
    id: 2,
    name: "Smart Tea Infuser",
    description: "Precision brewing at your fingertips. Set the exact time and temperature for different tea varietals. The magnetic basket lowers and raises automatically.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    color: "from-stone-200 to-stone-300"
  },
  {
    id: 3,
    name: "Tumbler 40oz Max",
    description: "Built for the long haul. Double-walled vacuum insulation keeps iced drinks cold for 36 hours. Cupholder friendly base and ergonomic handle.",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1628147131709-ebcb1b181298?w=800&q=80",
    color: "from-orange-100 to-rose-100"
  }
];

const REVIEWS = [
  { id: 1, name: "Sarah Jenkins", role: "Coffee Enthusiast", text: "The temperature control mug completely changed my morning routine. No more microwaving lukewarm coffee!", rating: 5 },
  { id: 2, name: "Marcus Thorne", role: "Barista", text: "Incredibly well-built products. The aesthetic is beautiful and the functionality matches. Highly recommended.", rating: 5 },
  { id: 3, name: "Elena Rodriguez", role: "Daily Commuter", text: "My 40oz tumbler goes everywhere with me. Dropped it twice and not a single dent. Worth every penny.", rating: 4 },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-amber-100/40 to-orange-50/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-widest border border-stone-200">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                New Collection 2024
              </div>
              
              <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.85] text-stone-900">
                Elevate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-500">Your Brew</span>
              </h1>
              
              <p className="text-lg md:text-xl text-stone-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Experience coffee the way it was meant to be. Premium temperature-controlled mugs and accessories designed for the modern ritual.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <Button to="/shop" variant="primary" className="w-full sm:w-auto">Explore Collection</Button>
                <Button to="/about" variant="secondary" className="w-full sm:w-auto">Our Story</Button>
              </div>

              {/* Trust markers */}
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-70">
                 <div className="flex -space-x-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                 </div>
                 <div className="text-sm font-semibold">
                    <div className="flex text-amber-500"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
                    <span className="text-stone-500">From 2,000+ happy brewers</span>
                 </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-lg lg:max-w-none group">
              <div className="absolute inset-0 bg-amber-600/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
              {/* Main Product Image - simulated floating render */}
              <div className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-stone-100 to-stone-200 rounded-[3rem] p-8 shadow-2xl shadow-amber-900/10 overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1572119865084-43c285814d63?w=800&q=80" 
                  alt="Premium Mug" 
                  className="w-full h-full object-cover mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                     <iconify-icon icon="solar:fire-bold" class="text-orange-500"></iconify-icon>
                     135°F
                  </div>
                  <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider mt-1">Perfect Temp</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Ticker text="FREE SHIPPING OVER $50 • LIFETIME WARRANTY • 30-DAY RETURNS" />

      {/* TRUST BENEFITS ROW */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            {[
              { icon: 'solar:box-linear', title: 'Free & Fast Delivery', desc: 'On all orders over $50' },
              { icon: 'solar:headphones-round-sound-linear', title: '24/7 Support', desc: 'Real experts, real answers' },
              { icon: 'solar:shield-check-linear', title: 'Money Back Guarantee', desc: '30-day risk-free trial' }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center pt-12 md:pt-0 first:pt-0 px-6 group">
                <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                  <iconify-icon icon={benefit.icon} width="36"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-stone-900">{benefit.title}</h3>
                <p className="text-stone-500 font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATIVE SECTION - Added per request */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=1200&q=80" alt="Coffee Roasting" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Our Process</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">The Art of <br/>Roasting.</h3>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                   We believe great coffee starts long before water hits the bean. It begins with ethical sourcing from high-altitude farms, precise roasting profiles developed over years, and ends with the perfect vessel to preserve its complex notes.
                </p>
                <ul className="space-y-4 mb-10">
                   {[
                      "Sustainably sourced single-origin beans",
                      "Small-batch roasted for peak freshness",
                      "Hardware designed for flavor preservation"
                   ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-stone-300 font-medium">
                         <div className="w-6 h-6 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-500">
                            <iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
                         </div>
                         {item}
                      </li>
                   ))}
                </ul>
                <Button variant="primary">Learn More</Button>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80" className="rounded-3xl rounded-tr-none w-full h-64 object-cover" alt="Pour over" />
                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&q=80" className="rounded-3xl rounded-bl-none w-full h-64 object-cover mt-8" alt="Coffee beans" />
             </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (Alternating Layout) */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-20 md:mb-32">
             <h2 className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">Master Your Morning</h2>
             <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-stone-900">Our Products</h3>
          </div>

          <div className="space-y-24 md:space-y-40">
            {FEATURED_PRODUCTS.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={product.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Image Card */}
                  <div className="w-full lg:w-1/2">
                    <div className={`aspect-square rounded-[3rem] bg-gradient-to-br ${product.color} p-8 lg:p-12 relative group shadow-xl`}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-2xl mix-blend-multiply drop-shadow-xl transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h4 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 leading-none">
                      {product.name}
                    </h4>
                    <p className="text-2xl font-bold text-amber-700">${product.price.toFixed(2)}</p>
                    <p className="text-lg text-stone-500 leading-relaxed font-medium">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                      <Button variant="dark" className="w-full sm:w-auto" onClick={() => addToCart(product)}>
                         Add to Cart
                      </Button>
                      <Button variant="secondary" className="w-full sm:w-auto">Learn More</Button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Ticker text="JOIN OUR COFFEE CLUB FOR 20% OFF • NEW BEANS EVERY MONTH" speed="slow" />

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tighter uppercase text-stone-900">Client Reviews</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div 
                key={review.id} 
                className={`p-10 rounded-[2rem] transition-all duration-300 ${
                  index === 1 
                    ? 'bg-stone-900 text-white shadow-2xl transform md:-translate-y-4' 
                    : 'bg-stone-50 text-stone-900 border border-stone-100 hover:shadow-xl'
                }`}
              >
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <iconify-icon key={i} icon="solar:star-bold" width="20"></iconify-icon>
                  ))}
                </div>
                <p className={`text-lg mb-8 font-medium italic ${index === 1 ? 'text-stone-300' : 'text-stone-600'}`}>
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                    index === 1 ? 'bg-stone-800 text-white' : 'bg-stone-200 text-stone-700'
                  }`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold tracking-tight">{review.name}</h5>
                    <p className={`text-sm ${index === 1 ? 'text-stone-400' : 'text-stone-500'}`}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Simple visual indicators for UI aesthetic */}
          <div className="flex justify-center gap-3 mt-12">
             <div className="w-3 h-3 rounded-full bg-stone-300"></div>
             <div className="w-8 h-3 rounded-full bg-amber-600"></div>
             <div className="w-3 h-3 rounded-full bg-stone-300"></div>
          </div>
        </div>
      </section>

    </div>
  );
}