import React, { createContext, useContext, useState, useCallback } from 'react';
import { clsx } from 'clsx';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((current) => [...current, { id, message, type }]);
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = (id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 rounded border backdrop-blur-md animate-slide-in-right pointer-events-auto shadow-lg",
              toast.type === 'success' ? "bg-luxe-blue-electric/10 border-luxe-blue-electric/30 text-luxe-white" : "bg-luxe-card-bg border-luxe-card-border text-luxe-white"
            )}
          >
            {toast.type === 'success' && (
              <iconify-icon icon="solar:check-circle-linear" class="text-luxe-blue-electric text-xl" />
            )}
            <p className="font-body text-sm font-medium">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-luxe-white-dim hover:text-white">
              <iconify-icon icon="solar:close-circle-linear" class="text-lg" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);