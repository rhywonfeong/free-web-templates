import { useState } from 'react';

const pricingPlans = [
  {
    id: 'pricing-hobby',
    name: 'Individual',
    price: '$49',
    period: '/mo',
    desc: 'For solo analysts, product owners, or researchers exploring decision traceability.',
    features: ['Personal decision graph', 'Limited to 5 active projects', 'Standard export'],
    cta: 'Start Trial'
  },
  {
    id: 'pricing-pro',
    name: 'Team',
    price: 'Contact Sales',
    period: '',
    desc: 'For teams formalizing shared decisions, reviews, and internal accountability.',
    features: ['Shared decision history', 'Review & approval workflows', 'Organizational continuity'],
    cta: 'Contact Sales'
  },
  {
    id: 'pricing-ent',
    name: 'Enterprise',
    price: 'Contact Sales',
    period: '',
    desc: 'For organizations using Oravia as a decision system of record.',
    features: ['Governance & audit trails', 'Immutable versioning', 'Long-term retention'],
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('pricing-pro');

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-subtle text-base">
            Start tracing decisions today. Scale as your reasoning grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const isDark = plan.id === 'pricing-pro'; // The "Team" card is styled dark in source
            
            // Replicating exactly the state styling classes logic from vanilla JS
            let cardClasses = "pricing-card group relative p-8 rounded-xl flex flex-col cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-obsidian focus:ring-offset-2 pricing-transition ";
            let btnClasses = "w-full py-3 rounded-lg text-xs font-semibold transition-all duration-300 ease-out active:scale-[0.97] active:duration-100 relative z-10 ";
            
            if (isSelected) {
              cardClasses += "scale-[1.02] shadow-2xl z-10 ring-1 ring-obsidian/5 opacity-100 ";
              if (!isDark) cardClasses += "border border-obsidian bg-white";
              else cardClasses += "bg-obsidian text-white shadow-obsidian/20";
              
              if (!isDark) {
                btnClasses += "border border-border text-obsidian bg-white hover:scale-[1.03] hover:border-obsidian hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]";
              } else {
                btnClasses += "bg-white text-obsidian hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]";
              }
            } else {
              cardClasses += "scale-[0.98] opacity-60 border border-border hover:opacity-90 hover:shadow-xl hover:-translate-y-1 ";
              if (!isDark) cardClasses += "bg-white";
              else cardClasses += "bg-obsidian text-white";

              if (!isDark) {
                btnClasses += "border border-border text-obsidian bg-white";
              } else {
                btnClasses += "bg-white text-obsidian";
              }
            }

            return (
              <div 
                key={plan.id}
                id={plan.id}
                className={cardClasses}
                role="button"
                tabIndex="0"
                onClick={() => setSelectedPlan(plan.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPlan(plan.id);
                  }
                }}
              >
                {!isDark && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                )}
                <div className="mb-4 relative z-10">
                  <span className={`font-semibold ${isDark ? 'text-white' : (isSelected ? 'text-black' : 'text-obsidian')} transition-colors`}>
                    {plan.name}
                  </span>
                </div>
                <div className="mb-4 flex items-baseline gap-1 relative z-10">
                  <span className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-obsidian'}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ${isDark ? 'text-white/60' : 'text-subtle'}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm mb-8 leading-relaxed relative z-10 ${isDark ? 'text-white/60' : 'text-subtle'}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex gap-3 text-sm ${isDark ? 'text-white/80' : 'text-subtle'}`}>
                      <span className={isDark ? 'text-white' : 'text-obsidian'}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={btnClasses}>
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}