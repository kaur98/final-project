// Pawan Gajjar 8890300
import React from 'react';
import '../../css/home/HeroSection.css';
import Navbar from '../Navbar';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="container">
        <div className="home-hero-content">
          <div className="home-hero-left">
            <h1 className="home-hero-title">
              Find Perfect Hotels
              <span className="home-hero-title-highlight">
                anywhere you go.
              </span>
            </h1>
            <p className="home-hero-description">
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
            <div className="home-hero-buttons">
              <button className="home-hero-button home-hero-button-primary">
                Sign Up
              </button>
              <button className="home-hero-button home-hero-button-secondary">
                Search Hotels
              </button>
            </div>
          </div>
          <div className="home-hero-right">
            <img
              src={require('../../images/hero-image.avif')}
              alt="Luxury hotel pool"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
