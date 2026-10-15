import { useState } from 'react';

export default function Reservations() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call for direct booking system
    setTimeout(() => {
      setStatus('success');
      // Reset form could go here, but leaving it to show success state
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a] relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Book a Table</h1>
          <p className="text-zinc-400 text-lg">
            Join the VIP Club. Secure your spot at Heraklion's premier dining destination.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#121212] border border-amber-500/30 rounded-3xl p-12 text-center fade-in">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <iconify-icon icon="solar:check-circle-linear" width="32" className="text-amber-500"></iconify-icon>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Reservation Confirmed</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Thank you, {formData.name}. We've received your booking for {formData.guests} guests on {formData.date} at {formData.time}. A confirmation email has been sent.
            </p>
            <button 
              onClick={() => {
                setStatus('idle');
                setFormData({ ...formData, name: '', email: '', phone: '', notes: '' });
              }}
              className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-amber-400 transition-colors"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-10 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Date</label>
                <div className="relative">
                  <iconify-icon icon="solar:calendar-linear" width="20" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></iconify-icon>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Time</label>
                <div className="relative">
                  <iconify-icon icon="solar:clock-circle-linear" width="20" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></iconify-icon>
                  <select 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select time</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-300">Number of Guests</label>
                <div className="relative">
                  <iconify-icon icon="solar:users-group-rounded-linear" width="20" className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></iconify-icon>
                  <select 
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="large">9+ (Large Group)</option>
                  </select>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 h-px bg-white/5 my-4"></div>

              {/* Contact Info */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="+30 690 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-300">Email Address (Optional)</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-zinc-300">Special Requests / Occasion</label>
                <textarea 
                  name="notes"
                  rows="3"
                  placeholder="Birthday, anniversary, allergies..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-amber-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <iconify-icon icon="solar:spinner-linear" width="24" className="animate-spin"></iconify-icon>
                  Processing...
                </>
              ) : (
                'Confirm Reservation'
              )}
            </button>
            <p className="text-center text-zinc-500 text-xs mt-4">
              By reserving, you agree to our booking terms and cancellation policy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}