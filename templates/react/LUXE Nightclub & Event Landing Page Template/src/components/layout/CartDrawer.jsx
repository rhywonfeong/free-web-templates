import { useCart } from '../../context/CartContext';
import { clsx } from 'clsx';
import { useToast } from '../../context/ToastContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, totalPrice } = useCart();
  const { showToast } = useToast();

  const handleCheckout = () => {
    showToast('Redirecting to secure checkout...', 'info');
    setTimeout(() => {
      closeCart();
    }, 1500);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-luxe-black/80 backdrop-blur-sm z-[2000] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={clsx(
        "fixed top-0 right-0 bottom-0 w-[400px] max-w-[90vw] bg-luxe-deep border-l border-luxe-card-border z-[2001] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 border-b border-luxe-card-border flex items-center justify-between">
          <span className="font-display text-xl tracking-[0.15em] uppercase text-white font-medium">Your Tickets</span>
          <button 
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center text-luxe-white-dim hover:text-white transition-colors"
          >
            <iconify-icon icon="solar:close-square-linear" class="text-2xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-luxe-white-dim py-12 flex flex-col items-center">
              <iconify-icon icon="solar:ticket-linear" class="text-6xl opacity-20 mb-4" />
              <p className="text-sm font-body">No tickets yet.<br/>Browse events and add them here.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4 pb-6 border-b border-white/5">
                  <div className="flex-1">
                    <p className="font-display text-sm font-medium tracking-wide uppercase text-white mb-1">{item.name}</p>
                    <p className="text-xs text-luxe-blue-electric mb-3">{item.shortDate}</p>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-luxe-blue-electric/10 border border-luxe-blue-electric/20 rounded">
                        <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-white hover:bg-luxe-blue-electric hover:text-luxe-black transition-colors rounded-l">
                          <iconify-icon icon="solar:minus-linear" />
                        </button>
                        <span className="font-display text-sm w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-white hover:bg-luxe-blue-electric hover:text-luxe-black transition-colors rounded-r">
                          <iconify-icon icon="solar:add-linear" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-white/30 hover:text-luxe-pink-hot transition-colors flex items-center gap-1"
                      >
                        <iconify-icon icon="solar:trash-bin-trash-linear" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-display text-base font-semibold text-luxe-blue-glow whitespace-nowrap">
                    {item.price === 0 ? 'FREE' : `$${(item.price * item.qty).toFixed(2)}`}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-luxe-card-border bg-black/30">
            <div className="flex justify-between font-display text-lg tracking-[0.1em] uppercase font-medium mb-6">
              <span>Total</span>
              <span className="text-luxe-blue-glow font-semibold">
                {totalPrice === 0 ? 'FREE' : `$${totalPrice.toFixed(2)}`}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-gradient-to-br from-luxe-blue-electric to-luxe-purple-bright text-white py-4 font-display font-semibold text-sm tracking-[0.2em] uppercase hover:shadow-[0_4px_30px_rgba(0,180,255,0.4)] transition-shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}