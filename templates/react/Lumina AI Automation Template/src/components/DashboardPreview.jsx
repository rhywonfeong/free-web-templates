import React from 'react';

export default function DashboardPreview() {
  return (
    <section className="relative z-20 container mx-auto px-6 md:px-8 py-24 pointer-events-auto">
      <div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
        {/* Decorative accents */}
        <div className="absolute -top-8 -left-4 md:left-12 flex flex-col gap-2 opacity-80">
          <div className="w-2 h-6 bg-zinc-400 rounded-full rotate-45 origin-bottom-right"></div>
          <div className="w-2 h-4 bg-zinc-400 rounded-full rotate-45 origin-bottom-right ml-4"></div>
          <div className="w-2 h-3 bg-zinc-400 rounded-full rotate-45 origin-bottom-right ml-8"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
          Meet your financial platform
        </h2>
        <p className="text-lg font-normal text-zinc-400 max-w-2xl">
          Built for any business and every customer. Flexible and user friendly.
        </p>
      </div>

      {/* Dashboard UI Container */}
      <div className="w-full max-w-[1300px] mx-auto bg-[#0e0e11]/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.3)] flex flex-col md:flex-row overflow-hidden min-h-[850px] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-24 bg-transparent flex md:flex-col items-center justify-between py-6 px-4 border-b md:border-b-0 md:border-r border-white/5 relative z-10">
          <div className="flex md:flex-col items-center gap-10 md:gap-12 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">
            {/* Logo */}
            <a href="#" className="relative w-10 h-10 flex-shrink-0 group">
              <div className="absolute inset-0 bg-white/80 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-1/4 left-1/4 w-full h-full bg-white/20 backdrop-blur-sm rounded-full mix-blend-overlay"></div>
            </a>
            
            {/* Nav Icons */}
            <div className="flex md:flex-col items-center gap-8 text-zinc-500">
              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:widget-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></button>
              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:star-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></button>
              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:calendar-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></button>
              <button className="hover:text-white transition-colors relative">
                <iconify-icon icon="solar:document-text-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                <span className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full border border-[#18181b] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
              </button>
              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:buildings-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></button>
              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:user-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></button>
            </div>
          </div>

          {/* Animated Dashboard Primary Action (Sidebar Add) */}
          <button className="hidden md:flex group relative w-12 h-12 cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden bg-zinc-900 border border-zinc-700/80 rounded-full items-center justify-center text-zinc-300 flex-shrink-0 mt-8">
            <span className="relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
              <iconify-icon icon="solar:add-circle-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
              <iconify-icon icon="solar:add-circle-linear" className="w-6 h-6 flex items-center justify-center text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
            </span>
            <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
            <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row p-6 md:p-8 gap-8 overflow-y-auto dash-scroll">
          
          {/* Left Column (Main Dashboard Core) */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Welcome Back Joan!</h2>
              
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-zinc-400 transition-colors relative border border-transparent hover:border-white/10">
                  <iconify-icon icon="solar:bell-linear" className="w-5 h-5 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full"></span>
                </button>
                <button className="flex items-center gap-2 bg-white/5 text-zinc-300 border border-white/10 px-4 py-2 rounded-full font-medium text-xs hover:bg-white/10 hover:text-white transition-colors">
                  <iconify-icon icon="solar:restart-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                  2 NEW UPDATES
                </button>
                <button className="w-10 h-10 rounded-full bg-[#18181b] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors">
                  <iconify-icon icon="solar:user-linear" className="w-5 h-5 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </button>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <iconify-icon icon="solar:home-2-linear" className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Home Loan</span>
              </button>
              
              <button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <iconify-icon icon="solar:bus-linear" className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Car Loan</span>
              </button>
              
              <button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <iconify-icon icon="solar:tuning-square-2-linear" className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Maintenance</span>
              </button>
              
              <button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <iconify-icon icon="solar:battery-charge-linear" className="w-5 h-5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200">Boosters</span>
              </button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
                  <iconify-icon icon="solar:arrow-left-down-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-normal text-zinc-400">Harvested losses</span>
                  <span className="text-2xl font-semibold tracking-tight text-white">$0.00</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
                  <iconify-icon icon="solar:arrow-right-up-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-normal text-zinc-400">Total earnings</span>
                  <span className="text-2xl font-semibold tracking-tight text-white">$10,596.80</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
                  <iconify-icon icon="solar:chart-square-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-normal text-zinc-400">Total net worth</span>
                  <span className="text-2xl font-semibold tracking-tight text-white">$5,250.90</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
                <div className="w-14 h-14 rounded-xl bg-[#18181b] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center text-zinc-200">
                  <iconify-icon icon="solar:target-linear" className="w-6 h-6 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-normal text-zinc-400">Total for all goals</span>
                  <span className="text-2xl font-semibold tracking-tight text-white">$5,596.80</span>
                </div>
              </div>
            </div>

            {/* Activity Graph & Recent Activity Combined Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-4">
              
              {/* Recent Activity Table */}
              <div className="xl:col-span-2 flex flex-col gap-6">
                <h3 className="text-xl font-medium text-white">Recent Activity</h3>
                
                {/* Tabs & Filters */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-8">
                    <button className="text-sm font-medium text-white relative pb-4 -mb-4 border-b-2 border-white">History</button>
                    <button className="text-sm font-medium text-zinc-500 hover:text-zinc-300 pb-4 -mb-4 border-b-2 border-transparent">Upcoming</button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white/5 text-zinc-300 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors">
                      <iconify-icon icon="solar:calendar-linear" className="w-3.5 h-3.5 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                      2 Sep 20 - 20 Sep 20
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                      <iconify-icon icon="solar:download-square-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                    </button>

                    {/* Animated Dashboard Primary Action (Header Add) */}
                    <button className="group relative flex w-8 h-8 cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden bg-zinc-900 border border-zinc-700/80 rounded-full items-center justify-center text-zinc-300">
                      <span className="relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-6 group-hover:opacity-0 group-hover:blur-md">
                        <iconify-icon icon="solar:add-circle-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                      </span>
                      <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
                        <iconify-icon icon="solar:add-circle-linear" className="w-4 h-4 flex items-center justify-center text-white" style={{ strokeWidth: 1.5 }}></iconify-icon>
                      </span>
                      <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
                      <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
                    </button>
                  </div>
                </div>

                {/* Transaction Table */}
                <div className="flex flex-col gap-6">
                  {/* Date Group 1 */}
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-medium text-zinc-500">10 Jun, 2022</span>
                    
                    <div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
                        <div className="text-zinc-500"><iconify-icon icon="solar:transfer-horizontal-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-200">Amazon Support</span>
                          <span className="text-xs text-zinc-500">10 Sep, 2020 at 3:30 PM</span>
                        </div>
                      </div>
                      
                      <div className="hidden sm:flex items-center gap-2 w-1/3">
                        <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                          <iconify-icon icon="solar:bag-3-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-xs text-zinc-400">Supplies</span>
                      </div>
                      
                      <div className="flex items-center justify-end gap-6 w-1/3">
                        <div className="w-6 h-6 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400">
                          <iconify-icon icon="solar:document-text-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-sm font-medium text-zinc-500 w-20 text-right">-$20.200</span>
                      </div>
                    </div>
                  </div>

                  {/* Date Group 2 */}
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-medium text-zinc-500">08 Jun, 2022</span>
                    
                    <div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
                        <div className="text-zinc-300"><iconify-icon icon="solar:download-square-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-200">Roland GmbH</span>
                          <span className="text-xs text-zinc-500">10 Sep, 2020 at 3:30 PM</span>
                        </div>
                      </div>
                      
                      <div className="hidden sm:flex items-center gap-2 w-1/3">
                        <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                          <iconify-icon icon="solar:pie-chart-2-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-xs text-zinc-400">Marketing</span>
                      </div>
                      
                      <div className="flex items-center justify-end gap-6 w-1/3">
                        <div className="w-6 h-6 rounded-md bg-white/10 text-white flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                          <iconify-icon icon="solar:check-read-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-sm font-medium text-white w-20 text-right">+$30.400</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-4 w-1/3 min-w-[180px]">
                        <div className="text-zinc-500"><iconify-icon icon="solar:arrow-right-up-linear" className="w-4 h-4 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon></div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-200">Bank of America</span>
                          <span className="text-xs text-zinc-500">10 Sep, 2020 at 3:30 PM</span>
                        </div>
                      </div>
                      
                      <div className="hidden sm:flex items-center gap-2 w-1/3">
                        <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                          <iconify-icon icon="solar:case-minimalistic-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-xs text-zinc-400">Office supplies</span>
                      </div>
                      
                      <div className="flex items-center justify-end gap-6 w-1/3">
                        <div className="w-6 h-6 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400">
                          <iconify-icon icon="solar:document-text-linear" className="w-3 h-3 flex items-center justify-center" style={{ strokeWidth: 1.5 }}></iconify-icon>
                        </div>
                        <span className="text-sm font-medium text-zinc-500 w-20 text-right">-$10.200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Graph */}
              <div className="xl:col-span-1 flex flex-col justify-between gap-4 bg-white/[0.02] p-6 rounded-3xl border border-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="">
                  <h4 className="text-sm font-medium text-zinc-400 mb-2">Activity Graph</h4>
                  <span className="text-3xl font-semibold tracking-tight text-white">$186k</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-end mt-4">
                  <div className="flex justify-end mb-2">
                    <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider">Between Sep 9 - 27</span>
                  </div>
                  
                  {/* Simple CSS Bar Chart */}
                  <div className="h-32 w-full flex items-end justify-between gap-1 pb-2 border-b border-white/5 relative mt-auto">
                    <div className="absolute left-0 top-0 bottom-2 flex flex-col justify-between text-xs text-zinc-600 w-6">
                      <span>25k</span><span>15k</span><span>5k</span><span>0</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-1 ml-8 h-full">
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '20%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '35%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '25%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-50" style={{ height: '45%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '60%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-70" style={{ height: '80%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.4)]" style={{ height: '90%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '100%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm opacity-60" style={{ height: '60%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '40%' }}></div>
                      <div className="w-full bg-gradient-to-t from-zinc-600/30 to-white/90 rounded-t-sm" style={{ height: '30%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ml-8 text-xs text-zinc-600 mt-2">
                    <span>9</span><span>11</span><span>13</span><span>15</span><span>17</span><span>19</span><span>21</span><span>23</span><span>25</span><span>27</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}