import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

// --- Shared UI Components ---

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 tracking-wide text-[16px] md:text-[18px]";
  const variants = {
    primary: "bg-[#FF5A1F] text-white hover:bg-[#e04b15] shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-transparent border-2 border-[#07162F] text-[#07162F] hover:bg-[#07162F] hover:text-white",
    outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#07162F]",
  };

  return (
    <button className={clsx(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => (
  <div className={clsx("mb-12 md:mb-16 max-w-3xl", centered && "mx-auto text-center")}>
    <h2 className={clsx(
      "font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-6 font-medium",
      light ? "text-white" : "text-[#07162F]"
    )}>
      {title}
    </h2>
    {subtitle && (
      <p className={clsx(
        "text-lg md:text-xl leading-relaxed",
        light ? "text-gray-300" : "text-[#1E2430]"
      )}>
        {subtitle}
      </p>
    )}
  </div>
);

const TrustLine = ({ light = false }) => (
  <div className={clsx(
    "text-xs md:text-sm leading-relaxed",
    light ? "text-gray-400" : "text-gray-500"
  )}>
    <p>Beth Rosenbaum | NMLS 2697806</p>
    <p>LoanWorks, Inc. | NMLS 2506079</p>
    <p>Licensed in VA, DC & MD | Equal Housing Opportunity</p>
  </div>
);

const FloatingCard = ({ title, subtitle, className }) => (
  <div className={clsx("absolute bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100", className)}>
    <div className="flex items-center gap-3 mb-2">
      <iconify-icon icon="solar:check-circle-linear" className="text-[#D9A441] text-xl"></iconify-icon>
      <h4 className="font-semibold text-[#07162F] text-sm md:text-base tracking-tight">{title}</h4>
    </div>
    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{subtitle}</p>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Free Guide', href: '#guide' },
    { name: 'Who Beth Helps', href: '#audiences' },
    { name: 'About Beth', href: '#about' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-4" : "bg-[#FAF7F2] border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-medium tracking-tight text-[#07162F]">LoanWorks.ai</span>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">Beth Rosenbaum | Mortgage Guidance</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[#1E2430] hover:text-[#FF5A1F] transition-colors">
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="!px-6 !py-3 !text-sm" onClick={() => document.getElementById('consultation').scrollIntoView()}>
            Book Free Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#07162F] text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-[#1E2430] py-2 border-b border-gray-100">
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-4 w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('consultation').scrollIntoView(); }}>
            Book Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#FAF7F2] relative overflow-hidden">
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#07162F 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <h1 className="font-serif text-[44px] md:text-[64px] leading-[1.1] tracking-tight text-[#07162F] font-medium mb-6">
          Buying Your First Home Shouldn’t Feel Like Guessing With Your Life Savings.
        </h1>
        <p className="text-[19px] text-[#1E2430] leading-relaxed mb-6 font-medium">
          Work with Beth Rosenbaum, a licensed mortgage professional who explains the real payment, the real costs, and the real next steps before you sign anything.
        </p>
        <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
          Whether you’re just starting, getting ready to make an offer, or already feeling overwhelmed by mortgage terms, Beth helps you slow the process down and understand what actually matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button onClick={() => document.getElementById('consultation').scrollIntoView()}>
            Book a Free Mortgage Consultation
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('guide').scrollIntoView()}>
            Download the Free Guide
          </Button>
        </div>
        
        <TrustLine />
      </div>

      <div className="relative h-[450px] md:h-[600px] w-full mt-8 lg:mt-0">
        {/* Inner wrapper for image to contain overflow without clipping floating cards */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/7cfdc975-2618-424d-80a1-d3e2fbbb46b3/bad422ad-da3b-4567-942c-a6f6b46d3997-image-2.png?v=1777515423208" 
            alt="Mortgage guidance" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162F]/40 to-transparent pointer-events-none"></div>
        </div>
        
        <FloatingCard 
          title="Real Payment Review" 
          subtitle="Principal + Interest + Taxes + Insurance + HOA + PMI"
          className="bottom-6 left-4 md:bottom-12 md:-left-8 max-w-[280px] z-20"
        />
        <FloatingCard 
          title="Free 15-Minute Consultation" 
          subtitle="Clear answers before you apply."
          className="top-6 right-4 md:top-12 md:-right-8 max-w-[240px] z-20"
        />
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-[#07162F] text-white">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <iconify-icon icon="solar:chat-round-dots-linear" className="text-4xl text-[#FF5A1F] mb-8"></iconify-icon>
      <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight font-medium mb-12">
        Most first-time buyers don’t need more pressure. They need someone to explain what’s actually happening.
      </h2>
      
      <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 text-left max-w-3xl mx-auto">
        <p>Buying a home can feel exciting in the beginning.</p>
        <p>Then the mortgage process starts.</p>
        <p>Suddenly you’re hearing words like pre-approval, underwriting, DTI, PMI, escrow, appraisal, rate lock, earnest money, closing costs, and contingencies.</p>
        <p>One website shows one payment. A lender gives you another number. A real estate agent tells you to move fast. And now you’re trying to make one of the biggest financial decisions of your life while wondering, <strong className="text-white font-medium">“Am I missing something important?”</strong></p>
        <p>You’re not wrong for feeling that way.</p>
        <p>Most buyers are not confused because they are careless. They are confused because nobody slowed down long enough to explain the process in plain English.</p>
      </div>

      <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 max-w-3xl mx-auto text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-[#D9A441]">That is where Beth comes in.</h3>
        <p className="text-lg md:text-xl leading-relaxed">
          Beth helps first-time buyers understand the full picture before they move forward — so they can make decisions with clarity, confidence, and less stress.
        </p>
      </div>
    </div>
  </section>
);

const DifferenceSection = () => {
  const cards = [
    {
      icon: "solar:calculator-linear",
      title: "Real Payment Clarity",
      desc: "Your monthly payment is more than just principal and interest. Beth helps you understand the full number, including taxes, insurance, HOA, and PMI when applicable."
    },
    {
      icon: "solar:chat-round-dots-linear",
      title: "Plain-English Explanations",
      desc: "No rushed calls. No confusing mortgage language. Beth walks you through the terms, timelines, and decisions that matter most."
    },
    {
      icon: "solar:calendar-mark-linear",
      title: "No Last-Minute Surprises",
      desc: "Beth helps you understand closing costs, documentation, loan conditions, and next steps earlier in the process — not three days before closing."
    },
    {
      icon: "solar:phone-calling-linear",
      title: "Fast, Personal Communication",
      desc: "When questions come up, you need someone responsive. Beth is known for being personal, helpful, and available when buyers need guidance."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="A mortgage process that feels clear, calm, and personal." 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-start group">
              <iconify-icon 
                icon={card.icon} 
                className="text-[40px] md:text-[48px] text-[#FF5A1F] mb-6 group-hover:scale-110 transition-transform duration-300"
              ></iconify-icon>
              <h3 className="font-serif text-2xl font-medium tracking-tight mb-4 text-[#07162F]">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuideSection = () => (
  <section id="guide" className="py-24 md:py-32 bg-[#E8EEF5]">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* 3D Mockup Container */}
      <div className="flex justify-center lg:justify-start [perspective:1000px]">
        <div className="relative w-full max-w-[340px] aspect-[1/1.4] bg-white rounded-r-2xl border-l-[16px] border-[#07162F] shadow-2xl p-8 flex flex-col justify-between transform transition-transform duration-500 hover:rotate-0 -rotate-3 group cursor-pointer">
          <div className="absolute top-4 right-4 bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Free 22-Page Guide
          </div>
          <div>
            <div className="w-12 h-1 bg-[#D9A441] mb-6"></div>
            <h3 className="font-serif text-4xl leading-tight font-medium text-[#07162F] tracking-tight mb-4 group-hover:text-[#FF5A1F] transition-colors">
              14 Things Nobody Told You
            </h3>
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">For First-Time Home Buyers</p>
          </div>
          
          <div className="space-y-3">
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Understand closing costs
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> The real monthly payment
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> Protecting earnest money
             </div>
          </div>
          <div className="text-xs text-gray-400 border-t pt-4 mt-6">By Beth Rosenbaum</div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-[36px] md:text-[48px] leading-tight tracking-tight text-[#07162F] font-medium mb-6">
          Free Guide: 14 Things Nobody Told You Before Buying Your First Home
        </h2>
        <p className="text-[19px] text-[#1E2430] leading-relaxed mb-8 font-medium">
          A plain-English guide for first-time buyers who want to understand the mortgage process before it gets expensive.
        </p>
        <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
          Before you shop, make an offer, or sign loan documents, learn the hidden details that surprise many first-time buyers. Inside the guide, Beth explains:
        </p>
        
        <ul className="space-y-4 mb-10">
          {[
            "Why pre-approval is not the same as final approval",
            "What your real monthly payment includes",
            "How earnest money can be at risk",
            "Why inspection and appraisal are not the same thing",
            "What closing costs really include",
            "How escrow, PMI, taxes, and insurance can affect your payment after closing"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] text-[#1E2430]">
              <iconify-icon icon="solar:check-circle-bold" className="text-[#D9A441] text-xl shrink-0 mt-0.5"></iconify-icon>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button className="w-full sm:w-auto">Download the Free Guide</Button>
          <a href="#consultation" className="text-[#07162F] font-medium underline underline-offset-4 hover:text-[#FF5A1F] transition-colors">
            Or Book a Free Consultation With Beth
          </a>
        </div>
      </div>
    </div>
  </section>
);

const BeforeShopSection = () => (
  <section className="py-24 md:py-32 bg-[#FAF7F2]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
        <div>
          <SectionHeading 
            title="Before you fall in love with a house, understand what you can actually afford." 
          />
          <p className="text-[19px] text-[#1E2430] leading-relaxed mb-6 font-medium">
            A pre-approval letter can help you start shopping, but it is not the same as a full approval.
          </p>
          <p className="text-[17px] text-gray-600 leading-relaxed">
            Beth helps you look beyond the surface number and understand what could still affect your loan, your payment, and your comfort level.
          </p>
        </div>
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl">
           <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80" 
            alt="Calculating mortgage numbers" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-serif text-xl font-medium tracking-tight mb-4 text-[#07162F]">1. Your Real Payment</h3>
          <p className="text-gray-600 leading-relaxed">Beth helps you understand the full monthly payment — not just the number that looks good on a listing website.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-serif text-xl font-medium tracking-tight mb-4 text-[#07162F]">2. Your Comfort Zone</h3>
          <p className="text-gray-600 leading-relaxed">The bank may qualify you for one number, but that does not always mean it feels comfortable in real life. Beth helps you compare the loan math with your actual monthly reality.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-serif text-xl font-medium tracking-tight mb-4 text-[#07162F]">3. Your Next Best Step</h3>
          <p className="text-gray-600 leading-relaxed">Whether you are ready now or need a little time, Beth helps you understand what to do next without pressure.</p>
        </div>
      </div>

      <div className="text-center">
        <Button onClick={() => document.getElementById('consultation').scrollIntoView()}>
          Talk Through Your Numbers With Beth
        </Button>
      </div>
    </div>
  </section>
);

const WhoHelpsSection = () => {
  const audiences = [
    {
      title: "First-Time Home Buyers",
      desc: "For buyers who want someone to explain the process clearly before they shop, make an offer, or sign anything.",
      img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80",
      questions: [
        "How much can I comfortably afford?",
        "What will my real payment be?",
        "How much money do I need before closing?",
        "What can still go wrong after pre-approval?",
        "What should I ask before making an offer?"
      ],
      btnText: "Book a First-Time Buyer Consultation",
      primary: true
    },
    {
      title: "Self-Employed Borrowers",
      desc: "For business owners, freelancers, consultants, and 1099 earners who need help understanding how lenders may review income.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      questions: [
        "How will my income be calculated?",
        "What documents should I prepare?",
        "Why does my tax return matter?",
        "What loan options may fit my situation?",
        "What can I do before applying?"
      ],
      btnText: "Discuss Self-Employed Mortgage Options",
      primary: false
    },
    {
      title: "Real Estate Investors",
      desc: "For buyers exploring rental properties, investment financing, or long-term portfolio growth.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      questions: [
        "What loan options are available for investment properties?",
        "How much down payment may be needed?",
        "How does rental income affect qualification?",
        "What should I know before buying my next property?",
        "How do I structure financing for long-term growth?"
      ],
      btnText: "Talk Through Investor Loan Options",
      primary: false
    }
  ];

  return (
    <section id="audiences" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Mortgage guidance for different types of buyers."
          subtitle="This page is built for first-time buyers, but Beth also helps borrowers with more complex situations."
          centered
        />

        <div className="flex flex-col gap-16 mt-16">
          {audiences.map((aud, i) => (
            <div key={i} className={clsx(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl p-8 md:p-12 border",
              aud.primary ? "bg-[#FAF7F2] border-[#D9A441]/30 shadow-md" : "bg-white border-gray-100"
            )}>
              <div className={clsx("order-2", i % 2 !== 0 && "lg:order-1")}>
                <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8 lg:mb-0">
                  <img src={aud.img} alt={aud.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={clsx("order-1", i % 2 !== 0 && "lg:order-2")}>
                <h3 className="font-serif text-3xl font-medium tracking-tight mb-4 text-[#07162F]">{aud.title}</h3>
                <p className="text-lg text-[#1E2430] mb-8">{aud.desc}</p>
                
                <h4 className="font-semibold text-[#07162F] mb-4 text-sm uppercase tracking-wider">Common questions Beth helps answer:</h4>
                <ul className="space-y-3 mb-10">
                  {aud.questions.map((q, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#FF5A1F] text-xl shrink-0"></iconify-icon>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={aud.primary ? "primary" : "secondary"} className="w-full sm:w-auto text-sm md:text-base" onClick={() => document.getElementById('consultation').scrollIntoView()}>
                  {aud.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="py-24 md:py-32 bg-[#07162F] text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading 
        title="Here’s what happens when you book a consultation." 
        light
        centered 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-white/20 z-0"></div>

        {[
          {
            step: "1",
            title: "Tell Beth Where You Are",
            desc: "Are you just starting, already shopping, under contract, self-employed, or looking at an investment property? Beth starts with your situation."
          },
          {
            step: "2",
            title: "Review Your Real Numbers",
            desc: "Beth helps you understand the mortgage payment, estimated costs, possible loan options, and what questions you should ask before moving forward."
          },
          {
            step: "3",
            title: "Leave With a Clear Next Step",
            desc: "You will know what to prepare, what to avoid, and what to do next — whether you are ready to buy now or still planning."
          }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center bg-[#0a1f42] p-10 rounded-3xl border border-white/10">
            <div className="w-16 h-16 bg-[#FF5A1F] rounded-full flex items-center justify-center font-serif text-2xl font-medium mb-8 shadow-lg ring-8 ring-[#07162F]">
              {item.step}
            </div>
            <h3 className="font-serif text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button onClick={() => document.getElementById('consultation').scrollIntoView()}>
          Book a Free Mortgage Consultation
        </Button>
      </div>
    </div>
  </section>
);

const ProofSection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
      <SectionHeading 
        title="Real buyer stories will go here soon." 
        subtitle="Beth is currently collecting buyer stories, client feedback, and partner testimonials. This section is prepared for verified reviews as they become available."
        centered 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { type: "First-Time Buyer Review", desc: "Placeholder for a future review from a first-time buyer who felt more confident after Beth explained the process." },
          { type: "Self-Employed Borrower Review", desc: "Placeholder for a future review from a borrower who needed help understanding income documentation." },
          { type: "Realtor Partner Review", desc: "Placeholder for a future review from a real estate agent who trusted Beth to guide their client through the mortgage process." },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-left flex flex-col h-full">
            <div className="flex gap-1 text-gray-300 mb-6">
              {[...Array(5)].map((_, j) => <iconify-icon key={j} className="text-lg" icon="solar:star-bold"></iconify-icon>)}
            </div>
            <p className="text-gray-500 italic mb-8 flex-grow">"{item.desc}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <iconify-icon icon="solar:user-linear" className="text-gray-400 text-xl"></iconify-icon>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#07162F]">{item.type}</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Verified review coming soon</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-[#FAF7F2]">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] w-full max-w-md mx-auto lg:ml-0 rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
          {/* Using a professional warm headshot style image */}
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Beth Rosenbaum" className="w-full h-full object-cover" />
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E8EEF5] rounded-full z-0"></div>
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D9A441]/20 rounded-full z-0"></div>
      </div>

      <div>
        <h2 className="font-serif text-[40px] md:text-[56px] leading-tight tracking-tight text-[#07162F] font-medium mb-4">
          Meet Beth Rosenbaum
        </h2>
        <p className="text-xl text-[#D9A441] font-medium mb-8 font-serif italic">
          A mortgage professional who believes buyers deserve clear answers before they make big decisions.
        </p>
        
        <div className="space-y-6 text-[17px] text-gray-600 leading-relaxed mb-10">
          <p>
            Beth Rosenbaum helps buyers understand the mortgage process in a way that feels practical, personal, and easy to follow.
          </p>
          <p>
            She works with first-time home buyers, self-employed borrowers, and real estate investors across VA, DC, and MD. Her approach is simple: explain the numbers, answer the questions, and help clients understand their options before they move forward.
          </p>
          <p>
            For first-time buyers especially, Beth focuses on education. She helps buyers understand what pre-approval really means, what costs to expect, how monthly payments are built, and what can happen between contract and closing.
          </p>
          <p className="text-xl font-serif text-[#07162F] font-medium pt-4">
            The goal is not to rush you into a loan.<br/>
            The goal is to help you feel prepared.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 inline-block">
          <TrustLine />
        </div>

        <div>
          <Button onClick={() => document.getElementById('consultation').scrollIntoView()}>
            Book a Free Consultation With Beth
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative py-32 bg-[#07162F] overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1600&q=80" 
      alt="Peaceful home interior" 
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
    />
    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
      <h2 className="font-serif text-[40px] md:text-[56px] leading-tight tracking-tight font-medium mb-8">
        Have questions before you apply? Start with a conversation.
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
        You do not need to have everything figured out before speaking with Beth.
      </p>
      <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
        Bring your questions. Bring your numbers. Bring the house you are considering. Or simply bring the feeling that you are not sure where to start. Beth will help you understand what matters, what to prepare, and what your next step should be.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
        <Button onClick={() => document.getElementById('consultation').scrollIntoView()}>
          Book a Free Mortgage Consultation
        </Button>
        <Button variant="outlineWhite" onClick={() => document.getElementById('guide').scrollIntoView()}>
          Download the Free Guide
        </Button>
      </div>
      <p className="text-sm text-gray-400 italic">
        No pressure. No confusing jargon. Just a clear conversation about your mortgage options.
      </p>
    </div>
  </section>
);

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', state: '', type: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({firstName: '', lastName: '', email: '', phone: '', state: '', type: '', message: ''});
    }, 1500);
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const inputClass = "w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#07162F] focus:ring-2 focus:ring-[#07162F]/10 outline-none transition-all text-[#1E2430]";

  return (
    <section id="consultation" className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div className="lg:sticky lg:top-32">
          <SectionHeading 
            title="Tell Beth where you are in the home-buying process."
            subtitle="Complete the form and Beth will follow up to help you understand your next step."
          />
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mt-8">
            <h4 className="font-serif text-xl text-[#07162F] font-medium mb-6">Beth can help you understand:</h4>
            <ul className="space-y-4">
              {[
                "Your real monthly payment",
                "Your estimated cash needed to close",
                "What pre-approval does and does not mean",
                "Which questions to ask before making an offer",
                "What your next step should be"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#D9A441] text-xl shrink-0"></iconify-icon>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          {isSuccess ? (
            <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <iconify-icon icon="solar:check-circle-bold" className="text-green-500 text-5xl"></iconify-icon>
              </div>
              <h3 className="font-serif text-3xl font-medium text-[#07162F] mb-4">Request Received</h3>
              <p className="text-gray-600 mb-8 max-w-md">Thank you for reaching out. Beth will review your information and be in touch shortly to schedule your consultation.</p>
              <Button onClick={() => setIsSuccess(false)} variant="secondary">Submit Another Inquiry</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <select required name="state" value={formData.state} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Select State</option>
                    <option value="VA">Virginia (VA)</option>
                    <option value="MD">Maryland (MD)</option>
                    <option value="DC">Washington (DC)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What best describes you?</label>
                  <select required name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Select Option</option>
                    <option value="first-time">I’m buying my first home</option>
                    <option value="self-employed">I’m self-employed</option>
                    <option value="investor">I’m looking at an investment property</option>
                    <option value="refinance">I’m refinancing</option>
                    <option value="unsure">I’m not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What question do you want Beth to help you answer?</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} className={clsx(inputClass, "min-h-[120px] resize-y")} placeholder="E.g., I'm not sure how much I need for a down payment..."></textarea>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request My Free Consultation'}
              </Button>

              <p className="text-[11px] text-gray-400 leading-tight mt-4 text-center">
                By submitting this form, you agree to be contacted by Beth Rosenbaum and/or LoanWorks regarding your inquiry. Message and data rates may apply. This is not a loan application or commitment to lend.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#07162F] text-gray-400 py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div>
          <span className="font-serif text-2xl font-medium tracking-tight text-white block mb-2">LoanWorks.ai</span>
          <TrustLine light />
        </div>
        <div className="flex items-center gap-4 text-white opacity-80">
          <iconify-icon icon="solar:home-smile-linear" className="text-3xl"></iconify-icon>
          <span className="text-sm font-medium">Equal Housing Opportunity</span>
        </div>
      </div>
      
      <div className="text-[11px] leading-relaxed space-y-4 max-w-4xl opacity-60">
        <p>All loans are subject to credit approval, property approval, underwriting, investor guidelines, and program availability. Program terms and conditions are subject to change without notice. This website is for informational purposes only and is not a commitment to lend or guarantee of approval.</p>
        <p>LoanWorks is not affiliated with or endorsed by any government agency. FHA, VA, USDA, and other loan programs are subject to applicable agency guidelines and borrower/property eligibility. | nmlsconsumeraccess.org</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#07162F] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <DifferenceSection />
        <GuideSection />
        <BeforeShopSection />
        <WhoHelpsSection />
        <ProcessSection />
        <ProofSection />
        <AboutSection />
        <FinalCTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}