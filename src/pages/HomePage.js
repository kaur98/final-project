// Pawan Gajjar 8890300
import React from 'react';
import Hero from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import QuestionsSection from '../components/home/QuestionsSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <StatsSection />
      <QuestionsSection />
    </div>
  );
}
