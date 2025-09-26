import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Enhanced Animated Background Elements - more dynamic movement and scaling */}
      <div className="absolute inset-0 w-full h-full">
        {/* Primary animated blobs with enhanced movement and scaling */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-400/40 to-blue-500/50 rounded-full blur-3xl animate-float-enhanced-1"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-l from-blue-400/40 to-gray-500/50 rounded-full blur-3xl animate-float-enhanced-2"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-gray-300/40 to-blue-600/50 rounded-full blur-2xl animate-float-enhanced-3"></div>
        
        {/* Additional blobs for more coverage */}
        <div className="absolute -top-20 right-10 w-64 h-64 bg-gradient-to-tr from-blue-300/35 to-gray-400/45 rounded-full blur-2xl animate-float-enhanced-4"></div>
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gray-600/35 to-blue-400/45 rounded-full blur-3xl animate-float-enhanced-5"></div>
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-blue-500/35 to-gray-300/45 rounded-full blur-2xl animate-float-enhanced-6"></div>
        
        {/* More blobs for extensive coverage */}
        <div className="absolute -bottom-10 right-20 w-48 h-48 bg-gradient-to-t from-gray-500/35 to-blue-300/45 rounded-full blur-2xl animate-float-enhanced-7"></div>
        <div className="absolute -top-10 left-20 w-64 h-64 bg-gradient-to-br from-blue-600/35 to-gray-400/45 rounded-full blur-3xl animate-float-enhanced-8"></div>
        
        {/* Additional blobs that move under header area */}
        <div className="absolute -top-32 left-1/3 w-72 h-72 bg-gradient-to-r from-gray-400/30 to-blue-500/40 rounded-full blur-3xl animate-float-enhanced-9"></div>
        <div className="absolute -top-24 right-1/3 w-60 h-60 bg-gradient-to-l from-blue-400/30 to-gray-500/40 rounded-full blur-2xl animate-float-enhanced-10"></div>
        <div className="absolute -top-16 left-10 w-54 h-54 bg-gradient-to-br from-gray-300/30 to-blue-600/40 rounded-full blur-2xl animate-float-enhanced-11"></div>
        <div className="absolute -top-28 right-10 w-68 h-68 bg-gradient-to-tr from-blue-300/30 to-gray-400/40 rounded-full blur-3xl animate-float-enhanced-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-black leading-tight md:text-8xl">
            Institutional Bitcoin Access at Scale
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-950">
            Exclusive Discounts Up to 20% Below Market
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-zinc-950">Access our institutional network to acquire Bitcoin at significantly discounted rates. </p>
          
          <button onClick={() => scrollToSection('start-now')} className="group bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-600/25 border border-blue-500/20">
            Get Started
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>;
};
export default Hero;