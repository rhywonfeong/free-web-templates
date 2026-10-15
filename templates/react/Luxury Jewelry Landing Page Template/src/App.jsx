import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CustomCursor from './components/CustomCursor';
import GlobalOverlays from './components/GlobalOverlays';

export default function App() {
  return (
    <>
      <GlobalOverlays />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}