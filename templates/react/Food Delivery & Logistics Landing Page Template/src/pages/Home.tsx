import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'iconify-icon';
import Button from '../components/Button';
import CityIllustration, { CityName } from '../components/CityIllustration';

const ORDER_URL = 'https://onelink.to/a6939s';

// --- Hero Section ---

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/3ff66da7-8b37-450f-90a6-077c1ff87250/a4d2cbcb-9d35-42e6-bf38-5aa5f374c393-grabgo-main-video.webm?v=1778948620848" type="video/webm" />
        <source src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/3ff66da7-8b37-450f-90a6-077c1ff87250/a4d2cbcb-9d35-42e6-bf38-5aa5f374c393-grabgo-main-video.mp4" type="video/mp4" />
      </video>

      {/* Primary Overlay - deep navy into hot pink / electric purple, like the logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141238]/80 via-[#7B2FD6]/55 to-[#F0148C]/65 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[80px] flex flex-col items-center justify-center h-full text-center mt-12 lg:mt-0">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
            <span className="speed-text text-[#FF5CB8]">Caribbean</span> Food, Delivered <br className="hidden md:block" /> Straight to Your Door
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed drop-shadow-sm">
            Island Run is the app that brings authentic Caribbean food straight to your door — jerk chicken, oxtail, curry goat, and all your island favorites, delivered piping hot.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" className="hero-order-cta text-xl px-10 py-5 font-extrabold hover:-translate-y-0.5">
                <iconify-icon icon="solar:bag-smile-bold" width="24" className="mr-2"></iconify-icon>
                Order Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-4 shadow-lg shadow-black/20 hover:-translate-y-0.5">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Umbrella Curve Decorative Edge */}
      <div className="umbrella-curve-hero"></div>
    </section>
  );
};

// --- Locations / Coverage Area ---

type LocationLink = {
  name: CityName;
  href?: string;
  to?: string;
};

