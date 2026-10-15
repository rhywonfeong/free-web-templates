import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Whatsappuso from './pages/Whatsappuso';
import Privacidadeuso from './pages/Privacidadeuso';
import Termosuso from './pages/Termosuso';
import ExclusaoDeDadosuso from './pages/ExclusaoDeDadosuso';
import Portfolio from './pages/Portfolio';
import Uso from './pages/Uso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="whatsappuso" element={<Whatsappuso />} />
          <Route path="privacidadeuso" element={<Privacidadeuso />} />
          <Route path="termosuso" element={<Termosuso />} />
          <Route path="exclusao-de-dadosuso" element={<ExclusaoDeDadosuso />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="uso" element={<Uso />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
