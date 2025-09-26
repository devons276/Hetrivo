
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why don't you just buy the Bitcoin yourself and sell it on exchanges to keep all the savings?",
      answer: "It's a great question, and one we get often. The reason we can't simply buy the discounted BTC and resell it on public exchanges is due to strict agreements and limitations placed by the sellers. These sellers operate under non-disclosure and restricted resale terms that prohibit direct liquidation on public markets. This is to avoid triggering price movements, raising red flags with exchanges or regulators, or violating internal compliance rules.<br/><br/>Similarly, the sellers themselves are restricted. They offer discounted BTC in bulk for fast, private transactions, often tied to internal balance sheets, fund reallocations, or distressed asset strategies — but they cannot openly trade or liquidate on public markets without exposing their positions or risking audit scrutiny.<br/><br/>This is exactly why the private market exists, a controlled environment where these BTC blocks can change hands discreetly and securely, without the liquidity pressure or public traceability of exchanges. By reselling through this private channel, we maintain the trust of sellers, ensure legal compliance, and allow buyers like you to benefit from exclusive access and steep discounts."
    },
    {
      question: "How do you accept payments?",
      answer: "We accept USDT only. Due to the volatile nature of Bitcoin, accepting BTC could result in value fluctuations between the time you pay and when we process your order. By using USDT, which is a stablecoin, we ensure price stability and can deliver the expected amount of BTC without any unexpected loss in value."
    },
        {
      question: "Why can’t I pay using fiat currency?",
      answer: "We only accept USDT payments from either Binance or Kraken because it helps us confirm your wallet ownership as part of our KYC/AML checks. This ensures your payment complies with our internal anti-money laundering rules. Once your wallet is verified, we can only accept payments from that same wallet — so please make sure you send USDT from the account you’d like to use. We won’t be able to accept funds from or send funds to any other wallet after verification."
    },
    {
      question: "Do you serve customers outside the UK?",
      answer: "Yes, we serve customers worldwide. However, all customers must complete our KYC (Know Your Customer) and AML (Anti-Money Laundering) verification process before we can proceed with any deal. This is a necessary step to ensure compliance with international regulations and to maintain a secure and transparent service for all parties involved."
    },
    {
      question: "Is this legal?",
      answer: "Yes. All transactions are KYC/AML compliant and conducted with verified parties."
    },
    {
      question: "Where does the BTC come from?",
      answer: "We work with miners, distressed sellers, and institutions. Each purchase is thoroughly vetted."
    },
    {
      question: "What are the risks?",
      answer: "Like any investment, prices may change. But you're buying below spot, which creates a built-in buffer."
    },
    {
      question: "How fast is delivery?",
      answer: "Typically within 5–10 business days after funds clear, depending on tier."
    },
    {
      question: "Can I sell my BTC through you?",
      answer: "Yes. We may offer buyback options or resale to our investor pool."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Your Questions, Answered
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-600"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-black">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
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

export default FAQ;
