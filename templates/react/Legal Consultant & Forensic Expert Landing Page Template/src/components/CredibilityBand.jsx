import React from 'react'

const credentials = [
  { title: 'President, HNS Services', subtitle: 'Active Commercial Contractor' },
  { title: 'Former VP/Partner', subtitle: 'Royal Roof Company' },
  { title: '25+ Years', subtitle: 'Continuous Field Execution' },
  { title: 'Subject Matter Expert', subtitle: 'CSLB C-39 Discipline Expert' },
]

function CredibilityBand() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(28, 35, 43, 0.10)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[rgba(28,35,43,0.10)]">
          {credentials.map((item, i) => (
            <div key={i} className={`lg:px-10 ${i === 0 ? 'first:lg:pl-0' : ''} ${i === credentials.length - 1 ? 'last:lg:pr-0' : ''}`}>
              <p style={{ color: '#1C232B' }} className="text-sm font-semibold tracking-wide uppercase mb-1">
                {item.title}
              </p>
              <p style={{ color: '#6B7280' }} className="text-xs">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CredibilityBand