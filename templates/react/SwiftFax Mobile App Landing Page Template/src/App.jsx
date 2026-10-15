import React, { useEffect } from 'react';

function App() {
  // Replicate the original scroll-reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });

    return () => {
      reveals.forEach(reveal => {
        observer.unobserve(reveal);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="antialiased selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* 1. Sticky Navigation Bar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-semibold text-xl tracking-tight text-slate-900 flex items-center gap-2 group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/36f10806-acf8-44c5-a449-81903d5d17c1/f0b95d59-74e1-4830-be8b-5e0130f18b94-icon-.png?v=1776528679840" 
              alt="SwiftFax Icon" 
              className="w-8 h-8 rounded-[0.4rem] shadow-sm group-hover:scale-105 transition-transform"
            />
            <span>Swift<span className="text-indigo-600">Fax</span></span>
          </a>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it Works</a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Use Cases</a>
          </div>

          {/* CTA */}
          <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-5 rounded-full transition-all hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2">
            Download Free
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="reveal relative z-10 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-6">
              <iconify-icon icon="solar:star-fall-linear" width="14" stroke-width="1.5"></iconify-icon>
              Your first fax is free
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight text-slate-900 mb-6">
              Send a fax from your phone.<br />No machine required.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Scan, upload, and fax documents worldwide in minutes — right from your iPhone. No account needed to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
              <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium py-3.5 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <iconify-icon icon="solar:apple-linear" width="20" stroke-width="1.5"></iconify-icon>
                Download on App Store
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50 text-base font-medium py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2">
                See how it works ↓
              </a>
            </div>
            
            <p className="text-xs text-slate-500 font-medium">Free · No account required · iOS 15.1+</p>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="reveal relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0 perspective-1000">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-indigo-400/30 blur-[100px] rounded-full scale-75 transform translate-y-10 z-0"></div>
            
            {/* Mockup Container */}
            <div className="relative z-10 animate-float w-[280px] h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              {/* Screen */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative flex flex-col">
                {/* Dynamic Island */}
                <div className="absolute top-2 inset-x-0 flex justify-center z-20">
                  <div className="w-24 h-7 bg-slate-900 rounded-full"></div>
                </div>
                
                {/* Fake App UI */}
                <div className="pt-14 pb-4 px-5 bg-white border-b border-slate-100 flex justify-between items-center">
                  <span className="font-display font-semibold text-lg tracking-tight">New Fax</span>
                  <iconify-icon icon="solar:user-circle-linear" className="text-slate-400" width="24"></iconify-icon>
                </div>
                
                <div className="flex-1 p-5 space-y-4 no-scrollbar overflow-y-auto">
                  {/* To Field */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">To</span>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-900 text-base font-medium">+1 (555) 019-2834</span>
                      <iconify-icon icon="solar:book-bookmark-linear" className="text-indigo-600" width="20"></iconify-icon>
                    </div>
                  </div>
                  
                  {/* Document */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Document</span>
                    <div className="h-32 bg-slate-100 rounded-xl border border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-400 gap-2">
                      <iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
                      <span className="text-xs font-medium">Signed_Contract.pdf</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg py-2 flex justify-center items-center gap-1 cursor-pointer border border-slate-100">
                        <iconify-icon icon="solar:camera-linear" width="16" className="text-slate-600"></iconify-icon>
                        <span className="text-xs font-medium text-slate-700">Scan</span>
                      </div>
                      <div className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-lg py-2 flex justify-center items-center gap-1 cursor-pointer border border-slate-100">
                        <iconify-icon icon="solar:folder-with-files-linear" width="16" className="text-slate-600"></iconify-icon>
                        <span className="text-xs font-medium text-slate-700">Files</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Send Button */}
                  <div className="mt-auto pt-4">
                    <div className="w-full bg-indigo-600 rounded-full py-3.5 flex items-center justify-center gap-2 text-white font-medium text-sm shadow-md">
                      <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
                      Send Fax Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof / Trust Bar */}
      <div className="reveal border-y border-slate-200/60 bg-slate-100/50 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            <div className="flex items-center gap-2 text-slate-600">
              <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600" width="18"></iconify-icon>
              <span className="text-sm font-medium">No fax machine needed</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600" width="18"></iconify-icon>
              <span className="text-sm font-medium">No account required</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600" width="18"></iconify-icon>
              <span className="text-sm font-medium">Worldwide delivery</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600" width="18"></iconify-icon>
              <span className="text-sm font-medium">Real-time tracking</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600" width="18"></iconify-icon>
              <span className="text-sm font-medium">Secure transmission</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. How It Works */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Fax sent in 3 simple steps</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Card 1 */}
            <div className="reveal group relative bg-slate-50 border border-slate-200/60 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-indigo-600 rounded-t-2xl transition-colors"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
                  <iconify-icon icon="solar:camera-linear" width="24" stroke-width="1.5"></iconify-icon>
                </div>
                <span className="font-display text-4xl font-semibold text-slate-200 select-none">01</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Scan or import</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Use your iPhone camera to scan physical documents perfectly, or import PDFs and images from your Files.</p>
            </div>

            {/* Card 2 */}
            <div className="reveal group relative bg-slate-50 border border-slate-200/60 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 delay-100">
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-indigo-600 rounded-t-2xl transition-colors"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
                  <iconify-icon icon="solar:dialpad-circle-linear" width="24" stroke-width="1.5"></iconify-icon>
                </div>
                <span className="font-display text-4xl font-semibold text-slate-200 select-none">02</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Enter number</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Type in the recipient's fax number or select it directly from your iPhone contacts. Supports international formatting.</p>
            </div>

            {/* Card 3 */}
            <div className="reveal group relative bg-slate-50 border border-slate-200/60 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 delay-200">
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-indigo-600 rounded-t-2xl transition-colors"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm">
                  <iconify-icon icon="solar:plain-2-linear" width="24" stroke-width="1.5"></iconify-icon>
                </div>
                <span className="font-display text-4xl font-semibold text-slate-200 select-none">03</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Send and track</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Hit send and track the delivery status in real-time. Get instantly notified when your document is successfully received.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features Grid */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3 block">Features</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-md">Everything you need.<br />Nothing you don't.</h2>
            </div>
            <p className="text-base text-slate-600 max-w-sm">A lightweight but powerful tool built specifically for modern iOS devices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:camera-add-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Camera Scanning</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Automatically detect edges, fix perspective, and optimize contrast when scanning physical documents with your iPhone camera.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:gallery-send-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">PDF &amp; Photo Import</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Seamlessly import existing PDF documents from your Files app or select images directly from your Photos library.</p>
            </div>

            {/* Feature 3 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:global-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Worldwide Delivery</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Send faxes locally or internationally. Our global network ensures your document reaches any compatible fax machine worldwide.</p>
            </div>

            {/* Feature 4 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:radar-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Real-Time Tracking</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Never wonder if it went through. Track the transmission progress and receive a confirmation receipt when delivered.</p>
            </div>

            {/* Feature 5 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:lock-password-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Private &amp; Secure</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Your privacy matters. Documents are transmitted securely and are never stored on our servers longer than necessary to complete the send.</p>
            </div>

            {/* Feature 6 */}
            <div className="reveal bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <iconify-icon icon="solar:user-cross-linear" width="22" stroke-width="1.5"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">No Account Required</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Skip the tedious sign-up forms. Download the app and send your first fax immediately without creating an account or providing email.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Use Cases */}
      <section id="use-cases" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3 block">Who It's For</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-2xl">Built for professionals who need documents delivered now</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Case 1 */}
            <div className="reveal bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm mb-4">
                <iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Healthcare</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Medical records, patient referrals, prescriptions, and insurance paperwork.</p>
            </div>

            {/* Case 2 */}
            <div className="reveal bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm mb-4">
                <iconify-icon icon="solar:library-linear" width="24"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Legal</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Confidential contracts, court filings, depositions, and signed agreements.</p>
            </div>

            {/* Case 3 */}
            <div className="reveal bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm mb-4">
                <iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Real Estate</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Purchase offers, closing documents, lease agreements, and appraisals.</p>
            </div>

            {/* Case 4 */}
            <div className="reveal bg-slate-50 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm mb-4">
                <iconify-icon icon="solar:briefcase-linear" width="24"></iconify-icon>
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-2">Business</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Purchase orders, invoices, HR compliance forms, and tax documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing Section */}
      <section id="pricing" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3 block">Pricing</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple, flexible pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Pricing 1: Pay Per Fax */}
            <div className="reveal bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Pay Per Fax</h3>
              <p className="text-sm text-slate-500 mb-6">Perfect for one-off needs.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold font-display tracking-tight text-slate-900">$1.99</span>
                <span className="text-sm text-slate-500">/fax</span>
              </div>
              <p className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-md py-1 px-2 inline-block mb-6">Or 3 credits for $4.99</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Send worldwide
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  High-quality scanning
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Delivery tracking
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Credits never expire
                </li>
              </ul>
              <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-sm font-medium py-3 rounded-xl transition-colors">
                Download App
              </a>
            </div>

            {/* Pricing 2: Monthly (Highlighted) */}
            <div className="reveal relative bg-white border-2 border-indigo-600 shadow-xl rounded-2xl p-8 z-10 md:scale-105">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full">Most Popular</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Monthly Unlimited</h3>
              <p className="text-sm text-slate-500 mb-6">For regular business use.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold font-display tracking-tight text-slate-900">$9.99</span>
                <span className="text-sm text-slate-500">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <iconify-icon icon="solar:check-circle-bold" className="text-indigo-600 mt-0.5" width="18"></iconify-icon>
                  Unlimited faxes sent
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600 mt-0.5" width="18"></iconify-icon>
                  Send worldwide
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600 mt-0.5" width="18"></iconify-icon>
                  High-quality scanning
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-indigo-600 mt-0.5" width="18"></iconify-icon>
                  Priority support
                </li>
              </ul>
              <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-3 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5">
                Start Free Trial
              </a>
            </div>

            {/* Pricing 3: Weekly */}
            <div className="reveal bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 mb-2">Weekly Unlimited</h3>
              <p className="text-sm text-slate-500 mb-6">For short-term projects.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold font-display tracking-tight text-slate-900">$4.99</span>
                <span className="text-sm text-slate-500">/week</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Unlimited faxes sent
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Cancel anytime
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Delivery tracking
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <iconify-icon icon="solar:check-circle-linear" className="text-slate-900 mt-0.5" width="18"></iconify-icon>
                  Send worldwide
                </li>
              </ul>
              <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="block w-full text-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 text-sm font-medium py-3 rounded-xl transition-colors">
                Download App
              </a>
            </div>

          </div>
          
          <div className="mt-10 text-center">
            <p className="text-xs text-slate-500 font-medium bg-slate-100 py-2 px-4 rounded-full inline-block">First fax is always free — no account or credit card required.</p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
            {/* Abstract BG shape */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full"></div>
            
            <h2 className="relative z-10 font-display text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Send your first fax free — right now.</h2>
            <p className="relative z-10 text-slate-400 text-base md:text-lg mb-10 max-w-lg mx-auto">No machine. No account. Download SwiftFax and get it done in minutes.</p>
            
            <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="relative z-10 bg-indigo-600 hover:bg-indigo-500 text-white text-base font-medium py-4 px-10 rounded-full transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
              <iconify-icon icon="solar:apple-bold" width="24"></iconify-icon>
              Download on App Store
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <a href="#" className="font-display font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-2 group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/36f10806-acf8-44c5-a449-81903d5d17c1/f0b95d59-74e1-4830-be8b-5e0130f18b94-icon-.png?v=1776528679840" 
              alt="SwiftFax Icon" 
              className="w-6 h-6 rounded shadow-sm opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span>Swift<span className="text-indigo-600">Fax</span></span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <a href="https://tropical-radius-594.notion.site/Privacy-Policy-337fa76e3dfe806c9087d2ee49c4333e" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="https://tropical-radius-594.notion.site/Terms-of-Service-337fa76e3dfe80048bc6e9015bab13b3" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Terms of Use</a>
            <a href="https://apps.apple.com/app/id6761579089" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">App Store</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            © 2026 SwiftFax. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;