export function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 2
  }).format(Number(value) || 0);
}

export function parseNumericInput(value) {
  const sanitized = String(value || "").replace(/[^\d]/g, "");
  return sanitized ? Number(sanitized) : 0;
}