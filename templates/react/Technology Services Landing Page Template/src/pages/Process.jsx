import Button from '../components/Button';

export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Discovery",
      desc: "We learn about your business, your current workflow, your pain points, your goals, and your current tools.",
      icon: "solar:magnifer-linear"
    },
    {
      num: "2",
      title: "Solution Mapping",
      desc: "We define what needs to be built or improved, what should be automated, what systems should connect, and what the project scope looks like.",
      icon: "solar:map-linear"
    },
    {
      num: "3",
      title: "Build & Implement",
      desc: "We develop and implement the solution using modern tools, clean structure, and business-focused functionality.",
      icon: "solar:code-square-linear"
    },
    {
      num: "4",
      title: "Test & Refine",
      desc: "We review workflows, validate performance, and make refinements where needed to ensure perfection.",
      icon: "solar:test-tube-linear"
    },
    {
      num: "5",
      title: "Support & Grow",
      desc: "We help ensure your system continues to support your operations as your business evolves and scales.",
      icon: "solar:leaf-linear"
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">How We Work</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A clear, collaborative process designed to help businesses move from operational friction to smarter systems.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-slate-200 ml-6 md:ml-10 space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-10 md:pl-16 group">
              {/* Timeline dot/number */}
              <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-500 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors z-10">
                {step.num}
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all -mt-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                    <iconify-icon icon={step.icon} width="24" height="24"></iconify-icon>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{step.num}. {step.title}</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed ml-14">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Button to="/contact" variant="primary" size="lg">Ready to start step one?</Button>
      </section>
    </div>
  );
}