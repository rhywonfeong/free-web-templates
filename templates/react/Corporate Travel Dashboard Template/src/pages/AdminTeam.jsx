import React from 'react';

export default function AdminTeam() {
  const team = [
    { name: 'Jane Smith', email: 'jane@company.com', role: 'Admin', status: 'Active', trips: 12 },
    { name: 'David L.', email: 'david@company.com', role: 'Member', status: 'Active', trips: 4 },
    { name: 'Emma W.', email: 'emma@company.com', role: 'Member', status: 'Active', trips: 8 },
    { name: 'Sarah K.', email: 'sarah@company.com', role: 'Admin', status: 'Offline', trips: 15 },
    { name: 'James P.', email: 'james@company.com', role: 'Viewer', status: 'Invited', trips: 0 },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900">Team Directory</h1>
          <p className="text-sm text-stone-500 mt-1">Manage access and roles for your operations team.</p>
        </div>
        <button className="px-4 py-2 bg-stone-900 text-stone-50 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2">
          <iconify-icon icon="solar:user-plus-linear"></iconify-icon>
          Invite Member
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-stone-200/60 bg-stone-50/50 flex gap-4">
          <div className="relative flex-1 max-w-sm">
            <iconify-icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"></iconify-icon>
            <input 
              type="text" 
              placeholder="Search team..." 
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-stone-200 rounded-lg text-sm outline-none focus:border-stone-400 transition-colors"
            />
          </div>
          <select className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-600 outline-none focus:border-stone-400">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Member</option>
            <option>Viewer</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-stone-100 text-stone-500 bg-white">
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Managed Trips</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 bg-white">
              {team.map((user, i) => (
                <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#FDFBF7] border border-stone-200 flex items-center justify-center text-xs font-medium text-stone-700">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-stone-900">{user.name}</div>
                        <div className="text-xs text-stone-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{user.trips} trips</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Invited' ? 'bg-amber-400' : 'bg-stone-300'
                      }`}></div>
                      <span className="text-stone-600">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}