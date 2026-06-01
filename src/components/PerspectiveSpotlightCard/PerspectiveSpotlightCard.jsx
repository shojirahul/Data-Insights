
import helenaImg from '../../assets/helena-vance.png';
import './PerspectiveSpotlightCard.scss';

function PerspectiveSpotlightCard() {
  return (
    <div className="card perspective-spotlight-card">
      <div className="card-content">
        <span className="spotlight-tag">Perspective Spotlight</span>
        <blockquote className="quote-text">
          "Data is the scalpel of the 21st century. Precision matters more than volume."
        </blockquote>
        <div className="author-profile">
          <div className="avatar-wrapper">
            <img src={helenaImg} alt="Dr. Helena Vance" className="avatar-image" />
          </div>
          <div className="author-details">
            <h4 className="author-name">Dr. Helena Vance</h4>
            <p className="author-title">Chief Medical Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerspectiveSpotlightCard;
