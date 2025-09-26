import React from 'react';
import { TrendingUp } from 'lucide-react';
const DiscountTiers = () => {
  const tiers = [{
    name: "Tier 1",
    range: "£5,000 – £49,999",
    discount: "Up to 5% off",
    popular: false
  }, {
    name: "Tier 2",
    range: "£50,000 – £149,999",
    discount: "Up to 10% off",
    popular: false
  }, {
    name: "Tier 3",
    range: "£150,000 – £499,999",
    discount: "Up to 15% off",
    popular: true
  }, {
    name: "Tier 4",
    range: "£500,000+",
    discount: "Up to 20% off",
    popular: false
  }];
  return <section id="discount-tiers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            The More You Invest, The More You Save
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discounts start at 5% off spot and scale up to 20% depending on your investment tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => <div key={index} className={`relative bg-white rounded-xl p-6 border-2 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${tier.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
              {tier.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>}
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.range}</p>
                <p className="text-2xl font-bold text-blue-600">
                  {tier.discount}
                </p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">* Discounts vary based on market availability and deal structure.</p>
        </div>
      </div>
    </section>;
};
export default DiscountTiers;