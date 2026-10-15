import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Agendar from './pages/Agendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="agendar" element={<Agendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;