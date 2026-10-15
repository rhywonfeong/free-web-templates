import React from 'react';

export default function Marquee() {
  const items = [
    { text: "Charcoal", italic: true },
    { text: "Graphite", italic: false },
    { text: "Perspective", italic: true },
    { text: "Life Drawing", italic: false },
    { text: "Portraiture", italic: true },
    { text: "Ink Wash", italic: false },
  ];

  // We duplicate the items array once to ensure a perfectly seamless loop 
  // when using CSS transform translateX(-50%)
  const doubleItems = [...items, ...items];

  return (
    <div className="py-12 bg-[#1a1a1a] text-[#Fdfcf8] overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {doubleItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className={`font-serif-display text-5xl mx-8 ${item.italic ? 'italic' : ''}`}>
              {item.text}
            </span>
            <span className="text-sm uppercase tracking-widest mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}