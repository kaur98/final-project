// Pavan Gajjar 8890300
import React from 'react';
import '../../css/home/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="home-hero-content">
          <div className="home-hero-left">
            {/* Main heading and description for the hero section */}
            <h1 className="home-hero-title animate-fade-in">
              Find Perfect Hotels
              <span className="home-hero-title-highlight animate-slide-in">
                anywhere you go.
              </span>
            </h1>
            <p className="home-hero-description animate-fade-in">
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
            <div className="home-hero-buttons">
              <button className="home-hero-button home-hero-button-primary animate-pop-in">
                Sign Up
              </button>
              <button className="home-hero-button home-hero-button-secondary animate-pop-in">
                Search Hotels
              </button>
            </div>
          </div>
          <div className="home-hero-right">
            {/* Hero image illustrating the service */}
            <img
              src={require('../../images/hero-image.avif')}
              alt="Hotel"
              className="home-hero-image animate-slide-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
