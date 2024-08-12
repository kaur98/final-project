// Rajveer kaur 8871247
import React from 'react';
import Navbar from '../components/Navbar';
import HotelsSection from '../components/tours/HotelsSection';
import ToursSection from '../components/tours/ToursSection';
import Footer from '../components/Footer';

export default function ToursPage() {
  return (
    <div>
      <Navbar />
      <HotelsSection />
      <ToursSection />
      <Footer />
    </div>
  );
}
