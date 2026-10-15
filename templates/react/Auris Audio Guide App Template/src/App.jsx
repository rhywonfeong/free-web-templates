import React, { useState } from 'react';
import Header from './components/Header';
import HeroGuide from './components/HeroGuide';
import RouteCard from './components/RouteCard';
import PackageItem from './components/PackageItem';
import BottomNav from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Initial state derived from the static HTML
  const [routes, setRoutes] = useState([
    {
      id: 1,
      title: "西湖十景漫步",
      desc: "寻访江南水乡的诗意与画卷",
      stops: "10 站",
      duration: "1.5h",
      listeners: "2.4w 人收听",
      bgGradient: "from-gray-200 to-gray-300",
      isLiked: false,
    },
    {
      id: 2,
      title: "兵马俑一号坑",
      desc: "探索大秦帝国的地下军团",
      stops: "6 站",
      duration: "2.0h",
      listeners: "8.1k 人收听",
      bgGradient: "from-slate-200 to-gray-300",
      isLiked: true,
    }
  ]);

  const packages = [
    {
      id: 1,
      title: "世界级博物馆大赏",
      desc: "卢浮宫、大英博物馆等精华合集",
      count: "包含 5 个讲解",
      bgColor: "bg-slate-200",
    },
    {
      id: 2,
      title: "丝绸之路特辑",
      desc: "跨越千年的文化与商贸交流史",
      count: "包含 8 个讲解",
      bgColor: "bg-stone-200",
    },
    {
      id: 3,
      title: "国家森林公园探秘",
      desc: "聆听大自然的声音与植被科普",
      count: "包含 3 个讲解",
      bgColor: "bg-emerald-100",
    }
  ];

  const toggleLike = (id) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, isLiked: !route.isLiked } : route
    ));
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-gray-50 relative overflow-hidden flex flex-col shadow-2xl shadow-gray-200/50">
      <Header />

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-28 hide-scrollbar">
        <HeroGuide />

        {/* Popular Routes (Horizontal Scroll) */}
        <section className="mt-8">
          <div className="flex justify-between items-end px-6 mb-4">
            <h2 className="text-xl font-medium tracking-tight text-slate-900">热门线路</h2>
            <a href="#" className="text-xs text-gray-500 flex items-center gap-1 hover:text-slate-800">
              全部 <iconify-icon icon="solar:alt-arrow-right-linear" style={{ strokeWidth: "1.5" }}></iconify-icon>
            </a>
          </div>
          
          <div className="flex overflow-x-auto gap-4 px-6 pb-4 snap-x snap-mandatory hide-scrollbar">
            {routes.map(route => (
              <RouteCard 
                key={route.id} 
                route={route} 
                onToggleLike={() => toggleLike(route.id)} 
              />
            ))}
          </div>
        </section>

        {/* Curated Packages (Vertical List) */}
        <section className="mt-4 px-6">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-medium tracking-tight text-slate-900">精选语音包</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {packages.map(pkg => (
              <PackageItem key={pkg.id} item={pkg} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}