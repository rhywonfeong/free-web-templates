import React from 'react'
import ReactDOM from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App.jsx'
import './index.css'
import 'iconify-icon' // Register Web Component globally

// Register GSAP plugins globally for the entire app shell
gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)