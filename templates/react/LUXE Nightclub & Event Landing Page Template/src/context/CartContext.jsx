import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('luxe_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    localStorage.setItem('luxe_cart', JSON.stringify(items));
  }, [items]);

  const toggleCart = () => setIsOpen(!isOpen);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (event) => {
    setItems(current => {
      const existing = current.find(item => item.id === event.id);
      if (existing) {
        return current.map(item => 
          item.id === event.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { ...event, qty: 1 }];
    });
    showToast(`Added ${event.name} to your tickets`, 'success');
  };

  const removeItem = (id) => {
    setItems(current => current.filter(item => item.id !== id));
  };

  const updateQty = (id, delta) => {
    setItems(current => {
      return current.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      }).filter(item => item.qty > 0);
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, toggleCart, openCart, closeCart,
      addItem, removeItem, updateQty, totalItems, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);