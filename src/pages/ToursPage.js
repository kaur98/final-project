// Rajveer kaur 8871247
import React from 'react';
import Layout from '../components/Layout'; // Layout component provides a consistent page structure
import HotelsSection from '../components/tours/HotelsSection'; // Section for displaying hotels
import ToursSection from '../components/tours/ToursSection'; // Section for displaying tours

export default function ToursPage() {
  return (
    <Layout>
      <HotelsSection />
      <ToursSection />
    </Layout>
  );
}
