import React from 'react';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-brand" aria-label="AdBuzz Home">
        <div className="brand-logo-mark" aria-hidden="true">
          <span className="brand-logo-text">AB</span>
        </div>
        <span className="brand-name">AdBuzz</span>
      </div>

      <div className="header-status" aria-label="Status: Community Active">
        <span className="status-glow-dot" aria-hidden="true" />
        <span className="status-text">COMMUNITY</span>
      </div>
    </header>
  );
}
