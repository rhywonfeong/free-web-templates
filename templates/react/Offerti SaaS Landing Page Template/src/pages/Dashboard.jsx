import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

// Mock Data
const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
]

const recentOffers = [
  { id: 1, client: "Acme Corp", title: "Website Redesign", amount: "$12,500", status: "Sent", date: "Today, 10:24 AM", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80" },
  { id: 2, client: "Stark Ind.", title: "AI Consulting", amount: "$45,000", status: "Draft", date: "Yesterday", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80" },
  { id: 3, client: "Wayne Ent.", title: "Security Audit", amount: "$8,200", status: "Accepted", date: "Oct 12", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80" },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  const navItems = [
    { name: 'Dashboard', icon: 'solar:widget-5-linear', activeIcon: 'solar:widget-5-bold' },
    { name: 'Offers', icon: 'solar:document-text-linear', activeIcon: 'solar:document-text-bold' },
    { name: 'Templates', icon: 'solar:folder-with-files-linear', activeIcon: 'solar:folder-with-files-bold' },
    { name: 'Clients', icon: 'solar:users-group-rounded-linear', activeIcon: 'solar:users-group-rounded-bold' },
    { name: 'Analytics', icon: 'solar:chart-square-linear', activeIcon: 'solar:chart-square-bold' },
  ]

  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden font-sans">
      
      {/* LEFT SIDEBAR - Navigation */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-[#F8F9FA] border-r border-slate-200/60 p-6 z-20">
        <Link to="/" className="flex items-center gap-3 mb-10 px-2 group">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <iconify-icon icon="solar:magic-stick-3-bold" width="22" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Offerti</span>
        </Link>

        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Main Menu</div>
        <nav className="flex-1 space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeNav === item.name
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 text-sm font-medium ${
                  isActive 
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-100' 
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <iconify-icon 
                  icon={isActive ? item.activeIcon : item.icon} 
                  width="22" 
                  className={isActive ? "text-blue-600" : "text-slate-400"}
                />
                {item.name}
              </button>
            )
          })}
        </nav>

        <div className="mt-auto">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Settings</div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-200/50 hover:text-slate-800 transition-all text-sm font-medium">
            <iconify-icon icon="solar:settings-linear" width="22" className="text-slate-400" />
            Preferences
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-orange-500 hover:bg-orange-50 transition-all text-sm font-medium mt-1">
            <iconify-icon icon="solar:logout-2-linear" width="22" />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar relative">
        
        {/* Top Header - Fixed Alignment */}
        {/* INCREASED Z-INDEX to z-40 so it stays above the hero badge when scrolling */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-[#F8F9FA]/80 backdrop-blur-xl border-b border-slate-200/30 min-h-[80px]">
          <div className="flex-1 max-w-xl relative hidden md:flex items-center">
            {/* Removed the magnifying glass icon and adjusted the left padding of the input */}
            <input 
              type="text" 
              placeholder="Search offers, clients, or templates..." 
              className="w-full h-11 pl-6 pr-4 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow shadow-sm"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto h-11">
            <button className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm relative">
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              <iconify-icon icon="solar:bell-bing-linear" width="22" />
            </button>
            <div className="w-px h-8 bg-slate-200 mx-1"></div>
            <button className="flex items-center gap-3 p-1 pr-4 h-11 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80" alt="User" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm font-semibold text-slate-700 hidden sm:block">Sarah Miller</span>
              <iconify-icon icon="solar:alt-arrow-down-linear" className="text-slate-400 hidden sm:block" />
            </button>
          </div>
        </header>

        <div className="p-6 pb-24 max-w-5xl mx-auto w-full flex-1">
          
          {/* Hero Banner Card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-[2rem] p-8 md:p-10 text-white overflow-hidden shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)] mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/10">
                <iconify-icon icon="solar:stars-minimalistic-bold" />
                AI Assistant Ready
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mb-3">
                Generate your next offer effortlessly.
              </h1>
              <p className="text-blue-100 text-sm font-medium mb-8">
                Just describe the project, and our AI will draft a professional proposal in seconds.
              </p>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="group flex items-center gap-4 bg-slate-900 text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 disabled:opacity-80"
              >
                {isGenerating ? 'Generating Draft...' : 'Create New Offer'}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <iconify-icon icon={isGenerating ? "solar:refresh-circle-linear" : "solar:arrow-right-linear"} className={isGenerating ? "animate-spin" : ""} width="20" />
                </div>
              </button>
            </div>

            <div className="relative z-10 hidden md:block">
               <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 p-4 flex flex-col gap-3 rotate-3 shadow-xl">
                 <div className="w-full h-4 bg-white/20 rounded-full"></div>
                 <div className="w-3/4 h-4 bg-white/20 rounded-full"></div>
                 <div className="w-full h-20 bg-white/10 rounded-xl mt-auto"></div>
               </div>
            </div>
          </div>

          {/* Progress / Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              { title: "Drafts in Progress", value: "12", icon: "solar:pen-new-square-linear", color: "bg-blue-100 text-blue-600" },
              { title: "Sent for Review", value: "8", icon: "solar:plain-3-linear", color: "bg-orange-100 text-orange-600" },
              { title: "Accepted Offers", value: "24", icon: "solar:check-circle-linear", color: "bg-green-100 text-green-600" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  <iconify-icon icon={stat.icon} width="24" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold tracking-tight text-slate-800">{stat.value}</p>
                </div>
                <button className="ml-auto text-slate-300 hover:text-slate-500">
                  <iconify-icon icon="solar:menu-dots-bold" width="24" />
                </button>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-800">Recent Drafts</h2>
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
          </div>
          
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_2px_15px_-4px_rgba(0,0,0,0.02)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  <th className="px-6 py-4 rounded-tl-3xl">Client</th>
                  <th className="px-6 py-4">Project Focus</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right rounded-tr-3xl">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentOffers.map((offer, idx) => (
                  <tr key={offer.id} className={`group hover:bg-slate-50/50 transition-colors ${idx !== recentOffers.length -1 ? 'border-b border-slate-50' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={offer.img} alt="" className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                        <div>
                          <div className="font-semibold text-slate-800">{offer.client}</div>
                          <div className="text-xs text-slate-400">{offer.date}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-700">{offer.title}</div>
                      <div className="text-xs text-slate-400">{offer.amount}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        offer.status === 'Sent' ? 'bg-blue-50 text-blue-600' :
                        offer.status === 'Accepted' ? 'bg-green-50 text-green-600' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {offer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
                        <iconify-icon icon="solar:pen-linear" width="18" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>

      {/* RIGHT SIDEBAR - Stats & Info */}
      <aside className="hidden xl:flex flex-col w-[320px] bg-[#F8F9FA] border-l border-slate-200/60 p-6 overflow-y-auto no-scrollbar pb-24">
        
        {/* Personal Stat Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] mb-6 text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 text-slate-300 cursor-pointer hover:text-slate-500">
             <iconify-icon icon="solar:menu-dots-bold" width="24" />
          </div>
          <div className="text-left mb-6">
            <h3 className="text-sm font-bold text-slate-800">Your Progress</h3>
          </div>
          
          <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
            {/* Custom CSS ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#F1F5F9" strokeWidth="8" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#2563EB" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="70" className="drop-shadow-md" />
            </svg>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80" alt="User" className="w-20 h-20 rounded-full object-cover relative z-10 border-4 border-white shadow-sm" />
          </div>
          
          <h4 className="text-lg font-bold text-slate-800 tracking-tight">Great Job, Sarah!</h4>
          <p className="text-sm text-slate-400 mt-1">You've closed 75% of your generated offers this month.</p>
        </div>

        {/* Chart Card */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-800">Revenue Forecast</h3>
            <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-md">+14%</span>
          </div>
          <div className="h-[140px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip cursor={{ fill: '#F8F9FA' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={24}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#2563EB' : '#E2E8F0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-2 px-2 text-[10px] font-semibold text-slate-400">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Top Clients List */}
        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex-1">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-slate-800">Top Contacts</h3>
            <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <iconify-icon icon="solar:add-circle-bold" width="20" />
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "Michael Chen", role: "CEO, Acme", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" },
              { name: "Emma Davis", role: "Marketing, Stark", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80" },
              { name: "James Wilson", role: "Founder, Wayne", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80" },
            ].map((contact, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={contact.img} alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-800">{contact.name}</div>
                  <div className="text-xs text-slate-400">{contact.role}</div>
                </div>
                <button className="px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                  Message
                </button>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold transition-colors border border-slate-100">
            See All Contacts
          </button>
        </div>

      </aside>
    </div>
  )
}