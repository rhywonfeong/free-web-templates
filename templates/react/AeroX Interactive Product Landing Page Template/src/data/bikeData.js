export const bikeParts = [
  {
    id: 'frame',
    name: 'Aero Carbon Frame',
    position: { top: '48%', left: '45%' }, // Approximate positions based on side-profile image
    description: 'Constructed from FACT 12r carbon fiber, engineered in the Win Tunnel for maximum aerodynamic efficiency without compromising on weight or stiffness.',
    specs: [
      { label: 'Material', value: 'Ultra-light Carbon Fiber' },
      { label: 'Weight', value: '850g (Size 56)' },
      { label: 'Geometry', value: 'Aggressive Race' }
    ],
    icon: 'solar:tuning-square-2-linear',
    image: 'https://images.unsplash.com/photo-1596734027786-21a4218fbd86?w=400&q=80'
  },
  {
    id: 'cockpit',
    name: 'Integrated Cockpit',
    position: { top: '22%', left: '72%' },
    description: 'A fully integrated one-piece handlebar and stem system. Hides all cables internally for a clean look and significant drag reduction.',
    specs: [
      { label: 'Width', value: '400mm / 420mm' },
      { label: 'Stem Length', value: '100mm - 120mm' },
      { label: 'Drop', value: '125mm' }
    ],
    icon: 'solar:slider-minimalistic-horizontal-linear',
    image: 'https://images.unsplash.com/photo-1628143896561-91a5cf97fb34?w=400&q=80'
  },
  {
    id: 'drivetrain',
    name: 'Electronic Drivetrain',
    position: { top: '70%', left: '42%' },
    description: '12-speed wireless electronic shifting provides lightning-fast, precise gear changes under any load. Features an integrated power meter.',
    specs: [
      { label: 'System', value: 'SRAM Red eTap AXS' },
      { label: 'Cassette', value: '10-33T' },
      { label: 'Chainrings', value: '48/35T' }
    ],
    icon: 'solar:settings-linear',
    image: 'https://images.unsplash.com/photo-1629853966551-37ce9eec95ed?w=400&q=80'
  },
  {
    id: 'wheels',
    name: 'Deep Section Wheels',
    position: { top: '72%', left: '18%' },
    description: '60mm deep carbon rims laced to aerodynamically optimized hubs with ceramic bearings for maximum speed maintenance on flats.',
    specs: [
      { label: 'Depth', value: '60mm Front/Rear' },
      { label: 'Tires', value: 'Tubeless Ready 28mm' },
      { label: 'Weight', value: '1450g / pair' }
    ],
    icon: 'solar:stop-circle-linear', // Closest simple representation
    image: 'https://images.unsplash.com/photo-1622055621644-8d9600f14d8d?w=400&q=80'
  },
  {
    id: 'saddle',
    name: 'Ergonomic Saddle',
    position: { top: '22%', left: '26%' },
    description: '3D-printed liquid polymer upper combined with a carbon shell. Designed to alleviate soft tissue pressure during aggressive riding positions.',
    specs: [
      { label: 'Rails', value: 'Carbon 7x9mm' },
      { label: 'Width', value: '143mm / 155mm' },
      { label: 'Tech', value: 'Adaptive 3D Print' }
    ],
    icon: 'solar:chair-2-linear',
    image: 'https://images.unsplash.com/photo-1629854442651-789a42f53434?w=400&q=80'
  }
];