import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchFilterBar from './components/SearchFilterBar/SearchFilterBar'
import CardsSection from './components/CardsSection/CardsSection'
import ArticlesSection from './components/ArticlesSection/ArticlesSection'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [activeChip, setActiveChip] = useState('All');

  const isSearching = searchQuery.trim() !== '' || 
                      selectedTopic !== 'All Topics' || 
                      selectedSpecialty !== 'All Specialties' || 
                      activeChip !== 'All';

  return (
    <div className="app-wrapper">
      <div className="hero">
        <Navbar />

        <div className="hero-bg">
          <div className="blob blob-left"></div>
          <div className="blob blob-right"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge mobile-only">INSIGHT REPORT 2024</div>
          <h1 className="headline">
            <span className="mobile-only">Takeaways that are bringing <strong>cost clarity</strong> to care.</span>
            <span className="desktop-only">Takeaways that are bringing cost clarity to care</span>
          </h1>
          <p className="hero-description mobile-only">
            Deciphering complex healthcare data through rigorous editorial analysis and scientific modeling.
          </p>
          <button className="cta-button mobile-only">Explore Research <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button className="cta-button-desktop desktop-only">Receive insights</button>
          <p className="hero-volume desktop-only">VOLUME 24.03 &bull; DATA-DRIVEN PERSPECTIVES</p>
        </div>
      </div>
      <SearchFilterBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={setSelectedSpecialty}
        activeChip={activeChip}
        setActiveChip={setActiveChip}
      />
      {!isSearching && <CardsSection />}
      <ArticlesSection 
        searchQuery={searchQuery}
        selectedTopic={selectedTopic}
        selectedSpecialty={selectedSpecialty}
        activeChip={activeChip}
        isSearching={isSearching}
      />
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default App;
