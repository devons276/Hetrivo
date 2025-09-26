
export interface CountryCode {
  code: string;
  name: string;
  flag: string;
  maxLength: number;
  placeholder: string;
}

export const phoneCountries: CountryCode[] = [
  { code: '+1', name: 'United States', flag: '🇺🇸', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+1', name: 'Canada', flag: '🇨🇦', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+33', name: 'France', flag: '🇫🇷', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+49', name: 'Germany', flag: '🇩🇪', maxLength: 11, placeholder: 'xxxxxxxxxxx' },
  { code: '+39', name: 'Italy', flag: '🇮🇹', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+34', name: 'Spain', flag: '🇪🇸', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+43', name: 'Austria', flag: '🇦🇹', maxLength: 11, placeholder: 'xxxxxxxxxxx' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+47', name: 'Norway', flag: '🇳🇴', maxLength: 8, placeholder: 'xxxxxxxx' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰', maxLength: 8, placeholder: 'xxxxxxxx' },
  { code: '+358', name: 'Finland', flag: '🇫🇮', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+48', name: 'Poland', flag: '🇵🇱', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+61', name: 'Australia', flag: '🇦🇺', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+1', name: 'New Zealand', flag: '🇳🇿', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+81', name: 'Japan', flag: '🇯🇵', maxLength: 11, placeholder: 'xxxxxxxxxxx' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷', maxLength: 11, placeholder: 'xxxxxxxxxxx' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬', maxLength: 8, placeholder: 'xxxxxxxx' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰', maxLength: 8, placeholder: 'xxxxxxxx' },
  { code: '+86', name: 'China', flag: '🇨🇳', maxLength: 11, placeholder: 'xxxxxxxxxxx' },
  { code: '+91', name: 'India', flag: '🇮🇳', maxLength: 10, placeholder: 'xxxxxxxxxx' },
  { code: '+971', name: 'UAE', flag: '🇦🇪', maxLength: 9, placeholder: 'xxxxxxxxx' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', maxLength: 9, placeholder: 'xxxxxxxxx' }
];
