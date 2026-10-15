import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App'
import { initGa } from './hooks'
import './styles.css'

// Loads GA4 from the bundle, because the published/custom-domain HTML shell
// replaces the project's index.html <head>.
initGa()

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
