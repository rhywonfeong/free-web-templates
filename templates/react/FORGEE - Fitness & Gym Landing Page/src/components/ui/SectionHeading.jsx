export default function SectionHeading({ title, subtitle, className = '' }) {
  // Support for multi-line titles passed as array or single string
  const renderTitle = () => {
    if (Array.isArray(title)) {
      return title.map((line, idx) => (
        <span key={idx} className="block">{line}</span>
      ));
    }
    return <span className="block">{title}</span>;
  };

  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}