import React, { useState, useEffect } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '66px' }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <i className="bi bi-arrow-up" />
        </button>
      )}
    </>
  );
};

export default App;
