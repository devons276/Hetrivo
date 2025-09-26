
import React from 'react';
import { Users, Network, Bitcoin, Wallet, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Investor",
      description: "You invest with us"
    },
    {
      icon: Network,
      title: "Our Network",
      description: "We source from distressed sellers & institutions"
    },
    {
      icon: Bitcoin,
      title: "Discounted BTC",
      description: "Acquire Bitcoin 20% below spot"
    },
    {
      icon: Wallet,
      title: "Your Wallet",
      description: "Receive discounted Bitcoin"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Your Advantage, Our Strategy
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We operate multiple purchase lines sourced from distressed sellers, institutional liquidation events, 
            OTC brokers, and mining firms. These connections allow us to legally and securely acquire Bitcoin 
            for up to 20% below spot price.
          </p>
          <p className="text-xl text-blue-600 mt-4 font-semibold">
            You invest — we give you access to that margin.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                <div className="text-center group flex-1">
                  <div className="mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {/* Improved Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-4">
                    <ArrowRight className="h-8 w-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
