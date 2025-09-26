
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const RiskDisclosure = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-components text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-black">Risk Disclosure</h1>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-2">Important Warning</h2>
            <p className="text-red-700">
              Cryptocurrency investments carry significant risks and may not be suitable for all investors. 
              You could lose all or a substantial portion of your investment.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Market Volatility Risk</h2>
            <p>
              Bitcoin and other cryptocurrencies are subject to extreme price volatility. Values can fluctuate dramatically 
              within short periods, potentially resulting in significant losses. Historical performance is not indicative of 
              future results.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Regulatory Risk</h2>
            <p>
              Cryptocurrency regulations are evolving and vary by jurisdiction. Changes in laws or regulations may:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Restrict or prohibit cryptocurrency trading or ownership</li>
              <li>Impose additional compliance requirements or taxes</li>
              <li>Affect the value and liquidity of digital assets</li>
              <li>Impact our ability to provide services</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Technology and Security Risks</h2>
            <p>Digital assets face unique technological risks including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cybersecurity threats and hacking attempts</li>
              <li>Technical failures or network disruptions</li>
              <li>Loss of private keys or wallet access</li>
              <li>Blockchain network vulnerabilities</li>
              <li>Smart contract risks and bugs</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Liquidity Risk</h2>
            <p>
              Cryptocurrency markets may experience periods of limited liquidity, making it difficult to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Execute transactions at desired prices</li>
              <li>Exit positions quickly during market stress</li>
              <li>Access funds when needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Counterparty Risk</h2>
            <p>
              Our services involve relationships with various counterparties including exchanges, custodians, and service providers. 
              The failure of any counterparty could result in losses or delays in accessing your assets.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Operational Risk</h2>
            <p>Risks related to our business operations include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>System failures or technical issues</li>
              <li>Human error in processing transactions</li>
              <li>Disruption to our business operations</li>
              <li>Changes to our service offerings or fee structure</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Tax Implications</h2>
            <p>
              Cryptocurrency transactions may have tax implications that vary by jurisdiction. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Understanding applicable tax laws</li>
              <li>Reporting transactions to tax authorities</li>
              <li>Paying any required taxes</li>
              <li>Maintaining adequate records</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. No Guarantee of Returns</h2>
            <p>
              Despite offering discounted Bitcoin, we provide no guarantee of:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Investment returns or profitability</li>
              <li>Protection against market losses</li>
              <li>Availability of discounted opportunities</li>
              <li>Specific discount rates or terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Suitability Assessment</h2>
            <p>
              Before investing, consider whether cryptocurrency investments are appropriate for your:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Financial situation and investment objectives</li>
              <li>Risk tolerance and investment experience</li>
              <li>Ability to sustain potential losses</li>
              <li>Investment time horizon</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Professional Advice</h2>
            <p>
              We strongly recommend consulting with qualified financial, legal, and tax advisors before making any investment decisions. 
              This disclosure does not constitute investment, financial, or legal advice.
            </p>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Acknowledgment Required</h3>
              <p className="text-yellow-700 text-sm">
                By using our services, you acknowledge that you have read, understood, and accepted all risks outlined in this disclosure. 
                You confirm that you are making an informed investment decision based on your own analysis and professional advice.
              </p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2024<br />
                <strong>Note:</strong> This risk disclosure is not exhaustive and additional risks may apply to your specific situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;
