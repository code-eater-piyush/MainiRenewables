import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Mission from './pages/mission/Mission';
import Contact from './pages/contact/contact';
import Solutions from './pages/Solutions/solutions';
import PartnersPage from './pages/partners/partners';
import { useEffect } from 'react';
import Preloader from './components/preloader/preloader';
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".preloader").classList.add("fade-out");
      setTimeout(() => setLoading(false), 500); // Match fade-out duration
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    {loading ? (
      <Preloader/>
    ) : (
      <Router>
      <div>
        <Navbar toggleMenu={toggleMenu} />
        <Sidebar isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    ) }
    </>
  );
}

export default App;
