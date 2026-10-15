import React, { createContext, useState, useContext, useMemo } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [car] = useState({
    make: 'Volkswagen',
    model: 'Golf VII',
    year: 2018,
    vin: 'WVWZZZAUZJWXXXXX1',
    mileage: 87542,
    engine: '1.4 TSI',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'
  });

  const [stats] = useState({
    health: 92,
    fuelLevel: 65,
    avgConsumption: 8.4,
    monthlySpend: 4250,
    tires: { front: 2.3, rear: 2.4 },
    battery: 81,
    nextServiceKm: 2450
  });

  const [alerts] = useState([
    {
      id: 1,
      type: 'ai',
      title: 'Rear Silent Blocks',
      description: 'Based on 1,840 Golf VII owners in UA, 80% replace these between 80-95k km. You are at 87.5k.',
      severity: 'warning',
      action: 'Check at next service'
    },
    {
      id: 2,
      type: 'routine',
      title: 'Engine Oil & Filter',
      description: 'Due in 2,450 km or 2 months based on your driving patterns.',
      severity: 'info',
      action: 'Plan Service'
    },
    {
      id: 3,
      type: 'efficiency',
      title: 'Fuel Pattern Improved',
      description: 'Your weekly consumption dropped by 0.6 L/100km after smoother city driving.',
      severity: 'success',
      action: 'View driving insights'
    }
  ]);

  const [events] = useState([
    { id: 1, date: '2023-10-15', type: 'fuel', title: 'Refuel', cost: '2,450 ₴', location: 'OKKO, Kyiv', mileage: 87400 },
    { id: 2, date: '2023-09-22', type: 'service', title: 'Wiper Blades Replacement', cost: '850 ₴', location: 'Self', mileage: 86120 },
    { id: 3, date: '2023-05-10', type: 'repair', title: 'Brake Pads (Front)', cost: '4,200 ₴', location: 'VAG Service Kyiv', mileage: 81000, verified: true },
    { id: 4, date: '2022-12-05', type: 'service', title: 'Annual Maintenance (Oil, Filters)', cost: '5,800 ₴', location: 'VAG Service Kyiv', mileage: 75200, verified: true }
  ]);

  const quickActions = useMemo(
    () => [
      { id: 1, label: 'Book service', icon: 'solar:calendar-add-bold', accent: 'blue' },
      { id: 2, label: 'Scan VIN', icon: 'solar:qr-code-bold', accent: 'purple' },
      { id: 3, label: 'Add expense', icon: 'solar:wallet-money-bold', accent: 'emerald' },
      { id: 4, label: 'Export records', icon: 'solar:document-text-bold', accent: 'amber' },
    ],
    []
  );

  const plannerSummary = useMemo(
    () => ({
      urgent: 2,
      upcoming: 2,
      healthy: 2
    }),
    []
  );

  return (
    <DataContext.Provider value={{ car, stats, alerts, events, quickActions, plannerSummary }}>
      {children}
    </DataContext.Provider>
  );
};