import React, { useState, useEffect } from 'react';
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 300px from the top
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    
<BsFillArrowUpCircleFill className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop} color='black' fill={"gold"} size={30} style={{border:"2px solid white"}}/>

  );
};

export default ScrollToTopButton;
