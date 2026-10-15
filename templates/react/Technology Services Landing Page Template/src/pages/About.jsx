import Button from '../components/Button';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">About Growth Wizard</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Growth Wizard was created to help businesses solve operational challenges through smarter systems, modern software, and practical automation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <iconify-icon icon="solar:shield-check-linear" width="24" height="24"></iconify-icon>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Technical Partner Focused on Business Efficiency</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                We believe businesses shouldn’t have to work around inefficient systems, disconnected tools, or repetitive manual processes.
              </p>
              <p>
                Growth Wizard helps organizations move toward better workflows, clearer operations, and scalable digital solutions. We don't just write code; we architect operational relief.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Why We Exist</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Many businesses know they need better systems, but don’t know where to start. Growth Wizard exists to bridge that gap — turning business needs into practical digital solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We translate technical jargon into business value, ensuring that every piece of software or automation we build directly impacts your bottom line or time savings.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
          <p className="text-lg text-slate-600">
            We combine technical thinking with business practicality. That means we focus not only on building software, but on solving the real operational problems behind it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Build with purpose", text: "Every feature and automation must serve a clear business goal.", icon: "solar:target-linear" },
            { title: "Simplify complexity", text: "We take convoluted manual workflows and turn them into elegant, easy-to-use digital systems.", icon: "solar:magic-stick-3-linear" },
            { title: "Create scalable solutions", text: "We build with the future in mind, ensuring your systems can grow alongside your revenue and team.", icon: "solar:rocket-linear" }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <iconify-icon icon={item.icon} width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=80')] opacity-10 bg-cover mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Let’s talk about your business challenges</h2>
            <Button to="/contact" variant="secondary" size="lg" className="text-indigo-600 font-bold">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}