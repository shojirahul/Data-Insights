
import FeaturedResearchCard from '../FeaturedResearchCard/FeaturedResearchCard';
import PerspectiveSpotlightCard from '../PerspectiveSpotlightCard/PerspectiveSpotlightCard';
import './CardsSection.scss';

function CardsSection() {
  return (
    <section className="cards-section">
      <div className="cards-container">
        <FeaturedResearchCard />
        <PerspectiveSpotlightCard />
      </div>
    </section>
  );
}

export default CardsSection;
