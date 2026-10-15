export default function Eyebrow({ children, icon, color = "orange" }) {
  const colorMap = {
    orange: "text-[#FF5A1A]",
    yellow: "text-[#E5C000]"
  }

  return (
    <div className={`flex items-center gap-3 mb-4 uppercase tracking-[0.08em] text-[11px] font-semibold ${colorMap[color]}`}>
      {icon && <iconify-icon icon={icon}></iconify-icon>}
      <span>{children}</span>
    </div>
  )
}