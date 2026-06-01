import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>athenaInstitute</h2>
          <p className="desktop-desc">
            Advancing the research, science, and data behind the future of healthcare ecosystems.
          </p>
          <p className="mobile-desc">
            Bridging the gap between raw medical data and transformative healthcare insights through expert analysis.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>
              <span className="desktop-title">SECTIONS</span>
              <span className="mobile-title">PLATFORM</span>
            </h3>
            <ul>
              <li><a href="#">Perspectives</a></li>
              <li><a href="#">Research</a></li>
              <li className="desktop-only"><a href="#">Events</a></li>
              <li><a href="#">Innovation</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>LEGAL</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li className="desktop-only"><a href="#">Terms of Service</a></li>
              <li className="mobile-only"><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="link-column connect-column desktop-only">
            <h3>CONNECT</h3>
            <div className="social-icons">
              <button aria-label="Share">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
              <button aria-label="Email">
                <span className="at-symbol">@</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 athenaInstitute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
