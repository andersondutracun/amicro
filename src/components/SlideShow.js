import React, { useState, useEffect } from 'react';
import styles from './SlideShow.module.css';

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransitioning(false);
      }, 1000); // Tempo da transição
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className={styles.slideshowContainer}>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`${styles.slideshowImage} ${index === currentImageIndex ? styles.active : ''} ${transitioning ? styles.transitioning : ''}`}
        >
          <img src={imageUrl} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
