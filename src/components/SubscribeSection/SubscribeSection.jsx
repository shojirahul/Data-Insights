import React from 'react';
import './SubscribeSection.scss';

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      {/* Desktop Content */}
      <div className="subscribe-content desktop-only">
        <span className="eyebrow">CURATED KNOWLEDGE</span>
        <h2>Weekly briefs on the economics of empathy and the science of scale.</h2>
        <form className="subscribe-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
        <p className="disclaimer">
          By subscribing, you agree to our Privacy Policy and clinical data standards.
        </p>
      </div>

      {/* Mobile Content */}
      <div className="subscribe-content mobile-only">
        <h2>Stay at the forefront of healthcare.</h2>
        <p className="subtitle">
          Weekly insights delivered with clinical precision and editorial clarity.
        </p>
        <form className="subscribe-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
