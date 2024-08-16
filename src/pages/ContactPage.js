// Pavan Gajjar 8890300
import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../css/ContactPage.css';

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
    <Layout>
      <div className="cp-contact-us-container">
        <div className="cp-contact-us-content">
          {/* Contact form section */}
          <div className="cp-contact-form-section">
            <h1 className="cp-contact-title">Get in Touch</h1>
            <p className="cp-contact-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="cp-contact-form">
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
              <button type="submit" className="cp-submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Company information section */}
          <div className="cp-company-info-section">
            <h2 className="cp-info-title">Our Information</h2>
            <p className="cp-info-text">
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </p>
            <div className="cp-contact-details">
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

      {/* Map section showing the location */}
      <div className="cp-map-section">
        <h2 className="cp-map-title">Find Us</h2>
        <div className="cp-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.034580998311!2d-80.49335308451698!3d43.45015377912835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x9525f8e6df5f544b!2s110%20King%20St%20W%2C%20Kitchener%2C%20ON%20N2G%201A9%2C%20Canada!5e0!3m2!1sen!2sus!4v1628786998765!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="V Tours Location"
          ></iframe>
        </div>
      </div>

      {/* FAQ section */}
      <div className="cp-faq-section">
        <h2 className="cp-faq-title">Frequently Asked Questions</h2>
        <div className="cp-faq-container">
          <div className="cp-faq-item">
            <h3 className="cp-faq-question">What are your booking policies?</h3>
            <p className="cp-faq-answer">
              Our booking policies are flexible. We offer free cancellation up
              to 24 hours before check-in for most bookings. Please check the
              specific terms for each property when booking.
            </p>
          </div>
          <div className="cp-faq-item">
            <h3 className="cp-faq-question">Do you offer group discounts?</h3>
            <p className="cp-faq-answer">
              Yes, we offer group discounts for bookings of 10 rooms or more.
              Please contact our group reservations department for more
              information and rates.
            </p>
          </div>
          <div className="cp-faq-item">
            <h3 className="cp-faq-question">
              What amenities are included in the room rate?
            </h3>
            <p className="cp-faq-answer">
              Amenities vary by property, but generally include Wi-Fi, access to
              fitness facilities, and basic toiletries. Some properties may also
              offer complimentary breakfast or parking. Check the specific
              property details for a full list of included amenities.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
