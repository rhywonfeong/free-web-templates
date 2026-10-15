import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export function ProjectCard({ project, className, aspectRatio = 'aspect-[4/5]' }) {
  return (
    <Link to={`/portfolio/${project.id}`} className={clsx("group block relative overflow-hidden", className)}>
      <div className={clsx("w-full bg-gray-200 overflow-hidden", aspectRatio)}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-warm-white/70 text-sm uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.category}</span>
        <h3 className="text-warm-white text-2xl md:text-3xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">{project.title}</h3>
      </div>
    </Link>
  );
}