const Locations = () => {
  const locations: LocationLink[] = [
    { name: 'Jamaica', href: 'https://www.islandrunja.com/' },
    { name: 'New York', to: '/work' },
    { name: 'Los Angeles', to: '/work' },
    { name: 'Houston', to: '/work' },
    { name: 'Atlanta', to: '/work' },
    { name: 'Southern Florida', to: '/work' }
  ];

  return (
    <section id="locations" className="py-[96px] px-6 lg:px-[80px] max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
          <iconify-icon icon="solar:map-point-bold" width="16"></iconify-icon>
          <span>Coverage Area</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Serving You In</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are expanding our network every day. Find Island Run delivery drivers currently operating in these major hubs:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {locations.map((loc) => {
          const cardContent = (
            <>
              {/* City image banner */}
              <div className="relative h-36 md:h-40 w-full overflow-hidden">
                <CityIllustration
                  city={loc.name}
                  className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <div className="flex flex-col items-center text-center px-6 py-7">
                <h3 className="text-2xl font-extrabold tracking-tight inline-flex items-center gap-2 group-hover:text-brand-primary transition-colors">
                  {loc.name}
                  <iconify-icon
                    icon={loc.href ? 'solar:square-top-up-linear' : 'solar:arrow-right-linear'}
                    width="20"
                    className="text-brand-primary opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                  ></iconify-icon>
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-primary uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  Now Delivering
                </span>
              </div>
            </>
          );

          const cardClass =
            'network-card group flex flex-col !p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10';

          return loc.href ? (
            <a
              key={loc.name}
              href={loc.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order in ${loc.name} — opens islandrunja.com`}
              className={cardClass}
            >
              {cardContent}
            </a>
          ) : (
            <Link key={loc.name} to={loc.to ?? '/work'} aria-label={`See coverage details for ${loc.name}`} className={cardClass}>
              {cardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

// --- Marquee Section ---

const Marquee = () => {
  const items = ['Fresh Meals', 'Quick Groceries', 'Secure Packages', 'Local Favorites', 'Island Flavors', 'Midnight Snacks'];
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <div className="w-full bg-brand-gradient py-6 overflow-hidden border-y-4 border-brand-navy rotate-[-1deg] scale-105 my-8">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, index) => (
                <React.Fragment key={`${i}-${index}`}>
                  <span className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mx-8">
                    {item}
                  </span>
                  <iconify-icon icon="solar:star-fall-bold" width="32" className="text-brand-accent"></iconify-icon>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Features Grid (Why Choose Us) ---

const Features = () => {
  const features = [
    {
      title: 'Authentic Caribbean Flavors',
      desc: 'Jerk chicken, oxtail, curry goat, ackee and saltfish — real island cooking from trusted local kitchens, delivered piping hot.',
      icon: 'solar:chef-hat-bold-duotone',
      link: 'Explore Features',
      to: '/features',
      color: 'bg-surface'
    },
    {
      title: 'Real-Time Tracking',
      desc: "Complete transparency. Follow your meal's journey from the restaurant's kitchen straight to your front door.",
      icon: 'solar:map-point-wave-bold-duotone',
      link: 'Order Now',
      href: ORDER_URL,
      color: 'bg-brand-accent/20'
    },
    {
      title: 'International Scale',
      desc: 'Expertly managing food logistics from the Caribbean to major US metropolitan areas with consistent reliability.',
      icon: 'solar:global-bold-duotone',
      link: 'Partner With Us',
      to: '/contact',
      color: 'bg-brand-primary/10'
    }
  ];

  return (
    <section className="py-[128px] px-6 lg:px-[80px] max-w-[1440px] mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Why Choose Us</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">The easiest way to get Caribbean food to your door — built for hungry customers, reliable drivers, and top-tier island kitchens.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="network-card flex flex-col h-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${item.color}`}>
              <iconify-icon icon={item.icon} width="40" className="text-black"></iconify-icon>
            </div>
            <h3 className="text-3xl mb-4">{item.title}</h3>
            <p className="text-lg text-gray-600 mb-8 flex-grow leading-relaxed">{item.desc}</p>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-bold text-lg hover:underline group">
                {item.link}
                <iconify-icon icon="solar:arrow-right-linear" width="20" className="ml-2 transform group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
            ) : (
              <Link to={item.to} className="inline-flex items-center text-brand-primary font-bold text-lg hover:underline group">
                {item.link}
                <iconify-icon icon="solar:arrow-right-linear" width="20" className="ml-2 transform group-hover:translate-x-1 transition-transform"></iconify-icon>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// --- FAQ Section ---

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className={`border-b border-gray-200 py-5 transition-colors duration-300 ${isOpen ? 'bg-brand-primary/5 rounded-2xl px-6 -mx-6 border-transparent' : 'px-6 -mx-6'}`}>
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-gray-900 group-hover:text-brand-primary'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-gray-400 group-hover:bg-brand-primary/10 group-hover:text-brand-primary border border-gray-100'}`}>
          <iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden text-gray-600 text-lg leading-relaxed pr-12 font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How fast is the delivery?',
      answer: 'Most orders are delivered within 20-30 minutes. Our experienced dispatch team and well-planned routes help our drivers get your Caribbean favorites to you as quickly as possible.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in 100% transparency. The delivery fee and any applicable taxes are clearly displayed at checkout before you confirm your order. No surprises, ever.'
    },
    {
      question: 'Can I track my order in real-time?',
      answer: "Absolutely! Once your order is picked up by a driver, you can track their exact location on the live map in our app until it reaches your doorstep."
    },
    {
      question: 'What if there is an issue with my order?',
      answer: "Our 24/7 customer support team is always ready to help. You can report an issue directly through the app, and we'll resolve it immediately with a refund or replacement."
    },
    {
      question: 'Which cities does Island Run serve?',
      answer: 'Island Run currently operates in Jamaica, New York, Los Angeles, Houston, Atlanta, and Southern Florida — and we are expanding our network every day.'
    }
  ];

  return (
    <section id="faqs" className="py-[128px] px-6 lg:px-[80px] max-w-[1000px] mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
          <iconify-icon icon="solar:question-circle-bold" width="16"></iconify-icon>
          <span>Support</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Got questions? We've got answers. Here is everything you need to know about Island Run.</p>
      </div>

      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

// --- Home Page ---

export default function Home() {
  return (
    <>
      <Hero />
      <Locations />
      <Features />
      <Marquee />
      <FAQ />
    </>
  );
}
