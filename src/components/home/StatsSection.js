// Pawan Gajjar 8890300
import React from 'react';
import '../../css/home/StatsSection.css';

const StatsSection = () => {
  return (
    <section className="hotel-hero">
      <div className="hotel-hero-container">
        <div className="hotel-hero-image">
          <img
            src={require('../../images/stats-section.avif')}
            alt="Beachfront hotel apartments"
            className="hotel-hero-img"
          />
        </div>
        <div className="hotel-hero-content">
          <h1 className="hotel-hero-title">We have the best service.</h1>
          <p className="hotel-hero-description">
            We are a leading global hotel company with over 30 years of
            experience providing exceptional hospitality. Our dedicated staff
            are committed to delivering top-notch service and amenities to
            ensure all guests have a memorable stay.
          </p>
          <div className="hotel-hero-stats">
            <div className="hotel-hero-stat">
              <span className="hotel-hero-stat-number">192</span>
              <span className="hotel-hero-stat-label">Countries</span>
            </div>
            <div className="hotel-hero-stat">
              <span className="hotel-hero-stat-number">479</span>
              <span className="hotel-hero-stat-label">Hotels</span>
            </div>
            <div className="hotel-hero-stat">
              <span className="hotel-hero-stat-number">2093</span>
              <span className="hotel-hero-stat-label">Rooms</span>
            </div>
            <div className="hotel-hero-stat">
              <span className="hotel-hero-stat-number">10347</span>
              <span className="hotel-hero-stat-label">Workers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
