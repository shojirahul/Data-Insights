import './LoadMoreButton.scss';

const LoadMoreButton = ({ isExpanded, onClick }) => {
  return (
    <button className="load-more-button" onClick={onClick}>
      {isExpanded ? 'Show Less Perspectives' : 'Load More Perspectives'}
      <svg
        className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.5L6 6.5L11 1.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default LoadMoreButton;
