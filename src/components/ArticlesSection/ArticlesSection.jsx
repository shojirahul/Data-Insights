import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import ArticleCard from '../ArticleCard/ArticleCard';
import QuickInsightCard from '../QuickInsightCard/QuickInsightCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import { articlesData } from '../../constants/articles';
import './ArticlesSection.scss';


function ArticlesSection({ searchQuery, selectedTopic, selectedSpecialty, activeChip, isSearching }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const filteredArticles = useMemo(() => {
    let result = articlesData;

    if (selectedTopic && selectedTopic !== 'All Topics') {
      result = result.filter(item => item.category?.toUpperCase() === selectedTopic.toUpperCase());
    }
    if (selectedSpecialty && selectedSpecialty !== 'All Specialties') {
      result = result.filter(item => item.tag?.toUpperCase() === selectedSpecialty.toUpperCase());
    }
    if (activeChip && activeChip !== 'All') {
      result = result.filter(item => item.tag?.toUpperCase() === activeChip.toUpperCase());
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const fuse = new Fuse(result, {
        keys: [
          { name: 'title', weight: 0.5 },
          { name: 'description', weight: 0.3 },
          { name: 'tag', weight: 0.1 },
          { name: 'category', weight: 0.1 }
        ],
        threshold: 0.4
      });
      result = fuse.search(searchQuery).map(res => res.item);
    }

    return result;
  }, [searchQuery, selectedTopic, selectedSpecialty, activeChip]);

  const [renderCount, setRenderCount] = useState(6);

  const handleToggle = () => {
    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setRenderCount(6);
        setIsExpanded(false);
      }, 400); // 400ms duration
    } else {
      setRenderCount(filteredArticles.length);
      setIsExpanded(true);
    }
  };

  return (
    <section className={`articles-section ${isSearching ? 'has-search-padding' : ''}`}>
      {filteredArticles.length === 0 ? (
        <div className="no-results">
          <p>0 items found matching your search.</p>
        </div>
      ) : (
        <>
          <div className="articles-container">
            {filteredArticles.slice(0, renderCount).map((article, index) => {
          const isExtra = index >= 6;
          const animationClass = isExtra ? (isClosing ? 'closing' : 'opening') : '';
          
          let content;
          if (article.type === 'insight') {
            content = (
              <QuickInsightCard
                tag={article.tag}
                title={article.title}
                metrics={article.metrics}
                linkText={article.linkText}
              />
            );
          } else {
            content = (
              <ArticleCard
                tag={article.tag}
                date={article.date}
                category={article.category}
                title={article.title}
                description={article.description}
                image={article.image}
                linkText={article.linkText}
              />
            );
          }

          return (
            <div 
              key={article.id} 
              className={`article-wrapper ${animationClass} ${article.type === 'insight' ? 'insight-wrapper' : ''}`}
            >
              {content}
            </div>
          );
        })}
          </div>
          {filteredArticles.length > 6 && (
            <LoadMoreButton 
              isExpanded={isExpanded} 
              onClick={handleToggle} 
            />
          )}
        </>
      )}
    </section>
  );
}

export default ArticlesSection;
