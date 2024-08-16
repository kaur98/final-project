// Pavan Gajjar 8890300
import React from 'react';
import Hero from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import QuestionsSection from '../components/home/QuestionsSection';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero section at the top of the homepage */}
      <Hero />

      {/* Section showcasing key features of the service */}
      <FeatureSection />

      {/* Section displaying various statistics or metrics */}
      <StatsSection />

      {/* Section addressing common questions or concerns */}
      <QuestionsSection />
    </Layout>
  );
}
