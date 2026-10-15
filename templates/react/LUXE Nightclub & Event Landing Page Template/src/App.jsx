import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import VIP from './pages/VIP';
import Schedule from './pages/Schedule';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="vip" element={<VIP />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>
        </Routes>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;