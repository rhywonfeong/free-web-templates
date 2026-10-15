import { Link } from 'react-router-dom'
import { Calendar, CreditCard, LineChart, Sparkles, CheckCircle2 } from 'lucide-react'
import Hero from '../components/hero/Hero'

const testimonials = [
  {
    name: "Ava Thompson",
    role: "General Manager",
    text: "Lumina took minutes to integrate and saved us days of setup. Our direct bookings doubled in a month.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"
  },
  {
    name: "Noah Patel",
    role: "Director of Operations",
    text: "We launched our new resort website 3× faster. The booking defaults are sensible and secure out of the box.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"
  },
  {
    name: "Maya Kim",
    role: "Revenue Manager",
    text: "The platform feels invisible—just fast, reliable reservations and clean revenue reporting.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"
  },
  {
    name: "Priya Singh",
    role: "Operations Lead",
    text: "The automation suite trimmed our guest communication by half. The front desk UI stays out of the way and just works.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"
  },
  {
    name: "Leo Martin",
    role: "Finance Director",
    text: "Enterprise payment processing, audit logs, and guest analytics—without extra integration work. Huge win.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"
  },
  {
    name: "Sofia Alvarez",
    role: "Boutique Owner",
    text: "From initial setup to going live across 5 properties with one connection. Best onboarding we’ve had.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"
  },
  {
    name: "Jackson Lee",
    role: "Guest Relations",
    text: "Clean interface, helpful support, and thoughtful guest experiences. It’s the small things.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"
  }
];

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      
      <section className="bg-white py-12 px-6 md:px-[120px] w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="font-inter font-bold tracking-widest text-gray-400 text-[12px] mb-8 text-center uppercase">
            Trusted by leading boutique hotels globally
          </p>
          
          <div className="w-full relative mt-8 overflow-hidden">
            <style>{`
              @keyframes marquee-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
              .animate-marquee-ltr { animation: marquee-ltr 45s linear infinite; }
            `}</style>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex animate-marquee-ltr w-max gap-6">
              {[...testimonials, ...testimonials].map((t, i) => (
                <article key={i} className="shrink-0 w-[300px] md:w-[400px] rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt="Avatar" className="w-10 h-10 object-cover rounded-full" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold font-jakarta text-gray-900">{t.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8b5cf6]" />
                      </div>
                      <p className="text-xs font-inter text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-inter text-gray-600 leading-relaxed">{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6 md:px-[120px] w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 text-center mb-16">
            Everything you need to run your property.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-jakarta font-semibold text-xl text-gray-900 mb-3">Real-time Sync</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Instantly sync availability across all major OTAs. No more double bookings or manual updates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-jakarta font-semibold text-xl text-gray-900 mb-3">One-click Checkout</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Frictionless payment processing for higher conversions. Secure and globally compliant.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-[#8b5cf6]" />
              </div>
              <h3 className="font-jakarta font-semibold text-xl text-gray-900 mb-3">Revenue Analytics</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Deep insights into your daily, weekly, and monthly revenue. Make data-driven decisions effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] pt-20 pb-10 px-6 md:px-[120px] w-full">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="font-playfair text-white text-4xl md:text-5xl mb-8">
              Ready to elevate your guest experience?
            </h2>
            <Link 
              to="/start"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-lg text-white font-dm font-semibold text-[16px] px-8 py-4 transition-colors shadow-lg"
            >
              Get Started Now
            </Link>
          </div>

          <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white/80" />
              <span className="font-jakarta font-bold text-white/90 text-lg">Lumina</span>
              <span className="font-inter text-gray-400 text-sm ml-4">© 2026 Lumina Inc.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="font-inter text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="font-inter text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="font-inter text-gray-400 text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}