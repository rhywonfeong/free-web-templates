import React from 'react';

export default function AdminTrips() {
  const trips = [
    { id: 'TRP-1042', name: 'Berlin Sales Kickoff', owner: 'David L.', destination: 'Berlin, DE', dates: 'Oct 12 - Oct 15', status: 'Confirmed', statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-100', cost: '$4,250' },
    { id: 'TRP-1043', name: 'NYC Client Tour', owner: 'Emma W.', destination: 'New York, US', dates: 'Oct 18 - Oct 22', status: 'Needs Approval', statusColor: 'text-amber-700 bg-amber-50 border-amber-100', cost: '$2,800' },
    { id: 'TRP-1044', name: 'Paris Tech Week', owner: 'James P.', destination: 'Paris, FR', dates: 'Nov 02 - Nov 06', status: 'Tentative', statusColor: 'text-stone-600 bg-stone-50 border-stone-200', cost: 'TBD' },
    { id: 'TRP-1045', name: 'Q4 Executive Offsite', owner: 'Sarah K.', destination: 'London, UK', dates: 'Nov 14 - Nov 16', status: 'Booking', statusColor: 'text-blue-700 bg-blue-50 border-blue-100', cost: '$12,400' },
    { id: 'TRP-1046', name: 'Tokyo Expansion Summit', owner: 'Alex M.', destination: 'Tokyo, JP', dates: 'Dec 01 - Dec 10', status: 'Drafting', statusColor: 'text-stone-600 bg-stone-100 border-stone-200', cost: '$6,100' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900">All Trips</h1>
          <p className="text-sm text-stone-500 mt-1">Manage and track all company travel in one place.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-sm flex items-center gap-2">
            <iconify-icon icon="solar:export-linear"></iconify-icon>
            Export
          </button>
          <button className="px-4 py-2 bg-stone-900 text-stone-50 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2">
            <iconify-icon icon="solar:add-circle-linear"></iconify-icon>
            New Trip
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 pb-2 overflow-x-auto hide-scrollbar">
        {['All Trips', 'Upcoming', 'Needs Action', 'Drafts', 'Completed'].map((tab, i) => (
          <button 
            key={i} 
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              i === 0 
                ? 'bg-stone-900 text-white' 
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/50 text-stone-500">
                <th className="px-6 py-4 font-medium">Trip Details</th>
                <th className="px-6 py-4 font-medium">Destination</th>
                <th className="px-6 py-4 font-medium">Dates</th>
                <th className="px-6 py-4 font-medium">Cost Estimate</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {trips.map((trip, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 mb-0.5">{trip.name}</div>
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <span className="font-mono text-[10px] bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">{trip.id}</span>
                      Managed by {trip.owner}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-stone-600">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:map-point-linear" className="text-stone-400"></iconify-icon>
                      {trip.destination}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{trip.dates}</td>
                  <td className="px-6 py-4 text-stone-600 font-medium">{trip.cost}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${trip.statusColor}`}>
                      {trip.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-stone-400 hover:text-stone-900 transition-colors p-1.5">
                      <iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-stone-100 flex items-center justify-between text-sm text-stone-500 bg-stone-50/30">
          <span>Showing 5 of 24 trips</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 bg-white border border-stone-200 rounded-lg hover:bg-stone-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}