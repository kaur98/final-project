// Rajveer kaur 8871247
import React from 'react';
import { TrendingUp, Clock, MapPin } from 'lucide-react';
import '../../css/tours/ToursSection.css';

// Array of tour data to be displayed
const tours = [
  {
    id: 1,
    title: 'A Trip to the Bahamas and the Caribbean Ocean',
    image: require('../../images/tour1.avif'),
    type: 'Beachfront',
    price: 99,
    duration: '7 DAYS TOUR',
    location: 'AFRICA',
    trending: true,
  },
  {
    id: 2,
    title: 'Cruise to the Mariana Trench and the Philippines',
    image: require('../../images/tour2.avif'),
    type: 'Cruise',
    price: 169,
    duration: '15 DAYS TOUR',
    location: 'AUS',
    trending: true,
  },
  {
    id: 3,
    title: 'Maldives Tour, Beach Party, Private Villa',
    image: require('../../images/tour3.jpg'),
    type: 'Beach',
    price: 299,
    duration: '5 DAYS TOUR',
    location: 'Maldives',
    trending: true,
  },
];

const ToursSection = () => {
  return (
    <section className="tours-section">
      <h2 className="hotels-title">Popular Tours</h2>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="tour-info">
              <div className="tour-header">
                <span className="tour-type">{tour.type}</span>
                <span className="tour-price">${tour.price} per day</span>
              </div>
              <h3 className="tour-title">{tour.title}</h3>
              <div className="tour-details">
                {tour.trending && (
                  <span className="tour-trending">
                    <TrendingUp size={16} />
                    TRENDING
                  </span>
                )}
                <span className="tour-duration">
                  <Clock size={16} />
                  {tour.duration}
                </span>
                <span className="tour-location">
                  <MapPin size={16} />
                  {tour.location}
                </span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
