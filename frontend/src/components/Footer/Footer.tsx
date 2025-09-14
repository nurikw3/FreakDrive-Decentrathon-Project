import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>FreakDrive</h3>
              <p className="brand-subtitle">Smart Driver Positioning</p>
              <p className="brand-description">
                AI-powered solution for optimizing driver positioning in ride-hailing services. 
                Built for the inDrive hackathon with cutting-edge machine learning technology.
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Solution</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#technology">Technology</a></li>
                  <li><a href="#stats">Results</a></li>
                  <li><a href="#demo">Live Demo</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Technology</h4>
                <ul>
                  <li><a href="#technology">Machine Learning</a></li>
                  <li><a href="#technology">Data Processing</a></li>
                  <li><a href="#technology">API Service</a></li>
                  <li><a href="#technology">Visualization</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Project</h4>
                <ul>
                  <li><a href="https://github.com/maussym/FreakDrive-Decentrathon-Project" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="#demo">Documentation</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="https://indrive.com" target="_blank" rel="noopener noreferrer">inDrive</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">1.2M+</span>
              <span className="stat-label">GPS Points</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">93.7%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">46</span>
              <span className="stat-label">Clusters</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5%</span>
              <span className="stat-label">Anomalies</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 FreakDrive. Made with 💚 for Hackathon. All rights reserved.
            </p>
            <div className="footer-tech">
              <span>Powered by</span>
              <img src="/logo--white.svg" alt="inDrive" className="indrive-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
