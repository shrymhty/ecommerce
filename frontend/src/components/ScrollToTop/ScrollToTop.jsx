import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-to-top-wrapper"
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(tomato ${scrollProgress}%, #ddd ${scrollProgress}%)`
      }}
    >
      <div className="scroll-to-top">↑</div>
    </div>
  );
};

export default ScrollToTop;