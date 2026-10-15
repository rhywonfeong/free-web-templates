import { useState } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const mockUsageData = [
  { name: 'Mon', uploads: 400, views: 240 },
  { name: 'Tue', uploads: 300, views: 139 },
  { name: 'Wed', uploads: 200, views: 980 },
  { name: 'Thu', uploads: 278, views: 390 },
  { name: 'Fri', uploads: 189, views: 480 },
  { name: 'Sat', uploads: 239, views: 380 },
  { name: 'Sun', uploads: 349, views: 430 },
];

export default function Overview() {
  const [showEmailBanner, setShowEmailBanner] = useState(true);
  const [showAlert, setShowAlert] = useState(true);
  const [showCharts, setShowCharts] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Email Verification Banner */}
      {showEmailBanner && (
        <div className="w-full border-b border-[#f99c00]/20 bg-[#f99c00]/10 px-4 py-2.5 shrink-0 transition-all duration-300">
          <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 text-sm text-[#fef3c6]">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f99c00]/20 text-[#ffd236]">
                <iconify-icon icon="solar:letter-linear" width="16" height="16"></iconify-icon>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Verify your email to unlock full access.</span>
                <button className="underline underline-offset-2 hover:text-[#fee685] transition-colors font-medium">Resend email</button>
              </div>
            </div>
            <button 
              onClick={() => setShowEmailBanner(false)}
              className="rounded-full p-1 text-[#ffd236] hover:bg-[#f99c00]/20 hover:text-[#fee685] transition-colors"
            >
              <iconify-icon icon="solar:close-square-linear" width="16" height="16"></iconify-icon>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6">
          
          {/* Custom Alert */}
          {showAlert && (
            <div className="relative rounded-lg border border-white/10 px-4 py-3 bg-[#171717] text-white shadow-sm transition-all duration-300" style={{ borderLeftWidth: '4px', borderLeftColor: 'rgb(139,92,246)' }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-base mb-1 tracking-tight">blyat</div>
                  <div className="text-sm text-[#a1a1a1]">suka</div>
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-[#a1a1a1] hover:text-white transition-colors flex-shrink-0 mt-1"
                >
                  <iconify-icon icon="solar:close-square-linear" width="16" height="16"></iconify-icon>
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-white">Overview</h1>
              <p className="text-sm text-[#a1a1a1]">Your account activity at a glance.</p>
            </div>
            <button 
              onClick={() => setShowCharts(!showCharts)}
              className="text-xs bg-[#262626] hover:bg-[#333] text-white px-3 py-1.5 rounded-md transition-colors border border-white/10 font-medium"
            >
              {showCharts ? 'Clear Data' : 'Load Mock Data'}
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle>Total Storage</CardTitle>
                <iconify-icon icon="solar:database-linear" width="16" height="16" className="text-[#a1a1a1]"></iconify-icon>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight text-white">{showCharts ? '245 MB' : '0.00 GB'} / 1 GB</div>
                <p className="text-xs text-[#a1a1a1] mt-1">{showCharts ? '1,204' : '0'} images total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle>Operations</CardTitle>
                <iconify-icon icon="solar:chart-line-duotone" width="16" height="16" className="text-[#a1a1a1]"></iconify-icon>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight text-white">{showCharts ? '4,892' : '0'}</div>
                <p className="text-xs text-[#a1a1a1] mt-1">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle>Current Bill</CardTitle>
                <iconify-icon icon="solar:card-linear" width="16" height="16" className="text-[#a1a1a1]"></iconify-icon>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight text-white">$0.00</div>
                <p className="text-xs text-[#a1a1a1] mt-1">No upcoming invoice</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle>Active Keys</CardTitle>
                <iconify-icon icon="solar:users-group-rounded-linear" width="16" height="16" className="text-[#a1a1a1]"></iconify-icon>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight text-white">{showCharts ? '2' : '0'}</div>
                <p className="text-xs text-[#a1a1a1] mt-1">{showCharts ? 'Active now' : 'Last used 2m ago'}</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white">Trends</h2>
            <p className="text-sm text-[#a1a1a1]">Usage and operations over time.</p>
          </div>

          {/* Trends Grid */}
          <div className="grid gap-4 md:grid-cols-2 pb-10">
            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-start justify-between pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-base">Usage</CardTitle>
                  <p className="text-sm text-[#a1a1a1]">Uploads vs views over time</p>
                </div>
                <div className="flex items-center gap-2 border border-white/10 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs text-[#fafafa]">
                  <span>last 30 days</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" className="opacity-50"></iconify-icon>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <div className="h-[260px] w-full flex items-center justify-center">
                  {showCharts ? (
                     <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockUsageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorUploads" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#171717', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          itemStyle={{ color: '#fafafa' }}
                        />
                        <Area type="monotone" dataKey="uploads" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorUploads)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="space-y-2 text-center fade-in">
                      <p className="text-sm font-medium text-[#a1a1a1]">No usage data yet</p>
                      <p className="px-10 text-xs text-[#a1a1a1] opacity-70">Start uploading images to track your activity and views over time</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex flex-row items-start justify-between pb-4">
                <div className="space-y-1">
                  <CardTitle className="text-base">Operations</CardTitle>
                  <p className="text-sm text-[#a1a1a1]">Total operations per day</p>
                </div>
                <div className="flex items-center gap-2 border border-white/10 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-md cursor-pointer transition-colors text-xs text-[#fafafa]">
                  <span>last 30 days</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" className="opacity-50"></iconify-icon>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <div className="h-[260px] w-full flex items-center justify-center">
                  {showCharts ? (
                     <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockUsageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#171717', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Bar dataKey="views" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="space-y-2 text-center fade-in">
                      <p className="text-sm font-medium text-[#a1a1a1]">No operations data yet</p>
                      <p className="px-10 text-xs text-[#a1a1a1] opacity-70">Upload images or generate AI art to see your activity populate here</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}