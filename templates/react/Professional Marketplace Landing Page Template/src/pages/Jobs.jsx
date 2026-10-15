import React from 'react';
import { JOBS } from '../data/mockData';
import { Button } from '../components/ui/Button';

export default function Jobs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">Job Board</h1>
          <p className="text-slate-500">Find new opportunities and apply to projects.</p>
        </div>
        <Button icon={<iconify-icon icon="solar:add-circle-linear"></iconify-icon>}>
          Post a Job
        </Button>
      </div>

      <div className="grid gap-6">
        {JOBS.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer mb-1">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-medium text-slate-700">{job.company}</span>
                  <span>•</span>
                  <span>{job.postedAt}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                  {job.type}
                </span>
                <span className="text-lg font-semibold text-slate-900">
                  {job.budget}
                </span>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 line-clamp-2 md:line-clamp-none">
              {job.description}
            </p>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-600 rounded-lg uppercase tracking-wider">
                {job.category}
              </span>
              <Button variant="secondary" size="sm">
                Apply Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}