// Rajveer kaur 8871247
import React from 'react';
import Layout from '../components/Layout';
import HotelsSection from '../components/tours/HotelsSection';
import ToursSection from '../components/tours/ToursSection';

export default function ToursPage() {
  return (
    <Layout>
      <HotelsSection />
      <ToursSection />
    </Layout>
  );
}
