import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import BackgroundGlow from '../components/effects/BackgroundGlow';

const ServiceCard = ({ icon, title, description }) => (
  <div className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 group cursor-pointer bg-white/60 flex flex-col h-full border border-white/80 relative overflow-hidden">
    <div className="absolute -inset-10 bg-gradient-to-br from-emerald-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0 pointer-events-none"></div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-white text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 shadow-sm border border-emerald-100/50">
        <iconify-icon icon={icon} width="28" height="28"></iconify-icon>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">{description}</p>
      <div className="flex items-center text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-auto group-hover:gap-3 gap-2 transition-all">
        Learn More
        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
      </div>
    </div>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-black/5 last:border-0">
    <button 
      className="w-full flex justify-between items-center py-5 text-left transition-colors hover:text-emerald-700"
      onClick={onClick}
    >
      <span className={clsx("font-medium pr-4 transition-colors", isOpen ? "text-emerald-800" : "text-gray-800")}>{question}</span>
      <div className={clsx("shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300", isOpen ? "bg-emerald-100 text-emerald-700 rotate-180" : "bg-gray-100 text-gray-500")}>
        <iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
      </div>
    </button>
    <div className={clsx("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0")}>
      <p className="text-gray-500 text-sm leading-relaxed pr-8">{answer}</p>
    </div>
  </div>
);

const faqs = [
  { type: 'General', q: 'What should I expect during my first visit?', a: 'Your initial visit will involve a comprehensive assessment, including a review of your medical history and a physical examination to create a tailored treatment plan.' },
  { type: 'General', q: 'Do I need a referral to book an appointment?', a: 'No, you do not need a referral to see any of our practitioners. However, some insurance plans may require one for coverage, so we recommend checking with your provider.' },
  { type: 'General', q: 'Do you offer direct billing to insurance?', a: 'Yes, we offer direct billing for most major insurance providers to make your visit as seamless as possible.' },
  { type: 'Chiro', q: 'Is chiropractic treatment safe?', a: 'Yes, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal complaints.' },
  { type: 'Chiro', q: 'What is a chiropractic adjustment?', a: 'An adjustment is a highly controlled procedure that rarely causes discomfort. The chiropractor uses their hands or a small instrument to apply a quick, specific force to a joint.' },
  { type: 'Chiro', q: 'How many sessions will I need?', a: 'The number of sessions depends on your specific condition, severity, and how your body responds to treatment. Your chiropractor will discuss an expected timeline during your first visit.' }
];

