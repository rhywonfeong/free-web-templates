import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const initialProducts = [
  { id: 1, name: "iPhone 15 Pro", category: "iPhone", grade: "Nuovo", price: "799", stock: 8, status: "Pubblicato", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85", tone: "violet" },
  { id: 2, name: "MacBook Air M2", category: "Mac", grade: "Ottimo", price: "889", stock: 3, status: "Pubblicato", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85", tone: "silver" },
  { id: 3, name: "iPhone 14", category: "iPhone", grade: "Nuovo", price: "529", stock: 12, status: "Pubblicato", image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=900&q=85", tone: "yellow" },
  { id: 4, name: "iPad Air 5", category: "iPad", grade: "Buono", price: "439", stock: 0, status: "Bozza", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85", tone: "blue" },
  { id: 5, name: "Apple Watch S8", category: "Watch", grade: "Eccellente", price: "269", stock: 5, status: "Pubblicato", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85", tone: "rose" },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  function addToCart(product, option) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id && item.option === option);
      if (existing) return items.map((item) => item === existing ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) } : item);
      return [...items, { ...product, option, quantity: 1 }];
    });
  }

  function updateQuantity(id, option, quantity) {
    setCart((items) => quantity < 1 ? items.filter((item) => item.id !== id || item.option !== option) : items.map((item) => item.id === id && item.option === option ? { ...item, quantity } : item));
  }

  return <BrowserRouter><AnimatedRoutes products={products} cart={cart} setProducts={setProducts} addToCart={addToCart} updateQuantity={updateQuantity} /></BrowserRouter>;
}

function AnimatedRoutes({ products, cart, setProducts, addToCart, updateQuantity }) {
  const location = useLocation();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return <AnimatePresence mode="wait">
    <motion.div key={location.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}>
      <Routes location={location}>
        <Route path="/" element={<Home products={products} cartCount={cartCount} />} />
        <Route path="/prodotto/:id" element={<ProductPage products={products} cartCount={cartCount} addToCart={addToCart} />} />
        <Route path="/carrello" element={<CartPage cart={cart} updateQuantity={updateQuantity} />} />
        <Route path="/cms" element={<Catalog products={products} setProducts={setProducts} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </motion.div>
  </AnimatePresence>;
}
