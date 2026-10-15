import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { clsx } from 'clsx';

export default function VIP() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', dob: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('VIP Request Received! We will contact you shortly.', 'success');
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_60%,rgba(212,168,83,0.06),transparent)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-12 text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-luxe-gold mb-3">Exclusive Access</p>
          <h1 className="font-display text-5xl font-medium tracking-tight uppercase mb-4">LUXE VIP Membership</h1>
        </header>

        <div className="bg-gradient-to-br from-luxe-gold/10 to-luxe-blue-electric/5 border border-luxe-gold/20 rounded-lg p-8 md:p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Perks */}
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight uppercase text-white mb-8">
                The <span className="text-luxe-gold">Gold Standard</span> Experience
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  'Priority entry — skip the line every night',
                  'Exclusive member-only drink specials',
                  'Early access to event tickets & VIP tables',
                  'Birthday package — free entry + bottle for your crew',
                  'Members-only events & private parties',
                  '10% off all drinks, all the time'
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-luxe-white-dim">
                    <span className="text-luxe-gold text-[0.6rem] mt-1">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-black/40 border border-luxe-gold/30 rounded p-8 text-center animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-luxe-gold/20 flex items-center justify-center mx-auto mb-4 text-luxe-gold">
                    <iconify-icon icon="solar:check-read-linear" class="text-3xl" />
                  </div>
                  <h4 className="font-display text-xl uppercase tracking-wide text-white mb-2">Request Sent</h4>
                  <p className="text-sm text-luxe-white-dim">Our VIP host will review your application and contact you via email or SMS within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input 
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="Full Name" 
                      className="w-full bg-white/5 border border-luxe-gold/20 rounded px-4 py-3 text-sm text-white font-body placeholder:text-white/30 focus:outline-none focus:border-luxe-gold transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-luxe-gold/20 rounded px-4 py-3 text-sm text-white font-body placeholder:text-white/30 focus:outline-none focus:border-luxe-gold transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-luxe-gold/20 rounded px-4 py-3 text-sm text-white font-body placeholder:text-white/30 focus:outline-none focus:border-luxe-gold transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" name="dob" required value={formData.dob} onChange={handleChange}
                      placeholder="Date of Birth (MM/DD/YYYY)" 
                      className="w-full bg-white/5 border border-luxe-gold/20 rounded px-4 py-3 text-sm text-white font-body placeholder:text-white/30 focus:outline-none focus:border-luxe-gold transition-colors"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={clsx(
                      "mt-2 bg-gradient-to-br from-luxe-gold to-[#b8903a] text-luxe-black px-6 py-4 font-display font-semibold text-sm tracking-[0.15em] uppercase transition-all rounded flex justify-center items-center",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_25px_rgba(212,168,83,0.35)]"
                    )}
                  >
                    {isSubmitting ? (
                      <iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl" />
                    ) : 'Request VIP Access'}
                  </button>
                  <p className="text-[0.65rem] text-white/30 text-center mt-2">
                    By requesting access, you agree to our Terms of Service and Privacy Policy. Must be 19+ to enter.
                  </p>
                </form>
              )}
            </div>
            
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-white/30">
            design by Find You Media, powered by P/
          </p>
        </div>
      </div>
    </div>
  );
}