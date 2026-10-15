import React, { useState } from 'react';
import 'iconify-icon';
import Button from '../components/Button';

const PageHeader = () => (
  <section className="relative bg-brand-gradient text-white pt-24 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[80px] text-center">
      <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
        <iconify-icon icon="solar:letter-bold" width="16"></iconify-icon>
        <span>Contact</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">Let's Get Moving</h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
        Order now, partner with us, or join the driver network. The Island Run team replies within one business day.
      </p>
    </div>
    <div className="umbrella-curve-hero"></div>
  </section>
);

const INQUIRY_TYPES = ['Place an Order', 'Vendor Partnership', 'Become a Driver', 'Press & Media', 'Something Else'];

const ContactSection = () => {
  const [inquiryType, setInquiryType] = useState('Place an Order');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Jamaica');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#F0148C]/20 focus:border-[#F0148C] transition-all duration-300';

  return (
    <section className="py-[96px] px-6 lg:px-[80px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

        {/* Left: CTA copy, badges & proof */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Talk to Island Run</h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10">
            Whether you're craving your favorite Caribbean meal delivered to your door, growing a restaurant, or ready to earn on your own
            schedule — tell us what you need and our operations team will take it from there.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['Authentic Caribbean Food', 'Real-Time Tracking', '24/7 Support', '6 Major Hubs'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full font-bold text-sm">
                <iconify-icon icon="solar:verified-check-bold" width="16"></iconify-icon>
                {badge}
              </span>
            ))}
          </div>

          {/* Proof items */}
          <div className="grid gap-5">
            <div className="network-card flex items-center gap-5 py-6">
              <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="solar:stopwatch-bold-duotone" width="28" className="text-black"></iconify-icon>
              </div>
              <div>
                <p className="font-extrabold text-lg">20-30 minute average delivery</p>
                <p className="text-gray-600">Our dispatch team keeps every order piping hot.</p>
              </div>
            </div>
            <div className="network-card flex items-center gap-5 py-6">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="solar:global-bold-duotone" width="28" className="text-black"></iconify-icon>
              </div>
              <div>
                <p className="font-extrabold text-lg">Caribbean to US metro coverage</p>
                <p className="text-gray-600">Jamaica, New York, Los Angeles, Houston, Atlanta & Southern Florida.</p>
              </div>
            </div>
            <div className="network-card flex items-center gap-5 py-6">
              <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                <iconify-icon icon="solar:medal-ribbons-star-bold-duotone" width="28" className="text-black"></iconify-icon>
              </div>
              <div>
                <p className="font-extrabold text-lg">World-class quality standards</p>
                <p className="text-gray-600">Every order overseen by our dedicated operations team.</p>
              </div>
            </div>
          </div>

          {/* Direct support copy */}
          <div className="mt-10 flex flex-col gap-3 text-gray-700 font-medium">
            <a href="mailto:hello@islandrun.delivery" className="inline-flex items-center gap-3 hover:text-brand-primary transition-colors">
              <iconify-icon icon="solar:letter-linear" width="22" className="text-brand-primary"></iconify-icon>
              hello@islandrun.delivery
            </a>
            <span className="inline-flex items-center gap-3">
              <iconify-icon icon="solar:phone-linear" width="22" className="text-brand-primary"></iconify-icon>
              +1 (876) 555-0142 — 24/7 support line
            </span>
          </div>
        </div>

        {/* Right: Form panel */}
        <div className="network-card p-8 md:p-12 hover:translate-y-0">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-8">
                <iconify-icon icon="solar:check-circle-bold" width="48" className="text-brand-primary"></iconify-icon>
              </div>
              <h3 className="text-3xl mb-4">Message received!</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto mb-8">
                Thanks, {name || 'friend'}. The Island Run team will get back to you within one business day.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-3xl mb-2">Send us a message</h3>
              <p className="text-gray-600 font-medium mb-8">Pick a topic and we'll route it to the right team.</p>

              {/* Inquiry type choices */}
              <div className="mb-8">
                <span className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">I'm interested in</span>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                        inquiryType === type
                          ? 'bg-brand-primary text-white border-transparent shadow-md shadow-brand-primary/30'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Brown"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="contact-city" className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Nearest Hub
                </label>
                <select
                  id="contact-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={inputClass}
                >
                  {['Jamaica', 'New York', 'Los Angeles', 'Houston', 'Atlanta', 'Southern Florida', 'Other / Not listed'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="contact-message" className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your order, restaurant, or delivery needs..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button type="submit" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
                  Send Message
                  <iconify-icon icon="solar:arrow-right-linear" width="20" className="ml-2"></iconify-icon>
                </Button>
                <p className="text-sm text-gray-500 font-medium text-center sm:text-left">
                  No spam, ever. We reply within one business day.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default function Contact() {
  return (
    <>
      <PageHeader />
      <ContactSection />
    </>
  );
}
