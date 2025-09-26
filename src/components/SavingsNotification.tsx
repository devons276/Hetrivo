
import React, { useState, useEffect } from 'react';
import { TrendingUp, X } from 'lucide-react';

const SavingsNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({ customer: '', amount: '', savings: '' });

  // Discount tiers data
  const discountTiers = [
    { min: 5000, max: 49999, discount: 5 },
    { min: 50000, max: 149999, discount: 10 },
    { min: 150000, max: 499999, discount: 15 },
    { min: 500000, max: Infinity, discount: 20 }
  ];

  // Generate random customer names
  const customerNames = [
    'Sarah M.', 'David K.', 'Emma L.', 'James P.', 'Sophie T.',
    'Michael R.', 'Charlotte B.', 'Oliver H.', 'Amelia C.', 'Harry W.',
    'Isabella F.', 'George S.', 'Ava N.', 'Thomas G.', 'Mia D.',
    'Jack A.', 'Grace E.', 'William J.', 'Lily R.', 'Alexander M.',
    'Chloe V.', 'Benjamin L.', 'Ella K.', 'Lucas H.', 'Scarlett P.',
    'Henry T.', 'Zoe B.', 'Samuel C.', 'Poppy W.', 'Daniel F.'
  ];

  const generateRandomNotification = () => {
    const randomCustomer = customerNames[Math.floor(Math.random() * customerNames.length)];
    const randomTier = discountTiers[Math.floor(Math.random() * discountTiers.length)];
    
    // Handle the infinity case for the highest tier by setting a reasonable cap
    const maxAmount = randomTier.max === Infinity ? 1000000 : randomTier.max;
    const randomAmount = Math.floor(Math.random() * (maxAmount - randomTier.min + 1)) + randomTier.min;
    const savings = Math.floor((randomAmount * randomTier.discount) / 100);

    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    };

    setNotification({
      customer: randomCustomer,
      amount: formatCurrency(randomAmount),
      savings: formatCurrency(savings)
    });
  };

  useEffect(() => {
    const showNotification = () => {
      generateRandomNotification();
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 9000);
    };

    // Random interval between 10 seconds and 3 minutes 30 seconds (10000ms to 210000ms)
    const getRandomInterval = () => Math.floor(Math.random() * (210000 - 10000 + 1)) + 10000;

    const scheduleNext = () => {
      setTimeout(() => {
        showNotification();
        scheduleNext();
      }, getRandomInterval());
    };

    // Initial delay
    setTimeout(() => {
      showNotification();
      scheduleNext();
    }, getRandomInterval());

  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900 font-medium">
              {notification.customer} just saved {notification.savings} by investing {notification.amount}!
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Join thousands of smart investors
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingsNotification;
