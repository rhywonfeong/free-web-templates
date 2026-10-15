import Button from '../components/Button';

export default function Solutions() {
  const solutions = [
    {
      title: "Replace Manual Work with Smarter Systems",
      text: "If your team is relying too heavily on spreadsheets, repetitive admin tasks, or disconnected processes, we can design a more efficient workflow.",
      icon: "solar:documents-linear"
    },
    {
      title: "Improve Internal Operations",
      text: "We create systems that help teams organize work, track tasks, manage data, and improve internal coordination.",
      icon: "solar:users-group-two-rounded-linear"
    },
    {
      title: "Manage Leads and Client Processes Better",
      text: "We build tools and automations that improve how your business captures, organizes, and responds to leads or client requests.",
      icon: "solar:user-speak-linear"
    },
    {
      title: "Connect the Tools You Already Use",
      text: "We integrate your existing tools and workflows so information moves more smoothly across your business.",
      icon: "solar:link-broken-minimalistic-linear"
    },
    {
      title: "Build Systems That Can Grow with Your Business",
      text: "As your business grows, your operations need stronger digital infrastructure. We help you build it.",
      icon: "solar:graph-up-linear"
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in-up">
          <div className="text-indigo-400 font-medium tracking-wide text-sm uppercase mb-4">Problem vs. Solution</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Solutions Built Around Real Business Challenges</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We help businesses solve operational inefficiencies, reduce manual work, and create smarter digital systems.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <div key={i} className={`bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group ${i === solutions.length - 1 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''}`}>
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <iconify-icon icon={solution.icon} width="28" height="28"></iconify-icon>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{solution.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{solution.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          <h2 className="text-3xl font-bold tracking-tight mb-6 relative z-10">Which challenge sounds most familiar?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
            You don't need to know the technical solution yet. Tell us your workflow problem, and we'll engineer the fix.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="relative z-10 shadow-indigo-600/30">Book a Discovery Call</Button>
        </div>
      </section>
    </div>
  );
}