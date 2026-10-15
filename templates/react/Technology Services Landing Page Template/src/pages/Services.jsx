import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      id: "web-apps",
      title: "Custom Web Applications",
      icon: "solar:window-frame-linear",
      desc: "We build web-based systems tailored to the way your business works — designed to simplify operations, improve visibility, and support long-term growth.",
      includes: ["Internal dashboards", "Admin portals", "CRM-like systems", "Booking/scheduling systems", "Client portals", "Team management tools"],
      ideal: ["better internal systems", "centralized operations", "custom workflows", "a platform not available off-the-shelf"]
    },
    {
      id: "automation",
      title: "Workflow Automation",
      icon: "solar:bolt-circle-linear",
      desc: "We automate repetitive processes and connect your tools to reduce manual work, save time, and improve consistency across operations.",
      includes: ["Form-to-email automation", "CRM automation", "Lead routing", "Internal notifications", "Approval workflows", "Spreadsheet automation"],
      ideal: ["repetitive admin tasks", "manual data entry", "process delays", "disconnected systems"]
    },
    {
      id: "tech-solutions",
      title: "Technical Solutions",
      icon: "solar:settings-linear",
      desc: "We identify technical and operational bottlenecks, then design practical solutions that improve workflow, performance, and business efficiency.",
      includes: ["Process optimization", "Workflow redesign", "System improvement planning", "Software strategy", "Digital operations consulting"],
      ideal: ["scaling bottlenecks", "inefficient team communication", "outdated internal tech"]
    },
    {
      id: "integration",
      title: "System Integration",
      icon: "solar:link-circle-linear",
      desc: "We help your tools work together more effectively by connecting platforms, syncing data, and reducing workflow friction between systems.",
      includes: ["CRM + forms", "Website + email platform", "Internal dashboards + data sources", "Lead systems + automation tools", "Payment gateways + accounting"],
      ideal: ["double data entry", "siloed information", "inconsistent reporting across platforms"]
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We help businesses operate more efficiently through custom-built software, automation systems, and strategic technical solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 shadow-inner">
                  <iconify-icon icon={service.icon} width="32" height="32"></iconify-icon>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 border-b pb-2">What this can include</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <iconify-icon icon="solar:check-circle-linear" className="text-indigo-500 mt-0.5 shrink-0"></iconify-icon>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 border-b pb-2">Ideal for businesses that need/struggle with</h4>
                    <ul className="space-y-3">
                      {service.ideal.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <iconify-icon icon="solar:arrow-right-linear" className="text-indigo-500 mt-0.5 shrink-0"></iconify-icon>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-900">
                    <iconify-icon icon={service.icon} width="200" height="200"></iconify-icon>
                 </div>
                 <div className="relative z-10 flex flex-col h-full justify-center">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">Ready to streamline?</h3>
                    <p className="text-slate-600 mb-8">Let's discuss how {service.title.toLowerCase()} can transform your specific workflow.</p>
                    <Button to="/contact" variant="outline" className="self-start">Discuss this service</Button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 bg-indigo-50 rounded-3xl p-12 lg:p-20 border border-indigo-100">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Need a solution tailored to your workflow?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let’s discuss your current process and identify the best technical solution for your business.
        </p>
        <Button to="/contact" variant="primary" size="lg">Request a Consultation</Button>
      </section>
    </div>
  );
}