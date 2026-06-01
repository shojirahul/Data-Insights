import Navbar from './components/Navbar/Navbar'
import CardsSection from './components/CardsSection/CardsSection'
import './App.scss'

function App() {
  return (
    <div className="app-wrapper">
      <div className="hero">
        <Navbar />

        <div className="hero-bg">
          <div className="blob blob-left"></div>
          <div className="blob blob-right"></div>
        </div>
        <div className="hero-content">
          <h1 className="headline">
            Takeaways that are bringing<br />cost clarity to care
          </h1>
          <button className="cta-button">Receive insights</button>
          <p className="subtext">VOLUME 24.03 &bull; DATA-DRIVEN PERSPECTIVES</p>
        </div>
      </div>
      <CardsSection />
    </div>
  )
}

export default App;
