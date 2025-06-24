import React, { useState, useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null, // use viewport as root
      rootMargin: '-100px 0px 0px 0px', // trigger slightly before element enters viewport
      threshold: 0.1, // trigger when 10% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShowHeader(true);
      } else if (window.scrollY < 100) {
        // Only hide header when scrolled to top (near Hero)
        setShowHeader(false);
      }
    }, options);
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero at the top without header */}
      <Hero />
      
      {/* Header that appears when scrolling to About */}
      <div 
        className="sticky top-0 z-50 transition-transform duration-300" 
        style={{ 
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
   
      </div>
      
      {/* About section with ref */}
      <div ref={aboutRef}>
        <About />
      </div>
      
      {/* Remaining sections */}
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
