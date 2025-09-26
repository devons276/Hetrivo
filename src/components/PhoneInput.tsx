
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { phoneCountries, CountryCode } from '@/utils/phoneCountries';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  disabled = false,
  placeholder,
  required = false,
  id,
  name
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(phoneCountries[2]); // Default to UK
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    // Reset phone number when country changes
    onChange(country.code);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!inputValue.startsWith(selectedCountry.code)) {
      return; // Prevent removing country code
    }

    // Extract digits after country code
    const digitsAfterCode = inputValue.slice(selectedCountry.code.length).replace(/\D/g, '');

    // Limit to country's max length
    const limitedDigits = digitsAfterCode.slice(0, selectedCountry.maxLength);
    const newValue = selectedCountry.code + limitedDigits;
    onChange(newValue);
  };

  return (
    <div className="relative">
      <div className="flex w-full">
        {/* Country Code Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            disabled={disabled}
            className="flex items-center px-3 py-3 bg-white border border-gray-300 border-r-0 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px] justify-center"
          >
            <span className="mr-2">{selectedCountry.flag}</span>
            <span className="text-sm font-medium">{selectedCountry.code}</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto mt-1">
              {phoneCountries.map((country, index) => (
                <button
                  key={`${country.code}-${country.name}-${index}`}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full flex items-center px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                >
                  <span className="mr-3">{country.flag}</span>
                  <span className="flex-1 text-sm">{country.name}</span>
                  <span className="text-sm text-gray-500">{country.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Phone Number Input */}
        <input
          type="tel"
          id={id}
          name={name}
          value={value}
          onChange={handlePhoneChange}
          className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-r-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 min-w-0"
          placeholder={`${selectedCountry.code}${selectedCountry.placeholder}`}
          required={required}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
