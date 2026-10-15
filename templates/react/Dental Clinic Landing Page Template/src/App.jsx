import React, { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <iconify-icon icon="solar:tooth-linear" width="24" height="24"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 tracking-tight leading-none text-lg">Tooth Fairy</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Dental Clinic</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Meet Dr Lekota</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:0645043509" className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
              <iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
              <span>064 504 3509</span>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden cursor-pointer p-2 text-slate-600 hover:text-blue-600"
              aria-label="Toggle Menu"
            >
              <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-full px-6 py-4 shadow-xl">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50">About</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50">Services</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50">Contact</a>
              <a href="tel:0645043509" className="text-center w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm mt-2">
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-100/50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Accepting New Patients
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
              Dentist Pretoria <br />
              <span className="text-blue-600">Dr Lekota</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Changing lives… one smile at a time. Experience anxiety-free, professional dental care tailored for your whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:0645043509" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-blue-200 hover:shadow-xl active:scale-95">
                <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                Call Now – 064 504 3509
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                Contact Us
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            {/* Abstract Representation of Friendly Dentistry */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white aspect-[4/3] flex items-center justify-center border border-slate-100 group">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Friendly Dentist Layout" className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links (Floating Cards) */}
      <section className="mt-[-60px] relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Card 1 */}
            <a href="#services" className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
              </div>
              <span className="text-sm font-semibold text-slate-700">Oral Hygiene</span>
            </a>
            {/* Card 2 */}
            <a href="#services" className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:star-shine-linear" width="24"></iconify-icon>
              </div>
              <span className="text-sm font-semibold text-slate-700">Whitening</span>
            </a>
            {/* Card 3 */}
            <a href="#services" className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
              </div>
              <span className="text-sm font-semibold text-slate-700">Paediatric</span>
            </a>
            {/* Card 4 */}
            <a href="#services" className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
              </div>
              <span className="text-sm font-semibold text-slate-700">Root Canal</span>
            </a>
            {/* Card 5 */}
            <a href="#contact" className="bg-slate-900 p-6 rounded-2xl shadow-lg shadow-slate-900/20 border border-slate-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center gap-3 col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors">
                <iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
              </div>
              <span className="text-sm font-semibold text-white">Book Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Meet Dr Lekota */}
      <section className="bg-slate-50 pt-24 pb-24" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl"></div>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd72c7d3-945a-4c3f-a29d-d988e4ef2aef_800w.png" alt="Doctor Consultation" className="relative rounded-2xl shadow-xl border border-white object-cover w-full h-auto" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <iconify-icon icon="solar:medal-star-linear" className="text-yellow-500 text-2xl"></iconify-icon>
                  <span className="font-semibold text-slate-900">10+ Years</span>
                </div>
                <p className="text-xs text-slate-500">Dedicated practice providing excellence in patient care.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-blue-600"></span>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Meet Dr Lekota</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dr Lekota has been in practice for over 10 years. She ensures all patients feel welcomed and consistently strives for excellence in patient care during dental treatments.
                </p>
                <p>
                  She holds a Bachelor of Dental Science (BDS) and is dedicated to preventative dentistry. She is known for her caring, comfortable personality that helps patients feel at ease.
                </p>
                <p className="font-medium text-slate-800">
                  At the Tooth Fairy Dental Clinic, we focus on ensuring your comfort while providing expert dental services.
                </p>
              </div>
              <div className="pt-4">
                <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 transition-colors">
                  Book an appointment
                  <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <iconify-icon icon="solar:heart-angle-linear" className="text-5xl opacity-80"></iconify-icon>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Mission</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
            "Our mission is to provide every patient with an enjoyable experience that is stress-free, anxiety-free, and pain-free."
          </p>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Tooth Fairy Dental Clinic is a modern dental practice fitted with the latest dental technology and expert dentists, allowing us to provide a complete range of dental services — from general dentistry to complex dental surgery and cosmetic dentistry.
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What we do</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Services in Brief</h2>
            <p className="text-slate-500">Comprehensive dental care for the whole family under one roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* General */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">General Dentistry</h3>
              <p className="text-sm text-slate-500 mb-6">Diagnosis, prevention, and treatment of oral health conditions including routine checkups and scaling.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-blue-500"></iconify-icon>
                  Checkup & Clean
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-blue-500"></iconify-icon>
                  Dental Fillings
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-blue-500"></iconify-icon>
                  Gum Disease
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-blue-500"></iconify-icon>
                  Toothache Relief
                </li>
              </ul>
            </div>
            {/* Cosmetic */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-rose-200 transition-colors">
              <div className="w-12 h-12 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cosmetic Dentistry</h3>
              <p className="text-sm text-slate-500 mb-6">Enhancing your smile through aesthetic procedures and modern technology.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-rose-500"></iconify-icon>
                  Teeth Whitening
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-rose-500"></iconify-icon>
                  Invisalign
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-rose-500"></iconify-icon>
                  Porcelain Veneers
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-rose-500"></iconify-icon>
                  Implants & Bridges
                </li>
              </ul>
            </div>
            {/* Children */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-emerald-200 transition-colors">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:emoji-funny-square-linear" width="24"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Children’s Dental</h3>
              <p className="text-sm text-slate-500 mb-6">Gentle care for little ones. It is good to bring your children when you come in for your regular evaluation.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500"></iconify-icon>
                  Check-ups & X-rays
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500"></iconify-icon>
                  Fissure Sealing
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500"></iconify-icon>
                  Preventative Care
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <iconify-icon icon="solar:check-circle-linear" className="text-emerald-500"></iconify-icon>
                  Orthodontics for Children
                </li>
              </ul>
            </div>
          </div>
          {/* Additional Service Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Restorative Dentistry</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Emergency Dental Care</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Senior Dental Care</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Dentures</span>
          </div>
        </div>
      </section>

      {/* Why Regular Visits Matter (Education) */}
      <section className="py-24 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why Regular Dental Visits Matter</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                To keep your teeth and gums healthy, it is important to schedule regular checkups and dental cleanings.
              </p>
              <div className="pl-6 border-l-2 border-blue-500">
                <p className="text-white italic">
                  Adult patients should visit the dentist at least once every six months. Regular cleanings remove plaque and stains, reducing the risk of tooth decay and gum disease.
                </p>
              </div>
              <p>
                If you experience sudden pain in your teeth or gums, book an appointment immediately for proper evaluation and treatment.
              </p>
            </div>
            <a href="tel:0645043509" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-500 transition-all">
              <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
              Call Now – 064 504 3509
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <iconify-icon icon="solar:question-circle-linear" className="text-blue-400"></iconify-icon>
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <details className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 open:bg-slate-700 transition-all">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-white hover:text-blue-400 transition-colors">
                    Why do regular dental visits matter?
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="group-open:rotate-180 transition-transform"></iconify-icon>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-slate-400">
                    Regular visits help detect issues early, prevent gum disease, and maintain overall oral hygiene through professional cleaning.
                  </div>
                </details>
                {/* FAQ Item 2 */}
                <details className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 open:bg-slate-700 transition-all">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-white hover:text-blue-400 transition-colors">
                    How can I prevent cavities?
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="group-open:rotate-180 transition-transform"></iconify-icon>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-slate-400">
                    Brush twice daily, floss regularly, reduce sugar intake, and ensure you attend your 6-monthly checkups.
                  </div>
                </details>
                {/* FAQ Item 3 */}
                <details className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 open:bg-slate-700 transition-all">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-white hover:text-blue-400 transition-colors">
                    Why does the dentist take X-rays?
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="group-open:rotate-180 transition-transform"></iconify-icon>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-slate-400">
                    X-rays allow us to see problems between teeth and under the gums that aren't visible to the naked eye.
                  </div>
                </details>
                {/* FAQ Item 4 */}
                <details className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 open:bg-slate-700 transition-all">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-white hover:text-blue-400 transition-colors">
                    Can I bring my pet with me?
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="group-open:rotate-180 transition-transform"></iconify-icon>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-slate-400">
                    For hygiene and safety reasons, pets are generally not allowed in the treatment area, but exceptions may apply for service animals.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Get in touch</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">Visit Our Clinic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8 md:col-span-1">
              <div>
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                </div>
                <address className="not-italic text-slate-600 text-sm leading-relaxed pl-9">
                  Shop 122 Tramshed Shopping Centre<br />
                  Cnr Francis Baard & Lilian Ngoyi St<br />
                  Pretoria, 0002
                </address>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 text-blue-600">
                  <iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                  <h3 className="font-semibold text-slate-900">Phone Numbers</h3>
                </div>
                <div className="flex flex-col gap-1 pl-9">
                  <a href="tel:+27645043509" className="text-slate-600 hover:text-blue-600 text-sm">+27 64 504 3509</a>
                  <a href="tel:+27615830032" className="text-slate-600 hover:text-blue-600 text-sm">+27 61 583 0032</a>
                </div>
              </div>
              <div className="pt-4">
                <a href="tel:0645043509" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Call to Book
                </a>
              </div>
            </div>
            {/* Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 md:col-span-2">
              <div className="flex items-center gap-3 mb-6 text-blue-600">
                <iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
                <h3 className="font-semibold text-slate-900">Operating Hours</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Monday</span>
                  <span className="text-sm text-slate-500">8am – 5pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Tuesday</span>
                  <span className="text-sm text-slate-500">8am – 5pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Wednesday</span>
                  <span className="text-sm text-slate-500">8am – 5pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Thursday</span>
                  <span className="text-sm text-slate-500">8am – 5pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Friday</span>
                  <span className="text-sm text-slate-500">8am – 5pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Saturday</span>
                  <span className="text-sm text-slate-500">9am – 1pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-sm font-medium text-slate-700">Sunday</span>
                  <span className="text-sm text-rose-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
                <span className="font-semibold text-slate-900 tracking-tight">Tooth Fairy Dental</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modern, pain-free dental care for the whole family in the heart of Pretoria.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Shop 122 Tramshed Shopping Centre</li>
                <li>Pretoria, 0002</li>
                <li>
                  <a href="tel:0645043509" className="hover:text-blue-600 transition-colors">064 504 3509</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 text-sm">Social</h4>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-blue-600 transition-colors"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><iconify-icon icon="brandico:linkedin" width="20"></iconify-icon></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center">
            <p className="text-xs text-slate-400">© 2026 Dentist Pretoria Dr Lekota. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}