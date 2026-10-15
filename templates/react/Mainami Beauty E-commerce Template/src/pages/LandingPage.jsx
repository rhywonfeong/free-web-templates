import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

// Mock Data
const PRODUCT = {
  id: 'pudding-01',
  name: 'Simply Hair Pudding',
  basePrice: 28,
  rating: 4.9,
  reviewsCount: 2148,
  images: [
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
    'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80',
    'https://images.unsplash.com/photo-1512361436605-a484fc56fc4e?w=800&q=80',
    'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=800&q=80'
  ]
};

const BUNDLES = [
  { id: '1', qty: 1, type: '1 Jar', discount: 0, tag: null },
  { id: '2', qty: 2, type: '2 Jars', discount: 10, tag: 'Most Popular' },
  { id: '3', qty: 3, type: '3 Jars', discount: 15, tag: 'Best Value' },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    curlType: "3C/4A Curls",
    rating: 5,
    title: "Holy Grail Product!",
    body: "This is the ONLY product that gives my curls definition without making them feel like ramen noodles. It's perfectly hydrating, has the most amazing slip, and dries completely soft. I'm obsessed!",
    verified: true,
    date: "1 week ago"
  },
  {
    name: "Jessica T.",
    curlType: "Mixed Texture",
    rating: 5,
    title: "Tamed the frizz completely",
    body: "I've tried literally everything for my daughter's mixed hair. The Simply Hair Pudding provides the perfect slip, moisture, and hold. Wash days are no longer a struggle and the definition lasts for days. Smells heavenly too!",
    verified: true,
    date: "3 weeks ago"
  },
  {
    name: "Amanda R.",
    curlType: "3B Curls",
    rating: 5,
    title: "Threw out all my gels",
    body: "Game changer. Traditional gels were breaking my hair and leaving it so dry and flaky. This pudding gives me day 4 hair on day 1. It’s lightweight but holds the curl pattern perfectly.",
    verified: true,
    date: "1 month ago"
  },
  {
    name: "Chloe K.",
    curlType: "4C Coils",
    rating: 5,
    title: "Incredible for twist-outs",
    body: "Finally, a product that understands high porosity hair. It seals in the moisture and my twist-outs have never looked better or felt softer. The marshmallow root really makes detangling a breeze.",
    verified: true,
    date: "2 months ago"
  }
];

const FAQS = [
  {
    q: "Will this leave a crunchy cast on my curls?",
    a: "Not at all! Our Simply Hair Pudding is formulated specifically to provide definition and hold without any of the stiffness or flaking associated with traditional gels. It dries completely soft and touchable."
  },
  {
    q: "Is it safe for color-treated hair?",
    a: "Yes! Our formula is 100% color-safe, sulfate-free, and contains no harsh alcohols that strip your color or dry out your hair."
  },
  {
    q: "How long does one jar last?",
    a: "Depending on your hair length and density, one jar typically lasts 30-45 days with regular use. A little goes a long way! We recommend starting with a quarter-sized amount per section."
  },
  {
    q: "What curl types is this best for?",
    a: "Simply Hair Pudding is formulated to be versatile across textures ranging from 2B waves to 4C coils. It provides the perfect balance of moisture and flexible hold."
  }
];

