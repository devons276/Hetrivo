
import React from 'react';
import { Building2, Pickaxe, Scale, Handshake } from 'lucide-react';

const WhyPossible = () => {
  const reasons = [
    {
      icon: Building2,
      title: "OTC Liquidations",
      description: "Institutions offloading large BTC volumes fast."
    },
    {
      icon: Pickaxe,
      title: "Mining Partners",
      description: "Selling in bulk at a discount for quick cash flow."
    },
    {
      icon: Scale,
      title: "Bankruptcy & Seized Asset Sales",
      description: "Accessing BTC below market due to legal or emergency sell-offs."
    },
    {
      icon: Handshake,
      title: "Private Sellers",
      description: "Those willing to sell at a discount for fast transactions with no slippage."
    }
  ];

  return (
    <section id="why-its-possible" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Why Can We Offer Bitcoin Below Spot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We're not magicians — just well-connected. Our access comes from:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These aren't common retail opportunities — but when you pool your capital with us, they become available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyPossible;
