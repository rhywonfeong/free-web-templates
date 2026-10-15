import React, { createContext, useContext, useState } from 'react';

const defaultState = {
  isPro: false,
  togglePro: () => {}
};

const SubscriptionContext = createContext(defaultState);

export const SubscriptionProvider = ({ children }) => {
  const [isPro, setIsPro] = useState(false);

  const togglePro = () => setIsPro(prev => !prev);

  return (
    <SubscriptionContext.Provider value={{ isPro, togglePro }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    return defaultState;
  }
  return context;
};