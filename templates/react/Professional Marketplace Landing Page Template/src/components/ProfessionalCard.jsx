import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export function ProfessionalCard({ professional }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col h-full group">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img 
            src={professional.avatar} 
            alt={professional.name} 
            className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-50 group-hover:ring-indigo-50 transition-all"
          />
          {professional.verified && (
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white" title="Verified Professional">
              <iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-slate-900 tracking-tight text-lg">{professional.name}</h3>
            <button className="text-slate-300 hover:text-red-500 transition-colors">
              <iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
            </button>
          </div>
          <p className="text-sm text-slate-500 font-medium">{professional.title}</p>
          <div className="flex items-center gap-1 mt-1 text-sm text-slate-600">
            <iconify-icon icon="solar:star-bold" className="text-amber-400"></iconify-icon>
            <span className="font-medium">{professional.rating}</span>
            <span className="text-slate-400">({professional.reviews})</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
        {professional.bio}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {professional.skills.slice(0, 3).map(skill => (
          <span key={skill} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
            {skill}
          </span>
        ))}
        {professional.skills.length > 3 && (
          <span className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs rounded-lg font-medium border border-slate-200">
            +{professional.skills.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <div>
          <span className="text-lg font-semibold text-slate-900">${professional.hourlyRate}</span>
          <span className="text-xs text-slate-500 font-medium"> / hr</span>
        </div>
        <Button variant="secondary" size="sm" className="group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600">
          View Profile
        </Button>
      </div>
    </div>
  );
}