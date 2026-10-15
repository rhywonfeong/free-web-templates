import { useState } from 'react';
import clsx from 'clsx';

const menuData = {
  sushi: [
    { name: "Spicy Tuna Crunch", desc: "Fresh tuna, spicy mayo, tempura flakes, cucumber, topped with avocado", price: "€16" },
    { name: "El Sur Dragon", desc: "Shrimp tempura, eel, cucumber, topped with unagi sauce and sesame", price: "€18" },
    { name: "Cretan Catch Sashimi", desc: "Chef's selection of 9 pieces of locally caught seasonal fish", price: "€22" },
    { name: "Vegan Zenith", desc: "Mango, asparagus, avocado, topped with roasted red pepper puree", price: "€14" },
    { name: "Truffle Salmon Nigiri", desc: "Torched salmon belly, white truffle oil, sea salt (2pcs)", price: "€11" },
  ],
  mexican: [
    { name: "Tacos Al Pastor", desc: "Marinated pork shoulder, grilled pineapple, white onion, fresh cilantro (3pcs)", price: "€14" },
    { name: "Birria Quesatacos", desc: "Slow-cooked beef, melted cheese in a crispy shell, served with rich consommé", price: "€17" },
    { name: "Guacamole Clásico", desc: "Hass avocados, lime, jalapeño, pico de gallo, house-made totopos", price: "€10" },
    { name: "Ceviche Verde", desc: "White fish cured in lime, tomatillo, green chili, cucumber, red onion", price: "€16" },
    { name: "Mushroom Barbacoa", desc: "Oyster mushrooms slow-roasted in adobo, pickled onions, corn tortillas (V)", price: "€13" },
  ],
  cocktails: [
    { name: "Oaxaca Old Fashioned", desc: "Reposado tequila, mezcal, agave nectar, angostura bitters", price: "€14" },
    { name: "Yuzu Margarita", desc: "Blanco tequila, yuzu juice, triple sec, matcha salt rim", price: "€13" },
    { name: "Tokyo Mule", desc: "Vodka, fresh ginger, lime, topped with premium ginger beer and sake splash", price: "€12" },
    { name: "Spicy Mezcalita", desc: "Mezcal, fresh lime, agave, muddled jalapeño, tajin rim", price: "€14" },
    { name: "Hibiscus Spritz", desc: "Aperol, prosecco, house-made hibiscus syrup, soda water", price: "€11" },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('sushi');

  const tabs = [
    { id: 'sushi', label: 'Sushi Bar', icon: 'solar:fish-linear' },
    { id: 'mexican', label: 'Mexican', icon: 'solar:taco-linear' },
    { id: 'cocktails', label: 'Cocktails', icon: 'solar:wineglass-triangle-linear' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Our Menu</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A carefully curated selection of Japanese precision and Mexican warmth. 
            Designed to be shared, paired, and savored.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex justify-center gap-2 md:gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border',
                activeTab === tab.id
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  : 'bg-[#121212] text-zinc-400 border-white/5 hover:bg-[#1a1a1a] hover:text-white'
              )}
            >
              <iconify-icon icon={tab.icon} width="18"></iconify-icon>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Content - Text based for SEO */}
        <div className="bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-12 min-h-[400px]">
          <div className="flex flex-col gap-8 fade-in" key={activeTab}>
            {menuData[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 pb-8 border-b border-white/5 last:border-0 last:pb-0"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
                <div className="text-amber-500 font-medium text-lg whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          <p>Please inform your server of any allergies or dietary requirements.</p>
          <p className="mt-2">Prices include all legal taxes. Menu items and prices are subject to change.</p>
        </div>

      </div>
    </div>
  );
}