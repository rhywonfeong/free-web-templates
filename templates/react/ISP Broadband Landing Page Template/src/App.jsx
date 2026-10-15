import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Planos from './pages/Planos';
import IPTV from './pages/IPTV';
import Sobre from './pages/Sobre';
import OndeEstamos from './pages/OndeEstamos';
import Contato from './pages/Contato';
import Trabalhe from './pages/Trabalhe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="planos" element={<Planos />} />
          <Route path="iptv" element={<IPTV />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="onde-estamos" element={<OndeEstamos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="trabalhe" element={<Trabalhe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;