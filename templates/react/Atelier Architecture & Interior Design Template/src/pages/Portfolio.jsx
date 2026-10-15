import React, { useState } from 'react';
import { Reveal } from '../components/shared/Reveal';
import { ProjectCard } from '../components/shared/ProjectCard';
import { projects } from '../data';
import { clsx } from 'clsx';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Selected Works</h1>
            <p className="text-gray-600 text-lg font-light">An archive of our most distinctive projects, spanning private residences to commercial headquarters.</p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={clsx(
                  "text-sm uppercase tracking-widest transition-all duration-300 relative pb-1",
                  activeFilter === category ? "text-charcoal font-medium" : "text-gray-400 hover:text-charcoal"
                )}
              >
                {category}
                {activeFilter === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal scale-x-100 transition-transform origin-left duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid - Masonry style approximation using columns on large screens */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100} className="break-inside-avoid">
              <ProjectCard 
                project={project} 
                aspectRatio={index % 3 === 0 ? "aspect-[4/5]" : (index % 2 === 0 ? "aspect-[3/4]" : "aspect-square")} 
              />
            </Reveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            No projects found in this category yet.
          </div>
        )}

      </div>
    </div>
  );
}