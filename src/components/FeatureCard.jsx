import React from 'react';

const FEATURES = [
  {
    id: 'fast-updates',
    title: 'Fast Updates',
    description: 'Important community updates in one convenient place.',
    iconColor: '#F59E0B', // Crisp amber-gold for lightning like reference
    iconBg: 'rgba(245, 158, 11, 0.12)',
    iconBorder: 'rgba(245, 158, 11, 0.25)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'useful-content',
    title: 'Useful Content',
    description: 'Curated information designed to keep you informed.',
    iconColor: '#A855F7', // Crisp purple/indigo accent like reference
    iconBg: 'rgba(168, 85, 247, 0.12)',
    iconBorder: 'rgba(168, 85, 247, 0.25)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'simple-access',
    title: 'Simple Access',
    description: 'Easy access to the latest community content.',
    iconColor: '#38BDF8', // Crisp cyan/electric blue
    iconBg: 'rgba(56, 189, 248, 0.12)',
    iconBorder: 'rgba(56, 189, 248, 0.25)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function FeatureCard() {
  return (
    <section className="feature-cards-stack" aria-label="Community Features">
      {FEATURES.map((feature) => (
        <article key={feature.id} className="feature-card">
          <div
            className="feature-icon-container"
            style={{
              color: feature.iconColor,
              backgroundColor: feature.iconBg,
              borderColor: feature.iconBorder,
            }}
            aria-hidden="true"
          >
            {feature.icon}
          </div>
          <div className="feature-content">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-desc">{feature.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
