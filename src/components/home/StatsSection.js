// Pavan Gajjar 8890300
import React from 'react';
import '../../css/home/StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-hero">
      <div className="stats-hero-container">
        <div className="stats-hero-image stats-animate-fade-in">
          <img
            src={require('../../images/stats-section.avif')}
            alt="Beachfront hotel apartments"
            className="stats-hero-img"
          />
        </div>
        <div className="stats-hero-content">
          <h1 className="stats-hero-title stats-animate-slide-in">
            We have the best service.
          </h1>
          <p className="stats-hero-description stats-animate-fade-in">
            We are a leading global hotel company with over 30 years of
            experience providing exceptional hospitality. Our dedicated staff
            are committed to delivering top-notch service and amenities to
            ensure all guests have a memorable stay.
          </p>
          <div className="stats-hero-stats">
            {[
              { number: '192', label: 'Countries' },
              { number: '479', label: 'Hotels' },
              { number: '2093', label: 'Rooms' },
              { number: '10347', label: 'Workers' },
            ].map((stat, index) => (
              <div
                key={index}
                className="stats-hero-stat stats-animate-pop-in"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <span className="stats-hero-stat-number">{stat.number}</span>
                <span className="stats-hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
