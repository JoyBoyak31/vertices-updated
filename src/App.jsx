import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/AboutPage';
import TokenomicsComponent from './components/TokenomicsPage';
import Roadmap from './components/RoadmapPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'tokenomics1':
        return <TokenomicsComponent />;
      case 'roadmap':
        return <Roadmap />; // Placeholder
      case 'contact':
        return <div>Contact page coming soon...</div>; // Placeholder
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;