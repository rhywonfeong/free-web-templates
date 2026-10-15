import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32 xl:py-40">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-sm font-medium text-indigo-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Technical Solutions for Growing Businesses
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-4xl mx-auto">
            Build Smarter Systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              for Your Business
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Growth Wizard creates custom web applications, automation workflows, and technical solutions that help businesses save time, reduce manual work, and scale more efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Book a Free Consultation
            </Button>
            <Button to="/services" variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800">
              Explore Services
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:check-circle-bold" className="text-indigo-400"></iconify-icon>
              Custom-Built Solutions
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:check-circle-bold" className="text-indigo-400"></iconify-icon>
              Automation-Driven Efficiency
            </div>
            <div className="flex items-center gap-2">
              <iconify-icon icon="solar:check-circle-bold" className="text-indigo-400"></iconify-icon>
              Scalable Digital Systems
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              What We Help Businesses Build
            </h2>
            <p className="text-lg text-slate-600">
              We design and implement practical digital solutions that simplify operations, improve workflows, and support business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "solar:window-frame-linear",
                title: "Custom Web Applications",
                desc: "We build tailored web-based systems designed around your exact business processes — from internal tools and dashboards to client-facing platforms."
              },
              {
                icon: "solar:bolt-circle-linear",
                title: "Workflow Automation",
                desc: "We automate repetitive tasks, reduce human error, and connect the tools your business already uses to save time and improve efficiency."
              },
              {
                icon: "solar:settings-linear",
                title: "Technical Solutions",
                desc: "We solve operational and technical challenges with smart, scalable solutions that help businesses work better and grow faster."
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <iconify-icon icon={service.icon} width="28" height="28"></iconify-icon>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button to="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* SECTION 3: PAIN POINTS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                If Your Business Feels Slower Than It Should, We Can Help
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Many businesses lose time, money, and momentum because their systems aren't built to support growth. Growth Wizard helps turn these challenges into streamlined digital workflows.
              </p>
              <Button to="/solutions" variant="primary">See Our Solutions</Button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Too many manual tasks", desc: "Your team spends hours on repetitive work that could be automated.", icon: "solar:stopwatch-linear" },
                { title: "Disconnected tools", desc: "Information is spread across spreadsheets, apps, and inboxes.", icon: "solar:link-broken-linear" },
                { title: "No software fits", desc: "Off-the-shelf tools often don't match how you actually operate.", icon: "solar:puzzle-broken-linear" },
                { title: "Operational bottlenecks", desc: "Internal inefficiencies slow down delivery and decision-making.", icon: "solar:graph-down-linear" }
              ].map((pain, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3">
                  <div className="text-rose-500">
                    <iconify-icon icon={pain.icon} width="24" height="24"></iconify-icon>
                  </div>
                  <h4 className="font-semibold text-slate-900">{pain.title}</h4>
                  <p className="text-sm text-slate-500">{pain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BENEFITS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              What the Right System Can Do for Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Save time across daily operations", desc: "Reduce repetitive tasks and improve internal efficiency." },
              { title: "Improve accuracy and reduce mistakes", desc: "Automated processes help minimize human error and inconsistency." },
              { title: "Create better visibility across workflow", desc: "Track data, tasks, and performance clearly with custom systems." },
              { title: "Build a stronger foundation for growth", desc: "Use scalable digital tools that can grow with your business." }
            ].map((benefit, i) => (
              <div key={i} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-indigo-600 before:rounded-full">
                <h4 className="font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE WORK (PROCESS) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Process</h2>
              <p className="text-slate-400 text-lg mb-8">
                We keep our process practical, collaborative, and focused on business outcomes. No unnecessary jargon, just systems that work.
              </p>
              <Button to="/process" variant="primary">See How We Work</Button>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-800 hidden md:block"></div>
              <div className="space-y-8 relative">
                {[
                  { step: "1", title: "Discovery", text: "We learn about your business, your workflow, your challenges, and your goals." },
                  { step: "2", title: "Strategy & Planning", text: "We define the right solution, technical approach, and map the implementation." },
                  { step: "3", title: "Build & Automate", text: "We design, develop, automate, and integrate the solution based on needs." },
                  { step: "4", title: "Launch & Improve", text: "We test, refine, and support your system to ensure continuous value." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-bold text-indigo-400 shrink-0 z-10 group-hover:border-indigo-500 group-hover:bg-slate-900 transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-3">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CASE STUDY PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Example Solutions We Can Build
              </h2>
              <p className="text-lg text-slate-600">
                Explore the types of digital solutions Growth Wizard can create to improve workflows.
              </p>
            </div>
            <Button to="/case-studies" variant="secondary" className="shrink-0">View All Examples</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Operations Dashboard", desc: "A centralized web app for tracking tasks, team workflows, reporting, and performance.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
              { title: "Lead Management System", desc: "A custom platform to capture, organize, assign, and follow up with incoming leads.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
              { title: "Workflow Automation Setup", desc: "An automation system that connects forms, emails, spreadsheets, CRMs, and notifications.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.desc}</p>
                  <Link to="/case-studies" className="inline-flex items-center gap-2 text-indigo-600 font-medium group-hover:translate-x-1 transition-transform">
                    Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY GROWTH WIZARD & FINAL CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to Build a Smarter System?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-12 leading-relaxed">
            Whether you need a custom web application, workflow automation, or a technical solution tailored to your business, Growth Wizard is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto text-indigo-600">
              Book a Consultation
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}