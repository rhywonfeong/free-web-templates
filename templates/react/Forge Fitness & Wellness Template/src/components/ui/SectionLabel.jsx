import React from 'react'

export default function SectionLabel({ children }) {
  return (
    <span className="inline-block uppercase tracking-[0.15em] text-[#E63422] text-xs font-semibold mb-4">
      {children}
    </span>
  )
}