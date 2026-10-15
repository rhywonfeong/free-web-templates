export default function FitCriteria() {
  const criteria = [
    {
      title: "A real and clearly defined business problem",
      desc: "We look for companies addressing pain that is specific, costly, recurring or strategically important for the customer."
    },
    {
      title: "A product, prototype or tangible technology direction",
      desc: "At early stage, we do not expect perfection. We do expect something concrete that demonstrates the team can build."
    },
    {
      title: "Signals of market validation",
      desc: "That may come through customer interviews, pilots, early deployments, usage signals or first commercial traction."
    },
    {
      title: "A team capable of building and attracting talent",
      desc: "We care about founder quality, but also about the team’s ability to attract the people needed to move from product to company."
    },
    {
      title: "Global potential and a co-investable trajectory",
      desc: "We want to back businesses that can matter beyond one local market and become attractive to follow-on investors from Europe and the US."
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4 block">What makes a company a fit</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6 leading-tight">
            We look for clarity, evidence and ambition.
          </h2>
          <div className="space-y-6 text-lg text-zinc-500 leading-relaxed mb-8">
            <p>
              The fastest way to get our attention is not a polished story. It is a clear explanation of the problem, a credible product direction and evidence that the market cares.
            </p>
            <p>
              We are most interested in founders who understand the operational or strategic pain they are solving, can explain why it matters now and have already done some work to validate that the problem is worth paying for.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
            <p className="text-sm font-medium text-zinc-900 italic">
              "In short, we look for companies that are still early enough to benefit from conviction-led capital, but mature enough to demonstrate that the opportunity is real."
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {criteria.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-6 p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50/50 transition-all duration-300"
              >
                <div className="mt-1 flex-shrink-0 text-zinc-900">
                  <iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}