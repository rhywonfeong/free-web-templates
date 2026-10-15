import React, { useState, useEffect } from 'react';
import RevealText from '../components/RevealText';
import clsx from 'clsx';

export default function Initiate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'bespoke',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          inquiryType: 'bespoke',
          message: ''
        });
        setStatus('idle');
      }, 6000);
    }, 2000);
  };

  return (
    <main className="flex-1 w-full flex flex-col relative z-10 bg-[#050505]">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-6 md:mb-0">Private Concierge</p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-serif tracking-tight leading-[0.9] text-white mb-8 font-normal">
              <RevealText text="Exclusive Inquiries." />
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed font-light mt-8">
              Whether you seek a bespoke creation, a private viewing of our archives, or specialized bridal trousseau services, our concierge is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* 
        CONTENT & FORM SECTION
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6">
          
          {/* Left Column: Contact Details */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 border-t border-white/10 pt-6">
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Direct Communication</h3>
              <a href="mailto:concierge@lanobleza.com" className="text-xl md:text-2xl font-serif tracking-tight text-white hover:text-[#C5A059] transition-colors font-normal">
                concierge@lanobleza.com
              </a>
            </div>

            <div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">La Maison</h3>
              <p className="text-base text-white/60 leading-relaxed font-light">
                100 Rue du Faubourg Saint-Honoré<br />
                75008 Paris<br />
                France<br/>
                <span className="text-[#C5A059] text-sm mt-2 block italic">By Private Appointment Only</span>
              </p>
            </div>

            <div>
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold mb-4">Digital Society</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-light text-white/60 hover:text-[#C5A059] transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Instagram
                </a>
                <a href="#" className="text-sm font-light text-white/60 hover:text-[#C5A059] transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Pinterest
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-14 relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <div className={clsx(
                "absolute inset-0 bg-[#050505] z-20 flex flex-col items-center justify-center p-12 text-center transition-all duration-1000 ease-in-out border border-[#C5A059]/30",
                status === 'success' ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"
              )}>
                <div className="w-20 h-20 border border-[#C5A059]/50 rounded-full flex items-center justify-center mb-8 bg-[#C5A059]/10">
                  <iconify-icon icon="solar:check-read-linear" width="32" height="32" className="text-[#C5A059]"></iconify-icon>
                </div>
                <h3 className="text-4xl font-serif tracking-tight text-white mb-4 font-normal">Message Received</h3>
                <p className="text-white/60 font-light max-w-md">
                  Thank you. Our private concierge will review your inquiry and contact you shortly with the utmost discretion.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Distinguished Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder-white/20 rounded-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white font-light focus:outline-none focus:border-[#C5A059] transition-colors placeholder-white/20 rounded-none"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Nature of Inquiry</label>
                  <select 
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border-b border-white/20 px-0 py-3 text-white font-light focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer rounded-none appearance-none"
                  >
                    <option value="bespoke">Bespoke Fragrance Creation</option>
                    <option value="viewing">Private Archive Viewing</option>
                    <option value="bridal">Bridal Trousseau Services</option>
                    <option value="corporate">Exclusive Gifting</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Personal Request *</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white font-light focus:outline-none focus:border-[#C5A059] transition-colors resize-none placeholder-white/20 rounded-none"
                    placeholder="Please provide details regarding your preferences..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto self-start mt-4 bg-[#C5A059] text-black px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors outline-none focus-visible:ring-4 focus-visible:ring-white/30 disabled:opacity-70 flex items-center justify-center gap-3 min-w-[240px]"
                >
                  {status === 'submitting' ? (
                    <>
                      <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="18"></iconify-icon>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}