import { useState, useRef, useEffect } from 'react';
import { articlesData } from '../../constants/articles';
import './SearchFilterBar.scss';

const TopicsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L11.5 8H4.5L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="3" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="11" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const SpecialtiesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2H10L14 6V13C14 13.5523 13.5523 14 13 14H4C3.44772 14 3 13.5523 3 13V3C3 2.44772 3.44772 2 4 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 2V6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5.5 12C5.5 10.6193 6.61929 9.5 8 9.5C9.38071 9.5 10.5 10.6193 10.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const formatCase = (str) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  selectedTopic,
  setSelectedTopic,
  selectedSpecialty,
  setSelectedSpecialty,
  activeChip,
  setActiveChip
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const dropdownRef = useRef(null);

  // Extract unique categories (for Topics) and tags (for Specialties), excluding 'insight' items
  const regularArticles = articlesData.filter(item => item.type !== 'insight');
  const categories = [...new Set(regularArticles.map(item => item.category).filter(Boolean))].map(formatCase);
  const tags = [...new Set(regularArticles.map(item => item.tag).filter(Boolean))].map(formatCase);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (type, value) => {
    if (type === 'topic') {
      setSelectedTopic(value);
    } else {
      setSelectedSpecialty(value);
    }
    setActiveDropdown(null);
  };

  return (
    <div className="search-filter-wrapper">
      <div className="search-filter-container" ref={dropdownRef}>
        {/* Desktop View */}
        <div className="search-filter-desktop">
          <div className="dropdown" onClick={() => toggleDropdown('topics')}>
            <TopicsIcon />
            <div className="dropdown-label">
              <span>{selectedTopic}</span>
              <ChevronDown />
            </div>
            {activeDropdown === 'topics' && (
              <div className="dropdown-menu">
                <div 
                  className={`dropdown-item ${selectedTopic === 'All Topics' ? 'selected' : ''}`}
                  onClick={(e) => { e.stopPropagation(); selectOption('topic', 'All Topics'); }}
                >
                  All Topics
                </div>
                {categories.map(cat => (
                  <div 
                    key={cat} 
                    className={`dropdown-item ${selectedTopic === cat ? 'selected' : ''}`}
                    onClick={(e) => { e.stopPropagation(); selectOption('topic', cat); }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="divider"></div>
          
          <div className="dropdown" onClick={() => toggleDropdown('specialties')}>
            <SpecialtiesIcon />
            <div className="dropdown-label">
              <span>{selectedSpecialty}</span>
              <ChevronDown />
            </div>
            {activeDropdown === 'specialties' && (
              <div className="dropdown-menu">
                <div 
                  className={`dropdown-item ${selectedSpecialty === 'All Specialties' ? 'selected' : ''}`}
                  onClick={(e) => { e.stopPropagation(); selectOption('specialty', 'All Specialties'); }}
                >
                  All Specialties
                </div>
                {tags.map(tag => (
                  <div 
                    key={tag} 
                    className={`dropdown-item ${selectedSpecialty === tag ? 'selected' : ''}`}
                    onClick={(e) => { e.stopPropagation(); selectOption('specialty', tag); }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="divider"></div>

          <div className="search-input-container">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search insights, research, or authors..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="apply-btn">Apply Filters</button>
        </div>

        {/* Mobile View */}
        <div className="search-filter-mobile">
          <button 
            className={`chip ${activeChip === 'All' ? 'active' : ''}`}
            onClick={() => setActiveChip('All')}
          >
            All
          </button>
          {tags.map(tag => (
            <button 
              key={tag}
              className={`chip ${activeChip === tag ? 'active' : ''}`}
              onClick={() => setActiveChip(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFilterBar;
