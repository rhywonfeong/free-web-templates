import React from 'react';
import KPICard from '../components/dashboard/KPICard';
import GrowthChart from '../components/dashboard/GrowthChart';
import DepartmentChart from '../components/dashboard/DepartmentChart';
import LatestEmployees from '../components/dashboard/LatestEmployees';
import ActivityFeed from '../components/dashboard/ActivityFeed';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* Page Header */}
      <div className="flex items-end justify-between mt-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Quick business snapshot and HR metrics.</p>
        </div>
        
        {/* Date Filter */}
        <button className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 text-xs font-medium text-gray-600 shadow-sm hover:shadow-md transition-all">
          <iconify-icon icon="solar:calendar-date-linear" class="text-base"></iconify-icon>
          Jan 1 - Jan 31, 2024
          <iconify-icon icon="solar:alt-arrow-down-linear" class="ml-1"></iconify-icon>
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Total Employees" 
          value="1,248" 
          trend="+12%" 
          trendUp={true} 
          subtitle="vs last month"
          icon="solar:users-group-rounded-linear"
        />
        <KPICard 
          title="Active Employees" 
          value="1,180" 
          trend="+8%" 
          trendUp={true} 
          subtitle="vs last month"
          icon="solar:user-check-linear"
        />
        <KPICard 
          title="On Leave" 
          value="42" 
          trend="-3%" 
          trendUp={false} 
          subtitle="vs last month"
          icon="solar:calendar-minimalistic-linear"
        />
        <KPICard 
          title="New Joinees" 
          value="26" 
          trend="+18%" 
          trendUp={true} 
          subtitle="this month"
          icon="solar:user-plus-linear"
          highlight={true}
        />
      </div>

      {/* Main Content Grid matching visual layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Charts (approx 40% width) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <GrowthChart />
          <DepartmentChart />
        </div>

        {/* Middle Column: Ranked List (approx 35% width) */}
        <div className="lg:col-span-4 flex flex-col">
          <LatestEmployees />
        </div>

        {/* Right Column: Stacked Activity Cards (approx 25% width) */}
        <div className="lg:col-span-3 flex flex-col">
          <ActivityFeed />
        </div>

      </div>
    </div>
  );
}