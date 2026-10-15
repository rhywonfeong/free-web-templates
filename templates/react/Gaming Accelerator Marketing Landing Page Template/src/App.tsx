const __auraToastCompatDispatch = (..._args: unknown[]) => undefined;
const __auraToastCompatApi = Object.assign(__auraToastCompatDispatch, {
  toast: __auraToastCompatDispatch,
  success: __auraToastCompatDispatch,
  error: __auraToastCompatDispatch,
  info: __auraToastCompatDispatch,
  warning: __auraToastCompatDispatch,
  dismiss: () => undefined,
});
const toast = __auraToastCompatApi;

import React, { useState, useEffect, useMemo } from 'react';

// Interfaces for clean typing
interface Task {
  id: number;
  name: string;
  reward: number;
  progress: number;
  target: number;
  status: 'pending' | 'claimable' | 'completed';
  actionLabel: string;
}

interface Prize {
  id: number;
  name: string;
  tier: 'legendary' | 'rare' | 'common' | 'junk';
  iconType: 'time' | 'card' | 'coupon' | 'cdk' | 'sad';
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface WinningRecord {
  id: number;
  user: string;
  prize: string;
}

export default function App() {
  // --- STATE MANAGEMENT ---
  const [coins, setCoins] = useState<number>(30); // 初始赠送30个冰爽币，可供直接体验3次抽奖！
  const [accHours, setAccHours] = useState<number>(365); // User's total account hours
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [drawResult, setDrawResult] = useState<Prize[]>([]);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  // Real-time broadcast records
  const [tickerIndex, setTickerIndex] = useState<number>(0);
  const [records, setRecords] = useState<WinningRecord[]>([
    { id: 1, user: '极速先锋_99', prize: '30天 豪华月卡' },
    { id: 2, user: 'IceSpitfire', prize: '500小时 加速时长' },
    { id: 3, user: 'CSGO狂热粉', prize: 'Steam 随机游戏CDK' },
    { id: 4, user: 'AK_Gamer_冰', prize: '腾讯视频 月度会员' },
    { id: 5, user: '幻影车手', prize: '24小时 体验券' },
    { id: 6, user: '冰霜法师101', prize: '5元 加码优惠券' },
    { id: 7, user: '加速超群', prize: '500小时 加速时长' },
    { id: 8, user: '不卡顿的猫', prize: '腾讯视频 月度会员' },
  ]);

  // Task list state
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: '每日签到', reward: 1, progress: 0, target: 1, status: 'claimable', actionLabel: '立即签到' },
    { id: 2, name: '当日加速满 30 分钟', reward: 1, progress: 12, target: 30, status: 'pending', actionLabel: '前往加速' },
    { id: 3, name: '累计加速满 20 小时', reward: 5, progress: 8, target: 20, status: 'pending', actionLabel: '一键同步' },
    { id: 6, name: '累计加速满 50 小时', reward: 8, progress: 15, target: 50, status: 'pending', actionLabel: '一键同步' },
    { id: 7, name: '累计加速满 100 小时', reward: 10, progress: 15, target: 100, status: 'pending', actionLabel: '一键同步' },
    { id: 4, name: '分享活动页', reward: 10, progress: 0, target: 1, status: 'pending', actionLabel: '立即分享' },
    { id: 5, name: '邀请新用户注册', reward: 5, progress: 2, target: 5, status: 'pending', actionLabel: '复制邀请链接' },
  ]);

  // Packages list definition
  const packages = [
    { id: 1, hours: 600, originalPrice: 45, currentPrice: 29, bonusCoins: 0, unit: '0.048元/H', isHero: false, label: '日常体验款' },
    { id: 2, hours: 2000, originalPrice: 139, currentPrice: 89, bonusCoins: 10, unit: '0.044元/H', isHero: true, label: '夏季爆款·省钱主推' },
    { id: 3, hours: 5000, originalPrice: 329, currentPrice: 199, bonusCoins: 10, unit: '0.039元/H', isHero: false, label: '发烧玩家首选' },
    { id: 4, hours: 10000, originalPrice: 619, currentPrice: 349, bonusCoins: 20, unit: '0.034元/H', isHero: false, label: '无限加速不限时' },
  ];

  // Prize pool with realistic weights
  const prizePool: Prize[] = [
    { id: 1, name: '500小时 加速时长', tier: 'legendary', iconType: 'time' },
    { id: 2, name: '30天 豪华月卡', tier: 'legendary', iconType: 'card' },
    { id: 3, name: '腾讯视频 月度会员', tier: 'rare', iconType: 'cdk' },
    { id: 4, name: 'Steam 随机游戏CDK', tier: 'rare', iconType: 'cdk' },
    { id: 5, name: '5元 加码优惠券', tier: 'common', iconType: 'coupon' },
    { id: 6, name: '24小时 体验券', tier: 'common', iconType: 'time' },
    { id: 7, name: '1小时 闪电卡', tier: 'common', iconType: 'time' },
    { id: 8, name: '谢谢参与 (回赠冰能)', tier: 'junk', iconType: 'sad' },
  ];

  // --- AUTO ROTATING TICKER FOR WINNING RECORDS ---
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % records.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [records.length]);

  // --- TOAST ALERTS SYSTEM ---
  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // --- INTERACTIVE MISSION INTERACTIONS ---
  const handleTaskAction = (task: Task) => {
    if (task.status === 'completed') return;

    if (task.status === 'claimable') {
      // Claim reward coins
      setCoins((prev) => prev + task.reward);
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, progress: t.target, status: 'completed' } : t))
      );
      addToast(`成功领取 ${task.reward} 个冰爽币！`, 'success');
      return;
    }

    // Simulate different interactions based on task
    if (task.id === 2) {
      // Simulate "Go accelerate"
      setTasks((prev) =>
        prev.map((t) =>
          t.id === 2
            ? { ...t, progress: t.target, status: 'claimable', actionLabel: '领取奖励' }
            : t
        )
      );
      addToast('加速器启动中！已为您加速满30分钟', 'success');
    } else if (task.id === 3) {
      // Simulate "Sync speed-up logs"
      setTasks((prev) =>
        prev.map((t) =>
          t.id === 3
            ? { ...t, progress: t.target, status: 'claimable', actionLabel: '领取奖励' }
            : t
        )
      );
      addToast('累计加速时长已同步！达成20小时目标', 'success');
    } else if (task.id === 6) {
      // Simulate "Sync speed-up logs for 50 hours"
      setTasks((prev) =>
        prev.map((t) =>
          t.id === 6
            ? { ...t, progress: t.target, status: 'claimable', actionLabel: '领取奖励' }
            : t
        )
      );
      addToast('累计加速时长已同步！达成50小时目标', 'success');
    } else if (task.id === 7) {
      // Simulate "Sync speed-up logs for 100 hours"
      setTasks((prev) =>
        prev.map((t) =>
          t.id === 7
            ? { ...t, progress: t.target, status: 'claimable', actionLabel: '领取奖励' }
            : t
        )
      );
      addToast('累计加速时长已同步！达成100小时目标', 'success');
    } else if (task.id === 4) {
      // Simulate sharing
      setCoins((prev) => prev + task.reward);
      setTasks((prev) =>
        prev.map((t) => (t.id === 4 ? { ...t, progress: t.target, status: 'completed' } : t))
      );
      addToast(`分享成功！获得 ${task.reward} 个冰爽币！`, 'success');
    } else if (task.id === 5) {
      // Simulate copying invitation link and updating invitation progress
      navigator.clipboard.writeText('https://ak.jsq.com/summer?invite=AK666');
      setTasks((prev) =>
        prev.map((t) => {
          if (t.id === 5) {
            const nextProgress = Math.min(t.progress + 1, t.target);
            const isCompletedNow = nextProgress === t.target;
            return {
              ...t,
              progress: nextProgress,
              status: isCompletedNow ? 'claimable' : 'pending',
              actionLabel: isCompletedNow ? '领取奖励' : '复制邀请链接',
            };
          }
          return t;
        })
      );
      addToast('专属邀请链接已复制到剪贴板！邀请进度 +1', 'success');
    }
  };

  // --- PACKAGE PURCHASING ---
  const handlePurchase = (pkg: typeof packages[0]) => {
    // Show a loading/confirm flow or straight purchase simulation
    addToast(`正在安全支付 ¥${pkg.currentPrice} ...`, 'success');
    
    setTimeout(() => {
      setAccHours((prev) => prev + pkg.hours);
      if (pkg.bonusCoins > 0) {
        setCoins((prev) => prev + pkg.bonusCoins);
        addToast(`支付成功！加速包已到账 (+${pkg.hours}H) 且额外获赠 ${pkg.bonusCoins} 个冰爽币！`, 'success');
      } else {
        addToast(`支付成功！加速包已到账 (+${pkg.hours}H)`, 'success');
      }
      
      // Real-time notification append
      const randomUser = 'AK_Gamer_' + Math.floor(100 + Math.random() * 900);
      setRecords((prev) => [
        { id: Date.now(), user: randomUser, prize: `购买 ${pkg.hours}H 套餐成功` },
        ...prev,
      ]);
    }, 1200);
  };

  // --- LUCKY DRAW SYSTEM (GACHA) ---
  const handleDraw = (count: number) => {
    const cost = count * 10;
    if (coins < cost) {
      addToast('冰爽币余额不足！做任务攒币或购买套餐可获得', 'error');
      return;
    }

    setCoins((prev) => prev - cost);
    setIsSpinning(true);

    // Simulate 1.2s spin animation
    setTimeout(() => {
      setIsSpinning(false);
      
      const results: Prize[] = [];
      for (let i = 0; i < count; i++) {
        // Weighted probability logic
        const rand = Math.random() * 100;
        let drawnPrize: Prize;

        if (rand < 2) {
          // 2% chance for Legendary 500H
          drawnPrize = prizePool[0];
        } else if (rand < 6) {
          // 4% chance for Legendary 30D Month Card
          drawnPrize = prizePool[1];
        } else if (rand < 15) {
          // 9% chance for Rare CDKs
          drawnPrize = Math.random() > 0.5 ? prizePool[2] : prizePool[3];
        } else if (rand < 40) {
          // 25% chance for Common Coupons
          drawnPrize = prizePool[4];
        } else if (rand < 75) {
          // 35% chance for Common trial tickets
          drawnPrize = Math.random() > 0.5 ? prizePool[5] : prizePool[6];
        } else {
          // 25% chance for Junk / Thank you
          drawnPrize = prizePool[7];
        }
        results.push(drawnPrize);

        // If hours or time is drawn, apply to account in real-time
        if (drawnPrize.id === 1) setAccHours((prev) => prev + 500);
        if (drawnPrize.id === 6) setAccHours((prev) => prev + 24);
        if (drawnPrize.id === 7) setAccHours((prev) => prev + 1);
      }

      setDrawResult(results);
      setShowResultModal(true);

      // Append to record ticker if any legendary or rare prize is drawn
      results.forEach((prize) => {
        if (prize.tier === 'legendary' || prize.tier === 'rare') {
          setRecords((prev) => [
            { id: Date.now() + Math.random(), user: '我', prize: prize.name },
            ...prev,
          ]);
        }
      });
    }, 1200);
  };

  // --- SVG ICON RENDERER HELPER ---
  const renderSVGIcon = (type: 'time' | 'card' | 'coupon' | 'cdk' | 'sad') => {
    switch (type) {
      case 'time':
        return (
          <svg className="prize-pic-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M12 6V12L16 14" stroke="#4df3ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#0072ff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'card':
        return (
          <svg className="prize-pic-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="#8a2be2" strokeWidth="2" fill="rgba(138, 43, 226, 0.1)" />
            <path d="M2 10H22M6 14H10M14 14H18" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="7" r="1" fill="#ff00a0" />
          </svg>
        );
      case 'coupon':
        return (
          <svg className="prize-pic-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9V15C2 16.1 2.9 17 4 17H20C21.1 17 22 16.1 22 15V9C22 7.9 21.1 7 20 7H4C2.9 7 2 7.9 2 9Z" stroke="#ff00aa" strokeWidth="2" fill="rgba(255, 0, 170, 0.05)" />
            <path d="M9 7V17M15 7V17" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="4" cy="12" r="2" fill="#030816" stroke="#ff00aa" strokeWidth="1.5" />
            <circle cx="20" cy="12" r="2" fill="#030816" stroke="#ff00aa" strokeWidth="1.5" />
          </svg>
        );
      case 'cdk':
        return (
          <svg className="prize-pic-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="#ffbb00" strokeWidth="2" fill="rgba(255, 187, 0, 0.05)" />
            <path d="M7 12H17M12 7V17" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 7L17 17M17 7L7 17" stroke="rgba(255, 187, 0, 0.4)" strokeWidth="1" />
          </svg>
        );
      case 'sad':
        return (
          <svg className="prize-pic-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#5c6e8e" strokeWidth="2" />
            <path d="M8 14C9 15.5 10.5 16.5 12 16.5C13.5 16.5 15 15.5 16 14" stroke="#5c6e8e" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="10" r="1.5" fill="#5c6e8e" />
            <circle cx="15" cy="10" r="1.5" fill="#5c6e8e" />
          </svg>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Background elements */}
      <div className="speed-bg-overlay"></div>
      <div className="ice-crystal-decor ice-crystal-1"></div>
      <div className="ice-crystal-decor ice-crystal-2"></div>
      <div className="ice-crystal-decor ice-crystal-3"></div>

      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="logo-container">
          <div className="logo-ak">AK加速器</div>
          <div className="logo-badge">8月大促</div>
        </div>

        <div className="user-status-widget">
          <div className="user-info">
            <div className="user-avatar">AK</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>硬核玩家 #2841</span>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                当前可加速：<span style={{ color: 'var(--color-ice-blue)', fontWeight: 'bold' }}>{accHours}H</span>
              </span>
            </div>
          </div>

          <div className="coin-pill">
            <span className="coin-icon"></span>
            我的冰爽币: <span>{coins}</span>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (首屏 KV) */}
      <section className="hero-section">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="promo-tag">
              <span className="promo-tag-dot"></span>
              夏季大促 · 冰爽狂欢
              <span className="interact-badge speed">PC专属特惠</span>
            </div>
            
            <div className="hero-title-group">
              <h1 className="hero-title-main">
                夏季大促<br />
                <span>清凉加速</span>
              </h1>
              <p className="hero-title-sub">
                做任务攒<span className="hero-title-sub-highlight">冰爽币</span>，抽永久时长和惊喜周边好礼！
              </p>
            </div>

            <div className="hero-ctas">
              <button 
                className="btn-primary"
                onClick={() => {
                  const element = document.getElementById('mission-center');
                  element?.scrollIntoView({ behavior: 'smooth' });
                  addToast('已为您导航至任务中心！', 'success');
                }}
              >
                立即做任务
              </button>
              <button 
                className="btn-secondary"
                onClick={() => {
                  const element = document.getElementById('packages-area');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                查看超值套餐
              </button>
            </div>

            {/* Quick stats panel */}
            <div className="kv-stats-row">
              <div className="stat-item">
                <span className="stat-val">0.034元/H</span>
                <span className="stat-lbl">极限小时单价</span>
              </div>
              <div style={{ width: '1px', background: 'rgba(0,240,255,0.15)' }}></div>
              <div className="stat-item">
                <span className="stat-val">千款游戏</span>
                <span className="stat-lbl">冰点价格不限时</span>
              </div>
              <div style={{ width: '1px', background: 'rgba(0,240,255,0.15)' }}></div>
              <div className="stat-item">
                <span className="stat-val">100% 中奖</span>
                <span className="stat-lbl">冰晶座舱抽奖</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* Cool esports 3D core widget */}
            <div className="accelerator-3d-wrapper">
              <div className="engine-outer-ring">
                <div className="engine-inner-ring"></div>
              </div>
              
              <div className="core-device">
                <div className="core-inner-graphics">
                  {/* Embedded Gamepad Graphic represent speed */}
                  <svg className="gaming-controller-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="6" width="20" height="12" rx="4" fill="rgba(0, 240, 255, 0.05)" />
                    <path d="M6 12H10M8 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="15" cy="11" r="1" fill="currentColor" />
                    <circle cx="17" cy="13" r="1" fill="currentColor" />
                    <path d="M2 14C2 16 3 18 5 18H19C21 18 22 16 22 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span className="cyber-gauge">COLD SPEED PRO</span>
                  <div className="speed-energy-bars">
                    <span className="energy-bar active"></span>
                    <span className="energy-bar active"></span>
                    <span className="energy-bar active"></span>
                    <span className="energy-bar active"></span>
                    <span className="energy-bar active"></span>
                  </div>
                </div>
              </div>

              {/* Laser energy trails */}
              <div className="speed-beam beam-1"></div>
              <div className="speed-beam beam-2"></div>
              <div className="speed-beam beam-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION CENTER (任务中心) */}
      <section className="section-wrapper" id="mission-center">
        <div className="section-header">
          <div className="section-title-group">
            <h2 className="section-title-cn">
              任务中心
              <span className="interact-badge hot">极速攒币</span>
            </h2>
            <span className="section-title-en">Mission Center</span>
          </div>
          <p className="section-header-desc">
            每日完成轻量电竞挑战，极速囤积冰爽能量。每个任务赠送大量冰爽币，即刻开启抽奖！
          </p>
        </div>

        <div className="missions-grid">
          {tasks.map((task) => (
            <div className="mission-card" key={task.id}>
              <div className="mission-card-glow"></div>
              
              <div className="mission-reward-badge">
                奖励：<span>+{task.reward} 币</span>
              </div>

              <div className="mission-title">{task.name}</div>

              <div className="mission-progress-box">
                <div className="mission-progress-header">
                  <span>完成度</span>
                  <span className="mission-progress-val">
                    {task.progress}/{task.target}
                  </span>
                </div>
                <div className="mission-progress-bar">
                  <div 
                    className="mission-progress-fill" 
                    style={{ width: `${(task.progress / task.target) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button 
                className={`btn-mission ${task.status}`}
                onClick={() => handleTaskAction(task)}
                disabled={task.status === 'completed'}
              >
                {task.status === 'claimable' ? '领取币奖励' : task.status === 'completed' ? '已领取' : task.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PACKAGES AREA (套餐购买区) */}
      <section className="section-wrapper" id="packages-area">
        <div className="section-header">
          <div className="section-title-group">
            <h2 className="section-title-cn">
              特惠大促套餐
              <span className="interact-badge speed">极低单价</span>
            </h2>
            <span className="section-title-en">Super Accelerator Packages</span>
          </div>
          <p className="section-header-desc">
            夏季冰爽回馈。限时下单，立享超低每小时单价。购买主推及高端套餐更附带超多冰爽币赠送！
          </p>
        </div>

        <div className="packages-container">
          {packages.map((pkg) => (
            <div 
              className={`package-card ${pkg.isHero ? 'hero-package' : ''}`}
              key={pkg.id}
              onClick={() => handlePurchase(pkg)}
            >
              {pkg.isHero && <div className="hero-tag-badge">夏季主推</div>}

              <div className="package-header">
                <div className="package-hours">
                  {pkg.hours}<span>H</span>
                </div>
                <div className="package-label">{pkg.label}</div>
              </div>

              <div className="package-price-box">
                <div className="original-price">原价 ¥{pkg.originalPrice}</div>
                <div className="current-price">{pkg.currentPrice}</div>
                <div className="unit-cost">折合 {pkg.unit}</div>
              </div>

              <div className={`coin-bonus-badge ${pkg.isHero ? 'hero-bonus' : ''}`}>
                <span className="coin-icon" style={{ width: '14px', height: '14px' }}></span>
                {pkg.bonusCoins > 0 ? (
                  <span>
                    送 <span className="coin-bonus-num">{pkg.bonusCoins}</span> 个冰爽币
                  </span>
                ) : (
                  <span style={{ color: 'var(--color-text-gray)' }}>本款不送冰爽币</span>
                )}
              </div>

              <button className="btn-purchase" onClick={(e) => {
                e.stopPropagation();
                handlePurchase(pkg);
              }}>
                立即购买
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GACHA AREA (冰晶抽奖舱) */}
      <section className="section-wrapper" id="gacha-area">
        <div className="section-header">
          <div className="section-title-group">
            <h2 className="section-title-cn">
              冰晶抽奖舱
              <span className="interact-badge speed">100%中奖</span>
            </h2>
            <span className="section-title-en">Cryo Capsule Cabin</span>
          </div>
          <p className="section-header-desc">
            消耗 10 冰爽币即可进行 1 次极速抽奖。超多时长卡、游戏CDK、腾讯影音月度VIP直接发放到账户。
          </p>
        </div>

        <div className="gacha-layout">
          {/* Left Side: Interactive capsule machine */}
          <div className="gacha-cabin-container">
            <div className="gacha-cabin-header">
              <div className="cabin-title">
                <span className="cabin-badge-live"></span>
                极速扭蛋终端 EX-02
              </div>
              <div className="cabin-stats">
                我的余额: <span style={{ color: 'var(--color-ice-blue)', fontWeight: 800 }}>{coins} 币</span>
              </div>
            </div>

            {/* Simulated freezer glass window */}
            <div className={`gacha-window-glass ${isSpinning ? 'spinning' : ''}`}>
              <div className="freezer-glow"></div>
              
              {/* Spheres bouncing around inside */}
              <div className="gacha-spheres-container">
                <div className="gacha-sphere blue gacha-sphere-s1"></div>
                <div className="gacha-sphere cyan gacha-sphere-s2"></div>
                <div className="gacha-sphere purple gacha-sphere-s3"></div>
                <div className="gacha-sphere gold gacha-sphere-s4"></div>
                <div className="gacha-sphere blue gacha-sphere-s5"></div>
                <div className="gacha-sphere cyan gacha-sphere-s6"></div>
                <div className="gacha-sphere purple gacha-sphere-s7"></div>
              </div>

              {isSpinning && (
                <div style={{ zIndex: 50, color: '#00f0ff', fontWeight: 800, fontSize: '18px', textShadow: '0 0 10px rgba(0,240,255,0.6)' }}>
                  冰爽币溶解中...
                </div>
              )}
            </div>

            {/* Interactive Deck Buttons */}
            <div className="gacha-deck-row">
              <div className="gacha-btn-wrapper">
                <button 
                  className="btn-gacha draw-1"
                  disabled={isSpinning}
                  onClick={() => handleDraw(1)}
                >
                  {isSpinning ? '能量调配中' : '冰晶抽奖 1 次'}
                </button>
                <div className="gacha-btn-cost">
                  消耗 <span>10</span> 冰爽币
                </div>
              </div>
            </div>

            {/* Broadcast ticker underneath */}
            <div className="gacha-ticker-box">
              <div className="ticker-icon">LIVE BROADCAST:</div>
              <div className="ticker-text-wrapper">
                {records.map((rec, index) => (
                  <div 
                    className="ticker-item" 
                    key={rec.id}
                    style={{
                      opacity: index === tickerIndex ? 1 : 0,
                      transform: `translateY(${(index - tickerIndex) * 20}px)`,
                      transition: 'all 0.4s ease-in-out',
                      pointerEvents: 'none',
                    }}
                  >
                    恭喜玩家 <span className="ticker-user">{rec.user}</span> 斩获 <span className="ticker-prize">{rec.prize}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Prize display board */}
          <div className="gacha-rewards-board">
            <div className="rewards-board-title">
              <span>舱内当前奖品池</span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-gray)' }}>中奖概率透明透明</span>
            </div>

            <div className="prizes-grid">
              {prizePool.slice(0, 6).map((prize) => (
                <div className={`prize-item-box ${prize.tier}`} key={prize.id}>
                  {renderSVGIcon(prize.iconType)}
                  <div className="prize-title">{prize.name}</div>
                  <span className={`prize-tier t-${prize.tier}`}>
                    {prize.tier === 'legendary' ? '极冰至臻' : prize.tier === 'rare' ? '寒霜超凡' : '普通能量'}
                  </span>
                </div>
              ))}
              <div className="prize-item-box rare" style={{ gridColumn: 'span 1' }}>
                {renderSVGIcon('coupon')}
                <div className="prize-title">10元 满减优惠券</div>
                <span className="prize-tier t-rare">寒霜超凡</span>
              </div>
              <div className="prize-item-box common" style={{ gridColumn: 'span 1' }}>
                {renderSVGIcon('time')}
                <div className="prize-title">1小时 闪电卡</div>
                <span className="prize-tier t-common">普通能量</span>
              </div>
              <div className="prize-item-box junk" style={{ gridColumn: 'span 1' }}>
                {renderSVGIcon('sad')}
                <div className="prize-title">谢谢参与</div>
                <span className="prize-tier t-junk">回赠冰能</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & RULES SECTION (底部规则区) */}
      <footer className="footer-section">
        <div className="rules-container">
          <div className="rules-header">
            <span>活动参与细则</span>
            <span className="rules-header-line"></span>
          </div>

          <ul className="rules-list">
            <li>活动时间：2026年8月1日 00:00 至 2026年8月31日 23:59。</li>
            <li>冰爽币获取：通过每日签到、加速满分钟、累计时长、分享以及邀请新玩家注册获取；或者通过购买特惠套餐获赠。</li>
            <li>冰爽币清零：活动结束后未消耗的冰爽币将自动失效清零，请在2026年8月31日23:59前完成抽奖。</li>
            <li>奖品发放：抽中的加速时长直接累加到当前账户；影音月卡CDK、Steam CDKey请在【我的奖品】中复制激活码使用。</li>
            <li>套餐优惠：大促套餐为限定特价，购买后时长即刻生效且不限制游戏种类。</li>
            <li>作弊说明：若存在恶意刷号、作弊获取冰爽币行为，AK加速器有权收回奖励及限制账号参与活动。</li>
          </ul>

          <div className="copyright-box">
            <span>© 2026 AK加速器 冰爽夏季加速项目组. All Rights Reserved.</span>
            <div className="corp-links">
              <a href="#rules">服务协议</a>
              <a href="#rules">隐私政策</a>
              <a href="#rules">联系客服</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- GACHA RESULT MODAL POPUP --- */}
      {showResultModal && (
        <div className="gacha-modal-overlay">
          <div className="gacha-modal-content">
            <h3 className="gacha-modal-header">
              ❄️ 冰晶抽奖开启成功 ❄️
            </h3>
            
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '14px' }}>
              恭喜您！从极寒晶舱中提取出以下超能奖励：
            </p>

            <div className="result-rewards-flex">
              {drawResult.map((res, i) => (
                <div className={`reward-card-drawn ${res.tier === 'legendary' ? 'gold' : ''}`} key={i}>
                  {renderSVGIcon(res.iconType)}
                  <div className="drawn-name">{res.name}</div>
                  <span className={`drawn-tier-badge ${res.tier === 'legendary' ? 'gold' : res.tier === 'rare' ? 'purple' : res.tier === 'common' ? 'cyan' : 'gray'}`}>
                    {res.tier === 'legendary' ? '传奇' : res.tier === 'rare' ? '稀有' : res.tier === '普通' ? '普通' : '谢谢'}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-modal-close" onClick={() => setShowResultModal(false)}>
              冰爽收下
            </button>
          </div>
        </div>
      )}

      {/* --- TOASTS LAYER --- */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div className={`toast-item ${t.type}`} key={t.id}>
            <span className="toast-icon"></span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
