import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-container">
              <img src="/teamlogo.svg" alt="Freak&Geek" className="team-logo" />
              <div className="logo-text">
                <h2>FreakDrive</h2>
                <span className="logo-subtitle">from Freak&Geek • powered by inDrive</span>
              </div>
            </div>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#heatmap" className="nav-link">Heat Map</a>
            <a href="#technology" className="nav-link">Technology</a>
            <a href="#stats" className="nav-link">Results</a>
          </nav>

          <div className="header-actions">
            <a href="#heatmap" className="btn btn-secondary">View Demo</a>
            <a href="#heatmap" className="btn btn-primary">Get Started</a>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
