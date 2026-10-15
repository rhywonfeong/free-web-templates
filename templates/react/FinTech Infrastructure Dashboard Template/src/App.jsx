import React, { memo, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

const initialTransactions = [
  {
    id: "tx-001",
    type: "SOL Receive",
    date: "May 21, 2026",
    amount: "$0.17",
    reference: "5ubb...ZqQV",
    icon: "simple-icons:solana",
    tone: "violet"
  }
];

const actionItems = [
  { id: "add", label: "Add Money", icon: "solar:add-circle-linear", hint: "Fund balance" },
  { id: "withdraw", label: "Withdraw", icon: "solar:paper-plane-linear", hint: "Send funds" },
  { id: "convert", label: "Convert", icon: "solar:refresh-circle-linear", hint: "Swap assets" },
  { id: "statement", label: "Card Statement", icon: "solar:card-linear", hint: "Export PDF" }
];

const networks = [
  { id: "solana", label: "Solana", icon: "simple-icons:solana", address: "pilaSoL7kEfx92QAa88Vb7ZqQV" },
  { id: "evm", label: "EVM", icon: "simple-icons:base", address: "0x7134d3dC9Bf12844dCae91B" }
];

const navItems = [
  { id: "home", icon: "solar:home-2-linear", label: "Home" },
  { id: "wallet", icon: "solar:card-2-linear", label: "Cards" },
  { id: "analytics", icon: "solar:chart-2-linear", label: "Analytics" },
  { id: "markets", icon: "solar:graph-up-linear", label: "Markets" },
  { id: "settings", icon: "solar:settings-linear", label: "Settings" }
];

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage may be unavailable in private contexts
    }
  }, [key, value]);

  return [value, setValue];
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function Card({ children, className = "" }) {
  return (
    <section
      className={clsx(
        "rounded-[2rem] border border-black/5 bg-white/85 shadow-[0_1rem_3rem_rgba(13,17,23,0.055)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </section>
  );
}

Card.Header = function CardHeader({ children, className = "" }) {
  return <div className={clsx("px-6 pt-6", className)}>{children}</div>;
};

Card.Body = function CardBody({ children, className = "" }) {
  return <div className={clsx("p-6", className)}>{children}</div>;
};

function Toast({ toast, onDismiss }) {
  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(onDismiss, 3200);
    return () => window.clearTimeout(timeout);
  }, [toast, onDismiss]);

  if (!toast) return null;

  const icon =
    toast.type === "error"
      ? "solar:danger-triangle-linear"
      : toast.type === "success"
        ? "solar:check-circle-linear"
        : "solar:info-circle-linear";

  return (
    <div
      role="status"
      className="fixed right-5 top-5 z-50 max-w-sm rounded-3xl border border-white/70 bg-white/90 p-4 shadow-[0_1.5rem_4rem_rgba(13,17,23,0.16)] backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <span
          className={clsx(
            "grid size-10 shrink-0 place-items-center rounded-2xl",
            toast.type === "error" ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600"
          )}
        >
          <iconify-icon icon={icon} style={{ fontSize: "1.35rem" }} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#0D1117]">{toast.title}</p>
          <p className="mt-1 text-xs leading-5 text-black/55">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="rounded-full p-1 text-black/35 transition hover:bg-black/5 hover:text-black"
        >
          <iconify-icon icon="solar:close-circle-linear" />
        </button>
      </div>
    </div>
  );
}

