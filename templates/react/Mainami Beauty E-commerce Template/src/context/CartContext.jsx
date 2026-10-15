import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product, quantity = 1, bundle = null) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.bundleType === bundle?.type);
      
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      
      return [...prev, { ...product, quantity, bundleType: bundle?.type, price: bundle?.price || product.price }];
    });
    openCart();
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCartItems(prev => {
      const newItems = [...prev];
      newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
      return newItems;
    });
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      isCartOpen,
      openCart,
      closeCart,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};