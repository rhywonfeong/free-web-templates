import React, { useState, useEffect } from 'react';
import 'iconify-icon';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  // Explicitly added rounded-full here to guarantee perfectly round corners
  const baseStyle = "rounded-full px-6 py-3 min-h-[44px] font-semibold inline-flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90 hover:shadow-md",
    accent: "bg-brand-accent text-black hover:bg-opacity-90 hover:shadow-md",
    outline: "bg-white text-black border border-gray-200 hover:border-black hover:shadow-md",
    ghost: "bg-transparent text-black hover:bg-gray-100 shadow-none",
    dark: "bg-[#0f172a] text-white hover:bg-black hover:shadow-lg"
  };

  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Navigation ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 left-0 z-[500] transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-2 bg-brand-primary text-white px-5 h-[45px] rounded-full font-extrabold text-xl tracking-tight hover:scale-105 transition-transform">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/3ff66da7-8b37-450f-90a6-077c1ff87250/1c9c2360-e978-4a1e-b3b8-4507e4866353-app_icon_customer.png?v=1778949360789" alt="GrabGO" className="w-6 h-6 object-contain rounded-md" />
              <span className="hidden sm:inline">GrabGO</span>
            </a>
          </div>

          {/* Desktop Links Pill (Tabs in the middle) */}
          <div className="hidden lg:flex justify-center">
            <ul className="bg-white rounded-full flex items-center px-2 h-[56px] shadow-sm border border-gray-100">
              {['Customers', 'Vendors', 'Riders', 'FAQs'].map((item) => (
                <li key={item} className="relative group flex items-center h-full">
                  <a 
                    className="relative z-10 py-2 px-6 text-center inline-block font-semibold text-gray-600 transition-colors duration-300 group-hover:text-white" 
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                  {/* Enhanced Hover effect for middle tabs */}
                  <div className="absolute inset-y-1.5 inset-x-1 bg-brand-primary rounded-full scale-95 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 z-0"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block relative group">
               <Button variant="primary" className="h-[45px] shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5 transition-all">
                 Download App
               </Button>
            </div>
            <button className="lg:hidden bg-brand-primary text-white w-12 h-12 rounded-full flex items-center justify-center" onClick={() => setMobileMenuOpen(true)}>
              <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black text-white z-[1000] overflow-y-auto scrollbar-hide transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <div className="flex flex-col h-full">
            <div className="sticky top-0 w-full bg-black flex items-center justify-end p-6 border-b border-white/20">
               <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
               </button>
            </div>
            <div className="flex flex-col pt-4">
               {['Customers', 'Vendors', 'Riders', 'FAQs', 'About Us', 'Contact'].map((item) => (
                 <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="flex items-center text-xl font-medium h-20 pl-10 border-b border-white/20 hover:bg-brand-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                   {item}
                 </a>
               ))}
               <div className="p-10">
                 <Button variant="primary" className="w-full justify-center">
                   Download App
                 </Button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

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
      
      {/* Primary Overlay */}
      <div className="absolute inset-0 bg-[#fe6132]/60 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[80px] flex flex-col items-center justify-center h-full text-center mt-12 lg:mt-0">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-[80px] font-black leading-[1.1] tracking-tight mb-8 drop-shadow-sm">
            Everything you need, <br className="hidden md:block"/> delivered <span className="speed-text text-[#fe6132]">fast</span>.
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed drop-shadow-sm">
            Order meals, groceries, and send packages across the city with real-time tracking and zero hassle.
          </p>
        </div>
      </div>

      {/* Umbrella Curve Decorative Edge */}
      <div className="umbrella-curve-hero"></div>
    </section>
  );
};

// --- Marquee Section ---

const Marquee = () => {
  const items = ["Fresh Meals", "Quick Groceries", "Secure Packages", "Local Favorites", "Pharmacy Runs", "Midnight Snacks"];
  return (
    <div className="w-full bg-brand-primary py-6 overflow-hidden border-y-4 border-black rotate-[-1deg] scale-105 my-8">
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
  );
};

// --- Features Grid (Network Cards) ---

const Features = () => {
  const features = [
    {
      title: "For Customers",
      desc: "Get your favorite meals and everyday essentials delivered right to your doorstep in minutes.",
      icon: "solar:shop-2-bold-duotone",
      link: "Order Now",
      color: "bg-surface"
    },
    {
      title: "For Riders",
      desc: "Join our network of swift delivery partners. Earn on your own schedule with flexible hours.",
      icon: "solar:routing-2-bold-duotone",
      link: "Start Driving",
      color: "bg-brand-accent/20"
    },
    {
      title: "For Vendors",
      desc: "Reach thousands of new customers. Grow your sales with our seamless logistics network.",
      icon: "solar:graph-up-bold-duotone",
      link: "Partner With Us",
      color: "bg-brand-primary/10"
    }
  ];

  return (
    <section className="py-[128px] px-6 lg:px-[80px] max-w-[1440px] mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Empowering the City</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our platform connects hungry customers, reliable riders, and top-tier local vendors.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="network-card flex flex-col h-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${item.color}`}>
              <iconify-icon icon={item.icon} width="40" className="text-black"></iconify-icon>
            </div>
            <h3 className="text-3xl mb-4">{item.title}</h3>
            <p className="text-lg text-gray-600 mb-8 flex-grow leading-relaxed">{item.desc}</p>
            <a href="#" className="inline-flex items-center text-brand-primary font-bold text-lg hover:underline group">
              {item.link} 
              <iconify-icon icon="solar:arrow-right-linear" width="20" className="ml-2 transform group-hover:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- FAQ Section ---

const FAQItem = ({ question, answer, isOpen, onClick }) => {
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
      question: "How fast is the delivery?",
      answer: "Our lightning-fast logistics network ensures that most orders are delivered within 20-30 minutes. Real-time traffic monitoring and optimized routing help our riders get to you as quickly as possible."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in 100% transparency. The delivery fee and any applicable taxes are clearly displayed at checkout before you confirm your order. No surprises, ever."
    },
    {
      question: "Can I track my order in real-time?",
      answer: "Absolutely! Once your order is picked up by a rider, you can track their exact location on the live map in our app until it reaches your doorstep."
    },
    {
      question: "What if there is an issue with my order?",
      answer: "Our 24/7 customer support team is always ready to help. You can report an issue directly through the app, and we'll resolve it immediately with a refund or replacement."
    },
    {
      question: "Do you deliver late at night?",
      answer: "Yes! We have partners and riders operating 24/7 in most major cities. Whether it's a midnight snack or an early morning pharmacy run, we've got you covered."
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
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Got questions? We've got answers. Here is everything you need to know about GrabGO.</p>
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

// --- Footer ---

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Customers", "Vendors", "Riders", "Storefront", "Blog", "Contact"]
    },
    {
      title: "Categories",
      links: ["Fast Food Near Me", "Groceries", "Pharmacy", "Desserts & Pastries", "Healthy Choices", "Asian Cuisine", "Local Delicacies"]
    },
    {
      title: "Popular Areas",
      links: ["Downtown", "Westside", "North Hills", "Business District", "University Campus", "Suburbs"]
    }
  ];

  return (
    <footer className="bg-brand-primary text-white pt-20 relative">
      {/* Umbrella Curve Decorative Edge */}
      <div className="umbrella-curve-footer"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">
        
        {/* Top Section */}
        <div className="lg:flex border-b border-white/20 pb-16">
          <div className="flex flex-col lg:w-[35%] lg:pr-8 mb-12 lg:mb-0">
            <div className="w-20 h-20 mb-6">
               <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/3ff66da7-8b37-450f-90a6-077c1ff87250/1c9c2360-e978-4a1e-b3b8-4507e4866353-app_icon_customer.png?v=1778949360789" alt="GrabGO App Icon" className="w-full h-full object-contain rounded-[18px] shadow-sm" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-tight">GrabGO</h2>
              <p className="text-white/80 mt-2 font-medium">Bringing joy to your doorstep.</p>
            </div>

            {/* App Download Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md border border-white/10 hover:border-white/30">
                 <iconify-icon icon="simple-icons:apple" width="24"></iconify-icon>
                 <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none text-gray-300 mb-1">Download on the</span>
                    <span className="text-sm font-semibold leading-none tracking-wide">App Store</span>
                 </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md border border-white/10 hover:border-white/30">
                 <iconify-icon icon="logos:google-play-icon" width="24"></iconify-icon>
                 <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none text-gray-300 mb-1">GET IT ON</span>
                    <span className="text-sm font-semibold leading-none tracking-wide">Google Play</span>
                 </div>
              </a>
            </div>
          </div>
          
          <div className="lg:border-l border-white/20 flex-1 lg:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {footerLinks.map((col, idx) => (
                <div key={idx}>
                  <h3 className="uppercase text-brand-accent font-bold tracking-wider text-sm mb-6">{col.title}</h3>
                  <ul className="grid gap-4">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href="#" className="text-white/90 hover:text-white hover:underline font-medium transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm font-medium mb-6 md:mb-0">
            © 2024 GrabGO Logistics Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Marquee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}