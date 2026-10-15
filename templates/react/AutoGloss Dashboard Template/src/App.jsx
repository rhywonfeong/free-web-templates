import { useState } from 'react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden text-sm">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`w-64 bg-white border-r border-slate-200 flex flex-col z-30 fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full hidden md:flex'
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center font-semibold text-base tracking-tighter">
              AG
            </div>
            <span className="font-medium text-base tracking-tight">AutoGloss</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 px-3 py-2 bg-slate-50 text-slate-900 rounded-md font-medium">
            <iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
            Scan Vehicle
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
            My Bookings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
            Live Tracker
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:car-linear" width="20"></iconify-icon>
            Vehicles
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
            Documents
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
            Rewards
          </a>
        </nav>

        <div className="p-4 border-t border-slate-100 shrink-0">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors">
            <iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
            Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-500 hover:text-slate-900"
              onClick={() => setIsSidebarOpen(true)}
            >
              <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
            </button>
            <h1 className="text-xl font-medium tracking-tight text-slate-900 hidden sm:block">Good morning, Alex</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center px-4 py-2 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 rounded-md font-medium transition-colors shadow-sm">
              Book Service
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors shadow-sm">
              <iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
              Scan Vehicle
            </button>
            
            <div className="w-px h-6 bg-slate-200 hidden sm:block mx-1"></div>
            
            <button className="text-slate-400 hover:text-slate-600 relative">
              <iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <button className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-medium ml-2">
              A
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
          
          {/* Service Overview Strip */}
          <div className="bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 shadow-sm">
            <div className="flex-1 p-5 flex flex-col justify-center">
              <span className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Current Status</span>
              <div className="flex items-center gap-2 text-indigo-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="font-medium text-base">In Shop — Detailing</span>
              </div>
            </div>
            <div className="flex-1 p-5 flex flex-col justify-center">
              <span className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Next Appointment</span>
              <span className="font-medium text-base text-slate-900">Oct 12, 10:00 AM</span>
            </div>
            <div className="flex-1 p-5 flex flex-col justify-center">
              <span className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Last Service</span>
              <span className="font-medium text-base text-slate-900">Premium Wash (Aug 04)</span>
            </div>
            <div className="flex-1 p-5 flex flex-col justify-center">
              <span className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Loyalty Points</span>
              <div className="flex items-center gap-1.5">
                <iconify-icon icon="solar:star-linear" className="text-amber-500" width="18"></iconify-icon>
                <span className="font-medium text-base text-slate-900">2,450 pts</span>
              </div>
            </div>
          </div>

          {/* Live Service Tracker */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium tracking-tight text-slate-900">Live Service: 2023 Tesla Model 3</h2>
              <span className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-700 rounded border border-indigo-100">Est. completion: 2:30 PM</span>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm overflow-x-auto">
              <div className="min-w-[600px] flex items-center">
                
                {/* Step 1: Done */}
                <div className="flex flex-col items-center relative z-10 w-24">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mb-2">
                    <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                  </div>
                  <span className="text-xs font-medium text-slate-900 text-center">Checked-in</span>
                  <span className="text-xs text-slate-500">8:45 AM</span>
                </div>
                
                <div className="flex-1 h-px bg-slate-900 -mx-6 mb-8 relative z-0"></div>

                {/* Step 2: Done */}
                <div className="flex flex-col items-center relative z-10 w-24">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mb-2">
                    <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                  </div>
                  <span className="text-xs font-medium text-slate-900 text-center">Washing</span>
                  <span className="text-xs text-slate-500">9:15 AM</span>
                </div>

                <div className="flex-1 h-px bg-indigo-600 -mx-6 mb-8 relative z-0"></div>

                {/* Step 3: Active */}
                <div className="flex flex-col items-center relative z-10 w-24">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white border-4 border-indigo-100 flex items-center justify-center mb-2 shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-medium text-indigo-700 text-center">Detailing</span>
                  <span className="text-xs text-indigo-500">In Progress</span>
                </div>

                <div className="flex-1 h-px bg-slate-200 -mx-6 mb-8 relative z-0"></div>

                {/* Step 4: Pending */}
                <div className="flex flex-col items-center relative z-10 w-24 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center mb-2">
                    <span className="text-xs font-medium">4</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 text-center">Quality Check</span>
                  <span className="text-xs text-slate-400">Pending</span>
                </div>

                <div className="flex-1 h-px bg-slate-200 -mx-6 mb-8 relative z-0"></div>

                {/* Step 5: Pending */}
                <div className="flex flex-col items-center relative z-10 w-24 opacity-50">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center mb-2">
                    <span className="text-xs font-medium">5</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500 text-center">Ready</span>
                  <span className="text-xs text-slate-400">Pending</span>
                </div>

              </div>
            </div>
          </section>

          {/* Your Vehicles */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium tracking-tight text-slate-900">Your Garage</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                <iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                Add Vehicle
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Vehicle Card 1 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-32 bg-slate-100 flex items-center justify-center relative border-b border-slate-100">
                  <iconify-icon icon="solar:car-linear" className="text-slate-300" width="64"></iconify-icon>
                  <div className="absolute bottom-3 left-4 bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-medium text-slate-700 tracking-wider shadow-sm">
                    TSLA-3X9
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-medium text-base text-slate-900 mb-1">2023 Tesla Model 3</h3>
                  <p className="text-xs text-slate-500 mb-4">Pearl White Multi-Coat</p>
                  
                  <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
                      <span className="text-xs">Scan</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                      <span className="text-xs">Book</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:history-linear" width="18"></iconify-icon>
                      <span className="text-xs">History</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Vehicle Card 2 */}
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-32 bg-slate-100 flex items-center justify-center relative border-b border-slate-100">
                  <iconify-icon icon="solar:car-linear" className="text-slate-300" width="64"></iconify-icon>
                  <div className="absolute bottom-3 left-4 bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-medium text-slate-700 tracking-wider shadow-sm">
                    PORS-911
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-medium text-base text-slate-900 mb-1">2019 Porsche 911</h3>
                  <p className="text-xs text-slate-500 mb-4">Agate Grey Metallic</p>
                  
                  <div className="mt-auto grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:scanner-linear" width="18"></iconify-icon>
                      <span className="text-xs">Scan</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
                      <span className="text-xs">Book</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors py-1">
                      <iconify-icon icon="solar:history-linear" width="18"></iconify-icon>
                      <span className="text-xs">History</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Grid: Documents & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
            
            {/* AI & Documents */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium tracking-tight text-slate-900">AI &amp; Documents</h2>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">View all</a>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
                <div className="divide-y divide-slate-100">
                  
                  <a href="#" className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <iconify-icon icon="solar:document-medicine-linear" width="20"></iconify-icon>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors truncate">Pre-Service Damage Report</p>
                      <p className="text-xs text-slate-500 mt-0.5">AI detected 3 minor scratches on Tesla Model 3.</p>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0">Today</span>
                  </a>

                  <a href="#" className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <iconify-icon icon="solar:pen-new-round-linear" width="20"></iconify-icon>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors truncate">Digital Service Waiver</p>
                      <p className="text-xs text-slate-500 mt-0.5">Signed by Alex for current service.</p>
                    </div>
                    <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">Signed</span>
                  </a>

                  <a href="#" className="flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors truncate">Before/After Gallery</p>
                      <p className="text-xs text-slate-500 mt-0.5">Premium Wash - Porsche 911</p>
                    </div>
                    <span className="text-xs text-slate-400 shrink-0">Aug 04</span>
                  </a>

                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium tracking-tight text-slate-900">Recent Activity</h2>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm h-full">
                <div className="relative border-l border-slate-200 ml-3 space-y-6">
                  
                  <div className="relative pl-6">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-full"></div>
                    <p className="text-sm font-medium text-slate-900">Service started: Detailing</p>
                    <p className="text-xs text-slate-500 mt-1">Tesla Model 3 has entered the detailing bay.</p>
                    <p className="text-xs text-slate-400 mt-2">10:45 AM</p>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-200 border-2 border-white rounded-full"></div>
                    <p className="text-sm font-medium text-slate-900">Vehicle Checked-in</p>
                    <p className="text-xs text-slate-500 mt-1">Keys handed over to service advisor Mike.</p>
                    <p className="text-xs text-slate-400 mt-2">8:45 AM</p>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-200 border-2 border-white rounded-full"></div>
                    <p className="text-sm font-medium text-slate-900">Damage Scan Processed</p>
                    <p className="text-xs text-slate-500 mt-1">Initial AI scan completed and report generated.</p>
                    <p className="text-xs text-slate-400 mt-2">Yesterday, 4:30 PM</p>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-200 border-2 border-white rounded-full"></div>
                    <p className="text-sm font-medium text-slate-900">Booking Confirmed</p>
                    <p className="text-xs text-slate-500 mt-1">Appointment set for Oct 12, 10:00 AM.</p>
                    <p className="text-xs text-slate-400 mt-2">Oct 01, 9:15 AM</p>
                  </div>

                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}