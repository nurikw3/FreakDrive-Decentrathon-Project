import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>FreakDrive Solution</span>
            </div>
            <h1 className="hero-title">
              Revolutionizing ride-hailing with <span className="highlight">AI-powered positioning</span> for a fairer marketplace
            </h1>
            <p className="hero-description">
              Advanced geotrack analytics and machine learning algorithms that optimize driver positioning, 
              predict demand patterns, and enhance safety for millions of rides.
            </p>
            
            <div className="hero-stats-inline">
              <div className="stat-inline">
                <span className="stat-number">1.2M+</span>
                <span className="stat-label">GPS points analyzed</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number">93.7%</span>
                <span className="stat-label">prediction accuracy</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number">46</span>
                <span className="stat-label">optimized zones</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#heatmap" className="btn btn-primary">FreakDrive demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;