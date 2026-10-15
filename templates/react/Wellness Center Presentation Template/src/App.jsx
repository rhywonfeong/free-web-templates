import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PresentationLayout from './components/PresentationLayout';
import PrintView from './pages/PrintView';
import SlideRenderer from './pages/SlideRenderer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/slide/1" replace />} />
        <Route path="/print" element={<PrintView />} />
        <Route element={<PresentationLayout />}>
          <Route path="/slide/:id" element={<SlideRenderer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;