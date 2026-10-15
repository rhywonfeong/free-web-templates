import Button from '../components/Button';

export default function CaseStudies() {
  const projects = [
    {
      title: "Lead Management Dashboard",
      challenge: "Leads were being collected through multiple channels with no organized follow-up process. Data was scattered and response times were slow.",
      solution: "A custom web dashboard for lead capture, status tracking, assignment, and follow-up visibility. Integrated directly with their website forms.",
      outcome: "Improved lead organization, 3x faster response times, and better internal visibility across the sales team.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Web App", "CRM Setup"]
    },
    {
      title: "Internal Operations Portal",
      challenge: "The team relied on fragile spreadsheets and manual email communication to manage complex internal processes and project handoffs.",
      solution: "A centralized web app for tracking workflows, tasks, status updates, and operational progress with role-based access.",
      outcome: "Reduced workflow confusion, eliminated double data entry, and improved day-to-day operational efficiency by 40%.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Internal Tools", "System Architecture"]
    },
    {
      title: "Automated Inquiry Workflow",
      challenge: "Incoming customer requests required too much manual sorting, forwarding, and spreadsheet logging before any real work could begin.",
      solution: "An intelligent automation system connecting their website forms, team notifications (Slack), CRM logging, and automated initial email responses.",
      outcome: "Zero manual data entry for new inquiries, instantaneous team alerts, and faster, more professional handling of incoming requests.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      tags: ["Automation", "Integration"]
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Case Studies & Project Examples</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Explore the types of digital solutions Growth Wizard can create to improve business workflows, efficiency, and operations.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center group">
              <div className={`relative rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img src={project.img} alt={project.title} className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">{project.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">Outcome</h4>
                    <p className="text-slate-900 font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center mt-12 px-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Want a solution like this for your business?</h3>
        <Button to="/contact" variant="primary" size="lg">Book a Consultation</Button>
      </section>
    </div>
  );
}