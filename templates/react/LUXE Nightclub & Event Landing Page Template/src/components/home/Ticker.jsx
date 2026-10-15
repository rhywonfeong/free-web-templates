export default function Ticker() {
  const items = [
    { text: "Bucket Fridays", highlight: true, suffix: "— $14.75 Triple Drinks" },
    { text: "Free Entry", pink: true, suffix: "Before Midnight" },
    { text: "Country Nights", highlight: true, suffix: "— Mechanical Bull" },
    { text: "50% Off All Drinks Until 12AM" },
    { text: "$4.50 Singles • $6 Doubles • $4 Shots" },
    { text: "Playboy Bunny Mansion Night", pink: true, suffix: "— 10PM–3AM" },
  ];

  // Quadruple the items for seamless scrolling even on ultrawide monitors
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-gradient-to-r from-luxe-purple-dark via-luxe-blue-electric/10 to-luxe-purple-dark border-y border-luxe-card-border overflow-hidden py-3 relative flex group">
      <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
        {scrollItems.map((item, i) => (
          <div key={i} className="flex items-center px-12 font-display text-sm tracking-[0.2em] uppercase whitespace-nowrap text-luxe-white-dim">
            {item.highlight && <span className="text-luxe-blue-electric font-medium mr-2">{item.text}</span>}
            {item.pink && <span className="text-luxe-pink-hot font-medium mr-2">{item.text}</span>}
            {!item.highlight && !item.pink && <span className="mr-2">{item.text}</span>}
            {item.suffix && <span>{item.suffix}</span>}
            <span className="mx-12 text-luxe-purple-bright/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}