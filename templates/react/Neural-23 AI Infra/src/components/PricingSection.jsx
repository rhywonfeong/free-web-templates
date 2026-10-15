import MaskedText from './MaskedText'

export default function PricingSection() {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      description: "Perfect for prototyping and evaluating the platform's core capabilities.",
      features: [
        "Up to 100k operations/month",
        "Shared cognitive engine",
        "Community forum support",
        "Basic vector assimilation",
        "48-hour data retention"
      ],
      buttonText: "Start Building",
      highlighted: false
    },
    {
      name: "Scale",
      price: "$499",
      period: "/mo",
      description: "For production workloads and rapidly growing engineering teams.",
      features: [
        "Up to 10M operations/month",
        "Dedicated neural nodes",
        "Priority SLA support (<4h)",
        "Advanced semantic search",
        "Dynamic task routing"
      ],
      buttonText: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Mission-critical infrastructure with custom SLA and deployment.",
      features: [
        "Unlimited operations",
        "Custom VPC deployment",
        "24/7 dedicated engineering",
        "SOC2 & HIPAA compliance",
        "On-premise deployment options"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="bg-[#131315]/80 flex flex-col relative z-20 backdrop-blur-sm">
      {/* Header Area */}
      <div className="flex flex-col border-y text-center bg-[#000000]/80 w-full border-[#27272a] mt-[-1px] pt-28 pb-20 items-center">
        <MaskedText 
          as="h2"
          text="Predictable pricing at scale"
          className="text-3xl md:text-5xl font-light tracking-tighter text-white font-geist max-w-2xl mb-6 justify-center"
        />
        <p className="reveal-element text-zinc-400 text-lg font-extralight max-w-xl font-geist leading-relaxed">
          Start free, then pay for exactly what you use. Our efficient architecture passes the compute cost savings directly to you.
        </p>
      </div>

      {/* Grid Content */}
      <div className="flex flex-col xl:px-20 bg-[#000000] w-full mt-[-1px] pb-20">
        <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#27272a] border border-[#27272a] w-full relative overflow-hidden">
          
          {/* Subtle background glow for scale plan emphasis */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563eb]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`stagger-item ${
                plan.highlighted ? 'bg-[#1e1e22]' : 'bg-[#18181b] hover:bg-[#1c1c1f]'
              } transition-colors duration-300 p-10 xl:p-14 flex flex-col relative z-10`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#172554] via-[#2563eb] to-[#60a5fa]"></div>
              )}

              <h3 className="text-xl font-medium tracking-tight text-zinc-100 font-geist mb-3">
                {plan.name}
              </h3>
              
              <p className="text-zinc-500 text-sm font-extralight leading-relaxed font-geist mb-8 h-10">
                {plan.description}
              </p>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-light tracking-tighter text-white font-geist">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-zinc-500 font-extralight font-geist tracking-wide">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-5 mb-14 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300 font-extralight font-geist">
                    <iconify-icon 
                      icon="solar:check-circle-linear" 
                      class="text-[#2563eb] text-lg mt-0.5 flex-shrink-0"
                    ></iconify-icon>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 px-6 rounded-full text-sm font-medium transition-all duration-300 font-geist ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-zinc-200 active:scale-95 shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]'
                    : 'bg-transparent border border-[#27272a] text-zinc-300 hover:text-white hover:border-zinc-500 active:scale-95'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}