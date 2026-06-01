import './QuickInsightCard.scss';

function QuickInsightCard({ tag, title, metrics, linkText }) {
  return (
    <div className="quick-insight-card">
      <div className="quick-insight-card-inner">
        <div className="quick-insight-header">
          <span className="quick-insight-tag">{tag}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="quick-insight-icon">
            <path d="M16 7h6v6"/>
            <path d="m22 7-8.5 8.5-5-5L2 17"/>
          </svg>
        </div>
        
        <h3 className="quick-insight-title">{title}</h3>
        
        <div className="quick-insight-metrics">
          {metrics.map((metric, index) => (
            <div className="quick-insight-metric" key={index}>
              <span className="quick-insight-metric-label">{metric.label}</span>
              <span className="quick-insight-metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
        
        <a href="#" className="quick-insight-link">
          {linkText} 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default QuickInsightCard;
