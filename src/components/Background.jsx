import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';

export default function Background({ children }) {
  const images = [bg1, bg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {images.map((bg, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${bg})` }}
          className={`fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0 transition-opacity duration-1000 laptop:bg-50 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};