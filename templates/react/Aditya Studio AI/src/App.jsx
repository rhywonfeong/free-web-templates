import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import AIHub from './pages/AITools/Hub';
import ImageGenerator from './pages/AITools/ImageGenerator';
import SEOChecker from './pages/AITools/SEOChecker';
import ThumbnailChecker from './pages/AITools/ThumbnailChecker';
import ViewPrediction from './pages/AITools/ViewPrediction';
import VideoGenerator from './pages/AITools/VideoGenerator';
import Pricing from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="content" element={<Content />} />
          <Route path="ai-tools" element={<AIHub />} />
          <Route path="ai-tools/image-generator" element={<ImageGenerator />} />
          <Route path="ai-tools/seo-checker" element={<SEOChecker />} />
          <Route path="ai-tools/thumbnail-checker" element={<ThumbnailChecker />} />
          <Route path="ai-tools/view-prediction" element={<ViewPrediction />} />
          <Route path="ai-tools/video-generator" element={<VideoGenerator />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;