export default function LandingPage() {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedBundleId, setSelectedBundleId] = useState('2');
  const [purchaseType, setPurchaseType] = useState('subscribe');
  const [showStickyCart, setShowStickyCart] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  
  const addToCartRef = useRef(null);

  const selectedBundle = BUNDLES.find(b => b.id === selectedBundleId);
  
  const subscriptionDiscount = purchaseType === 'subscribe' ? 15 : 0;
  const originalTotal = PRODUCT.basePrice * selectedBundle.qty;
  const bundleDiscountedTotal = originalTotal * (1 - selectedBundle.discount / 100);
  const finalTotal = bundleDiscountedTotal * (1 - subscriptionDiscount / 100);
  const pricePerItem = finalTotal / selectedBundle.qty;

  useEffect(() => {
    const handleScroll = () => {
      if (addToCartRef.current) {
        const rect = addToCartRef.current.getBoundingClientRect();
        setShowStickyCart(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    addToCart(
      {
        id: PRODUCT.id,
        name: PRODUCT.name,
        image: PRODUCT.images[0],
      }, 
      selectedBundle.qty,
      { 
        type: `${selectedBundle.type} ${purchaseType === 'subscribe' ? '(Subscription)' : ''}`, 
        price: pricePerItem 
      }
    );
  };

  return (
    <div className="pb-24 lg:pb-0">
      {/* --- HERO SECTION --- */}
      <section id="product" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-10 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="aspect-[4/5] md:aspect-square bg-black/5 rounded-2xl md:rounded-3xl overflow-hidden relative group">
              <img 
                src={PRODUCT.images[activeImageIndex]} 
                alt="Simply Hair Pudding" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-[#b7cad2] backdrop-blur-sm text-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-wider">
                  <iconify-icon icon="solar:star-fall-minimalistic-bold" className="text-black"></iconify-icon>
                  Award Winning
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <iconify-icon icon="solar:leaf-linear" className="text-black"></iconify-icon>
                <span className="text-xs font-medium text-black">Vegan & Clean Ingredients</span>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
              {PRODUCT.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-black shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Form */}
          <div className="w-full lg:w-[45%] flex flex-col">
            
            <a href="#reviews" className="flex items-center gap-2 mb-3 group inline-flex w-fit">
              <div className="flex text-[#b7cad2]">
                {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold" width="16"></iconify-icon>)}
              </div>
              <span className="text-sm font-medium text-black/60 group-hover:text-black transition-colors underline decoration-black/20 underline-offset-2">
                {PRODUCT.rating} ({PRODUCT.reviewsCount} Reviews)
              </span>
            </a>

            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-4 leading-tight">
              {PRODUCT.name}
            </h1>
            
            <p className="text-base md:text-lg text-black/60 mb-6 leading-relaxed">
              The holy grail for defined, bouncy curls <strong className="text-black font-medium">without the crunchy cast</strong>. Infused with natural superfoods for ultimate moisture, phenomenal slip, and a flexible, flake-free hold.
            </p>

            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-medium tracking-tight text-black">${finalTotal.toFixed(2)}</span>
              {(selectedBundle.discount > 0 || subscriptionDiscount > 0) && (
                <>
                  <span className="text-lg text-black/40 line-through mb-1">${originalTotal.toFixed(2)}</span>
                  <span className="text-sm font-bold text-black bg-[#b7cad2] px-2 py-1 rounded mb-1">
                    Save ${(originalTotal - finalTotal).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            <div className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-1 mb-6 flex relative">
              <div 
                className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm border border-black/5 transition-all duration-300 ease-out z-0 ${purchaseType === 'subscribe' ? 'left-1' : 'left-[calc(50%+3px)]'}`}
              ></div>
              
              <button 
                onClick={() => setPurchaseType('subscribe')}
                className={`flex-1 py-3 px-4 relative z-10 rounded-xl text-sm font-medium transition-colors flex flex-col items-center justify-center gap-1 ${
                  purchaseType === 'subscribe' ? 'text-black' : 'text-black/50 hover:text-black/80'
                }`}
              >
                <span>Subscribe & Save</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold ${purchaseType === 'subscribe' ? 'text-black' : 'text-black/40'}`}>
                  Best Value (15% Off)
                </span>
              </button>
              
              <button 
                onClick={() => setPurchaseType('one-time')}
                className={`flex-1 py-3 px-4 relative z-10 rounded-xl text-sm font-medium transition-colors flex flex-col items-center justify-center gap-1 ${
                  purchaseType === 'one-time' ? 'text-black' : 'text-black/50 hover:text-black/80'
                }`}
              >
                <span>One-Time Purchase</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-black/40">
                  Standard Price
                </span>
              </button>
            </div>

            <div className="mb-6 space-y-3">
              {BUNDLES.map((bundle) => {
                const bOrgTotal = PRODUCT.basePrice * bundle.qty;
                const bDiscTotal = bOrgTotal * (1 - bundle.discount / 100);
                const bFinal = bDiscTotal * (1 - (purchaseType === 'subscribe' ? 15 : 0) / 100);
                
                return (
                  <label 
                    key={bundle.id}
                    className={`
                      relative flex items-center justify-between p-4 rounded-2xl cursor-pointer border-2 transition-all
                      ${selectedBundleId === bundle.id 
                        ? 'border-black bg-black/5 shadow-sm' 
                        : 'border-black/10 bg-white hover:border-black/20'
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        selectedBundleId === bundle.id ? 'border-black' : 'border-black/20'
                      }`}>
                        {selectedBundleId === bundle.id && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-black">{bundle.type}</span>
                          {bundle.tag && (
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              bundle.id === '2' ? 'bg-[#b7cad2] text-black' : 'bg-black text-[#F7F7F7]'
                            }`}>
                              {bundle.tag}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-black/50 block mt-0.5">
                          ${(bFinal / bundle.qty).toFixed(2)} / jar
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block font-medium text-black">
                        ${bFinal.toFixed(2)}
                      </span>
                    </div>
                    <input 
                      type="radio" 
                      name="bundle" 
                      value={bundle.id}
                      checked={selectedBundleId === bundle.id}
                      onChange={(e) => setSelectedBundleId(e.target.value)}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>

            {purchaseType === 'subscribe' && (
              <div className="mb-6 flex items-center gap-3 bg-black/[0.02] p-3 rounded-xl border border-black/10 text-sm">
                <iconify-icon icon="solar:calendar-date-linear" className="text-black/50" width="20"></iconify-icon>
                <span className="text-black/60 flex-1">Ships every:</span>
                <select className="bg-transparent font-medium text-black outline-none cursor-pointer pr-2">
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                </select>
              </div>
            )}

            <div ref={addToCartRef} className="space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-black text-[#F7F7F7] py-4 md:py-5 rounded-2xl text-lg font-medium tracking-wide hover:bg-black/80 hover:shadow-xl transition-all transform active:scale-[0.98] flex justify-center items-center gap-2"
              >
                <span>{purchaseType === 'subscribe' ? 'Subscribe Now' : 'Add to Cart'}</span>
                <span className="w-1 h-1 rounded-full bg-black/40 mx-2"></span>
                <span>${finalTotal.toFixed(2)}</span>
              </button>
              
              <div className="flex justify-center items-center gap-4 text-xs font-medium text-black/60 pt-3 flex-wrap">
                <div className="flex items-center gap-1.5"><iconify-icon icon="solar:box-minimalistic-linear" className="text-black/80" width="16"></iconify-icon> Free Shipping $40+</div>
                <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
                <div className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" className="text-black/80" width="16"></iconify-icon> 30-Day Guarantee</div>
                <div className="w-1 h-1 rounded-full bg-black/20 hidden md:block"></div>
                <div className="flex items-center gap-1.5"><iconify-icon icon="solar:lock-password-linear" className="text-black/80" width="16"></iconify-icon> Secure Checkout</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- AS SEEN IN STRIP --- */}
      <section className="border-y border-black/10 bg-white py-8 md:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40">Loved by curl experts across</p>
          <div className="flex justify-center items-center gap-8 md:gap-20 opacity-50 grayscale flex-wrap text-black">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">VOGUE</span>
            <span className="text-xl md:text-2xl font-sans font-bold tracking-tight">ALLURE</span>
            <span className="text-xl md:text-2xl font-serif font-bold italic">Cosmopolitan</span>
            <span className="text-xl md:text-2xl font-sans font-black tracking-tighter">ELLE</span>
          </div>
        </div>
      </section>

      {/* --- THE RESULTS (Clinical/User Study) --- */}
      <section id="results" className="py-20 md:py-32 bg-[#b7cad2]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-black font-bold tracking-[0.15em] text-xs uppercase mb-3 block">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-4">
              Clinically proven to transform curls.
            </h2>
            <p className="text-black/60">Based on a 4-week consumer study of 52 women with type 2b to 4c hair.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-3xl p-10 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-medium text-black mb-4">98<span className="text-3xl text-[#b7cad2]">%</span></span>
              <p className="font-medium text-black/80 mb-2">Softer Curls</p>
              <p className="text-sm text-black/50">Agreed their curls felt significantly softer and highly defined without a crunchy cast.</p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-medium text-black mb-4">94<span className="text-3xl text-[#b7cad2]">%</span></span>
              <p className="font-medium text-black/80 mb-2">Detangling Ease</p>
              <p className="text-sm text-black/50">Reported a massive improvement in slip and ease of detangling during application.</p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm flex flex-col items-center justify-center">
              <span className="text-5xl md:text-6xl font-medium text-black mb-4">91<span className="text-3xl text-[#b7cad2]">%</span></span>
              <p className="font-medium text-black/80 mb-2">Longer Lasting</p>
              <p className="text-sm text-black/50">Said their wash day results lasted beautifully for 3+ days without flaking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section id="reviews" className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-4">
              Don't just take our word for it.
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex text-[#b7cad2]">
                {[1,2,3,4,5].map(i => <iconify-icon key={i} icon="solar:star-bold" width="20"></iconify-icon>)}
              </div>
              <span className="font-medium text-black">{PRODUCT.rating} out of 5 stars</span>
              <span className="text-black/50 text-sm">Based on {PRODUCT.reviewsCount} reviews</span>
            </div>
          </div>
          <button className="text-sm font-medium border-b-2 border-black text-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white border border-black/10 rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#b7cad2]">
                  {[...Array(review.rating)].map((_, i) => <iconify-icon key={i} icon="solar:star-bold" width="16"></iconify-icon>)}
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-black bg-[#b7cad2]/40 px-2 py-1 rounded">
                    <iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon> Verified
                  </div>
                )}
              </div>
              
              <h3 className="font-medium text-black mb-3 leading-snug">{review.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed flex-grow mb-6">"{review.body}"</p>
              
              <div className="border-t border-black/5 pt-4 mt-auto">
                <p className="font-medium text-black text-sm">{review.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-black/50">{review.curlType}</p>
                  <p className="text-xs text-black/40">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INGREDIENTS/BENEFITS --- */}
      <section id="benefits" className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-black/10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#b7cad2]/20 flex items-center justify-center relative shadow-inner">
                <img src="https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80" alt="Cream texture" className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-black font-bold tracking-[0.15em] text-xs uppercase mb-3 block">The Formula</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-8">
              Superfoods for your hair.
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-black">
                  <iconify-icon icon="solar:magic-stick-3-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-black text-lg">Marshmallow Root Extract</h3>
                  <p className="text-black/60 mt-1 leading-relaxed">Nature's ultimate detangler. Provides incredible slip to prevent breakage during application and leaves hair silky smooth.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-[#b7cad2]/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-black">
                  <iconify-icon icon="solar:leaf-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-black text-lg">Organic Aloe Vera</h3>
                  <p className="text-black/60 mt-1 leading-relaxed">Soothes the scalp and provides an intense base of hydration to lock out frizz and humidity for thirsty strands.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-black">
                  <iconify-icon icon="solar:sparkles-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-black text-lg">Flaxseed Extract</h3>
                  <p className="text-black/60 mt-1 leading-relaxed">The secret to our flake-free definition. It provides a flexible hold that mimics natural sebum while adding brilliant shine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-20 bg-black/[0.02]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-black mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-black/10 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-black pr-8">{faq.q}</span>
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    className={`text-black/40 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    width="20"
                  ></iconify-icon>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-black/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STICKY ADD TO CART BAR (Mobile & Desktop) --- */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-black/10 p-3 md:p-4 transform transition-transform duration-300 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] ${
          showStickyCart ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-4">
            <img src={PRODUCT.images[0]} alt="Pudding" className="w-12 h-12 rounded-lg object-cover border border-black/5" />
            <div>
              <p className="font-medium text-sm text-black">{PRODUCT.name}</p>
              <div className="flex items-center gap-1 text-xs text-[#b7cad2]">
                <iconify-icon icon="solar:star-bold"></iconify-icon>
                <span className="text-black/60 font-medium">{PRODUCT.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between w-full md:w-auto gap-4 flex-1 md:flex-none">
            <div className="flex flex-col">
              <span className="text-lg font-medium text-black">${finalTotal.toFixed(2)}</span>
              <span className="text-[10px] text-black/50 uppercase tracking-wider font-bold">
                {selectedBundle.type} {purchaseType === 'subscribe' && '(Sub)'}
              </span>
            </div>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if(window.scrollY < 800) handleAddToCart();
              }}
              className="bg-black text-[#F7F7F7] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors shadow-lg active:scale-95 flex-shrink-0"
            >
              {purchaseType === 'subscribe' ? 'Subscribe Now' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}