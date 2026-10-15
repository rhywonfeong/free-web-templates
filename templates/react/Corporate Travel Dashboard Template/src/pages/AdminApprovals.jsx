import React from 'react';

export default function AdminApprovals() {
  const approvals = [
    {
      id: 'REQ-882',
      type: 'Budget Override',
      trip: 'Q4 Executive Offsite',
      requester: 'Sarah K.',
      amount: '$140',
      reason: 'Late flight booking due to last-minute board meeting reschedule.',
      policy: 'Flights capped at $600 per traveler for domestic EU.',
      status: 'pending',
      time: '2 hours ago'
    },
    {
      id: 'REQ-883',
      type: 'Itinerary Change',
      trip: 'NYC Client Tour',
      requester: 'Emma W.',
      amount: 'N/A',
      reason: 'Client requested to meet Monday instead of Tuesday. Needs flight shift.',
      policy: 'Changes within 48h require manager approval.',
      status: 'pending',
      time: '4 hours ago'
    },
    {
      id: 'REQ-880',
      type: 'Vendor Contract',
      trip: 'Berlin Sales Kickoff',
      requester: 'David L.',
      amount: '$4,200',
      reason: 'Catering contract for Day 2 offsite lunch.',
      policy: 'Contracts > $2k require secondary sign-off.',
      status: 'approved',
      time: '1 day ago'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900">Approvals</h1>
          <p className="text-sm text-stone-500 mt-1">Review policy exceptions and structural changes.</p>
        </div>
      </div>

      <div className="space-y-4">
        {approvals.map((req, i) => (
          <div key={i} className={`bg-white rounded-2xl border shadow-sm p-6 transition-all ${
            req.status === 'pending' ? 'border-stone-200/80 hover:shadow-md' : 'border-stone-100 opacity-60'
          }`}>
            <div className="flex flex-col sm:flex-row gap-6">
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        req.type === 'Budget Override' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'
                      }`}>
                        {req.type}
                      </span>
                      <span className="text-xs text-stone-400">{req.time}</span>
                    </div>
                    <h3 className="text-base font-medium text-stone-900">{req.trip}</h3>
                    <p className="text-sm text-stone-500 flex items-center gap-1 mt-0.5">
                      Requested by <span className="font-medium text-stone-700">{req.requester}</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FDFBF7] border border-stone-100 rounded-xl space-y-3 text-sm">
                  <div>
                    <span className="text-stone-500 block mb-0.5 text-xs font-medium uppercase tracking-wide">Reason</span>
                    <p className="text-stone-800 leading-relaxed">{req.reason}</p>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-stone-100/80">
                    <iconify-icon icon="solar:info-circle-linear" className="text-stone-400 mt-0.5"></iconify-icon>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      <strong className="text-stone-700 font-medium">Policy Note:</strong> {req.policy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions Column */}
              <div className="w-full sm:w-48 flex flex-col justify-end border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-6">
                {req.status === 'pending' ? (
                  <div className="space-y-2">
                    {req.amount !== 'N/A' && (
                      <div className="mb-4 text-center sm:text-left">
                        <div className="text-xs text-stone-500 mb-0.5 uppercase tracking-wide font-medium">Impact</div>
                        <div className="text-xl font-semibold text-stone-900">{req.amount}</div>
                      </div>
                    )}
                    <button className="w-full py-2.5 bg-stone-900 text-stone-50 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm">
                      Approve
                    </button>
                    <button className="w-full py-2.5 bg-white border border-stone-200 text-stone-700 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors">
                      Deny
                    </button>
                    <button className="w-full py-2 text-stone-400 text-xs font-medium hover:text-stone-700 transition-colors">
                      Ask for details
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center sm:items-start justify-center h-full text-emerald-600">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-2">
                      <iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
                    </div>
                    <span className="text-sm font-medium">Approved</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}