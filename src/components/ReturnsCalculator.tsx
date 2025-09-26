
import React, { useState, useEffect } from 'react';
import { Calculator, PoundSterling } from 'lucide-react';

const ReturnsCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [savings, setSavings] = useState(0);

  // Discount tiers data
  const discountTiers = [
    { min: 5000, max: 49999, discount: 5 },
    { min: 50000, max: 149999, discount: 10 },
    { min: 150000, max: 499999, discount: 15 },
    { min: 500000, max: 1000000, discount: 20 }
  ];

  const calculateDiscount = (amount: number) => {
    const tier = discountTiers.find(tier => amount >= tier.min && amount <= tier.max);
    return tier ? tier.discount : 0;
  };

  useEffect(() => {
    const amount = parseFloat(investmentAmount) || 0;
    const discount = calculateDiscount(amount);
    const calculatedSavings = (amount * discount) / 100;
    
    setDiscountPercentage(discount);
    setSavings(calculatedSavings);
  }, [investmentAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setInvestmentAmount(value);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you could save with our tiered discount structure
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="investment-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount (£)
                </label>
                <div className="relative">
                  <PoundSterling className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="investment-amount"
                    value={investmentAmount}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your investment amount"
                  />
                </div>
              </div>

              {investmentAmount && parseFloat(investmentAmount) >= 5000 && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Investment Amount</h3>
                      <p className="text-2xl font-bold text-black">
                        {formatCurrency(parseFloat(investmentAmount))}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Discount Rate</h3>
                      <p className="text-2xl font-bold text-blue-600">
                        Up to {discountPercentage}%
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">Potential Savings</h3>
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(savings)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Your tier:</strong> {discountPercentage > 0 ? `Tier ${discountTiers.findIndex(tier => tier.discount === discountPercentage) + 1}` : 'Below minimum'} - 
                      Up to {discountPercentage}% discount on spot price
                    </p>
                  </div>
                </div>
              )}

              {investmentAmount && parseFloat(investmentAmount) < 5000 && parseFloat(investmentAmount) > 0 && (
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <p className="text-center text-yellow-800">
                    <strong>Minimum investment required:</strong> £5,000
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                * Discounts are estimates and may vary based on market conditions and availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnsCalculator;
