import React from 'react';
import Header from './components/Header';
import CommunityBadge from './components/CommunityBadge';
import Hero from './components/Hero';
import TelegramButton from './components/TelegramButton';
import FeatureCard from './components/FeatureCard';
import CommunityCard from './components/CommunityCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Subtle ambient lighting layers */}
      <div className="ambient-glow-top" aria-hidden="true" />
      <div className="ambient-glow-bottom" aria-hidden="true" />

      {/* Main layout container */}
      <div className="app-container">
        <Header />
        <main>
          <CommunityBadge />
          <Hero />
          <TelegramButton />
          <FeatureCard />
          <CommunityCard />
        </main>
        <Footer />
      </div>
    </>
  );
}
