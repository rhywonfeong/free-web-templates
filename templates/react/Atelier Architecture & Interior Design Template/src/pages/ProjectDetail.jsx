import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Reveal } from '../components/shared/Reveal';
import { BeforeAfter } from '../components/shared/BeforeAfter';
import { projects } from '../data';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  // Find next project for footer link
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="bg-warm-white">
      {/* Full Bleed Hero */}
      <section className="relative h-[70vh] md:h-[90vh] w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Project Meta & Description */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <Reveal className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Project</p>
                  <h1 className="text-3xl md:text-4xl font-serif tracking-tight">{project.title}</h1>
                </div>
                
                <div className="w-full h-[1px] bg-gray-200"></div>

                <div className="grid grid-cols-2 gap-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
                    <p className="text-sm font-medium">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Year</p>
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Scope</p>
                    <p className="text-sm font-medium">{project.scope}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-8">
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-charcoal mb-12">
                {project.description}
              </p>
              
              {/* Image Grid */}
              <div className="space-y-8 md:space-y-12">
                {project.gallery.map((imgUrl, index) => (
                  <Reveal key={index} delay={100} direction="up">
                    <div className="w-full bg-gray-200">
                      <img 
                        src={imgUrl} 
                        alt={`${project.title} detail ${index + 1}`} 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Before/After Interaction (Simulated with static images for demo) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <h3 className="text-2xl font-serif mb-10 text-center tracking-tight">Transformation</h3>
            </Reveal>
            <Reveal delay={200}>
              <BeforeAfter 
                beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80" // Raw/construction looking
                afterImage={project.gallery[0] || project.image} // Finished looking
              />
            </Reveal>
         </div>
      </section>

      {/* Next Project Footer */}
      <section className="py-24 md:py-32 bg-charcoal text-center">
        <Link to={`/portfolio/${nextProject.id}`} className="group inline-block">
          <p className="text-warm-white/50 uppercase tracking-widest text-xs mb-4">Next Project</p>
          <h2 className="text-4xl md:text-6xl font-serif text-warm-white tracking-tight group-hover:text-gold-accent transition-colors duration-500">
            {nextProject.title}
          </h2>
        </Link>
      </section>
    </article>
  );
}