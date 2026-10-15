import React from 'react';
import { useAuth } from '../context/AuthContext';
import { PROFESSIONALS } from '../data/mockData';
import { Button } from '../components/ui/Button';

export default function Profile() {
  const { user } = useAuth();
  
  // If professional, load rich data, otherwise basic
  const isPro = user?.role === 'professional';
  const proData = isPro ? PROFESSIONALS[0] : null;

  if (!user) {
    return (
      <div className="min-h-screen pt-32 flex justify-center text-slate-500">
        Please log in to view profile.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        
        <div className="relative mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-end">
          <div className="relative">
            <img 
              src={proData?.avatar || user.avatar} 
              alt="Profile" 
              className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-md"
            />
            {isPro && proData?.verified && (
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white">
                <iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{proData?.name || user.name}</h1>
            <p className="text-slate-500 font-medium mt-1">
              {isPro ? proData.title : 'Registered Client'}
            </p>
            {isPro && (
              <div className="flex items-center gap-4 mt-3 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <iconify-icon icon="solar:map-point-linear"></iconify-icon> {proData.location}
                </span>
                <span className="flex items-center gap-1 text-amber-500 font-medium">
                  <iconify-icon icon="solar:star-bold"></iconify-icon> {proData.rating} ({proData.reviews} reviews)
                </span>
              </div>
            )}
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <Button variant="secondary" className="flex-1 sm:flex-none">Edit Profile</Button>
            {isPro && <Button className="flex-1 sm:flex-none">Share</Button>}
          </div>
        </div>
      </div>

      {isPro && proData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">About</h2>
              <p className="text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200">
                {proData.bio}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Portfolio</h2>
              <div className="grid grid-cols-2 gap-4">
                {proData.portfolio.map((img, i) => (
                  <div key={i} className="aspect-video rounded-2xl overflow-hidden group border border-slate-200 cursor-pointer">
                    <img src={img} alt="Portfolio item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                {[1,2].map(i => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-amber-400">
                        {[1,2,3,4,5].map(s => <iconify-icon key={s} icon="solar:star-bold" width="16"></iconify-icon>)}
                      </div>
                      <span className="text-sm text-slate-500">2 weeks ago</span>
                    </div>
                    <p className="text-slate-700 italic">"Excellent work, highly recommended. Delivered on time and exceeded expectations."</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Pricing</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-semibold tracking-tight text-slate-900">${proData.hourlyRate}</span>
                <span className="text-slate-500 mb-1">/ hour</span>
              </div>
              <Button fullWidth>Hire Now</Button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {proData.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-lg border border-slate-200 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!isPro && (
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <iconify-icon icon="solar:settings-linear" width="32"></iconify-icon>
          </div>
          <h2 className="text-xl font-medium text-slate-900 mb-2">Basic Profile Settings</h2>
          <p className="text-slate-500 mb-6">Manage your account details and preferences.</p>
          <Button variant="secondary">Account Settings</Button>
        </div>
      )}
    </div>
  );
}