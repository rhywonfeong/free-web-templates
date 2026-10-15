import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import OrdersBoard from './components/OrdersBoard';
import ReportsBoard from './components/ReportsBoard';
import Toast from './components/Toast';
import ItemModal from './components/ItemModal';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
  };

  return (
    <div className="flex h-screen w-full font-sans">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'orders' && (
        <OrdersBoard 
          onOpenModal={() => setIsModalOpen(true)}
          onTriggerToast={handleUpdateClick}
        />
      )}

      {activeTab === 'reports' && (
        <ReportsBoard />
      )}

      <Toast 
        isOpen={isToastOpen} 
        onClose={() => setIsToastOpen(false)} 
      />

      <ItemModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;