import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#F7F7F7] shadow-2xl z-50 flex flex-col animate-[slideInRight_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-black/10">
          <h2 className="text-xl font-medium tracking-tight text-black">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 text-black/50 hover:text-black bg-black/5 rounded-full transition-colors"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <iconify-icon icon="solar:bag-3-linear" width="48" className="text-black/20"></iconify-icon>
              <p className="text-black/50">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 px-6 py-3 bg-black text-[#F7F7F7] text-sm font-medium rounded-full hover:bg-black/80 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-black/5 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-black text-sm">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-black/40 hover:text-black transition-colors"
                        >
                          <iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
                        </button>
                      </div>
                      <p className="text-black/50 text-xs mt-1">{item.bundleType ? item.bundleType : 'Single Jar'}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-black/10 rounded-full bg-white">
                        <button 
                          onClick={() => updateQuantity(index, -1)}
                          className="w-8 h-8 flex items-center justify-center text-black/50 hover:text-black"
                        >-</button>
                        <span className="w-6 text-center text-sm font-medium text-black">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, 1)}
                          className="w-8 h-8 flex items-center justify-center text-black/50 hover:text-black"
                        >+</button>
                      </div>
                      <span className="font-medium text-black">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-black/10 p-6 bg-white space-y-4">
            {/* Free shipping progress mockup */}
            {cartTotal < 40 ? (
              <div className="space-y-2">
                <p className="text-xs text-black/50 text-center">You're ${(40 - cartTotal).toFixed(2)} away from Free Shipping</p>
                <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#b7cad2] transition-all duration-500" 
                    style={{ width: `${(cartTotal / 40) * 100}%` }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-black font-medium text-center">🎉 You've unlocked Free Shipping!</p>
            )}

            <div className="flex justify-between items-center text-lg font-medium text-black pt-2">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-black/50 text-center">Taxes and shipping calculated at checkout</p>
            <button className="w-full py-4 bg-black text-[#F7F7F7] rounded-full font-medium tracking-wide hover:bg-black/80 hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
              <iconify-icon icon="solar:lock-password-linear"></iconify-icon>
              Secure Checkout
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}