const Home = () => {
  const [activeFaqTab, setActiveFaqTab] = useState('General');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const filteredFaqs = faqs.filter(faq => faq.type === activeFaqTab);

  return (
    <div className="relative flex flex-col w-full pb-10">
      <BackgroundGlow />
      
      {/* HERO SECTION */}
      <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl glass-panel rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 rounded-[3rem] border border-white/60 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col justify-center max-w-xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium tracking-wide w-max mb-6">
                <iconify-icon icon="solar:heart-pulse-linear" width="16"></iconify-icon>
                <span>Modern Healthcare</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-900 mb-4 leading-[1.1]">
                Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-teal-600">Modern Health Clinic</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-medium text-gray-600 mb-6 tracking-tight">
                Your path to wellness, all under one roof.
              </h2>
              
              <p className="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
                Experience healthcare reimagined. We combine state-of-the-art technology with compassionate, personalized care to help you achieve optimal health and well-being.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  to="/book" 
                  className="glass-button-primary px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-gray-900 uppercase flex items-center gap-2 group"
                >
                  Book Your Appointment
                  <iconify-icon 
                    icon="solar:arrow-right-linear" 
                    className="transition-transform group-hover:translate-x-1" 
                    width="18"
                  ></iconify-icon>
                </Link>
                <a 
                  href="#services" 
                  className="px-6 py-4 rounded-full text-sm font-medium text-gray-600 hover:text-emerald-800 hover:bg-emerald-50/50 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative h-[500px] sm:h-[600px] w-full flex items-end justify-center lg:justify-end animate-fade-in-up delay-200">
              <div className="absolute right-0 bottom-0 w-[80%] aspect-square rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-100/20 backdrop-blur-3xl border border-white/40 shadow-2xl shadow-emerald-900/5 -z-10 transform translate-x-10 translate-y-10"></div>
              <div className="absolute right-[5%] bottom-[5%] w-[70%] aspect-square rounded-full border border-emerald-900/5 -z-10"></div>

              <div className="relative h-[90%] w-[85%] max-w-[460px] rounded-[2.5rem] overflow-hidden glass-panel border-4 border-white shadow-2xl shadow-black/10 isolate bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                  alt="Healthcare professional" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center gap-4 backdrop-blur-xl bg-white/70">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <iconify-icon icon="solar:shield-check-bold-duotone" width="24" height="24"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Certified Experts</p>
                    <p className="text-xs text-gray-600">Top-rated specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED IN LOGOS SECTION */}
      <div className="w-full border-y border-white/40 bg-white/30 backdrop-blur-md py-10 my-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-8">
            Featured & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
            <iconify-icon icon="simple-icons:forbes" width="70" className="text-gray-900 transition-colors duration-300"></iconify-icon>
            <iconify-icon icon="simple-icons:bloomberg" width="100" className="text-gray-900 transition-colors duration-300"></iconify-icon>
            <iconify-icon icon="simple-icons:techcrunch" width="100" className="text-emerald-800 transition-colors duration-300"></iconify-icon>
            <iconify-icon icon="simple-icons:the-new-york-times" width="140" className="text-gray-900 transition-colors duration-300"></iconify-icon>
            <iconify-icon icon="simple-icons:maven" width="90" className="text-blue-900 transition-colors duration-300"></iconify-icon>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden aspect-[4/3] glass-panel p-2 shadow-xl shadow-black/5">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552673552-321a5a043e71?w=800&q=80" 
                alt="Modern Clinic Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60 -z-10"></div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-emerald-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">Dedicated to your well-being journey.</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              At Modern Health Clinic, we believe in a holistic approach to wellness. Our multidisciplinary team of experienced practitioners works collaboratively to provide comprehensive, evidence-based care tailored entirely to your needs.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Located in the heart of Markham, our state-of-the-art facility is designed to promote healing and comfort from the moment you walk through our doors.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition-colors">
              Read more about us
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Comprehensive care tailored to your unique needs, combining advanced medical techniques with holistic healing approaches for total wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <ServiceCard
              icon="solar:bone-bold-duotone"
              title="Chiropractic"
              description="Expert spinal adjustments designed to correct alignment, relieve chronic pain, and improve your body's overall physical function."
            />
            <ServiceCard
              icon="solar:heart-pulse-bold-duotone"
              title="Physiotherapy"
              description="Targeted rehabilitation and guided movement therapies established to restore your strength, mobility, and independence."
            />
            <ServiceCard
              icon="solar:magic-stick-3-bold-duotone"
              title="Acupuncture"
              description="Traditional holistic techniques utilizing fine needles to balance energy flow and stimulate your body's natural healing processes."
            />
            <ServiceCard
              icon="solar:hand-heart-bold-duotone"
              title="Massage Therapy"
              description="Therapeutic manipulation of soft tissues focused on reducing muscle tension, easing pain, and lowering everyday physical stress."
            />
          </div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/30 border-y border-white/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FAQ Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 glass-panel p-3 rounded-[2.5rem] shadow-xl shadow-black/5 aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Clinic Consultation" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
              <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-5 flex items-center gap-4 animate-float-delayed">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <iconify-icon icon="solar:chat-round-check-bold" width="20"></iconify-icon>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Have Questions?</p>
                  <p className="text-xs text-gray-500">We're here to help.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content Side */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-emerald-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">Find Answers</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-8">Frequently Asked Questions</h2>
            
            {/* Segmented Control Filter */}
            <div className="flex p-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl w-max mb-8">
              {['General', 'Chiro'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveFaqTab(tab);
                    setOpenFaqIndex(0);
                  }}
                  className={clsx(
                    "px-8 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    activeFaqTab === tab 
                      ? "bg-white text-emerald-800 shadow-sm" 
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === index}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Our Environment</h2>
            <p className="text-gray-500 text-lg">A modern, peaceful space designed for your healing.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden glass-panel p-1.5 md:col-span-2 md:row-span-2">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="Clinic Space 1" className="w-full h-full object-cover rounded-[1.5rem] hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden glass-panel p-1.5">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Clinic Space 2" className="w-full h-full object-cover rounded-[1.5rem] hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden glass-panel p-1.5">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Clinic Space 3" className="w-full h-full object-cover rounded-[1.5rem] hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden glass-panel p-1.5 md:col-span-2">
              <img src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=800&q=80" alt="Clinic Space 4" className="w-full h-full object-cover rounded-[1.5rem] hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOX SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-10 sm:p-16 relative overflow-hidden text-center bg-gradient-to-b from-white/80 to-white/40 border border-white/80">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] -z-10 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-[80px] -z-10 opacity-50"></div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-8">Contact Modern Health Clinic</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:phone-calling-bold-duotone" width="24"></iconify-icon>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call</span>
              <a href="tel:2898468888" className="text-lg font-medium text-gray-900 hover:text-emerald-700 transition-colors">(289) 846-8888</a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:letter-bold-duotone" width="24"></iconify-icon>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</span>
              <a href="mailto:info@modernhealthclinic.ca" className="text-lg font-medium text-gray-900 hover:text-emerald-700 transition-colors">info@modernhealthclinic.ca</a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                <iconify-icon icon="solar:printer-bold-duotone" width="24"></iconify-icon>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fax</span>
              <span className="text-lg font-medium text-gray-900">(289) 846-5555</span>
            </div>
          </div>
          
          <Link 
            to="/book" 
            className="inline-flex glass-button-primary px-10 py-5 rounded-full text-sm font-semibold tracking-wider text-gray-900 uppercase items-center gap-2"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* LOCATION MAP SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <div className="max-w-7xl mx-auto glass-panel p-2 rounded-[3rem] overflow-hidden shadow-xl shadow-black/5">
          <div className="w-full h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.5188619639535!2d-79.3496035845016!3d43.837834579115714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4a945b0a395%3d0xaf8e16cc196c3a7a!2s317%20Renfrew%20Dr%20%23102%2C%20Markham%2C%20ON%20L3R%209S8!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Modern Health Clinic Location"
              className="grayscale-[0.3] contrast-[1.05] opacity-90"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;