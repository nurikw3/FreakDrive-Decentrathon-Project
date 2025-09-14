import React, { useState } from 'react';
import './HeatMap.css';

const HeatMap: React.FC = () => {
  const [selectedInfo, setSelectedInfo] = useState<any>(null);

  const infoItems = [
    {
      id: 'heatmap',
      icon: (
        <>
          <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/>
          <path d="M15 5.764v15"/>
          <path d="M9 3.236v15"/>
        </>
      ),
      title: 'Interactive Heat Map',
      description: 'Advanced Leaflet map with demand intensity visualization, layer controls for different data types, and full-screen mode for detailed analysis. The heat map uses color gradients to show demand density across different areas of the city.'
    },
    {
      id: 'clusters',
      icon: (
        <>
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </>
      ),
      title: 'Pickup Clusters',
      description: '46 optimized pickup zones identified using DBSCAN clustering algorithm. Each cluster includes density analysis, mini-map navigation for quick location finding, and integrated geocoding search functionality for address-based queries.'
    },
    {
      id: 'anomaly',
      icon: (
        <>
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </>
      ),
      title: 'Anomaly Detection',
      description: 'Real-time safety monitoring system with detailed trip analysis and interactive warning markers. Uses Isolation Forest algorithm to detect unusual patterns in trip data, helping identify potential safety issues or fraudulent activities.'
    },
    {
      id: 'recommendations',
      icon: (
        <>
          <path d="M8 22V12l4-10 4 10v10z"/>
          <path d="M16 18h-8"/>
          <path d="M12 2v10"/>
        </>
      ),
      title: 'Driver Recommendations',
      description: 'AI-powered positioning system with priority levels, demand forecasts, and measurement tools. Provides optimal driver placement suggestions based on historical data, current demand patterns, and predictive analytics to maximize efficiency.'
    }
  ];

  const featureItems = [
    {
      id: 'analytics',
      icon: (
        <>
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </>
      ),
      title: 'Key Analytics Results',
      description: '• 1.2M+ GPS points processed from real ride data\n• 93.7% accuracy in demand prediction using Random Forest\n• 46 pickup clusters identified for optimal coverage\n• 5% anomaly rate detected for enhanced safety'
    },
    {
      id: 'features',
      icon: (
        <>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
          <circle cx="12" cy="12" r="3"/>
        </>
      ),
      title: 'Advanced Map Features',
      description: '• Layer Controls - Toggle heat maps, clusters, and markers\n• Measurement Tools - Distance and area calculations\n• Geocoding Search - Find locations by address\n• Full-screen Mode - Immersive map experience\n• Mini-map Navigation - Overview and quick navigation\n• Interactive Popups - Detailed data on click'
    }
  ];

  return (
    <section className="heatmap section" id="heatmap">
      <div className="container">
        <div className="heatmap-header">
          <h2 className="section-title">Interactive Heat Map</h2>
          <p className="section-subtitle">
            Explore our AI-powered demand prediction and driver positioning system 
            with real-time data visualization from Astana, Kazakhstan.
          </p>
        </div>

        <div className="heatmap-container">
          <div className="map-wrapper-full">
            <div className="map-controls">
              <h3>Advanced Interactive Map - Astana City</h3>
              <p>Full-featured map with layer controls, measurement tools, geocoding, and mini-map</p>
            </div>
            <div className="map-frame">
              <iframe
                src="/advanced_heatmap.html"
                title="FreakDrive Advanced Heat Map"
                width="100%"
                height="700"
                frameBorder="0"
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>

        <div className="heatmap-info-bottom">
          <div className="info-grid">
            {infoItems.map((item) => (
              <div 
                key={item.id}
                className="info-item-compact" 
                onClick={() => setSelectedInfo(item)}
              >
                <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="map-legend">
            <div className="legend-item">
              <span className="legend-color heat"></span>
              <span>Heat Map Layer</span>
            </div>
            <div className="legend-item">
              <span className="legend-color cluster"></span>
              <span>Pickup Clusters</span>
            </div>
            <div className="legend-item">
              <span className="legend-color anomaly"></span>
              <span>Anomaly Markers</span>
            </div>
            <div className="legend-item">
              <span className="legend-color recommendation"></span>
              <span>Driver Positions</span>
            </div>
            <div className="legend-item">
              <span className="legend-color controls"></span>
              <span>Interactive Controls</span>
            </div>
          </div>
        </div>

        <div className="heatmap-features">
          {featureItems.map((item) => (
            <div 
              key={item.id}
              className="feature-highlight-compact" 
              onClick={() => setSelectedInfo(item)}
            >
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedInfo && (
          <div className="modal-overlay" onClick={() => setSelectedInfo(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <svg className="modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {selectedInfo.icon}
                </svg>
                <h3>{selectedInfo.title}</h3>
                <button className="modal-close" onClick={() => setSelectedInfo(null)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description">
                  {selectedInfo.description.split('\n').map((line: string, index: number) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeatMap;
