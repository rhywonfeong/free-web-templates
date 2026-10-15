import { useEffect, useMemo, useState } from 'react';
import Toggle from '../../components/Toggle';
import { useReveal } from '../../hooks/useReveal';
import MaskedText from '../../components/MaskedText';

export default function Reserves() {
  const [includeNvc, setIncludeNvc] = useState(true);
  const [auditState, setAuditState] = useState({ status: 'idle', report: null });
  const headerRef = useReveal();
  const tableRef = useReveal({ threshold: 0.2 });

  const auditSnapshot = useMemo(() => ({
    reserveRatio: includeNvc ? '164.0%' : '142.5%',
    reservePair: includeNvc ? '75.30 / 39.00' : '65.20 / 39.00',
    assetTotal: includeNvc ? '75.30M' : '65.20M',
    liabilityTotal: '39.00M',
    tokenScope: includeNvc ? 'NVC included' : 'NVC excluded',
  }), [includeNvc]);

  useEffect(() => {
    if (auditState.status !== 'running') return undefined;

    const timer = window.setTimeout(() => {
      setAuditState({
        status: 'complete',
        report: {
          id: `AUD-${Date.now().toString().slice(-6)}`,
          completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          merkleRoot: includeNvc ? '0x8fa2...c91b' : '0x42de...19aa',
          checks: [
            'Liability snapshot reconciled',
            'Custody balances verified',
            'Reserve ratio above policy floor',
          ],
        },
      });
    }, 1250);

    return () => window.clearTimeout(timer);
  }, [auditState.status, includeNvc]);

  const data = [
    {
      id: 'ratio',
      title: 'Reserve Ratio',
      subtitle: 'Total assets / Total liabilities · IN MILLIONS USD',
      icon: 'solar:alt-arrow-right-linear',
      iconColor: 'text-pink-500',
      value: auditSnapshot.reserveRatio,
      subValue: auditSnapshot.reservePair,
      chartColor: 'bg-rose-500',
      chartOpacity: 'opacity-80',
      heights: ['h-3', 'h-5', 'h-8', 'h-4', 'h-6']
    },
    {
      id: 'custody',
      title: 'Custody Ratio',
      subtitle: 'Custodial storage / Total liabilities',
      value: '135.0%',
      subValue: '43.00 / 39.00',
      chartColor: 'bg-white',
      chartOpacity: 'opacity-40 grayscale',
      heights: ['h-2', 'h-4', 'h-7', 'h-3', 'h-5'],
      ml: 'ml-5'
    },
    {
      id: 'storage',
      title: 'Custodial Storage',
      subtitle: 'Cobo Custody / Fireblocks',
      value: '49.73',
      subValue: '26.66 / 23.07',
      chartColor: 'bg-white',
      chartOpacity: 'opacity-40 grayscale',
      heights: ['h-1', 'h-2', 'h-4', 'h-2', 'h-3'],
      ml: 'ml-5'
    }
  ];

  const handleRunAudit = () => {
    setAuditState({ status: 'running', report: null });
  };

  return (
    <section className="w-full max-w-7xl py-32 px-6 relative border-b border-white/[0.05]">
      <div ref={headerRef} className="text-center mb-16">
        <div className="flex items-center justify-center space-x-4 mb-4 text-[0.65rem] tracking-widest uppercase text-rose-500 font-medium clip-slide delay-100">
          <span>04</span>
          <div className="w-12 h-px bg-rose-500/50"></div>
          <span>Transparency</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
          <MaskedText text="Proof of reserves\nand liabilities" delayStart={200} stagger={100} />
        </h2>
      </div>

      <div ref={tableRef} className="max-w-4xl mx-auto border border-white/10 rounded-sm skeuo-card overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="clip-slide delay-100 flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 py-5 border-b border-white/10 bg-white/[0.02] gap-4">
          <Toggle 
            checked={includeNvc} 
            onChange={setIncludeNvc} 
            label="Include NVC Token" 
          />
          <div className="flex items-center space-x-2 text-[0.65rem] text-white/40 tracking-widest uppercase">
            <span className="text-rose-500 animate-pulse">● 1 min ago</span>
            <span>- Data updated every 15 mins</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col">
          {data.map((row, index) => (
            <div
              key={row.id}
              className="clip-slide flex flex-col sm:flex-row items-start sm:items-center justify-between px-8 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors group gap-4"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center space-x-6">
                {/* Mini bar chart visual */}
                <div className={`flex items-end space-x-1 h-8 ${row.chartOpacity} transition-all duration-300`}>
                  {row.heights.map((h, i) => (
                    <div
                      key={i}
                      className={`w-1.5 ${h} ${row.chartColor} rounded-t-sm group-hover:h-8 transition-all duration-500`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    {row.icon && <iconify-icon icon={row.icon} class={`${row.iconColor} text-sm`}></iconify-icon>}
                    <span className={`text-sm font-medium tracking-wide ${row.ml || ''}`}>{row.title}</span>
                  </div>
                  <span className={`text-[0.65rem] text-white/40 uppercase tracking-wider ${row.ml || ''}`}>{row.subtitle}</span>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto ml-16 sm:ml-0 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                <div className="text-lg font-medium tracking-tight text-white/90">{row.value}</div>
                <div className="text-[0.65rem] text-white/40 tracking-wider">{row.subValue}</div>
              </div>
            </div>
          ))}
        </div>

        {auditState.status !== 'idle' && (
          <div className="clip-slide px-8 py-5 border-b border-white/10 bg-rose-500/[0.03]" aria-live="polite">
            {auditState.status === 'running' ? (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-medium tracking-widest uppercase text-white/80">Audit running</div>
                  <p className="mt-1 text-[0.65rem] text-white/45 tracking-wide">
                    Reconciling {auditSnapshot.assetTotal} assets against {auditSnapshot.liabilityTotal} liabilities · {auditSnapshot.tokenScope}
                  </p>
                </div>
                <iconify-icon icon="solar:refresh-circle-linear" class="text-2xl text-rose-400 animate-spin"></iconify-icon>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium tracking-widest uppercase text-emerald-300">Audit passed</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.6rem] tracking-widest text-white/45">
                      {auditState.report.id}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.65rem] text-white/45 tracking-wide">
                    Debug root {auditState.report.merkleRoot} · Completed {auditState.report.completedAt} · Reserve ratio {auditSnapshot.reserveRatio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {auditState.report.checks.map((check) => (
                    <span key={check} className="rounded-sm border border-emerald-300/20 bg-emerald-300/5 px-2.5 py-1 text-[0.6rem] uppercase tracking-widest text-emerald-200/80">
                      {check}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer of table */}
        <div className="clip-slide delay-500 px-8 py-5 bg-[#080a0e] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3 max-w-sm">
            <iconify-icon icon="solar:stars-linear" class="text-xl text-white/50"></iconify-icon>
            <p className="text-[0.65rem] text-white/50 leading-relaxed tracking-wide">Market-leading transparency to inspire user confidence and create unparalleled trust in centralized trading products.</p>
          </div>
          <button
            type="button"
            onClick={handleRunAudit}
            disabled={auditState.status === 'running'}
            className="px-5 py-2 border border-white/20 rounded-sm text-white text-[0.65rem] tracking-widest uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-white"
            aria-label="Run proof of reserves audit"
          >
            {auditState.status === 'running' ? 'Running Audit' : auditState.status === 'complete' ? 'Run Again' : 'Run Audit'}
          </button>
        </div>
      </div>
    </section>
  );
}