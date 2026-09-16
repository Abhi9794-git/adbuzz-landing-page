import React from 'react';
import { TELEGRAM_URL } from '../config';

export default function TelegramButton() {
  const handleClick = (e) => {
    // If user clicks, open in current tab on mobile/standard window or follow anchor href
    // We provide standard anchor semantics for maximum accessibility, SEO, and device compatibility
  };

  return (
    <div className="cta-section">
      <a
        href={TELEGRAM_URL}
        className="telegram-cta-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join AdBuzz Telegram Community (opens in a new tab)"
        onClick={handleClick}
      >
        {/* Traveling outer border beam & soft halo */}
        <span className="btn-border-glow" aria-hidden="true" />
        <span className="btn-border-beam" aria-hidden="true" />

        {/* Crisp stationary content */}
        <span className="btn-inner-content">
          <svg
            className="telegram-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21.92 3.62c-.22-.2-.53-.27-.82-.18L2.6 9.87c-.36.12-.6.44-.61.82-.01.38.22.71.58.85l5.22 2.06 1.96 5.88c.11.33.39.57.73.61h.11c.28 0 .54-.12.72-.32l2.84-3.13 4.97 3.68c.24.18.54.23.82.13.28-.1.49-.33.56-.62l3.48-15.5c.07-.31-.03-.63-.25-.83zM9.44 13.06l8.36-6.69-6.84 8.01-.32 2.92-1.2-3.61v-.63z"
              fill="currentColor"
            />
          </svg>
          <span>JOIN TELEGRAM</span>
        </span>
      </a>
      <span className="cta-subtext">Quick and easy access</span>
    </div>
  );
}
