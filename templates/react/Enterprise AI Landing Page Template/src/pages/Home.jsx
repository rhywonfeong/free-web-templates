import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const SectionHeading = ({ children, className }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#263669] mb-4">
      {children}
    </h2>
    <div className="w-12 h-1 bg-[#8fd9f7] rounded-full"></div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Section 1: Hero */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0a1433] mb-6 leading-tight">
            Enterprise AI <br className="hidden md:block"/> supercharged for success
          </h1>
          <p className="text-lg md:text-xl text-[#263669] max-w-3xl mx-auto mb-10 leading-relaxed opacity-90">
            Subgen AI is an enterprise AI company that builds the infrastructure, governance, and tools organisations need to deploy Generative AI at scale. Our platform, Serenity Star, enables enterprises of any size to move from AI experimentation to production reality; securely, compliantly, and on their own terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="#solutions">
              <Button variant="primary" className="w-full sm:w-auto">Discover Our Solutions</Button>
            </Link>
            <Link to="#team">
              <Button variant="secondary" className="w-full sm:w-auto">Meet Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section id="who-we-are" className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left">
          <SectionHeading className="md:mx-0 mx-auto flex flex-col md:items-start items-center">Who We Are</SectionHeading>
          <p className="text-lg text-[#0a1433] leading-relaxed">
            Born from a vision to democratize enterprise-grade artificial intelligence, Subgen AI is rooted in European standards of trust, privacy, and engineering excellence. We believe that powerful technology should be accessible, transparent, and aligned with your business objectives, ensuring you remain in control of your digital destiny.
          </p>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>What We Do</SectionHeading>
              <p className="text-[#0a1433] mb-6 leading-relaxed text-lg">
                We provide the foundational layer for your AI transformation. From secure infrastructure to advanced orchestration, we give you the tools to build, deploy, and manage AI applications effortlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "Secure & private AI infrastructure deployment",
                  "Comprehensive governance and compliance tools",
                  "Seamless integration with existing enterprise workflows",
                  "Scalable orchestration for generative AI models"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" class="text-[#4ba8ed] text-xl mt-1 shrink-0"></iconify-icon>
                    <span className="text-[#263669]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#0a1433]/5 border border-gray-100 bg-gray-50 aspect-square md:aspect-[4/3] flex items-center justify-center">
               <iconify-icon icon="solar:cpu-line-duotone" class="text-9xl text-[#8fd9f7]/40"></iconify-icon>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Solutions */}
      <section id="solutions" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading className="text-center flex flex-col items-center">Our Solutions</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-[#4ba8ed] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded-lg bg-[#8fd9f7]/20 flex items-center justify-center text-[#263669] group-hover:scale-110 transition-transform">
                <iconify-icon icon="solar:cloud-storage-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1433] mb-3 tracking-tight">Substrate Cloud</h3>
              <p className="text-[#263669] mb-8 flex-grow leading-relaxed">
                A sovereign, highly secure cloud infrastructure designed specifically for compute-intensive AI workloads. Keep your data localized and protected.
              </p>
              <a href="#" className="inline-flex items-center text-[#4ba8ed] font-medium hover:text-[#263669] transition-colors group/link">
                Learn more 
                <iconify-icon icon="solar:arrow-right-linear" class="ml-2 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-[#4ba8ed] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded-lg bg-[#8fd9f7]/20 flex items-center justify-center text-[#263669] group-hover:scale-110 transition-transform">
                <iconify-icon icon="solar:stars-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1433] mb-3 tracking-tight">Serenity Star</h3>
              <p className="text-[#263669] mb-8 flex-grow leading-relaxed">
                Our flagship orchestration platform. Connect multiple LLMs, manage agents, and build enterprise-grade AI applications with built-in governance.
              </p>
              <a href="#" className="inline-flex items-center text-[#4ba8ed] font-medium hover:text-[#263669] transition-colors group/link">
                Learn more 
                <iconify-icon icon="solar:arrow-right-linear" class="ml-2 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border-t-4 border-[#4ba8ed] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="mb-6 h-12 w-12 rounded-lg bg-[#8fd9f7]/20 flex items-center justify-center text-[#263669] group-hover:scale-110 transition-transform">
                <iconify-icon icon="solar:users-group-two-rounded-linear" class="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1433] mb-3 tracking-tight">4D AI Centre of Excellence</h3>
              <p className="text-[#263669] mb-8 flex-grow leading-relaxed">
                Expert consulting and implementation services. We guide your teams through Discovery, Design, Development, and Deployment of AI solutions.
              </p>
              <a href="#" className="inline-flex items-center text-[#4ba8ed] font-medium hover:text-[#263669] transition-colors group/link">
                Learn more 
                <iconify-icon icon="solar:arrow-right-linear" class="ml-2 group-hover/link:translate-x-1 transition-transform"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How We Work / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <SectionHeading className="mx-auto flex flex-col items-center">Our Values</SectionHeading>
          <p className="text-lg text-[#0a1433] leading-relaxed mb-10">
            We build partnerships, not just software. Our approach is grounded in transparency, rigorous security standards, and a commitment to delivering measurable business outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Collaboration", "Innovation", "Responsibility", "Trust"].map((val) => (
              <span key={val} className="px-6 py-2.5 rounded-full bg-[#8fd9f7]/15 text-[#263669] font-medium text-sm border border-[#8fd9f7]/30">
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Meet Our Team */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gray-50 rounded-3xl p-10 md:p-16 text-center border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#8fd9f7]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0a1433] mb-4">Meet the minds behind the platform</h2>
              <p className="text-lg text-[#263669] max-w-2xl mx-auto mb-8">
                Our team consists of industry veterans, AI researchers, and enterprise software engineers dedicated to shaping the future of responsible AI.
              </p>
              <Button variant="primary">Our Leadership & Experts</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: For Investors */}
      <section className="py-20 bg-[#263669] relative overflow-hidden">
        {/* Subtle pattern or gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1433] to-[#263669]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1600&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Driving the AI revolution</h2>
            <p className="text-[#8fd9f7] text-lg">Partner with us as we scale enterprise AI infrastructure globally.</p>
          </div>
          <Link to="/investors">
            <Button variant="white" className="shrink-0">Investor Relations</Button>
          </Link>
        </div>
      </section>

      {/* Section 8: News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#4ba8ed]">News & Insights</h2>
            <Link to="/news" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors flex items-center">
              See All News <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* News Item 1 */}
            <article className="group cursor-pointer">
              <div className="text-xs font-medium text-[#4ba8ed] mb-2 uppercase tracking-wider">Press Release</div>
              <h3 className="text-xl font-semibold text-[#0a1433] mb-3 tracking-tight group-hover:text-[#4ba8ed] transition-colors line-clamp-2">
                Subgen AI announces strategic partnership to expand Serenity Star capabilities
              </h3>
              <p className="text-[#263669] line-clamp-3 mb-4">
                We are thrilled to announce a new milestone in our journey to provide the most robust enterprise AI orchestration platform...
              </p>
              <div className="text-sm text-gray-400">October 12, 2023</div>
            </article>

            {/* News Item 2 */}
            <article className="group cursor-pointer">
              <div className="text-xs font-medium text-[#4ba8ed] mb-2 uppercase tracking-wider">Product Update</div>
              <h3 className="text-xl font-semibold text-[#0a1433] mb-3 tracking-tight group-hover:text-[#4ba8ed] transition-colors line-clamp-2">
                Introducing enhanced compliance frameworks for Substrate Cloud
              </h3>
              <p className="text-[#263669] line-clamp-3 mb-4">
                In response to growing regulatory requirements, our latest update brings native support for European data sovereignty standards...
              </p>
              <div className="text-sm text-gray-400">September 28, 2023</div>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home