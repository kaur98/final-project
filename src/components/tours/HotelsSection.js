// Rajveer kaur 8871247
import React from 'react';
import {
  MapPin,
  DollarSign,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import '../../css/tours/HotelsSection.css';

// Array of hotel data to be displayed
const hotels = [
  {
    id: 1,
    name: 'Wyatt Residency',
    image: require('../../images/hotel1.avif'),
    rating: 4.8,
    location: 'Rome, Italy',
    price: 39,
    description:
      'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Soho Paradise',
    image: require('../../images/hotel2.avif'),
    rating: 4.9,
    location: 'Ibiza, Spain',
    price: 50,
    description:
      'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Hotel Baja',
    image: require('../../images/hotel3.avif'),
    rating: 5.0,
    location: 'Palo Alto, CA',
    price: 19,
    description:
      'Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.',
  },
];

const HotelsSection = () => {
  return (
    <section className="hotels-section">
      <h2 className="hotels-title">Popular Hotels</h2>
      <div className="hotels-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3 className="hotel-name">{hotel.name}</h3>
              <div className="hotel-rating">
                <Star className="star-icon" />
                <span>{hotel.rating}</span>
              </div>
              <div className="hotel-details">
                <p className="hotel-location">
                  <MapPin className="location-icon" />
                  {hotel.location}
                </p>
                <p className="hotel-price">
                  <DollarSign className="price-icon" />
                  USD {hotel.price}/Day
                </p>
              </div>
              <p className="hotel-description">{hotel.description}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button prev">
          <ChevronLeft />
        </button>
        <button className="nav-button next">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default HotelsSection;
