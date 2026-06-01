import './ArticleCard.scss';

function ArticleCard({ tag, date, category, title, description, image, linkText }) {
  return (
    <div className="article-card">
      <div className="article-card-image-wrapper">
        <img src={image} alt={title} className="article-card-image" />
        {tag && <div className="article-card-tag">{tag}</div>}
      </div>
      <div className="article-card-content">
        <div className="article-card-meta">
          <span className="article-card-date">{date}</span>
          <span className="article-card-dot">&bull;</span>
          <span className="article-card-category">{category}</span>
        </div>
        <h3 className="article-card-title">{title}</h3>
        <p className="article-card-description">{description}</p>
        
        <a href="#" className="article-card-link">
          {linkText || 'Read Analysis'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="article-card-link-icon">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
