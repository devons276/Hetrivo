import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const menuItems = [{
    label: 'How It Works',
    id: 'how-it-works'
  }, {
    label: 'Discount Tiers',
    id: 'discount-tiers'
  }, {
    label: 'Why It\'s Possible',
    id: 'why-its-possible'
  }, {
    label: 'Start Now',
    id: 'start-now'
  }, {
    label: 'FAQs',
    id: 'faqs'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/hetrivo-logo.png" alt="Hetrivo" className="h-14 w-auto" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Access exclusive Bitcoin discounts through our institutional network. 
              Invest smarter with discounts up to 20% below market price.
            </p>
            
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Navigation</h3>
            <nav className="space-y-2">
              {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  {item.label}
                </button>)}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Legal</h3>
            <nav className="space-y-2">
              <Link to="/terms" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/risk-disclosure" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Risk Disclosure
              </Link>
              <Link to="/compliance" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Compliance
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 Hetrivo is a trading name of Solace LLP. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              * Investment involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;