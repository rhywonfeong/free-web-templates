import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="caracteristicas" element={<Placeholder />} />
          <Route path="precios" element={<Placeholder />} />
          <Route path="recursos" element={<Placeholder />} />
          <Route path="*" element={<Placeholder />} />
        </Route>
      </Routes>
    </div>
  );
}