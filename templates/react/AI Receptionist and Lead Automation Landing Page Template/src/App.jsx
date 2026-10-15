import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-md shadow-slate-900/10",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200",
    accent: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 focus:ring-indigo-600 shadow-lg shadow-indigo-600/20",
    darkAccent: "bg-white text-slate-900 hover:bg-slate-100 focus:ring-white",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ headline, subheadline, dark = false }) => (
  <div className="max-w-3xl mb-16 text-center mx-auto">
    <h2 className={clsx("text-3xl md:text-4xl font-semibold tracking-tight mb-4", dark ? "text-white" : "text-slate-900")}>
      {headline}
    </h2>
    {subheadline && (
      <p className={clsx("text-lg", dark ? "text-slate-400" : "text-slate-600")}>
        {subheadline}
      </p>
    )}
  </div>
);

// --- Layout Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-xl">
          <iconify-icon icon="solar:flow-square-bold-duotone" class="text-indigo-600 text-2xl"></iconify-icon>
          Flow Labs
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#problem" className="hover:text-slate-900 transition-colors">Problem</a>
          <a href="#solutions" className="hover:text-slate-900 transition-colors">What We Fix</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#roadmap" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Get Roadmap
          </a>
          <Button variant="primary" className="py-2.5 px-5 text-sm" onClick={() => document.getElementById('roadmap').scrollIntoView()}>
            Book Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 py-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-lg">
        <iconify-icon icon="solar:flow-square-bold-duotone" class="text-indigo-600 text-xl"></iconify-icon>
        Flow Labs
      </div>
      <div className="text-sm text-slate-500 text-center md:text-left">
        AI Receptionist + Lead-to-Booking Systems
      </div>
      <div className="flex gap-6 text-sm font-medium text-slate-600">
        <button onClick={() => document.getElementById('roadmap').scrollIntoView()} className="hover:text-slate-900 transition-colors">Get Lead Leak Roadmap</button>
        <button onClick={() => document.getElementById('roadmap').scrollIntoView()} className="hover:text-slate-900 transition-colors">Book a Demo</button>
      </div>
    </div>
  </footer>
);

