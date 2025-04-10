import React, { useState, useEffect,  } from 'react';
import './home.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = [
    { id: 1, src: '/slide_1.png', alt: 'Slide 1' },
    { id: 2, src: '/slide_2.png', alt: 'Slide 2' },
    { id: 3, src: '/slide_3.png', alt: 'Slide 3' },
    { id: 4, src: '/slide_4.png', alt: 'Slide 4' },
  ];
  // const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]); // Add currentSlide as a dependency

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="slideshow-container">
      <div
        className={`slides ${isTransitioning ? 'transition' : ''}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;