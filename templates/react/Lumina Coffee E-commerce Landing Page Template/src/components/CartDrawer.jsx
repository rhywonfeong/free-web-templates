import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-xl font-bold uppercase tracking-tight">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-400 gap-4">
              <iconify-icon icon="solar:cart-cross-linear" width="48"></iconify-icon>
              <p>Your cart is empty.</p>
              <Button variant="secondary" onClick={() => setIsCartOpen(false)}>Continue Shopping</Button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-stone-100 pb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-50 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-stone-900 line-clamp-1">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
                      </button>
                    </div>
                    <p className="text-sm text-stone-500 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-stone-50 w-fit rounded-full px-3 py-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="text-stone-500 hover:text-stone-900">-</button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="text-stone-500 hover:text-stone-900">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-stone-100 bg-stone-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-stone-500">Subtotal</span>
              <span className="text-xl font-bold text-stone-900">${cartTotal.toFixed(2)}</span>
            </div>
            <Button variant="primary" className="w-full" onClick={() => alert('Checkout flow would start here!')}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}