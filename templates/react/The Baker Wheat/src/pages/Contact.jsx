import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-slate-50 pt-20 min-h-screen">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <ScrollReveal variant="up" className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#133875] tracking-tight mb-4">Let's Connect</h1>
          <p className="text-xl text-slate-500">Ready to discuss your bakery needs? Our team is here to help.</p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Info Cards */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <ScrollReveal variant="left" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#133875]/10 text-[#133875] flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon="lucide:phone" width="24"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                  <p className="text-slate-500 mb-2">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+60312345678" className="text-[#133875] font-semibold">+60 3-1234 5678</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon="lucide:mail" width="24"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                  <p className="text-slate-500 mb-2">We typically reply within 24 hours</p>
                  <a href="mailto:partners@thebakerwheat.com" className="text-[#133875] font-semibold">partners@thebakerwheat.com</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={300}>
              <div className="bg-[#133875] p-8 rounded-2xl shadow-soft text-white flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Visit Us</h3>
                  <p className="text-white/80 leading-relaxed">
                    Plot 45, Nilai Industrial Estate<br/>
                    71800 Nilai, Negeri Sembilan<br/>
                    Malaysia
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-7/12">
            <ScrollReveal variant="up" delay={200} className="h-full">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-gray-100 h-full">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <iconify-icon icon="lucide:check" width="40"></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                    <p className="text-slate-500 mb-8 max-w-md">Thank you for reaching out. One of our sales representatives will get back to you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="bg-[#133875] text-white px-8 py-3 rounded-lg font-bold btn-press">
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all" placeholder="Grand Hotel KL" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all" placeholder="+60 12-345 6789" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                      <select required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all appearance-none text-slate-700">
                        <option value="">Select an option</option>
                        <option value="wholesale">Wholesale Pricing</option>
                        <option value="samples">Product Samples</option>
                        <option value="tour">Facility Tour</option>
                        <option value="general">General Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea required rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#133875] focus:ring-1 focus:ring-[#133875] transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#133875] text-white font-bold py-4 rounded-lg btn-press flex items-center justify-center gap-2 hover:bg-[#102e60] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <iconify-icon icon="lucide:loader-2" class="animate-spin text-xl"></iconify-icon>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}