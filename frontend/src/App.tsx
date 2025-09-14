import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import HeatMap from './components/HeatMap/HeatMap';
import Technology from './components/Technology/Technology';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HeatMap />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
