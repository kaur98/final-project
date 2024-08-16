// Rajveer kaur 8871247
import React from 'react';
import { Mail, Facebook, Twitter, Youtube } from 'lucide-react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter subscription section */}
      <div className="footer-newsletter-div">
        <div className="footer-newsletter container">
          <div className="newsletter-content">
            <Mail className="newsletter-icon" />
            <div className="newsletter-text">
              <h2>Newsletter</h2>
              <p>Subscribe now to get our latest blog posts.</p>
            </div>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
      {/* Main footer content with navigation and social media links */}
      <div className="footer-main">
        <div className="footer-logo">
          {/* Logo section */}
          <span className="logo-icon">V</span>
          <span className="logo-text">Tours</span>
        </div>

        <nav className="footer-nav">
          {' '}
          {/* Navigation links */}
          <Link to="/home">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        <div className="footer-social">
          {' '}
          {/* Social media icons */}
          <Facebook />
          <Twitter />
          <Youtube />
        </div>

        {/* Copyright information */}
        <p className="footer-copyright">
          © Copyright 2020, V Tours Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
