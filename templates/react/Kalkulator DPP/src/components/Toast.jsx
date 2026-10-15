import { memo } from "react";

function Toast({ toast, onClose }) {
  if (!toast) return null;

  const tone =
    toast.type === "error"
      ? "border-rose-400/30 bg-rose-500/10 text-rose-100"
      : "border-emerald-400/30 bg-emerald-500/10 text-emerald-100";

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
      <div
        className={`glass-panel flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-2xl ${tone}`}
        role="status"
        aria-live="polite"
      >
        <div className="mt-0.5">
          <iconify-icon
            icon={toast.type === "error" ? "solar:danger-circle-linear" : "solar:check-circle-linear"}
            width="20"
            height="20"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 text-current/80 transition hover:bg-white/10 hover:text-white"
          aria-label="Tutup notifikasi"
        >
          <iconify-icon icon="solar:close-circle-linear" width="18" height="18" />
        </button>
      </div>
    </div>
  );
}

export default memo(Toast);