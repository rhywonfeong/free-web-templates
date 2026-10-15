import React from 'react'

const SectionHeading = ({ title, subtitle, className = '' }) => {
  // Logic to highlight specific words in orange if wrapped in *asterisks*
  const renderTitle = () => {
    if (!title.includes('*')) return title;
    
    const parts = title.split('*');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="text-[#FF4A1C]">{part}</span>;
      }
      return part;
    });
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {subtitle && (
        <span className="text-[#E8190F] font-semibold text-sm tracking-[0.15em] uppercase flex items-center gap-3">
          <div className="w-8 h-[2px] bg-[#E8190F]"></div>
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
        {title.includes('*') ? renderTitle() : title}
      </h2>
    </div>
  )
}

export default SectionHeading