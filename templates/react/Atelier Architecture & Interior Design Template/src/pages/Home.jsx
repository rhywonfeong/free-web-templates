import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/shared/Reveal';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/shared/ProjectCard';
import { projects, services } from '../data';

export function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-20">
          <Reveal delay={200}>
            <p className="text-white/80 uppercase tracking-[0.2em] text-sm mb-6">Interior Architecture & Design</p>
          </Reveal>
          <Reveal delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight mb-10 max-w-5xl mx-auto">
              Curating spaces of <br className="hidden md:block"/>quiet luxury.
            </h1>
          </Reveal>
          <Reveal delay={600}>
            <Button to="/portfolio" variant="ghost">View Selected Works</Button>
          </Reveal>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <iconify-icon icon="solar:arrow-down-linear" className="text-white/50" width="16" />
        </div>
      </section>

      {/* Introduction Split */}
      <section className="py-24 md:py-40 bg-warm-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal direction="right">
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80" 
                  alt="Detail shot of textures" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight leading-tight">
                  Design is not just what it looks like, but how it feels.
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                  Atelier is a multidisciplinary design studio dedicated to creating environments that resonate on an emotional level. We blend architectural rigor with curated artistry, balancing restraint with warmth to craft spaces of enduring value.
                </p>
                <Button to="/philosophy" variant="minimal">Our Philosophy</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Projects (Asymmetrical Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Featured Work</h2>
              <Link to="/portfolio" className="text-sm uppercase tracking-widest border-b border-charcoal pb-1 hover:opacity-70 hidden md:block">
                View All Projects
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Project 1 - Large */}
            <Reveal delay={100} className="md:mt-0">
               <ProjectCard project={featuredProjects[0]} aspectRatio="aspect-[4/5] md:aspect-[3/4]" />
            </Reveal>
            
            {/* Project 2 - Smaller, offset */}
            <Reveal delay={300} className="md:mt-32">
               <ProjectCard project={featuredProjects[1]} aspectRatio="aspect-[4/5]" />
            </Reveal>

            {/* Project 3 - Smaller */}
            <Reveal delay={100} className="md:-mt-16">
               <ProjectCard project={featuredProjects[2]} aspectRatio="aspect-[4/5]" />
            </Reveal>

            {/* Project 4 - Large */}
            <Reveal delay={300} className="md:mt-16">
               <ProjectCard project={featuredProjects[3]} aspectRatio="aspect-[4/5] md:aspect-[3/4]" />
            </Reveal>
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Button to="/portfolio" variant="secondary">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-40 bg-warm-white">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">Expertise</h2>
              <p className="text-gray-600 font-light">Comprehensive design services from initial concept to final installation, managed with exactitude.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 150} direction="up">
                <div className="group hover:-translate-y-2 transition-transform duration-500 cursor-default">
                  <div className="mb-6 text-charcoal opacity-70 group-hover:opacity-100 transition-opacity">
                    <iconify-icon icon={service.icon} width="40" height="40" />
                  </div>
                  <h3 className="text-xl font-serif mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                  <div className="w-12 h-[1px] bg-gray-300 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal text-center px-6">
        <Reveal>
          <p className="text-warm-white/50 uppercase tracking-[0.2em] text-sm mb-6">Begin a Conversation</p>
          <h2 className="text-4xl md:text-6xl font-serif text-warm-white mb-12 tracking-tight">Ready to transform your space?</h2>
          <Button to="/contact" variant="ghost">Book a Consultation</Button>
        </Reveal>
      </section>
    </>
  );
}