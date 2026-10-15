const items = [
  { label: 'Home', icon: 'solar:home-linear', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { label: 'Work', icon: 'solar:case-round-linear', action: () => scrollToId('work') },
  { label: 'About', icon: 'solar:user-linear', action: () => scrollToId('about') },
  { label: 'Contact', icon: 'solar:letter-linear', action: () => scrollToId('contact') }
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function SideRail() {
  return (
    <aside className="side-rail">
      <div className="side-rail-inner">
        {items.map((item) => (
          <button
            key={item.label}
            className="side-rail-btn"
            type="button"
            onClick={item.action}
            aria-label={item.label}
          >
            <iconify-icon icon={item.icon} width="18" height="18" />
            <span className="side-tooltip">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}