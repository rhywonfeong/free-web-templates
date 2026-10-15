import React from 'react';

export default function ToastContainer({ toasts }) {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
            {toasts.map((toast) => (
                <div 
                    key={toast.id} 
                    className="bg-neutral-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300"
                >
                    <iconify-icon 
                        icon={toast.type === 'success' ? 'solar:check-circle-linear' : 'solar:danger-triangle-linear'} 
                        class={`${toast.type === 'success' ? 'text-green-500' : 'text-red-500'} text-lg`}
                    ></iconify-icon>
                    {toast.message}
                </div>
            ))}
        </div>
    );
}