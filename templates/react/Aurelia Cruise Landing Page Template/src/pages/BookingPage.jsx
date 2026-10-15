import React, { useState } from 'react';
import Reveal from '../components/Reveal';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    destination: '',
    travelDate: '',
    guests: '2',
    plan: 'Gold'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050A10] relative flex items-center justify-center">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#080D16] to-[#050A10] z-0 border-b border-white/5"></div>
      
      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <iconify-icon icon="solar:ticket-sale-outline" className="text-gold text-4xl mb-4"></iconify-icon>
            <h1 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Book Your Voyage
            </h1>
            <p className="font-body text-gray-400">
              Secure your place on a journey of unparalleled luxury.
            </p>
          </div>

          <div className="bg-[#0A111A] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
            
            {isSubmitted ? (
              <div className="text-center py-16 animate-fade-in">
                <iconify-icon icon="solar:check-circle-bold" className="text-gold text-6xl mb-6"></iconify-icon>
                <h3 className="font-heading text-3xl text-white mb-4">Reservation Requested</h3>
                <p className="font-body text-gray-400 mb-8 max-w-md mx-auto">
                  Thank you, {formData.fullName}. Your request for a {formData.plan} voyage to {formData.destination || 'one of our destinations'} has been received. Our concierge will contact you shortly to finalize details.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border border-white/20 text-white font-body text-sm hover:border-gold hover:text-gold transition-colors"
                >
                  Book Another Journey
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-6">
                  <div>
                    <label className="block font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#050A10] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors font-body"
                      placeholder="e.g., James Anderson"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Destination</label>
                      <select 
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full bg-[#050A10] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors font-body appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a destination</option>
                        <option value="Maldives">The Maldives Retreat</option>
                        <option value="Santorini">Mediterranean Sunset (Santorini)</option>
                        <option value="Dubai">Arabian Gulf (Dubai)</option>
                        <option value="Caribbean">Caribbean Escape</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Preferred Plan</label>
                      <select 
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full bg-[#050A10] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors font-body appearance-none cursor-pointer"
                      >
                        <option value="Silver">Silver ($999)</option>
                        <option value="Gold">Gold ($1,999)</option>
                        <option value="Platinum">Platinum ($3,999)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Travel Date</label>
                      <input 
                        type="date" 
                        name="travelDate"
                        required
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full bg-[#050A10] border border-white/10 px-4 py-3 text-gray-400 focus:outline-none focus:border-gold focus:text-white transition-colors font-body color-scheme-dark"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-gray-400 uppercase tracking-widest mb-2">Guests</label>
                      <input 
                        type="number" 
                        name="guests"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-[#050A10] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors font-body"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gold text-[#050A10] font-body font-medium text-lg hover:bg-white hover:shadow-[0_0_20px_rgba(230,201,138,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Reserve Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </button>
                  <p className="text-center font-body text-xs text-gray-500 mt-4">
                    No payment is required to request a reservation. Our concierge will contact you.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}