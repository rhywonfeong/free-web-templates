import { useState, useEffect } from 'react';
import { MousePointer2, Settings, Zap, Pickaxe, Factory, Rocket, Banknote, Diamond, Atom, Crown, Globe } from 'lucide-react';

interface Upgrade {
  id: string;
  name: string;
  baseCost: number;
  costMultiplier: number;
  effectType: 'click' | 'auto';
  effectValue: number;
  icon: JSX.Element;
  description: string;
}

interface ClickEffect {
  id: number;
  x: number;
  y: number;
  amount: number;
}

const INITIAL_UPGRADES: Upgrade[] = [
  {
    id: 'cursor',
    name: 'Better Cursor',
    baseCost: 15,
    costMultiplier: 1.15,
    effectType: 'click',
    effectValue: 1,
    icon: <MousePointer2 size={24} />,
    description: '+1 Coin per click',
  },
  {
    id: 'auto',
    name: 'Auto Clicker',
    baseCost: 50,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 1,
    icon: <Settings size={24} />,
    description: '+1 Coin per second',
  },
  {
    id: 'pickaxe',
    name: 'Pickaxe',
    baseCost: 200,
    costMultiplier: 1.15,
    effectType: 'click',
    effectValue: 5,
    icon: <Pickaxe size={24} />,
    description: '+5 Coins per click',
  },
  {
    id: 'generator',
    name: 'Power Generator',
    baseCost: 500,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 10,
    icon: <Zap size={24} />,
    description: '+10 Coins per second',
  },
  {
    id: 'factory',
    name: 'Coin Factory',
    baseCost: 2500,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 50,
    icon: <Factory size={24} />,
    description: '+50 Coins per second',
  },
  {
    id: 'rocket',
    name: 'Space Rocket',
    baseCost: 5000,
    costMultiplier: 1.15,
    effectType: 'click',
    effectValue: 25,
    icon: <Rocket size={24} />,
    description: '+25 Coins per click',
  },
  {
    id: 'bank',
    name: 'National Bank',
    baseCost: 15000,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 200,
    icon: <Banknote size={24} />,
    description: '+200 Coins per second',
  },
  {
    id: 'diamond',
    name: 'Diamond Hands',
    baseCost: 50000,
    costMultiplier: 1.15,
    effectType: 'click',
    effectValue: 100,
    icon: <Diamond size={24} />,
    description: '+100 Coins per click',
  },
  {
    id: 'atom',
    name: 'Quantum Coin',
    baseCost: 200000,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 1000,
    icon: <Atom size={24} />,
    description: '+1,000 Coins per second',
  },
  {
    id: 'crown',
    name: 'King\'s Crown',
    baseCost: 1000000,
    costMultiplier: 1.15,
    effectType: 'click',
    effectValue: 500,
    icon: <Crown size={24} />,
    description: '+500 Coins per click',
  },
  {
    id: 'portal',
    name: 'Dimension Portal',
    baseCost: 5000000,
    costMultiplier: 1.15,
    effectType: 'auto',
    effectValue: 5000,
    icon: <Globe size={24} />,
    description: '+5,000 Coins per second',
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoRate, setAutoRate] = useState(0);
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [clicked, setClicked] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);

  // Auto-clicker effect
  useEffect(() => {
    if (autoRate === 0) return;
    const interval = setInterval(() => {
      setScore((prev) => prev + autoRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoRate]);

  const handleMainClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setScore((prev) => prev + clickPower);
    setClicked(true);
    setTimeout(() => setClicked(false), 50);

    let x = e.clientX;
    let y = e.clientY;

    if (x === 0 && y === 0 && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const newEffect = {
      id: Date.now() + Math.random(),
      x,
      y,
      amount: clickPower,
    };
    
    setClickEffects((prev) => [...prev, newEffect]);
    
    setTimeout(() => {
      setClickEffects((prev) => prev.filter((effect) => effect.id !== newEffect.id));
    }, 1000);
  };

  const getUpgradeCost = (upgrade: Upgrade) => {
    const count = inventory[upgrade.id] || 0;
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, count));
  };

  const buyUpgrade = (upgrade: Upgrade) => {
    const cost = getUpgradeCost(upgrade);
    if (score >= cost) {
      setScore((prev) => prev - cost);
      setInventory((prev) => ({
        ...prev,
        [upgrade.id]: (prev[upgrade.id] || 0) + 1,
      }));

      if (upgrade.effectType === 'click') {
        setClickPower((prev) => prev + upgrade.effectValue);
      } else if (upgrade.effectType === 'auto') {
        setAutoRate((prev) => prev + upgrade.effectValue);
      }
    }
  };

  return (
    <div className="game-container">
      <header className="game-header">
        <h1>Coin Clicker</h1>
        <div className="stats">
          <div className="stat-box">
            <span className="stat-label">Coins</span>
            <span className="stat-value">{Math.floor(score).toLocaleString()}</span>
          </div>
          <div className="stat-row">
            <span className="stat-small">{clickPower} per click</span>
            <span className="stat-small">{autoRate} per second</span>
          </div>
        </div>
      </header>

      <main className="game-main">
        <div className="click-area">
          <button 
            className={`main-coin ${clicked ? 'clicked' : ''}`}
            onClick={handleMainClick}
            aria-label="Click for coins"
          >
            <div className="coin-inner">
              <span className="coin-symbol">₵</span>
            </div>
          </button>
        </div>

        <div className="store-area">
          <h2>Upgrades</h2>
          <div className="upgrades-list">
            {INITIAL_UPGRADES.map((upgrade) => {
              const cost = getUpgradeCost(upgrade);
              const count = inventory[upgrade.id] || 0;
              const canAfford = score >= cost;

              return (
                <button
                  key={upgrade.id}
                  className={`upgrade-card ${!canAfford ? 'disabled' : ''}`}
                  onClick={() => buyUpgrade(upgrade)}
                  disabled={!canAfford}
                >
                  <div className="upgrade-icon">{upgrade.icon}</div>
                  <div className="upgrade-info">
                    <div className="upgrade-header">
                      <h3>{upgrade.name}</h3>
                      <span className="upgrade-count">{count}</span>
                    </div>
                    <p className="upgrade-desc">{upgrade.description}</p>
                    <div className="upgrade-cost">
                      Cost: <strong>{cost.toLocaleString()}</strong>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="click-effect"
          style={{ left: effect.x, top: effect.y }}
        >
          +{effect.amount}
        </div>
      ))}
    </div>
  );
}

export default App;
