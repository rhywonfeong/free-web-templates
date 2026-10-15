import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

// Floating Moon Dust Component
const MoonDust = () => {
  const particles = useMemo(() => {
    // Generate 60 unique particles with varying properties
    return Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1px to 4px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        duration: `${Math.random() * 20 + 15}s`, // 15s to 35s (slow float)
        delay: `-${Math.random() * 35}s`, // Start scattered at different times
        // Electric purple, Electric blue, Bright cyan, Soft stardust
        color: ['#8b3dff', '#00b4ff', '#40e0ff', '#e2d9ff'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.4 + 0.1, // Soft, varied brightness
        shadowBlur1: size * 2,
        shadowBlur2: size * 4,
        driftStart: `${Math.random() * 30 - 15}px`,
        driftEnd: `${Math.random() * 60 - 30}px`,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden mix-blend-screen">
      {particles.map(p => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            backgroundColor: p.color,
            color: p.color,
            boxShadow: `0 0 ${p.shadowBlur1}px currentColor, 0 0 ${p.shadowBlur2}px currentColor`,
            '--p-opacity': p.opacity,
            '--drift-start': p.driftStart,
            '--drift-end': p.driftEnd
          }}
        />
      ))}
    </div>
  );
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative bg-luxe-black">
      <MoonDust />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}