import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'target',
      title: 'Smart Clustering',
      description: 'Advanced DBSCAN and K-means algorithms identify optimal pickup zones with 94% accuracy',
      details: ['46 pickup clusters identified', 'Real-time zone optimization', 'Density-based analysis']
    },
    {
      icon: 'brain',
      title: 'AI-Powered Predictions',
      description: 'Random Forest model predicts demand patterns with exceptional precision',
      details: ['93.7% R² accuracy score', 'Real-time demand forecasting', 'Multi-feature analysis']
    },
    {
      icon: 'shield-alert',
      title: 'Anomaly Detection',
      description: 'Isolation Forest algorithm identifies unusual trip patterns for safety monitoring',
      details: ['5% anomaly detection rate', 'Safety pattern analysis', 'Automated alerts system']
    },
    {
      icon: 'database',
      title: 'Data Processing',
      description: 'Processes millions of GPS points to extract meaningful insights',
      details: ['1.2M+ GPS points analyzed', '94.3% data accuracy', 'Real-time processing']
    },
    {
      icon: 'map',
      title: 'Interactive Visualization',
      description: 'Beautiful heat maps and interactive dashboards for easy decision making',
      details: ['Real-time heat maps', 'Driver positioning maps', 'Performance dashboards']
    },
    {
      icon: 'zap',
      title: 'Real-time API',
      description: 'FastAPI service provides instant recommendations and predictions',
      details: ['Sub-second response time', 'RESTful API endpoints', 'Scalable architecture']
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Our comprehensive solution combines cutting-edge machine learning algorithms 
            with intuitive visualization tools
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-up">
              <div className="feature-icon">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon === 'target' && <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}
                  {feature.icon === 'brain' && <><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></>}
                  {feature.icon === 'shield-alert' && <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></>}
                  {feature.icon === 'database' && <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></>}
                  {feature.icon === 'map' && <><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></>}
                  {feature.icon === 'zap' && <><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></>}
                </svg>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <div className="cta-content">
            <h3>Ready to optimize your driver positioning?</h3>
            <p>Get started with our AI-powered solution today</p>
            <div className="cta-actions">
              <a href="#demo" className="btn btn-primary">View Live Demo</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
