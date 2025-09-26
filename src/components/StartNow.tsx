
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import PhoneInput from './PhoneInput';

const StartNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+44',
    investmentRange: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('sales_enquiries')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          investment_range: formData.investmentRange
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your enquiry. Please try again.",
          variant: "destructive",
        });
      } else {
        console.log('Form submitted successfully');
        toast({
          title: "Success!",
          description: "Your enquiry has been submitted. We'll be in touch soon!",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '+44',
          investmentRange: ''
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({
      ...formData,
      phone
    });
  };

  return (
    <section id="start-now" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Get Discounted BTC Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This isn't a public exchange. Each opportunity is custom-sourced. Let's talk and get you access today.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Range
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select investment range</option>
                  <option value="5k-50k">£5,000 - £50,000</option>
                  <option value="50k-150k">£50,000 - £150,000</option>
                  <option value="150k-500k">£150,000 - £500,000</option>
                  <option value="500k-1m">£500,000 - £1,000,000</option>
                  <option value="1m+">£1,000,000+</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-300 hover:border-blue-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Submitting...' : 'Book a Call'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartNow;
