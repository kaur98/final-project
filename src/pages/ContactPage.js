// Pawan Gajjar 8890300
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/ContactPage.css';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you');
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-us-content">
          <div className="contact-form-section">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
          <div className="company-info-section">
            <h2 className="info-title">Our Information</h2>
            <p className="info-text">
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> contact@vtours.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (999) 999-9999
              </p>
              <p>
                <strong>Address:</strong> 110 King St., Kitchener, Ontario, CA
                N2G
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
