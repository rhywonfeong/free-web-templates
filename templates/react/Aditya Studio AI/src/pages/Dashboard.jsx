import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../components/ui/Card';

const chartData = [
  { date: 'Jan 1', views: 4000, subs: 240 },
  { date: 'Jan 5', views: 3000, subs: 139 },
  { date: 'Jan 10', views: 2000, subs: 980 },
  { date: 'Jan 15', views: 2780, subs: 390 },
  { date: 'Jan 20', views: 1890, subs: 480 },
  { date: 'Jan 25', views: 2390, subs: 380 },
  { date: 'Jan 30', views: 3490, subs: 430 },
];

const recentVideos = [
  { id: 1, title: 'How to build an AI app in 10 minutes', views: '12.4K', date: '2 days ago', ctr: '6.4%', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80' },
  { id: 2, title: 'React 19 Changes Everything', views: '45.1K', date: '1 week ago', ctr: '8.2%', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { id: 3, title: 'My honest review of the M3 Max Macbook Pro', views: '89.2K', date: '2 weeks ago', ctr: '11.1%', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80' },
];

const StatCard = ({ title, value, trend, icon }) => (
  <Card>
    <Card.Body className="p-5 flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-[#a1a1aa] mb-1">{title}</p>
        <h4 className="text-2xl font-semibold text-white tracking-tight">{value}</h4>
        <div className="flex items-center gap-1 mt-2 text-xs">
          <span className="text-green-500 flex items-center">
            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            {trend}
          </span>
          <span className="text-[#71717a]">vs last 28 days</span>
        </div>
      </div>
      <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-[#a1a1aa]">
        <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
      </div>
    </Card.Body>
  </Card>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-1">Channel Dashboard</h1>
          <p className="text-sm text-[#a1a1aa]">Here's what's happening with your channel today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Views" value="1.2M" trend="+12.5%" icon="solar:eye-linear" />
        <StatCard title="Watch Time (hrs)" value="45.2K" trend="+5.2%" icon="solar:clock-circle-linear" />
        <StatCard title="Subscribers" value="+8.4K" trend="+22.1%" icon="solar:user-plus-linear" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <Card.Header>
            <Card.Title>Channel Performance</Card.Title>
            <select className="bg-[#0a0a0a] border border-[#262626] text-xs text-white rounded px-2 py-1 outline-none">
              <option>Last 28 Days</option>
              <option>Last 7 Days</option>
              <option>Lifetime</option>
            </select>
          </Card.Header>
          <Card.Body className="h-[300px] p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis dataKey="date" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Latest Content</Card.Title>
          </Card.Header>
          <div className="divide-y divide-[#262626]">
            {recentVideos.map(video => (
              <div key={video.id} className="p-4 hover:bg-[#262626]/50 transition-colors cursor-pointer flex gap-3">
                <img src={video.img} alt={video.title} className="w-24 h-14 object-cover rounded bg-[#262626]" />
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-white truncate mb-1">{video.title}</h5>
                  <div className="flex items-center text-xs text-[#a1a1aa] gap-2">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-green-400 font-medium bg-green-400/10 inline-block px-1.5 py-0.5 rounded">
                    CTR: {video.ctr}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Card.Footer className="py-3">
            <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium w-full text-center">
              View All Content
            </button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}