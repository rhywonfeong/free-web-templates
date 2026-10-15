import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SectionFrame from '../components/ui/SectionFrame';
import { WordReveal, CharSlideDown } from '../components/ui/TextAnimations';

export default function UnlockPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  
  const [activePlan, setActivePlan] = useState('team'); // 'standard' or 'team'

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Entry animations for page elements
      gsap.fromTo('.checkout-anim', 
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
      
      const words = document.querySelectorAll('.gsap-word-reveal');
      if (words.length) {
        gsap.fromTo(words,
          { y: "100%", opacity: 0, filter: "blur(8px)" },
          { y: "0%", opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.04, ease: "power3.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.cardNumber) return;
    
    setIsSubmitting(true);
    
    // Simulate API checkout request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Animate success state
      gsap.fromTo('.success-anim',
        { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: 'back.out(1.5)' }
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)] justify-center">
      <SectionFrame className="py-12 md:py-24 px-6 bg-transparent relative z-10 border-none" noBorderBottom>
        <div className="max-w-6xl mx-auto w-full">
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-20 success-anim">
              <div className="w-20 h-20 bg-[#c6f91f]/10 border border-[#c6f91f]/30 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-[#c6f91f]/20 blur-xl rounded-full"></div>
                <iconify-icon icon="solar:check-read-linear" class="text-4xl text-[#c6f91f] relative z-10"></iconify-icon>
              </div>
              <h2 className="text-3xl md:text-5xl font-geist font-light tracking-tighter text-white mb-4">
                Access Unlocked
              </h2>
              <p className="text-white/50 text-base max-w-md mx-auto mb-10 font-geist tracking-tight">
                Your payment was successful. We've sent your license key and vault access instructions to {formData.email || 'your email'}.
              </p>
              <Link to="/library" className="bg-[#c6f91f] text-black px-8 py-3.5 text-sm hover:bg-[#aade17] transition-colors font-geist font-medium shadow-[0_0_20px_rgba(198,249,31,0.2)]">
                Go to Prompt Vault
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Left Column: Summary */}
              <div className="flex flex-col checkout-anim">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 text-xs text-white/70 mb-8 uppercase tracking-widest font-geist font-semibold w-fit">
                  Secure Checkout
                </div>
                
                <h1 className="text-4xl md:text-5xl font-geist font-light tracking-tighter mb-6 text-white text-balance reveal-section">
                  <WordReveal>Complete your</WordReveal><br />
                  <WordReveal>activation.</WordReveal>
                </h1>
                
                <p className="text-white/50 text-base md:text-lg text-pretty font-geist tracking-tight mb-12">
                  You are unlocking lifetime access to the Lumimotion prompt structural library. No recurring fees, just raw value.
                </p>

                {/* Plan Toggle */}
                <div className="flex gap-4 mb-8">
                  <button 
                    onClick={() => setActivePlan('standard')}
                    className={`flex-1 p-4 border text-left transition-colors ${activePlan === 'standard' ? 'border-[#c6f91f] bg-[#c6f91f]/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                  >
                    <div className="text-xs font-geist tracking-widest uppercase text-white/50 mb-1">Standard</div>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-light text-white">$29</span>
                    </div>
                  </button>
                  <button 
                    onClick={() => setActivePlan('team')}
                    className={`flex-1 p-4 border text-left transition-colors relative overflow-hidden ${activePlan === 'team' ? 'border-[#c6f91f] bg-[#c6f91f]/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                  >
                    {activePlan === 'team' && <div className="absolute top-0 right-0 w-16 h-16 bg-[#c6f91f]/20 blur-xl"></div>}
                    <div className="text-xs font-geist tracking-widest uppercase text-[#c6f91f] mb-1">Team</div>
                    <div className="flex items-end gap-1 relative z-10">
                      <span className="text-2xl font-light text-white">$99</span>
                    </div>
                  </button>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm font-geist tracking-tight">
                    <span className="text-white/50">Lifetime Access License</span>
                    <span className="text-white">${activePlan === 'team' ? '99.00' : '29.00'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-geist tracking-tight">
                    <span className="text-white/50">Tax (Calculated at checkout)</span>
                    <span className="text-white">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-geist tracking-tight font-medium pt-4 border-t border-white/10">
                    <span className="text-white">Total due today</span>
                    <span className="text-[#c6f91f]">${activePlan === 'team' ? '99.00' : '29.00'}</span>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 opacity-50 grayscale pt-8 border-t border-white/10">
                  <iconify-icon icon="simple-icons:stripe" class="text-3xl text-white"></iconify-icon>
                  <div className="w-px h-4 bg-white/20"></div>
                  <span className="text-[10px] text-white/80 uppercase tracking-widest font-mono">256-bit Encrypted</span>
                </div>
              </div>

              {/* Right Column: Checkout Form */}
              <div className="relative checkout-anim">
                <div className="absolute inset-0 bg-gradient-to-b from-[#c6f91f]/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
                <div className="border border-white/10 bg-[#0B0F12]/80 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden">
                  
                  {/* Subtle top highlight */}
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-20 pointer-events-none"></div>

                  <form onSubmit={handleCheckout} className="space-y-6 relative z-10">
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-geist tracking-widest uppercase text-white/40 border-b border-white/10 pb-2">Contact Information</h3>
                      <div>
                        <label htmlFor="email" className="block text-xs text-white/60 mb-2 font-geist">Email Address</label>
                        <div className="relative">
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@company.com" 
                            className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="space-y-4 pt-4">
                      <h3 className="text-sm font-geist tracking-widest uppercase text-white/40 border-b border-white/10 pb-2">Payment Method</h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="px-3 py-1.5 border border-[#c6f91f]/30 bg-[#c6f91f]/10 text-xs text-white flex items-center gap-2">
                          <iconify-icon icon="solar:card-linear" class="text-[#c6f91f]"></iconify-icon> Card
                        </div>
                        <div className="px-3 py-1.5 border border-white/10 bg-white/5 text-xs text-white/40 flex items-center gap-2 hover:bg-white/10 cursor-not-allowed">
                          <iconify-icon icon="simple-icons:paypal"></iconify-icon> PayPal
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-xs text-white/60 mb-2 font-geist">Name on Card</label>
                        <input 
                          type="text" 
                          id="cardName" 
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight"
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-xs text-white/60 mb-2 font-geist">Card Information</label>
                        <div className="flex flex-col border border-white/10 bg-[#05080A] focus-within:border-[#c6f91f]/50 transition-colors overflow-hidden">
                          <div className="relative border-b border-white/10">
                            <iconify-icon icon="solar:card-linear" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"></iconify-icon>
                            <input 
                              type="text" 
                              id="cardNumber" 
                              name="cardNumber"
                              required
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="0000 0000 0000 0000" 
                              className="w-full bg-transparent text-white text-sm pl-11 pr-4 py-3 focus:outline-none font-mono"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                               <iconify-icon icon="simple-icons:visa" class="text-white/30 text-xl"></iconify-icon>
                               <iconify-icon icon="simple-icons:mastercard" class="text-white/30 text-xl"></iconify-icon>
                            </div>
                          </div>
                          <div className="flex">
                            <input 
                              type="text" 
                              name="expiry"
                              required
                              value={formData.expiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY" 
                              className="w-1/2 bg-transparent text-white text-sm px-4 py-3 focus:outline-none border-r border-white/10 font-mono"
                            />
                            <input 
                              type="text" 
                              name="cvc"
                              required
                              value={formData.cvc}
                              onChange={handleInputChange}
                              placeholder="CVC" 
                              className="w-1/2 bg-transparent text-white text-sm px-4 py-3 focus:outline-none font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#c6f91f] text-black py-4 mt-6 text-sm hover:bg-[#aade17] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(198,249,31,0.2)] disabled:opacity-70 disabled:cursor-not-allowed font-geist tracking-tight font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Processing...
                        </>
                      ) : (
                        <>
                          <iconify-icon icon="solar:lock-keyhole-linear" class="text-lg"></iconify-icon> Pay ${activePlan === 'team' ? '99.00' : '29.00'}
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-white/40 font-geist tracking-tight flex items-center justify-center gap-1">
                      <iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secured by industry-standard encryption
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionFrame>
    </div>
  );
}