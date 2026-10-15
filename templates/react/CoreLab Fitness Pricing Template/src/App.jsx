import React from 'react';

export default function App() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-lg font-semibold tracking-tighter uppercase text-zinc-900">
              Core Lab
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Studio</a>
              <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Classes</a>
              <a href="#" className="text-sm font-medium text-zinc-900 transition-colors">Pricing</a>
              <a href="#" className="hover:text-zinc-900 transition-colors text-sm font-medium text-zinc-500">Schedule</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Log in</a>
            <a href="#" className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-zinc-50">
              Book a Class
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 font-medium">
            Whether you're visiting for the week or looking for a daily routine, we have a plan that fits your goals. Elevate your practice today.
          </p>
        </section>

        {/* New Client Special (Featured) */}
        <section className="max-w-4xl mx-auto px-6 mb-20">
          <div className="relative bg-zinc-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 overflow-hidden shadow-lg shadow-zinc-900/10">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium mb-4">
                <iconify-icon icon="solar:star-linear" style={{ strokeWidth: "1.5" }}></iconify-icon>
                New Clients Only
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Introductory Offer</h2>
              <p className="text-sm text-zinc-400 max-w-md">Experience everything Core Lab has to offer. Get 2 classes to use within 14 days and start your journey.</p>
            </div>
            <div className="relative z-10 flex flex-col items-start sm:items-end flex-shrink-0">
              <div className="text-4xl font-semibold tracking-tight text-white mb-1">$45</div>
              <div className="text-xs text-zinc-400 mb-4 font-medium">For 2 classes</div>
              <a href="#" className="w-full sm:w-auto text-sm font-medium bg-white text-zinc-900 px-6 py-3 rounded-lg hover:bg-zinc-100 transition-all text-center">
                Claim Offer
              </a>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Memberships</h2>
              <p className="text-sm text-zinc-500 font-medium">Auto-renewing monthly plans for the dedicated practitioner.</p>
            </div>
            <div className="text-xs text-zinc-400 font-medium bg-zinc-100 px-3 py-1.5 rounded-md">
              Requires 2-month minimum commitment
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Tier 1 */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Essential</h3>
              <p className="text-sm text-zinc-500 font-medium mb-6 min-h-[40px]">Perfect for supplementing your existing fitness routine.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">$139</span>
                <span className="text-sm text-zinc-500 font-medium">/mo</span>
              </div>
              <a href="#" className="w-full block text-center text-sm font-medium bg-white border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg hover:bg-zinc-50 transition-all mb-8">
                Select Essential
              </a>
              <ul className="flex flex-col gap-4 text-sm text-zinc-600 font-medium mt-auto">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>4 Classes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>Unused classes roll over (max 1 month)</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>10% off retail purchases</span>
                </li>
              </ul>
            </div>

            {/* Tier 2 (Popular) */}
            <div className="relative bg-white rounded-2xl border-2 border-zinc-900 p-8 shadow-md flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-medium px-4 py-1 rounded-full tracking-wide">
                Most Popular
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2 mt-2">Committed</h3>
              <p className="text-sm text-zinc-500 font-medium mb-6 min-h-[40px]">The sweet spot for building a consistent, transformative habit.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">$249</span>
                <span className="text-sm text-zinc-500 font-medium">/mo</span>
              </div>
              <a href="#" className="w-full block text-center text-sm font-medium bg-zinc-900 text-white px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition-all mb-8 shadow-sm">
                Select Committed
              </a>
              <ul className="flex flex-col gap-4 text-sm text-zinc-600 font-medium mt-auto">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-900 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span className="text-zinc-900">8 Classes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>1 Complimentary guest pass per quarter</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>Priority waitlist booking</span>
                </li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Unlimited</h3>
              <p className="text-sm text-zinc-500 font-medium mb-6 min-h-[40px]">For the ultimate enthusiast. Come as often as you like.</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">$329</span>
                <span className="text-sm text-zinc-500 font-medium">/mo</span>
              </div>
              <a href="#" className="w-full block text-center text-sm font-medium bg-white border border-zinc-200 text-zinc-900 px-4 py-2.5 rounded-lg hover:bg-zinc-50 transition-all mb-8">
                Select Unlimited
              </a>
              <ul className="flex flex-col gap-4 text-sm text-zinc-600 font-medium mt-auto">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>Unlimited classes (1 per day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>Late cancel fee applies ($20)</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-zinc-400 mt-0.5 text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
                  <span>Free grip socks upon sign-up</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Class Packs */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="border-t border-zinc-200 pt-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Class Packages</h2>
            <p className="text-sm text-zinc-500 font-medium mb-10">Flexible options that work on your schedule. No monthly commitment.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Single Class */}
              <div className="group bg-white rounded-xl border border-zinc-200 p-6 flex flex-col hover:border-zinc-300 transition-colors">
                <h4 className="text-base font-semibold text-zinc-900 mb-1">Single Class</h4>
                <p className="text-xs text-zinc-500 font-medium mb-4">Expires in 30 days</p>
                <div className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">$40</div>
                <a href="#" className="mt-auto inline-flex items-center justify-between w-full text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  Buy Now
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" style={{ strokeWidth: "1.5" }}></iconify-icon>
                </a>
              </div>

              {/* 5 Pack */}
              <div className="group bg-white rounded-xl border border-zinc-200 p-6 flex flex-col hover:border-zinc-300 transition-colors">
                <h4 className="text-base font-semibold text-zinc-900 mb-1">5 Classes</h4>
                <p className="text-xs text-zinc-500 font-medium mb-4">Expires in 60 days</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-semibold tracking-tight text-zinc-900">$190</span>
                  <span className="text-xs text-zinc-400 font-medium line-through">$200</span>
                </div>
                <a href="#" className="mt-auto inline-flex items-center justify-between w-full text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  Buy Now
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" style={{ strokeWidth: "1.5" }}></iconify-icon>
                </a>
              </div>

              {/* 10 Pack */}
              <div className="group bg-white rounded-xl border border-zinc-200 p-6 flex flex-col hover:border-zinc-300 transition-colors">
                <h4 className="text-base font-semibold text-zinc-900 mb-1">10 Classes</h4>
                <p className="text-xs text-zinc-500 font-medium mb-4">Expires in 90 days</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-semibold tracking-tight text-zinc-900">$360</span>
                  <span className="text-xs text-zinc-400 font-medium line-through">$400</span>
                </div>
                <a href="#" className="mt-auto inline-flex items-center justify-between w-full text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  Buy Now
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" style={{ strokeWidth: "1.5" }}></iconify-icon>
                </a>
              </div>

              {/* 20 Pack */}
              <div className="group bg-white rounded-xl border border-zinc-200 p-6 flex flex-col hover:border-zinc-300 transition-colors">
                <h4 className="text-base font-semibold text-zinc-900 mb-1">20 Classes</h4>
                <p className="text-xs text-zinc-500 font-medium mb-4">Expires in 6 months</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-2xl font-semibold tracking-tight text-zinc-900">$680</span>
                  <span className="text-xs text-zinc-400 font-medium line-through">$800</span>
                </div>
                <a href="#" className="mt-auto inline-flex items-center justify-between w-full text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  Buy Now
                  <iconify-icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" style={{ strokeWidth: "1.5" }}></iconify-icon>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Private Sessions & Fine Print */}
        <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Private Sessions */}
          <div className="bg-zinc-100 rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center mb-6">
              <iconify-icon icon="solar:users-group-two-rounded-linear" className="text-xl text-zinc-700" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Private &amp; Semi-Private</h3>
            <p className="text-sm text-zinc-600 font-medium mb-6">Looking for personalized attention or rehabilitative focus? Our expert instructors offer one-on-one and duet sessions tailored strictly to your body's needs.</p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
              View Private Pricing
              <iconify-icon icon="solar:arrow-right-linear" className="text-base" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </a>
          </div>

          {/* Policies */}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Studio Policies</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <iconify-icon icon="solar:info-circle-linear" className="text-zinc-400 mt-0.5 flex-shrink-0" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <p className="text-sm text-zinc-600 font-medium"><strong>12-Hour Cancellation:</strong> Classes cancelled within 12 hours of start time will be forfeited. Unlimited members incur a $20 late fee.</p>
              </li>
              <li className="flex gap-4">
                <iconify-icon icon="solar:info-circle-linear" className="text-zinc-400 mt-0.5 flex-shrink-0" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <p className="text-sm text-zinc-600 font-medium"><strong>Grip Socks Required:</strong> For safety and hygiene, grip socks are mandatory for all classes. Available for purchase at the front desk.</p>
              </li>
                <li className="flex gap-4">
                <iconify-icon icon="solar:info-circle-linear" className="text-zinc-400 mt-0.5 flex-shrink-0" style={{ strokeWidth: "1.5" }}></iconify-icon>
                <p className="text-sm text-zinc-600 font-medium"><strong>Waitlist:</strong> If a class is full, join the waitlist. You will be automatically added up to 12 hours before class if a spot opens.</p>
              </li>
            </ul>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold tracking-tighter uppercase text-zinc-900">Core Lab</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <div className="text-xs text-zinc-400 font-medium">
            © 2024 Core Lab LA. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}