import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Nodes from './pages/Nodes';
import Network from './pages/Network';
import Ecosystem from './pages/Ecosystem';
import StartScaling from './pages/StartScaling';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="landing" element={<Landing />} />
        <Route path="ecosystem" element={<Ecosystem />} />
        <Route path="explore" element={<Explore />} />
        <Route path="nodes" element={<Nodes />} />
        <Route path="network" element={<Network />} />
        <Route path="start-scaling" element={<StartScaling />} />
      </Route>
    </Routes>
  );
}

export default App;