import React from 'react';
import NetworkBackground from '../components/NetworkBackground.jsx';

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      <NetworkBackground />

     
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

     
      <div className="relative z-20">
        
        <nav className="flex items-center justify-between px-8 py-6">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-white text-2xl font-bold">GTBS</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              ABOUT
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              ECOSYSTEM
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              DEVELOPERS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              INSTITUTIONS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              DEVELOPMENT
            </a>
          </div>

          {/* Claim Button */}
          <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            CLAIM $GTBS
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              A Paradigm
            </span>
            <br />
            <span className="text-white">
              Shift for the
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Digital Economy
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              DOCUMENTATION
            </button>
            <button className="border-2 border-gray-400 text-white px-8 py-4 rounded-lg font-semibold hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              WHITEPAPER
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;