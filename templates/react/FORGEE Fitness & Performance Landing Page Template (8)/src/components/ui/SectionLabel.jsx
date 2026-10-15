export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--neutral-800)] text-[var(--flame-500)] text-[11px] font-bold uppercase tracking-[0.15em] mb-6">
      {children}
    </div>
  );
}