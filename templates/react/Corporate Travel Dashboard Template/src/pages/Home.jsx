import React from 'react';
import { Link } from 'react-router-dom';
import { ThreadCard, ItineraryCard } from '../components/Mockups';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Hero Copy */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-stone-900 leading-[1.1] mb-6">
              Turn messy threads into calm itineraries.
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed mb-10 max-w-md">
              The AI agent that coordinates with external partners, syncs calendars, and builds a single source of truth for your team's travel and operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/demo" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5 gap-2">
                Book a demo
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-6 rounded-full bg-transparent border border-stone-200 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors">
                Explore platform
              </a>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="relative">
            {/* Soft background shape */}
            <div className="absolute inset-0 bg-stone-200/40 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
            
            <div className="bg-[#F6F4EF] border border-stone-200/60 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative shadow-sm">
              
              {/* Left Column: Messy Threads */}
              <div className="flex flex-col gap-3 w-full max-w-[240px] relative z-10 hidden sm:flex">
                <div className="-ml-4 transform -rotate-2">
                  <ThreadCard 
                    sender="Sarah (Client)" 
                    subject="Re: Next week's meetings. We need to push the 2pm..." 
                    time="10:42 AM" 
                    isActive={false} 
                    delay={0}
                  />
                </div>
                <div className="z-20 transform translate-x-2">
                  <ThreadCard 
                    sender="Delta Airlines" 
                    subject="Schedule Change: Your upcoming flight DL492 has been updated." 
                    time="11:15 AM" 
                    isActive={true} 
                    delay={100}
                  />
                </div>
                <div className="ml-4 transform rotate-1 opacity-60">
                  <ThreadCard 
                    sender="Concierge" 
                    subject="Car service confirmed for LHR arrival at terminal 5." 
                    time="Yesterday" 
                    isActive={false} 
                    delay={200}
                  />
                </div>
                
                {/* Connecting lines SVG purely for visual flow */}
                <svg className="absolute top-1/2 -right-8 w-16 h-8 text-stone-300 z-0" fill="none" viewBox="0 0 64 32">
                  <path d="M0 16 C32 16, 32 16, 64 16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M58 10 L64 16 L58 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Right Column: Clean Itinerary */}
              <div className="w-full sm:w-auto relative z-20 flex-1 flex justify-center">
                <ItineraryCard />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white border-y border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl tracking-tight font-medium text-stone-900 mb-4">
              Coordination is broken.
            </h2>
            <p className="text-stone-500">
              Operations teams spend hours manually stitching together context from dozens of fragmented sources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "solar:letter-linear",
                title: "Too many threads",
                desc: "Vendors, clients, and internal teams all communicating in silos across email and Slack."
              },
              {
                icon: "solar:calendar-linear",
                title: "Calendar conflicts",
                desc: "Constant back-and-forth trying to align time zones and availability manually."
              },
              {
                icon: "solar:documents-minimalistic-linear",
                title: "Fragmented plans",
                desc: "Important confirmation numbers and details buried deep in endless email histories."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#FDFBF7] border border-stone-200/60 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700 mb-6 shadow-sm">
                  <iconify-icon icon={item.icon} width="20"></iconify-icon>
                </div>
                <h3 className="text-base font-medium text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-2 block">Workflow</span>
            <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-stone-900 max-w-xl">
              From initial request to finalized plan, on autopilot.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect", desc: "Integrate your inbox and calendar seamlessly securely." },
              { step: "02", title: "Set Goals", desc: "Define constraints, budgets, and preferences for the trip." },
              { step: "03", title: "Agent Syncs", desc: "Our AI reads threads, drafts replies, and builds the plan." },
              { step: "04", title: "Approve", desc: "You review the unified itinerary and hit approve." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-sm font-medium text-stone-300 mb-4 group-hover:text-stone-900 transition-colors">{step.step}</div>
                <div className="h-px w-full bg-stone-200 mb-6 relative">
                  <div className="absolute top-0 left-0 h-full bg-stone-900 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Control Section */}
      <section id="security" className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-2xl md:text-3xl tracking-tight font-medium mb-6">
                You remain in the driver's seat.
              </h2>
              <p className="text-stone-400 leading-relaxed">
                TripLocked handles the tedious coordination, but final decisions always require human approval. Built for enterprise security from day one.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {[
                { icon: "solar:user-check-linear", title: "Human in the loop", desc: "No bookings or external emails are sent without your explicit click." },
                { icon: "solar:shield-check-linear", title: "Strict Permissions", desc: "Granular controls over what the agent can read and modify." },
                { icon: "solar:history-linear", title: "Audit Trail", desc: "Every action, extraction, and decision is logged transparently." },
                { icon: "solar:lock-keyhole-minimalistic-linear", title: "SOC2 Compliant", desc: "Bank-grade encryption for all integrated data and credentials." }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700/50">
                  <iconify-icon icon={feature.icon} width="24" className="text-stone-300 mb-4"></iconify-icon>
                  <h4 className="text-sm font-medium mb-2">{feature.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-8">
            Ready for operations to feel calm?
          </h2>
          <Link to="/demo" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
            Book a demo today
          </Link>
        </div>
      </section>
    </div>
  );
}