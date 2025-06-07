import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Testimonials />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <ScrollToTop />
        <Navbar />
        <main className="w-full bg-white pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-de-servicio" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
