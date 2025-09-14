import React from 'react';
import './Stats.css';

const Stats: React.FC = () => {
  const stats = [
    {
      number: '1.2M+',
      label: 'GPS Points Processed',
      description: 'Analyzed over 1.2 million GPS tracking points from real rides'
    },
    {
      number: '93.7%',
      label: 'Model Accuracy',
      description: 'Random Forest model achieved 93.7% R² score in demand prediction'
    },
    {
      number: '46',
      label: 'Pickup Clusters',
      description: 'Identified 46 optimal pickup zones using DBSCAN clustering'
    },
    {
      number: '5%',
      label: 'Anomaly Detection',
      description: 'Successfully detected 5% anomalous trips for safety monitoring'
    }
  ];

  return (
    <section className="stats section" id="stats">
      <div className="stats-container">
        <div className="container">
          <div className="stats-header">
            <h2 className="section-title">Proven Results & Model Performance</h2>
            <p className="section-subtitle">
              Our AI-powered solution delivers measurable improvements with industry-leading accuracy
            </p>
          </div>

          <div className="stats-content">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card fade-in-up">
                  <div className="stat-number">{stat.number}</div>
                  <h3 className="stat-title">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