// --- Sections ---

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Stop losing jobs to missed calls, slow replies, and forgotten follow-ups.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Flow Labs builds and manages AI receptionists and lead-to-booking systems that capture enquiries, respond faster, book callbacks, follow up quotes, and keep your CRM clean — <span className="text-slate-900 font-medium">without hiring extra admin.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button variant="accent" onClick={() => document.getElementById('roadmap').scrollIntoView()} className="text-base py-4 px-8">
              Get Your Personalised Lead Leak Roadmap
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('roadmap').scrollIntoView()} className="text-base py-4 px-8">
              Book a Demo
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <iconify-icon icon="solar:shield-check-bold" class="text-indigo-600"></iconify-icon>
            Custom build • Monthly management • Owner stays in control
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none lg:h-[600px] flex justify-center items-center">
          {/* Phone Mockup */}
          <div className="relative w-[320px] h-[650px] bg-white rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden shrink-0 ring-1 ring-slate-900/10">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto z-20"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-slate-50 flex flex-col pt-12">
              <div className="px-6 pb-4 border-b border-slate-200 bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <iconify-icon icon="solar:smart-speaker-minimalistic-bold-duotone" class="text-xl"></iconify-icon>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Flow AI</div>
                    <div className="text-xs text-indigo-600 font-medium">Active Agent</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-5 space-y-4 overflow-hidden relative">
                {/* System Message */}
                <div className="flex justify-center">
                   <div className="bg-slate-200/60 text-slate-500 text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                     Missed call from +1 555-0198
                   </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 shrink-0 flex items-center justify-center text-indigo-600 mt-1">
                     <iconify-icon icon="solar:smart-speaker-minimalistic-bold-duotone" class="text-sm"></iconify-icon>
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm">
                    Hi! You reached Flow Plumbing. Sorry we missed your call, how can we help today?
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 mt-1"></div>
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                    Hi, my water heater just started leaking heavily. Need someone to take a look.
                  </div>
                </div>

                 <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 shrink-0 flex items-center justify-center text-indigo-600 mt-1">
                     <iconify-icon icon="solar:smart-speaker-minimalistic-bold-duotone" class="text-sm"></iconify-icon>
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm">
                    I can definitely get that sorted. I've noted down the emergency. I'm booking a priority callback from our tech team in the next 10 mins. Does that work?
                  </div>
                </div>
                 <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 mt-1"></div>
                  <div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                    Yes, please.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards (Hidden on mobile for cleaner look) */}
          <div className="hidden lg:flex absolute top-24 -right-16 bg-white border border-slate-100 p-3 pr-4 rounded-xl shadow-xl shadow-slate-200/50 items-center gap-3 animate-[translate-y_3s_ease-in-out_infinite_alternate]">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
               <iconify-icon icon="solar:phone-calling-bold-duotone"></iconify-icon>
            </div>
            <div className="text-sm font-medium text-slate-900">Missed Call Captured</div>
          </div>

           <div className="hidden lg:flex absolute top-1/2 -left-20 bg-white border border-slate-100 p-3 pr-4 rounded-xl shadow-xl shadow-slate-200/50 items-center gap-3 animate-[translate-y_4s_ease-in-out_infinite_alternate_reverse]">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
               <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>
            </div>
            <div className="text-sm font-medium text-slate-900">Callback Booked</div>
          </div>

          <div className="hidden lg:flex absolute bottom-32 -right-12 bg-white border border-slate-100 p-3 pr-4 rounded-xl shadow-xl shadow-slate-200/50 items-center gap-3 animate-[translate-y_3.5s_ease-in-out_infinite_alternate]">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
               <iconify-icon icon="solar:server-square-update-bold-duotone"></iconify-icon>
            </div>
            <div className="text-sm font-medium text-slate-900">CRM Updated</div>
          </div>

           <div className="hidden lg:flex absolute bottom-12 -left-12 bg-white border border-slate-100 p-3 pr-4 rounded-xl shadow-xl shadow-slate-200/50 items-center gap-3 animate-[translate-y_4.5s_ease-in-out_infinite_alternate_reverse]">
             <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
               <iconify-icon icon="solar:user-check-bold-duotone"></iconify-icon>
            </div>
            <div className="text-sm font-medium text-slate-900">Owner Approval Req.</div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Missed calls", icon: "solar:phone-calling-rounded-bold-duotone", color: "text-red-500", bg: "bg-red-50" },
    { title: "Slow callbacks", icon: "solar:clock-circle-bold-duotone", color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Quotes not followed up", icon: "solar:document-text-bold-duotone", color: "text-amber-500", bg: "bg-amber-50" },
    { title: "CRM/admin mess", icon: "solar:layers-minimalistic-bold-duotone", color: "text-stone-500", bg: "bg-stone-50" },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          headline="Your leads are leaking before they become jobs." 
          subheadline="Most service businesses do not need more leads first. They need to stop losing the leads they already get."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-6", p.bg, p.color)}>
                <iconify-icon icon={p.icon} class="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-slate-900">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const solutions = [
    { title: "Capture missed calls", outcome: "Customers get followed up before they call someone else.", icon: "solar:record-circle-bold-duotone" },
    { title: "Respond faster", outcome: "New enquiries are contacted while they are still ready to buy.", icon: "solar:bolt-bold-duotone" },
    { title: "Follow up quotes", outcome: "Open quotes and dead leads do not get forgotten.", icon: "solar:refresh-circle-bold-duotone" },
    { title: "Book callbacks", outcome: "Serious enquiries get pushed toward a booked next step.", icon: "solar:calendar-mark-bold-duotone" },
    { title: "Clean up CRM/admin", outcome: "Leads, notes, stages, and follow-ups stay organised.", icon: "solar:check-read-multiple-bold-duotone" },
    { title: "Reduce manual admin", outcome: "The owner and team spend less time chasing and updating manually.", icon: "solar:shield-user-bold-duotone" },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading headline="What Flow Labs fixes" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
             <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-900/5 transition-all duration-300">
               <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors mb-6">
                  <iconify-icon icon={s.icon} class="text-2xl"></iconify-icon>
               </div>
               <h3 className="text-xl font-medium text-slate-900 mb-3">{s.title}</h3>
               <p className="text-slate-600">{s.outcome}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Funnel Data & Component ---
const funnelSteps = [
  {
    id: 'business_type',
    question: "What type of business do you run?",
    options: ["Plumbing", "HVAC / Air Conditioning", "Electrical", "Roofing", "Other service business"]
  },
  {
    id: 'lead_problem',
    question: "What is your biggest lead problem right now?",
    options: ["Missed calls", "Slow callbacks", "Quotes not followed up", "Booking/callback mess", "CRM/admin mess", "Not sure"]
  },
  {
    id: 'enquiry_source',
    question: "How do most new enquiries come in?",
    options: ["Phone calls", "Website forms", "Google Ads", "Facebook/Instagram", "Referrals", "Mix of everything"]
  },
  {
    id: 'response_time',
    question: "How fast do you usually respond to new enquiries?",
    options: ["Instantly", "Within 1 hour", "Same day", "Next day or later", "Not sure"]
  },
  {
    id: 'quote_followup',
    question: "What happens after a quote is sent?",
    options: ["We follow up manually", "We have reminders", "It depends", "Usually no system"]
  },
  {
    id: 'improvement_goal',
    question: "What do you want improved first?",
    options: ["More booked callbacks", "Faster response", "More quote follow-up", "Cleaner CRM", "Less admin"]
  }
];

const RoadmapFunnel = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '', business: '', website: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isContactStep = currentStep === funnelSteps.length;
  const progress = ((currentStep) / (funnelSteps.length + 1)) * 100;

  const handleOptionSelect = (option) => {
    setAnswers(prev => ({ ...prev, [funnelSteps[currentStep].id]: option }));
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 300); // Small delay for visual feedback
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.business) {
      setError('Please fill in required fields (Name, Email, Business Name).');
      return;
    }
    setError('');
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const renderSuccess = () => (
    <div className="text-center py-12 px-6 animate-[opacity_0.5s_ease-in-out]">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mx-auto mb-6">
        <iconify-icon icon="solar:check-circle-bold-duotone" class="text-4xl"></iconify-icon>
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Your roadmap request has been received.</h3>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Flow Labs will review your answers and map out where your biggest lead leak likely is.
      </p>
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-8 max-w-md mx-auto">
        <h4 className="font-medium text-slate-900 mb-2">Want to move faster?</h4>
        <p className="text-sm text-slate-500 mb-6">Skip the wait and let's diagnose your system on a quick call.</p>
        <Button variant="primary" className="w-full">Book a Demo Now</Button>
      </div>
    </div>
  );

  return (
    <section id="roadmap" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          dark 
          headline="Get a personalised roadmap for where your revenue is leaking."
          subheadline="Answer a few quick questions and Flow Labs will map the biggest lead leak in your business and what system would fix it first."
        />

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl text-slate-900 max-w-3xl mx-auto relative overflow-hidden">
          {isSubmitted ? (
            renderSuccess()
          ) : (
            <>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full mb-10 overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {currentStep > 0 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="absolute top-6 left-6 md:top-10 md:left-10 text-slate-400 hover:text-slate-900 flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  <iconify-icon icon="solar:arrow-left-linear" class="text-lg"></iconify-icon>
                  Back
                </button>
              )}

              <div className="min-h-[300px] flex flex-col justify-center">
                {!isContactStep ? (
                  <div className="animate-[opacity_0.3s_ease-in-out]">
                    <h3 className="text-2xl font-semibold mb-8 text-center px-4">
                      {funnelSteps[currentStep].question}
                    </h3>
                    <div className="space-y-3 max-w-xl mx-auto">
                      {funnelSteps[currentStep].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionSelect(opt)}
                          className={clsx(
                            "w-full p-4 rounded-xl border text-left font-medium transition-all duration-200",
                            answers[funnelSteps[currentStep].id] === opt 
                              ? "border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm"
                              : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-[opacity_0.3s_ease-in-out] max-w-xl mx-auto w-full">
                    <h3 className="text-2xl font-semibold mb-2 text-center">Where should we send your roadmap?</h3>
                    <p className="text-slate-500 text-center mb-8 text-sm">Last step. We'll map your custom solution.</p>
                    
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
                            value={contactData.name}
                            onChange={e => setContactData({...contactData, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                          <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
                            value={contactData.email}
                            onChange={e => setContactData({...contactData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
                          value={contactData.phone}
                          onChange={e => setContactData({...contactData, phone: e.target.value})}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Business Name *</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
                            value={contactData.business}
                            onChange={e => setContactData({...contactData, business: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Website (Optional)</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all"
                            value={contactData.website}
                            onChange={e => setContactData({...contactData, website: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" variant="accent" className="w-full py-4 text-base">
                          Get My Roadmap
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Diagnose the leak", desc: "We find where calls, quotes, follow-ups, bookings, or admin are costing you opportunities." },
    { num: "02", title: "Build the right system", desc: "We build the AI receptionist, follow-up, booking, CRM, or admin workflow your business actually needs first." },
    { num: "03", title: "Manage & improve monthly", desc: "We monitor, improve, and manage the agents so the system keeps working." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
          <p className="text-lg text-slate-600 font-medium">We do not install everything by default. We diagnose what is actually worth fixing first.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-slate-200 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col md:items-center md:text-center">
              <div className="w-24 h-24 rounded-full bg-white border-8 border-slate-50 shadow-sm flex items-center justify-center text-2xl font-bold text-slate-300 mb-6 shrink-0">
                {step.num}
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HumanApproval = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-8">
        <iconify-icon icon="solar:user-hand-up-bold-duotone" class="text-3xl"></iconify-icon>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
        AI speed. Owner control.
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
        Flow Labs agents handle capture, follow-up, booking, CRM updates, and admin workflows. Important decisions can stay under human approval so the owner stays in control.
      </p>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 bg-slate-900 relative overflow-hidden">
    {/* Subtle abstract background element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
        Find out where your leads are leaking.
      </h2>
      <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
        Get a personalised Lead Leak Roadmap and see what system would create the biggest improvement first.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="accent" onClick={() => document.getElementById('roadmap').scrollIntoView()} className="text-base py-4 px-8">
          Get Your Personalised Lead Leak Roadmap
        </Button>
        <Button variant="darkAccent" onClick={() => document.getElementById('roadmap').scrollIntoView()} className="text-base py-4 px-8">
          Book a Demo
        </Button>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <RoadmapFunnel />
        <HowItWorks />
        <HumanApproval />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}