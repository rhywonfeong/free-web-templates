import React from 'react';

export default function AdminSettings() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">Workspace Settings</h1>
        <p className="text-sm text-stone-500 mt-1">Manage your company policies, integrations, and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Settings Navigation Sidebar */}
        <div className="w-full md:w-64 space-y-1 sticky top-24">
          {[
            { name: 'General', active: true, icon: 'solar:settings-linear' },
            { name: 'Travel Policies', active: false, icon: 'solar:document-text-linear' },
            { name: 'Integrations', active: false, icon: 'solar:plug-circle-linear' },
            { name: 'Notifications', active: false, icon: 'solar:bell-linear' },
            { name: 'Billing', active: false, icon: 'solar:card-linear' },
          ].map((item, i) => (
            <button 
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                item.active 
                  ? 'bg-stone-900 text-stone-50 shadow-sm' 
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              <iconify-icon icon={item.icon} width="18"></iconify-icon>
              {item.name}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 space-y-6 min-w-0 w-full">
          
          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-medium text-stone-900 mb-6">Company Profile</h2>
            <div className="space-y-5 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-stone-900 mb-1.5">Workspace Name</label>
                <input 
                  type="text" 
                  defaultValue="Acme Corp" 
                  className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm outline-none focus:bg-white focus:border-stone-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-900 mb-1.5">Workspace URL</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-2 rounded-l-xl border border-r-0 border-stone-200 bg-stone-100 text-stone-500 text-sm">
                    triplocked.com/
                  </span>
                  <input 
                    type="text" 
                    defaultValue="acme" 
                    className="flex-1 px-4 py-2 bg-stone-50 border border-stone-200 rounded-r-xl text-sm outline-none focus:bg-white focus:border-stone-400 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 sm:p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-medium text-stone-900">Agent Autonomy Level</h2>
                <p className="text-sm text-stone-500 mt-1">Determine how independently the AI acts on your behalf.</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { title: 'Strict Approval', desc: 'Agent only drafts emails and itineraries. Requires manual click to send or book anything.', active: true },
                { title: 'Guided Mode', desc: 'Agent can book within policy limits, but requires approval for external vendor emails.', active: false },
                { title: 'Full Autopilot', desc: 'Agent handles all end-to-end coordination and booking within approved budgets.', active: false },
              ].map((opt, i) => (
                <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                  opt.active ? 'bg-[#FDFBF7] border-stone-900 shadow-sm' : 'border-stone-200/60 hover:border-stone-300'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center ${
                      opt.active ? 'border-stone-900 bg-stone-900' : 'border-stone-300'
                    }`}>
                      {opt.active && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-stone-900">{opt.title}</h4>
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{opt.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/60 p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-medium text-stone-900 mb-6">Default Policies</h2>
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-stone-900">Auto-Approve Under Budget</div>
                  <div className="text-xs text-stone-500 mt-0.5">Skip manual review for low-cost items.</div>
                </div>
                <div className="w-11 h-6 bg-stone-900 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div>
                  <div className="text-sm font-medium text-stone-900">Enforce Preferred Airlines</div>
                  <div className="text-xs text-stone-500 mt-0.5">Agent prioritizes Delta and United.</div>
                </div>
                <div className="w-11 h-6 bg-stone-200 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="px-6 py-2.5 bg-stone-900 text-stone-50 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}