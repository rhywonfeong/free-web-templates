export default function SectionHeader({ eyebrow, title, highlightTitle, align = 'left', className = '' }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#E8400A]"></span>
          <span className="text-[#E8400A] uppercase tracking-[0.12em] text-xs font-medium">
            {eyebrow}
          </span>
          {align === 'center' && <span className="w-8 h-[1px] bg-[#E8400A]"></span>}
        </div>
      )}
      <h2 className="font-display font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] text-white">
        {/* Usamos Regex para quebrar tanto quebras de linha reais quanto texto '\n' inserido via props */}
        {title.split(/\\n|\n/).map((line, i) => (
          <span key={i} className="block">
            {highlightTitle && line.includes(highlightTitle) ? (
              <>
                {line.split(highlightTitle)[0]}
                <span className="text-[#E8400A]">{highlightTitle}</span>
                {line.split(highlightTitle)[1]}
              </>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}