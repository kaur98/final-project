// Pawan Gajjar 8890300
import React from 'react';
import { Shield, Headphones, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../css/home/FeatureSection.css';

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Shield className="feature-icon" />
          </div>
          <h3 className="feature-title">Secure</h3>

          <p className="feature-description">
            We ensure all sensitive data is securely encrypted and transmitted
            using robust SSL certificates.
          </p>

          <Link className="feature-link">
            Learn More <span className="feature-arrow">→</span>
          </Link>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Headphones className="feature-icon" />
          </div>
          <h3 className="feature-title">24/7 Support</h3>

          <p className="feature-description">
            Our friendly support agents are available 24/7 to assist with any
            issues via phone, email or live chat.
          </p>

          <Link className="feature-link">
            Learn More <span className="feature-arrow">→</span>
          </Link>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Sliders className="feature-icon" />
          </div>
          <h3 className="feature-title">Customizable</h3>

          <p className="feature-description">
            Easily customize every aspect of your account from billing options
            to product selections.
          </p>

          <Link className="feature-link">
            Learn More <span className="feature-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
