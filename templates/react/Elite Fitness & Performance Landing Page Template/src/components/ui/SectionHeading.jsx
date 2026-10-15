const SectionHeading = ({ label, title, subtitle }) => {
  return (
    <div className="mb-16 md:mb-24 flex flex-col max-w-4xl">
      {label && (
        <span className="text-[#E8201A] text-xs font-bold uppercase tracking-wide-label mb-6 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[#E8201A]"></span>
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tightest leading-[1.1] text-white mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#757575] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;