import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Manages the lifecycle and state machine of the energy tower.
 * States: IDLE -> CHARGING -> FIRING -> RECHARGING -> IDLE
 */
export function useTowerState() {
  const [phase, setPhase] = useState('IDLE');
  const [charge, setCharge] = useState(0);
  const [isManualOverride, setIsManualOverride] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  
  const cycleTimeoutRef = useRef(null);
  const chargeIntervalRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    if (chargeIntervalRef.current) clearInterval(chargeIntervalRef.current);
  }, []);

  const triggerFiringSequence = useCallback(() => {
    clearTimers();
    setPhase('FIRING');
    setCharge(100);
    setCycleCount(c => c + 1);
    
    // Hold FIRING state for 1 second
    cycleTimeoutRef.current = setTimeout(() => {
      setPhase('RECHARGING');
    }, 1200);
  }, [clearTimers]);

  useEffect(() => {
    if (isManualOverride) return;

    if (phase === 'IDLE') {
      setCharge(0);
      cycleTimeoutRef.current = setTimeout(() => {
        setPhase('CHARGING');
      }, 2000);
    } 
    
    else if (phase === 'CHARGING') {
      const chargeDuration = 4000; // 4 seconds to charge
      const startTime = Date.now();
      
      chargeIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / chargeDuration) * 100, 100);
        
        setCharge(progress);
        
        if (progress >= 100) {
          triggerFiringSequence();
        }
      }, 50); // Update at 20fps for smooth UI
    } 
    
    else if (phase === 'RECHARGING') {
      const cooldownDuration = 3000;
      const startTime = Date.now();
      
      chargeIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(100 - ((elapsed / cooldownDuration) * 100), 0);
        
        setCharge(remaining);
        
        if (remaining <= 0) {
          clearInterval(chargeIntervalRef.current);
          setPhase('IDLE');
        }
      }, 50);
    }

    return clearTimers;
  }, [phase, isManualOverride, triggerFiringSequence, clearTimers]);

  const toggleManualOverride = useCallback(() => {
    setIsManualOverride(prev => {
      const next = !prev;
      if (next) clearTimers();
      else if (phase === 'FIRING') setPhase('RECHARGING');
      return next;
    });
  }, [phase, clearTimers]);

  const forceFire = useCallback(() => {
    if (phase !== 'FIRING') triggerFiringSequence();
  }, [phase, triggerFiringSequence]);

  return {
    phase,
    charge,
    isManualOverride,
    cycleCount,
    toggleManualOverride,
    forceFire
  };
}