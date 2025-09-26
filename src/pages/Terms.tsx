import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const Terms = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Hetrivo services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Investment Services</h2>
            <p>
              Hetrivo provides access to discounted Bitcoin through institutional networks and verified sources. All investments 
              are subject to market risks and regulatory compliance requirements.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Eligibility</h2>
            <p>
              Our services are available to qualified investors who meet our KYC/AML requirements. Minimum investment thresholds apply 
              as outlined in our discount tier structure.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Risks and Disclaimers</h2>
            <p>
              Cryptocurrency investments carry significant risks including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Market volatility and potential loss of principal</li>
              <li>Regulatory changes affecting cryptocurrency markets</li>
              <li>Technical risks associated with digital assets</li>
              <li>Liquidity risks in secondary markets</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Compliance and Verification</h2>
            <p>
              All clients must complete our KYC process and provide accurate information. We reserve the right to request additional 
              documentation and to refuse service to any individual or entity.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Fees and Pricing</h2>
            <p>
              Discount rates are subject to availability and market conditions. Additional fees may apply for transactions, 
              transfers, or administrative services.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Limitation of Liability</h2>
            <p>Hetrivo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Privacy and Data Protection</h2>
            <p>
              We are committed to protecting your privacy and personal information in accordance with applicable data protection laws. 
              Please refer to our Privacy Policy for detailed information.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Modification of Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
              Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.</p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2024<br />
                <strong>Contact:</strong> For questions regarding these terms, please contact us through our official channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Terms;