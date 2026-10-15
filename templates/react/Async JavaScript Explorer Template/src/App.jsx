import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}