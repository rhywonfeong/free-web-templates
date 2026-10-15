export default function SectionHeader({ label, title, description, dark = false }) {
  return (
    <div className={`max-w-2xl mb-16 md:mb-24 ${dark ? 'text-white' : 'text-[#111111]'}`}>
      {label && (
        <span className="inline-block uppercase font-medium text-xs tracking-[0.12em] mb-6 border border-current rounded-full px-4 py-1.5 opacity-80">
          {label}
        </span>
      )}
      <h2 className="font-display font-black uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6">
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg font-light leading-relaxed ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}