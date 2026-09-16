import React from 'react';

export default function CommunityBadge() {
  return (
    <div className="badge-wrapper">
      <div className="community-pill-badge" role="status" aria-label="Official Community Status">
        <span className="badge-dot" aria-hidden="true" />
        <span className="badge-text">OFFICIAL COMMUNITY</span>
      </div>
    </div>
  );
}
