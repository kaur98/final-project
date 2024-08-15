// Rajveer kaur 8871247
import React from 'react';
import { Shield, Headset, Compass, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../css/AboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <section className="about-us-hero">
          <div className="about-us-content">
            <h1 className="about-us-title">
              <span className="about-us-title-main">Discover Our Story</span>
              <span className="about-us-title-sub">at Treact Hotels</span>
            </h1>
            <p className="about-us-description">
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
            <div className="about-us-cta">
              <button className="about-us-button primary">Learn More</button>
              <button className="about-us-button secondary">
                Our Locations
              </button>
            </div>
          </div>
          <div className="about-us-image">
            <img src={require('../images/team.jpg')} alt="Luxury hotel pool" />
          </div>
        </section>

        <section className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional hospitality and create unforgettable
            experiences for our guests in every corner of the world.
          </p>
        </section>

        <section className="about-us-values">
          <h2>Our Values</h2>
          <div className="about-us-values-grid">
            <div className="about-us-value-item">
              <div className="about-us-value-icon">
                <Headset />
              </div>
              <h3>Customer Service Excellence</h3>
              <p>
                We are fully dedicated to providing the best possible customer
                experience
              </p>
              <Link className="about-us-learn-more">Learn More →</Link>
            </div>
            <div className="about-us-value-item">
              <div className="about-us-value-icon">
                <Shield />
              </div>
              <h3>Integrity in All We Do</h3>
              <p>
                We conduct all business with integrity, honesty and transparency
              </p>
              <Link className="about-us-learn-more">Learn More →</Link>
            </div>
            <div className="about-us-value-item">
              <div className="about-us-value-icon">
                <Compass />
              </div>
              <h3>Passion for Discovery</h3>
              <p>
                All of us at V Tours share a profound love for travel and
                experiencing new places
              </p>
              <Link className="about-us-learn-more">Learn More →</Link>
            </div>
          </div>
        </section>

        <section className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="about-us-team-grid">
            <div className="about-us-team-member">
              <img
                src={require('../images/members/member3.jpg')}
                alt="Team Member 1"
              />
              <h3>Emily</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="about-us-team-member">
              <img
                src={require('../images/members/member1.webp')}
                alt="Team Member 2"
              />
              <h3>David</h3>
              <p>Head of Operations</p>
            </div>
            <div className="about-us-team-member">
              <img
                src={require('../images/members/member4.webp')}
                alt="Team Member 3"
              />
              <h3>Jane</h3>
              <p>Customer Experience Manager</p>
            </div>
            <div className="about-us-team-member">
              <img
                src={require('../images/members/member2.jpg')}
                alt="Team Member 4"
              />
              <h3>John</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </section>

        <section className="about-us-testimonials">
          <h2>What Our Guests Say</h2>
          <div className="about-us-testimonials-grid">
            <div className="about-us-testimonial">
              <div className="about-us-testimonial-stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>
                "An unforgettable experience! The staff went above and beyond to
                make our stay perfect."
              </p>
              <h4>Sarah L.</h4>
            </div>
            <div className="about-us-testimonial">
              <div className="about-us-testimonial-stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>
                "Luxurious accommodations and world-class service. We'll
                definitely be returning!"
              </p>
              <h4>Mark R.</h4>
            </div>
            <div className="about-us-testimonial">
              <div className="about-us-testimonial-stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>
                "The attention to detail in every aspect of our stay was truly
                impressive."
              </p>
              <h4>Jessica T.</h4>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
