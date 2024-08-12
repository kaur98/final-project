// Pawan Gajjar 8890300
import React from 'react';
import Hero from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import QuestionsSection from '../components/home/QuestionsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <StatsSection />
      <QuestionsSection />
      <Footer />
    </div>
  );
}
