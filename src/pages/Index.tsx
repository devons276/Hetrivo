
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import DiscountTiers from '../components/DiscountTiers';
import ReturnsCalculator from '../components/ReturnsCalculator';
import Testimonials from '../components/Testimonials';
import WhyPossible from '../components/WhyPossible';
import StartNow from '../components/StartNow';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SecurityBanner from '../components/SecurityBanner';
import Footer from '../components/Footer';
import SavingsNotification from '../components/SavingsNotification';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <HowItWorks />
      <DiscountTiers />
      <ReturnsCalculator />
      <Testimonials />
      <WhyPossible />
      <StartNow />
      <FAQ />
      <Contact />
      <SecurityBanner />
      <Footer />
      <SavingsNotification />
    </div>
  );
};

export default Index;