function WalletSummaryCard({ balance }) {
  return (
    <Card>
      <Card.Body>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-black/[0.035] text-[#0D1117]">
            <iconify-icon icon="solar:wallet-money-linear" style={{ fontSize: "1.35rem" }} />
          </span>
          <p className="text-sm font-medium text-[#0D1117]">Wallet</p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-medium text-black/40">Total Balance</p>
          <p className="mt-3 text-4xl font-medium tracking-tight text-[#0D1117]">{money(balance)}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

function CardBalanceCard({ onTopUp }) {
  return (
    <Card>
      <Card.Body>
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-black/[0.035] text-[#0D1117]">
            <iconify-icon icon="solar:card-2-linear" style={{ fontSize: "1.35rem" }} />
          </span>
          <p className="text-sm font-medium text-[#0D1117]">Card Balance</p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-medium text-black/40">Spending Power Left</p>
          <p className="mt-3 text-4xl font-medium tracking-tight text-[#0D1117]">$0.00</p>
        </div>

        <button
          type="button"
          onClick={onTopUp}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0D1117] px-5 py-3 text-xs font-medium text-white shadow-[0_1rem_2rem_rgba(13,17,23,0.14)] transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-black/10"
        >
          <iconify-icon icon="solar:add-circle-linear" />
          Top Up
        </button>
      </Card.Body>
    </Card>
  );
}

function NetworkAddressCard({ onCopy }) {
  const [network, setNetwork] = useLocalStorage("pila-network", "solana");
  const selected = networks.find((item) => item.id === network) || networks[0];

  return (
    <Card>
      <Card.Body>
        <div className="flex rounded-full border border-black/5 bg-black/[0.035] p-1">
          {networks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setNetwork(item.id)}
              className={clsx(
                "flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition",
                network === item.id ? "bg-white text-[#0D1117] shadow-sm" : "text-black/42 hover:text-black"
              )}
            >
              <iconify-icon icon={item.icon} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-medium text-black/40">{selected.label} Wallet Address</p>
          <div className="mt-3 rounded-[1.35rem] border border-black/5 bg-[#FAFAF8] p-4">
            <p className="truncate font-mono text-sm text-[#0D1117] blur-[1.2px]" aria-label={`${selected.label} wallet address`}>
              {selected.address}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onCopy(selected.address, `${selected.label} address copied`)}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-xs font-medium text-black/55 transition hover:-translate-y-0.5 hover:text-[#0D1117] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500/15"
          >
            <iconify-icon icon="solar:copy-linear" />
            Copy
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

function LeftPane({ balance, onTopUp, onCopy }) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-8">
      <WalletSummaryCard balance={balance} />
      <CardBalanceCard onTopUp={onTopUp} />
      <NetworkAddressCard onCopy={onCopy} />
    </aside>
  );
}

const AssetCard = memo(function AssetCard() {
  return (
    <Card className="h-[19rem] overflow-hidden">
      <div className="relative h-full">
        <div className="absolute -right-16 -top-16 size-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-20 left-10 size-56 rounded-full bg-blue-500/10 blur-3xl" />

        <Card.Body className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-full border border-black/5 bg-[#FAFAF8] text-[#0D1117] shadow-inner">
                <iconify-icon icon="solar:dollar-minimalistic-linear" style={{ fontSize: "1.8rem" }} />
              </span>
              <div>
                <p className="text-lg font-medium tracking-tight text-[#0D1117]">USD Coin</p>
                <p className="mt-1 text-sm text-black/42">0.99968 USDC</p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-[#FAFAF8] px-4 py-3 text-right">
              <p className="text-2xl font-medium tracking-tight text-[#0D1117]">$1</p>
              <p className="mt-1 text-xs font-medium text-emerald-600">+0.01%</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18rem] text-black/35">Primary asset</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/[0.045]">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-black/38">
              <span>Stablecoin treasury</span>
              <span>Live</span>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
});

function ActionTiles({ onSelect }) {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {actionItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className="group rounded-[1.45rem] border border-black/5 bg-[#FAFAF8] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-white hover:shadow-[0_1rem_2.5rem_rgba(13,17,23,0.08)] focus:outline-none focus:ring-4 focus:ring-blue-500/15"
        >
          <span className="grid size-10 place-items-center rounded-2xl bg-white text-black/55 shadow-sm transition group-hover:text-[#0D1117]">
            <iconify-icon icon={item.icon} style={{ fontSize: "1.25rem" }} />
          </span>
          <span className="mt-4 block text-sm font-medium text-[#0D1117]">{item.label}</span>
          <span className="mt-1 block text-xs leading-5 text-black/38">{item.hint}</span>
        </button>
      ))}
    </div>
  );
}

function ActivityStats() {
  const stats = [
    { label: "Spend transactions this week", value: "0" },
    { label: "Spent this week", value: "$0" }
  ];

  return (
    <Card className="mt-4 overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-black/5">
        {stats.map((stat) => (
          <div key={stat.label} className="p-5">
            <p className="text-xs leading-5 text-black/42">{stat.label}</p>
            <p className="mt-3 text-2xl font-medium tracking-tight text-[#0D1117]">{stat.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function RightOverviewPane({ onSelect }) {
  return (
    <div>
      <Card className="h-[19rem]">
        <Card.Body className="flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight text-[#0D1117]">Actions</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[0.68rem] font-medium text-blue-600">Quick</span>
          </div>
          <div className="min-h-0 flex-1">
            <ActionTiles onSelect={onSelect} />
          </div>
        </Card.Body>
      </Card>

      <ActivityStats />
    </div>
  );
}

function SkeletonPanel() {
  return (
    <Card className="min-h-[36rem]">
      <Card.Body>
        <div className="skeleton h-10 w-44 rounded-full" />
        <div className="mt-10 grid gap-4">
          <div className="skeleton h-24 rounded-[1.5rem]" />
          <div className="skeleton h-24 rounded-[1.5rem]" />
          <div className="skeleton h-32 rounded-[1.5rem]" />
        </div>
      </Card.Body>
    </Card>
  );
}

function WorkflowPanel({ action, balance, onClose, onSubmit, onCopy }) {
  const [loading, setLoading] = useState(true);
  const [method, setMethod] = useState("bank");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [fromAsset, setFromAsset] = useState("USDC");
  const [toAsset, setToAsset] = useState("NGN");
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setLoading(true);
    setErrors({});
    const timeout = window.setTimeout(() => setLoading(false), 520);
    return () => window.clearTimeout(timeout);
  }, [action]);

  const config = {
    add: {
      title: "Add money",
      subtitle: "Fund Pila through virtual accounts, crypto rails or card.",
      icon: "solar:add-circle-linear",
      button: "Confirm funding"
    },
    withdraw: {
      title: "Withdraw",
      subtitle: "Send funds to a bank account or supported wallet address.",
      icon: "solar:paper-plane-linear",
      button: "Send withdrawal"
    },
    convert: {
      title: "Convert",
      subtitle: "Move between stablecoins and fiat balances instantly.",
      icon: "solar:refresh-circle-linear",
      button: "Preview conversion"
    },
    statement: {
      title: "Card statement",
      subtitle: "Generate a clean PDF statement for cards and accounts.",
      icon: "solar:card-linear",
      button: "Generate statement"
    }
  }[action];

  const validate = () => {
    const next = {};
    const parsed = Number(amount);

    if (action !== "statement") {
      if (!amount || Number.isNaN(parsed)) next.amount = "Enter a valid amount.";
      else if (parsed < 5) next.amount = "Minimum amount is $5.";
    }

    if (action === "withdraw" && recipient.trim().length < 6) {
      next.recipient = "Enter a bank account, wallet address or beneficiary.";
    }

    if (action === "convert" && fromAsset === toAsset) {
      next.assets = "Choose two different balances.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setProcessing(true);
    await new Promise((resolve) => window.setTimeout(resolve, 850));

    onSubmit({
      action,
      amount: Number(amount || 0),
      method,
      recipient,
      fromAsset,
      toAsset
    });

    setProcessing(false);
    setAmount("");
    setRecipient("");
  };

  if (loading) return <SkeletonPanel />;

  const methodOptions = [
    { id: "bank", label: "Virtual account", icon: "solar:banknote-2-linear" },
    { id: "crypto", label: "Crypto rail", icon: "solar:planet-3-linear" },
    { id: "card", label: "Card", icon: "solar:card-linear" }
  ];

  return (
    <Card className="relative min-h-[36rem] overflow-hidden">
      <div className="absolute -right-16 -top-20 size-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 left-16 size-56 rounded-full bg-emerald-400/10 blur-3xl" />
      <Card.Body className="relative">
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0D1117] text-white shadow-[0_1rem_2rem_rgba(13,17,23,0.16)]">
              <iconify-icon icon={config.icon} style={{ fontSize: "1.45rem" }} />
            </span>
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-[#0D1117]">{config.title}</h2>
              <p className="mt-2 text-sm leading-6 text-black/50">{config.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Return to overview"
            className="grid size-10 shrink-0 place-items-center rounded-full text-black/35 transition hover:bg-black/5 hover:text-black"
          >
            <iconify-icon icon="solar:close-circle-linear" style={{ fontSize: "1.35rem" }} />
          </button>
        </div>

        <form onSubmit={submit} className="mt-8 grid gap-5">
          {action !== "statement" && (
            <>
              <div>
                <label htmlFor="amount" className="text-xs font-medium text-black/50">
                  Amount
                </label>
                <div
                  className={clsx(
                    "mt-2 flex items-center rounded-[1.5rem] border bg-white px-5 py-4 transition",
                    errors.amount ? "border-red-300" : "border-black/5 focus-within:border-blue-500/50"
                  )}
                >
                  <span className="text-2xl font-medium tracking-tight text-black/35">$</span>
                  <input
                    id="amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    inputMode="decimal"
                    placeholder="0.00"
                    className="ml-3 w-full bg-transparent text-3xl font-medium tracking-tight text-[#0D1117] outline-none placeholder:text-black/20"
                  />
                </div>
                {errors.amount && <p className="mt-2 text-xs text-red-500">{errors.amount}</p>}
              </div>

              <div className="grid gap-3">
                {methodOptions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMethod(item.id)}
                    className={clsx(
                      "rounded-[1.4rem] border p-4 text-left transition hover:-translate-y-0.5",
                      method === item.id ? "border-blue-500/40 bg-blue-50/70" : "border-black/5 bg-white hover:bg-[#FAFAF8]"
                    )}
                  >
                    <iconify-icon icon={item.icon} style={{ fontSize: "1.35rem" }} />
                    <span className="mt-3 block text-xs font-medium text-[#0D1117]">{item.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {action === "add" && (
            <div className="rounded-[1.5rem] border border-black/5 bg-[#FAFAF8] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-black/45">USD virtual account</p>
                  <p className="mt-1 text-sm font-medium text-[#0D1117]">PILA GLOBAL FINANCE LTD</p>
                  <p className="mt-1 text-xs text-black/45">Bank: Pila Settlement Bank · Account: 0118842091</p>
                </div>
                <button
                  type="button"
                  onClick={() => onCopy("0118842091", "Virtual account copied")}
                  className="grid size-10 place-items-center rounded-full bg-white text-black/50 transition hover:text-[#0D1117]"
                  aria-label="Copy virtual account"
                >
                  <iconify-icon icon="solar:copy-linear" />
                </button>
              </div>
            </div>
          )}

          {action === "withdraw" && (
            <div>
              <label htmlFor="recipient" className="text-xs font-medium text-black/50">
                Recipient
              </label>
              <input
                id="recipient"
                value={recipient}
                onChange={(event) => setRecipient(event.target.value)}
                placeholder="Bank account, Stellar address, Base address..."
                className={clsx(
                  "mt-2 w-full rounded-[1.5rem] border bg-white px-5 py-4 text-sm text-[#0D1117] outline-none transition placeholder:text-black/25",
                  errors.recipient ? "border-red-300" : "border-black/5 focus:border-blue-500/50"
                )}
              />
              {errors.recipient && <p className="mt-2 text-xs text-red-500">{errors.recipient}</p>}
            </div>
          )}

          {action === "convert" && (
            <div>
              <div className="grid gap-4">
                <label className="grid gap-2 text-xs font-medium text-black/50">
                  From
                  <select
                    value={fromAsset}
                    onChange={(event) => setFromAsset(event.target.value)}
                    className="rounded-[1.3rem] border border-black/5 bg-white px-4 py-4 text-sm text-[#0D1117] outline-none focus:border-blue-500/50"
                  >
                    <option>USDC</option>
                    <option>USD</option>
                    <option>NGN</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </label>
                <label className="grid gap-2 text-xs font-medium text-black/50">
                  To
                  <select
                    value={toAsset}
                    onChange={(event) => setToAsset(event.target.value)}
                    className="rounded-[1.3rem] border border-black/5 bg-white px-4 py-4 text-sm text-[#0D1117] outline-none focus:border-blue-500/50"
                  >
                    <option>NGN</option>
                    <option>USD</option>
                    <option>USDC</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </label>
              </div>
              {errors.assets && <p className="mt-2 text-xs text-red-500">{errors.assets}</p>}
            </div>
          )}

          {action === "statement" && (
            <div className="grid gap-4">
              {["Pila Black Card", "USD Virtual Account", "NGN Virtual Account", "Crypto Treasury"].map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-3 rounded-[1.4rem] border border-black/5 bg-white p-4 transition hover:bg-[#FAFAF8]"
                >
                  <input type="checkbox" defaultChecked={item === "Pila Black Card"} className="size-4 accent-blue-500" />
                  <span className="text-sm font-medium text-[#0D1117]">{item}</span>
                </label>
              ))}
            </div>
          )}

          <div className="rounded-[1.5rem] border border-black/5 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-black/45">Available balance</p>
              <p className="text-sm font-medium text-[#0D1117]">{money(balance)}</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/[0.04]">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="flex items-center justify-center gap-2 rounded-[1.4rem] bg-[#0D1117] px-5 py-4 text-sm font-medium text-white shadow-[0_1rem_2.2rem_rgba(13,17,23,0.18)] transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-black/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {processing && <span className="spinner" />}
            {processing ? "Processing..." : config.button}
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}

function Transactions({ transactions, onCopy }) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-[#0D1117]">Transactions</h2>
        <button type="button" className="text-xs font-medium text-black/45 transition hover:text-[#0D1117]">
          View all
        </button>
      </div>

      <Card className="overflow-hidden shadow-[0_1rem_3rem_rgba(13,17,23,0.045)]">
        <div className="grid grid-cols-4 bg-[#F7F7F4] px-5 py-4 text-xs font-medium text-black/42">
          <span>Type</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Reference</span>
        </div>
        <div className="divide-y divide-black/5">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="grid grid-cols-4 items-center gap-3 px-5 py-5 text-sm transition hover:bg-[#FAFAF8]">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={clsx(
                    "grid size-10 shrink-0 place-items-center rounded-full",
                    transaction.tone === "green" && "bg-emerald-50 text-emerald-600",
                    transaction.tone === "blue" && "bg-blue-50 text-blue-600",
                    transaction.tone === "violet" && "bg-indigo-50 text-indigo-600",
                    transaction.tone === "gold" && "bg-amber-50 text-amber-600"
                  )}
                >
                  <iconify-icon icon={transaction.icon} />
                </span>
                <span className="truncate font-medium text-[#0D1117]">{transaction.type}</span>
              </div>
              <span className="text-black/45">{transaction.date}</span>
              <span className="font-medium text-[#0D1117]">{transaction.amount}</span>
              <button
                type="button"
                onClick={() => onCopy(transaction.reference, "Reference copied")}
                className="flex min-w-0 items-center gap-2 text-left text-black/45 transition hover:text-[#0D1117]"
              >
                <span className="truncate">{transaction.reference}</span>
                <iconify-icon icon="solar:copy-linear" />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-black/5 bg-white/85 p-2 shadow-[0_1rem_3rem_rgba(13,17,23,0.12)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-label={item.label}
            className={clsx(
              "grid size-12 place-items-center rounded-full transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20",
              active === item.id
                ? "bg-white text-[#0D1117] ring-2 ring-blue-500/70 shadow-lg"
                : "text-black/28 hover:bg-black/[0.04] hover:text-[#0D1117]"
            )}
          >
            <iconify-icon icon={item.icon} style={{ fontSize: "1.35rem" }} />
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  const [balance, setBalance] = useLocalStorage("pila-balance", 1);
  const [transactions, setTransactions] = useLocalStorage("pila-transactions", initialTransactions);
  const [activeAction, setActiveAction] = useState("overview");
  const [toast, setToast] = useState(null);

  const isWorkflow = activeAction !== "overview";

  const copy = async (value, title = "Copied") => {
    try {
      await navigator.clipboard.writeText(value);
      setToast({ type: "success", title, message: "The detail is now available on your clipboard." });
    } catch {
      setToast({ type: "error", title: "Copy failed", message: "Clipboard access was blocked by your browser." });
    }
  };

  const submitWorkflow = ({ action, amount, method, recipient, fromAsset, toAsset }) => {
    const today = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date());

    if (action === "add") {
      setBalance((current) => Number((current + amount).toFixed(2)));
      setTransactions((current) => [
        {
          id: `tx-${Date.now()}`,
          type: method === "crypto" ? "Crypto Deposit" : method === "card" ? "Card Funding" : "USD Virtual Account",
          date: today,
          amount: money(amount),
          reference: method === "bank" ? "PILA...2091" : "FUND...88A2",
          icon: method === "crypto" ? "simple-icons:solana" : method === "card" ? "solar:card-linear" : "solar:banknote-2-linear",
          tone: "gold"
        },
        ...current
      ]);
      setToast({ type: "success", title: "Money added", message: `${money(amount)} was credited to your Pila balance.` });
    }

    if (action === "withdraw") {
      if (amount > balance) {
        setToast({ type: "error", title: "Insufficient balance", message: "Reduce the amount or add money before withdrawing." });
        return;
      }
      setBalance((current) => Number((current - amount).toFixed(2)));
      setTransactions((current) => [
        {
          id: `tx-${Date.now()}`,
          type: "Withdrawal",
          date: today,
          amount: `-${money(amount)}`,
          reference: recipient.length > 12 ? `${recipient.slice(0, 5)}...${recipient.slice(-4)}` : recipient,
          icon: "solar:paper-plane-linear",
          tone: "blue"
        },
        ...current
      ]);
      setToast({ type: "success", title: "Withdrawal sent", message: `${money(amount)} is being routed through Pila rails.` });
    }

    if (action === "convert") {
      setTransactions((current) => [
        {
          id: `tx-${Date.now()}`,
          type: `${fromAsset} → ${toAsset}`,
          date: today,
          amount: money(amount),
          reference: "FX...PILA",
          icon: "solar:refresh-circle-linear",
          tone: "green"
        },
        ...current
      ]);
      setToast({ type: "success", title: "Conversion booked", message: `A ${fromAsset} to ${toAsset} quote was prepared.` });
    }

    if (action === "statement") {
      setToast({ type: "success", title: "Statement generated", message: "Your PDF statement is ready for download." });
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FCFAF2] pb-32 text-[#0D1117]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_8%_-8%,rgba(212,168,67,0.34),transparent_34%),radial-gradient(circle_at_24%_4%,rgba(245,213,129,0.22),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.045),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.74),rgba(250,250,248,0.96)_58%,rgba(250,250,248,1))]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-10">
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[18rem_minmax(0,1fr)_22rem] xl:grid-cols-[19rem_minmax(0,1fr)_24rem]">
          <LeftPane balance={balance} onTopUp={() => setActiveAction("add")} onCopy={copy} />

          <section className="min-w-0 lg:border-x lg:border-black/[0.04] lg:px-6 xl:px-8">
            <header className="mb-8">
              <h1 className="text-5xl font-medium tracking-tight text-[#0D1117] sm:text-6xl">Welcome</h1>
            </header>

            <AssetCard />
            <Transactions transactions={transactions} onCopy={copy} />
          </section>

          <aside className="lg:pt-[6.85rem]">
            {isWorkflow ? (
              <WorkflowPanel
                action={activeAction}
                balance={balance}
                onClose={() => setActiveAction("overview")}
                onSubmit={submitWorkflow}
                onCopy={copy}
              />
            ) : (
              <RightOverviewPane onSelect={setActiveAction} />
            )}
          </aside>
        </section>
      </div>

      <BottomNav />
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </main>
  );
}