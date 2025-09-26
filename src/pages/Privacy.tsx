
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal identification information (name, date of birth, nationality)</li>
              <li>Contact information (email address, phone number, postal address)</li>
              <li>Financial information (source of funds, investment capacity)</li>
              <li>Identity verification documents (passport, driver's license, utility bills)</li>
              <li>Transaction history and account activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Verify your identity and comply with KYC/AML requirements</li>
              <li>Process your investment transactions and provide our services</li>
              <li>Communicate with you about your account and our services</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Detect and prevent fraud and other illegal activities</li>
              <li>Improve our services and customer experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Regulatory authorities and law enforcement when required by law</li>
              <li>Financial institutions involved in processing transactions</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Restricted access to personal information on a need-to-know basis</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. 
              KYC information is typically retained for a minimum of 5 years after account closure.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Data portability where technically feasible</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to improve functionality and analyze usage. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new policy on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-black mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us through our 
              official channels provided on our website.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2024<br />
                <strong>Data Controller:</strong> Solace LLP. Company Registration Number: 000006659
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
