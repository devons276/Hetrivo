
import React from 'react';

const SecurityBanner = () => {
  const message = 'We urge all our customers to contact us only through our official channels. Please ensure that any website or email address you engage with uses hetrivo.com — no variations. There are fraudulent companies attempting to impersonate us.';

  return (
    <div className="w-full bg-red-600 text-white py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium px-4 flex-shrink-0">
          {message} • {message} • {message} • {message} • {message}
        </span>
        <span className="text-sm font-medium px-4 flex-shrink-0">
          {message} • {message} • {message} • {message} • {message}
        </span>
      </div>
    </div>
  );
};

export default SecurityBanner;
