import { useEffect, useMemo, useState } from "react";
import SectionReveal from "./SectionReveal";
import Toast from "./Toast";
import { formatRupiah, parseNumericInput } from "../utils/format";
import { usePersistentState } from "../hooks/usePersistentState";

const MAX_VALUE = 50000000;

export default function CalculatorSection() {
  const [storedValue, setStoredValue] = usePersistentState("dpp-total-price", "");
  const [storedResult, setStoredResult] = usePersistentState("dpp-result", null);
  const [inputValue, setInputValue] = useState(storedValue || "");
  const [result, setResult] = useState(storedResult);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStoredValue(inputValue);
  }, [inputValue, setStoredValue]);

  useEffect(() => {
    setStoredResult(result);
  }, [result, setStoredResult]);

  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(timeout);
  }, [toast]);

  const numericValue = useMemo(() => parseNumericInput(inputValue), [inputValue]);

  const handleChange = (event) => {
    const raw = event.target.value.replace(/[^\d]/g, "");
    if (!raw) {
      setInputValue("");
      setError("");
      return;
    }

    const numeric = Number(raw);
    if (numeric > MAX_VALUE) {
      setError("Maksimal jumlah harga keseluruhan adalah Rp50.000.000.");
      setInputValue(String(MAX_VALUE));
      return;
    }

    setInputValue(raw);
    setError("");
  };

  const handleCalculate = () => {
    if (!inputValue) {
      setError("Masukkan jumlah harga keseluruhan terlebih dahulu.");
      setResult(null);
      setToast({ type: "error", message: "Input belum diisi." });
      return;
    }

    if (numericValue <= 0) {
      setError("Nilai harus lebih besar dari nol.");
      setResult(null);
      setToast({ type: "error", message: "Masukkan angka yang valid." });
      return;
    }

    if (numericValue > MAX_VALUE) {
      setError("Nilai melebihi batas maksimal.");
      setResult(null);
      setToast({ type: "error", message: "Nilai melebihi batas maksimal." });
      return;
    }

    setError("");
    setLoading(true);

    window.setTimeout(() => {
      const calculated = (11 / 12) * numericValue;
      setResult(calculated);
      setLoading(false);
      setToast({ type: "success", message: "Nilai DPP berhasil dihitung." });
    }, 700);
  };

  return (
    <>
      <SectionReveal
        id="kalkulator"
        className="mx-auto max-w-6xl px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-200">
              <iconify-icon icon="solar:code-circle-linear" width="16" height="16" />
              Perhitungan DPP otomatis
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Hitung nilai DPP dari jumlah harga keseluruhan
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
              Rumus yang digunakan adalah <span className="font-medium text-slate-200">(11/12) × jumlah harga keseluruhan</span>.
              Hasil hanya akan ditampilkan setelah tombol kalkulasi ditekan.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="totalHarga"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Jumlah Harga Keseluruhan
                </label>
                <div
                  className="copy-allowed"
                  data-allow-interaction="true"
                >
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      Rp
                    </span>
                    <input
                      id="totalHarga"
                      name="totalHarga"
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="Contoh: 1200000"
                      value={inputValue}
                      onChange={handleChange}
                      aria-invalid={Boolean(error)}
                      aria-describedby="totalHargaHint totalHargaError"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/[0.07] focus:ring-4 focus:ring-sky-400/10"
                    />
                  </div>
                </div>
                <div id="totalHargaHint" className="mt-2 text-xs text-slate-500">
                  Hanya angka, maksimal Rp50.000.000.
                </div>
                {error ? (
                  <p id="totalHargaError" className="mt-2 text-xs text-rose-300">
                    {error}
                  </p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-4 text-sm font-medium text-white shadow-lg shadow-sky-950/40 transition duration-300 hover:scale-[1.01] hover:shadow-sky-700/30 focus:outline-none focus:ring-4 focus:ring-sky-400/20"
              >
                <iconify-icon
                  icon="solar:calculator-linear"
                  width="20"
                  height="20"
                  class="transition duration-300 group-hover:rotate-6"
                />
                Kalkulasi
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Hasil</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Nilai DPP
                </h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-300 border border-white/10">
                <iconify-icon icon="solar:chart-square-linear" width="22" height="22" />
              </div>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 sm:p-6">
              {loading ? (
                <div aria-label="Loading hasil perhitungan" className="space-y-4">
                  <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
                  <div className="h-12 w-full animate-pulse rounded-2xl bg-white/10" />
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-white/10" />
                </div>
              ) : result !== null ? (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">
                    Berdasarkan jumlah harga keseluruhan yang Anda masukkan:
                  </p>
                  <div
                    className="copy-allowed rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4"
                    data-allow-interaction="true"
                  >
                    <label htmlFor="hasilDpp" className="mb-2 block text-xs uppercase tracking-[0.2em] text-emerald-200/80">
                      Nilai DPP
                    </label>
                    <textarea
                      id="hasilDpp"
                      readOnly
                      rows={1}
                      value={formatRupiah(result)}
                      className="min-h-0 w-full resize-none bg-transparent text-2xl font-semibold tracking-tight text-emerald-100 outline-none sm:text-3xl"
                    />
                  </div>
                  <p className="text-xs leading-6 text-slate-500">
                    Rumus: (11/12) × {formatRupiah(numericValue || 0)}
                  </p>
                </div>
              ) : (
                <div className="flex min-h-52 flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-slate-900/20 px-5 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-slate-300">
                    <iconify-icon icon="solar:clipboard-text-linear" width="24" height="24" />
                  </div>
                  <p className="text-base font-medium text-slate-200">Hasil belum ditampilkan</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Masukkan jumlah harga keseluruhan lalu tekan tombol kalkulasi untuk melihat nilai DPP.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Batas Input</p>
                <p className="mt-2 text-sm font-medium text-slate-200">Maksimal Rp50.000.000</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Penyimpanan</p>
                <p className="mt-2 text-sm font-medium text-slate-200">Tersimpan lokal di browser</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}