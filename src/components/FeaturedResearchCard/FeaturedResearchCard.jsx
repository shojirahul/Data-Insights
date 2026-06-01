
import burnoutImg from '../../assets/burnout-index.png';
import './FeaturedResearchCard.scss';
import SegmentedProgress from '../SegmentedProgress/SegmentedProgress';

function FeaturedResearchCard() {
  return (
    <div className="card featured-research-card">
      <div className="card-image-wrapper">
        <img src={burnoutImg} alt="Physician Burnout Index Study" className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="badge">FEATURED RESEARCH</span>
          <span className="read-time">8 min read</span>
        </div>
        <h2 className="card-title">
          The 2024 Physician Burnout Index: A Shift in Paradigms
        </h2>
        <p className="card-description">
          Our latest study uncovers the hidden correlation between administrative burden and care quality across 3,000 practices.
        </p>
        <div className="card-divider"></div>
        <div className="impact-factor-section">
          <SegmentedProgress value={68} />
          <div className="impact-text">
            <span className="impact-label">IMPACT FACTOR</span>
            <span className="impact-value">Increased Efficiency</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedResearchCard;
